---
layout: support.liquid
title: "RED-25 Troubleshooting"
eleventyNavigation:
  key: "RED-25 Troubleshooting"
  parent: "By Product"
  order: 27
---

## General resources

- [RED-25 Assembly Guide](https://www.diyrecordingequipment.com/pages/red-25-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No output, distortion, or excess noise {.step}

Check the positions of Q7 and Q8 against the assembly guide. Having these two transistors swapped is the single most common cause of problems with the RED-25.

## Intermittent, weak, or muted output {.step}

Check for cold or blobby solder joints, especially at V+/V- and the transistor leads. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints) for how to reflow these properly.

## A transistor or resistor looks damaged, or a 68 ohm resistor is smoking {.step}

This is often not the RED-25 itself failing, but a fault elsewhere in the host circuit feeding it too much current, most commonly a reversed RGB LED, a short from messy soldering nearby, or a bad socket. Check the surrounding host circuit for one of these before assuming the RED-25 needs replacing outright. If a transistor or resistor on the RED-25 is genuinely damaged, it needs replacing, and in more severe cases the whole module does.

## DOA daughterboard doesn't seat, or the RED-25 acts like there's a loose connection {.step}

The pin header on the DOA daughterboard needs more force to seat fully than you might expect. If you've assembled everything correctly but you're getting a loose connection or no signal, press it in firmly rather than assuming a fault.

## Substituted a third-party transistor and now the RED-25 behaves like Section 1 {.step}

If you swapped in a third-party BD139/BD140 equivalent, double check its pinout against the datasheet before installing. Third-party parts don't always share the same pin layout as the stock transistors, so a part that looks correct on the outside can still be wired in reversed.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
