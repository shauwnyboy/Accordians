'use strict';

// Acordian IIFE
(function () {

  let arrows = document.querySelectorAll('.icon');
  arrows.forEach((arrow) => {
    arrow.addEventListener('click', function () {
      if (arrow.parentElement.classList.contains('open')) {
        arrow.parentElement.classList.remove('open');
      } else if (!arrow.parentElement.classList.contains('open')) {
        arrow.parentElement.classList.add('open');
      }

      if (!arrow.classList.contains('rotate')) {
        arrow.classList.add('rotate');
      } else if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate');
      }
    })
  });
})();