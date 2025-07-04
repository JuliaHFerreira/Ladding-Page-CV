// script.js

// Toggle mobile menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animação das barras de habilidade ao scroll
const skillsSection = document.getElementById('habilidades');
const progressBars  = document.querySelectorAll('.progress');

function animateSkills() {
  const triggerPoint = window.innerHeight * 0.8;
  const sectionTop   = skillsSection.getBoundingClientRect().top;

  if (sectionTop < triggerPoint) {
    progressBars.forEach(bar => {
      if (bar.classList.contains('html')) bar.style.width = '90%';
      if (bar.classList.contains('css'))  bar.style.width = '80%';
      if (bar.classList.contains('js'))   bar.style.width = '75%';
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);