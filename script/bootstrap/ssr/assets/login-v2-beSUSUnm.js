import { ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { _ as _sfc_main$1 } from "./AuthProvider-e5eLTwQw.js";
import { a as authV2LoginIllustrationBorderedDark, b as authV2LoginIllustrationBorderedLight, c as authV2LoginIllustrationDark, d as authV2LoginIllustrationLight } from "./auth-v2-login-illustration-light-CYy-MZDB.js";
import { a as authV2LoginMaskDark, b as authV2LoginMaskLight } from "./auth-v2-login-mask-light-C0LV4kb_.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
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
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
const _sfc_main = {
  __name: "login-v2",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      email: "",
      password: "",
      remember: false
    });
    const isPasswordVisible = ref(false);
    const authV2LoginMask = useGenerateImageVariant(authV2LoginMaskLight, authV2LoginMaskDark);
    const authV2LoginIllustration = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true);
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
        "no-gutters": "",
        class: "auth-wrapper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              md: "8",
              class: "d-none d-md-flex align-center justify-center position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-center pa-10"${_scopeId2}><img${ssrRenderAttr("src", unref(authV2LoginIllustration))} class="auth-illustration w-100" alt="auth-illustration"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(authV2LoginMask),
                    class: "d-none d-md-flex auth-footer-mask",
                    alt: "auth-mask"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                      createVNode("img", {
                        src: unref(authV2LoginIllustration),
                        class: "auth-illustration w-100",
                        alt: "auth-illustration"
                      }, null, 8, ["src"])
                    ]),
                    createVNode(VImg, {
                      src: unref(authV2LoginMask),
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
                              _push5(`<h4 class="text-h4 mb-1"${_scopeId4}> Welcome to <span class="text-capitalize"${_scopeId4}>${ssrInterpolate(unref(themeConfig).app.title)}! 👋🏻</span></h4><p class="mb-0"${_scopeId4}> Please sign-in to your account and start the adventure </p>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4 mb-1" }, [
                                  createTextVNode(" Welcome to "),
                                  createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title) + "! 👋🏻", 1)
                                ]),
                                createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
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
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(form).email,
                                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                  autofocus: "",
                                                  label: "Email",
                                                  type: "email",
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).email,
                                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                    autofocus: "",
                                                    label: "Email",
                                                    type: "email",
                                                    placeholder: "johndoe@email.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(form).password,
                                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="d-flex align-center justify-space-between flex-wrap my-6 gap-x-2"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: unref(form).remember,
                                                  "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                                  label: "Remember me"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_RouterLink, {
                                                  class: "text-primary",
                                                  to: { name: "pages-authentication-forgot-password-v2" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Forgot Password? `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Forgot Password? ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  block: "",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Login `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Login ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).password,
                                                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                    label: "Password",
                                                    placeholder: "············",
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                  createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                                    createVNode(VCheckbox, {
                                                      modelValue: unref(form).remember,
                                                      "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                                      label: "Remember me"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_RouterLink, {
                                                      class: "text-primary",
                                                      to: { name: "pages-authentication-forgot-password-v2" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Forgot Password? ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode(VBtn, {
                                                    block: "",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Login ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "text-body-1 text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="d-inline-block"${_scopeId7}> New on our platform? </span>`);
                                                _push8(ssrRenderComponent(_component_RouterLink, {
                                                  class: "text-primary ms-1 d-inline-block text-body-1",
                                                  to: { name: "pages-authentication-register-v2" }
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Create an account `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Create an account ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                                  createVNode(_component_RouterLink, {
                                                    class: "text-primary ms-1 d-inline-block text-body-1",
                                                    to: { name: "pages-authentication-register-v2" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Create an account ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex align-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                                _push8(`<span class="mx-4 text-high-emphasis"${_scopeId7}>or</span>`);
                                                _push8(ssrRenderComponent(VDivider, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VDivider),
                                                  createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                                  createVNode(VDivider)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_sfc_main$1, null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_sfc_main$1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).email,
                                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                  autofocus: "",
                                                  label: "Email",
                                                  type: "email",
                                                  placeholder: "johndoe@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).password,
                                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                                  createVNode(VCheckbox, {
                                                    modelValue: unref(form).remember,
                                                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                                    label: "Remember me"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_RouterLink, {
                                                    class: "text-primary",
                                                    to: { name: "pages-authentication-forgot-password-v2" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Forgot Password? ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode(VBtn, {
                                                  block: "",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Login ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "text-body-1 text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                                createVNode(_component_RouterLink, {
                                                  class: "text-primary ms-1 d-inline-block text-body-1",
                                                  to: { name: "pages-authentication-register-v2" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Create an account ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex align-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VDivider),
                                                createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                                createVNode(VDivider)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$1)
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).email,
                                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                autofocus: "",
                                                label: "Email",
                                                type: "email",
                                                placeholder: "johndoe@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).password,
                                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                label: "Password",
                                                placeholder: "············",
                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                              createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                                createVNode(VCheckbox, {
                                                  modelValue: unref(form).remember,
                                                  "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                                  label: "Remember me"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_RouterLink, {
                                                  class: "text-primary",
                                                  to: { name: "pages-authentication-forgot-password-v2" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Forgot Password? ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VBtn, {
                                                block: "",
                                                type: "submit"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Login ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-body-1 text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                              createVNode(_component_RouterLink, {
                                                class: "text-primary ms-1 d-inline-block text-body-1",
                                                to: { name: "pages-authentication-register-v2" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Create an account ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex align-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VDivider),
                                              createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                              createVNode(VDivider)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$1)
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
                                createVNode(VForm, {
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).email,
                                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                              autofocus: "",
                                              label: "Email",
                                              type: "email",
                                              placeholder: "johndoe@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).password,
                                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                              label: "Password",
                                              placeholder: "············",
                                              type: unref(isPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                            createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                              createVNode(VCheckbox, {
                                                modelValue: unref(form).remember,
                                                "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                                label: "Remember me"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_RouterLink, {
                                                class: "text-primary",
                                                to: { name: "pages-authentication-forgot-password-v2" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Forgot Password? ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(VBtn, {
                                              block: "",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Login ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "text-body-1 text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                            createVNode(_component_RouterLink, {
                                              class: "text-primary ms-1 d-inline-block text-body-1",
                                              to: { name: "pages-authentication-register-v2" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Create an account ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex align-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VDivider),
                                            createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                            createVNode(VDivider)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$1)
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
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 mb-1" }, [
                                createTextVNode(" Welcome to "),
                                createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title) + "! 👋🏻", 1)
                              ]),
                              createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
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
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            autofocus: "",
                                            label: "Email",
                                            type: "email",
                                            placeholder: "johndoe@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).password,
                                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                            label: "Password",
                                            placeholder: "············",
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                          createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                            createVNode(VCheckbox, {
                                              modelValue: unref(form).remember,
                                              "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                              label: "Remember me"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_RouterLink, {
                                              class: "text-primary",
                                              to: { name: "pages-authentication-forgot-password-v2" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Forgot Password? ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(VBtn, {
                                            block: "",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Login ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-body-1 text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                          createVNode(_component_RouterLink, {
                                            class: "text-primary ms-1 d-inline-block text-body-1",
                                            to: { name: "pages-authentication-register-v2" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Create an account ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VDivider),
                                          createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                          createVNode(VDivider)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1)
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
                    createVNode(VCard, {
                      flat: "",
                      "max-width": 500,
                      class: "mt-12 mt-sm-0 pa-5 pa-lg-7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4 mb-1" }, [
                              createTextVNode(" Welcome to "),
                              createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title) + "! 👋🏻", 1)
                            ]),
                            createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).email,
                                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                          autofocus: "",
                                          label: "Email",
                                          type: "email",
                                          placeholder: "johndoe@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).password,
                                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                          label: "Password",
                                          placeholder: "············",
                                          type: unref(isPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                        createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                          createVNode(VCheckbox, {
                                            modelValue: unref(form).remember,
                                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                            label: "Remember me"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_RouterLink, {
                                            class: "text-primary",
                                            to: { name: "pages-authentication-forgot-password-v2" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Forgot Password? ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(VBtn, {
                                          block: "",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Login ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-body-1 text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                        createVNode(_component_RouterLink, {
                                          class: "text-primary ms-1 d-inline-block text-body-1",
                                          to: { name: "pages-authentication-register-v2" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Create an account ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VDivider),
                                        createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                        createVNode(VDivider)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1)
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
          } else {
            return [
              createVNode(VCol, {
                md: "8",
                class: "d-none d-md-flex align-center justify-center position-relative"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-center pa-10" }, [
                    createVNode("img", {
                      src: unref(authV2LoginIllustration),
                      class: "auth-illustration w-100",
                      alt: "auth-illustration"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(VImg, {
                    src: unref(authV2LoginMask),
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
                          createVNode("h4", { class: "text-h4 mb-1" }, [
                            createTextVNode(" Welcome to "),
                            createVNode("span", { class: "text-capitalize" }, toDisplayString(unref(themeConfig).app.title) + "! 👋🏻", 1)
                          ]),
                          createVNode("p", { class: "mb-0" }, " Please sign-in to your account and start the adventure ")
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
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        autofocus: "",
                                        label: "Email",
                                        type: "email",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).password,
                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                        label: "Password",
                                        placeholder: "············",
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                      createVNode("div", { class: "d-flex align-center justify-space-between flex-wrap my-6 gap-x-2" }, [
                                        createVNode(VCheckbox, {
                                          modelValue: unref(form).remember,
                                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                                          label: "Remember me"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_RouterLink, {
                                          class: "text-primary",
                                          to: { name: "pages-authentication-forgot-password-v2" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Forgot Password? ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Login ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-body-1 text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "d-inline-block" }, " New on our platform? "),
                                      createVNode(_component_RouterLink, {
                                        class: "text-primary ms-1 d-inline-block text-body-1",
                                        to: { name: "pages-authentication-register-v2" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create an account ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VDivider),
                                      createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                      createVNode(VDivider)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/login-v2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
