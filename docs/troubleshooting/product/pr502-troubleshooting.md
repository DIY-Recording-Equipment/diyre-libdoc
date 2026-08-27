---
layout: support.liquid
title: "PR502 Chassis Troubleshooting"
eleventyNavigation:
  key: "PR502 Chassis Troubleshooting"
  parent: "By Product"
  order: 26
---

Cold or underheated solder joints cause the large majority of PR502 problems, whether the symptom is no signal, no power, or a module that only works intermittently.

## General resources

- [PR502 Assembly Guide](http://manuals.diy.re/pr502)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No signal, no power, or intermittent operation {.step}

1. Reflow your solder joints, looking especially for dull or "blobby" pads from underheated soldering. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). This resolves the majority of PR502 issues without anything needing to be replaced.
2. If reflowing doesn't help, go to Section 2 or Section 3 depending on whether the problem is with power or with a specific module slot.

## No power {.step}

1. Check the external PSU first by removing it from the PR502 and plugging it into the wall. The blue light on the PSU should stay lit. If it does not turn on or flickers, the PSU is bad and needs to be replaced.
2. Check solder joints as in section 1.
3. Check for solder bridges between pads, especially on the headers where the pins are closer together.
4. Check the orientation of D1 and the power LEDs. LED orientation can be determined by the little parts inside the LED. {% lightbox '/assets/docs/led-polarity.png' %}

## Power is fine, but one module slot gets no power or signal {.step}

Check that the small card-edge connector PCB for that slot is installed the right way around, with its marked side facing outward. This is the most common cause of a single slot losing power or signal while the rest of the chassis works normally.

## A 500-series module or rack ears don't quite fit {.step}

This is almost always the third-party module or mounting bracket running slightly outside VPR spec, not a fault in the PR502 itself. There isn't a fix on the PR502 side for this.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
