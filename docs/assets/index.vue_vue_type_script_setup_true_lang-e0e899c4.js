import{d as y,k as g,l as D,m as E,r as s,o as t,c as p,w as o,a as h,i as l,j as C,F as B,e as L,t as r,f as d,G as u,p as v}from"./index-e20ef559.js";const x={key:0},z={key:1},S={name:"LocaleSwitch"},V=y({...S,props:{size:{type:String,default:"default"},wrapper:{type:Boolean,default:!1}},setup(i){const c=i,a=g(D),_=E(()=>Reflect.ownKeys(u).map(e=>({key:e,value:Reflect.get(u,e)}))),m=e=>{a.commit("setting/localeChanged",{locale:e})};return(e,M)=>{const f=s("ElDropdownItem"),w=s("ElDropdownMenu"),k=s("ElDropdown");return t(),p(k,{size:c.size},{dropdown:o(()=>[h(w,null,{default:o(()=>[(t(!0),l(B,null,C(_.value,n=>(t(),p(f,{key:n.key,onClick:()=>m(n.key)},{default:o(()=>[v(r(n.value),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:o(()=>[c.wrapper?(t(),l("li",x,[L("span",null,r(d(a).state.setting.localeLabel),1)])):(t(),l("span",z,r(d(a).state.setting.localeLabel),1))]),_:1},8,["size"])}}});export{V as _};
