import{r as v,v as q,x as L,o as u,e as h,w as t,u as _,c as b,a as e,S as N,U as D,b as o,aw as V,h as f,ak as Y,f as C,d as l,t as k,P as x,Q as O,i as z,l as P,j as U,F as j}from"./main-Cw78g-lL.js";import{V as B}from"./index-DhMs0plD.js";import{V as E,a as F,c as Q}from"./VCard-DLuue0SI.js";import{a as G}from"./VOverlay-DS9RY67J.js";import{a as H,V as p}from"./VRow-BG5I4kc3.js";import{V as m}from"./VCardText-CmcafK4F.js";import{V as J}from"./VTable-BzqFprxi.js";import{V as K}from"./VChip-BmMdWnsY.js";import"./VAvatar-BFNrWSvb.js";import"./VImg-DHwMjE9V.js";import"./easing-DY7PVvcf.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";/* empty css              */import"./VSlideGroup-BHv8mlqE.js";const M={key:0},W={class:"v-card-content"},X=Object.assign({inheritAttrs:!1},{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,skipCheck:!0,default:void 0},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash","initialLoad","update:loading"],setup(a,{emit:y}){const i=a,r=y,g=v(!1),c=q({get(){return i.loading!==void 0?i.loading:g.value},set(d){i.loading!==void 0?r("update:loading",d):g.value=d}}),n=v(i.collapsed),s=v(!1),w=()=>{c.value=!1},I=()=>{n.value=!n.value,r("collapsed",n.value)},T=()=>{c.value=!0,r("refresh",w)},$=()=>{s.value=!0,r("trash")};return(d,A)=>{const R=L("IconBtn");return u(),h(B,null,{default:t(()=>[_(s)?C("",!0):(u(),b("div",M,[e(E,N(D(d.$attrs)),{default:t(()=>[e(F,null,{append:t(()=>[o("div",null,[V(d.$slots,"before-actions"),(!(a.actionRemove||a.actionRefresh)||a.actionCollapsed)&&!a.noActions?(u(),h(R,{key:0,onClick:I},{default:t(()=>[e(f,{size:"20",icon:"ri-arrow-up-s-line",style:Y([{transform:_(n)?"rotate(-180deg)":void 0},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):C("",!0),(!(a.actionRemove||a.actionCollapsed)||a.actionRefresh)&&!a.noActions?(u(),h(R,{key:1,onClick:T},{default:t(()=>[e(f,{size:"20",icon:"ri-refresh-line"})]),_:1})):C("",!0),(!(a.actionRefresh||a.actionCollapsed)||a.actionRemove)&&!a.noActions?(u(),h(R,{key:2,onClick:$},{default:t(()=>[e(f,{size:"20",icon:"ri-close-line"})]),_:1})):C("",!0)])]),default:t(()=>[i.title||d.$slots.title?(u(),h(Q,{key:0},{default:t(()=>[V(d.$slots,"title",{},()=>[l(k(i.title),1)])]),_:3})):C("",!0)]),_:3}),e(B,null,{default:t(()=>[x(o("div",W,[V(d.$slots,"default")],512),[[O,!_(n)]])]),_:3}),e(G,{modelValue:_(c),"onUpdate:modelValue":A[0]||(A[0]=S=>z(c)?c.value=S:null),contained:"",persistent:"","scroll-strategy":"none",class:"align-center justify-center"},{default:t(()=>[e(P,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3})}}}),Z=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," ACTION "),o("th",{scope:"col"}," ICON "),o("th",{scope:"col"}," DETAILS ")])],-1),ee=o("p",null,[l("You can specifically add Initial Load action using "),o("code",null,"loading"),l(" prop")],-1),te=o("span",null,"Refresh the page to see it again in action.",-1),oe=o("p",null,[l("You can specifically add collapsible action using "),o("code",null,"actionCollapse"),l(" prop")],-1),le=o("p",null,[l("You can specifically add refresh action using "),o("code",null,"actionRefresh"),l(" prop")],-1),ae=o("p",null,[l("You can specifically add remove action using "),o("code",null,"actionRemove"),l(" prop")],-1),ne=o("p",null,[o("code",null,"app-card-actions"),l(" also provides "),o("code",null,"before-actions"),l(" and "),o("code",null,"after-actions"),l(" slot")],-1),ie=o("span",null,"You can find more details in our documentation",-1),Ve={__name:"card-actions",setup(a){const y=[{action:"Collapse",icon:"ri-arrow-up-s-line",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"ri-refresh-line",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"ri-close-line",details:"Remove card from page using remove card action"}],i=v(!0);setTimeout(()=>{i.value=!1},3e3);const r=g=>{setTimeout(g,3e3)};return(g,c)=>{const n=X;return u(),h(H,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(m,{class:"px-0 pb-0"},{default:t(()=>[e(J,null,{default:t(()=>[Z,o("tbody",null,[(u(),b(j,null,U(y,s=>o("tr",{key:s.icon},[o("td",null,k(s.action),1),o("td",null,[e(f,{size:"20",icon:s.icon},null,8,["icon"])]),o("td",null,k(s.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{loading:_(i),"onUpdate:loading":c[0]||(c[0]=s=>z(i)?i.value=s:null),title:"Initial Load","no-actions":""},{default:t(()=>[e(m,null,{default:t(()=>[ee,te]),_:1})]),_:1},8,["loading"])]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(m,null,{default:t(()=>[oe,o("span",null,[l("Click on "),e(f,{size:"20",icon:"ri-arrow-up-s-line"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(m,null,{default:t(()=>[le,o("span",null,[l("Click on "),e(f,{size:"20",icon:"ri-refresh-line"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(m,null,{default:t(()=>[ae,o("span",null,[l("Click on "),e(f,{size:"20",icon:"ri-close-line"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(K,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[e(m,null,{default:t(()=>[ne,ie]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Ve as default};