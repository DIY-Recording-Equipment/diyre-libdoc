---
layout: support.liquid
title: "SS VCA Troubleshooting"
eleventyNavigation:
  key: "SS VCA Troubleshooting"
  parent: "By Product"
  order: 31
---

Most reported SS VCA issues trace to a specific component value or a calibration step, both narrow enough to check directly. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [SS VCA Assembly Guide](https://manuals.diy.re/ssvca)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## Sound is muffled {.step}

Check C2. It should be a 22pF capacitor, not a 0.1uF one. This specific mislabeling has caused muffled sound in more than one build, so it's worth checking before looking elsewhere.

## Trouble calibrating VR1 or the Colour trim pot {.step}

1. Double check resistor orientation around the trim pot area against the manual.
2. Reflow the joints in that section if orientation checks out but calibration still won't hold. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. For the calibration switch settings themselves, use 2:1 and FAST, then adjust the Colour knob until you see 3dB of gain reduction.

## Noise or hiss {.step}

Check the VR1 trim pot's setting before assuming a fault. This has been traced to the pot's position rather than a defect in more than one case.

## Trim pot has no detent click {.step}

A trim pot missing its tactile click still needs replacing if you can't reliably return to a known setting by feel.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
