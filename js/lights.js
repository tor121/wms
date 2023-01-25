document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.lights__container');
  const btn = document.querySelector('.lights__btn');
  const allItems = document.querySelectorAll('.lights__item');
  btn.addEventListener('click', function () {
    allItems.forEach((item) => {
      item.style.display = 'flex';
    });
    this.style.display = 'none';
    container.style.paddingBottom = '70px';
  });

  const btnElec = document.querySelector('.electriity__btn');
  const allItemsElec = document.querySelectorAll('.electricity__paragraph');
  btnElec.addEventListener('click', function () {
    allItemsElec.forEach((item) => {
      item.style.display = 'block';
    });
    this.style.display = 'none';
  });

  const containerGar = document.querySelector('.garden__container');
  const btnGar = document.querySelector('.garden__btn');
  const allItemsGar = document.querySelectorAll('.garden__item');
  btnGar.addEventListener('click', function () {
    allItemsGar.forEach((item) => {
      item.style.display = 'flex';
    });
    containerGar.style.paddingBottom = '70px';
    this.style.display = 'none';
  });
});
