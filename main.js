$(document).ready(function(){
  $('.menu_item').mouseenter(function() {

      $(this).addClass('menu_aperto');
    $(this).children('.dropdown_menu').addClass('mostra');
  });
  $('.menu_item').mouseleave(function() {

    $(this).removeClass('menu_aperto');

    $(this).children('.dropdown_menu').removeClass('mostra');
  });
});
