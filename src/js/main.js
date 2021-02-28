$(function(){
  new WOW().init(); 
});

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow')
  });
});