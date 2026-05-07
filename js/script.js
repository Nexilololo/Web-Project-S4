document.addEventListener('DOMContentLoaded', () => {
    console.log('EFREI Computer Science Department site initialized.');

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {

            navLinks.forEach(l => l.classList.remove('active'));

            this.classList.add('active');

            if (this.getAttribute('href') === '#') {
                event.preventDefault();
            }
        });
    });
});
