import{r as p,x as w,o as _,c as h,a as e,w as s,b as r,u as t,al as m,t as k,R as y,V as P,d as g,h as b}from"./main-Cw78g-lL.js";import{u as x}from"./useGenerateImageVariant-WNsdL4gJ.js";import{V as C}from"./VNodeRenderer-CQRqKfoX.js";import{a as v,c as R,V as B}from"./VCard-DLuue0SI.js";import{V as c}from"./VCardText-CmcafK4F.js";import{V as I}from"./VForm-CQfhZNSg.js";import{a as N,V as d}from"./VRow-BG5I4kc3.js";import{V as f}from"./VTextField-BKkE6jAr.js";import{V as j}from"./VImg-DHwMjE9V.js";import"./VAvatar-BFNrWSvb.js";import"./form-wczSFyJg.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              *//* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./index-DhMs0plD.js";import"./VField-Chh8HzJD.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";const D="/build/assets/auth-v1-reset-password-mask-dark-CDZPByqu.png",M="/build/assets/auth-v1-reset-password-mask-light-BSk2kjPD.png",S={class:"auth-wrapper d-flex align-center justify-center pa-4"},T={class:"app-logo"},L={class:"app-logo-title"},E=r("h4",{class:"text-h4 mb-1"}," Reset Password 🔒 ",-1),F=r("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),U=r("span",{class:"text-base"},"Back to login",-1),ne={__name:"reset-password-v1",setup($){const V=x(M,D),l=p({newPassword:"",confirmPassword:""}),n=p(!1),i=p(!1);return(q,a)=>{const u=w("RouterLink");return _(),h("div",S,[e(B,{class:"auth-card pa-1 pa-sm-7","max-width":"448"},{default:s(()=>[e(v,{class:"justify-center pb-6"},{default:s(()=>[e(R,null,{default:s(()=>[e(u,{to:"/"},{default:s(()=>[r("div",T,[e(t(C),{nodes:t(m).app.logo},null,8,["nodes"]),r("h1",L,k(t(m).app.title),1)])]),_:1})]),_:1})]),_:1}),e(c,null,{default:s(()=>[E,F]),_:1}),e(c,null,{default:s(()=>[e(I,{onSubmit:y(()=>{},["prevent"])},{default:s(()=>[e(N,null,{default:s(()=>[e(d,{cols:"12"},{default:s(()=>[e(f,{modelValue:t(l).newPassword,"onUpdate:modelValue":a[0]||(a[0]=o=>t(l).newPassword=o),autofocus:"",label:"New Password",placeholder:"············",type:t(n)?"text":"password","append-inner-icon":t(n)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[1]||(a[1]=o=>n.value=!t(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:s(()=>[e(f,{modelValue:t(l).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=o=>t(l).confirmPassword=o),label:"Confirm Password",placeholder:"············",type:t(i)?"text":"password","append-inner-icon":t(i)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[3]||(a[3]=o=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:s(()=>[e(P,{block:"",type:"submit"},{default:s(()=>[g(" Set New Password ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:s(()=>[e(u,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:s(()=>[e(b,{start:"",size:"20",icon:"ri-arrow-left-s-line",class:"flip-in-rtl"}),U]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(j,{src:t(V),class:"d-none d-md-block auth-footer-mask flip-in-rtl"},null,8,["src"])])}}};export{ne as default};