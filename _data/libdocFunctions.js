// START IMPORT REQUIRE WORKAROUND
// To make 11ty --serve work with JSON imports
// https://github.com/11ty/eleventy/issues/3128#issuecomment-1878745864
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
// END IMPORT REQUIRE WORKAROUND

// START JSON IMPORT WORKAROUND
// import libdocMessages   from "./libdocMessages.json" with { "type": "json" };
// import libdocSystem     from "./libdocSystem.json" with { "type": "json" };
// import icomoon          from "../core/assets/fonts/icomoon/selection.json" with { "type": "json" };
const libdocSystem =        require("./libdocSystem.json");
const libdocMessages =      require("./libdocMessages.json");
const icomoon =             require("../core/assets/fonts/icomoon/selection.json");
// END JSON IMPORT WORKAROUND

import libdocUtils          from    "./libdocUtils.js";
import libdocConfig         from    "./libdocConfig.js";

export default {
    pluginsParameters: {
        eleventyImageTransform: function() {
            // https://www.11ty.dev/docs/plugins/image/#more-configuration-options
            const   params = libdocSystem.pluginsParameters.eleventyImageTransform,
                    w = libdocSystem.widthContent;
            return {
                // output image formats
                formats: params.formats,
                useCache: params.useCache,
                svgShortCircuit: params.svgShortCircuit,
                // output image widths
                widths: [
                    w + 30,
                    w * 2,
                    w * 4
                ],
                filenameFormat: function (id, src, width, format, options) {
                    // Define custom filenames for generated images
                    // id: hash of the original image
                    // src: original image path
                    // width: current width in px
                    // format: current file format
                    // options: set of options passed to the Image call
                    const filename = src.split('/').slice(-1)[0].split('.')[0];
                    return `${libdocUtils.slugify(filename)}-${id}-__${width}__.${format}`;
                },
                sharpOptions: {
                    animated: true
                },
                // transform: (sharp) => {
                //     sharp.trim();
                // },
                // optional, attributes assigned on <img> nodes override these values
                htmlOptions: params.htmlOptions
            }
        }
    },
    filters: {
        sanitizeJson: async function(value) {
            // Remove back slashes
            value = value.replaceAll('\\', '');
            // Remove extra spaces
            value = value.replace(/\s+/g, ' ').trim();
            return value;
        },
        autoids: async function(content) {
            let i = 0;
            const anchorsIds = [];
            content = content.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b([^>]*)>(.*?)<\/\1>/g, function(m,m1,m2,m3){
                let newM = m;
                if (libdocConfig.tocHtmlTags.includes(m1)) {
                    // Add id to the specified html tags
                    let slugifiedId = libdocUtils.slugify(m3);
                    if (anchorsIds.includes(slugifiedId)) {
                        slugifiedId += `-${i}`;
                    }
                    anchorsIds.push(slugifiedId);
                    // Only add pl-9 padding to h1 and h2
                    const paddingAttr = (m1 === 'h1' || m1 === 'h2') ? ' pl-9="xs,sm"' : '';
                    const markup = `
                        <${m1}${m2} id="${slugifiedId}"${paddingAttr}>
                            <a  href="#${slugifiedId}"
                                title="${m3}"
                                class="pos-absolute top-50 left-0 t-tY-50 | p-4 ml-1 | td-none | brad-4 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 __hover-1 __soft-shadow"
                                ml-3="xs,sm">
                                <span class="icon-link-simple | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | fs-4"></span>
                            </a>
                    `;
                    newM = m.replace(/<[a-zA-Z][a-zA-Z0-9_-]*\b[^>]*>/, markup);
                    i++;
                }
                return newM;
            });
            return content;
        },
        embed: async function(src) {
            try {
                const url = new URL(src);
                const content = `
                    <aside class="widget widget-embed">
                        <iframe src="${url}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            loading="lazy"
                            allowfullscreen></iframe>
                    </aside>`;
                return content;
            } catch (e) {
                console.log(`${src} is not a valid URL`);
                return '';
            }
        },
        cleanup: async function(content) {
            content = content.replaceAll(`<table>`, `<div class="o-auto w-100 table-wrapper"><table>`);
            content = content.replaceAll(`</table>`, `</table></div>`);
            content = content.replaceAll(`<p><div`, `<div`);
            content = content.replaceAll(`</div></p>`, `</div>`);
            content = content.replaceAll(`<p><aside`, `<aside`);
            content = content.replaceAll(`</aside></p>`, `</aside>`);
            return content;
        },
        datePrefixText: async function(date) {
            let text = '';
            if (typeof date == 'string') {
                text = libdocMessages.lastModified[libdocConfig.lang];
            }
            return text;
        },
        dateString: async function(content) {
            let theDay = content.getDate().toString();
            if (theDay.length == 1) theDay = `0${theDay}`;
            let theMonth = (content.getMonth() + 1).toString();
            if (theMonth.length == 1) theMonth = `0${theMonth}`;
            const theYear = content.getFullYear().toString();
            return `${theYear}-${theMonth}-${theDay}`;
        },
        toc: async function(content) {
            const htmlTagsFound = libdocUtils.extractHtmlTagsFromString(content, libdocConfig.tocHtmlTags);
            let tocMarkup = '';
            if (htmlTagsFound.length > libdocConfig.tocMinTags) {
                tocMarkup = `
                    <ol class="m-0 pl-0 pb-5 o-auto | lh-1 | ls-none">`;

                // Track list numbers at each nesting level
                const listCounters = {};

                // Displaying the results
                const anchorsIds = [];
                htmlTagsFound.forEach(function(htmlTag, tagIndex) {
                    let slugifiedId = libdocUtils.slugify(htmlTag.value);
                    if (anchorsIds.includes(slugifiedId)) {
                        slugifiedId += `-${tagIndex}`;
                    }
                    anchorsIds.push(slugifiedId);

                    // Calculate indent level: h2 = 0, h3 = 1, h4 = 2, etc.
                    const headingLevel = parseInt(htmlTag.tagName.substring(1)); // Extract number from h2, h3, etc.
                    const indentLevel = Math.max(0, headingLevel - 2); // h2 gets 0, h3 gets 1, h4 gets 2
                    const indentPadding = indentLevel * 20; // 20px per indent level

                    // Check if this heading is inside a list item or has the .step class
                    const headingPattern = new RegExp(`<${htmlTag.tagName}[^>]*>${htmlTag.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/${htmlTag.tagName}>`, 'g');
                    const beforeHeading = content.split(headingPattern)[0];

                    // Count how many <li> tags are opened vs closed before this heading
                    const openLiCount = (beforeHeading.match(/<li[^>]*>/g) || []).length;
                    const closeLiCount = (beforeHeading.match(/<\/li>/g) || []).length;
                    const isInList = openLiCount > closeLiCount;

                    // Check if heading has the .step class
                    const headingMatch = content.match(new RegExp(`<${htmlTag.tagName}[^>]*class="[^"]*step[^"]*"[^>]*>${htmlTag.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/${htmlTag.tagName}>`));
                    const hasStepClass = headingMatch !== null;

                    let displayText = htmlTag.value;

                    // Only add numbering if the heading is inside a list or has .step class
                    if (isInList || (hasStepClass && headingLevel >= 2 && headingLevel <= 4)) {
                        // Track numbering: increment counter at this level, reset deeper levels
                        if (!listCounters[indentLevel]) {
                            listCounters[indentLevel] = 0;
                        }
                        listCounters[indentLevel]++;

                        // Reset all deeper level counters
                        for (let i = indentLevel + 1; i < 10; i++) {
                            listCounters[i] = 0;
                        }

                        // Build the number prefix (e.g., "1.2.3")
                        let numberPrefix = '';
                        for (let i = 0; i <= indentLevel; i++) {
                            if (listCounters[i]) {
                                numberPrefix += (numberPrefix ? '.' : '') + listCounters[i];
                            }
                        }

                        // Add the number prefix to the heading text
                        displayText = numberPrefix ? `${numberPrefix}. ${htmlTag.value}` : htmlTag.value;
                    } else {
                        // Reset counters when we encounter a non-list heading
                        for (let i = 0; i < 10; i++) {
                            listCounters[i] = 0;
                        }
                    }

                    tocMarkup += `
                        <li class="d-flex">
                            <a  href="#${slugifiedId}"
                                class="pt-1 pb-1 | fs-3 lsp-2 lh-3 fvs-wght-400 | blwidth-1 blstyle-dashed bcolor-neutral-500"
                                style="padding-left: ${5 + indentPadding}px;">
                                ${displayText}
                            </a>
                        </li>`;
                });
                tocMarkup += '</ol>';
            }
            return tocMarkup;
        },
        gitLastModifiedDate: async function(filePath) {
            // Run the git log command
            // https://jamesdoc.com/blog/2023/git-changelog-in-11ty/
            let fileHistory = childProcess
                .execSync(`git log --pretty=tformat:"%cs" ${filePath}`)
                .toString()
                .trim();

            // If the file isn't committed to git then ignore
            if (fileHistory == "") { return false }

            return fileHistory.split(/\r?\n/)[0];
        }
    },
    collections: {
        myTags: function(collectionsApi) {
            const allData = collectionsApi.getAll();
            let unsortedTagsCount = {};
            allData.forEach(function(item) {
                if (typeof item.data.tags == 'object') {
                    item.data.tags.forEach(function(tag) {
                        if (tag !== 'post') {
                            if (unsortedTagsCount[tag] === undefined) {
                                unsortedTagsCount[tag] = 1
                            } else {
                                unsortedTagsCount[tag]++
                            }
                        }
                    })
                }
            });
            let sortedObject = Object.fromEntries(
                Object.entries(unsortedTagsCount).sort(([, a], [, b]) => b - a)
            );
            return Object.entries(sortedObject);
        },
        postsByDateDescending: function(collectionsApi) {
            return collectionsApi.getFilteredByTag("post").sort(function (a, b) {
                //return a.date - b.date; // sort by date - ascending
                return b.date - a.date; // sort by date - descending
                //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
                //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
            });
        }
    },
    shortcodes: {
        alert: async function(content, type, title) {
            const validTypes = ['info', 'warning', 'success', 'danger'];
            let markup = '',
                titleAttribute = ``,
                typeClass = ``;
            if (typeof title == 'string') {
                titleAttribute = `data-title="${title}"`;
            }
            if (typeof type == 'string') {
                if (validTypes.includes(type)) typeClass = `alert-${type}`;
            }
            markup = `
                <aside class="widget widget-alert">
                    <div class="alert ${typeClass}" ${titleAttribute}>
                        ${content}
                    </div>
                </aside>
            `;
            return markup;
        },
        icon: async function(iconName, iconSize) {
            let markup = '';
            let isAnIcon = false;
            icomoon.icons.forEach(function(iconData) {
                if (iconData.properties.name == iconName) isAnIcon = true;
            });
            if (isAnIcon) {
                const fontSizeParse = parseInt(iconSize);
                let dsFontSize = '';
                if (!isNaN(fontSizeParse)) {
                    if (fontSizeParse < 11 && fontSizeParse > 0) {
                        dsFontSize = fontSizeParse;
                    } else {
                        console.log(`icon shortcode "${iconName}" is a valid icon but "${fontSizeParse}" is not a valid icon size, icon size must be an integer from 1 to 10`)
                    }
                }
                markup = `<span class="icon-${iconName} fs-${dsFontSize}"></span>`;
            } else {
                console.log(`icon shortcode "${iconName}" is not a valid icon, see https://eleventy-libdoc.netlify.app/creating-content/widgets/icons/`)
            }
            return markup;
        },
        iconCard: async function(mainText, description, iconOrImage) {
            let markup = '';
            if (typeof mainText == 'string' && typeof description == 'string') {
                let isAnIcon = false;
                let visualContent = '';

                if (typeof iconOrImage == 'string') {
                    // Check if it's a valid icon name
                    icomoon.icons.forEach(function(iconData) {
                        if (iconData.properties.name == iconOrImage) {
                            isAnIcon = true;
                        }
                    });

                    if (isAnIcon) {
                        // It's a valid icon
                        visualContent = `<span class="icon-${iconOrImage} fs-10 | c-primary-500" fs-8="xs"></span>`;
                    } else {
                        // It's an image path
                        visualContent = `<img src="${iconOrImage}" alt="${mainText}" style="width: 100%; height: auto; max-width: 100px;" loading="lazy" decoding="async">`;
                    }
                } else {
                    // No third parameter provided, use default icon
                    visualContent = `<span class="icon-check-circle fs-10 | c-primary-500" fs-8="xs"></span>`;
                }

                markup = `
                    <aside class="widget widget-iconCard">
                        <p class="d-flex gap-5 | p-5 m-0 | brad-3 bwidth-1 bstyle-dashed bcolor-neutral-500">
                            ${visualContent}
                            <span class="d-flex fd-column gap-1">
                                <strong class="fvs-wght-700 fs-4">${mainText}</strong>
                                <span>${description}</span>
                            </span>
                        </p>
                    </aside>`;
            } else {
                console.log(`iconCard shortcode: wrong format, must specify at least main text and description string fields.`);
            }
            return markup;
        },
        embed: async function(src, height) {
            try {
                const url = new URL(src);
                const content = `
                    <aside class="widget widget-embed">
                        <iframe src="${url}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            loading="lazy"
                            height="${height || ``}"
                            allowfullscreen></iframe>
                    </aside>`;
                return content;
            } catch (e) {
                console.log(`${src} is not a valid URL`);
                return '';
            }
        },
        icomoon: async function() {
            const w = libdocSystem.icomoonIconSize;
            let markup = `
                <aside class="widget widget-icomoon | mt-10 mb-10"
                    mt-7="xs"
                    mb-7="xs">
                    <ul class="d-flex fw-wrap gap-7 | p-0 | ls-none" rgap-10="sm,md">`;
            icomoon.icons.forEach(function(iconData) {
                let pathsMarkup = '';
                iconData.icon.paths.forEach(function(path) {
                    pathsMarkup += path;
                });
                markup += `
                    <li class="d-flex fd-column ai-center gap-3" style="width: 20%">
                        <svg class="icomoon-icon" width="${w}" height="${w}" viewBox="0 0 ${w} ${w}">
                            <path d="${pathsMarkup}" fill="currentColor"></path>
                        </svg>
                        <code class="fs-2 tws-balance ta-center" fs-1="xs">${iconData.properties.name}</code>
                    </li>`;
            });
            markup += '</ul></aside>';
            return markup;
        },
        sandbox: async function(content, sandboxTitle) {
            const   code = libdocUtils.HTMLEncode(content.replace(/[\n\r]/, '')),
                    title = typeof sandboxTitle == `string` ? sandboxTitle : libdocMessages.sandbox[libdocConfig.lang],
                    iframeAttribute = `srcdoc="${code}"`,
                    enableSwitchId = libdocUtils.generateRandomId(),
                    iframeCommands = `<header class="d-flex jc-space-between | pl-5" style="height: 58px">
                            <div class="d-flex ai-center | fvs-wght-400 fs-3 | c-neutral-500">
                                srcdoc
                            </div>
                        </header>`;
            return libdocUtils.templates.sandbox({iframeAttribute, iframeCommands, title, code, enableSwitchId});
        },
        sandboxFile: async function(content, permalink, sandboxTitle) {
            const   code = libdocUtils.HTMLEncode(content),
                    iframeAttribute = `src="${permalink}"`,
                    title = typeof sandboxTitle == `string` ? sandboxTitle : libdocMessages.sandbox[libdocConfig.lang],
                    enableSwitchId = libdocUtils.generateRandomId(),
                    iframeCommands = `<header class="d-flex jc-space-between gap-5 | pl-5 pr-5" style="height: 58px">
                            <a  href="${permalink}"
                                target="_blank"
                                title="${libdocMessages.openInANewTab[libdocConfig.lang]}"
                                class="d-flex ai-center gap-1 | p-0 | fvs-wght-400 fs-2 tt-uppercase td-none | sandbox__permalink"
                                fs-2="xs">
                                <span class="fvs-wght-400">${libdocMessages.open[libdocConfig.lang]}</span>
                                <span class="icon-arrow-square-out"></span>
                            </a>
                            <div class="d-flex gap-7">
                                <button type="button"
                                    class="d-flex ai-center | p-0 | fvs-wght-400 fs-2 tt-uppercase | bc-0 b-0 cur-pointer | sandbox__reload">
                                    <span class="o-hidden | to-ellipsis ws-nowrap">${libdocMessages.reload[libdocConfig.lang]}</span>
                                </button>
                                <button type="button"
                                    class="d-flex ai-center | p-0 | fvs-wght-400 fs-2 tt-uppercase | bc-0 b-0 cur-pointer | sandbox__copy_url">
                                    <span class="o-hidden | to-ellipsis ws-nowrap">${libdocMessages.copyURL[libdocConfig.lang]}</span>
                                </button>
                            </div>
                        </header>`;
            return libdocUtils.templates.sandbox({iframeAttribute, iframeCommands, title, code, enableSwitchId});
        },
        lightbox: async function(img1, img2, img3, img4, img5, img6, img7, img8, size) {
            // Collect all arguments to separate images from size parameter
            const allArgs = [img1, img2, img3, img4, img5, img6, img7, img8];

            // Check if the last argument is a size parameter (sm, md, lg)
            const validSizes = ['sm', 'md', 'lg'];
            let sizeParam = 'sm'; // default size

            // Find the last non-undefined argument
            let lastDefinedIndex = -1;
            for (let i = allArgs.length - 1; i >= 0; i--) {
                if (allArgs[i] !== undefined) {
                    lastDefinedIndex = i;
                    break;
                }
            }

            // Check if the last defined argument is a valid size parameter
            let imageArgs = allArgs;
            if (lastDefinedIndex >= 0) {
                const lastArg = allArgs[lastDefinedIndex];
                if (typeof lastArg === 'string' && validSizes.includes(lastArg.trim().toLowerCase())) {
                    sizeParam = lastArg.trim().toLowerCase();
                    // Exclude the size parameter from image arguments
                    imageArgs = allArgs.slice(0, lastDefinedIndex);
                }
            }

            // Collect and sanitize image paths
            const imagePaths = imageArgs
                .filter(path => typeof path === 'string' && path.trim().length > 0 && !validSizes.includes(path.trim().toLowerCase()))
                .map(path => path.trim());

            if (imagePaths.length === 0) {
                console.warn('lightbox shortcode: at least one imagePath is required');
                return '';
            }

            const lightboxId = libdocUtils.generateRandomId();
            const isMultiImage = imagePaths.length > 1;

            // Helper to escape HTML attributes
            const escapeAttr = (str) => str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

            // Generate thumbnails with inline handlers (works with Eleventy image transform)
            const thumbnailsMarkup = imagePaths
                .map((path, index) =>
                    `<div class="lightbox-thumbnail" onclick="window.openLightbox('lightbox-${lightboxId}', ${index})">` +
                    `<img src="${escapeAttr(path)}" alt="" loading="lazy" decoding="async">` +
                    `</div>`
                )
                .join('');

            // Navigation buttons (only for multiple images)
            const navigationMarkup = isMultiImage
                ? `<button class="lightbox-nav lightbox-prev" onclick="event.stopPropagation(); window.navigateLightbox('lightbox-${lightboxId}', -1)" aria-label="Previous image">` +
                  `<span class="icon-caret-left | fs-6 | c-primary-500"></span>` +
                  `</button>` +
                  `<button class="lightbox-nav lightbox-next" onclick="event.stopPropagation(); window.navigateLightbox('lightbox-${lightboxId}', 1)" aria-label="Next image">` +
                  `<span class="icon-caret-right | fs-6 | c-primary-500"></span>` +
                  `</button>`
                : '';

            // Store image paths as JSON
            const imagePathsJson = escapeAttr(JSON.stringify(imagePaths));

            return `
<aside class="widget widget-lightbox">
<div class="lightbox-thumbnails-grid lightbox-size-${sizeParam}">${thumbnailsMarkup}</div>
<dialog id="lightbox-${lightboxId}" class="lightbox-dialog" data-images="${imagePathsJson}" data-current-image="0" aria-modal="true" aria-label="Image gallery" onclick="if (event.target === this || event.target.classList.contains('lightbox-content')) { this.close(); }">
<div class="lightbox-content">
<button class="lightbox-close" onclick="event.stopPropagation(); this.closest('dialog').close()" aria-label="Close lightbox">
<span class="icon-x | fs-6 | c-primary-500"></span>
</button>
${navigationMarkup}
<div class="lightbox-fullsize-image" style="background-image: url('${escapeAttr(imagePaths[0])}')" role="img" aria-label="Image ${isMultiImage ? '1 of ' + imagePaths.length : ''}"></div>
</div>
</dialog>
</aside>
`;
        },
        feedbackForm: async function() {
            try {
                const feedbackPath = path.join(process.cwd(), 'assets/includes/feedback.html');
                const feedbackContent = fs.readFileSync(feedbackPath, 'utf8');
                return feedbackContent;
            } catch (e) {
                console.error('feedbackForm shortcode error:', e);
                return '';
            }
        },
        resCalc: async function() {
            try {
                const resCalcPath = path.join(process.cwd(), 'assets/includes/resCalc.html');
                const resCalcHtml = fs.readFileSync(resCalcPath, 'utf8');

                // Script loader that conditionally loads dependencies in correct order
                const scriptLoader = `
<script>
(function() {
    // Check if calculator is already initialized
    if (window.rc !== null && window.rc !== undefined) {
        console.log("Resistor calculator already loaded");
        return;
    }

    // Function to load script dynamically
    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        script.onerror = function() {
            console.error('Failed to load script:', src);
        };
        document.head.appendChild(script);
    }

    // Load dependencies in sequence: jQuery -> Snap.svg -> resCalc10.js
    if (!window.jQuery) {
        console.log("Loading jQuery for resistor calculator...");
        loadScript('/assets/res-calc/jquery-3.2.1.js', function() {
            console.log("jQuery loaded, loading Snap.svg...");
            loadScript('/assets/res-calc/snap.svg.js', function() {
                console.log("Snap.svg loaded, loading calculator...");
                loadScript('/assets/res-calc/resCalc10.js', function() {
                    console.log("Calculator loaded, initializing...");
                    if (typeof mainResSort === 'function') {
                        mainResSort();
                    }
                });
            });
        });
    } else {
        // jQuery already exists, check for Snap
        if (!window.Snap) {
            console.log("Loading Snap.svg for resistor calculator...");
            loadScript('/assets/res-calc/snap.svg.js', function() {
                console.log("Snap.svg loaded, loading calculator...");
                loadScript('/assets/res-calc/resCalc10.js', function() {
                    console.log("Calculator loaded, initializing...");
                    if (typeof mainResSort === 'function') {
                        mainResSort();
                    }
                });
            });
        } else {
            // Both jQuery and Snap exist, just load calculator
            loadScript('/assets/res-calc/resCalc10.js', function() {
                console.log("Calculator loaded, initializing...");
                if (typeof mainResSort === 'function') {
                    mainResSort();
                }
            });
        }
    }
})();
</script>`;

                return `<aside class="widget widget-resCalc">${resCalcHtml}${scriptLoader}</aside>`;
            } catch (e) {
                console.error('resCalc shortcode error:', e);
                return '';
            }
        },
        stepParts: async function(stepNumber, kitSku) {
            // This shortcode renders parts from the partsCache.json for a given manual step
            // Usage: {% stepParts '1.1', kit_sku %}
            // The kit_sku parameter should be passed from the page's frontmatter

            try {
                // Load the parts cache
                const cachePath = path.join(process.cwd(), '_data/partsCache.json');

                if (!fs.existsSync(cachePath)) {
                    console.warn('stepParts shortcode: partsCache.json not found. Run "npm run fetch-parts" first.');
                    return `<aside class="widget widget-alert"><div class="alert alert-warning">Parts data not available. Run <code>npm run fetch-parts</code> to fetch parts from Airtable.</div></aside>`;
                }

                const cacheContent = fs.readFileSync(cachePath, 'utf8');
                const cache = JSON.parse(cacheContent);

                if (!kitSku) {
                    console.warn('stepParts shortcode: No kit_sku provided. Usage: {% stepParts \'1.1\', kit_sku %}');
                    return `<aside class="widget widget-alert"><div class="alert alert-warning">No kit_sku provided to stepParts shortcode.</div></aside>`;
                }

                // Look up parts for this kit SKU and step
                const partsForKit = cache.data?.[kitSku];

                if (!partsForKit) {
                    console.warn(`stepParts shortcode: No parts found for kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No parts data found for kit_sku "${kitSku}".</div></aside>`;
                }

                const partsForStep = partsForKit[stepNumber];

                if (!partsForStep || partsForStep.length === 0) {
                    console.warn(`stepParts shortcode: No parts found for step "${stepNumber}" in kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No parts found for step ${stepNumber}.</div></aside>`;
                }

                // Filter out resistors (exclude parts where type contains "COM Resistor")
                const nonResistorParts = partsForStep.filter(part => {
                    const type = part.type || '';
                    return !type.includes('COM Resistor');
                });

                if (nonResistorParts.length === 0) {
                    console.warn(`stepParts shortcode: No non-resistor parts found for step "${stepNumber}" in kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No parts found for step ${stepNumber}.</div></aside>`;
                }

                // Generate HTML markup for each part
                let partsMarkup = '';
                nonResistorParts.forEach(part => {
                    const refdes = part.refdes || '';
                    const itemName = part.itemName || '';
                    const markings = part.markings || '';
                    const image = part.image || '';

                    // Parse quantity and convert to integer
                    const qtyRaw = part.qty || 1;
                    const qty = parseInt(parseFloat(qtyRaw));

                    // Only show quantity if greater than 1
                    const qtyDisplay = qty > 1 ? ` (x${qty})` : '';

                    partsMarkup += `
                    <div class="part">
                        <p>${refdes}<br>${itemName}${qtyDisplay}</p>
                        ${image ? `<img src="${image}" loading="lazy" decoding="async" alt="${itemName}">` : ''}
                        ${markings ? `<p>${markings}</p>` : ''}
                    </div>`;
                });

                // Wrap all parts in a container
                return `<div class="step-parts">${partsMarkup}</div>`;

            } catch (e) {
                console.error('stepParts shortcode error:', e);
                return `<aside class="widget widget-alert"><div class="alert alert-danger">Error loading parts data: ${e.message}</div></aside>`;
            }
        },
        stepResistors: async function(stepNumber, kitSku) {
            // This shortcode renders resistors from the partsCache.json for a given manual step in a table format
            // Usage: {% stepResistors '2.2', kit_sku %}
            // The kit_sku parameter should be passed from the page's frontmatter

            try {
                // Load the parts cache
                const cachePath = path.join(process.cwd(), '_data/partsCache.json');

                if (!fs.existsSync(cachePath)) {
                    console.warn('stepResistors shortcode: partsCache.json not found. Run "npm run fetch-parts" first.');
                    return `<aside class="widget widget-alert"><div class="alert alert-warning">Parts data not available. Run <code>npm run fetch-parts</code> to fetch parts from Airtable.</div></aside>`;
                }

                const cacheContent = fs.readFileSync(cachePath, 'utf8');
                const cache = JSON.parse(cacheContent);

                if (!kitSku) {
                    console.warn('stepResistors shortcode: No kit_sku provided. Usage: {% stepResistors \'2.2\', kit_sku %}');
                    return `<aside class="widget widget-alert"><div class="alert alert-warning">No kit_sku provided to stepResistors shortcode.</div></aside>`;
                }

                // Look up parts for this kit SKU and step
                const partsForKit = cache.data?.[kitSku];

                if (!partsForKit) {
                    console.warn(`stepResistors shortcode: No parts found for kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No parts data found for kit_sku "${kitSku}".</div></aside>`;
                }

                const partsForStep = partsForKit[stepNumber];

                if (!partsForStep || partsForStep.length === 0) {
                    console.warn(`stepResistors shortcode: No parts found for step "${stepNumber}" in kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No parts found for step ${stepNumber}.</div></aside>`;
                }

                // Filter only resistors (type contains "COM Resistor")
                // Type field is a multi-select that comes through as comma-separated string
                const resistors = partsForStep.filter(part => {
                    const type = part.type || '';
                    return type.includes('COM Resistor');
                });

                if (resistors.length === 0) {
                    console.warn(`stepResistors shortcode: No resistors found for step "${stepNumber}" in kit_sku "${kitSku}"`);
                    return `<aside class="widget widget-alert"><div class="alert alert-info">No resistors found for step ${stepNumber}.</div></aside>`;
                }

                // Sort resistors alphanumerically by reference designator
                resistors.sort((a, b) => {
                    const refA = (a.refdes || '').toLowerCase();
                    const refB = (b.refdes || '').toLowerCase();
                    return refA.localeCompare(refB, undefined, { numeric: true, sensitivity: 'base' });
                });

                // Helper function to parse color bands from markings for markdown
                const parseColorBands = (markings) => {
                    if (!markings) return '';

                    // Remove quotes and extra whitespace
                    const cleaned = markings.replace(/["']/g, '').trim();

                    // Check if this is a text marking (not color bands)
                    if (cleaned.toLowerCase().startsWith('marking')) {
                        return cleaned;
                    }

                    // Split by comma to get individual colors
                    const colors = cleaned.split(',').map(c => c.trim().toLowerCase());

                    // Generate spans for each color (HTML in markdown)
                    const spans = colors.map(color =>
                        `<span class="${color}">${color}</span>`
                    ).join('');

                    return spans;
                };

                // Generate HTML table rows directly
                let tableRows = '';
                resistors.forEach(resistor => {
                    const refdes = resistor.refdes || '';
                    const itemName = resistor.itemName || '';
                    const markings = resistor.markings || '';
                    const colorBands = parseColorBands(markings);

                    tableRows += `<tr><td>${refdes}</td><td>${itemName}</td><td class="res-sort">${colorBands}</td></tr>`;
                });

                // Generate HTML table
                const tableMarkup = `<table><thead><tr><th>Reference</th><th>Value</th><th>Color Code</th></tr></thead><tbody>${tableRows}</tbody></table>`;

                return tableMarkup;

            } catch (e) {
                console.error('stepResistors shortcode error:', e);
                return `<aside class="widget widget-alert"><div class="alert alert-danger">Error loading resistor data: ${e.message}</div></aside>`;
            }
        }
    }
}