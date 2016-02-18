$(function() {
  'use strict'

  $('.javascript-button').on('click', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open').text('Click for javascript tests');
      // $('.responsive-button').text("Hide Responsive Grid");
      $('.test-container-wordcount').velocity('transition.expandOut', {duration: 300});
    }else{
      $(this).addClass('open').text('Hide javascript tests');
      $('.test-container-wordcount').velocity('transition.expandIn', {duration: 300});
    }
  });

  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };

  function wordCount(str){
    var array = str.split(' ');
    console.log(array);
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
      $('.solution p').remove();
      var str = $('.wordcount-input').val();
      wordCount(str);
    }
  });


});
