---
layout: support.liquid
title: "73P DI noise"
eleventyNavigation:
  key: "73P DI noise"
  parent: "Mods"
  order: 3
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

## Background

Beginning spring 2026, we began to receive reports that the DI input was noisier than the mic input. After lots of research and testing, we traced the issue back to a brand of external power supplies used by many 500-series racks. Around 2025 these power supplies started shipping with higher noise around 2kHz. These power supplies are known to be used in 500-series racks from these brands:

* DIYRE (PR502)
* CAPI
* Cranborne
* Radial
* API (8-space rack only) 

Beacuse the DI input is high-impedance and unbalanced, it's unavoidable that it will pick up some of this power supply noise.

## Solutions

There are two ways to reduce the power supply noise. Try option 1 first if you have additional 500-series modules. If it works you do not need to modify the 73P at all.

## Add more 500 modules {.step}

The external power supply noise goes down as the current draw increases. In our tests, we found that the noise disappears once the current draw reaches about 200mA. Each 73P draws 100mA. If you have more 500-series modules, try adding them to the rack along with the 73P. In many cases, this eliminates the noise completely.

## Filter out noise {.step}

We can improve the DI's noise floor by filtering the power supply noise before it reaches the DI. Doing this mod involves replacing two parts, cutting a PCB trace, and adding one new part.

### Source parts {.step}

First, source the parts below. You can buy it them most parts distributors, or use the [Parts Request](parts/) form to request them from us.

| RefDes | Old Value | New Value | Part # | Manufacturer |
| --- | --- | --- |--- | --- |
| N/A | N/A | 470uH | [RLB0914-471KL](https://octopart.com/part/bourns/RLB0914-471KL) | Bourns |
| C13 | 22uF | .47uF | [K473K20X7RH53L2](https://octopart.com/part/vishay/K473K20X7RH53L2)| Vishay |
| C14 | 22uF | .01uF | [K103K10X7RF53L2](https://octopart.com/part/vishay/K103K10X7RF53L2)| Vishay |

### Replace capacitors {.step}

Remove the capacitors C13 and C14 and replace them with the new values. The new capacitors are not polarized and can be inserted in either direction.

### Add inductor {.step}

{% lightbox '/assets/docs/73p-di-noise/01-cut-trace.jpg', '/assets/docs/73p-di-noise/02-inductor-top.jpg', '/assets/docs/73p-di-noise/03-inductor-top-2.jpg',  '/assets/docs/73p-di-noise/04-inductor-bottom.jpg', '/assets/docs/73p-di-noise/05-inductor-bottom-2.jpg', 'sm' %}

1. Use a precision craft knife to cut the trace on the bottom on the PCB betweeen the -16v pad on the card edge and the lower pad of C27.
    1. Use a multi-meter to confirm that there is now no connection between these two pads
2. Place the shorter lead of the inductor in the -16v pad. Place the inductor so that the center of the body is aligned over the bottom of the card-edge part of the board. Solder this lead and trim it down.
3. Bend the longer lead so that it touches the lower pad of C27 on the bottom of the PCB. Make sure the lead Does not touch any other pads. Hold the lead in place with pliers or tape, then solder it to the lower pad of C27.