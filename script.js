// Minimal JavaScript for Felix Peng's Portfolio

// ===========================
// Scrollbar Hiding Fallback
// ===========================
// CSS handles this now, but this is a fallback for older browsers
(function() {
    const container2 = document.getElementById('container2');
    if (container2) {
        // Only apply JS fix if CSS scrollbar hiding isn't working
        const hasScrollbarCSS = CSS.supports('scrollbar-width', 'none') ||
                                 'webkitOverflowScrolling' in document.documentElement.style;
        if (!hasScrollbarCSS) {
            container2.style.right = (container2.clientWidth - container2.offsetWidth) + 'px';
        }
    }
})();

// ===========================
// Lazy Loading Images
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images for performance
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ===========================
    // Smooth Scroll for Navigation
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // Active Navigation State
    // ===========================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-tab').forEach(tab => {
        const href = tab.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

// ===========================
// Performance: Reduce Motion for Accessibility
// ===========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}
