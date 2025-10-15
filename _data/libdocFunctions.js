// START IMPORT REQUIRE WORKAROUND
// To make 11ty --serve work with JSON imports
// https://github.com/11ty/eleventy/issues/3128#issuecomment-1878745864
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const childProcess = require('child_process');
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
            content = content.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g, function(m,m1,m2){
                let newM = m;
                if (libdocConfig.tocHtmlTags.includes(m1)) {
                    // Add id to the specified html tags
                    let slugifiedId = libdocUtils.slugify(m2);
                    if (anchorsIds.includes(slugifiedId)) {
                        slugifiedId += `-${i}`;
                    }
                    anchorsIds.push(slugifiedId);
                    const markup = `
                        <${m1} id="${slugifiedId}" pl-9="xs,sm">
                            <a  href="#${slugifiedId}"
                                title="${m2}"
                                class="pos-absolute top-50 left-0 t-tY-50 | p-4 ml-1 | td-none | brad-4 bc-neutral-100 bwidth-1 bstyle-dashed bcolor-neutral-500 __hover-1 __soft-shadow"
                                ml-3="xs,sm">
                                <span class="icon-link-simple | pos-absolute top-50 left-50 t-tY-50 t-tX-50 | fs-4"></span>
                            </a>
                    `;
                    newM = m.replace(`<${m1}>`, markup);
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

                    // Check if this heading is inside a list item by searching the content
                    const headingPattern = new RegExp(`<${htmlTag.tagName}[^>]*>${htmlTag.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}<\\/${htmlTag.tagName}>`, 'g');
                    const beforeHeading = content.split(headingPattern)[0];

                    // Count how many <li> tags are opened vs closed before this heading
                    const openLiCount = (beforeHeading.match(/<li[^>]*>/g) || []).length;
                    const closeLiCount = (beforeHeading.match(/<\/li>/g) || []).length;
                    const isInList = openLiCount > closeLiCount;

                    let displayText = htmlTag.value;

                    // Only add numbering if the heading is inside a list
                    if (isInList) {
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
                        visualContent = `<img src="${iconOrImage}" alt="${mainText}" style="width: 100%; height: auto; max-width: 120px;" loading="lazy" decoding="async">`;
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
                                <strong class="fvs-wght-700 fs-6">${mainText}</strong>
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
        lightbox: async function(imagePath, caption) {
            let markup = '';
            if (typeof imagePath == 'string') {
                const lightboxId = libdocUtils.generateRandomId();
                const altText = typeof caption == 'string' ? caption : '';

                markup = `
                    <aside class="widget widget-lightbox">
                        <div class="lightbox-thumbnail" onclick="document.getElementById('lightbox-${lightboxId}').showModal()">
                            <img src="${imagePath}" alt="${altText}" loading="lazy" decoding="async">
                        </div>
                        <dialog id="lightbox-${lightboxId}" class="lightbox-dialog" onclick="if (event.target === this || event.target.classList.contains('lightbox-content') || event.target.classList.contains('lightbox-fullsize-image')) { this.close(); }">
                            <div class="lightbox-content">
                                <button class="lightbox-close" onclick="event.stopPropagation(); this.closest('dialog').close()">
                                    <span class="icon-x | fs-6 | c-primary-500"></span>
                                </button>
                                <div class="lightbox-fullsize-image" style="background-image: url('${imagePath}')" role="img" aria-label="${altText}"></div>
                                ${caption ? `<p class="lightbox-caption">${caption}</p>` : ''}
                            </div>
                        </dialog>
                    </aside>
                `;
            } else {
                console.log(`lightbox shortcode: imagePath is required`);
            }
            return markup;
        }
    }
}