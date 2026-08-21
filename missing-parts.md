---
layout: page.liquid
title: Parts Request
permalink: missing-parts/index.html
---

We're sorry — whether a part didn't make it into your kit or arrived damaged, we'll get you sorted. If a replacement needs to be shipped to you, we'll follow up by email with an invoice for the replacement fee, which in most cases is **$5 plus shipping**.

<div id="support-form-error" style="display:none">
{% alert 'Something went wrong submitting your request. Double check the required fields (name and a valid email) and try again, or email us directly at support@diyrecordingequipment.com.', 'danger', 'Submission Failed' %}
</div>

<form action="/support-form-handler.php" method="POST" id="form-missing-parts">
    <input type="hidden" name="_subject" value="Missing/Replacement Parts Request">

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
        <input type="text" id="kit_product" name="kit_product" required>
    </p>
    <p>
        <label for="order_number">Order number</label>
        <input type="text" id="order_number" name="order_number" required>
    </p>
    <p>
        <label>What happened?</label>
        <span class="radio-option">
            <input type="radio" id="status_missing" name="status" value="Missing from kit" required>
            <label for="status_missing">Part(s) missing from my kit</label>
        </span>
        <span class="radio-option">
            <input type="radio" id="status_damaged" name="status" value="Damaged, needs replacement" required>
            <label for="status_damaged">Part(s) damaged, need replacement</label>
        </span>
    </p>
    <p>
        <label for="parts_requested">Which part(s) do you need?</label>
        <textarea id="parts_requested" name="parts_requested" rows="6" required placeholder="List each part and how many you need. Include reference designators (e.g. R1, C4) if you know them."></textarea>
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
