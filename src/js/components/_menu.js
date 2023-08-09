const menuBtnList = document.querySelectorAll('.js-show-menu')
const menu = document.querySelector('.menu')

menuBtnList.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (document.body.classList.contains('left-menu-show')) {
			document.body.classList.remove('left-menu-show')
			document.body.style.overflow = ''
			setTimeout(() => {
				menu.classList.remove('menu--animate')
			}, 300)
		} else {
			document.body.classList.add('left-menu-show')
			document.body.style.overflow = 'hidden'
			document.querySelector('.menu').classList.add('menu--active')
			setTimeout(() => {
				menu.classList.add('menu--animate')
			}, 300)
		}
	})
})

const menuLinks = document.querySelectorAll('.menu__nav-link')
const digitBox = document.querySelector('.menu__counter-digit-list')
const digitList = document.querySelectorAll('.menu__counter-digit')
menuLinks.forEach((link) => {
	link.addEventListener("mouseenter", () => {
		digitBox.style.transform = `translateY(-${100 * (parseInt(link.dataset.digit) / digitList.length)}%)`
	})
	link.addEventListener("mouseleave", () => {
		digitBox.style.transform = "translateY(0)"
	})
})

