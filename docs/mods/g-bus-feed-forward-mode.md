---
layout: support.liquid
title: "G Bus feed-forward mode"
eleventyNavigation:
  key: "G Bus feed-forward mode"
  parent: "Mods"
  order: 9
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The G Bus has a unique hybrid feedback/feed-forward topology (you can read more about this in [step 9 of the assembly guide](https://manuals.diy.re/gbus#mcb_toc_head38)). So it normally operates in feedback mode, but can be easily modified to be feed-forward.

We can break the feedback path in the sidechain by simply removing R10. However, in practice this makes for unpredictable and non-musical compression. A more useful mod is to replace R10 with a higher value resistor or trim pot. The gain of the feedback loop is set by R11/R10, so increasing R10 will reduce the amount of feedback and make the compressor more feed-forward. Replacing R10 with a 500k trim pot is a good place to start for setting the feed-forward amount by ear.

![](/assets/docs/file-xC9EXiDujW.png)

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
