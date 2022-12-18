const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const navList = list.cloneNode(1);

const links = navList.querySelectorAll('.nav-link')
const logoImg = document.querySelector('.header .logo-link img');
const logoImgCopy = logoImg.cloneNode(1)
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.toggle('hide');
  navList.prepend(logoImgCopy);
  navList.classList.add('open');
  navList.children[4].children[0].classList.remove('active-link');
/*   links.forEach(element => {
    element.classList.add('open')
  }); */
  modal.append(navList);
  if (burgerMenu.classList.contains('active')) {
    document.querySelector('.header-wrapper').style.justifyContent = 'end';
    logoImgCopy.src = '../../assets/icons/logo_modal.svg';
    logoImgCopy.style.width = '67px';
    logoImgCopy.style.marginBottom = '14px';
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