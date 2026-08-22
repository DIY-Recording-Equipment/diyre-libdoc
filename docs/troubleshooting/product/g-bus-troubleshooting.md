---
layout: support.liquid
title: "G Bus Troubleshooting"
eleventyNavigation:
  key: "G Bus Troubleshooting"
  parent: "By Product"
  order: 6
date: 2026-08-18
---

This guide covers the issues that come up most often while building, calibrating, and living with the G Bus VCA bus compressor kit. It's organized by symptom, so scan the headings for whatever you're running into. Most G Bus problems trace back to one of a handful of causes: a cold solder joint, a mixed-up resistor, or a calibration/measurement mix-up.

## Before you start

You'll need a multimeter that can read AC volts, DC volts, and resistance, your G Bus assembly guide, and REW (or an equivalent signal generator + level meter) for the calibration steps referenced below.

One thing worth knowing up front: nearly every test step in the assembly guide requires the power supply connected. It's an easy step to skip, and a G Bus with the power off will give you incorrect readings.

Two general resources are useful alongside this guide:

- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) — how to verify component position and orientation
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)

## 1. No power, or a power rail reads 0V or is way out of spec

1. Confirm the power supply itself is good: unplug it from the G Bus and plug it into the wall only. The blue LED should light and stay solid. If it doesn't light, or it blinks, the power supply has failed and needs to be replaced.
2. Double check the G Bus is actually powered while you're testing.
3. If one rail reads 0V or far from spec while the others are fine, set your meter to resistance and test from that rail to GND with the power off. A reading near 0 ohms means a short circuit. The most common cause for this is two solder joints touching each other rather than a bad part. Look closely at the section around that rail and reflow anything "blobby." See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
4. If If the +12v or -12v rails stay at 0V after cleaning up the joints, check the orientation and positions of the U1 and U2 regulators.
5. If you find a short and fix it, but a power supply has already been connected to it, treat that supply as suspect too. A sustained short can kill it even if it worked before.

## 2. Balanced input test (6.2) reads double, half, or otherwise wrong

1. Confirm you're probing the right pins. On a TRS cable that's tip and ring, not tip and sleeve; on an XLR that's pins 2 and 3, not 1-2 or 1-3. Probing the wrong pair reads exactly half the real voltage, and this is the single most common cause of a "too low" reading here.
2. Re-check your REW calibration. Send 60Hz at +4dBu and measure the voltage directly on the TRS cable (before it reaches the G Bus at all). It should read about 1.1–1.3V. If it doesn't, redo the REW calibration step.
3. If the raw cable voltage is correct but the BAL IN test point on the board isn't, check for a swapped pair of resistors. Pay special attention to values with the same first two digits but a different decade, e.g. 4.7k vs 47k.
4. If only one channel is affected, or the reading is inconsistent between tests, look for a cold solder joint in that channel's Balanced Input/Output section instead. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).

## 3. Dry signal passes, but no compression

1. Check that MIX and XFMR are both switched out, then confirm both channels still passed step 7.3 (Test Main Output and Set Unity Gain). If one channel failed 7.3, the fault is upstream of the compressor entirely–troubleshoot that first before looking at anything below.
2. Check that the FILTER switch isn't set to EXT SC (fully clockwise). With nothing connected to the external sidechain input, this position will show no compression at all and is easy to land on by accident.
3. Double check that the MIX (10k, clicky) and THRESHOLD (50k, smooth) potentiometers weren't swapped during assembly. They're easy to mix up and swapping them breaks the sidechain path.

## 4. Sidechain VCA test (10.3) is out of range

1. Confirm you're measuring DC volts, not AC, at the SC test point.
2. Check the FILTER switch isn't set to EXT SC (fully clockwise).
3. Check for swapped resistors specific to the sidechain: R53/R56, R47, and R58 have all shown up mixed with each other or with the wrong decade (33Ω vs 33k, for example).
4. Check the markings on C31 and C32 (both channels) to make sure they are not swapped.
5. If you've checked all of the above and the voltage is still way off (large negative values like -13V to -14V are a common failure signature here), suspect a damaged LF351 or NE5532 IC in the sidechain and swap in a known-good one to confirm.

## 5. Threshold and ratio don't behave the way you'd expect

1. If total compression goes down as you increase the RATIO from 2:1 toward 10:1 with THRESHOLD held fixed, that's normal, not a fault. Threshold sensitivity is designed to increase along with ratio, so you get roughly the same compression at a given THRESHOLD setting across all three ratios. Turn THRESHOLD down further at the higher ratios to compensate.
2. If you can't reach the target gain reduction in step 13.2 even with THRESHOLD fully counter-clockwise at -20dBFS, your interface's output level is very likely lower than what the calibration was designed around. Repeat the step at a hotter level (e.g. -10dBFS instead of -20dBFS) and see if you can get there. (If you want to modify your G Bus for lower input levels, see the [G Bus threshold sensitivity mod](/docs/mods/g-bus-thresh-mod/).)
3. If the RATIO knob turns past its three printed positions, that's just the rotary switch stop needing adjustment per step 12.3 of the build guide.
4. Double check you're sending dBFS, not dBu, for the calibration signal levels.

## 6. Left and right channels don't match, especially with the transformer engaged

1. Check CB2 for swapped or incorrect resistors. R24, R25, R26 on both channels, and R5\_CB through R14\_CB, are the ones that set gain/attenuation for the transformer stage. Pay special attention to values with the same first two digits but a different decade.
2. Check for a cold solder joint on CB2 and around the output transformers themselves. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
3. If the imbalance only shows up over unbalanced connections, that's expected, not a fault: the IC-driven balanced output normally runs about 6dB below unity, but the transformer output does not, so engaging XFMR through an unbalanced connection produces a real jump that a balanced connection won't show.

## 7. Harsh distortion or clipping when DRIVE is engaged (especially settings 2 and 3)

1. This is very often correct behavior, not a fault: DRIVE 2 and 3 add a lot of gain (up to roughly 20dB). If you're feeding the G Bus a mix that's already been limited and sits close to 0dBFS, DRIVE 2/3 will clip hard against the power rails, and that clipping sounds harsh and "digital," not like pleasant saturation.
2. Confirm this by backing off your input level by about 10dB (or testing with a less limited source). If the harshness clears up, DRIVE is working as designed and the fix is gain-staging, not a repair.
3. If harsh distortion shows up even at low input levels, or only on one channel, check the DRIVE-section resistors on CB2 and the solder joints around that channel's transformer.
4. If DRIVE 2 and 3 are just too aggressive for your use case (mix bus duty especially), you can tame them by doing the (G Bus DRIVE Amount mod)[/mods/g-bus-drive-amount/].
5. If the DRIVE knob spins past its third position, that's just the rotary switch stop needing adjustment per step 12.3 of the build guide.
