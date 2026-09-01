---
layout: support.liquid
title: "G Bus THRESHOLD sensitivity"
eleventyNavigation:
  key: "G Bus THRESHOLD sensitivity"
  parent: "Mods"
  order: 12
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The THRESHOLD control is one of the few places that the G Bus circuit departs from the original console schematic. This is because, in the years since the console was designed, the world has switched to digital recording and, as a result, works at higher signal levels. So the THRESHOLD control on the G Bus is dialed in to be less sensitive than the original.

So, if you tend to mix "quiet" or are using an all-analog setup, you may want to make THRESHOLD more sensitive. To do this, you can adjust R3\_CB or both R3\_CB and R4\_CB.

- R3\_CB sets the maximum sensitivity. Decreasing R3\_CB makes THRESHOLD more sensitive, while increasing R3\_CB makes THRESHOLD less sensitive at the CCW end of the pot. You can think of decreasing/increasing R3\_CB like turning the THRESHOLD pot CCW/CW.
- R4\_CB sets the minimum sensitivity. Decreasing R4\_CB makes THRESHOLD less sensitive, while increasing R4\_CB makes THRESHOLD more sensitive at the CW end of the pot. You can think of decreasing/increasing R4\_CB like turning the THRESHOLD pot CW/CCW.
- R2\_CB adjusts the taper of THRESHOLD so that the "sweet spot" is wider. In most cases it's better to leave it as-is.

Fair warning, the stock values were arrived at after much gnashing of teeth and pulling-out of hair. Being a passive network, every resistor in the THRESHOLD circuit affects every other. So you may decrease R3\_CB only to find that the control is now too sensitive at the CW end, in which case you need to decrease R4\_CB, which in turn makes the CCW end less sensitive, etc. So I recommend replacing R3\_CB and R4\_CB with trim pots to start, so you won't be replacing resistors too many times. And if you land on a group of settings you really like, please let us know so we can post them here for other users.

![](/assets/docs/file-Pv1ZuHLaR2.png)

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
