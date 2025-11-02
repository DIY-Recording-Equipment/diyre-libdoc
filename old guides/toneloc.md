---
layout: guide.liquid
title: Toneloc Assembly Guide
product: Toneloc
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/toneloc-level-loc-compressor-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/toneloc/toneloc-sorting-2.0.pdf
schematic_url:
---

Welcome to the Toneloc assembly guide.
Thank you for purchasing a <a href="https://www.diyrecordingequipment.com/products/toneloc-level-loc-compressor-colour">Toneloc</a>

If this is your first DIY project ever, we recommend reading our <a href="http://www.diyrecordingequipment.com/pages/getting-started">Getting Started Guide</a>.

This guide is for the Toneloc 2.0, if you purchased the earlier version see the <a href="https://www.diyrecordingequipment.com/pages/tone-loc-assembly-guide">Toneloc 1.0 assembly guide</a>.

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/toneloc/toneloc-sorting-2.0.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the <a href="%base_url%/assets/toneloc/toneloc-sorting-2.0.pdf" target="_blank">Component Sorting Sheet (PDF)</a>.

## Standoffs and Header (Bag 1) {.step}

---

{% lightbox '/assets/toneloc/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/toneloc/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/toneloc/ic-socket.jpg', 'md' %}

### Tape and Solder IC Socket {.step}

Insert the IC socket so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Transistors, Header, and IC {.step}

---

{% lightbox '/assets/toneloc/transistors.jpg', 'md' %}

### Populate Transistors {.step}

There are two important things to note about transistors. First, the orientation: one side of the body is flat while the other is round. And second, the part number: carefully check the markings on the sorting sheet against those on the body before inserting them.

Identify the transistors, place them in the correct positions orientation, double check, and then solder and trim.

---

{% lightbox '/assets/toneloc/header.jpg', 'md' %}

### Tape and Solder Header {.step}

Place the 3-pin header with the longer side of the pins facing up. As you did with the IC socket, tape the header in place, flip the PCB, and solder.

For the moment, set aside the black, plastic jumper. You will use this at the end to set the release option.

---

{% lightbox '/assets/toneloc/ic.jpg', 'md' %}

### Place IC in Socket {.step}

The leads of the IC must be slightly bent to fit perfectly into the socket. Press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the socket. Place the IC in this direction, and press it completely into the socket.

## Small Capacitors {.step}

---

{% lightbox '/assets/toneloc/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

## Large Capacitors {.step}

---

{% lightbox '/assets/toneloc/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

Some of these capacitors are polarized, so they must be placed in a certain direction. The polarized capacitors are marked with a stripe on the body. On these the positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## Final Checks {.step}
---

Before you wrap up, check the following things:

@[/checks/capacitor.html]   
@[/checks/transistor.html]
@[/checks/ic.html]
@[/checks/solder.html]
---

{% lightbox '/assets/toneloc/finished.jpg', 'md' %}

### Complete! {.step}

Congrats on assembling your Toneloc Colour!

        <strong>Setting the Release Option:</strong> Place jumper you set aside in step 2.2 on the 3-pin header to set the release time. FST is the default option which matches the behavior of the original unit. SLO is slower than the original release time, and will make the compression smoother and less aggressive. Part of the character of the Toneloc is that the release time varies based on the input level, so there is no single time constant for either setting. To match your Toneloc 2.0 to a Toneloc 1.0, use the FST setting.

---

## Help Us Improve

{% feedbackForm %}