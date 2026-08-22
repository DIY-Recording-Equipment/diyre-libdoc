---
layout: support.liquid
title: "15IPS Troubleshooting"
eleventyNavigation:
  key: "15IPS Troubleshooting"
  parent: "By Product"
  order: 0
---

The 15IPS sees more kitting mismatches than most Colour modules, since its germanium diodes are salvaged new-old-stock parts and its board has gone through several revisions with different reference designators. The sections below are ordered by likelihood, so work down from the top, starting with confirming your board revision.

## General resources

- [15IPS Assembly Guide](https://manuals.diy.re/15ips-mkiii)
- [General Troubleshooting Tips](/docs/troubleshooting/general/general-troubleshooting-tips/)
- [Checking Your Assembly](/docs/troubleshooting/general/checking-your-assembly/) covers verifying component position.

Check which board revision you have (mkI, mkII, or mkIII) before comparing against your sorting sheet. Different revisions use different reference designators for the same function, and comparing against the wrong revision's sheet is a common source of confusion.

## 1. A resistor or diode doesn't match your sorting sheet

1. Confirm your board revision (mkI, mkII, or mkIII) first. The reference designators for R1, R4, R5, R6, R7, and R8 vary between revisions, so a sorting sheet mismatch is often a revision mismatch, not a wrong part.
2. Compare the value against the PCB silkscreen rather than the sorting sheet if the two disagree. The silkscreen is the more reliable source when there's a documentation gap.
3. If you're still unsure after checking the silkscreen, compare against the schematic.

## 2. Wrong-looking op-amp IC, or a diode that doesn't match what's pictured

The 33072P you may have received in place of an NJM2068 or MC33072 is a documented substitution, not a defect. Confirm the part is in the correct socket and orientation before ordering a replacement.

## 3. Two 15IPS modules sound or measure different from each other

This is very often the germanium 1N34A diodes, not a build error. Because these are salvaged new-old-stock parts, forward voltage drop varies more between individual diodes than it would with a modern part (normal spec is roughly 0.3 to 0.4V, and two diodes within that range can still measure noticeably apart). That variance changes the clipping and saturation curve, which is what you're hearing as a difference between units.

1. If you suspect a diode is the cause, measure its forward voltage drop and compare it against the 0.3 to 0.4V range.
2. A diode reading well outside that range, or a silicon diode substituted where a germanium one should be, is worth swapping.
3. If both diodes measure in range and still sound different, the variance is likely just normal manufacturing spread for this part.

## 4. Diode cracked while installing it, or looks visibly deformed

The germanium 1N34A diodes are salvaged NOS glass-package parts and are more fragile than a modern diode. Bend the leads gently and as little as possible when inserting them. A diode that cracks during installation, or arrives with a visibly melted or deformed glass body, needs replacing rather than working around.

## 5. Distortion, intermittent signal, no audio, or level drift over time

This is standard cold-joint territory, and it's the most common root cause across all of these symptoms, especially when the problem showed up after the module worked fine for a while.

1. Reflow the solder joints, checking especially any that looked dull or "blobby." See [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints).
2. If reflowing doesn't resolve it, take high-resolution top and bottom photos of the board for a closer look.

## Request Troubleshooting Support

If you weren't able to solve your issue from this guide, you can request email support from one of our troubleshooting experts here: [Request Troubleshooting Support](/docs/contact/troubleshooting/).
