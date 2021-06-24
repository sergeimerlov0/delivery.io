window.addEventListener('DOMContentLoaded', () => {
  //humburger
  const menu = document.querySelector('.menu__item'),
        menuItem = document.querySelectorAll('.menu__item_men'),
        hamburger = document.querySelector('.humburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('humburger_active');
      menu.classList.toggle('menu__item_active');
  });

  
});