import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { h, ref, withAsyncContext, computed, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, isRef, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, z as VNodeRenderer, V as VBtn, a as VIcon } from "../ssr.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
import "vue-router";
import "@casl/vue";
import "@casl/ability";
import "outvariant";
import "@open-draft/until";
import "@mswjs/cookies";
import "strict-event-emitter";
import "@sindresorhus/is";
import "@bundled-es-modules/statuses";
import "path-to-regexp";
import "@mswjs/interceptors";
import "@bundled-es-modules/cookie";
import "headers-polyfill";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@antfu/utils";
import "ufo";
/* empty css               */
import "./VImg-D-rbsD1g.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VDataTable-m6ejIeVU.js";
import "./VPagination-BH_qhohv.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VTable-GFy-hQjD.js";
import "./filter-BC4fOy6c.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
const paperImg = '<svg width="1em" height="1em" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="Paper">\n<path id="Vector" opacity="0.2" d="M34.8347 5.89001L4.25347 14.5033C3.99315 14.5745 3.76109 14.7242 3.58892 14.932C3.41674 15.1398 3.31281 15.3956 3.29129 15.6647C3.26977 15.9337 3.3317 16.2028 3.46865 16.4353C3.60559 16.6679 3.8109 16.8526 4.0566 16.9642L18.1003 23.6088C18.3754 23.7362 18.5964 23.9571 18.7238 24.2322L25.3683 38.2759C25.48 38.5216 25.6647 38.7269 25.8972 38.8639C26.1298 39.0008 26.3989 39.0628 26.6679 39.0412C26.9369 39.0197 27.1927 38.9158 27.4006 38.7436C27.6084 38.5714 27.7581 38.3394 27.8293 38.0791L36.4425 7.49782C36.5078 7.27466 36.5118 7.03804 36.4542 6.81279C36.3966 6.58753 36.2794 6.38192 36.115 6.21751C35.9506 6.0531 35.745 5.93594 35.5198 5.87832C35.2945 5.8207 35.0579 5.82474 34.8347 5.89001Z" fill="currentColor"/>\n<path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M35.7676 4.90951C35.3704 4.80791 34.9532 4.81452 34.5595 4.92862L3.98975 13.5387L3.98553 13.5398C3.52858 13.6657 3.12129 13.929 2.81886 14.294C2.5155 14.6602 2.33239 15.1109 2.29448 15.5849C2.25656 16.0589 2.36567 16.533 2.60696 16.9428C2.84676 17.35 3.20553 17.6739 3.63489 17.871L17.6727 24.5127L17.6727 24.5127L17.6801 24.5162C17.7402 24.544 17.7885 24.5923 17.8164 24.6524L17.8163 24.6524L17.8199 24.6599L24.4616 38.6978C24.6587 39.1271 24.9826 39.4858 25.3898 39.7256C25.7995 39.9669 26.2736 40.076 26.7476 40.0381C27.2216 40.0001 27.6724 39.817 28.0385 39.5137C28.4036 39.2113 28.6668 38.804 28.7927 38.347L28.7939 38.3428L37.4023 7.77853L37.4039 7.77315C37.518 7.37938 37.5246 6.96221 37.423 6.56497C37.3209 6.16591 37.1134 5.80166 36.8221 5.5104C36.5309 5.21914 36.1666 5.01159 35.7676 4.90951ZM35.1058 6.85256L34.8347 5.89001L35.1154 6.8498C35.1664 6.83489 35.2205 6.83396 35.2719 6.84713C35.3234 6.86029 35.3704 6.88705 35.4079 6.92461C35.4455 6.96218 35.4723 7.00915 35.4854 7.06061C35.4986 7.11207 35.4977 7.16612 35.4827 7.2171L35.4827 7.21709L35.48 7.22671L26.8667 37.808L26.8667 37.808L26.8647 37.8153C26.8477 37.8773 26.8121 37.9326 26.7626 37.9736C26.7131 38.0146 26.6522 38.0393 26.5881 38.0444C26.5241 38.0496 26.46 38.0348 26.4046 38.0022C26.3493 37.9696 26.3053 37.9207 26.2787 37.8622L26.2722 37.8483L19.7287 24.0181L26.6496 17.0971C27.0402 16.7066 27.0402 16.0734 26.6496 15.6829C26.2591 15.2924 25.626 15.2924 25.2354 15.6829L18.3145 22.6038L4.48428 16.0603L4.47032 16.0538C4.41182 16.0272 4.36294 15.9833 4.33033 15.9279C4.29773 15.8725 4.28298 15.8085 4.28811 15.7444C4.29323 15.6803 4.31798 15.6194 4.35897 15.57C4.39996 15.5205 4.45521 15.4848 4.5172 15.4679L4.5172 15.4679L4.52458 15.4658L35.1058 6.85256Z" fill="currentColor"/>\n</g>\n</svg>\n';
const rocketImg = '<svg width="1em" height="1em" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="Rocket">\n<path id="Union" opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M35.5943 24.3473L30.4428 18.1621C30.6396 21.952 29.7045 26.3652 26.817 31.4019L31.7389 35.3394C31.9139 35.4784 32.1215 35.5704 32.342 35.6067C32.5625 35.643 32.7887 35.6224 32.999 35.5468C33.2093 35.4712 33.3968 35.3432 33.5438 35.1748C33.6908 35.0065 33.7923 34.8034 33.8389 34.5848L35.8568 25.4629C35.9055 25.2695 35.907 25.0672 35.8614 24.8731C35.8157 24.679 35.7241 24.4987 35.5943 24.3473ZM7.63806 24.4457L12.7896 18.277C12.5927 22.0668 13.5279 26.4801 16.4154 31.5004L11.4935 35.4379C11.3196 35.5769 11.1132 35.6693 10.8937 35.7065C10.6743 35.7437 10.4489 35.7245 10.2389 35.6507C10.0289 35.5769 9.84115 35.4509 9.69326 35.2845C9.54537 35.1181 9.44223 34.9168 9.39353 34.6996L7.37556 25.5613C7.32691 25.3679 7.32536 25.1657 7.37104 24.9716C7.41671 24.7775 7.50828 24.5971 7.63806 24.4457Z" fill="currentColor"/>\n<path id="Union_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.2132 2.47353C20.6217 2.13596 21.1351 1.95117 21.6653 1.95117C22.1971 1.95117 22.7121 2.13707 23.1212 2.47657C24.7301 3.7867 28.2128 7.0357 30.1373 12.0381C30.798 13.7554 31.2701 15.6673 31.4253 17.7625L36.4572 23.8008C36.6883 24.0724 36.8515 24.3951 36.9332 24.7424C37.0142 25.0868 37.0128 25.4453 36.9291 25.7889L34.9138 34.9151L34.9131 34.9182C34.8273 35.3009 34.6455 35.6555 34.385 35.9487C34.1244 36.2418 33.7936 36.4639 33.4236 36.5939C33.0535 36.724 32.6565 36.7579 32.2698 36.6923C31.8831 36.6267 31.5195 36.4638 31.2131 36.219L31.2126 36.2186L26.5646 32.5002H16.7662L12.1182 36.2186L12.1177 36.219C11.8113 36.4638 11.4477 36.6267 11.061 36.6923C10.6743 36.7579 10.2773 36.724 9.90727 36.5939C9.53726 36.4639 9.20641 36.2418 8.94584 35.9487C8.68527 35.6555 8.50355 35.3009 8.41775 34.9182L8.41706 34.9151L6.40177 25.7889C6.31804 25.4453 6.31658 25.0868 6.39762 24.7424C6.47936 24.395 6.64268 24.072 6.87401 23.8004L11.8088 17.8912C11.9513 15.7424 12.4328 13.7842 13.1145 12.029C15.058 7.02537 18.5854 3.77698 20.2132 2.47353ZM29.4558 18.3076C29.4446 18.2387 29.4406 18.169 29.4438 18.0996C29.3181 16.1202 28.879 14.3374 28.2707 12.7563C26.5219 8.21065 23.3318 5.22661 21.8544 4.02428L21.8446 4.01626L21.8446 4.01619C21.7943 3.97418 21.7309 3.95117 21.6653 3.95117C21.5998 3.95117 21.5363 3.97418 21.486 4.01619L21.4697 4.02954C19.9771 5.22365 16.7444 8.20744 14.9788 12.7531C14.3468 14.3804 13.8969 16.2219 13.7896 18.2718C13.7898 18.3084 13.788 18.345 13.7842 18.3815C13.6245 21.8411 14.4416 25.8898 16.9985 30.5002H26.3263C28.8486 25.8569 29.6366 21.7836 29.4558 18.3076ZM34.9245 25.0857L31.4177 20.8775C31.1755 24.0045 30.2142 27.4702 28.197 31.2448L32.4615 34.6565C32.5029 34.6896 32.5521 34.7116 32.6043 34.7204C32.6566 34.7293 32.7102 34.7247 32.7602 34.7071C32.8102 34.6896 32.8549 34.6596 32.8901 34.6199C32.9251 34.5806 32.9496 34.533 32.9613 34.4817L32.9615 34.4807L34.9788 25.3455C34.9809 25.3361 34.9831 25.3266 34.9855 25.3172C34.9951 25.2789 34.9954 25.2389 34.9864 25.2004C34.9773 25.162 34.9592 25.1263 34.9335 25.0963L34.9245 25.0858L34.9245 25.0857ZM11.8405 20.9734L8.40561 25.0865L8.39739 25.0964L8.39732 25.0963C8.37163 25.1263 8.3535 25.162 8.34445 25.2004C8.33541 25.2389 8.33572 25.2789 8.34535 25.3172C8.34772 25.3266 8.34995 25.3361 8.35204 25.3455L10.3693 34.4807L10.3695 34.4817C10.3812 34.533 10.4057 34.5806 10.4407 34.6199C10.4759 34.6596 10.5206 34.6896 10.5706 34.7071C10.6206 34.7247 10.6743 34.7293 10.7265 34.7204C10.7788 34.7116 10.8279 34.6896 10.8693 34.6565L15.1281 31.2495C13.0909 27.5131 12.1056 24.0779 11.8405 20.9734ZM18.0404 36.7502C18.0404 36.1979 18.4881 35.7502 19.0404 35.7502H24.2904C24.8427 35.7502 25.2904 36.1979 25.2904 36.7502C25.2904 37.3025 24.8427 37.7502 24.2904 37.7502H19.0404C18.4881 37.7502 18.0404 37.3025 18.0404 36.7502ZM23.6342 15.7502C23.6342 16.8375 22.7527 17.719 21.6654 17.719C20.5781 17.719 19.6967 16.8375 19.6967 15.7502C19.6967 14.6629 20.5781 13.7815 21.6654 13.7815C22.7527 13.7815 23.6342 14.6629 23.6342 15.7502Z" fill="currentColor"/>\n</g>\n</svg>\n';
const userInfoImg = '<svg width="1em" height="1em" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="User Info">\n<path id="Vector" opacity="0.2" d="M9.1875 6.25H32.8125C32.8954 6.25 32.9749 6.28292 33.0335 6.34153L33.739 5.63603L33.0335 6.34153C33.0921 6.40013 33.125 6.47962 33.125 6.5625V35.4375C33.125 35.5204 33.0921 35.5999 33.0335 35.6585L33.7406 36.3656L33.0335 35.6585C32.9749 35.7171 32.8954 35.75 32.8125 35.75H9.1875C9.10462 35.75 9.02513 35.7171 8.96653 35.6585L8.25942 36.3656L8.96653 35.6585C8.90792 35.5999 8.875 35.5204 8.875 35.4375V6.5625C8.875 6.47962 8.90792 6.40014 8.96653 6.34153C9.02514 6.28292 9.10462 6.25 9.1875 6.25ZM17.5277 27.5092C18.5555 28.1959 19.7639 28.5625 21 28.5625C22.6576 28.5625 24.2473 27.904 25.4194 26.7319C26.5915 25.5598 27.25 23.9701 27.25 22.3125C27.25 21.0764 26.8834 19.868 26.1967 18.8402C25.5099 17.8124 24.5338 17.0113 23.3918 16.5383C22.2497 16.0652 20.9931 15.9414 19.7807 16.1826C18.5683 16.4237 17.4547 17.019 16.5806 17.8931C15.7065 18.7672 15.1112 19.8808 14.8701 21.0932C14.6289 22.3056 14.7527 23.5622 15.2258 24.7043C15.6988 25.8463 16.4999 26.8224 17.5277 27.5092Z" fill="currentColor" stroke="#666CFF" stroke-width="2"/>\n<path id="Vector_2" d="M21 27.5625C23.8995 27.5625 26.25 25.212 26.25 22.3125C26.25 19.413 23.8995 17.0625 21 17.0625C18.1005 17.0625 15.75 19.413 15.75 22.3125C15.75 25.212 18.1005 27.5625 21 27.5625ZM21 27.5625C19.4718 27.5625 17.9646 27.9183 16.5977 28.6017C15.2309 29.2852 14.0419 30.2774 13.125 31.5M21 27.5625C22.5282 27.5625 24.0354 27.9183 25.4023 28.6017C26.7691 29.2852 27.9581 30.2774 28.875 31.5M15.75 10.5H26.25M34.125 6.5625V35.4375C34.125 36.1624 33.5374 36.75 32.8125 36.75H9.1875C8.46263 36.75 7.875 36.1624 7.875 35.4375V6.5625C7.875 5.83763 8.46263 5.25 9.1875 5.25H32.8125C33.5374 5.25 34.125 5.83763 34.125 6.5625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</svg>\n';
const _sfc_main = {
  __name: "referrals",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const rocketIcon = h("div", {
      innerHTML: rocketImg,
      style: "font-size: 2.625rem; color: rgb(var(--v-theme-primary))"
    });
    const userInfoIcon = h("div", {
      innerHTML: paperImg,
      style: "font-size: 2.625rem; color: rgb(var(--v-theme-primary))"
    });
    const paperIcon = h("div", {
      innerHTML: userInfoImg,
      style: "font-size: 2.625rem; color: rgb(var(--v-theme-primary))"
    });
    const widgetData = [
      {
        title: "Total Earning",
        value: "$24,983",
        icon: "ri-money-dollar-circle-line",
        color: "primary"
      },
      {
        title: "Unpaid Earning",
        value: "$8,647",
        icon: "ri-gift-line",
        color: "success"
      },
      {
        title: "Signups",
        value: "2,367",
        icon: "ri-group-line",
        color: "error"
      },
      {
        title: "Conversion Rate",
        value: "4.5%",
        icon: "ri-refresh-line",
        color: "info"
      }
    ];
    const stepsData = [
      {
        icon: rocketIcon,
        desc: "Create & validate your referral link and get",
        value: "$50"
      },
      {
        icon: paperIcon,
        desc: "For every new signup you get",
        value: "10%"
      },
      {
        icon: userInfoIcon,
        desc: "Get other friends to generate link and get",
        value: "$100"
      }
    ];
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const headers = [
      {
        title: "Users",
        key: "users"
      },
      {
        title: "Referred ID",
        key: "referred-id"
      },
      {
        title: "Status",
        key: "status"
      },
      {
        title: "Value",
        key: "value"
      },
      {
        title: "Earnings",
        key: "earning"
      }
    ];
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const { data: referralData } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/referrals", {
      query: {
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const referrals2 = computed(() => referralData.value.referrals);
    const totalReferrals = computed(() => referralData.value.total);
    const resolveStatus = (status) => {
      if (status === "Rejected")
        return {
          text: "Rejected",
          color: "error"
        };
      if (status === "Unpaid")
        return {
          text: "Unpaid",
          color: "warning"
        };
      if (status === "Paid")
        return {
          text: "Paid",
          color: "success"
        };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-322740c3>`);
      _push(ssrRenderComponent(VRow, { class: "match-height" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(widgetData, (data, index) => {
              _push2(ssrRenderComponent(VCol, {
                key: index,
                cols: "12",
                md: "3",
                sm: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center justify-space-between" data-v-322740c3${_scopeId4}><div class="d-flex flex-column" data-v-322740c3${_scopeId4}><span class="text-h5 mb-1" data-v-322740c3${_scopeId4}>${ssrInterpolate(data.value)}</span><span class="text-sm" data-v-322740c3${_scopeId4}>${ssrInterpolate(data.title)}</span></div>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  icon: data.icon,
                                  variant: "tonal",
                                  color: data.color
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode("span", { class: "text-h5 mb-1" }, toDisplayString(data.value), 1),
                                      createVNode("span", { class: "text-sm" }, toDisplayString(data.title), 1)
                                    ]),
                                    createVNode(VAvatar, {
                                      icon: data.icon,
                                      variant: "tonal",
                                      color: data.color
                                    }, null, 8, ["icon", "color"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("span", { class: "text-h5 mb-1" }, toDisplayString(data.value), 1),
                                    createVNode("span", { class: "text-sm" }, toDisplayString(data.title), 1)
                                  ]),
                                  createVNode(VAvatar, {
                                    icon: data.icon,
                                    variant: "tonal",
                                    color: data.color
                                  }, null, 8, ["icon", "color"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("span", { class: "text-h5 mb-1" }, toDisplayString(data.value), 1),
                                  createVNode("span", { class: "text-sm" }, toDisplayString(data.title), 1)
                                ]),
                                createVNode(VAvatar, {
                                  icon: data.icon,
                                  variant: "tonal",
                                  color: data.color
                                }, null, 8, ["icon", "color"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, { class: "mb-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` How to use `);
                                  } else {
                                    return [
                                      createTextVNode(" How to use ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Integrate your referral code in 3 easy steps. `);
                                  } else {
                                    return [
                                      createTextVNode(" Integrate your referral code in 3 easy steps. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, { class: "mb-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" How to use ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Integrate your referral code in 3 easy steps. ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-6 justify-space-between align-center flex-sm-row flex-column" data-v-322740c3${_scopeId4}><!--[-->`);
                              ssrRenderList(stepsData, (step, index) => {
                                _push5(`<div class="d-flex flex-column align-center gap-y-2" style="${ssrRenderStyle({ "max-inline-size": "185px" })}" data-v-322740c3${_scopeId4}><div class="icon-container" data-v-322740c3${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(VNodeRenderer), {
                                  nodes: step.icon
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><span class="text-body-1 text-wrap text-center" data-v-322740c3${_scopeId4}>${ssrInterpolate(step.desc)}</span><span class="text-primary text-h6" data-v-322740c3${_scopeId4}>${ssrInterpolate(step.value)}</span></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-6 justify-space-between align-center flex-sm-row flex-column" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(stepsData, (step, index) => {
                                    return createVNode("div", {
                                      key: index,
                                      class: "d-flex flex-column align-center gap-y-2",
                                      style: { "max-inline-size": "185px" }
                                    }, [
                                      createVNode("div", { class: "icon-container" }, [
                                        createVNode(unref(VNodeRenderer), {
                                          nodes: step.icon
                                        }, null, 8, ["nodes"])
                                      ]),
                                      createVNode("span", { class: "text-body-1 text-wrap text-center" }, toDisplayString(step.desc), 1),
                                      createVNode("span", { class: "text-primary text-h6" }, toDisplayString(step.value), 1)
                                    ]);
                                  }), 64))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "mb-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(" How to use ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Integrate your referral code in 3 easy steps. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex gap-6 justify-space-between align-center flex-sm-row flex-column" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(stepsData, (step, index) => {
                                  return createVNode("div", {
                                    key: index,
                                    class: "d-flex flex-column align-center gap-y-2",
                                    style: { "max-inline-size": "185px" }
                                  }, [
                                    createVNode("div", { class: "icon-container" }, [
                                      createVNode(unref(VNodeRenderer), {
                                        nodes: step.icon
                                      }, null, 8, ["nodes"])
                                    ]),
                                    createVNode("span", { class: "text-body-1 text-wrap text-center" }, toDisplayString(step.desc), 1),
                                    createVNode("span", { class: "text-primary text-h6" }, toDisplayString(step.value), 1)
                                  ]);
                                }), 64))
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "mb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(" How to use ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Integrate your referral code in 3 easy steps. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex gap-6 justify-space-between align-center flex-sm-row flex-column" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(stepsData, (step, index) => {
                                return createVNode("div", {
                                  key: index,
                                  class: "d-flex flex-column align-center gap-y-2",
                                  style: { "max-inline-size": "185px" }
                                }, [
                                  createVNode("div", { class: "icon-container" }, [
                                    createVNode(unref(VNodeRenderer), {
                                      nodes: step.icon
                                    }, null, 8, ["nodes"])
                                  ]),
                                  createVNode("span", { class: "text-body-1 text-wrap text-center" }, toDisplayString(step.desc), 1),
                                  createVNode("span", { class: "text-primary text-h6" }, toDisplayString(step.value), 1)
                                ]);
                              }), 64))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-11" data-v-322740c3${_scopeId4}><h5 class="text-h5 mb-5" data-v-322740c3${_scopeId4}> Invite your friends </h5><div class="d-flex align-center flex-wrap gap-4" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                placeholder: "Email Addresss",
                                density: "compact"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` Submit `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Submit ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div data-v-322740c3${_scopeId4}><h5 class="text-h5 mb-5" data-v-322740c3${_scopeId4}> Share the referral link </h5><div class="d-flex align-center flex-wrap gap-4" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                placeholder: "pixinvent.com/?ref=6479",
                                density: "compact"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex gap-x-2" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#3B5998"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "white",
                                      icon: "ri-facebook-circle-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-facebook-circle-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#55ACEE"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "white",
                                      icon: "ri-twitter-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-twitter-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-11" }, [
                                  createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                    createVNode(VTextField, {
                                      placeholder: "Email Addresss",
                                      density: "compact"
                                    }),
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "ri-check-line"
                                        }),
                                        createTextVNode(" Submit ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                                  createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                    createVNode(VTextField, {
                                      placeholder: "pixinvent.com/?ref=6479",
                                      density: "compact"
                                    }),
                                    createVNode("div", { class: "d-flex gap-x-2" }, [
                                      createVNode(VBtn, {
                                        icon: "",
                                        class: "rounded",
                                        color: "#3B5998"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "white",
                                            icon: "ri-facebook-circle-line"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        icon: "",
                                        class: "rounded",
                                        color: "#55ACEE"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "white",
                                            icon: "ri-twitter-line"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-11" }, [
                                createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                  createVNode(VTextField, {
                                    placeholder: "Email Addresss",
                                    density: "compact"
                                  }),
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-check-line"
                                      }),
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                                createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                  createVNode(VTextField, {
                                    placeholder: "pixinvent.com/?ref=6479",
                                    density: "compact"
                                  }),
                                  createVNode("div", { class: "d-flex gap-x-2" }, [
                                    createVNode(VBtn, {
                                      icon: "",
                                      class: "rounded",
                                      color: "#3B5998"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "white",
                                          icon: "ri-facebook-circle-line"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      icon: "",
                                      class: "rounded",
                                      color: "#55ACEE"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "white",
                                          icon: "ri-twitter-line"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-11" }, [
                              createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                createVNode(VTextField, {
                                  placeholder: "Email Addresss",
                                  density: "compact"
                                }),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-check-line"
                                    }),
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                              createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                                createVNode(VTextField, {
                                  placeholder: "pixinvent.com/?ref=6479",
                                  density: "compact"
                                }),
                                createVNode("div", { class: "d-flex gap-x-2" }, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    class: "rounded",
                                    color: "#3B5998"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-facebook-circle-line"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    icon: "",
                                    class: "rounded",
                                    color: "#55ACEE"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-twitter-line"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap gap-4" data-v-322740c3${_scopeId4}><h5 class="text-h5" data-v-322740c3${_scopeId4}> Referred Users </h5>`);
                              _push5(ssrRenderComponent(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Export `);
                                  } else {
                                    return [
                                      createTextVNode(" Export ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                                  createVNode("h5", { class: "text-h5" }, " Referred Users "),
                                  createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Export ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDataTableServer, {
                          "items-per-page": unref(itemsPerPage),
                          "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                          page: unref(page),
                          "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                          items: unref(referrals2),
                          headers,
                          "items-length": unref(totalReferrals),
                          "show-select": "",
                          class: "text-high-emphasis text-no-wrap",
                          "onUpdate:options": updateOptions
                        }, {
                          "item.users": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center gap-x-3" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: item.avatar,
                                size: 34
                              }, null, _parent5, _scopeId4));
                              _push5(`<div data-v-322740c3${_scopeId4}><h6 class="text-h6" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_RouterLink, {
                                class: "text-link",
                                to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } }
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(item.user)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.user), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</h6><div class="text-sm text-medium-emphasis" data-v-322740c3${_scopeId4}>${ssrInterpolate(item.email)}</div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                  createVNode(VAvatar, {
                                    image: item.avatar,
                                    size: 34
                                  }, null, 8, ["image"]),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6" }, [
                                      createVNode(_component_RouterLink, {
                                        class: "text-link",
                                        to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.user), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.email), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.referred-id": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(item.referredId)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(item.referredId), 1)
                              ];
                            }
                          }),
                          "item.status": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                              ];
                            }
                          }),
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1" data-v-322740c3${_scopeId4}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base" data-v-322740c3${_scopeId4}> Rows Per Page: `);
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(itemsPerPage),
                                "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                class: "per-page-select",
                                variant: "plain",
                                items: [10, 20, 25, 50, 100]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0" data-v-322740c3${_scopeId4}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReferrals)))}</p><div class="d-flex gap-x-2 align-center me-2" data-v-322740c3${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-left-s-line",
                                variant: "text",
                                density: "comfortable",
                                color: "high-emphasis",
                                disabled: unref(page) <= 1,
                                onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-right-s-line",
                                density: "comfortable",
                                variant: "text",
                                color: "high-emphasis",
                                disabled: unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)),
                                onClick: ($event) => unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) : page.value++
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode(VDivider),
                                createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                                  createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                                    createTextVNode(" Rows Per Page: "),
                                    createVNode(VSelect, {
                                      modelValue: unref(itemsPerPage),
                                      "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                      class: "per-page-select",
                                      variant: "plain",
                                      items: [10, 20, 25, 50, 100]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReferrals))), 1),
                                  createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                                    createVNode(VBtn, {
                                      class: "flip-in-rtl",
                                      icon: "ri-arrow-left-s-line",
                                      variant: "text",
                                      density: "comfortable",
                                      color: "high-emphasis",
                                      disabled: unref(page) <= 1,
                                      onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                                    }, null, 8, ["disabled", "onClick"]),
                                    createVNode(VBtn, {
                                      class: "flip-in-rtl",
                                      icon: "ri-arrow-right-s-line",
                                      density: "comfortable",
                                      variant: "text",
                                      color: "high-emphasis",
                                      disabled: unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)),
                                      onClick: ($event) => unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) : page.value++
                                    }, null, 8, ["disabled", "onClick"])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                                createVNode("h5", { class: "text-h5" }, " Referred Users "),
                                createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Export ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDataTableServer, {
                            "items-per-page": unref(itemsPerPage),
                            "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                            page: unref(page),
                            "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                            items: unref(referrals2),
                            headers,
                            "items-length": unref(totalReferrals),
                            "show-select": "",
                            class: "text-high-emphasis text-no-wrap",
                            "onUpdate:options": updateOptions
                          }, {
                            "item.users": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                createVNode(VAvatar, {
                                  image: item.avatar,
                                  size: 34
                                }, null, 8, ["image"]),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6" }, [
                                    createVNode(_component_RouterLink, {
                                      class: "text-link",
                                      to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.user), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.email), 1)
                                ])
                              ])
                            ]),
                            "item.referred-id": withCtx(({ item }) => [
                              createTextVNode(toDisplayString(item.referredId), 1)
                            ]),
                            "item.status": withCtx(({ item }) => [
                              createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                            ]),
                            bottom: withCtx(() => [
                              createVNode(VDivider),
                              createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                                createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                                  createTextVNode(" Rows Per Page: "),
                                  createVNode(VSelect, {
                                    modelValue: unref(itemsPerPage),
                                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                    class: "per-page-select",
                                    variant: "plain",
                                    items: [10, 20, 25, 50, 100]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReferrals))), 1),
                                createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                                  createVNode(VBtn, {
                                    class: "flip-in-rtl",
                                    icon: "ri-arrow-left-s-line",
                                    variant: "text",
                                    density: "comfortable",
                                    color: "high-emphasis",
                                    disabled: unref(page) <= 1,
                                    onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                                  }, null, 8, ["disabled", "onClick"]),
                                  createVNode(VBtn, {
                                    class: "flip-in-rtl",
                                    icon: "ri-arrow-right-s-line",
                                    density: "comfortable",
                                    variant: "text",
                                    color: "high-emphasis",
                                    disabled: unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)),
                                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) : page.value++
                                  }, null, 8, ["disabled", "onClick"])
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                              createVNode("h5", { class: "text-h5" }, " Referred Users "),
                              createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Export ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDataTableServer, {
                          "items-per-page": unref(itemsPerPage),
                          "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                          page: unref(page),
                          "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                          items: unref(referrals2),
                          headers,
                          "items-length": unref(totalReferrals),
                          "show-select": "",
                          class: "text-high-emphasis text-no-wrap",
                          "onUpdate:options": updateOptions
                        }, {
                          "item.users": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                              createVNode(VAvatar, {
                                image: item.avatar,
                                size: 34
                              }, null, 8, ["image"]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6" }, [
                                  createVNode(_component_RouterLink, {
                                    class: "text-link",
                                    to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.user), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.email), 1)
                              ])
                            ])
                          ]),
                          "item.referred-id": withCtx(({ item }) => [
                            createTextVNode(toDisplayString(item.referredId), 1)
                          ]),
                          "item.status": withCtx(({ item }) => [
                            createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                          ]),
                          bottom: withCtx(() => [
                            createVNode(VDivider),
                            createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                              createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                                createTextVNode(" Rows Per Page: "),
                                createVNode(VSelect, {
                                  modelValue: unref(itemsPerPage),
                                  "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                  class: "per-page-select",
                                  variant: "plain",
                                  items: [10, 20, 25, 50, 100]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReferrals))), 1),
                              createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                                createVNode(VBtn, {
                                  class: "flip-in-rtl",
                                  icon: "ri-arrow-left-s-line",
                                  variant: "text",
                                  density: "comfortable",
                                  color: "high-emphasis",
                                  disabled: unref(page) <= 1,
                                  onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                                }, null, 8, ["disabled", "onClick"]),
                                createVNode(VBtn, {
                                  class: "flip-in-rtl",
                                  icon: "ri-arrow-right-s-line",
                                  density: "comfortable",
                                  variant: "text",
                                  color: "high-emphasis",
                                  disabled: unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)),
                                  onClick: ($event) => unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) : page.value++
                                }, null, 8, ["disabled", "onClick"])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(widgetData, (data, index) => {
                return createVNode(VCol, {
                  key: index,
                  cols: "12",
                  md: "3",
                  sm: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("span", { class: "text-h5 mb-1" }, toDisplayString(data.value), 1),
                                createVNode("span", { class: "text-sm" }, toDisplayString(data.title), 1)
                              ]),
                              createVNode(VAvatar, {
                                icon: data.icon,
                                variant: "tonal",
                                color: data.color
                              }, null, 8, ["icon", "color"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "mb-1" }, {
                            default: withCtx(() => [
                              createTextVNode(" How to use ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Integrate your referral code in 3 easy steps. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex gap-6 justify-space-between align-center flex-sm-row flex-column" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(stepsData, (step, index) => {
                              return createVNode("div", {
                                key: index,
                                class: "d-flex flex-column align-center gap-y-2",
                                style: { "max-inline-size": "185px" }
                              }, [
                                createVNode("div", { class: "icon-container" }, [
                                  createVNode(unref(VNodeRenderer), {
                                    nodes: step.icon
                                  }, null, 8, ["nodes"])
                                ]),
                                createVNode("span", { class: "text-body-1 text-wrap text-center" }, toDisplayString(step.desc), 1),
                                createVNode("span", { class: "text-primary text-h6" }, toDisplayString(step.value), 1)
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-11" }, [
                            createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                            createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                              createVNode(VTextField, {
                                placeholder: "Email Addresss",
                                density: "compact"
                              }),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-check-line"
                                  }),
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                            createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                              createVNode(VTextField, {
                                placeholder: "pixinvent.com/?ref=6479",
                                density: "compact"
                              }),
                              createVNode("div", { class: "d-flex gap-x-2" }, [
                                createVNode(VBtn, {
                                  icon: "",
                                  class: "rounded",
                                  color: "#3B5998"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      icon: "ri-facebook-circle-line"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  class: "rounded",
                                  color: "#55ACEE"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      icon: "ri-twitter-line"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                            createVNode("h5", { class: "text-h5" }, " Referred Users "),
                            createVNode(VBtn, { "prepend-icon": "ri-upload-2-line" }, {
                              default: withCtx(() => [
                                createTextVNode(" Export ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDataTableServer, {
                        "items-per-page": unref(itemsPerPage),
                        "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                        page: unref(page),
                        "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                        items: unref(referrals2),
                        headers,
                        "items-length": unref(totalReferrals),
                        "show-select": "",
                        class: "text-high-emphasis text-no-wrap",
                        "onUpdate:options": updateOptions
                      }, {
                        "item.users": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                            createVNode(VAvatar, {
                              image: item.avatar,
                              size: 34
                            }, null, 8, ["image"]),
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6" }, [
                                createVNode(_component_RouterLink, {
                                  class: "text-link",
                                  to: { name: "apps-ecommerce-customer-details-id", params: { id: 478426 } }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.user), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.email), 1)
                            ])
                          ])
                        ]),
                        "item.referred-id": withCtx(({ item }) => [
                          createTextVNode(toDisplayString(item.referredId), 1)
                        ]),
                        "item.status": withCtx(({ item }) => [
                          createVNode(VChip, mergeProps(resolveStatus(item.status), { size: "small" }), null, 16)
                        ]),
                        bottom: withCtx(() => [
                          createVNode(VDivider),
                          createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                            createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                              createTextVNode(" Rows Per Page: "),
                              createVNode(VSelect, {
                                modelValue: unref(itemsPerPage),
                                "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                                class: "per-page-select",
                                variant: "plain",
                                items: [10, 20, 25, 50, 100]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalReferrals))), 1),
                            createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                              createVNode(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-left-s-line",
                                variant: "text",
                                density: "comfortable",
                                color: "high-emphasis",
                                disabled: unref(page) <= 1,
                                onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                              }, null, 8, ["disabled", "onClick"]),
                              createVNode(VBtn, {
                                class: "flip-in-rtl",
                                icon: "ri-arrow-right-s-line",
                                density: "comfortable",
                                variant: "text",
                                color: "high-emphasis",
                                disabled: unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)),
                                onClick: ($event) => unref(page) >= Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalReferrals) / unref(itemsPerPage)) : page.value++
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/referrals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const referrals = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-322740c3"]]);
export {
  referrals as default
};
