import{ao as A,ap as D,aq as T,ar as O,a as l,aQ as V,bm as F,aV as Y,aH as ee,aZ as le,b0 as ae,b5 as ne,aK as te,bE as ie,v as c,bu as oe,r as p,aI as se,aJ as re,br as de,A as ce,bW as ue,bX as ve,aO as fe,b9 as be,P as ye,Q as ge,aS as me,F as Ce,a6 as ke}from"./main-Cw78g-lL.js";import{V as he,m as Ie,u as _e,b as Pe}from"./form-wczSFyJg.js";import{a as Ve}from"./index-DhMs0plD.js";import{n as Fe,a as pe,s as Be}from"./easing-DY7PVvcf.js";const xe=A({floating:Boolean,...D()},"VFieldLabel"),_=T()({name:"VFieldLabel",props:xe(),setup(e,u){let{slots:o}=u;return O(()=>l(he,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},o)),{}}}),Se=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Le=A({appendInnerIcon:V,bgColor:String,clearable:Boolean,clearIcon:{type:V,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:V,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Se.includes(e)},"onClick:clear":F(),"onClick:appendInner":F(),"onClick:prependInner":F(),...D(),...Y(),...ee(),...le()},"VField"),we=T()({name:"VField",inheritAttrs:!1,props:{id:String,...Ie(),...Le()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:o,emit:Re,slots:a}=u;const{themeClasses:K}=ae(e),{loaderClasses:M}=ne(e),{focusClasses:U,isFocused:B,focus:b,blur:y}=_e(e),{InputIcon:P}=Pe(e),{roundedClasses:W}=te(e),{rtlClasses:q}=ie(),g=c(()=>e.dirty||e.active),m=c(()=>!e.singleLine&&!!(e.label||a.label)),Q=oe(),s=c(()=>e.id||`input-${Q}`),X=c(()=>`${s.value}-messages`),x=p(),C=p(),S=p(),L=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:j,backgroundColorStyles:H}=se(re(e,"bgColor")),{textColorClasses:w,textColorStyles:R}=de(c(()=>e.error||e.disabled?void 0:g.value&&B.value?e.color:e.baseColor));ce(g,n=>{if(m.value){const t=x.value.$el,r=C.value.$el;requestAnimationFrame(()=>{const d=Fe(t),i=r.getBoundingClientRect(),k=i.x-d.x,h=i.y-d.y-(d.height/2-i.height/2),f=i.width/.75,I=Math.abs(f-d.width)>1?{maxWidth:fe(f)}:void 0,N=getComputedStyle(t),E=getComputedStyle(r),Z=parseFloat(N.transitionDuration)*1e3||150,z=parseFloat(E.getPropertyValue("--v-field-label-scale")),G=E.getPropertyValue("color");t.style.visibility="visible",r.style.visibility="hidden",pe(t,{transform:`translate(${k}px, ${h}px) scale(${z})`,color:G,...I},{duration:Z,easing:Be,direction:n?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),r.style.removeProperty("visibility")})})}},{flush:"post"});const v=c(()=>({isActive:g,isFocused:B,controlRef:S,blur:y,focus:b}));function J(n){n.target!==document.activeElement&&n.preventDefault()}function $(n){var t;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(t=e["onClick:clear"])==null||t.call(e,new MouseEvent("click")))}return O(()=>{var k,h,f;const n=e.variant==="outlined",t=!!(a["prepend-inner"]||e.prependInnerIcon),r=!!(e.clearable||a.clear),d=!!(a["append-inner"]||e.appendInnerIcon||r),i=()=>a.label?a.label({...v.value,label:e.label,props:{for:s.value}}):e.label;return l("div",ke({class:["v-field",{"v-field--active":g.value,"v-field--appended":d,"v-field--center-affix":e.centerAffix??!L.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!i(),[`v-field--variant-${e.variant}`]:!0},K.value,j.value,U.value,M.value,W.value,q.value,e.class],style:[H.value,e.style],onClick:J},o),[l("div",{class:"v-field__overlay"},null),l(be,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(P,{key:"prepend-icon",name:"prependInner"},null),(k=a["prepend-inner"])==null?void 0:k.call(a,v.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&m.value&&l(_,{key:"floating-label",ref:C,class:[w.value],floating:!0,for:s.value,style:R.value},{default:()=>[i()]}),l(_,{ref:x,for:s.value},{default:()=>[i()]}),(h=a.default)==null?void 0:h.call(a,{...v.value,props:{id:s.value,class:"v-field__input","aria-describedby":X.value},focus:b,blur:y})]),r&&l(Ve,{key:"clear"},{default:()=>[ye(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(me,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...v.value,props:{onKeydown:$,onFocus:b,onBlur:y,onClick:e["onClick:clear"]}}):l(P,{name:"clear",onKeydown:$,onFocus:b,onBlur:y},null)]})]),[[ge,e.dirty]])]}),d&&l("div",{key:"append",class:"v-field__append-inner"},[(f=a["append-inner"])==null?void 0:f.call(a,v.value),e.appendInnerIcon&&l(P,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",w.value],style:R.value},[n&&l(Ce,null,[l("div",{class:"v-field__outline__start"},null),m.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:C,floating:!0,for:s.value},{default:()=>[i()]})]),l("div",{class:"v-field__outline__end"},null)]),L.value&&m.value&&l(_,{ref:C,floating:!0,for:s.value},{default:()=>[i()]})])])}),{controlRef:S}}});function Te(e){const u=Object.keys(we.props).filter(o=>!ue(o)&&o!=="class"&&o!=="style");return ve(e,u)}export{we as V,Te as f,Le as m};