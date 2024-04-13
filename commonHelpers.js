import{a as f,S as v,i as l}from"./assets/vendor-87fbb236.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();async function y(){const e="https://portfolio-js.b.goit.study/api/reviews";return(await f.get(e)).data}async function b(e){const t="https://portfolio-js.b.goit.study/api/requests",s=await f.post(t,e);return console.log(s),s.data}const d=document.querySelector(".swiper-arrow-left"),u=document.querySelector(".swiper-arrow-right"),L=function(e,t=1){const s=new v(e,{slidesPerView:t,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},spaceBetween:16,cssMode:!0,navigation:{nextEl:".swiper-button-right",prevEl:".swiper-button-left"},pagination:{el:".swiper-pagination"},on:{slideChange:function(){m(this),p(this)}},mousewheel:!0,keyboard:!0});m(s),p(s)};function m(e){e.activeIndex===0?d.setAttribute("src","img/arrow-left-disabled.svg"):d.setAttribute("src","img/arrow-left.svg")}function p(e){const t=e.slides.length;e.activeIndex===t-1?u.setAttribute("src","img/arrow-right-disabled.svg"):u.setAttribute("src","img/arrow-right.svg")}document.querySelector(".mySwiper");const S=async()=>{try{const t=(await y()).map(({avatar_url:r,author:o,review:i})=>({avatar_url:r,author:o,review:i})),s=document.querySelector(".swiper-wrapper"),a=t.map(({_id:r,author:o,avatar_url:i,review:h})=>`<div class="swiper-slide card">
    <img
    loading="lazy"
      class="card-image"
      src="${i}"
      alt="${o}" 
    />
    <h4 class="card-author">${o}</h4>
    <p class="card-review">${h}</p>
</div>`).join("");s.insertAdjacentHTML("beforeend",a)}catch{l.error({title:"Error",message:"Not found",position:"topRight"});return}};window.addEventListener("DOMContentLoaded",()=>{S(),L(".swiper")});const c=document.querySelector(".form-work-together"),g=document.querySelector(".modal-text-box"),w=document.querySelector("[data-modal]"),E=document.querySelector("[data-modal-close]");let n={};c.elements.email.addEventListener("input",q);function q(e){const t=e.currentTarget.value.trim();n.email=t}c.elements.comments.addEventListener("input",A);function A(e){const t=e.currentTarget.value.trim();n.comment=t}c.addEventListener("submit",x);function x(e){if(e.preventDefault(),n.email){if(!n.comment){l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the comments field, please"});return}}else{l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the email field, please"});return}b(n).then(t=>{w.classList.remove("visually-hidden");const s=M(t);g.innerHTML=s}),c.reset()}function M({message:e,title:t}){return`
        <h3 class="modal-title">
          ${t}
        </h3>
        <p class="modal-text">
          ${e}
        </p>
    `}E.addEventListener("click",O);function O(){w.classList.add("visually-hidden"),g.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
