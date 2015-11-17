var instructions = document.getElementById("instructions");
var outlinedHeart = document.getElementById("outlinedHeart");
var mainDiv = document.getElementById("mainDiv");
var solidHeart = document.getElementById("solidHeart");
var heartContainer = document.getElementById("heartContainer");
var circleBorder = document.getElementById("circleBorder");

instructions.onclick = function () {
  instructions.classList.add("active");
};

instructions.onmouseleave = function () {
  instructions.classList.remove("active");
};

mainDiv.onmouseover = function () {
  heartContainer.classList.add("active");
};

mainDiv.onmouseleave = function () {
  if(solidHeart.className === "active") {
    return;
  } else {
    heartContainer.classList.remove("active");
  }
};

heartContainer.onclick = function () {
  outlinedHeart.classList.toggle("active");
  solidHeart.classList.toggle("active");
  heartContainer.classList.toggle("clicked");
  circleBorder.classList.toggle("active");
};
