import{S as p}from"./shepherd.esm-C7bYZz12.js";import{a4 as f,e6 as m,A as b,J as x,o as h,c as y,a as o,w as n,V as k,u as c,d as w}from"./main-Cw78g-lL.js";import{V as B}from"./VCard-DLuue0SI.js";import{V as _}from"./VCardText-CmcafK4F.js";import"./VAvatar-BFNrWSvb.js";import"./VImg-DHwMjE9V.js";var S={};const g="$shepherd",i=(...t)=>new p.Tour(...t),s=function(a){s.installed||(s.installed=!0,a.config.globalProperties[g]=i)},C={install:s};if(S.ES_BUILD==="false"){let t=null;typeof window<"u"?t=window.Vue:typeof global<"u"&&(t=global.Vue),t&&t.use(C)}const F={__name:"tour",setup(t){const a=f(),{ctrl_k:u,meta_k:d}=m();let e=null;return b([u,d,()=>a.path],()=>{e.isActive()&&e.cancel()}),x(()=>{const l=document.querySelector(".layout-navbar");e=i({useModalOverlay:!0,stepsContainer:document.querySelector(".layout-wrapper"),modelContainer:document.querySelector(".layout-wrapper"),defaultStepOptions:{cancelIcon:{enabled:!0},modalOverlayOpeningPadding:2,modalOverlayOpeningRadius:5}}),e.addSteps([{id:"welcome",title:"Welcome",arrow:!0,attachTo:{element:l,on:"bottom"},text:"Welcome to our tour page, Guide users to the key features of the product.",buttons:[{action:e.cancel,classes:"backBtnClass",text:"Back"},{action:e.next,text:"Next",classes:"nextBtnClass"}]},{id:"notification",title:"Notifications",arrow:!0,attachTo:{element:document.querySelector("#notification-btn"),on:"bottom"},text:"Manage your notifications and stay up-to-date with latest updates.",buttons:[{label:"Back",text:"Back",action:e.back,classes:"backBtnClass"},{label:"Next",text:"Next",action:e.next,classes:"nextBtnClass"}]},{id:"footer",title:"Footer",arrow:!0,attachTo:{element:document.querySelector(".layout-footer"),on:"bottom"},text:"Footer section of the page.",buttons:[{label:"Back",text:"Back",action:e.back,classes:"backBtnClass"},{label:"Finish",text:"Finish",action:e.complete,classes:"nextBtnClass"}]}])}),(l,r)=>(h(),y("div",null,[o(B,{title:"Tour"},{default:n(()=>[o(_,null,{default:n(()=>[o(k,{onClick:r[0]||(r[0]=()=>{c(e)&&c(e).start()})},{default:n(()=>[w(" Start Tour ")]),_:1})]),_:1})]),_:1})]))}};export{F as default};