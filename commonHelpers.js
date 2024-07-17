import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){return fetch(`https://pixabay.com/api/?key=27065513-503b047e62eedc8adb85626ce&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{const s=t.hits;return console.log(s),s})}function p(o){document.querySelector(".gallery").insertAdjacentHTML("beforeend",o.map(s).join(""));function s(e){return`<li class="gallery-item">
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
      </li>`}new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".form"),c=a.querySelector("input"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";a.addEventListener("submit",o=>{o.preventDefault(),y.innerHTML="",c.value===""&&alert("Please fill out this field"),l.style.display="block",f(c.value).then(t=>{l.style.display="none",t.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"}),p(t)}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
