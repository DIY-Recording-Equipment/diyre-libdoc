# stepParts Shortcode Documentation

The `stepParts` shortcode automatically displays parts information from Airtable in your assembly guide manuals. It fetches parts data, downloads images, and renders them in a consistent format.

## Table of Contents

- [Quick Start](#quick-start)
- [How It Works](#how-it-works)
- [Setup](#setup)
- [Usage](#usage)
- [Airtable Configuration](#airtable-configuration)
- [Troubleshooting](#troubleshooting)

## Quick Start

### 1. Add kit_sku to your manual's frontmatter

```yaml
---
layout: guide.liquid
title: 15IPS mkIII Assembly Guide
kit_sku: KIT-012.06
---
```

### 2. Fetch parts data from Airtable

```bash
npm run fetch-parts
```

### 3. Use the shortcode in your manual

```liquid
## Step 1: Install Capacitors

{% stepParts '1.1' %}

Install the capacitors shown above onto the PCB...
```

## How It Works

### Architecture Overview

```
Airtable BOMs Table
         ↓
  npm run fetch-parts
         ↓
   _data/partsCache.json + assets/parts/*.png
         ↓
  {% stepParts 'X.X' %}
         ↓
   Rendered HTML with parts
```

### The Process

1. **Data Fetching** (`scripts/fetch-parts.js`):
   - Scans all `.md` files in the root directory for `kit_sku` values
   - Queries Airtable BOMs table for only those kits
   - Downloads part images to `assets/parts/`
   - Caches data to `_data/partsCache.json`

2. **Rendering** (`_data/libdocFunctions.js`):
   - The `stepParts` shortcode reads `kit_sku` from page frontmatter
   - Looks up parts for that kit and step in `partsCache.json`
   - Generates HTML for each part with images and details

## Setup

### 1. Configure Airtable Credentials

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and fill in your Airtable credentials:

```env
# Airtable API Configuration
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_ID=tblXXXXXXXXXXXXXX

# Field IDs
AIRTABLE_FIELD_SKU=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_REFDES=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_ITEM_NAME=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_QTY=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_MANUAL_STEP=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_MARKINGS=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_IMAGE=fldXXXXXXXXXXXXXX
AIRTABLE_FIELD_KIT_SKU=fldXXXXXXXXXXXXXX
```

#### Finding Your Credentials:

- **API Key**: Create at [airtable.com/create/tokens](https://airtable.com/create/tokens)
- **Base ID**: Found in your Airtable API documentation or URL
- **Table ID**: Found in your Airtable API documentation
- **Field IDs**: Found in Airtable field settings or API documentation

### 2. Install Dependencies

Dependencies should already be installed, but if needed:

```bash
npm install
```

## Usage

### Manual Frontmatter Setup

Each manual must have a `kit_sku` field in its frontmatter:

```yaml
---
layout: guide.liquid
title: Your Assembly Guide
kit_sku: KIT-012.06  # Must match the KIT field in Airtable
---
```

### Fetching Parts Data

Run the fetch script whenever:
- You create a new manual
- Parts data changes in Airtable
- Images are updated in Airtable

```bash
npm run fetch-parts
```

**Output:**
```
🔄 Fetching parts data from Airtable...
📄 Scanning 9 markdown files for kit_sku...
   ✓ Found kit_sku "KIT-012.06" in 15ips-mkiii.md
   ✓ Found kit_sku "KIT-013.03" in ctx.md

🎯 Fetching data for 2 kit(s): KIT-012.06, KIT-013.03

📦 Found 70 records
   📥 Downloaded: HW-Y008.png
   📥 Downloaded: COM-C022.png
   ...

✅ Successfully cached 34 parts
📁 Cache saved to: _data/partsCache.json
🕐 Last updated: 2025-10-22T20:45:06.742Z

🖼️  Images: 14 downloaded, 0 skipped (unchanged), 0 failed

📊 Parts by Kit SKU:
   KIT-013.03: 12 parts across 7 steps
   KIT-012.06: 22 parts across 9 steps
```

### Using the Shortcode

In your markdown manual, use the shortcode with the step number:

```liquid
## Step 2.2: Install Resistors

{% stepParts '2.2' %}

The resistors shown above should be installed in the following locations...
```

### Rendered Output

The shortcode generates HTML like this:

```html
<div class="step-parts">
    <div class="part">
        <p>R3, R11<br>22k (x2.00)</p>
        <img src="/assets/parts/COM-R-22k.png" loading="lazy" decoding="async" alt="22k">
        <p>"red,red,black,red,brown"</p>
    </div>
    <div class="part">
        <p>R1, R6, R7<br>470R (x3.00)</p>
        <img src="/assets/parts/COM-R-470R.png" loading="lazy" decoding="async" alt="470R">
        <p>"yellow,violet,black,black,brown"</p>
    </div>
    <!-- More parts... -->
</div>
```

### Styling Parts

Add CSS to style the parts display. The HTML structure provides these classes/elements:

- `.step-parts` - Container for all parts in a step
- `.part` - Individual part container
- `.part p` - Text content (RefDes, Item Name, Qty, Markings)
- `.part img` - Part image

Example CSS:

```css
.step-parts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.part {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
}

.part img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
}
```

## Airtable Configuration

### Required Table Structure

Your Airtable BOMs table must have these fields:

| Field Name | Type | Description |
|------------|------|-------------|
| SKU | Single line text | Component SKU (e.g., "COM-R-22k") |
| KIT | Link to another record | Links to the Kit record (displays as KIT-012.06) |
| RefDes | Single line text | Reference designator (e.g., "R3, R11") |
| Item Name | Single line text | Part description (e.g., "22k resistor") |
| Qty | Number | Quantity needed |
| Manual Step | Single line text | Step number (e.g., "2.2") |
| Markings | Long text | Additional markings or notes |
| Image | Attachment | Part image(s) |

### Data Requirements

For parts to appear in the manual:
1. **KIT field must link to a Kit record** with the matching SKU (e.g., KIT-012.06)
2. **Manual Step must be populated** with the step number (e.g., "2.2")
3. All other fields are optional but recommended

### Image Handling

- Images are downloaded from Airtable during `npm run fetch-parts`
- Saved to `assets/parts/` with filename: `{SKU}.{ext}` (e.g., `COM-R-22k.png`)
- Images are always re-downloaded when using `cellFormat: 'string'` in the Airtable API
- This ensures images are always current but may take longer on large datasets

## Troubleshooting

### No parts showing in manual

**Symptom:** Shortcode renders but shows "No parts found for step X.X"

**Solutions:**
1. Check that `kit_sku` in frontmatter matches Airtable KIT field exactly
2. Verify the step number matches the Manual Step field in Airtable
3. Run `npm run fetch-parts` to refresh the cache
4. Check `_data/partsCache.json` to verify data was fetched

### "Parts data not available" error

**Symptom:** Warning message: "Parts data not available. Run npm run fetch-parts"

**Solution:**
```bash
npm run fetch-parts
```

The cache file `_data/partsCache.json` doesn't exist or is missing.

### Images not displaying

**Symptom:** Parts show but images are broken/missing

**Possible causes:**
1. **No image in Airtable**: Check that the part has an image attachment
2. **Download failed**: Check script output for download errors
3. **Path issue**: Verify images exist in `assets/parts/`
4. **Base URL**: Check 11ty's base URL configuration

**Debug steps:**
```bash
# Check if images were downloaded
ls assets/parts/

# Check cache for image paths
grep "image" _data/partsCache.json

# Re-run fetch to download images
npm run fetch-parts
```

### "Missing required environment variables" error

**Symptom:** Script fails with list of missing variables

**Solution:**
1. Ensure `.env` file exists (copy from `.env.example`)
2. Fill in all required Airtable credentials
3. Double-check field IDs match your Airtable setup

### Field IDs don't match

**Symptom:** Data fetched but fields are empty or incorrect

**Solution:**
1. Get correct field IDs from Airtable API documentation
2. Update field IDs in `.env` file
3. Run `npm run fetch-parts` again

### Parts fetched for wrong kit

**Symptom:** Parts from different kit appearing in manual

**Solution:**
1. Verify `kit_sku` in frontmatter is correct
2. Check that Airtable KIT field links to correct Kit record
3. Rebuild 11ty: `npm run build` or restart dev server

## Advanced Usage

### Multiple Manuals

The system automatically handles multiple manuals:

1. Each manual has its own `kit_sku` in frontmatter
2. `npm run fetch-parts` scans all manuals and fetches data for all kits
3. Each manual only displays parts for its specific kit

### Manual Without Parts

If a manual doesn't need parts:
- Simply don't add `kit_sku` to frontmatter
- Don't use the `{% stepParts %}` shortcode
- The manual works normally without parts data

### Conditional Parts Display

You can conditionally show parts based on step:

```liquid
{% if stepHasParts %}
  {% stepParts '2.2' %}
{% endif %}
```

Note: Currently the shortcode handles missing steps gracefully by showing a message.

### Cache File Structure

The `_data/partsCache.json` file structure:

```json
{
  "lastUpdated": "2025-10-22T20:45:06.742Z",
  "recordCount": 34,
  "data": {
    "KIT-012.06": {
      "2.2": [
        {
          "sku": "COM-R-22k",
          "refdes": "R3, R11",
          "itemName": "22k",
          "qty": "2.00",
          "markings": "\"red,red,black,red,brown\"",
          "image": "/assets/parts/COM-R-22k.png",
          "imageModified": "2025-10-22T20:34:00.607Z",
          "airtableUrl": "https://..."
        }
      ]
    }
  }
}
```

This cache file is safe to commit to git as it's generated from Airtable.

## Performance Considerations

### When to Run fetch-parts

- **Always run** before deploying to production
- **Run periodically** if parts data changes frequently
- **Run after** adding images to Airtable
- **Not needed** during development unless testing parts display

### Build Time

- Fetching parts is separate from 11ty build
- 11ty build reads from cached JSON (fast)
- Only run `fetch-parts` when data changes

### Image Storage

- Images are stored in `assets/parts/` and version controlled
- Consider adding `assets/parts/` to `.gitignore` if you have many large images
- Alternatively, commit images for consistent deployments

## Support

For issues or questions:
1. Check this README
2. Verify Airtable configuration
3. Check script output for error messages
4. Review `_data/partsCache.json` for data issues
