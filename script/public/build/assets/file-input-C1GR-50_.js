import{V as s}from"./VFileInput-7IffHaRs.js";import{r as f,A as j,o as c,e as p,u as h,i as F,w as n,c as x,F as S,j as N,d as l,t as A,a as e,b as t}from"./main-Cw78g-lL.js";import{V as L}from"./VChip-BmMdWnsY.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as a,a as V}from"./VRow-BG5I4kc3.js";import{_ as U}from"./AppCardCode-D3FNA_n3.js";import"./VField-Chh8HzJD.js";import"./form-wczSFyJg.js";import"./index-DhMs0plD.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";import"./VImg-DHwMjE9V.js";import"./forwardRefs-C-GTDzx5.js";import"./VCounter-Dgzvj9pV.js";import"./VSlideGroup-BHv8mlqE.js";import"./VAvatar-BFNrWSvb.js";/* empty css              */import"./VCard-DLuue0SI.js";import"./VCardText-CmcafK4F.js";import"./VDivider-qVXjHTOM.js";const k={__name:"DemoFileInputLoading",setup(u){const i=f(),r=f(!0);return j(i,()=>{r.value=!i.value[0]}),(d,o)=>(c(),p(s,{modelValue:h(i),"onUpdate:modelValue":o[0]||(o[0]=_=>F(i)?i.value=_:null),loading:h(r),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},B={__name:"DemoFileInputSelectionSlot",setup(u){const i=f([]);return(r,d)=>(c(),p(s,{modelValue:h(i),"onUpdate:modelValue":d[0]||(d[0]=o=>F(i)?i.value=o:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"ri-attachment-line"},{selection:n(({fileNames:o})=>[(c(!0),x(S,null,N(o,_=>(c(),p(L,{key:_,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:n(()=>[l(A(_),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},P={__name:"DemoFileInputValidation",setup(u){const i=[r=>!r||!r.length||r[0].size<1e6||"Avatar size should be less than 1 MB!"];return(r,d)=>(c(),p(s,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"ri-camera-2-line"}))}},R={};function M(u,i){return c(),p(s,{"show-size":"",label:"File input"})}const T=m(R,[["render",M]]),O={};function Y(u,i){return c(),p(s,{label:"File input","prepend-icon":"ri-camera-line"})}const E=m(O,[["render",Y]]),W={};function q(u,i){return c(),p(s,{multiple:"",label:"File input"})}const G=m(W,[["render",q]]),H={};function J(u,i){return c(),p(s,{"show-size":"",counter:"",multiple:"",label:"File input"})}const K=m(H,[["render",J]]),Q={};function X(u,i){return c(),p(s,{chips:"",label:"File input w/ chips"})}const Z=m(Q,[["render",X]]),ee={};function le(u,i){return c(),p(s,{accept:"image/*",label:"File input"})}const te=m(ee,[["render",le]]),ne={};function ie(u,i){return c(),p(V,null,{default:n(()=>[e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Outlined"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Filled",variant:"filled"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Solo",variant:"solo"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Plain",variant:"plain"})]),_:1}),e(a,{cols:"12",sm:"6"},{default:n(()=>[e(s,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const oe=m(ne,[["render",ie]]),ae={};function se(u,i){return c(),p(s,{label:"File input",density:"compact"})}const ce=m(ae,[["render",se]]),pe={};function ue(u,i){return c(),p(s,{label:"File input"})}const re=m(pe,[["render",ue]]),me={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},de={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},_e={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},fe={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},he={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},Fe={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},Ve={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},be={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="ri-camera-line"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="ri-attachment-line"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},Ie={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ve={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="ri-camera-2-line"
  />
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},Ce=t("p",null,[l("The "),t("code",null,"v-file-input"),l(" component is used to selecting files.")],-1),we=t("p",null,[l("You can reduces the file input height with "),t("code",null,"density"),l(" prop. Available options are: "),t("code",null,"default"),l(", "),t("code",null,"comfortable"),l(", and "),t("code",null,"compact"),l(".")],-1),ze=t("p",null,[l("use "),t("code",null,"solo"),l(", "),t("code",null,"filled"),l(", "),t("code",null,"outlined"),l(", "),t("code",null,"plain"),l(" and "),t("code",null,"underlined"),l(" option of "),t("code",null,"variant"),l(" prop to change the look of file input.")],-1),$e=t("p",null,[t("code",null,"v-file-input"),l(" component can accept only specific media formats/file types if you want.")],-1),De=t("p",null,[l("Use "),t("code",null,"chip"),l(" prop to display the selected file as a chip.")],-1),je=t("p",null,[l("When using the "),t("code",null,"show-size"),l(" property along with "),t("code",null,"counter"),l(", the total number of files and size will be displayed under the input.")],-1),xe=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),l(" prop. ")],-1),Se=t("p",null,[l(" The "),t("code",null,"v-file-input"),l(" has a default "),t("code",null,"prepend-icon"),l(" that can be set on the component or adjusted globally. ")],-1),Ne=t("p",null,[l("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),l(" property.")],-1),Ae=t("p",null,[l("You can use the "),t("code",null,"rules"),l(" prop to create your own custom validation parameters.")],-1),Le=t("p",null,[l("Using the "),t("code",null,"selection"),l(" slot, you can customize the appearance of your input selections.")],-1),Ue=t("p",null,[l("Use "),t("code",null,"loading"),l(" prop to displays linear progress bar.")],-1),tl={__name:"file-input",setup(u){return(i,r)=>{const d=re,o=U,_=ce,b=oe,g=te,I=Z,v=K,y=G,C=E,w=T,z=P,$=B,D=k;return c(),p(V,{class:"match-height"},{default:n(()=>[e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:de},{default:n(()=>[Ce,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:he},{default:n(()=>[we,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:n(()=>[e(o,{title:"Variant",code:ye},{default:n(()=>[ze,e(b)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Accept",code:me},{default:n(()=>[$e,e(g)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Chips",code:_e},{default:n(()=>[De,e(I)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Counter",code:fe},{default:n(()=>[je,e(v)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Multiple",code:Ve},{default:n(()=>[xe,e(y)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Prepend icon",code:be},{default:n(()=>[Se,e(C)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Show size",code:Ie},{default:n(()=>[Ne,e(w)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Validation",code:ve},{default:n(()=>[Ae,e(z)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Selection slot",code:ge},{default:n(()=>[Le,e($)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Loading",code:Fe},{default:n(()=>[Ue,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{tl as default};
