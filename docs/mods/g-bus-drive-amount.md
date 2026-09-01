---
layout: support.liquid
title: "G Bus DRIVE amount"
eleventyNavigation:
  key: "G Bus DRIVE amount"
  parent: "Mods"
  order: 8
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The DRIVE switch controls two stages at once: the gain of the opamp IC3.2 and an attenuator after the transformer. The gain is set by the resistors R5\_CB-R7\_CB and R10\_CB-R12\_CB, while the attenuation is set by R8\_CB, R9\_CB and R13\_CB, R14\_CB.

The gain/attenuation resistors correspond to each other as shown below. Note there is no corresponding attenuation resistor for R5\_CB, R10\_CB.

![](/assets/docs/file-H2moPgBKeK.png)

Tips for modding the DRIVE amounts:

- To increase the gain and therefore the distortion of the DRIVE stage, decrease the value of the gain resistors. To decrease the gain and distortion, increase the value of the gain resistors.
- To increase attenuation (reduce the output level), decrease the value of the attenuation resistors. To decrease attenuation (increase output level), increase the value of the attenuation resistors.
- Because the perceived volume of the output changes with the amount of distortion, the attenuator values must be set by ear. The easiest method is to replace the resistors you plan to change with trim pots, set them by ear, measure the values, then replace with the nearest available resistors.
- To maintain balance between the channels, keep the pairs of resistors the same. That is, if you change R5\_CB, also change R10\_CB the same value, etc.
- If you plan to decrease any of the gain resistors below 510R, you should increase the value of C1\_CB and C2\_CB to avoid low-frequency roll off. The gain resistors together with C1\_CB and C2\_CB create a high-pass filter. You can use an [online HPF calculator](http://www.learningaboutelectronics.com/Articles/High-pass-filter-calculator.php) to check the corner frequency of your resistor/capacitor combinations. To avoid affecting the audio range, aim for a corner frequency of 3Hz or below.

Gain resistors are highlighted green, attenuation resistors are highlighted red.

![](/assets/docs/file-vSkIol6qCm.png)

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
