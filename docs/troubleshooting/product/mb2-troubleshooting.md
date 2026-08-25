---
layout: support.liquid
title: "MB2 Troubleshooting"
eleventyNavigation:
  key: "MB2 Troubleshooting"
  parent: "By Product"
  order: 22
---

Cold solder joints are the default first check for nearly every MB2 symptom, from a noisy channel to no signal at all. A couple of things that sound like problems, like extra noise compared to another booster or 48V behavior in a power-hungry rack, usually turn out to be normal. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [MB2 Assembly Guide](https://manuals.diy.re/mb2)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## One channel is noisier, quieter, or hissing more than the other {.step}

1. Reflow the solder joints on the affected channel first. This resolves the issue in most cases. See [Cleaning Up Solder Joints](/docs/troubleshooting/general/cleaning-up-solder-joints/) for how to identify and fix cold solder joints.
2. Double check all the resistor values by their color codes. (You cannot reliabily confirm resistor values with a multimeter after they've been installed in the circuit.)

## No signal or no audio output {.step}

1. Reflow the solder joints, same as Section 1.
2. Confirm phantom power (+48V) is engaged and working on your preamp. A surprising number of "no output" reports turn out to be an issue with te phantom power of the preamp.

## MB2 sounds noisier than another mic booster you've compared it to {.step}

This is often due to the MB2's higher output gain and not a fault. The MB2 has higher gain than some other mic boosters, which results in a higher noise floor at the same preamp gain setting. But the MB2's noise floor is the same relative to gain as these other boosters. If a side-by-side comparison shows more noise but also more gain, that's the normal tradeoff, not a fault.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).