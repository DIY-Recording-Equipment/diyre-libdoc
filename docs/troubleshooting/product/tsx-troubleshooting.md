---
layout: support.liquid
title: "TSX Troubleshooting"
eleventyNavigation:
  key: "TSX Troubleshooting"
  parent: "By Product"
  order: 35
---

If a diode on your TSX looks different from the assembly guide's photos, that's usually a supplier batch change rather than a wrong part. Beyond that, most real faults come down to a cold solder joint or a swapped resistor or DOA. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [TSX Assembly Guide](https://manuals.diy.re/tsx)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

You'll want a multimeter for the resistance checks below.

## The 1N34A diode (D2/D4) looks bigger or different from the assembly guide photos {.step}

This is a documented supplier and batch variation for the germanium 1N34A diodes, not a wrong or missing part. Confirm it's in the correct position and orientation rather than assuming it needs replacing because it looks different.

## Very quiet output, loss of gain, or complete silence after building {.step}

1. Reflow your solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
2. Check resistor values against your sorting sheet, since a swap here is a common cause of level loss.
3. Try swapping the DOA (op-amp module) with a known-good one. If the fault follows the swap, the original DOA needs replacing.
4. If none of the above resolves it, take resistance measurements at key points on the board and compare against the schematic to narrow down where the signal is being lost.

## A resistor value doesn't match the current PCB revision {.step}

The TSX's published assembly guide hasn't always matched every PCB revision for resistors R3 through R6. If your sorting sheet and board disagree, check for an updated guide before assuming the part in your kit is wrong.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
