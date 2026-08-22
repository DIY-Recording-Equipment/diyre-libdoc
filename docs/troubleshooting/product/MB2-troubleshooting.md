---
layout: support.liquid
title: "MB2 Troubleshooting"
eleventyNavigation:
  key: "MB2 Troubleshooting"
  parent: "By Product"
  order: 0
---

Cold solder joints are the default first check for nearly every MB2 symptom, from a noisy channel to no signal at all. A couple of things that sound like problems, like extra noise compared to another booster or 48V behavior in a power-hungry rack, usually turn out to be normal. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [MB2 Assembly Guide](https://manuals.diy.re/mb2)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

You'll want a multimeter for the phantom power and voltage checks below.

## 1. One channel is noisier, quieter, or hissing more than the other

1. Reflow the solder joints on the affected channel first. This is the standard first check and resolves most cases.
2. If reflowing doesn't help, check for a damaged or failed transistor (BC327 or LSK389A) on that channel and replace it.

## 2. No signal or no audio output

1. Reflow the solder joints, same as Section 1.
2. Confirm phantom power (+48V) is actually engaged on your preamp. A surprising number of "no output" reports turn out to be phantom power that wasn't switched on, since the MB2 needs it to operate.
3. If phantom is confirmed on and reflowing didn't help, take DC voltage measurements at the component level to narrow down the fault.

## 3. Voltage or phantom power behaves unexpectedly

1. If you're reading around 48V leaking onto an input pin, or seeing the 48V LED flicker or oscillate, check what preamp you're pairing the MB2 with. This has been traced to inadequate 48V current supply from certain power-hungry preamps (particularly 73P builds) rather than a defect in the MB2 itself.
2. If you're on a rack or preamp known for this, the fix is on the supply side, not the MB2.

## 4. MB2 sounds noisier than another mic booster you've compared it to

This is often expected. The MB2 runs higher gain than some competing boosters (a FetHead, for example), and higher gain brings a higher noise floor along with it. If a side-by-side comparison shows more noise but also more gain, that's the normal tradeoff, not a fault.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
