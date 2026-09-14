---
layout: support.liquid
title: "L2P attenuation amount"
eleventyNavigation:
  key: "L2P attenuation amount"
  parent: "Mods"
  order: 16
---

{% alert 'Mods are not supported. Once you start modding, we cannot offer troubleshooting support. Make sure your unit is working in the stock configuration before adding any mods.', 'warning', 'Note' %}

The L2P’s attenuation can easily be modified. The base values of -10 dB and -30 dB can be changed by swapping out a few resistors. The L2P uses a voltage divider to achieve this reduction. Using the simple calculator below, you can find alternative values for R3, R7, R4, and R8 for your preferred attenuation.

When designing analog audio systems, we often cannot achieve perfectly rounded output values. For example, the attenuation of -10 dB in the L2P is actually closer to -9.5 dB. This is because we are limited to using standard resistor values. To account for this, the calculator outputs resistor values that follow the E12 standard, along with their actual attenuation values.

<div class="l2p-calc">
    <style>
        .l2p-calc {
            --l2p-card: #ffffff;
            --l2p-text: #1f2937;
            --l2p-muted: #6b7280;
            --l2p-border: #d1d5db;
            --l2p-button: #2563eb;
            --l2p-button-hover: #1d4ed8;
            --l2p-error: #b91c1c;
            --l2p-output-bg: #f3f4f6;
            max-width: 760px;
            margin: 0 auto;
            padding: 28px;
            background: var(--l2p-card);
            color: var(--l2p-text);
            font-family: Arial, Helvetica, sans-serif;
            border: 1px solid var(--l2p-border);
            border-radius: 14px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .l2p-calc * {
            box-sizing: border-box;
        }
        .l2p-calc h2 {
            margin-top: 0;
            margin-bottom: 8px;
            font-size: 28px;
        }
        .l2p-calc label {
            display: block;
            margin-top: 18px;
            margin-bottom: 6px;
            font-weight: bold;
        }
        .l2p-calc input {
            width: 100%;
            padding: 11px;
            font-size: 16px;
            border: 1px solid var(--l2p-border);
            border-radius: 8px;
            background: white;
        }
        .l2p-calc button {
            margin-top: 22px;
            padding: 12px 20px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background: var(--l2p-button);
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        .l2p-calc button:hover {
            background: var(--l2p-button-hover);
        }
        .l2p-calc .error {
            margin-top: 16px;
            color: var(--l2p-error);
            font-weight: bold;
        }
        .l2p-calc .output {
            margin-top: 22px;
            padding: 16px;
            background: var(--l2p-output-bg);
            border: 1px solid var(--l2p-border);
            border-radius: 8px;
            white-space: pre-wrap;
            font-family: Consolas, Monaco, monospace;
            font-size: 15px;
            line-height: 1.45;
            min-height: 80px;
        }
    </style>
    <h2>L2P Resistor Calculator</h2>
    <label for="l2p-db1">Desired switch-up attenuation (in dB)</label>
    <input type="number" id="l2p-db1" step="any" value="-10">
    <label for="l2p-db2">Desired switch-down attenuation (in dB)</label>
    <input type="number" id="l2p-db2" step="any" value="-30">
    <button id="l2p-calcButton" type="button">Calculate</button>
    <div id="l2p-error" class="error"></div>
    <pre id="l2p-output" class="output">Enter attenuation values and press Calculate.</pre>
</div>

<script>
(function () {
    var E12_VALUES = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];

    function formatOhms(value, decimals) {
        if (decimals === undefined || decimals === null) {
            decimals = null;
        }

        if (!Number.isFinite(value)) {
            return "not valid";
        }

        if (Math.abs(value) >= 1000000) {
            return (value / 1000000).toFixed(decimals ?? 3) + "MΩ";
        }

        if (Math.abs(value) >= 1000) {
            return (value / 1000).toFixed(decimals ?? 3) + "kΩ";
        }

        return value.toFixed(decimals ?? 2) + "Ω";
    }

    function roundToE12(value) {
        if (!Number.isFinite(value) || value <= 0) {
            return NaN;
        }

        var exponent = Math.floor(Math.log10(value));
        var candidates = [];

        for (var decade = exponent - 1; decade <= exponent + 1; decade++) {
            var multiplier = Math.pow(10, decade);

            for (var i = 0; i < E12_VALUES.length; i++) {
                var candidate = E12_VALUES[i] * multiplier;

                if (candidate > 0) {
                    candidates.push(candidate);
                }
            }
        }

        var best = candidates[0];
        var bestError = Math.abs(value - best);

        for (var j = 0; j < candidates.length; j++) {
            var error = Math.abs(value - candidates[j]);

            if (error < bestError) {
                best = candidates[j];
                bestError = error;
            }
        }

        return best;
    }

    function parallel(rA, rB) {
        return 1 / ((1 / rA) + (1 / rB));
    }

    function voltageRatioFromShunt(shuntResistance, seriesResistance) {
        return shuntResistance / (seriesResistance + shuntResistance);
    }

    function dbFromRatio(ratio) {
        return 20 * Math.log10(ratio);
    }

    function calculate() {
        var seriesResistance = 5400;

        var dB = Number(document.getElementById("l2p-db1").value);
        var dB2 = Number(document.getElementById("l2p-db2").value);

        var errorBox = document.getElementById("l2p-error");
        var outputBox = document.getElementById("l2p-output");

        errorBox.textContent = "";
        outputBox.textContent = "";

        if (Number.isNaN(dB) || Number.isNaN(dB2)) {
            errorBox.textContent = "Error: please enter both dB values.";
            outputBox.textContent = "No result.";
            return;
        }

        if (dB > 0 || dB2 > 0) {
            errorBox.textContent = "Error: both inputs must be negative dB attenuation values.";
            outputBox.textContent = "No result.";
            return;
        }

        if (dB2 > dB) {
            errorBox.textContent = "Error: switch-in attenuation must be more negative than switch-out attenuation.";
            outputBox.textContent = "Example: un-switched = -10 dB, switched = -30 dB.";
            return;
        }

        if (dB === 0 || dB2 === 0) {
            errorBox.textContent = "Error: 0 dB gives Vout = Vin, which makes the resistor equation divide by zero.";
            outputBox.textContent = "Use a negative attenuation value.";
            return;
        }

        var targetRatioUnswitched = Math.pow(10, dB / 20);
        var targetRatioSwitched = Math.pow(10, dB2 / 20);

        var idealR3R7 = (targetRatioUnswitched * seriesResistance) / (1 - targetRatioUnswitched);
        var idealRT = (targetRatioSwitched * seriesResistance) / (1 - targetRatioSwitched);

        var idealR4R8;
        if (Math.abs(idealR3R7 - idealRT) < 1e-12) {
            idealR4R8 = Infinity;
        } else {
            idealR4R8 = (idealRT * idealR3R7) / (idealR3R7 - idealRT);
        }

        if (idealR3R7 <= 0 || idealRT <= 0 || idealR4R8 <= 0) {
            errorBox.textContent = "Warning: the requested attenuation values produce an invalid resistor value. Check the dB inputs.";
        }

        var standardR3R7 = roundToE12(idealR3R7);
        var standardR4R8 = roundToE12(idealR4R8);

        var actualRatioUnswitched = voltageRatioFromShunt(standardR3R7, seriesResistance);
        var actualDbUnswitched = dbFromRatio(actualRatioUnswitched);

        var actualRTSwitched = parallel(standardR3R7, standardR4R8);
        var actualRatioSwitched = voltageRatioFromShunt(actualRTSwitched, seriesResistance);
        var actualDbSwitched = dbFromRatio(actualRatioSwitched);

        var output = "";

        output += "Calculated Resistance\n";
        output += "R3/R7: " + formatOhms(idealR3R7) + "\n";
        output += "R4/R8: " + formatOhms(idealR4R8) + "\n\n";

        output += "Nearest Standard Resistors\n";
        output += "R3/R7: " + formatOhms(standardR3R7, 0) + "\n";
        output += "R4/R8: " + formatOhms(standardR4R8, 0) + "\n\n";

        output += "Actual Attenuation Using Standard Values\n";
        output += "Switch Up: " + actualDbUnswitched.toFixed(2) + "dB\n";

        output += "Switch Down: " + actualDbSwitched.toFixed(2) + "dB\n";

        outputBox.textContent = output;
    }

    document.getElementById("l2p-calcButton").addEventListener("click", calculate);

    document.getElementById("l2p-db1").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calculate();
        }
    });

    document.getElementById("l2p-db2").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calculate();
        }
    });

    calculate();
})();
</script>