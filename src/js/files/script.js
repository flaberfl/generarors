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

