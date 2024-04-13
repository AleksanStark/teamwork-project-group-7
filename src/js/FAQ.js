'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.faq');

  accordionItems.forEach(item => {
    const header = item.querySelector('.faq-question-container');
    const content = item.querySelector('.faq-answer-container');
    const arrowIcon = header.querySelector(
      '.faq-btn-accordion>.faq-btn-accordion>.faq-arrow-icon'
    );

    header.addEventListener('click', function () {
      item.classList.toggle('active');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrowIcon.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrowIcon.classList.add('active');
      }
    });
  });
});
