---
layout: support.liquid
title: Job Opportunities at DIY
eleventyNavigation:
  key: "Request Parts"
  parent: "Contact Us"
  order: 1
---

DIY Recording Equipment, LLC is currently hiring for a Production Technician. The work requires fine hand skills and a keen attention to detail. The work will be done at our office in West Philadelphia.

As a Production Technician, you will assemble DIY electronics kits by organizing and packaging components according to documentation. You will perform quality control checks throughout the assembly process to ensure accuracy and completeness of each kit. You may also perform through-hole electronics assembly, soldering components onto printed circuit boards. You will maintain accurate inventory records through data entry, tracking components, assemblies, and stock levels in our systems.

**Responsibilities**

- Pick parts and package kits from a list of parts
- Pack and fulfill orders with shipping software
- Count inventory
- Receive, check-in, and stock shipments of parts
- Through-hole PCB assembly

**Skills and Experience**
- Ability to follow written and visual documentation precisely
- Comfortable with repetitive tasks while maintaining quality standards
- Basic familiarity with electronics components (resistors, capacitors, ICs, etc.) preferred
- Soldering experience (through-hole or surface mount) preferred

**Details**
- $20/hour
- 1-2 days per week, flexible timing
- Work out of West Philadelphia office
- Starts as early as November 1, 2026

If you’re interested, please email below with a brief intro and your resume.

<div id="support-form-error" style="display:none">
{% alert 'Something went wrong submitting your request. Double check the required fields (name and a valid email) and try again, or email us directly at support@diyrecordingequipment.com.', 'danger', 'Submission Failed' %}
</div>

<form action="/support-form-handler.php" method="POST" id="form-opportunities">
    <input type="hidden" name="_subject" value="Job Application">

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
        <label for="message">Your message</label>
        <textarea id="message" name="message" rows="6" required placeholder="Tell us a bit about why you would be well suited for this job."></textarea>
    </p>
    <p>
        <label for="resume">Resume</label>
        <input type="file" id="resume" name="photos[]" multiple accept="image/*,.pdf">
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
