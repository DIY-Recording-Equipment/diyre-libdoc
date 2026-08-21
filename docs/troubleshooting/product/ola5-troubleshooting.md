---
layout: support.liquid
title: "OLA5 Troubleshooting"
date: 2026-08-18
---

## No Signal

If your OLA5 is not passing a signal, please check the following:

1. Signal path: check your interface by patching a cable in place of the OLA5
2. 500-series rack: if possible, test another module in the same slot the OLA5 was in, and try the OLA5 in a different slot
3. OLA5 output stage: make sure the jumpers on CON1 (Modern/Vintage output select) are oriented as shown below

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5b2130d82c7d3a0fa9a2f0bc/images/5b3278182c7d3a0fa9a377ac/file-sd33lNIGfq.png)

## Not Compressing

If your OLA5 is passing a signal but not compressing, check the following:

1. Q1 orientation: the side with text should be facing the bottom of the PCB (toward OPT1)
2. LED3 and LED 4 orientation: remove the LDR assemblies from OPT1 and OPT2 and check the LEDs underneath. The flatted side of the LEDs should correspond to the flat side on the silk screen.
