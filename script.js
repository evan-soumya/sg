// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dynamicWords = ["Research Scholar", "Student", "Science Enthusiast"];
    let index = 0;
    const dynamicElement = document.getElementById('dynamicWords');

    function changeWord() {
        dynamicElement.textContent = dynamicWords[index];
        index = (index + 1) % dynamicWords.length;
    }

    setInterval(changeWord, 3000);
    changeWord();
});

function copyLink() {
    const url = window.location.href;

    // Use the modern Clipboard API to copy the URL
    navigator.clipboard.writeText(url).then(() => {
        // Create a notification div
        const notification = document.createElement('div');
        notification.id = 'copy-notification';
        notification.textContent = 'Link Copied!';
        document.body.appendChild(notification);

        // Center the notification in the viewport
        notification.style.top = `${window.innerHeight / 2}px`;
        notification.style.left = `${window.innerWidth / 2}px`;
        notification.style.transform = 'translate(-50%, -50%)';

        // Remove the notification after 2 seconds
        setTimeout(() => {
            notification.style.opacity = '0'; // Start fading out
            setTimeout(() => document.body.removeChild(notification), 500); // Remove after fading out
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

document.querySelector("form").addEventListener("submit", function() {
    setTimeout(function() {
        document.querySelector("form").reset();
    }, 1000); // Reset form 1 second after submission
});
