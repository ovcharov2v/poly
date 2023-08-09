import Swiper, { Pagination } from 'swiper';

const simpleSliderList = document.querySelectorAll('.simple-slider')
if(simpleSliderList.length) {
	simpleSliderList.forEach((simpleSlider)=>{
		const slider = new Swiper(simpleSlider.querySelector('.swiper'), {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 0,
			touchStartPreventDefault: false,
			pagination: {
				el: simpleSlider.querySelector('.simple-slider__pagination'),
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return (number);
				},
				formatFractionTotal: function (number) {
					return (number);
				},
				renderFraction: function (currentClass, totalClass) {
					return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
				}
			}
		})

		slider.on('transitionStart', function() {
			const progressValue = simpleSlider.querySelector('.simple-slider__progress-value')
			progressValue.style.width = `${slider.progress*100}%`
		})
	})
}
