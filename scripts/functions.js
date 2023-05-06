function closeModal(
	overlaySelector,
	exitSelector,
	activeClass,
	modalSelector,
	successSelector,
	passiveClass
) {
	const overlay = document.querySelector(overlaySelector),
		exit = document.querySelector(exitSelector),
		modalBox = document.querySelector(modalSelector),
		successBox = document.querySelector(successSelector)

	exit.addEventListener('click', () => {
		document.body.style.overflow = 'visible'
		document.body.style.paddingRight = '0px'
		overlay.classList.remove(activeClass)
		modalBox.classList.remove(passiveClass)
		successBox.classList.add(passiveClass)
	})
}

function filterEvents(slideSelector, spanSelector) {
	const slides = document.querySelectorAll(slideSelector),
		spans = document.querySelectorAll(spanSelector)

	spans.forEach((span) => {
		span.addEventListener('click', () => {
			const id = span.getAttribute('data-city-code')

			slides.forEach((slide) => {
				slide.style.display = 'none'
				if (slide.getAttribute('data-city') == id) {
					slide.style.display = 'block'
				}
			})
			if (id == 0) {
				slides.forEach((slide) => {
					slide.style.display = 'block'
				})
			}
		})
	})
}

function changeSelectMenu(selectSubMenuElement, spanSelector) {
	const span = document.querySelector(spanSelector)
	document.addEventListener('click', (e) => {
		if (e.target.classList.contains(selectSubMenuElement)) {
			span.textContent = e.target.textContent
		}
	})
}

function addLangActive(triggersSelectors, activeClass) {
	const triggers = document.querySelectorAll(triggersSelectors)
	triggers.forEach((trigger) => {
		trigger.addEventListener('click', (e) => {
			triggers.forEach((trigger) => {
				trigger.classList.remove(activeClass)
			})
			e.target.classList.add(activeClass)
		})
	})
}

function openMenu(triggerSelector, menuSelector, activeClass) {
	const trigger = document.querySelector(triggerSelector),
		menu = document.querySelector(menuSelector)

	trigger.addEventListener('click', () => {
		document.body.classList.toggle(activeClass)
		trigger.classList.toggle(activeClass)
		menu.classList.toggle(activeClass)
	})
}

function initSlickCarusel(
	caruselClass,
	slickParameters,
	responsiveParameters,
	rightButton,
	leftButton
) {
	$(caruselClass).slick({
		...slickParameters,
		responsive: responsiveParameters,
	})

	$(rightButton).click(function () {
		$(caruselClass).slick('slickNext')
	})

	$(leftButton).click(function () {
		$(caruselClass).slick('slickPrev')
	})
}

function openSelectMenu(selectSelection, subMenuSelection, activeClass) {
	const select = document.querySelector(selectSelection),
		subMenu = document.querySelector(subMenuSelection)
	select.addEventListener('click', () => {
		select.classList.toggle(activeClass)
		subMenu.classList.toggle(activeClass)
	})
}

function maskPhone(input) {
	$(input).mask('(+999)99 999 99 99')
}

function openModal(eventOpenBtn, modalSelector, exitSelector, activeClass) {
	const modal = document.querySelector(modalSelector),
		exit = document.querySelector(exitSelector)

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains(eventOpenBtn)) {
			modal.classList.add(activeClass)
			document.body.style.overflow = 'hidden'
			document.body.style.paddingRight = '17px'
		}
	})
	exit.addEventListener('click', (e) => {
		modal.classList.remove(activeClass)
		document.body.style.overflow = 'visible'
		document.body.style.paddingRight = '0px'
	})
}

function sendMail(
	formSelector,
	successSelector,
	modalSelector,
	loadingSelector,
	passiveClass
) {
	const form = document.querySelector(formSelector),
		success = document.querySelector(successSelector),
		modalBox = document.querySelector(modalSelector)
	loadingBox = document.querySelector(loadingSelector)

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		if (!checkInputs(`${formSelector} input`)) {
			alert('Please fill out all fields.')
			return
		}

		modalBox.classList.add(passiveClass)
		loadingBox.classList.remove(passiveClass)
		setTimeout(() => {
			loadingBox.classList.add(passiveClass)
			success.classList.remove(passiveClass)
		}, 3000)
	})
}

function checkInputs(inputsSelectors) {
	const inputs = document.querySelectorAll(inputsSelectors)
	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			return false
		}
	}
	return true
}


function openVideo(triggerClass, modalSelector, activeClass, exitSelector) {
	const modal = document.querySelector(modalSelector);
	const video = modal.querySelector('video');
	const exit = document.querySelector(exitSelector);
	document.addEventListener("click", (e) => {
		if(e.target.classList.contains(triggerClass)) {
			const src = e.target.getAttribute('data-src');
			video.src = src;
			modal.classList.add(activeClass);
		}
	})
	exit.addEventListener('click', () => {
		modal.classList.remove(activeClass);
	})
}


function closeMenu(linksClass, menuSelector, hamburgerSelector, activeClass) {
	const menu = document.querySelector(menuSelector),
			hamburger = document.querySelector(hamburgerSelector);
	document.addEventListener('click', (e) => {
		if(e.target.classList.contains(linksClass)) {
			menu.classList.remove(activeClass);
			hamburger.classList.remove(activeClass);
		}
	})
}

