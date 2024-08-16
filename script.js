// script.js

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
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("Website link copied to clipboard!");
}

// Toggle Menu
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// Initialize dynamic text
const dynamicText = document.querySelector('.dynamic-text');
const texts = ['Research Scholar', 'Student', 'Science Enthusiast'];
let index = 0;

function updateText() {
    dynamicText.textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(updateText, 3000);
}
updateText();
