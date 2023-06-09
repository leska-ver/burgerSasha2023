//Проверка ошибок console.log() 

document.addEventListener('DOMContentLoaded', () => {

  /*Клик БУРГЕР-Саши*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click',  function() {
    burger.classList.add('open');

    menu.classList.toggle('is-active');
    
    if (menu.classList.contains('is-active')) {
     menu.style.transition = 'transform .7s ease-in-out';
   }
  });
  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('is-active')) {
        menu.style.transition = '';
        burger.classList.remove('open');
   }
  });
 
 

});