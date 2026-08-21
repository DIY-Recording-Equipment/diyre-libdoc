---
layout: support.liquid
title: "Distortastudio less distortion"
date: 2026-07-20
---

The Distortastudio is an exceedingly simple circuit: it consists of four opamps, three that add gain (IC1.1, IC1.2, IC2.1), and one that attenuates the gain back to unity (IC2.2). To reduce the amount of distortion, simply reduce the gain of IC1.1 and then reduce the attenuation of IC2.2 accordingly.

You can easily reduce the overall gain by 9dB and therefore make the clipping point 9dB lower by changing two resistors:

1. Replace R5 with a jumper. This sets the gain of IC1.1 to 0dB.
2. Replace R4 with a 1.8k resistor. You can also use 2k or 2.2k if you have one on hand. These values will just make the output level a bit higher. You should use a 1/4 watt, metal film resistor, but carbon film will also work.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5b2130d82c7d3a0fa9a2f0bc/images/66a93652d39e504a2aed2067/file-YUz9OCuB6b.png)

Note: The resistor designators are different on the Rev A (pre-2023), version of the Distortastudio. The resistors to change in the Rev A version are:

1. Replace R2 with a jumper.
2. Replace R8 with a 1.8k resistor.
