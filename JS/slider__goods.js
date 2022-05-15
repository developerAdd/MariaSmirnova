$(document).ready(function(){
const scr = window.screen.width;
if (scr > 1000){
  $('.content__slider').slick({
    dots: true,
    vertical: true,
    cssEase: 'linear',
    verticalSwiping: true,
    speed: 700,
    arrows:true,
    slidesToShow: 1
  });
}else {
  $('.content__slider').slick({
    arrows: false,
    dots: true,
    vertical: false,
    cssEase: 'linear',
    verticalSwiping: false,
    speed: 700,
    touchThreshold:10,
    slidesToShow: 1,
  });
}
});
