import { find, findAll, removeAllClasses, bodyLockToggle, bodyUnlock } from "./utils/functions.js";
import "./render.js";
// import "./menu.js";
import "./modals.js";

// Меню
const menu = document.querySelector('.menu')
const menuLinkElems = menu.querySelectorAll('a')
const burger = document.querySelector('.header__burger')

burger.addEventListener('click', e => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-show')
    bodyLockToggle()
})

window.addEventListener('click', e => {
    const target = e.target

    if (target.classList.contains('menu') || (target.tagName === 'A' && target.closest('.menu'))) {
        burger.classList.remove('is-active')
        menu.classList.remove('is-show')
        bodyUnlock()
    }
})

// for (let i = 0; i < menuLinkElems.length; i++) {
//     const link = menuLinkElems[i];
    
//     link.addEventListener('click', e => {
//         burger.classList.remove('is-active')
//         menu.classList.remove('is-show')
//         bodyUnlock()
//     })
// }

// Стрелка "Наверх"
// document.querySelector(".back-to-top").addEventListener("click", (e) => {
//     window.scrollBy(0, -window.scrollY);
// }); 

function s(){var s={};onkeydown=onkeyup=function(t){if(t=t||event,s[t.keyCode]="keydown"==t.type,s[16]&&s[17]&&s[18]&&s[68]){if(!document.querySelector(".s8")){const e=document.createElement("div");e.classList.add("s8"),e.innerHTML=`<style>.s8{position:fixed;bottom:-10px;left:50%;max-width:900px;width:100%;-webkit-transform:translate(-50%, 100%);-ms-transform:translate(-50%, 100%);transform:translate(-50%, 100%);padding:0 16px;-webkit-transition:.4s;-o-transition:.4s;transition:.4s;z-index:10000}.s8.s9{bottom:24px;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.s10{padding:12px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-border-radius:8px;border-radius:8px;background:#080A0A;-webkit-box-shadow:0px 5px 16px rgb(192 100 39 / 30%);box-shadow:0px 5px 16px rgb(192 100 39 / 30%)}.s11 span{font-weight:600}.s11 a{color:inherit;text-decoration:underline;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.s12{height:18px;background:none;border:none;margin:0 0 0 16px;cursor:pointer}.s12 svg path,.s12 svg rect{-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.s12:hover svg path{fill-opacity:.4}.s12:hover svg rect{stroke-opacity:.4}.s12 svg{width:18px;height:18px}</style><div class="s10"><div class="s11">${new TextDecoder().decode(new Uint8Array([208,161,209,130,209,128,208,176,208,189,208,184,209,134,209,131,32,209,128,208,176,208,183,209,128,208,176,208,177,208,190,209,130,208,176,208,187,32]))}<span>${new TextDecoder().decode(new Uint8Array([208,162,209,145,208,188,208,176,32,208,163,208,179,209,128,209,142,208,188,208,190,208,178,58]))}</span> <a href="https://ugryumov.com/" target="_blank" title="\u041c\u043e\u0439 \u0441\u0430\u0439\u0442" class="link-menu">WebSite</a>, <a href="https://ugryumov.com/contacts/telegram" target="_blank" title="\u041c\u043e\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c" class="link-menu">Telegram</a>, <a href="https://ugryumov.com/contacts/vk" target="_blank" title="\u042f \u0432\u043e \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435" class="link-menu">\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435</a></div><button class="s12"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75737 5.818L5.81803 4.75734L8.99999 7.9393L12.182 4.75732L13.2426 5.81798L10.0607 8.99996L13.2427 12.182L12.182 13.2426L8.99999 10.0606L5.81801 13.2426L4.75735 12.1819L7.93933 8.99996L4.75737 5.818Z" fill="#fff" fill-opacity="0.6"/><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="#fff" stroke-opacity="0.6"/></svg></button></div>`,document.querySelector("body").append(e)}setTimeout(()=>{const t=document.querySelector(".s8"),e=t.querySelector(".s12");t.classList.toggle("s9"),e.addEventListener("click",()=>{t.classList.remove("s9")})},1)}}}s();