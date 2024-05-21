import { ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, isRef, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { a as authV2RegisterMaskDark, b as authV2RegisterMaskLight } from "./auth-v2-register-mask-light-HwQrDl0S.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VOtpInput } from "./VOtpInput-_4snpP1G.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
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
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./VField-DXNiYeaA.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
const authV2TwoStepsIllustrationBorderedDark = "/build/assets/auth-v2-two-steps-illustration-bordered-dark-DxgFA5mM.png";
const authV2TwoStepsIllustrationBorderedLight = "/build/assets/auth-v2-two-steps-illustration-bordered-light-BW0T_2g1.png";
const authV2TwoStepsIllustrationDark = "/build/assets/auth-v2-two-steps-illustration-dark-BXN5c2j4.png";
const authV2TwoStepsIllustrationLight = "/build/assets/auth-v2-two-steps-illustration-light-CyskPSuf.png";
const _sfc_main = {
  __name: "two-steps-v2",
  __ssrInlineRender: true,
  setup(__props) {
    const authV2ThemeTwoStepMask = useGenerateImageVariant(authV2RegisterMaskLight, authV2RegisterMaskDark);
    const authV2TwoStepsIllustration = useGenerateImageVariant(authV2TwoStepsIllustrationLight, authV2TwoStepsIllustrationDark, authV2TwoStepsIllustrationBorderedLight, authV2TwoStepsIllustrationBorderedDark, true);
    const router = useRouter();
    const otp = ref("");
    const isOtpInserted = ref(false);
    const onFinish = () => {
      isOtpInserted.value = true;
      setTimeout(() => {
        isOtpInserted.value = false;
        router.push("/");
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="app-logo auth-logo"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VNodeRenderer), {
              nodes: unref(themeConfig).app.logo
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="app-logo-title"${_scopeId}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div>`);
          } else {
            return [
              createVNode("div", { class: "app-logo auth-logo" }, [
                createVNode(unref(VNodeRenderer), {
                  nodes: unref(themeConfig).app.logo
                }, null, 8, ["nodes"]),
                createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, {
        class: "auth-wrapper",
        "no-gutters": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              md: "8",
              class: "d-none d-md-flex align-center justify-center position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center pa-10"${_scopeId2}><img${ssrRenderAttr("src", unref(authV2TwoStepsIllustration))} class="auth-illustration w-100" alt="auth-illustration"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(authV2ThemeTwoStepMask),
                    class: "d-none d-md-flex auth-footer-mask",
                    alt: "auth-mask"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                      createVNode("img", {
                        src: unref(authV2TwoStepsIllustration),
                        class: "auth-illustration w-100",
                        alt: "auth-illustration"
                      }, null, 8, ["src"])
                    ]),
                    createVNode(VImg, {
                      src: unref(authV2ThemeTwoStepMask),
                      class: "d-none d-md-flex auth-footer-mask",
                      alt: "auth-mask"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4",
              class: "auth-card-v2 d-flex align-center justify-center",
              style: { "background-color": "rgb(var(--v-theme-surface))" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4 mb-1"${_scopeId4}> Two Step Verification 💬 </h4><p class="mb-1"${_scopeId4}> We sent a verification code to your mobile. Enter the code from the mobile in the field below. </p><h6 class="text-h6"${_scopeId4}> ******1234 </h6>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                                createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                                createVNode("h6", { class: "text-h6" }, " ******1234 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: () => {
                              } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h6 class="text-body-1"${_scopeId5}> Type your 6 digit security code </h6>`);
                                    _push6(ssrRenderComponent(VOtpInput, {
                                      modelValue: unref(otp),
                                      "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                      disabled: unref(isOtpInserted),
                                      type: "number",
                                      autofocus: "",
                                      class: "pa-0",
                                      onFinish
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      loading: unref(isOtpInserted),
                                      disabled: unref(isOtpInserted),
                                      block: "",
                                      type: "submit",
                                      class: "mt-3 mb-5"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Verify my account `);
                                        } else {
                                          return [
                                            createTextVNode(" Verify my account ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-center align-center flex-wrap"${_scopeId5}><span class="me-1"${_scopeId5}>Didn&#39;t get the code?</span><a href="#"${_scopeId5}>Resend</a></div>`);
                                  } else {
                                    return [
                                      createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                                      createVNode(VOtpInput, {
                                        modelValue: unref(otp),
                                        "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                        disabled: unref(isOtpInserted),
                                        type: "number",
                                        autofocus: "",
                                        class: "pa-0",
                                        onFinish
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                      createVNode(VBtn, {
                                        loading: unref(isOtpInserted),
                                        disabled: unref(isOtpInserted),
                                        block: "",
                                        type: "submit",
                                        class: "mt-3 mb-5"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Verify my account ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading", "disabled"]),
                                      createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                                        createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                                        createVNode("a", { href: "#" }, "Resend")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                                    createVNode(VOtpInput, {
                                      modelValue: unref(otp),
                                      "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                      disabled: unref(isOtpInserted),
                                      type: "number",
                                      autofocus: "",
                                      class: "pa-0",
                                      onFinish
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                    createVNode(VBtn, {
                                      loading: unref(isOtpInserted),
                                      disabled: unref(isOtpInserted),
                                      block: "",
                                      type: "submit",
                                      class: "mt-3 mb-5"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Verify my account ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading", "disabled"]),
                                    createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                                      createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                                      createVNode("a", { href: "#" }, "Resend")
                                    ])
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                              createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                              createVNode("h6", { class: "text-h6" }, " ******1234 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                                  createVNode(VOtpInput, {
                                    modelValue: unref(otp),
                                    "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                    disabled: unref(isOtpInserted),
                                    type: "number",
                                    autofocus: "",
                                    class: "pa-0",
                                    onFinish
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                  createVNode(VBtn, {
                                    loading: unref(isOtpInserted),
                                    disabled: unref(isOtpInserted),
                                    block: "",
                                    type: "submit",
                                    class: "mt-3 mb-5"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Verify my account ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading", "disabled"]),
                                  createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                                    createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                                    createVNode("a", { href: "#" }, "Resend")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      "max-width": 500,
                      class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                            createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                            createVNode("h6", { class: "text-h6" }, " ******1234 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                                createVNode(VOtpInput, {
                                  modelValue: unref(otp),
                                  "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                  disabled: unref(isOtpInserted),
                                  type: "number",
                                  autofocus: "",
                                  class: "pa-0",
                                  onFinish
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                createVNode(VBtn, {
                                  loading: unref(isOtpInserted),
                                  disabled: unref(isOtpInserted),
                                  block: "",
                                  type: "submit",
                                  class: "mt-3 mb-5"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Verify my account ")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "disabled"]),
                                createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                                  createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                                  createVNode("a", { href: "#" }, "Resend")
                                ])
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
          } else {
            return [
              createVNode(VCol, {
                md: "8",
                class: "d-none d-md-flex align-center justify-center position-relative"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                    createVNode("img", {
                      src: unref(authV2TwoStepsIllustration),
                      class: "auth-illustration w-100",
                      alt: "auth-illustration"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(VImg, {
                    src: unref(authV2ThemeTwoStepMask),
                    class: "d-none d-md-flex auth-footer-mask",
                    alt: "auth-mask"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4",
                class: "auth-card-v2 d-flex align-center justify-center",
                style: { "background-color": "rgb(var(--v-theme-surface))" }
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    "max-width": 500,
                    class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4 mb-1" }, " Two Step Verification 💬 "),
                          createVNode("p", { class: "mb-1" }, " We sent a verification code to your mobile. Enter the code from the mobile in the field below. "),
                          createVNode("h6", { class: "text-h6" }, " ******1234 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-body-1" }, " Type your 6 digit security code "),
                              createVNode(VOtpInput, {
                                modelValue: unref(otp),
                                "onUpdate:modelValue": ($event) => isRef(otp) ? otp.value = $event : null,
                                disabled: unref(isOtpInserted),
                                type: "number",
                                autofocus: "",
                                class: "pa-0",
                                onFinish
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(VBtn, {
                                loading: unref(isOtpInserted),
                                disabled: unref(isOtpInserted),
                                block: "",
                                type: "submit",
                                class: "mt-3 mb-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Verify my account ")
                                ]),
                                _: 1
                              }, 8, ["loading", "disabled"]),
                              createVNode("div", { class: "d-flex justify-center align-center flex-wrap" }, [
                                createVNode("span", { class: "me-1" }, "Didn't get the code?"),
                                createVNode("a", { href: "#" }, "Resend")
                              ])
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/two-steps-v2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
