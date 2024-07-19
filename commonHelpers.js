import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function p(r){return fetch(`https://pixabay.com/api/?key=27065513-503b047e62eedc8adb85626ce&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{const s=t.hits;return console.log(s),s})}function f(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",r.map(s).join(""));function s(e){return`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        <div class="photo-info">
        <div>Likes <span>${e.likes}</span></div>
        <div>Views <span>${e.views}</span></div>
        <div>Comments <span>${e.comments}</span></div>
        <div>Downloads <span>${e.downloads}</span></div>
        </div>
        </a>
      </li>`}new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".form"),d=a.querySelector("input"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";a.addEventListener("submit",r=>{r.preventDefault(),m.innerHTML="",d.value===""&&c.show({message:"Please fill out this field",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"}),l.style.display="block",p(d.value.trim()).then(t=>{l.style.display="none",t.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"}),f(t)}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
