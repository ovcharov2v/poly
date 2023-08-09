import Swiper from "swiper";

const apartmentSliderWrapper = document.querySelector('.plan-slider')
const apartmentSlider = document.querySelector('.plan-slider__elem')

if (apartmentSlider) {
	const slider = new Swiper(apartmentSlider, {
		slidesPerView: 1,
		spaceBetween: 0,
		grabCursor: true,
	})

	slider.on('transitionStart', function() {
		const activeButton = apartmentSliderWrapper.querySelector('.plan-slider__nav-btn--current')
		activeButton.classList.remove('plan-slider__nav-btn--current')
		const newsButton = apartmentSliderWrapper.querySelector(`.plan-slider__nav-btn[data-slide="${parseInt(slider.realIndex)+1}"]`)
		newsButton.classList.add('plan-slider__nav-btn--current')
	});

	const buttonList = apartmentSliderWrapper.querySelectorAll('.plan-slider__nav-btn')
	buttonList.forEach((button) => {
		button.addEventListener('click', () => {
			if (!button.classList.contains('plan-slider__nav-btn--current')) {
				slider.slideTo(parseInt(button.dataset.slide) - 1)
				const activeButton = apartmentSliderWrapper.querySelector('.plan-slider__nav-btn--current')
				activeButton.classList.remove('plan-slider__nav-btn--current')
				button.classList.add('plan-slider__nav-btn--current')
			}
		})
	})
}
