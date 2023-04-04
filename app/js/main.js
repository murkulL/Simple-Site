const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navList.classList.toggle('open');
});






