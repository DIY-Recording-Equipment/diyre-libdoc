---
layout: support.liquid
title: "CP5 high input impedance"
eleventyNavigation:
  key: "CP5 high input impedance"
  parent: "Mods"
  order: 4
date: 2026-08-21
---

**Note:** Mods are not supported! Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.

The [CP5 Mic Preamp's](https://www.diyrecordingequipment.com/products/cp5-mic-preamp-with-colour) default input impedance is 2.9k ohms. This sits in a sweet spot to maximize noise and voltage transfer for almost all microphones. However, some users prefer to increase the impedance to 10k or above for use with ribbon microphones.

  

The CP5's input impedance is set by the resistors R12 and R13 in parallel with the impedance of U1, the 1512 preamp chip. The 1512's impedance is 15k Ohms, which sets the upper limit of the CP5's input impedance. That is, R12 and R13 cannot increase the impedance, only reduce it. (The input impedance could be increased by increasing R9 and R10 but this would create additional noise and would only work when the -20dB switch is IN.)

  

To calculate the input impedance given a certain R12/R13 value, use the formula for parallel resistance/impedance:

![](/assets/docs/file-oYHReQfifg.png)


Zt is the total input impedance

For instance, if you use 10k resistors for R12 and R13, the total impedance will be 8.57k.

  

Note that when the -20dB switch is IN, R12 and R13 are bypassed and the input impedance will revert to the default of 2.9k.

  

![](/assets/docs/file-Hn4nEW8V24.png)


The relevant circuitry in the CP5 schematic
