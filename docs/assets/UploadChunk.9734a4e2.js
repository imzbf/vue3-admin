import{_ as z}from"./index.vue_vue_type_script_setup_true_lang.13cd6714.js";import{d as y,r as E,n as i,_ as w,o as h,h as _,f as l,Y as x,V as A,u as d,t as D,k as $,b as p,w as r,e as L,a as B}from"./index.74cafab2.js";const N={class:"iz-upload"},V={key:0,class:"iz-upload-progress"},R={name:"IzUploadChunk"},j=y({...R,props:{url:{type:String,default:null},headers:{type:Object,default:()=>({})},size:{type:Number,default:5*1024*1024}},setup(f){const n=f,e=E({chunkFileCount:0,uploadSuccessFileCount:0,uploadUtil:0,chunkList:[],chunkUploadStatus:[]}),k=i(()=>e.chunkFileCount===0?"0%":(100*e.uploadSuccessFileCount/e.chunkFileCount).toFixed(2)+"%"),a=i(()=>e.chunkFileCount===e.uploadSuccessFileCount?"done":"uploading"),v=i(()=>a.value==="uploading"?"visibility: hidden":""),c=w(),S=()=>{var t;(t=c.value)==null||t.click()},m=(t,o)=>{const u=new FormData;u.append("file",t),fetch(n.url,{method:"post",headers:n.headers,body:u}).then(()=>{e.uploadSuccessFileCount++,e.chunkUploadStatus[o]=!0}).finally(()=>{e.uploadUtil+1<e.chunkList.length&&m(e.chunkList[++e.uploadUtil],e.uploadUtil)})},U=()=>{e.chunkFileCount=1,e.uploadSuccessFileCount=0},b=()=>{var C,g;U();const t=(g=(C=c.value)==null?void 0:C.files)==null?void 0:g[0],o=n.size,u=[],F=[];for(let s=0;s*o<t.size;)u.push(t.slice(s*o,++s*o)),F.push(!1);e.chunkList=u,e.chunkUploadStatus=F,e.chunkFileCount=u.length,e.uploadUtil=u.length>=30?29:u.length-1;for(let s=0;s<e.uploadUtil+1;s++)m(e.chunkList[s],s)};return(t,o)=>(h(),_("div",N,[l("div",{style:A(d(v)),class:"iz-upload-trigger",onClick:S},[x(t.$slots,"default")],4),d(a)==="uploading"?(h(),_("div",V,D(d(k)),1)):$("",!0),l("input",{ref_key:"uploadRef",ref:c,multiple:!1,type:"file",style:{display:"none"},onChange:b},null,544)]))}});const I={class:"page-md-editor"},O=l("div",{class:"page-header"},[l("div",{class:"left"},[l("h2",null,"\u5206\u7247\u4E0A\u4F20"),l("p",null,"\u6F14\u793A\u5206\u7247\u4E0A\u4F20\u529F\u80FD\uFF0C\u53EA\u652F\u6301\u672C\u5730\u8FD0\u884C\uFF0C\u670D\u52A1\u7AEF\u5728mock\u4E2D\u5B9E\u73B0\u3002")])],-1),T={class:"view-space"},Y="UploadSlice",q={name:Y},J=y({...q,setup(f){const n="https://www.fastmock.site/mock/666b2bc3ee91f13644d96f70db736879/api//upload/chunk";return(e,k)=>{const a=B("el-button");return h(),_("div",I,[O,l("div",T,[p(z,null,{default:r(()=>[p(j,{url:n},{default:r(()=>[p(a,null,{default:r(()=>[L("\u4E0A\u4F20")]),_:1})]),_:1})]),_:1})])])}}});export{J as default};
