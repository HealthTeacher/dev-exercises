$(function() {
  'use strict';

    console.log( "ready!" );

    $('#test').on('click', function(){
        $(this).velocity({fontSize:'10em'});
    });


});
