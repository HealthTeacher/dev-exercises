/*global $:false */


var $heart1 = $('.heart1');
var $heart2 = $('.heart2');
var $container = $('.container');
var $bottom = $('.bottom');
var $viewmore = $('.viewmore');
var $circle = $('.circle');
$(function () {
  $container.hover(
    function () {
      $heart1.show();
    },
    function () {
      $heart1.hide();
    });
  $heart1.click(
    function () {
      $heart2.show();
      $circle.show().hide('puff', {percent:200 }, 400);
    });
  $heart2.click(
    function () {
      $heart2.hide();
    });


  $bottom.hover(
    function () {
        $heart1.show();
      $viewmore.show({
        width: '100px'
      }, 200);
    },
    function () {
      $heart1.hide();
      $viewmore.hide({
        width: '0'
      }, 100);
    });
});
