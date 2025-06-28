/* empty css                      */import{a as f,S as p,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u="50850315-f0f392daf437796dee68f08e0",d="https://pixabay.com/api/";async function m(s){const r={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(d,{params:r})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a");function g(s){const r=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="info">
      <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-p">${e.likes}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-p">${e.views}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-p">${e.comments}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-p">${e.downloads}</p>
      </li>
    </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){l.innerHTML=""}function L(){c.classList.add("visible")}function w(){c.classList.remove("visible")}const b=document.querySelector(".form"),S=document.querySelector(".search-inp");b.addEventListener("submit",async s=>{s.preventDefault();const r=S.value.trim();if(!r){n.warning({message:"Enter something!",position:"topRight"});return}L(),h();try{const e=await m(r);if(e.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}g(e.hits)}catch(e){n.error({message:"Something went wrong!",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
