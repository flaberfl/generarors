// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// При нажатии на "Показать еще", появляются все card
const btn = document.querySelector('.show-more');
const cards = Array.from(document.querySelectorAll('.item-catalog-more'));


window.addEventListener('resize', event => {
  if (event.target.window.innerWidth > 992) response1();
  if (event.target.window.innerWidth <= 992 && event.target.window.innerWidth > 680) response2();
  if (event.target.window.innerWidth <= 680) response3();
})

function openCatalog() {
  btn.addEventListener('click', () => {
    cards.forEach(item => item.classList.remove('hidden-content'));
    btn.classList.add('hidden-content');
  })
}

function response1() {
  if (window.innerWidth > 992) {

    cards.forEach((item, index) => {
      item.classList.add('hidden-content')
      if (index <= 2) {
        item.classList.remove('hidden-content')
      } else if (index > 2) {
        btn.classList.remove('hidden-content');
      }
      openCatalog()
    })
  }
}
response1()


function response2() {
  if (window.innerWidth <= 992 && window.innerWidth > 680) {

    cards.forEach((item, index) => {
      item.classList.add('hidden-content')
      if (index <= 3) {
        item.classList.remove('hidden-content')
      } else if (index > 3) {
        btn.classList.remove('hidden-content');
      }
      openCatalog()
    })
  }
}
response2()


function response3() {
  if (window.innerWidth <= 680) {

    cards.forEach((item, index) => {
      item.classList.add('hidden-content')
      if (index <= 2) {
        item.classList.remove('hidden-content')
      } else if (index > 2) {
        btn.classList.remove('hidden-content');
      }
      openCatalog()
    })
  }
}
response3()



// Функционал квиза

const quiz = document.querySelector('.quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.button_next');

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
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;
    }
  })
});
