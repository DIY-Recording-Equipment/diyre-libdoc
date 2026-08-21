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

## Build & deploy (GitHub Actions)

`.github/workflows/deploy.yml` builds and ships the site automatically — normally there's no need to build/deploy by hand.

- **Trigger**: every push to `main` runs it. It can also be run manually without a new commit — GitHub web UI → repo → **Actions** tab → **Build and deploy to SiteGround** → **Run workflow** (this works because the workflow also listens for `workflow_dispatch`).
- **Runner**: it runs on a **self-hosted runner — Peterson's own machine**, not one of GitHub's cloud runners, because SiteGround blocks/drops SSH connections from GitHub-hosted runners' datacenter IP ranges before the handshake completes; this machine's normal IP reaches SiteGround fine. The runner is installed at `~/actions-runner` and runs as a background launchd service (`actions.runner.DIY-Recording-Equipment.diyre-libdoc-runner`). **It must be running for pushes/dispatches to actually pick up and deploy** — check/control it with:
  ```
  ~/actions-runner/svc.sh status
  ~/actions-runner/svc.sh start    # or stop
  ```
- **What the job does, in order**: checkout → `npm ci` → clean build (`rm -rf _site && npx @11ty/eleventy`) → a guard step that aborts the deploy if any built file still references the Eleventy dev-server's `.11ty/image` endpoint (catches a stray `--serve` process leaking dev-only URLs into the shipped HTML) → `rsync -avz` of `_site/` to SiteGround over SSH. The rsync has **no `--delete` flag** — files removed locally are left in place on the server rather than being removed, so anything placed on the server outside of `_site/` (e.g. `mail-config.php`, see "Support / contact form" above) is never touched by a deploy.
- **Secrets** (GitHub repo → Settings → Secrets and variables → Actions, already configured): `SITEGROUND_SSH_KEY`, `SITEGROUND_SSH_HOST`, `SITEGROUND_SSH_PORT`, `SITEGROUND_SSH_USER`, `SITEGROUND_REMOTE_PATH`.

### ⚠️ Dev-server restart gotcha

The `--serve` file watcher rebuilds templates on save, but **two categories of change require a full server restart** to actually take effect (stop the process, start it again — a rebuild alone silently keeps serving stale behavior):

1. **`settings.json`** — `_data/libdocConfig.js` reads it via Node's `require()` (a documented workaround for JSON imports, see comment at top of that file), which caches for the life of the process.
2. **`_data/libdocFunctions.js`** (or anything that changes shortcode/filter *behavior*) — shortcodes and filters are registered once from `.eleventy.js`'s config function at process startup; editing the function body doesn't re-register it.

Plain `.md` content edits and `_includes/*.liquid` template edits rebuild fine incrementally.

## Content structure

- Guides live as `.md` files at repo root (`ctx.md`, `ssdiy.md`) — each is a full assembly manual, `layout: guide.liquid`.
- `contact.md` / `contact-thanks.md` — the troubleshooting support-request page and its post-submit confirmation page. Neither is an assembly guide, so both use `layout: support.liquid` instead of `guide.liquid` (see "Support / contact form" below).
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

## Support / contact form

`/contact/` (`contact.md`) is a self-hosted troubleshooting-request form — separate from the older `{% feedbackForm %}` (post-build feedback, posts to the third-party FormSubmit.co, no attachments). It emails `support@diyrecordingequipment.com` directly with photo attachments, via a plain PHP backend rather than a Node/serverless function, because Eleventy only ever outputs static files and this site has no other server runtime.

- **Layout**: `_includes/support.liquid` — a trimmed copy of `guide.liquid` for non-guide content (this page, and any future FAQ/troubleshooting docs). Keeps the head/scripts, logo header, TOC, and the "Last modified" badge; drops the Version/Estimated Time/Complexity badges, which are assembly-guide-only metadata.
- **Form markup**: written directly as raw HTML in each page's markdown (no shortcode) — there's no shared `feedbackForm`-style fragment because multiple different support-form variants are expected over time, each with its own field set. Every such form must: POST to `/support-form-handler.php` with `enctype="multipart/form-data"`, include a hidden `_subject` field (the email subject), and include the honeypot markup pattern used in `contact.md` (`class="hp-field"` wrapper + `tabindex="-1"` input named `website`) for spam deterrence — there's no CAPTCHA in this pipeline.
- **Backend**: `support-form-handler.php` (repo root) is one generic handler shared by every form — it has no fixed field list, it just emails whatever non-control `$_POST` fields a given form sent. It sends via **PHPMailer** (vendored, unmodified, at `phpmailer/src/` — LGPL 2.1 licensed, not MIT) over authenticated SMTP as the real `support@diyrecordingequipment.com` mailbox (not PHP's `mail()`), which keeps the message SPF/DKIM-aligned so it doesn't get flagged as spam. Both `support-form-handler.php` and `phpmailer/` are added to `.eleventy.js`'s passthrough-copy list so the normal build → `_site/` → rsync-to-SiteGround pipeline ships them untouched — no CI/deploy changes needed.
- **SMTP credentials — one-time manual step, required before the form works**: the real password lives in `mail-config.php` (see `mail-config.example.php` for the fields it needs), which is git-ignored and deliberately **not** in the passthrough-copy list, so it's never in `_site/` or in this repo's history. Upload it by hand once via SFTP/SSH directly into the same SiteGround directory `support-form-handler.php` lands in (`SITEGROUND_REMOTE_PATH` from `deploy.yml`). Because that workflow's rsync has no `--delete` flag, it can never be overwritten or removed by a future automated deploy.

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
