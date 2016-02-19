$(function() {
  'use strict'


  function leapYear(year){
    var res =  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    var substr = (res === true ? ' is a leap year!' : ' is not a leap year.')
    $('.test-container-leapyear .solution').append("<p>"+year+substr+"</p>");
  }


  $(".year-input").keypress(function(e) {
    if(e.which == 13) {
      $('.test-container-leapyear .solution p').remove();
      var year = $('.year-input').val();
      leapYear(year);
    }
  });

});
