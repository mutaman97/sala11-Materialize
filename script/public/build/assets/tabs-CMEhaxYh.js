import{a as l,V as T}from"./VTabs-C8Bugdfz.js";import{r as h,A,o as u,c as d,a as e,w as t,F as p,j as w,u as m,e as k,d as s,t as g,i as b,b as o,V as q,h as x}from"./main-Cw78g-lL.js";import{a as f,V as I}from"./VWindowItem-V-MyZp4h.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./AppCardCode-D3FNA_n3.js";import{a as z,V as _}from"./VRow-BG5I4kc3.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-DY7PVvcf.js";import"./VSlideGroup-BHv8mlqE.js";import"./index-DhMs0plD.js";import"./lazy-Dz28_Vpk.js";import"./ssrBoot-B8feSXE9.js";import"./VImg-DHwMjE9V.js";import"./VCard-DLuue0SI.js";import"./VAvatar-BFNrWSvb.js";import"./VCardText-CmcafK4F.js";import"./VDivider-qVXjHTOM.js";/* empty css              */const O={class:"text-center mt-9"},U={__name:"DemoTabsDynamic",setup(V){const a=h(3),r=h(0);return A(a,i=>{r.value=i-1}),(i,n)=>(u(),d(p,null,[e(T,{modelValue:m(r),"onUpdate:modelValue":n[0]||(n[0]=c=>b(r)?r.value=c:null)},{default:t(()=>[(u(!0),d(p,null,w(m(a),c=>(u(),k(l,{key:c,value:c},{default:t(()=>[s(" Tab "+g(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",O,[e(q,{disabled:!m(a),variant:"text",onClick:n[1]||(n[1]=c=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(q,{variant:"text",onClick:n[2]||(n[2]=c=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},E={class:"text-center"},M="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",H={__name:"DemoTabsProgrammaticNavigation",setup(V){const a=h(1),r=["Appetizers","Entrees","Deserts","Cocktails"],i=r.length,n=()=>{a.value!==1&&(a.value-=1)},c=()=>{a.value!==i&&(a.value+=1)};return(C,y)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":y[0]||(y[0]=v=>b(a)?a.value=v:null),grow:""},{default:t(()=>[(u(!0),d(p,null,w(r.length,v=>(u(),k(l,{key:v,value:v},{default:t(()=>[s(g(r[v-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":y[1]||(y[1]=v=>b(a)?a.value=v:null),class:"mt-5"},{default:t(()=>[(u(!0),d(p,null,w(r.length,v=>(u(),k(f,{key:v,value:v},{default:t(()=>[s(g(M))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),o("div",E,[e(q,{variant:"text",disabled:m(a)===1,onClick:n},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(q,{variant:"text",disabled:m(a)===m(i),onClick:c},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},R="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",G={__name:"DemoTabsGrow",setup(V){const a=h("Appetizers"),r=["Appetizers","Entrees","Deserts","Cocktails"];return(i,n)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=c=>b(a)?a.value=c:null),grow:""},{default:t(()=>[(u(),d(p,null,w(r,c=>e(l,{key:c,value:c},{default:t(()=>[s(g(c),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=c=>b(a)?a.value=c:null),class:"mt-6"},{default:t(()=>[(u(),d(p,null,w(r,c=>e(f,{key:c,value:c},{default:t(()=>[s(g(R))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},L={};function J(V,a){return u(),k(T,{"fixed-tabs":""},{default:t(()=>[e(l,null,{default:t(()=>[s(" Fixed Tab 1 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 2 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 3 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 4 ")]),_:1})]),_:1})}const K=W(L,[["render",J]]),Q={};function X(V,a){return u(),k(T,{"next-icon":"ri-arrow-right-line","prev-icon":"ri-arrow-left-line","show-arrows":""},{default:t(()=>[(u(),d(p,null,w(10,r=>e(l,{key:r},{default:t(()=>[s(" Item "+g(r),1)]),_:2},1024)),64))]),_:1})}const Y=W(Q,[["render",X]]),Z={};function ee(V,a){return u(),k(T,{"show-arrows":""},{default:t(()=>[(u(),d(p,null,w(10,r=>e(l,{key:r,value:r},{default:t(()=>[s(" Item "+g(r),1)]),_:2},1032,["value"])),64))]),_:1})}const te=W(Z,[["render",ee]]),ae={};function se(V,a){return u(),d(p,null,[e(T,null,{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(T,{"align-tabs":"center"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(T,{"align-tabs":"end"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1})],64)}const ne=W(ae,[["render",se]]),oe={class:"d-flex gap-6"},ie=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),le=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1),ue=o("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),re=o("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),ce={__name:"DemoTabsVerticalPill",setup(V){const a=h("window-1");return(r,i)=>(u(),d("div",oe,[o("div",null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>b(a)?a.value=n:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[e(x,{start:"",icon:"ri-user-line"}),s(" Option 1 ")]),_:1}),e(l,null,{default:t(()=>[e(x,{start:"",icon:"ri-lock-line"}),s(" Option 2 ")]),_:1}),e(l,null,{default:t(()=>[e(x,{start:"",icon:"ri-rfid-line"}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(I,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>b(a)?a.value=n:null)},{default:t(()=>[e(f,{value:"window-1"},{default:t(()=>[ie,le]),_:1}),e(f,{value:"window-2"},{default:t(()=>[ue]),_:1}),e(f,{value:"window-3"},{default:t(()=>[re]),_:1})]),_:1},8,["modelValue"])]))}},me={class:"d-flex"},de=o("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),pe=o("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),be=o("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),Te=o("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),Ve=o("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),ve=o("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),_e={__name:"DemoTabsVertical",setup(V){const a=h(0);return(r,i)=>(u(),d("div",me,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>b(a)?a.value=n:null),direction:"vertical"},{default:t(()=>[e(l,{"prepend-icon":"ri-user-line"},{default:t(()=>[s(" Option 1 ")]),_:1}),e(l,{"prepend-icon":"ri-lock-line"},{default:t(()=>[s(" Option 2 ")]),_:1}),e(l,{"prepend-icon":"ri-rfid-line"},{default:t(()=>[s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>b(a)?a.value=n:null),class:"ms-3"},{default:t(()=>[e(f,null,{default:t(()=>[de,pe]),_:1}),e(f,null,{default:t(()=>[be,Te]),_:1}),e(f,null,{default:t(()=>[Ve,ve]),_:1})]),_:1},8,["modelValue"])]))}},fe=o("span",null,"Recent",-1),we=o("span",null,"Favorites",-1),ge=o("span",null,"Nearby",-1),he="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",ke={__name:"DemoTabsStacked",setup(V){const a=h("tab-1");return(r,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>b(a)?a.value=n:null),grow:"",stacked:""},{default:t(()=>[e(l,{value:"tab-1"},{default:t(()=>[e(x,{icon:"ri-phone-line",class:"mb-2"}),fe]),_:1}),e(l,{value:"tab-2"},{default:t(()=>[e(x,{icon:"ri-heart-line",class:"mb-2"}),we]),_:1}),e(l,{value:"tab-3"},{default:t(()=>[e(x,{icon:"ri-account-box-line",class:"mb-2"}),ge]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>b(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,w(3,n=>e(f,{key:n,value:`tab-${n}`},{default:t(()=>[s(g(he))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},Ie="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",ye={__name:"DemoTabsBasicPill",setup(V){const a=h(0);return(r,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>b(a)?a.value=n:null),class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>b(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,w(3,n=>e(f,{key:n},{default:t(()=>[s(g(Ie))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},xe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",qe={__name:"DemoTabsBasic",setup(V){const a=h(0);return(r,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=n=>b(a)?a.value=n:null)},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=n=>b(a)?a.value=n:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,w(3,n=>e(f,{key:n},{default:t(()=>[s(g(xe))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},We={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},Ce={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Se={ts:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},De={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},je={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},$e={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Fe={ts:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},Be={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},Ae={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Ne={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab prepend-icon="ri-user-line">
        Option 1
      </VTab>
      <VTab prepend-icon="ri-lock-line">
        Option 2
      </VTab>
      <VTab prepend-icon="ri-rfid-line">
        Option 3
      </VTab>
    </VTabs>
    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>
        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab prepend-icon="ri-user-line">
        Option 1
      </VTab>
      <VTab prepend-icon="ri-lock-line">
        Option 2
      </VTab>
      <VTab prepend-icon="ri-rfid-line">
        Option 3
      </VTab>
    </VTabs>
    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>
        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`},ze={ts:`<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="ri-user-line"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-lock-line"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-rfid-line"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VWindow v-model="currentTab">
      <VWindowItem value="window-1">
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
        </p>
      </VWindowItem>

      <VWindowItem value="window-2">
        <p class="mb-0">
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
      </VWindowItem>

      <VWindowItem value="window-3">
        <p class="mb-0">
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="ri-user-line"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-lock-line"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-rfid-line"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VWindow v-model="currentTab">
      <VWindowItem value="window-1">
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
        </p>
      </VWindowItem>

      <VWindowItem value="window-2">
        <p class="mb-0">
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
      </VWindowItem>

      <VWindowItem value="window-3">
        <p class="mb-0">
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`},Oe=o("p",null,[s("The "),o("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),Ue=o("p",null,[s("Use our custom class "),o("code",null,".v-tabs-pill"),s(" along with "),o("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Ee=o("p",null,[s("Using "),o("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Me=o("p",null,[s("The "),o("code",null,"vertical"),s(" prop allows for "),o("code",null,"v-tab"),s(" components to stack vertically.")],-1),He=o("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Re=o("p",null,[s("Use "),o("code",null,"align-tabs"),s(" prop to change the tabs alignment.")],-1),Ge=o("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Le=o("p",null,[o("code",null,"prev-icon"),s(" and "),o("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Je=o("p",null,[s("The "),o("code",null,"fixed-tabs"),s(" prop forces "),o("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Ke=o("p",null,[s("The "),o("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),Qe=o("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),o("code",null,"v-tabs"),s(" component will react.")],-1),Tt={__name:"tabs",setup(V){return(a,r)=>{const i=qe,n=N,c=ye,C=ke,y=_e,v=ce,P=ne,S=te,D=Y,j=K,$=G,F=H,B=U;return u(),k(z,{class:"match-height"},{default:t(()=>[e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic",code:Ce},{default:t(()=>[Oe,e(i)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic Pill",code:Pe},{default:t(()=>[Ue,e(c)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Stacked",code:Ae},{default:t(()=>[Ee,e(C)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical",code:Ne},{default:t(()=>[Me,e(y)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Vertical Pill",code:ze},{default:t(()=>[He,e(v)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Alignment",code:We},{default:t(()=>[Re,e(P)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Pagination",code:Fe},{default:t(()=>[Ge,e(S)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Custom Icons",code:Se},{default:t(()=>[Le,e(D)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(n,{title:"Fixed",code:je},{default:t(()=>[Je,e(j)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(n,{title:"Grow",code:$e},{default:t(()=>[Ke,e($)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Programmatic Navigation",code:Be},{default:t(()=>[e(F)]),_:1},8,["code"])]),_:1}),e(_,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Dynamic",code:De},{default:t(()=>[Qe,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Tt as default};
