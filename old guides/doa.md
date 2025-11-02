---
layout: guide.liquid
title: DOA Colour Assembly Guide
product: DOA Colour
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/doa-colour-kit
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/doa/doa-sorting-1.1.pdf
schematic_url:
---

{% lightbox 'https://www.diyrecordingequipment.com/products/doa-colour-kit', 'md' %}

Thank you for purchasing a <a href="https://www.diyrecordingequipment.com/products/doa-colour-kit">DOA Colour</a>.

Before you begin, check the revision of your PCB. If yours says "Rev A 2015" on the top side, follow the <a href="https://www.diyrecordingequipment.com/pages/doa-colour-assembly-guide">Rev A assembly guide</a>. If yours does not say "Rev A" on the front, you are on the correct page.

If this is your first DIY project ever, we recommend reading our <a href="http://www.diyrecordingequipment.com/pages/getting-started">Getting Started Guide</a>.

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/doa/doa-sorting-1.1.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the <a href="%base_url%/assets/doa/doa-sorting-1.1.pdf" target="_blank">Component Sorting Sheet (PDF)</a>.

## Standoffs, Header, and DOA Sockets (Bag 1) {.step}

---

{% lightbox '/assets/doa/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/doa/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/doa/tape-sockets.jpg', 'md' %}

### Tape DOA Sockets {.step}
Place the six DOA sockets in the PCB from the top. Then hold them in place with a piece of low-tack tape.

---

{% lightbox '/assets/doa/solder-sockets.jpg', 'md' %}

### Solder DOA Sockets {.step}
Solder the sockets from the bottom of the PCB.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/doa/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/doa/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/doa/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors (Bag 3) {.step}
---

{% lightbox '/assets/doa/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/doa/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}
The three 100uF capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. The 470uF cap is not polarized. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## DOA {.step}
---

{% lightbox '/assets/doa/insert-doa.jpg', 'md' %}

### Insert DOA {.step}
Follow the instructions in the RED-25 Assembly Guide:

    <a href="https://www.diyrecordingequipment.com/pages/red-25-assembly-guide">RED-25 Assembly Guide</a>

Once assembled, insert the DOA into the socket.

## Final Checks {.step}
---

Before you wrap up, check the following things:

@[/checks/capacitor.html]  
@[/checks/resistor.html] 
@[/checks/solder.html]
---

{% lightbox '/assets/doa/finished.jpg', 'md' %}

### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](http://www.diyrecordingequipment.com/pages/support)

---

## Help Us Improve

{% feedbackForm %}