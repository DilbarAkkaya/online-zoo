const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const nav = document.querySelector('.nav');
const navList = nav.cloneNode(1);
const logo = document.querySelector('.header .logo');
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.remove('hide');

  navList.prepend(logo);
  navList.classList.add('open');
  modal.append(navList);



});