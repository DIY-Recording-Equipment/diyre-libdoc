---
layout: support.liquid
title: "Colourupter Troubleshooting"
eleventyNavigation:
  key: "Colourupter Troubleshooting"
  parent: "By Product"
  order: 0
---

The sudden jump in level when you engage the Colourupter is normal, not a fault, and most of what's left comes down to a resistor value that doesn't match the parts sheet or a cold solder joint. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [Colourupter Assembly Guide](https://manuals.diy.re/colourupter)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. Output jumps up (or down) as soon as the Colourupter engages, even with Colour at zero

This is expected behavior. The Colourupter has substantial built-in makeup gain, because it's capable of much more compression than a gentler Colour module. The exact amount varies with the natural tolerance of the opto/vactrol cell.

## 2. Distortion, sudden volume drops, or LED behavior that changes after the unit worked fine initially

When something stops working after working for a while, this almost always indicates a cold solder joint. Reflow any joints that look dull or "blobby." See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).

## 3. No distortion/compression

1. Double check the orientation of the vactrol against the assembly guide.
2. Check all resistor values.
3. Check solder joints.

## 4. Can't hit the calibration spec at step 6.3 (target -15dBFS)

1. Double check the orientation of the vactrol.
2. Check all resistor values.
3. Check solder joints.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
