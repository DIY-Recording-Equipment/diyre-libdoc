---
layout: support.liquid
title: "CP5 Troubleshooting"
eleventyNavigation:
  key: "CP5 Troubleshooting"
  parent: "By Product"
  order: 0
---

Most CP5 problems trace back to one of a handful of assembly slips: a swapped IC, a wrong resistor value, or a cold solder joint. A few things that feel like faults, like gain varying slightly between two units high noise floor with no mic plugged in, are actually normal behavior for a mic preamp. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [CP5 Assembly Guide](http://diy.re/cp5-manual)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)


## 1. No signal

1. Check that U1, U2, and U3 are in the correct sockets and orientation.
3. Check the values of all resistor.
3. Check the orientaiton of all capacitors and the BR1 and BR2 diode bridges.
4. Check solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).


## 2. Gain knob does nothing
Check the value and soldering of R14. A wrong value or cold solder joint here is the most common single cause for the gain knob not working.

## 2. Very low output, or hiss increasing as you turn the gain up

1. If the noise is a steady, white-noise hiss that scales with gain, that's expected behavior, not a fault. The hiss will be higher if testing with a line input or nothing connected to the input.
2. If instead you're hearing a "zappy" or buzzy static, or noise that's excessive even at moderate gain, reflow the board's solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. If reflowing doesn't help, U3 (THAT1512) is the most likely failed part.
4. If the noise changes when you move the CP5 to a different slot or a different 500-series rack, the issue is more likely grounding in the rack than the CP5 itself.

## 3. +48v phantom power doesn't work

1. Set a multimeter to DC voltage and check the phantom power test pads at the card edge for 48V.
2. Check the values and solder joints of R1-R4, CON1, CON3, and SW1.
3. If phantom power measures correctly at the pads but the LED stays dark, the LED is most likely installed with reversed polarity.

## 4. Distortion, oscillation, or a descending beep tone when phantom power is engaged

Reflow the solder joints around the phantom power section as described in #3 above. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). This resolves the majority of cases.

## 5. Two CP5 units don't measure exactly the same gain

This is expected. The gain pots are rated to 20% tolerance, though in practice most measure closer to 10%, meaning up to about 0.5dB-1dB difference between two units at the same knob position. It's not a defect and doesn't need correcting.

## 6. Loud feedback or squeal at maximum gain with no mic connected

This is expected behavior, not a fault. The mic itself is part of the CP5's circuit, so running the preamp at full gain with nothing connected to the input isn't representative of how it behaves in real use. Connect a mic and the squeal will go away.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
