---
layout: support.liquid
title: "73P DI gain"
date: 2026-04-01
---

**Note:** Mods are not supported! Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.

The direct input (DI) of the 73P is dialed in for -20dB gain reduction by default. This is to prevent very hot instrument signals, such as a bass with active pickups, from clipping the preamp. However, this comes at a tradeoff of increasing the noise floor for the DI input. Some users prefer to increase the output of the DI so that less gain is required and therefore noise is lower.

You can increase the output of the DI section by changing the value of R26.

| R26 Value (Ohms) | Attenuation (dB) |
| --- | --- |
| 0 (jumper) | 0 |
| 4.7k | 6 |
| 10k | 10 |
| 22k | 15 |
| 47k (stock value) | 20 |

You can do any value between these as well. You can use a 1/4W metal film or ceramic resistor.
