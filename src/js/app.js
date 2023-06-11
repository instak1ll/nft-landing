import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel,
} from 'swiper';
import AOS from 'aos';

import burger from './modules/burger.js';

flsFunctions.isWebp();

const swiper = () => {
	new Swiper('.auctions-slider', {
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

const swiper2 = () => {
	new Swiper('.popular-slider', {
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 2.5,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 2.5
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

const swiper3 = () => {
	new Swiper('.categories-slider', {
		navigation: {
			nextEl: '.swiper-button-next3',
			prevEl: '.swiper-button-prev3'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

function detectDevice() {
	if (window.innerWidth < 600) {
		for (let i = 0; i <= 2; i++) {
			document.querySelectorAll('.auctions-slide')[i].style.display = 'block';
			document.querySelectorAll('.popular-slide')[i].style.display = 'block';
			document.querySelectorAll('.categories-slide')[i].style.display = 'block';
		}
	} else {
		swiper();
		swiper2();
		swiper3();
	}
}

detectDevice();

AOS.init({
	disable: false,
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,
	offset: 120,
	delay: 0,
	duration: 400,
	easing: 'ease',
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom',
});