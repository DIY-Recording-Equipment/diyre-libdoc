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

{% safetyPrecautions %}

## Tools

### Required

{% tool 'soldering-iron' %}
{% tool 'solder' %}
{% tool 'wire-cutters' %}
{% tool 'phillips' %}

### Optional

{% tool 'desoldering-pump' %}

## Soldering 101

---

If this is your first time soldering, follow the 8-second soldering process below. Once you’re confident in your ability to make clean solder joints, you can relax the timing and find your own rhythm. But for your first project, follow it strictly to build good habits.

{% lightbox '/assets/solder/1-clean.jpg', '/assets/solder/2-heat.jpg', '/assets/solder/3-solder.jpg', '/assets/solder/4-heat-more.jpg', '/assets/solder/5-trim.jpg', '/assets/solder/6-finished.jpg', 'sm' %}

1. **Clean** the tip.
    1. Clean with a wire sponge before every solder joint.
    2. Apply a little solder to the tip, this is called “tinning.”
2. **Heat** the pad for 5 seconds.
    1. Place the iron where the pad and the component lead meet.
    2. Touch the pad and the lead with the side of the tip. Heat is transferred on the side of the tip, not the point. 
3. Add **solder** for 1 second.
    1. Add solder where the tip, pad, and lead meet.
    1. Err on the side of too little solder.
    3. Keep the tip still while you add solder.
4. **Heat** for 2 more seconds.
    1. Keep the tip still after you finish applying
solder.
5. **Trim** the lead.
    1. Allow the joint to cool for a few seconds, then clip the excess lead right at the solder joint.
6. **Done!**
    1. Your finished solder joint should be a perfectly uniform and shiny tent that covers the entire pad. 
    2. If your joint looks like a blob, use less solder and heat the pad longer next time. 
    3. If you can still see some of the pad, use more solder next time.

## Populate PCBs {.step}

{% stepBlock '/assets/ssdiy/01-headers.jpg', 'md' %}
### Headers {.step}

Place the headers so the gap in the plastic body matches the PCB legend, then turn the PCB over and set the headers flush against the board. Solder the pins and repeat for both boards.

{% alert 'You do not need to trim the leads after soldering for these or any parts in the SS-DIY.', 'success', 'Tip' %}
{% endstepBlock %}

{% stepBlock '/assets/ssdiy/02-jacks.jpg', 'md' %}
### Jacks {.step}

Place the jacks in the board and turn it over, making sure the jacks are sitting flush. Solder the pins.
{% endstepBlock %}

{% stepBlock '/assets/ssdiy/03-switch.jpg', 'md' %}
### Rotary Switch {.step}

Insert the switch with its thicker locating pin in the larger hole. Solder one pin first, check that it's sitting flush, then solder the remaining pins.

{% alert 'Make sure the switch is sitting flush in the PCB before soldering. It is very difficult to adjust the switch if it is soldered crooked.', 'warning', 'Double Check' %}
{% endstepBlock %}

## Mechanical Assembly {.step}

{% stepBlock '/assets/ssdiy/04-boards-cables.jpg', 'md' %}
### Mount Boards and Connect Cables {.step}

Mount the RIGHT board on the bottom and the LEFT board on top, fastening both with the TRS jack screws. Connect the two boards with the IDC cables.
{% endstepBlock %}

{% stepBlock '/assets/ssdiy/05-chassis-top.jpg', 'md' %}
### Mount Chassis Top {.step}

Place the chassis top over the boards, then install the nut and washer onto SW1. Fasten the knob to finish.
{% endstepBlock %}

{% stepBlock '/assets/ssdiy/06-case.jpg', 'md' %}
### Screw Case Together {.step}

Fasten the side panels with the flat-head screws, then attach the bottom panel with the pan-head screws and rubber feet.
{% endstepBlock %}

{% stepBlock '/assets/ssdiy/ssdiy-top.jpg', 'md' %}
### Congratulations! {.step}

You've completed building your SS-DIY. If you have questions about using the SS-DIY, refer to the [Operation Manual](https://support.diy.re). Have a question or problem? [Drop us a line.](https://support.diy.re)
{% endstepBlock %}

---

## Help Us Improve

{% feedbackForm %}
