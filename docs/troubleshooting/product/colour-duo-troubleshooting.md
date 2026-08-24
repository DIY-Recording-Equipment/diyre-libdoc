---
layout: support.liquid
title: "Colour Duo Troubleshooting"
eleventyNavigation:
  key: "Colour Duo Troubleshooting"
  parent: "By Product"
  order: 5
---

## General resources

- [Colour Duo Assembly Guide](http://manuals.diy.re/duo)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No power, LEDs don't light up {.step}

1. Unplug the external power supply's from the Duo and check its indicator LED. No light, or a light that cycles on and off, points to a failed supply rather than the Duo itself.
2. If the PSU light stays lit while connected to the Duo, check the connection between the I/O Board and Drawer. Make sure the Drawer is completely inserted and that the thumb screws are screwed in. Power is passed to the audio circuitry through the two sets of large connectors CON1 and CON2.
3. If the external PSU works when disconnected from the Duo, but turns of or blinks when connected, there is a short circuit in one of the power rails of the Duo. Check these things:
   1. Disconnect the drawer and check the PSU light again. If the PSU stays lit, the issue is on the Drawer. If it is still off, the issue is on the I/O Board.
   2. After narrowing down the issue to the Drawer or I/O board, check all parts and solder joints on that board. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).

## Only the 48V LED lights, Active and Colour LEDs stay dark {.step}

1. Reflow the solder joints on the I/O Board, especially around the power relay (U1), which switches power to the drawer.

## No Signal {.step}

1. Make sure the MIC/LINE switch is in the correct position for the type of input you're using.
2. Similarly, make sure you are plugged into the correct input jacks for the input type.
3. Make sure the ACTIVE switch is in.
4. If you are using a microphone that requires phantom power, make sure the 48V switch is in.
5. Check the output jacks. Note that if there is a cable plugged into the TRS output jack, the XLR output will be muted.
6. Make sure no empty Colour slots are engaged. If there is no Colour in a slot, engaging that slot will mute the signal.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
