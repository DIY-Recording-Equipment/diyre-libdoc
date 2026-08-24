---
layout: support.liquid
title: "L2A Troubleshooting"
eleventyNavigation:
  key: "L2A Troubleshooting"
  parent: "By Product"
  order: 20
---

Most L2A issues come down to the transformer, the cabling, or expectations around what a passive, unity-gain box is supposed to do. The sections below are ordered by likelihood, so work down from the top.

## General resources

- [L2A Assembly Guide](https://manuals.diy.re/l2a)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Audio Setup](/docs/troubleshooting/general/checking-your-audio-setup/) is worth ruling out first if the signal seems weak or noisy, since cabling accounts for a lot of L2A reports.

You'll want a multimeter for the transformer test below.

## Transformer fails a resistance or continuity test {.step}

1. Set a multimeter to resistance and test across pins 1 and 3, and separately across pins 5 and 7. An open circuit or a wildly inconsistent reading on either pair points to a damaged or genuinely bad transformer.
2. Note your exact ohm readings and take photos of the transformer and its solder joints. A broken internal lead or a cold solder joint from shipping can produce the same symptom as a bad transformer, so the readings help tell them apart.

## Weak, thin, or low-level output {.step}

1. Confirm both ends of your cabling are actually balanced. The L2A is designed for balanced TRS or XLR connections, and running it with unbalanced TS cabling or a mismatched patchbay is a common cause of a signal that sounds quiet or thin.
2. Check that your volume pot is turned all the way up.
3. Remember the L2A is a passive, unity-gain device. It doesn't boost the signal, so if your source is already quiet, you'll need a preamp downstream to bring it up to a usable level. A thin or quiet result isn't necessarily a fault.

## Buzz, hum, or ground noise {.step}

1. Try the ground-lift switch in both positions. If the noise changes or worsens with it engaged, that narrows the fault to grounding rather than the signal path itself.
2. Take photos of your solder joints on the board, particularly around the wiring.
3. Isolate whether the noise is coming from your interface, your cabling, or a wiring mistake on the L2A itself by swapping one variable at a time.

## Volume knob pops off, or the volume pot doesn't fully attenuate {.step}

1. A knob that pops off or breaks is a mechanical fit issue with the knob itself and needs a replacement.
2. A pot with an odd loud-quiet-loud sweep, or one that won't fully attenuate, was a known issue on a first-run PCB layout that has since been corrected. A $5 replacement pot, or checking your board against the corrected layout guidance, resolves it.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
