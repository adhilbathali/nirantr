// Select all anchor links with href starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Get target element
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        // Calculate the scroll duration based on distance
        const distance = Math.abs(target.getBoundingClientRect().top); // Absolute distance to scroll
        const baseDuration = 300; // Base duration in milliseconds
        const additionalDuration = 0.5 * distance; // Adjust duration proportionally
        const totalDuration = Math.min(baseDuration + additionalDuration, 3000); // Cap at 3000ms

        // Smooth scrolling with calculated duration
        smoothScroll(target, totalDuration);
    });
});

// Smooth scrolling function with ease-in-out animation
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top; // Distance from target to viewport top
    const startPosition = window.pageYOffset; // Current scroll position
    const startTime = performance.now(); // Get the start time

    // Ease-in-out quadratic function
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Animation function
    function animation(currentTime) {
        const timeElapsed = currentTime - startTime; // Time elapsed since the start
        const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration); // Calculate new position

        window.scrollTo(0, run); // Scroll to the calculated position

        // If the animation is not complete, continue
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Ensure we land exactly on the target (in case of rounding issues)
            window.scrollTo(0, startPosition + targetPosition);
        }
    }

    requestAnimationFrame(animation); // Start the animation
}
