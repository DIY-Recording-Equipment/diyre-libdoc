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

Check the value of C2. Make sure you haven't accidentally put a .1uF cap (labeled 104) there instead of 22pF (labeled 22j).

## Trouble calibrating VR1 {.step}

1. If you can't reach 3dB gain, double check your test setup first. Make sure you can get unity gain when running a cable directly out of your interface and back in as shown in step 6.2.
2. Double check all resistor values against the guide.
3. Make sure your switches are set to 2:1 and FAST when doing the gain calibration.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
