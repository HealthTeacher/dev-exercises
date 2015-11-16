
var $circle = $("div.circle");
var $heart = $("img.heart")
var $fullheart = $("img.fullheart");
var $emptyheart = $("img.emptyheart");
var $loose = $("img#loose");
var $body = $("body");


$fullheart.toggleClass("off")
$heart.click(function() {

  $heart.addClass("disappear")
  $emptyheart.toggleClass("off");
  $fullheart.toggleClass("off")
  $circle.toggleClass("on");

});

$body.mouseleave(function() {

  $heart.css("right", function(){
    return -1000;
  });
  $circle.css("display","none");

});

$body.mouseenter(function() {
  $heart.css("right", function(){
    return 100;
  });
  $circle.css("display","inherit");

});
