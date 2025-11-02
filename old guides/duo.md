---
layout: guide.liquid
title: Colour Duo Assembly Guide
product: Colour Duo
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/collections/colour/products/colour-duo
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/duo/duo-sorting-1.1.pdf
schematic_url:
---
Welcome to the [{{ product }}]({{ product_url }}) assembly guide. The Duo is intended for intermediate builders. If you have built a 500-series module or several guitar pedals before you should have no problem with the Duo. However, keep in mind it's a big kit! There are hundreds of parts to place, so plan to split the building over several sessions.

Additional resources:
- [Colour Duo Build Map](https://maps.diy.re/duo/)
- [Colour Duo Operation Manual (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/Colour_Duo_Manual_1.0.pdf?v=1608768961)
- [Colour Duo IO Board Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/Colour_Duo_IO_Board_1.0_Schematic.pdf?v=1612308372)
- [Colour Duo Drawer Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/Colour_Duo_Drawer_1.0_Schematic.pdf?v=1612308372)
- [Colour Duo Recall Sheet (Vertical)](https://manuals.diy.re/assets/recall/duo-vertical.pdf)
- [Colour Duo Recall Sheet (Horizontal)](https://manuals.diy.re/assets/recall/duo-horizontal.pdf)

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}

### Optional

{% tool 'multi-meter' %}
{% tool 'tape' %}
{% tool 'desoldering-pump' %}

### 
Resistor Sorting Sheet

{% iconCard 'Resistor Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Resistor Sorting Sheet](/assets/duo/duo-sorting-1.1.pdf)', '/assets/pdf-download.png' %}


## I/O Board Resistors (Bag 1) {.step}

---

{% lightbox '/assets/duo/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.
    <strong>Parts in this step:</strong> Refer to the component [sorting sheet](/assets/duo/duo-sorting-1.1.pdf).

---

{% resCalc %}
### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use the color code calculator above, or test them with a multi-meter set to read resistance.

{% alert, 'To measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Pro Tip' %}

---

{% lightbox '/assets/duo/1.3-place-res.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/duo/1.4-solder-res.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/duo/1.5-trim-res.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## I/O Board IC, Transistors, Caps, Diodes (Bag 2) {.step}

---

{% lightbox '/assets/duo/2.1-pop-trans.jpg', 'md' %}

### Populate Transistors {.step}

There are two important things to note about the transistors. First, one side of the body is flat while the
other is round. And second, one is a BC327 (black top) while the other is a BC337 (silver top).

Place the BC327 in Q1 and the BC337 in Q2. Place both of them so that the shape of the body matches the
shape on the circuit board. Double check the positions and orientation, then solder and trim.

        <strong>Parts in this step:</strong>

Q1<br>BC327 transistor

            <img src="/assets/parts/com-t-to92.png">
Q2<br>BC337 transistor

            <img src="/assets/parts/com-t-to92-silver.png">

---

{% lightbox '/assets/duo/2.2-ic-sockets.jpg', 'md' %}

### Tape and Solder IC Sockets {.step}

Insert the IC sockets so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.
IC1, IC2<br>IC socket (x2)

            <img src="/assets/parts/com-h009.png">

---

{% lightbox '/assets/duo/2.3-place-ics.jpg', 'md' %}

### Place ICs in Sockets {.step}

The leads of the ICs must be slightly bent to fit perfectly into the sockets. For each IC, press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the sockets. Place all of the ICs in this direction, and press them completely into the sockets.
IC1, IC2<br>1256 line receiver (x2)

            <img src="/assets/parts/com-u-dip8.png">

---

{% lightbox '/assets/duo/2.4-pop-byp-caps.jpg', 'md' %}

### Populate Bypass Capacitors {.step}
CB1-CB4, C10, C11<br>.1u ceramic cap (x6)

            <img src="/assets/parts/com-c004.png">

---

{% lightbox '/assets/duo/2.5-pop-diodes.jpg', 'md' %}

### Populate Diodes {.step}

Place each diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.
D1<br>1N4004 diode

            <img src="/assets/parts/com-d005.png">
D2<br>5.6v zener diode

            <img src="/assets/parts/com-d010.png">

---

{% lightbox '/assets/duo/2.6-pop-small-caps.jpg', 'md' %}

### Populate Small Capacitors {.step}

Place the smaller capacitors in their respective places. These capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.
C2, C3, C6, C7<br>470p caps

            <img src="/assets/parts/com-c009.png">
Markings: 471

C4, C8<br>47p caps

            <img src="/assets/parts/com-c010.png">
Markings: 47j

## I/O Board Connectors (Bag 3) {.step}

---

{% lightbox '/assets/duo/3.1-pop-btb-cons.jpg', 'md' %}

### Populate Board-to-Board Connectors {.step}

Place the 32-pin connectors and fasten them with the included nuts, washers, and screws. The washers should go between the bottom of the PCB and the nuts. Then solder and trim.
CON1A, CON2A<br>Board-to-board connector (x2)

            <img src="/assets/parts/com-j023.png">
CON1A, CON2A<br>3-48 Screw (x4)

            <img src="/assets/parts/hw-s021.png">
CON1A, CON2A<br>Nylon washer (x4)

            <img src="/assets/parts/hw-w002.png">
CON1A, CON2A<br>3-48 Nut (x4)

            <img src="/assets/parts/hw-n006.png">

## I/O Board Large Capacitors, Inductors, and Relay (Bag 4) {.step}

---

{% lightbox '/assets/duo/4.1-pop-relay.jpg', 'md' %}

### Populate Relay {.step}

Place the relay and bend some of the leads against the bottom of the PCB to hold it in place. Then solder and trim.
U1<br>24V relay

            <img src="/assets/parts/com-z010.png">

---

{% lightbox '/assets/duo/4.2-pop-inductors.jpg', 'md' %}

### Populate Inductors {.step}

Place the inductors in their positions, solder, and trim. Inductors are not polarized.

L1-L3<br>470u inductor (x3)

            <img src="/assets/parts/com-l008.png">

---

{% lightbox '/assets/duo/4.3-pop-large-caps.jpg', 'md' %}

### Populate Large Capacitors {.step}

These capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. Double check their orientation, then solder and trim.
C1, C5<br>100u cap (x2)

            <img src="/assets/parts/com-c022.png">
C9, C16<br>100u/63v cap (x2)

            <img src="/assets/parts/com-c028.png">
C12-C15<br>2200u cap (x4)

            <img src="/assets/parts/com-c043.png">

## Jacks (Bag 5) {.step}

---

{% lightbox '/assets/duo/5.1-pop-trs.jpg', 'md' %}

### Populate TRS Jacks {.step}

Place the TRS jacks. Hold them in place with tape or by bending the leads, then solder and trim.
J1, J5<br>TRS jack (x2)

            <img src="/assets/parts/com-j010.png">

---

{% lightbox '/assets/duo/5.2-pop-xlr.jpg', 'md' %}

### Populate XLR Jacks {.step}

Place the XLR jacks. Most will snap in place, but you may need to use some tape if they fall out before soldering. Solder the jacks but do not trim the leads.
J2, J6<br>3-pin XLR male jack (x2)

            <img src="/assets/parts/com-j007.png">
J3, J7<br>Combo jack (x2)

            <img src="/assets/parts/com-j024.png">
J4, J8<br>3-pin XLR female jack (x2)

            <img src="/assets/parts/com-j008.png">
J9<br>5-pin XLR female jack

            <img src="/assets/parts/com-j017.png">
J10<br>5-pin XLR male jack

            <img src="/assets/parts/com-j016.png">

<H1 class="exclude" style="clear:both">Drawer Assembly</H1>

## Active Switch Parts (Bag 6) {.step}

---

{% lightbox '/assets/duo/6.1-pop-res.jpg', 'md' %}

### Populate Resistors {.step}
Populate the resistors as in step 1.

R40<br>2.2k resistor

            <img src="/assets/parts/com-r-2.2k.png">
R41<br>47k resistor

            <img src="/assets/parts/com-r-47k.png">

---

{% lightbox '/assets/duo/6.2-pop-diode.jpg', 'md' %}

### Populate Diode {.step}

Place the diode so that the line on the component matches the line on the PCB. Double check the orientation, then solder and trim.
D3<br>1N4004 diode

            <img src="/assets/parts/com-d005.png">

---

{% lightbox '/assets/duo/6.3-pop-relay.jpg', 'md' %}

### Populate Relay {.step}
Populate the relay as before.

U1<br>24V relay

            <img src="/assets/parts/com-z010.png">

---

{% lightbox '/assets/duo/6.4-lightpipe-cap.jpg', 'md' %}

### Install Lightpipe Switch Cap {.step}

Position the lightpipe switch cap so that the flat surface faces the bottom of the switch. Then press the cap onto the switch until it snaps into place.
            <br>Lightpipe switch cap

            <img src="/assets/parts/com-k010.png">
SW4<br>DPDT switch

            <img src="/assets/parts/com-e006.png">

---

{% lightbox '/assets/duo/6.5-pop-switch.jpg', 'md' %}

### Populate Switch {.step}  

Place the switch and use a small screwdriver to bend a couple of the leads against the bottom of the PCB. Solder and trim.

---

{% lightbox '/assets/duo/10.2.cap-fix.jpg', 'md' %}

### Populate Power Capacitors {.step}
Place and solder the capacitors C13 and C14, paying attention to their polarity. If your PCB revision is 1.2+ C13 and C14 are located in the center of the PCB, just below U1.

If your PCB is version 1.1 or lower, there are no footprints for these capacitors. Instead, place them in the power test points as shown. Before placing the capacitors, bend their leads so that they have approximately the same spacing as the distance between the +16v, Gnd, and -16v test points near U1. Then place the capacitors in the test points with the positive lead of in +16v, the negative lead of the other in -16v, and the remaining leads of both in Gnd. Solder and trim the capacitors.

C13, C14<br>220u cap (x2)

            <img src="/assets/parts/com-c002.png">

<H1 class="exclude" style="clear: both">Populating the Channels</H1>

---

Since channels 1 and 2 of the Duo are identical, the steps below are written for just one channel. The kit bags are also split up by channel, so there are two of each bag for the following steps. It’s up to you whether you want to build one channel at a time or both at the same time. If you choose to build them one at a time, repeat steps 7-12 for each channel.

## Drawer Resistors (Bag 7) {.step}

---

### Sort Resistors {.step}
Here's a link to that same resistor tool from above: [Resistor Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator)

        <strong>Parts in this step:</strong> Refer to the component [sorting sheet](/assets/duo/duo-sorting-1.1.pdf).

---

{% lightbox '/assets/duo/7.2-pop-res.jpg', 'md' %}

### Populate Resistors {.step}
Populate the resistors as you did before.

## Drawer ICs and Colour Sockets (Bag 8) {.step}

---

{% lightbox '/assets/duo/8.1-pop-colour-sockets.jpg', 'md' %}

### Populate Colour Sockets {.step}

Flip the PCB over and place the 8-pin Colour sockets in their positions. Solder one leg of each socket from the bottom to hold them in place, then flip the PCB over and solder all of the joints. Make sure that you have placed the sockets on the underside of the PCB before soldering!

CON6-CON8<br>Colour socket (x3)

            <img src="/assets/parts/com-h001.png">

---

{% lightbox '/assets/duo/8.2-ic-sockets.jpg', 'md' %}

### Populate IC sockets {.step}
Tape and solder the IC sockets as you did before.

IC1-IC5<br>IC socket (x5)

            <img src="/assets/parts/com-h009.png">

---

{% lightbox '/assets/duo/8.3-pop-diode-bridge.jpg', 'md' %}

### Populate Diode Bridge {.step}

Place the diode bridge, matching the labeling to that on the circuit board. Bend the leads against the bottom of the pcb, then solder.
BR1<br>Diode bridge

            <img src="/assets/parts/com-u001.png">

---

{% lightbox '/assets/duo/8.4-pop-ics.jpg', 'md' %}

### Populate ICs {.step}
Place the ICs in their sockets as you did before, playing close attention to their orientation. Note that some NE5532 ICs have a dot on the body to indicate pin 1 instead of a notch. In this case, orient the ICs so that the dot on the IC aligns with the notch on the IC socket.

IC1<br>1512 mic preamp

            <img src="/assets/parts/com-u-dip8.png">
Markings: THAT 1512

IC2-IC5<br>NE5532 opamp (x4)

            <img src="/assets/parts/com-u-dip8.png">
Markings: NE5532P

## Drawer Capacitors and Diodes (Bag 9) {.step}

---

{% lightbox '/assets/duo/9.1-pop-byp-cap.jpg', 'md' %}

### Populate Bypass Capacitors {.step}
Populate the bypass capacitors as you did before.

CB1-CB10<br>.1u ceramic cap (x10)

            <img src="/assets/parts/com-c004.png">

---

{% lightbox '/assets/duo/9.2-pop-diodes.jpg', 'md' %}

### Populate Diodes {.step}
Populate the diodes as before, paying close attention to the black lines for orientation.

D1, D2<br>1N914 diode (x2)

            <img src="/assets/parts/com-d002.png">

---

{% lightbox '/assets/duo/9.3-pop-small-caps.jpg', 'md' %}

### Populate Remaining Small Capacitors {.step}
Place the remaining capacitors in their respective places. As before, these capacitors are not polarized.

C4<br>82n cap

            <img src="/assets/parts/com-c057.png">
C6, C7, C8, C11<br>22p cap (x4)

            <img src="/assets/parts/com-c003.png">
C10, C12<br>100p cap (x4)

            <img src="/assets/parts/com-c074.png">

## Drawer Large Capacitors (Bag 10) {.step}

---

{% lightbox '/assets/duo/10.1-pop-large-caps.jpg', 'md' %}

### Populate Large Capacitors {.step}
Populate the large capacitors as you did on the IO board. Remember that these are all polarized and must be placed in a particular direction.

C1, C2<br>100u/63v cap (x2)

            <img src="/assets/parts/com-c028.png">
C3<br>3300u cap

            <img src="/assets/parts/com-c030.png">
C5, C9<br>100u cap (x2)

            <img src="/assets/parts/com-c022.png">

## Drawer Connectors, Switches, and Sockets (Bag 11) {.step}

---

{% lightbox '/assets/duo/11.1-pop-btb-cons.jpg', 'md' %}

### Populate Board-to-Board Connector {.step}

Place the 32-pin connector and fasten it with the included nuts, washers and screws. The washers should go between the bottom of the PCB and the nuts. Then solder and trim.
CON1B/CON2B<br>Board-to-board connector

            <img src="/assets/parts/com-j023.png">
CON1A, CON2A<br>3-48 Screw (x2)

            <img src="/assets/parts/hw-s021.png">
CON1A, CON2A<br>Nylon washer (x2)

            <img src="/assets/parts/hw-w002.png">
CON1A, CON2A<br>3-48 Nut (x2)

            <img src="/assets/parts/hw-n006.png">

---

{% lightbox '/assets/duo/11.2-pop-switches.jpg', 'md' %}

### Install Switch Caps and Populate Switches {.step}
Press the caps onto the switches. This may require a bit more force than you’d expect.

Place the switches and use a small screwdriver to bend a couple of the leads against the bottom of the PCB. Solder and trim.

            <br>Switch cap (x3)

            <img src="/assets/parts/com-k007.png">
SW1-SW3<br>DPDT switch (x3)

            <img src="/assets/parts/com-e006.png">

---

<h3>Quick Question</h3>
    <form action="https://formsubmit.co/hi2zl04q@robot.zapier.com" method="POST" target="_blank" id="form-usage">
    <input type="hidden" name="_replyto">
    <input type="hidden" name="_subject" value="%meta.title%">
@[/mods/usage-feedback.html]
    </form>

---

{% lightbox '/assets/duo/11.3-pop-header-sockets.jpg', 'md' %}

### Populate Header Sockets {.step}

It can be tricky to mount headers exactly perpendicular to the PCB. Our preferred technique is:

1. Fill a single pad in the middle of the header's footprint with solder.
2. Place the header and press gently against the solder joint while heating the edge of the soldered pad.
3. After the solder liquifies and the header snaps into place, remove the soldering iron and hold the header in place until the solder cools (about 5 seconds).
4. Now solder the rest of the pins of the header from underneath.
CON3, CON4<br>12-pin socket (x2)

            <img src="/assets/parts/com-h002.png">
CON5<br>6-pin socket

            <img src="/assets/parts/com-h029.png">

---

{% lightbox '/assets/duo/11.4-pop-pots.jpg', 'md' %}

### Populate Potentiometers {.step}

Pay close attention to the values marked on the back when placing the potentiometers (pots). Place them, then double check the values on the pots against those on the PCB.  Bend two leads of each pot against the PCB, then solder and trim.
VR1<br>C1k pot

            <img src="/assets/parts/com-e-pot-single.png">
Markings: C1k

VR5<br>B10k pot

            <img src="/assets/parts/com-e-pot-single.png">
Markings: B10k

VR2, VR3, VR4, VR6<br>B20k pot (x4)

            <img src="/assets/parts/com-e-pot-single.png">
Markings: B20k

## Drawer Daughter Board Parts (Bag 12) {.step}

---

{% lightbox '/assets/duo/12.1-pop-res.jpg', 'md' %}

### Populate Resistors {.step}
Populate the resistors as before.

R1_DB<br>47k resistor

            <img src="/assets/parts/com-r-47k.png">
R2_DB<br>100k resistor

            <img src="/assets/parts/com-r-100k.png">

---

{% lightbox '/assets/duo/12.2-pop-header-pins.jpg', 'md' %}

### Populate Header Pins {.step}

As with the header sockets, these pins must be perpendicular to the board to mate correctly. Follow the same technique:

1. Solder a single pad in the middle of the header's footprint.
2. Place the header and press gently against the solder joint, while heating the edge of the soldered pad.
3. After the solder liquifies and the header snaps into place, remove the soldering iron and hold the header in place until the solder cools (about 5 seconds).
4. Now solder the rest of the pins of the header from underneath.
CON3_DB, CON4_DB<br>12-pin header (x2)

            <img src="/assets/parts/com-h003.png">
CON5_DB<br>6-pin header

            <img src="/assets/parts/com-h003-6.png">

---

{% lightbox '/assets/duo/12.3-pop-switches.jpg', 'md' %}

### Install Switch Caps and Populate Switches {.step}

As you did before, position the lightpipe switch cap so that the flat surface faces the bottom of the switch. Then press the cap onto the switch until it snaps into place. Also install the black switch caps on the remaining switches.

Then place and solder all the switches.

            <br>Switch cap (x2)

            <img src="/assets/parts/com-k007.png">
            <br>Lightpipe switch cap (x4)

            <img src="/assets/parts/com-k010.png">
SW1_DB-SW6_DB<br>DPDT switch (x6)

            <img src="/assets/parts/com-e006.png">

<H1 class="exclude" style="clear: both">Chassis Assembly</H1>

## Chassis Fasteners (Bag 13) {.step}

---

{% lightbox '/assets/duo/13.1-insert-rails.jpg', 'md' %}

### Insert Drawer Rails {.step}

Position the drawer rails on the inside of the case with the wider opening facing the front of the case. Then snap them into the holes indicated above.

PCB rail (x2)

            <img src="/assets/parts/com-z011.png">

---

{% lightbox '/assets/duo/13.2-io-board-to-case.jpg', 'md' %}

### Fasten IO Board to Case {.step}

Mount the assembled IO board to the case. You will need to tilt it slightly to get the PUSH tabs of the XLR jacks through the holes first. Then fasten the nuts and washers to the TRS jacks, and screw in the mounting screws for the XLR jacks.

XLR screw (x16)

            <img src="/assets/parts/hw-s022.png">

---

{% lightbox '/assets/duo/13.3-nut-plates.jpg', 'md' %}

### Install Nut Plates {.step}

Place each nut plate behind one of the flanges at the front of the case, so that the holes line up with those on the flange. Then fasten them to the case with the included screws.

Nut plate (x2)

            <img src="/assets/parts/hw-c040.png">
Nut plate screw (x4)

            <img src="/assets/parts/hw-s025.png">

---

{% lightbox '/assets/duo/13.4-pcb-brackets.jpg', 'md' %}

### Install PCB Support Brackets {.step}

Place each L-bracket over the pots of the Colour section. Check that the standoffs on the brackets align with the holes in the PCB. Then fasten the brackets to the motherboard via the screws and standoffs. Use standoffs for the three holes closest to the front of the circuit board, and screws for the rest.

PCB bracket screw (x8)

            <img src="/assets/parts/hw-s027.png">
Standoff (x6)

            <img src="/assets/parts/hw-y020.png">

---

{% lightbox '/assets/duo/13.5-daughterboards.jpg', 'md' %}

### Mount Daughter Boards {.step}

Plug the daughter boards for each channel into the two sets of header sockets. Then screw them to the support standoffs.

PCB bracket screw (x6)

            <img src="/assets/parts/hw-s027.png">

---

{% lightbox '/assets/duo/13.6-lid.jpg', 'md' %}

### Install Lid {.step}

Place the lid on the case with the countersunk side facing up. Then screw it to the case.

Lid screw (x7)

            <img src="/assets/parts/hw-s026.png">

---

{% lightbox '/assets/duo/13.7-rack-ears.jpg', 'md' %}

### Install Rack Ears (Optional) {.step}

If you plan to use your Duo in a rack, screw the rack ears to the case.

Rack ear screw (x6)

            <img src="/assets/parts/hw-s024.png">

---

{% lightbox '/assets/duo/13.8-rubber-feet.jpg', 'md' %}

### Apply Rubber Feet (Optional) {.step}

If you plan to use your Duo on a desktop, you may choose to apply the rubber feet to the bottom of the case. Keep in mind that you will need to remove them later if you want to use the Duo in a rack with another unit directly below it.

Rubber foot (x5)

            <img src="/assets/parts/hw-y021.png">

## Front Panel (Bag 14) {.step}

---

{% lightbox '/assets/duo/14.1-nuts-to-pots.jpg', 'md' %}

### Fasten Nuts to Pots {.step}

Place the front panel over the pots and switches (yes, this might be the trickiest part of the build). Place washers over the pot shafts, then screw on the nuts. Note that depending on variations in the length of the threads on the pots and nuts, you may not be able to fit the washer under the nut. In this case, just leave the washer off and fasten the nut directly to the panel.

Pot washer (x12)

            <img src="/assets/parts/hw-w004.png">
Pot nut (x12)

            <img src="/assets/parts/hw-n005.png">

---

{% lightbox '/assets/duo/14.2-pots-to-middle.jpg', 'md' %}

### Set Pots to Middle Position {.step}

To prepare for adding the knobs, set all the pots to the middle position (10 clicks in).

---

{% lightbox '/assets/duo/14.3-knobs-to-pots.jpg', 'md' %}

### Fasten Knobs to Pots {.step}

Place the wider, skirted knobs on the two preamp gain pots, and the non-skirted knobs on the rest of the pots. Orient all of them so that the indicator line points precisely to the 12 o’clock position. Then fasten the knobs to the pot shafts by tightening the set screws with the included hex wrench.

Skirted knob (x2)

            <img src="/assets/parts/com-k008.png">
Non-skirted knob (x10)

            <img src="/assets/parts/com-k009.png">

---

{% lightbox '/assets/duo/14.4-finished-three-quarter.jpg', 'md' %}

### Insert Drawer into Case {.step}

Insert the drawer PCB into the PCB rails, then slide the assembly into the case. There should be some resistance at the end when the board-to-board connectors mate. Then fasten the front panel to the case by tightening the thumb screws.

## Final Checks
---

Before you wrap up, check the following things:

{% checks 'capacitor', 'diode', 'ic', 'resistor', 'transistor', 'solder' %}
---

    <img src="/assets/duo/audio-tests-600.jpg" />
### Optional: Run Audio Tests {.step}

If your unit powers up and passes audio fine, most likely it's functioning exactly as it should. But if you want to really be sure, follow the steps in this video to test your Duo with the free software Room Eq Wizard (REW) and your interface:

    [Colour Duo Audio Test Process (YouTube)](https://youtu.be/Qf_rXdLhY1g)

If you are unfamiliar with the software, please watch our series of videos on measuring gear with REW:

    [Measuring Your Audio Gear with REW (YouTube Playlist)](https://www.youtube.com/watch?v=OwwKV4QTfwU&list=PLLjcaIlBVjDO5CgfHU5WSBKv7Aj13RG2K)

---

{% lightbox '/assets/duo/14.4-finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}

