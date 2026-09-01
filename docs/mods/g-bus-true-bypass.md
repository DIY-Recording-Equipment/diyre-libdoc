---
layout: support.liquid
title: "G Bus true bypass"
eleventyNavigation:
  key: "G Bus true bypass"
  parent: "Mods"
  order: 13
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

By default, the G Bus COMPRESSOR switch only bypasses the compression circuitry and audio still passes through the compressor, including the XFMR/DRIVE circuitry if it is switched in. However, you can modify the XFMR switch to be a "true bypass" switch using the "IN+" and "IN-" pads on the PCB.

Doing either of the following mods will replace either the XFMR IN or OUT position with true bypass. This means you will replace either the standard or XFMR output with true bypass.

**Option 1: True bypass XFMR OUT**

  

In this mode, you will replace the standard output with true bypass. So the compressor will be completely bypassed when the XFMR switch is in the OUT position, and the standard output will be disabled.

1. Remove C13, C15, R20, and R22
2. Solder jumper wires from the round pads of C13 and C15 to IN+ and IN- respectively. Do the same on both channels.

![](/assets/docs/file-J2E25r2UTK.png)

This option results in the circuit below:

![](/assets/docs/file-9YjsrBM1aK.png)

**Option 2: True bypass XFMR IN**

In this mode, you will replace the XFMR output with true bypass. So the compressor will be completely bypassed when the XFMR switch is in the IN position, and the XFMR output will be disabled. With this mod installed, the DRIVE switch will not do anything.

1. Remove R25, R26 and R13\_CB, R14\_CB (not pictured).
2. Solder jumper wires from the pads shown below of R25 and R26 to IN- and IN+ respectively.

Left channel:

![](/assets/docs/file-SWnTRMYX6n.png)

Right channel:

![](/assets/docs/file-1XvG5fwh84.png)

This option results in the circuit below:

![](/assets/docs/file-MX81iwgENM.png)

**Additional Resources:**

- [G Bus Schematic (PDF)](https://cdn.shopify.com/s/files/1/0698/2265/files/G_Bus_1.0_Schematic.pdf)
