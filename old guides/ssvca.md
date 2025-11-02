---
layout: guide.liquid
title: SS VCA Assembly Guide
product: SS VCA
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/ssvca
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/ssvca/ssvca-sorting.pdf
schematic_url:
---

<img src="/assets/ssvca/finished-600.jpg">
  Welcome to the SS VCA assembly guide.
Thank you for purchasing a [SS VCA](https://www.diyrecordingequipment.com/products/ssvca)

If this is your first DIY project ever, we recommend reading our [Getting Started Guide](http://www.diyrecordingequipment.com/pages/getting-started).

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}
{% tools 'flathead' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}

## Component Sorting Sheet
---

{% lightbox '/assets/ssvca/ssvca-sorting.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet (PDF)](/assets/ssvca/ssvca-sorting.pdf).

## Standoffs, Header, and IC Socket (Bag 1) {.step}

---

{% lightbox '/assets/ssvca/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/ssvca/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/ssvca/ic-sockets.jpg', 'md' %}

### Tape and Solder IC Sockets {.step}

Insert the IC sockets so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}
Identify the resistors for the R, G, and B positions and set them aside. Do not bend them in this step. For the remaining resistors, bend the leads 90 degrees at the body so they can be inserted into the PCB.

---

{% lightbox '/assets/ssvca/res-place.jpg', 'md' %}

### Place Resistors {.step}
Place the resistors (except for R, G, and B) into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/ssvca/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/ssvca/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

---

{% lightbox '/assets/ssvca/vert-res-pace.jpg', 'md' %}

### Place and Solder Vertical Resistors {.step}
For the remaining resistors (R, G, and B), bend one lead 180 degrees so it is parallel with the body of the resistor. Leave the other lead straight. Then place the resistors so that the straight lead of each goes through the circled pad. Solder and trim.

## Other Passive Components (Bag 3) {.step}

---

{% lightbox '/assets/ssvca/diode.jpg', 'md' %}

### Populate Diode {.step}

Place the diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

---

{% lightbox '/assets/ssvca/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/ssvca/cap-tant.jpg', 'md' %}

### Populate Tantalum Capacitor {.step}

The larger, yellow capacitor is tantalum. This are polarized, so it must be placed in a certain direction. The positive lead is slightly longer and marked with a "+" symbol. Align this lead with the "+" on the PCB. Double check the orientation, then solder and trim.

---

{% lightbox '/assets/ssvca/switches.jpg', 'md' %}

### Populate Switches {.step}

Place the slide switches and use a small screwdriver to bend a couple of the leads against the bottom of the PCB. Solder and trim.

---

{% lightbox '/assets/ssvca/trimpot.jpg', 'md' %}

### Populate Trimpot {.step}

Populate the trimpot in the orientation marked on the PCB. Leave the trimmer alone for right now, we will set it in another step.

---

{% lightbox '/assets/ssvca/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.

## ICs (Bag 4) {.step}

---

{% lightbox '/assets/ssvca/vca.jpg', 'md' %}

### Populate VCA {.step}
Place the right-angle side of the 7-pin connectors through the VCA sub-board from the front and solder it so that the sides of the black plastic post sits flush with the PCB. Then install this assembly in the IC2 position.

---

{% lightbox '/assets/ssvca/ics.jpg', 'md' %}

### Place ICs in Sockets {.step}

The leads of the ICs must be slightly bent to fit perfectly into the sockets. For each IC, press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the sockets. Place all of the ICs in this direction, and press them completely into the sockets. 

## Final Checks {.step}
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'diode', 'resistor', 'solder', 'ic' %}
## Calibration {.step}

The SS VCA requires just one parameter to be calibrated: the make-up gain. The make-up gain is variable so that you can adjust it depending on the amount of compression you typically use. But for a good starting point, we will set it to 3dB. If you are using the SS VCA in a 500-series rack, the following steps will be easier with an extender like the [500EXT](https://www.diyrecordingequipment.com/products/500ext-500-series-extender-kit).

---

    <img src="/assets/colourupter/rew-600.jpg" />
### Set Up for Testing {.step}
Download and install [Room EQ Wizard](https://www.roomeqwizard.com/) on your computer. In Preferences choose your audio interface for the Input and Output Device and set the Input and Output to the left/channel 1.

Connect the Colour host with the SS VCA to the left/channel 1 of your interface.

---

{% lightbox '/assets/ssvca/rew-unity.png', 'md' %}

### Check Unity Gain {.step}
Set your Colour host so that the Colour section is engaged but all of the Colours are bypassed. For example, on the Colour Palette mkII, the IN switch should be in, but all Colour switches should be out. If your host has a trim, set it to unity gain.

In REW open the Generator module and set it to:

        
- Tones, Sine
- Frequency Hz: 1000
- -30dBFS

Push the green play button and open REW's Levels module. Make sure the signal is coming back into the input at or very close to -30dBFS. This is unity gain. If you are not getting unity gain, check your connections.

---

{% lightbox '/assets/ssvca/rew-cal.png', 'md' %}

### Calibrate Gain {.step}
Set SW1 to 2:1 and SW2 to FAST.

Engage the SS VCA and set the Colour knob completely counter-clockwise. The level on the In meter in REW should change slightly when you engage the SS VCA.

Adjust VR1 on the SS VCA until the In level is -27dBFS (3dB gain). Your SS VCA is now calibrated.

---

{% lightbox '/assets/ssvca/finished.jpg', 'md' %}

### Finished! {.step}
Congrats on completing your SS VCA. To begin using it, simply plug it into a host such as the Colour Palette and turn the Colour knob to begin compressing.

The SS VCA has a fixed threshold. Therefore, the Colour knob on the host controls the amount of compression by controlling the input level to the SS VCA.

The ratio and attack/release time constants can be set via the switches SW1 and SW2. The ratios are 2:1 and 8:1. The attack/release times are 2ms/20ms for FAST and 20ms/200ms for SLOW.

---

## Help Us Improve

{% feedbackForm %}