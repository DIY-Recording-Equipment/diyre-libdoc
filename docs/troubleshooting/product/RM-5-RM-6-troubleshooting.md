---
layout: support.liquid
title: "RM-5 and RM-6 Troubleshooting"
eleventyNavigation:
  key: "RM-5 and RM-6 Troubleshooting"
  parent: "By Product"
  order: 0
---

The RM-5 and RM-6 share the same designer and mechanism, so they run into nearly the same issues: a delicate ribbon and transformer that are easy to damage while fitting them into the body, and a low native output that's often mistaken for a fault. This guide covers both. The sections below are ordered by likelihood, so work down from the top, and a note in each section flags anything specific to one model.

## General resources

- [RM-5 / RM-6 Assembly Guide](http://www.bumblebeepro.com/diy-kit-manuals/rm-5-rm-6-ribbon-mic-diy-kit-assembly-manual/)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)

You'll want a multimeter for the grounding checks below.

## 1. Very quiet signal, hiss, or needing extreme preamp gain

Ribbon mics are inherently low-output, and the RM-5/RM-6 need 60dB or more of clean gain from your preamp to sound right. If your signal is quiet but clean, this is often just normal operation rather than a fault.

1. Check for a missing ground wire between the XLR pin 1 and the chassis ground. This is the most common actual fault behind a weak or noisy signal.
2. If grounding checks out, the transformer may be weak or mismatched and worth inspecting further.

## 2. Transformer or motor was difficult to fit into the body, and a lead snapped or pulled loose

The transformer is a genuinely tight, delicate fit inside the mic body on both models. On the RM-5 this is most often the older toroidal "blue donut" style transformer rather than the newer cylindrical one. On the RM-6 it's the older "doughnut" transformer, which Bumblebee redesigned in 2019 specifically because of how often it damaged leads during assembly.

1. If you have an older-style transformer and haven't started fitting it yet, go slowly and avoid forcing it, since leads snapping or wires pulling loose almost always happens from force applied during a tight fit.
2. If a lead has already snapped, a replacement transformer is needed. The newer, better-fitting transformer resolves this for future builds.

## 3. Hum or ground noise

1. Check continuity between the XLR pin 1 and the mic body with a multimeter.
2. Check for a loose XLR-mount screw or a missed pin 3/4 jumper. A bad or incomplete ground connection here, rather than the mic itself, is the most common cause.
3. Re-solder the ground jumper if it looks incomplete.
4. If grounding checks out on the mic, rule out your house wiring as a source before assuming the mic is at fault.

## 4. Ribbon broke during assembly or use

The ribbon is extremely fragile. Common causes during assembly include breathing on it while soldering nearby, pliers slipping into the magnet gap, or a stray washer getting pulled into the motor magnet. In use, proximity to loud sources like kick drums or a guitar cab's air blast can also break it. A broken ribbon needs a replacement motor, which is available at low cost.

## 5. Wiring doesn't match the manual (RM-5)

If you have an older RM-5 kit, it may have shipped with a different transformer color-coding than the current assembly guide, following a transformer redesign. Wiring per the wrong-generation manual will leave you with no output even though the build looks correct. Check which transformer generation you actually have before wiring, rather than assuming the current manual matches your kit.

## 6. End cap won't seat, or seems misaligned

1. End caps fit snugly by design and often need gentle prying with a screwdriver to seat.
2. If it still won't seat, check that the motor is attached to the cap in the correct orientation. A motor attached backward to the cap will prevent it from seating no matter how much force you use.

## 7. Cosmetic damage on arrival, or an end cap frozen shut

A dented end cap, scratched body, or missing mesh screen on arrival is a shipping/cosmetic issue worth flagging. Separately, an end cap that won't budge after cold-weather shipping is usually just thermal contraction, not damage, and gentle heating will free it.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
