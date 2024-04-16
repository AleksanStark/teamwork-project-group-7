import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectsSwiper = new Swiper('.projects-swiper', {
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 0,
  cssMode: true,
  navigation: {
    nextEl: '.projects-swiper-button-right',
    prevEl: '.projects-swiper-button-left',
  },

  mousewheel: true,
  keyboard: true,
});
