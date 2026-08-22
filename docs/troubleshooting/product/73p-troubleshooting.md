---
layout: support.liquid
title: "73P Troubleshooting"
eleventyNavigation:
  key: "73P Troubleshooting"
  parent: "By Product"
  order: 1
date: 2026-08-18
---

- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers how to verify component positions and orientation.
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)

## 1. No signal, or signal cuts out at a specific gain setting

1. Reflow any solder joint you're unsure of.. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/). A missed or partially soldered transformer pin is the single most common cause of no signal.
2. Check the orientation of all transistors, diodes, and capacitors.
3. Check the values of all resistors.
4. If the signal disappears entirely once gain reaches 55dB and above, the fault is in the PRE 1 section, since that's the stage that only engages at 55dB and higher.
5. If the gain is only wrong, or drops out, at one specific gain-switch position rather than across the board, double check the resistor values and solder joints on the GAIN board.

## 2. Noise or hum

1. Reflow suspect joints, particularly any tied to the ground pour (these have four small lines connecting the pad to the ground pour). Those pads pull heat away faster than the rest of the board, so they're more likely to end up as cold joints even on an otherwise good build. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
2. A small, quiet pop each time you turn the gain switch is normal (see Section 10). If instead you're hearing a loud pop on every turn, isolate it by swapping the PRE 2 board with a known-good 73P if you have one. If that fixes it, reflow the solder joints on PRE 2.

## 3. V+ reads lower than 24-26V

1. If your 73P is completely built, a V+ measurement in the range of 20-22V range is normal. The amplifier stages draw more current once they're populated, which drags the power rail down below 24v. This is normal and intended.
2. If the build is only completely up through section 1 and V+ is still low, check that the orienation of both diodes.
3. Check the orientation of T10 and the values of R43-R46.
4. Reflow cold joints in the power section. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).

## 4. Works for a while, then stops

This pattern points to a cold solder joint, not a dead part. Reflow your solder joints any solder joints that don't look like perfect, shiny tents. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to do this.

## 5. No power at all on the first test, or a capacitor pops

1. If you're using a 500EXT extender, double check its orientation before anything else. A reversed or misaligned extender is a common cause of both a dead first power test and a capacitor failing outright.
2. If a capacitor has already popped, it needs to be replaced before proceeding.

## 6. Output is a specific amount quieter than expected at every gain setting

1. About 10dB quieter across the board: check the input transformer's orientation. The Carnhill sticker should face the front panel.
2. About 6dB quieter: check the wiring on the output transformer.

## 7. Can't hit exactly -10dBFS during gain calibration (VR2)

1. Confirm your test setup first: run a cable directly from the output of your interface o the input, without the 73P or anything else in the chain. Make sure you get unity gain in REW through the cable.
2. Being off the exact -10dBFS reference by up to about 2dB, is normal and due to the different output impedances of different audio interfaces. Keep in midn that the goal of calibration is not to reach an absolute value, but to make sure two or more 73Ps are matched to each other.
3. If steps 1 and 2 don't explain what you're seeing, do the steps in section 1.

## 8. DI input does not switch in when a plug is inserted

1. Check the orientation of T4 and the values of R24 and R27.
2. If these are correct, T4 is probably damaged and shoudl be replaced.

## 9. One of the knobs feels sticky

1. Check whether the knob is rubbing against its mounting nut. Repositioning the knob so it clears the nut is usually all that's needed.

## 10. A few things that seems like problems but aren't

1. A small, quiet pop each time you change the gain switch position is normal. It's just a moment of open contact as the switch moves between positions. If the pop is loud, or the signal drops out with it, go to Section 2.
2. An audible hiss comign out of the output transformer itself at very high gain while sending a sine-wave test tone is normal. It's a product of testing with a synthetic tone at extreme gain and won't show up with regular program material.
3. Self-oscillation that sounds like a synth LFO or delay feedback, but only shows up when testing through REW rather than with a real microphone, points to a feedback loop in your DAW or interface routing rather than the 73P. Test with an actual mic first. If that's clean, the unit is fine.
4. The "0V" test point near the GAIN board isn't the same node as 0V at the card edge. It should read -16V relative to card-edge ground by design. The 73P regulates +16V down to +8V and uses -16V as its internal reference to derive the +24V rail.
5. In-circuit multimeter readings on a resistor often won't match its printed value. Other components in parallel on the board change what the meter sees. Verify a resistor's value by its color code against the guide instead of measuring with a multimeter.
6. The 73P's noise floor is inherently a bit higher than more modern preamps. It's a side effect of the vintage, cascaded-gain-stage 1073-style circuit, and how audible it is depends heavily on source impedance and gain setting. Some baseline noise, even at idle, is expected. If you're comparing side by side, expect it to measure a few dB higher than something like a CP5 or a modern IC-based preamp at the same gain.
