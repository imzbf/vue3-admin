var r=Object.defineProperty,F=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(l,e,u)=>e in l?r(l,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[e]=u,_=(l,e)=>{for(var u in e||(e={}))p.call(e,u)&&i(l,u,e[u]);if(m)for(var u of m(e))g.call(e,u)&&i(l,u,e[u]);return l},c=(l,e)=>F(l,v(e));import{d as V,r as A,g as C,e as s,b as d,u as t,F as E,a as D,o as B}from"./index.c7def661.js";const f={class:"message-item"},h=s("div",{class:"message-label"},[s("div",null,"\u65B0\u4EFB\u52A1"),s("span",null,"\u5C06\u4F1A\u901A\u8FC7Ele\u901A\u77E5\u7684\u65B9\u5F0F\u63D0\u9192\u60A8\uFF01")],-1),b={class:"message-action"},x={class:"message-item"},U=s("div",{class:"message-label"},[s("div",null,"\u7CFB\u7EDF\u6D88\u606F"),s("span",null,"\u5C06\u5C55\u793A\u5728\u5DE5\u5177\u680F\u4E2D\uFF01")],-1),k={class:"message-action"},w={class:"message-item"},y=s("div",{class:"message-label"},[s("div",null,"\u804A\u5929\u6D88\u606F"),s("span",null,"\u5C06\u5728\u804A\u5929\u5DE5\u5177\u4E2D\u5C55\u793A\uFF01")],-1),N={class:"message-action"},z={name:"IzUserMessageSetting"},S=V(c(_({},z),{setup(l){const e=A({m1:!0,m2:!0,m3:!0});return(u,a)=>{const n=D("el-switch");return B(),C(E,null,[s("div",f,[h,s("div",b,[d(n,{modelValue:t(e).m1,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).m1=o)},null,8,["modelValue"])])]),s("div",x,[U,s("div",k,[d(n,{modelValue:t(e).m2,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).m2=o)},null,8,["modelValue"])])]),s("div",w,[y,s("div",N,[d(n,{modelValue:t(e).m3,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).m3=o)},null,8,["modelValue"])])])],64)}}}));export{S as default};