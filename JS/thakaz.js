const content__form_data__adress__plus__spisok = document.querySelector('.content__form_data__adress__plus__spisok');
const content__form_data__adress__plus__spisok_t = document.querySelector('.content__form_data__adress__plus__spisok_t');
const block_js_s = document.querySelector('.block_main_js');
const content__status__button = document.querySelector('.content__status__button');
const header__pepole = document.querySelector('.header__pepole');
setListener(content__status__button,"click", ()=>{
 window.location ="../html/thakaz_two.html";
});
setListener(header__pepole,"click", ()=>{
 window.location ="../html/id_room.html";
});
setListener(content__form_data__adress__plus__spisok,"click", ()=>{
  block_js_s.innerHTML +=`
  <div class="block_js">
    <input type="text" class="content__form_data__adress_i __input" >
    <label class="__input__label"></label>
  </div>
  `;
});
setListener(content__form_data__adress__plus__spisok_t,"click", ()=>{
  block_js_s.innerHTML +=`
  <div class="block_js">
    <input type="text" class="content__form_data__adress_i __input">
    <label class="__input__label"></label>
  </div>
  `;
});
