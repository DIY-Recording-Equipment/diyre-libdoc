---
layout: support.liquid
title: "JFT Colour Troubleshooting"
eleventyNavigation:
  key: "JFT Colour Troubleshooting"
  parent: "By Product"
  order: 19
---

## Before you start

- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers how to confirm a part is in the right spot and facing the right way, which comes up in a few sections below.
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)

## Hum or buzz when the JFT is engaged {.step}

1. Check whether the hum follows the JFT specifically. Swap it into a different Colour slot, or try it in a different 500-series rack if you have access to one. Because the JFT is all-discrete, it picks up noise on the power rails that an op-amp-based Colour would simply reject. This is the single most common cause of JFT hum, and may be unavoidable depending on the 500-series rack you are using.
2. Reflow the solder joints on the JFT, especially around the transistor legs and the 8-pin connector socket. A joint that isn't perfect can behave like an intermittent ground path and introduce noise. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to do this.
3. You may read on the internet about counterfeit JFETs. The JFET in the JFT is a new production LSK170 from a reputable supplier, so there is no chance of it being counterfeit.

## No signal, weak or distorted bursts {.step}

1. Check the transistor positions against the build guide, particularly that the JFET hasn't been swapped with one of the small bipolar transistors on the board.
2. If placement checks out, reflow the solder joints, especially around the transistor legs and trim pots. A cold joint at either spot can produce the same symptoms as a misplaced part.

## Low end flutter, or the sound cuts in and out {.step}

This points to a cold solder joint rather than a bad part. Reflow the joints on the JFT, paying particular attention to any that look irregular or dull rather than shiny and cone-shaped. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for the process.
