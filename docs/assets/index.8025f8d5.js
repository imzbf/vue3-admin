var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var U=(i,e,l)=>e in i?X(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l,P=(i,e)=>{for(var l in e||(e={}))ee.call(e,l)&&U(i,l,e[l]);if(K)for(var l of K(e))te.call(e,l)&&U(i,l,e[l]);return i},H=(i,e)=>Y(i,Z(e));import{e as v,t as se,I as ne,v as Q,r as a,o,m as _,w as s,h as t,x as w,p as n,y as B,u,g as f,A as M,F as $,i as A,f as S,l as V,B as ue,C as oe,s as F,D as ae,G as le,R as q,H as ie,J as re,K as ce,L as _e,E as de,M as me,O as pe,P as fe,T as ge,Q as he,S as ve,n as Fe}from"./vendor.4e664af6.js";import{g as Ee,k as N,f as be,m as T}from"./index.85027435.js";import{s as k}from"./index.88aaa5a8.js";import{D as we}from"./urls.af42472e.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";const j=v({props:{iconName:{type:String,default:""}},render(){return se(ne[this.iconName])}}),L=v({props:{menu:{type:Object,default:()=>({})}},setup(i){const e=i,l=Q();return(c,r)=>{const d=a("el-icon"),g=a("el-menu-item");return e.menu.outLink?(o(),_(g,{key:0,onClick:r[0]||(r[0]=p=>u(Ee)(e.menu.outLink))},{default:s(()=>[i.menu.iconName?(o(),_(d,{key:0},{default:s(()=>[t(j,{"icon-name":i.menu.iconName},null,8,["icon-name"])]),_:1})):w("",!0),n("span",null,B(e.menu.title),1)]),_:1})):(o(),_(g,{key:1,index:e.menu.path,onClick:r[1]||(r[1]=p=>u(l).push(e.menu.path))},{default:s(()=>[i.menu.iconName?(o(),_(d,{key:0},{default:s(()=>[t(j,{"icon-name":i.menu.iconName},null,8,["icon-name"])]),_:1})):w("",!0),n("span",null,B(e.menu.title),1)]),_:1},8,["index"]))}}}),ye={ddd:""},De=v({props:{menuList:{type:Object,default:()=>[]}},setup(i){const e=i;return(l,c)=>{const r=a("el-icon"),d=a("sub-menu",!0),g=a("el-sub-menu");return o(!0),f($,null,M(e.menuList,p=>(o(),f($,{key:p.path},[p.outLink?(o(),_(L,{key:0,menu:p},null,8,["menu"])):p.children.length===0?(o(),_(L,{key:1,menu:p},null,8,["menu"])):p.children.length===1?(o(),_(L,{key:2,menu:p.children[0]},null,8,["menu"])):(o(),_(g,{key:3,index:p.path},{title:s(()=>[p.iconName?(o(),_(r,{key:0},{default:s(()=>[t(j,{"icon-name":p.iconName},null,8,["icon-name"])]),_:2},1024)):w("",!0),n("span",null,B(p.title),1)]),default:s(()=>[(o(!0),f($,null,M(p.children,m=>(o(),f($,null,[m.children.length===0?(o(),_(L,{key:0,menu:m},null,8,["menu"])):(o(),_(g,{key:1,index:m.path},{title:s(()=>[m.iconName?(o(),_(r,{key:0},{default:s(()=>[t(j,{"icon-name":m.iconName},null,8,["icon-name"])]),_:2},1024)):w("",!0),n("span",ye,B(m.title),1)]),default:s(()=>[t(d,{"menu-list":m.children},null,8,["menu-list"])]),_:2},1032,["index"]))],64))),256))]),_:2},1032,["index"]))],64))),128)}}});const G=v({setup(i){const e=A(N),l=S(()=>!e.state.setting.isMobile&&e.state.setting.aside==="close");return(c,r)=>{const d=a("el-menu");return o(),_(d,{class:"aside-menu dark-menu","collapse-transition":!1,collapse:u(l),"default-active":u(e).state.setting.selectedKey,"default-openeds":u(e).state.setting.openKeys,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:s(()=>[t(De,{menuList:u(e).state.menu.menuList},null,8,["menuList"])]),_:1},8,["collapse","default-active","default-openeds"])}}});const ke=v({setup(i){const e="/vue3-admin";return V({list:[{avatar:`${e}/static/img/boy01.jpg`,title:"\u5C0F\u4E94\u90CE \u8BC4\u8BBA\u4E86\u4F60",desc:"\u67EF\u5357\u8981\u8BF7\u996D\uFF0C\u6536\u5230\u8BF7\u56DE\u8BDD\uFF01",date:"\u4E24\u5929\u524D"},{avatar:`${e}/static/img/head02.gif`,title:"\u5C0F\u4E94\u90CE \u8BC4\u8BBA\u4E86\u4F60",desc:"\u67EF\u5357\u8981\u8BF7\u996D\uFF0C\u6536\u5230\u8BF7\u56DE\u8BDD\uFF01",date:"\u4E24\u5929\u524D"},{avatar:`${e}/static/img/boy01.jpg`,title:"\u5C0F\u4E94\u90CE \u8BC4\u8BBA\u4E86\u4F60",desc:"\u67EF\u5357\u8981\u8BF7\u996D\uFF0C\u6536\u5230\u8BF7\u56DE\u8BDD\uFF01",date:"\u4E24\u5929\u524D"},{avatar:`${e}/static/img/boy01.jpg`,title:"\u5C0F\u4E94\u90CE \u8BC4\u8BBA\u4E86\u4F60",desc:"\u67EF\u5357\u8981\u8BF7\u996D\uFF0C\u6536\u5230\u8BF7\u56DE\u8BDD\uFF01",date:"\u4E24\u5929\u524D"}]}),(l,c)=>(o(),f("span",null,"\u6D88\u606F"))}}),$e=v({setup(i){return V({list:[{avatar:"/static/img/i004.png",title:"\u4F60\u6709\u4E24\u4E2A\u90AE\u4EF6\u672A\u56DE\u590D\uFF01",desc:"\u4E24\u5929\u524D"},{avatar:"/static/img/i003.png",title:"\u4F60\u67093\u4E2A\u5408\u5E76\u8BF7\u6C42\u5F85\u5BA1\u6838\uFF01",desc:"\u6628\u5929"},{avatar:"/static/img/i002.png",title:"\u4F60\u4E0B\u5348\u6709\u4E24\u573A\u524D\u7AEF\u9762\u8BD5\uFF01",desc:"\u521A\u521A"},{avatar:"/static/img/i001.png",title:"\u6211\u6CA1\u6709\u4EC0\u4E48\u53EF\u4EE5\u5199\u7684\u4E86\uFF01",desc:"\u4E24\u5929\u524D"}]}),(e,l)=>(o(),f("span",null,"\u901A\u77E5"))}}),Be={};function Ce(i,e){return o(),f("span",null,"\u4EE3\u529E")}var xe=W(Be,[["render",Ce]]);const Ae={class:"layout-header"},Ve={class:"layout-header-left"},Ne={class:"breadcrumb-help"},Te={class:"layout-header-right"},Le=F(" \u4E2A\u4EBA\u4E2D\u5FC3 "),Me=F(" \u4E2A\u4EBA\u8BBE\u7F6E "),Se=F(" \u9000\u51FA\u767B\u5F55 "),je=v({setup(i){const e=A(N),l=V({isFullscreen:!1,bellContent:!1}),c=()=>{e.state.setting.isMobile?e.commit("setting/adjustMobileDrawer",{mobileDrawer:!e.state.setting.mobileDrawer}):e.commit("setting/asideState",{aside:e.state.setting.aside==="open"?"close":"open"})},r=()=>{k.isEnabled?k.isFullscreen?k.exit():k.request():de.error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F")},d=()=>{e.dispatch("user/logout").catch(g=>{me({type:"warning",title:"\u64CD\u4F5C\u5931\u8D25\uFF01",message:(g==null?void 0:g.msg)||"\u672A\u77E5\u7684\u5F02\u5E38\uFF01"})})};return k.isEnabled&&k.on("change",()=>{l.isFullscreen=!l.isFullscreen}),(g,p)=>{const m=a("el-icon"),C=a("el-breadcrumb-item"),E=a("el-breadcrumb"),b=a("el-badge"),y=a("el-tab-pane"),z=a("el-tabs"),D=a("el-popover"),x=a("el-dropdown-item"),O=a("el-dropdown-menu"),h=a("el-avatar"),R=a("el-dropdown");return o(),f("header",Ae,[n("ul",Ve,[n("li",{onClick:c,class:"cper"},[u(e).state.setting.aside==="open"?(o(),_(m,{key:0,size:18},{default:s(()=>[t(u(ue))]),_:1})):(o(),_(m,{key:1,size:18},{default:s(()=>[t(u(oe))]),_:1}))]),n("li",Ne,[t(E,{separator:"/"},{default:s(()=>[(o(!0),f($,null,M(u(e).state.setting.breadcrumbs,I=>(o(),_(C,{key:I},{default:s(()=>[F(B(I),1)]),_:2},1024))),128))]),_:1})])]),n("ul",Te,[t(D,{trigger:"click"},{reference:s(()=>[n("li",null,[t(b,{value:12},{default:s(()=>[t(m,null,{default:s(()=>[t(u(ae))]),_:1})]),_:1})])]),default:s(()=>[t(z,{"model-value":"notice"},{default:s(()=>[t(y,{name:"notice",label:"\u901A\u77E5"},{default:s(()=>[t($e)]),_:1}),t(y,{name:"message",label:"\u6D88\u606F"},{default:s(()=>[t(ke)]),_:1}),t(y,{name:"todo",label:"\u4EE3\u529E"},{default:s(()=>[t(xe)]),_:1})]),_:1})]),_:1}),n("li",{onClick:r},[t(m,null,{default:s(()=>[t(u(le))]),_:1})]),t(R,null,{dropdown:s(()=>[t(O,null,{default:s(()=>[t(x,null,{default:s(()=>[t(u(q),{to:"/user",class:"layout-header-link"},{default:s(()=>[t(m,null,{default:s(()=>[t(u(ie))]),_:1}),Le]),_:1})]),_:1}),t(x,null,{default:s(()=>[t(u(q),{to:"/user/setting",class:"layout-header-link"},{default:s(()=>[t(m,null,{default:s(()=>[t(u(re))]),_:1}),Me]),_:1})]),_:1}),t(x,{onClick:d},{default:s(()=>[t(m,null,{default:s(()=>[t(u(ce))]),_:1}),Se]),_:1})]),_:1})]),default:s(()=>[n("li",null,[t(h,{size:"small",src:u(we)},null,8,["src"])])]),_:1}),n("li",{onClick:p[0]||(p[0]=I=>u(e).commit("setting/settingDrawerVisibleChanged"))},[t(m,{style:{transform:"rotate(90deg)"}},{default:s(()=>[t(u(_e))]),_:1})])])])}}});var J="https://imzbf.github.io/vue3-admin/assets/logo.03d6d6da.png";const ze={class:"layout-bar"},Oe={class:"layout-bar-action cper"},Re=F("\u5237\u65B0\u5F53\u524D"),Ie=F("\u5173\u95ED\u5F53\u524D"),Ke=F("\u5173\u95ED\u5176\u4ED6"),Ue=F("\u5173\u95ED\u6240\u6709"),Pe=v({setup(i){const e=A(N),l=Q(),c=pe(),r=S(()=>e.state.setting.menuTags.length>1),d=E=>be.find(b=>b.path===E.path)!==void 0,g=E=>{l.push(E.path)},p=E=>{e.commit("setting/removeMenuTag",{type:T.rmTarget,route:E})},m=E=>{e.commit("setting/removeMenuTag",{type:E})},C=()=>{l.replace(`/redirect${c.path}`)};return(E,b)=>{const y=a("el-tag"),z=a("el-icon"),D=a("el-dropdown-item"),x=a("el-dropdown-menu"),O=a("el-dropdown");return o(),f("div",ze,[(o(!0),f($,null,M(u(e).state.setting.menuTags,h=>(o(),_(y,{class:"cper",closable:!d(h)&&u(r),effect:h.curr?"dark":"plain",type:h.curr?"success":"info",onClick:R=>g(h),onClose:R=>p(h)},{default:s(()=>[F(B(h.title),1)]),_:2},1032,["closable","effect","type","onClick","onClose"]))),256)),n("span",Oe,[t(O,{"show-timeout":0,size:"mini",placement:"bottom-end",trigger:"click"},{dropdown:s(()=>[t(x,null,{default:s(()=>[t(D,{onClick:C},{default:s(()=>[Re]),_:1}),u(r)?(o(),_(D,{key:0,onClick:b[0]||(b[0]=h=>m(u(T).rmCurr))},{default:s(()=>[Ie]),_:1})):w("",!0),u(r)?(o(),_(D,{key:1,onClick:b[1]||(b[1]=h=>m(u(T).rmOther))},{default:s(()=>[Ke]),_:1})):w("",!0),u(r)?(o(),_(D,{key:2,onClick:b[2]||(b[2]=h=>m(u(T).rmAll))},{default:s(()=>[Ue]),_:1})):w("",!0)]),_:1})]),default:s(()=>[t(y,{type:"info"},{default:s(()=>[t(z,null,{default:s(()=>[t(u(fe))]),_:1})]),_:1})]),_:1})])])}}});const He={},qe=n("div",{class:"theme-preview"},[n("div",{class:"theme-preview-left dark"}),n("div",{class:"theme-preview-right"},[n("div",{class:"theme-preview-right-header dark"}),n("div",{class:"theme-preview-right-main gay"})])],-1),Ge=n("div",{class:"theme-preview"},[n("div",{class:"theme-preview-left dark"}),n("div",{class:"theme-preview-right"},[n("div",{class:"theme-preview-right-header dark"}),n("div",{class:"theme-preview-right-main"})])],-1),Je=n("div",{class:"theme-preview"},[n("div",{class:"theme-preview-left dark"}),n("div",{class:"theme-preview-right"},[n("div",{class:"theme-preview-right-header light"}),n("div",{class:"theme-preview-right-main"})])],-1),Qe=n("div",{class:"theme-preview"},[n("div",{class:"theme-preview-left"}),n("div",{class:"theme-preview-right"},[n("div",{class:"theme-preview-right-header"}),n("div",{class:"theme-preview-right-main"})])],-1);function We(i,e){const l=a("el-tooltip"),c=a("el-col"),r=a("el-row");return o(),_(r,{gutter:20},{default:s(()=>[t(c,{span:8},{default:s(()=>[t(l,{placement:"top",effect:"dark",content:"\u9759\u9759\u7684\u7B49\u5F85ele\u66F4\u65B0\u6697\u9ED1\u4E3B\u9898~"},{default:s(()=>[qe]),_:1})]),_:1}),t(c,{span:8},{default:s(()=>[Ge]),_:1}),t(c,{span:8},{default:s(()=>[Je]),_:1}),t(c,{span:8},{default:s(()=>[Qe]),_:1})]),_:1})}var Xe=W(He,[["render",We]]);const Ye={class:"other-setting"},Ze={class:"other-setting-item"},et=n("label",{for:"setting-tag"},"\u5934\u90E8\u83DC\u5355",-1),tt={class:"other-setting-item"},st=n("label",{for:"setting-tag"},"\u6807\u7B7E\u5BFC\u822A",-1),nt={class:"other-setting-item"},ut=n("label",{for:"setting-tag"},"\u6807\u7B7E\u5BFC\u822A",-1),ot=v({setup(i){const e=V({header:!0,bar:!0});return(l,c)=>{const r=a("el-switch");return o(),f("div",Ye,[n("div",Ze,[et,t(r,{id:"setting-tag",modelValue:u(e).header,"onUpdate:modelValue":c[0]||(c[0]=d=>u(e).header=d)},null,8,["modelValue"])]),n("div",tt,[st,t(r,{id:"setting-tag",modelValue:u(e).bar,"onUpdate:modelValue":c[1]||(c[1]=d=>u(e).bar=d)},null,8,["modelValue"])]),n("div",nt,[ut,t(r,{id:"setting-tag",modelValue:u(e).bar,"onUpdate:modelValue":c[2]||(c[2]=d=>u(e).bar=d)},null,8,["modelValue"])])])}}}),at=F("\u4E3B\u9898\u8BBE\u7F6E"),lt=F("\u5176\u4ED6\u8BBE\u7F6E"),it=v({setup(i){const e=A(N);return(l,c)=>{const r=a("el-divider"),d=a("el-drawer");return o(),_(d,{"model-value":u(e).state.setting.settingDrawerVisible,onClose:c[0]||(c[0]=g=>u(e).commit("setting/settingDrawerVisibleChanged")),direction:"rtl",size:"280px","with-header":!1},{default:s(()=>[t(r,null,{default:s(()=>[at]),_:1}),t(Xe),t(r,null,{default:s(()=>[lt]),_:1}),t(ot)]),_:1},8,["model-value"])}}});const rt={class:"layout-aside"},ct={class:"logo"},_t=["src"],dt=n("span",null,"\u540E\u53F0\u7BA1\u7406\u6A21\u677F",-1),mt={class:"menu-container"},pt=n("footer",{class:"copyright"},[n("span",null,"@2020 imbf.cc")],-1),ft={key:1,class:"layout-aside"},gt={class:"logo"},ht=["src"],vt={key:0},Ft={class:"menu-container"},Et={key:0,class:"copyright"},bt=n("span",null,"@2020 imbf.cc",-1),wt=[bt],yt={class:"layout"},Dt={class:"layout-main"},kt={class:"drawer"},$t="Layout",Bt={name:$t},Lt=v(H(P({},Bt),{setup(i){const e=A(N);V({settingVisible:!1,mobileMenuDrawer:!0});const l=S(()=>{const d=["wrapper"];return e.state.setting.aside!=="open"&&d.push("aside-close"),e.state.setting.isMobile&&d.push("is-mobile"),d}),c=S(()=>e.state.setting.aside==="open"),r=()=>{e.commit("setting/adjustMobileDrawer",{mobileDrawer:!e.state.setting.mobileDrawer})};return(d,g)=>{const p=a("el-drawer"),m=a("router-view");return o(),f("section",{class:Fe(u(l))},[u(e).state.setting.isMobile?(o(),_(p,{key:0,"model-value":u(e).state.setting.mobileDrawer,onClose:r,direction:"ltr",size:"auto","with-header":!1,"custom-class":"mobile-menu-drawer"},{default:s(()=>[n("div",rt,[n("header",ct,[n("img",{src:u(J)},null,8,_t),dt]),n("div",mt,[t(G)]),pt])]),_:1},8,["model-value"])):(o(),f("div",ft,[n("header",gt,[n("img",{src:u(J)},null,8,ht),u(c)?(o(),f("span",vt,"\u540E\u53F0\u7BA1\u7406\u6A21\u677F")):w("",!0)]),n("div",Ft,[t(G)]),u(c)?(o(),f("footer",Et,wt)):w("",!0)])),n("div",yt,[t(je),t(Pe),n("main",Dt,[t(m,null,{default:s(({Component:C})=>[t(ge,{name:"fade",mode:"out-in"},{default:s(()=>[(o(),_(ve,{include:u(e).state.setting.cacheList},[(o(),_(he(C)))],1032,["include"]))]),_:2},1024)]),_:1})])]),n("div",kt,[t(it)])],2)}}}));export{Lt as default};
