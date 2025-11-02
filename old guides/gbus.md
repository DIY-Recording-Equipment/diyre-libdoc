---
layout: guide.liquid
title: G Bus Assembly Guide
product: G Bus
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/g-bus-compressor-kit
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/gbus/gbus-sorting-1.1.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf?v=1666358399
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide.

Because the G Bus is a big, complex project, we recommend setting aside several sessions to complete it. We have gone to great lenghts to make the assembly process clear and precise, but there are hundreds off opportunities for Murphy's Law to creep in, especially if you are in a rush.

For this reason, we've included test steps at the end of every section, so that you can confirm everything up to that point is working. Please don't skip these tests! If you made a mistake, it will be a lot easier to catch before you've completed the rest of the build.

This is an advanced project for builders who have experience with PCB soldering and using a multi-meter. The guide assumes you are comfortable with identifying resistors, populating components, soldering, clipping leads, etc. This guide spends less time reminding you to check values and polarity, so as you go make sure to double check the following before soldering:

      
- Resistor values
- IC orientation
- Diode polarity
- Electrolytic capacitor polarity
- Connector orientation

{% if schematic_url %}
View the [{{ product }} schematic PDF here]({{ schematic_url }}).
{% endif %}

So, have fun, take your time, and Don't Panic.

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}
{% tool 'pliers' %}
{% tool 'phillips' %}
{% tool 'flathead' %}
{% tool 'rew' %}
{% tool 'multi-meter' %}

### Optional

{% tool 'res-calc' %}
{% tool 'desoldering-pump' %}
{% tool 'tape' %}

### Resistor Sorting Sheet

{% lightbox '/assets/gbus/gbus-sorting-1.1.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the [Resistor Sorting Sheet (PDF)](/assets/gbus/gbus-sorting-1.1.pdf).

## Interactive Build Map
---

{% lightbox 'https://maps.diy.re/gbus/', 'md' %}

To easily find parts and keep track of which ones you have populated, use the [G Bus Interactive Build Map](https://maps.diy.re/gbus/).

## Bypass Capacitors and IC Sockets (Bag 1) {.step}
This is the only section of the guide that does not correspond to a certain circuit block. Since every block contains these parts, we'll save time by populating the entire board with these first.

<strong>Note:</strong> If you notice a small red wire soldered to the bottom of your PCB, this is to fix a bug on the v1.0 PCBs. You can ignore the wire, just be careful not to break it during assembly.

---

{% lightbox '/assets/gbus/01-sockets.jpg', 'md' %}

### Populate Sockets and Bypass Capacitors {.step}

Populate the yellow .1u capacitors in the positions marked CB etc. These capacitors give noise in the power rails a path to ground, "bypassing" the rest of the circuit. Hence the designator CB. Every CB part in the build is .1u, so the values are not marked on the PCB. These capacitors are not polarized.

Insert the IC sockets so that the notches on the sockets align with the markings on the PCB. You may want to secure these with tape before soldering.

CB1-CB20<br>.1u cap (x31)

            <img src="/assets/parts/com-c004.png">
IC1, IC6, IC7<br>DIP14 IC socket (x4)

            <img src="/assets/parts/com-h010.png">
IC2-IC5<br>DIP8 IC socket (x8)

            <img src="/assets/parts/com-h009.png">

## Power Sections (Bag 2) {.step} 
The POWER 16V section receives the +/-16v and +48v power from the external SMPS and conditions it before sending it to the rest of the circuit. The inductors and capacitors form a low-pass filter which removes noise from the power rails. The capacitors also act as reservoirs of current, providing current quickly when the circuit requires it. This prevents the power rails for "sagging" (dipping below the rated voltage) when there is a large demand for current.

The POWER 12V section takes the filtered +/-16V rails and regulates them down to +/-12V. These rails act as DC reference points for several parts of the compressor, but do not power any active stages.

---

{% lightbox '/assets/gbus/02-regulators.jpg', 'md' %}

### Populate Regulators {.step}

There are two important things to note about the regulators. First, one side of the body is flat while the other is round. And second, one is 7812 (black top) while the other is 7912 (silver top).

Place the 7812 in U1 and the 7912 in U2. Place both of them so that the shape of the body matches the
shape on the circuit board. Double check the positions and orientation, then solder and trim.

U1<br>7812 regulator

            <img src="/assets/parts/com-u024.png">
U2<br>7912 regulator

            <img src="/assets/parts/com-u025.png">

---

{% lightbox '/assets/gbus/02-inductors.jpg', 'md' %}

### Populate Inductors {.step}

Place the inductors in their positions, solder, and trim. Inductors are not polarized.
L1, L2<br>470u inductor (x2)

            <img src="/assets/parts/com-l008.png">

---

{% lightbox '/assets/gbus/02-caps-large.jpg', 'md' %}

### Populate Large Capacitors {.step}
The four 2200u capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB. The two 4.7u capacitors are not polarized.

C1-C4<br>2200u cap (x4)

            <img src="/assets/parts/com-c043.png">
C5, C6<br>4.7u cap (x2)

            <img src="/assets/parts/com-c021.png">

---

{% lightbox '/assets/gbus/02-xlrs.jpg', 'md' %}

### Populate XLR Jacks {.step}

Place the XLR jacks. Most will snap in place, but you may need to use some tape if they fall out before soldering. Solder the jacks but do not trim the leads.
J1<br>5-pin XLR female jack

            <img src="/assets/parts/com-j017.png">
J2<br>5-pin XLR male jack

            <img src="/assets/parts/com-j016.png">

---

{% lightbox '/assets/gbus/02-test.jpg', 'md' %}

### Test Power Section {.step}
For this and all following test steps, connect the power before testing and disconnect the power after.

        
1. Set your multi-meter to read 20V DC.
2. Place the black probe on a GND test point. The black probe should go to a GND test point for all future tests.
3. Probe the +16V, -16V, +12V, and -12V test points with the red probe. The voltage should be within 0.5V of the rated voltage.

## Control Boards (Bag 3) {.step}

In this section you'll build the user interface. There are two main things to watch out for in this section:

    
1. Which side of the board to place the parts on. The control parts (switches and pots) need to go on the front of the control boards (CBs), while the resistors, capacitors, and connectors go on the back.
2. The orientation of the rotary switches and the shrouded headers is important, and once you solder them in, they're very difficult to remove. Make sure the orientation matches the drawing on the PCB before soldering.

---

{% lightbox '/assets/gbus/03-passives.jpg', 'md' %}

### Populate Resistors and Capacitors {.step}
Pay close attention to which side the components should be populated on. On the CBs, the resistors and caps go on one side, while the switches and pots go on the other. Remember that the 100u caps are polarized.

C1_CB, C2_CB<br>100u cap (x2)

            <img src="/assets/parts/com-c022.png">
C3_CB, C6_CB<br>.15u cap (x2)

            <img src="/assets/parts/com-c055.png">
Markings: 2A154J

C4_CB, C7_CB<br>.1u cap (x2)

            <img src="/assets/parts/com-c005.png">
C5_CB, C8_CB<br>68n cap (x2)

            <img src="/assets/parts/com-c050.png">
Markings: 2A683J

Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

{% lightbox '/assets/gbus/03-cons.jpg', 'md' %}

### Populate Connectors {.step}
Populate the various headers that connect the controls to the motherboard (MB). Again, note carefully the side to populate on. Also note that the shrouded headers CON2-CON4 must be inserted in a particular orientation.

CON2_CB<br>16-pin header

            <img src="/assets/parts/com-h033.png">
CON3_CB<br>12-pin header

            <img src="/assets/parts/com-h031.png">
CON4_CB<br>26-pin header

            <img src="/assets/parts/com-h035.png">

---

{% lightbox '/assets/gbus/03-potentiometers.jpg', 'md' %}

### Populate Potentiometers {.step}
Pay close attention to the values marked on the back when placing the potentiometers (pots).

VR1_CB, VR2_CB<br>B50k pot (x2)

            <img src="/assets/parts/com-e-pot-vertical.png">
Markings: B503

VR3_CB<br>B10k pot

            <img src="/assets/parts/com-e-pot-vertical.png">
Markings: B103

---

{% lightbox '/assets/gbus/03-rotary.jpg', 'md' %}

### Populate Rotary Switches {.step}
Note that the rotary switches have a small round tab at 9 o'clock (if the logo is 12). This tab will mate with a hole in the mounting bracket, so it's very important that the switch be installed the correct way. Note that there circles on the PCB drawings that correspond to the tabs.

Insert the switches so that the tabs on the switches match those on the PCB. Then place the switches and board in the U-bracket to double check the orientation before soldering.

SW1_CB-SW3_CB, SW5_CB<br>2x6 switch (x4)

            <img src="/assets/parts/com-e-rotary.png">
SW9_CB<br>4x3 switch

            <img src="/assets/parts/com-e-rotary.png">

---

{% lightbox '/assets/gbus/03-pushbuttons.jpg', 'md' %}

### Populate Pushbutton Sub-board {.step}
Install the switch caps before populating the switches on the small sub-board. Place the switches so that the E on the body aligns with the E on the PCB. Note the correct side before soldering. Also populate the 4-pin header on the opposite side of the board from the switches. Orient the header so the plastic posts are flush against the bottom of the sub-board.

SW6_CB-SW8_CB<br>DPDT switch (x3)

            <img src="/assets/parts/com-e038.png">
CON6B_CB<br>4-pin header

            <img src="/assets/parts/com-h021.png">

---

{% lightbox '/assets/gbus/03-pushbuttons-board.jpg', 'md' %}

### Mount Pushbutton Sub-board {.step}
Fasten the sub-board to CB2 via the screws, standoffs, and nuts. Then solder the 4-pin header to CB2 and trim the excess leads.

4-40 screw 3/8" (x2)

            <img src="/assets/parts/hw-s001.png">
4-40 nut (x2)

            <img src="/assets/parts/hw-n001.png">
4-40 standoff 5/32" (x2)<br>

            <img src="/assets/parts/hw-y022.png">

---

{% lightbox '/assets/gbus/03-crimp.jpg', 'md' %}

### Attach Terminals to Wires {.step}
For each wire on the harness, place the wire through the end of the terminal until the insulation runs against the small tab on the terminal. The exposed part of the wire should sit between the tab and the side of the terminal. Then, using a pair of pliers, crimp the part of the terminal that surrounds the insulated part of the wire. After crimping, check that the wire is held securely in the terminal and that you can't pull it out. Then solder the tinned end of the wire to the terminal.

Quick-connect terminal (x4)

            <img src="/assets/parts/hw-y023.png">

---

{% lightbox '/assets/gbus/03-kd2.jpg', 'md' %}

### Attach Wiring Harness to IN Switch {.step}
The IN switch has three columns of pins: one for each pole of the switch and a third for the LED. The switch columns are labeled "NO" for normally open, "NC" for normally closed, and "C" for common. The LED column is labeled "L(+)" for LED power and "L" for ground. Assuming the switch is viewed from the back with the "IN" label upright, the left column is 1 and the furthest right column is 2.

On the plastic part of the wiring harness there is a small number to indicate pin 1. Note that for the first batches of kits, the colors of the wires are different from those shown in the photo.

For the jumper, use a leftover component lead.

        
- CON5 pin 1: C2
- CON5 pin 2: NO1
- CON5 pin 3: L
- CON5 pin 4: C1
- Jumper NO2 -> L(+)

## Relays and Misc (Bag 4) {.step}

Relays are switches that are controlled by a DC voltage; when the voltage is ON they are in one state, and when the voltage is OFF they flip to the other state. Relays help keep important traces short, thus minimizing noise and interference. While the user controls have to be on the front panel, the relays can go right by the signals they are switching. Without a relay, we'd have to run long audio (AC) traces to the controls; with a relay the DC control voltage trace is long, while the audio traces stay short.

---

{% lightbox '/assets/gbus/04-passives.jpg', 'md' %}

### Populate Components {.step}
Populate the ICs, headers, resistors, diodes, and capacitors. Place the ICs so that the notch or dot on the body corresponds with the notch on the socket and PCB. Place the headers so they match the orientation shown on the PCB. And note that the diodes and large capacitors are polarized.

Note that the 10k and 120R resistors have the same color code in opposite directions. Confirm the values for these resistors with a multi-meter before soldering.

C7<br> 100u cap

            <img src="/assets/parts/com-c022.png">
C8<br>100p cap

            <img src="/assets/parts/com-c008.png">
C9, C10<br>3.3n cap (x2)

            <img src="/assets/parts/com-c013.png">
CON1<br>3-pin header

            <img src="/assets/parts/com-h038.png">
CON2<br>16-pin header

            <img src="/assets/parts/com-h033.png">
CON3<br>12-pin header

            <img src="/assets/parts/com-h031.png">
CON4<br>26-pin header

            <img src="/assets/parts/com-h035.png">
CON5<br>4-pin header

            <img src="/assets/parts/com-h039.png">
D1-D3, D11<br>1N4004 diode (x5)

            <img src="/assets/parts/com-d005.png">
IC1, IC7<br>LF347N opamp (x2)

            <img src="/assets/parts/com-u-dip14.png">
Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

{% lightbox '/assets/gbus/04-relays.jpg', 'md' %}

### Populate Relays {.step}
You can hold the relays in place for soldering with tape or by bending the leads against the bottom of the PCB.

U3-U6<br>24V relays (x5)

            <img src="/assets/parts/com-z010.png">

---

{% lightbox '/assets/gbus/04-cb-connect.jpg', 'md' %}

### Connect Controls to MB {.step}
Use the ribbon cable and IN switch wiring harness to connect CB2 and the IN switch to the MB.

---

    <iframe src="https://www.youtube.com/embed/6UD_AGk_bdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Test Relays {.step}
        
1. Connect the power cable to the G Bus.
2. Set the multi-meter to read continuity (the "beep mode").
3. Place the probes on the test points next to a relay (it doesn't matter which probe goes where).
4. Press the button on the CB associated with that relay. The meter should beep when the switches are pressed IN, except for the IN switch. For the IN switch, the meter should beep when the switch is out.
5. Repeat for each relay. Note that the two XFMR relays U3_1 and U3_2 are controlled by the same button.
6. Disconnect CB2 and the IN switch from the MB.
7. Unplug the power cable before proceeding with the assembly.

        <strong>Note:</strong> Due to a bug on the v1.0 PCB, the MONO SC relay will not test correctly. You can skip testing this relay. The revision number is in the lower left corner of the main PCB. For v1.0 it says "1.0 2022."

## Audio Jacks (Bag 5) {.step}

---

{% lightbox '/assets/gbus/05-trs.jpg', 'md' %}

### Populate TRS Jacks {.step}

Place the TRS jacks. Hold them in place with tape or by bending the leads, then solder and trim.
J3<br>TRS jack (x2)

            <img src="/assets/parts/com-j010.png">

---

{% lightbox '/assets/gbus/05-xlr.jpg', 'md' %}

### Populate XLR Jacks {.step}

Place the XLR jacks. Most will snap in place, but you may need to use some tape if they fall out before soldering. Solder the jacks but do not trim the leads.
J4<br>3-pin XLR male jack (x2)

            <img src="/assets/parts/com-j007.png">
J5, J6<br>Combo jack (x3)

            <img src="/assets/parts/com-j024.png">

## Balanced Input/Output and Unity Trim (Bag 6) {.step}

This section is responsible for interfacing with the "outside world." The opamp IC2.1 receives a balanced signal from the input jacks and converts it to a single-ended (unbalanced) signal for the rest of the circuit. After the signal is processed by the compressor, the balanced output converts it back to balanced and sends it to the output jacks. There are two balanced outputs on the board. IC2.2 and X1 make up the transformer output, while two two opamps in IC1 make up the standard, electronically-balanced output.

---

{% lightbox '/assets/gbus/06-components.jpg', 'md' %}

### Populate Components {.step}
Populate the ICs, resistors, and capacitors. Do not populate the transformers yet. Remember that the large caps, ICs, and trimpots are polarized. <strong>Note:</strong> In early 2024 we changed VR1 to 50k and R27 to 10k to increase the range of the unity gain trim. Version 1.0 PCBs show the old values, which you can disgregard.

C11, C12, C20<br>22u cap (x6)

            <img src="/assets/parts/com-c060.png">
C13, C15, C19<br>100u cap (x6)

            <img src="/assets/parts/com-c022.png">
C14<br>22p cap (x2)

            <img src="/assets/parts/com-c003.png">
Markings: 22j

C16<br>220u cap (x2)

            <img src="/assets/parts/com-c002.png">
C17, C18<br>100p cap (x4)

            <img src="/assets/parts/com-c008.png">
Markings: bc 101

IC2, IC3<br>NE5532 opamp (x4)

            <img src="/assets/parts/com-u-dip8.png">
RA1, RA2<br>10k array (x4)

            <img src="/assets/parts/com-z006.png">
VR1<br>50k trimpot (x2)

            <img src="/assets/parts/com-e036.png">
Markings: W503

Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

    <iframe src="https://www.youtube.com/embed/GFxGLbNafWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Test Balanced Input {.step}
        
1. Calibrate REW with a multi-meter.
2. Connect a TRS cable to the first output of your interface. This output might be called "1" or "L."
3. Open the Generator in REW and send a 60Hz, -10dBFS signal to the plug.
4. Set the multi-meter to read AC volts.
5. Probe the Tip and Ring of the plug and note the value.
6. Press "Calibrate Level" and enter the value.
- Switch the dB unit to dBu. Then set the generator to 60Hz, +4dBu.
- Connect the power cable to the G Bus.
- Connect the TRS plug to J5_1
- On the L channel, place the probes on the BAL in and GND test points. Your meter should read between 1.1-1.3V.
- Repeat steps 3-5 for the R channel.
- Unplug the power cable before proceeding with the assembly.

## Audio VCA (Bag 7) {.step}

The audio VCA is the part that performs the main job of the compressor: gain reduction. A VCA (voltage-controlled amplifier) changes the level of an AC audio signal according to a DC control voltage (CV). You can think of a VCA just like a regular amplifier, but instead of a volume knob, the gain is controlled by the CV. Or you can think of the CV as a little gremlin that turns a tiny gain knob inside the VCA. Whatever works for you.

At this point we can zoom out and notice that the compressor consists of two main parts: the audio VCA to perform the gain reduction, and the CV to control the VCA. As we'll see in later sections, most of the circuit's complexity comes from generating and manipulating the CV in the sidechain (SC).

The balanced input stage feeds into three places: the audio VCA, the MIX section, and the SC (which we'll cover in the next section). Signal enters the VCA through the unity gain trim VR1. The VCA compresses the signal according to the CV, and then the opamp IC3.2 provides necessary buffering, gain, and polarity correction. The output of IC3.2 feeds both directly to the MIX switch, and to the mix summing network through R30. The dry signal from the balanced input and the wet signal from IC3.2 are summed at IC3.1 The MIX pot VR3_CB controls the ratio of wet to dry. Then the MIX switch SW6_CB selects whether just the wet or the summed wet/dry signal goes to the balanced outputs.

---

{% lightbox '/assets/gbus/07-components.jpg', 'md' %}

### Populate Components Except the VCA {.step}
Populate the ICs, diodes, resistors, capacitors, and trimpots. Remember that the large caps, diodes, ICs, and trimpots are polarized.

C21<br>22p cap (x2)

            <img src="/assets/parts/com-c003.png">
Markings: 22j

C22, C24<br>22u cap (x4)

            <img src="/assets/parts/com-c060.png">
C23<br>100p cap (x2)

            <img src="/assets/parts/com-c008.png">
Markings: bc 101

D4, D5<br>1N4148 diode (x4)

            <img src="/assets/parts/com-d015.png">
IC4<br>NE5532 opamp (x2)

            <img src="/assets/parts/com-u-dip8.png">
VR2<br>50k trimpot (x2)

            <img src="/assets/parts/com-e037.png">
Markings: W503

Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

{% lightbox '/assets/gbus/07-vca.jpg', 'md' %}

### Populate VCA {.step}
This step assumes you are using the stock VCAs. If you are planning to use your own vintage VCA in the DBX 202 footprint, do not populate these VCAs. Instead follow the instructions for the Vintage VCA Mod.

Place the right-angle side of the 7-pin connectors through the VCA sub-boards from the front and solder them so that the sides of the black plastic posts sit flush with the PCB. Then install this assembly in the VCA1A positions.

VCA1A<br>2181C VCA PCB (x2)

            <img src="/assets/parts/pcb-082.png">
VCA1A<br>12-pin header (x2)

            <img src="/assets/parts/com-h017.png">

---

    <iframe src="https://www.youtube.com/embed/tXalEvRoR1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Test Main Output and Set Unity Gain {.step}
        
1. Connect the power cable to the G Bus.
2. Connect your interface to the L channel input and output.
3. Send a 1Khz, -10dBFS test signal.
4. Open Levels in REW. You should see your -10dBFS test signal on the Out meter and some level coming back in on the In meter.
5. Set unity gain by turning VR1 until the In meter matches the Out meter.
6. Repeat steps 2-5 with the R channel.
7. Unplug the power cable before proceeding with the assembly.

## Filter (Bag 8) {.step}
This section is the first place we manipulate the CV by removing or emphasizing certain frequencies. As we know, the CV is a DC voltage, but here at the beginning of the sidechain it is still AC, so we filter it just like audio. The two opamps in IC4 are buffers that isolate the passive filters from the rest of the circuit. All of the resistors and capacitors between the two opamps are simple filters which are selected by SW5_CB. This is also where the signal from the EXT SC jack enters the SC if the switch is in the last position.

---

{% lightbox '/assets/gbus/08-components.jpg', 'md' %}

### Populate Components {.step}
Populate the ICs, resistors, and capacitors. Remember that the large caps and ICs are polarized.

C25, C28<br>22p cap (x4)

            <img src="/assets/parts/com-c003.png">
Markings: 22j

C26<br>82n cap (x2)

            <img src="/assets/parts/com-c057.png">
Markings: 82nJ63

C27<br>3.3n cap (x2)

            <img src="/assets/parts/com-c013.png">
Markings: 3n3j100

C29<br>22u cap (x2)

            <img src="/assets/parts/com-c060.png">
IC5<br>NE552 opamp (x2)

            <img src="/assets/parts/com-u-dip8.png">
Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

    <iframe src="https://www.youtube.com/embed/gR18hdYsmCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Test Filter {.step}
        
1. Connect the power cable to the G Bus.
2. Connect CB2 to the MB. Connect your interface to the L channel input. You do not need to connect to the output.
3. Send 60Hz, +4dBu test signal.
4. Set the meter to AC volts and probe the FILTER and GND test points on the L channel.
5. Turn the FILTER knob to positions 1-6 (later you will set the stop so that this is the furthest the switch can be turned). The value should start around 1v at OFF, then go down, then back up, then finally end at 0V in the Ext. SC position.
6. Repeat steps 2-6 with the R channel.
7. Disconnect CB2 from the MB.
8. Unplug the power cable before proceeding with the assembly.

## SC VCA (Bag 9) {.step}
This compressor has a very unique, even peculiar topology: it is a feed-forward compressor with a VCA in the SC. Most compressors are feed-back, where the signal splits to the SC after the compression. This makes for smoother compression with gain reduction elements like FETs and optos which do not have a strict gain law like VCAs do. In compressors that are feed-forward, there is usually an RMS detector in the SC, which can provide a precise CV to the VCA based on a smoothed (RMS) version of the signal.

This bus compressor, on the other hand, employs a SC VCA to create a hybrid feed-back/feed-forward circuit. The SC VCA mirrors the behavior of the audio VCA, giving the SC a reference that is similar to if the SC signal were tapped after the audio VCA (feed-back). Why this unique topology? Most likely to save cost and space. So it seems the world's favorite bus compressor was a collaboration between the engineering and finance departments.

The signal from the Filter section feeds to VCA2, which compresses the signal according to it's own CV. IC5.3 fills the same purpose for the SC CV as IC3.2 does for the audio VCA: buffering, gain, and polarity. The signal is finally rectified from AC to DC by IC5.1, IC5.2, and the surrounding diodes. D10 sets the threshold for the compressor; any voltage above -1VDC will not pass through to the rest of the SC and therefore will not affect the CV.

---

{% lightbox '/assets/gbus/09-components.jpg', 'md' %}

### Populate Components {.step}
Populate the ICs, diodes, resistors, capacitors, and VCA. Note that C30, the diodes, ICs, and VCAs are polarized.

C30<br>6.8u cap (x2)

            <img src="/assets/parts/com-c059.png">
C31<br>22p cap (x2)

            <img src="/assets/parts/com-c003.png">
Markings: 22j

C32<br>100p cap (x2)

            <img src="/assets/parts/com-c008.png">
Markings: bc 101

D6-D10<br>1N4148 diode (x10)

            <img src="/assets/parts/com-d015.png">
IC6<br>LF347 opamp (x2)

            <img src="/assets/parts/com-u-dip14.png">
VCA2<br>2181C VCA PCB (x2)

            <img src="/assets/parts/pcb-082.png">
VCA2<br>12-pin header (x2)

            <img src="/assets/parts/com-h017.png">
Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

## Meter, Attack, Release, and Ratio (Bag 10) {.step}
The ratio of a compressor is equal to the amount of gain in the SC. So the RATIO switch sets the gain of IC5.2 by selecting between R72-R74. The other resistors in this section adjust the threshold by adding different amounts of offset to the CV. This prevents big jumps in level as the ratios change.

After the ratio has been set, the CV passes through a network of resistors and capacitors which control the compressor's response times. The ATTACK switch selects which resistor the CV will pass through before charging the release capacitors. The RELEASE switch then selects which resistor/capacitor pair will be charged. These passive networks control how quickly the CV can change and thus how quickly the VCA can respond to changes in the audio level. Larger values will slow down the response more. If there were no attack/release circuitry at all (that is 0 resistance and 0 capacitance), the compressor would track the audio level instantaneously. If the resistor and capacitor values were very large, the CV would not change at all and the compressor would just become a fader controlled by the THRESH and MAKE-UP knobs.

After the attack/release section, the CV is sent to three places: the audio VCAs, the SC VCAs, and the meter. So, since the CV is the same in all three places, the compression (audio VCA), feed-back "mirror" of the compression (SC VCA), and the meter are all harmonized.

---

{% lightbox '/assets/gbus/10-components.jpg', 'md' %}

### Populate Meter, Attack, and Release Components (Sub bags 1 and 2) {.step}
Populate the diodes, resistors, capacitors, and trimpots. The tantalum capacitors in the Release section are polarized. The positive lead is longer and is marked with a "+". Note that C37 is a different value from the rest of the tantalums.

C33-C36, C38<br>.47u cap (x5)

            <img src="/assets/parts/com-c061.png">
Markings: 474L

C37<br>6.8u cap

            <img src="/assets/parts/com-c059.png">
Markings: 685H

VR3<br>5k trimpot

            <img src="/assets/parts/com-e036.png">
Markings: W502

Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

{% lightbox '/assets/gbus/10-ratio.jpg', 'md' %}

### Populate Ratio Components {.step}
Populate the diodes, resistors, capacitors, and trimpot. Note that the 10u NP capacitors are not polarized.

C39-C42<br>10u NP cap (x4)

            <img src="/assets/parts/com-c001.png">
C43<br>100p cap

            <img src="/assets/parts/com-c008.png">
D12, D13<br>1N4148 diode (x2)

            <img src="/assets/parts/com-d015.png">
VR4<br>50k trimpot

            <img src="/assets/parts/com-e037.png">
Markings: W503

Resistors<br>[See sorting sheet](/assets/gbus/gbus-sorting-1.1.pdf)

---

    <iframe src="https://www.youtube.com/embed/5vftP9LqTnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Test SC VCA {.step}
        
1. Connect the power cable to the G Bus.
2. Connect both CBs and the IN switch to the MB. Connect your interface to both inputs. Leave the outputs unconnected.
3. Set all controls CCW (counter-clockwise).
4. Engage the compressor with the IN button.
5. Send a 60Hz sine wave, +4dBu test signal. In the REW Generator, set the Output to 1+2 (this might also be called L+R). This option is at the bottom of the window, next to the Play button.
6. Set the multi-meter to read DC volts.
7. Place the probes on the SC and GND test points located on the bottom-right of the MB. Remember to place the black probe on GND. The meter should display a negative value between -0.5V and -3V (there is a wide range because we have not calibrated the ratio yet).
8. Unplug the power cable before proceeding with the assembly.

---

{% lightbox '/assets/gbus/10-meter-jumper.jpg', 'md' %}

### Solder Wiring Harness to Meter {.step}
The meter has two sets of pins: two big ones for the meter signal, and two small ones for the LEDs. And on the body of the meter there are "+" and "-" markings.

As with the "IN" switch, pin 1 of the wiring harness is marked on the body. Note that for the first batches of kits, the colors of the wires are different from those shown in the photo.

Solder a jumper wire between the Big + and Little - pins. Then, solder the pin 1 wire of the harness to Little +.

---

{% lightbox '/assets/gbus/10-meter-quick-connect.jpg', 'md' %}

### Attach Terminals to Meter {.step}
Crimp and solder the terminals to the remaining two wires of the harness. Then insert the pin 2 terminal onto the Big + pin, and the pin 3 terminal onto the Big - pin of the meter.

The meter and wiring harness should now be wired as shown below:

        
- CON1 pin 1: Little +
- CON1 pin 2: Big +
- CON1 pin 3: Big -
- Jumper Big + -> Little -

After double checking, connect the wiring harness to CON1.

Quick-connect terminal (x2)

            <img src="/assets/parts/hw-y024.png">

---

{% lightbox '/assets/gbus/10-test.jpg', 'md' %}

### Check Meter {.step}
        
1. Connect the power cable to the G Bus.
2. As you did for the last test connect your interface to both inputs but leave the outputs disconnected.
3. Send the same test signal from REW as before (60Hz sine wave, +4dBu).
4. Engage the compressor with the IN button.
5. Turn the THRESH knob until you see compression on the meter. If the meter shows gain reduction, you can move on.
6. Disconnect the CBs, IN switch, and meter from the MB.
7. Unplug the power cable before proceeding with the assembly.

## Transformer (Bag 11) {.step}
---

{% lightbox '/assets/gbus/11-trim.jpg', 'md' %}

### Trim and Tin Leads {.step}
Trim the leads of the transformer down to about 1.5" (38mm). Be generous! You can always cut them shorter, but you can't make them longer after you've cut.

Then strip off about 1/8" (3mm) of the insulation and tin the leads by applying a bit of solder.

---

{% lightbox '/assets/gbus/11-place.jpg', 'md' %}

### Place Transformers {.step}
Place the wires through their respective holes and solder. The GRY and VIO holes are for using different transformers and should remain empty.

## Chassis (Bag 12) {.step}

---

{% lightbox '/assets/gbus/12-mb.jpg', 'md' %}

### Install MB {.step}
To avoid damaging the connectors during this section, disconnect the CBs, meter, and IN switch from the MB. Remove the washers and nuts from the TRS jacks. Then place the MB in the chassis and fasten it to the standoffs via the short screws for the PCB and the long screws for the transformers.

PCB screw (x6)

            <img src="/assets/parts/hw-s027.png">
Transformer screw (x4)

            <img src="/assets/parts/hw-s017.png">

---

{% lightbox '/assets/gbus/12-mb.jpg', 'md' %}

### Fasten MB to Case {.step}
Screw the XLR jacks to the rear of the case and then put the washers and nuts on the TRS jacks.

XLR screw (x14)

            <img src="https://manuals.diy.re/assets/parts/hw-s022.png">

---

{% lightbox '/assets/gbus/12-stops.jpg', 'md' %}

### Set Rotary Switch Stops {.step}
Each rotary switch includes a washer with a tab that sets the furthest position for the switch. These tabs fit in the square holes around the switch shafts. The numbers are before/counter-clockwise from the corresponding holes. Make sure each switch is in the completely counter-clockwise position, then place the tabs in the following holes:
        
- SW1_CB, ATTACK: 6
- SW2_CB, RATIO: 3
- SW3_CB, RELEASE: 5
- SW5_CB, FILTER: 6
- SW9_CB, DRIVE: 3

---

{% lightbox '/assets/gbus/12-mount-cbs.jpg', 'md' %}

### Mount CBs to U-Bracket {.step}
Each potentiometer has two nuts: one to go behind the U-bracket and one in front. Thread the inside nuts all the way onto the pots, then fasten the CBs to the U-bracket via the nuts and washers of the rotary switches. Then adjust the inside nuts of the pots until they are flush with the back of the U-bracket. Finally, attach the lock washers and nuts on the front size of the bracket.

---

{% lightbox '/assets/gbus/12-u-bracket.jpg', 'md' %}

### Fasten U-Bracket to Case {.step}
Screw the U-bracket to the bottom of the chassis then connect the cables to the MB.

U-bracket screw (x3)

            <img src="/assets/parts/hw-s026.png">

---

{% lightbox '/assets/gbus/12-fp.jpg', 'md' %}

### Install Front Panel, Meter, and IN Switch {.step}
Fasten the front panel to the chassis. Then place the meter and IN switch through the front panel and connect them to the MB.

Front panel screw (x4)

            <img src="/assets/parts/hw-s024.png">

---

{% lightbox '/assets/gbus/12-knobs.jpg', 'md' %}

### Install Knobs {.step}
Press the knobs onto the potentiometers and rotary switches.

## Calibration {.step}

---

 <iframe src="https://www.youtube.com/embed/WFk8eq5YLWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Calibrate VCA Distortion {.step}
The audio VCAs must be manually trimmed for the lowest distortion.

        
1. Connect the power cable to the G Bus.
2. Connect inputs and outputs to the L channel.
3. Disengage the compressor, turn the THRESHOLD completely CW, and the DRIVE completely CCW.
4. Send a 1kHz, +4dBu test signal.
5. Open the RTA window, click "Show Distortion" and the Record button
6. Trim VR2 so that THD is as low as possible. The absolute number is not important and will depend on your setup and the channels may not match exactly. As long as each channel measures below 0.1% THD there is no cause for concern.
7. Repeat for the R channel.

---

 <iframe src="https://www.youtube.com/embed/R8qBlTYNyVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Calibrate Ratio {.step}
This is where we will truly make your G Bus as authentic as possible by dialing in the ratios to match the original console. The actual ratios after calibration will be approximately 2.3:1, 3.5:1, and 5.8:1. Those may seem too different from what's printed on the front panel, but they are the actual numbers from a vintage console.

        
1. Connect inputs and outputs to the L channel. Send a 1kHz, -20dBFS test signal.
2. Engage the compressor, and set RATIO to the middle position (4:1).
3. Turn THRESHOLD until the IN meter in REW reads -30dBFS.
4. Change the test signal level to -10dBFS.
5. Trim VR4 in the RATIO section until In reads -27.15dBFS.
6. You do not need to repeat this step for the R channel.

    <strong>Note:</strong> If you cannot get the level down to -30dBFS in step 3 you can simply increase the level by 10dB. So for step 3 you would send a -10dBFS signal and compress down to -20bFS. For steps 4 and 5 you would send a -0.1dBFS signal (or as close as you can get to 0dBFS) and trim VR4 for -17.15dBFS.

---

 <iframe src="https://www.youtube.com/embed/sU1VRQQgkFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
### Calibrate Gain Reduction Meter {.step}
Finally, we will calibrate the meter so it is precise at 8dB gain reduction. After calibration the meter should be accurate up to 12dB, but it is normal for it to drift off at higher gain reduction levels.

        
1. Send a 1kHz, -10dBFS test signal.
2. Open the Levels window and turn THRESH until "In" is 8dB lower than "Out."
3. Trim VR3 until the meter shows 8dB gain reduction.
4. Unplug the power cable before proceeding with the assembly.

---

{% lightbox '/assets/gbus/12-lid.jpg', 'md' %}

### Install Lid {.step}

Place the lid on the case with the countersunk side facing up. Screw in the three screws that attach to the U-bracket first, then the rest of the screws.

Lid screw (x10)

            <img src="/assets/parts/hw-s026.png">

---

{% lightbox '/assets/gbus/finished.jpg', 'md' %}

### Build Completed!

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](https://support.diy.re)

## Modding the G Bus
There are a lot more mays to mod the G Bus than we could fit on the front panel. So if you want to customize your G Bus, head over to the [G Bus Mods page](https://support.diy.re/category/45-g-bus). Please keep in mind that we cannot offer support for the mods. There are simply too many variables that change once you start modding, especially after several mods. You're the man now, dog!

---

## Help Us Improve

{% feedbackForm %}