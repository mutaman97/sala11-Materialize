import { _ as _sfc_main$9 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toRef, watch, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VBtn, C as propsFactory, D as makeComponentProps, a9 as makeVariantProps, E as genericComponent, Z as provideDefaults, F as useRender, a as VIcon, g as VProgressLinear } from "../ssr.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VToolbar, a as VToolbarTitle } from "./VToolbar-BfF0JSVH.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VList, d as VListSubheader, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { _ as _sfc_main$a } from "./AppCardCode-DkpMhnYF.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
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
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "prismjs";
import "vue-prism-component";
const _sfc_main$8 = {
  __name: "DemoDialogForm",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    const firstName = ref("");
    const middleName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const age = ref();
    const interest = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        "max-width": "600"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "User Profile" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      label: "First Name",
                                      placeholder: "John"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        label: "First Name",
                                        placeholder: "John"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(middleName),
                                      "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                      label: "Middle Name",
                                      placeholder: "peter"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(middleName),
                                        "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                        label: "Middle Name",
                                        placeholder: "peter"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(lastName),
                                      "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                      label: "Last Name",
                                      "persistent-hint": "",
                                      placeholder: "Doe"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(lastName),
                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                        label: "Last Name",
                                        "persistent-hint": "",
                                        placeholder: "Doe"
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
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      label: "Email",
                                      placeholder: "johndoe@email.com"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        label: "Email",
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
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      label: "Password",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        label: "Password",
                                        autocomplete: "on",
                                        type: "password",
                                        placeholder: "············"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(age),
                                      "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                      label: "Age",
                                      type: "number",
                                      placeholder: "18"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(age),
                                        "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                        label: "Age",
                                        type: "number",
                                        placeholder: "18"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(interest),
                                      "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                      label: "Interests",
                                      placeholder: "Sports, Music, Movies"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(interest),
                                        "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                        label: "Interests",
                                        placeholder: "Sports, Music, Movies"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      label: "First Name",
                                      placeholder: "John"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(middleName),
                                      "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                      label: "Middle Name",
                                      placeholder: "peter"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(lastName),
                                      "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                      label: "Last Name",
                                      "persistent-hint": "",
                                      placeholder: "Doe"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      label: "Email",
                                      placeholder: "johndoe@email.com"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      label: "Password",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(age),
                                      "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                      label: "Age",
                                      type: "number",
                                      placeholder: "18"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(interest),
                                      "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                      label: "Interests",
                                      placeholder: "Sports, Music, Movies"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(firstName),
                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                    label: "First Name",
                                    placeholder: "John"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(middleName),
                                    "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                    label: "Middle Name",
                                    placeholder: "peter"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(lastName),
                                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                    label: "Last Name",
                                    "persistent-hint": "",
                                    placeholder: "Doe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    label: "Email",
                                    placeholder: "johndoe@email.com"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(password),
                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                    label: "Password",
                                    autocomplete: "on",
                                    type: "password",
                                    placeholder: "············"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(age),
                                    "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                    label: "Age",
                                    type: "number",
                                    placeholder: "18"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(interest),
                                    "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                    label: "Interests",
                                    placeholder: "Sports, Music, Movies"
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save `);
                            } else {
                              return [
                                createTextVNode(" Save ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  label: "First Name",
                                  placeholder: "John"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(middleName),
                                  "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                  label: "Middle Name",
                                  placeholder: "peter"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(lastName),
                                  "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                  label: "Last Name",
                                  "persistent-hint": "",
                                  placeholder: "Doe"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  label: "Email",
                                  placeholder: "johndoe@email.com"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  label: "Password",
                                  autocomplete: "on",
                                  type: "password",
                                  placeholder: "············"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(age),
                                  "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                  label: "Age",
                                  type: "number",
                                  placeholder: "18"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(interest),
                                  "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                  label: "Interests",
                                  placeholder: "Sports, Music, Movies"
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
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "User Profile" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                label: "First Name",
                                placeholder: "John"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(middleName),
                                "onUpdate:modelValue": ($event) => isRef(middleName) ? middleName.value = $event : null,
                                label: "Middle Name",
                                placeholder: "peter"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(lastName),
                                "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                label: "Last Name",
                                "persistent-hint": "",
                                placeholder: "Doe"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                label: "Email",
                                placeholder: "johndoe@email.com"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                label: "Password",
                                autocomplete: "on",
                                type: "password",
                                placeholder: "············"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(age),
                                "onUpdate:modelValue": ($event) => isRef(age) ? age.value = $event : null,
                                label: "Age",
                                type: "number",
                                placeholder: "18"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(interest),
                                "onUpdate:modelValue": ($event) => isRef(interest) ? interest.value = $event : null,
                                label: "Interests",
                                placeholder: "Sports, Music, Movies"
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
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const makeVToolbarItemsProps = propsFactory({
  ...makeComponentProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VToolbarItems");
const VToolbarItems = genericComponent()({
  name: "VToolbarItems",
  props: makeVToolbarItemsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: toRef(props, "color"),
        height: "inherit",
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-toolbar-items", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const _sfc_main$7 = {
  __name: "DemoDialogFullscreen",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        fullscreen: "",
        scrim: false,
        transition: "dialog-bottom-transition"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VToolbar, { color: "primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          variant: "plain",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "white",
                                icon: "ri-close-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "white",
                                  icon: "ri-close-line"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VToolbarTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Settings`);
                            } else {
                              return [
                                createTextVNode("Settings")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VToolbarItems, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                onClick: ($event) => isDialogVisible.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save `);
                                  } else {
                                    return [
                                      createTextVNode(" Save ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  variant: "text",
                                  onClick: ($event) => isDialogVisible.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "plain",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                color: "white",
                                icon: "ri-close-line"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Settings")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VToolbarItems, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "text",
                                onClick: ($event) => isDialogVisible.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VList, { lines: "two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListSubheader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`User Controls`);
                            } else {
                              return [
                                createTextVNode("User Controls")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          title: "Content filtering",
                          subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          title: "Password",
                          subtitle: "Require password for purchase or use password to restrict purchase"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListSubheader, null, {
                            default: withCtx(() => [
                              createTextVNode("User Controls")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            title: "Content filtering",
                            subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                          }),
                          createVNode(VListItem, {
                            title: "Password",
                            subtitle: "Require password for purchase or use password to restrict purchase"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VList, {
                    lines: "two",
                    "select-strategy": "classic"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListSubheader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`General`);
                            } else {
                              return [
                                createTextVNode("General")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          title: "Notifications",
                          subtitle: "Notify me about updates to apps or games that I downloaded",
                          value: "Notifications"
                        }, {
                          prepend: withCtx(({ isActive }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemAction, { start: "" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCheckbox, {
                                        "model-value": isActive,
                                        color: "primary"
                                      }, null, 8, ["model-value"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, 8, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          title: "Sound",
                          subtitle: "Auto-update apps at any time. Data charges may apply",
                          value: "Sound"
                        }, {
                          prepend: withCtx(({ isActive }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemAction, { start: "" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCheckbox, {
                                        "model-value": isActive,
                                        color: "primary"
                                      }, null, 8, ["model-value"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, 8, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          title: "Auto-add widgets",
                          subtitle: "Automatically add home screen widgets",
                          value: "Auto-add widgets"
                        }, {
                          prepend: withCtx(({ isActive }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemAction, { start: "" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCheckbox, {
                                        "model-value": isActive,
                                        color: "primary"
                                      }, null, 8, ["model-value"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemAction, { start: "" }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      "model-value": isActive,
                                      color: "primary"
                                    }, null, 8, ["model-value"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListSubheader, null, {
                            default: withCtx(() => [
                              createTextVNode("General")
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            title: "Notifications",
                            subtitle: "Notify me about updates to apps or games that I downloaded",
                            value: "Notifications"
                          }, {
                            prepend: withCtx(({ isActive }) => [
                              createVNode(VListItemAction, { start: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    "model-value": isActive,
                                    color: "primary"
                                  }, null, 8, ["model-value"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            title: "Sound",
                            subtitle: "Auto-update apps at any time. Data charges may apply",
                            value: "Sound"
                          }, {
                            prepend: withCtx(({ isActive }) => [
                              createVNode(VListItemAction, { start: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    "model-value": isActive,
                                    color: "primary"
                                  }, null, 8, ["model-value"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, {
                            title: "Auto-add widgets",
                            subtitle: "Automatically add home screen widgets",
                            value: "Auto-add widgets"
                          }, {
                            prepend: withCtx(({ isActive }) => [
                              createVNode(VListItemAction, { start: "" }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    "model-value": isActive,
                                    color: "primary"
                                  }, null, 8, ["model-value"])
                                ]),
                                _: 2
                              }, 1024)
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
                    createVNode("div", null, [
                      createVNode(VToolbar, { color: "primary" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            icon: "",
                            variant: "plain",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                color: "white",
                                icon: "ri-close-line"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Settings")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VToolbarItems, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "text",
                                onClick: ($event) => isDialogVisible.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VList, { lines: "two" }, {
                      default: withCtx(() => [
                        createVNode(VListSubheader, null, {
                          default: withCtx(() => [
                            createTextVNode("User Controls")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          title: "Content filtering",
                          subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                        }),
                        createVNode(VListItem, {
                          title: "Password",
                          subtitle: "Require password for purchase or use password to restrict purchase"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VList, {
                      lines: "two",
                      "select-strategy": "classic"
                    }, {
                      default: withCtx(() => [
                        createVNode(VListSubheader, null, {
                          default: withCtx(() => [
                            createTextVNode("General")
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          title: "Notifications",
                          subtitle: "Notify me about updates to apps or games that I downloaded",
                          value: "Notifications"
                        }, {
                          prepend: withCtx(({ isActive }) => [
                            createVNode(VListItemAction, { start: "" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  "model-value": isActive,
                                  color: "primary"
                                }, null, 8, ["model-value"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          title: "Sound",
                          subtitle: "Auto-update apps at any time. Data charges may apply",
                          value: "Sound"
                        }, {
                          prepend: withCtx(({ isActive }) => [
                            createVNode(VListItemAction, { start: "" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  "model-value": isActive,
                                  color: "primary"
                                }, null, 8, ["model-value"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(VListItem, {
                          title: "Auto-add widgets",
                          subtitle: "Automatically add home screen widgets",
                          value: "Auto-add widgets"
                        }, {
                          prepend: withCtx(({ isActive }) => [
                            createVNode(VListItemAction, { start: "" }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  "model-value": isActive,
                                  color: "primary"
                                }, null, 8, ["model-value"])
                              ]),
                              _: 2
                            }, 1024)
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(VToolbar, { color: "primary" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "plain",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              color: "white",
                              icon: "ri-close-line"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VToolbarTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Settings")
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode(VToolbarItems, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "text",
                              onClick: ($event) => isDialogVisible.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VList, { lines: "two" }, {
                    default: withCtx(() => [
                      createVNode(VListSubheader, null, {
                        default: withCtx(() => [
                          createTextVNode("User Controls")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, {
                        title: "Content filtering",
                        subtitle: "Set the content filtering level to restrict apps that can be downloaded"
                      }),
                      createVNode(VListItem, {
                        title: "Password",
                        subtitle: "Require password for purchase or use password to restrict purchase"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VList, {
                    lines: "two",
                    "select-strategy": "classic"
                  }, {
                    default: withCtx(() => [
                      createVNode(VListSubheader, null, {
                        default: withCtx(() => [
                          createTextVNode("General")
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, {
                        title: "Notifications",
                        subtitle: "Notify me about updates to apps or games that I downloaded",
                        value: "Notifications"
                      }, {
                        prepend: withCtx(({ isActive }) => [
                          createVNode(VListItemAction, { start: "" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                "model-value": isActive,
                                color: "primary"
                              }, null, 8, ["model-value"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, {
                        title: "Sound",
                        subtitle: "Auto-update apps at any time. Data charges may apply",
                        value: "Sound"
                      }, {
                        prepend: withCtx(({ isActive }) => [
                          createVNode(VListItemAction, { start: "" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                "model-value": isActive,
                                color: "primary"
                              }, null, 8, ["model-value"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(VListItem, {
                        title: "Auto-add widgets",
                        subtitle: "Automatically add home screen widgets",
                        value: "Auto-add widgets"
                      }, {
                        prepend: withCtx(({ isActive }) => [
                          createVNode(VListItemAction, { start: "" }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                "model-value": isActive,
                                color: "primary"
                              }, null, 8, ["model-value"])
                            ]),
                            _: 2
                          }, 1024)
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
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogFullscreen.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoDialogOverflowed",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        class: "v-dialog-sm"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({ color: "primary" }, props), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({ color: "primary" }, props), {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Use Google's location service?" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. `);
                      } else {
                        return [
                          createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Disagree `);
                            } else {
                              return [
                                createTextVNode(" Disagree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Agree `);
                            } else {
                              return [
                                createTextVNode(" Agree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Disagree ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Agree ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Disagree ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Agree ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "Use Google's location service?" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disagree ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Agree ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogOverflowed.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoDialogNesting",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    const isDialogTwoShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isDialogVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Dialog `);
          } else {
            return [
              createTextVNode(" Open Dialog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        class: "v-dialog-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Dialog" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. `);
                      } else {
                        return [
                          createTextVNode(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => isDialogTwoShow.value = !unref(isDialogTwoShow)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Open Dialog 2 `);
                            } else {
                              return [
                                createTextVNode(" Open Dialog 2 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            onClick: ($event) => isDialogTwoShow.value = !unref(isDialogTwoShow)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Open Dialog 2 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          onClick: ($event) => isDialogTwoShow.value = !unref(isDialogTwoShow)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Open Dialog 2 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "Dialog" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        onClick: ($event) => isDialogTwoShow.value = !unref(isDialogTwoShow)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Open Dialog 2 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDialogTwoShow),
        "onUpdate:modelValue": ($event) => isRef(isDialogTwoShow) ? isDialogTwoShow.value = $event : null,
        class: "v-dialog-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Dialog 2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogTwoShow.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`I&#39;m a nested dialog.`);
                      } else {
                        return [
                          createTextVNode("I'm a nested dialog.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "text-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => isDialogTwoShow.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            onClick: ($event) => isDialogTwoShow.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogTwoShow.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode("I'm a nested dialog.")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "text-end" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          onClick: ($event) => isDialogTwoShow.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "Dialog 2" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogTwoShow.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode("I'm a nested dialog.")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "text-end" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        onClick: ($event) => isDialogTwoShow.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogNesting.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoDialogLoader",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    watch(isDialogVisible, (value) => {
      if (!value)
        return;
      setTimeout(() => {
        isDialogVisible.value = false;
      }, 4e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        disabled: unref(isDialogVisible),
        onClick: ($event) => isDialogVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start loading `);
          } else {
            return [
              createTextVNode(" Start loading ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        width: "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              color: "primary",
              width: "300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "pt-3 text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Please stand by `);
                        _push4(ssrRenderComponent(VProgressLinear, {
                          indeterminate: "",
                          class: "mt-4",
                          color: "#fff"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Please stand by "),
                          createVNode(VProgressLinear, {
                            indeterminate: "",
                            class: "mt-4",
                            color: "#fff"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "pt-3 text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Please stand by "),
                        createVNode(VProgressLinear, {
                          indeterminate: "",
                          class: "mt-4",
                          color: "#fff"
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
              createVNode(VCard, {
                color: "primary",
                width: "300"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "pt-3 text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Please stand by "),
                      createVNode(VProgressLinear, {
                        indeterminate: "",
                        class: "mt-4",
                        color: "#fff"
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogLoader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoDialogScrollable",
  __ssrInlineRender: true,
  setup(__props) {
    const countryList = [
      {
        label: "Bahamas, The",
        value: "bahamas"
      },
      {
        label: "Bahrain",
        value: "bahrain"
      },
      {
        label: "Bangladesh",
        value: "bangladesh"
      },
      {
        label: "Barbados",
        value: "barbados"
      },
      {
        label: "Belarus",
        value: "belarus"
      },
      {
        label: "Belgium",
        value: "belgium"
      },
      {
        label: "Belize",
        value: "belize"
      },
      {
        label: "Benin",
        value: "benin"
      },
      {
        label: "Bhutan",
        value: "bhutan"
      },
      {
        label: "Bolivia",
        value: "bolivia"
      },
      {
        label: "Bosnia and Herzegovina",
        value: "bosnia"
      },
      {
        label: "Botswana",
        value: "botswana"
      },
      {
        label: "Brazil",
        value: "brazil"
      },
      {
        label: "Brunei",
        value: "brunei"
      },
      {
        label: "Bulgaria",
        value: "bulgaria"
      },
      {
        label: "Burkina Faso",
        value: "burkina"
      }
    ];
    const selectedCountry = ref("");
    const isDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        scrollable: "",
        "max-width": "350"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardItem, { class: "pb-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Select Country`);
                            } else {
                              return [
                                createTextVNode("Select Country")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Select Country")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { style: { "block-size": "300px" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(selectedCountry),
                          "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                          inline: false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(countryList, (country) => {
                                _push5(ssrRenderComponent(VRadio, {
                                  key: country.label,
                                  label: country.label,
                                  value: country.value,
                                  color: "primary"
                                }, null, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(countryList, (country) => {
                                  return createVNode(VRadio, {
                                    key: country.label,
                                    label: country.label,
                                    value: country.value,
                                    color: "primary"
                                  }, null, 8, ["label", "value"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(selectedCountry),
                            "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                            inline: false
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(countryList, (country) => {
                                return createVNode(VRadio, {
                                  key: country.label,
                                  label: country.label,
                                  value: country.value,
                                  color: "primary"
                                }, null, 8, ["label", "value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "overflow-visible d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Close `);
                            } else {
                              return [
                                createTextVNode(" Close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save Changes `);
                            } else {
                              return [
                                createTextVNode(" Save Changes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardItem, { class: "pb-3" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Select Country")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { style: { "block-size": "300px" } }, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(selectedCountry),
                          "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                          inline: false
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(countryList, (country) => {
                              return createVNode(VRadio, {
                                key: country.label,
                                label: country.label,
                                value: country.value,
                                color: "primary"
                              }, null, 8, ["label", "value"]);
                            }), 64))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "overflow-visible d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save Changes ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardItem, { class: "pb-3" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Select Country")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { style: { "block-size": "300px" } }, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(selectedCountry),
                        "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                        inline: false
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(countryList, (country) => {
                            return createVNode(VRadio, {
                              key: country.label,
                              label: country.label,
                              value: country.value,
                              color: "primary"
                            }, null, 8, ["label", "value"]);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "overflow-visible d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save Changes ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogScrollable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoDialogPersistent",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        persistent: "",
        class: "v-dialog-sm"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Open Dialog `);
                } else {
                  return [
                    createTextVNode(" Open Dialog ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Open Dialog ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Use Google's location service?" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. `);
                      } else {
                        return [
                          createTextVNode(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Disagree `);
                            } else {
                              return [
                                createTextVNode(" Disagree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Agree `);
                            } else {
                              return [
                                createTextVNode(" Agree ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Disagree ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Agree ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "error",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Disagree ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Agree ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "Use Google's location service?" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disagree ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Agree ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogPersistent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoDialogBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const isDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$9;
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(isDialogVisible),
        "onUpdate:modelValue": ($event) => isRef(isDialogVisible) ? isDialogVisible.value = $event : null,
        width: "500"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Click Me `);
                } else {
                  return [
                    createTextVNode(" Click Me ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Click Me ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Privacy Policy" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. `);
                      } else {
                        return [
                          createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` close `);
                            } else {
                              return [
                                createTextVNode(" close ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` I accept `);
                            } else {
                              return [
                                createTextVNode(" I accept ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "secondary",
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            onClick: ($event) => isDialogVisible.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" I accept ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => isDialogVisible.value = false
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          variant: "outlined",
                          color: "secondary",
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          onClick: ($event) => isDialogVisible.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" I accept ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, { title: "Privacy Policy" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => isDialogVisible.value = false
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "d-flex justify-end flex-wrap gap-4" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        variant: "outlined",
                        color: "secondary",
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" close ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        onClick: ($event) => isDialogVisible.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" I accept ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/dialog/DemoDialogBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const form = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const fullscreen = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const loader = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const nesting = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const overflowed = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const persistent = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const scrollable = { ts: `<script lang="ts" setup>
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
`, js: `<script setup>
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
` };
const _sfc_main = {
  __name: "dialog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$a;
      const _component_DemoDialogBasic = _sfc_main$1;
      const _component_DemoDialogPersistent = _sfc_main$2;
      const _component_DemoDialogScrollable = _sfc_main$3;
      const _component_DemoDialogLoader = _sfc_main$4;
      const _component_DemoDialogNesting = _sfc_main$5;
      const _component_DemoDialogOverflowed = _sfc_main$6;
      const _component_DemoDialogFullscreen = _sfc_main$7;
      const _component_DemoDialogForm = _sfc_main$8;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies."),
                          createVNode(_component_DemoDialogBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies."),
                        createVNode(_component_DemoDialogBasic)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Persistent",
                    code: persistent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>persistent</code> prop to create persistent dialog.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogPersistent, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "persistent"),
                            createTextVNode(" prop to create persistent dialog.")
                          ]),
                          createVNode(_component_DemoDialogPersistent)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Persistent",
                      code: persistent
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "persistent"),
                          createTextVNode(" prop to create persistent dialog.")
                        ]),
                        createVNode(_component_DemoDialogPersistent)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Scrollable",
                    code: scrollable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>scrollable</code> prop to create scrollable dialog.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogScrollable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "scrollable"),
                            createTextVNode(" prop to create scrollable dialog.")
                          ]),
                          createVNode(_component_DemoDialogScrollable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Scrollable",
                      code: scrollable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "scrollable"),
                          createTextVNode(" prop to create scrollable dialog.")
                        ]),
                        createVNode(_component_DemoDialogScrollable)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Loader",
                    code: loader
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-dialog</code> component makes it easy to create a customized loading experience for your application.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogLoader, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-dialog"),
                            createTextVNode(" component makes it easy to create a customized loading experience for your application.")
                          ]),
                          createVNode(_component_DemoDialogLoader)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Loader",
                      code: loader
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "v-dialog"),
                          createTextVNode(" component makes it easy to create a customized loading experience for your application.")
                        ]),
                        createVNode(_component_DemoDialogLoader)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              col: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Nesting",
                    code: nesting
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Dialogs can be nested: you can open one dialog from another.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogNesting, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Dialogs can be nested: you can open one dialog from another."),
                          createVNode(_component_DemoDialogNesting)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Nesting",
                      code: nesting
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Dialogs can be nested: you can open one dialog from another."),
                        createVNode(_component_DemoDialogNesting)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Overflowed",
                    code: overflowed
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Modals that do not fit within the available window space will scroll the container.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogOverflowed, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Modals that do not fit within the available window space will scroll the container."),
                          createVNode(_component_DemoDialogOverflowed)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Overflowed",
                      code: overflowed
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Modals that do not fit within the available window space will scroll the container."),
                        createVNode(_component_DemoDialogOverflowed)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Fullscreen",
                    code: fullscreen
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogFullscreen, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens."),
                          createVNode(_component_DemoDialogFullscreen)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Fullscreen",
                      code: fullscreen
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens."),
                        createVNode(_component_DemoDialogFullscreen)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Form",
                    code: form
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Just a simple example of a form in a dialog.</p>`);
                        _push4(ssrRenderComponent(_component_DemoDialogForm, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Just a simple example of a form in a dialog."),
                          createVNode(_component_DemoDialogForm)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Form",
                      code: form
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Just a simple example of a form in a dialog."),
                        createVNode(_component_DemoDialogForm)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies."),
                      createVNode(_component_DemoDialogBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Persistent",
                    code: persistent
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "persistent"),
                        createTextVNode(" prop to create persistent dialog.")
                      ]),
                      createVNode(_component_DemoDialogPersistent)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Scrollable",
                    code: scrollable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "scrollable"),
                        createTextVNode(" prop to create scrollable dialog.")
                      ]),
                      createVNode(_component_DemoDialogScrollable)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Loader",
                    code: loader
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "v-dialog"),
                        createTextVNode(" component makes it easy to create a customized loading experience for your application.")
                      ]),
                      createVNode(_component_DemoDialogLoader)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                col: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Nesting",
                    code: nesting
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Dialogs can be nested: you can open one dialog from another."),
                      createVNode(_component_DemoDialogNesting)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Overflowed",
                    code: overflowed
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Modals that do not fit within the available window space will scroll the container."),
                      createVNode(_component_DemoDialogOverflowed)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Fullscreen",
                    code: fullscreen
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens."),
                      createVNode(_component_DemoDialogFullscreen)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Form",
                    code: form
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Just a simple example of a form in a dialog."),
                      createVNode(_component_DemoDialogForm)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
