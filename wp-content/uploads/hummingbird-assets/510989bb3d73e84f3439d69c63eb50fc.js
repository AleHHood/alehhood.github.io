/**handles:electrikam-scripts**/
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.menu-item'),
    btn = document.querySelector('.header__button'),
    hamburger = document.querySelector('.header__hamburger')
    const searchform = document.querySelector('.search__form-desctop'),
    btnSearch = document.querySelector('.header__search'),
    social = document.querySelector('.header__social');

    btn.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('nav_active');
    });

    btnSearch.addEventListener('click', () => {
        btnSearch.classList.toggle('header__search-nonactive');
        searchform.classList.toggle('search__form-desctop-active');
        social.classList.toggle('header__social-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('nav_active');
        })
    })
})