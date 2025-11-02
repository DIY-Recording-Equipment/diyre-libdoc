---
layout: guide.liquid
title: HC1 Assembly Guide
product: HC1
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/hc1
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url:
schematic_url:
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

This guide is for the HC1 full kit, which includes a chassis and power supply. If you are building the partial kit, head over to the [HC1 Partial Kit Assembly Guide](https://www.diyrecordingequipment.com/pages/hc1-assembly-guide).

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}
{% tool 'phillips' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}

### Component Sorting Sheet
---

{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet]({{ sorting_sheet_url }})', '/assets/pdf-download.png' %}


## Resistors {.step}

---

{% lightbox '/assets/hc1/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.
R1, R4, R7, R10, RLED<br>4.7k resistor (x5)

            <img src="/assets/parts/com-r-4.7k.png">
R2, R8<br>2.2k resistor (x2)

            <img src="/assets/parts/com-r-2.2k.png">
R3, R9<br>1k resistor (x2)

            <img src="/assets/parts/com-r-1k.png">
R5, R6, R11, R12<br>1R resistor (x4)

            <img src="/assets/parts/com-r-1.png">

---

{% lightbox '/assets/hc1/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/hc1/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/hc1/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Small Capacitors, Diodes, and ICs {.step}

---

{% lightbox '/assets/hc1/caps-small.jpg', 'md' %}

### Populate Bypass Capacitors {.step}

Populate the yellow .1uF capacitors in the positions marked CB etc. These capacitors are known as “bypass capacitors,” hence the designator CB.
CB1-CB4<br>.1u ceramic cap (x4)

            <img src="/assets/parts/com-c004.png">

---

{% lightbox '/assets/hc1/diode.jpg', 'md' %}

### Populate Diode {.step}

Place the diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.
D1<br>1N4004 diode

            <img src="/assets/parts/com-d005.png">

---

{% lightbox '/assets/hc1/led-right-angle.jpg', 'md' %}

### Populate LED {.step}

Place the LED with the longer, positive lead in the "+" hole. Notice that the leads have a flat segment about 1/4" from the LED body. Insert the LED until the bottom of this flat segment, then bend it towards where the panel will be, solder it in place, and trim the leads.
LED1<br>Red LED

            <img src="/assets/parts/com-d009.png">

---

{% lightbox '/assets/hc1/ic-sockets.jpg', 'md' %}

### Tape and Solder IC Sockets {.step}

Insert the IC sockets so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.
IC1, IC2<br>IC socket (x2)

            <img src="/assets/parts/com-h009.png">

---

{% lightbox '/assets/hc1/ics.jpg', 'md' %}

### Place ICs in Sockets {.step}

The leads of the ICs must be slightly bent to fit perfectly into the sockets. For each IC, press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the sockets. Place all of the ICs in this direction, and press them completely into the sockets.
IC1, IC2<br>NE5532 opamp (x2)

            <img src="/assets/parts/com-u-dip8.png">
Markings: NE5532P

## Inductor and Large Capacitors {.step}

---

{% lightbox '/assets/hc1/inductor.jpg', 'md' %}

### Populate Inductor {.step}

Place the inductor, solder, and trim. Inductors are not polarized.
L1<br>470u inductor

        <img src="/assets/parts/com-l008.png">

---

{% lightbox '/assets/hc1/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.
C1, C2<br>220u cap (x2)

        <img src="/assets/parts/com-c002.png">
C3, C4<br>100u cap (x2)

        <img src="/assets/parts/com-c022.png">
C5<br>2200u cap (x4)

        <img src="/assets/parts/com-c043.png">

## Potentiometer and Jacks {.step}

---

{% lightbox '/assets/hc1/potentiometer.jpg', 'md' %}

### Populate Potentiometer {.step}

Place the potentiometer. Bend the two outer leads against the PCB, then solder and trim.

---

{% lightbox '/assets/hc1/dc-jack.jpg', 'md' %}

### Populate Jacks {.step}
Place the DC and audio jacks, solder, and trim the leads.

## Final Checks and Testing {.step}

---

Before you wrap up, check the following things:

{% checks 'capacitor', 'diode', 'ic', 'resistor', 'solder' %}
---

{% lightbox '/assets/l2a/test-power.jpg', 'md' %}

### Test Power {.step}
Plug the external power supply into the wall and the HC1. If the LED on the front panel illuminates, the power is working. If it doesn't illuminate, most likely one of these parts is in backwards: C1, C2, C5, LED1.

---

{% lightbox '/assets/l2a/test-power.jpg', 'md' %}

### Test Audio {.step}
The HC1 accepts unbalanced inputs via either a single stereo cable in the L jack, or two mono cables in both the L and R jacks. Send audio to the HC1's inputs, turn the LEVEL control down completely (counter-clockwise), then plug in headphones. Gradually turn up LEVEL; if you hear the audio clearly in both headphones the HC1 is working correctly.

---

{% lightbox '/assets/hc1/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}