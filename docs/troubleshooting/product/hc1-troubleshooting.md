---
layout: support.liquid
title: "HC1 Headphone Amp Troubleshooting"
eleventyNavigation:
  key: "HC1 Headphone Amp Troubleshooting"
  parent: "By Product"
  order: 7
date: 2026-08-18
---

Most HC1 issues trace back to one of three things: a component installed backwards (cap, chip, or socket), a cold solder joint, or a grounding choice that disturbs the HC1's virtual ground.

- [Checking Your Assembly](/troubleshooting/checking-your-assembly/) — how to verify component positions and orientation
- [General Troubleshooting Tips](/troubleshooting/general-troubleshooting-tips/)

## 1. No sound, or the sound cuts out after a few seconds

1. Check that all four electrolytic caps are oriented correctly: the negative stripe on the cap should be opposite the "+" marking on the PCB.
2. Check that the dual op-amp chip and its socket are both oriented the same direction and inserted correctly.
3. Reflow every solder joint, especially the ground connections. A cold joint here is a common cause of sound that works briefly, then cuts out or disappears entirely. See [Cleaning Up Solder Joints](/troubleshooting/cleaning-up-solder-joints/).
4. Measure the DC voltage at the op-amp's power pins: black probe on the ground screw of the DC IN jack, red probe on pin 4 (V-) and then pin 8 (V+). With a 12V supply you should read close to ±6V; with a 9V battery, close to ±4.5V. A missing or very different reading points to a power-wiring problem rather than the audio path itself.

## 2. Buzzing or humming that gets worse as you turn up the volume

1. Reflow your ground solder joints. A cold joint on the ground path is a common cause of noise that increases with volume. See [Cleaning Up Solder Joints](/troubleshooting/cleaning-up-solder-joints/).
2. Swap in a 9V battery in place of your wall-wart power supply. If the noise disappears, the supply itself is the source. Some DC power supplies are just noisy, and the HC1's onboard filtering can only do so much about that.
3. If the HC1 is mounted in a metal enclosure, make sure the power negative (V-/0V) is **not** connected to the chassis. This shorts out the virtual ground the HC1 depends on. If you want a chassis ground reference, tie the audio ground (the input/output jack sleeves) to the chassis instead, and leave V- floating.

## 3. Too loud, or the volume jumps too much per click

The gain is set by the ratio of two resistor pairs: R5/R3 for one channel, R6/R4 for the other. Gain = 1 + (R5/R3). At the stock values (R5/R6 = 2.2k, R3/R4 = 1k) that works out to about 3.2x, or 10dB.

1. For roughly half the gain (~6dB), replace R5 and R6 with 1k resistors, matching R3/R4.
2. For unity gain (0dB, no boost at all), remove R3 and R4 entirely (leave those positions open) and bridge R5 and R6 with a wire jumper instead of a resistor.

## 4. Whistling sound that changes pitch as you turn the volume knob, after swapping in a different op-amp

1. This is oscillation, not a bad part or bad build. Ot shows up with some high-bandwidth op-amps.
2. Add a small capacitor (33–47pF) across R5 and R6, the feedback resistors. This limits the op-amp's bandwidth enough to stop the oscillation.
3. If you'd rather not modify the board, swap back to a standard dual op-amp like the stock NE5532.

## 5. Weak, distorted, or dead sound only at the first few clicks of the volume knob

1. If the HC1 is in a metal enclosure, check whether V- is tied to the chassis. This disturbs the virtual ground enough to cause an unstable or insufficient supply voltage, and it shows up specifically as trouble at low volume-pot settings rather than a constant fault. Go to Section 2 for how to wire the chassis ground correctly instead.
2. If you've swapped in a non-stock op-amp, check whether it has an unusually low input impedance (the OPA1612, for example, is 20k). A chip like that can't handle the high series impedance the volume pot presents at low settings. Swap back to the stock NE5532 or another high-input-impedance dual op-amp to confirm.

## 6. The same channel's op-amp keeps blowing

1. Check that the negative feedback path back to the op-amp's inverting input is intact on that channel. If it's broken, the op-amp runs at open-loop gain, which can push it into failure.
2. Measure the DC offset at the op-amp's output relative to the virtual ground (the ground side of R4 is a good reference point, at roughly half your supply voltage). A reading far off from that suggests something in the signal path on that channel isn't right.
3. Inspect both sides of the board closely, especially around the socket for the affected channel, for any solder or flux residue that could be bridging traces that shouldn't be connected.

## 7. Connecting a balanced or XLR source to the HC1

The HC1's inputs are unbalanced.

1. If you're feeding a mono XLR source into one HC1 channel, wire XLR pin 1 to ground and pin 2 (hot) to both the L and R inputs and leave pin 3 (cold) disconnected. Wiring both hot and cold into the L and R inputs makes the HC1 treat them as separate L/R signals, which mostly cancels out and leaves you with very low volume.
2. Before adding any balancing hardware, try connecting your balanced gear directly to the HC1 with no modifications. It often works fine as-is. If you get hum, try floating the ground next, and only reach for a passive balanced-to-unbalanced converter if that still doesn't clear it up.
