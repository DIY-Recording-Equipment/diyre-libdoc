---
layout: guide.liquid
title: AurEx Assembly Guide
product: AurEx Colour
kit_sku: KIT-0111.01
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/aurex-colour
support_url: https://www.diyrecordingequipment.com/pages/contact
getting_started_url: https://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/aurex/aurex-sorting-1.0.pdf
schematic_url: https://cdn.shopify.com/s/files/1/0698/2265/files/AurEx_1.0_Schematic.pdf?v=1709569565
---

Thank you for purchasing a [{{ product }}]({{ product_url }})</a>

If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}).

You can view the [{{ product }} schematic PDF here]({{ schematic_url }}).

## Tools

### Required

{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones that plug directly into the wall do not have enough power to create good joints consistently.', '/assets/tools/soldering-iron_small.jpg' %}

{% iconCard 'Solder', 'You can use 60/40 leaded solder or lead-free. We recommend 60/40 because it is easier and more forgiving to use.', '/assets/tools/solder_small.jpg' %}

{% iconCard 'Wire Cutters', 'A good pair will be sharp and have a fine point for cutting leads down to the solder joint.', '/assets/tools/wire-cutters_small.jpg' %}

FLATHEAD

### Optional Tools

{% iconCard 'Multi-meter', 'A multi-meter is required for some of the test steps and will come in handy if something goes wrong.', '/assets/tools/digital_mm_small.jpg' %}


{% iconCard 'Desoldering Pump', 'If you accidentally solder something in the wrong place, a desoldering pump can save the day.', '/assets/tools/desoldering_small.jpg' %}

### Component Sorting Sheet

{% iconCard 'Component Sorting Sheet', 'To identify and keep track of every part in the kit, download and print the [Component Sorting Sheet](/assets/15ips3/aurex-sorting-1.0.pdf)', '/assets/pdf-download.png' %}

---

## Standoffs, Header, and IC Socket (Bag 1) {.step}

---

![colour-standoffs](%base_url%/assets/aurex/colour-standoffs.jpg)
    @[/mods/colour-standoffs.html]

---

![colour-header](%base_url%/assets/aurex/colour-header.jpg)
    @[/mods/colour-header.html]


---

![ic-socket](%base_url%/assets/aurex/ic-socket.jpg)
    @[/mods/ic-socket.html]


## Resistors (Bag 2) {.step}

---

![res-bend](%base_url%/assets/15ips/res-bend.jpg)
    @[/mods/res-bend.html]


---
    @[/mods/res-sort.html]


---

![res-place](%base_url%/assets/aurex/res-place.jpg)
    @[/mods/res-place.html]


---

![res-solder](%base_url%/assets/aurex/res-solder.jpg)
    @[/mods/res-solder.html]


---

![res-trim](%base_url%/assets/aurex/res-trim.jpg)
    @[/mods/res-trim.html]


## Diodes, Capacitors, Trimpots (Bag 3) {.step}

---

![diodes](%base_url%/assets/aurex/diodes.jpg)
    @[/mods/diodes.html]


---

![res-arrays](%base_url%/assets/aurex/res-arrays.jpg)
### Populate Resistor Arrays {.step}
        <div class="step-description">
        <p>Place the resistor arrays in the RA1 and RA2 positions. Although these parts do have a dot for alignment, the orientation does not matter. Bend a couple leads of each array to hold them in place. Then solder and trim the excess leads.</p>

  

---

![caps-small](%base_url%/assets/aurex/caps-small.jpg)
    @[/mods/caps-small.html]


---

![trimpots](%base_url%/assets/aurex/trimpots.jpg)
    @[/mods/trimpots.html]
  
  

---

![caps-large](%base_url%/assets/aurex/caps-large.jpg)
### Populate Large Capacitors {.step}
        <div class="step-description">
        <p>The 100uF capacitors are polarized, so they must be placed in a certain direction. The positive lead is slightly longer, while the negative lead is marked with a stripe on the body of the capacitor. Place the capacitors with the positive lead in the pad next to the "+" marking on the PCB.</p>
        <p>The 4.7uF capacitors are not polarized and can be installed in either direction. Place the large capacitors, then solder and trim.</p>


  
## IC (Bag 4) {.step}


---

![ic](%base_url%/assets/aurex/ic.jpg)
    @[/mods/ic.html] 


## Final Checks {.step}

---

<ul class="manual-checks">
<p>Before you wrap up, check the following things:</p>
@[/checks/capacitor.html]  
@[/checks/resistor.html] 
@[/checks/ic.html]
@[/checks/diode.html]
@[/checks/solder.html]
</ul>



---

![options](%base_url%/assets/aurex/options.jpg)
### Set Options {.step}
<div class="step-description">
    <p>The AurEx is two signal processors in one: a low-frequency maximizer and a high-frequency exciter. Each has it's own dedicated saturation circuitry, so adjusting one band does not affect the other.</p>
    <p>VR1 controls the amount of the LF maximizer that is mixed into the dry signal. In the CCW position, the maximizer is completely off. In the CW position the maximizer is equal to the dry signal for 50/50 wet/dry mix. Note that VR1 does not control the gain and therefore the distortion of the maximizer circuit. Instead, this is controlled by the Colour knob on the front panel.</p>
    <p>VR2 controls the gain of the HF exciter circuitry. In the CCW position, there will be a slight HF boost but none of the exciter effect. As you turn VR2 CW, both the gain and saturation of the exciter circuit increase. Unlike the maxmizer, the exciter is always set to 50/50 wet/dry mix.</p>
	<p>The trimpots have a total travel of about 25 turns. You will hear and feel a small click when they reach the fully CW and CCW positions. Beyond this point, the actuator will keep turning but the resistance value won't change.</p>
	<p>To stereo match two AurEx units, first set one the way you want it. Then use a multi-meter to measure the resistance between the square pad (on the left when viewing the board from the bottom) and the middle pad for both trimpots. Note these values, then set the trimpots of the other AurEx to be as close as possible to them.</p>





---

![finished](%base_url%/assets/aurex/finished.jpg)
    @[/mods/finished.html]





---

## Help Us Improve
    <form action="https://formsubmit.co/support@diyrecordingequipment.com" method="POST" id="form-contact">
      <input type="hidden" name="_subject" value="%meta.title% Feedback">
    @[mods/contact.html]   
    </form>
