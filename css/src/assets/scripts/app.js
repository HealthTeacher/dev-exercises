var slidingDiv = document.getElementById("instructions");
var visibleHeart = document.getElementById("outlinedHeart");
var mainDiv = document.getElementById("mainDiv");
var solidHeart = document.getElementById("solidHeart");
var heartContainer = document.getElementById("heartContainer");
slidingDiv.onclick = function () {
  slidingDiv.classList.add("active");
};

slidingDiv.onmouseleave = function () {
  slidingDiv.classList.remove("active");
};

mainDiv.onmouseover = function () {
  heartContainer.classList.add("active");
}

mainDiv.onmouseleave = function () {
  heartContainer.classList.remove("active");
}

heartContainer.onclick = function () {
  visibleHeart.classList.toggle("active");
  solidHeart.classList.toggle("active");
  heartContainer.classList.toggle("clicked");
  console.log("It works for us, Fred!")
}

solidHeart.onclick = function () {
  // visibleHeart.classList.toggle("active");
  solidHeart.classList.remove("active");
}
