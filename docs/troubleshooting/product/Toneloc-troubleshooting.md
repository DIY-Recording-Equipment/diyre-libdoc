---
layout: support.liquid
title: "Toneloc Troubleshooting"
eleventyNavigation:
  key: "Toneloc Troubleshooting"
  parent: "By Product"
  order: 0
---

A big volume drop under compression is usually the Toneloc working as designed, since it's a hard compressor without full makeup gain built in. Genuine faults are mostly build errors: a reversed IC, a swapped transistor, or a cold solder joint. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [Toneloc Assembly Guide](https://manuals.diy.re/toneloc)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. Level drops 10 to 30dB when compression kicks in

This is usually normal. The Toneloc is a hard compressor without full makeup gain, so a significant drop under compression is expected rather than a fault.

1. Send a test tone at a defined dBFS level into the input and compare it against the output at the same setting. This distinguishes expected compression from a genuinely faulty unit better than judging by ear alone.
2. If the drop is well beyond what the test tones suggest it should be, a TRIM/OUT stage adjustment or a resistor swap may be needed. Take photos of your board before assuming a part is at fault.

## 2. No output, hiss, or erratic compression on a fresh build

1. Take high-resolution top and bottom photos of the board.
2. Check for reversed ICs or an IC installed in the wrong PCB position.
3. Check the transistors (2N5088/2N5458) for correct placement and orientation.
4. Reflow any joints that look cold or "blobby." See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). Most cases resolve with a combination of these steps.
5. If a bad transistor persists with no clear visible cause, or you're linking two units in stereo and their sidechain timing doesn't match, this is a stubborn case that's more likely to need a part replacement or a full module swap.

## 3. A capacitor code or resistor color band doesn't match the sorting sheet

Capacitor codes like "101" and "102" look similar and are easy to misread, and sorting sheets have occasionally shipped with a mismatched color-band entry (bag 6, R13, is a known example). Compare the part against the schematic value rather than assuming the part in the bag is wrong.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
