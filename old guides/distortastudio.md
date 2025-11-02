---
layout: guide.liquid
title: Distortastudio Assembly Guide
product: Distortastudio
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/distortastudio-cassette-4-track-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/distortastudio/distortastudio-sorting.pdf
schematic_url:
---

{% lightbox 'https://www.diyrecordingequipment.com/products/distortastudio-cassette-4-track-colour', 'md' %}

Thank you for purchasing a <a href="https://www.diyrecordingequipment.com/products/distortastudio-cassette-4-track-colour">Distortastudio Colour</a>.

If this is your first DIY project ever, we recommend reading our <a href="http://www.diyrecordingequipment.com/pages/getting-started">Getting Started Guide</a>.

Before you begin, check the revision of your PCB. If yours says "Rev A 2015" on the top side, follow the <a href="https://www.diyrecordingequipment.com/pages/distortastudio-manual">Rev A assembly guide</a>. If yours does not say "Rev A" on the front, you are on the correct page.

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/distortastudio/distortastudio-sorting.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the <a href="%base_url%/assets/distortastudio/distortastudio-sorting.pdf" target="_blank">Component Sorting Sheet (PDF)</a>.

## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/distortastudio/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/distortastudio/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/distortastudio/ic-sockets.jpg', 'md' %}

### Tape and Solder IC Sockets {.step}

Insert the IC sockets so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/distortastudio/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/distortastudio/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/distortastudio/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors (Bag 3) {.step}
---

{% lightbox '/assets/distortastudio/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/distortastudio/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## ICs (Bag 4) {.step}

---

{% lightbox '/assets/distortastudio/ics.jpg', 'md' %}

### Place ICs in Sockets {.step}

The leads of the ICs must be slightly bent to fit perfectly into the sockets. For each IC, press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the sockets. Place all of the ICs in this direction, and press them completely into the sockets.

## Final Checks {.step}
---

Before you wrap up, check the following things:

@[/checks/capacitor.html]  
@[/checks/resistor.html] 
@[/checks/ic.html]
@[/checks/solder.html]
---

    <img src="%base_url%/assets/distortastudio/finished-600.jpg" />
### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](http://www.diyrecordingequipment.com/pages/support)

---

## Help Us Improve

{% feedbackForm %}