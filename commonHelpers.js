import{a as p,S as v,i as l}from"./assets/vendor-87fbb236.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();async function y(){const t="https://portfolio-js.b.goit.study/api/reviews";return(await p.get(t)).data}async function L(t){const e="https://portfolio-js.b.goit.study/api/requests",s=await p.post(e,t);return console.log(s),s.data}const d=document.querySelector(".swiper-arrow-left"),u=document.querySelector(".swiper-arrow-right"),b=function(t,e=1){new v(t,{breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},spaceBetween:16,cssMode:!0,navigation:{nextEl:".review-swiper-button-right",prevEl:".review-swiper-button-left"},pagination:{el:".swiper-pagination"},on:{init:function(){m(this),f(this)},slideChange:function(){m(this),f(this)}},mousewheel:!0,keyboard:!0})};function m(t){t.activeIndex===0?d.setAttribute("src","./img/arrow-left-disabled.svg"):d.setAttribute("src","./img/arrow-left.svg")}function f(t){const e=t.slides.length;t.activeIndex===e-1?u.setAttribute("src","./img/arrow-right-disabled.svg"):u.setAttribute("src","./img/arrow-right.svg")}document.querySelector(".mySwiper");const S=async()=>{try{const e=(await y()).map(({avatar_url:r,author:o,review:n})=>({avatar_url:r,author:o,review:n})),s=document.querySelector(".swiper-wrapper"),i=e.map(({_id:r,author:o,avatar_url:n,review:w})=>`<div class="swiper-slide card">
    <img
    loading="lazy"
      class="card-image"
      src="${n}"
      alt="${o}" 
    />
    <h4 class="card-author">${o}</h4>
    <p class="card-review">${w}</p>
</div>`).join("");s.insertAdjacentHTML("beforeend",i)}catch{l.error({title:"Error",message:"Not found",position:"topRight"});return}};window.addEventListener("DOMContentLoaded",()=>{S(),b(".swiper-review")});const a=document.querySelector(".form-work-together"),g=document.querySelector(".modal-text-box"),h=document.querySelector("[data-modal]"),q=document.querySelector("[data-modal-close]");let c={};a.elements.email.addEventListener("input",E);function E(t){const e=t.currentTarget.value.trim();c.email=e}a.elements.comments.addEventListener("input",x);function x(t){const e=t.currentTarget.value.trim();c.comment=e}a.addEventListener("submit",A);function A(t){if(t.preventDefault(),c.email){if(!c.comment){l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the comments field, please"});return}}else{l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the email field, please"});return}L(c).then(e=>{h.classList.remove("is-hidden");const s=M(e);g.innerHTML=s}),a.reset()}function M({message:t,title:e}){return`
        <h3 class="modal-title">
          ${e}
        </h3>
        <p class="modal-text">
          ${t}
        </p>
    `}q.addEventListener("click",O);function O(){h.classList.add("is-hidden"),g.innerHTML=""}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq").forEach(e=>{const s=e.querySelector(".faq-question-container"),i=e.querySelector(".faq-answer-container"),r=s.querySelector(".faq-btn-accordion .faq-arrow-icon");s.addEventListener("click",function(){e.classList.toggle("active"),i.style.maxHeight?(i.style.maxHeight=null,r.classList.remove("active")):(i.style.maxHeight=i.scrollHeight+"px",r.classList.add("active"))})})});
//# sourceMappingURL=commonHelpers.js.map
