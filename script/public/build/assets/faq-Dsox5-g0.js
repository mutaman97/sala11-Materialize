import{_ as B}from"./AppSearchHeader-C1gN0HX2.js";import{r as h,A as w,o as i,c as m,a as t,w as a,u as l,i as _,b as o,h as d,P as g,Q as q,F as V,j as v,e as x,d as T,t as p,z as Q}from"./main-Cw78g-lL.js";import{f as S}from"./faq-illustration-DCpXcGd5.js";import{$ as U}from"./api-COQrmxD3.js";import{a as k,V as y}from"./VRow-BG5I4kc3.js";import{V as A}from"./VChip-BmMdWnsY.js";import{V as L}from"./VTextField-BKkE6jAr.js";import{V as N,a as P}from"./VTabs-C8Bugdfz.js";import{V as W}from"./VImg-DHwMjE9V.js";import{V as E,a as R}from"./VWindowItem-V-MyZp4h.js";import{V as z}from"./VAvatar-BFNrWSvb.js";import{V as $,a as j}from"./VExpansionPanel-D2VsAddz.js";import{V as D}from"./VCard-DLuue0SI.js";import{V as H}from"./VCardText-CmcafK4F.js";import"./index-CvdUsmOx.js";/* empty css              */import"./index-DhMs0plD.js";import"./VSlideGroup-BHv8mlqE.js";/* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./VField-Chh8HzJD.js";import"./form-wczSFyJg.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";import"./forwardRefs-C-GTDzx5.js";import"./lazy-Dz28_Vpk.js";import"./ssrBoot-B8feSXE9.js";const Y=o("h4",{class:"text-h4 text-primary mb-2"}," Hello, how can we help? ",-1),G=o("p",{class:"text-body-1 mb-7"}," or choose a category to quickly find the help you need ",-1),J={class:"d-flex align-center mb-4 gap-x-4"},K={class:"text-h5"},M={class:"text-body-1"},O=o("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),X={class:"text-center mt-6"},Z={class:"py-6"},ee=o("h4",{class:"text-h4 my-2"}," You still have a question? ",-1),te=o("p",{class:"text-body-1 mb-0"}," If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly! ",-1),ae={class:"text-h5 mb-1"},oe={class:"text-body-1"},Qe={__name:"faq",setup(se){const c=h(""),r=h([]),I=async()=>{const b=await U("/pages/faq",{query:{q:c.value}}).catch(s=>console.log(s));r.value=b},n=h("Payment"),f=h(1);w(n,()=>f.value=0),w(c,I,{immediate:!0});const C=[{icon:"ri-phone-line",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"ri-mail-line",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(b,s)=>{const F=B;return i(),m("section",null,[t(F,{modelValue:l(c),"onUpdate:modelValue":s[0]||(s[0]=e=>_(c)?c.value=e:null),"custom-class":"mb-6"},{default:a(()=>[Y,G,t(L,{placeholder:"search articles...",class:"search-header-input mx-auto my-4"},{"prepend-inner":a(()=>[t(d,{icon:"ri-search-line",size:"18"})]),_:1})]),_:1},8,["modelValue"]),t(k,null,{default:a(()=>[g(t(y,{cols:"12",md:"3",sm:"5",class:"position-relative"},{default:a(()=>[t(N,{modelValue:l(n),"onUpdate:modelValue":s[1]||(s[1]=e=>_(n)?n.value=e:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[(i(!0),m(V,null,v(l(r),e=>(i(),x(P,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[t(d,{icon:e.faqIcon,start:""},null,8,["icon"]),T(" "+p(e.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t(W,{height:"195",src:l(S),class:"d-none d-sm-block mt-4"},null,8,["src"])]),_:1},512),[[q,l(r).length]]),t(y,{cols:"12",md:"9",sm:"7"},{default:a(()=>[t(E,{modelValue:l(n),"onUpdate:modelValue":s[3]||(s[3]=e=>_(n)?n.value=e:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(i(!0),m(V,null,v(l(r),e=>(i(),x(R,{key:e.faqTitle,value:e.faqTitle},{default:a(()=>[o("div",J,[t(z,{rounded:"lg",color:"primary",variant:"tonal",size:"50"},{default:a(()=>[t(d,{size:30,icon:e.faqIcon},null,8,["icon"])]),_:2},1024),o("div",null,[o("h5",K,p(e.faqTitle),1),o("div",M,p(e.faqSubtitle),1)])]),t($,{modelValue:l(f),"onUpdate:modelValue":s[2]||(s[2]=u=>_(f)?f.value=u:null),multiple:""},{default:a(()=>[(i(!0),m(V,null,v(e.faqs,u=>(i(),x(j,{key:u.question,title:u.question,text:u.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),g(t(y,{cols:"12",class:Q(l(r).length?"":"d-flex justify-center align-center")},{default:a(()=>[t(d,{icon:"ri-question-line",start:"",size:"20"}),O]),_:1},8,["class"]),[[q,!l(r).length]])]),_:1}),o("div",X,[o("div",Z,[t(A,{color:"primary",size:"small"},{default:a(()=>[T(" Question ")]),_:1}),ee,te]),t(k,{class:"mt-3"},{default:a(()=>[(i(),m(V,null,v(C,e=>t(y,{key:e.icon,sm:"6",cols:"12"},{default:a(()=>[t(D,{flat:"",color:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"},{default:a(()=>[t(H,{class:"pa-6"},{default:a(()=>[t(z,{rounded:"",color:"primary",variant:"tonal",size:"50",class:"mb-4"},{default:a(()=>[t(d,{icon:e.icon,size:"30"},null,8,["icon"])]),_:2},1024),o("h5",ae,p(e.via),1),o("div",oe,p(e.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}};export{Qe as default};