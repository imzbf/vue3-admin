import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-9af97c0c.js";import{d as y,n as b,m as d,J as w,o as h,i as _,e as o,H as L,a6 as B,t as c,b as N,r as x,a as p,w as r,p as V}from"./index-e20ef559.js";const D={class:"iz-upload"},E={key:0,class:"iz-upload-progress"},R={name:"IzUploadChunk"},j=y({...R,props:{url:{type:String,default:null},headers:{type:Object,default:()=>({})},size:{type:Number,default:5*1024*1024}},setup(f){const a=f,e=b({chunkFileCount:0,uploadSuccessFileCount:0,uploadUtil:0,chunkList:[],chunkUploadStatus:[]}),m=d(()=>e.chunkFileCount===0?"0%":(100*e.uploadSuccessFileCount/e.chunkFileCount).toFixed(2)+"%"),u=d(()=>e.chunkFileCount===e.uploadSuccessFileCount?"done":"uploading"),S=d(()=>u.value==="uploading"?"visibility: hidden":""),i=w(),F=()=>{var t;(t=i.value)==null||t.click()},k=(t,n)=>{const s=new FormData;s.append("file",t),fetch(a.url,{method:"post",headers:a.headers,body:s}).then(()=>{e.uploadSuccessFileCount++,e.chunkUploadStatus[n]=!0}).finally(()=>{e.uploadUtil+1<e.chunkList.length&&k(e.chunkList[++e.uploadUtil],e.uploadUtil)})},U=()=>{e.chunkFileCount=1,e.uploadSuccessFileCount=0},$=()=>{var v,C;U();const t=(C=(v=i.value)==null?void 0:v.files)==null?void 0:C[0],n=a.size,s=[],g=[];for(let l=0;l*n<t.size;)s.push(t.slice(l*n,++l*n)),g.push(!1);e.chunkList=s,e.chunkUploadStatus=g,e.chunkFileCount=s.length,e.uploadUtil=s.length>=30?29:s.length-1;for(let l=0;l<e.uploadUtil+1;l++)k(e.chunkList[l],l)};return(t,n)=>(h(),_("div",D,[o("div",{style:B(S.value),class:"iz-upload-trigger",onClick:F},[L(t.$slots,"default")],4),u.value==="uploading"?(h(),_("div",E,c(m.value),1)):N("",!0),o("input",{ref_key:"uploadRef",ref:i,multiple:!1,type:"file",style:{display:"none"},onChange:$},null,544)]))}});const H={class:"page-md-editor"},I={class:"page-header"},J={class:"left"},O={class:"view-space"},T="UploadSlice",q={name:T},K=y({...q,setup(f){const a="https://www.fastmock.site/mock/666b2bc3ee91f13644d96f70db736879/api//upload/chunk";return(e,m)=>{const u=x("ElButton");return h(),_("div",H,[o("div",I,[o("div",J,[o("h2",null,c(e.$t("分片上传")),1),o("p",null,c(e.$t("演示分片上传功能，只支持本地运行，服务端在mock中实现。")),1)])]),o("div",O,[p(z,null,{default:r(()=>[p(j,{url:a},{default:r(()=>[p(u,null,{default:r(()=>[V(c(e.$t("上传")),1)]),_:1})]),_:1})]),_:1})])])}}});export{K as default};
