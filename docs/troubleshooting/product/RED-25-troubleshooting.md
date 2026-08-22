---
layout: support.liquid
title: "RED-25 Troubleshooting"
eleventyNavigation:
  key: "RED-25 Troubleshooting"
  parent: "By Product"
  order: 0
---

Reversed Q7/Q8 transistors are the first thing worth checking on almost any RED-25 complaint, and correcting their orientation resolves a large share of cases outright. The rest mostly comes down to cold solder joints or a fault elsewhere in the host circuit damaging the RED-25 rather than the module being bad out of the box. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [RED-25 Assembly Guide](https://www.diyrecordingequipment.com/pages/red-25-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. No output, distortion, or excess noise

Check Q7 and Q8 first. These are the two large transistors (BD139 and BD140), and having them swapped is the single most common cause of these symptoms. Getting their orientation correct resolves the issue outright in most cases.

## 2. Intermittent, weak, or muted output, or the sound seems to come from behind the module

Check for cold or blobby solder joints on the RED-25's own pads, especially at V+/V- and the transistor leads. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints) for how to reflow these properly. This is the standard fix for these symptoms and resolves most cases.

## 3. A transistor or resistor looks damaged, or a 68 ohm resistor is smoking

This is often not the RED-25 itself failing, but a fault elsewhere in the host circuit feeding it too much current, most commonly a reversed RGB LED, a short from messy soldering nearby, or a bad socket. Check the surrounding host circuit for one of these before assuming the RED-25 needs replacing outright. If a transistor or resistor on the RED-25 is genuinely damaged, it needs replacing, and in more severe cases the whole module does.

## 4. DOA daughterboard doesn't seat, or the RED-25 acts like there's a loose connection

The pin header on the DOA daughterboard needs more force to seat fully than you might expect. If you've assembled everything correctly but you're getting a loose connection or no signal, press it in firmly rather than assuming a fault.

## 5. Substituted a third-party transistor and now the RED-25 behaves like Section 1

If you swapped in a third-party BD139/BD140 equivalent, double check its pinout against the datasheet before installing. Third-party parts don't always share the same pin layout as the stock transistors, so a part that looks correct on the outside can still be wired in reversed.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
