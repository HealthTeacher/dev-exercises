function buttonClicked(o) {
  // classList doesn't work in ie 9 :(
  // toggle favorited class and aria-pressed attribute
  if(o.className == "favorite-button" || o.className == "favorite-button button-clicked" ){
    o.className = "favorite-button favorited button-clicked";
    o.setAttribute("aria-pressed", true);
  }else {
    o.className = "favorite-button button-clicked";
    o.setAttribute("aria-pressed",  false);
  }
};

function buttonKeyDown(o) {
  // allow focus outline on favorite button when tabbed to
  if(o.className == "favorite-button button-clicked"){
    o.className = "favorite-button";
  } else if(o.className == "favorite-button favorited button-clicked") {
    o.className = "favorite-button favorited";
  }
};

function buttonKeyUp(o, e) {
  // make sure the key detection is cross browser compatible
  var keyPressed = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0;
  // toggle favorited class if enter or space is pressed
  if (keyPressed == 13 || keyPressed == 32) {
    if(o.className == "favorite-button"){
      o.className = "favorite-button favorited";
      o.setAttribute("aria-pressed", true);
    } else if(o.className == "favorite-button favorited") {
      o.className = "favorite-button";
      o.setAttribute("aria-pressed",  false);
    }
  }
};
