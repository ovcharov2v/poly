import Swiper, {Mousewheel} from 'swiper';

const sliderElem = document.querySelector('.gallery1__slider')
if (sliderElem) {
	const markEvenSlides = () => {
		const evenSlides = sliderElem.querySelectorAll('.gallery1__slide--even')
		if (evenSlides.length) evenSlides.forEach((slide) => {
			slide.classList.remove('gallery1__slide--even')
		})
		const visibleSlides = sliderElem.querySelectorAll('.swiper-slide-visible')
		visibleSlides.forEach((slide, index) => {
			if (index % 2 === 1) {
				slide.classList.add('gallery1__slide--even')
			}
		})
	}

	const slider = new Swiper(sliderElem.querySelector('.swiper'), {
		modules: [ Mousewheel ],
		slidesPerView: 4,
		spaceBetween: 20,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		touchStartPreventDefault: false,
		mousewheel: {
			releaseOnEdges: true,
		},
		on: {
			init: function () {
				markEvenSlides()
			},
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1300: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
	})

	const progressValue = sliderElem.querySelector('.gallery1__progress-value')
	slider.on('transitionStart', function () {
		markEvenSlides()
		progressValue.style.width = `${slider.progress * 100}%`
	})

	slider.on('sliderMove', function () {
		markEvenSlides()
	})
}
