import{m as K,a as Q,b as Y}from"./form-wczSFyJg.js";import{b as Z}from"./index-DhMs0plD.js";import{ao as D,ap as F,aq as N,v as s,bB as B,br as j,ar as H,a as o,bC as G,bu as U,bp as L,r as W,I as R,u as X,aM as ee,K as ae,J as te,bD as E,A as x,Z as ne,aQ as T,bm as O,aR as se,b3 as le,bE as ie}from"./main-Cw78g-lL.js";import{m as ue,M as re}from"./VImg-DHwMjE9V.js";const oe=D({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...F(),...ue({transition:{component:Z,leaveAbsolute:!0,group:!0}})},"VMessages"),de=N()({name:"VMessages",props:oe(),setup(e,c){let{slots:V}=c;const a=s(()=>B(e.messages)),{textColorClasses:v,textColorStyles:t}=j(s(()=>e.color));return H(()=>o(re,{transition:e.transition,tag:"div",class:["v-messages",v.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((i,d)=>o("div",{class:"v-messages__message",key:`${d}-${a.value}`},[V.message?V.message({message:i}):i]))]})),{}}}),ce=D({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...K()},"validation");function ve(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G(),V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:U();const a=L(e,"modelValue"),v=s(()=>e.validationValue===void 0?a.value:e.validationValue),t=Q(),i=W([]),d=R(!0),S=s(()=>!!(B(a.value===""?null:a.value).length||B(v.value===""?null:v.value).length)),p=s(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),M=s(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),g=s(()=>{var n;return(n=e.errorMessages)!=null&&n.length?B(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value}),f=s(()=>{let n=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";n==="lazy"&&(n="input lazy");const l=new Set((n==null?void 0:n.split(" "))??[]);return{blur:l.has("blur")||l.has("input"),input:l.has("input"),submit:l.has("submit"),lazy:l.has("lazy")}}),y=s(()=>{var n;return e.error||(n=e.errorMessages)!=null&&n.length?!1:e.rules.length?d.value?i.value.length||f.value.lazy?null:!0:!i.value.length:!0}),I=R(!1),k=s(()=>({[`${c}--error`]:y.value===!1,[`${c}--dirty`]:S.value,[`${c}--disabled`]:p.value,[`${c}--readonly`]:M.value})),h=s(()=>e.name??X(V));ee(()=>{t==null||t.register({id:h.value,validate:u,reset:C,resetValidation:b})}),ae(()=>{t==null||t.unregister(h.value)}),te(async()=>{f.value.lazy||await u(!0),t==null||t.update(h.value,y.value,g.value)}),E(()=>f.value.input,()=>{x(v,()=>{if(v.value!=null)u();else if(e.focused){const n=x(()=>e.focused,l=>{l||u(),n()})}})}),E(()=>f.value.blur,()=>{x(()=>e.focused,n=>{n||u()})}),x([y,g],()=>{t==null||t.update(h.value,y.value,g.value)});async function C(){a.value=null,await ne(),await b()}async function b(){d.value=!0,f.value.lazy?i.value=[]:await u(!0)}async function u(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const l=[];I.value=!0;for(const m of e.rules){if(l.length>=+(e.maxErrors??1))break;const r=await(typeof m=="function"?m:()=>m)(v.value);if(r!==!0){if(r!==!1&&typeof r!="string"){console.warn(`${r} is not a valid value. Rule functions must return boolean true or a string.`);continue}l.push(r||"")}}return i.value=l,I.value=!1,d.value=n,i.value}return{errorMessages:g,isDirty:S,isDisabled:p,isReadonly:M,isPristine:d,isValid:y,isValidating:I,reset:C,resetValidation:b,validate:u,validationClasses:k}}const ge=D({id:String,appendIcon:T,centerAffix:{type:Boolean,default:!0},prependIcon:T,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":O(),"onClick:append":O(),...F(),...se(),...ce()},"VInput"),pe=N()({name:"VInput",props:{...ge()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:V,slots:a,emit:v}=c;const{densityClasses:t}=le(e),{rtlClasses:i}=ie(),{InputIcon:d}=Y(e),S=U(),p=s(()=>e.id||`input-${S}`),M=s(()=>`${p.value}-messages`),{errorMessages:g,isDirty:f,isDisabled:y,isReadonly:I,isPristine:k,isValid:h,isValidating:C,reset:b,resetValidation:u,validate:n,validationClasses:l}=ve(e,"v-input",p),m=s(()=>({id:p,messagesId:M,isDirty:f,isDisabled:y,isReadonly:I,isPristine:k,isValid:h,isValidating:C,reset:b,resetValidation:u,validate:n})),P=s(()=>{var r;return(r=e.errorMessages)!=null&&r.length||!k.value&&g.value.length?g.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var A,_,$,z;const r=!!(a.prepend||e.prependIcon),q=!!(a.append||e.appendIcon),w=P.value.length>0,J=!e.hideDetails||e.hideDetails==="auto"&&(w||!!a.details);return o("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,i.value,l.value,e.class],style:e.style},[r&&o("div",{key:"prepend",class:"v-input__prepend"},[(A=a.prepend)==null?void 0:A.call(a,m.value),e.prependIcon&&o(d,{key:"prepend-icon",name:"prepend"},null)]),a.default&&o("div",{class:"v-input__control"},[(_=a.default)==null?void 0:_.call(a,m.value)]),q&&o("div",{key:"append",class:"v-input__append"},[e.appendIcon&&o(d,{key:"append-icon",name:"append"},null),($=a.append)==null?void 0:$.call(a,m.value)]),J&&o("div",{class:"v-input__details"},[o(de,{id:M.value,active:w,messages:P.value},{message:a.message}),(z=a.details)==null?void 0:z.call(a,m.value)])])}),{reset:b,resetValidation:u,validate:n,isValid:h,errorMessages:g}}});export{pe as V,ge as m};