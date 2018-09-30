$(function(){

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
  });


  $('#top-btn').click(function(){
    $('html, body').animate({'scrollTop':0},500);
  });

  $('.header-right a').click(function(){
    var id = $(this).attr('href');
    var position =$(id).offset().top;
    $('html, body').animate({'scrollTop':position},500);
  });



});
