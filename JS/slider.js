$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: 'linear'
  });
const scr = window.screen.width;
if (scr > 1200){
  $('.small_slider').slick({
    arrows: true,
    dots: false,
    cssEase: 'linear',
    speed: 1000,
    slidesToShow: 5
  });
}else {
  $('.small_slider').slick({
    arrows: true,
    dots: false,
    cssEase: 'linear',
    speed: 1000,
    touchThreshold:10,
    slidesToShow: 3
  });
}

const main_block_1__popup__button = document.querySelector('.main_block_1__popup__button');
const main_block_2__popup__button = document.querySelector('.main_block_2__popup__button');
const main_block_3__popup__button = document.querySelector('.main_block_3__popup__button');
const main_block_4__popup__button = document.querySelector('.main_block_4__popup__button');

setListener(main_block_1__popup__button,"click", ()=>{
  window.location ="html/divans.html";
});
setListener(main_block_2__popup__button,"click", ()=>{
  window.location ="html/our.html";
});
setListener(main_block_3__popup__button,"click", ()=>{
  window.location ="html/cover.html";
});
setListener(main_block_4__popup__button,"click", ()=>{
  window.location ="html/podushka__main.html";
});
});
