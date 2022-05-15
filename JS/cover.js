$(document).ready(function(){
const scr = window.screen.width;
if (scr <= 820){
  $('.slider__cover').slick({
    arrows: false,
    dots: false,
    cssEase: 'linear',
    speed: 700,
    slidesToShow: 1
  });
}
});
