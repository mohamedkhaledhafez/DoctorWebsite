

$(function () {
          'use strict';
          var windowHeight = $(window).height(),
              upperHeight  = $('.upper-bar').innerHeight(),
              navHeight    = $('.navbar').innerHeight();
          $('.slider , .carousel-item').height(windowHeight-(upperHeight + navHeight)); 


          
  $('.navbar ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    
});


});

