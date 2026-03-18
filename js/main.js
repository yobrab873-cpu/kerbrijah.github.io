// ===== MOBILE HAMBURGER MENU =====
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Create hamburger icon dynamically if not present
let hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;'; // hamburger symbol
navbar.appendChild(hamburger);

// Toggle menu on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== TYPING EFFECT HERO =====
const typingElement = document.querySelector('.hero-text h1');
if (typingElement) {
    const words = ["Cybersecurity Specialist", "Ethical Hacker", "Web Developer", "Bug Bounty Hunter"];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        if(i >= words.length) i = 0;
        currentWord = words[i];

        if(isDeleting){
            typingElement.textContent = currentWord.substring(0, j--);
            if(j < 0){
                isDeleting = false;
                i++;
                j = 0;
                setTimeout(type, 300);
            } else {
                setTimeout(type, 100);
            }
        } else {
            typingElement.textContent = currentWord.substring(0, j++);
            if(j > currentWord.length){
                isDeleting = true;
                setTimeout(type, 1500);
            } else {
                setTimeout(type, 150);
            }
        }
    }

    type();
}