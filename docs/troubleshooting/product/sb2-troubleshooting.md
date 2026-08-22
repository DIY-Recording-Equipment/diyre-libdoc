---
layout: support.liquid
title: "SB2 Troubleshooting"
eleventyNavigation:
  key: "SB2 Troubleshooting"
  parent: "By Product"
  order: 0
---

Most SB2 problems trace back to one of the yellow bussing resistor arrays soldered in backward, or a solder issue on the DB25 connector. A quiet output after summing is also often just how a passive summing mixer behaves, not a fault. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [SB2 Assembly Guide](http://www.diyrecordingequipment.com/pages/sb2-manual)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers verifying component position and orientation.

You'll want a multimeter for the continuity checks below.

## 1. One or more channels quieter, louder, or attenuated by a fixed amount

1. Check the orientation of the yellow bussing resistor arrays against the manual. The pin 1 dot should line up with the PCB's square pad. A reversed array here is the single most common cause of a channel imbalance.
2. Reflow or inspect the solder joints on the DB25 connector and the resistor arrays for a cold or bridged joint.
3. If an array is confirmed reversed, desoldering and replacing it is more reliable than trying to reflow around it.

## 2. Silence, dropped channels, or the whole unit not passing audio

1. Check for reversed resistor arrays first, the same as in Section 1.
2. Look closely at the DB25 connector pads for a solder bridge or short between adjacent pins.
3. Check for excess flux or rosin residue around the joints. This can interfere with a connection even when the joint looks intact, and cleans up with isopropyl alcohol.
4. Run a continuity check with a multimeter across the affected channel to confirm where signal is being lost.

## 3. Hum, buzz, or crackling noise

1. Reflow the solder joints on the affected channel.
2. Try a different cable. A bad cable produces the same symptom as a board issue and is worth ruling out first.

## 4. Output seems very quiet after summing

This is expected. The SB2's passive design has roughly 30 to 45dB of gain loss built in, so you'll need mic preamps after it to bring the signal back up to a usable level. If your channels are quiet by that much and evenly across the board rather than on just one channel, this is normal operation, not a fault. Go to Section 1 if only specific channels are affected.

## 5. XLR jack screws won't seat

The XLR jacks need plastic-cutting screws, not machine-thread screws. If yours won't catch, you likely have the wrong screw type rather than a stripped hole.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
