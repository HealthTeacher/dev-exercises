function buttonClicked(e) {
  e.classList.toggle('favorited');
  e.classList.add('button-clicked');
};
//accessibility fix
function buttonKeyed(e) {
  // make sure the key detection is cross browser compatible
  var keyPressed = event.charCode ? event.charCode : event.keyCode ? event.keyCode : event.which ? event.which : 0;
  // toggle favorited class if enter is pressed
  if (keyPressed == 13 || keyPressed == 32) {
    e.classList.toggle('favorited');
  }
  // allow focus outline on favorite button when tabbed to
  e.classList.remove('button-clicked');
};
