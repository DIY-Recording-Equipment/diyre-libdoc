---
layout: support.liquid
title: "EQP5 Troubleshooting"
eleventyNavigation:
  key: "EQP5 Troubleshooting"
  parent: "By Product"
  order: 5
date: 2026-08-18
---

## No Signal

If your EQP5 is not passing a signal, please check the following:

1. Signal path: check your interface by patching a cable in place of the EQP5
2. 500-series rack: if possible, test another module in the same slot the EQP5 was in, and try the EQP5 in a different slot
3. EQP5 output stage: make sure the jumpers on CON1 (Modern/Vintage output select) are oriented as shown below

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5b2130d82c7d3a0fa9a2f0bc/images/5b3278182c7d3a0fa9a377ac/file-sd33lNIGfq.png)

## Not Passing Unity Gain

If your EQP5 is not passing unity gain when in bypass mode, check the following:

1. Check all resistor color codes against the [EQP5 Sorting Sheet](https://cdn.shopify.com/s/files/1/0698/2265/files/EQP5_Component_Sorting_Sheet_2.2.pdf?9410476748528023624)
2. Check the values of the pots VR1-VR4. They should be:
   1. VR1- B1k
   2. VR2 - B10k
   3. VR3 - A100k
   4. VR4 - A10k
