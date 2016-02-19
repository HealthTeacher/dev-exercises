$(function() {
  'use strict';

    svg4everybody(); // run this script to enable <use> in IE

    var $clickEffect;

    $('.thumbnail').mouseenter(function(){
      $(this).find('.thumbnail-heart').velocity('fadeIn', {duration:200});
    });

    $('.thumbnail').mouseleave(function(){
      $(this).find('.thumbnail-heart').velocity('fadeOut', {duration:200});
    });


    $('.thumbnail-heart').on('click', function(){
      $clickEffect = $(this).find('.click-effect');
      var mySequence = [
        { e: $clickEffect, p: 'fadeIn' , o: { duration: 10 } },
        { e: $clickEffect, p: { scale: 1.3 }, o: { duration: 200 } },
        { e: $clickEffect, p: 'fadeOut', o: { duration: 150 } },
        { e: $clickEffect, p: { scale: 1 }, o: { duration: 200 } }
      ];
      if($(this).hasClass('clicked')){
        $(this).removeClass('clicked');
        $clickEffect.css('border', '0.1em solid white');
        $(this).css('background-color', 'white');
      }else{
        $(this).addClass('clicked');
        $clickEffect.css('border', '0.1em solid red');
        $(this).css('background-color', 'red');
      }
        $.Velocity.RunSequence(mySequence);
    });

    $('.category').mouseenter(function(){
      $(this).find('.dancing-shoe').velocity({translateX:'6em'});
    });

    $('.category').mouseleave(function(){
      $('.dancing-shoe').velocity({translateX:'0em'});
    });

    $('.responsive-button').on('click', function(){
      if($(this).hasClass('open')){
        $(this).removeClass('open').text('Click for Responsive Grid');
        // $('.responsive-button').text("Hide Responsive Grid");
        $('.grid').velocity('transition.flipBounceYOut', {duration: 300});
      }else{
        $(this).addClass('open').text('Hide Responsive Grid');
        $('.grid').velocity('transition.flipBounceYIn', {duration: 300});
      }
    });


});
