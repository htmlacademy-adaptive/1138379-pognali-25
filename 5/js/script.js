let header = document.querySelector('.header');
let headerButtonMenu = document.querySelector('.header__button-menu');
let headerButtonIconOpen = document.querySelector('.header__button-icon--open');
let headerButtonIconClose = document.querySelector('.header__button-icon--close');

header.classList.remove('header--nojs');

headerButtonMenu.addEventListener('click', function () {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
  }

    headerButtonIconOpen.classList.toggle('header__button-icon--closed');
    headerButtonIconClose.classList.toggle('header__button-icon--opened');
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 1440) {
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
    headerButtonIconOpen.classList.add('header__button-icon--closed');
    headerButtonIconClose.classList.remove('header__button-icon--opened');
  }
});
