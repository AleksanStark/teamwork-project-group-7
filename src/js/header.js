const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuContainer = document.querySelector('.menu-wrapper');
const pageNavButton = document.querySelector('.page-nav-button');
const menuCloseBtn = document.querySelector('.menu-button-close');
const menuLinks = document.querySelectorAll('.menu-nav-list-item a');

function closeMobileMenu() {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    menuContainer.classList.remove('is-open');
  }
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  

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

menuCloseBtn.addEventListener('click', () => {
    closeMobileMenu();
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = link.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header-wrapper').offsetHeight,
                behavior: 'smooth'
            });
            
            closeMobileMenu();
        }
    });
});
