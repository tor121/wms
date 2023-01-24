document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.lights__btn');
  const allItems = document.querySelectorAll('.lights__item');
  btn.addEventListener('click', function () {
    allItems.forEach((item) => {
      item.style.display = 'flex';
    });

    this.style.display = 'none';
  });

  const btnElec = document.querySelector('.electriity__btn');
  const allItemsElec = document.querySelectorAll('.electricity__paragraph');
  btnElec.addEventListener('click', function () {
    allItemsElec.forEach((item) => {
      item.style.display = 'block';
    });

    this.style.display = 'none';
  });
});
