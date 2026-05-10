document.addEventListener('DOMContentLoaded', () => {

    // Active menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Image slider
    const sliderTrack = document.getElementById('sliderTrack');
    if (sliderTrack) {
        const sliderItems = document.querySelectorAll('.slider-item');
        const previousButton = document.getElementById('previousButton');
        const nextButton = document.getElementById('nextButton');

        let currentIndex = 0;
        const slideWidth = sliderItems[0].clientWidth;

        function updateSlider() {
            sliderTrack.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex >= sliderItems.length - 1) {
                currentIndex = 0; // Loop back to start
            } else {
                currentIndex++;
            }
            updateSlider();
        });

        previousButton.addEventListener('click', () => {
            if (currentIndex <= 0) {
                currentIndex = sliderItems.length - 1; // Loop back to end
            } else {
                currentIndex--;
            }
            updateSlider();
        });

        // Auto slide every 5 seconds
        setInterval(() => {
            if (currentIndex >= sliderItems.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSlider();
        }, 5000);

        // Handle window resize to adjust slide size
        window.addEventListener('resize', () => {
            const newSize = sliderItems[0].clientWidth;
            sliderTrack.style.transition = 'none'; // Prevent jumping animation on resize
            sliderTrack.style.transform = 'translateX(' + (-newSize * currentIndex) + 'px)';
            // Restore transition after a brief delay
            setTimeout(() => {
                sliderTrack.style.transition = 'transform 0.5s ease-in-out';
            });
        });
    }

});
