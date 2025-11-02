---
layout: guide.liquid
title: MB2 Assembly Guide
product: MB2
kit_sku:
version:
complexity:
estimated_time:
product_url:
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url:
schematic_url:
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

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

## Resistors {.step}
---

{% lightbox '/assets/mb2/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.
R1, R2<br>10k resistor (x4)

            <img src="/assets/parts/com-r-10k.png">
R3, R4<br>68R resistor (x4)

            <img src="/assets/parts/com-r-68.png">
R5, R6<br>2.7k resistor (x4)

            <img src="/assets/parts/com-r-2.7k.png">
R7, R8<br>470k resistor (x4)

            <img src="/assets/parts/com-r-470k.png">

---

{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/mb2/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/mb2/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/mb2/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Transistors {.step}

---

{% lightbox '/assets/mb2/trans-bc327.jpg', 'md' %}

### Populate BC327 Transistors {.step}

Note that there are two different types of transistors in this bag: some with silver markings on top and some without. Those without a marking are the BC327s. Place them in the positions that have an outline of the transistor instead of a filled-in shape. Make sure the transistors are aligned so the flat edge matches that of the outline on the board. Then solder and trim.
T1, T2<br>BC327 transistor (x4)

        <img src="/assets/parts/com-t-to92.png">

---

{% lightbox '/assets/mb2/trans-lsk389.jpg', 'md' %}

### Populate LSK389 Transistors {.step}
Spread out the pins of the two LSK389 transistors so that they will fit in the T3 pads. Then place the transistors, making sure to align the tab on the body with the tab on the PCB.

        <strong>Important:</strong> Double check the orientation of these transistors before soldering. These parts are expensive and difficult to remove once they're soldered in. Once you are positive that the tab on the transistor and on the PCB line up, solder and trim the leads.

These components are the functional core of the MB2. Their job is to provide 26dB gain for both the positive and negative halves of the balanced signal at the same time. This is a very delicate task, as any noise or distortion introduced in one half of the signal will not be canceled out, and will be amplified by the following mic preamp. So each LSK389 contains two matched, low-noise transistors (one for each half of the balanced signal), which are thermally coupled in the same case.

T3<br>LSK389 transistor (x2)

        <img src="/assets/parts/com-t015.png">

## Capacitors {.step}

---

{% lightbox '/assets/mb2/caps-small.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.
	<strong>Note:</strong> C1 and C2 have been changed to the same type as C3 and C4, not the yellow type shown in the photos.

{RefDes}<br>{Item Name} (x{Qty})

        <img src="{Image}">
{Markings}

C3, C4<br>0.22u cap (x4)

        <img src="/assets/parts/com-c019.png">

---

{% lightbox '/assets/mb2/caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.
C5<br>100u cap

        <img src="/assets/parts/com-c028.png">

## Jacks and Case {.step}

---

{% lightbox '/assets/mb2/xlrs-case.jpg', 'md' %}

### Screw Panels to XLRs {.step}

Screw the input and output panels to the XLR jacks with the longer, thread-cutting screws. Leave the screws loose for now so that the XLRs have a bit of room to move.

J2, J6<br>3-pin XLR male jack (x2)

            <img src="/assets/parts/com-j007.png">
J4, J8<br>3-pin XLR female jack (x2)

            <img src="/assets/parts/com-j008.png">
XLR screw (x8)

            <img src="/assets/parts/hw-s022.png">

---

{% lightbox '/assets/mb2/xlrs-solder.jpg', 'md' %}

### Populate XLR Jacks {.step}
Place the XLR jacks. Once all the leads including the plastic mounting tabs have snapped into place, tighten the screws on the panel. Solder the jacks but do not trim the leads.

---

{% lightbox '/assets/mb2/slide-pcb.jpg', 'md' %}

### Slide PCB Into Case {.step}
Unscrew and remove one of the panels. Then slide the assembly into the lower channel in the case. The input panel should be on the side closest to the "M" in "MB2."

---

{% lightbox '/assets/mb2/screw-panels.jpg', 'md' %}

### Screw in Panels {.step}
Re-attach the remaining panel to the XLRs. Then fasten the panels to the case with the shorter screws.

PCB bracket screw (x8)

            <img src="/assets/parts/hw-s027.png">

---

{% lightbox '/assets/mb2/foam.jpg', 'md' %}

### Apply Foam Pad {.step}

Remove the backing from the foam pad and apply it to the bottom of the case.

## Final Checks and Testing

---

Before you wrap up, check the following things:

{% checks 'capacitor', 'transistor', 'resistor', 'solder', 'trim' %}
---

{% lightbox '/assets/mb2/test-input.jpg', 'md' %}

### Connect Mic to MB2 {.step}
Connect a dynamic or ribbon microphone to MIC INPUT 1. Do the following steps with channel 1 and then connect the mic to MIC INPUT 2 and repeat the steps.

---

{% lightbox '/assets/mb2/test-output.jpg', 'md' %}

### Connect the MB2 to an Audio Interface {.step}
Run an XLR cable from MIC OUTPUT 1 to a microphone input on your audio interface. Turn the gain knob on the interface down all the way, then engage +48 phantom power. The phantom power is what powers the MB2; it does not pass through to the microphone.

Next, set a channel in your DAW to record the channel you plugged the MB2 into. Sing, hum, or make some noise into the mic and set the gain on the interface accordingly. Make a short recording to check that the signal is passing cleanly from the MB2. Now repeat these steps for channel 2.

---

{% lightbox '/assets/mb2/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}