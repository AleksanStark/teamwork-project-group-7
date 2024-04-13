import { fetchReviews } from './api.js';
import Izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const mySwiper = document.querySelector('.mySwiper');

const reviewGallery = async () => {
  try {
    const reviews = await fetchReviews();
    const reviewObject = reviews.map(({ avatar_url, author, review }) => ({
      avatar_url,
      author,
      review,
    }));

    const container = document.querySelector('.swiper-wrapper');

    const markup = reviewObject
      .map(({ _id, author, avatar_url, review }) => {
        return `<div class="swiper-slide card">
    <img
    loading="lazy"
      class="card-image"
      src="${avatar_url}"
      alt="${author}" 
    />
    <h4 class="card-author">${author}</h4>
    <p class="card-review">${review}</p>
</div>`;
      })
      .join('');

    container.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    Izitoast.error({
      title: 'Error',
      message: 'Not found',
      position: 'topRight',
    });
    return;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  reviewGallery();
  const swiper = new Swiper('.swiper', {
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
      init: function () {
        checkSwiperleftButtonState(this);
        checkSwiperRightButtonState(this);
      },
      slideChange: function () {
        checkSwiperleftButtonState(this);
        checkSwiperRightButtonState(this);
      },
    },

    mousewheel: true,
    keyboard: true,
  });
  function checkSwiperleftButtonState(swiperInstance) {
    if (swiperInstance.activeIndex === 0) {
      swiperArrowLeft.setAttribute('src', 'img/arrow-left-disabled.svg');
    } else {
      swiperArrowLeft.setAttribute('src', 'img/arrow-left.svg');
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
});
