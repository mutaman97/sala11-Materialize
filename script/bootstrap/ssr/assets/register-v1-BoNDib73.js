import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { _ as _sfc_main$1 } from "./AuthProvider-e5eLTwQw.js";
import { a as authV1RegisterMaskDark, b as authV1RegisterMaskLight } from "./auth-v1-register-mask-light-Df6G7hxY.js";
import { z as VNodeRenderer, B as themeConfig, V as VBtn } from "../ssr.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
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
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
const _sfc_main = {
  __name: "register-v1",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      username: "",
      email: "",
      password: "",
      privacyPolicies: false
    });
    const authV1ThemeRegisterMask = useGenerateImageVariant(authV1RegisterMaskLight, authV1RegisterMaskDark);
    const isPasswordVisible = ref(false);
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
                  _push3(`<h4 class="text-h4 mb-1"${_scopeId2}> Adventure starts here 🚀 </h4><p class="mb-0"${_scopeId2}> Make your app management easy and fun! </p>`);
                } else {
                  return [
                    createVNode("h4", { class: "text-h4 mb-1" }, " Adventure starts here 🚀 "),
                    createVNode("p", { class: "mb-0" }, " Make your app management easy and fun! ")
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
                                      modelValue: unref(form).username,
                                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                      autofocus: "",
                                      label: "Username",
                                      placeholder: "johnDoe"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).username,
                                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                        autofocus: "",
                                        label: "Username",
                                        placeholder: "johnDoe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      label: "Email",
                                      type: "email",
                                      placeholder: "johndoe@email.com"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        label: "Email",
                                        type: "email",
                                        placeholder: "johndoe@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).password,
                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                      label: "Password",
                                      placeholder: "············",
                                      type: unref(isPasswordVisible) ? "text" : "password",
                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex align-center my-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      id: "privacy-policy",
                                      modelValue: unref(form).privacyPolicies,
                                      "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                      inline: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VLabel, {
                                      for: "privacy-policy",
                                      style: { "opacity": "1" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="me-1 text-high-emphasis"${_scopeId6}>I agree to</span><a href="javascript:void(0)" class="text-primary"${_scopeId6}>privacy policy &amp; terms</a>`);
                                        } else {
                                          return [
                                            createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                            createVNode("a", {
                                              href: "javascript:void(0)",
                                              class: "text-primary"
                                            }, "privacy policy & terms")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Sign up `);
                                        } else {
                                          return [
                                            createTextVNode(" Sign up ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                                      createVNode("div", { class: "d-flex align-center my-6" }, [
                                        createVNode(VCheckbox, {
                                          id: "privacy-policy",
                                          modelValue: unref(form).privacyPolicies,
                                          "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                          inline: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VLabel, {
                                          for: "privacy-policy",
                                          style: { "opacity": "1" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                            createVNode("a", {
                                              href: "javascript:void(0)",
                                              class: "text-primary"
                                            }, "privacy policy & terms")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Sign up ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center text-base"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Already have an account?</span>`);
                                    _push6(ssrRenderComponent(_component_RouterLink, {
                                      class: "text-primary ms-2",
                                      to: { name: "pages-authentication-login-v1" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Sign in instead `);
                                        } else {
                                          return [
                                            createTextVNode(" Sign in instead ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", null, "Already have an account?"),
                                      createVNode(_component_RouterLink, {
                                        class: "text-primary ms-2",
                                        to: { name: "pages-authentication-login-v1" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Sign in instead ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                    _push6(`<span class="mx-4 text-high-emphasis"${_scopeId5}>or</span>`);
                                    _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VDivider),
                                      createVNode("span", { class: "mx-4 text-high-emphasis" }, "or"),
                                      createVNode(VDivider)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1)
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
                                      modelValue: unref(form).username,
                                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                      autofocus: "",
                                      label: "Username",
                                      placeholder: "johnDoe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
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
                                    createVNode("div", { class: "d-flex align-center my-6" }, [
                                      createVNode(VCheckbox, {
                                        id: "privacy-policy",
                                        modelValue: unref(form).privacyPolicies,
                                        "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                        inline: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VLabel, {
                                        for: "privacy-policy",
                                        style: { "opacity": "1" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                          createVNode("a", {
                                            href: "javascript:void(0)",
                                            class: "text-primary"
                                          }, "privacy policy & terms")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Sign up ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center text-base"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Already have an account?"),
                                    createVNode(_component_RouterLink, {
                                      class: "text-primary ms-2",
                                      to: { name: "pages-authentication-login-v1" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Sign in instead ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).username,
                                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                    autofocus: "",
                                    label: "Username",
                                    placeholder: "johnDoe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
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
                                  createVNode("div", { class: "d-flex align-center my-6" }, [
                                    createVNode(VCheckbox, {
                                      id: "privacy-policy",
                                      modelValue: unref(form).privacyPolicies,
                                      "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                      inline: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VLabel, {
                                      for: "privacy-policy",
                                      style: { "opacity": "1" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                        createVNode("a", {
                                          href: "javascript:void(0)",
                                          class: "text-primary"
                                        }, "privacy policy & terms")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign up ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center text-base"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Already have an account?"),
                                  createVNode(_component_RouterLink, {
                                    class: "text-primary ms-2",
                                    to: { name: "pages-authentication-login-v1" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign in instead ")
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
                                  modelValue: unref(form).username,
                                  "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                  autofocus: "",
                                  label: "Username",
                                  placeholder: "johnDoe"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
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
                                createVNode("div", { class: "d-flex align-center my-6" }, [
                                  createVNode(VCheckbox, {
                                    id: "privacy-policy",
                                    modelValue: unref(form).privacyPolicies,
                                    "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                    inline: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VLabel, {
                                    for: "privacy-policy",
                                    style: { "opacity": "1" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                      createVNode("a", {
                                        href: "javascript:void(0)",
                                        class: "text-primary"
                                      }, "privacy policy & terms")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Sign up ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center text-base"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Already have an account?"),
                                createVNode(_component_RouterLink, {
                                  class: "text-primary ms-2",
                                  to: { name: "pages-authentication-login-v1" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Sign in instead ")
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
                  createVNode("h4", { class: "text-h4 mb-1" }, " Adventure starts here 🚀 "),
                  createVNode("p", { class: "mb-0" }, " Make your app management easy and fun! ")
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
                                modelValue: unref(form).username,
                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                autofocus: "",
                                label: "Username",
                                placeholder: "johnDoe"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
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
                              createVNode("div", { class: "d-flex align-center my-6" }, [
                                createVNode(VCheckbox, {
                                  id: "privacy-policy",
                                  modelValue: unref(form).privacyPolicies,
                                  "onUpdate:modelValue": ($event) => unref(form).privacyPolicies = $event,
                                  inline: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VLabel, {
                                  for: "privacy-policy",
                                  style: { "opacity": "1" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "me-1 text-high-emphasis" }, "I agree to"),
                                    createVNode("a", {
                                      href: "javascript:void(0)",
                                      class: "text-primary"
                                    }, "privacy policy & terms")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sign up ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center text-base"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Already have an account?"),
                              createVNode(_component_RouterLink, {
                                class: "text-primary ms-2",
                                to: { name: "pages-authentication-login-v1" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sign in instead ")
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
      }, _parent));
      _push(ssrRenderComponent(VImg, {
        src: unref(authV1ThemeRegisterMask),
        class: "d-none d-md-block auth-footer-mask flip-in-rtl"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/register-v1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
