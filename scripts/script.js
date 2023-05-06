document.addEventListener('DOMContentLoaded', () => {
	
	addLangActive('.lang', 'active')
	addLangActive('.navbar__menu__language .lang', 'active')
	openMenu('.hamburger', '.navbar__menu', 'active')
	openSelectMenu(
		'.evenets__top__filter',
		'.evenets__top__filter .evenets__top__filter__sub',
		'active'
	)
	changeSelectMenu(
		'evenets__top__filter__sub__element',
		'.evenets__top__filter>span'
	)
	filterEvents('.events__slide', '.evenets__top__filter__sub__element')
	openModal(
		'events__slide__button',
		'.modal__overlay',
		'.modal__box__exit',
		'active'
	)
	sendMail(
		'.modal__box form',
		'.success__box',
		'.modal__box',
		'.loading__box',
		'passive'
	)
	closeModal(
		'.modal__overlay',
		'.success__box__exit',
		'active',
		'.modal__box',
		'.success__box',
		'passive'
	)
	maskPhone('#phoneModal')
	maskPhone('#phoneContact')

	slickCaruseFunctionsActivate()
	openVideo('video__slider__overlay__link', '.video__overlay', 'active', '.video__box__exit')
	closeMenu('navbar__menu__link', '.navbar__menu', '.hamburger', 'active');
})


