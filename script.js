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
    const dummy = document.createElement('input');
    const url = window.location.href;
    dummy.style.position = 'absolute';
    dummy.style.left = '-9999px'; // Move element out of view
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

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
}



