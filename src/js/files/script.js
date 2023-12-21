// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const showMoreBtns = document.querySelectorAll('.show-more');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    const currentBtn = event.currentTarget;
    const currentTab = currentBtn.closest('.catalog__tabs-body');
    const catalogItems = currentTab.querySelector('.catalog__items');
    const catalogItem = catalogItems.querySelectorAll('.catalog__item');

    for (let i = 2; i < catalogItem.length; i++) {
      catalogItem[i].classList.toggle('hidden-content');
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



/*  Yandex Map   */


// initMap();

// async function initMap() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   await ymaps3.ready;

//   const { YMap, YMapDefaultSchemeLayer } = ymaps3;

//   // Иницилиазируем карту
//   const map = new YMap(
//     // Передаём ссылку на HTMLElement контейнера
//     document.getElementById('map'),

//     // Передаём параметры инициализации карты
//     {
//       location: {
//         // Координаты центра карты
//         center: [37.588144, 55.733842],

//         // Уровень масштабирования
//         zoom: 100
//       }
//     }
//   );

//   // Добавляем слой для отображения схематической карты
//   map.addChild(new YMapDefaultSchemeLayer());
// }

