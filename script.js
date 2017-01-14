$(document).ready(function(){
  $('.tgl').slideUp(0);
  $('div').hover(
    function(){
        $(this).addClass('chosen');
  },
    function(){
        $(this).removeClass('chosen');
    });

    $('div').mousemove(function(){
      ($(this).children('.tgl')).slideDown(60);
    });
    $('div').mouseleave(function(){
      ($(this).children('.tgl')).slideUp(60);
    });
});
