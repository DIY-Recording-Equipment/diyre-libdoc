---
layout: guide.liquid
title: SS-DIY Assembly Guide
product: SS-DIY
kit_sku: KIT-117.01
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/PRODUCT-SLUG
support_url: https://support.diy.re/
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
---

Welcome to the [{{ product }}]({{ product_url }}) assembly guide. If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}) before beginning.

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}
{% tool 'phillips' %}

### Optional

{% tool 'desoldering-pump' %}

## Populate PCBs {.step}

### Headers {.step}

---

{% lightbox '/assets/ssdiy/01-headers.jpg', 'md' %}

Place the headers so the gap in the plastic body matches the PCB legend, then turn the PCB over and set the headers flush against the board. Solder the pins and repeat for both boards.

{% alert 'You do not need to trim the leads after soldering for these or any parts in the SS-DIY.', 'success', 'Tip' %}

### Jacks {.step}

---

{% lightbox '/assets/ssdiy/02-jacks.jpg', 'md' %}

Place the jacks in the board and turn it over, making sure the jacks are sitting flush. Solder the pins.

### Rotary Switch {.step}

---

{% lightbox '/assets/ssdiy/03-switch.jpg', 'md' %}

Insert the switch with its thicker locating pin in the larger hole. Solder one pin first, check that it's sitting flush, then solder the remaining pins.

{% alert 'Make sure the switch is sitting flush in the PCB before soldering. It is very difficult to adjust the switch if it is soldered crooked.', 'warning', 'Double Check' %}

## Mechanical Assembly {.step}

### Mount Boards and Connect Cables {.step}

---

{% lightbox '/assets/ssdiy/04-boards-cables.jpg', 'md' %}

Mount the RIGHT board on the bottom and the LEFT board on top, fastening both with the TRS jack screws. Connect the two boards with the IDC cables.

### Mount Chassis Top {.step}

---

{% lightbox '/assets/ssdiy/05-chassis-top.jpg', 'md' %}

Place the chassis top over the boards, then install the nut and washer onto SW1. Fasten the knob to finish.

### Screw Case Together {.step}

---

{% lightbox '/assets/ssdiy/06-case.jpg', 'md' %}

Fasten the side panels with the flat-head screws, then attach the bottom panel with the pan-head screws and rubber feet.

Congratulations on completing your SS-DIY! If you have questions about using the SS-DIY, refer to the [Operation Manual](https://support.diy.re). Have a question or problem? [Drop us a line.](https://support.diy.re)

---

## Help Us Improve

{% feedbackForm %}
