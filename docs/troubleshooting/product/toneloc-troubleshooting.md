---
layout: support.liquid
title: "Toneloc Troubleshooting"
eleventyNavigation:
  key: "Toneloc Troubleshooting"
  parent: "By Product"
  order: 34
---

## General resources

- [Toneloc Assembly Guide](https://manuals.diy.re/toneloc)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## Level drops 10 to 30dB when compression kicks in {.step}

This is usually normal. The Toneloc is an extreme compressor without adjustable makeup gain, so a significant drop under compression is expected.

1. Send a very quiet (about -40dBFS or lower) test signal to the Toneloc to test the gain without any compression. If the Toneloc passes roughly unity gain, the Toneloc is working as expected.
2. If the level drop persists even at very low levels, double check solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).

## No output, hiss, or erratic compression {.step}

1. Check the orientation of the IC.
2. Check the orientation and position of all transistors.
3. Reflow any joints that look cold or "blobby." See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
4. If all parts are in the correct place/orientation and reflowing joints doesn't help, the most likely cause is a damaged transistor. Use **[Parts Request](/docs/contact/parts/)** form to request replacement parts.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
