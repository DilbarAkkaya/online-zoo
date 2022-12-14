const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const nav = document.querySelector('.nav');
const navList = list.cloneNode(1);
navList.children[0].classList.remove('active-link')
const links = navList.querySelectorAll('.nav-link')
const logo = document.querySelector('.header .logo');
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.remove('hide');
  navList.prepend(logo);
  navList.classList.add('open');
links.forEach(element => {
  element.classList.add('open')
});
  modal.append(navList);



});