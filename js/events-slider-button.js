document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector('.lights__btn');
  let allItems = document.querySelectorAll('.lights__item');
  const slider = document.querySelector('.lights__swiper');
  btn.addEventListener('click', function() {
    allItems.forEach( function(item) {
      item.style.display = "flex";
    })

    this.style.display = "none";
  })  

  let mySwiper;

	function mobileSlider() {
		if ((window.innerWidth <= 725) && (slider.dataset.mobile == 'false')) {
			mySwiper = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 10,
    		loop: true,
				slideClass: 'lights__item',
				pagination: {
					el: '.lights__swiper-pagination',
					clickable: true,
				},
			});

			slider.dataset.mobile = 'true';
		}

		if (window.innerWidth > 725 && slider.dataset.mobile == 'true') {
			slider.dataset.mobile = 'false';
			if (slider.classList.contains('swiper-container-initialized')) {
				mySwiper.destroy();
			}
		}
}

	mobileSlider();

	window.addEventListener('resize', () => {
		mobileSlider();
	});

})