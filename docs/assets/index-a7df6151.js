import{r as L}from"./index-be688e05.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-8f7d8107.js";import{d as k,o as c,i as p,H as A,y as N,p as R,r as s,e as d,a as e,w as t,f as O,t as a,q as i,F as v,j as b,E as H,c as W}from"./index-0a579450.js";import{a as V}from"./urls-b890ecc0.js";const J={name:"IzTitle"},_=k({...J,props:{level:{type:Number,default:1}},setup(g){const n=g;return(u,l)=>(c(),p("div",{class:N(`va-title va-title-l${n.level}`)},[A(u.$slots,"default")],2))}});const M={class:"page-user"},q={class:"view-space"},F={class:"base-info"},P={class:"base-info-left"},U={class:"base-info-right"},X={class:"nick-name"},j={class:"page-data"},Y={class:"page-data"},Z={name:"IzUserInfo"},te=k({...Z,setup(g){const n=R({info:{nickname:"之间",description:"重庆土著人，毕业于重庆理工大学软件工程系，95后，Web前端开发，2006美国《时代周刊》年度风云人物。",sex:"外星人",profession:"前端开发工程师",department:"XX技术部"},tag:[["React","Vue","Sass","NodeJS","WeApp","Java"],["羽毛球","跑步","LOL","唱歌","出行"],["柯南","星际穿越","超神学院","哈利波特"]],team:["技术有限组","挖山小组","掘金小组","阳光青年组","魔鬼加班组","外包团队","濒临猝死队"],deviceHistory:[{id:1,deviceOS:"Windows 11",ip:"10.0.0.1",lastLoginTime:"2022-3-23 17:31:41",location:"中国 台湾"},{id:2,deviceOS:"MacOS",ip:"10.0.0.2",lastLoginTime:"2022-3-23 17:31:48",location:"中国 重庆"}],logs:[{id:1,deviceOS:"Windows 11",ip:"10.0.0.1",createdTime:"2022-3-23 17:31:41",type:"update",content:"编辑保存了文章《JS捕获的AZERTY键盘事件分析》"},{id:2,deviceOS:"Windows 11",ip:"10.0.0.1",createdTime:"2022-3-23 17:31:41",type:"delete",content:'删除了文章标签"Web"'},{id:3,deviceOS:"Windows 11",ip:"10.0.0.1",createdTime:"2022-3-23 17:31:41",type:"add",content:"新增了文章《Chrome插件开发》"},{id:4,deviceOS:"Windows 11",ip:"10.0.0.1",createdTime:"2022-3-23 17:31:41",type:"delete",content:'删除了文章标签"Web"'},{id:5,deviceOS:"Windows 11",ip:"10.0.0.1",createdTime:"2022-3-23 17:31:41",type:"query",content:"查询了毛利小五郎的个人信息"}],tagTypes:["success","info","warning","danger",""]}),u=l=>{H({message:"已取消该设备登录！",type:"success"})};return(l,G)=>{const C=s("ElAvatar"),m=s("ElDivider"),E=s("ElTag"),f=s("ElDescriptionsItem"),y=s("ElDescriptions"),D=s("ElIcon"),$=s("ElCol"),o=s("ElTableColumn"),I=s("ElButton"),w=s("ElTable"),z=s("ElRow");return c(),p("div",M,[d("div",q,[e(z,{gutter:20},{default:t(()=>[e($,{span:8},{default:t(()=>[e(S,null,{default:t(()=>[d("div",F,[d("div",P,[e(C,{size:90,src:O(V)},null,8,["src"])]),d("div",U,[d("div",X,a(n.info.nickname),1),d("div",null,a(n.info.description),1)])]),e(m),e(_,{level:5},{default:t(()=>[i(a(l.$t("简介")),1)]),_:1}),e(y,null,{default:t(()=>[e(f,{label:l.$t("性别")},{default:t(()=>[e(E,{size:"small",type:"warning"},{default:t(()=>[i(a(n.info.sex),1)]),_:1})]),_:1},8,["label"]),e(f,{label:l.$t("职业")},{default:t(()=>[i(a(n.info.profession),1)]),_:1},8,["label"])]),_:1}),e(m),e(_,{level:5},{default:t(()=>[i(a(l.$t("标签")),1)]),_:1}),(c(!0),p(v,null,b(n.tag,(r,T)=>(c(),p("div",{key:`row-${T}`,class:"tag-row"},[(c(!0),p(v,null,b(r,(h,B)=>(c(),W(E,{key:h,type:n.tagTypes[(T+B)%5]},{default:t(()=>[i(a(h),1)]),_:2},1032,["type"]))),128))]))),128)),e(m),e(_,{level:5},{default:t(()=>[i(a(l.$t("团队")),1)]),_:1}),e(y,{class:"team"},{default:t(()=>[(c(!0),p(v,null,b(n.team,r=>(c(),W(f,{key:`team-item-${r}`},{label:t(()=>[e(D,null,{default:t(()=>[e(O(L))]),_:1})]),default:t(()=>[i(" "+a(r),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e($,{span:16},{default:t(()=>[e(S,null,{default:t(()=>[e(_,{level:4},{default:t(()=>[i(a(l.$t("设备登录历史")),1)]),_:1}),d("div",j,[e(w,{data:n.deviceHistory,stripe:""},{default:t(()=>[e(o,{type:"index",label:l.$t("编号"),width:"80"},null,8,["label"]),e(o,{prop:"deviceOS",label:l.$t("系统类型")},null,8,["label"]),e(o,{prop:"ip",label:"IP"}),e(o,{prop:"lastLoginTime",label:l.$t("上次登录时间"),minWidth:160},null,8,["label"]),e(o,{prop:"location",label:l.$t("定位")},null,8,["label"]),e(o,{label:"操作",width:"120"},{default:t(r=>[e(I,{size:"small",type:"danger",onClick:()=>u(r.row)},{default:t(()=>[i(a(l.$t("删除")),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),e(_,{level:4},{default:t(()=>[i(a(l.$t("操作历史")),1)]),_:1}),d("div",Y,[e(w,{data:n.logs},{default:t(()=>[e(o,{type:"index",label:l.$t("编号"),width:"80"},null,8,["label"]),e(o,{prop:"deviceOS",label:l.$t("系统类型")},null,8,["label"]),e(o,{prop:"ip",label:"IP"}),e(o,{prop:"createdTime",label:l.$t("创建时间"),minWidth:160},null,8,["label"]),e(o,{prop:"content",label:l.$t("详情"),minWidth:230},null,8,["label"])]),_:1},8,["data"])])]),_:1})]),_:1})]),_:1})])])}}});export{te as default};