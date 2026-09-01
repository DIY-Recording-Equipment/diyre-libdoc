---
layout: support.liquid
title: "G Bus high-pass filter frequencies"
eleventyNavigation:
  key: "G Bus high-pass filter frequencies"
  parent: "Mods"
  order: 10
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The three high-pass filters in the G Bus are simple passive networks that can be easily customized. Each setting consists of a resistor (R43) and capacitor (C3\_CB, C4\_CB, C5\_CB, depending on the switch position). To customize the corner frequencies, simply change the capacitor values.

You can calculate values with a
[High Pass Filter Calculator](http://www.learningaboutelectronics.com/Articles/High-pass-filter-calculator.php). Enter 20,000 for the resistance and your desired frequency, and then press Calculate. Then round to the nearest available capacitor value.

You can use any capacitor, polarized or non-polarized, that fits in the PCB. The capacitor composition is not important, as the filters are in the sidechain only and do not affect the audio fidelity.

Do not change the value of R43, as it sets the total gain of the filter for unity gain. And note that, while just one channel is shown below, you need to change the capacitors for both channels.

![](/assets/docs/file-j7MtJyEMhv.png)

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
