---
layout: support.liquid
title: "L2P attenuation amount"
eleventyNavigation:
  key: "L2P attenuation amount"
  parent: "Mods"
  order: 16
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The L2P’s attenuation can easily be modified. The base values of -10 dB and -30 dB can be changed by swapping out a few resistors. The L2P uses a voltage divider to achieve this reduction. Using the simple calculator below, you can find alternative values for R3, R7, R4, and R8 for your preferred attenuation.

When designing analog audio systems, we often cannot achieve perfectly rounded output values. For example, the attenuation of -10 dB in the L2P is actually closer to -9.5 dB. This is because we are limited to using standard resistor values. To account for this, the calculator outputs resistor values that follow the E12 standard, along with their actual attenuation values.
