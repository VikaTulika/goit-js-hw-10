import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",n);function n(i){i.preventDefault();const t=s.elements.delay.value,m=s.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{m==="fulfilled"?e(t):r(t)},t)}).then(e=>{o.success({message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({message:`❌ Rejected promise in ${e}ms`})}).finally(()=>{s.reset()})}
//# sourceMappingURL=2-snackbar.js.map