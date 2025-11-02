---
layout: guide.liquid
title: JFT Assembly Guide
product: JFT Colour
kit_sku: KIT-014.02
version: "1.1"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/jft-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/jft/jft-mkii-sorting-1.1.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/JFT_mkII_Schematic.pdf?375
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

{% alert 'This guide is for the JFT mkII, if you purchased the earlier version see the [JFT mkI assembly guide](https://www.diyrecordingequipment.com/pages/jft-manual).', 'warning', 'Version Check' %}

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}
{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/jft/jft-mkii-sorting-1.1.pdf)', '/assets/pdf-download.png' %}


## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/jft/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/jft/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/jft/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

{% resCalc %}

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/jft/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/jft/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/jft/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Transistors (Bag 3) {.step}

---

{% lightbox '/assets/jft/trans-2SK170.jpg', 'md' %}

### Populate 2SK170 Transistor {.step}
Place the 2SK170 transisor it in the position marked with its name on the PCB. Check that it is oriented according to the shape on the PCB, then solder and trim.

---

{% lightbox '/assets/jft/trans-bc327.jpg', 'md' %}

### Populate BC327 Transistors {.step}

Note that there are two different types of transistors in this bag: some with silver markings on top and some without. Those without a marking are the BC327s. Place them in the positions that have an outline of the transistor instead of a filled-in shape. Make sure the transistors are aligned so the flat edge matches that of the outline on the board. Then solder and trim.
There are four BC327 transistors.

---

{% lightbox '/assets/jft/trans-bc337.jpg', 'md' %}

### Populate BC337 Transistors {.step}

Place the transistors that do have a silver marking in the positions with a filled-in shape. Check that they are all oriented according to the shape on the PCB, then solder and trim.
There is only one BC337 transistor.

## Capacitors (Bag 3 Cont.) {.step}

---

{% lightbox '/assets/jft/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/jft/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## Final Checks
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'transistor', 'resistor', 'solder', 'trim' %}
---

{% lightbox '/assets/jft/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}