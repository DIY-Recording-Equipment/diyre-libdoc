---
layout: support.liquid
title: "G Bus vintage VCAs"
eleventyNavigation:
  key: "G Bus vintage VCAs"
  parent: "Mods"
  order: 14
date: 2022-10-27
---

**Note:** Mods are not supported! Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.

You can use DBX 202-style vintage VCAs in the G Bus by swapping some parts and re-calibrating the sidechain. However, our advice is not to pursue this mod unless you already have vintage VCAs you want to use. In our design research, we did extensive tests of almost every DBX/THAT VCA ever made, and we found that in this circuit, when the sidechain is calibrated for each VCA, the differences between them are negligible. (You will of course find many people on the internet saying otherwise, but as far as we can tell, none of these opinions are based on blind A/B testing after calibration.) So, if you already have some VCAs lying around, or want to see for yourself how much of a difference they make, knock yourself out. But if you are trying to audibly change the tone and behavior of your G Bus, we recommend looking at the other mods.

With that out of the way, let's get into the mod.

1. Remove the audio VCAs VCA1A\_1 and VCA1A\_2 if you already populated them. It's very important to do this before populating the vintage VCA.
2. Change the resistors in the chart below based on the VCA you are using. For "Jumper," use a bit of leftover resistor lead in place of the resistor. For "NC," remove the resistor and leave it empty.
3. Populate the vintage VCAs in the VCA1B positions. You can solder them directly to the PCB, or use Mill-Max sockets to make them pluggable. The Mill-Max part number that fits the PCB is [0327-0-15-01-34-27-10-0](https://octopart.com/0327-0-15-01-34-27-10-0-mill-max-854853?r=sp).
4. Re-calibrate unity gain and ratio.

| VCA | R36 (Sym) | R88 (Ratio) | R16/R17 |
| --- | --- | --- | --- |
| DBX 202 (black) | 1M | No change | No change |
| DBX 202C (gold) | 1M | 47k | 100k |
| DBX 202X | 200k | 47k | 100k |
| DBX 202XL | 200k | 47k | 100k |
| DBX 2001 | Jumper | 47k | 100k |
| THAT 202XT | 100k | 47k | 100k |
| THAT 202XTC | 100k | 47k | 100k |
| THAT 202R | 100k | No change | No change |
| THAT 2002T | NC | 47k | 100k |
| THAT 2002N | NC | 47k | 100k |
| THAT 2002R | NC | No change | No change |

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
