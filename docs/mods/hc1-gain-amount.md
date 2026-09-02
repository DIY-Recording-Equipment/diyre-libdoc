---
layout: support.liquid
title: "HC1 gain amount"
eleventyNavigation:
  key: "HC1 gain amount"
  parent: "Mods"
  order: 15
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

You can easily modify the amount of gain the HC1 provides by removing or replacing a few resistors. By default, the HC1 has up to 10dB of gain. The opamps IC1.1 and IC2.1 have a fixed gain of 10dB, which is set by the resistors in the feedback path, R5/R3 and R6/R4. Gain is controlled by the volume knob which is a passive attenuator before the amplifiers.

IC1.1 and IC2.2 are set up as non-inverting amplifiers. In this circuit gain is set by a very simple formula: 1+(Rf/Rg). Where f is the feedback resistor (R5 and R6 in the HC1) and g is the resistor to ground (R3 and R4). The stock values are 2.2k for R5, R6 and 1k for R3, R4. So the gain is 1+(2.2k/1k)=3.3 (about 10dB). So, you can increase the gain by increasing R5/R6 and decrease it by reducing those same resistors.

  

Here are a few options:

| Gain | R5/R6 | R3/R4 |
| --- | --- | --- |
| 0dB (1:1) | Jumper | Remove |
| 6dB (2:1) | 1k | 1k |
| 10dB (3.3:1, default) | 2.2k | 1k |
| 20dB (10:1) | 9.1k | 1k |

  

![](/assets/docs/file-9Rdpb24XSS.png)
