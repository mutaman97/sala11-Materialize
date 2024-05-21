import{r as _,o as p,e as d,w as t,a as e,b as l,t as F,u as S,i as b,m as D,n as I,q as B,s as w,W as O,d as s}from"./main-Cw78g-lL.js";import{V as x}from"./VChip-BmMdWnsY.js";import{V as k}from"./VAvatar-BFNrWSvb.js";import{V as c}from"./VSelect-Bd1XwiRx.js";import{V as n,a as v}from"./VRow-BG5I4kc3.js";import{_ as y}from"./AppCardCode-D3FNA_n3.js";import"./index-DhMs0plD.js";import"./VSlideGroup-BHv8mlqE.js";import"./VImg-DHwMjE9V.js";import"./VTextField-BKkE6jAr.js";/* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./VField-Chh8HzJD.js";import"./form-wczSFyJg.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DJjA2_W7.js";import"./ssrBoot-B8feSXE9.js";import"./VDivider-qVXjHTOM.js";import"./dialog-transition-DYOtB0Vc.js";import"./VMenu-DypGLeY7.js";import"./VOverlay-DS9RY67J.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./VCheckboxBtn-BX36Snjb.js";import"./VSelectionControl-DVPi5H3e.js";/* empty css              */import"./VCard-DLuue0SI.js";import"./VCardText-CmcafK4F.js";const G={__name:"DemoSelectSelectionSlot",setup(u){const a=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:I},{name:"Trevor Hansen",avatar:B},{name:"Tucker Smith",avatar:w},{name:"Britta Holt",avatar:O}],i=_(["Sandra Adams"]);return(m,o)=>(p(),d(c,{modelValue:S(i),"onUpdate:modelValue":o[0]||(o[0]=r=>b(i)?i.value=r:null),items:a,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"ri-close-line"},{selection:t(({item:r})=>[e(x,null,{prepend:t(()=>[e(k,{start:"",image:r.raw.avatar},null,8,["image"])]),default:t(()=>[l("span",null,F(r.title),1)]),_:2},1024)]),_:1},8,["modelValue"]))}},$={__name:"DemoSelectMultiple",setup(u){const a=_(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(m,o)=>(p(),d(c,{modelValue:S(a),"onUpdate:modelValue":o[0]||(o[0]=r=>b(a)?a.value=r:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"]))}},N={__name:"DemoSelectMenuProps",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(c,{items:a,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"}))}},j={__name:"DemoSelectChips",setup(u){const a=["foo","bar","fizz","buzz"],i=_(["foo","bar","fizz","buzz"]);return(m,o)=>(p(),d(c,{modelValue:S(i),"onUpdate:modelValue":o[0]||(o[0]=r=>b(i)?i.value=r:null),items:a,placeholder:"Select Item",label:"Chips",chips:"",multiple:""},null,8,["modelValue"]))}},T={__name:"DemoSelectIcons",setup(u){const a=_("Florida"),i=_("Texas"),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(o,r)=>(p(),d(v,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:S(a),"onUpdate:modelValue":r[0]||(r[0]=f=>b(a)?a.value=f:null),items:m,label:"Select","prepend-icon":"ri-map-2-line","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(c,{modelValue:S(i),"onUpdate:modelValue":r[1]||(r[1]=f=>b(i)?i.value=f:null),items:m,"append-icon":"ri-map-2-line",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1}))}},U={__name:"DemoSelectCustomTextAndValue",setup(u){const a=_({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(m,o)=>(p(),d(c,{modelValue:S(a),"onUpdate:modelValue":o[0]||(o[0]=r=>b(a)?a.value=r:null),hint:`${S(a).state}, ${S(a).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"]))}},M={__name:"DemoSelectVariant",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(v,null,{default:t(()=>[e(n,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:a,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:a,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:a,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:a,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(c,{items:a,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}},R={__name:"DemoSelectDensity",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(c,{items:a,label:"Density",density:"compact",placeholder:"Select Item"}))}},H={__name:"DemoSelectBasic",setup(u){const a=["Foo","Bar","Fizz","Buzz"];return(i,m)=>(p(),d(c,{items:a,label:"Standard",placeholder:"Select Item",eager:""}))}},L={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
    eager
  />
</template>
`},P={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},E={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="ri-map-2-line"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="ri-map-2-line"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="ri-map-2-line"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="ri-map-2-line"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},K={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="ri-close-line"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="ri-close-line"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},X=l("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),Z=l("p",null,[s("You can use "),l("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),ee=l("p",null,[s(" Use "),l("code",null,"filled"),s(", "),l("code",null,"outlined"),s(", "),l("code",null,"solo"),s(", "),l("code",null,"underlined"),s(" and "),l("code",null,"plain"),s(" options of "),l("code",null,"variant"),s(" prop to change appearance of select. ")],-1),te=l("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),ae=l("p",null,[s("Use a custom "),l("code",null,"prepend"),s(" or "),l("code",null,"appended"),s(" icon.")],-1),le=l("p",null,[s("Use "),l("code",null,"chips"),s(" prop to make selected option as chip.")],-1),oe=l("p",null,[s("Custom props can be passed directly to "),l("code",null,"v-menu"),s(" using "),l("code",null,"menuProps"),s(" prop.")],-1),se=l("p",null,[s("Use "),l("code",null,"multiple"),s(" prop to select multiple option.")],-1),ie=l("p",null,[s("The "),l("code",null,"selection"),s(" slot can be used to customize the way selected values are shown in the input.")],-1),je={__name:"select",setup(u){return(a,i)=>{const m=H,o=y,r=R,f=M,V=U,h=T,C=j,z=N,g=$,A=G;return p(),d(v,null,{default:t(()=>[e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:L},{default:t(()=>[X,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:E},{default:t(()=>[Z,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(o,{title:"Variant",code:Q},{default:t(()=>[ee,e(f)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom text and value",code:Y},{default:t(()=>[te,e(V)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Icons",code:q},{default:t(()=>[ae,e(h)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:P},{default:t(()=>[le,e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Menu Props",code:W},{default:t(()=>[oe,e(z)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:J},{default:t(()=>[se,e(g)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Selection slot",code:K},{default:t(()=>[ie,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{je as default};
