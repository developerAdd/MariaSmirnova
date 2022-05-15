const element_1 = document.querySelector('.header__nav');
const btn_1 = document.querySelector('.burger');
const btn_2 = document.querySelector('.remove__mobile');

btn_1.addEventListener("click", function(event) {
  element_1.classList.add('active');
});
btn_2.addEventListener("click", function(event) {
  element_1.classList.remove('active');
});
