/* Custom JavaScript for DIYRE LibDoc
 */

// Disable the floating TOC creation
if (typeof libdocUi !== 'undefined') {
    libdocUi.createFloatingToc = function() {
        // Disabled - we only want the static TOC in the page header
        return;
    };
}

// Lightbox functionality - IIFE to avoid global pollution
(function() {
    'use strict';

    // Cache parsed data to avoid repeated JSON parsing
    const lightboxCache = new Map();

    function getLightboxData(dialog) {
        const dialogId = dialog.id;

        if (!lightboxCache.has(dialogId)) {
            try {
                const imagesAttr = dialog.getAttribute('data-images');
                const images = JSON.parse(imagesAttr.replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
                lightboxCache.set(dialogId, images);
            } catch (e) {
                console.error('Failed to parse lightbox images:', e);
                return null;
            }
        }

        return lightboxCache.get(dialogId);
    }

    function updateLightboxImage(dialog) {
        const images = getLightboxData(dialog);
        if (!images) return;

        const currentIndex = parseInt(dialog.getAttribute('data-current-image'), 10);
        const imageElement = dialog.querySelector('.lightbox-fullsize-image');

        if (imageElement && images[currentIndex]) {
            imageElement.style.backgroundImage = "url('" + images[currentIndex] + "')";

            // Update aria-label for accessibility
            const ariaLabel = images.length > 1
                ? 'Image ' + (currentIndex + 1) + ' of ' + images.length
                : 'Image';
            imageElement.setAttribute('aria-label', ariaLabel);
        }
    }

    function navigateLightboxInternal(dialog, direction) {
        const images = getLightboxData(dialog);
        if (!images || images.length <= 1) return;

        let currentIndex = parseInt(dialog.getAttribute('data-current-image'), 10);
        currentIndex = (currentIndex + direction + images.length) % images.length;

        dialog.setAttribute('data-current-image', currentIndex);
        updateLightboxImage(dialog);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const openDialog = document.querySelector('.lightbox-dialog[open]');
        if (!openDialog) return;

        switch(e.key) {
            case 'Escape':
                openDialog.close();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigateLightboxInternal(openDialog, -1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigateLightboxInternal(openDialog, 1);
                break;
        }
    });

    // Expose functions globally for inline onclick handlers
    window.openLightbox = function(lightboxId, imageIndex) {
        const dialog = document.getElementById(lightboxId);
        if (dialog) {
            dialog.setAttribute('data-current-image', imageIndex);
            updateLightboxImage(dialog);
            dialog.showModal();
        }
    };

    window.updateLightboxImage = function(dialogId) {
        const dialog = document.getElementById(dialogId);
        if (dialog) updateLightboxImage(dialog);
    };

    window.navigateLightbox = function(dialogId, direction) {
        const dialog = document.getElementById(dialogId);
        if (dialog) navigateLightboxInternal(dialog, direction);
    };
})();
