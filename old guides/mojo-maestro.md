---
layout: guide.liquid
title: Mojo Maestro Assembly Guide
product: Mojo Maestro
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/mojo-maestro-passive-clipping-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/mojo-maestro/mojo-sorting-2.0.pdf
schematic_url:
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

Before you begin, check the revision of your PCB. If yours says "v1.2 2019" on the top side, follow the [version 1.x assembly guide](https://www.diyrecordingequipment.com/pages/mojo-maestro-assembly-guide). If yours does not say "v1.2 2019" on the top, you are on the correct page.

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}

---

{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/mojo-maestro/mojo-sorting-2.0.pdf)', '/assets/pdf-download.png' %}


## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/mojo-maestro/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/mojo-maestro/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/mojo-maestro/ic-socket.jpg', 'md' %}

### Tape and Solder IC Socket {.step}

Insert the IC socket so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/mojo-maestro/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/mojo-maestro/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/mojo-maestro/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors and Diodes (Bag 3) {.step}

---

{% lightbox '/assets/mojo-maestro/diodes.jpg', 'md' %}

### Populate Diodes {.step}

Place each diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

---

{% lightbox '/assets/mojo-maestro/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/mojo-maestro/switches-slide.jpg', 'md' %}

### Populate Switches {.step}

Place the slide switches and use a small screwdriver to bend a couple of the leads against the bottom of the PCB. Solder and trim.

---

{% lightbox '/assets/mojo-maestro/caps-large.jpg', 'md' %}

### Populate Large Capacitor {.step}

This capacitor is polarized, so it must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitor with the positive lead in the pad next to the "+" marking on the PCB. Double check the orientation, then solder and trim.

## IC (Bag 4) {.step}

---

{% lightbox '/assets/mojo-maestro/ic.jpg', 'md' %}

### Place IC in Socket {.step}

The leads of the IC must be slightly bent to fit perfectly into the socket. Press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the socket. Place the IC in this direction, and press it completely into the socket.

## Final Checks
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'resistor', 'diode', 'ic', 'solder', 'trim' %}
---

{% lightbox '/assets/mojo-maestro/options.jpg', 'md' %}

### Set Options {.step}
The Mojo Maestro contains two options you can set via the slide switches.

<strong>SW1: SYM/ASYM</strong>

Choose between SYM (symmetrical) or ASYM (asymmetrical). In SYM mode the top and bottom of the waveform are clipped. This mode generates even harmonics (2nd, 4th, etc.) and is the more aggressive of the two. In ASYM mode, one of the diodes is taken out of circuit so that only one side of waveform is clipped. This creates both odd and even harmonics, and preserves more of the integrity of the original signal than symmetrical clipping.

<strong>SW2: GLUE/MOJO</strong>

Choose between GLUE for subtle saturation and MOJO for intense distortion. In MOJO mode there is a 4kHz low-pass filter to remove harsh upper harmonics.

---

## Help Us Improve

{% feedbackForm %}