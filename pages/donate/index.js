const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const navList = list.cloneNode(1);
navList.children[0].classList.remove('active-link')
const links = navList.querySelectorAll('.list .item')
const logoImg = document.querySelector('.header .logo-link img');
const logoImgCopy = logoImg.cloneNode(1)
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.toggle('hide');
  navList.prepend(logoImgCopy);
  navList.classList.add('open');
/*   links.forEach(element => {
    element.classList.add('open')
  }); */
  modal.append(navList);
  if (burgerMenu.classList.contains('active')) {
    document.querySelector('.header-wrapper').style.justifyContent = 'end';
    logoImgCopy.src = '../../assets/icons/logo_modal.svg'
  } else {
    document.querySelector('.header-wrapper').style.justifyContent = 'space-between';
    logoImgCopy.className = 'logo-link img'
    logoImgCopy.src = '../../assets/icons/logo.svg'
  }
});
document.addEventListener('click', (event)=>{
  if(event.target.classList.contains('modal')) {
    burgerMenu.classList.remove('active');
    modal.classList.add('hide');
    document.querySelector('.header-wrapper').style.justifyContent = 'space-between';
  }
})