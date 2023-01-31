document.addEventListener('DOMContentLoaded', () => {
  function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
      containerGar.style.paddingBottom = '0px';
      container.style.paddingBottom = '1px';
    } else {
      containerGar.style.paddingBottom = '70px';
    }
  }
  const x = window.matchMedia("(max-width: 768px)")

  const container = document.querySelector('.lights__container');
  const btn = document.querySelector('.lights__btn');
  const allItems = document.querySelectorAll('.lights__item');
  btn.addEventListener('click', function () {
    allItems.forEach((item) => {
      item.style.display = 'flex';
    });
    this.style.display = 'none';
    myFunction(x);
    // container.style.paddingBottom = '70px';
  });

  const containerGar = document.querySelector('.garden__container');
  const btnGar = document.querySelector('.garden__btn');
  const allItemsGar = document.querySelectorAll('.garden__item');
  btnGar.addEventListener('click', function () {
    allItemsGar.forEach((item) => {
      item.style.display = 'flex';
    });
    // containerGar.style.paddingBottom = '70px';
    this.style.display = 'none';
  });
});

const btnHeat = document.querySelector('.heat__btn');
const allItemsHeat = document.querySelectorAll('.heat__paragraph');
btnHeat.addEventListener('click', function () {
  allItemsHeat.forEach((item) => {
    item.style.display = 'block';
  });
  this.style.display = 'none';
});

const btnEl = document.querySelector('.electriity__btn');
const allItemsEl = document.querySelectorAll('.electricity__paragraph');
btnEl.addEventListener('click', function () {
  allItemsEl.forEach((item) => {
    item.style.display = 'block';
  });
  this.style.display = 'none';
});
