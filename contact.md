---
layout: support.liquid
title: Contact Support
description: Stuck on a build, or something not working right? Tell us what's going on and attach a few photos — we'll get back to you by email.
permalink: contact/index.html
---

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
</script>
