const menu = document.querySelector('.hamburger-bar input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
