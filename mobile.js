// mobile.js
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Add mobile-specific features or adjustments here
        document.body.style.backgroundColor = '#e6e6e6'; // Light grey background for mobile
    } else {
        document.body.style.backgroundColor = '#f0f8ff'; // Original background color
    }
});
