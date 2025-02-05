// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links and project cards
    const navLinks = document.querySelectorAll('.nav-link');
    const projectCards = document.querySelectorAll('.project-card');

    // Set up navigation link behavior
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });

    // Add animation order to project cards
    projectCards.forEach((card, index) => {
        card.style.setProperty('--animation-order', index);
    });

    // Handle scroll-based navigation highlighting
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Get all sections
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop - 200 && 
                scrollPosition < sectionTop + sectionHeight - 200) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const correspondingLink = document.querySelector(
                    `.nav-link[href="#${section.id}"]`
                );
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
});