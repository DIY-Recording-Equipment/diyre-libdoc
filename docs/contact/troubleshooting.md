---
layout: support.liquid
title: Troubleshooting Support Request
eleventyNavigation:
  key: "Request Support"
  parent: "Contact Us"
  order: 2
---

Use the form below to request support if your kit isn't working. Please read through all of the instructions before submitting the form.

- For general inquiries, use the **[Contact](/docs/contact/)** form.
- For missing or replacement parts, use the **[Parts Request](/docs/contact/parts/)** form.

We're dedicated to helping you finish your DIY project. But we're also a small company without a dedicated support team. Troubleshooting requires one of our experts to make time to give your issue their full, sustained attention. Please be respectful of this time by sending a clear, detailed message, and please allow two business days for troubleshooting responses.

## Do this first

Most build issues come down to something small: a missed solder joint, a swapped resistor, or a part in the wrong orientation. Please work through the steps below before contacting our support team.

## Double-check your build {.step}

Go through the manual step-by-step and confirm you did everything correctly. Then check every solder joint. It's common to find that you missed a solder joint or put something in backwards, even if you're sure you didn't miss anything! Catching this yourself is almost always quicker than a support back-and-forth.

- [Checking Your Assembly](https://support.diy.re/article/35-checking-your-assembly)
- [Cleaning Up Solder Joints](https://support.diy.re/article/20-cleaning-up-solder-joints)

## Consult our troubleshooting guides {.step}

We maintain both general guides and guides specific to each product:

- [General Troubleshooting Tips](https://support.diy.re/article/28-general-troubleshooting-tips)

- Your product's specific troubleshooting guide (search support.diy.re for your product name)

## Still stuck? Contact our support team {.step}

- Describe your problem with as much detail as possible. For example:
    - If your unit is too quiet, specify the dB value.
    - If your unit is noisy, describe the noise (hum, buzz, etc.) and the approximate frequency range.
- Describe your test setup.
    - What gear is your unit connected to?
    - What software and interface are you using?
    - What kind of cables are you using?
- List troubleshooting steps you've already tried
    - Have you checked all components?
    - Have you re-flowed any solder joints?
    - Have you swapped cables?
- Include high-resolution photos of both the top and bottom of your build

The more of this you can provide up front, the faster we can diagnose the issue.

<div id="support-form-error" style="display:none">
{% alert 'Something went wrong submitting your request. Double check the required fields (name and a valid email) and try again, or email us directly at support@diyrecordingequipment.com.', 'danger', 'Submission Failed' %}
</div>

<form action="/support-form-handler.php" method="POST" enctype="multipart/form-data" id="form-support">
    <input type="hidden" name="_subject" value="Troubleshooting Support Request">

    <p aria-hidden="true" class="hp-field">
        <label for="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
    </p>

    <p>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
    </p>
    <p>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </p>
    <p>
        <label for="kit_product">Which kit or product?</label>
        <input type="text" id="kit_product" name="kit_product">
    </p>
    <p>
        <label for="order_number">Order number (optional)</label>
        <input type="text" id="order_number" name="order_number">
    </p>
    <p>
        <label for="issue_description">What's going wrong?</label>
        <textarea id="issue_description" name="issue_description" rows="6" required placeholder="Describe the problem you're running into."></textarea>
    </p>
    <p>
        <label for="test_setup">What's your test setup?</label>
        <textarea id="test_setup" name="test_setup" rows="4" placeholder="What are you plugging this into, and how are you powering/testing it?"></textarea>
    </p>
    <p>
        <label for="troubleshooting_tried">What have you already tried?</label>
        <textarea id="troubleshooting_tried" name="troubleshooting_tried" rows="4" placeholder="Steps you've already taken to troubleshoot the issue."></textarea>
    </p>
    <p>
        <label for="photos">Photos (up to 5)</label>
        <input type="file" id="photos" name="photos[]" multiple accept="image/*,.pdf">
    </p>
    <p>
        <button class="btn" type="submit">Submit Request</button>
    </p>
</form>

<script>
(function () {
    var params = new URLSearchParams(window.location.search);
    if (params.has('error')) {
        var el = document.getElementById('support-form-error');
        if (el) el.style.display = '';
    }
})();

(function () {
    // Build the email subject from the product + order number right before
    // submit, so support can triage from the subject line alone. Falls back
    // to the static default in the hidden field's value if JS is disabled.
    var form = document.getElementById('form-support');
    if (!form) return;
    form.addEventListener('submit', function () {
        var subjectField = form.querySelector('[name="_subject"]');
        var productField = form.querySelector('[name="kit_product"]');
        var orderField = form.querySelector('[name="order_number"]');
        if (!subjectField) return;

        var product = productField ? productField.value.trim() : '';
        var orderNumber = orderField ? orderField.value.trim() : '';

        var parts = [];
        if (product) parts.push(product);
        if (orderNumber) parts.push(orderNumber);
        parts.push('Troubleshooting');

        subjectField.value = parts.join(' ');
    });
})();
</script>
