import { mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext, openBlock, createElementBlock, createElementVNode, ref, resolveDynamicComponent, isRef, withModifiers, createBlock, toDisplayString, Fragment, renderList, computed, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./front-page-navbar-Zyu6fQg-.js";
import { _ as _export_sfc, V as VBtn, a as VIcon, l as useTheme, u as useConfigStore } from "../ssr.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { register } from "swiper/element/bundle";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VRating } from "./VRating-BxS5q7bh.js";
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from "./VExpansionPanel-BASkbcYj.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { useMouse, useIntersectionObserver } from "@vueuse/core";
import { V as VSlider } from "./VSlider-DJW38cpe.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { k as kFormatter } from "./formatters-DpL1jrjT.js";
import "./VSheet-BoIzvRsi.js";
import "vue3-perfect-scrollbar";
import "./NavbarThemeSwitcher-CmYbn-Kr.js";
import "./VTooltip-CVKEAyhs.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./VMenu-KUYgjPyD.js";
import "./dialog-transition-CtM2qLK8.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
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
import "@antfu/utils";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./VToolbar-BfF0JSVH.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./form-DJQTvsmB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
import "./VSliderTrack-3ICpqYF9.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./helpers-DX2i3Kdq.js";
const ctaDashboard = "/build/assets/cta-dashboard-D79YZwo6.png";
const _sfc_main$9 = {
  __name: "banner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-cta position-relative bg-surface" }, _attrs))} data-v-1558535c>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center justify-sm-space-between flex-column flex-md-row gap-y-6 gap-x-12" data-v-1558535c${_scopeId}><div class="text-sm-start text-center py-md-14 py-2" data-v-1558535c${_scopeId}><div class="banner-text pb-1" data-v-1558535c${_scopeId}> Ready to Get Started? </div><div class="text-body-1 font-weight-medium mb-8" data-v-1558535c${_scopeId}> Start your project with a 14-day free trial </div>`);
            _push2(ssrRenderComponent(VBtn, { to: { name: "front-pages-payment" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get Started `);
                  _push3(ssrRenderComponent(VIcon, {
                    end: "",
                    icon: "ri-arrow-right-line",
                    class: "flip-in-rtl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Get Started "),
                    createVNode(VIcon, {
                      end: "",
                      icon: "ri-arrow-right-line",
                      class: "flip-in-rtl"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VImg, {
              src: unref(ctaDashboard),
              "max-width": _ctx.$vuetify.display.mdAndUp ? 600 : "",
              "max-height": "300",
              width: "auto",
              class: "align-self-center mb-n4 align-self-md-end"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center justify-sm-space-between flex-column flex-md-row gap-y-6 gap-x-12" }, [
                createVNode("div", { class: "text-sm-start text-center py-md-14 py-2" }, [
                  createVNode("div", { class: "banner-text pb-1" }, " Ready to Get Started? "),
                  createVNode("div", { class: "text-body-1 font-weight-medium mb-8" }, " Start your project with a 14-day free trial "),
                  createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                    default: withCtx(() => [
                      createTextVNode(" Get Started "),
                      createVNode(VIcon, {
                        end: "",
                        icon: "ri-arrow-right-line",
                        class: "flip-in-rtl"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(VImg, {
                  src: unref(ctaDashboard),
                  "max-width": _ctx.$vuetify.display.mdAndUp ? 600 : "",
                  "max-height": "300",
                  width: "auto",
                  class: "align-self-center mb-n4 align-self-md-end"
                }, null, 8, ["src", "max-width"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/banner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1558535c"]]);
const ConnectImg = "/build/assets/lets-contact-pNtZAFQj.png";
const sectionTitleIcon = "/build/assets/section-title-icon-DkGJyNfQ.png";
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "37",
  fill: "none"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-opacity": ".9",
  d: "M13.014 22.476c.24-2.36.38-4.6.7-6.82.561-3.83 1.972-7.41 3.653-10.87.52-1.07 1.231-2.07 1.951-3.03.6-.8 1.401-1.36 2.522-1.05 1.101.3 1.511 1.17 1.691 2.16.4 2.23.47 4.48.11 6.71-.54 3.38-1.2 6.74-1.74 10.12-.631 3.94-1.191 7.89-1.792 11.84-.14.91-.32 1.81-.47 2.72-.26 1.67-1.882 2.88-3.783 1.84-5.223-2.88-10.157-6.16-14.2-10.61-.7-.76-1.14-1.81-1.52-2.79-.391-.99.1-2.09 1.01-2.66.94-.59 1.971-.8 3.082-.69 2.652.26 5.034 1.31 7.355 2.52.32.16.62.35.94.5.14.06.291.07.491.11",
  opacity: ".16"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._hoisted_3$9]);
}
const frontPageVectorImg = { render: render$9 };
const _sfc_main$8 = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ id: "contact-us" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contact-us-section" data-v-b68ad119${_scopeId}><div class="headers d-flex justify-center flex-column align-center pb-15" data-v-b68ad119${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(frontPageVectorImg)), { class: "front-page-vector" }, null), _parent2, _scopeId);
            _push2(`<div class="d-flex gap-x-3 mb-6" data-v-b68ad119${_scopeId}><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-b68ad119${_scopeId}><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-b68ad119${_scopeId}> CONTACT US </div></div><div class="mb-2 text-center" data-v-b68ad119${_scopeId}><span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-b68ad119${_scopeId}> Let&#39;s work </span> <span class="text-h5 d-inline-block" data-v-b68ad119${_scopeId}>together</span></div><p class="text-body-1 font-weight-medium text-center mb-0" data-v-b68ad119${_scopeId}> Any question or remark? just write us a message </p></div><div class="mb-15" data-v-b68ad119${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, { class: "match-height" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          flat: "",
                          elevation: "0",
                          color: "primary",
                          theme: "dark"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, { class: "pa-8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h6 class="text-h6 mb-1" data-v-b68ad119${_scopeId5}> Let&#39;s contact with us </h6><h4 class="text-h4" data-v-b68ad119${_scopeId5}> Share your ideas or requirement with our experts. </h4>`);
                                    _push6(ssrRenderComponent(VImg, {
                                      src: unref(ConnectImg),
                                      class: "my-5"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="text-body-1" data-v-b68ad119${_scopeId5}> Looking for more customization, more features, and more anything? Don&#39;t worry, We&#39;ve provide you with an entire team of experienced professionals. </div>`);
                                  } else {
                                    return [
                                      createVNode("h6", { class: "text-h6 mb-1" }, " Let's contact with us "),
                                      createVNode("h4", { class: "text-h4" }, " Share your ideas or requirement with our experts. "),
                                      createVNode(VImg, {
                                        src: unref(ConnectImg),
                                        class: "my-5"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "text-body-1" }, " Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, { class: "pa-8" }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6 mb-1" }, " Let's contact with us "),
                                    createVNode("h4", { class: "text-h4" }, " Share your ideas or requirement with our experts. "),
                                    createVNode(VImg, {
                                      src: unref(ConnectImg),
                                      class: "my-5"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "text-body-1" }, " Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals. ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            flat: "",
                            elevation: "0",
                            color: "primary",
                            theme: "dark"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pa-8" }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 mb-1" }, " Let's contact with us "),
                                  createVNode("h4", { class: "text-h4" }, " Share your ideas or requirement with our experts. "),
                                  createVNode(VImg, {
                                    src: unref(ConnectImg),
                                    class: "my-5"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "text-body-1" }, " Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals. ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h5 mb-5" data-v-b68ad119${_scopeId5}> Share your ideas </div>`);
                                    _push6(ssrRenderComponent(VForm, { onSubmit: () => {
                                    } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(name),
                                                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                        placeholder: "John Doe",
                                                        label: "Full Name"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(name),
                                                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                          placeholder: "John Doe",
                                                          label: "Full Name"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(email),
                                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                        placeholder: "johndoe@gmail.com",
                                                        label: "Email address"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(email),
                                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                          placeholder: "johndoe@gmail.com",
                                                          label: "Email address"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextarea, {
                                                        modelValue: unref(message),
                                                        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                        placeholder: "Type Your message",
                                                        label: "Message"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextarea, {
                                                          modelValue: unref(message),
                                                          "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                          placeholder: "Type Your message",
                                                          label: "Message"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Send Inquiry `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Send Inquiry ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VBtn, { type: "submit" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Send Inquiry ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(name),
                                                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                        placeholder: "John Doe",
                                                        label: "Full Name"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(email),
                                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                        placeholder: "johndoe@gmail.com",
                                                        label: "Email address"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextarea, {
                                                        modelValue: unref(message),
                                                        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                        placeholder: "Type Your message",
                                                        label: "Message"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, { type: "submit" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Send Inquiry ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(name),
                                                      "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                      placeholder: "John Doe",
                                                      label: "Full Name"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(email),
                                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                      placeholder: "johndoe@gmail.com",
                                                      label: "Email address"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextarea, {
                                                      modelValue: unref(message),
                                                      "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                      placeholder: "Type Your message",
                                                      label: "Message"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, { type: "submit" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Send Inquiry ")
                                                      ]),
                                                      _: 1
                                                    })
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h5 mb-5" }, " Share your ideas "),
                                      createVNode(VForm, {
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(name),
                                                    "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                    placeholder: "John Doe",
                                                    label: "Full Name"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    placeholder: "johndoe@gmail.com",
                                                    label: "Email address"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextarea, {
                                                    modelValue: unref(message),
                                                    "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                    placeholder: "Type Your message",
                                                    label: "Message"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Send Inquiry ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5 mb-5" }, " Share your ideas "),
                                    createVNode(VForm, {
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(name),
                                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                  placeholder: "John Doe",
                                                  label: "Full Name"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  placeholder: "johndoe@gmail.com",
                                                  label: "Email address"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: unref(message),
                                                  "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                  placeholder: "Type Your message",
                                                  label: "Message"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Send Inquiry ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5 mb-5" }, " Share your ideas "),
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(name),
                                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                placeholder: "John Doe",
                                                label: "Full Name"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                placeholder: "johndoe@gmail.com",
                                                label: "Email address"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: unref(message),
                                                "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                placeholder: "Type Your message",
                                                label: "Message"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Send Inquiry ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          elevation: "0",
                          color: "primary",
                          theme: "dark"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "pa-8" }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 mb-1" }, " Let's contact with us "),
                                createVNode("h4", { class: "text-h4" }, " Share your ideas or requirement with our experts. "),
                                createVNode(VImg, {
                                  src: unref(ConnectImg),
                                  class: "my-5"
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "text-body-1" }, " Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals. ")
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
                      md: "8",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h5 mb-5" }, " Share your ideas "),
                                createVNode(VForm, {
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(name),
                                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                              placeholder: "John Doe",
                                              label: "Full Name"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              placeholder: "johndoe@gmail.com",
                                              label: "Email address"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: unref(message),
                                              "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                              placeholder: "Type Your message",
                                              label: "Message"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Send Inquiry ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "contact-us-section" }, [
                createVNode("div", { class: "headers d-flex justify-center flex-column align-center pb-15" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(frontPageVectorImg)), { class: "front-page-vector" })),
                  createVNode("div", { class: "d-flex gap-x-3 mb-6" }, [
                    createVNode("img", {
                      src: unref(sectionTitleIcon),
                      alt: "section title icon",
                      height: "24",
                      width: "25"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " CONTACT US ")
                  ]),
                  createVNode("div", { class: "mb-2 text-center" }, [
                    createVNode("span", {
                      class: "text-h4 d-inline-block font-weight-bold",
                      style: { "line-height": "2rem" }
                    }, " Let's work "),
                    createTextVNode(),
                    createVNode("span", { class: "text-h5 d-inline-block" }, "together")
                  ]),
                  createVNode("p", { class: "text-body-1 font-weight-medium text-center mb-0" }, " Any question or remark? just write us a message ")
                ]),
                createVNode("div", { class: "mb-15" }, [
                  createVNode(VRow, { class: "match-height" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            elevation: "0",
                            color: "primary",
                            theme: "dark"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pa-8" }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 mb-1" }, " Let's contact with us "),
                                  createVNode("h4", { class: "text-h4" }, " Share your ideas or requirement with our experts. "),
                                  createVNode(VImg, {
                                    src: unref(ConnectImg),
                                    class: "my-5"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "text-body-1" }, " Looking for more customization, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals. ")
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
                        md: "8",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5 mb-5" }, " Share your ideas "),
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(name),
                                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                placeholder: "John Doe",
                                                label: "Full Name"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                placeholder: "johndoe@gmail.com",
                                                label: "Email address"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: unref(message),
                                                "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
                                                placeholder: "Type Your message",
                                                label: "Message"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Send Inquiry ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/contact-us.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b68ad119"]]);
const logo1dark = "/build/assets/logo-1-dark-xb-m--dL.png";
const logo1light = "/build/assets/logo-1-light-BXF_MMup.png";
const logo1 = "/build/assets/logo-1-C3HNayc8.png";
const logo2dark = "/build/assets/logo-2-dark-CVBWT1Yq.png";
const logo2light = "/build/assets/logo-2-light-B3oORXhY.png";
const logo2 = "/build/assets/logo-2-Dwz0M1Xk.png";
const logo3dark = "/build/assets/logo-3-dark-Bcgr4hVT.png";
const logo3light = "/build/assets/logo-3-light-BxwIEXPY.png";
const logo3 = "/build/assets/logo-3-Cg3-K0Nj.png";
const logo4dark = "/build/assets/logo-4-dark-D1AoFUqb.png";
const logo4light = "/build/assets/logo-4-light-DiE7F04K.png";
const logo4 = "/build/assets/logo-4-CR4-LdI2.png";
const logo5dark = "/build/assets/logo-5-dark-Cc26mioI.png";
const logo5light = "/build/assets/logo-5-light-D-FhcQAt.png";
const _sfc_main$7 = {
  __name: "customers-review",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    const brandLogo1 = useGenerateImageVariant(logo1light, logo1dark);
    const brandLogo2 = useGenerateImageVariant(logo2light, logo2dark);
    const brandLogo3 = useGenerateImageVariant(logo3light, logo3dark);
    const brandLogo4 = useGenerateImageVariant(logo4light, logo4dark);
    const brandLogo5 = useGenerateImageVariant(logo5light, logo5dark);
    const reviewData = [
      {
        desc: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
        img: logo1,
        rating: 5,
        name: "Eugenia Moore",
        position: "Founder of Hubspot"
      },
      {
        desc: "Materialize is awesome, and I particularly enjoy knowing that if I get stuck on something.",
        img: logo2,
        rating: 5,
        name: "Tommy haffman",
        position: "Founder of Levis"
      },
      {
        desc: "This template is superior in so many ways. The code, the design, the regular updates, the support.. It's the whole package. Excellent Work.",
        img: logo3,
        rating: 4,
        name: "Eugenia Moore",
        position: "CTO of Airbnb"
      },
      {
        desc: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
        img: logo4,
        rating: 5,
        name: "Sara Smith",
        position: "Founder of Continental"
      },
      {
        desc: "Materialize is awesome, and I particularly enjoy knowing that if I get stuck on something.",
        img: logo2,
        rating: 5,
        name: "Tommy haffman",
        position: "Founder of Levis"
      },
      {
        desc: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
        img: logo1,
        rating: 5,
        name: "Eugenia Moore",
        position: "Founder of Hubspot"
      },
      {
        desc: "Materialize is awesome, and I particularly enjoy knowing that if I get stuck on something.",
        img: logo2,
        rating: 5,
        name: "Tommy haffman",
        position: "Founder of Levis"
      },
      {
        desc: "This template is superior in so many ways. The code, the design, the regular updates, the support.. It's the whole package. Excellent Work.",
        img: logo3,
        rating: 4,
        name: "Eugenia Moore",
        position: "CTO of Airbnb"
      },
      {
        desc: "All the requirements for developers have been taken into consideration, so I'm able to build any interface I want.",
        img: logo4,
        rating: 5,
        name: "Sara Smith",
        position: "Founder of Continental"
      },
      {
        desc: "Materialize is awesome, and I particularly enjoy knowing that if I get stuck on something.",
        img: logo2,
        rating: 5,
        name: "Tommy haffman",
        position: "Founder of Levis"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "customer-reviews" }, _attrs))} data-v-165ec91e><div class="headers d-flex justify-center flex-column align-center mb-8" data-v-165ec91e><div class="d-flex gap-x-3 mb-6" data-v-165ec91e><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-165ec91e><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-165ec91e> REAL CUSTOMERS REVIEWS </div></div><div class="mb-2 text-center" data-v-165ec91e><span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-165ec91e> Success stories </span> <span class="text-h5 d-inline-block" data-v-165ec91e>from clients</span></div><p class="text-body-1 font-weight-medium text-center" data-v-165ec91e> See what our customers have to say about their experience. </p></div><div class="swiper-reviews-carousel py-4 mb-6" data-v-165ec91e><swiper-container slides-per-view="1" space-between="10" centered-slides="true" loop="true" autoplay-delay="3000" autoplay-disable-on-interaction="false" events-prefix="swiper-"${ssrRenderAttr("pagination", {
        clickable: "true"
      })}${ssrRenderAttr("injectStyles", [
        `
          .swiper-pagination{
            position: static;
            margin-block: 1rem;
          },
          .swiper-pagination-bullet-active{
            width: 1rem;
          }

      `
      ])}${ssrRenderAttr("breakpoints", {
        1400: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      })} data-v-165ec91e><!--[-->`);
      ssrRenderList(reviewData, (data, index) => {
        _push(`<swiper-slide data-v-165ec91e>`);
        _push(ssrRenderComponent(VCard, { class: "h-100 d-flex align-stretch" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "pa-4 pa-sm-6 pa-md-8 d-flex flex-column justify-space-between align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", data.img)} style="${ssrRenderStyle({ "block-size": "1.75rem" })}" data-v-165ec91e${_scopeId2}><div class="text-body-1 text-high-emphasis text-center" data-v-165ec91e${_scopeId2}>${ssrInterpolate(data.desc)}</div><div data-v-165ec91e${_scopeId2}>`);
                    _push3(ssrRenderComponent(VRating, {
                      "model-value": data.rating,
                      color: "warning",
                      readonly: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="text-center" data-v-165ec91e${_scopeId2}><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-165ec91e${_scopeId2}>${ssrInterpolate(data.name)}</div><div class="text-body-2" data-v-165ec91e${_scopeId2}>${ssrInterpolate(data.position)}</div></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: data.img,
                        style: { "block-size": "1.75rem" }
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-body-1 text-high-emphasis text-center" }, toDisplayString(data.desc), 1),
                      createVNode("div", null, [
                        createVNode(VRating, {
                          "model-value": data.rating,
                          color: "warning",
                          readonly: ""
                        }, null, 8, ["model-value"])
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(data.name), 1),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(data.position), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, { class: "pa-4 pa-sm-6 pa-md-8 d-flex flex-column justify-space-between align-center" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: data.img,
                      style: { "block-size": "1.75rem" }
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-body-1 text-high-emphasis text-center" }, toDisplayString(data.desc), 1),
                    createVNode("div", null, [
                      createVNode(VRating, {
                        "model-value": data.rating,
                        color: "warning",
                        readonly: ""
                      }, null, 8, ["model-value"])
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, toDisplayString(data.name), 1),
                      createVNode("div", { class: "text-body-2" }, toDisplayString(data.position), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div><div class="swiper-brands-carousel mt-4" data-v-165ec91e><swiper-container slides-per-view="1" loop="true" events-prefix="swiper-"${ssrRenderAttr("breakpoints", {
        992: {
          slidesPerView: 5
        },
        768: {
          centeredSlides: true,
          slidesPerView: 3
        },
        580: {
          centeredSlides: true,
          slidesPerView: 2
        }
      })} data-v-165ec91e><!--[-->`);
      ssrRenderList([unref(brandLogo1), unref(brandLogo2), unref(brandLogo3), unref(brandLogo4), unref(brandLogo5), unref(brandLogo1), unref(brandLogo2), unref(brandLogo3), unref(brandLogo4), unref(brandLogo5)], (img, index) => {
        _push(`<swiper-slide data-v-165ec91e>`);
        _push(ssrRenderComponent(VImg, {
          src: img,
          height: "28"
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/customers-review.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CustomersReview = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-165ec91e"]]);
const sittingGirlWithLaptop = "/build/assets/sitting-girl-with-laptop-DQRQ0a2w.png";
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "42",
  fill: "none"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-opacity": ".1",
  "fill-rule": "evenodd",
  d: "M4.74 18.582c1.83-.652 3.755-1.518 5.239-2.772 1.763-1.49 2.48-3.408 2.961-5.428.619-2.595.866-5.358 1.615-7.957.278-.965.812-1.33 1.041-1.492a2.55 2.55 0 0 1 1.716-.477c.652.047 1.55.294 2.139 1.389.084.156.193.395.267.722.054.24.088.989.145 1.298.142.761.26 1.522.372 2.288.371 2.547.585 4.71 1.757 7.05 1.59 3.178 3.184 5.122 5.346 5.983 2.09.832 4.589.675 7.781.023q.456-.111.902-.189a2.627 2.627 0 0 1 1.017 5.156 39 39 0 0 1-.862.18c-4.315 1.069-9.31 4.88-12.212 8.219-.894 1.029-2.204 3.906-3.54 5.742-.987 1.354-2.095 2.246-3.025 2.562a2.73 2.73 0 0 1-1.583.072 2.68 2.68 0 0 1-1.556-1.04 2.95 2.95 0 0 1-.519-1.205c-.046-.245-.051-.868-.05-1.15-.272-.936-.606-1.85-.848-2.796-.58-2.255-1.716-3.682-3.066-5.568-1.262-1.765-2.619-2.875-4.607-3.76-.258-.063-2.345-.574-3.082-.867-1.076-.43-1.59-1.15-1.776-1.538a2.95 2.95 0 0 1-.286-1.713 2.8 2.8 0 0 1 .975-1.802c.35-.303.87-.599 1.569-.743.539-.112 1.97-.177 2.17-.187m12.243-3.675q.145.323.309.65c2.33 4.653 4.934 7.251 8.1 8.512l.107.04c-2.118 1.573-4.036 3.331-5.501 5.016-.604.694-1.403 2.136-2.266 3.614-.784-2.55-2.067-4.352-3.68-6.607-1.232-1.72-2.522-3.016-4.109-4.071 1.231-.632 2.406-1.372 3.428-2.236 1.704-1.44 2.83-3.107 3.612-4.918",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._hoisted_3$8]);
}
const frontPageElement = { render: render$8 };
const _sfc_main$6 = {
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const faqData = [
      {
        question: "Do you charge for each upgrade?",
        answer: "Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie."
      },
      {
        question: "What is regular license?",
        answer: "Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description."
      },
      {
        question: "What is extended license?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime! Mollitia reprehenderit neque repellat deleniti delectus architecto dolorum maxime, blanditiis earum ea, incidunt quam possimus cumque."
      },
      {
        question: "Which license is applicable for SASS application?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum nemo facere voluptates veritatis quia, eveniet veniam at et repudiandae mollitia ipsam quasi labore enim architecto non!"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ id: "faq" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="faq-section" data-v-5bf27dca${_scopeId}><div class="headers d-flex justify-center flex-column align-center mt-12 mb-16" data-v-5bf27dca${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(frontPageElement)), { class: "front-page-element" }, null), _parent2, _scopeId);
            _push2(`<div class="d-flex gap-x-3 mb-6" data-v-5bf27dca${_scopeId}><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-5bf27dca${_scopeId}><div class="text-body-1 text-high-emphasis font-weight-medium" style="${ssrRenderStyle({ "letter-spacing": "0.15px !important" })}" data-v-5bf27dca${_scopeId}> FAQ </div></div><div class="mb-2 text-center" data-v-5bf27dca${_scopeId}><span class="text-h5 d-inline-block" data-v-5bf27dca${_scopeId}>Frequently Asked</span> <span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-5bf27dca${_scopeId}> questions </span></div><p class="text-body-1 font-weight-medium text-center mb-0" data-v-5bf27dca${_scopeId}> Browse through these FAQs to find answers to commonly asked questions. </p></div><div class="d-flex align-center justify-space-between flex-wrap flex-md-nowrap pb-4" style="${ssrRenderStyle({ "gap": "6.25rem" })}" data-v-5bf27dca${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: unref(sittingGirlWithLaptop),
              height: "340",
              width: "320",
              class: "flip-in-rtl"
            }, null, _parent2, _scopeId));
            _push2(`<div data-v-5bf27dca${_scopeId}>`);
            _push2(ssrRenderComponent(VExpansionPanels, { class: "py-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(faqData, (faq) => {
                    _push3(ssrRenderComponent(VExpansionPanel, {
                      key: faq.question
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(faq.question)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(faq.question), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VExpansionPanelText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(faq.answer)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(faq.answer), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VExpansionPanelTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.question), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VExpansionPanelText, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(faq.answer), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(faqData, (faq) => {
                      return createVNode(VExpansionPanel, {
                        key: faq.question
                      }, {
                        default: withCtx(() => [
                          createVNode(VExpansionPanelTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(faq.question), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VExpansionPanelText, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(faq.answer), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "faq-section" }, [
                createVNode("div", { class: "headers d-flex justify-center flex-column align-center mt-12 mb-16" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(frontPageElement)), { class: "front-page-element" })),
                  createVNode("div", { class: "d-flex gap-x-3 mb-6" }, [
                    createVNode("img", {
                      src: unref(sectionTitleIcon),
                      alt: "section title icon",
                      height: "24",
                      width: "25"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      class: "text-body-1 text-high-emphasis font-weight-medium",
                      style: { "letter-spacing": "0.15px !important" }
                    }, " FAQ ")
                  ]),
                  createVNode("div", { class: "mb-2 text-center" }, [
                    createVNode("span", { class: "text-h5 d-inline-block" }, "Frequently Asked"),
                    createTextVNode(),
                    createVNode("span", {
                      class: "text-h4 d-inline-block font-weight-bold",
                      style: { "line-height": "2rem" }
                    }, " questions ")
                  ]),
                  createVNode("p", { class: "text-body-1 font-weight-medium text-center mb-0" }, " Browse through these FAQs to find answers to commonly asked questions. ")
                ]),
                createVNode("div", {
                  class: "d-flex align-center justify-space-between flex-wrap flex-md-nowrap pb-4",
                  style: { "gap": "6.25rem" }
                }, [
                  createVNode(VImg, {
                    src: unref(sittingGirlWithLaptop),
                    height: "340",
                    width: "320",
                    class: "flip-in-rtl"
                  }, null, 8, ["src"]),
                  createVNode("div", null, [
                    createVNode(VExpansionPanels, { class: "py-4" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(faqData, (faq) => {
                          return createVNode(VExpansionPanel, {
                            key: faq.question
                          }, {
                            default: withCtx(() => [
                              createVNode(VExpansionPanelTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(faq.question), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VExpansionPanelText, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(faq.answer), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/faq-section.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5bf27dca"]]);
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3.225",
  d: "m6.174 13.488 14.315 7.952a1.05 1.05 0 0 0 1.02 0l14.366-7.98M21 37.474v-15.75m15.75-8.132v16.264a1.05 1.05 0 0 1-.54.919l-14.7 8.165a1.05 1.05 0 0 1-1.02 0l-14.7-8.165a1.05 1.05 0 0 1-.54-.919V13.592a1.05 1.05 0 0 1 .54-.917l14.7-8.168a1.05 1.05 0 0 1 1.02 0l14.7 8.168a1.05 1.05 0 0 1 .54.917"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._hoisted_3$7]);
}
const SelectSolid = { render: render$7 };
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3.225",
  d: "M5.25 37.474h31.5M21.389 10.923l4.948-4.95L35 14.637l-4.949 4.95m-8.662-8.663-9.813 9.812a1.75 1.75 0 0 0-.513 1.237v7.938h7.938c.465 0 .91-.184 1.238-.512l9.812-9.813m-8.662-8.662 8.662 8.662"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._hoisted_3$6]);
}
const Edit = { render: render$6 };
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3.225",
  d: "M12.25 12.974h17.5m-17.5 8.75h17.5m-17.5 8.75h10.5m10.5-24.5H8.75a3.5 3.5 0 0 0-3.5 3.5v24.5a3.5 3.5 0 0 0 3.5 3.5h24.5a3.5 3.5 0 0 0 3.5-3.5v-24.5a3.5 3.5 0 0 0-3.5-3.5"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._hoisted_3$5]);
}
const GoogleDocs = { render: render$5 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M7.765 6.39A1.9 1.9 0 0 1 9.1 5.835h23.8a1.89 1.89 0 0 1 1.888 1.888V24H7.213V7.724c0-.5.198-.98.552-1.335M6.82 27.224h28.36L20.936 32.36H19.25c-.736 0-1.357.493-1.55 1.167L6.377 37.611a1.89 1.89 0 0 1-1.815-2.4zm10.88 6.303L6.378 37.611h29.245a1.89 1.89 0 0 0 1.815-2.4l-2.258-7.986-14.244 5.136h1.814a1.613 1.613 0 0 1 0 3.225h-3.5a1.612 1.612 0 0 1-1.55-2.058M3.988 7.724v17.665l-2.53 8.944a5.112 5.112 0 0 0 4.919 6.503h29.246a5.114 5.114 0 0 0 4.919-6.503l-2.53-8.944V7.724A5.11 5.11 0 0 0 32.9 2.61H9.1a5.113 5.113 0 0 0-5.112 5.113m17.839 2.533a1.613 1.613 0 0 0-2.82-1.566l-2.916 5.25a1.613 1.613 0 0 0 1.41 2.395h4.258l-1.586 2.855a1.613 1.613 0 0 0 2.82 1.566l2.917-5.25a1.613 1.613 0 0 0-1.41-2.396h-4.26z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._hoisted_3$4]);
}
const LaptopCharging = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3.225",
  d: "M21 39.224c9.665 0 17.5-7.835 17.5-17.5s-7.835-17.5-17.5-17.5-17.5 7.835-17.5 17.5 7.835 17.5 17.5 17.5"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "3.225",
  d: "M16.161 26.781 8.75 33.974m17.089-7.193 7.411 7.193m-7.411-17.308 7.411-7.192m-17.089 7.192L8.75 9.474M14 21.724a7 7 0 1 0 14 0 7 7 0 0 0-14 0"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_4$1]);
}
const Lifebelt = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "42",
  height: "43",
  fill: "none"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M8.44 7.414a5.4 5.4 0 0 1 3.81-1.578h17.5a5.39 5.39 0 0 1 5.388 5.388v3.5a1.612 1.612 0 1 0 3.224 0v-3.5A8.61 8.61 0 0 0 29.75 2.61h-17.5a8.613 8.613 0 0 0-8.613 8.613v3.5a1.612 1.612 0 1 0 3.225 0v-3.5c0-1.429.568-2.8 1.578-3.81m13.7 2.67c-.63-.63-1.65-.63-2.28 0l-5.25 5.25a1.613 1.613 0 1 0 2.28 2.28l2.497-2.497v8.494H10.5a6.86 6.86 0 0 0-6.863 6.863v3.5a6.863 6.863 0 0 0 6.863 6.862h21a6.863 6.863 0 0 0 6.862-6.862v-3.5A6.863 6.863 0 0 0 31.5 23.61h-8.888v-8.494l2.498 2.497a1.612 1.612 0 1 0 2.28-2.28zM21 26.836H10.5a3.64 3.64 0 0 0-3.638 3.638v3.5A3.637 3.637 0 0 0 10.5 37.61h21a3.637 3.637 0 0 0 3.638-3.637v-3.5a3.64 3.64 0 0 0-3.638-3.638z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const TransitionUp = { render: render$2 };
const _sfc_main$5 = {
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const featuresData = [
      {
        title: "Quality Code",
        desc: "Code structure that all developers will easily understand and fall in love with.",
        img: LaptopCharging
      },
      {
        title: "Continuous Updates",
        desc: "Free updates for the next 12 months, including new demos and features.",
        img: TransitionUp
      },
      {
        title: "Starter Kit",
        desc: "Start your project quickly without having to remove unnecessary features.",
        img: Edit
      },
      {
        title: "API Ready",
        desc: "Just change the endpoint and see your own data loaded within seconds.",
        img: SelectSolid
      },
      {
        title: "Well Documented",
        desc: "An easy-to-follow doc with lots of references and code examples.",
        img: Lifebelt
      },
      {
        title: "Excellent Support",
        desc: "An easy-to-follow doc with lots of references and code examples.",
        img: GoogleDocs
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ id: "features" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="feature-cards" data-v-49a69cfb${_scopeId}><div class="headers d-flex justify-center flex-column align-center mb-6" data-v-49a69cfb${_scopeId}><div class="d-flex gap-x-3 mb-6" data-v-49a69cfb${_scopeId}><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-49a69cfb${_scopeId}><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-49a69cfb${_scopeId}> USEFUL FEATURES </div></div><div class="mb-2 text-center" data-v-49a69cfb${_scopeId}><span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-49a69cfb${_scopeId}> Everything you need </span> <span class="text-h5 d-inline-block" data-v-49a69cfb${_scopeId}>to start your next project</span></div><p class="text-body-1 font-weight-medium text-center" data-v-49a69cfb${_scopeId}> Not just a set of tools, the package includes ready-to-deploy conceptual application. </p></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(featuresData, (data, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2" data-v-49a69cfb${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            variant: "outlined",
                            size: "82",
                            color: "primary",
                            class: "mb-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(data.img), null, null), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(data.img)))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<h5 class="text-h5" data-v-49a69cfb${_scopeId3}>${ssrInterpolate(data.title)}</h5><p class="text-center text-medium-emphasis" style="${ssrRenderStyle({ "max-inline-size": "360px" })}" data-v-49a69cfb${_scopeId3}>${ssrInterpolate(data.desc)}</p></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "feature d-flex flex-column gap-y-2 align-center justify-center mt-2" }, [
                              createVNode(VAvatar, {
                                variant: "outlined",
                                size: "82",
                                color: "primary",
                                class: "mb-2"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(data.img)))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("h5", { class: "text-h5" }, toDisplayString(data.title), 1),
                              createVNode("p", {
                                class: "text-center text-medium-emphasis",
                                style: { "max-inline-size": "360px" }
                              }, toDisplayString(data.desc), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(featuresData, (data, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "feature d-flex flex-column gap-y-2 align-center justify-center mt-2" }, [
                            createVNode(VAvatar, {
                              variant: "outlined",
                              size: "82",
                              color: "primary",
                              class: "mb-2"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(data.img)))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("h5", { class: "text-h5" }, toDisplayString(data.title), 1),
                            createVNode("p", {
                              class: "text-center text-medium-emphasis",
                              style: { "max-inline-size": "360px" }
                            }, toDisplayString(data.desc), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "feature-cards" }, [
                createVNode("div", { class: "headers d-flex justify-center flex-column align-center mb-6" }, [
                  createVNode("div", { class: "d-flex gap-x-3 mb-6" }, [
                    createVNode("img", {
                      src: unref(sectionTitleIcon),
                      alt: "section title icon",
                      height: "24",
                      width: "25"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " USEFUL FEATURES ")
                  ]),
                  createVNode("div", { class: "mb-2 text-center" }, [
                    createVNode("span", {
                      class: "text-h4 d-inline-block font-weight-bold",
                      style: { "line-height": "2rem" }
                    }, " Everything you need "),
                    createTextVNode(),
                    createVNode("span", { class: "text-h5 d-inline-block" }, "to start your next project")
                  ]),
                  createVNode("p", { class: "text-body-1 font-weight-medium text-center" }, " Not just a set of tools, the package includes ready-to-deploy conceptual application. ")
                ]),
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(featuresData, (data, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "feature d-flex flex-column gap-y-2 align-center justify-center mt-2" }, [
                            createVNode(VAvatar, {
                              variant: "outlined",
                              size: "82",
                              color: "primary",
                              class: "mb-2"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(data.img)))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("h5", { class: "text-h5" }, toDisplayString(data.title), 1),
                            createVNode("p", {
                              class: "text-center text-medium-emphasis",
                              style: { "max-inline-size": "360px" }
                            }, toDisplayString(data.desc), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/features.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-49a69cfb"]]);
const darkBg = "/build/assets/hero-bg-dark-B0BOPGr8.png";
const lightBg = "/build/assets/hero-bg-C_oLgwhG.png";
const heroDashboardImgDark = "/build/assets/hero-dashboard-dark-4sEtBjZ6.png";
const heroDashboardImgLight = "/build/assets/hero-dashboard-light-IzGn5TGB.png";
const heroElementsImgDark = "/build/assets/hero-elements-dark-1e8QtOKr.png";
const heroElementsImgLight = "/build/assets/hero-elements-light-CUzYiYR2.png";
const _sfc_main$4 = {
  __name: "hero-section",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const isDark = ref(theme.name);
    const heroBgUrl = computed(() => {
      if (isDark.value === "dark")
        return darkBg;
      else
        return lightBg;
    });
    const heroElementsImg = useGenerateImageVariant(heroElementsImgLight, heroElementsImgDark);
    const heroDashboardImg = useGenerateImageVariant(heroDashboardImgLight, heroDashboardImgDark);
    const { x, y } = useMouse({ touch: false });
    const translateMouse = computed(() => (speed) => {
      if (typeof window !== "undefined") {
        const positionX = computed(() => (window.innerWidth - x.value * speed) / 100);
        const positionY = computed(() => Math.max((window.innerHeight - y.value * speed) / 100, -40));
        return { transform: `translate(${positionX.value}px,${positionY.value}px` };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        style: { "background-color": "rgb(var(--v-theme-surface))" }
      }, _attrs))} data-v-263d1662><div id="landingHero" class="landing-hero" style="${ssrRenderStyle({ backgroundImage: `url(${unref(heroBgUrl)})` })}" data-v-263d1662>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center pt-6 pb-16" data-v-263d1662${_scopeId}><div class="mb-4 landing-page-title" data-v-263d1662${_scopeId}><div data-v-263d1662${_scopeId}> All in one sass application </div> for your business </div><div class="text-body-1 font-weight-medium text-high-emphasis pb-8" data-v-263d1662${_scopeId}><p class="mb-0" data-v-263d1662${_scopeId}> No coding required to make customization </p><p class="mb-0" data-v-263d1662${_scopeId}> The live customer has everything your marketing needs </p></div>`);
            _push2(ssrRenderComponent(VBtn, {
              to: { name: "front-pages-landing-page", hash: `#pricing-plan` },
              size: "large",
              active: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get Early Access `);
                } else {
                  return [
                    createTextVNode(" Get Early Access ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="position-relative hero-animation-img" data-v-263d1662${_scopeId}><div class="hero-dashboard-img text-center" data-v-263d1662${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(heroDashboardImg))} class="mx-auto cursor-pointer" style="${ssrRenderStyle(unref(translateMouse)(3))}" data-v-263d1662${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(heroDashboardImg),
                      class: "mx-auto cursor-pointer",
                      style: unref(translateMouse)(3)
                    }, null, 12, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hero-elements-img" data-v-263d1662${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: "/",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="cursor-pointer"${ssrRenderAttr("src", unref(heroElementsImg))} style="${ssrRenderStyle(unref(translateMouse)(5))}" target="_blank" data-v-263d1662${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "cursor-pointer",
                      src: unref(heroElementsImg),
                      style: unref(translateMouse)(5),
                      target: "_blank"
                    }, null, 12, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center pt-6 pb-16" }, [
                createVNode("div", { class: "mb-4 landing-page-title" }, [
                  createVNode("div", null, " All in one sass application "),
                  createTextVNode(" for your business ")
                ]),
                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis pb-8" }, [
                  createVNode("p", { class: "mb-0" }, " No coding required to make customization "),
                  createVNode("p", { class: "mb-0" }, " The live customer has everything your marketing needs ")
                ]),
                createVNode(VBtn, {
                  to: { name: "front-pages-landing-page", hash: `#pricing-plan` },
                  size: "large",
                  active: false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Get Early Access ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "position-relative hero-animation-img" }, [
                createVNode("div", { class: "hero-dashboard-img text-center" }, [
                  createVNode(_component_RouterLink, {
                    to: "/",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(heroDashboardImg),
                        class: "mx-auto cursor-pointer",
                        style: unref(translateMouse)(3)
                      }, null, 12, ["src"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "hero-elements-img" }, [
                  createVNode(_component_RouterLink, {
                    to: "/",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        class: "cursor-pointer",
                        src: unref(heroElementsImg),
                        style: unref(translateMouse)(5),
                        target: "_blank"
                      }, null, 12, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/hero-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-263d1662"]]);
const teamPerson1 = "/build/assets/team-member-1-DSUa9Pbn.png";
const teamPerson2 = "/build/assets/team-member-2-Dy9jk49j.png";
const teamPerson3 = "/build/assets/team-member-3-bVPmn86I.png";
const teamPerson4 = "/build/assets/team-member-4-D4Cjz_zZ.png";
const _sfc_main$3 = {
  __name: "our-team",
  __ssrInlineRender: true,
  setup(__props) {
    const teamData = ref([
      {
        name: "Sophie Gilbert",
        position: "Project Manager",
        image: teamPerson1,
        backgroundColor: "rgba(144, 85, 253, 0.16)",
        borderColor: "rgba(144, 85, 253,0.38)",
        isHover: false
      },
      {
        name: "Nannie Ford",
        position: "Development Lead",
        image: teamPerson2,
        backgroundColor: "rgba(255, 76, 81, 0.16)",
        borderColor: "rgba(255, 76, 81,0.38)",
        isHover: false
      },
      {
        name: "Chris Watkins",
        position: "Marketing Manager",
        image: teamPerson3,
        backgroundColor: "rgba(86, 202, 0, 0.16)",
        borderColor: "rgba(86, 202, 0,0.38)",
        isHover: false
      },
      {
        name: "Paul Miles",
        position: "UI Designer",
        image: teamPerson4,
        backgroundColor: "rgba(22, 177, 255, 0.16)",
        borderColor: "rgba(22, 177, 255,0.38)",
        isHover: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ id: "team" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="our-team" data-v-2a38d07b${_scopeId}><div class="headers d-flex justify-center flex-column align-center" data-v-2a38d07b${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(frontPageElement)), { class: "front-page-element" }, null), _parent2, _scopeId);
            _push2(`<div class="d-flex gap-x-3 mb-6" data-v-2a38d07b${_scopeId}><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-2a38d07b${_scopeId}><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-2a38d07b${_scopeId}> OUR GREAT TEAM </div></div><div class="mb-2" data-v-2a38d07b${_scopeId}><span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-2a38d07b${_scopeId}> Supported </span> <span class="text-h5 d-inline-block" data-v-2a38d07b${_scopeId}>by Real People</span></div><p class="text-body-1 font-weight-medium text-center" style="${ssrRenderStyle({ "letter-spacing": "0.15px !important" })}" data-v-2a38d07b${_scopeId}> Who is behind these great-looking interfaces? </p></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(teamData), (data, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            variant: "outlined",
                            "min-width": "267",
                            class: "position-relative overflow-visible mt-16",
                            style: data.isHover ? { border: `1px solid ${data.borderColor}` } : {},
                            onMouseenter: ($event) => data.isHover = true,
                            onMouseleave: ($event) => data.isHover = false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: data.image,
                                  height: "240px",
                                  class: "team-image"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div style="${ssrRenderStyle({ "maxHeight": "185px", "minHeight": "185px", "backgroundColor": data.backgroundColor, "border-top-left-radius": "0.625rem", "border-top-right-radius": "0.625rem" })}" data-v-2a38d07b${_scopeId4}></div>`);
                                _push5(ssrRenderComponent(VCardText, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="mb-3" data-v-2a38d07b${_scopeId5}><h5 class="text-h5" data-v-2a38d07b${_scopeId5}>${ssrInterpolate(data.name)}</h5><div class="text-body-1" data-v-2a38d07b${_scopeId5}>${ssrInterpolate(data.position)}</div></div><div class="d-flex gap-x-2 align-center justify-center" data-v-2a38d07b${_scopeId5}><!--[-->`);
                                      ssrRenderList([
                                        { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                        { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                        { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                      ], ({ icon, color }) => {
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon,
                                          size: "22",
                                          color: data.isHover ? color : "",
                                          class: "cursor-pointer"
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]--></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "mb-3" }, [
                                          createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                          createVNode("div", { class: "text-body-1" }, toDisplayString(data.position), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex gap-x-2 align-center justify-center" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList([
                                            { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                            { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                            { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                          ], ({ icon, color }) => {
                                            return openBlock(), createBlock(VIcon, {
                                              key: color,
                                              icon,
                                              size: "22",
                                              color: data.isHover ? color : "",
                                              class: "cursor-pointer"
                                            }, null, 8, ["icon", "color"]);
                                          }), 128))
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: data.image,
                                    height: "240px",
                                    class: "team-image"
                                  }, null, 8, ["src"]),
                                  createVNode("div", {
                                    style: { "maxHeight": "185px", "minHeight": "185px", "backgroundColor": data.backgroundColor, "border-top-left-radius": "0.625rem", "border-top-right-radius": "0.625rem" }
                                  }, null, 4),
                                  createVNode(VCardText, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-3" }, [
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(data.position), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex gap-x-2 align-center justify-center" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList([
                                          { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                          { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                          { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                        ], ({ icon, color }) => {
                                          return openBlock(), createBlock(VIcon, {
                                            key: color,
                                            icon,
                                            size: "22",
                                            color: data.isHover ? color : "",
                                            class: "cursor-pointer"
                                          }, null, 8, ["icon", "color"]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              flat: "",
                              variant: "outlined",
                              "min-width": "267",
                              class: "position-relative overflow-visible mt-16",
                              style: data.isHover ? { border: `1px solid ${data.borderColor}` } : {},
                              onMouseenter: ($event) => data.isHover = true,
                              onMouseleave: ($event) => data.isHover = false
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: data.image,
                                  height: "240px",
                                  class: "team-image"
                                }, null, 8, ["src"]),
                                createVNode("div", {
                                  style: { "maxHeight": "185px", "minHeight": "185px", "backgroundColor": data.backgroundColor, "border-top-left-radius": "0.625rem", "border-top-right-radius": "0.625rem" }
                                }, null, 4),
                                createVNode(VCardText, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-3" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(data.position), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex gap-x-2 align-center justify-center" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList([
                                        { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                        { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                        { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                      ], ({ icon, color }) => {
                                        return openBlock(), createBlock(VIcon, {
                                          key: color,
                                          icon,
                                          size: "22",
                                          color: data.isHover ? color : "",
                                          class: "cursor-pointer"
                                        }, null, 8, ["icon", "color"]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["style", "onMouseenter", "onMouseleave"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(teamData), (data, index) => {
                      return openBlock(), createBlock(VCol, {
                        key: index,
                        cols: "12",
                        lg: "3",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            variant: "outlined",
                            "min-width": "267",
                            class: "position-relative overflow-visible mt-16",
                            style: data.isHover ? { border: `1px solid ${data.borderColor}` } : {},
                            onMouseenter: ($event) => data.isHover = true,
                            onMouseleave: ($event) => data.isHover = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: data.image,
                                height: "240px",
                                class: "team-image"
                              }, null, 8, ["src"]),
                              createVNode("div", {
                                style: { "maxHeight": "185px", "minHeight": "185px", "backgroundColor": data.backgroundColor, "border-top-left-radius": "0.625rem", "border-top-right-radius": "0.625rem" }
                              }, null, 4),
                              createVNode(VCardText, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(data.position), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex gap-x-2 align-center justify-center" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList([
                                      { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                      { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                      { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                    ], ({ icon, color }) => {
                                      return openBlock(), createBlock(VIcon, {
                                        key: color,
                                        icon,
                                        size: "22",
                                        color: data.isHover ? color : "",
                                        class: "cursor-pointer"
                                      }, null, 8, ["icon", "color"]);
                                    }), 128))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["style", "onMouseenter", "onMouseleave"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "our-team" }, [
                createVNode("div", { class: "headers d-flex justify-center flex-column align-center" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(frontPageElement)), { class: "front-page-element" })),
                  createVNode("div", { class: "d-flex gap-x-3 mb-6" }, [
                    createVNode("img", {
                      src: unref(sectionTitleIcon),
                      alt: "section title icon",
                      height: "24",
                      width: "25"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " OUR GREAT TEAM ")
                  ]),
                  createVNode("div", { class: "mb-2" }, [
                    createVNode("span", {
                      class: "text-h4 d-inline-block font-weight-bold",
                      style: { "line-height": "2rem" }
                    }, " Supported "),
                    createTextVNode(),
                    createVNode("span", { class: "text-h5 d-inline-block" }, "by Real People")
                  ]),
                  createVNode("p", {
                    class: "text-body-1 font-weight-medium text-center",
                    style: { "letter-spacing": "0.15px !important" }
                  }, " Who is behind these great-looking interfaces? ")
                ]),
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(teamData), (data, index) => {
                      return openBlock(), createBlock(VCol, {
                        key: index,
                        cols: "12",
                        lg: "3",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            variant: "outlined",
                            "min-width": "267",
                            class: "position-relative overflow-visible mt-16",
                            style: data.isHover ? { border: `1px solid ${data.borderColor}` } : {},
                            onMouseenter: ($event) => data.isHover = true,
                            onMouseleave: ($event) => data.isHover = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: data.image,
                                height: "240px",
                                class: "team-image"
                              }, null, 8, ["src"]),
                              createVNode("div", {
                                style: { "maxHeight": "185px", "minHeight": "185px", "backgroundColor": data.backgroundColor, "border-top-left-radius": "0.625rem", "border-top-right-radius": "0.625rem" }
                              }, null, 4),
                              createVNode(VCardText, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(data.name), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(data.position), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex gap-x-2 align-center justify-center" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList([
                                      { icon: "ri-facebook-circle-line", color: "rgba(59, 89, 152, 1)", link: "https://www.facebook.com/" },
                                      { icon: "ri-twitter-line", color: "rgba(0, 172, 238, 1)", link: "https://twitter.com/" },
                                      { icon: "ri-linkedin-box-line", color: "rgba(0, 119, 181, 1)", link: "https://linkedin.com" }
                                    ], ({ icon, color }) => {
                                      return openBlock(), createBlock(VIcon, {
                                        key: color,
                                        icon,
                                        size: "22",
                                        color: data.isHover ? color : "",
                                        class: "cursor-pointer"
                                      }, null, 8, ["icon", "color"]);
                                    }), 128))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["style", "onMouseenter", "onMouseleave"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/our-team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OurTeam = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2a38d07b"]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "9",
  fill: "none"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#a)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "#666CFF",
    d: "M12.112 5.786c-.359 0-.714.004-1.073 0q-4.574-.066-9.147-.138c-.331-.003-.666.004-.998-.024-.455-.038-.987-.12-.88-.708.041-.234.545-.531.85-.549 2.544-.145 5.092-.234 7.64-.328.58-.02 1.16-.003 1.803-.317-.698-.397-1.433-.743-2.076-1.216-.303-.224-.666-.739-.597-1.025.152-.635.811-.542 1.25-.349 2.075.915 4.174 1.792 6.167 2.87 1.274.69 1.263 1.726-.004 2.41-1.699.914-3.508 1.622-5.293 2.371-.214.09-.56-.127-.846-.203.097-.287.107-.68.304-.836.428-.338.953-.556 1.44-.822.51-.276 1.022-.545 1.533-.818z"
  })
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "a" }, [
    /* @__PURE__ */ createElementVNode("path", {
      fill: "#fff",
      d: "M0 8.804V.987h16v7.817z"
    })
  ])
], -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_4]);
}
const ListArrowIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "72",
  height: "12",
  fill: "none"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  stroke: "#666CFF",
  "stroke-linecap": "round",
  "stroke-width": "4",
  d: "M2 2.896c11.685 5.282 41.645 12.677 68 0"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const VectorIcon = { render };
const _sfc_main$2 = {
  __name: "pricing-plans",
  __ssrInlineRender: true,
  setup(__props) {
    const pricingPlans = [
      {
        title: "Basic Plan",
        price: 20,
        features: [
          "Timeline",
          "Basic search",
          "Live chat widget",
          "Email marketing",
          "Custom Forms",
          "Traffic analytics"
        ],
        supportType: "Basic",
        supportMedium: "Only Email",
        respondTime: "AVG. Time: 24h",
        current: false
      },
      {
        title: "Favourite Plan",
        price: 51,
        features: [
          "Everything in basic",
          "Timeline with database",
          "Advanced search",
          "Marketing automation",
          "Advanced chatbot",
          "Campaign management"
        ],
        supportType: "Standard",
        supportMedium: "Email & Chat",
        respondTime: "AVG. Time: 6h",
        current: true
      },
      {
        title: "Standard Plan",
        price: 99,
        features: [
          "Campaign management",
          "Timeline with database",
          "Fuzzy search",
          "A/B testing sanbox",
          "Custom permissions",
          "Social media automation"
        ],
        supportType: "Exclusive",
        supportMedium: "Email, Chat & Google Meet",
        respondTime: "Live Support",
        current: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ id: "pricing-plan" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pricing-plans d-flex flex-column gap-12" data-v-3ebcdb4a${_scopeId}><div class="headers d-flex justify-center flex-column align-center" data-v-3ebcdb4a${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(frontPageVectorImg)), { class: "front-page-vector" }, null), _parent2, _scopeId);
            _push2(`<div class="d-flex gap-x-3 mb-6" data-v-3ebcdb4a${_scopeId}><img${ssrRenderAttr("src", unref(sectionTitleIcon))} alt="section title icon" height="24" width="25" data-v-3ebcdb4a${_scopeId}><div class="text-body-1 text-high-emphasis font-weight-medium" data-v-3ebcdb4a${_scopeId}> PRICING PLANS </div></div><div class="mb-2 text-center" data-v-3ebcdb4a${_scopeId}><span class="text-h4 d-inline-block font-weight-bold" style="${ssrRenderStyle({ "line-height": "2rem" })}" data-v-3ebcdb4a${_scopeId}> Tailored pricing plans </span> <span class="text-h5 d-inline-block" data-v-3ebcdb4a${_scopeId}>designed for you</span></div><p class="text-body-1 font-weight-medium text-center mb-0" data-v-3ebcdb4a${_scopeId}> All plans include 40+ advanced tools and features to boost your product. <br data-v-3ebcdb4a${_scopeId}> Choose the best plan to fit your needs. </p></div><div class="w-75 mx-auto" data-v-3ebcdb4a${_scopeId}>`);
            _push2(ssrRenderComponent(VSlider, {
              "model-value": "458+",
              max: "1249",
              color: "primary",
              "thumb-label": "always",
              class: "mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(pricingPlans, (plan, index) => {
                    _push3(ssrRenderComponent(VCol, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            border: "",
                            style: plan.current ? "border:2px solid rgb(var(--v-theme-primary))" : ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardText, { class: "pa-lg-8 text-no-wrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex flex-column gap-y-8" data-v-3ebcdb4a${_scopeId5}><div class="d-flex flex-column gap-y-3" data-v-3ebcdb4a${_scopeId5}><h4 class="text-h4 text-center" data-v-3ebcdb4a${_scopeId5}>${ssrInterpolate(plan.title)}</h4><div class="d-flex align-center gap-x-3" data-v-3ebcdb4a${_scopeId5}><div class="d-flex" data-v-3ebcdb4a${_scopeId5}><h5 class="text-h5" style="${ssrRenderStyle({ "margin-block-start": "0.35rem" })}" data-v-3ebcdb4a${_scopeId5}> $ </h5><div class="plan-price-text" data-v-3ebcdb4a${_scopeId5}>${ssrInterpolate(plan.price)}</div></div><div data-v-3ebcdb4a${_scopeId5}><div class="text-body-1 font-weight-medium text-high-emphasis" data-v-3ebcdb4a${_scopeId5}> Per month </div><div class="text-body-2" data-v-3ebcdb4a${_scopeId5}> 10% off for yearly subscription </div></div></div>`);
                                      _push6(ssrRenderComponent(unref(VectorIcon), null, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="d-flex flex-column" data-v-3ebcdb4a${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VList, { class: "card-list" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(plan.features, (item, i) => {
                                              _push7(ssrRenderComponent(VListItem, { key: i }, {
                                                prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }, null), _parent8, _scopeId7);
                                                  } else {
                                                    return [
                                                      (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                                    ];
                                                  }
                                                }),
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<h5 class="text-h5" data-v-3ebcdb4a${_scopeId7}>${ssrInterpolate(item)}</h5>`);
                                                  } else {
                                                    return [
                                                      createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                                return openBlock(), createBlock(VListItem, { key: i }, {
                                                  prepend: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                      _push6(`<div class="d-flex align-center justify-space-between flex-wrap gap-2" data-v-3ebcdb4a${_scopeId5}><div data-v-3ebcdb4a${_scopeId5}><div class="text-body-1 font-weight-medium text-high-emphasis mb-1" data-v-3ebcdb4a${_scopeId5}>${ssrInterpolate(plan.supportType)} Support </div><div class="text-body-2" data-v-3ebcdb4a${_scopeId5}>${ssrInterpolate(plan.supportMedium)}</div></div>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        variant: "tonal",
                                        color: "primary",
                                        size: "small",
                                        class: "font-weight-medium"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(plan.respondTime)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(plan.respondTime), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div></div>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        block: "",
                                        variant: plan.current ? "elevated" : "outlined",
                                        to: { name: "front-pages-payment" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Get Started `);
                                          } else {
                                            return [
                                              createTextVNode(" Get Started ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex flex-column gap-y-8" }, [
                                          createVNode("div", { class: "d-flex flex-column gap-y-3" }, [
                                            createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(plan.title), 1),
                                            createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                              createVNode("div", { class: "d-flex" }, [
                                                createVNode("h5", {
                                                  class: "text-h5",
                                                  style: { "margin-block-start": "0.35rem" }
                                                }, " $ "),
                                                createVNode("div", { class: "plan-price-text" }, toDisplayString(plan.price), 1)
                                              ]),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Per month "),
                                                createVNode("div", { class: "text-body-2" }, " 10% off for yearly subscription ")
                                              ])
                                            ]),
                                            createVNode(unref(VectorIcon))
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode(VList, { class: "card-list" }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                                    prepend: withCtx(() => [
                                                      (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VDivider, { class: "my-4" }),
                                            createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(plan.supportType) + " Support ", 1),
                                                createVNode("div", { class: "text-body-2" }, toDisplayString(plan.supportMedium), 1)
                                              ]),
                                              createVNode(VChip, {
                                                variant: "tonal",
                                                color: "primary",
                                                size: "small",
                                                class: "font-weight-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(plan.respondTime), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ]),
                                          createVNode(VBtn, {
                                            block: "",
                                            variant: plan.current ? "elevated" : "outlined",
                                            to: { name: "front-pages-payment" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Get Started ")
                                            ]),
                                            _: 2
                                          }, 1032, ["variant"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardText, { class: "pa-lg-8 text-no-wrap" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-column gap-y-8" }, [
                                        createVNode("div", { class: "d-flex flex-column gap-y-3" }, [
                                          createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(plan.title), 1),
                                          createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                            createVNode("div", { class: "d-flex" }, [
                                              createVNode("h5", {
                                                class: "text-h5",
                                                style: { "margin-block-start": "0.35rem" }
                                              }, " $ "),
                                              createVNode("div", { class: "plan-price-text" }, toDisplayString(plan.price), 1)
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Per month "),
                                              createVNode("div", { class: "text-body-2" }, " 10% off for yearly subscription ")
                                            ])
                                          ]),
                                          createVNode(unref(VectorIcon))
                                        ]),
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode(VList, { class: "card-list" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                                return openBlock(), createBlock(VListItem, { key: i }, {
                                                  prepend: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VDivider, { class: "my-4" }),
                                          createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(plan.supportType) + " Support ", 1),
                                              createVNode("div", { class: "text-body-2" }, toDisplayString(plan.supportMedium), 1)
                                            ]),
                                            createVNode(VChip, {
                                              variant: "tonal",
                                              color: "primary",
                                              size: "small",
                                              class: "font-weight-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(plan.respondTime), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: plan.current ? "elevated" : "outlined",
                                          to: { name: "front-pages-payment" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Get Started ")
                                          ]),
                                          _: 2
                                        }, 1032, ["variant"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              flat: "",
                              border: "",
                              style: plan.current ? "border:2px solid rgb(var(--v-theme-primary))" : ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "pa-lg-8 text-no-wrap" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-column gap-y-8" }, [
                                      createVNode("div", { class: "d-flex flex-column gap-y-3" }, [
                                        createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(plan.title), 1),
                                        createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("h5", {
                                              class: "text-h5",
                                              style: { "margin-block-start": "0.35rem" }
                                            }, " $ "),
                                            createVNode("div", { class: "plan-price-text" }, toDisplayString(plan.price), 1)
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Per month "),
                                            createVNode("div", { class: "text-body-2" }, " 10% off for yearly subscription ")
                                          ])
                                        ]),
                                        createVNode(unref(VectorIcon))
                                      ]),
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode(VList, { class: "card-list" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                              return openBlock(), createBlock(VListItem, { key: i }, {
                                                prepend: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(plan.supportType) + " Support ", 1),
                                            createVNode("div", { class: "text-body-2" }, toDisplayString(plan.supportMedium), 1)
                                          ]),
                                          createVNode(VChip, {
                                            variant: "tonal",
                                            color: "primary",
                                            size: "small",
                                            class: "font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(plan.respondTime), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: plan.current ? "elevated" : "outlined",
                                        to: { name: "front-pages-payment" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Get Started ")
                                        ]),
                                        _: 2
                                      }, 1032, ["variant"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["style"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(pricingPlans, (plan, index) => {
                      return createVNode(VCol, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            border: "",
                            style: plan.current ? "border:2px solid rgb(var(--v-theme-primary))" : ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pa-lg-8 text-no-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column gap-y-8" }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-3" }, [
                                      createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(plan.title), 1),
                                      createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("h5", {
                                            class: "text-h5",
                                            style: { "margin-block-start": "0.35rem" }
                                          }, " $ "),
                                          createVNode("div", { class: "plan-price-text" }, toDisplayString(plan.price), 1)
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Per month "),
                                          createVNode("div", { class: "text-body-2" }, " 10% off for yearly subscription ")
                                        ])
                                      ]),
                                      createVNode(unref(VectorIcon))
                                    ]),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode(VList, { class: "card-list" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                            return openBlock(), createBlock(VListItem, { key: i }, {
                                              prepend: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                              ]),
                                              default: withCtx(() => [
                                                createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(plan.supportType) + " Support ", 1),
                                          createVNode("div", { class: "text-body-2" }, toDisplayString(plan.supportMedium), 1)
                                        ]),
                                        createVNode(VChip, {
                                          variant: "tonal",
                                          color: "primary",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(plan.respondTime), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: plan.current ? "elevated" : "outlined",
                                      to: { name: "front-pages-payment" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Get Started ")
                                      ]),
                                      _: 2
                                    }, 1032, ["variant"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["style"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pricing-plans d-flex flex-column gap-12" }, [
                createVNode("div", { class: "headers d-flex justify-center flex-column align-center" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(frontPageVectorImg)), { class: "front-page-vector" })),
                  createVNode("div", { class: "d-flex gap-x-3 mb-6" }, [
                    createVNode("img", {
                      src: unref(sectionTitleIcon),
                      alt: "section title icon",
                      height: "24",
                      width: "25"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium" }, " PRICING PLANS ")
                  ]),
                  createVNode("div", { class: "mb-2 text-center" }, [
                    createVNode("span", {
                      class: "text-h4 d-inline-block font-weight-bold",
                      style: { "line-height": "2rem" }
                    }, " Tailored pricing plans "),
                    createTextVNode(),
                    createVNode("span", { class: "text-h5 d-inline-block" }, "designed for you")
                  ]),
                  createVNode("p", { class: "text-body-1 font-weight-medium text-center mb-0" }, [
                    createTextVNode(" All plans include 40+ advanced tools and features to boost your product. "),
                    createVNode("br"),
                    createTextVNode(" Choose the best plan to fit your needs. ")
                  ])
                ]),
                createVNode("div", { class: "w-75 mx-auto" }, [
                  createVNode(VSlider, {
                    "model-value": "458+",
                    max: "1249",
                    color: "primary",
                    "thumb-label": "always",
                    class: "mt-1"
                  })
                ]),
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(pricingPlans, (plan, index) => {
                      return createVNode(VCol, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            border: "",
                            style: plan.current ? "border:2px solid rgb(var(--v-theme-primary))" : ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pa-lg-8 text-no-wrap" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column gap-y-8" }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-3" }, [
                                      createVNode("h4", { class: "text-h4 text-center" }, toDisplayString(plan.title), 1),
                                      createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("h5", {
                                            class: "text-h5",
                                            style: { "margin-block-start": "0.35rem" }
                                          }, " $ "),
                                          createVNode("div", { class: "plan-price-text" }, toDisplayString(plan.price), 1)
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " Per month "),
                                          createVNode("div", { class: "text-body-2" }, " 10% off for yearly subscription ")
                                        ])
                                      ]),
                                      createVNode(unref(VectorIcon))
                                    ]),
                                    createVNode("div", { class: "d-flex flex-column" }, [
                                      createVNode(VList, { class: "card-list" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (item, i) => {
                                            return openBlock(), createBlock(VListItem, { key: i }, {
                                              prepend: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(unref(ListArrowIcon)), { class: "me-3" }))
                                              ]),
                                              default: withCtx(() => [
                                                createVNode("h5", { class: "text-h5" }, toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap gap-2" }, [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis mb-1" }, toDisplayString(plan.supportType) + " Support ", 1),
                                          createVNode("div", { class: "text-body-2" }, toDisplayString(plan.supportMedium), 1)
                                        ]),
                                        createVNode(VChip, {
                                          variant: "tonal",
                                          color: "primary",
                                          size: "small",
                                          class: "font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(plan.respondTime), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: plan.current ? "elevated" : "outlined",
                                      to: { name: "front-pages-payment" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Get Started ")
                                      ]),
                                      _: 2
                                    }, 1032, ["variant"])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["style"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/pricing-plans.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PricingPlans = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ebcdb4a"]]);
const _sfc_main$1 = {
  __name: "product-stats",
  __ssrInlineRender: true,
  setup(__props) {
    const statData = ref([
      {
        title: "Completed Sites",
        value: 137,
        icon: "ri-layout-line",
        color: "primary",
        isHover: false
      },
      {
        title: "Working Hours",
        value: 1100,
        icon: "ri-time-line",
        color: "success",
        isHover: false
      },
      {
        title: "Happy Customers",
        value: 137,
        icon: "ri-user-smile-line",
        color: "warning",
        isHover: false
      },
      {
        title: "Awards Winning",
        value: 23,
        icon: "ri-award-line",
        color: "info",
        isHover: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "background-color": "rgb(var(--v-theme-surface))" } }, _attrs))} data-v-0f1e31a8>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12" data-v-0f1e31a8${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(statData), (product, index) => {
                    _push3(ssrRenderComponent(VCol, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, { flat: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardText, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        size: "82",
                                        color: product.color,
                                        variant: product.isHover ? "elevated" : "tonal",
                                        class: "mb-6 cursor-pointer",
                                        onMouseenter: () => product.isHover = true,
                                        onMouseleave: ($event) => product.isHover = false
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: product.icon,
                                              size: "42"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: product.icon,
                                                size: "42"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="product-stat-text" data-v-0f1e31a8${_scopeId5}>${ssrInterpolate(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value))}+ </div><div class="text-body-1 font-weight-medium" data-v-0f1e31a8${_scopeId5}>${ssrInterpolate(product.title)}</div>`);
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          size: "82",
                                          color: product.color,
                                          variant: product.isHover ? "elevated" : "tonal",
                                          class: "mb-6 cursor-pointer",
                                          onMouseenter: () => product.isHover = true,
                                          onMouseleave: ($event) => product.isHover = false
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: product.icon,
                                              size: "42"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "variant", "onMouseenter", "onMouseleave"]),
                                        createVNode("div", { class: "product-stat-text" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value)) + "+ ", 1),
                                        createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardText, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, {
                                        size: "82",
                                        color: product.color,
                                        variant: product.isHover ? "elevated" : "tonal",
                                        class: "mb-6 cursor-pointer",
                                        onMouseenter: () => product.isHover = true,
                                        onMouseleave: ($event) => product.isHover = false
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: product.icon,
                                            size: "42"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "variant", "onMouseenter", "onMouseleave"]),
                                      createVNode("div", { class: "product-stat-text" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value)) + "+ ", 1),
                                      createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, {
                                      size: "82",
                                      color: product.color,
                                      variant: product.isHover ? "elevated" : "tonal",
                                      class: "mb-6 cursor-pointer",
                                      onMouseenter: () => product.isHover = true,
                                      onMouseleave: ($event) => product.isHover = false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: product.icon,
                                          size: "42"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "variant", "onMouseenter", "onMouseleave"]),
                                    createVNode("div", { class: "product-stat-text" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value)) + "+ ", 1),
                                    createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.title), 1)
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(statData), (product, index) => {
                      return openBlock(), createBlock(VCol, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "82",
                                    color: product.color,
                                    variant: product.isHover ? "elevated" : "tonal",
                                    class: "mb-6 cursor-pointer",
                                    onMouseenter: () => product.isHover = true,
                                    onMouseleave: ($event) => product.isHover = false
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: product.icon,
                                        size: "42"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "variant", "onMouseenter", "onMouseleave"]),
                                  createVNode("div", { class: "product-stat-text" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value)) + "+ ", 1),
                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(statData), (product, index) => {
                      return openBlock(), createBlock(VCol, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "82",
                                    color: product.color,
                                    variant: product.isHover ? "elevated" : "tonal",
                                    class: "mb-6 cursor-pointer",
                                    onMouseenter: () => product.isHover = true,
                                    onMouseleave: ($event) => product.isHover = false
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: product.icon,
                                        size: "42"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "variant", "onMouseenter", "onMouseleave"]),
                                  createVNode("div", { class: "product-stat-text" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(product.value)) + "+ ", 1),
                                  createVNode("div", { class: "text-body-1 font-weight-medium" }, toDisplayString(product.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front-pages/landing-page/product-stats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductStats = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f1e31a8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useConfigStore();
    store.skin = "default";
    const activeSectionId = ref();
    const refHome = ref();
    const refFeatures = ref();
    const refTeam = ref();
    const refContact = ref();
    const refFaq = ref();
    useIntersectionObserver([
      refHome,
      refFeatures,
      refTeam,
      refContact,
      refFaq
    ], ([{ isIntersecting, target }]) => {
      if (isIntersecting)
        activeSectionId.value = target.id;
    }, { threshold: 0.25 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(Navbar, { "active-id": unref(activeSectionId) }, null, _parent));
      _push(ssrRenderComponent(HeroSection, {
        ref_key: "refHome",
        ref: refHome
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "background-color": "rgb(var(--v-theme-surface))" })}">`);
      _push(ssrRenderComponent(Features, {
        ref_key: "refFeatures",
        ref: refFeatures
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(CustomersReview, null, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "background-color": "rgb(var(--v-theme-surface))" })}">`);
      _push(ssrRenderComponent(OurTeam, {
        ref_key: "refTeam",
        ref: refTeam
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(PricingPlans, null, null, _parent));
      _push(ssrRenderComponent(ProductStats, null, null, _parent));
      _push(ssrRenderComponent(FaqSection, {
        ref_key: "refFaq",
        ref: refFaq
      }, null, _parent));
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(ContactUs, {
        ref_key: "refContact",
        ref: refContact
      }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/front-pages/landing-page/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
