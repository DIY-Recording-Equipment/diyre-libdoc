---
layout: support.liquid
title: "EQP5 Troubleshooting"
eleventyNavigation:
  key: "EQP5 Troubleshooting"
  parent: "By Product"
  order: 13
---

Most EQP5 problems come down to an LED, an IC, or a connector that isn't seated or oriented correctly, and most resolve with a multimeter check rather than a parts swap. If you've installed the vintage output option, a few of its own issues are covered separately below. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [EQP5 Assembly Guide](https://www.diyrecordingequipment.com/pages/eqp5-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

You'll want a multimeter for the checks below.

## No signal / level is too quiet {.step}

1. Make sure the jumpers on CON1 (Modern/Vintage output select) are oriented as shown below. The #1 cause for no signal in the EQP5 is having these headers rotated 90 degrees.

{% lightbox '/assets/docs/file-sd33lNIGfq.png' %}

2. Check that all ICs are seated fully and in the correct orientation.
2. If your EQP5 is set to Vintage mode, try Modern mode, and vice versa.
2. Double check all resistor values.
2. Check the orientation of all capacitors.
3. Check for cold or blobby solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
4. Swap in NE5532 ICs from another EQP5 (if available) to rule out damaged ICs.

## LED doesn't light up {.step}
1. Confirm LED1 is installed in the correct direction by the orientatin of the small metal parts inside the LED.
{% lightbox '/assets/docs/led-polarity.png' %}
1. Check that all ICs are seated fully and in the correct orientation.
2. Check the orientation of all capacitors.
Check for solder joints that are bridged too each othery by too much solder.
2. Remove all ICs and the DOA (if installed). IF the LED lights up with them removed, try adding back one at a time to see which one causes the power to fail.
3. Measure the resistance between +16v/-16v test points and ground. If either is close to 0 ohms, there is a short circuit between that power rail and ground.

## Noise, crackling, intermittent signal, or a flickering LED {.step}

Cold or "blobby" solder joints are the most common cause here, especially if the symptom showed up after the unit worked fine for a while.

1. Look at your joints for a few visual signs: solder that doesn't form a neat cone around the lead, a joint that doesn't fully cover the pad (you can still see bare pad around it), or a joint that looks cloudy and dull instead of shiny. Any of these points to a cold joint.
2. Reflow the suspect joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints) for the full technique, but in short: get the iron properly hot with a clean tip, touch it to where the pad and lead meet, hold for 2 to 5 seconds until the existing solder fully melts and settles onto the pad, then add a small amount of fresh solder and hold for another couple seconds before removing the iron.
3. Check the underside of the board for stray solder specks or blobs that could be bridging two points that shouldn't be connected. These can cause exactly this kind of intermittent noise and are easy to miss.

## One of the boost/cut frequencies doesn't work {.step}

1. Check the values and solder joints of C15-C24.
2. Check the solder joints on the CON2A/CON2B and CON3A/CON3B connector pairs.
3. Check the solder joints on the frequency-select switches.  

## Crackle when turning a pot, or hum when touching the LF Cut knob {.step}

This points to grounding, shielding, or a dirty pot rather than a component failure.

1. Clean the pot in question.
2. Reflow its solder joints if cleaning doesn't fully resolve it. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. If the hum specifically appears when touching the LF Cut knob, check the grounding around that section of the board.

## Things that seem like problems but arent

1. Low-frequency bump in Vintage mode. This is normal, not a defect. It comes from the interaction between the output transformer behavior and the input impedance of whatever you're feeding. It's rarely audible with real program material, mostly showing up as a bump on a sweep or analyzer plot.
2. A small ~1dB difference in level between a pair of EQP5s. The EQP5 is built around potentiometers and film capacitors with roughly 20% tolerance which can create slight differenes in level between units.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).


## Not Passing Unity Gain

If your EQP5 is not passing unity gain when in bypass mode, check the following:

1. Check all resistor color codes against the [EQP5 Sorting Sheet](https://cdn.shopify.com/s/files/1/0698/2265/files/EQP5_Component_Sorting_Sheet_2.2.pdf?9410476748528023624)
2. Check the values of the pots VR1-VR4. They should be:
   1. VR1- B1k
   2. VR2 - B10k
   3. VR3 - A100k
   4. VR4 - A10k
