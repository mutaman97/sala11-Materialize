import{aq as i,bc as g,bd as f,ap as o,L as y,ao as V,aQ as k,aR as P,aH as S,be as b,as as C,aZ as h,a_ as z,b0 as I,b2 as A,b3 as R,aK as x,bf as D,ar as T,a as l,h as _,aS as B,ba as F}from"./main-Cw78g-lL.js";import{V as q}from"./VImg-DHwMjE9V.js";function N(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return i()({name:s??g(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...o()},setup(e,u){let{slots:t}=u;return()=>{var n;return y(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}const H=V({start:Boolean,end:Boolean,icon:k,image:String,text:String,...o(),...P(),...S(),...b(),...C(),...h(),...z({variant:"flat"})},"VAvatar"),O=i()({name:"VAvatar",props:H(),setup(a,r){let{slots:s}=r;const{themeClasses:e}=I(a),{colorClasses:u,colorStyles:t,variantClasses:n}=A(a),{densityClasses:c}=R(a),{roundedClasses:m}=x(a),{sizeClasses:d,sizeStyles:v}=D(a);return T(()=>l(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},e.value,u.value,c.value,m.value,d.value,n.value,a.class],style:[t.value,v.value,a.style]},{default:()=>[s.default?l(B,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?l(q,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?l(_,{key:"icon",icon:a.icon},null):a.text,F(!1,"v-avatar")]})),{}}});export{O as V,N as c};