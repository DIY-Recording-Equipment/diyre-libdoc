---
layout: support.liquid
title: "Mojo Maestro Troubleshooting"
eleventyNavigation:
  key: "Mojo Maestro Troubleshooting"
  parent: "By Product"
  order: 24
---

The Mojo Maestro has gone through several board revisions, and most reported issues trace back to a wiring or component value that changed between them rather than a build mistake. The sections below are ordered by likelihood, so work down from the top, and confirm your board revision before assuming a part is wrong.

## General resources

- [Mojo Maestro Assembly Guide](https://manuals.diy.re/mojo-maestro)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/)

## "Glue" sounds more intense than "Mojo," or the GLUE/MOJO switch seems backward {.step}

A batch of v2.2 boards shipped with the GLUE/MOJO switch wired backward. If your switch behavior seems reversed from what the manual describes, check the switch wiring against the current guide before assuming a component fault elsewhere.

## A resistor value doesn't match your documentation {.step}

The reference documentation has changed across board versions, so a mismatch is often a revision issue rather than a wrong part.

1. Check R4, R5, and R6. Their values were swapped between the v1.0 and v1.2 documentation, so confirm which version applies to your board.
2. Check R5 specifically if your board is from a later PCB update. Some documentation was never revised to reflect a later change to this value (1.6k).
3. Compare the value against your board's actual silkscreen if the sorting sheet and schematic disagree.

## Diodes look different from what the parts sheet or photos show {.step}

If you were expecting germanium 1N34 diodes based on older BOMs or photos but received BAT42 schottky diodes instead, that's a documented substitution, not a mis-shipped part. The forward-voltage characteristics are close enough to be an equivalent swap.

## Little or no audible saturation {.step}

Before assuming a fault, check the signal level feeding the Colour Palette. The Mojo Maestro's saturation is designed around line-level input, so driving it at mic level produces noticeably less audible effect, by design rather than a defect.

## Saturation sounds far more extreme than expected for mix-bus use {.step}

Check the GLUE/MOJO switch wiring described in Section 1 first, since a reversed switch on affected boards is the most common cause of this. If the switch checks out, this may simply be the amount of saturation this board revision is designed to deliver at that setting.

## Dead or noisy unit after assembly {.step}

1. Take high-resolution top and bottom photos of the board.
2. Check for cold or incomplete solder joints. See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
3. Check any jumpers for correct orientation. A jumper installed with the short end up instead of down is a common and easy-to-miss mistake.
4. Check for snapped resistor leads from rework, and confirm all ICs are correctly oriented.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
