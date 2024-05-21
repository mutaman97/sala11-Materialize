import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
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
import "./VAvatar-D2wIwigQ.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
const authV1ResetPasswordMaskDark = "/build/assets/auth-v1-reset-password-mask-dark-CDZPByqu.png";
const authV1ResetPasswordMaskLight = "/build/assets/auth-v1-reset-password-mask-light-BSk2kjPD.png";
const _sfc_main = {
  __name: "reset-password-v1",
  __ssrInlineRender: true,
  setup(__props) {
    const authV1ResetPasswordMask = useGenerateImageVariant(authV1ResetPasswordMaskLight, authV1ResetPasswordMaskDark);
    const form = ref({
      newPassword: "",
      confirmPassword: ""
    });
    const isPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-wrapper d-flex align-center justify-center pa-4" }, _attrs))}>`);
      _push(ssrRenderComponent(VCard, {
        class: "auth-card pa-1 pa-sm-7",
        "max-width": "448"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, { class: "justify-center pb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="app-logo"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, _parent5, _scopeId4));
                              _push5(`<h1 class="app-logo-title"${_scopeId4}>${ssrInterpolate(unref(themeConfig).app.title)}</h1></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "app-logo" }, [
                                  createVNode(unref(VNodeRenderer), {
                                    nodes: unref(themeConfig).app.logo
                                  }, null, 8, ["nodes"]),
                                  createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_RouterLink, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "app-logo" }, [
                                createVNode(unref(VNodeRenderer), {
                                  nodes: unref(themeConfig).app.logo
                                }, null, 8, ["nodes"]),
                                createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode(_component_RouterLink, { to: "/" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "app-logo" }, [
                              createVNode(unref(VNodeRenderer), {
                                nodes: unref(themeConfig).app.logo
                              }, null, 8, ["nodes"]),
                              createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
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
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h4 mb-1"${_scopeId2}> Reset Password 🔒 </h4><p class="mb-0"${_scopeId2}> Enter your email and we&#39;ll send you instructions to reset your password </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mb-1" }, " Reset Password 🔒 "),
                    createVNode("p", { class: "mb-0" }, " Enter your email and we'll send you instructions to reset your password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).newPassword,
                                      "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                      autofocus: "",
                                      label: "New Password",
                                      placeholder: "············",
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).newPassword,
                                        "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                        autofocus: "",
                                        label: "New Password",
                                        placeholder: "············",
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).confirmPassword,
                                      "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                      label: "Confirm Password",
                                      placeholder: "············",
                                      type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).confirmPassword,
                                        "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Set New Password `);
                                        } else {
                                          return [
                                            createTextVNode(" Set New Password ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Set New Password ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_RouterLink, {
                                      class: "d-flex align-center justify-center",
                                      to: { name: "pages-authentication-login-v1" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            size: "20",
                                            icon: "ri-arrow-left-s-line",
                                            class: "flip-in-rtl"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<span class="text-base"${_scopeId6}>Back to login</span>`);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              start: "",
                                              size: "20",
                                              icon: "ri-arrow-left-s-line",
                                              class: "flip-in-rtl"
                                            }),
                                            createVNode("span", { class: "text-base" }, "Back to login")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_RouterLink, {
                                        class: "d-flex align-center justify-center",
                                        to: { name: "pages-authentication-login-v1" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            start: "",
                                            size: "20",
                                            icon: "ri-arrow-left-s-line",
                                            class: "flip-in-rtl"
                                          }),
                                          createVNode("span", { class: "text-base" }, "Back to login")
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
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).newPassword,
                                      "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                      autofocus: "",
                                      label: "New Password",
                                      placeholder: "············",
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).confirmPassword,
                                      "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                      label: "Confirm Password",
                                      placeholder: "············",
                                      type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Set New Password ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RouterLink, {
                                      class: "d-flex align-center justify-center",
                                      to: { name: "pages-authentication-login-v1" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          start: "",
                                          size: "20",
                                          icon: "ri-arrow-left-s-line",
                                          class: "flip-in-rtl"
                                        }),
                                        createVNode("span", { class: "text-base" }, "Back to login")
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
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).newPassword,
                                    "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                    autofocus: "",
                                    label: "New Password",
                                    placeholder: "············",
                                    type: unref(isPasswordVisible) ? "text" : "password",
                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).confirmPassword,
                                    "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                    label: "Confirm Password",
                                    placeholder: "············",
                                    type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                    "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                    "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Set New Password ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_RouterLink, {
                                    class: "d-flex align-center justify-center",
                                    to: { name: "pages-authentication-login-v1" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        size: "20",
                                        icon: "ri-arrow-left-s-line",
                                        class: "flip-in-rtl"
                                      }),
                                      createVNode("span", { class: "text-base" }, "Back to login")
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
                                  modelValue: unref(form).newPassword,
                                  "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                  autofocus: "",
                                  label: "New Password",
                                  placeholder: "············",
                                  type: unref(isPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(form).confirmPassword,
                                  "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                  label: "Confirm Password",
                                  placeholder: "············",
                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Set New Password ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_RouterLink, {
                                  class: "d-flex align-center justify-center",
                                  to: { name: "pages-authentication-login-v1" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      size: "20",
                                      icon: "ri-arrow-left-s-line",
                                      class: "flip-in-rtl"
                                    }),
                                    createVNode("span", { class: "text-base" }, "Back to login")
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
              createVNode(VCardItem, { class: "justify-center pb-6" }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(_component_RouterLink, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "app-logo" }, [
                            createVNode(unref(VNodeRenderer), {
                              nodes: unref(themeConfig).app.logo
                            }, null, 8, ["nodes"]),
                            createVNode("h1", { class: "app-logo-title" }, toDisplayString(unref(themeConfig).app.title), 1)
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h4 mb-1" }, " Reset Password 🔒 "),
                  createVNode("p", { class: "mb-0" }, " Enter your email and we'll send you instructions to reset your password ")
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
                                modelValue: unref(form).newPassword,
                                "onUpdate:modelValue": ($event) => unref(form).newPassword = $event,
                                autofocus: "",
                                label: "New Password",
                                placeholder: "············",
                                type: unref(isPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).confirmPassword,
                                "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                label: "Confirm Password",
                                placeholder: "············",
                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Set New Password ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_RouterLink, {
                                class: "d-flex align-center justify-center",
                                to: { name: "pages-authentication-login-v1" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    size: "20",
                                    icon: "ri-arrow-left-s-line",
                                    class: "flip-in-rtl"
                                  }),
                                  createVNode("span", { class: "text-base" }, "Back to login")
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
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1ResetPasswordMask),
        class: "d-none d-md-block auth-footer-mask flip-in-rtl"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/reset-password-v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
