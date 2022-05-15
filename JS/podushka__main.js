$(document).ready(function(){
const scr = window.screen.width;
if (scr <= 820){
  $('.slider__cover').slick({
    arrows: false,
    dots: false,
    cssEase: 'linear',
    speed: 700,
    touchThreshold:10,
    slidesToShow: 1
  });
}
});

const element_171 = document.querySelector('._buy');
const element_181 = document.querySelector('.__whatssap');

setListener(element_171,"click", ()=>{
  window.location ="../html/podushka.html";
});
setListener(element_181,"click", ()=>{
  window.location ="../html/qustion.html";
});
