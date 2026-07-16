---
# GUIDE TEMPLATE — copy this file, rename it to your product's slug (e.g. mykit.md), then:
# 1. Replace every PRODUCT NAME / PRODUCT-SLUG / KIT-XXX.XX placeholder below and in the body.
# 2. Put real photos in /assets/PRODUCT-SLUG/ and swap out the placeholder.jpg lightbox
#    references (from /assets/template/placeholder.jpg) for them.
# 3. Duplicate/remove step sections in the body as needed for your kit's actual bags/steps.
# 4. Delete these comment lines.
layout: guide.liquid
title: PRODUCT NAME Assembly Guide
product: PRODUCT NAME
kit_sku: KIT-XXX.XX
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/PRODUCT-SLUG
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/PRODUCT-SLUG/PRODUCT-SLUG-sorting-1.0.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/PRODUCT-SLUG_Schematic.pdf
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

<!-- Optional: use this alert for version notices, known issues, etc. Delete if not needed. -->
{% alert 'Version-specific note goes here, or delete this alert.', 'warning', 'Version Check' %}

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}
{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/PRODUCT-SLUG/PRODUCT-SLUG-sorting-1.0.pdf)', '/assets/pdf-download.png' %}

<!--
Below is one bag/section with its standard step pattern: a photo, then a heading + instructions.
Duplicate this pattern for each bag/section of the build. Give each numbered heading the `{.step}`
class so it's picked up by the table of contents and step numbering.
-->

## Section Name (Bag 1) {.step}

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Step Title {.step}

Step instructions go here.

## Resistors (Bag X) {.step}

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

{% resCalc %}
### Sort Resistors {.step}

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors (Bag X) {.step}

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

<!--
Alternative to resCalc / manual step-by-step above: if this kit's BOM is in Airtable,
tag steps with `{% stepParts 'X.X' %}` (or `{% stepResistors 'X.X' %}` for resistor-only
steps) instead of writing out generic instructions per part. See STEPPARTS-README.md.
-->

## Final Checks

---

Before you wrap up, check the following things:

{% checks 'capacitor', 'transistor', 'resistor', 'solder', 'trim' %}

---

{% lightbox '/assets/template/placeholder.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}
