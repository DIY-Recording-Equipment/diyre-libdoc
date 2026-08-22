---
layout: support.liquid
title: "Colour Palette Troubleshooting"
eleventyNavigation:
  key: "Colour Palette Troubleshooting"
  parent: "By Product"
  order: 0
---

The Palette chassis itself is usually solid. Most problems come from a cold joint at one of the card-edge connectors, a component soldered to the wrong side of the board, or a Colour module that isn't seated firmly. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [Colour Palette Assembly Guide](https://www.diyrecordingequipment.com/pages/colour-palette-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. No signal, or a dead build

1. Remove all Colour modules from the Palette and check whether you get signal with the chassis empty. This isolates whether the fault is in the Palette itself or in a Colour module.
2. Make sure that no empty Colour slots are engaged. If a Colour slot is empty, engaging it will mute the signal.
3. Reflow the solder joints at the CON1A through CON6 connectors and anywhere the motherboard meets the daughterboard. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. Check IC placement and orientation against the manual.

## 2. A component looks soldered to the wrong side of the board

Pots, Colour sockets, CON4 through CON6, and the H3/H4 mounting brackets on the daughterboard are the parts most often placed on the wrong side. This is a common first-build mistake, and it isn't usually worth trying to desolder and flip, since the process risks damaging the pads. Order a replacement part instead.

## 3. LED is dim, stuck on one color, or won't light

1. Check for a cold solder joint on the LED itself or on the Colour-socket connector it's tied to. This is the most common cause.
2. Reseat the Colour module fully in its socket. A module that isn't pressed all the way in can cause exactly this symptom.
3. If reflowing and reseating don't help, check whether U1 and U2 are installed and oriented correctly. A reversed IC here can cause LED behavior like this.

## 4. Low output, attenuated signal, or one channel quieter than the other

1. Check the resistor values against your sorting sheet. A misplaced value is the most common cause.
2. Reflow the joints at the motherboard-to-daughterboard connector.
3. If the above don't resolve it, check for a failed IC or capacitor on the signal path with a multimeter.

## 5. Pot spins freely, feels gritty, or causes intermittent sound

This is mechanical wear, most common on older or secondhand units. The pot needs replacing. Original parts have become harder to source as they're discontinued, so a modern equivalent may be substituted.

## 6. Latch button won't retain, or fails to hold a module in place

The button's retention pin has failed. This needs a replacement latch rather than a repair.

## 7. A power rail reads wrong, or a fuse trips

1. Set a multimeter to DC voltage and check each power rail at the board's test points against the manual's expected values.
2. A shorted -16V rail tripping a fuse is the most commonly reported pattern. Look for a short on that rail before replacing the fuse again.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
