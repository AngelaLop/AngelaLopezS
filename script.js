// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
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

// Smooth Scroll
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

// Initialize Masonry Layout (if needed for future projects)
if (typeof Masonry !== 'undefined') {
    const grid = document.getElementById('projectsGrid');
    if (grid) {
        new Masonry(grid, {
            itemSelector: '.project-card',
            columnWidth: '.project-card',
            percentPosition: true
        });
    }
}

