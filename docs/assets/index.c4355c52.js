import{d as i,_ as f,o as m,g as d,e as F}from"./index.90ff9981.js";const h=i({name:"UploadFilled"}),E={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},b=F("path",{fill:"currentColor",d:"M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"},null,-1),g=[b];function w(e,l,n,c,s,o){return m(),d("svg",E,g)}var x=f(h,[["render",w]]);const u=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=(()=>{const e=u[0],l={};for(const n of u)if((n==null?void 0:n[1])in document){for(const[s,o]of n.entries())l[e[s]]=o;return l}return!1})(),a={change:t.fullscreenchange,error:t.fullscreenerror};let r={request(e=document.documentElement,l){return new Promise((n,c)=>{const s=()=>{r.off("change",s),n()};r.on("change",s);const o=e[t.requestFullscreen](l);o instanceof Promise&&o.then(s).catch(c)})},exit(){return new Promise((e,l)=>{if(!r.isFullscreen){e();return}const n=()=>{r.off("change",n),e()};r.on("change",n);const c=document[t.exitFullscreen]();c instanceof Promise&&c.then(n).catch(l)})},toggle(e,l){return r.isFullscreen?r.exit():r.request(e,l)},onchange(e){r.on("change",e)},onerror(e){r.on("error",e)},on(e,l){const n=a[e];n&&document.addEventListener(n,l,!1)},off(e,l){const n=a[e];n&&document.removeEventListener(n,l,!1)},raw:t};Object.defineProperties(r,{isFullscreen:{get:()=>Boolean(document[t.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return(e=document[t.fullscreenElement])!=null?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[t.fullscreenEnabled])}});t||(r={isEnabled:!1});var _=r;export{_ as s,x as u};