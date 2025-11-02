---
layout: guide.liquid
title: AurEx Assembly Guide
product: AurEx Colour
kit_sku: KIT-0111.01
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/aurex-colour
support_url: https://support.diy.re
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/aurex/aurex-sorting-1.0.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/AurEx_1.0_Schematic.pdf?v=1709569565
---

Thank you for purchasing a [{{ product }}]({{ product_url }})</a>

If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}).

You can view the [{{ product }} schematic PDF here]({{ schematic_url }}).

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'desoldering-pump' %}

### Component Sorting Sheet

{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/aurex/aurex-sorting-1.0.pdf)', '/assets/pdf-download.png' %}


## Standoffs, Header, and IC Socket (Bag 1) {.step}

---

{% lightbox '/assets/aurex/colour-standoffs.jpg', 'md' %}
### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/aurex/colour-header.jpg', 'md' %}
### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/aurex/ic-socket.jpg', 'md' %}
### Tape and Solder IC Socket {.step}

Insert the IC socket so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}
### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---
{% resCalc %}
{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/aurex/res-place.jpg', 'md' %}
### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/aurex/res-solder.jpg', 'md' %}
### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/aurex/res-trim.jpg', 'md' %}
### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Diodes, Capacitors, Trimpots (Bag 3) {.step}

---

{% lightbox '/assets/aurex/diodes.jpg', 'md' %}
### Populate Diodes {.step}

Place each diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.

---

{% lightbox '/assets/aurex/res-arrays.jpg', 'md' %}
### Populate Resistor Arrays {.step}
Place the resistor arrays in the RA1 and RA2 positions. Although these parts do have a dot for alignment, the orientation does not matter. Bend a couple leads of each array to hold them in place. Then solder and trim the excess leads.

---

{% lightbox '/assets/aurex/caps-small.jpg', 'md' %}
### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

---

{% lightbox '/assets/aurex/trimpots.jpg', 'md' %}
### Populate Trimpots {.step}

Populate the trimpots in the orientation marked on the PCB. Leave the trimmers alone for right now, we will set them in another step.

---

{% lightbox '/assets/aurex/caps-large.jpg', 'md' %}
### Populate Large Capacitors {.step}
The 100uF capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB.

The 4.7uF capacitors are not polarized and can be installed in either direction. Place the large capacitors, then solder and trim.

## IC (Bag 4) {.step}

---

{% lightbox '/assets/aurex/ic.jpg', 'md' %}
### Place IC in Socket {.step}

The leads of the IC must be slightly bent to fit perfectly into the socket. Press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the socket. Place the IC in this direction, and press it completely into the socket. 

## Final Checks

---

Before you wrap up, check the following things:

{% checks 'capacitor', 'resistor', 'ic', 'diode', 'solder' %}
---

{% lightbox '/assets/aurex/options.jpg', 'md' %}
### Set Options {.step}
The AurEx is two signal processors in one: a low-frequency maximizer and a high-frequency exciter. Each has it's own dedicated saturation circuitry, so adjusting one band does not affect the other.

VR1 controls the amount of the LF maximizer that is mixed into the dry signal. In the CCW position, the maximizer is completely off. In the CW position the maximizer is equal to the dry signal for 50/50 wet/dry mix. Note that VR1 does not control the gain and therefore the distortion of the maximizer circuit. Instead, this is controlled by the Colour knob on the front panel.

VR2 controls the gain of the HF exciter circuitry. In the CCW position, there will be a slight HF boost but none of the exciter effect. As you turn VR2 CW, both the gain and saturation of the exciter circuit increase. Unlike the maxmizer, the exciter is always set to 50/50 wet/dry mix.

The trimpots have a total travel of about 25 turns. You will hear and feel a small click when they reach the fully CW and CCW positions. Beyond this point, the actuator will keep turning but the resistance value won't change.

To stereo match two AurEx units, first set one the way you want it. Then use a multi-meter to measure the resistance between the square pad (on the left when viewing the board from the bottom) and the middle pad for both trimpots. Note these values, then set the trimpots of the other AurEx to be as close as possible to them.

---

{% lightbox '/assets/aurex/finished.jpg', 'md' %}
### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}
