---
layout: guide.liquid
title: FF1 Assembly Guide
product: FF1
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/ff1-fuzz-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/ff1/FF1_Sorting_Sheet_1.3.pdf
schematic_url:
---

Welcome to the FF1 assembly guide.
Thank you for purchasing a [FF1!](https://www.diyrecordingequipment.com/products/ff1-fuzz-colour)

If this is your first DIY project ever, we recommend reading our [Getting Started Guide](http://www.diyrecordingequipment.com/pages/getting-started).

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/ff1/FF1_Sorting_Sheet_1.3.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet (PDF)](/assets/ff1/FF1_Sorting_Sheet_1.3.pdf).

## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/ff1/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/ff1/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/ff1/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/ff1/halfwattres-place.jpg', 'md' %}

### Place 1/2 Watt Resistors {.step}
In this kit there are two bigger 1/2 resistors. These get placed and soldered like the rest.

---

{% lightbox '/assets/ff1/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/ff1/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Diodes, and Capacitors (Bag 3) {.step}

---

{% lightbox '/assets/ff1/dio-place.jpg', 'md' %}

### Populate Diodes {.step}

Place each diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

## IC Socket (Bag 4) {.step}

---

{% lightbox '/assets/ff1/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/ff1/tape-socket.jpg', 'md' %}

### Tape and Solder IC Socket {.step}
Insert the IC socket so that the notch on the socket aligns with the
markings on the PCB. Secure in place with tape. Then flip the PCB over
and solder in place. Remove the tape.

## Transistors (Bag 4) {.step}
---

{% lightbox '/assets/ff1/2N3904.jpg', 'md' %}

### Place and Solder 2N3904 Transistor {.step}
Place 2N3904 Transistor and bend the leads to hold it in place for soldering.  Make sure the transistor is aligned so the flat edge matches that of the outline on the board. Then solder and trim.

---

{% lightbox '/assets/ff1/2N2369A.jpg', 'md' %}

### Place and Solder 2N2369A Transistor {.step}
Place and bend the leads of the the 2N2369A transistor.

On this transistor, there is a little metal tab that sticks out from the metal case. Make sure this is aligned with the markings on the PCB. Then solder and trim.

---

{% lightbox '/assets/ff1/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## IC (Bag 5) {.step}

---

{% lightbox '/assets/ff1/ic-place.jpg', 'md' %}

### Place IC in Socket {.step}
Using a flat surface and your finger, bend the leads of the IC so they are 90 degrees from the case of the IC.

Line up the IC so that the dot on its surface is on the same side as the notch on the socket. Then push tthe IC into the socket.

## Final Checks {.step}

---

Before you wrap up, check the following things:

{% checks 'capacitor', 'diode', 'transistor', 'resistor', 'solder' %}
---

{% lightbox '/assets/ff1/finished.jpg', 'md' %}

### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}
