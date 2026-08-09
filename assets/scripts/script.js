const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() { 
    if(!showMenu){
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'))


        showMenu = true;
    } else {
      
        closeMenu();

    }
 }


 function closeMenu() { 
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'))

    showMenu = false;
  }

  navItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && showMenu) {
        closeMenu();
    }
});
