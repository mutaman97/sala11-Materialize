import{_ as B}from"./DialogCloseBtn-nwv0U9A1.js";import{r as g,o as k,e as C,w as a,a as e,V as c,S as j,U as _,d as s,u as d,i as f,ao as q,ap as M,a_ as G,aq as O,aP as R,aJ as $,ar as H,b as h,h as W,a6 as E,c as z,F as I,A as K,y as Q,j as X}from"./main-Cw78g-lL.js";import{V as y,a as Y,c as Z}from"./VCard-DLuue0SI.js";import{V}from"./VCardText-CmcafK4F.js";import{a as U,V as b}from"./VRow-BG5I4kc3.js";import{V as w}from"./VTextField-BKkE6jAr.js";import{V as D}from"./VDialog-BBP-EQpw.js";import{V as ee,a as ae}from"./VToolbar-CWYG-cd7.js";import{V as le}from"./VSpacer-B4bUzx1D.js";import{V as F,d as J,a as T}from"./VList-DJjA2_W7.js";import{V as A}from"./VDivider-qVXjHTOM.js";import{V as P}from"./VListItemAction-o5NYUIQU.js";import{V as S}from"./VCheckbox-CYOBAj51.js";import{V as oe,a as te}from"./VRadioGroup-Uf1JckNr.js";import{_ as ie}from"./AppCardCode-D3FNA_n3.js";import"./VAvatar-BFNrWSvb.js";import"./VImg-DHwMjE9V.js";/* empty css              *//* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./index-DhMs0plD.js";import"./VField-Chh8HzJD.js";import"./form-wczSFyJg.js";import"./easing-DY7PVvcf.js";import"./VInput-B2AKhCeD.js";import"./forwardRefs-C-GTDzx5.js";import"./VOverlay-DS9RY67J.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./dialog-transition-DYOtB0Vc.js";import"./ssrBoot-B8feSXE9.js";import"./VCheckboxBtn-BX36Snjb.js";import"./VSelectionControl-DVPi5H3e.js";const se={__name:"DemoDialogForm",setup(v){const o=g(!1),r=g(""),l=g(""),t=g(""),i=g(""),m=g(""),p=g(),x=g([]);return(N,n)=>{const L=B;return k(),C(D,{modelValue:d(o),"onUpdate:modelValue":n[10]||(n[10]=u=>f(o)?o.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(c,j(_(u)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"User Profile"},{default:a(()=>[e(L,{variant:"text",size:"default",onClick:n[0]||(n[0]=u=>o.value=!1)}),e(V,null,{default:a(()=>[e(U,null,{default:a(()=>[e(b,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:d(r),"onUpdate:modelValue":n[1]||(n[1]=u=>f(r)?r.value=u:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:d(l),"onUpdate:modelValue":n[2]||(n[2]=u=>f(l)?l.value=u:null),label:"Middle Name",placeholder:"peter"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:d(t),"onUpdate:modelValue":n[3]||(n[3]=u=>f(t)?t.value=u:null),label:"Last Name","persistent-hint":"",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(w,{modelValue:d(i),"onUpdate:modelValue":n[4]||(n[4]=u=>f(i)?i.value=u:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12"},{default:a(()=>[e(w,{modelValue:d(m),"onUpdate:modelValue":n[5]||(n[5]=u=>f(m)?m.value=u:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:d(p),"onUpdate:modelValue":n[6]||(n[6]=u=>f(p)?p.value=u:null),label:"Age",type:"number",placeholder:"18"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:d(x),"onUpdate:modelValue":n[7]||(n[7]=u=>f(x)?x.value=u:null),label:"Interests",placeholder:"Sports, Music, Movies"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{color:"error",onClick:n[8]||(n[8]=u=>o.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{color:"success",onClick:n[9]||(n[9]=u=>o.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},re=q({...M(),...G({variant:"text"})},"VToolbarItems"),ne=O()({name:"VToolbarItems",props:re(),setup(v,o){let{slots:r}=o;return R({VBtn:{color:$(v,"color"),height:"inherit",variant:$(v,"variant")}}),H(()=>{var l;return e("div",{class:["v-toolbar-items",v.class],style:v.style},[(l=r.default)==null?void 0:l.call(r)])}),{}}}),ce={__name:"DemoDialogFullscreen",setup(v){const o=g(!1);return(r,l)=>(k(),C(D,{modelValue:d(o),"onUpdate:modelValue":l[2]||(l[2]=t=>f(o)?o.value=t:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:t})=>[e(c,j(_(t)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[h("div",null,[e(ee,{color:"primary"},{default:a(()=>[e(c,{icon:"",variant:"plain",onClick:l[0]||(l[0]=t=>o.value=!1)},{default:a(()=>[e(W,{color:"white",icon:"ri-close-line"})]),_:1}),e(ae,null,{default:a(()=>[s("Settings")]),_:1}),e(le),e(ne,null,{default:a(()=>[e(c,{variant:"text",onClick:l[1]||(l[1]=t=>o.value=!1)},{default:a(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),e(F,{lines:"two"},{default:a(()=>[e(J,null,{default:a(()=>[s("User Controls")]),_:1}),e(T,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(T,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(A),e(F,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(J,null,{default:a(()=>[s("General")]),_:1}),e(T,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:t})=>[e(P,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(T,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:t})=>[e(P,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(T,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:t})=>[e(P,{start:""},{default:a(()=>[e(S,{"model-value":t,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ue={__name:"DemoDialogOverflowed",setup(v){const o=g(!1);return(r,l)=>{const t=B;return k(),C(D,{modelValue:d(o),"onUpdate:modelValue":l[3]||(l[3]=i=>f(o)?o.value=i:null),class:"v-dialog-sm"},{activator:a(({props:i})=>[e(c,E({color:"primary"},i),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Use Google's location service?"},{default:a(()=>[e(t,{variant:"text",size:"default",onClick:l[0]||(l[0]=i=>o.value=!1)}),e(V,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{color:"error",onClick:l[1]||(l[1]=i=>o.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(c,{color:"success",onClick:l[2]||(l[2]=i=>o.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},de={__name:"DemoDialogNesting",setup(v){const o=g(!1),r=g(!1);return(l,t)=>{const i=B;return k(),z(I,null,[e(c,{onClick:t[0]||(t[0]=m=>o.value=!0)},{default:a(()=>[s(" Open Dialog ")]),_:1}),e(D,{modelValue:d(o),"onUpdate:modelValue":t[4]||(t[4]=m=>f(o)?o.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(y,{title:"Dialog"},{default:a(()=>[e(i,{variant:"text",size:"default",onClick:t[1]||(t[1]=m=>o.value=!1)}),e(V,null,{default:a(()=>[s(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{color:"error",onClick:t[2]||(t[2]=m=>o.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{onClick:t[3]||(t[3]=m=>r.value=!d(r))},{default:a(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(D,{modelValue:d(r),"onUpdate:modelValue":t[7]||(t[7]=m=>f(r)?r.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(y,{title:"Dialog 2"},{default:a(()=>[e(i,{variant:"text",size:"default",onClick:t[5]||(t[5]=m=>r.value=!1)}),e(V,null,{default:a(()=>[s("I'm a nested dialog.")]),_:1}),e(V,{class:"text-end"},{default:a(()=>[e(c,{onClick:t[6]||(t[6]=m=>r.value=!1)},{default:a(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},pe={__name:"DemoDialogLoader",setup(v){const o=g(!1);return K(o,r=>{r&&setTimeout(()=>{o.value=!1},4e3)}),(r,l)=>(k(),z(I,null,[e(c,{disabled:d(o),onClick:l[0]||(l[0]=t=>o.value=!0)},{default:a(()=>[s(" Start loading ")]),_:1},8,["disabled"]),e(D,{modelValue:d(o),"onUpdate:modelValue":l[1]||(l[1]=t=>f(o)?o.value=t:null),width:"300"},{default:a(()=>[e(y,{color:"primary",width:"300"},{default:a(()=>[e(V,{class:"pt-3 text-white"},{default:a(()=>[s(" Please stand by "),e(Q,{indeterminate:"",class:"mt-4",color:"#fff"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},me={__name:"DemoDialogScrollable",setup(v){const o=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],r=g(""),l=g(!1);return(t,i)=>{const m=B;return k(),C(D,{modelValue:d(l),"onUpdate:modelValue":i[4]||(i[4]=p=>f(l)?l.value=p:null),scrollable:"","max-width":"350"},{activator:a(({props:p})=>[e(c,j(_(p)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,null,{default:a(()=>[e(m,{variant:"text",size:"default",onClick:i[0]||(i[0]=p=>l.value=!1)}),e(Y,{class:"pb-3"},{default:a(()=>[e(Z,null,{default:a(()=>[s("Select Country")]),_:1})]),_:1}),e(A),e(V,{style:{"block-size":"300px"}},{default:a(()=>[e(oe,{modelValue:d(r),"onUpdate:modelValue":i[1]||(i[1]=p=>f(r)?r.value=p:null),inline:!1},{default:a(()=>[(k(),z(I,null,X(o,p=>e(te,{key:p.label,label:p.label,value:p.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(A),e(V,{class:"overflow-visible d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{variant:"outlined",color:"secondary",onClick:i[2]||(i[2]=p=>l.value=!1)},{default:a(()=>[s(" Close ")]),_:1}),e(c,{onClick:i[3]||(i[3]=p=>l.value=!1)},{default:a(()=>[s(" Save Changes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},ge={__name:"DemoDialogPersistent",setup(v){const o=g(!1);return(r,l)=>{const t=B;return k(),C(D,{modelValue:d(o),"onUpdate:modelValue":l[3]||(l[3]=i=>f(o)?o.value=i:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:i})=>[e(c,j(_(i)),{default:a(()=>[s(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Use Google's location service?"},{default:a(()=>[e(t,{variant:"text",size:"default",onClick:l[0]||(l[0]=i=>o.value=!1)}),e(V,null,{default:a(()=>[s(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{color:"error",onClick:l[1]||(l[1]=i=>o.value=!1)},{default:a(()=>[s(" Disagree ")]),_:1}),e(c,{color:"success",onClick:l[2]||(l[2]=i=>o.value=!1)},{default:a(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},fe={__name:"DemoDialogBasic",setup(v){const o=g(!1);return(r,l)=>{const t=B;return k(),C(D,{modelValue:d(o),"onUpdate:modelValue":l[3]||(l[3]=i=>f(o)?o.value=i:null),width:"500"},{activator:a(({props:i})=>[e(c,j(_(i)),{default:a(()=>[s(" Click Me ")]),_:2},1040)]),default:a(()=>[e(y,{title:"Privacy Policy"},{default:a(()=>[e(t,{variant:"text",size:"default",onClick:l[0]||(l[0]=i=>o.value=!1)}),e(V,null,{default:a(()=>[s(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-4"},{default:a(()=>[e(c,{variant:"outlined",color:"secondary",onClick:l[1]||(l[1]=i=>o.value=!1)},{default:a(()=>[s(" close ")]),_:1}),e(c,{onClick:l[2]||(l[2]=i=>o.value=!1)},{default:a(()=>[s(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},be={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          variant="outlined"
          color="secondary"
          @click="isDialogVisible = false"
        >
          close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          variant="outlined"
          color="secondary"
          @click="isDialogVisible = false"
        >
          close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ve={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ve={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="ri-close-line"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="ri-close-line"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},he={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3 text-white">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mt-4"
          color="#fff"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3 text-white">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mt-4"
          color="#fff"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ke={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="text-end">
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ye={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},De={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-4">
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},we={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="overflow-visible d-flex justify-end flex-wrap gap-4">
        <VBtn
          variant="outlined"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save Changes
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="isDialogVisible = false"
      />

      <VCardItem class="pb-3">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="overflow-visible d-flex justify-end flex-wrap gap-4">
        <VBtn
          variant="outlined"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save Changes
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ce=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Be=h("p",null,[s("Use "),h("code",null,"persistent"),s(" prop to create persistent dialog.")],-1),xe=h("p",null,[s("Use "),h("code",null,"scrollable"),s(" prop to create scrollable dialog.")],-1),Te=h("p",null,[s("The "),h("code",null,"v-dialog"),s(" component makes it easy to create a customized loading experience for your application.")],-1),je=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),_e=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),Le=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),Pe=h("p",null,"Just a simple example of a form in a dialog.",-1),da={__name:"dialog",setup(v){return(o,r)=>{const l=fe,t=ie,i=ge,m=me,p=pe,x=de,N=ue,n=ce,L=se;return k(),C(U,null,{default:a(()=>[e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Basic",code:be},{default:a(()=>[Ce,e(l)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Persistent",code:De},{default:a(()=>[Be,e(i)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Scrollable",code:we},{default:a(()=>[xe,e(m)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Loader",code:he},{default:a(()=>[Te,e(p)]),_:1},8,["code"])]),_:1}),e(b,{col:"12",md:"6"},{default:a(()=>[e(t,{title:"Nesting",code:ke},{default:a(()=>[je,e(x)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Overflowed",code:ye},{default:a(()=>[_e,e(N)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Fullscreen",code:ve},{default:a(()=>[Le,e(n)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Form",code:Ve},{default:a(()=>[Pe,e(L)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{da as default};
