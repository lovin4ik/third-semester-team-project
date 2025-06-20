const backdrop = document.querySelectorAll('[data-modal]')
const btnOpen = document.querySelectorAll('[data-modal-open]')
const btnClose = document.querySelectorAll('[data-modal-close]')

export function openModal(data) {
	backdrop.forEach(el => {
		if (data == el.dataset.modal) {
			el.classList.remove('is-hidden')
			document.body.classList.add('no-scroll')
		}
	})
}
export function closeModal(data) {
	backdrop.forEach(el => {
		if (data == el.dataset.modal) {
			el.classList.add('is-hidden')
			document.body.classList.remove('no-scroll')
		}
	})
}

btnOpen.forEach(btn => {
	btn.addEventListener('click', e => {
		const currentBtn = e.currentTarget
		openModal(currentBtn.dataset.modalOpen)
	})
})

btnClose.forEach(btn => {
	btn.addEventListener('click', e => {
		const currentBtn = e.currentTarget
		closeModal(currentBtn.dataset.modalClose)
	})
})

backdrop.forEach(el => {
	el.addEventListener('click', e => {
		if (e.target === el) {
			closeModal(el.dataset.modal)
		}
	})
})

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		let currentModal
		backdrop.forEach(el => {
			if (!el.className.includes('is-hidden')) {
				currentModal = el.dataset.modal
			}
		})

		closeModal(currentModal)
	}
})

const form = document.getElementById('emailForm')

form.addEventListener('submit', function (event) {
	if (
		document.activeElement.tagName == 'INPUT' ||
		document.activeElement.tagName == 'TEXTAREA'
	) {
		return
	}

	event.preventDefault()

	if (form.checkValidity()) {
		openModal('footer')
	} else {
		form.reportValidity()
	}
})
