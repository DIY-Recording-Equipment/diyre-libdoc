---
layout: guide.liquid
title: L2A Assembly Guide
product: L2A
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/l2a
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url:
schematic_url:
---

{% lightbox 'https://www.diyrecordingequipment.com/products/l2a', 'md' %}

Thank you for purchasing a [L2A Re-amplifier Kit!](https://www.diyrecordingequipment.com/products/l2a)

This guide is for the L2A Rev E, launched August 2021. If you have an earlier version, head over to the [L2A Rev D Assembly Guide](https://www.diyrecordingequipment.com/pages/l2a-manual).

If this is your first DIY project ever, we recommend reading our [Getting Started Guide](http://www.diyrecordingequipment.com/pages/getting-started).

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}
{% tools 'phillips' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}
{% tools 'tape' %}

## Resistors and Capacitors {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/l2a/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/l2a/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/l2a/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

---

{% lightbox '/assets/l2a/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

## Transformer {.step}

---

{% lightbox '/assets/l2a/trafo.jpg', 'md' %}

### Place Transformer {.step}
Place the transformer on the PCB in the area marked "X1 / 10K/10K." Note that there's a small notch in the plastic near pin 1. Line this notch up with the corresponding one on the PCB. Then solder the transformer to the PCB. To prevent damaging the transformer, leave 20 seconds between solder joints. This allows the coil wires time to cool down between joints.

## Panel Components {.step}

---

{% lightbox '/assets/l2a/pot.jpg', 'md' %}

### Populate Potentiometer {.step}

Place the potentiometer. Bend the two outer leads against the PCB, then solder and trim.

---

{% lightbox '/assets/l2a/trs-jack.jpg', 'md' %}

### Populate TRS Jack {.step}

Remove the nut and washer from the TRS jack and set them aside. Place the TRS jack. Hold it in place with tape or by bending the leads, then solder and trim.

---

{% lightbox '/assets/l2a/combo.jpg', 'md' %}

### Populate Combo Jack {.step}

Place the combo jack. Lay the jack on it's back with the PCB lying on top of it to solder. Solder the metal pins of the jack but do not trim the leads.

---

{% lightbox '/assets/l2a/switches.jpg', 'md' %}

### Place Switches {.step}
Place the two toggle switches in their respective positions and bend the leads, but do not solder yet.

---

{% lightbox '/assets/l2a/attach-panel.jpg', 'md' %}

### Attach Panel and Solder Switches {.step}
Attach the input panel over the switch and XLR jack, and screw the panel to the XLR jack. Since these screws are cutting their own threads, you'll feel some resistance the first time you put them in. Make sure that the switches are sitting nicely in the panel, then solder and trim the leads.

## Case Assembly {.step}
---

Before putting case together, check the following things:

{% checks 'resistor', 'solder' %}
---

{% lightbox '/assets/l2a/slide-pcb.jpg', 'md' %}

### Slide PCB into Case {.step}
Slide the assembled PCB into the lower channel in the case. The input panel should be on the side of the case nearest the "L" in "L2A."

---

{% lightbox '/assets/l2a/fasten-panels.jpg', 'md' %}

### Fasten Panels to Case {.step}
Screw in the eight mounting screws. It's a good idea to install all four screws on one panel loosely before tightening each one.

---

{% lightbox '/assets/l2a/fasten-trs.jpg', 'md' %}

### Fasten TRS and Potentiometer to Case {.step}
Fasten the TRS jack and potentiometer to the case with the included washers and nuts.

---

{% lightbox '/assets/l2a/knob.jpg', 'md' %}

### Install Knob {.step}
Set the potentiometer to the middle position (10 clicks). Then place the knob over the shaft and orient it so that the indicator line faces 12 o'clock. Then fasten the knob to the shafts by tightening the set screw with the included hex wrench.

---

{% lightbox '/assets/l2a/foam.jpg', 'md' %}

### Apply Foam Pad {.step}

Remove the backing from the foam pad and apply it to the bottom of the case.

## Testing {.step}

---

{% lightbox '/assets/l2a/send-audio.jpg', 'md' %}

### Send Audio to L2A {.step}
The L2A accepts a balanced input via the XLR/TRS combo jack. Run an XLR or balanced 1/4" cable (TRS, two stripes on plugs) from a balanced ouput on your audio interface to the LINE INPUT. Then send a signal to that output with your DAW. The signal can be anything—whatever you want to hear the first time you plug in your L2A!

---

{% lightbox '/assets/l2a/l2a-to-amp.jpg', 'md' %}

### Connect the L2A to a Guitar Amp {.step}
First, turn the LEVEL control down completely (counter-clockwise). Then run an unbalanced 1/4" (TS, one stripe on plugs) from the OUTPUT to a guitar amp. Turn on the guitar amp and slowly increase the level of the L2A. If you hear your audio signal clearly through the speaker, your L2A is working correctly.

---

{% lightbox '/assets/l2a/check-switches.jpg', 'md' %}

### Check the Switches {.step}
While still playing audio through the L2A, check the filter positions. With a wide-bandwidth audio signal such as a guitar playing chords, you should clearly hear the high- and low-pass filters.

Then switch between the LIFT and GROUND positions. With some setups one position will be noisier than others, while in other setups the switch will not make a difference. When in doubt, the preferred position is LIFT. If you don't hear a difference, don't worry—the switch may come in handy someday with a different amp.

---

{% lightbox '/assets/l2a/finished.jpg', 'md' %}

### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}