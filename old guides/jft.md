---
layout: guide.liquid
title: JFT Mk II Assembly Guide
product: JFT Mk II
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/jft-colour
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/jft/jft-mkii-sorting-1.1.pdf
schematic_url:
---

{% lightbox 'https://www.diyrecordingequipment.com/products/jft-colour', 'md' %}

Thank you for purchasing a <a href="https://www.diyrecordingequipment.com/products/jft-colour">JFT Colour!</a>

If this is your first DIY project ever, we recommend reading our <a href="http://www.diyrecordingequipment.com/pages/getting-started">Getting Started Guide</a>.

This guide is for the JFT mkII, if you purchased the earlier version see the <a href="https://www.diyrecordingequipment.com/pages/jft-manual">JFT mkI assembly guide</a>.

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/jft/jft-mkii-sorting-1.1.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the <a href="%base_url%/assets/jft/jft-mkii-sorting-1.1.pdf" target="_blank">Component Sorting Sheet (PDF)</a>.

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

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

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

<H1>Quick Question</H1>
    <form action="https://formsubmit.co/hi2zl04q@robot.zapier.com" method="POST" target="_blank" id="form-usage">
    <input type="hidden" name="_replyto">
    <input type="hidden" name="_subject" value="%meta.title%">
@[/mods/usage-feedback-nomap.html]
    </form>

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

<!--- List of Modules
caps-large.html
caps-small.html
colour-header.html
colour-standoffs.html
diodes.html
inductors.html
res-bend.html
res-place.html
res-solder.html
res-trim.html
trans-bc327.html
-->

## Final Checks {.step}
---

Before you wrap up, check the following things:

@[/checks/capacitor.html]  
<!--@[/checks/diode.html]    -->
@[/checks/transistor.html]
@[/checks/resistor.html] 
@[/checks/solder.html]
---

{% lightbox '/assets/jft/finished.jpg', 'md' %}

### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](http://www.diyrecordingequipment.com/pages/support)

---

## Help Us Improve

{% feedbackForm %}