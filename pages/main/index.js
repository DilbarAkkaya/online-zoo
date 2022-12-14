const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.list');
const navLinks = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.nav');
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  console.log(burgerMenu)
  burgerMenu.classList.toggle('active');
  list.classList.toggle("change");
  nav.classList.toggle('active');
  modal.classList.remove('hide');
  
});