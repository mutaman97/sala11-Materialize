import{o as t,c as l,b as i,r as V,v as f,bR as z,e as a,w as b,F as _,j as C,z as u,u as r,dx as w,h as m,t as p,f as d,i as $}from"./main-Cw78g-lL.js";import{V as A}from"./VSlideGroupItem-Cw9pM-FO.js";import{V as q}from"./VSlideGroup-BHv8mlqE.js";const B={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"},N=i("circle",{cx:"10",cy:"10",r:"10",fill:"CurrentColor"},null,-1),j=i("path",{fill:"#fff",d:"m8.833 11.85 5.362-5.362.826.825L8.833 13.5 5.121 9.788l.825-.825z"},null,-1),E=[N,j];function L(v,g){return t(),l("svg",B,[...E])}const D={render:L},F=["onClick"],G={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center gap-2"},I={class:"stepper-icon"},R={class:"d-flex flex-column gap-y-1"},H={class:"stepper-title font-weight-medium text-base mb-0"},O={key:0,class:"stepper-subtitle text-sm mb-0"},U={class:"d-flex align-center gap-x-2 me-2"},J={class:"d-flex align-center gap-2"},K={class:"d-flex align-center justify-center"},M={key:0,class:"stepper-step-indicator"},P={class:"app-stepper-title-wrapper",style:{"line-height":"0"}},Q={class:"text-base font-weight-medium step-title"},T={key:0,class:"text-sm step-subtitle mb-0"},W={key:0,class:"stepper-step-line"},X={key:0,class:"stepper-step-line vertical"},se={__name:"AppStepper",props:{items:{type:Array,required:!0},currentStep:{type:Number,required:!1,default:0},direction:{type:String,required:!1,default:"horizontal"},iconSize:{type:[String,Number],required:!1,default:52},isActiveStepValid:{type:Boolean,required:!1,default:void 0},align:{type:String,required:!1,default:"default"}},emits:["update:currentStep"],setup(v,{emit:g}){const e=v,y=g,n=V(e.currentStep||0),x=f(()=>c=>c<n.value?"stepper-steps-completed":c===n.value?"stepper-steps-active":""),S=f(()=>c=>e.direction==="horizontal"&&e.items.length-1!==c),h=f(()=>e.isActiveStepValid!==void 0);return z(()=>{e.currentStep!==void 0&&e.currentStep<e.items.length&&e.currentStep>=0&&(n.value=e.currentStep),y("update:currentStep",n.value)}),(c,k)=>(t(),a(q,{modelValue:r(n),"onUpdate:modelValue":k[0]||(k[0]=s=>$(n)?n.value=s:null),class:u(["app-stepper",`app-stepper-${e.align} ${e.items[0].icon?"app-stepper-icons":""}`]),"show-arrows":"",direction:e.direction},{default:b(()=>[(t(!0),l(_,null,C(e.items,(s,o)=>(t(),a(A,{key:s.title,value:o},{default:b(()=>[i("div",{class:u(["cursor-pointer app-stepper-step",[!e.isActiveStepValid&&r(h)&&"stepper-steps-invalid",r(x)(o)]]),onClick:Y=>!r(h)&&y("update:currentStep",o)},[s.icon?(t(),l("div",G,[i("div",{class:u(["d-flex align-center gap-2 step-wrapper",[e.direction==="horizontal"&&"flex-column"]])},[i("div",I,[typeof s.icon=="object"?(t(),a(w(s.icon),{key:0})):(t(),a(m,{key:1,icon:s.icon,size:s.size||e.iconSize},null,8,["icon","size"]))]),i("div",R,[i("p",H,p(s.title),1),s.subtitle?(t(),l("p",O,p(s.subtitle),1)):d("",!0)])],2),r(S)(o)?(t(),a(m,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"20",icon:"ri-arrow-right-s-line"})):d("",!0)])):(t(),l(_,{key:1},[i("div",U,[i("div",J,[i("div",K,[o>=r(n)?(t(),l(_,{key:0},[!r(h)||e.isActiveStepValid||o!==r(n)?(t(),l("div",M)):(t(),a(m,{key:1,icon:"ri-error-warning-line",size:"24",color:"error"}))],64)):(t(),a(w(r(D)),{key:1,class:"stepper-step-icon"}))]),i("h4",{class:u(`${s.subtitle?"text-h4":"text-h6"} step-number`)},p((o+1).toString().padStart(2,"0")),3)]),i("div",P,[i("h6",Q,p(s.title),1),s.subtitle?(t(),l("p",T,p(s.subtitle),1)):d("",!0)]),r(S)(o)?(t(),l("div",W)):d("",!0)]),e.direction==="vertical"&&e.items.length-1!==o?(t(),l("div",X)):d("",!0)],64))],10,F)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction","class"]))}};export{se as _};