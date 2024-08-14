// scripts.js
window.onload = function() {
    const approachingElement = document.getElementById('approaching');
    const contentElement = document.getElementById('content');
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');
    const revealButton = document.getElementById('revealButton');
    const specialMessage = document.getElementById('specialMessage');

    // Set the target date and time
    const targetDate = new Date('August 14, 2024 10:50:00');

    // Function to check the current time and initialize visibility
    const initializePage = () => {
        const now = new Date();

        if (now < targetDate) {
            // Show the approaching message if before the target time
            contentElement.style.display = 'none';
            headerElement.style.display = 'none';
            footerElement.style.display = 'none';
            approachingElement.style.display = 'block';
        } else {
            // Show content if the target time has passed
            approachingElement.style.display = 'none';
            headerElement.style.display = 'block';
            contentElement.style.display = 'block';
            footerElement.style.display = 'block';
        }
    };

    // Initialize the page based on current time
    initializePage();

    // Event listener for the reveal button
    revealButton.addEventListener('click', function() {
        specialMessage.innerText = 
        "On your special day, I want you to know how much you mean to me.Take Love From Jakaria. Happy Birthday, Asha!";
        revealButton.style.display = 'none';
    });
};
