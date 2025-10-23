# Shortcodes Guide

This guide explains all available shortcodes you can use in your markdown files. Shortcodes are special tags that let you add interactive elements, images, alerts, and more to your documentation.

## alert

Display colorful alert boxes to highlight important information.

**Parameters:**
- `content` (required) - The message to display
- `type` (optional) - The style of alert: `info`, `warning`, `success`, or `danger`
- `title` (optional) - A heading for the alert box

**Defaults:**
- If no type is specified, displays a plain alert
- If no title is specified, no heading is shown

**Examples:**

```liquid
{% alert 'This is a basic alert message.' %}

{% alert 'This guide is for version 3. For older versions, see the legacy guide.', 'danger', 'Version check' %}

{% alert 'Install the locking end of the standoffs into the PCB.', 'warning', 'Note' %}

{% alert 'To measure resistors quickly, you can remove the probes from your multi-meter and place the resistor leads directly in the probe sockets.', 'success', 'Tip' %}

{% alert 'Parts data has been updated.', 'info', 'Information' %}
```

---

## icon

Display a single icon from the available icon library.

**Parameters:**
- `iconName` (required) - The name of the icon (see all available icons using the `icomoon` shortcode)
- `iconSize` (optional) - Size from 1 to 10

**Defaults:**
- If no size is specified, the icon displays at its default size

**Examples:**

```liquid
{% icon 'check-circle' %}

{% icon 'arrow-right', 5 %}

{% icon 'faders', 8 %}
```

---

## iconCard

Display a card with an icon or image alongside text, perfect for tool lists or feature descriptions.

**Parameters:**
- `mainText` (required) - The heading text
- `description` (required) - The description text (can include HTML)
- `iconOrImage` (optional) - Either an icon name OR a path to an image file

**Defaults:**
- If no third parameter is provided, displays a default check-circle icon

**Examples:**

With an icon:
```liquid
{% iconCard 'Configure', 'Start entering your own settings into settings.json at the root of the project.', 'faders' %}
```

With an image:
```liquid
{% iconCard 'Soldering Iron', 'We recommend an adjustable-temperature station. The smaller, pencil-style ones do not have enough power.', '/assets/tools/soldering-iron_small.jpg' %}

{% iconCard 'Solder', 'You can use 60/40 leaded solder or lead-free. We recommend 60/40 because it is easier to use.', '/assets/tools/solder_small.jpg' %}
```

With default icon:
```liquid
{% iconCard 'Getting Started', 'Follow these steps to begin your project.' %}
```

---

## lightbox

Display one or more images in a gallery with click-to-zoom functionality.

**Parameters:**
- `img1` through `img8` - Paths to up to 8 images
- `size` (optional, last parameter) - Thumbnail size: `sm`, `md`, or `lg`

**Defaults:**
- Size defaults to `sm` if not specified

**Examples:**

Single image, small size:
```liquid
{% lightbox '/assets/15ips3/colour-standoffs.jpg' %}
```

Single image, medium size:
```liquid
{% lightbox '/assets/15ips3/res-bend.jpg', 'md' %}
```

Multiple images:
```liquid
{% lightbox '/assets/step1.jpg', '/assets/step2.jpg', '/assets/step3.jpg', 'lg' %}
```

---

## embed

Embed external content like YouTube videos or other iframe content.

**Parameters:**
- `src` (required) - The full URL to the content
- `height` (optional) - Height of the iframe

**Defaults:**
- Height is automatic if not specified

**Examples:**

```liquid
{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ' %}

{% embed 'https://www.youtube.com/embed/dQw4w9WgXcQ', '500' %}
```

---

## stepParts

Display parts needed for a specific assembly step, pulling data from Airtable.

**Parameters:**
- `stepNumber` (required) - The step identifier (e.g., '1.1', '2.3')
- `kitSku` (required) - The kit SKU (usually passed from frontmatter as `kit_sku`)

**Setup Required:**

1. Add `kit_sku` to your page's frontmatter:
```yaml
---
layout: guide.liquid
title: Assembly Guide
kit_sku: KIT-012.06
---
```

2. Run `npm run fetch-parts` to download parts data from Airtable

**Examples:**

```liquid
{% stepParts '1.1', kit_sku %}

{% stepParts '2.3', kit_sku %}
```

**Note:** The parts data shows reference designators, item names, quantities, images, and markings for each part used in that step.

---

## feedbackForm

Insert a feedback form into your page.

**Parameters:**
- None

**Examples:**

```liquid
{% feedbackForm %}
```

---

## icomoon

Display a gallery of all available icons with their names.

**Parameters:**
- None

**Examples:**

```liquid
{% icomoon %}
```

**Note:** Use this shortcode to see all available icon names that you can use with the `icon` and `iconCard` shortcodes.