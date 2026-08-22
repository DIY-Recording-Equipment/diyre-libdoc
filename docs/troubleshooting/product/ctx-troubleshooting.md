---
layout: support.liquid
title: "CTX Colour Troubleshooting"
eleventyNavigation:
  key: "CTX Colour Troubleshooting"
  parent: "By Product"
  order: 4
date: 2026-08-18
---

Most CTX issues come down to one of two things: a swapped resistor or cold solder joint. Find the section below that matches what you're seeing and work through the steps in order.

## General resources

- [CTX Assembly Guide](https://manuals.diy.re/ctx/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)

## 1. No sound, or sound drops out when Colour is engaged

1. Check the discrete opamp (DOA): the two large transistors must be in the correct positions and orientation: BD140 in Q8, BD139 in Q7. This is the single most common cause of a dead CTX.
2. If you have a second CTX, swap its DOA into the CTX. If the fault follows the module, it needs to be repaired or replaced.
3. Check the transformer orientation against the manual — it must face the correct direction.
4. Set a multimeter to resistance and test the transformer across pins 1–3 and pins 2–4. No reading on either pair means the transformer is damaged — though in our experience this is rarer than people expect; most "dead transformer" reports turn out to be one of the steps above.

## 2. Distorted, too loud, or one channel doesn't match the other

This is almost always due to a swapped resistor. Double check all resistor values against the sorting sheet.

If your resistors are all correct and the distortion doesn't change at all as you turn the Colour dial (rather than increasing with drive, which is normal), go to Section 1 and check the DOA.

## 3. It worked for a while, then stopped

This pattern points to a cold solder joint, not a dead part.

1. Reflow your solder joints, especially at the DOA socket and the two large transistors. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to do this.
2. If reflowing doesn't help, but swapping in a different DOA does, the original one needs to be repaired or replaced.
