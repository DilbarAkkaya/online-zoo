import data from '../data.js';
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
const sliderLeft = document.querySelector('#slider-left');
const sliderRight = document.querySelector('#slider-right');
let sliderCenter = document.querySelector('#slider-center');

const moveLeft = ()=>{
  slideContainer.classList.add('transition-left');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
};
btnPrev.addEventListener('click', moveLeft);

const moveRight = ()=>{
  slideContainer.classList.add('transition-right');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
};
btnNext.addEventListener('click', moveRight);

slideContainer.addEventListener('animationend', (event)=>{
if (event.animationName === 'move-left') {

  slideContainer.classList.remove('transition-left');
  let leftItems = sliderLeft.innerHTML;
  sliderCenter.innerHTML = leftItems;
 sliderLeft.innerHTML = '';
//createCard(randomShEl);
createSliderLeft();
} else {
  slideContainer.classList.remove('transition-right');
  let rightItems = sliderRight.innerHTML;

  sliderCenter.innerHTML = rightItems;
  console.log(sliderCenter)
  sliderRight.innerHTML = '';
  createSliderRight();
}
  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);
});

/* const getRandomEl = (arr) => {
 return arr[Math.floor(Math.random()*arr.length)];
}  */

const shuffle = (arr) => {
return arr.sort(()=>Math.random()-0.5)
}

/* const shuffledData = shuffle(data);
console.log(shuffledData) */
/* 
const randomShEl = getRandomEl(shuffledData);
console.log(randomShEl.petName */

const createCard = (randomShEl)=> {
  const card = document.createElement('figure');
  card.setAttribute('data-id', `${randomShEl.id}`);
  card.classList.add('card', 'slide');
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
                        <img src=${randomShEl.imageFood} alt="meat" class="meat">
                      </div>
                    </figcaption>`);
return card
}
const createSliderLeft = ()=>{
  const shuffledData = shuffle(data);
  for(let i=0; i<shuffledData.length-2;i++){

   // const randomShEl = getRandomEl(shuffledData);
        let leftSliderItem = createCard(shuffledData[i]);
    // leftArr.push(leftSliderItem);
    /*    if(!leftArr.includes(leftSliderItem.dataset)){
         console.log(leftSliderItem.dataset.id) */
         sliderLeft.appendChild(leftSliderItem)
  }
}
  const createSliderRight = ()=>{
    const shuffledData = shuffle(data);
    for(let i=0; i<shuffledData.length-2;i++){
  
     // const randomShEl = getRandomEl(shuffledData);
          let rightSliderItem = createCard(shuffledData[i]);
          console.log(rightSliderItem)
      // leftArr.push(leftSliderItem);
      /*    if(!leftArr.includes(leftSliderItem.dataset)){
           console.log(leftSliderItem.dataset.id) */
           sliderRight.appendChild(rightSliderItem)
    }
 // leftArr=[];

      }
/* const createCard = (data)=>{
let randomNum = Math.floor(7*Math.random());
  const card = document.createElement('figure');
  card.setAttribute('data-id', `${data[randomNum].id}`);
  card.classList.add('card', 'slide');
  card.insertAdjacentHTML('beforeend', `
  <div class="img-wrap">
                      <img src=${data[randomNum].image} alt="alligator" class="card-img">
                    </div>
                    <figcaption class="description">
                      <div class="desc-text">
                        <h5>${data[randomNum].petName}</h5>
                        <p>${data[randomNum].location}</p>
                      </div>
                      <div class="desc-icon">
                        <img src=${data[randomNum].imageFood} alt="meat" class="meat">
                      </div>
                    </figcaption>`);
return card
} */

/*     let leftSliderItem = createCard(data);
    leftArr.push(leftSliderItem);
      if(!leftArr.includes(leftSliderItem.dataset)){
        console.log(leftSliderItem.dataset.id)
        sliderLeft.appendChild(leftSliderItem)
      } */