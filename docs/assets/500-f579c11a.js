import{d as u,s as l,u as _,r as o,c as p,w as r,o as i,a as m,q as d}from"./index-0a579450.js";const f="Error500",B={name:f},C=u({...B,setup(k){const s=l(),t=_(),c=()=>{const{redirect:e}=s.query;e?t.replace(e):t.replace("/")};return(e,E)=>{const n=o("ElButton"),a=o("ElResult");return i(),p(a,{icon:"error",title:"500",subTitle:e.$t("服务端异常")},{extra:r(()=>[m(n,{type:"primary",onClick:c},{default:r(()=>[d("Back")]),_:1})]),_:1},8,["subTitle"])}}});export{C as default};
