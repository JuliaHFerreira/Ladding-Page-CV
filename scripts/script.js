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
    if (bar.classList.contains('html'))         bar.style.width = '80%';
    if (bar.classList.contains('css'))          bar.style.width = '70%';
    if (bar.classList.contains('js'))           bar.style.width = '30%';
    if (bar.classList.contains('photoshop'))    bar.style.width = '80%';
    if (bar.classList.contains('java'))         bar.style.width = '75%';
    if (bar.classList.contains('Swagger'))      bar.style.width = '65%';
    if (bar.classList.contains('Spring-boot'))  bar.style.width = '65%';
    if (bar.classList.contains('maven'))        bar.style.width = '65%';
    if (bar.classList.contains('JUnit'))        bar.style.width = '40%';
    if (bar.classList.contains('Api-Rest'))     bar.style.width = '65%';
    if (bar.classList.contains('C'))            bar.style.width = '70%';
    if (bar.classList.contains('python'))       bar.style.width = '40%';
    if (bar.classList.contains('sql'))          bar.style.width = '85%';
    if (bar.classList.contains('Postgree-SQL')) bar.style.width = '65%';
    if (bar.classList.contains('Git'))          bar.style.width = '90%';
    if (bar.classList.contains('kanban'))       bar.style.width = '60%';
    if (bar.classList.contains('Scrum'))        bar.style.width = '55%';
    if (bar.classList.contains('advpl'))        bar.style.width = '50%';
    if (bar.classList.contains('totvs'))        bar.style.width = '50%';
  });
  window.removeEventListener('scroll', animateSkills);
}
}

window.addEventListener('scroll', animateSkills);


window.addEventListener('scroll', animateSkills);