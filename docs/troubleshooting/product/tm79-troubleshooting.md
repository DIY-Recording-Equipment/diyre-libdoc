---
layout: support.liquid
title: "TM79 Troubleshooting"
eleventyNavigation:
  key: "TM79 Troubleshooting"
  parent: "By Product"
  order: 33
---

A TM79 that lights up but stays silent almost always means IC1 went in backward, and most of the rest comes down to a cold solder joint somewhere in the signal path. A couple of things that sound like faults, like a subtle drop in level, are usually just how the module is designed to behave.

## General resources

- [TM79 Assembly Guide](https://manuals.diy.re/tm79)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## No signal {.step}

1. Check IC1 orientation. This is the most common cause for a dead TM79.
2. If you find IC1 reversed, visually check R7 and R8 for damage. If they have a black or brown spot in the middle, they have been damaged and need to be replaced along with IC1. Use **[Parts Request](/docs/contact/parts/)** form to request replacement parts.

## Intermittent signal, low output, hiss, or oscillation sound {.step}

1. Check for cold or blobby solder joints and reflow them. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints). This resolves most cases with these symptoms.
2. If reflowing doesn't help, go to Section 3 to check for a damaged transistor.

## Hiss or noise beyond the TM79's normal baseline {.step}

The TM79's loss-then-makeup-gain design means some baseline hiss is expected. If what you're hearing goes beyond normal "tape hiss" levels, check the following things.

1. Check and reflow cold or blobby solder joints.
2. If the noise persists after reflowing, the next most likely cause is a damaged transistor. Use **[Parts Request](/docs/contact/parts/)** form to request replacement transistors.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
