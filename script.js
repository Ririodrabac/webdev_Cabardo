document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-icon');
    const closeButton = document.querySelector('.close-icon');
    const mobileMenu = document.getElementById('mobile-menu-container');
    const navLinks = document.querySelectorAll('#nav-links a');

    const openMenu = () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (menuButton) {
        menuButton.addEventListener('click', openMenu);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
