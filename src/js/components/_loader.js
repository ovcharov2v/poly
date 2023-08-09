const loader = document.querySelector('.loader')

setTimeout(() => {
	loader.classList.add('loader--hide')

	setTimeout(() => {
		const evt = new Event('loader-complete')
		document.dispatchEvent(evt)
	}, 100)

	setTimeout(() => {
		loader.classList.add('loader--hidden')
	}, 900)

}, 1000)


