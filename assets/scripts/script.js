const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
    navItems.forEach(item => item.classList.toggle('open'))
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        navItems.forEach(item=> item.classList.remove('open'));
    });

});


// Download PDF

const printBtn = document.querySelector("#print-cv");

printBtn.addEventListener("click", () => {
    window.print();
})