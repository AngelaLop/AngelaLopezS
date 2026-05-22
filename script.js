// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update icon based on theme
function updateThemeIcon(theme) {
    const svg = themeToggle.querySelector('svg');
    if (!svg) return;
    
    if (theme === 'dark') {
        // Moon icon for dark mode
        svg.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
    } else {
        // Sun icon for light mode
        svg.innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
    }
}

updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Progress Bar
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Image Zoom (Medium Zoom)
if (typeof mediumZoom !== 'undefined') {
    mediumZoom('.zoom-image', {
        margin: 50,
        background: 'rgba(0, 0, 0, 0.8)'
    });
}

// Tab/Section Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active menu item
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[href="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialize - show first section by default
function initNavigation() {
    // Show about section by default
    showSection('#about');
    
    // Handle menu clicks
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            showSection(sectionId);
        });
    });
    
    // Handle "View All" links within sections (like View All Publications)
    document.querySelectorAll('.view-all-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            showSection(sectionId);
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    // DOM is already ready
    initNavigation();
}

// Footer year - keep current automatically
(function () {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();

// Project Videos - lazy-load on scroll, and respect reduced-motion preference
(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const videos = document.querySelectorAll('.featured-project-image video');

    function loadVideo(video) {
        if (video.dataset.loaded) return;
        const source = video.querySelector('source[data-src]');
        if (!source) return;

        source.src = source.dataset.src;
        video.load();
        video.dataset.loaded = 'true';

        if (prefersReducedMotion) {
            // Don't autoplay; let the user start it themselves
            video.controls = true;
        } else {
            video.play().catch(() => {});
        }
    }

    if ('IntersectionObserver' in window) {
        // Load each video only once it scrolls near the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadVideo(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '300px 0px' });

        videos.forEach((video) => observer.observe(video));
    } else {
        // Older browsers: just load them all
        videos.forEach(loadVideo);
    }
})();

// Masonry Layout disabled - using CSS Grid instead
// If you want to use Masonry for different layouts, uncomment below:
// if (typeof Masonry !== 'undefined') {
//     const grid = document.getElementById('projectsGrid');
//     if (grid) {
//         new Masonry(grid, {
//             itemSelector: '.project-card',
//             columnWidth: '.project-card',
//             percentPosition: true
//         });
//     }
// }

