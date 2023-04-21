const btnElec = document.querySelector('.security__btn');
const containerElec = document.querySelector('.security');
const allItemsElec = document.querySelectorAll('.security__paragraph');
const allItemsElecVisibility = document.querySelectorAll('.security__change-visibility');

const addActiveContainerElec = () => {
  containerElec.classList.add('active');
};

const makeVision = () => {
  allItemsElecVisibility.forEach((item) => {
    item.style.display = 'block';
  });
  console.log(allItemsElec)
}

const makeHide = () => {
  allItemsElecVisibility.forEach((item) => {
    item.style.display = 'none';
  });
  btnElec.style.display = 'block';
}

btnElec.addEventListener('click', (e) => {
  e.stopPropagation();

  makeVision();
  addActiveContainerElec();
  e.currentTarget.style.display = 'none';
});

document.addEventListener('click', (e) => {
  const { target } = e;
  const isContainerElec = target == containerElec || containerElec.contains(target);
  const isActive = containerElec.classList.contains('active');

  if (!isContainerElec && isActive) {
    containerElec.classList.remove('active');
    makeHide();

  }
});

