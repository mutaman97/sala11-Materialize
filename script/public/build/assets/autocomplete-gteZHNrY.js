import{V as u}from"./VAutocomplete-BOgAKxLf.js";import{r as S,o as v,e as g,u as p,i as b,w as t,a as e,h as M,A as N,a6 as C,m as T,n as G,q as I,s as F,W,Y as D,X as R,at as O,b as i,d as s}from"./main-Cw78g-lL.js";import{e as H}from"./index-DhMs0plD.js";import{V as L}from"./VChip-BmMdWnsY.js";import{a as E}from"./VList-DJjA2_W7.js";import{V as m,a as V}from"./VRow-BG5I4kc3.js";import{_ as U}from"./AppCardCode-D3FNA_n3.js";import"./VSelect-Bd1XwiRx.js";import"./VTextField-BKkE6jAr.js";/* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./VImg-DHwMjE9V.js";import"./VField-Chh8HzJD.js";import"./form-wczSFyJg.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DYOtB0Vc.js";import"./VMenu-DypGLeY7.js";import"./VOverlay-DS9RY67J.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./VCheckboxBtn-BX36Snjb.js";import"./VSelectionControl-DVPi5H3e.js";import"./VAvatar-BFNrWSvb.js";import"./filter-OYWg6emF.js";import"./VSlideGroup-BHv8mlqE.js";import"./ssrBoot-B8feSXE9.js";import"./VDivider-qVXjHTOM.js";/* empty css              */import"./VCard-DLuue0SI.js";import"./VCardText-CmcafK4F.js";const q={__name:"DemoAutocompleteValidation",setup(f){const a=["foo","bar","fizz","buzz"],l=S(["foo"]),c=[o=>!!o.length||"Select at least one option."];return(o,r)=>(v(),g(u,{modelValue:p(l),"onUpdate:modelValue":r[0]||(r[0]=n=>b(l)?l.value=n:null),items:a,rules:c,placeholder:"Select Option",multiple:""},null,8,["modelValue"]))}},P={__name:"DemoAutocompleteStateSelector",setup(f){const a=S(!1),l=S(null),c=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,r)=>(v(),g(u,{modelValue:p(l),"onUpdate:modelValue":r[1]||(r[1]=n=>b(l)?l.value=n:null),hint:p(a)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:c,readonly:!p(a),label:`State — ${p(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"ri-building-line","menu-props":{maxHeight:"200px"}},{append:t(()=>[e(H,{mode:"out-in"},{default:t(()=>[(v(),g(M,{key:`icon-${p(a)}`,color:p(a)?"success":"info",icon:p(a)?"ri-check-line":"ri-edit-circle-line",onClick:r[0]||(r[0]=n=>a.value=!p(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"]))}},z={__name:"DemoAutocompleteAsyncItems",setup(f){const a=S(!1),l=S(),c=S(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],r=S(o),n=h=>{a.value=!0,setTimeout(()=>{r.value=o.filter(d=>(d||"").toLowerCase().includes((h||"").toLowerCase())),a.value=!1},500)};return N(l,h=>{h&&h!==c.value&&n(h)}),(h,d)=>(v(),g(u,{modelValue:p(c),"onUpdate:modelValue":d[0]||(d[0]=_=>b(c)?c.value=_:null),search:p(l),"onUpdate:search":d[1]||(d[1]=_=>b(l)?l.value=_:null),loading:p(a),items:p(r),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},$={__name:"DemoAutocompleteSlots",setup(f){const a=S(["Sandra Adams","Britta Holt"]),l=[{name:"Sandra Adams",group:"Group 1",avatar:T},{name:"Ali Connors",group:"Group 1",avatar:G},{name:"Trevor Hansen",group:"Group 1",avatar:I},{name:"Tucker Smith",group:"Group 1",avatar:F},{name:"Britta Holt",group:"Group 2",avatar:W},{name:"Jane Smith ",group:"Group 2",avatar:D},{name:"John Smith",group:"Group 2",avatar:R},{name:"Sandra Williams",group:"Group 2",avatar:O}];return(c,o)=>(v(),g(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=r=>b(a)?a.value=r:null),chips:"","closable-chips":"",multiple:"",items:l,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:t(({props:r,item:n})=>[e(L,C(r,{"prepend-avatar":n.raw.avatar,text:n.raw.name}),null,16,["prepend-avatar","text"])]),item:t(({props:r,item:n})=>{var h,d,_;return[e(E,C(r,{"prepend-avatar":(h=n==null?void 0:n.raw)==null?void 0:h.avatar,title:(d=n==null?void 0:n.raw)==null?void 0:d.name,subtitle:(_=n==null?void 0:n.raw)==null?void 0:_.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"]))}},Y={__name:"DemoAutocompleteCustomFilter",setup(f){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function l(c,o,r){const n=r.raw.name.toLowerCase(),h=r.raw.abbr.toLowerCase(),d=o.toLowerCase();return n.includes(d)||h.includes(d)}return(c,o)=>(v(),g(u,{label:"States",items:a,"custom-filter":l,"item-title":"name","item-value":"abbr",placeholder:"Select State"}))}},j={__name:"DemoAutocompleteChips",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State",chips:"",multiple:""}))}},B={__name:"DemoAutocompleteClearable",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,multiple:"",placeholder:"Select State",clearable:""}))}},J={__name:"DemoAutocompleteMultiple",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State",multiple:""}))}},K={__name:"DemoAutocompleteVariant",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(V,null,{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"solo",label:"Solo",items:a,placeholder:"Select State"})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"filled",label:"Filled",placeholder:"Select State",items:a})]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"plain",label:"Plain",placeholder:"Select State",items:a})]),_:1})]),_:1}))}},X={__name:"DemoAutocompleteDensity",setup(f){const a=S("Florida"),l=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(c,o)=>(v(),g(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=r=>b(a)?a.value=r:null),label:"States",density:"compact",placeholder:"Select State",items:l},null,8,["modelValue"]))}},Q={__name:"DemoAutocompleteBasic",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(l,c)=>(v(),g(u,{label:"States",items:a,placeholder:"Select State"}))}},Z={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ee={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},oe={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},ie={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},le={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`},se={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`},re={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`},ne={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
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

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},ce={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},me=i("p",null,[s(" The "),i("code",null," v-autocomplete "),s(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),pe=i("p",null,[s(" You can use "),i("code",null," density "),s(" prop to adjusts vertical spacing within the component. Available options are: "),i("code",null,"default"),s(", "),i("code",null,"comfortable"),s(", and "),i("code",null,"compact"),s(". ")],-1),ue=i("p",null,[s("Use "),i("code",null,"solo"),s(", "),i("code",null,"outlined"),s(", "),i("code",null,"underlined"),s(", "),i("code",null,"filled"),s(" and "),i("code",null,"plain"),s(" options of "),i("code",null,"variant"),s(" prop to change the look of Autocomplete. ")],-1),de=i("p",null,[s("Use "),i("code",null,"multiple"),s(" prop to select multiple. Accepts array for value")],-1),he=i("p",null,[s("Use "),i("code",null,"clearable"),s(" prop to add input clear functionality.")],-1),ve=i("p",null,[s("Use "),i("code",null," chips "),s(" prop to use chips in select.")],-1),ge=i("p",null,[s("The "),i("code",null," custom-filter "),s(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),fe=i("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),Se=i("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),_e=i("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),be=i("p",null,[s("Use "),i("code",null,"rules"),s(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Ze={__name:"autocomplete",setup(f){return(a,l)=>{const c=Q,o=U,r=X,n=K,h=J,d=B,_=j,A=Y,y=$,w=z,x=P,k=q;return v(),g(V,{class:"match-height"},{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:ee},{default:t(()=>[me,e(c)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:ie},{default:t(()=>[pe,e(r)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"12"},{default:t(()=>[e(o,{title:"Variant",code:ce},{default:t(()=>[ue,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:le},{default:t(()=>[de,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Clearable",code:te},{default:t(()=>[he,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:ae},{default:t(()=>[ve,e(_)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom-Filter",code:oe},{default:t(()=>[ge,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Slots",code:se},{default:t(()=>[fe,e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Async items",code:Z},{default:t(()=>[Se,e(w)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"State Selector",code:re},{default:t(()=>[_e,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Validation",code:ne},{default:t(()=>[be,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ze as default};
