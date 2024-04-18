import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const ToSeeButton = document.querySelector('.projects-list-button');

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
ToSeeButton.addEventListener('click', event => {
  event.preventDefault();
  const ButtonToSeeProject = document.querySelector('.projects-list-link');
  const targetId = ButtonToSeeProject.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top:
        targetElement.offsetTop -
        document.querySelector('.projects-list-box-info').offsetHeight,
      behavior: 'smooth',
    });
  }
});
