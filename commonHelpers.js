import{a as L,S as h,i as l,N as b}from"./assets/vendor-c9949826.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const a=document.getElementById("marquee-wrapper");function S(){const e=document.createElement("div");e.classList.add("circle"),a.appendChild(e);const t=q(a.offsetWidth*.7,a.offsetWidth*.8),n=Math.floor(Math.random()*(a.offsetWidth-t)),s=Math.floor(Math.random()*(a.offsetHeight-t));e.style.width=`${t}px`,e.style.height=`${t}px`,e.style.left=`${n}px`,e.style.top=`${s}px`,setTimeout(()=>{a.removeChild(e)},5e3)}function q(e,t){const n=Math.ceil(e),s=Math.floor(t);return Math.floor(Math.random()*(s-n)+n)}setInterval(S,2e3);const c=document.querySelector(".mobile-menu-btn"),u=document.querySelector(".menu-wrapper"),E=document.querySelector(".page-nav-button"),k=document.querySelector(".menu-button-close"),y=document.querySelectorAll(".menu-nav-list-item a");function m(){c.setAttribute("aria-expanded","false"),u.classList.remove("is-open")}y.forEach(e=>{e.addEventListener("click",()=>{m()})});E.addEventListener("click",()=>{const e=c.getAttribute("aria-expanded")==="true";c.setAttribute("aria-expanded",!e),u.classList.toggle("is-open")});c.addEventListener("click",()=>{const e=c.getAttribute("aria-expanded")==="true";c.setAttribute("aria-expanded",!e),u.classList.toggle("is-open")});k.addEventListener("click",()=>{m(),c.setAttribute("aria-expanded","false"),u.classList.remove("is-open")});y.forEach(e=>{e.addEventListener("click",()=>{m()})});y.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href"),s=document.querySelector(n);s&&(window.scrollTo({top:s.offsetTop-document.querySelector(".header-wrapper").offsetHeight,behavior:"smooth"}),m())})});async function x(){const e="https://portfolio-js.b.goit.study/api/reviews";return(await L.get(e)).data}async function C(e){const t="https://portfolio-js.b.goit.study/api/requests",n=await L.post(t,e);return console.log(n),n.data}document.querySelector(".mySwiper");const M=async()=>{try{const t=(await x()).map(({avatar_url:o,author:r,review:i})=>({avatar_url:o,author:r,review:i})),n=document.querySelector(".markup"),s=t.map(({author:o,avatar_url:r,review:i})=>`<div class="swiper-slide card">
    <img
    loading="lazy"
      class="card-image"
      src="${r}"
      alt="${o}" 
    />
    <h4 class="card-author">${o}</h4>
    <p class="card-review">${i}</p>
</div>`).join("");n.insertAdjacentHTML("beforeend",s)}catch{l.error({title:"Error",message:"Not found",position:"topRight"});return}};window.addEventListener("DOMContentLoaded",()=>{M(),new h(".mySwiper",{breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},spaceBetween:16,cssMode:!0,navigation:{nextEl:".swiper-button-right",prevEl:".swiper-button-left"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0})});window.onload=()=>{document.querySelector(".about-me-container").classList.remove("is-hidden"),document.querySelector(".about-me-icon").classList.add("is-open")};document.querySelector(".about-wrapper").addEventListener("click",H);document.querySelector(".role-wrapper").addEventListener("click",A);document.querySelector(".education-wrapper").addEventListener("click",P);function H(){document.querySelector(".ac-content-first").classList.contains("is-hidden")?(document.querySelector(".ac-content-first").classList.remove("is-hidden"),document.querySelector(".about-me-icon").classList.add("is-open")):(document.querySelector(".ac-content-first").classList.add("is-hidden"),document.querySelector(".about-me-icon").classList.remove("is-open"))}function A(){document.querySelector(".ac-content-second").classList.contains("is-hidden")?(document.querySelector(".ac-content-second").classList.remove("is-hidden"),document.querySelector(".role-icon").classList.add("is-open")):(document.querySelector(".ac-content-second").classList.add("is-hidden"),document.querySelector(".role-icon").classList.remove("is-open"))}function P(){document.querySelector(".ac-content-third").classList.contains("is-hidden")?(document.querySelector(".ac-content-third").classList.remove("is-hidden"),document.querySelector(".education-icon").classList.add("is-open")):(document.querySelector(".ac-content-third").classList.add("is-hidden"),document.querySelector(".education-icon").classList.remove("is-open"))}const v=new h(".swiper-about",{modules:[b],direction:"horizontal",slidesPerView:2,loop:!0,navigation:{nextEl:".skills-btn"},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1}});v.controller=v;const p=document.querySelector(".form-work-together"),g=document.querySelector(".modal-text-box"),f=document.querySelector("[data-modal]"),T=document.querySelector("[data-modal-close]"),O=document.querySelector(".modal");let d={};p.elements.email.addEventListener("input",B);function B(e){const t=e.currentTarget.value.trim();d.email=t}p.elements.comments.addEventListener("input",$);function $(e){const t=e.currentTarget.value.trim();d.comment=t}p.addEventListener("submit",j);function j(e){if(e.preventDefault(),d.email){if(!d.comment){l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the comments field, please"});return}}else{l.show({position:"topRight",color:"red",messageColor:"black",message:"Fill in the email field, please"});return}C(d).then(t=>{f.classList.remove("is-hidden");const n=I(t);g.innerHTML=n}).catch(t=>{l.show({position:"topRight",color:"red",messageColor:"black",message:"Not found"})}),d={},p.reset()}function I({message:e,title:t}){return`
        <h3 class="modal-title">
          ${t}
        </h3>
        <p class="modal-text">
          ${e}
        </p>
    `}T.addEventListener("click",w);f.addEventListener("click",w);document.addEventListener("keydown",N);function N(e){e.key==="Escape"&&(f.classList.add("is-hidden"),g.innerHTML="")}function w(e){e.target!==O&&(f.classList.add("is-hidden"),g.innerHTML="")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq").forEach(t=>{const n=t.querySelector(".faq-question-container"),s=t.querySelector(".faq-answer-container"),o=n.querySelector(".faq-list-btn");n.addEventListener("click",function(){t.classList.toggle("active"),s.style.maxHeight?(s.style.maxHeight=null,o.classList.remove("rotated")):(s.style.maxHeight=s.scrollHeight+"px",o.classList.add("rotated"))})})});new h(".projects-swiper",{breakpoints:{768:{slidesPerView:1},1440:{slidesPerView:1}},spaceBetween:0,cssMode:!0,navigation:{nextEl:".projects-swiper-button-right",prevEl:".projects-swiper-button-left"},mousewheel:!0,keyboard:!0});
//# sourceMappingURL=commonHelpers.js.map
