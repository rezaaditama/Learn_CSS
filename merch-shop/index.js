const nav = document.getElementById('navbar');
const trigger = document.getElementById('check');
const bar = document.getElementById('hamburgerBar');

trigger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
