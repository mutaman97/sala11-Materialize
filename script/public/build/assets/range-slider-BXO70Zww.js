import{m as Z,u as ee,a as le,V as ae,b as E,g as Y}from"./VSliderTrack-B6qk2jCu.js";import{m as te,V as q}from"./VInput-B2AKhCeD.js";import{m as se,u as oe,V as ne}from"./form-wczSFyJg.js";import{ao as ue,aq as re,r as b,bE as ie,bp as de,v as G,ar as ce,a,F as me,a6 as pe,o as g,e as S,u as k,i as $,w as d,h as ve,b as c,d as v}from"./main-Cw78g-lL.js";import{_ as Ve}from"./AppCardCode-D3FNA_n3.js";import{a as fe,V as R}from"./VRow-BG5I4kc3.js";import"./index-DhMs0plD.js";import"./VImg-DHwMjE9V.js";import"./VCard-DLuue0SI.js";import"./VAvatar-BFNrWSvb.js";import"./VCardText-CmcafK4F.js";import"./VDivider-qVXjHTOM.js";/* empty css              */const _e=ue({...se(),...te(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=re()({name:"VRangeSlider",props:_e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:n,emit:o}=s;const l=b(),i=b(),h=b(),{rtlClasses:B}=ie();function M(m){if(!l.value||!i.value)return;const p=Y(m,l.value.$el,e.direction),r=Y(m,i.value.$el,e.direction),u=Math.abs(p),V=Math.abs(r);return u<V||u===V&&p<0?l.value.$el:i.value.$el}const P=ee(e),t=de(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>P.roundValue(p)):[0,0]),{activeThumbRef:f,hasLabels:H,max:I,min:j,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:z,trackContainerRef:X,readonly:L}=le({props:e,steps:P,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var u;let{value:p}=m;const r=f.value===((u=l.value)==null?void 0:u.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var V,x,w,_;let{value:p}=m;const[r,u]=t.value;!e.strict&&r===u&&r!==j.value&&(f.value=p>r?(V=i.value)==null?void 0:V.$el:(x=l.value)==null?void 0:x.$el,(w=f.value)==null||w.focus()),f.value===((_=l.value)==null?void 0:_.$el)?t.value=[Math.min(p,u),u]:t.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:U,focus:A,blur:N}=oe(e),O=G(()=>z(t.value[0])),W=G(()=>z(t.value[1]));return ce(()=>{const m=q.filterProps(e),p=!!(e.label||n.label||n.prepend);return a(q,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||H.value,"v-slider--focused":U.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},B.value,e.class],style:e.style,ref:h},m,{focused:U.value}),{...n,prepend:p?r=>{var u,V;return a(me,null,[((u=n.label)==null?void 0:u.call(n,r))??(e.label?a(ne,{class:"v-slider__label",text:e.label},null):void 0),(V=n.prepend)==null?void 0:V.call(n,r)])}:void 0,default:r=>{var x,w;let{id:u,messagesId:V}=r;return a("div",{class:"v-slider__container",onMousedown:L.value?void 0:K,onTouchstartPassive:L.value?void 0:Q},[a("input",{id:`${u.value}_start`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${u.value}_stop`,name:e.name||u.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:X,start:O.value,stop:W.value},{"tick-label":n["tick-label"]}),a(E,{ref:l,"aria-describedby":V.value,focused:U&&f.value===((x=l.value)==null?void 0:x.$el),modelValue:t.value[0],"onUpdate:modelValue":_=>t.value=[_,t.value[1]],onFocus:_=>{var D,T,F,C;A(),f.value=(D=l.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&_.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=l.value)==null||F.$el.blur(),(C=i.value)==null||C.$el.focus())},onBlur:()=>{N(),f.value=void 0},min:j.value,max:t.value[1],position:O.value,ripple:e.ripple},{"thumb-label":n["thumb-label"]}),a(E,{ref:i,"aria-describedby":V.value,focused:U&&f.value===((w=i.value)==null?void 0:w.$el),modelValue:t.value[1],"onUpdate:modelValue":_=>t.value=[t.value[0],_],onFocus:_=>{var D,T,F,C;A(),f.value=(D=i.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&_.relatedTarget!==((T=l.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(C=l.value)==null||C.$el.focus())},onBlur:()=>{N(),f.value=void 0},min:t.value[0],max:I.value,position:W.value,ripple:e.ripple},{"thumb-label":n["thumb-label"]})])}})}),{}}}),be={__name:"DemoRangeSliderVertical",setup(e){const s=b([20,40]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],n=["ri-snowy-line","ri-leaf-line","ri-fire-line","ri-drop-line"],o=b([1,2]);return(l,i)=>(g(),S(y,{modelValue:k(o),"onUpdate:modelValue":i[0]||(i[0]=h=>$(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(ve,{icon:n[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},ge={__name:"DemoRangeSliderStep",setup(e){const s=b([20,40]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderColor",setup(e){const s=b([10,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const s=b([30,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ke={__name:"DemoRangeSliderBasic",setup(e){const s=b([10,60]);return(n,o)=>(g(),S(y,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['ri-snowy-line', 'ri-leaf-line', 'ri-fire-line', 'ri-drop-line']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'ri-snowy-line',
  'ri-leaf-line',
  'ri-fire-line',
  'ri-drop-line',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Ce=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Pe=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Ue=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Be=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Me=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Je={__name:"range-slider",setup(e){return(s,n)=>{const o=ke,l=Ve,i=Re,h=Se,B=ge,M=he,P=be;return g(),S(fe,null,{default:d(()=>[a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:$e},{default:d(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:xe},{default:d(()=>[Ce,a(i)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:ye},{default:d(()=>[Pe,a(h)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:we},{default:d(()=>[Ue,a(B)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:De},{default:d(()=>[Be,a(M)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:Te},{default:d(()=>[Me,a(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Je as default};
