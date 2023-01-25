window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu-btn__open');
  const menu = document.querySelector('.menu__container');

  const toggleMenu = () => {
    menu.classList.toggle('active');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    const isMenu = target == menu || menu.contains(target);
    const isHamburger = target == hamburger;
    const isActive = menu.classList.contains('active');

    if (!isMenu && !isHamburger && isActive) {
      toggleMenu();
    }
  });
});
