---
layout: support.liquid
title: "DOA Colour Troubleshooting"
eleventyNavigation:
  key: "DOA Colour Troubleshooting"
  parent: "By Product"
  order: 12
---

The DOA Colour needs a separate op-amp module, like a RED-25, Rogue Five, or GAR series, to function at all, so before troubleshooting anything else confirm one is installed. Beyond that, most issues come down to a wrong component value, a cold solder joint, or a connector that isn't fully seated. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [DOA Colour Assembly Guide](https://manuals.diy.re/doa)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No signal or quiet signal {.step}

1. Confirm you have a compatible op-amp module (RED-25, Rogue Five, or GAR series) installed. The DOA Colour won't function without one.
2. Check that the DOA is fully seated in the sockets.
3. Double check resistor values.
4. Check solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
5. If you're using a RED-25 as the op-amp module, check Q7 and Q8 for a BD139/BD140 swap.

## Distortion sounds unpleasant or "crunchy" rather than clean {.step}

1. Check your resistor values against the schematic. A wrong value is a common cause of unexpected distortion character.
2. If your resistors and capacitors check out, the DOA Colour's saturation is genuinely meant to add harmonic content rather than stay clean, so what you're hearing may be normal for the design rather than a defect.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
