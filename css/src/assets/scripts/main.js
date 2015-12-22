/*global $:false */
/*
DONE ** heart in outline and round white background shows and hides on hover on .container (original state)
** heart turns white and background becomes red on click
** heart background has red animation of red outer glow on click
** heart stays white and background stays red when pointer is no longer hovering
** heart returns to original state when heart is clicked again
DONE ** view more shows with right slider and toggles on hover on .bottom
** */
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
      $circle.show().hide('puff', { }, 300);
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
/* function redHeart() {
   $heart1.click($heart2.show())
 }*/
/*
  $heart1.click(
    function () {
      $($heart2).toggleClass('active')
      $('.circle').show().hide('puff', { }, 200);
    });
  $heart2.click(
    function () {
      $heart2.hide();
      $container.hover(
        function () {
          $heart1.toggle();
        });
    })
*/
/*
    function () {
      $heart.hide();
    });
  $bottom.hover(
    function () {
      $heart.show();
    },
    function () {
      $heart.hide();
    },
    function () {
      $viewmore.show({
        width: '75px'
      }, 200)
    },
    function () {
      $viewmore.hide({
        width: '-0'
      }, 100)
    }
  );
  $heartcheck.click(
    function () {
      $heartcheck.show('puff');
    })
*/
