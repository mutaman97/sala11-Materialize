import { _ as __unplugin_components_0 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { _ as _sfc_main$1 } from "./AppStepper-DSePPp52.js";
import { ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, isRef, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { z as VNodeRenderer, B as themeConfig, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VSlideGroupItem-CIJ0uuo8.js";
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
import "./VCardText-C84ViOu1.js";
import "./lazy-kVEey9ha.js";
import "./ssrBoot-Co4_dNdy.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VList-Bay5Fixr.js";
import "./VDivider-o5iRKh3w.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VChip-BFfBWJ68.js";
const registerMultiStepsIllustration = "/build/assets/register-multi-step-illustration-MwUmPZDV.png";
const _sfc_main = {
  __name: "register-multi-steps",
  __ssrInlineRender: true,
  setup(__props) {
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const radioContent = [
      {
        title: "Basic",
        desc: "A simple start for Startups and Students.",
        value: "0"
      },
      {
        title: "Standard",
        desc: "For small to medium businesses.",
        value: "99"
      },
      {
        title: "Enterprise",
        desc: "Solution for enterprise & organizations.",
        value: "499"
      }
    ];
    const items = [
      {
        title: "Account",
        subtitle: "Account Details"
      },
      {
        title: "Personal",
        subtitle: "Enter Information"
      },
      {
        title: "Billing",
        subtitle: "Payment Details"
      }
    ];
    const form = ref({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      link: "",
      firstName: "",
      lastName: "",
      mobile: "",
      pincode: "",
      address: "",
      landmark: "",
      city: "",
      state: null,
      selectedPlan: "0",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: ""
    });
    const onSubmit = () => {
      alert("Submitted..!!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AppStepper = _sfc_main$1;
      const _component_CustomRadiosWithIcon = __unplugin_components_0;
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
              md: "4",
              class: "d-none d-md-flex align-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(registerMultiStepsIllustration),
                    class: "auth-illustration",
                    height: "560px"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: unref(registerMultiStepsIllustration),
                      class: "auth-illustration",
                      height: "560px"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              class: "auth-card-v2 d-flex align-center justify-center pa-10",
              style: { "background-color": "rgb(var(--v-theme-surface))" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    class: "mt-12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppStepper, {
                          "current-step": unref(currentStep),
                          "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          items,
                          direction: _ctx.$vuetify.display.smAndUp ? "horizontal" : "vertical",
                          class: "mb-12"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindow, {
                          modelValue: unref(currentStep),
                          "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          class: "disable-tab-transition",
                          style: { "max-inline-size": "685px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h4 mb-1"${_scopeId6}> Account Information </h4><p class="text-body-1 mb-5"${_scopeId6}> Enter Your Account Details </p>`);
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
                                                        modelValue: unref(form).username,
                                                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                        label: "Username",
                                                        placeholder: "John Doe"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).username,
                                                          "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                          label: "Username",
                                                          placeholder: "John Doe"
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
                                                        modelValue: unref(form).email,
                                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                        label: "Email",
                                                        placeholder: "johndoe@email.com"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).email,
                                                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                          label: "Email",
                                                          placeholder: "johndoe@email.com"
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
                                                        modelValue: unref(form).password,
                                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                        label: "Password",
                                                        placeholder: "Enter Password",
                                                        type: unref(isPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).password,
                                                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                          label: "Password",
                                                          placeholder: "Enter Password",
                                                          type: unref(isPasswordVisible) ? "text" : "password",
                                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                        modelValue: unref(form).confirmPassword,
                                                        "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                        label: "Confirm Password",
                                                        placeholder: "Enter Confirm Password",
                                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).confirmPassword,
                                                          "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                          label: "Confirm Password",
                                                          placeholder: "Enter Confirm Password",
                                                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                          "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).link,
                                                        "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                        label: "Profile Link",
                                                        placeholder: "johndoe/profile",
                                                        type: "url"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).link,
                                                          "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                          label: "Profile Link",
                                                          placeholder: "johndoe/profile",
                                                          type: "url"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                        modelValue: unref(form).username,
                                                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                        label: "Username",
                                                        placeholder: "John Doe"
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
                                                        modelValue: unref(form).email,
                                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                        label: "Email",
                                                        placeholder: "johndoe@email.com"
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
                                                        modelValue: unref(form).password,
                                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                        label: "Password",
                                                        placeholder: "Enter Password",
                                                        type: unref(isPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).confirmPassword,
                                                        "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                        label: "Confirm Password",
                                                        placeholder: "Enter Confirm Password",
                                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).link,
                                                        "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                        label: "Profile Link",
                                                        placeholder: "johndoe/profile",
                                                        type: "url"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                            createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).username,
                                                      "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                      label: "Username",
                                                      placeholder: "John Doe"
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
                                                      modelValue: unref(form).email,
                                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                      label: "Email",
                                                      placeholder: "johndoe@email.com"
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
                                                      modelValue: unref(form).password,
                                                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                      label: "Password",
                                                      placeholder: "Enter Password",
                                                      type: unref(isPasswordVisible) ? "text" : "password",
                                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).confirmPassword,
                                                      "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                      label: "Confirm Password",
                                                      placeholder: "Enter Confirm Password",
                                                      type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                      "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                      "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).link,
                                                      "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                      label: "Profile Link",
                                                      placeholder: "johndoe/profile",
                                                      type: "url"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h4 mb-1"${_scopeId6}> Personal Information </h4><p class="text-body-1 mb-5"${_scopeId6}> Enter Your Personal Information </p>`);
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
                                                        modelValue: unref(form).firstName,
                                                        "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                        label: "First Name",
                                                        placeholder: "John"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).firstName,
                                                          "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                          label: "First Name",
                                                          placeholder: "John"
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
                                                        modelValue: unref(form).lastName,
                                                        "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                        label: "Last Name",
                                                        placeholder: "Doe"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).lastName,
                                                          "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                          label: "Last Name",
                                                          placeholder: "Doe"
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
                                                        modelValue: unref(form).mobile,
                                                        "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                        type: "number",
                                                        label: "Mobile",
                                                        placeholder: "98 7654 3210"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).mobile,
                                                          "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                          type: "number",
                                                          label: "Mobile",
                                                          placeholder: "98 7654 3210"
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
                                                        modelValue: unref(form).pincode,
                                                        "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                        type: "number",
                                                        label: "Pincode",
                                                        placeholder: "123456"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).pincode,
                                                          "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                          type: "number",
                                                          label: "Pincode",
                                                          placeholder: "123456"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).address,
                                                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                        label: "Address",
                                                        placeholder: "1234 Main St, New York, NY 10001, USA"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).address,
                                                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                          label: "Address",
                                                          placeholder: "1234 Main St, New York, NY 10001, USA"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).landmark,
                                                        "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                        label: "Landmark",
                                                        placeholder: "Near Central Park"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).landmark,
                                                          "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                          label: "Landmark",
                                                          placeholder: "Near Central Park"
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
                                                        modelValue: unref(form).city,
                                                        "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                        label: "City",
                                                        placeholder: "New York"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).city,
                                                          "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                          label: "City",
                                                          placeholder: "New York"
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
                                                      _push9(ssrRenderComponent(VSelect, {
                                                        modelValue: unref(form).state,
                                                        "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                        label: "State",
                                                        placeholder: "Select State",
                                                        items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VSelect, {
                                                          modelValue: unref(form).state,
                                                          "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                          label: "State",
                                                          placeholder: "Select State",
                                                          items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                        modelValue: unref(form).firstName,
                                                        "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                        label: "First Name",
                                                        placeholder: "John"
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
                                                        modelValue: unref(form).lastName,
                                                        "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                        label: "Last Name",
                                                        placeholder: "Doe"
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
                                                        modelValue: unref(form).mobile,
                                                        "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                        type: "number",
                                                        label: "Mobile",
                                                        placeholder: "98 7654 3210"
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
                                                        modelValue: unref(form).pincode,
                                                        "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                        type: "number",
                                                        label: "Pincode",
                                                        placeholder: "123456"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).address,
                                                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                        label: "Address",
                                                        placeholder: "1234 Main St, New York, NY 10001, USA"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).landmark,
                                                        "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                        label: "Landmark",
                                                        placeholder: "Near Central Park"
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
                                                        modelValue: unref(form).city,
                                                        "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                        label: "City",
                                                        placeholder: "New York"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        modelValue: unref(form).state,
                                                        "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                        label: "State",
                                                        placeholder: "Select State",
                                                        items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                            createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).firstName,
                                                      "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                      label: "First Name",
                                                      placeholder: "John"
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
                                                      modelValue: unref(form).lastName,
                                                      "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                      label: "Last Name",
                                                      placeholder: "Doe"
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
                                                      modelValue: unref(form).mobile,
                                                      "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                      type: "number",
                                                      label: "Mobile",
                                                      placeholder: "98 7654 3210"
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
                                                      modelValue: unref(form).pincode,
                                                      "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                      type: "number",
                                                      label: "Pincode",
                                                      placeholder: "123456"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).address,
                                                      "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                      label: "Address",
                                                      placeholder: "1234 Main St, New York, NY 10001, USA"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).landmark,
                                                      "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                      label: "Landmark",
                                                      placeholder: "Near Central Park"
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
                                                      modelValue: unref(form).city,
                                                      "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                      label: "City",
                                                      placeholder: "New York"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      modelValue: unref(form).state,
                                                      "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                      label: "State",
                                                      placeholder: "Select State",
                                                      items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    _push6(ssrRenderComponent(VWindowItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h4 mb-1"${_scopeId6}> Select Plan </h4><p class="text-body-1 mb-5"${_scopeId6}> Select plan as per your requirement </p>`);
                                          _push7(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                                            "selected-radio": unref(form).selectedPlan,
                                            "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                            "radio-content": radioContent,
                                            "grid-column": { sm: "4", cols: "12" }
                                          }, {
                                            default: withCtx(({ item }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-center"${_scopeId7}><h6 class="text-h6 mb-2"${_scopeId7}>${ssrInterpolate(item.title)}</h6><p class="clamp-text mb-2 text-sm"${_scopeId7}>${ssrInterpolate(item.desc)}</p><div class="d-flex align-center justify-center"${_scopeId7}><span class="text-primary text-body-2 mb-2"${_scopeId7}>$</span><span class="text-h4 text-primary"${_scopeId7}>${ssrInterpolate(item.value)}</span><span class="mt-2 text-sm"${_scopeId7}>/month</span></div></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-center" }, [
                                                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                                    createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                                    createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                      createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                                      createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                                      createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<h4 class="text-h4 mt-12 mb-1"${_scopeId6}> Payment Information </h4><p class="text-body-1 mb-5"${_scopeId6}> Enter your card information </p>`);
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).cardNumber,
                                                        "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                        type: "number",
                                                        label: "Card Number",
                                                        placeholder: "1234 1234 1234 1234"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).cardNumber,
                                                          "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                          type: "number",
                                                          label: "Card Number",
                                                          placeholder: "1234 1234 1234 1234"
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
                                                        modelValue: unref(form).cardName,
                                                        "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                        label: "Name on Card",
                                                        placeholder: "John Doe"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).cardName,
                                                          "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                          label: "Name on Card",
                                                          placeholder: "John Doe"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).expiryDate,
                                                        "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                        label: "Expiry",
                                                        placeholder: "MM/YY"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).expiryDate,
                                                          "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                          label: "Expiry",
                                                          placeholder: "MM/YY"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(form).cvv,
                                                        "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                        type: "number",
                                                        label: "CVV",
                                                        placeholder: "123"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(form).cvv,
                                                          "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                          type: "number",
                                                          label: "CVV",
                                                          placeholder: "123"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).cardNumber,
                                                        "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                        type: "number",
                                                        label: "Card Number",
                                                        placeholder: "1234 1234 1234 1234"
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
                                                        modelValue: unref(form).cardName,
                                                        "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                        label: "Name on Card",
                                                        placeholder: "John Doe"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).expiryDate,
                                                        "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                        label: "Expiry",
                                                        placeholder: "MM/YY"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(form).cvv,
                                                        "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                        type: "number",
                                                        label: "CVV",
                                                        placeholder: "123"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                            createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                            createVNode(_component_CustomRadiosWithIcon, {
                                              "selected-radio": unref(form).selectedPlan,
                                              "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                              "radio-content": radioContent,
                                              "grid-column": { sm: "4", cols: "12" }
                                            }, {
                                              default: withCtx(({ item }) => [
                                                createVNode("div", { class: "text-center" }, [
                                                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                                  createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                                  createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                    createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                                    createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                                    createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                            createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                            createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).cardNumber,
                                                      "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                      type: "number",
                                                      label: "Card Number",
                                                      placeholder: "1234 1234 1234 1234"
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
                                                      modelValue: unref(form).cardName,
                                                      "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                      label: "Name on Card",
                                                      placeholder: "John Doe"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).expiryDate,
                                                      "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                      label: "Expiry",
                                                      placeholder: "MM/YY"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(form).cvv,
                                                      "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                      type: "number",
                                                      label: "CVV",
                                                      placeholder: "123"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                          createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).username,
                                                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                    label: "Username",
                                                    placeholder: "John Doe"
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
                                                    modelValue: unref(form).email,
                                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                    label: "Email",
                                                    placeholder: "johndoe@email.com"
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
                                                    modelValue: unref(form).password,
                                                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                    label: "Password",
                                                    placeholder: "Enter Password",
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).confirmPassword,
                                                    "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                    label: "Confirm Password",
                                                    placeholder: "Enter Confirm Password",
                                                    type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).link,
                                                    "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                    label: "Profile Link",
                                                    placeholder: "johndoe/profile",
                                                    type: "url"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                          createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                    label: "First Name",
                                                    placeholder: "John"
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
                                                    modelValue: unref(form).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                    label: "Last Name",
                                                    placeholder: "Doe"
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
                                                    modelValue: unref(form).mobile,
                                                    "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                    type: "number",
                                                    label: "Mobile",
                                                    placeholder: "98 7654 3210"
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
                                                    modelValue: unref(form).pincode,
                                                    "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                    type: "number",
                                                    label: "Pincode",
                                                    placeholder: "123456"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).address,
                                                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                    label: "Address",
                                                    placeholder: "1234 Main St, New York, NY 10001, USA"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).landmark,
                                                    "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                    label: "Landmark",
                                                    placeholder: "Near Central Park"
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
                                                    modelValue: unref(form).city,
                                                    "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                    label: "City",
                                                    placeholder: "New York"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(form).state,
                                                    "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                    label: "State",
                                                    placeholder: "Select State",
                                                    items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                          createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                          createVNode(_component_CustomRadiosWithIcon, {
                                            "selected-radio": unref(form).selectedPlan,
                                            "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                            "radio-content": radioContent,
                                            "grid-column": { sm: "4", cols: "12" }
                                          }, {
                                            default: withCtx(({ item }) => [
                                              createVNode("div", { class: "text-center" }, [
                                                createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                                createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                                createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                  createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                                  createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                                  createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                          createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                          createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).cardNumber,
                                                    "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                    type: "number",
                                                    label: "Card Number",
                                                    placeholder: "1234 1234 1234 1234"
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
                                                    modelValue: unref(form).cardName,
                                                    "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                    label: "Name on Card",
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).expiryDate,
                                                    "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                    label: "Expiry",
                                                    placeholder: "MM/YY"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(form).cvv,
                                                    "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                    type: "number",
                                                    label: "CVV",
                                                    placeholder: "123"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                        createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).username,
                                                  "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                  label: "Username",
                                                  placeholder: "John Doe"
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
                                                  modelValue: unref(form).email,
                                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                  label: "Email",
                                                  placeholder: "johndoe@email.com"
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
                                                  modelValue: unref(form).password,
                                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                  label: "Password",
                                                  placeholder: "Enter Password",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).confirmPassword,
                                                  "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                  label: "Confirm Password",
                                                  placeholder: "Enter Confirm Password",
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).link,
                                                  "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                  label: "Profile Link",
                                                  placeholder: "johndoe/profile",
                                                  type: "url"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                        createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                  label: "First Name",
                                                  placeholder: "John"
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
                                                  modelValue: unref(form).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                  label: "Last Name",
                                                  placeholder: "Doe"
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
                                                  modelValue: unref(form).mobile,
                                                  "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                  type: "number",
                                                  label: "Mobile",
                                                  placeholder: "98 7654 3210"
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
                                                  modelValue: unref(form).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                  type: "number",
                                                  label: "Pincode",
                                                  placeholder: "123456"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).address,
                                                  "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                  label: "Address",
                                                  placeholder: "1234 Main St, New York, NY 10001, USA"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).landmark,
                                                  "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                  label: "Landmark",
                                                  placeholder: "Near Central Park"
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
                                                  modelValue: unref(form).city,
                                                  "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                  label: "City",
                                                  placeholder: "New York"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(form).state,
                                                  "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                  label: "State",
                                                  placeholder: "Select State",
                                                  items: ["New York", "California", "Florida", "Washington", "Texas"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                        createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                        createVNode(_component_CustomRadiosWithIcon, {
                                          "selected-radio": unref(form).selectedPlan,
                                          "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                          "radio-content": radioContent,
                                          "grid-column": { sm: "4", cols: "12" }
                                        }, {
                                          default: withCtx(({ item }) => [
                                            createVNode("div", { class: "text-center" }, [
                                              createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                              createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                              createVNode("div", { class: "d-flex align-center justify-center" }, [
                                                createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                                createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                                createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                        createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                        createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).cardNumber,
                                                  "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                  type: "number",
                                                  label: "Card Number",
                                                  placeholder: "1234 1234 1234 1234"
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
                                                  modelValue: unref(form).cardName,
                                                  "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                  label: "Name on Card",
                                                  placeholder: "John Doe"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).expiryDate,
                                                  "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                  label: "Expiry",
                                                  placeholder: "MM/YY"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(form).cvv,
                                                  "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                  type: "number",
                                                  label: "CVV",
                                                  placeholder: "123"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(`<div class="d-flex flex-wrap justify-space-between justify-center gap-x-4 gap-y-2 my-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          disabled: unref(currentStep) === 0,
                          onClick: ($event) => currentStep.value--
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-arrow-left-line",
                                start: "",
                                class: "flip-in-rtl"
                              }, null, _parent5, _scopeId4));
                              _push5(` Previous `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (items.length - 1 === unref(currentStep)) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "success",
                            "append-icon": "ri-check-line",
                            onClick: onSubmit
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` submit `);
                              } else {
                                return [
                                  createTextVNode(" submit ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => currentStep.value++
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Next `);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createTextVNode(" Next "),
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-line",
                                    end: "",
                                    class: "flip-in-rtl"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_AppStepper, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            items,
                            direction: _ctx.$vuetify.display.smAndUp ? "horizontal" : "vertical",
                            class: "mb-12"
                          }, null, 8, ["current-step", "onUpdate:currentStep", "direction"]),
                          createVNode(VWindow, {
                            modelValue: unref(currentStep),
                            "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            class: "disable-tab-transition",
                            style: { "max-inline-size": "685px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                      createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).username,
                                                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                                label: "Username",
                                                placeholder: "John Doe"
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
                                                modelValue: unref(form).email,
                                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                                label: "Email",
                                                placeholder: "johndoe@email.com"
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
                                                modelValue: unref(form).password,
                                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                                label: "Password",
                                                placeholder: "Enter Password",
                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).confirmPassword,
                                                "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                                label: "Confirm Password",
                                                placeholder: "Enter Confirm Password",
                                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).link,
                                                "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                                label: "Profile Link",
                                                placeholder: "johndoe/profile",
                                                type: "url"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                      createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).firstName,
                                                "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                                label: "First Name",
                                                placeholder: "John"
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
                                                modelValue: unref(form).lastName,
                                                "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                                label: "Last Name",
                                                placeholder: "Doe"
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
                                                modelValue: unref(form).mobile,
                                                "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                                type: "number",
                                                label: "Mobile",
                                                placeholder: "98 7654 3210"
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
                                                modelValue: unref(form).pincode,
                                                "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                                type: "number",
                                                label: "Pincode",
                                                placeholder: "123456"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).address,
                                                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                                label: "Address",
                                                placeholder: "1234 Main St, New York, NY 10001, USA"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).landmark,
                                                "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                                label: "Landmark",
                                                placeholder: "Near Central Park"
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
                                                modelValue: unref(form).city,
                                                "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                                label: "City",
                                                placeholder: "New York"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(form).state,
                                                "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                                label: "State",
                                                placeholder: "Select State",
                                                items: ["New York", "California", "Florida", "Washington", "Texas"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                      createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                      createVNode(_component_CustomRadiosWithIcon, {
                                        "selected-radio": unref(form).selectedPlan,
                                        "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                        "radio-content": radioContent,
                                        "grid-column": { sm: "4", cols: "12" }
                                      }, {
                                        default: withCtx(({ item }) => [
                                          createVNode("div", { class: "text-center" }, [
                                            createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                            createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                            createVNode("div", { class: "d-flex align-center justify-center" }, [
                                              createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                              createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                              createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                      createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                      createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).cardNumber,
                                                "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                                type: "number",
                                                label: "Card Number",
                                                placeholder: "1234 1234 1234 1234"
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
                                                modelValue: unref(form).cardName,
                                                "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                                label: "Name on Card",
                                                placeholder: "John Doe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).expiryDate,
                                                "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                                label: "Expiry",
                                                placeholder: "MM/YY"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(form).cvv,
                                                "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                                type: "number",
                                                label: "CVV",
                                                placeholder: "123"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex flex-wrap justify-space-between justify-center gap-x-4 gap-y-2 my-6" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              disabled: unref(currentStep) === 0,
                              onClick: ($event) => currentStep.value--
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            items.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "success",
                              "append-icon": "ri-check-line",
                              onClick: onSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" submit ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VBtn, {
                              key: 1,
                              onClick: ($event) => currentStep.value++
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next "),
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      flat: "",
                      class: "mt-12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppStepper, {
                          "current-step": unref(currentStep),
                          "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          items,
                          direction: _ctx.$vuetify.display.smAndUp ? "horizontal" : "vertical",
                          class: "mb-12"
                        }, null, 8, ["current-step", "onUpdate:currentStep", "direction"]),
                        createVNode(VWindow, {
                          modelValue: unref(currentStep),
                          "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          class: "disable-tab-transition",
                          style: { "max-inline-size": "685px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                    createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).username,
                                              "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                              label: "Username",
                                              placeholder: "John Doe"
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
                                              modelValue: unref(form).email,
                                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                              label: "Email",
                                              placeholder: "johndoe@email.com"
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
                                              modelValue: unref(form).password,
                                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                              label: "Password",
                                              placeholder: "Enter Password",
                                              type: unref(isPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).confirmPassword,
                                              "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                              label: "Confirm Password",
                                              placeholder: "Enter Confirm Password",
                                              type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).link,
                                              "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                              label: "Profile Link",
                                              placeholder: "johndoe/profile",
                                              type: "url"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                    createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).firstName,
                                              "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                              label: "First Name",
                                              placeholder: "John"
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
                                              modelValue: unref(form).lastName,
                                              "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                              label: "Last Name",
                                              placeholder: "Doe"
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
                                              modelValue: unref(form).mobile,
                                              "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                              type: "number",
                                              label: "Mobile",
                                              placeholder: "98 7654 3210"
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
                                              modelValue: unref(form).pincode,
                                              "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                              type: "number",
                                              label: "Pincode",
                                              placeholder: "123456"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).address,
                                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                              label: "Address",
                                              placeholder: "1234 Main St, New York, NY 10001, USA"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).landmark,
                                              "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                              label: "Landmark",
                                              placeholder: "Near Central Park"
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
                                              modelValue: unref(form).city,
                                              "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                              label: "City",
                                              placeholder: "New York"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).state,
                                              "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                              label: "State",
                                              placeholder: "Select State",
                                              items: ["New York", "California", "Florida", "Washington", "Texas"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                    createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                    createVNode(_component_CustomRadiosWithIcon, {
                                      "selected-radio": unref(form).selectedPlan,
                                      "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                      "radio-content": radioContent,
                                      "grid-column": { sm: "4", cols: "12" }
                                    }, {
                                      default: withCtx(({ item }) => [
                                        createVNode("div", { class: "text-center" }, [
                                          createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                          createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                          createVNode("div", { class: "d-flex align-center justify-center" }, [
                                            createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                            createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                            createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                    createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                    createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).cardNumber,
                                              "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                              type: "number",
                                              label: "Card Number",
                                              placeholder: "1234 1234 1234 1234"
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
                                              modelValue: unref(form).cardName,
                                              "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                              label: "Name on Card",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).expiryDate,
                                              "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                              label: "Expiry",
                                              placeholder: "MM/YY"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).cvv,
                                              "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                              type: "number",
                                              label: "CVV",
                                              placeholder: "123"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "d-flex flex-wrap justify-space-between justify-center gap-x-4 gap-y-2 my-6" }, [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            disabled: unref(currentStep) === 0,
                            onClick: ($event) => currentStep.value--
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-arrow-left-line",
                                start: "",
                                class: "flip-in-rtl"
                              }),
                              createTextVNode(" Previous ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"]),
                          items.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "success",
                            "append-icon": "ri-check-line",
                            onClick: onSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" submit ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: ($event) => currentStep.value++
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Next "),
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-line",
                                end: "",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]))
                        ])
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
                md: "4",
                class: "d-none d-md-flex align-center"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: unref(registerMultiStepsIllustration),
                    class: "auth-illustration",
                    height: "560px"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8",
                class: "auth-card-v2 d-flex align-center justify-center pa-10",
                style: { "background-color": "rgb(var(--v-theme-surface))" }
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    class: "mt-12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AppStepper, {
                        "current-step": unref(currentStep),
                        "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                        items,
                        direction: _ctx.$vuetify.display.smAndUp ? "horizontal" : "vertical",
                        class: "mb-12"
                      }, null, 8, ["current-step", "onUpdate:currentStep", "direction"]),
                      createVNode(VWindow, {
                        modelValue: unref(currentStep),
                        "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                        class: "disable-tab-transition",
                        style: { "max-inline-size": "685px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 mb-1" }, " Account Information "),
                                  createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Account Details "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).username,
                                            "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                            label: "Username",
                                            placeholder: "John Doe"
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
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            label: "Email",
                                            placeholder: "johndoe@email.com"
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
                                            modelValue: unref(form).password,
                                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                            label: "Password",
                                            placeholder: "Enter Password",
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).confirmPassword,
                                            "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                                            label: "Confirm Password",
                                            placeholder: "Enter Confirm Password",
                                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).link,
                                            "onUpdate:modelValue": ($event) => unref(form).link = $event,
                                            label: "Profile Link",
                                            placeholder: "johndoe/profile",
                                            type: "url"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 mb-1" }, " Personal Information "),
                                  createVNode("p", { class: "text-body-1 mb-5" }, " Enter Your Personal Information "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).firstName,
                                            "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                            label: "First Name",
                                            placeholder: "John"
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
                                            modelValue: unref(form).lastName,
                                            "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                            label: "Last Name",
                                            placeholder: "Doe"
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
                                            modelValue: unref(form).mobile,
                                            "onUpdate:modelValue": ($event) => unref(form).mobile = $event,
                                            type: "number",
                                            label: "Mobile",
                                            placeholder: "98 7654 3210"
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
                                            modelValue: unref(form).pincode,
                                            "onUpdate:modelValue": ($event) => unref(form).pincode = $event,
                                            type: "number",
                                            label: "Pincode",
                                            placeholder: "123456"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).address,
                                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                            label: "Address",
                                            placeholder: "1234 Main St, New York, NY 10001, USA"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).landmark,
                                            "onUpdate:modelValue": ($event) => unref(form).landmark = $event,
                                            label: "Landmark",
                                            placeholder: "Near Central Park"
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
                                            modelValue: unref(form).city,
                                            "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                            label: "City",
                                            placeholder: "New York"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).state,
                                            "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                            label: "State",
                                            placeholder: "Select State",
                                            items: ["New York", "California", "Florida", "Washington", "Texas"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 mb-1" }, " Select Plan "),
                                  createVNode("p", { class: "text-body-1 mb-5" }, " Select plan as per your requirement "),
                                  createVNode(_component_CustomRadiosWithIcon, {
                                    "selected-radio": unref(form).selectedPlan,
                                    "onUpdate:selectedRadio": ($event) => unref(form).selectedPlan = $event,
                                    "radio-content": radioContent,
                                    "grid-column": { sm: "4", cols: "12" }
                                  }, {
                                    default: withCtx(({ item }) => [
                                      createVNode("div", { class: "text-center" }, [
                                        createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(item.title), 1),
                                        createVNode("p", { class: "clamp-text mb-2 text-sm" }, toDisplayString(item.desc), 1),
                                        createVNode("div", { class: "d-flex align-center justify-center" }, [
                                          createVNode("span", { class: "text-primary text-body-2 mb-2" }, "$"),
                                          createVNode("span", { class: "text-h4 text-primary" }, toDisplayString(item.value), 1),
                                          createVNode("span", { class: "mt-2 text-sm" }, "/month")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                  createVNode("h4", { class: "text-h4 mt-12 mb-1" }, " Payment Information "),
                                  createVNode("p", { class: "text-body-1 mb-5" }, " Enter your card information "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).cardNumber,
                                            "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
                                            type: "number",
                                            label: "Card Number",
                                            placeholder: "1234 1234 1234 1234"
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
                                            modelValue: unref(form).cardName,
                                            "onUpdate:modelValue": ($event) => unref(form).cardName = $event,
                                            label: "Name on Card",
                                            placeholder: "John Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).expiryDate,
                                            "onUpdate:modelValue": ($event) => unref(form).expiryDate = $event,
                                            label: "Expiry",
                                            placeholder: "MM/YY"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).cvv,
                                            "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
                                            type: "number",
                                            label: "CVV",
                                            placeholder: "123"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "d-flex flex-wrap justify-space-between justify-center gap-x-4 gap-y-2 my-6" }, [
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          disabled: unref(currentStep) === 0,
                          onClick: ($event) => currentStep.value--
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-arrow-left-line",
                              start: "",
                              class: "flip-in-rtl"
                            }),
                            createTextVNode(" Previous ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"]),
                        items.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          color: "success",
                          "append-icon": "ri-check-line",
                          onClick: onSubmit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" submit ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: ($event) => currentStep.value++
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Next "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-right-line",
                              end: "",
                              class: "flip-in-rtl"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]))
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/authentication/register-multi-steps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
