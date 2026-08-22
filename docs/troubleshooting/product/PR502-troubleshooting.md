---
layout: support.liquid
title: "PR502 Chassis Troubleshooting"
eleventyNavigation:
  key: "PR502 Chassis Troubleshooting"
  parent: "By Product"
  order: 0
---

Cold or underheated solder joints cause the large majority of PR502 problems, whether the symptom is no signal, no power, or a module that only works intermittently. The sections below are ordered by likelihood, so work down from the top, and reflow before you start swapping parts.

## General resources

- [PR502 Assembly Guide](http://manuals.diy.re/pr502)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. No signal, no power, or intermittent operation

1. Reflow your solder joints, looking especially for dull or "blobby" pads from underheated soldering. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). This resolves the majority of PR502 issues without anything needing to be replaced.
2. If reflowing doesn't help, go to Section 2 or Section 3 depending on whether the problem is with power or with a specific module slot.

## 2. No power, or the external power supply misbehaves

1. Check the PSU's blue indicator LED. Flickering or shutting off points to the supply rather than the chassis.
2. Check whether only the red 48V LED lights, and it fades rather than staying steady. This is a distinct symptom from a fully dead supply and points to the same power section.
3. Measure the +16V, -16V, and +48V rails at the test points. A missing rail narrows down which section of the power supply has the fault.
4. Check D1 and the power LEDs for reversed orientation, a common assembly mistake in this section.
5. If you're on an older board revision, confirm you applied the step 4.5 PCB revision fix. A missed revision fix is a recurring cause of power faults.
6. Blown zener diodes or transistors from age, or from a mismatched PSU, will also produce this symptom and need replacing.
7. If a module with large capacitors causes the inrush-limiting resistor to burn out when plugged in, that resistor needs upgrading from the stock SMD part to a 1 to 4.7 ohm through-hole resistor, which handles the inrush current better.

## 3. Power is fine, but one module slot gets no power or signal

Check that the small card-edge connector PCB for that slot is installed the right way around, with its unmarked side facing outward. This is the most common cause of a single slot losing power or signal while the rest of the chassis works normally, and it's also the most frequent point of physical damage (torn traces) if you try to desolder it without confirming orientation first.

## 4. A 500-series module or rack ears don't quite fit

This is almost always the third-party module or mounting bracket running slightly outside VPR spec, not a fault in the PR502 itself. There isn't a fix on the PR502 side for this.

## 5. No signal survives reflowing and part-swapping

At this point the fault is most likely a shorted trace, a bad IC, or a swapped resistor value that isn't visually obvious. This is worth sending in for repair rather than continuing to troubleshoot blind.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
