import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as i,i as l}from"./assets/vendor-BbbuE1sJ.js";let a=null;const n=document.querySelector("[data-start]"),r=document.querySelector("#datetime-picker"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");n.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date){l.warning({message:"Please choose a date in the future"}),n.disabled=!0;return}n.disabled=!1,a=t[0],console.log(t[0])}};i("#datetime-picker",S);n.addEventListener("click",p);function p(){n.disabled=!0,r.disabled=!0;const t=setInterval(()=>{const e=b(a-new Date);m.textContent=o(e.days),f.textContent=o(e.hours),h.textContent=o(e.minutes),y.textContent=o(e.seconds),a-new Date<1e3&&(clearInterval(t),r.disabled=!1)},1e3)}function b(t){const s=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:c,seconds:u}}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
