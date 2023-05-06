function slickCaruseFunctionsActivate() {
   initSlickCarusel(
		'.events__carusel',
		{
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
		},
		[
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
		'.events__slider__right',
		'events__slider__left'
	)

	initSlickCarusel(
		'.photos__carusel',
		{
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
		},
		[
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		'.photos__carusel__right',
		'photos__carusel__left'
	)

	initSlickCarusel(
		'.videos__carusel',
		{
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
		},
		[
			{
				breakpoint: 1110,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
		'.videos__carusel__right',
		'videos__carusel__left'
	)

	initSlickCarusel(
		'.partners__carusel',
		{
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
		},
		[
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
		'.partners__carusel__right',
		'partners__carusel__left'
	)
}