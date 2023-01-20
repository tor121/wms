document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.lights__btn');
  const allItems = document.querySelectorAll('.lights__item');
  btn.addEventListener('click', function () {
    allItems.forEach((item) => {
      item.style.display = 'flex';
    });

    this.style.display = 'none';
  });
});
