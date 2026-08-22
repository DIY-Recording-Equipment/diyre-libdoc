---
layout: support.liquid
title: "FE2 Troubleshooting"
eleventyNavigation:
  key: "FE2 Troubleshooting"
  parent: "By Product"
  order: 0
---

The FE2 is a passive direct box, so a fair amount of what feels like a problem is actually its transformer doing exactly what it's designed to do. Genuine faults mostly trace back to a cold solder joint around the transformer or XLR jack. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [FE2 Assembly Guide](http://www.diyrecordingequipment.com/pages/fe2-assembly-guide)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## 1. XLR jack screws are hard to install

This is normal. The XLR screws cut the threads in the plastic the first time they go in, so don't be afraid to push past some resistance to install them.

## 2. Low output or no sound

1. Check for cold or "blobby" solder joints, especially around the transformer and the XLR jack. Reflow any joints that look suspect. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. If reflowing doesn't resolve it, test the transformer's resistance across its windings. A genuinely dead transformer reads near-infinite or missing resistance on the affected pins and needs to be replaced.

## 3. Output seems too quiet compared to an active DI box

This is expected. The FE2 is a passive design built around a 12:1 step-down transformer, which inherently attenuates the signal by about 20dB. That's normal behavior for a passive DI, not a defect.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
