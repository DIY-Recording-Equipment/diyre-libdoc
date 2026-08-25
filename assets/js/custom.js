/* Custom JavaScript for DIYRE LibDoc
 */

// Disable the floating TOC creation
if (typeof libdocUi !== 'undefined') {
    libdocUi.createFloatingToc = function() {
        // Disabled - we only want the static TOC in the page header
        return;
    };
}

// Initialize GLightbox when DOM is fully ready
function initializeGLightbox() {
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: false,
            closeButton: true,
            closeOnOutsideClick: true
        });
        console.log('GLightbox initialized with', document.querySelectorAll('.glightbox').length, 'elements');
    }
}

// Wait for DOM to be fully ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGLightbox);
} else {
    // DOM is already ready, initialize now
    initializeGLightbox();
}

// Make the docs sidebar nav collapsible by section.
//
// eleventyNavigationToHtml (the @11ty/eleventy-navigation plugin) renders
// the whole nav tree as one big nested <ol>/<li> with nothing to collapse
// it — fine for a handful of guides, but docs/ alone is ~150 pages under
// Troubleshooting/Mods/Shipping & Returns/Contact Us. This adds a toggle
// button to every <li> that has children (marked with the
// "nav_primary__parent" class via listItemHasChildrenClass in
// _data/libdocSystem.json) and hides its nested <ol> by default.
//
// This intentionally doesn't touch the <li>/<ol> nesting itself (e.g. by
// wrapping it in a <details>) — several core CSS rules in ds__defaults.css
// key off exact depth with child combinators (`#nav_primary > ol > li > ol
// > li ...`), and inserting a new ancestor would break them.
//
// Sections default collapsed, except whichever ones contain the current
// page (so the active path is always visible on load). Manual
// expand/collapse choices persist across page loads via localStorage.
function initNavPrimaryCollapse() {
    var nav = document.getElementById('nav_primary');
    if (!nav) return;

    var STORAGE_KEY = 'diyre_nav_expanded_sections';
    var expandedIds = [];
    try {
        expandedIds = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
        expandedIds = [];
    }

    function saveExpandedIds() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expandedIds));
        } catch (e) {
            // localStorage unavailable (private browsing, etc.) - state just won't persist
        }
    }

    var chevronMarkup = '<svg class="nav_primary__chevron" viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" focusable="false">'
        + '<path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
        + '</svg>';

    nav.querySelectorAll('li.nav_primary__parent').forEach(function (li, index) {
        var link = li.querySelector(':scope > a');
        var sublist = li.querySelector(':scope > ol');
        if (!link || !sublist) return;

        // href is unique and stable across builds, unlike an index - use it
        // as the persisted identifier so saved state survives content edits.
        var sectionId = link.getAttribute('href') || ('nav-section-' + index);
        var hasCurrentPage = sublist.querySelector('[aria-current="page"]') !== null;
        var isExpanded = hasCurrentPage || expandedIds.indexOf(sectionId) !== -1;

        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav_primary__toggle';
        toggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        toggle.setAttribute('aria-label', 'Toggle ' + link.textContent.trim() + ' section');
        toggle.innerHTML = chevronMarkup;

        li.insertBefore(toggle, sublist);
        li.classList.toggle('nav_primary__collapsed', !isExpanded);

        toggle.addEventListener('click', function () {
            var nowExpanded = li.classList.contains('nav_primary__collapsed');
            li.classList.toggle('nav_primary__collapsed', !nowExpanded);
            toggle.setAttribute('aria-expanded', nowExpanded ? 'true' : 'false');

            var idx = expandedIds.indexOf(sectionId);
            if (nowExpanded && idx === -1) {
                expandedIds.push(sectionId);
            } else if (!nowExpanded && idx !== -1) {
                expandedIds.splice(idx, 1);
            }
            saveExpandedIds();
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavPrimaryCollapse);
} else {
    initNavPrimaryCollapse();
}
