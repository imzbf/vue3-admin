import{q as v}from"./table-2781260b.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-8f7d8107.js";import{d as T,p as g,A as C,r as s,i as S,e as r,a as e,w as a,o as k,q as m,t as x}from"./index-0a579450.js";const z={class:"page-list-table"},U={class:"view-space"},B={class:"page-search"},I={class:"page-data"},P=["href"],W={class:"page-pagination"},q="Table",F={name:q},A=T({...F,setup(N){const o=g({title:"",type:"",code:"",tags:""}),n=g({list:[],params:{page:1,pageSize:10},total:0});C(()=>{v({...o,...n.params}).then(l=>{if(l.code===0)n.list=l.data.list,n.total=l.data.total;else throw l}).catch(l=>{console.error(l)})});const b=()=>{},f=l=>{console.log(l)};return(l,d)=>{const c=s("ElInput"),p=s("ElFormItem"),u=s("ElButton"),h=s("ElForm"),i=s("ElTableColumn"),V=s("ElSwitch"),E=s("ElTable"),w=s("ElPagination");return k(),S("div",z,[r("div",U,[e(y,null,{default:a(()=>[r("div",B,[e(h,{inline:"",model:o},{default:a(()=>[e(p,{label:"标题"},{default:a(()=>[e(c,{modelValue:o.title,"onUpdate:modelValue":d[0]||(d[0]=t=>o.title=t),placeholder:"文章标题",clearable:!0},null,8,["modelValue"])]),_:1}),e(p,{label:"类型"},{default:a(()=>[e(c,{modelValue:o.type,"onUpdate:modelValue":d[1]||(d[1]=t=>o.type=t),placeholder:"文章类型",clearable:!0},null,8,["modelValue"])]),_:1}),e(p,{label:"编码"},{default:a(()=>[e(c,{modelValue:o.code,"onUpdate:modelValue":d[2]||(d[2]=t=>o.code=t),placeholder:"文章编码",clearable:!0},null,8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(u,{type:"primary",onClick:b},{default:a(()=>[m("查询")]),_:1})]),_:1})]),_:1},8,["model"])]),r("div",I,[e(E,{data:n.list,border:"",stripe:""},{default:a(()=>[e(i,{prop:"id",align:"center",label:"ID",minWidth:"70"}),e(i,{prop:"code",align:"center",label:"编码",width:"100"}),e(i,{label:"标题",minWidth:"330"},{default:a(t=>[r("a",{class:"ex-link",href:"/a/"+t.row.code,target:"_blank"},x(t.row.title),9,P)]),_:1}),e(i,{prop:"createdTime",align:"center",label:"创建时间",minWidth:"170"}),e(i,{prop:"hits",align:"center",label:"点击数",minWidth:"100"}),e(i,{prop:"status",align:"center",label:"状态",width:"90"},{default:a(t=>[e(V,{modelValue:t.row.status,"onUpdate:modelValue":_=>t.row.status=_,activeValue:1,inactiveValue:0,onChange:_=>f(t.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(i,{prop:"updatedTime",align:"center",label:"更新时间",minWidth:"170"}),e(i,{prop:"updatedTime",align:"center",label:"操作",width:"160"},{default:a(()=>[e(u,{size:"small",plain:"",type:"primary"},{default:a(()=>[m("编辑")]),_:1}),e(u,{size:"small",type:"danger",plain:""},{default:a(()=>[m("删除")]),_:1})]),_:1})]),_:1},8,["data"])]),r("div",W,[e(w,{currentPage:n.params.page,"onUpdate:currentPage":d[3]||(d[3]=t=>n.params.page=t),pageSize:n.params.pageSize,layout:"jumper, prev, pager, next, total",total:n.total,background:""},null,8,["currentPage","pageSize","total"])])]),_:1})])])}}});export{A as default};