import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as p,a as f}from"./VRow-BG5I4kc3.js";import{V as _}from"./form-wczSFyJg.js";import{V as I}from"./VCheckbox-CYOBAj51.js";import{o as l,e as u,w as n,c as x,F as y,j as R,a6 as W,a as c,z as j,b as m,aw as $,d as B,t as b,f as k,r as g,u as C,i as h,h as G}from"./main-Cw78g-lL.js";import{_ as A}from"./CustomRadiosWithImage-6bTw_5t-.js";import{_ as q}from"./CustomRadiosWithIcon-BZoSFGYb.js";import{V as F}from"./VSpacer-B4bUzx1D.js";import{_ as E}from"./AppCardCode-D3FNA_n3.js";import{_ as z}from"./CustomRadios-CPXA3oBT.js";/* empty css              */import"./VCheckboxBtn-BX36Snjb.js";import"./VSelectionControl-DVPi5H3e.js";import"./VInput-B2AKhCeD.js";import"./index-DhMs0plD.js";import"./VImg-DHwMjE9V.js";import"./VRadioGroup-Uf1JckNr.js";import"./VAvatar-BFNrWSvb.js";import"./VCard-DLuue0SI.js";import"./VCardText-CmcafK4F.js";import"./VDivider-qVXjHTOM.js";const O=["src"],L={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,d=a,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(f,{key:0},{default:n(()=>[(l(!0),x(y,null,R(e.checkboxContent,s=>(l(),u(p,W({key:s.value,ref_for:!0},i.gridColumn),{default:n(()=>[c(_,{class:j(["custom-input custom-checkbox rounded-xl cursor-pointer w-100",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[m("div",null,[c(I,{id:`custom-checkbox-with-img-${s.value}`,"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),m("img",{src:s.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,O)]),_:2},1032,["class"]),s.label||t.$slots.label?(l(),u(_,{key:0,for:`custom-checkbox-with-img-${s.value}`,class:"cursor-pointer"},{default:n(()=>[$(t.$slots,"label",{label:s.label},()=>[B(b(s.label),1)],!0)]),_:2},1032,["for"])):k("",!0)]),_:2},1040))),128))]),_:3})):k("",!0)}},N=v(L,[["__scopeId","data-v-a2f1ed80"]]),w="/build/assets/background-1-BsufcZNu.jpg",S="/build/assets/background-2-Iej3vnSa.jpg",V="/build/assets/background-3-ChOOOPlx.jpg",P={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(i){const a=[{bgImage:w,value:"basic"},{bgImage:S,value:"premium"},{bgImage:V,value:"enterprise"}],e=g(["basic"]);return(d,o)=>{const t=N;return l(),u(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>h(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},T={__name:"DemoCustomInputCustomRadiosWithImage",setup(i){const a=[{bgImage:w,value:"basic"},{bgImage:S,value:"premium"},{bgImage:V,value:"enterprise"}],e=g("basic");return(d,o)=>{const t=A;return l(),u(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>h(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},Z={class:"d-flex flex-column align-center text-center gap-2"},H={class:"cr-title text-base"},J={class:"text-sm text-medium-emphasis clamp-text mb-0"},K={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,d=a,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(f,{key:0},{default:n(()=>[(l(!0),x(y,null,R(e.checkboxContent,s=>(l(),u(p,W({key:s.title,ref_for:!0},i.gridColumn),{default:n(()=>[c(_,{class:j(["custom-input custom-checkbox-icon rounded-xl cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[$(t.$slots,"default",{item:s},()=>[m("div",Z,[c(G,{size:"28",icon:s.icon,class:"text-high-emphasis"},null,8,["icon"]),m("h6",H,b(s.title),1),m("p",J,b(s.desc),1)])],!0),m("div",null,[c(I,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):k("",!0)}},M=v(K,[["__scopeId","data-v-bebdb181"]]),Q={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(i){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:"ri-server-line"},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:"ri-shield-line"},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:"ri-lock-line"}],e=g(["backup"]);return(d,o)=>{const t=M;return l(),u(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>h(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},X={__name:"DemoCustomInputCustomRadiosWithIcon",setup(i){const a=[{title:"Starter",desc:"A simple start for everyone.",value:"starter",icon:"ri-rocket-line"},{title:"Standard",desc:"For small to medium businesses.",value:"standard",icon:"ri-user-line"},{title:"Enterprise",desc:"Solution for big organizations.",value:"enterprise",icon:"ri-vip-crown-line"}],e=g("starter");return(d,o)=>{const t=q;return l(),u(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>h(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},Y={class:"flex-grow-1"},ee={class:"d-flex align-center mb-2"},te={class:"cr-title text-base"},oe={key:0,class:"text-sm text-disabled"},se={class:"text-sm text-medium-emphasis mb-0"},ce={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,d=a,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(f,{key:0},{default:n(()=>[(l(!0),x(y,null,R(e.checkboxContent,s=>(l(),u(p,W({key:s.title,ref_for:!0},i.gridColumn),{default:n(()=>[c(_,{class:j(["custom-input custom-checkbox rounded-xl cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[m("div",null,[c(I,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),$(t.$slots,"default",{item:s},()=>[m("div",Y,[m("div",ee,[m("h6",te,b(s.title),1),c(F),s.subtitle?(l(),x("span",oe,b(s.subtitle),1)):k("",!0)]),m("p",se,b(s.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):k("",!0)}},ne=v(ce,[["__scopeId","data-v-2dc197d3"]]),ae={__name:"DemoCustomInputCustomCheckboxes",setup(i){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=g(["discount"]);return(d,o)=>{const t=ne;return l(),u(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>h(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},le={__name:"DemoCustomInputCustomRadios",setup(i){const a=[{title:"Basic",desc:"Get 2 projects with 2 team members.",value:"basic",subtitle:"$1.00"},{title:"Premium",subtitle:"$5.00",desc:"Get 8 projects with 8 team members.",value:"premium"}],e=g("basic");return(d,o)=>{const t=z;return l(),u(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>h(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},re={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ie={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'ri-server-line',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'ri-shield-line',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'ri-lock-line',
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'ri-server-line',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'ri-shield-line',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'ri-lock-line',
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ue={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},de={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
    subtitle: '$1.00',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
    subtitle: '$1.00',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},me={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'ri-rocket-line',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'ri-user-line',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'ri-vip-crown-line',
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'ri-rocket-line',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'ri-user-line',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'ri-vip-crown-line',
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},pe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ge={__name:"custom-input",setup(i){return(a,e)=>{const d=le,o=E,t=ae,r=X,s=Q,D=T,U=P;return l(),u(f,null,{default:n(()=>[c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios",code:de},{default:n(()=>[c(d)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes",code:re},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Icon",code:me},{default:n(()=>[c(r)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Icon",code:ie},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Image",code:pe},{default:n(()=>[c(D)]),_:1},8,["code"])]),_:1}),c(p,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Image",code:ue},{default:n(()=>[c(U)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ge as default};
