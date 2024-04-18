import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

window.onload = () => {
  document.querySelector('.about-me-container').classList.remove('is-hidden');
  document.querySelector('.about-me-icon').classList.add('is-open');
};
// ---------------- accordion ----------

document
  .querySelector('.about-wrapper')
  .addEventListener('click', onClickFirst);

document
  .querySelector('.role-wrapper')
  .addEventListener('click', onClickSecond);

document
  .querySelector('.education-wrapper')
  .addEventListener('click', onClickThird);

function onClickFirst() {
  const isContentHidden = document
    .querySelector('.ac-content-first')
    .classList.contains('is-hidden');

  if (isContentHidden) {
    document.querySelector('.ac-content-first').classList.remove('is-hidden');
    document.querySelector('.about-me-icon').classList.add('is-open');
  } else {
    document.querySelector('.ac-content-first').classList.add('is-hidden');
    document.querySelector('.about-me-icon').classList.remove('is-open');
  }
}

function onClickSecond() {
  const isContentHidden = document
    .querySelector('.ac-content-second')
    .classList.contains('is-hidden');

  if (isContentHidden) {
    document.querySelector('.ac-content-second').classList.remove('is-hidden');
    document.querySelector('.role-icon').classList.add('is-open');
  } else {
    document.querySelector('.ac-content-second').classList.add('is-hidden');
    document.querySelector('.role-icon').classList.remove('is-open');
  }
}

function onClickThird() {
  const isContentHidden = document
    .querySelector('.ac-content-third')
    .classList.contains('is-hidden');

  if (isContentHidden) {
    document.querySelector('.ac-content-third').classList.remove('is-hidden');
    document.querySelector('.education-icon').classList.add('is-open');
  } else {
    document.querySelector('.ac-content-third').classList.add('is-hidden');
    document.querySelector('.education-icon').classList.remove('is-open');
  }
}

// ------------------ swiper ---------------

const about_swiper = new Swiper('.my-swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,
  slideActiveClass: 'swiper-slide-active-about',
  navigation: {
    nextEl: '.swiper-button',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
about_swiper.controller = about_swiper;
