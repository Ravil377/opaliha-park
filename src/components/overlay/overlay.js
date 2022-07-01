const body = document.body

export function overlayToggle() {
	const overlay = document.querySelector('.overlay')
	if (overlay) {
		overlay.remove();
		body.classList.remove('is-animate', 'is-active');
	} else {
		const overlay = document.createElement('div')
		overlay.setAttribute('data-backdrop', 'overlay')
		overlay.classList.add('overlay')
		body.classList.add('is-active')
		setTimeout(() => body.classList.add('is-animate'), 100)
		body.appendChild(overlay)
	}	
}