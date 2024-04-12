import { fetchReviews } from './api.js';
import { slider } from './slider.js';

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
    console.log(error);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  reviewGallery();
  slider('.swiper');
});
