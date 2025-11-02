---
layout: guide.liquid
title: Colourphone Assembly Guide
product: Colourphone
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/colourphone-telephone-distortion-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url:
schematic_url:
---

Thank you for purchasing a [{{ product }}]({{ product_url }})

If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}).

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}

---

{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet]({{ sorting_sheet_url }})', '/assets/pdf-download.png' %}


## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/colourphone/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/colourphone/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/tsx/ic-socket.jpg', 'md' %}

### Tape and Solder IC Socket {.step}

Insert the IC socket so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.
</div

---

{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/colourphone/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/colourphone/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/colourphone/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors and Diode (Bag 3) {.step}
---

{% lightbox '/assets/tsx/diode.jpg', 'md' %}

### Populate Diode {.step}

Place the diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

---

{% lightbox '/assets/colourphone/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

## IC (Bag 4) {.step}

---

{% lightbox '/assets/colourphone/ic.jpg', 'md' %}

### Place IC in Socket {.step}

The leads of the IC must be slightly bent to fit perfectly into the socket. Press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the socket. Place the IC in this direction, and press it completely into the socket. 

## Transformers (Bag 5) {.step}

---

{% lightbox '/assets/colourphone/trafo.jpg', 'md' %}

### Place Transformer {.step}
Place the transformer in the T1 position, solder, and trim the leads.

## Final Checks
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'resistor', 'ic', 'diode', 'solder', 'trim' %}
---

{% lightbox '/assets/colourphone/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}