import data from '../data.js';
const burgerMenu = document.querySelector('.hamburger-menu');
const list = document.querySelector('.header .list');
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
