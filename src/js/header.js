const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuContainer = document.querySelector('.menu-wrapper');
const pageNavButton = document.querySelector('.page-nav-button');


pageNavButton.addEventListener('click', () => {
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    menuContainer.classList.toggle('is-open');
});

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    menuContainer.classList.toggle('is-open');
});

const menuCloseBtn = document.querySelector('.menu-button-close');
menuCloseBtn.addEventListener('click', () => {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    menuContainer.classList.remove('is-open');
});

const menuLinks = document.querySelectorAll('.menu-nav-list-item a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        menuContainer.classList.remove('is-open');
    });
});