import { ref, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vShow, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VAlert, a as VAlertTitle } from "./VAlert-CqjinC0F.js";
import { V as VBtn, _ as _export_sfc, A as VBtnGroup, a as VIcon, c as avatar1, m as flagUsa } from "../ssr.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./AddPaymentMethodDialog-UmhSlbW5.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "./VImg-D-rbsD1g.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./forwardRefs-IZGbB77j.js";
import "./VCheckboxBtn-CCkh1QvV.js";
/* empty css               */
import "./dialog-transition-CtM2qLK8.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./DialogCloseBtn-h97PlnE6.js";
import "./mastercard-D11GxT9q.js";
import "./visa-light-manIB7UD.js";
import "./useGenerateImageVariant-CZ9PNjKS.js";
import "./VDialog-JSJ1TRMg.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main$6 = {
  __name: "SettingsCheckout",
  __ssrInlineRender: true,
  setup(__props) {
    const contactMethod = ref("Phone number");
    const fullName = ref("Only require last name");
    const companyName = ref("Don't include");
    const addressLine = ref("Optional");
    const shippingAddress = ref("Optional");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, {
        title: "Customer contact method",
        subtitle: "Select what contact method customers use to check out.",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: unref(contactMethod),
                    "onUpdate:modelValue": ($event) => isRef(contactMethod) ? contactMethod.value = $event : null,
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Phone number",
                          value: "Phone number"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Email",
                          value: "Email"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            label: "Phone number",
                            value: "Phone number"
                          }),
                          createVNode(VRadio, {
                            label: "Email",
                            value: "Email"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VAlert, {
                    color: "warning",
                    variant: "tonal",
                    icon: "ri-information-line"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAlertTitle, { class: "mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` To send SMS updates, you need to install an SMS App. `);
                            } else {
                              return [
                                createTextVNode(" To send SMS updates, you need to install an SMS App. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAlertTitle, { class: "mb-0" }, {
                            default: withCtx(() => [
                              createTextVNode(" To send SMS updates, you need to install an SMS App. ")
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
                    createVNode(VRadioGroup, {
                      modelValue: unref(contactMethod),
                      "onUpdate:modelValue": ($event) => isRef(contactMethod) ? contactMethod.value = $event : null,
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          label: "Phone number",
                          value: "Phone number"
                        }),
                        createVNode(VRadio, {
                          label: "Email",
                          value: "Email"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VAlert, {
                      color: "warning",
                      variant: "tonal",
                      icon: "ri-information-line"
                    }, {
                      default: withCtx(() => [
                        createVNode(VAlertTitle, { class: "mb-0" }, {
                          default: withCtx(() => [
                            createTextVNode(" To send SMS updates, you need to install an SMS App. ")
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRadioGroup, {
                    modelValue: unref(contactMethod),
                    "onUpdate:modelValue": ($event) => isRef(contactMethod) ? contactMethod.value = $event : null,
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        label: "Phone number",
                        value: "Phone number"
                      }),
                      createVNode(VRadio, {
                        label: "Email",
                        value: "Email"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VAlert, {
                    color: "warning",
                    variant: "tonal",
                    icon: "ri-information-line"
                  }, {
                    default: withCtx(() => [
                      createVNode(VAlertTitle, { class: "mb-0" }, {
                        default: withCtx(() => [
                          createTextVNode(" To send SMS updates, you need to install an SMS App. ")
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
      _push(ssrRenderComponent(VCard, {
        title: "Customer information",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: unref(fullName),
                    "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                    label: "Full name",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Only require last name",
                          label: "Only require last name"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Require first and last name",
                          label: "Require first and last name"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            value: "Only require last name",
                            label: "Only require last name"
                          }),
                          createVNode(VRadio, {
                            value: "Require first and last name",
                            label: "Require first and last name"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: unref(companyName),
                    "onUpdate:modelValue": ($event) => isRef(companyName) ? companyName.value = $event : null,
                    label: "Company name",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Required",
                          label: "Required"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            value: "Don't include",
                            label: "Don't include"
                          }),
                          createVNode(VRadio, {
                            value: "Optional",
                            label: "Optional"
                          }),
                          createVNode(VRadio, {
                            value: "Required",
                            label: "Required"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: unref(addressLine),
                    "onUpdate:modelValue": ($event) => isRef(addressLine) ? addressLine.value = $event : null,
                    label: "Address line 2 (apartment, unit, etc.)",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Required",
                          label: "Required"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            value: "Don't include",
                            label: "Don't include"
                          }),
                          createVNode(VRadio, {
                            value: "Optional",
                            label: "Optional"
                          }),
                          createVNode(VRadio, {
                            value: "Required",
                            label: "Required"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRadioGroup, {
                    modelValue: unref(shippingAddress),
                    "onUpdate:modelValue": ($event) => isRef(shippingAddress) ? shippingAddress.value = $event : null,
                    label: "Shipping address phone number"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          value: "Required",
                          label: "Required"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            value: "Don't include",
                            label: "Don't include"
                          }),
                          createVNode(VRadio, {
                            value: "Optional",
                            label: "Optional"
                          }),
                          createVNode(VRadio, {
                            value: "Required",
                            label: "Required"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRadioGroup, {
                      modelValue: unref(fullName),
                      "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                      label: "Full name",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          value: "Only require last name",
                          label: "Only require last name"
                        }),
                        createVNode(VRadio, {
                          value: "Require first and last name",
                          label: "Require first and last name"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VRadioGroup, {
                      modelValue: unref(companyName),
                      "onUpdate:modelValue": ($event) => isRef(companyName) ? companyName.value = $event : null,
                      label: "Company name",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }),
                        createVNode(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }),
                        createVNode(VRadio, {
                          value: "Required",
                          label: "Required"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VRadioGroup, {
                      modelValue: unref(addressLine),
                      "onUpdate:modelValue": ($event) => isRef(addressLine) ? addressLine.value = $event : null,
                      label: "Address line 2 (apartment, unit, etc.)",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }),
                        createVNode(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }),
                        createVNode(VRadio, {
                          value: "Required",
                          label: "Required"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VRadioGroup, {
                      modelValue: unref(shippingAddress),
                      "onUpdate:modelValue": ($event) => isRef(shippingAddress) ? shippingAddress.value = $event : null,
                      label: "Shipping address phone number"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          value: "Don't include",
                          label: "Don't include"
                        }),
                        createVNode(VRadio, {
                          value: "Optional",
                          label: "Optional"
                        }),
                        createVNode(VRadio, {
                          value: "Required",
                          label: "Required"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRadioGroup, {
                    modelValue: unref(fullName),
                    "onUpdate:modelValue": ($event) => isRef(fullName) ? fullName.value = $event : null,
                    label: "Full name",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        value: "Only require last name",
                        label: "Only require last name"
                      }),
                      createVNode(VRadio, {
                        value: "Require first and last name",
                        label: "Require first and last name"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VRadioGroup, {
                    modelValue: unref(companyName),
                    "onUpdate:modelValue": ($event) => isRef(companyName) ? companyName.value = $event : null,
                    label: "Company name",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        value: "Don't include",
                        label: "Don't include"
                      }),
                      createVNode(VRadio, {
                        value: "Optional",
                        label: "Optional"
                      }),
                      createVNode(VRadio, {
                        value: "Required",
                        label: "Required"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VRadioGroup, {
                    modelValue: unref(addressLine),
                    "onUpdate:modelValue": ($event) => isRef(addressLine) ? addressLine.value = $event : null,
                    label: "Address line 2 (apartment, unit, etc.)",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        value: "Don't include",
                        label: "Don't include"
                      }),
                      createVNode(VRadio, {
                        value: "Optional",
                        label: "Optional"
                      }),
                      createVNode(VRadio, {
                        value: "Required",
                        label: "Required"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VRadioGroup, {
                    modelValue: unref(shippingAddress),
                    "onUpdate:modelValue": ($event) => isRef(shippingAddress) ? shippingAddress.value = $event : null,
                    label: "Shipping address phone number"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        value: "Don't include",
                        label: "Don't include"
                      }),
                      createVNode(VRadio, {
                        value: "Optional",
                        label: "Optional"
                      }),
                      createVNode(VRadio, {
                        value: "Required",
                        label: "Required"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex justify-end gap-x-4">`);
      _push(ssrRenderComponent(VBtn, {
        color: "secondary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discard `);
          } else {
            return [
              createTextVNode(" Discard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save Changes`);
          } else {
            return [
              createTextVNode("Save Changes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsCheckout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VCard, {
    title: "Location Name",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VTextField, {
                label: "Location Name",
                placeholder: "Empire Hub"
              }, null, _parent3, _scopeId2));
              _push3(`<div class="my-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(VCheckbox, { label: "Fulfil online orders from this location" }, null, _parent3, _scopeId2));
              _push3(`</div>`);
              _push3(ssrRenderComponent(VAlert, {
                color: "info",
                variant: "tonal"
              }, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VAvatar, {
                      size: "28",
                      icon: "ri-information-line",
                      variant: "elevated",
                      color: "info",
                      rounded: ""
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VAvatar, {
                        size: "28",
                        icon: "ri-information-line",
                        variant: "elevated",
                        color: "info",
                        rounded: ""
                      })
                    ];
                  }
                }),
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VAlertTitle, { class: "mb-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` This is your default location. To change whether you fulfill online orders from this location, select another default location first. `);
                        } else {
                          return [
                            createTextVNode(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VAlertTitle, { class: "mb-0" }, {
                        default: withCtx(() => [
                          createTextVNode(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")
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
                createVNode(VTextField, {
                  label: "Location Name",
                  placeholder: "Empire Hub"
                }),
                createVNode("div", { class: "my-4" }, [
                  createVNode(VCheckbox, { label: "Fulfil online orders from this location" })
                ]),
                createVNode(VAlert, {
                  color: "info",
                  variant: "tonal"
                }, {
                  prepend: withCtx(() => [
                    createVNode(VAvatar, {
                      size: "28",
                      icon: "ri-information-line",
                      variant: "elevated",
                      color: "info",
                      rounded: ""
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(VAlertTitle, { class: "mb-0" }, {
                      default: withCtx(() => [
                        createTextVNode(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")
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
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VTextField, {
                label: "Location Name",
                placeholder: "Empire Hub"
              }),
              createVNode("div", { class: "my-4" }, [
                createVNode(VCheckbox, { label: "Fulfil online orders from this location" })
              ]),
              createVNode(VAlert, {
                color: "info",
                variant: "tonal"
              }, {
                prepend: withCtx(() => [
                  createVNode(VAvatar, {
                    size: "28",
                    icon: "ri-information-line",
                    variant: "elevated",
                    color: "info",
                    rounded: ""
                  })
                ]),
                default: withCtx(() => [
                  createVNode(VAlertTitle, { class: "mb-0" }, {
                    default: withCtx(() => [
                      createTextVNode(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")
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
  _push(ssrRenderComponent(VCard, { title: "Address" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Country/religion",
                            placeholder: "Select Country",
                            items: ["United States", "UK", "Canada"]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Country/religion",
                              placeholder: "Select Country",
                              items: ["United States", "UK", "Canada"]
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Address",
                            placeholder: "123 , New Street"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Address",
                              placeholder: "123 , New Street"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Apartment, suite, etc.",
                            placeholder: "Empire Heights"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Apartment, suite, etc.",
                              placeholder: "Empire Heights"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Phone",
                            placeholder: "+1 (234) 456-7890"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Phone",
                              placeholder: "+1 (234) 456-7890"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "City",
                            placeholder: "New York"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "City",
                              placeholder: "New York"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "State",
                            placeholder: "NY"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "State",
                              placeholder: "NY"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "PIN code",
                            placeholder: "123897"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "PIN code",
                              placeholder: "123897"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Country/religion",
                            placeholder: "Select Country",
                            items: ["United States", "UK", "Canada"]
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Address",
                            placeholder: "123 , New Street"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Apartment, suite, etc.",
                            placeholder: "Empire Heights"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Phone",
                            placeholder: "+1 (234) 456-7890"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "City",
                            placeholder: "New York"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "State",
                            placeholder: "NY"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "PIN code",
                            placeholder: "123897"
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
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Country/religion",
                          placeholder: "Select Country",
                          items: ["United States", "UK", "Canada"]
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Address",
                          placeholder: "123 , New Street"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Apartment, suite, etc.",
                          placeholder: "Empire Heights"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Phone",
                          placeholder: "+1 (234) 456-7890"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "City",
                          placeholder: "New York"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "State",
                          placeholder: "NY"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "PIN code",
                          placeholder: "123897"
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
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Country/religion",
                        placeholder: "Select Country",
                        items: ["United States", "UK", "Canada"]
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Address",
                        placeholder: "123 , New Street"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Apartment, suite, etc.",
                        placeholder: "Empire Heights"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Phone",
                        placeholder: "+1 (234) 456-7890"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "City",
                        placeholder: "New York"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "State",
                        placeholder: "NY"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "PIN code",
                        placeholder: "123897"
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
  _push(`<div class="d-flex justify-end gap-x-4 mt-6">`);
  _push(ssrRenderComponent(VBtn, {
    color: "secondary",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discard `);
      } else {
        return [
          createTextVNode(" Discard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Save Changes`);
      } else {
        return [
          createTextVNode("Save Changes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsLocations.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SettingsLocations = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "SettingsNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    const customerNotifications = ref([
      {
        type: "New customer sign up",
        email: true,
        app: false
      },
      {
        type: "Customer account password reset",
        email: false,
        app: true
      },
      {
        type: "Customer account invite",
        email: false,
        app: false
      }
    ]);
    const shippingNotifications = ref([
      {
        type: "Picked up",
        email: true,
        app: false
      },
      {
        type: "Shipping update ",
        email: false,
        app: true
      },
      {
        type: "Delivered",
        email: false,
        app: false
      }
    ]);
    const ordersNotification = ref([
      {
        type: "Order purchase",
        email: true,
        app: false
      },
      {
        type: "Order cancelled",
        email: false,
        app: true
      },
      {
        type: "Order refund request",
        email: false,
        app: false
      },
      {
        type: "Order confirmation",
        email: false,
        app: true
      },
      {
        type: "Payment error",
        email: false,
        app: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}> Customer </h5>`);
                  _push3(ssrRenderComponent(VTable, { class: "notification-table text-no-wrap text-high-emphasis border rounded-xl mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}> TYPE </th><th scope="col"${_scopeId3}> EMAIL </th><th scope="col"${_scopeId3}> APP </th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(customerNotifications), (notification) => {
                          _push4(`<tr${_scopeId3}><td width="400px"${_scopeId3}>${ssrInterpolate(notification.type)}</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.email,
                            "onUpdate:modelValue": ($event) => notification.email = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.app,
                            "onUpdate:modelValue": ($event) => notification.app = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "col" }, " TYPE "),
                              createVNode("th", { scope: "col" }, " EMAIL "),
                              createVNode("th", { scope: "col" }, " APP ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(customerNotifications), (notification) => {
                              return openBlock(), createBlock("tr", {
                                key: notification.type
                              }, [
                                createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.email,
                                    "onUpdate:modelValue": ($event) => notification.email = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.app,
                                    "onUpdate:modelValue": ($event) => notification.app = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}> Orders </h5>`);
                  _push3(ssrRenderComponent(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}> TYPE </th><th scope="col"${_scopeId3}> EMAIL </th><th scope="col"${_scopeId3}> APP </th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(ordersNotification), (notification) => {
                          _push4(`<tr${_scopeId3}><td width="400px"${_scopeId3}>${ssrInterpolate(notification.type)}</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.email,
                            "onUpdate:modelValue": ($event) => notification.email = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.app,
                            "onUpdate:modelValue": ($event) => notification.app = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "col" }, " TYPE "),
                              createVNode("th", { scope: "col" }, " EMAIL "),
                              createVNode("th", { scope: "col" }, " APP ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ordersNotification), (notification) => {
                              return openBlock(), createBlock("tr", {
                                key: notification.type
                              }, [
                                createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.email,
                                    "onUpdate:modelValue": ($event) => notification.email = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.app,
                                    "onUpdate:modelValue": ($event) => notification.app = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}> Shipping </h5>`);
                  _push3(ssrRenderComponent(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}> TYPE </th><th scope="col"${_scopeId3}> EMAIL </th><th scope="col"${_scopeId3}> APP </th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(shippingNotifications), (notification) => {
                          _push4(`<tr${_scopeId3}><td width="400px"${_scopeId3}>${ssrInterpolate(notification.type)}</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.email,
                            "onUpdate:modelValue": ($event) => notification.email = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCheckbox, {
                            modelValue: notification.app,
                            "onUpdate:modelValue": ($event) => notification.app = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { scope: "col" }, " TYPE "),
                              createVNode("th", { scope: "col" }, " EMAIL "),
                              createVNode("th", { scope: "col" }, " APP ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(shippingNotifications), (notification) => {
                              return openBlock(), createBlock("tr", {
                                key: notification.type
                              }, [
                                createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.email,
                                    "onUpdate:modelValue": ($event) => notification.email = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: notification.app,
                                    "onUpdate:modelValue": ($event) => notification.app = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-4" }, " Customer "),
                    createVNode(VTable, { class: "notification-table text-no-wrap text-high-emphasis border rounded-xl mb-6" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "col" }, " TYPE "),
                            createVNode("th", { scope: "col" }, " EMAIL "),
                            createVNode("th", { scope: "col" }, " APP ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(customerNotifications), (notification) => {
                            return openBlock(), createBlock("tr", {
                              key: notification.type
                            }, [
                              createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.email,
                                  "onUpdate:modelValue": ($event) => notification.email = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.app,
                                  "onUpdate:modelValue": ($event) => notification.app = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 mb-4" }, " Orders "),
                    createVNode(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "col" }, " TYPE "),
                            createVNode("th", { scope: "col" }, " EMAIL "),
                            createVNode("th", { scope: "col" }, " APP ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ordersNotification), (notification) => {
                            return openBlock(), createBlock("tr", {
                              key: notification.type
                            }, [
                              createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.email,
                                  "onUpdate:modelValue": ($event) => notification.email = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.app,
                                  "onUpdate:modelValue": ($event) => notification.app = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("h5", { class: "text-h5 mb-4" }, " Shipping "),
                    createVNode(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { scope: "col" }, " TYPE "),
                            createVNode("th", { scope: "col" }, " EMAIL "),
                            createVNode("th", { scope: "col" }, " APP ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(shippingNotifications), (notification) => {
                            return openBlock(), createBlock("tr", {
                              key: notification.type
                            }, [
                              createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.email,
                                  "onUpdate:modelValue": ($event) => notification.email = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", null, [
                                createVNode(VCheckbox, {
                                  modelValue: notification.app,
                                  "onUpdate:modelValue": ($event) => notification.app = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]);
                          }), 128))
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-4" }, " Customer "),
                  createVNode(VTable, { class: "notification-table text-no-wrap text-high-emphasis border rounded-xl mb-6" }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, " TYPE "),
                          createVNode("th", { scope: "col" }, " EMAIL "),
                          createVNode("th", { scope: "col" }, " APP ")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(customerNotifications), (notification) => {
                          return openBlock(), createBlock("tr", {
                            key: notification.type
                          }, [
                            createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.email,
                                "onUpdate:modelValue": ($event) => notification.email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.app,
                                "onUpdate:modelValue": ($event) => notification.app = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("h5", { class: "text-h5 mb-4" }, " Orders "),
                  createVNode(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, " TYPE "),
                          createVNode("th", { scope: "col" }, " EMAIL "),
                          createVNode("th", { scope: "col" }, " APP ")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(ordersNotification), (notification) => {
                          return openBlock(), createBlock("tr", {
                            key: notification.type
                          }, [
                            createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.email,
                                "onUpdate:modelValue": ($event) => notification.email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.app,
                                "onUpdate:modelValue": ($event) => notification.app = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("h5", { class: "text-h5 mb-4" }, " Shipping "),
                  createVNode(VTable, { class: "notification-table border rounded-xl text-high-emphasis text-no-wrap mb-6" }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, " TYPE "),
                          createVNode("th", { scope: "col" }, " EMAIL "),
                          createVNode("th", { scope: "col" }, " APP ")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(shippingNotifications), (notification) => {
                          return openBlock(), createBlock("tr", {
                            key: notification.type
                          }, [
                            createVNode("td", { width: "400px" }, toDisplayString(notification.type), 1),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.email,
                                "onUpdate:modelValue": ($event) => notification.email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("td", null, [
                              createVNode(VCheckbox, {
                                modelValue: notification.app,
                                "onUpdate:modelValue": ($event) => notification.app = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]);
                        }), 128))
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
      _push(`<div class="d-flex justify-end gap-x-4">`);
      _push(ssrRenderComponent(VBtn, {
        color: "secondary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discard `);
          } else {
            return [
              createTextVNode(" Discard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save Changes`);
          } else {
            return [
              createTextVNode("Save Changes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsNotifications.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const paypal = "/build/assets/paypal-primary-JR2AHgCz.png";
const _sfc_main$3 = {
  __name: "SettingsPayment",
  __ssrInlineRender: true,
  setup(__props) {
    const isAddPaymentMethodsDialogVisible = ref(false);
    const isPaymentProvidersDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddPaymentMethodDialog = _sfc_main$7;
      const _component_PaymentProvidersDialog = _sfc_main$8;
      _push(`<!--[--><div data-v-ca59607d>`);
      _push(ssrRenderComponent(VCard, {
        class: "mb-6",
        title: "Payment providers"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-5" data-v-ca59607d${_scopeId2}> Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. </p>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    onClick: ($event) => isPaymentProvidersDialogVisible.value = !isPaymentProvidersDialogVisible.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Choose a provider `);
                      } else {
                        return [
                          createTextVNode(" Choose a provider ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "mb-5" }, " Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. "),
                    createVNode(VBtn, {
                      variant: "outlined",
                      onClick: ($event) => isPaymentProvidersDialogVisible.value = !isPaymentProvidersDialogVisible.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Choose a provider ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-5" }, " Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. "),
                  createVNode(VBtn, {
                    variant: "outlined",
                    onClick: ($event) => isPaymentProvidersDialogVisible.value = !isPaymentProvidersDialogVisible.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Choose a provider ")
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
      }, _parent));
      _push(ssrRenderComponent(VCard, {
        title: "Supported payment methods",
        subtitle: "Payment methods that are available with one of Vuexy's approved payment providers.",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 mb-5" data-v-ca59607d${_scopeId2}> Default </h6><div class="rounded-xl bg-var-theme-background pa-5 mb-5" data-v-ca59607d${_scopeId2}><div class="d-flex justify-space-between align-center mb-6" data-v-ca59607d${_scopeId2}><div class="rounded paypal-logo" data-v-ca59607d${_scopeId2}><img${ssrRenderAttr("src", unref(paypal))} alt="pixinvent" style="${ssrRenderStyle({ "padding-block": "6px", "padding-inline": "18px" })}" data-v-ca59607d${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(VBtn, { variant: "text" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Activate PayPal `);
                      } else {
                        return [
                          createTextVNode(" Activate PayPal ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-space-between flex-wrap mt-6 gap-x-4" data-v-ca59607d${_scopeId2}><div data-v-ca59607d${_scopeId2}><div class="text-body-2 mb-2" data-v-ca59607d${_scopeId2}> Provider </div><h6 class="text-h6" data-v-ca59607d${_scopeId2}> PayPal </h6></div><div data-v-ca59607d${_scopeId2}><div class="text-body-2 mb-2" data-v-ca59607d${_scopeId2}> Status </div>`);
                  _push3(ssrRenderComponent(VChip, {
                    color: "warning",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Inactive `);
                      } else {
                        return [
                          createTextVNode(" Inactive ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div data-v-ca59607d${_scopeId2}><div class="text-body-2 mb-2" data-v-ca59607d${_scopeId2}> Transaction Fee </div><h6 class="text-h6" data-v-ca59607d${_scopeId2}> 2.99% </h6></div></div></div>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !isAddPaymentMethodsDialogVisible.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Payment Methods `);
                      } else {
                        return [
                          createTextVNode(" Add Payment Methods ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 mb-5" }, " Default "),
                    createVNode("div", { class: "rounded-xl bg-var-theme-background pa-5 mb-5" }, [
                      createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                        createVNode("div", { class: "rounded paypal-logo" }, [
                          createVNode("img", {
                            src: unref(paypal),
                            alt: "pixinvent",
                            style: { "padding-block": "6px", "padding-inline": "18px" }
                          }, null, 8, ["src"])
                        ]),
                        createVNode(VBtn, { variant: "text" }, {
                          default: withCtx(() => [
                            createTextVNode(" Activate PayPal ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VDivider),
                      createVNode("div", { class: "d-flex justify-space-between flex-wrap mt-6 gap-x-4" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-body-2 mb-2" }, " Provider "),
                          createVNode("h6", { class: "text-h6" }, " PayPal ")
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-body-2 mb-2" }, " Status "),
                          createVNode(VChip, {
                            color: "warning",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Inactive ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-body-2 mb-2" }, " Transaction Fee "),
                          createVNode("h6", { class: "text-h6" }, " 2.99% ")
                        ])
                      ])
                    ]),
                    createVNode(VBtn, {
                      variant: "outlined",
                      onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !isAddPaymentMethodsDialogVisible.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add Payment Methods ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 mb-5" }, " Default "),
                  createVNode("div", { class: "rounded-xl bg-var-theme-background pa-5 mb-5" }, [
                    createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                      createVNode("div", { class: "rounded paypal-logo" }, [
                        createVNode("img", {
                          src: unref(paypal),
                          alt: "pixinvent",
                          style: { "padding-block": "6px", "padding-inline": "18px" }
                        }, null, 8, ["src"])
                      ]),
                      createVNode(VBtn, { variant: "text" }, {
                        default: withCtx(() => [
                          createTextVNode(" Activate PayPal ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VDivider),
                    createVNode("div", { class: "d-flex justify-space-between flex-wrap mt-6 gap-x-4" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "text-body-2 mb-2" }, " Provider "),
                        createVNode("h6", { class: "text-h6" }, " PayPal ")
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-body-2 mb-2" }, " Status "),
                        createVNode(VChip, {
                          color: "warning",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Inactive ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-body-2 mb-2" }, " Transaction Fee "),
                        createVNode("h6", { class: "text-h6" }, " 2.99% ")
                      ])
                    ])
                  ]),
                  createVNode(VBtn, {
                    variant: "outlined",
                    onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !isAddPaymentMethodsDialogVisible.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add Payment Methods ")
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
      }, _parent));
      _push(ssrRenderComponent(VCard, {
        title: "Manual payment methods",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-5" data-v-ca59607d${_scopeId2}> Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you&#39;ll need to approve their order before it can be fulfilled. </p>`);
                  _push3(ssrRenderComponent(VBtnGroup, {
                    style: _ctx.$vuetify.display.smAndUp ? null : { display: "none" },
                    divided: "",
                    variant: "outlined",
                    density: "compact",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add Manual Payment Methods `);
                            } else {
                              return [
                                createTextVNode(" Add Manual Payment Methods ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { icon: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "22",
                                icon: "ri-arrow-down-s-line"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VMenu, { activator: "parent" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: index,
                                              value: index
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: index,
                                                value: index
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: index,
                                              value: index
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
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
                                createVNode(VIcon, {
                                  size: "22",
                                  icon: "ri-arrow-down-s-line"
                                }),
                                createVNode(VMenu, { activator: "parent" }, {
                                  default: withCtx(() => [
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: index,
                                            value: index
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
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
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode(" Add Manual Payment Methods ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, { icon: "" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "22",
                                icon: "ri-arrow-down-s-line"
                              }),
                              createVNode(VMenu, { activator: "parent" }, {
                                default: withCtx(() => [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: index,
                                          value: index
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
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
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    class: "d-block d-sm-none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add Manual Payment Methods `);
                        _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: index,
                                        value: index
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: index,
                                          value: index
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: index,
                                        value: index
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
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
                          createTextVNode(" Add Manual Payment Methods "),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index,
                                      value: index
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
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
                    createVNode("p", { class: "mb-5" }, " Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve their order before it can be fulfilled. "),
                    withDirectives(createVNode(VBtnGroup, {
                      divided: "",
                      variant: "outlined",
                      density: "compact",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, null, {
                          default: withCtx(() => [
                            createTextVNode(" Add Manual Payment Methods ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, { icon: "" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "22",
                              icon: "ri-arrow-down-s-line"
                            }),
                            createVNode(VMenu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: index,
                                        value: index
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
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
                    }, 512), [
                      [vShow, _ctx.$vuetify.display.smAndUp]
                    ]),
                    createVNode(VBtn, {
                      variant: "outlined",
                      class: "d-block d-sm-none"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add Manual Payment Methods "),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: index,
                                    value: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-5" }, " Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve their order before it can be fulfilled. "),
                  withDirectives(createVNode(VBtnGroup, {
                    divided: "",
                    variant: "outlined",
                    density: "compact",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, null, {
                        default: withCtx(() => [
                          createTextVNode(" Add Manual Payment Methods ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, { icon: "" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "22",
                            icon: "ri-arrow-down-s-line"
                          }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index,
                                      value: index
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
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
                  }, 512), [
                    [vShow, _ctx.$vuetify.display.smAndUp]
                  ]),
                  createVNode(VBtn, {
                    variant: "outlined",
                    class: "d-block d-sm-none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add Manual Payment Methods "),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(["Create custom payment method", "Bank Deposit", "Money Order", "Cash on Delivery(COD)"], (item, index) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: index,
                                  value: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
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
      _push(`<div class="d-flex justify-end gap-x-4" data-v-ca59607d>`);
      _push(ssrRenderComponent(VBtn, {
        color: "secondary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discard `);
          } else {
            return [
              createTextVNode(" Discard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save Changes`);
          } else {
            return [
              createTextVNode("Save Changes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AddPaymentMethodDialog, {
        "is-dialog-visible": isAddPaymentMethodsDialogVisible.value,
        "onUpdate:isDialogVisible": ($event) => isAddPaymentMethodsDialogVisible.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_PaymentProvidersDialog, {
        "is-dialog-visible": isPaymentProvidersDialogVisible.value,
        "onUpdate:isDialogVisible": ($event) => isPaymentProvidersDialogVisible.value = $event
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsPayment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SettingsPayment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ca59607d"]]);
const _sfc_main$2 = {
  __name: "SettingsShippingAndDelivery",
  __ssrInlineRender: true,
  setup(__props) {
    const domesticTableData = [
      {
        rate: "Weight",
        condition: "5Kg-10Kg",
        price: "$9"
      },
      {
        rate: "VAT",
        condition: "12%",
        price: "$25"
      },
      {
        rate: "Duty",
        condition: "-",
        price: "-"
      }
    ];
    const InternationalTableData = [
      {
        rate: "Weight",
        condition: "5Kg-10Kg",
        price: "$9"
      },
      {
        rate: "VAT",
        condition: "12%",
        price: "$25"
      },
      {
        rate: "Duty",
        condition: "Japan",
        price: "$49"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, {
              title: "Shipping Zone",
              subtitle: "Choose where you ship and how much you charge for shipping at checkout."
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, { variant: "text" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Zone `);
                      } else {
                        return [
                          createTextVNode(" Create Zone ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, { variant: "text" }, {
                      default: withCtx(() => [
                        createTextVNode(" Create Zone ")
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
                  _push3(`<div class="mb-6"${_scopeId2}><div class="d-flex flex-wrap align-center mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    image: unref(avatar1),
                    size: "34",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="text-h6"${_scopeId2}> Domestic </h6><p class="text-body-2 mb-0"${_scopeId2}> United state of America </p></div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-pencil-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-pencil-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>RATE NAME</th><th${_scopeId3}>CONDITION</th><th${_scopeId3}>PRICE</th><th${_scopeId3}>ACTIONS</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(domesticTableData, (data, index) => {
                          _push4(`<tr${_scopeId3}><td${_scopeId3}>${ssrInterpolate(data.rate)}</td><td${_scopeId3}>${ssrInterpolate(data.condition)}</td><td${_scopeId3}>${ssrInterpolate(data.price)}</td><td style="${ssrRenderStyle({ "inline-size": "2rem" })}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_IconBtn, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, { icon: "ri-more-2-line" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "RATE NAME"),
                              createVNode("th", null, "CONDITION"),
                              createVNode("th", null, "PRICE"),
                              createVNode("th", null, "ACTIONS")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(domesticTableData, (data, index) => {
                              return createVNode("tr", { key: index }, [
                                createVNode("td", null, toDisplayString(data.rate), 1),
                                createVNode("td", null, toDisplayString(data.condition), 1),
                                createVNode("td", null, toDisplayString(data.price), 1),
                                createVNode("td", { style: { "inline-size": "2rem" } }, [
                                  createVNode(_component_IconBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-more-2-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add rate `);
                      } else {
                        return [
                          createTextVNode(" Add rate ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><div class="d-flex flex-wrap align-center mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    image: unref(flagUsa),
                    size: "34",
                    class: "me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}><h6 class="text-h6"${_scopeId2}> International </h6><p class="text-body-2 mb-0"${_scopeId2}> United state of America </p></div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-pencil-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-pencil-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>RATE NAME</th><th${_scopeId3}>CONDITION</th><th${_scopeId3}>PRICE</th><th${_scopeId3}>ACTIONS</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(InternationalTableData, (data, index) => {
                          _push4(`<tr${_scopeId3}><td${_scopeId3}>${ssrInterpolate(data.rate)}</td><td${_scopeId3}>${ssrInterpolate(data.condition)}</td><td${_scopeId3}>${ssrInterpolate(data.price)}</td><td style="${ssrRenderStyle({ "inline-size": "2rem" })}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_IconBtn, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, { icon: "ri-more-2-line" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "RATE NAME"),
                              createVNode("th", null, "CONDITION"),
                              createVNode("th", null, "PRICE"),
                              createVNode("th", null, "ACTIONS")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(InternationalTableData, (data, index) => {
                              return createVNode("tr", { key: index }, [
                                createVNode("td", null, toDisplayString(data.rate), 1),
                                createVNode("td", null, toDisplayString(data.condition), 1),
                                createVNode("td", null, toDisplayString(data.price), 1),
                                createVNode("td", { style: { "inline-size": "2rem" } }, [
                                  createVNode(_component_IconBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-more-2-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add rate `);
                      } else {
                        return [
                          createTextVNode(" Add rate ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("div", { class: "d-flex flex-wrap align-center mb-4" }, [
                        createVNode(VAvatar, {
                          image: unref(avatar1),
                          size: "34",
                          class: "me-2"
                        }, null, 8, ["image"]),
                        createVNode("div", null, [
                          createVNode("h6", { class: "text-h6" }, " Domestic "),
                          createVNode("p", { class: "text-body-2 mb-0" }, " United state of America ")
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-flex gap-1" }, [
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-pencil-line" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "RATE NAME"),
                              createVNode("th", null, "CONDITION"),
                              createVNode("th", null, "PRICE"),
                              createVNode("th", null, "ACTIONS")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(domesticTableData, (data, index) => {
                              return createVNode("tr", { key: index }, [
                                createVNode("td", null, toDisplayString(data.rate), 1),
                                createVNode("td", null, toDisplayString(data.condition), 1),
                                createVNode("td", null, toDisplayString(data.price), 1),
                                createVNode("td", { style: { "inline-size": "2rem" } }, [
                                  createVNode(_component_IconBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-more-2-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "outlined",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add rate ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "d-flex flex-wrap align-center mb-4" }, [
                        createVNode(VAvatar, {
                          image: unref(flagUsa),
                          size: "34",
                          class: "me-2"
                        }, null, 8, ["image"]),
                        createVNode("div", null, [
                          createVNode("h6", { class: "text-h6" }, " International "),
                          createVNode("p", { class: "text-body-2 mb-0" }, " United state of America ")
                        ]),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-flex gap-1" }, [
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-pencil-line" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "RATE NAME"),
                              createVNode("th", null, "CONDITION"),
                              createVNode("th", null, "PRICE"),
                              createVNode("th", null, "ACTIONS")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(InternationalTableData, (data, index) => {
                              return createVNode("tr", { key: index }, [
                                createVNode("td", null, toDisplayString(data.rate), 1),
                                createVNode("td", null, toDisplayString(data.condition), 1),
                                createVNode("td", null, toDisplayString(data.price), 1),
                                createVNode("td", { style: { "inline-size": "2rem" } }, [
                                  createVNode(_component_IconBtn, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-more-2-line" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]);
                            }), 64))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "outlined",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add rate ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardItem, {
                title: "Shipping Zone",
                subtitle: "Choose where you ship and how much you charge for shipping at checkout."
              }, {
                append: withCtx(() => [
                  createVNode(VBtn, { variant: "text" }, {
                    default: withCtx(() => [
                      createTextVNode(" Create Zone ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("div", { class: "d-flex flex-wrap align-center mb-4" }, [
                      createVNode(VAvatar, {
                        image: unref(avatar1),
                        size: "34",
                        class: "me-2"
                      }, null, 8, ["image"]),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-h6" }, " Domestic "),
                        createVNode("p", { class: "text-body-2 mb-0" }, " United state of America ")
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-flex gap-1" }, [
                        createVNode(_component_IconBtn, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-pencil-line" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_IconBtn, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "RATE NAME"),
                            createVNode("th", null, "CONDITION"),
                            createVNode("th", null, "PRICE"),
                            createVNode("th", null, "ACTIONS")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(domesticTableData, (data, index) => {
                            return createVNode("tr", { key: index }, [
                              createVNode("td", null, toDisplayString(data.rate), 1),
                              createVNode("td", null, toDisplayString(data.condition), 1),
                              createVNode("td", null, toDisplayString(data.price), 1),
                              createVNode("td", { style: { "inline-size": "2rem" } }, [
                                createVNode(_component_IconBtn, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-more-2-line" })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      variant: "outlined",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add rate ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-wrap align-center mb-4" }, [
                      createVNode(VAvatar, {
                        image: unref(flagUsa),
                        size: "34",
                        class: "me-2"
                      }, null, 8, ["image"]),
                      createVNode("div", null, [
                        createVNode("h6", { class: "text-h6" }, " International "),
                        createVNode("p", { class: "text-body-2 mb-0" }, " United state of America ")
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-flex gap-1" }, [
                        createVNode(_component_IconBtn, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-pencil-line" })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_IconBtn, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(VTable, { class: "shipping-table border rounded-xl mb-4" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "RATE NAME"),
                            createVNode("th", null, "CONDITION"),
                            createVNode("th", null, "PRICE"),
                            createVNode("th", null, "ACTIONS")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(InternationalTableData, (data, index) => {
                            return createVNode("tr", { key: index }, [
                              createVNode("td", null, toDisplayString(data.rate), 1),
                              createVNode("td", null, toDisplayString(data.condition), 1),
                              createVNode("td", null, toDisplayString(data.price), 1),
                              createVNode("td", { style: { "inline-size": "2rem" } }, [
                                createVNode(_component_IconBtn, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-more-2-line" })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
                          }), 64))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      variant: "outlined",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add rate ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex justify-end gap-x-4">`);
      _push(ssrRenderComponent(VBtn, {
        color: "secondary",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discard `);
          } else {
            return [
              createTextVNode(" Discard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save Changes`);
          } else {
            return [
              createTextVNode("Save Changes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsShippingAndDelivery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VCard, {
    title: "Profile",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Store name",
                            placeholder: "ABCD"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Store name",
                              placeholder: "ABCD"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Phone",
                            placeholder: "+(123) 456-7890"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Phone",
                              placeholder: "+(123) 456-7890"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Store contact email",
                            placeholder: "johndoe@email.com"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Store contact email",
                              placeholder: "johndoe@email.com"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Sender email",
                            placeholder: "johndoe@email.com"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Sender email",
                              placeholder: "johndoe@email.com"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VAlert, {
                            color: "warning",
                            variant: "tonal",
                            icon: "ri-notification-3-line"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VAlertTitle, { class: "mb-0" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Confirm that you have access to johndoe@gmail.com in sender email settings. `);
                                    } else {
                                      return [
                                        createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VAlertTitle, { class: "mb-0" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
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
                            createVNode(VAlert, {
                              color: "warning",
                              variant: "tonal",
                              icon: "ri-notification-3-line"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAlertTitle, { class: "mb-0" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
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
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Store name",
                            placeholder: "ABCD"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Phone",
                            placeholder: "+(123) 456-7890"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Store contact email",
                            placeholder: "johndoe@email.com"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Sender email",
                            placeholder: "johndoe@email.com"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode(VAlert, {
                            color: "warning",
                            variant: "tonal",
                            icon: "ri-notification-3-line"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAlertTitle, { class: "mb-0" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
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
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Store name",
                          placeholder: "ABCD"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Phone",
                          placeholder: "+(123) 456-7890"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Store contact email",
                          placeholder: "johndoe@email.com"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Sender email",
                          placeholder: "johndoe@email.com"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          icon: "ri-notification-3-line"
                        }, {
                          default: withCtx(() => [
                            createVNode(VAlertTitle, { class: "mb-0" }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
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
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Store name",
                        placeholder: "ABCD"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Phone",
                        placeholder: "+(123) 456-7890"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Store contact email",
                        placeholder: "johndoe@email.com"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Sender email",
                        placeholder: "johndoe@email.com"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VAlert, {
                        color: "warning",
                        variant: "tonal",
                        icon: "ri-notification-3-line"
                      }, {
                        default: withCtx(() => [
                          createVNode(VAlertTitle, { class: "mb-0" }, {
                            default: withCtx(() => [
                              createTextVNode(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")
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
  _push(ssrRenderComponent(VCard, {
    title: "Billing Information",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Legal business name",
                            placeholder: "Pixinvent"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Legal business name",
                              placeholder: "Pixinvent"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Country*",
                            items: ["United States", "Canada", "UK"],
                            placeholder: "Canada"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Country*",
                              items: ["United States", "Canada", "UK"],
                              placeholder: "Canada"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            placeholder: "126, New Street",
                            label: "Address"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              placeholder: "126, New Street",
                              label: "Address"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Apartment,suit, etc.",
                            placeholder: "Empire Heights"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Apartment,suit, etc.",
                              placeholder: "Empire Heights"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "City",
                            placeholder: "New York"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "City",
                              placeholder: "New York"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "State",
                            placeholder: "NY"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "State",
                              placeholder: "NY"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "PIN Code",
                            placeholder: "111011"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "PIN Code",
                              placeholder: "111011"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Legal business name",
                            placeholder: "Pixinvent"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Country*",
                            items: ["United States", "Canada", "UK"],
                            placeholder: "Canada"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            placeholder: "126, New Street",
                            label: "Address"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Apartment,suit, etc.",
                            placeholder: "Empire Heights"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "City",
                            placeholder: "New York"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "State",
                            placeholder: "NY"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "PIN Code",
                            placeholder: "111011"
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
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Legal business name",
                          placeholder: "Pixinvent"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Country*",
                          items: ["United States", "Canada", "UK"],
                          placeholder: "Canada"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          placeholder: "126, New Street",
                          label: "Address"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Apartment,suit, etc.",
                          placeholder: "Empire Heights"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "City",
                          placeholder: "New York"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "State",
                          placeholder: "NY"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "PIN Code",
                          placeholder: "111011"
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
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Legal business name",
                        placeholder: "Pixinvent"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Country*",
                        items: ["United States", "Canada", "UK"],
                        placeholder: "Canada"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        placeholder: "126, New Street",
                        label: "Address"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Apartment,suit, etc.",
                        placeholder: "Empire Heights"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "City",
                        placeholder: "New York"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "State",
                        placeholder: "NY"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "PIN Code",
                        placeholder: "111011"
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
  _push(ssrRenderComponent(VCard, {
    title: "Time zone and units of measurement",
    subtitle: "Used to calculate product prices, shipping weights, and order times.",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Time zone",
                            items: ["(UTC-12:00) International Date Line West", "(UTC-11:00) Coordinated Universal Time-11", "(UTC-09:00) Alaska", "(UTC-08:00) Baja California"],
                            placeholder: "(UTC-12:00) International Date Line West"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Time zone",
                              items: ["(UTC-12:00) International Date Line West", "(UTC-11:00) Coordinated Universal Time-11", "(UTC-09:00) Alaska", "(UTC-08:00) Baja California"],
                              placeholder: "(UTC-12:00) International Date Line West"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Unit system",
                            items: ["Metric System", "Imperial", "International System"],
                            placeholder: "Metric System"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Unit system",
                              items: ["Metric System", "Imperial", "International System"],
                              placeholder: "Metric System"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VSelect, {
                            label: "Default weight unit",
                            placeholder: "Kilogram",
                            items: ["Kilogram", "Pounds", "Gram"]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VSelect, {
                              label: "Default weight unit",
                              placeholder: "Kilogram",
                              items: ["Kilogram", "Pounds", "Gram"]
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Time zone",
                            items: ["(UTC-12:00) International Date Line West", "(UTC-11:00) Coordinated Universal Time-11", "(UTC-09:00) Alaska", "(UTC-08:00) Baja California"],
                            placeholder: "(UTC-12:00) International Date Line West"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Unit system",
                            items: ["Metric System", "Imperial", "International System"],
                            placeholder: "Metric System"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            label: "Default weight unit",
                            placeholder: "Kilogram",
                            items: ["Kilogram", "Pounds", "Gram"]
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
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Time zone",
                          items: ["(UTC-12:00) International Date Line West", "(UTC-11:00) Coordinated Universal Time-11", "(UTC-09:00) Alaska", "(UTC-08:00) Baja California"],
                          placeholder: "(UTC-12:00) International Date Line West"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Unit system",
                          items: ["Metric System", "Imperial", "International System"],
                          placeholder: "Metric System"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          label: "Default weight unit",
                          placeholder: "Kilogram",
                          items: ["Kilogram", "Pounds", "Gram"]
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
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Time zone",
                        items: ["(UTC-12:00) International Date Line West", "(UTC-11:00) Coordinated Universal Time-11", "(UTC-09:00) Alaska", "(UTC-08:00) Baja California"],
                        placeholder: "(UTC-12:00) International Date Line West"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Unit system",
                        items: ["Metric System", "Imperial", "International System"],
                        placeholder: "Metric System"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        label: "Default weight unit",
                        placeholder: "Kilogram",
                        items: ["Kilogram", "Pounds", "Gram"]
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
  _push(ssrRenderComponent(VCard, {
    title: "Store currency",
    subtitle: "The currency your products are sold in.",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VSelect, {
                label: "Store currency",
                items: ["USD", "INR", "Euro", "Pound"],
                placeholder: "USD"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VSelect, {
                  label: "Store currency",
                  items: ["USD", "INR", "Euro", "Pound"],
                  placeholder: "USD"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VSelect, {
                label: "Store currency",
                items: ["USD", "INR", "Euro", "Pound"],
                placeholder: "USD"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VCard, {
    title: "Order id format",
    subtitle: "Shown on the Orders page, customer pages, and customer order notifications to identify orders.",
    class: "mb-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Prefix",
                            prefix: "#"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Prefix",
                              prefix: "#"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VTextField, {
                            label: "Suffix",
                            suffix: "$"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VTextField, {
                              label: "Suffix",
                              suffix: "$"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Prefix",
                            prefix: "#"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Suffix",
                            suffix: "$"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="mt-2"${_scopeId2}> Your order ID will appear as #1001, #1002, #1003 ... </div>`);
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
                          label: "Prefix",
                          prefix: "#"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          label: "Suffix",
                          suffix: "$"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-2" }, " Your order ID will appear as #1001, #1002, #1003 ... ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Prefix",
                        prefix: "#"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        label: "Suffix",
                        suffix: "$"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-2" }, " Your order ID will appear as #1001, #1002, #1003 ... ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="d-flex justify-end gap-x-4">`);
  _push(ssrRenderComponent(VBtn, {
    color: "secondary",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discard `);
      } else {
        return [
          createTextVNode(" Discard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Save Changes`);
      } else {
        return [
          createTextVNode("Save Changes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/settings/SettingsStoreDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SettingsStoreDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const tabsData = [
      {
        icon: "ri-store-2-line",
        title: "Store Details"
      },
      {
        icon: "ri-bank-card-line",
        title: "Payments"
      },
      {
        icon: "ri-shopping-cart-line",
        title: "Checkout"
      },
      {
        icon: "ri-car-line",
        title: "Shipping & Delivery"
      },
      {
        icon: "ri-map-pin-2-line",
        title: "Location"
      },
      {
        icon: "ri-notification-4-line",
        title: "Notifications"
      }
    ];
    const activeTab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}> Getting Started </h5>`);
                  _push3(ssrRenderComponent(VTabs, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    direction: "vertical",
                    class: "v-tabs-pill disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(tabsData, (tabItem, index) => {
                          _push4(ssrRenderComponent(VTab, {
                            key: index,
                            "prepend-icon": tabItem.icon
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(tabItem.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(tabItem.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tabItem, index) => {
                            return createVNode(VTab, {
                              key: index,
                              "prepend-icon": tabItem.icon
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tabItem.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["prepend-icon"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-4" }, " Getting Started "),
                    createVNode(VTabs, {
                      modelValue: unref(activeTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                      direction: "vertical",
                      class: "v-tabs-pill disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tabItem, index) => {
                          return createVNode(VTab, {
                            key: index,
                            "prepend-icon": tabItem.icon
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(tabItem.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["prepend-icon"]);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    class: "disable-tab-transition",
                    touch: false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(SettingsStoreDetails, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(SettingsStoreDetails)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(SettingsPayment, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(SettingsPayment)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(SettingsLocations, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(SettingsLocations)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(SettingsStoreDetails)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(SettingsPayment)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(SettingsLocations)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
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
                    createVNode(VWindow, {
                      modelValue: unref(activeTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                      class: "disable-tab-transition",
                      touch: false
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(SettingsStoreDetails)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(SettingsPayment)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(SettingsLocations)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-4" }, " Getting Started "),
                  createVNode(VTabs, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    direction: "vertical",
                    class: "v-tabs-pill disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(tabsData, (tabItem, index) => {
                        return createVNode(VTab, {
                          key: index,
                          "prepend-icon": tabItem.icon
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tabItem.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["prepend-icon"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    class: "disable-tab-transition",
                    touch: false
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(SettingsStoreDetails)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(SettingsPayment)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(SettingsLocations)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
