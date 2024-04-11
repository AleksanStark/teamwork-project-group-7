import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const slider = function (_class) {
  const swiper = new Swiper(_class, {
    slidesPerView: 2,
    spaceBetween: 30,
    // Enable navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
