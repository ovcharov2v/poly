import Swiper, {Mousewheel} from 'swiper';

const sliderElem = document.querySelector('.gallery2__slider')

if (sliderElem) {
	const slider = new Swiper(sliderElem.querySelector('.swiper'), {
		modules: [ Mousewheel ],
		slidesPerView: 1.1,
		spaceBetween: 30,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		touchStartPreventDefault: false,
		mousewheel: {
			releaseOnEdges: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 60
			}
		}
	})

	const progressValue = sliderElem.querySelector('.gallery2__progress-value')

	slider.on('transitionStart', function () {
		progressValue.style.width = `${slider.progress * 100}%`
	})
}
