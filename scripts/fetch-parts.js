import Airtable from 'airtable';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

// Load environment variables
dotenv.config();

// Get directory paths (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validate required environment variables
const requiredEnvVars = [
  'AIRTABLE_API_KEY',
  'AIRTABLE_BASE_ID',
  'AIRTABLE_TABLE_ID',
  'AIRTABLE_FIELD_SKU',
  'AIRTABLE_FIELD_REFDES',
  'AIRTABLE_FIELD_ITEM_NAME',
  'AIRTABLE_FIELD_QTY',
  'AIRTABLE_FIELD_MANUAL_STEP',
  'AIRTABLE_FIELD_MARKINGS',
  'AIRTABLE_FIELD_IMAGE',
  'AIRTABLE_FIELD_KIT_SKU'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingVars.forEach(varName => console.error(`   - ${varName}`));
  console.error('\nPlease create a .env file based on .env.example');
  process.exit(1);
}

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_ID);

// Field ID mappings
const FIELDS = {
  SKU: process.env.AIRTABLE_FIELD_SKU,
  KIT_SKU: process.env.AIRTABLE_FIELD_KIT_SKU,
  REFDES: process.env.AIRTABLE_FIELD_REFDES,
  ITEM_NAME: process.env.AIRTABLE_FIELD_ITEM_NAME,
  QTY: process.env.AIRTABLE_FIELD_QTY,
  MANUAL_STEP: process.env.AIRTABLE_FIELD_MANUAL_STEP,
  MARKINGS: process.env.AIRTABLE_FIELD_MARKINGS,
  IMAGE: process.env.AIRTABLE_FIELD_IMAGE
};

// Load previous cache if it exists
function loadPreviousCache() {
  const cacheFilePath = path.join(__dirname, '..', '_data', 'partsCache.json');
  if (fs.existsSync(cacheFilePath)) {
    try {
      const cacheContent = fs.readFileSync(cacheFilePath, 'utf8');
      return JSON.parse(cacheContent);
    } catch (error) {
      console.warn('⚠️  Could not load previous cache:', error.message);
      return null;
    }
  }
  return null;
}

// Download image from URL to local file
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Check if image needs to be downloaded based on modification date
function needsDownload(sku, airtableModified, previousCache) {
  if (!previousCache || !previousCache.data) {
    return true; // No previous cache, download everything
  }

  // Look through all SKUs and steps to find this image
  for (const cachedSku in previousCache.data) {
    for (const step in previousCache.data[cachedSku]) {
      const parts = previousCache.data[cachedSku][step];
      for (const part of parts) {
        if (part.sku === sku && part.imageModified) {
          // Compare timestamps
          const cachedDate = new Date(part.imageModified);
          const airtableDate = new Date(airtableModified);
          return airtableDate > cachedDate;
        }
      }
    }
  }

  return true; // Not found in cache, download
}

async function fetchPartsData() {
  console.log('🔄 Fetching parts data from Airtable...');

  const partsData = {};
  let recordCount = 0;
  let imagesDownloaded = 0;
  let imagesSkipped = 0;
  let imagesFailed = 0;

  // Load previous cache for comparison
  const previousCache = loadPreviousCache();

  // Ensure assets/parts directory exists
  const partsDir = path.join(__dirname, '..', 'assets', 'parts');
  if (!fs.existsSync(partsDir)) {
    fs.mkdirSync(partsDir, { recursive: true });
    console.log('📁 Created assets/parts directory');
  }

  try {
    // Fetch records from Airtable
    // returnFieldsByFieldId: true returns fields by ID instead of name
    // cellFormat: 'string' returns human-readable values for linked records
    // timeZone and userLocale are required when using cellFormat: 'string'
    // filterByFormula: temporary filter for testing with one kit
    const records = await table.select({
      returnFieldsByFieldId: true,
      cellFormat: 'string',
      timeZone: 'America/New_York',
      userLocale: 'en-us',
      filterByFormula: `{${FIELDS.KIT_SKU}} = 'KIT-012.06'`
    }).all();

    console.log(`📦 Found ${records.length} records`);

    // Process each record (now async)
    for (const record of records) {
      const fields = record.fields;

      // Extract data using field IDs (returnFieldsByFieldId: true)
      const sku = fields[FIELDS.SKU]; // Component SKU (for image filename)
      const kitSku = fields[FIELDS.KIT_SKU]; // Kit SKU (for organizing data)
      const refdes = fields[FIELDS.REFDES];
      const itemName = fields[FIELDS.ITEM_NAME];
      const qty = fields[FIELDS.QTY];
      const manualStep = fields[FIELDS.MANUAL_STEP];
      const markings = fields[FIELDS.MARKINGS];
      const image = fields[FIELDS.IMAGE];

      // Skip records without required fields
      if (!kitSku || !manualStep) {
        console.warn(`⚠️  Skipping record ${record.id}: Missing KIT_SKU or Manual Step (kitSku: "${kitSku}", manualStep: "${manualStep}")`);
        continue;
      }

      // Initialize KIT_SKU object if it doesn't exist
      if (!partsData[kitSku]) {
        partsData[kitSku] = {};
      }

      // Initialize step array if it doesn't exist
      if (!partsData[kitSku][manualStep]) {
        partsData[kitSku][manualStep] = [];
      }

      // Handle image download if present
      let imagePath = '';
      let imageModified = '';
      let airtableUrl = '';

      if (image && Array.isArray(image) && image.length > 0) {
        const imageData = image[0];
        airtableUrl = imageData.url;
        imageModified = imageData.lastModified || new Date().toISOString();

        // Extract file extension from URL
        const urlPath = new URL(airtableUrl).pathname;
        const ext = path.extname(urlPath) || '.png';
        // Use component SKU for filename
        const filename = `${sku}${ext}`;
        const localPath = path.join(partsDir, filename);
        imagePath = `/assets/parts/${filename}`;

        // Check if we need to download this image
        if (needsDownload(sku, imageModified, previousCache)) {
          try {
            await downloadImage(airtableUrl, localPath);
            imagesDownloaded++;
            console.log(`   📥 Downloaded: ${filename}`);
          } catch (error) {
            console.warn(`   ⚠️  Failed to download image for ${sku}: ${error.message}`);
            imagesFailed++;
            // Keep the path if file exists locally, otherwise empty
            if (!fs.existsSync(localPath)) {
              imagePath = '';
            }
          }
        } else {
          imagesSkipped++;
        }
      }

      // Add part to the appropriate KIT_SKU and step
      partsData[kitSku][manualStep].push({
        sku: sku, // Component SKU - Store for update detection and reference
        refdes: refdes || '',
        itemName: itemName || '',
        qty: qty || 1,
        markings: markings || '',
        image: imagePath,
        imageModified: imageModified,
        airtableUrl: airtableUrl // For debugging
      });

      recordCount++;
    }

    // Create cache object with metadata
    const cache = {
      lastUpdated: new Date().toISOString(),
      recordCount: recordCount,
      data: partsData
    };

    // Write to cache file
    const cacheFilePath = path.join(__dirname, '..', '_data', 'partsCache.json');
    fs.writeFileSync(cacheFilePath, JSON.stringify(cache, null, 2));

    console.log(`\n✅ Successfully cached ${recordCount} parts`);
    console.log(`📁 Cache saved to: _data/partsCache.json`);
    console.log(`🕐 Last updated: ${cache.lastUpdated}`);
    console.log(`\n🖼️  Images: ${imagesDownloaded} downloaded, ${imagesSkipped} skipped (unchanged), ${imagesFailed} failed`);

    // Display summary by KIT SKU
    console.log('\n📊 Parts by Kit SKU:');
    Object.keys(partsData).forEach(kitSku => {
      const stepCount = Object.keys(partsData[kitSku]).length;
      const partCount = Object.values(partsData[kitSku]).reduce((sum, parts) => sum + parts.length, 0);
      console.log(`   ${kitSku}: ${partCount} parts across ${stepCount} steps`);
    });

  } catch (error) {
    console.error('❌ Error fetching data from Airtable:', error.message);
    if (error.statusCode === 401) {
      console.error('   Check your AIRTABLE_API_KEY');
    } else if (error.statusCode === 404) {
      console.error('   Check your AIRTABLE_BASE_ID and AIRTABLE_TABLE_NAME');
    }
    process.exit(1);
  }
}

// Run the fetch
fetchPartsData();
