import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const slider = function (_class, slidePerView = 1) {
  const swiper = new Swiper(_class, {
    slidesPerView: slidePerView,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 16,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });
};
