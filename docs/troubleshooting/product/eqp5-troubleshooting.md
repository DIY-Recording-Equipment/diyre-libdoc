---
layout: support.liquid
title: "EQP5 Troubleshooting"
eleventyNavigation:
  key: "EQP5 Troubleshooting"
  parent: "By Product"
  order: 0
---

Most EQP5 problems on a fresh build come down to an LED, an IC, or a connector that isn't seated or oriented correctly, and most resolve with a multimeter check rather than a parts swap. If you've installed the vintage output option, a few of its own issues are covered separately below. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [EQP5 Assembly Guide](https://www.diyrecordingequipment.com/pages/eqp5-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

You'll want a multimeter for the checks below.

## 1. No signal

1. Make sure the jumpers on CON1 (Modern/Vintage output select) are oriented as shown below

{% lightbox '/assets/docs/file-sd33lNIGfq.png' %}

1. Confirm LED1 is installed in the correct direction by the orientatin of the small metal parts inside the LED.
{% lightbox '/assets/docs/led-polarity.png' %}
2. Check that all ICs are seated fully and in the correct orientation.
2. Double check all resistor values.
2. Check the orientation of all capacitors.
3. Reflow the joints at the motherboard-to-daughterboard connectors and around the IN switch. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).

## 2. Signal loss, rolled-off low end, or a bump below 20Hz with the vintage output option installed

This shows up specifically after installing the discrete op-amp and transformer vintage output option, especially into a low-impedance interface input.

1. Add or adjust the output-load resistor per the mod page's recommendation, in the 500 ohm to 2k ohm range.
2. If you've wired a third-party transformer (CAPI or Lutz, for example) instead of the stock one, double check the wiring against that transformer's own documentation rather than the stock guide.

## 5. Crackle when turning a pot, or hum when touching the LF Cut knob

This points to grounding, shielding, or a dirty pot rather than a component failure.

1. Clean the pot in question.
2. Reflow its solder joints if cleaning doesn't fully resolve it. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. If the hum specifically appears when touching the LF Cut knob, check the grounding around that section of the board.

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
