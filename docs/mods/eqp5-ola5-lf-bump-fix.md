---
layout: support.liquid
title: "EQP5 and OLA5 LF bump fix"
eleventyNavigation:
  key: "EQP5 and OLA5 LF bump fix"
  parent: "Mods"
  order: 7
---

The EQP5 and OLA5 naturally have a small bump in the very low frequencies when using the Vintage Output. When the output is connected to a standard line-level input with an impedance of 20k Ohms or lower, the bump is about 2dB at 5Hz. However, with higher impedance inputs the bump can increase in amplitude and move up into the audible range.

All that's needed to tame the bump is to decrease the input impedance seen by the transformer. We can do this by simply soldering a resistor between the Out+ and Out- pads of the card edge as shown below. Any value between 1k-2k Ohms will work, while keeping the load light enough that it will not negatively affect the Modern output.

![](/assets/docs/file-iEOjPczLeh.jpg)
