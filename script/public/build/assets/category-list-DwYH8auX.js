import{p as z}from"./paginationMeta-BbY5dJ0C.js";import{_ as F}from"./MoreBtn-CMrC8hcg.js";import{r as x}from"./validators-DD7Euqo8.js";import{r as p,o as D,e as R,w as a,a as e,u as t,R as j,i as m,V as h,d as w,b as d,c as O,h as g,f as N,x as H,t as P,aa as G,ab as K,ac as A,ad as W,ae as Q,af as J,ag as X,ah as Y,ai as Z}from"./main-Cw78g-lL.js";import{_ as ee}from"./AppDrawerHeaderSection-DQSFeDAa.js";import{I as te,L as oe}from"./index-CJw4XIx2.js";import{u as ae,S as re,P as ie,U as le,E as ne}from"./index-BDZnHo-B.js";import{P as se}from"./vue3-perfect-scrollbar.esm-Bq_YvC2Z.js";import{V as $}from"./VDivider-qVXjHTOM.js";import{V as M}from"./VCard-DLuue0SI.js";import{V as q}from"./VCardText-CmcafK4F.js";import{V as de}from"./VForm-CQfhZNSg.js";import{a as ue,V as y}from"./VRow-BG5I4kc3.js";import{V as S}from"./VTextField-BKkE6jAr.js";import{V as ce}from"./VFileInput-7IffHaRs.js";import{V as U}from"./VSelect-Bd1XwiRx.js";import{V as pe}from"./VNavigationDrawer-C2oWxnQR.js";import{V as me}from"./VDataTable-2oej71_N.js";import{V as ge}from"./VAvatar-BFNrWSvb.js";import"./VMenu-DypGLeY7.js";import"./VOverlay-DS9RY67J.js";import"./easing-DY7PVvcf.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./VImg-DHwMjE9V.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DYOtB0Vc.js";import"./VList-DJjA2_W7.js";import"./index-DhMs0plD.js";import"./ssrBoot-B8feSXE9.js";import"./helpers-cDhjtOJI.js";import"./VSpacer-B4bUzx1D.js";/* empty css              */import"./form-wczSFyJg.js";/* empty css                   */import"./VCounter-Dgzvj9pV.js";import"./VField-Chh8HzJD.js";import"./VInput-B2AKhCeD.js";import"./VChip-BmMdWnsY.js";import"./VSlideGroup-BHv8mlqE.js";import"./VCheckboxBtn-BX36Snjb.js";import"./VSelectionControl-DVPi5H3e.js";import"./VPagination-khwqltKr.js";import"./VTable-BzqFprxi.js";import"./filter-OYWg6emF.js";const fe={class:"tiptap-editor-wrapper rounded-lg pt-1 pb-2 px-2"},ve={key:0,class:"d-flex justify-end flex-wrap gap-x-2"},ye={class:"d-flex justify-start"},he={__name:"EcommerceAddCategoryDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen"],setup(B,{emit:f}){const _=B,u=f,V=l=>{u("update:isDrawerOpen",l)},r=ae({content:"",extensions:[re,te,ie.configure({placeholder:"Write a Comment..."}),le,oe.configure({openOnClick:!1})]}),c=()=>{var C,s,I;const l=(C=r.value)==null?void 0:C.getAttributes("link").href,o=window.prompt("URL",l);if(o!==null){if(o===""){(s=r.value)==null||s.chain().focus().extendMarkRange("link").unsetLink().run();return}(I=r.value)==null||I.chain().focus().extendMarkRange("link").setLink({href:o}).run()}},T=()=>{var o;const l=window.prompt("URL");l&&((o=r.value)==null||o.chain().focus().setImage({src:l}).run())},v=p(),n=p(),b=p(),k=p(),i=p(),E=p(),L=()=>{var l,o;u("update:isDrawerOpen",!1),(l=v.value)==null||l.reset(),(o=r.value)==null||o.commands.clearContent()};return(l,o)=>{const C=ee;return D(),R(pe,{"model-value":_.isDrawerOpen,temporary:"",location:"end",width:"370",class:"category-navigation-drawer scrollable-content",border:"none","onUpdate:modelValue":V},{default:a(()=>[e(C,{title:"Add Category",onCancel:o[0]||(o[0]=s=>l.$emit("update:isDrawerOpen",!1))}),e($),e(t(se),{options:{wheelPropagation:!1}},{default:a(()=>[e(M,{flat:""},{default:a(()=>[e(q,null,{default:a(()=>[e(t(de),{ref_key:"refVForm",ref:v,onSubmit:o[11]||(o[11]=j(()=>{},["prevent"]))},{default:a(()=>[e(ue,null,{default:a(()=>[e(y,{cols:"12"},{default:a(()=>[e(S,{modelValue:t(n),"onUpdate:modelValue":o[1]||(o[1]=s=>m(n)?n.value=s:null),label:"Title",rules:["requiredValidator"in l?l.requiredValidator:t(x)],placeholder:"Fashion"},null,8,["modelValue","rules"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[e(S,{modelValue:t(b),"onUpdate:modelValue":o[2]||(o[2]=s=>m(b)?b.value=s:null),label:"Slug",rules:["requiredValidator"in l?l.requiredValidator:t(x)],placeholder:"Trends fashion"},null,8,["modelValue","rules"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[e(ce,{modelValue:t(k),"onUpdate:modelValue":o[3]||(o[3]=s=>m(k)?k.value=s:null),"prepend-icon":"",rules:["requiredValidator"in l?l.requiredValidator:t(x)],density:"compact",label:"No file chosen",clearable:""},{append:a(()=>[e(h,{variant:"outlined"},{default:a(()=>[w(" Choose ")]),_:1})]),_:1},8,["modelValue","rules"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[e(U,{modelValue:t(i),"onUpdate:modelValue":o[4]||(o[4]=s=>m(i)?i.value=s:null),rules:["requiredValidator"in l?l.requiredValidator:t(x)],label:"Parent Category",placeholder:"Select Parent Category",items:["HouseHold","Management","Electronics","Office","Accessories"]},null,8,["modelValue","rules"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[d("div",fe,[e(t(ne),{editor:t(r)},null,8,["editor"]),t(r)?(D(),O("div",ve,[e(g,{icon:"ri-bold",color:t(r).isActive("bold")?"primary":"",size:"20",onClick:o[5]||(o[5]=s=>t(r).chain().focus().toggleBold().run())},null,8,["color"]),e(g,{color:t(r).isActive("italic")?"primary":"",icon:"ri-italic",size:"20",onClick:o[6]||(o[6]=s=>t(r).chain().focus().toggleItalic().run())},null,8,["color"]),e(g,{color:t(r).isActive("underline")?"primary":"",icon:"ri-underline",size:"20",onClick:o[7]||(o[7]=s=>t(r).commands.toggleUnderline())},null,8,["color"]),e(g,{color:t(r).isActive("bulletList")?"primary":"",icon:"ri-list-check",size:"20",onClick:o[8]||(o[8]=s=>t(r).chain().focus().toggleBulletList().run())},null,8,["color"]),e(g,{color:t(r).isActive("orderedList")?"primary":"",icon:"ri-list-ordered-2",size:"20",onClick:o[9]||(o[9]=s=>t(r).chain().focus().toggleOrderedList().run())},null,8,["color"]),e(g,{icon:"ri-links-line",size:"20",onClick:c}),e(g,{icon:"ri-image-line",size:"20",onClick:T})])):N("",!0)])]),_:1}),e(y,{cols:"12"},{default:a(()=>[e(U,{modelValue:t(E),"onUpdate:modelValue":o[10]||(o[10]=s=>m(E)?E.value=s:null),rules:["requiredValidator"in l?l.requiredValidator:t(x)],placeholder:"Select Category Status",label:"Parent Status",items:["Published","Inactive","Scheduled"]},null,8,["modelValue","rules"])]),_:1}),e(y,{cols:"12"},{default:a(()=>[d("div",ye,[e(h,{type:"submit",color:"primary",class:"me-4"},{default:a(()=>[w(" Add ")]),_:1}),e(h,{color:"error",variant:"outlined",onClick:L},{default:a(()=>[w(" Discard ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},Ve="/build/assets/product-25-D95TOBo2.png",we="/build/assets/product-28-B1WMOflt.png",be={class:"d-flex justify-md-space-between flex-wrap gap-4 justify-center"},ke={class:"d-flex align-center flex-wrap gap-4"},xe={class:"d-flex gap-x-3"},Pe=["src","alt"],Ce={class:"text-high-emphasis font-weight-medium mb-0"},_e={class:"text-body-2"},Te={class:"text-end pe-4"},Ee={class:"text-end pe-4"},De={class:"d-flex justify-end flex-wrap gap-x-6 px-2 py-1"},Se={class:"d-flex align-center gap-x-2 text-medium-emphasis text-base"},Ue={class:"d-flex align-center text-base text-high-emphasis me-2 mb-0"},Be={class:"d-flex gap-x-2 align-center me-2"},Pt={__name:"category-list",setup(B){const f=[{categoryTitle:"Smart Phone",description:"Choose from wide range of smartphones online at best prices.",totalProduct:12548,totalEarning:98784,image:G},{categoryTitle:"Clothing, Shoes, and jewellery",description:"Fashion for a wide selection of clothing, shoes, jewellery and watches.",totalProduct:4689,totalEarning:45627,image:K},{categoryTitle:"Home and Kitchen",description:"Browse through the wide range of Home and kitchen products.",totalProduct:12548,totalEarning:98784,image:A},{categoryTitle:"Beauty and Personal Care",description:"Explore beauty and personal care products, shop makeup and etc.",totalProduct:12548,totalEarning:98784,image:W},{categoryTitle:"Books",description:"Over 25 million titles across categories such as business  and etc.",totalProduct:12548,totalEarning:98784,image:Ve},{categoryTitle:"Games",description:"Every month, get exclusive in-game loot, free games, a free subscription.",totalProduct:12548,totalEarning:98784,image:Q},{categoryTitle:"Baby Products",description:"Buy baby products across different categories from top brands.",totalProduct:12548,totalEarning:98784,image:J},{categoryTitle:"Growsari",description:"Shop grocery Items through at best prices in India.",totalProduct:12548,totalEarning:98784,image:we},{categoryTitle:"Computer Accessories",description:"Enhance your computing experience with our range of computer accessories.",totalProduct:9876,totalEarning:65421,image:X},{categoryTitle:"Fitness Tracker",description:"Monitor your health and fitness goals with our range of advanced fitness trackers.",totalProduct:1987,totalEarning:32067,image:A},{categoryTitle:"Smart Home Devices",description:"Transform your home into a smart home with our innovative smart home devices.",totalProduct:2345,totalEarning:87654,image:Y},{categoryTitle:"Audio Speakers",description:"Immerse yourself in rich audio quality with our wide range of speakers.",totalProduct:5678,totalEarning:32145,image:Z}],_=[{title:"Categories",key:"categoryTitle"},{title:"Total Products",key:"totalProduct",align:"end"},{title:"Total Earning",key:"totalEarning",align:"end"},{title:"Action",key:"actions",sortable:!1}],u=p(10),V=p(""),r=p(!1),c=p(1),T=v=>{c.value=v.page};return(v,n)=>{const b=H("IconBtn"),k=F;return D(),O("div",null,[e(M,null,{default:a(()=>[e(q,null,{default:a(()=>[d("div",be,[e(S,{modelValue:t(V),"onUpdate:modelValue":n[0]||(n[0]=i=>m(V)?V.value=i:null),placeholder:"Search",density:"compact",style:{"max-inline-size":"280px","min-inline-size":"200px"}},null,8,["modelValue"]),d("div",ke,[e(h,{"prepend-icon":"ri-upload-2-line",color:"secondary",variant:"outlined"},{default:a(()=>[w(" Export ")]),_:1}),e(h,{"prepend-icon":"ri-add-line",onClick:n[1]||(n[1]=i=>r.value=!t(r))},{default:a(()=>[w(" Add Category ")]),_:1})])])]),_:1}),e(me,{"items-per-page":t(u),"onUpdate:itemsPerPage":n[5]||(n[5]=i=>m(u)?u.value=i:null),headers:_,page:t(c),items:f,"item-value":"categoryTitle",search:t(V),"show-select":"",class:"text-no-wrap category-table","onUpdate:options":T},{"item.actions":a(()=>[e(b,{size:"small"},{default:a(()=>[e(g,{icon:"ri-edit-box-line"})]),_:1}),e(k,{size:"small",class:"text-medium-emphasis","menu-list":[{title:"Download",value:"download",prependIcon:"ri-download-line"},{title:"Edit",value:"edit",prependIcon:"ri-pencil-line"},{title:"Duplicate",value:"duplicate",prependIcon:"ri-stack-line"}],"item-props":""})]),"item.categoryTitle":a(({item:i})=>[d("div",xe,[e(ge,{variant:"tonal",rounded:"",size:"38"},{default:a(()=>[d("img",{src:i.image,alt:i.categoryTitle,width:"38",height:"38"},null,8,Pe)]),_:2},1024),d("div",null,[d("p",Ce,P(i.categoryTitle),1),d("div",_e,P(i.description),1)])])]),"item.totalEarning":a(({item:i})=>[d("div",Te,P(i.totalEarning.toLocaleString("en-IN",{style:"currency",currency:"USD"})),1)]),"item.totalProduct":a(({item:i})=>[d("div",Ee,P(i.totalProduct.toLocaleString()),1)]),bottom:a(()=>[e($),d("div",De,[d("div",Se,[w(" Rows Per Page: "),e(U,{modelValue:t(u),"onUpdate:modelValue":n[2]||(n[2]=i=>m(u)?u.value=i:null),class:"per-page-select",variant:"plain",items:[10,20,25,50,100]},null,8,["modelValue"])]),d("p",Ue,P(("paginationMeta"in v?v.paginationMeta:t(z))({page:t(c),itemsPerPage:t(u)},f.length)),1),d("div",Be,[e(h,{class:"flip-in-rtl",icon:"ri-arrow-left-s-line",variant:"text",density:"comfortable",color:"high-emphasis",disabled:t(c)<=1,onClick:n[3]||(n[3]=i=>t(c)<=1?c.value=1:c.value--)},null,8,["disabled"]),e(h,{class:"flip-in-rtl",icon:"ri-arrow-right-s-line",density:"comfortable",variant:"text",color:"high-emphasis",disabled:t(c)>=Math.ceil(f.length/t(u)),onClick:n[4]||(n[4]=i=>t(c)>=Math.ceil(f.length/t(u))?c.value=Math.ceil(f.length/t(u)):c.value++)},null,8,["disabled"])])])]),_:1},8,["items-per-page","page","search"])]),_:1}),e(he,{isDrawerOpen:t(r),"onUpdate:isDrawerOpen":n[6]||(n[6]=i=>m(r)?r.value=i:null)},null,8,["isDrawerOpen"])])}}};export{Pt as default};