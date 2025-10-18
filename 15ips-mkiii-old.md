---
layout: guide.liquid
title: 15IPS mkIII Assembly Guide
product: 15IPS Colour
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/15ips-colour
support_url: http://www.diyrecordingequipment.com/pages/contact
getting_started_url: http://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/15ips3/15ips-mkiii-sorting.pdf
---

Thank you for purchasing a [{{ product }}]({{ product_url }})</a>

If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}).

{% alert, 'This guide is for the 15IPS mkIII. If you purchased the earlier version, see the [15IPS mkII assembly guide](https://manuals.diy.re/15ips).', 'danger', 'Version check' %}

## Tools

### Required

{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones that plug directly into the wall do not have enough power to create good joints consistently.', '/assets/tools/soldering-iron_small.jpg' %}

{% iconCard 'Solder', 'You can use 60/40 leaded solder or lead-free. We recommend 60/40 because it is easier and more forgiving to use.', '/assets/tools/solder_small.jpg' %}

{% iconCard 'Wire Cutters', 'A good pair will be sharp and have a fine point for cutting leads down to the solder joint.', '/assets/tools/wire-cutters_small.jpg' %}


### Optional

{% iconCard 'Multi-meter', 'A multi-meter is required for some of the test steps and will come in handy if something goes wrong.', '/assets/tools/digital_mm_small.jpg' %}


{% iconCard 'Desoldering Pump', 'If you accidentally solder something in the wrong place, a desoldering pump can save the day.', '/assets/tools/desoldering_small.jpg' %}


{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/15ips3/15ips-mkiii-sorting.pdf) target="_blank">Component Sorting Sheet (PDF)', '/assets/pdf-download.png' %}


   
### Standoffs and Header (Bag 1) {step}

---

![colour standoffs](/assets/15ips3/colour-standoffs.jpg)
###  Insert Standoffs {step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

![colour header](/assets/15ips3/colour-header.jpg)

###  Populate 8-Pin Header {step}

Insert the 8-pin header into the holes marked "CON1." Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

## Resistors (Bag 2) {step}

---

![res bend](/assets/15ips3/res-bend.jpg)

###  Bend Resistors {step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

![res calc](/assets/res_cal.png)

### Sort Resistors {step}

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our <a href="https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator" target="_blank">Resistor Color Code Calculator</a> or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

![res place](/assets/15ips3/res-place.jpg)

### Place Resistors {step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

![res solder](/assets/15ips3/res-solder.jpg)

### Solder Resistors {step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

![res trim](/assets/15ips3/res-trim.jpg)

### Trim Resistors {step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Diodes (Bag 3) {step}

---

![diodes](/assets/15ips3/diodes.jpg)

### Populate Diodes {step}

Place each diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

Note that there are two kinds of diodes. The 1N914 are black and red. The BAT42 may be blue/black or red/black. If they are red/black check the body for the marking "42.".

---

![led](/assets/15ips3/led.jpg)

### Populate LED {step}

Place the LED so that the longer leg goes through the hole with a "+" marking. Double check the polarity, then solder.

## Transistors (Bag 4) {step}

---

![trans bc327](/assets/15ips3/trans-bc327.jpg)

### Populate BC327 Transistors {step}

Note that there are two different types of transistors in this bag: some with silver markings on top and some without. Those without a marking are the BC327s. Place them in the positions that have an outline of the transistor instead of a filled-in shape. Make sure the transistors are aligned so the flat edge matches that of the outline on the board. Then solder and trim.

Those positions are T1, T2, T5, and T7

---

![trans bc337](/assets/15ips3/trans-bc337.jpg)

### Populate BC337 Transistors {step}

Place the transistors that do have a silver marking in the positions with a filled-in shape. Check that they are all oriented according to the shape on the PCB, then solder and trim.</p>    <p>Those positions are T3, T4, and T6

---

![caps small](/assets/15ips3/caps-small.jpg)

### Populate Small Capacitors {step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

![caps large](/assets/15ips3/caps-large.jpg)
    
###  Populate Large Capacitors {step}
These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.


### Final Checks {step}

Before you wrap up, check the following things:

- Capacitor orientation: Is the stripe on the cap on the opposite side from the "+" marking on the PCB?
- Diode orientation: Do the stripes on the diode match those on the PCB?
- Transistor orientation: Does the shape of the transistor match the outline on the PCB?
- Resistors: Are all the resistors in the correct positions?
- Soldering: Is every solder joint shiny and clean? If one is cloudy or misshapen, try reheating it for 8 seconds and adding a tiny bit more solder.
- Trimming: Are all of the excess leads trimmed down as close to the joint as possible?

---

![finished](/assets/15ips3/finished.jpg)

### Finished! {step}
All good? Congrats on finishing your build! Have a question or problem? <a href="http://www.diyrecordingequipment.com/pages/support">Drop us a line.</a>

---

## Help Us Improve

{% feedbackForm %}