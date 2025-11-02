---
layout: guide.liquid
title: Shortcodes Guide
version: "1.0"
---

This guide explains all available shortcodes you can use in your markdown files. Shortcodes are special tags that let you add interactive elements, images, alerts, and more to your documentation.

## Table of Contents

- [alert](#alert) - Display colorful alert boxes
- [icon](#icon) - Display a single icon
- [iconCard](#iconcard) - Display a card with icon/image and text
- [tool](#tool) - Display a tool card from tools.json data
- [lightbox](#lightbox) - Display images in a gallery with click-to-zoom
- [embed](#embed) - Embed external content like YouTube videos
- [stepParts](#stepparts) - Display parts needed for an assembly step
- [stepResistors](#stepresistors) - Display resistors in a sortable table
- [resCalc](#rescalc) - Display an inline resistor color code calculator
- [checks](#checks) - Display a checklist from checks.json data
- [feedbackForm](#feedbackform) - Insert a feedback form

---

## alert

Display colorful alert boxes to highlight important information.

**Parameters:**
- `content` (required) - The message to display
- `type` (optional) - The style of alert: `info`, `warning`, `success`, or `danger`
- `title` (optional) - A heading for the alert box

**Defaults:**
- If no type is specified, displays a plain alert
- If no title is specified, no heading is shown

**Examples:**

Basic alert:
`{% raw %}{% alert 'This is a basic alert message.' %}{% endraw %}`
{% alert 'This is a basic alert message.' %}

Danger alert with title:
`{% raw %}{% alert 'This guide is for version 3. For older versions, see the legacy guide.', 'danger', 'Version check' %}{% endraw %}`
{% alert 'This guide is for version 3. For older versions, see the legacy guide.', 'danger', 'Version check' %}

Warning alert with title:
`{% raw %}{% alert 'Install the locking end of the standoffs into the PCB.', 'warning', 'Note' %}{% endraw %}`
{% alert 'Install the locking end of the standoffs into the PCB.', 'warning', 'Note' %}

Success alert with title:
`{% raw %}{% alert 'To measure resistors quickly, you can remove the probes from your multi-meter and place the resistor leads directly in the probe sockets.', 'success', 'Tip' %}{% endraw %}`
{% alert 'To measure resistors quickly, you can remove the probes from your multi-meter and place the resistor leads directly in the probe sockets.', 'success', 'Tip' %}

Info alert with title:
`{% raw %}{% alert 'Parts data has been updated.', 'info', 'Information' %}{% endraw %}`
{% alert 'Parts data has been updated.', 'info', 'Information' %}

---

## icon

Display a single icon from the available icon library.

**Parameters:**
- `iconName` (required) - The name of the icon (see all available icons using the `icomoon` shortcode)
- `iconSize` (optional) - Size from 1 to 10

**Defaults:**
- If no size is specified, the icon displays at its default size

**Examples:**

Default size:
`{% raw %}{% icon 'check-circle' %}{% endraw %}`
{% icon 'check-circle' %}

Medium size (5):
`{% raw %}{% icon 'check-circle', 5 %}{% endraw %}`
{% icon 'check-circle', 5 %}

Large size (8):
`{% raw %}{% icon 'faders', 8 %}{% endraw %}`
{% icon 'faders', 8 %}

---

## iconCard

Display a card with an icon or image alongside text, perfect for tool lists or feature descriptions.

**Parameters:**
- `mainText` (required) - The heading text
- `description` (required) - The description text (can include HTML)
- `iconOrImage` (optional) - Either an icon name OR a path to an image file

**Defaults:**
- If no third parameter is provided, displays a default check-circle icon

**Examples:**

With an icon:
`{% raw %}{% iconCard 'Configure', 'Start entering your own settings into settings.json at the root of the project.', 'faders' %}{% endraw %}`
{% iconCard 'Configure', 'Start entering your own settings into settings.json at the root of the project.', 'faders' %}

With an image:
`{% raw %}{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones do not have enough power.', '/assets/tools/soldering-iron.jpg' %}{% endraw %}`
{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones do not have enough power.', '/assets/tools/soldering-iron.jpg' %}

With default icon:
`{% raw %}{% iconCard 'Getting Started', 'Follow these steps to begin your project.' %}{% endraw %}`
{% iconCard 'Getting Started', 'Follow these steps to begin your project.' %}

---

## tool

Display a tool card using data from the tools.json file. This shortcode automatically pulls the tool's name, description, and image based on the slug.

**Parameters:**
- `slug` (required) - The tool's slug identifier from tools.json

**Available tool slugs:**
- `500ext` - 500EXT Extender
- `desoldering-pump` - Desoldering Pump
- `flathead` - Flat Head Screwdriver
- `multi-meter` - Multi-meter
- `phillips` - Phillips Head Screwdriver
- `pliers` - Needle-nose Pliers
- `res-calc` - Resistor Calculator
- `rew` - Room EQ Wizard (REW)
- `solder` - Solder
- `soldering-iron` - Soldering Iron
- `tape` - Tape
- `wire-cutters` - Wire Cutters

**Examples:**

Soldering iron:
`{% raw %}{% tool 'soldering-iron' %}{% endraw %}`
{% tool 'soldering-iron' %}

Solder:
`{% raw %}{% tool 'solder' %}{% endraw %}`
{% tool 'solder' %}

Multi-meter:
`{% raw %}{% tool 'multi-meter' %}{% endraw %}`
{% tool 'multi-meter' %}

**Note:** The tool data is maintained in `_data/tools.json`. To add or modify tools, edit that file.

---

## lightbox

Display one or more images in a gallery with click-to-zoom functionality.

**Parameters:**
- `img1` through `img8` - Paths to up to 8 images
- `size` (optional, last parameter) - Thumbnail size: `sm`, `md`, or `lg`

**Defaults:**
- Size defaults to `sm` if not specified

**Examples:**

Single image, small size:
`{% raw %}{% lightbox '/assets/15ips3/diodes.jpg' %}{% endraw %}`
{% lightbox '/assets/15ips3/diodes.jpg' %}

Single image, medium size:
`{% raw %}{% lightbox '/assets/15ips3/diodes.jpg', 'md' %}{% endraw %}`
{% lightbox '/assets/15ips3/diodes.jpg', 'md' %}

Multiple images, small size:
`{% raw %}{% lightbox '/assets/15ips3/diodes.jpg', '/assets/15ips3/led.jpg', '/assets/15ips3/caps-small.jpg', 'sm' %}{% endraw %}`
{% lightbox '/assets/15ips3/diodes.jpg', '/assets/15ips3/led.jpg', '/assets/15ips3/caps-small.jpg', 'sm' %}

---

## embed

Embed external content like YouTube videos or other iframe content.

**Parameters:**
- `src` (required) - The full URL to the content
- `height` (optional) - Height of the iframe

**Defaults:**
- Height is automatic if not specified

**Examples:**

Automatic height:
`{% raw %}{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ' %}{% endraw %}`
{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ' %}

Custom height:
`{% raw %}{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ', '500' %}{% endraw %}`
{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ', '500' %}

---

## stepParts

Display parts needed for a specific assembly step, pulling data from Airtable.

**Parameters:**
- `stepNumber` (required) - The step identifier (e.g., '1.1', '2.3')
- `kitSku` (required) - The kit SKU (usually passed from frontmatter as `kit_sku`)

**Setup Required:**

1. Add `kit_sku` to your page's frontmatter:`yaml
---
layout: guide.liquid
title: Assembly Guide
kit_sku: KIT-012.06
---`

2. Run `npm run fetch-parts` to download parts data from Airtable

**Examples:**

Display parts for step 1.1:
`{% raw %}{% stepParts '1.1', kit_sku %}{% endraw %}`

Display parts for step 2.3:
`{% raw %}{% stepParts '2.3', kit_sku %}{% endraw %}`

**Output:** The parts data shows reference designators, item names, quantities, images, and markings for each part used in that step. Resistors are automatically excluded from this shortcode - use `stepResistors` to display resistors.

**Note:** This shortcode requires valid parts data in `_data/partsCache.json` generated by the `npm run fetch-parts` command.

---

## stepResistors

Display resistors needed for a specific assembly step in a sortable table format, pulling data from Airtable.

**Parameters:**
- `stepNumber` (required) - The step identifier (e.g., '2.2', '3.1')
- `kitSku` (required) - The kit SKU (usually passed from frontmatter as `kit_sku`)

**Setup Required:**

1. Add `kit_sku` to your page's frontmatter:`yaml
---
layout: guide.liquid
title: Assembly Guide
kit_sku: KIT-012.06
---`

2. Run `npm run fetch-parts` to download parts data from Airtable

**Examples:**

Display resistors for step 2.2:
`{% raw %}{% stepResistors '2.2', kit_sku %}{% endraw %}`

Display resistors for step 3.1:
`{% raw %}{% stepResistors '3.1', kit_sku %}{% endraw %}`

**Output:** Displays a table with three columns: Reference (reference designator), Value (resistor value), and Color Code (color-coded bands). Resistors are automatically sorted alphanumerically by reference designator.

**Note:** This shortcode only displays parts where the Type field contains "COM Resistor". All other parts are excluded. This shortcode requires valid parts data in `_data/partsCache.json` generated by the `npm run fetch-parts` command.

---

## resCalc

Display an inline resistor color code calculator and identifier. This interactive tool helps users identify resistor values by color bands or find the color code for a specific resistance value.

**Parameters:**
- None

**Examples:**

Basic usage:
`{% raw %}{% resCalc %}{% endraw %}`
{% resCalc %}

**Features:**
- Interactive color band selector
- Reverse lookup (enter value to see color bands)
- Visual resistor representation with SVG graphics
- Supports 4-band and 5-band resistors
- Automatic calculation of resistance values

**Note:** The calculator loads its own dependencies (jQuery and Snap.svg) dynamically only if they're not already present on the page. Multiple instances of the calculator on the same page will share the same dependencies.

---

## checks

Display a checklist using data from the checks.json file. This shortcode automatically generates an unordered list with check descriptions based on the slugs provided.

**Parameters:**
- `slug1`, `slug2`, etc. (required) - One or more check slugs from checks.json

**Available check slugs:**
- `capacitor` - Capacitor orientation check
- `diode` - Diode orientation check
- `ic` - IC orientation check
- `resistor-array` - Resistor array orientation check
- `resistor` - Resistor position check
- `solder` - Soldering quality check
- `trim` - Lead trimming check
- `transistor` - Transistor orientation check

**Examples:**

Single check:
`{% raw %}{% checks 'resistor' %}{% endraw %}`
{% checks 'resistor' %}

Multiple checks:
`{% raw %}{% checks 'resistor', 'capacitor', 'diode' %}{% endraw %}`
{% checks 'resistor', 'capacitor', 'diode' %}

All orientation checks:
`{% raw %}{% checks 'capacitor', 'diode', 'ic', 'resistor-array', 'transistor' %}{% endraw %}`
{% checks 'capacitor', 'diode', 'ic', 'resistor-array', 'transistor' %}

Quality checks:
`{% raw %}{% checks 'solder', 'trim' %}{% endraw %}`
{% checks 'solder', 'trim' %}

**Note:** The check data is maintained in `_data/checks.json`. To add or modify checks, edit that file.

---

## feedbackForm

Insert a feedback form into your page.

**Parameters:**
- None

**Examples:**

`{% raw %}{% feedbackForm %}{% endraw %}`
{% feedbackForm %}