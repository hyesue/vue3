import type {SwiperOptions} from 'swiper';

export const defaultSwiperOptions: SwiperOptions = {
	noSwipingClass: 'stds-carousel-no-swiping',
	containerModifierClass: 'stds-carousel-container-',
	slideClass: 'stds-carousel-slide',
	slideActiveClass: 'stds-carousel-slide-active',
	slideDuplicateActiveClass: 'stds-carousel-slide-duplicate-active',
	slideVisibleClass: 'stds-carousel-slide-visible',
	slideDuplicateClass: 'stds-carousel-slide-duplicate',
	slideNextClass: 'stds-carousel-slide-next',
	slideDuplicateNextClass: 'stds-carousel-slide-duplicate-next',
	slidePrevClass: 'stds-carousel-slide-prev',
	slideDuplicatePrevClass: 'stds-carousel-slide-duplicate-prev',
	wrapperClass: 'stds-carousel-wrapper',
	navigation: {
		prevEl: '.stds-carousel-button-prev',
		nextEl: '.stds-carousel-button-next',
		disabledClass: 'stds-carousel-button-disabled',
		hiddenClass: 'stds-carousel-button-hidden',
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		lockClass: 'stds-carousel-button-lock',
	},
	pagination: {
		el: '.stds-carousel-pagination',
		bulletClass: 'stds-carousel-pagination-bullet',
		bulletActiveClass: 'stds-carousel-pagination-bullet-active',
		modifierClass: 'stds-carousel-pagination-',
		currentClass: 'stds-carousel-pagination-current',
		totalClass: 'stds-carousel-pagination-total',
		hiddenClass: 'stds-carousel-pagination-hidden',
		progressbarFillClass: 'stds-carousel-pagination-progressbar-fill',
		clickableClass: 'stds-carousel-pagination-clickable',
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		lockClass: 'stds-carousel-pagination-lock',
		clickable: true,
	},
	// lazy: {
	// 	elementClass: 'stds-carousel-lazy',
	// 	loadingClass: 'stds-carousel-lazy-loading',
	// 	loadedClass: 'stds-carousel-lazy-loaded',
	// 	preloaderClass: 'stds-carousel-lazy-preloader',
	// },
	// thumbs: {
	// 	slideThumbActiveClass: 'stds-carousel-slide-thumb-active',
	// 	thumbsContainerClass: 'stds-carousel-container-thumbs',
	// },
	// zoom: {
	// 	containerClass: 'stds-carousel-zoom-container',
	// 	zoomedSlideClass: 'stds-carousel-slide-zoomed',
	// },
	// a11y: {
	// 	notificationClass: 'stds-carousel-notification',
	// },
};
