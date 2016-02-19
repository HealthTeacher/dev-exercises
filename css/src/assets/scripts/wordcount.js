$(function() {
  'use strict'

  $('.javascript-button').on('click', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open').text('Click for javascript tests');
      // $('.responsive-button').text("Hide Responsive Grid");
      $('.test-container-wordcount, .test-container-leapyear').velocity('transition.expandOut', {duration: 300});
    }else{
      $(this).addClass('open').text('Hide javascript tests');
      $('.test-container-wordcount, .test-container-leapyear').velocity('transition.expandIn', {duration: 300});
      setTimeout(function(){
        $('.wordcount-input').focus();
      }, 500);
    }
  });

  Array.prototype.remove = function() {
    var k, arr = arguments, L = arr.length, ax;
    while (L && this.length) {
      k = arr[--L];
      while ((ax = this.indexOf(k)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };

  function wordCount(str){
    var array = str.split(' ');
    //loop through array
    var count,
        length = array.length;


    for (var i = 0; i < length; i++) {
      var re = new RegExp(array[0],"g");

      count = (str.match(re) || []).length;
      if(array[0] === undefined){
        break;
      }else{
        $('.test-container-wordcount .solution').append("<p>"+array[0]+": "+count+"</br></p>");
      }
      array.remove(array[0]);
    }


  }

  $(".wordcount-input").keypress(function(e) {
    if(e.which == 13) {
      $('.test-container-wordcount .solution p').remove();
      var str = $('.wordcount-input').val();
      wordCount(str);
    }
  });




});
