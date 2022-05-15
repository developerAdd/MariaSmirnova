const element_5 = document.querySelector('.content__info__size__row');
const element_6 = document.querySelector('.content__info__opisanie__row');
const element_7 = document.querySelector('.content__info__size__spisok__block');
const element_8 = document.querySelector('.content__info__opisanie__spisok__block');
const element_9 = document.querySelector('.content__info__size__plus');
const element_10 = document.querySelector('.content__info__opisanie__plus');
const element_11 = document.querySelector('.content__info__size__minus');
const element_12 = document.querySelector('.content__info__opisanie__minus');
const element_13 = document.querySelector('#finish_summe');
const element_14 = document.querySelector('.page');
const element_15 = document.querySelector('#popup__goods__header__remove');
const element_16 = document.querySelector('.content__info__korz');
const element_17 = document.querySelector('.popup__goods');
const element_18 = document.querySelector('.pop_up__room');
const element_19 = document.querySelector('#pop_up__room__header__remove');
const element_20 = document.querySelector('.popup__goods__content__finish_summe_thakath__button');
const element_21 = document.querySelector('.pop_up__room__check__avto');
const element_22 = document.querySelector('.pop_up__room__check__reg');
const block__js = document.querySelector('.block__js');
const element_24 = document.querySelector('.pop_up__room__check');
const element_28 = document.querySelector('.pop-email');
var element_25 = "";
var element_23 = "";
var element_26 = "";
var element_27 = "";
let element_29 = document.querySelector('.about__text__password__back');
let element_30 = document.querySelector('.pop_up__room__form__cheked__label_mml');
let element_31 = document.querySelector('.popup__goods__content__finish_summe_thakath__button__true');
let element_32 = document.querySelector('.content__info__whatsap');
const element_korz = document.querySelector('#korz');
const element_33 = document.querySelector('.pop-email__thvk');
const element_34 = document.querySelector('.pop_up__room__form__button__thvk');
const element_35 = document.querySelector('.about__text__password__back__thvk');
const element_36 = document.querySelector('.content__button');
const element_37 = document.querySelector('.email__thvk__block');
const element_38 = document.querySelector('.__by_divans');
const element_39 = document.querySelector('.__qustion');


const setListener = (element, type, handler) => {
  if(!element){
    return;
  }
  element.addEventListener(type, handler);
  return  () => {
    element.removeEventListener(type, handler);
  };
}
setListener(element_38,"click", ()=>{
  window.location ="../html/goods.html";
});
setListener(element_39,"click", ()=>{
  window.location ="../html/qustion.html";
});
setListener(element_31,"click", ()=>{
  window.location ="../html/thakaz.html";
});
setListener(element_32,"click", ()=>{
  window.location ="../html/qustion.html";
});
setListener(element_21,"click", ()=>{
  window.scrollTo(0,0);
  element_18.style.height ="682px";
  element_21.classList.add('active');
  element_22.classList.remove('active');
  block__js.innerHTML = `<form action="" class="pop_up__room__form">
      <span class="pop_up__room__form__text">Email</span>
      <div class="pop_up__room__form__block">
        <input type="email" class="pop_up__room__form__input __email">
        <img src="../svg/remove.svg" alt="">
      </div>
      <span class="pop_up__room__form__error"></span>
      <span class="pop_up__room__form__text">Пароль</span>
      <div class="pop_up__room__form__block">
        <input type="password" class="pop_up__room__form__input">
        <img src="../svg/remove.svg" alt="">
      </div>
      <span class="pop_up__room__form__error"></span>
      <div class="pop_up__room__form__cheked">
        <input id="label" type="checkbox" class="pop_up__room__form__cheked__box" name="" value="">
        <label class="pop_up__room__form__cheked__label" for="label">Запомнить меня.<a>Что это значит?</a></label>
      </div>
      <span class="pop_up__room__form__cheked__label_mml"><a>Забыли пароль?</a></span>
      <button class="pop_up__room__form__button">Войти</button>
    </form>
    <div class="pop_up__room__farfeetch">Создать аккаунт на MariSmirnova</div>
    <div class="pop_up__room__or">ИЛИ</div>
    <button class="pop_up__room__social"><img src="../svg/googleg.svg" alt="google">Войти через Google</button>
    <button class="pop_up__room__social"><img src="../svg/apple.svg" alt="apple">Войти через Apple</button>
    <button class="pop_up__room__social"><img src="../svg/color_facebooke.svg" alt="faceboke">Войти через Facebook</button>`;
    element_30 = block__js.querySelector('.pop_up__room__form__cheked__label_mml');
    setListener(element_30,"click", ()=>{
      window.scrollTo(0,0);
      element_28.classList.add('active');
      element_18.classList.remove('active');
    });
});

setListener(element_22,"click", ()=>{
  window.scrollTo(0,0);
  element_18.style.height ="567px";
  block__js.innerHTML = `<span class="block__js__main__text_reg">Зарегистрируйтесь, чтобы стать участником программы лояльности и открыть для себя все преимущества персонализированного шопинга</span>
  <form action="" class="pop_up__room__form">
    <span class="pop_up__room__form__text">Email</span>
    <div class="pop_up__room__form__block">
      <input type="password" class="pop_up__room__form__input">
      <img src="../svg/remove.svg" alt="">
    </div>
    <span class="pop_up__room__form__error"></span>
    <button id="next" class="pop_up__room__form__button">Зарегистрироваться</button>
  </form>
  <span class="block__js__main__text_reg __center">Не хотите регистрироваться сейчас? Вы можете создать аккаунт в другой раз.</span>
  <button class="pop_up__room__social">Продолжить как гость</button>`;
  element_22.classList.add('active');
  element_21.classList.remove('active');
  element_23 = block__js.querySelector('#next');
  setListener(element_23,"click", ()=>{
    window.scrollTo(0,0);
    element_18.style.height ="940px";
    element_24.style.display ="none";
    block__js.innerHTML = `
    <form action="" class="pop_up__room__form __mft">
      <span class="pop_up__room__form__text">Имя</span>
      <div class="pop_up__room__form__block">
        <input type="text" class="pop_up__room__form__input">
        <img src="../svg/remove.svg" alt="">
      </div>
      <span class="pop_up__room__form__error"></span>
      <span class="pop_up__room__form__text">Email</span>
      <div class="pop_up__room__form__block">
        <input type="email" class="pop_up__room__form__input __email">
        <img src="../svg/remove.svg" alt="">
      </div>
      <span class="pop_up__room__form__error"></span>
      <span class="pop_up__room__form__text">Пароль</span>
      <div class="pop_up__room__form__block __ezy">
        <input type="password" class="pop_up__room__form__input __ezy__input">
        <img src="../svg/ezy.svg" alt="" id="__ezy">
      </div>
      <span class="pop_up__room__form__error"></span>
      <span class="block__js__main__text_reg __size">При регистрации вы соглашаетесь со всеми пунктами документов «Условия пользования» и «Политика конфиденциальности».</span>
      <div class="pop_up__room__form__cheked">
        <input id="label" type="checkbox" class="pop_up__room__form__cheked__box" name="" value="">
        <label class="pop_up__room__form__cheked__label __size" for="label">Подпишитесь на рассылку, чтобы получать ранний доступ к распродажам, а также первыми узнавать о новинках, трендах и акциях. <a>Узнать больше</a>. Чтобы отписаться от рассылки, нажмите на кнопку в конце любого письма.</label>
      </div>
      <button class="pop_up__room__form__button _dmb">Зарегистрироваться</button>
    </form>
    <div class="pop_up__room__or">ИЛИ</div>
    <button class="pop_up__room__social"><img src="../svg/googleg.svg" alt="google">Войти через Google</button>
    <button class="pop_up__room__social"><img src="../svg/apple.svg" alt="apple">Войти через Apple</button>
    <button class="pop_up__room__social"><img src="../svg/color_facebooke.svg" alt="faceboke">Войти через Facebook</button>
    <span class="block__js__main__text_reg __center">Не хотитие регистрироваться сейчас?<br><a id="back">Вернуться назад</a></span>`;
    element_22.classList.add('active');
    element_21.classList.remove('active');
    element_25 = block__js.querySelector('#back');
    element_26 = block__js.querySelector('.__ezy__input');
    element_27 = block__js.querySelector('#__ezy');
    setListener(element_27,"click", ()=>{
      if(element_26.classList.contains('text')){
        element_26.type ="password";
        element_26.classList.remove('text');
      }else{
      element_26.type ="text";
      element_26.classList.add('text');
    }
    });
    setListener(element_25,"click", ()=>{
      window.scrollTo(0,0);
      element_21.classList.add('active');
      element_22.classList.remove('active');
      element_18.style.height ="682px";
      element_24.style.display ="flex";
      element_17.classList.remove('__sending');
      element_18.classList.remove('active');
      block__js.innerHTML = `<form action="" class="pop_up__room__form">
          <span class="pop_up__room__form__text">Email</span>
          <div class="pop_up__room__form__block">
            <input type="email" class="pop_up__room__form__input __email">
            <img src="../svg/remove.svg" alt="">
          </div>
          <span class="pop_up__room__form__error"></span>
          <span class="pop_up__room__form__text">Пароль</span>
          <div class="pop_up__room__form__block">
            <input type="password" class="pop_up__room__form__input">
            <img src="../svg/remove.svg" alt="">
          </div>
          <span class="pop_up__room__form__error"></span>
          <div class="pop_up__room__form__cheked">
            <input id="label" type="checkbox" class="pop_up__room__form__cheked__box" name="" value="">
            <label class="pop_up__room__form__cheked__label" for="label">Запомнить меня.<a>Что это значит?</a></label>
          </div>
          <span class="pop_up__room__form__cheked__label_mml"><a>Забыли пароль?</a></span>
          <button class="pop_up__room__form__button">Войти</button>
        </form>
        <div class="pop_up__room__farfeetch">Создать аккаунт на MariSmirnova</div>
        <div class="pop_up__room__or">ИЛИ</div>
        <button class="pop_up__room__social"><img src="../svg/googleg.svg" alt="google">Войти через Google</button>
        <button class="pop_up__room__social"><img src="../svg/apple.svg" alt="apple">Войти через Apple</button>
        <button class="pop_up__room__social"><img src="../svg/color_facebooke.svg" alt="faceboke">Войти через Facebook</button>`;
        element_30 = block__js.querySelector('.pop_up__room__form__cheked__label_mml');
        setListener(element_30,"click", ()=>{
          window.scrollTo(0,0);
          element_28.classList.add('active');
          element_18.classList.remove('active');
        });
    });
  });
});
setListener(element_34,"click", ()=>{
  element_33.style.height = "200px";
  element_33.style.bottom = "0";
  element_33.style.margin = "auto";
  element_37.style.marginBottom = "20px";
  element_37.innerHTML = `<h1 class="main__text__password">Заявка успешно отправлена</h1>`
    });
setListener(element_16,"click", ()=>{
  element_17.classList.add('active');
  element_14.classList.add('__sending');
  window.scrollTo(0,0);
});

setListener(element_20,"click", ()=>{
  element_17.classList.add('__sending');
  element_18.classList.add('active');
  window.scrollTo(0,0);
});

setListener(element_19,"click", ()=>{
  element_17.classList.remove('__sending');
  element_18.classList.remove('active');
});

setListener(element_korz,"click", ()=>{
  element_17.classList.add('active');
  element_14.classList.add('__sending');
  window.scrollTo(0,0);
});

setListener(element_15,"click", ()=>{
  element_17.classList.remove('active');
  element_14.classList.remove('__sending');
});
setListener(element_30,"click", ()=>{
  window.scrollTo(0,0);
  element_28.classList.add('active');
  element_18.classList.remove('active');
});
setListener(element_29,"click", ()=>{
  element_28.classList.remove('active');
  element_18.classList.add('active');
});
setListener(element_5,"click", ()=>{
  element_7.classList.toggle('active');
  element_9.classList.toggle('active');
  element_11.classList.toggle('active');
});
setListener(element_6,"click", ()=>{
  element_8.classList.toggle('active');
  element_10.classList.toggle('active');
  element_12.classList.toggle('active');
});
setListener(element_36,"click", ()=>{
  element_33.classList.add('active');
  element_14.classList.add('__sending');
  window.scrollTo(0,0);
});
setListener(element_35,"click", ()=>{
  element_33.classList.remove('active');
  element_14.classList.remove('__sending');
});
var finish_summe = 0;
let formReq_2 = document.querySelectorAll('.popup__goods__content__block');

for (let index = 0; index < formReq_2.length; index++) {
  const form = formReq_2[index];
  let col = form.querySelector('#col');
  let plus = form.querySelector('#plus');
  let minus = form.querySelector('#minus');
  let summe = form.querySelector('#summe');
  const price_summe__const = summe.innerText.replace(/[^0-9]/g,"");
  let remove = form.querySelector('.popup__goods__content__block__color__container__onclick');
  let block = form.querySelector('.popup__goods__content__block__color__container__block');
  remove.addEventListener("click", function(event) {
    block.classList.toggle('active');
    remove.classList.toggle('active');
  });

  let price_summe = price_summe__const;

  finish_summe = parseInt(finish_summe)+parseInt(price_summe);
  element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;

  plus.onclick = function(event) {
    col.value = parseInt(col.value) + 1;
    price_summe = parseInt(col.value)*price_summe__const;
    let  price_summe_s = `${price_summe}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    summe.innerText = `${price_summe_s} ₽`;
    finish_summe = parseInt(finish_summe)+parseInt(price_summe__const);
    element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
  }
  minus.onclick = function(event) {
    if(parseInt(col.value) > 1){
    col.value = parseInt(col.value) - 1;
    price_summe = parseInt(col.value)*price_summe__const;
    element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
      let  price_summe_s = `${price_summe}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    summe.innerText = `${price_summe_s} ₽`;
    finish_summe = parseInt(finish_summe)-parseInt(price_summe__const);
    element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
  }
  }
  col.addEventListener("change", function(event) {
    if(parseInt(col.value) < 1 || col.value == ""){
    col.value = 1;
    let iskl = `${price_summe__const}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    summe.innerText = `${iskl} ₽`;
    finish_summe = parseInt(finish_summe)-parseInt(price_summe);
    price_summe = parseInt(col.value)*parseInt(price_summe__const);
    finish_summe = parseInt(finish_summe)+parseInt(price_summe);
    element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
  }else{
    finish_summe = parseInt(finish_summe)-parseInt(price_summe);
    price_summe = parseInt(col.value)*price_summe__const;
    finish_summe = parseInt(finish_summe)+parseInt(price_summe);
    element_13.innerText = `ВСЕГО: ${finish_summe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
    let price_summe_s = `${price_summe}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    summe.innerText = `${price_summe_s} ₽`;
  }
  });
  let formReq_3 = form.querySelectorAll('.korz__input');
  for (let index = 0; index < formReq_3.length; index++) {
    const unput = formReq_3[index];
    unput.addEventListener("change", function(event) {
      block.classList.remove('active');
      remove.classList.remove('active');
    });
  }
}
