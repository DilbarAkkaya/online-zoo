const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const nav = document.querySelector('.nav');
const navList = list.cloneNode(1);
navList.children[0].classList.remove('active-link')
const links = navList.querySelectorAll('.nav-link')
const logoImg = document.querySelector('.header .logo img');
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.toggle('hide');
  navList.prepend(logoImg);
  navList.classList.add('open');
links.forEach(element => {
  element.classList.add('open')
});
  modal.append(navList);
 if (burgerMenu.classList.contains('active')){
  document.querySelector('.header-wrapper').style.justifyContent = 'end';
  logoImg.src='../../assets/icons/logo_modal.svg'
 } 



});