---
layout: guide.liquid
title: Colourupter Assembly Guide
product: Colourupter
kit_sku:
version:
complexity:
estimated_time:
product_url: https://www.diyrecordingequipment.com/products/colourupter
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/colourupter/colourupter-sorting-2.0.pdf
schematic_url:
---

{% lightbox 'https://www.diyrecordingequipment.com/products/colourupter', 'md' %}

Thank you for purchasing a <a href="https://www.diyrecordingequipment.com/products/colourupter">Colourupter</a>.

If this is your first DIY project ever, we recommend reading our <a href="http://www.diyrecordingequipment.com/pages/getting-started">Getting Started Guide</a>.

Before you begin, check the revision of your PCB. If yours has the version number "v2.5" on the bottom you are on the correct page. If it does not, please follow the <a href="https://www.diyrecordingequipment.com/pages/colourupter-manual">Colourupter mkI assembly guide</a>.

## Required Tools

{% tools 'soldering-iron' %}
{% tools 'solder' %}
{% tools 'wire-cutters' %}
{% tools 'phillips' %}

## Optional Tools

{% tools 'multi-meter' %}
{% tools 'desoldering-pump' %}
{% tools '500ext' %}
{% tools 'rew' %}

## Component Sorting Sheet
---

{% lightbox '/assets/colourupter/colourupter-sorting-2.0.pdf', 'md' %}

To identify and keep track of every part in the kit, download and print the <a href="%base_url%/assets/colourupter/colourupter-sorting-2.0.pdf" target="_blank">Component Sorting Sheet (PDF)</a>.

## Standoffs, Header, and IC Socket (Bag 1) {.step}

---

{% lightbox '/assets/colourupter/colour-standoffs.jpg', 'md' %}

### Insert Standoffs {.step}

Note that there are two different ends on the plastic standoffs. The locking end has tabs with a right angle to prevent them from being removed after installation, while the non-locking end has smooth tabs. Insert the locking ends of the standoffs from the bottom of the PCB.

---

{% lightbox '/assets/colourupter/colour-header.jpg', 'md' %}

### Populate 8-Pin Header {.step}

Insert the 8-pin header into the holes marked “CON1.” Make sure to place the short, silver pins through the bottom of the PCB so that the PCB rests on the black plastic posts. Solder the header from the top of the PCB and <u>do not trim</u> the leads afterward.

---

{% lightbox '/assets/colourupter/ic-socket.jpg', 'md' %}

### Tape and Solder IC Socket {.step}

Insert the IC socket so that the notches on the sockets align with the markings on the PCB. Secure in place with tape. Then flip the PCB over and solder in place. Remove the tape.

## Resistors (Bag 2) {.step}

---

{% lightbox '/assets/15ips/res-bend.jpg', 'md' %}

### Bend Resistors {.step}

Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.

---

### Sort Resistors {.step}    

Resistor values are identified by colored bands on the body of the resistor. To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance. (Pro tip: to measure resistors quickly you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.)

---

{% lightbox '/assets/colourupter/res-place.jpg', 'md' %}

### Place Resistors {.step}

Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.

---

{% lightbox '/assets/colourupter/res-solder.jpg', 'md' %}

### Solder Resistors {.step}

Solder the resistors to the PCB. Observe good soldering technique: heat the pad and lead for 2-3 seconds, apply a small bit of solder, and continue to heat the pad for another 2-3 seconds. The finished joints should be shiny and should have just enough solder to cover the pad entirely.

---

{% lightbox '/assets/colourupter/res-trim.jpg', 'md' %}

### Trim Resistors {.step}

Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

## Capacitors, Vactrol, and Trimpot (Bag 3) {.step}

---

{% lightbox '/assets/colourupter/caps-small.jpg', 'md' %}

### Populate Capacitors {.step}
Place the capacitors in their respective positions. The capacitors are not polarized and therefore can be placed in either direction. Solder then trim the leads.

		<strong>Note:</strong> These capacitors are mistakenly marked "100u" on the PCB. They should be 10u as shown in the photo.

---

{% lightbox '/assets/colourupter/vactrol.jpg', 'md' %}

### Populate Vactrol {.step}
Next, we'll place the component at the heart of the Colourupter's sound: the vactrol, or resistive opto-isolator. The vactrol's orientation is indicated by the lead spacing; place the vactrol with the labeling on top and the closer leads towards the center of the PCB. Bend the leads, solder, and trim.

---

{% lightbox '/assets/colourupter/trimpot.jpg', 'md' %}

### Populate Trimpot {.step}

Populate the trimpot in the orientation marked on the PCB. Leave the trimmer alone for right now, we will set it in another step.

## IC (Bag 4) {.step}

---

{% lightbox '/assets/colourupter/ic.jpg', 'md' %}

### Place IC in Socket {.step}

The leads of the IC must be slightly bent to fit perfectly into the socket. Press one row of leads against a flat surface until they form a 90-degree angle with the body of the IC. Then do this for the other row.

IC polarity is indicated by a dot or notch on one side of the body. Align this side with the notch in the socket. Place the IC in this direction, and press it completely into the socket. 

## Final Checks {.step}
---

Before you wrap up, check the following things:

@[/checks/capacitor.html]  
@[/checks/resistor.html] 
@[/checks/ic.html]
@[/checks/diode.html]
@[/checks/solder.html]
## Calibration {.step}

No two vactrols are exactly alike. So to ensure predictable behavior and acceptable stereo matching, we need to calibrate the Colourupter. If you are using the Colourupter in a 500-series rack, the following steps will be easier with an extender like the <a href="https://www.diyrecordingequipment.com/products/500ext-500-series-extender-kit">500EXT</a>.

---

    <img src="%base_url%/assets/colourupter/rew-600.jpg" />
### Set Up for Testing {.step}
Download and install <a href="https://www.roomeqwizard.com/">Room EQ Wizard</a> on your computer. In Preferences choose your audio interface for the Input and Output Device and set the Input and Output to the left/channel 1.

Connect the Colour host with your Colourupter to the left/channel 1 of your interface.

---

{% lightbox '/assets/colourupter/rew-unity.jpg', 'md' %}

### Check Unity Gain {.step}
Set your Colour host so that the Colour section is engaged but all of the Colours are bypassed. For example, on the Colour Palette mkII, the IN switch should be in, but all Colour switches should be out. If your host has a trim, set it to unity gain.

In REW open the Generator module and set it to:

        
- Tones, Sine
- Frequency Hz: 1000
- -12dBFS

Push the green play button and open REW's Levels module. Make sure the signal is coming back into the input at or very close to -12dBFS. This is unity gain. If you are not getting unity gain, check your connections.

---

{% lightbox '/assets/colourupter/rew-cal.jpg', 'md' %}

### Calibrate Colourupter {.step}
Once you've have confirmed your Colour host passes unity gain, engage the Colourupter and set the Colour knob to 12 o'clock. You should notice that the input to REW is now a bit lower.

Use a screwdriver to adjust the VR1 trimpot until the level at the input is -15dBFS for 3dB of gain reduction. This will ensure that there is a moderate amount of compression at 12 o'clock on the Colour dial. If you would like the Colourupter to be more subtle, adjust for less gain reduction (higher input level). If you want your Colourupter more aggressive, adjust it for more gain reduction (lower input level).

---

{% lightbox '/assets/colourupter/finished.jpg', 'md' %}

### Finished! {.step}

All good? Congrats on finishing your build! Have a question or problem? [Drop us a line.](http://www.diyrecordingequipment.com/pages/support)

---

## Help Us Improve

{% feedbackForm %}