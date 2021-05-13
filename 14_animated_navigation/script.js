const toggleBtn = document.querySelector('#toggleMenu');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});