// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Обозначаем все каталоги
const cardItems = document.querySelectorAll('._catalog-items');

// Перебираем все каталоги
for (const cardItem of cardItems) {
  // Если дочерних элементов меньше трех
  if (cardItem.children.length <= 3) {
    // То родителю элемента присвоим класс, для того чтобы потом по классу отключить кнопку в этом блоке
    cardItem.parentNode.classList.add('hide');
  }
}

// Обозначаем все каталоги кожухов
const cardItemsCases = document.querySelectorAll('._catalog-items-cases');
for (const cardItem of cardItemsCases) {
  // Если дочерних элементов меньше трех
  if (cardItem.children.length <= 6) {
    // То родителю элемента присвоим класс, для того чтобы потом по классу отключить кнопку в этом блоке
    cardItem.parentNode.classList.add('hide');
  }
}

const showMoreBtns = document.querySelectorAll('.show-more');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    const currentBtn = event.currentTarget;
    const currentTab = currentBtn.closest('._catalog-body');
    const catalogItems = currentTab.querySelector('._catalog-items');
    const catalogItem = catalogItems.querySelectorAll('._catalog-item');

    const catalogItemCase = catalogItems.querySelectorAll('._catalog-item-case');

    for (let i = 2; i < catalogItem.length; i++) {
      catalogItem[i].classList.toggle('hidden-content');
      // currentBtn.classList.add('hidden-content');
    }
    currentTab.classList.toggle('show');
  })
})

// Активный класс тобам

const itemsTab = document.querySelectorAll('.catalog__label');
itemsTab[0].classList.add('_tab-active');

// Функционал квиза

const quiz = document.querySelector('.quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
// const quizItemsNot = quiz.querySelectorAll('.fieldset');
const btnsNext = quiz.querySelectorAll('.button_next');
const btnsPrev = quiz.querySelectorAll('.button_back');

const inputsCheckedFinish = quiz.querySelectorAll('.checkbox-real__input');
const inputsBtnFinish = quiz.querySelectorAll('.quiz-form__button_finish');


// const checkbox1 = document.getElementById('accept1');
// const btn_submit = document.getElementById('quiz-submit1');


// btn_submit.disabled = false;
// checkbox1.addEventListener("change", () => {
//   if (checkbox1.checked) {
//     btn_submit.disabled = false;
//   } else {
//     btn_submit.disabled = true;
//   }
// });

let count = 0;
quizItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    initQuiz();
  });
  btn.disabled = true;
});

btnsPrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    initQuiz();
  });
});

function initQuiz() {
  quizItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === count) {
      element.classList.add('_active')
    }
  })
}

quizItems.forEach((quizItem, quizItemIndex) => {

  quizItem.addEventListener('change', (e) => {
    const target = e.target;
    const inputsChecked = quizItem.querySelectorAll('input:checked');

    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizItemIndex].disabled = false;
      inputsBtnFinish.disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;
    }
  })
});

const quizSubmit = document.getElementById('quiz-submit');

const element = document.querySelector('.quiz-form__fieldset_start');

quizSubmit.addEventListener('click', () => {
  // element.classList.add('_active');
  // location = 'https://alemx.com/#thanks';
  // location = 'http://192.168.0.101:8080/#thanks-popup';
  document.location.reload();

  setTimeout(() => {
    location = 'http://192.168.0.101:8080/#thanks-popup';


  }, 2000);
});


// При увечичении кол-ва товара увеличить цену

// const dataValue = document.querySelectorAll('[data-quantity-value]');
// const price = document.querySelectorAll('.item-catalog-name');

// console.log(dataValue);

// dataValue.forEach(inp => {
//   // inp.addEventListener('change', event => {


//   inp.addEventListener('change', event => {
//     const currentInp = event.currentTarget;
//     price.innerHTML = inp.value * 2;
//     console.log(currentInp);
//   });
// })


// Yandex карты

ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [55.825087, 37.588171],
    zoom: 18
  });

  var myPlacemark = new ymaps.Placemark(

    [55.825087, 37.588171],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/map/location-pin.svg',
      iconImageSize: [59, 78],
      iconImageOffset: [-30, -78]
    });


  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип

  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(myPlacemark);
}


// Присвоим попапам и линкам на них порядковые номера

const objPopupGensLink = document.querySelectorAll('.item-catalog__button');
const objPopupGens = document.querySelectorAll('.catalog-popup');

const objPopupCasesLinkMob = document.querySelectorAll('.item-catalog-cases__button_mobile');
const objPopupCasesLinkDesk = document.querySelectorAll('.item-catalog-cases__button_desk');
const objPopupCases = document.querySelectorAll('.order-popup');

const objPopupVideoLink = document.querySelectorAll('.our-works__button');
const objPopupVideo = document.querySelectorAll('.video-popup');


objPopupGensLink.forEach((element, i) =>
  element.setAttribute('data-popup', '#catalog-popup' + '-' + i));

for (var i = 0, b; b = document.getElementById('catalog-popup'); ++i) {
  b.id += '-' + i;
}

objPopupCasesLinkMob.forEach((element, i) =>
  element.setAttribute('data-popup', '#order-popup' + '-' + i));

objPopupCasesLinkDesk.forEach((element, i) =>
  element.setAttribute('data-popup', '#order-popup' + '-' + i));

for (var i = 0, b; b = document.getElementById('order-popup'); ++i) {
  b.id += '-' + i;
}

objPopupVideoLink.forEach((element, i) =>
  element.setAttribute('data-popup', '#video-popup' + '-' + i));

for (var i = 0, b; b = document.getElementById('video-popup'); ++i) {
  b.id += '-' + i;
}



