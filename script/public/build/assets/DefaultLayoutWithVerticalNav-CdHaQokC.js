import{_ as ie,a as ae}from"./I18n-CYmWCDEB.js";import{_ as oe}from"./AppLoadingIndicator-CxI2Vu0Y.js";import{G as U,L as k,aF as z,r as N,e2 as ne,bt as le,eV as J,ek as O,a4 as K,A as x,x as B,o as l,e as p,w as u,b as L,aw as F,a as g,u as e,en as d,P as w,t as P,Q as _,dx as f,a6 as C,c as T,F as Q,j as Y,z as G,p as re,k as se,e7 as ce,bs as de,el as H,eW as S,eX as pe,em as me,eo as $,d as E,f as I,aE as X,eY as ue,eZ as ve,e_ as ge,aJ as fe,ep as Z,eq as he,er as be,$ as ye,O as ke,h as Ce,al as M,cJ as Ne}from"./main-Cw78g-lL.js";import we from"./Footer-C2Lj0ZAl.js";import _e from"./NavBarNotifications-DVMm-jDB.js";import Ae from"./NavSearchBar-CSYTu3IY.js";import Ve from"./NavbarShortcuts-BNAU4SyJ.js";import xe from"./NavbarThemeSwitcher-BIwHOxKk.js";import Se from"./UserProfile-C4kYHTV9.js";import{P as Le}from"./vue3-perfect-scrollbar.esm-Bq_YvC2Z.js";import{V as Pe}from"./VNodeRenderer-CQRqKfoX.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Ie}from"./VSpacer-B4bUzx1D.js";import"./VDivider-qVXjHTOM.js";import"./VChip-BmMdWnsY.js";import"./index-DhMs0plD.js";import"./VSlideGroup-BHv8mlqE.js";import"./VAvatar-BFNrWSvb.js";import"./VImg-DHwMjE9V.js";import"./CustomRadiosWithImage-6bTw_5t-.js";import"./VRow-BG5I4kc3.js";/* empty css              */import"./form-wczSFyJg.js";import"./VRadioGroup-Uf1JckNr.js";import"./VSelectionControl-DVPi5H3e.js";import"./VInput-B2AKhCeD.js";import"./useGenerateImageVariant-WNsdL4gJ.js";import"./VBadge-hYR-JcPm.js";import"./VMenu-DypGLeY7.js";import"./VOverlay-DS9RY67J.js";import"./easing-DY7PVvcf.js";import"./lazy-Dz28_Vpk.js";import"./scopeId-Dq-41LqQ.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DYOtB0Vc.js";import"./VList-DJjA2_W7.js";import"./ssrBoot-B8feSXE9.js";import"./VSlider-D7iRpu_w.js";import"./VSliderTrack-B6qk2jCu.js";import"./VSheet-C0R2hcM9.js";import"./VSwitch-CMI6vM0W.js";import"./VNavigationDrawer-C2oWxnQR.js";import"./formatters-COAB7S_x.js";import"./helpers-cDhjtOJI.js";import"./VCard-DLuue0SI.js";import"./VCardText-CmcafK4F.js";import"./VTooltip-Csjob21H.js";import"./shepherd.esm-C7bYZz12.js";import"./index-CvdUsmOx.js";import"./useApi-DW-wMX_v.js";import"./useAbility-BopWcrfj.js";const Re=U({name:"TransitionExpand",setup(t,{slots:a}){const r=i=>{const h=getComputedStyle(i).width;i.style.width=h,i.style.position="absolute",i.style.visibility="hidden",i.style.height="auto";const y=getComputedStyle(i).height;i.style.width="",i.style.position="",i.style.visibility="",i.style.height="0px",getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height=y})},v=i=>{i.style.height="auto"},n=i=>{const h=getComputedStyle(i).height;i.style.height=h,getComputedStyle(i).height,requestAnimationFrame(()=>{i.style.height="0px"})};return()=>k(k(z),{name:"expand",onEnter:r,onAfterEnter:v,onLeave:n},()=>{var i;return(i=a.default)==null?void 0:i.call(a)})}}),Te=ee(Re,[["__scopeId","data-v-2683bda9"]]),$e=t=>(re("data-v-c52b07d3"),t=t(),se(),t),Ee={class:"nav-header"},Oe=$e(()=>L("div",{class:"vertical-nav-items-shadow"},null,-1)),Fe={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const a=t,r=N(),v=ne(r);le(J,v);const n=O(),i=c=>"heading"in c?je:"children"in c?Be:te,h=K();x(()=>h.name,()=>{a.toggleIsOverlayNavActive(!1)});const y=N(!1),b=c=>y.value=c,A=c=>{y.value=c.target.scrollTop>0},V=n.isVerticalNavMini(v);return(c,o)=>{const m=B("RouterLink");return l(),p(f(a.tag),{ref_key:"refNav",ref:r,class:G(["layout-vertical-nav",[{"overlay-nav":e(n).isLessThanOverlayNavBreakpoint,hovered:e(v),visible:t.isOverlayNavActive,scrolled:e(y)}]])},{default:u(()=>[L("div",Ee,[F(c.$slots,"nav-header",{},()=>[g(m,{to:"/",class:"app-logo app-title-wrapper"},{default:u(()=>[g(e(Pe),{nodes:e(d).app.logo},null,8,["nodes"]),g(z,{name:"vertical-nav-app-title"},{default:u(()=>[w(L("h1",{class:"app-logo-title leading-normal"},P(e(d).app.title),513),[[_,!e(V)]])]),_:1})]),_:1}),w((l(),p(f(e(d).app.iconRenderer||"div"),C({class:["header-action d-none nav-unpin",e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(d).icons.verticalNavUnPinned,{onClick:o[0]||(o[0]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[_,e(n).isVerticalNavCollapsed]]),w((l(),p(f(e(d).app.iconRenderer||"div"),C({class:["header-action d-none nav-pin",!e(n).isVerticalNavCollapsed&&"d-lg-block"]},e(d).icons.verticalNavPinned,{onClick:o[1]||(o[1]=s=>e(n).isVerticalNavCollapsed=!e(n).isVerticalNavCollapsed)}),null,16,["class"])),[[_,!e(n).isVerticalNavCollapsed]]),(l(),p(f(e(d).app.iconRenderer||"div"),C({class:"header-action d-lg-none"},e(d).icons.close,{onClick:o[2]||(o[2]=s=>t.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),F(c.$slots,"before-nav-items",{},()=>[Oe],!0),F(c.$slots,"nav-items",{updateIsVerticalNavScrolled:b},()=>[(l(),p(e(Le),{key:e(n).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:A},{default:u(()=>[(l(!0),T(Q,null,Y(t.navItems,(s,D)=>(l(),p(f(i(s)),{key:D,item:s},null,8,["item"]))),128))]),_:1}))],!0),F(c.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},De=ee(Fe,[["__scopeId","data-v-c52b07d3"]]),Me={class:"nav-group-children"},Be=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const a=t,r=K(),v=ce(),n=O(),i=n.isVerticalNavMini(),h=de(J,N(!1)),y=N(!1),b=N(!1),A=o=>o.some(m=>{let s=S.value.includes(m.title);return"children"in m&&(s=A(m.children)||s),s}),V=o=>{o.forEach(m=>{"children"in m&&V(m.children),S.value=S.value.filter(s=>s!==m.title)})};x(()=>r.path,()=>{const o=H(a.item.children,v);b.value=o&&!n.isVerticalNavMini(h).value,y.value=o},{immediate:!0}),x(b,o=>{const m=S.value.indexOf(a.item.title);o&&m===-1?S.value.push(a.item.title):!o&&m!==-1&&(S.value.splice(m,1),V(a.item.children))},{immediate:!0}),x(S,o=>{if(o.at(-1)===a.item.title)return;const s=H(a.item.children,v);s||A(a.item.children)||(b.value=s,y.value=s)},{deep:!0}),x(n.isVerticalNavMini(h),o=>{b.value=o?!1:y.value});const c=pe();return(o,m)=>e(me)(t.item)?(l(),T("li",{key:0,class:G(["nav-group",[{active:e(y),open:e(b),disabled:t.item.disable}]])},[L("div",{class:"nav-group-label",onClick:m[0]||(m[0]=s=>b.value=!e(b))},[(l(),p(f(e(d).app.iconRenderer||"div"),C(t.item.icon||e(d).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(l(),p(f(e(c)?X:"div"),C({name:"transition-slide-x"},e(c)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:u(()=>[w((l(),p(f(e(d).app.i18n.enable?"i18n-t":"span"),C(e($)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:u(()=>[E(P(t.item.title),1)]),_:1},16)),[[_,!e(i)]]),t.item.badgeContent?w((l(),p(f(e(d).app.i18n.enable?"i18n-t":"span"),C({key:0},e($)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:u(()=>[E(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[_,!e(i)]]):I("",!0),w((l(),p(f(e(d).app.iconRenderer||"div"),C(e(d).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[_,!e(i)]])]),_:1},16))]),g(e(Te),null,{default:u(()=>[w(L("ul",Me,[(l(!0),T(Q,null,Y(t.item.children,s=>(l(),p(f("children"in s?"VerticalNavGroup":e(te)),{key:s.title,item:s},null,8,["item"]))),128))],512),[[_,e(b)]])]),_:1})],2)):I("",!0)}}),ze=U({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(t,{slots:a}){const{width:r}=ue(),v=O(),n=N(!1),i=N(!1),h=ve(n);return ge(n,i),x(r,()=>{!v.isLessThanOverlayNavBreakpoint&&i.value&&(i.value=!1)}),()=>{var q,j,W;const y=fe(t,"verticalNavAttrs"),{wrapper:b,wrapperProps:A,...V}=y.value,c=k(De,{isOverlayNavActive:n.value,toggleIsOverlayNavActive:h,navItems:t.navItems,...V},{"nav-header":()=>{var R;return(R=a["vertical-nav-header"])==null?void 0:R.call(a)},"before-nav-items":()=>{var R;return(R=a["before-vertical-nav-items"])==null?void 0:R.call(a)}}),o=k("header",{class:["layout-navbar",{"navbar-blur":v.isNavbarBlurEnabled}]},[k("div",{class:"navbar-content-container"},(q=a.navbar)==null?void 0:q.call(a,{toggleVerticalOverlayNavActive:h}))]),m=k("main",{class:"layout-page-content"},k("div",{class:"page-content-container"},(j=a.default)==null?void 0:j.call(a))),s=k("footer",{class:"layout-footer"},[k("div",{class:"footer-content-container"},(W=a.footer)==null?void 0:W.call(a))]),D=k("div",{class:["layout-overlay",{visible:i.value}],onClick:()=>{i.value=!i.value}});return k("div",{class:["layout-wrapper",...v._layoutClasses]},[b?k(b,A,{default:()=>c}):c,k("div",{class:"layout-content-wrapper"},[o,m,s]),D])}}}),te={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const r=O().isVerticalNavMini();return(v,n)=>e(Z)(t.item.action,t.item.subject)?(l(),T("li",{key:0,class:G(["nav-link",{disabled:t.item.disable}])},[(l(),p(f(t.item.to?"RouterLink":"a"),C(e(be)(t.item),{class:{"router-link-active router-link-exact-active":e(he)(t.item,v.$router)}}),{default:u(()=>[(l(),p(f(e(d).app.iconRenderer||"div"),C(t.item.icon||e(d).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),g(X,{name:"transition-slide-x"},{default:u(()=>[w((l(),p(f(e(d).app.i18n.enable?"i18n-t":"span"),C({key:"title",class:"nav-item-title"},e($)(t.item.title,"span")),{default:u(()=>[E(P(t.item.title),1)]),_:1},16)),[[_,!e(r)]]),t.item.badgeContent?w((l(),p(f(e(d).app.i18n.enable?"i18n-t":"span"),C({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e($)(t.item.badgeContent,"span")),{default:u(()=>[E(P(t.item.badgeContent),1)]),_:1},16,["class"])),[[_,!e(r)]]):I("",!0)]),_:1})]),_:1},16,["class"]))],2)):I("",!0)}},Ge={key:0,class:"nav-section-title"},qe={class:"title-wrapper"},je={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const r=O().isVerticalNavMini();return(v,n)=>e(Z)(t.item.action,t.item.subject)?(l(),T("li",Ge,[L("div",qe,[g(z,{name:"vertical-nav-section-title",mode:"out-in"},{default:u(()=>[(l(),p(f(e(r)?e(d).app.iconRenderer:e(d).app.i18n.enable?"i18n-t":"span"),C({key:e(r),class:e(r)?"placeholder-icon":"title-text"},{...e(d).icons.sectionTitlePlaceholder,...e($)(t.item.heading,"span")}),{default:u(()=>[E(P(e(r)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):I("",!0)}},We=[{heading:"Apps & Pages"},{title:"Ecommerce",icon:{icon:"ri-shopping-bag-3-line"},children:[{title:"Dashboard",to:"apps-ecommerce-dashboard"},{title:"Product",children:[{title:"List",to:"apps-ecommerce-product-list"},{title:"Add",to:"apps-ecommerce-product-add"},{title:"Category",to:"apps-ecommerce-product-category-list"}]},{title:"Order",children:[{title:"List",to:"apps-ecommerce-order-list"},{title:"Details",to:{name:"apps-ecommerce-order-details-id",params:{id:"9042"}}}]},{title:"Customer",children:[{title:"List",to:"apps-ecommerce-customer-list"},{title:"Details",to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}}}]},{title:"Manage Review",to:"apps-ecommerce-manage-review"},{title:"Referrals",to:"apps-ecommerce-referrals"},{title:"Settings",to:"apps-ecommerce-settings"}]},{title:"Academy",icon:{icon:"ri-graduation-cap-line"},children:[{title:"Dashboard",to:"apps-academy-dashboard"},{title:"My Course",to:"apps-academy-my-course"},{title:"Course Details",to:"apps-academy-course-details"}]},{title:"Logistics",icon:{icon:"ri-car-line"},children:[{title:"Dashboard",to:"apps-logistics-dashboard"},{title:"Fleet",to:"apps-logistics-fleet"}]},{title:"Email",icon:{icon:"ri-mail-open-line"},to:"apps-email"},{title:"Chat",icon:{icon:"ri-wechat-line"},to:"apps-chat"},{title:"Calendar",icon:{icon:"ri-calendar-line"},to:"apps-calendar"},{title:"Kanban",icon:{icon:"ri-drag-drop-line"},to:"apps-kanban"},{title:"Invoice",icon:{icon:"ri-bill-line"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"ri-user-line"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Roles & Permissions",icon:{icon:"ri-lock-2-line"},children:[{title:"Roles",to:"apps-roles"},{title:"Permissions",to:"apps-permissions"}]},{title:"Pages",icon:{icon:"ri-layout-left-line"},children:[{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:{path:"/pages/misc/not-found"},target:"_blank"},{title:"Not Authorized - 401",to:{path:"/pages/misc/not-authorized"},target:"_blank"}]}]},{title:"Authentication",icon:{icon:"ri-shield-keyhole-line"},children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"},{title:"Register Multi-Steps",to:"pages-authentication-register-multi-steps",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Wizard Examples",icon:{icon:"ri-git-commit-line"},children:[{title:"Checkout",to:{name:"wizard-examples-checkout"}},{title:"Property Listing",to:{name:"wizard-examples-property-listing"}},{title:"Create Deal",to:{name:"wizard-examples-create-deal"}}]},{title:"Dialog Examples",icon:{icon:"ri-tv-2-line"},to:"pages-dialog-examples"}],He=[{heading:"Charts"},{title:"Charts",icon:{icon:"ri-bar-chart-2-line"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],Ue=[{title:"Dashboards",icon:{icon:"ri-home-smile-line"},children:[{title:"CRM",to:"dashboards-crm"},{title:"Analytics",to:"dashboards-analytics"},{title:"eCommerce",to:"dashboards-ecommerce"},{title:"Academy",to:"dashboards-academy"},{title:"Logistics",to:"dashboards-logistics"}],badgeContent:"5",badgeClass:"bg-error"},{title:"Front Pages",icon:{icon:"ri-file-copy-line"},children:[{title:"Landing",to:"front-pages-landing-page",target:"_blank"},{title:"Pricing",to:"front-pages-pricing",target:"_blank"},{title:"Payment",to:"front-pages-payment",target:"_blank"},{title:"Checkout",to:"front-pages-checkout",target:"_blank"},{title:"Help Center",to:"front-pages-help-center",target:"_blank"}]}],Je=[{heading:"Forms & Tables"},{title:"Form Elements",icon:{icon:"ri-radio-button-line"},children:[{title:"Autocomplete",to:"forms-autocomplete"},{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"Editors",to:"forms-editors"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Custom Input",to:"forms-custom-input"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"ri-layout-4-line"},to:"forms-form-layouts"},{title:"Form Wizard",icon:{icon:"ri-git-commit-line"},children:[{title:"Numbered",to:"forms-form-wizard-numbered"},{title:"Icons",to:"forms-form-wizard-icons"}]},{title:"Form Validation",icon:{icon:"ri-checkbox-multiple-line"},to:"forms-form-validation"},{title:"Tables",icon:{icon:"ri-table-alt-line"},children:[{title:"Simple Table",to:"tables-simple-table"},{title:"Data Table",to:"tables-data-table"}]}],Ke=[{heading:"Others"},{title:"Access Control",icon:{icon:"ri-shield-line"},to:"access-control",action:"read",subject:"AclDemo"},{title:"Nav Levels",icon:{icon:"ri-menu-line"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"ri-eye-off-line"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"ri-lifebuoy-line"},target:"_blank"},{title:"Documentation",href:"https://demos.pixinvent.com/materialize-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html",icon:{icon:"ri-article-line"},target:"_blank"}],Qe=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"ri-text"},to:"pages-typography"},{title:"Icons",icon:{icon:"ri-remixicon-line"},to:"pages-icons"},{title:"Cards",icon:{icon:"ri-bar-chart-box-line"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Gamification",to:"pages-cards-card-gamification"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"ri-toggle-line"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress Circular",to:"components-progress-circular"},{title:"Progress Linear",to:"components-progress-linear"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]},{title:"Extensions",icon:{icon:"ri-box-3-line"},children:[{title:"Tour",to:"extensions-tour"},{title:"Swiper",to:"extensions-swiper"}]}],Ye=[...Ue,...We,...Qe,...Je,...He,...Ke],Xe={class:"d-flex h-100 align-center"},Qt={__name:"DefaultLayoutWithVerticalNav",setup(t){ye(i=>({"703826a6":e(n)}));const a=N(!1),r=N(null);x([a,r],()=>{a.value&&r.value&&r.value.fallbackHandle(),!a.value&&r.value&&r.value.resolveHandle()},{immediate:!0});const v=ke(),n=N(null);return x([()=>v.isVerticalNavCollapsed,()=>v.isAppRTL],i=>{v.isAppRTL?n.value=i[0]?"rotate-back-180":"rotate-180":n.value=i[0]?"rotate-180":"rotate-back-180"},{immediate:!0}),(i,h)=>{const y=B("IconBtn"),b=oe,A=B("RouterView"),V=ae;return l(),p(e(ze),{"nav-items":e(Ye)},{navbar:u(({toggleVerticalOverlayNavActive:c})=>{var o;return[L("div",Xe,[g(y,{id:"vertical-nav-toggle-btn",class:"ms-n2 d-lg-none",onClick:m=>c(!0)},{default:u(()=>[g(Ce,{icon:"ri-menu-line"})]),_:2},1032,["onClick"]),g(Ae,{class:"ms-lg-n2"}),g(Ie),e(M).app.i18n.enable&&((o=e(M).app.i18n.langConfig)!=null&&o.length)?(l(),p(ie,{key:0,languages:e(M).app.i18n.langConfig},null,8,["languages"])):I("",!0),g(xe),g(Ve),g(_e,{class:"me-2"}),g(Se)])]}),footer:u(()=>[g(we)]),default:u(()=>[g(b,{ref_key:"refLoadingIndicator",ref:r},null,512),g(A,null,{default:u(({Component:c})=>[(l(),p(Ne,{timeout:0,onFallback:h[0]||(h[0]=o=>a.value=!0),onResolve:h[1]||(h[1]=o=>a.value=!1)},{default:u(()=>[(l(),p(f(c)))]),_:2},1024))]),_:1}),g(V)]),_:1},8,["nav-items"])}}};export{Qt as default};