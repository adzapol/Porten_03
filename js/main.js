(function () {
    const burger = document.querySelector('.burger');
    const line = document.querySelector('.section-header-middle-second-line');
    const logo = document.querySelector('.section-header-middle-second-line__logo');
    const nav = document.querySelector('.section-header-middle-second-line-nav');
    const menu = document.querySelector('.section-header-middle-second-line-nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        logo.classList.toggle('burger_logo');
        nav.classList.toggle('burger_nav');
        line.classList.toggle('burger_line');
        menu.classList.toggle('burger_menu');
    });
}());