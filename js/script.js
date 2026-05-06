document.addEventListener('DOMContentLoaded', () => {
    console.log('EFREI Computer Science Department site initialized.');

    // Simple interaction: handle active state for nav links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Note: Since this is currently a static single-page mockup, 
            // we'll prevent default so the page doesn't jump to top
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
});
