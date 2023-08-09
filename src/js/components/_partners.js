import Swiper from 'swiper'

let partnersSlider

const initPartnersSlider = () => {
	const slider = document.querySelector('.partners__slider')
	if (!slider) return

	const width = window.innerWidth

	if (width >= 768) {
		if (partnersSlider) {
			partnersSlider.destroy(true, true)
			partnersSlider = undefined
		}
	} else {
		if (!partnersSlider) {
			partnersSlider = new Swiper(slider, {
				slidesPerView: 1.5,
				spaceBetween: 36,
			})
		}
	}
}

initPartnersSlider()

window.addEventListener('resize', initPartnersSlider)
