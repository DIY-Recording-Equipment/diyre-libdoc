---
layout: support.liquid
title: "G Bus Troubleshooting"
eleventyNavigation:
  key: "G Bus Troubleshooting"
  parent: "By Product"
  order: 17
---

This guide covers the issues that come up most often while building, calibrating, and living with the G Bus VCA bus compressor kit. It's organized by symptom, so scan the headings for whatever you're running into. Most G Bus problems trace back to one of a handful of causes: a cold solder joint, a mixed-up resistor, or an issue with the test setup during calibration and testing.

One thing worth knowing up front: nearly every test step in the assembly guide requires the power supply connected. It's an easy step to skip, and a G Bus with the power off will give you incorrect readings.

## General Resources

- [G Bus Assembly Guide](https://manuals.diy.re/gbus)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers verifying component position and orientation.
- [Checking Your Audio Setup](/docs/troubleshooting/general/checking-your-audio-setup/). It's worth ruling out first for anything calibration or REW-related before troubleshooting the build.

## No power, or a power rail reads 0V or is way out of spec {.step}

1. Confirm the power supply itself is good: unplug it from the G Bus and plug it into the wall only. The blue LED should light and stay solid. If it doesn't light, or it blinks, the power supply has failed and needs to be replaced.
2. Double check the G Bus is actually powered while you're testing.
3. If one rail reads 0V or far from spec while the others are fine, set your meter to resistance and test from that rail to GND with the power off. A reading near 0 ohms means a short circuit. The most common cause for this is two solder joints touching each other rather than a bad part. Look closely at the section around that rail and reflow anything "blobby." See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
4. If the +12v or -12v rails stay at 0V after cleaning up the joints, check the orientation and positions of the U1 and U2 regulators.
5. If you find a short and fix it, but a power supply has already been connected to it, treat that supply as suspect too. A sustained short can kill it even if it worked before.

## Levels are off in REW tests {.step}

This is very often an issue with the test setup, not the G Bus.

1. Confirm the dB units are set correctly. Some tests use dBFS while others use dBU.
2. Run a cable directly from your interface's output back into its input, with the G Bus out of the chain entirely, and send a test tone. Make sure you are getting unity gain from the output to the input of your interface.
3. In REW's audio preferences, check for a "Control Input Volume" option. If it's checked and can't be unchecked, try switching the driver (Java versus ASIO, for instance) until it can be, since a locked input-volume control throws off calibration.
4. Make sure the unit is powered on for every test. It's easy to test with power disconnected out of habit and get readings that look like a fault but are actually just an unpowered board.
5. If REW still won't cooperate with your interface no matter what, you can run the levels tests in a DAW instead: a signal generator plugin feeding the G Bus, and a level meter on the return track give you the same information REW would.

## Can't get enough compression for ratio calibration (13.2) {.step}

Some interfaces (several Focusrite Scarlett models, the Behringer UMC404HD, the Audient iD48, and others) simply don't put out enough signal to reach the compressor's threshold at the signal level specified in this step. This isn't a defect. The manual has a documented offset workaround: if you can't reach -30dBFS in the early calibration step, send -20dBFS instead and compress down to -30dBFS, then for the later steps send as close to 0dBFS as you can get and trim for -17.15dBFS instead of the standard target. 

If you want to modify your G Bus for lower input levels, see the [G Bus threshold sensitivity mod](/docs/mods/g-bus-thresh-mod/).

## +12V or -12V power rail is not working {.step}

1. Reflow the regulator and its nearby capacitor for the affected rail (U2 and C6 for -12V, or U1 and C5 for +12V), since a cold joint there is a more common cause than a dead part.
2. If reflowing doesn't restore the rail, the regulator itself (a 7912 for -12V, a 7812 for +12V) has likely failed and needs replacing.
3. Keep in mind the sidechain circuitry runs off these lower rails, so a missing +12V or -12V rail will also cause sidechain (SC VCA) test failures further along in the build. Fix the power rail first before chasing a sidechain symptom that might just be downstream of it.

## A component smokes, overheats, or fails on first power-up {.step}

This points to an IC installed backwards. Remove the affected part(s) before powering up again, and request replacements via the **[Parts Request](/docs/contact/parts/)** form.

## Something works fine for a while, then stops {.step}

An intermittent issue is almost always caused by one or more cold solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints) for how to identify and fix cold joints.

## Balanced input test (6.2) reads double, half, or otherwise wrong {.step}

1. Confirm you're probing the right pins. On a TRS cable that's tip and ring, not tip and sleeve; on an XLR that's pins 2 and 3, not 1-2 or 1-3. Probing the wrong pair reads exactly half the real voltage, and this is the single most common cause of a "too low" reading here.
2. Re-check your REW calibration. Send 60Hz at +4dBu and measure the voltage directly on the TRS cable (before it reaches the G Bus at all). It should read about 1.1–1.3V. If it doesn't, redo the REW calibration step.
3. If the raw cable voltage is correct but the BAL IN test point on the board isn't, check for a swapped pair of resistors. Pay special attention to values with the same first two digits but a different decade, e.g. 4.7k vs 47k.
4. If only one channel is affected, or the reading is inconsistent between tests, look for a cold solder joint in that channel's Balanced Input/Output section instead. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).

## MIX, MONO SC, or XFMR pushbutton behaves backward from what's expected {.step}

Check the orientation of the pushbutton switches on CB2. The E on the switch body should align with the one on the PCB.

## Signal passes, but no compression {.step}

1. Check that MIX and MONO SC are switched out. Also check the orientation of both of these switches.
2. Check the wiring of the COMPRESSION switch.
3. Check the connections between CB1 and the motherboard.
4. Check that the FILTER switch isn't set to EXT SC (fully clockwise). With nothing connected to the external sidechain input, this position will show no compression at all and is easy to land on by accident.
5. Double check that the MIX (10k, detented) and THRESHOLD (50k, smooth) potentiometers aren't swapped.

## Sidechain VCA test (10.3) is out of range {.step}

1. Confirm you're measuring DC volts, not AC, at the SC test point.
2. Check the FILTER switch isn't set to EXT SC (fully clockwise).
3. Check for swapped resistors specific to the sidechain: R53/R56, R47, and R58 have all shown up mixed with each other or with the wrong decade (33Ω vs 33k, for example).
4. Check the markings on C31 and C32 (both channels) to make sure they are not swapped.
5. If you've checked all of the above and the voltage is still way off (large negative values like -13V to -14V are a common failure signature here), an IC may be in backwards or damaged.

## Level readings are consistently off by about 6dB {.step}

This is usually caused by using unbalanced cables instead of balanced, or a cable a bad connection. An unbalanced connection loses half the signal level compared to balanced, which shows up as a clean 6dB gap in your readings. Try swapping cables.

## A rotary switch can be turned past where it's intended to stop {.step}

Stops for the rotary switches are set in step 12.3. If you've already completed step 12.3 and your switch is turning too far, remove the stop, turn the switch completely CCW, and install the stop again in the correct position.

## Output jumps noticeably or distorts heavily when DRIVE or XFMR is engaged {.step}

A small gain increase, under about 2dB, when engaging XFMR is expected, since it compensates for the level the transformer naturally loses to saturation. Heavier distortion at the higher DRIVE settings is also by design and depends heavily on how hot a signal you're feeding in. If your gain jump is much larger than that, several dB or more per DRIVE step, that's outside normal and worth checking R24, R25, and R26 on both channels for a swapped or miswired value.

## Left and right channels don't match, especially with the transformer engaged {.step}

1. Check CB2 for swapped or incorrect resistors. R24, R25, R26 on both channels, and R5\_CB through R14\_CB, are the ones that set gain/attenuation for the transformer stage. Pay special attention to values with the same first two digits but a different decade.
2. Check for a cold solder joint on CB2 and around the output transformers themselves. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/).
3. If the imbalance only shows up over unbalanced connections, that's expected, not a fault: the IC-driven balanced output normally runs about 6dB below unity, but the transformer output does not, so engaging XFMR through an unbalanced connection produces a real jump that a balanced connection won't show.

## Harsh distortion or clipping when DRIVE is engaged (especially settings 2 and 3) {.step}

1. This is very often correct behavior, see the explanation below under "Things that seem like problems but aren't."
2. If harsh distortion shows up even at low input levels, or only on one channel, check the DRIVE-section resistors on CB2 and the solder joints around that channel's transformer.
3. If DRIVE 2 and 3 are just too aggressive for your use case (mix bus duty especially), you can tame them by doing the [G Bus DRIVE Amount mod](/docs/mods/g-bus-drive-amount/).
4. If the DRIVE knob spins past its third position, that's just the rotary switch stop needing adjustment per step 12.3 of the build guide.


## Things that seem like problems but aren't {.step}

### Compression seems backward: low ratios compress more than high ratios at the same threshold {.step}

This is normal and by design. THRESHOLD rises automatically as you raise RATIO, so at a fixed THRESHOLD setting you'll see less total gain reduction at higher ratios, not more. To get more compression out of a higher ratio, lower the THRESHOLD after increasing the RATIO.

### Too much distortion at DRIVE positions 2 and 3 {.step}

This is very often correct behavior, not a fault: DRIVE 2 and 3 add a lot of gain (up to roughly 20dB). If you're feeding the G Bus a mix that's already been limited and sits close to 0dBFS, DRIVE 2/3 will clip hard against the power rails, and that clipping sounds harsh and "digital," not like pleasant saturation. Confirm this by backing off your input level by about 10dB (or testing with a less limited source). If the harshness clears up, DRIVE is working as designed and the fix is gain-staging, not a repair.

## Request Troubleshooting Support {.step}

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).