---
layout: support.liquid
title: "EQP5 alternate frequencies"
eleventyNavigation:
  key: "EQP5 alternate frequencies"
  parent: "Mods"
  order: 6
---

**Note:** Mods are not supported! Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.

All the frequency bands on the EQP5 Passive EQ can be customized by changing the capacitor value.

#### LF- Frequencies

Change these caps:

- C20 for switch in
- C21 for switch out

| Frequency | Cap Value |
| --- | --- |
| 10Hz | 150nF |
| 20Hz | 82nF |
| 30Hz | 39nF |
| 40Hz | 27nF |
| 60Hz | 18nF |
| 90Hz | 10nF |
| 120Hz | 8.2nF |
| 150Hz | 6.8nF |

#### LF+ Frequencies

Change these caps:

- C22 for switch out
- C23 for switch in

\*Note that in the LF+ band, C24 is already populated with a 150nF cap which adds 150nF to both C22 and C23. For starred frequencies, 10Hz and 20Hz, C24 needs to be removed.

| Frequency | Cap Value |
| --- | --- |
| 10Hz | 4.4uF (2.2u + 2.2u)\* |
| 20Hz | 2.2uF\* |
| 30Hz | 820n |
| 40Hz | 560n |
| 60Hz | 390n |
| 90Hz | 150n |
| 120Hz | 82n |
| 150Hz | None (only the 150nF from C24) |

#### HF- Frequencies

Change these caps:

- C18/C19 for switch out
- C17/C17b for switch in

C18 and C19 are in parallel to achieve 136nF (which is not a regular cap value) for the stock 10kHz frequency. So to customize the "switch out" frequency, remove C19 and change C18 to the value from the chart below.

C17b is just an extra socket in parallel with C17, in case you want to choose an eccentric frequency or set the "switch in" frequency to 10kHz.

| Frequency | Cap Value |
| --- | --- |
| 3kHz | 330nF |
| 5kHz | 220nF |
| 8kHz | 150nF |
| 10kHz | 136nF (68n + 68n) |
| 12kHz | 120nF |
| 15kHz | 100nF |
| 18kHz | 82nF |
| 20kHz | 68nF |

#### HF+ Frequencies

Change these caps:

- C16/C16b for switch in
- C15/C15b for switch out

C15b and C16b are extra parallel sockets for C15/C16 for achieving non-standard cap values. For example, if you wanted to make the "switch in" frequency 10kHz, you would place 5nF and 390pF in C16/C16b (doesn't matter which goes where) for a total capacitance of 5.4nF.

| Frequency | Cap Value |
| --- | --- |
| 8kHz | 8.2nF |
| 10kHz | 5.4nF (5n + 390p) |
| 12kHz | 3.9nF (3.3n + 560p) |
| 16kHz | 2.2n |
| 20kHz | 1.4nF (1n + 390p) |
