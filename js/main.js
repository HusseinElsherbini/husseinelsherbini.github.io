// Wait for the DOM to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all our interactive elements
    initializeCursor();
    initializeScrollProgress();
    initializeSectionReveal();
});

// Custom cursor functionality
function initializeCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        // Position both cursor elements at mouse position
        // Offset by half their width/height for centering
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        cursorFollower.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    });

    // Optional: Add hover effects for interactive elements
    document.querySelectorAll('a, button, .story-image').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Progress bar functionality
function initializeScrollProgress() {
    window.addEventListener('scroll', () => {
        // Calculate scroll progress as a percentage
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrolled / maxScroll) * 100;
        
        // Update progress bar width
        document.querySelector('.progress-bar').style.width = `${scrollPercent}%`;
    });
}

// Section reveal functionality
function initializeSectionReveal() {
    // Options for the Intersection Observer
    const observerOptions = {
        // Trigger when 20% of the element is visible
        threshold: 0.2,
        // Start detecting slightly before element comes into view
        rootMargin: '0px 0px -10% 0px'
    };

    // Create an observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add visible class when element comes into view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after element is revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing all story sections
    document.querySelectorAll('.story-section').forEach(section => {
        observer.observe(section);
    });
}

// Optional: Smooth scroll functionality for navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}