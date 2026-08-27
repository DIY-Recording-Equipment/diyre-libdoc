---
layout: support.liquid
title: "73P Troubleshooting"
eleventyNavigation:
  key: "73P Troubleshooting"
  parent: "By Product"
  order: 3
---

Most 73P issues trace back to one of three things: a cold solder joint, a resistor that got swapped with a similar-looking one from a different decade (91R/91k, 47R/47k, etc), or an issue with the test setup. The sections below are ordered by likelihood, so work down from the top.

- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers how to verify component positions and orientation.
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- **[Parts Request](/docs/contact/parts/)** form for replacement parts

## No signal {.step}

1. Inspect your solder joints. Look for joints that are "blobby" (too much solder sitting on top of the pad instead of fusing into it), joints that don't fully cover the pad, or joints that look cloudy and dull instead of shiny. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to identify and fix cold solder joints.
2. Check the orientation of all transistors, diodes, and capacitors.
3. Check the values of all resistors.
4. If the signal is attenuated or disappears entirely once gain reaches 55dB and above, the fault is in the PRE 1 section, since that's the stage that only engages at 55dB and higher.
5. If the gain is only wrong, or drops out, at one specific gain-switch position rather than across the board, double check the resistor values and solder joints on the GAIN board.

## During calibration, REW shows no signal or wrong levels

This is very often related to the test setup, not the 73P, so it's worth ruling out before you touch the hardware.

1. Loop a cable directly from your interface's output back into its own input, with the 73P out of the chain entirely. Send a -20dBFS test tone from the REW generator and monitor the "In" meter in the Levels window. If the loopback isn't very close to -20dBFS, your interface is not passing unity gain. Troubleshoot your interface's levels.
2. Confirm you're connecting to the correct line input on your interface. Some interfaces with combo input jacks only accept mic signals through the XLR, instrument signals through the TRS, etc.
3. Some interfaces simply aren't designed to pass unity gain from output to input. If you can't hit the expected levels no matter what, you can simply account for the gain difference in your calibrations. For example, if your interface's loopback gain is -10dB, subtract -10dB from the expected level in the tests.
4. If you're using a 500EXT, make sure its orientation is correct.
5. Confirm the unit is powered on for every test. It's easy to test with power disconnected out of habit and get a reading that looks like a fault but is just an unpowered board.

## Wrong level at particular gain setting {.step}

This points at a swapped resistor rather than a general solder problem, especially if the fault is consistent and repeatable at one exact switch position.

1. At 55dB and above: Check the resistor values and solder joints in the PRE 1 section. Especially check R4, which sets PRE1's fixed 30dB gain. It should be 91R, not 91k.
2. At one or two gain positions: check the resistor values on the GAIN board. 

## Wrong level at every gain setting {.step}

1. About 10dB quieter: check the input transformer's orientation. The Carnhill sticker should face the front panel.
2. About 6dB quieter: check the wiring on the output transformer.
3. About 6dB quieter: Back off the input-transformer mounting screws a little bit. One of them may be shorting against the transformer winding.
4. More than 10dB quieter: Check the resistors values and solder joints of the PRE 2 and Output sections.

## Very high levels, clipping during testing
This is most often due to a setting in the interface drivers, not the 73P.

1. Check for direct monitoring, "Control Input Volume," or a software passthrough option in your interface's mixer app (this has shown up on UA Console, Focusrite, RME TotalMix, and others). Turn all of these options off. 

## Noise or hum {.step}

1. Reflow suspect joints, particularly any tied to the ground pour (these have four small lines connecting the pad to the ground pour). Those pads pull heat away faster than the rest of the board, so they're more likely to end up as cold joints even on an otherwise good build. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
2. A small, quiet pop each time you turn the gain switch is normal (see Section 10). If instead you're hearing a loud pop on every turn, isolate it by swapping the PRE 2 board with a known-good 73P if you have one. If that fixes it, reflow the solder joints on PRE 2.

## V+ reads lower than 24-26V {.step}

1. If your 73P is completely built, a V+ measurement in the range of 20-22V range is normal. The amplifier stages draw more current once they're populated, which drags the power rail down below 24v. This is normal and intended.
2. If the build is only completely up through section 1 and V+ is still low, check the orientation of both diodes.
3. Check the orientation of T10 and the values of R43-R46.
4. Reflow cold joints in the power section. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).

## Works for a while, then stops {.step}

This pattern points to a cold solder joint, not a dead part. Reflow your solder joints any solder joints that don't look like perfect, shiny tents. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to do this.

## No power at all on the first test, or a capacitor pops {.step}

1. If you're using a 500EXT extender, double check its orientation before anything else. A reversed or misaligned extender is a common cause of both a dead first power test and a capacitor failing outright.
2. Check orientation of all transistors, capacitors, and diodes.
3. If a capacitor has already popped, it needs to be replaced before proceeding. Use **[Parts Request](/docs/contact/parts/)** form to request replacement parts.

## Can't hit exactly -10dBFS during gain calibration (VR2) {.step}

1. Confirm your test setup first: run a cable directly from the output of your interface to the input, without the 73P or anything else in the chain. Make sure you get unity gain in REW through the cable.
2. Being off the exact -10dBFS reference by up to about 2dB is normal and due to the different output impedances of different audio interfaces. Keep in mind that the goal of calibration is not to reach an absolute value, but to make sure two or more 73Ps are matched to each other.
3. If steps 1 and 2 don't explain what you're seeing, do the steps in section 1.

## R20 smokes when 48V phantom power is engaged

R20 (100R, 1/4W) is a soft-start resistor for the phantom power circuit, and it's the most frequently damaged part in the whole kit. It isn't required for the rest of the unit to work, so if it's already blown you can safely keep testing and building with 48V left disengaged while you get a replacement.

1. If using a 500EXT, check the orientation.
2. Check for short circuits between the pads of components already installed.
3. Check the values, orientation, and positions of parts in the 48V circuit: R20, C13, R21, or R22.
4. Confirm LED1 is installed in the correct direction by the orientation of the small metal parts inside the LED.
{% lightbox '/assets/docs/led-polarity.png' %}

## DI input does not switch in when a plug is inserted {.step}

1. Check the orientation/value of T4
2. Check the values of R24 and R27.
3. If these are correct, T4 is probably damaged and should be replaced.

## DI signal level is wrong
1. Check resistor values, especially R25/R26.
2. Check the positions of T4/T5.

## One of the knobs feels sticky {.step}

1. Check whether the knob is rubbing against its mounting nut. Repositioning the knob so it clears the nut is usually all that's needed.

## A few things that seem like problems but aren't {.step}

1. A small, quiet pop each time you change the gain switch position is normal. It's just a moment of open contact as the switch moves between positions. If the pop is loud, or the signal drops out with it, go to Section 2.
2. An audible hiss coming out of the output transformer itself at very high gain while sending a sine-wave test tone is normal. It's a product of testing with a synthetic tone at extreme gain and won't show up with regular program material.
3. Self-oscillation that sounds like a synth LFO or delay feedback, but only shows up when testing through REW rather than with a real microphone, points to a feedback loop in your DAW or interface routing rather than the 73P. Test with an actual mic first. If that's clean, the unit is fine.
4. The "0V" test point near the GAIN board isn't the same node as 0V at the card edge. It should read -16V relative to card-edge ground by design. The 73P regulates +16V down to +8V and uses -16V as its internal reference to derive the +24V rail.
5. In-circuit multimeter readings on a resistor often won't match its printed value. Other components in parallel on the board change what the meter sees. Verify a resistor's value by its color code against the guide instead of measuring with a multimeter.
6. The 73P's noise floor is inherently a bit higher than more modern preamps. It's a side effect of the vintage, cascaded-gain-stage 1073-style circuit, and how audible it is depends heavily on source impedance and gain setting. Some baseline noise, even at idle, is expected. If you're comparing side by side, expect it to measure a few dB higher than something like a CP5 or a modern IC-based preamp at the same gain.

## Request Troubleshooting Support
If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
