import{m as p,a as u}from"./VOverlay-DS9RY67J.js";import{f as S}from"./forwardRefs-C-GTDzx5.js";import{ao as h,by as O,aq as x,bp as T,bu as k,v as e,r as w,a6 as d,ar as A,a as C}from"./main-Cw78g-lL.js";import{u as I}from"./scopeId-Dq-41LqQ.js";const R=h({id:String,text:String,...O(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),G=x()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const r=T(t,"modelValue"),{scopeId:m}=I(),f=k(),n=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),b=e(()=>t.transition?t.transition:r.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":n.value},t.activatorProps));return A(()=>{const P=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:n.value},P,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,transition:b.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),S({},l)}});export{G as V};