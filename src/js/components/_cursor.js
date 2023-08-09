let cursor = null

const lastMouseCoords = {
	x: 0,
	y: 0
}

const lastScrollCoords = {
	x: 0,
	y: 0
}

document.addEventListener('mousemove', e => {
	const area = e.target.closest('[data-cursor]')
	if (area) {
		const newCursor = document.querySelector(`.cursor--${area.dataset.cursor}`)
		if (cursor && cursor !== newCursor) {
			cursor.classList.remove('cursor--active')
		}
		cursor = newCursor
		cursor.classList.add('cursor--active')
		updateCursorPosition(e.pageX, e.pageY)
	} else {
		if (cursor) {
			cursor.classList.remove('cursor--active')
			cursor = null
		}
	}
})

window.addEventListener('scroll', (e) => {
	const top  = window.scrollY || document.documentElement.scrollTop
	const left = window.scrollX || document.documentElement.scrollLeft
	const deltaY = top - lastScrollCoords.y
	const deltaX = left - lastScrollCoords.x
	lastScrollCoords.y = top
	lastScrollCoords.x = left
	updateCursorPosition(lastMouseCoords.x+deltaX, lastMouseCoords.y + deltaY)

})

document.addEventListener('mouseleave', () => {
	if (cursor) {
		cursor.classList.remove('cursor--active')
		cursor = null
	}
})

const updateCursorPosition = (x, y) => {
	if(cursor) {
		lastMouseCoords.x = x
		lastMouseCoords.y = y
		cursor.style.left = x + 'px'
		cursor.style.top = y + 'px'
	}
}
