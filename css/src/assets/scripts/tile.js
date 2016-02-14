function toggleFavoritedClass(e) {
  e.classList.toggle('favorited');
  e.classList.add('button-clicked');
};
// allow focus outline on favorite button when tabbed to
function removeButtonClicked(e) {
  e.classList.remove('button-clicked');
};
