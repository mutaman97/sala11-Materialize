import{r as w,o as n,c as m,b as t,aw as h,t as a,a as e,w as r,d as o,h as b,u as p,i as I,F as f,j as P,a6 as C,z as k,P as V,Q as x,e as L,V as B,p as N,k as z}from"./main-Cw78g-lL.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./form-wczSFyJg.js";import{V as v}from"./VChip-BmMdWnsY.js";import{V as F}from"./VSwitch-CMI6vM0W.js";import{V as T,a as j}from"./VRow-BG5I4kc3.js";import{V as A}from"./VCard-DLuue0SI.js";import{V as c}from"./VCardText-CmcafK4F.js";import{V as D}from"./VImg-DHwMjE9V.js";import{V as $,a as E,b as M}from"./VList-DJjA2_W7.js";const Y="/build/assets/pricing-illustration-1-C5Y58fga.png",G="/build/assets/pricing-illustration-2-BFWKxetI.png",R="/build/assets/pricing-illustration-3-C8E3ljeb.png",d=i=>(N("data-v-bb58a1e7"),i=i(),z(),i),J={class:"text-center mb-6"},K={class:"text-h4 mb-2"},Q=d(()=>t("p",{class:"mb-0"},[o(" All plans include 40+ advanced tools and features to boost your product. "),t("br"),o(" Choose the best plan to fit your needs. ")],-1)),W={class:"d-flex align-center justify-center mx-auto pt-sm-7 pb-sm-6 py-4"},H={class:"position-relative"},O={class:"pricing-save-chip position-absolute d-sm-block d-none"},X=d(()=>t("div",{class:"text-body-1 font-weight-medium"}," Annually ",-1)),Z={class:"text-h4 mb-2"},ee={class:"mb-0 text-body-1"},te={class:"d-flex justify-center align-center"},se=d(()=>t("span",{class:"text-body-1 font-weight-medium align-self-start"},"$",-1)),re={class:"text-h1 font-weight-medium text-primary"},ae=d(()=>t("span",{class:"text-body-1 font-weight-medium align-self-end"},"/month",-1)),oe={class:"text-truncate"},ie={__name:"AppPricing",props:{title:{type:String,required:!1},cols:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[String,Number],required:!1},lg:{type:[String,Number],required:!1},xl:{type:[String,Number],required:!1}},setup(i){const u=i,l=w(!0),S=[{name:"Basic",tagLine:"A simple start for everyone",logo:Y,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:G,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom “Thank you” page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:R,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(g,_)=>(n(),m(f,null,[t("div",J,[h(g.$slots,"heading",{},()=>[t("h4",K,a(u.title?u.title:"Pricing Plans"),1)],!0),h(g.$slots,"subtitle",{},()=>[Q],!0)]),t("div",W,[e(q,{for:"pricing-plan-toggle",class:"me-2 font-weight-medium cursor-pointer"},{default:r(()=>[o(" Monthly ")]),_:1}),t("div",H,[t("div",O,[e(b,{start:"",icon:"ri-corner-left-down-fill",size:"24",class:"text-disabled flip-in-rtl mt-1 me-1"}),e(v,{size:"small",color:"primary",class:"mt-n2"},{default:r(()=>[o(" Save up to 10% ")]),_:1})]),e(F,{id:"pricing-plan-toggle",modelValue:p(l),"onUpdate:modelValue":_[0]||(_[0]=s=>I(l)?l.value=s:null)},{label:r(()=>[X]),_:1},8,["modelValue"])])]),e(j,null,{default:r(()=>[(n(),m(f,null,P(S,s=>e(T,C({key:s.logo,ref_for:!0},u),{default:r(()=>[e(A,{flat:"",border:"",class:k(s.isPopular?"border-primary border-opacity-100":"")},{default:r(()=>[e(c,{class:"text-end pt-4",style:{"block-size":"3.75rem"}},{default:r(()=>[V(e(v,{color:"primary",size:"small"},{default:r(()=>[o(" Popular ")]),_:2},1536),[[x,s.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:r(()=>[e(D,{height:120,src:s.logo,class:"mx-auto mb-5"},null,8,["src"]),t("h4",Z,a(s.name),1),t("p",ee,a(s.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:r(()=>[t("div",null,[t("div",te,[se,t("h1",re,a(p(l)?Math.floor(Number(s.yearlyPrice)/12):s.monthlyPrice),1),ae]),V(t("div",{class:"text-caption"},a(s.yearlyPrice===0?"free":`USD ${s.yearlyPrice}/Year`),513),[[x,p(l)]])])]),_:2},1024),e(c,{class:"pt-2"},{default:r(()=>[e($,{class:"card-list pb-5"},{default:r(()=>[(n(!0),m(f,null,P(s.features,y=>(n(),L(E,{key:y},{prepend:r(()=>[]),default:r(()=>[e(M,{class:"text-body-1 d-flex align-center"},{default:r(()=>[e(b,{size:14,icon:"ri-circle-line",class:"me-2"}),t("div",oe,a(y),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),e(B,{active:!1,block:"",color:s.current?"success":"primary",variant:s.isPopular?"elevated":"outlined",to:{name:"front-pages-payment"}},{default:r(()=>[o(a(s.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}},ye=U(ie,[["__scopeId","data-v-bb58a1e7"]]);export{ye as _};