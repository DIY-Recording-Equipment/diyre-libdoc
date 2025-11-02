---
layout: guide.liquid
title: CTX Assembly Guide
product: CTX Colour
kit_sku: KIT-013.03
version: "2.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/ctx-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/ctx/ctx-mkii-sorting-1.0.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/CTX_mkII_Schematic.pdf?375
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

{% alert 'This guide is for the CTX mkII, if you purchased the earlier version see the [CTX mkI assembly guide](https://www.diyrecordingequipment.com/pages/ctx-manual).', 'warning', 'Version Check' %}

## Tools

### Required

{% tool 'soldering-iron' %} 
{% tool 'solder' %} 
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %} 
{% tool 'desoldering-pump' %}
{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/ctx/ctx-mkii-sorting-1.0.pdf)', '/assets/pdf-download.png' %}


## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/ctx/colour-standoffs.jpg', 'md' %} 

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/ctx/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

## DOA Sockets (Bag 1 Cont.) {.step}

---

{% lightbox '/assets/ctx/tape-sockets.jpg', 'md' %}

### Tape DOA Sockets {.step}
Place the six DOA sockets in the PCB from the top. Then hold them in place with a piece of low-tack tape.

---

{% lightbox '/assets/ctx/solder-sockets.jpg', 'md' %}

### Solder DOA Sockets {.step}
Solder the sockets from the bottom of the PCB.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/ctx/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/ctx/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/ctx/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/ctx/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors (Bag 3) {.step}
---

{% lightbox '/assets/ctx/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/ctx/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## Transformer and DOA {.step}
---

{% lightbox '/assets/ctx/trafo.jpg', 'md' %}

### Place Transformer {.step}
Look closely at the transformer and find the four pins with small magnet wires attached to them. Insert the transformer into the PCB so that this row of pins faces the other components. The first of these wired pins will be inserted into the square pad on the PCB. If in doubt about the correct orientation, see the picture for the next step for reference. Flip the PCB over and solder in a 'zig-zag' fashion, alternating from one side to the other in order to prevent the transformer pins from overheating.

---

{% lightbox '/assets/ctx/insert-doa.jpg', 'md' %}

### Insert DOA {.step}
Follow the instructions in the RED-25 Assembly Guide:

[RED-25 Assembly Guide](https://www.diyrecordingequipment.com/pages/red-25-assembly-guide)

Once assembled, insert the DOA into the socket.

## Final Checks
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'transistor', 'resistor', 'solder', 'trim' %}
---

{% lightbox '/assets/ctx/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}