import data from '../data.js';
const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
const navList = list.cloneNode(1);
navList.children[0].classList.remove('active-link')
const links = navList.querySelectorAll('.nav-link')
const logoImg = document.querySelector('.header .logo-link img');
const logoImgCopy = logoImg.cloneNode(1)
const modal = document.querySelector('.modal');
const arrows = document.querySelectorAll('.arrow');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  modal.classList.toggle('hide');
  navList.prepend(logoImgCopy);
  navList.classList.add('open');
  const container = document.createElement('div');
container.style.position = 'relative';
container.append(navList);
/*   links.forEach(element => {
    element.classList.add('open')
  }); */
  modal.append(container);
arrows.forEach(btn => {
  btn.style.zIndex='0';
})
  if (burgerMenu.classList.contains('active')) {
    document.querySelector('.header-wrapper').style.justifyContent = 'end';
    logoImgCopy.src = '../../assets/icons/logo_modal.svg';
    logoImgCopy.style.width = '65px';
    logoImgCopy.style.marginBottom = '16px';
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

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const slideContainer = document.getElementById('slide-container');
const sliderLeft = document.querySelector('#slider-left');
const sliderRight = document.querySelector('#slider-right');
let sliderCenter = document.querySelector('#slider-center');

const moveLeft = () => {
  slideContainer.classList.add('transition-left');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
};
btnPrev.addEventListener('click', moveLeft);

const moveRight = () => {
  slideContainer.classList.add('transition-right');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
};
btnNext.addEventListener('click', moveRight);

slideContainer.addEventListener('animationend', (event) => {
  if (event.animationName === 'move-left') {

    slideContainer.classList.remove('transition-left');
    let leftItems = sliderLeft.innerHTML;
    sliderCenter.innerHTML = leftItems;
    sliderLeft.innerHTML = '';
    createSliderLeft();
  } else {
    slideContainer.classList.remove('transition-right');
    let rightItems = sliderRight.innerHTML;

    sliderCenter.innerHTML = rightItems;
    sliderRight.innerHTML = '';
    createSliderRight();
  }
  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);
});

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

const createCard = (randomShEl) => {
  const card = document.createElement('figure');
  card.setAttribute('data-id', `${randomShEl.id}`);
  card.classList.add('card', 'slide');
  const alt = `${randomShEl.imageFood === '../../assets/icons/meet-fish_icon.svg' ? "meatfish" : "banana"}`;
  const imageClass = `${randomShEl.imageFood === '../../assets/icons/meet-fish_icon.svg' ? "meat" : "veget"}`;
  card.insertAdjacentHTML('beforeend', `
  <div class="img-wrap">
                      <img src=${randomShEl.image} alt="alligator" class="card-img">
                    </div>
                    <figcaption class="description">
                      <div class="desc-text">
                        <h5>${randomShEl.petName}</h5>
                        <p>${randomShEl.location}</p>
                      </div>
                      <div class="desc-icon">
                        <img src=${randomShEl.imageFood} alt=${alt} class=${imageClass}>
                      </div>
                    </figcaption>`);
  return card
}
const createSliderLeft = () => {
  const shuffledData = shuffle(data);
  for (let i = 0; i < shuffledData.length - 2; i++) {
    let leftSliderItem = createCard(shuffledData[i]);
    sliderLeft.appendChild(leftSliderItem)
  }
}
const createSliderRight = () => {
  const shuffledData = shuffle(data);
  for (let i = 0; i < shuffledData.length - 2; i++) {
    let rightSliderItem = createCard(shuffledData[i]);
    sliderRight.appendChild(rightSliderItem)
  }
}

const inputRange = document.querySelector('.volume');
console.log(inputRange.value)
const testimonialsContainer = document.querySelector('.testimonials-cards');
const mediaQuery = window.matchMedia('(max-width: 1000px)');

inputRange.addEventListener('input',changeInput);
window.onresize = changeInput
/* switch(value) {
  case '0': testimonialsContainer.style.left = '0px';
  break;
  case '1': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '2': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '3': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '4': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '5': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '6': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
  case '7': testimonialsContainer.style.left = -value*WIDTH_IN_1600 + 'px';
  break;
} */
/* if(mediaQuery.matches) {
  switch(value) {
    case '0': testimonialsContainer.style.left = '0px';
    break;
    case '1': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '2': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '3': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '4': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '5': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '6': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
    case '7': testimonialsContainer.style.left = -value*WIDTH_IN_1000 + 'px';
    break;
}
} */
function changeInput (event) {
  const value = event.target.value;
  const WIDTH_IN_1600 = 296;
  const WIDTH_IN_1000 = 320;
/*   const calc = 'calc(940px + (1160 - 940) * (100vw - 1000px) / (1600 - 1000))'; */
  switch(value) {
    case '0': testimonialsContainer.style.left = '0px';
    break;
    case '1': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '2': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '3': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '4': testimonialsContainer.style.left =`calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '5': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '6': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
    case '7': testimonialsContainer.style.left = `calc(${-value*WIDTH_IN_1000}px + (${-value*WIDTH_IN_1600} - ${-value*WIDTH_IN_1000}) * (100vw - 1000px) / (1600 - 1000))`;
    break;
  }
}

const modalPopup = document.querySelector('.modal-popup');
const feedbackCards = document.querySelectorAll('.card-content');
const closeButton =document.querySelector('.popup-close');
const modalContent = document.querySelector('.modal-content');

feedbackCards.forEach(feedback => {
  feedback.addEventListener('click', (event)=>{
    modalPopup.classList.remove('hide');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    if(event.target.closest('.card-content')){
/*     const text = event.target.querySelector('.feedback') */
  const cloneFeedback = (event.target.closest('.card-content')).cloneNode(true);
  cloneFeedback.classList.add('opened')
 // modalContent.appendChild(cloneFeedback)*/
    modalContent.append(cloneFeedback)}
    console.log(document.getElementsByTagName("body")[0])
    }
)})

closeButton.addEventListener('click', ()=>{
  console.log(modalContent.children[1])
 modalContent.removeChild(modalContent.children[1])
  modalPopup.classList.add('hide');
  document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}
  
  )

  document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('modal-popup')) {
      modalPopup.classList.add('hide');
      document.getElementsByTagName("body")[0].style.overflow = 'scroll';
      modalContent.removeChild(modalContent.children[1])
    }
  })
  window.addEventListener('load', ()=> {
    //let leftItems = sliderLeft.innerHTML;
   // sliderCenter.innerHTML = leftItems;
    sliderLeft.innerHTML = '';
    createSliderLeft();
    sliderRight.innerHTML = '';
    createSliderRight();
  })