import{a as M}from"./formatters-COAB7S_x.js";import{v as N,x as A,o as l,e as h,w as a,a as t,a6 as P,h as f,P as v,d as _,t as p,u as m,Q as g,c as k,F as w,j as $,f as x,b as n,z as I,R as T,V as R,r as E,s as F,W as L}from"./main-Cw78g-lL.js";import{P as U}from"./vue3-perfect-scrollbar.esm-Bq_YvC2Z.js";import{V as j}from"./VBadge-hYR-JcPm.js";import{V as q}from"./VMenu-DypGLeY7.js";import{V as D,a as Y}from"./VCard-DLuue0SI.js";import{V as G}from"./VChip-BmMdWnsY.js";import{V as H}from"./VTooltip-Csjob21H.js";import{V}from"./VDivider-qVXjHTOM.js";import{V as J,a as z,b as O}from"./VList-DJjA2_W7.js";import{V as W}from"./VAvatar-BFNrWSvb.js";import{V as Q}from"./VImg-DHwMjE9V.js";import{V as K}from"./VSpacer-B4bUzx1D.js";import{V as X}from"./VCardText-CmcafK4F.js";import"./helpers-cDhjtOJI.js";import"./VOverlay-DS9RY67J.js";import"./easing-DY7PVvcf.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DYOtB0Vc.js";import"./index-DhMs0plD.js";import"./VSlideGroup-BHv8mlqE.js";import"./ssrBoot-B8feSXE9.js";/* empty css              */const Z=n("h6",{class:"text-h6 text-truncate"}," Notifications ",-1),ee={class:"d-flex align-start gap-3"},te={key:0},ie={class:"text-body-2 text-high-emphasis font-weight-medium mb-1"},ae={class:"text-caption mb-2 text-medium-emphasis",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},oe={class:"text-caption mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},se={class:"d-flex flex-column align-end gap-2"},re={style:{"block-size":"20px","inline-size":"20px"}},le={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:Object,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(y,{emit:c}){const o=y,u=c,d=N(()=>o.notifications.some(i=>i.isSeen===!1)),b=()=>{const i=o.notifications.map(r=>r.id);d.value?u("read",i):u("unread",i)},s=N(()=>o.notifications.filter(i=>!i.isSeen).length);return(i,r)=>{const C=A("IconBtn");return l(),h(C,{id:"notification-btn"},{default:a(()=>[t(j,P({dot:""},o.badgeProps,{"model-value":o.notifications.some(e=>!e.isSeen),color:"error",bordered:"","offset-x":"1","offset-y":"1",class:"notification-badge"}),{default:a(()=>[t(f,{icon:"ri-notification-2-line"})]),_:1},16,["model-value"]),t(q,{activator:"parent",width:"380",location:o.location,offset:"15px","close-on-content-click":!1},{default:a(()=>[t(D,{class:"d-flex flex-column"},{default:a(()=>[t(Y,{class:"notification-section"},{append:a(()=>[v(t(G,{size:"small",class:"me-2",variant:"tonal",color:"primary"},{default:a(()=>[_(p(m(s))+" new ",1)]),_:1},512),[[g,!!m(d)]]),v(t(C,{size:"small",onClick:b},{default:a(()=>[t(f,{color:"high-emphasis",icon:m(d)?"ri-mail-open-line":"ri-mail-line"},null,8,["icon"]),t(H,{activator:"parent",location:"start"},{default:a(()=>[_(p(m(d)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[g,o.notifications.length]])]),default:a(()=>[Z]),_:1}),t(V),t(m(U),{options:{wheelPropagation:!1},style:{"max-block-size":"27rem"}},{default:a(()=>[t(J,{class:"py-0"},{default:a(()=>[(l(!0),k(w,null,$(o.notifications,(e,B)=>(l(),k(w,{key:e.title},[B>0?(l(),h(V,{key:0})):x("",!0),t(z,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class py-3 px-4",onClick:S=>i.$emit("click:notification",e)},{default:a(()=>[n("div",ee,[t(W,{size:"40",color:e.color&&!e.img?e.color:void 0,variant:e.img?void 0:"tonal"},{default:a(()=>[e.text?(l(),k("span",te,p(("avatarText"in i?i.avatarText:m(M))(e.text)),1)):x("",!0),e.img?(l(),h(Q,{key:1,src:e.img},null,8,["src"])):x("",!0),e.icon?(l(),h(f,{key:2,icon:e.icon},null,8,["icon"])):x("",!0)]),_:2},1032,["color","variant"]),n("div",null,[n("div",ie,p(e.title),1),n("p",ae,p(e.subtitle),1),n("p",oe,p(e.time),1)]),t(K),n("div",se,[t(f,{color:e.isSeen?"secondary":"primary",class:I(`${e.isSeen?"visible-in-hover":""} ms-1`),size:"10",icon:"ri-circle-fill",onClick:T(S=>i.$emit(e.isSeen?"unread":"read",[e.id]),["stop"])},null,8,["color","class","onClick"]),n("div",re,[t(f,{size:"20",icon:"ri-close-line",color:"medium-emphasis",class:"visible-in-hover",onClick:S=>i.$emit("remove",e.id)},null,8,["onClick"])])])])]),_:2},1032,["onClick"])],64))),128)),v(t(z,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:a(()=>[t(O,null,{default:a(()=>[_("No Notification Found!")]),_:1})]),_:1},512),[[g,!o.notifications.length]])]),_:1})]),_:1}),t(V),v(t(X,{class:"pa-4"},{default:a(()=>[t(R,{block:"",size:"small"},{default:a(()=>[_(" View All Notifications ")]),_:1})]),_:1},512),[[g,o.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},$e={__name:"NavBarNotifications",setup(y){const c=E([{id:1,img:F,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Cecilia Becker",title:"Cecilia Becker",subtitle:"Accepted your connection",time:"12h ago",isSeen:!1,color:"primary"},{id:3,img:L,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,icon:"ri-bar-chart-line",title:"Monthly report generated",subtitle:"July month financial report is generated",time:"Apr 24, 10:30 AM",isSeen:!1,color:"info"},{id:5,text:"Meta Gadgets",title:"Application has been approved 🚀",subtitle:"Your Meta Gadgets project application has been approved.",time:"Feb 17, 12:17 PM",isSeen:!1,color:"success"},{id:6,icon:"ri-mail-line",title:"New message from Harry",subtitle:"You have new message from Harry",time:"Jan 6, 1:48 PM",isSeen:!0,color:"error"}]),o=s=>{c.value.forEach((i,r)=>{s===i.id&&c.value.splice(r,1)})},u=s=>{c.value.forEach(i=>{s.forEach(r=>{r===i.id&&(i.isSeen=!0)})})},d=s=>{c.value.forEach(i=>{s.forEach(r=>{r===i.id&&(i.isSeen=!1)})})},b=s=>{s.isSeen||u([s.id])};return(s,i)=>{const r=le;return l(),h(r,{notifications:m(c),onRemove:o,onRead:u,onUnread:d,"onClick:notification":b},null,8,["notifications"])}}};export{$e as default};