# DIYRE Manuals (eleventy-libdoc fork)

Assembly-guide site for DIY Recording Equipment kits, deployed at **https://manuals.diy.re**.
Built on [Eleventy LibDoc](https://eleventy-libdoc.netlify.app/), forked from `ita-design-system/eleventy-libdoc` on **2025-09-15**.

## Remotes

- `origin` → `DIY-Recording-Equipment/diyre-libdoc.git` (this repo)
- `upstream` → `ita-design-system/eleventy-libdoc.git` (the template this was forked from — still actively developed; use `git log origin/main..upstream/main` to see what's changed since the fork point, commit `638f59d`)

## Dev workflow

```
npm install
npx @11ty/eleventy --serve --port=8081     # dev server (8080 is often already in use)
rm -rf _site && npx @11ty/eleventy         # clean production build — always rm -rf first,
                                            # 11ty does not clean stale output between builds
```

Deploy = copy the entire contents of a freshly-built `_site/` to the server. `_site/assets/` is passthrough-copied originals; `_site/img/` is auto-generated resized/reformatted derivatives from the `eleventy-img` plugin — both are required, neither is optional.

### ⚠️ Dev-server restart gotcha

The `--serve` file watcher rebuilds templates on save, but **two categories of change require a full server restart** to actually take effect (stop the process, start it again — a rebuild alone silently keeps serving stale behavior):

1. **`settings.json`** — `_data/libdocConfig.js` reads it via Node's `require()` (a documented workaround for JSON imports, see comment at top of that file), which caches for the life of the process.
2. **`_data/libdocFunctions.js`** (or anything that changes shortcode/filter *behavior*) — shortcodes and filters are registered once from `.eleventy.js`'s config function at process startup; editing the function body doesn't re-register it.

Plain `.md` content edits and `_includes/*.liquid` template edits rebuild fine incrementally.

## Content structure

- Guides live as `.md` files at repo root (`ctx.md`, `ssdiy.md`) — each is a full assembly manual, `layout: guide.liquid`.
- `template.md` — starter template for new guides (copy, rename, fill in placeholders). Excluded from the build via `.eleventyignore` so it doesn't get its own page.
- `old guides/` — legacy guides converted from the old Pico CMS format, currently **excluded from the build** via `.eleventyignore`. Revive by removing the ignore entry once ready.
- `shortcodes-readme.md` / `STEPPARTS-README.md` — shortcode documentation (also build-excluded).
- `.eleventyignore` currently excludes: `README.md`, `STEPPARTS-README.md`, `template.md`, `sandboxes/`, `assets/`, `old guides/`.

### Guide frontmatter convention

```yaml
layout: guide.liquid
title: X Assembly Guide
product: X
kit_sku: KIT-XXX.XX
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/x
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/x/x-sorting.pdf   # optional
schematic_url: https://...                    # optional
```
`product` (or absence of it) is also used as the guide-page-detector in `guide.liquid` — anything with `product` in frontmatter gets the safety-precautions block; search/tags/blog pages don't define it.

### Step pattern

```liquid
## Section Name (Bag 1) {.step}

---

{% lightbox '/assets/slug/image.jpg', 'md' %}

### Step Title {.step}

Instructions as full sentences, imperative mood, terse. See `diyre-manual-tone` skill for voice.
```
`{.step}` on a heading makes it count toward step numbering/TOC (`h2Counter`/`h3Counter` CSS counters in `ds__defaults.css`). Both `h2.step` and `h3.step` are valid standalone — no forced nesting required.

### Shortcodes (`_data/libdocFunctions.js`, registered in `.eleventy.js`)

- `{% tool 'slug' %}` — tool card from `_data/tools.json`
- `{% lightbox 'img1.jpg', ['img2.jpg', ...], 'sm'|'md'|'lg' %}` — GLightbox gallery; size classes defined in `ds__defaults.css` (`.lightbox-size-*`)
- `{% resCalc %}` — inline resistor color-code calculator widget (reads `assets/includes/resCalc.html` + `assets/res-calc/resCalc10.js`)
- `{% stepParts 'X.X' %}` / `{% stepResistors 'X.X' %}` — Airtable-backed parts-list rendering, keyed by page's `kit_sku` + step number. Data comes from `npm run fetch-parts` → `_data/partsCache.json`. **Not currently used by any live guide** (only documented/template examples) — don't assume `.part`/`.res-sort` CSS is dead just because it's unused in current output.
- `{% checks 'capacitor', 'resistor', ... %}` — final-checks list from `_data/checks.json` (valid slugs: capacitor, diode, ic, resistor-array, resistor, solder, trim, transistor)
- `{% feedbackForm %}`, `{% iconCard ... %}`, `{% alert '...', 'warning'|'success'|'info'|'danger', 'Title' %}`

## Where to make changes

- **Visual/theme tweaks**: `assets/css/custom.css` — loaded last (after all `core/` CSS), the intended override point. Prefer this over editing `core/` directly.
- **`core/assets/css/*.css`, `core/assets/js/*.js`, `.eleventy.js`** (shortcode wiring) — these are vendored/upstream-tracked files. Edits here are real merge-conflict risk if `upstream` is ever pulled from. Known high-conflict files if that happens: `core/assets/js/ui.js` (floating TOC + dark-mode code was heavily rewritten in this fork), `core/assets/css/ds__defaults.css` (typography rewritten: Open Sans instead of Recursive, plain `font-weight` instead of `font-variation-settings`), `.eleventy.js` (icomoon removed here vs renamed upstream), `_includes/libdoc_page.liquid` (deleted in this fork, replaced by `guide.liquid` — upstream still edits the old file).
- **Shortcode logic/markup**: `_data/libdocFunctions.js` (remember the restart gotcha above).
- **Site branding/config**: `settings.json` (remember the restart gotcha above). Notable custom keys already wired up: `siteLogoUrl`, `siteLogoMaxHeight` (previously dead config in upstream, now actually used in `guide.liquid`'s header).

## Key deviations from upstream (as of fork)

- Font: Recursive → Open Sans
- Dark mode removed entirely (`ds__dark_mode.css` deleted, toggle UI/logic stripped from `ui.js`)
- Icomoon icon font replaced with a custom icon shortcode system
- Floating TOC rewritten from `<details>/<summary>` to manual `div` + `style.display` toggle in `ui.js`
- `_includes/libdoc_page.liquid` → replaced wholesale by `_includes/guide.liquid`
- New: `tool`, `lightbox`, `feedbackForm`, `resCalc`, `stepParts`, `stepResistors`, `checks` shortcodes; Airtable parts integration (`scripts/fetch-parts.js`); `markdown-it-attrs`, `glightbox`, `airtable`, `dotenv` deps
- Logo header + safety-precautions block added to `guide.liquid` (ported from the old Pico site's `_static` output), gated on `product` frontmatter being present

## Known open items / recent history

- A "step image floats left, text sits right on wide screens" layout redesign was scoped but **not implemented**: would need a new paired shortcode (`stepBlock`) wrapping image + heading + text in a shared flex container (current `lightbox` output is a sibling to the following heading/text, not a parent — floats or a real wrapper are the two options; paired-shortcode wrapper was the direction being pursued last).
- A live-site report ("lightbox and logo not loading on https://manuals.diy.re/ssdiy/") was raised but not yet diagnosed — the live site has bot-detection that blocks automated browser access, so this needs manual console/network inspection by a human, or a report of the actual browser console errors.
- `assets/` contains ~150 files that were previously found deleted-but-uncommitted in git working tree at least once this project's history — if things look missing, check `git status` before assuming they were never added.
