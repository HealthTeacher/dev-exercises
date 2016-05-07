var favorite = document.querySelectorAll('.js-favorite');

favorite[0].addEventListener('click', addFavorite);

function addFavorite (e) {
  var el = e.currentTarget;
  var icon = el.querySelector('use');
  var currentIcon = icon.getAttribute('xlink:href');
  el.classList.toggle('is-favorited');
  icon.setAttribute('xlink:href', currentIcon != '#icon-heart-outline' ? '#icon-heart-outline' : '#icon-heart' );
}
