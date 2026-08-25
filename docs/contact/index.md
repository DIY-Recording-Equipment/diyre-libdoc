---
layout: support.liquid
title: Contact Us
eleventyNavigation:
  key: "Contact Us"
  order: 5
---

Use the form below for general inquiries.

- For missing or replacement parts, use the **[ Parts Request](parts/)** form.
- To request help with troubleshooting, use the **[Support Request](troubleshooting/)** form.

Otherwise, use the form below for anything else.

<div id="support-form-error" style="display:none">
{% alert 'Something went wrong submitting your request. Double check the required fields (name and a valid email) and try again, or email us directly at support@diyrecordingequipment.com.', 'danger', 'Submission Failed' %}
</div>

<form action="/support-form-handler.php" method="POST" id="form-contact-general">
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
        <label for="_subject">Subject</label>
        <input type="text" id="_subject" name="_subject" required>
    </p>
    <p>
        <label for="question">Message</label>
        <textarea id="question" name="question" rows="6" required></textarea>
    </p>
    <p>
        <button class="btn" type="submit">Submit</button>
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
