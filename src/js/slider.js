import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiperArrowLeft = document.querySelector('.swiper-arrow-left');
const swiperArrowRight = document.querySelector('.swiper-arrow-right');
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
    on: {
      slideChange: function () {
        checkSwiperleftButtonState(this);
        checkSwiperRightButtonState(this);
      },
    },
    mousewheel: true,
    keyboard: true,
  });
  checkSwiperleftButtonState(swiper);
  checkSwiperRightButtonState(swiper);
};
function checkSwiperleftButtonState(swiperInstance) {
  if (swiperInstance.activeIndex === 0) {
    swiperArrowLeft.setAttribute('src', 'img/arrow-left-disabled.svg');
  } else {
    swiperArrowLeft.setAttribute('src', 'img/arrow-left.png');
  }
}

function checkSwiperRightButtonState(swiperInstance) {
  const slidesLength = swiperInstance.slides.length;
  if (swiperInstance.activeIndex === slidesLength - 1) {
    swiperArrowRight.setAttribute('src', 'img/arrow-right-disabled.svg');
  } else {
    swiperArrowRight.setAttribute('src', 'img/arrow-right.svg');
  }
}
