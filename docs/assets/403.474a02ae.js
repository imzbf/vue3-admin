var d=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var c=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))B.call(e,t)&&c(o,t,e[t]);if(s)for(var t of s(e))k.call(e,t)&&c(o,t,e[t]);return o},n=(o,e)=>m(o,f(e));import{d as x,a as u,o as E,c as b,w as _,b as C,f as F,ae as h,a3 as y}from"./index.90ff9981.js";const D=F("Back"),w="Error403",N={name:w},q=x(n(a({},N),{setup(o){const e=h(),t=y(),l=()=>{const{redirect:r}=e.query;r?t.replace(r):t.replace("/")};return(r,R)=>{const p=u("el-button"),i=u("el-result");return E(),b(i,{icon:"error",title:"403","sub-title":"\u4F60\u7684\u8BBF\u95EE\u88AB\u62D2\u7EDD\u4E86\uFF01"},{extra:_(()=>[C(p,{type:"primary",onClick:l},{default:_(()=>[D]),_:1})]),_:1})}}}));export{q as default};