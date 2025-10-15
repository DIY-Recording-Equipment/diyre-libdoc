---
layout: guide.liquid
title: 15IPS mkIII Assembly Guide
product: 15IPS Colour
version: "1.0"
complexity: Beginner
estimated_time: 1 hour
product_url: https://www.diyrecordingequipment.com/products/15ips-colour
support_url: http://www.diyrecordingequipment.com/pages/contact
getting_started_url: http://www.diyrecordingequipment.com/pages/getting-started
sorting_sheet_url: /assets/15ips3/15ips-mkiii-sorting.pdf
---

![{{ product }}](/assets/15ips3/15ips-mkiii-medium.jpg)

Thank you for purchasing a {{ product }}!

If this is your first DIY project ever, we recommend reading our [Getting Started Guide]({{ getting_started_url }}).

{% alert, 'This guide is for the 15IPS mkIII. If you purchased the earlier version, see the [15IPS mkII assembly guide](https://manuals.diy.re/15ips).', 'danger', 'Version check' %}

---

## Tools

### Required

{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones that plug directly into the wall do not have enough power to create good joints consistently.', '/assets/tools/soldering-iron_small.jpg' %}

{% iconCard 'Solder', 'You can use 60/40 leaded solder or lead-free. We recommend 60/40 because it is easier and more forgiving to use.', '/assets/tools/solder_small.jpg' %}

{% iconCard 'Wire Cutters', 'A good pair will be sharp and have a fine point for cutting leads down to the solder joint.', '/assets/tools/wire-cutters_small.jpg' %}


### Optional

{% iconCard 'Multi-meter', 'A multi-meter is required for some of the test steps and will come in handy if something goes wrong.', '/assets/tools/digital_mm_small.jpg' %}


{% iconCard 'Desoldering Pump', 'If you accidentally solder something in the wrong place, a desoldering pump can save the day.', '/assets/tools/desoldering_small.jpg' %}

---

## Standoffs and Header {.step}
### Install Standoffs {.step}
{% lightbox '/assets/15ips3/colour-standoffs.jpg' %}
Install the four standoffs in the corners of the PCB. These will support the module when installed in your 500-series rack.

{% alert 'Install the locking end of the standoffs into the PCB.', 'warning', 'Note' %}
### Install Header {.step}
{% lightbox '/assets/15ips3/colour-header.jpg' %}
Install the 8-pin edge connector header on the back of the PCB.

## Resistors {.step}

{% lightbox '/assets/15ips3/res-bend.jpg', '/assets/15ips3/res-place.jpg', '/assets/15ips3/res-solder.jpg', '/assets/15ips3/res-trim.jpg' %}

1. #### Bend Resistors
    
    Bend the resistor leads 90 degrees at the body so they can be inserted into the PCB.
1. #### Sort Resistors
    
    To sort resistors, use our [Resistor Color Code Calculator](https://www.diyrecordingequipment.com/pages/resistor-color-code-calculator) or test them with a multi-meter set to read resistance.

    {% alert 'To measure resistors quickly, you can remove the probes from your multi-meter and place the leads of the resistor directly in the probe sockets.', 'success', 'Tip' %}
1. #### Place Resistors
    
    Place the resistors into their respective positions on the PCB. As you place each resistor, bend its leads against the bottom of the PCB so that it stays in place during soldering.
1. #### Solder Resistors
    
    Solder the resistors to the PCB. The finished joints should be shiny and should have just enough solder to cover the pad entirely.
1. #### Trim Resistors

    Use clippers to trim away the excess leads. Clip as closely as possible to the joint without clipping the joint itself.

    {% alert 'Hold your finger over the lead being trimmed to prevent it from flying across the room.', 'success', 'Tip' %}
