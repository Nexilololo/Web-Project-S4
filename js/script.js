document.addEventListener('DOMContentLoaded', () => {
    console.log('EFREI Computer Science Department site initialized.');

    // Simple interaction: handle active state for nav links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            navLinks.forEach(l => l.classList.remove('active'));

            this.classList.add('active');

            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
});
