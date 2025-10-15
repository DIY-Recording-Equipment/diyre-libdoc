/* Custom JavaScript for DIYRE LibDoc
 */

// Disable the floating TOC creation
if (typeof libdocUi !== 'undefined') {
    libdocUi.createFloatingToc = function() {
        // Disabled - we only want the static TOC in the page header
        return;
    };
}
