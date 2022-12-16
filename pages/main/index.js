const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const nav = document.querySelector('.nav');
const navList = list.cloneNode(1);
navList.children[0].classList.remove('active-link')
const links = navList.querySelectorAll('.nav-link')
const logoImg = document.querySelector('.header .logo-link img');
const logoImgCopy = logoImg.cloneNode(1)
const modal = document.querySelector('.modal');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.toggle('hide');
  navList.prepend(logoImgCopy);
  navList.classList.add('open');
  links.forEach(element => {
    element.classList.add('open')
  });
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

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const slideContainer = document.getElementById('slide-container');

const moveLeft = ()=>{
  slideContainer.classList.add('transition-left');
  btnPrev.removeEventListener('click', moveLeft)
};
btnPrev.addEventListener('click', moveLeft);

const moveRight = ()=>{
  slideContainer.classList.add('transition-right');
  btnNext.removeEventListener('click', moveRight)
};
btnNext.addEventListener('click', moveRight);

slideContainer.addEventListener('animationend', ()=>{
if (animation.animationName === 'move-left') {
  slideContainer.classList.remove('transition-left')
} else {
  slideContainer.classList.remove('transition-right');
}
 

  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);
});
