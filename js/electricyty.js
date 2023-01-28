const btnElec = document.querySelector('.electriity__btn');
const containerElec = document.querySelector('.electricity');
const allItemsElec = document.querySelectorAll('.electricity__paragraph');

const toggleContainerElec = () => {
  containerElec.classList.toggle('active');
};

const makeVision = () => {
  allItemsElec.forEach((item) => {
    item.style.display = 'block';
  });
}

btnElec.addEventListener('click', (e) => {
  e.stopPropagation();

  makeVision();
  toggleContainerElec();
  e.currentTarget.style.display = 'none';
});

document.addEventListener('click', (e) => {
  const { target } = e;
  const isContainerElec = target == containerElec || containerElec.contains(target);
  const isBtnElec = target == btnElec;
  const isActive = containerElec.classList.contains('active');

  if (!isContainerElec && !isBtnElec && isActive) {
    toggleContainerElec();
  }
});

