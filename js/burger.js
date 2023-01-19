window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-btn__open').addEventListener('click', () => {
    document.querySelector('.menu__container').classList.add('active');
  });
  document.querySelector('.menu-btn__close').addEventListener('click', () => {
    document.querySelector('.menu__container').classList.remove('active');
  });
});
