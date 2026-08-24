---
layout: support.liquid
title: "TM79 Troubleshooting"
eleventyNavigation:
  key: "TM79 Troubleshooting"
  parent: "By Product"
  order: 33
---

A TM79 that lights up but stays silent almost always means IC1 went in backward, and most of the rest comes down to a cold solder joint somewhere in the signal path. A couple of things that sound like faults, like a subtle drop in level or gain that seems too quiet, are usually just how the module is designed to behave. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [TM79 Assembly Guide](https://manuals.diy.re/tm79)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No signal, or silent even though the LED lights up {.step}

1. Check IC1's socket and orientation. Installed backward, it's the most common cause of a dead TM79, and it can burn out R7, R8, or the IC itself in the process.
2. If you find IC1 reversed, take high-resolution top and bottom photos before ordering replacements. Support will typically send a replacement IC and resistors together under the flat $5 replacement-parts fee, since a reversed IC often takes R7/R8 down with it.

## Intermittent silence, low output, hiss, or a "womf" oscillation sound {.step}

1. Reflow your solder joints, especially at the Colour sockets, the pots, and the IN switch. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). This resolves most cases with these symptoms.
2. If reflowing doesn't help, go to Section 3 to check for a damaged transistor.

## Hiss or noise beyond the TM79's normal baseline {.step}

The TM79's loss-then-makeup-gain design means some baseline hiss is expected. If what you're hearing goes clearly beyond that baseline, though:

1. Check for a poorly bonded joint near the gain stage.
2. If the joint looks fine, a damaged transistor is the next most likely cause and needs replacing.
3. Clean the area with isopropyl alcohol after any rework, since flux residue can itself contribute to noise.

## TM79 sounds too subtle, or gain seems to drop unexpectedly {.step}

This is usually normal clipping or limiting behavior rather than a fault. It also shows up when the source feeding it is lower level than the TM79 expects. The module is designed around a +4dBu nominal level, so a -10dBu interface output will sound noticeably quieter or more subtle than expected, without anything being wrong.

## Standoffs don't align with the CP5's mounting holes {.step}

The TM79 mounts on the opposite side of the PCB from what you might expect, so a standoff misalignment is usually a mounting-orientation mix-up rather than a defective board. Check the assembly guide for which side it mounts to before assuming a part is wrong.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
