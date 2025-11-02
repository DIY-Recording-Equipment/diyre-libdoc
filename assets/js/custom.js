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
