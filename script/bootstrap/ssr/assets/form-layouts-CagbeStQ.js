import { _ as __unplugin_components_0 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { useSSRContext, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, isRef, withModifiers, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VCard, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from "./VExpansionPanel-BASkbcYj.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { _ as _sfc_main$b } from "./AppDateTimePicker-B0c_dYDs.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { r as requiredValidator, e as emailValidator } from "./validators-CW3JK3pA.js";
import { V as VAutocomplete } from "./VAutocomplete-DPac00nm.js";
import { _ as _sfc_main$c } from "./AppCardCode-DkpMhnYF.js";
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
import "./VImg-D-rbsD1g.js";
/* empty css               */
import "./forwardRefs-IZGbB77j.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "vue-flatpickr-component";
import "./helpers-DX2i3Kdq.js";
import "./filter-BC4fOy6c.js";
import "prismjs";
import "vue-prism-component";
const _sfc_main$a = {
  __name: "DemoFormLayoutFormSticky",
  __ssrInlineRender: true,
  setup(__props) {
    const radioContent = [
      {
        title: "Standard",
        desc: "Delivery in 3-5 days.",
        value: "standard",
        icon: "ri-briefcase-line"
      },
      {
        title: "Express",
        desc: "Delivery within 2 days.",
        value: "express",
        icon: "ri-rocket-line"
      },
      {
        title: "Overnight",
        desc: "Delivery within a days.",
        value: "overnight",
        icon: "ri-vip-crown-line"
      }
    ];
    const promoCodeList = [
      {
        code: "TAKEITALL",
        desc: "Apply this code to get 15% discount on orders above 20$."
      },
      {
        code: "FESTIVE10",
        desc: "Apply this code to get 10% discount on all orders."
      },
      {
        code: "MYSTERYDEAL",
        desc: "Apply this code to get discount between 10% - 50%."
      }
    ];
    const formData = ref({
      fullName: "",
      email: "",
      contactNumber: null,
      altContactNumber: null,
      address: "",
      pincode: null,
      Landmark: "",
      city: "",
      state: null,
      defaultAddress: false,
      addressType: "home",
      deliveryType: "standard",
      promoCode: "",
      paymentMethod: "card",
      cardNumber: null,
      cardName: "",
      cardExDate: "",
      cardCvv: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadiosWithIcon = __unplugin_components_0;
      _push(ssrRenderComponent(VCard, mergeProps({ class: "overflow-visible" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 sticky-header overflow-hidden rounded-t" data-v-82f47edd${_scopeId}><div class="d-flex align-center gap-4 flex-wrap bg-custom-background pa-6" data-v-82f47edd${_scopeId}>`);
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sticky Action Bar`);
                } else {
                  return [
                    createTextVNode("Sticky Action Bar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`<div data-v-82f47edd${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              variant: "tonal",
              class: "me-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back `);
                } else {
                  return [
                    createTextVNode(" Back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Place Order`);
                } else {
                  return [
                    createTextVNode("Place Order")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          md: "8",
                          cols: "12",
                          class: "mx-auto"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="text-lg font-weight-medium mb-6" data-v-82f47edd${_scopeId5}> 1. Delivery Address </h2>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).fullName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                                  label: "Full Name",
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).fullName,
                                                    "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                                    label: "Full Name",
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  label: "Email",
                                                  placeholder: "john.doe",
                                                  suffix: "@example.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).email,
                                                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                    label: "Email",
                                                    placeholder: "john.doe",
                                                    suffix: "@example.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).contactNumber,
                                                  "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                                  label: "Contact Number",
                                                  placeholder: "658 123 4567",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).contactNumber,
                                                    "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                                    label: "Contact Number",
                                                    placeholder: "658 123 4567",
                                                    type: "number"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).altContactNumber,
                                                  "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                                  label: "Alternate Number",
                                                  placeholder: "658 123 4567",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).altContactNumber,
                                                    "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                                    label: "Alternate Number",
                                                    placeholder: "658 123 4567",
                                                    type: "number"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextarea, {
                                                  modelValue: unref(formData).address,
                                                  "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                  label: "Address",
                                                  placeholder: "1456, Mall Road",
                                                  rows: "2"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextarea, {
                                                    modelValue: unref(formData).address,
                                                    "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                    label: "Address",
                                                    placeholder: "1456, Mall Road",
                                                    rows: "2"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                  label: "Pincode",
                                                  placeholder: "658468",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).pincode,
                                                    "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                    label: "Pincode",
                                                    placeholder: "658468",
                                                    type: "number"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).Landmark,
                                                  "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                                  label: "Landmark",
                                                  placeholder: "Nr. Wall Street"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).Landmark,
                                                    "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                                    label: "Landmark",
                                                    placeholder: "Nr. Wall Street"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).city,
                                                  "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                  label: "City",
                                                  placeholder: "Jackson"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).city,
                                                    "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                    label: "City",
                                                    placeholder: "Jackson"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(formData).state,
                                                  "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                                  label: "State",
                                                  placeholder: "California",
                                                  items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(formData).state,
                                                    "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                                    label: "State",
                                                    placeholder: "California",
                                                    items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCheckbox, {
                                                  modelValue: unref(formData).defaultAddress,
                                                  "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                                  label: "Use this as default delivery address"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCheckbox, {
                                                    modelValue: unref(formData).defaultAddress,
                                                    "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                                    label: "Use this as default delivery address"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p class="text-high-emphasis text-base mb-1" data-v-82f47edd${_scopeId7}> Address Type </p>`);
                                                _push8(ssrRenderComponent(VRadioGroup, {
                                                  modelValue: unref(formData).addressType,
                                                  "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                                  inline: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VRadio, {
                                                        label: "Home (All day delivery)",
                                                        value: "home"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VRadio, {
                                                        label: "Office (Delivery between 10 AM - 5 PM)",
                                                        value: "work"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VRadio, {
                                                          label: "Home (All day delivery)",
                                                          value: "home"
                                                        }),
                                                        createVNode(VRadio, {
                                                          label: "Office (Delivery between 10 AM - 5 PM)",
                                                          value: "work"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                                  createVNode(VRadioGroup, {
                                                    modelValue: unref(formData).addressType,
                                                    "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                                    inline: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        label: "Home (All day delivery)",
                                                        value: "home"
                                                      }),
                                                      createVNode(VRadio, {
                                                        label: "Office (Delivery between 10 AM - 5 PM)",
                                                        value: "work"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).fullName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                                  label: "Full Name",
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
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  label: "Email",
                                                  placeholder: "john.doe",
                                                  suffix: "@example.com"
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
                                                  modelValue: unref(formData).contactNumber,
                                                  "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                                  label: "Contact Number",
                                                  placeholder: "658 123 4567",
                                                  type: "number"
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
                                                  modelValue: unref(formData).altContactNumber,
                                                  "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                                  label: "Alternate Number",
                                                  placeholder: "658 123 4567",
                                                  type: "number"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: unref(formData).address,
                                                  "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                  label: "Address",
                                                  placeholder: "1456, Mall Road",
                                                  rows: "2"
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
                                                  modelValue: unref(formData).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                  label: "Pincode",
                                                  placeholder: "658468",
                                                  type: "number"
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
                                                  modelValue: unref(formData).Landmark,
                                                  "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                                  label: "Landmark",
                                                  placeholder: "Nr. Wall Street"
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
                                                  modelValue: unref(formData).city,
                                                  "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                  label: "City",
                                                  placeholder: "Jackson"
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
                                                  modelValue: unref(formData).state,
                                                  "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                                  label: "State",
                                                  placeholder: "California",
                                                  items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VCheckbox, {
                                                  modelValue: unref(formData).defaultAddress,
                                                  "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                                  label: "Use this as default delivery address"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                                createVNode(VRadioGroup, {
                                                  modelValue: unref(formData).addressType,
                                                  "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                                  inline: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      label: "Home (All day delivery)",
                                                      value: "home"
                                                    }),
                                                    createVNode(VRadio, {
                                                      label: "Office (Delivery between 10 AM - 5 PM)",
                                                      value: "work"
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-lg font-weight-medium mb-6" data-v-82f47edd${_scopeId5}> 2. Delivery Type </h2>`);
                                    _push6(ssrRenderComponent(_component_CustomRadiosWithIcon, {
                                      "selected-radio": unref(formData).deliveryType,
                                      "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                      "radio-content": radioContent,
                                      "grid-column": { sm: "4", cols: "12" }
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-lg font-weight-medium mb-6" data-v-82f47edd${_scopeId5}> 3. Apply Promo code </h2><div class="d-flex align-center gap-4" data-v-82f47edd${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(formData).promoCode,
                                      "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                      density: "compact",
                                      placeholder: "TAKEITALL"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Apply`);
                                        } else {
                                          return [
                                            createTextVNode("Apply")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="d-flex align-center gap-2 my-4" data-v-82f47edd${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VDivider, { style: { "border-style": "dashed" } }, null, _parent6, _scopeId5));
                                    _push6(`<span data-v-82f47edd${_scopeId5}>OR</span>`);
                                    _push6(ssrRenderComponent(VDivider, { style: { "border-style": "dashed" } }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VList, {
                                      class: "border rounded py-0",
                                      lines: "two"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(promoCodeList, (item, index) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: item.code,
                                              title: item.code,
                                              subtitle: item.desc,
                                              class: index !== 0 ? "border-t" : ""
                                            }, {
                                              append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VBtn, { variant: "outlined" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Apply `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Apply ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VBtn, { variant: "outlined" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Apply ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                              return createVNode(VListItem, {
                                                key: item.code,
                                                title: item.code,
                                                subtitle: item.desc,
                                                class: index !== 0 ? "border-t" : ""
                                              }, {
                                                append: withCtx(() => [
                                                  createVNode(VBtn, { variant: "outlined" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Apply ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["title", "subtitle", "class"]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h2 class="text-lg font-weight-medium mb-6" data-v-82f47edd${_scopeId5}> 4. Payment Method </h2>`);
                                    _push6(ssrRenderComponent(VRadioGroup, {
                                      modelValue: unref(formData).paymentMethod,
                                      "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                      inline: "",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRadio, {
                                            value: "card",
                                            label: "Credit/Debit/ATM Card"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRadio, {
                                            value: "cash-on-delivery",
                                            label: "Cash On Delivery"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRadio, {
                                              value: "card",
                                              label: "Credit/Debit/ATM Card"
                                            }),
                                            createVNode(VRadio, {
                                              value: "cash-on-delivery",
                                              label: "Cash On Delivery"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, {
                                      style: unref(formData).paymentMethod === "card" ? null : { display: "none" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Card Number",
                                                  placeholder: "1356 3215 6548 7898"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Card Number",
                                                    placeholder: "1356 3215 6548 7898"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Name",
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Name",
                                                    placeholder: "John Doe"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Exp. Date",
                                                  placeholder: "MM/YY"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Exp. Date",
                                                    placeholder: "MM/YY"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "CVV Code",
                                                  placeholder: "654"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "CVV Code",
                                                    placeholder: "654"
                                                  })
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
                                                  label: "Card Number",
                                                  placeholder: "1356 3215 6548 7898"
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
                                                  label: "Name",
                                                  placeholder: "John Doe"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Exp. Date",
                                                  placeholder: "MM/YY"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "CVV Code",
                                                  placeholder: "654"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div style="${ssrRenderStyle(unref(formData).paymentMethod === "cash-on-delivery" ? null : { display: "none" })}" data-v-82f47edd${_scopeId5}><p data-v-82f47edd${_scopeId5}> Cash on delivery is a mode of payment where you make the payment after the goods/services are received. </p><p data-v-82f47edd${_scopeId5}>You can pay cash or make the payment via debit/credit card directly to the delivery person.</p></div>`);
                                  } else {
                                    return [
                                      createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 1. Delivery Address "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).fullName,
                                                "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                                label: "Full Name",
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
                                                modelValue: unref(formData).email,
                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                label: "Email",
                                                placeholder: "john.doe",
                                                suffix: "@example.com"
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
                                                modelValue: unref(formData).contactNumber,
                                                "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                                label: "Contact Number",
                                                placeholder: "658 123 4567",
                                                type: "number"
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
                                                modelValue: unref(formData).altContactNumber,
                                                "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                                label: "Alternate Number",
                                                placeholder: "658 123 4567",
                                                type: "number"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: unref(formData).address,
                                                "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                label: "Address",
                                                placeholder: "1456, Mall Road",
                                                rows: "2"
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
                                                modelValue: unref(formData).pincode,
                                                "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                label: "Pincode",
                                                placeholder: "658468",
                                                type: "number"
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
                                                modelValue: unref(formData).Landmark,
                                                "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                                label: "Landmark",
                                                placeholder: "Nr. Wall Street"
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
                                                modelValue: unref(formData).city,
                                                "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                label: "City",
                                                placeholder: "Jackson"
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
                                                modelValue: unref(formData).state,
                                                "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                                label: "State",
                                                placeholder: "California",
                                                items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VCheckbox, {
                                                modelValue: unref(formData).defaultAddress,
                                                "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                                label: "Use this as default delivery address"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(formData).addressType,
                                                "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VRadio, {
                                                    label: "Home (All day delivery)",
                                                    value: "home"
                                                  }),
                                                  createVNode(VRadio, {
                                                    label: "Office (Delivery between 10 AM - 5 PM)",
                                                    value: "work"
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 2. Delivery Type "),
                                      createVNode(_component_CustomRadiosWithIcon, {
                                        "selected-radio": unref(formData).deliveryType,
                                        "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                        "radio-content": radioContent,
                                        "grid-column": { sm: "4", cols: "12" }
                                      }, null, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 3. Apply Promo code "),
                                      createVNode("div", { class: "d-flex align-center gap-4" }, [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).promoCode,
                                          "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                          density: "compact",
                                          placeholder: "TAKEITALL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VBtn, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Apply")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex align-center gap-2 my-4" }, [
                                        createVNode(VDivider, { style: { "border-style": "dashed" } }),
                                        createVNode("span", null, "OR"),
                                        createVNode(VDivider, { style: { "border-style": "dashed" } })
                                      ]),
                                      createVNode(VList, {
                                        class: "border rounded py-0",
                                        lines: "two"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                            return createVNode(VListItem, {
                                              key: item.code,
                                              title: item.code,
                                              subtitle: item.desc,
                                              class: index !== 0 ? "border-t" : ""
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(VBtn, { variant: "outlined" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Apply ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["title", "subtitle", "class"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 4. Payment Method "),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(formData).paymentMethod,
                                        "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                        inline: "",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            value: "card",
                                            label: "Credit/Debit/ATM Card"
                                          }),
                                          createVNode(VRadio, {
                                            value: "cash-on-delivery",
                                            label: "Cash On Delivery"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      withDirectives(createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Card Number",
                                                placeholder: "1356 3215 6548 7898"
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
                                                label: "Name",
                                                placeholder: "John Doe"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Exp. Date",
                                                placeholder: "MM/YY"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "CVV Code",
                                                placeholder: "654"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 512), [
                                        [vShow, unref(formData).paymentMethod === "card"]
                                      ]),
                                      withDirectives(createVNode("div", null, [
                                        createVNode("p", null, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. "),
                                        createVNode("p", null, "You can pay cash or make the payment via debit/credit card directly to the delivery person.")
                                      ], 512), [
                                        [vShow, unref(formData).paymentMethod === "cash-on-delivery"]
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 1. Delivery Address "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).fullName,
                                              "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                              label: "Full Name",
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
                                              modelValue: unref(formData).email,
                                              "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                              label: "Email",
                                              placeholder: "john.doe",
                                              suffix: "@example.com"
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
                                              modelValue: unref(formData).contactNumber,
                                              "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                              label: "Contact Number",
                                              placeholder: "658 123 4567",
                                              type: "number"
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
                                              modelValue: unref(formData).altContactNumber,
                                              "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                              label: "Alternate Number",
                                              placeholder: "658 123 4567",
                                              type: "number"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: unref(formData).address,
                                              "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                              label: "Address",
                                              placeholder: "1456, Mall Road",
                                              rows: "2"
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
                                              modelValue: unref(formData).pincode,
                                              "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                              label: "Pincode",
                                              placeholder: "658468",
                                              type: "number"
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
                                              modelValue: unref(formData).Landmark,
                                              "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                              label: "Landmark",
                                              placeholder: "Nr. Wall Street"
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
                                              modelValue: unref(formData).city,
                                              "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                              label: "City",
                                              placeholder: "Jackson"
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
                                              modelValue: unref(formData).state,
                                              "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                              label: "State",
                                              placeholder: "California",
                                              items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VCheckbox, {
                                              modelValue: unref(formData).defaultAddress,
                                              "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                              label: "Use this as default delivery address"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(formData).addressType,
                                              "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                              inline: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VRadio, {
                                                  label: "Home (All day delivery)",
                                                  value: "home"
                                                }),
                                                createVNode(VRadio, {
                                                  label: "Office (Delivery between 10 AM - 5 PM)",
                                                  value: "work"
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 2. Delivery Type "),
                                    createVNode(_component_CustomRadiosWithIcon, {
                                      "selected-radio": unref(formData).deliveryType,
                                      "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                      "radio-content": radioContent,
                                      "grid-column": { sm: "4", cols: "12" }
                                    }, null, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 3. Apply Promo code "),
                                    createVNode("div", { class: "d-flex align-center gap-4" }, [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).promoCode,
                                        "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                        density: "compact",
                                        placeholder: "TAKEITALL"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Apply")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "d-flex align-center gap-2 my-4" }, [
                                      createVNode(VDivider, { style: { "border-style": "dashed" } }),
                                      createVNode("span", null, "OR"),
                                      createVNode(VDivider, { style: { "border-style": "dashed" } })
                                    ]),
                                    createVNode(VList, {
                                      class: "border rounded py-0",
                                      lines: "two"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                          return createVNode(VListItem, {
                                            key: item.code,
                                            title: item.code,
                                            subtitle: item.desc,
                                            class: index !== 0 ? "border-t" : ""
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(VBtn, { variant: "outlined" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Apply ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "subtitle", "class"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 4. Payment Method "),
                                    createVNode(VRadioGroup, {
                                      modelValue: unref(formData).paymentMethod,
                                      "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                      inline: "",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRadio, {
                                          value: "card",
                                          label: "Credit/Debit/ATM Card"
                                        }),
                                        createVNode(VRadio, {
                                          value: "cash-on-delivery",
                                          label: "Cash On Delivery"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    withDirectives(createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Card Number",
                                              placeholder: "1356 3215 6548 7898"
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
                                              label: "Name",
                                              placeholder: "John Doe"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Exp. Date",
                                              placeholder: "MM/YY"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "CVV Code",
                                              placeholder: "654"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 512), [
                                      [vShow, unref(formData).paymentMethod === "card"]
                                    ]),
                                    withDirectives(createVNode("div", null, [
                                      createVNode("p", null, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. "),
                                      createVNode("p", null, "You can pay cash or make the payment via debit/credit card directly to the delivery person.")
                                    ], 512), [
                                      [vShow, unref(formData).paymentMethod === "cash-on-delivery"]
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
                          createVNode(VCol, {
                            md: "8",
                            cols: "12",
                            class: "mx-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 1. Delivery Address "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).fullName,
                                            "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                            label: "Full Name",
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
                                            modelValue: unref(formData).email,
                                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                            label: "Email",
                                            placeholder: "john.doe",
                                            suffix: "@example.com"
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
                                            modelValue: unref(formData).contactNumber,
                                            "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                            label: "Contact Number",
                                            placeholder: "658 123 4567",
                                            type: "number"
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
                                            modelValue: unref(formData).altContactNumber,
                                            "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                            label: "Alternate Number",
                                            placeholder: "658 123 4567",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(formData).address,
                                            "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                            label: "Address",
                                            placeholder: "1456, Mall Road",
                                            rows: "2"
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
                                            modelValue: unref(formData).pincode,
                                            "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                            label: "Pincode",
                                            placeholder: "658468",
                                            type: "number"
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
                                            modelValue: unref(formData).Landmark,
                                            "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                            label: "Landmark",
                                            placeholder: "Nr. Wall Street"
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
                                            modelValue: unref(formData).city,
                                            "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                            label: "City",
                                            placeholder: "Jackson"
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
                                            modelValue: unref(formData).state,
                                            "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                            label: "State",
                                            placeholder: "California",
                                            items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VCheckbox, {
                                            modelValue: unref(formData).defaultAddress,
                                            "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                            label: "Use this as default delivery address"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(formData).addressType,
                                            "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                            inline: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VRadio, {
                                                label: "Home (All day delivery)",
                                                value: "home"
                                              }),
                                              createVNode(VRadio, {
                                                label: "Office (Delivery between 10 AM - 5 PM)",
                                                value: "work"
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 2. Delivery Type "),
                                  createVNode(_component_CustomRadiosWithIcon, {
                                    "selected-radio": unref(formData).deliveryType,
                                    "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                    "radio-content": radioContent,
                                    "grid-column": { sm: "4", cols: "12" }
                                  }, null, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 3. Apply Promo code "),
                                  createVNode("div", { class: "d-flex align-center gap-4" }, [
                                    createVNode(VTextField, {
                                      modelValue: unref(formData).promoCode,
                                      "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                      density: "compact",
                                      placeholder: "TAKEITALL"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Apply")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "d-flex align-center gap-2 my-4" }, [
                                    createVNode(VDivider, { style: { "border-style": "dashed" } }),
                                    createVNode("span", null, "OR"),
                                    createVNode(VDivider, { style: { "border-style": "dashed" } })
                                  ]),
                                  createVNode(VList, {
                                    class: "border rounded py-0",
                                    lines: "two"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                        return createVNode(VListItem, {
                                          key: item.code,
                                          title: item.code,
                                          subtitle: item.desc,
                                          class: index !== 0 ? "border-t" : ""
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(VBtn, { variant: "outlined" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Apply ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["title", "subtitle", "class"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 4. Payment Method "),
                                  createVNode(VRadioGroup, {
                                    modelValue: unref(formData).paymentMethod,
                                    "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                    inline: "",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRadio, {
                                        value: "card",
                                        label: "Credit/Debit/ATM Card"
                                      }),
                                      createVNode(VRadio, {
                                        value: "cash-on-delivery",
                                        label: "Cash On Delivery"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  withDirectives(createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Number",
                                            placeholder: "1356 3215 6548 7898"
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
                                            label: "Name",
                                            placeholder: "John Doe"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Exp. Date",
                                            placeholder: "MM/YY"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "CVV Code",
                                            placeholder: "654"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 512), [
                                    [vShow, unref(formData).paymentMethod === "card"]
                                  ]),
                                  withDirectives(createVNode("div", null, [
                                    createVNode("p", null, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. "),
                                    createVNode("p", null, "You can pay cash or make the payment via debit/credit card directly to the delivery person.")
                                  ], 512), [
                                    [vShow, unref(formData).paymentMethod === "cash-on-delivery"]
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          md: "8",
                          cols: "12",
                          class: "mx-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 1. Delivery Address "),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).fullName,
                                          "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                          label: "Full Name",
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
                                          modelValue: unref(formData).email,
                                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                          label: "Email",
                                          placeholder: "john.doe",
                                          suffix: "@example.com"
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
                                          modelValue: unref(formData).contactNumber,
                                          "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                          label: "Contact Number",
                                          placeholder: "658 123 4567",
                                          type: "number"
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
                                          modelValue: unref(formData).altContactNumber,
                                          "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                          label: "Alternate Number",
                                          placeholder: "658 123 4567",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(formData).address,
                                          "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                          label: "Address",
                                          placeholder: "1456, Mall Road",
                                          rows: "2"
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
                                          modelValue: unref(formData).pincode,
                                          "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                          label: "Pincode",
                                          placeholder: "658468",
                                          type: "number"
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
                                          modelValue: unref(formData).Landmark,
                                          "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                          label: "Landmark",
                                          placeholder: "Nr. Wall Street"
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
                                          modelValue: unref(formData).city,
                                          "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                          label: "City",
                                          placeholder: "Jackson"
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
                                          modelValue: unref(formData).state,
                                          "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                          label: "State",
                                          placeholder: "California",
                                          items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VCheckbox, {
                                          modelValue: unref(formData).defaultAddress,
                                          "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                          label: "Use this as default delivery address"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(formData).addressType,
                                          "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                          inline: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VRadio, {
                                              label: "Home (All day delivery)",
                                              value: "home"
                                            }),
                                            createVNode(VRadio, {
                                              label: "Office (Delivery between 10 AM - 5 PM)",
                                              value: "work"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 2. Delivery Type "),
                                createVNode(_component_CustomRadiosWithIcon, {
                                  "selected-radio": unref(formData).deliveryType,
                                  "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                  "radio-content": radioContent,
                                  "grid-column": { sm: "4", cols: "12" }
                                }, null, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 3. Apply Promo code "),
                                createVNode("div", { class: "d-flex align-center gap-4" }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(formData).promoCode,
                                    "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                    density: "compact",
                                    placeholder: "TAKEITALL"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Apply")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "d-flex align-center gap-2 my-4" }, [
                                  createVNode(VDivider, { style: { "border-style": "dashed" } }),
                                  createVNode("span", null, "OR"),
                                  createVNode(VDivider, { style: { "border-style": "dashed" } })
                                ]),
                                createVNode(VList, {
                                  class: "border rounded py-0",
                                  lines: "two"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                      return createVNode(VListItem, {
                                        key: item.code,
                                        title: item.code,
                                        subtitle: item.desc,
                                        class: index !== 0 ? "border-t" : ""
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(VBtn, { variant: "outlined" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Apply ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["title", "subtitle", "class"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 4. Payment Method "),
                                createVNode(VRadioGroup, {
                                  modelValue: unref(formData).paymentMethod,
                                  "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                  inline: "",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRadio, {
                                      value: "card",
                                      label: "Credit/Debit/ATM Card"
                                    }),
                                    createVNode(VRadio, {
                                      value: "cash-on-delivery",
                                      label: "Cash On Delivery"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                withDirectives(createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Card Number",
                                          placeholder: "1356 3215 6548 7898"
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
                                          label: "Name",
                                          placeholder: "John Doe"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Exp. Date",
                                          placeholder: "MM/YY"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "CVV Code",
                                          placeholder: "654"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512), [
                                  [vShow, unref(formData).paymentMethod === "card"]
                                ]),
                                withDirectives(createVNode("div", null, [
                                  createVNode("p", null, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. "),
                                  createVNode("p", null, "You can pay cash or make the payment via debit/credit card directly to the delivery person.")
                                ], 512), [
                                  [vShow, unref(formData).paymentMethod === "cash-on-delivery"]
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
              createVNode("div", { class: "w-100 sticky-header overflow-hidden rounded-t" }, [
                createVNode("div", { class: "d-flex align-center gap-4 flex-wrap bg-custom-background pa-6" }, [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Sticky Action Bar")
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode("div", null, [
                    createVNode(VBtn, {
                      variant: "tonal",
                      class: "me-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Back ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, null, {
                      default: withCtx(() => [
                        createTextVNode("Place Order")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        md: "8",
                        cols: "12",
                        class: "mx-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 1. Delivery Address "),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).fullName,
                                        "onUpdate:modelValue": ($event) => unref(formData).fullName = $event,
                                        label: "Full Name",
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
                                        modelValue: unref(formData).email,
                                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                        label: "Email",
                                        placeholder: "john.doe",
                                        suffix: "@example.com"
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
                                        modelValue: unref(formData).contactNumber,
                                        "onUpdate:modelValue": ($event) => unref(formData).contactNumber = $event,
                                        label: "Contact Number",
                                        placeholder: "658 123 4567",
                                        type: "number"
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
                                        modelValue: unref(formData).altContactNumber,
                                        "onUpdate:modelValue": ($event) => unref(formData).altContactNumber = $event,
                                        label: "Alternate Number",
                                        placeholder: "658 123 4567",
                                        type: "number"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: unref(formData).address,
                                        "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                        label: "Address",
                                        placeholder: "1456, Mall Road",
                                        rows: "2"
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
                                        modelValue: unref(formData).pincode,
                                        "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                        label: "Pincode",
                                        placeholder: "658468",
                                        type: "number"
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
                                        modelValue: unref(formData).Landmark,
                                        "onUpdate:modelValue": ($event) => unref(formData).Landmark = $event,
                                        label: "Landmark",
                                        placeholder: "Nr. Wall Street"
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
                                        modelValue: unref(formData).city,
                                        "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                        label: "City",
                                        placeholder: "Jackson"
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
                                        modelValue: unref(formData).state,
                                        "onUpdate:modelValue": ($event) => unref(formData).state = $event,
                                        label: "State",
                                        placeholder: "California",
                                        items: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VCheckbox, {
                                        modelValue: unref(formData).defaultAddress,
                                        "onUpdate:modelValue": ($event) => unref(formData).defaultAddress = $event,
                                        label: "Use this as default delivery address"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-high-emphasis text-base mb-1" }, " Address Type "),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(formData).addressType,
                                        "onUpdate:modelValue": ($event) => unref(formData).addressType = $event,
                                        inline: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRadio, {
                                            label: "Home (All day delivery)",
                                            value: "home"
                                          }),
                                          createVNode(VRadio, {
                                            label: "Office (Delivery between 10 AM - 5 PM)",
                                            value: "work"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 2. Delivery Type "),
                              createVNode(_component_CustomRadiosWithIcon, {
                                "selected-radio": unref(formData).deliveryType,
                                "onUpdate:selectedRadio": ($event) => unref(formData).deliveryType = $event,
                                "radio-content": radioContent,
                                "grid-column": { sm: "4", cols: "12" }
                              }, null, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 3. Apply Promo code "),
                              createVNode("div", { class: "d-flex align-center gap-4" }, [
                                createVNode(VTextField, {
                                  modelValue: unref(formData).promoCode,
                                  "onUpdate:modelValue": ($event) => unref(formData).promoCode = $event,
                                  density: "compact",
                                  placeholder: "TAKEITALL"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Apply")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "d-flex align-center gap-2 my-4" }, [
                                createVNode(VDivider, { style: { "border-style": "dashed" } }),
                                createVNode("span", null, "OR"),
                                createVNode(VDivider, { style: { "border-style": "dashed" } })
                              ]),
                              createVNode(VList, {
                                class: "border rounded py-0",
                                lines: "two"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(promoCodeList, (item, index) => {
                                    return createVNode(VListItem, {
                                      key: item.code,
                                      title: item.code,
                                      subtitle: item.desc,
                                      class: index !== 0 ? "border-t" : ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(VBtn, { variant: "outlined" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Apply ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["title", "subtitle", "class"]);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h2", { class: "text-lg font-weight-medium mb-6" }, " 4. Payment Method "),
                              createVNode(VRadioGroup, {
                                modelValue: unref(formData).paymentMethod,
                                "onUpdate:modelValue": ($event) => unref(formData).paymentMethod = $event,
                                inline: "",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRadio, {
                                    value: "card",
                                    label: "Credit/Debit/ATM Card"
                                  }),
                                  createVNode(VRadio, {
                                    value: "cash-on-delivery",
                                    label: "Cash On Delivery"
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              withDirectives(createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Card Number",
                                        placeholder: "1356 3215 6548 7898"
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
                                        label: "Name",
                                        placeholder: "John Doe"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Exp. Date",
                                        placeholder: "MM/YY"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "CVV Code",
                                        placeholder: "654"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512), [
                                [vShow, unref(formData).paymentMethod === "card"]
                              ]),
                              withDirectives(createVNode("div", null, [
                                createVNode("p", null, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. "),
                                createVNode("p", null, "You can pay cash or make the payment via debit/credit card directly to the delivery person.")
                              ], 512), [
                                [vShow, unref(formData).paymentMethod === "cash-on-delivery"]
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
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutFormSticky.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-82f47edd"]]);
const _sfc_main$9 = {
  __name: "DemoFormLayoutCollapsible",
  __ssrInlineRender: true,
  setup(__props) {
    const stateList = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii"
    ];
    const radios = ref("home");
    const deliveryOption = ref("standard");
    const paymentMethod = ref("credit-debit-card");
    const panel = ref(0);
    const paymentMethods = [
      {
        radioValue: "credit-debit-card",
        radioLabel: "Credit/Debit/ATM Card",
        icon: "ri-bank-card-line"
      },
      {
        radioValue: "cash-on-delivery",
        radioLabel: "Cash On Delivery",
        icon: "ri-question-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VExpansionPanels, mergeProps({
        modelValue: unref(panel),
        "onUpdate:modelValue": ($event) => isRef(panel) ? panel.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delivery Address`);
                      } else {
                        return [
                          createTextVNode("Delivery Address")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          class: "pt-4 pb-2",
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Full Name",
                                            placeholder: "John Doe"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Full Name",
                                              placeholder: "John Doe"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Phone No",
                                            type: "number",
                                            placeholder: "+1 123 456 7890"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Phone No",
                                              type: "number",
                                              placeholder: "+1 123 456 7890"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            label: "Address",
                                            placeholder: "1234 Main St, New York, NY 10001, USA",
                                            rows: "3"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              label: "Address",
                                              placeholder: "1234 Main St, New York, NY 10001, USA",
                                              rows: "3"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Pincode",
                                            placeholder: "123456",
                                            type: "number"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Pincode",
                                              placeholder: "123456",
                                              type: "number"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Landmark",
                                            placeholder: "Near City Mall"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              label: "Landmark",
                                              placeholder: "Near City Mall"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "City",
                                            placeholder: "New York"
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            items: stateList,
                                            label: "State",
                                            placeholder: "Select State"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              items: stateList,
                                              label: "State",
                                              placeholder: "Select State"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VLabel, { class: "mb-3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Address Type `);
                                              } else {
                                                return [
                                                  createTextVNode(" Address Type ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRadioGroup, {
                                            modelValue: unref(radios),
                                            "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                            inline: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VRadio, {
                                                  label: "Home (All day delivery)",
                                                  value: "home"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VRadio, {
                                                  label: "Office (Delivery between 10 AM - 5 PM)",
                                                  value: "office"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode(VRadio, {
                                                      label: "Home (All day delivery)",
                                                      value: "home"
                                                    }),
                                                    createVNode(VRadio, {
                                                      label: "Office (Delivery between 10 AM - 5 PM)",
                                                      value: "office"
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VLabel, { class: "mb-3" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Address Type ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(radios),
                                              "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                              inline: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode(VRadio, {
                                                    label: "Home (All day delivery)",
                                                    value: "home"
                                                  }),
                                                  createVNode(VRadio, {
                                                    label: "Office (Delivery between 10 AM - 5 PM)",
                                                    value: "office"
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Full Name",
                                            placeholder: "John Doe"
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
                                            label: "Phone No",
                                            type: "number",
                                            placeholder: "+1 123 456 7890"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            label: "Address",
                                            placeholder: "1234 Main St, New York, NY 10001, USA",
                                            rows: "3"
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
                                            label: "Pincode",
                                            placeholder: "123456",
                                            type: "number"
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
                                            label: "Landmark",
                                            placeholder: "Near City Mall"
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
                                            label: "City",
                                            placeholder: "New York"
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
                                            items: stateList,
                                            label: "State",
                                            placeholder: "Select State"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VLabel, { class: "mb-3" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Address Type ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(radios),
                                            "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                            inline: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode(VRadio, {
                                                  label: "Home (All day delivery)",
                                                  value: "home"
                                                }),
                                                createVNode(VRadio, {
                                                  label: "Office (Delivery between 10 AM - 5 PM)",
                                                  value: "office"
                                                })
                                              ])
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
                              }, _parent5, _scopeId4));
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
                                          label: "Full Name",
                                          placeholder: "John Doe"
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
                                          label: "Phone No",
                                          type: "number",
                                          placeholder: "+1 123 456 7890"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          label: "Address",
                                          placeholder: "1234 Main St, New York, NY 10001, USA",
                                          rows: "3"
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
                                          label: "Pincode",
                                          placeholder: "123456",
                                          type: "number"
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
                                          label: "Landmark",
                                          placeholder: "Near City Mall"
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
                                          label: "City",
                                          placeholder: "New York"
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
                                          items: stateList,
                                          label: "State",
                                          placeholder: "Select State"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VLabel, { class: "mb-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Address Type ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(radios),
                                          "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                          inline: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode(VRadio, {
                                                label: "Home (All day delivery)",
                                                value: "home"
                                              }),
                                              createVNode(VRadio, {
                                                label: "Office (Delivery between 10 AM - 5 PM)",
                                                value: "office"
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          createVNode(VForm, {
                            class: "pt-4 pb-2",
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
                                        label: "Full Name",
                                        placeholder: "John Doe"
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
                                        label: "Phone No",
                                        type: "number",
                                        placeholder: "+1 123 456 7890"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        label: "Address",
                                        placeholder: "1234 Main St, New York, NY 10001, USA",
                                        rows: "3"
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
                                        label: "Pincode",
                                        placeholder: "123456",
                                        type: "number"
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
                                        label: "Landmark",
                                        placeholder: "Near City Mall"
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
                                        label: "City",
                                        placeholder: "New York"
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
                                        items: stateList,
                                        label: "State",
                                        placeholder: "Select State"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VLabel, { class: "mb-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Address Type ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(radios),
                                        "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                        inline: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(VRadio, {
                                              label: "Home (All day delivery)",
                                              value: "home"
                                            }),
                                            createVNode(VRadio, {
                                              label: "Office (Delivery between 10 AM - 5 PM)",
                                              value: "office"
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Delivery Address")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          class: "pt-4 pb-2",
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
                                      label: "Full Name",
                                      placeholder: "John Doe"
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
                                      label: "Phone No",
                                      type: "number",
                                      placeholder: "+1 123 456 7890"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      label: "Address",
                                      placeholder: "1234 Main St, New York, NY 10001, USA",
                                      rows: "3"
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
                                      label: "Pincode",
                                      placeholder: "123456",
                                      type: "number"
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
                                      label: "Landmark",
                                      placeholder: "Near City Mall"
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
                                      label: "City",
                                      placeholder: "New York"
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
                                      items: stateList,
                                      label: "State",
                                      placeholder: "Select State"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VLabel, { class: "mb-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Address Type ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRadioGroup, {
                                      modelValue: unref(radios),
                                      "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                      inline: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(VRadio, {
                                            label: "Home (All day delivery)",
                                            value: "home"
                                          }),
                                          createVNode(VRadio, {
                                            label: "Office (Delivery between 10 AM - 5 PM)",
                                            value: "office"
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delivery Options`);
                      } else {
                        return [
                          createTextVNode("Delivery Options")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadioGroup, {
                          modelValue: unref(deliveryOption),
                          "onUpdate:modelValue": ($event) => isRef(deliveryOption) ? deliveryOption.value = $event : null,
                          class: "delivery-options pt-4 pb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([unref(deliveryOption) === "standard" ? "active" : "", "delivery-option d-flex rounded-t"])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRadio, {
                                inline: "",
                                value: "standard",
                                class: "mt-n4"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="w-100"${_scopeId4}><div class="d-flex justify-space-between"${_scopeId4}><h6 class="text-base font-weight-medium"${_scopeId4}> Standard 3-5 Days </h6><span class="text-sm text-disabled"${_scopeId4}> Free </span></div><div class="text-sm text-medium-emphasis"${_scopeId4}> Friday, 15 Nov - Monday, 18 Nov </div></div></div><div class="${ssrRenderClass([unref(deliveryOption) === "express" ? "active" : "", "delivery-option d-flex"])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRadio, {
                                inline: "",
                                class: "mt-n4",
                                value: "express"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="w-100"${_scopeId4}><div class="d-flex justify-space-between"${_scopeId4}><h5 class="text-base font-weight-medium"${_scopeId4}> Express </h5><span class="text-sm text-disabled"${_scopeId4}> $5.00 </span></div><div class="text-sm text-medium-emphasis"${_scopeId4}> Friday, 15 Nov - Sunday, 17 Nov </div></div></div><div class="${ssrRenderClass([unref(deliveryOption) === "overnight" ? "active" : "", "delivery-option d-flex rounded-b"])}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VRadio, {
                                inline: "",
                                class: "mt-n4",
                                value: "overnight"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="w-100"${_scopeId4}><div class="d-flex justify-space-between"${_scopeId4}><h6 class="text-base font-weight-medium"${_scopeId4}> Overnight </h6><span class="text-sm text-disabled"${_scopeId4}> $10.00 </span></div><div class="text-sm text-medium-emphasis"${_scopeId4}> Friday, 15 Nov - Saturday, 16 Nov </div></div></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: ["delivery-option d-flex rounded-t", unref(deliveryOption) === "standard" ? "active" : ""],
                                  onClick: ($event) => deliveryOption.value = "standard"
                                }, [
                                  createVNode(VRadio, {
                                    inline: "",
                                    value: "standard",
                                    class: "mt-n4"
                                  }),
                                  createVNode("div", { class: "w-100" }, [
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("h6", { class: "text-base font-weight-medium" }, " Standard 3-5 Days "),
                                      createVNode("span", { class: "text-sm text-disabled" }, " Free ")
                                    ]),
                                    createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Monday, 18 Nov ")
                                  ])
                                ], 10, ["onClick"]),
                                createVNode("div", {
                                  class: ["delivery-option d-flex", unref(deliveryOption) === "express" ? "active" : ""],
                                  onClick: ($event) => deliveryOption.value = "express"
                                }, [
                                  createVNode(VRadio, {
                                    inline: "",
                                    class: "mt-n4",
                                    value: "express"
                                  }),
                                  createVNode("div", { class: "w-100" }, [
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("h5", { class: "text-base font-weight-medium" }, " Express "),
                                      createVNode("span", { class: "text-sm text-disabled" }, " $5.00 ")
                                    ]),
                                    createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Sunday, 17 Nov ")
                                  ])
                                ], 10, ["onClick"]),
                                createVNode("div", {
                                  class: ["delivery-option d-flex rounded-b", unref(deliveryOption) === "overnight" ? "active" : ""],
                                  onClick: ($event) => deliveryOption.value = "overnight"
                                }, [
                                  createVNode(VRadio, {
                                    inline: "",
                                    class: "mt-n4",
                                    value: "overnight"
                                  }),
                                  createVNode("div", { class: "w-100" }, [
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("h6", { class: "text-base font-weight-medium" }, " Overnight "),
                                      createVNode("span", { class: "text-sm text-disabled" }, " $10.00 ")
                                    ]),
                                    createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Saturday, 16 Nov ")
                                  ])
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadioGroup, {
                            modelValue: unref(deliveryOption),
                            "onUpdate:modelValue": ($event) => isRef(deliveryOption) ? deliveryOption.value = $event : null,
                            class: "delivery-options pt-4 pb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["delivery-option d-flex rounded-t", unref(deliveryOption) === "standard" ? "active" : ""],
                                onClick: ($event) => deliveryOption.value = "standard"
                              }, [
                                createVNode(VRadio, {
                                  inline: "",
                                  value: "standard",
                                  class: "mt-n4"
                                }),
                                createVNode("div", { class: "w-100" }, [
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("h6", { class: "text-base font-weight-medium" }, " Standard 3-5 Days "),
                                    createVNode("span", { class: "text-sm text-disabled" }, " Free ")
                                  ]),
                                  createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Monday, 18 Nov ")
                                ])
                              ], 10, ["onClick"]),
                              createVNode("div", {
                                class: ["delivery-option d-flex", unref(deliveryOption) === "express" ? "active" : ""],
                                onClick: ($event) => deliveryOption.value = "express"
                              }, [
                                createVNode(VRadio, {
                                  inline: "",
                                  class: "mt-n4",
                                  value: "express"
                                }),
                                createVNode("div", { class: "w-100" }, [
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("h5", { class: "text-base font-weight-medium" }, " Express "),
                                    createVNode("span", { class: "text-sm text-disabled" }, " $5.00 ")
                                  ]),
                                  createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Sunday, 17 Nov ")
                                ])
                              ], 10, ["onClick"]),
                              createVNode("div", {
                                class: ["delivery-option d-flex rounded-b", unref(deliveryOption) === "overnight" ? "active" : ""],
                                onClick: ($event) => deliveryOption.value = "overnight"
                              }, [
                                createVNode(VRadio, {
                                  inline: "",
                                  class: "mt-n4",
                                  value: "overnight"
                                }),
                                createVNode("div", { class: "w-100" }, [
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("h6", { class: "text-base font-weight-medium" }, " Overnight "),
                                    createVNode("span", { class: "text-sm text-disabled" }, " $10.00 ")
                                  ]),
                                  createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Saturday, 16 Nov ")
                                ])
                              ], 10, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Delivery Options")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createVNode(VRadioGroup, {
                          modelValue: unref(deliveryOption),
                          "onUpdate:modelValue": ($event) => isRef(deliveryOption) ? deliveryOption.value = $event : null,
                          class: "delivery-options pt-4 pb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: ["delivery-option d-flex rounded-t", unref(deliveryOption) === "standard" ? "active" : ""],
                              onClick: ($event) => deliveryOption.value = "standard"
                            }, [
                              createVNode(VRadio, {
                                inline: "",
                                value: "standard",
                                class: "mt-n4"
                              }),
                              createVNode("div", { class: "w-100" }, [
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("h6", { class: "text-base font-weight-medium" }, " Standard 3-5 Days "),
                                  createVNode("span", { class: "text-sm text-disabled" }, " Free ")
                                ]),
                                createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Monday, 18 Nov ")
                              ])
                            ], 10, ["onClick"]),
                            createVNode("div", {
                              class: ["delivery-option d-flex", unref(deliveryOption) === "express" ? "active" : ""],
                              onClick: ($event) => deliveryOption.value = "express"
                            }, [
                              createVNode(VRadio, {
                                inline: "",
                                class: "mt-n4",
                                value: "express"
                              }),
                              createVNode("div", { class: "w-100" }, [
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("h5", { class: "text-base font-weight-medium" }, " Express "),
                                  createVNode("span", { class: "text-sm text-disabled" }, " $5.00 ")
                                ]),
                                createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Sunday, 17 Nov ")
                              ])
                            ], 10, ["onClick"]),
                            createVNode("div", {
                              class: ["delivery-option d-flex rounded-b", unref(deliveryOption) === "overnight" ? "active" : ""],
                              onClick: ($event) => deliveryOption.value = "overnight"
                            }, [
                              createVNode(VRadio, {
                                inline: "",
                                class: "mt-n4",
                                value: "overnight"
                              }),
                              createVNode("div", { class: "w-100" }, [
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode("h6", { class: "text-base font-weight-medium" }, " Overnight "),
                                  createVNode("span", { class: "text-sm text-disabled" }, " $10.00 ")
                                ]),
                                createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Saturday, 16 Nov ")
                              ])
                            ], 10, ["onClick"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Payment Method`);
                      } else {
                        return [
                          createTextVNode("Payment Method")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                md: "6",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, { class: "pt-4 pb-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VRadioGroup, {
                                            modelValue: unref(paymentMethod),
                                            "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                            inline: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div${_scopeId7}><!--[-->`);
                                                ssrRenderList(paymentMethods, (payment) => {
                                                  _push8(ssrRenderComponent(VRadio, {
                                                    key: payment.radioValue,
                                                    value: payment.radioValue
                                                  }, {
                                                    label: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<span class="me-1"${_scopeId8}>${ssrInterpolate(payment.radioLabel)}</span>`);
                                                        _push9(ssrRenderComponent(VIcon, {
                                                          size: "18",
                                                          icon: payment.icon
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                          createVNode(VIcon, {
                                                            size: "18",
                                                            icon: payment.icon
                                                          }, null, 8, ["icon"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]--></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                                      return createVNode(VRadio, {
                                                        key: payment.radioValue,
                                                        value: payment.radioValue
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                          createVNode(VIcon, {
                                                            size: "18",
                                                            icon: payment.icon
                                                          }, null, 8, ["icon"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 64))
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          if (unref(paymentMethod) === "credit-debit-card") {
                                            _push7(ssrRenderComponent(VRow, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCol, { cols: "12" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VTextField, {
                                                          label: "Card Number",
                                                          type: "number",
                                                          placeholder: "1234 5678 9012 3456"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VTextField, {
                                                            label: "Card Number",
                                                            type: "number",
                                                            placeholder: "1234 5678 9012 3456"
                                                          })
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
                                                          label: "Name",
                                                          placeholder: "john doe"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VTextField, {
                                                            label: "Name",
                                                            placeholder: "john doe"
                                                          })
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
                                                          label: "Expiry Date",
                                                          placeholder: "MM/YY"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VTextField, {
                                                            label: "Expiry Date",
                                                            placeholder: "MM/YY"
                                                          })
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
                                                          label: "CVV Code",
                                                          type: "number",
                                                          max: "3",
                                                          placeholder: "123"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VTextField, {
                                                            label: "CVV Code",
                                                            type: "number",
                                                            max: "3",
                                                            placeholder: "123"
                                                          })
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
                                                          label: "Card Number",
                                                          type: "number",
                                                          placeholder: "1234 5678 9012 3456"
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
                                                          label: "Name",
                                                          placeholder: "john doe"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          label: "Expiry Date",
                                                          placeholder: "MM/YY"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          label: "CVV Code",
                                                          type: "number",
                                                          max: "3",
                                                          placeholder: "123"
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
                                            _push7(ssrRenderComponent(VRow, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCol, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<div class="text-high-emphasis"${_scopeId8}> Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. </div>`);
                                                      } else {
                                                        return [
                                                          createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VCol, null, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          }
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(paymentMethod),
                                                "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", null, [
                                                    (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                                      return createVNode(VRadio, {
                                                        key: payment.radioValue,
                                                        value: payment.radioValue
                                                      }, {
                                                        label: withCtx(() => [
                                                          createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                          createVNode(VIcon, {
                                                            size: "18",
                                                            icon: payment.icon
                                                          }, null, 8, ["icon"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 64))
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "Card Number",
                                                      type: "number",
                                                      placeholder: "1234 5678 9012 3456"
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
                                                      label: "Name",
                                                      placeholder: "john doe"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "Expiry Date",
                                                      placeholder: "MM/YY"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      label: "CVV Code",
                                                      type: "number",
                                                      max: "3",
                                                      placeholder: "123"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                              default: withCtx(() => [
                                                createVNode(VCol, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VForm, { class: "pt-4 pb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(paymentMethod),
                                              "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                              inline: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                                    return createVNode(VRadio, {
                                                      key: payment.radioValue,
                                                      value: payment.radioValue
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                        createVNode(VIcon, {
                                                          size: "18",
                                                          icon: payment.icon
                                                        }, null, 8, ["icon"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "Card Number",
                                                    type: "number",
                                                    placeholder: "1234 5678 9012 3456"
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
                                                    label: "Name",
                                                    placeholder: "john doe"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "Expiry Date",
                                                    placeholder: "MM/YY"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "CVV Code",
                                                    type: "number",
                                                    max: "3",
                                                    placeholder: "123"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                            default: withCtx(() => [
                                              createVNode(VCol, null, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }))
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
                                createVNode(VCol, {
                                  md: "6",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VForm, { class: "pt-4 pb-2" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(paymentMethod),
                                            "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                            inline: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                                  return createVNode(VRadio, {
                                                    key: payment.radioValue,
                                                    value: payment.radioValue
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                      createVNode(VIcon, {
                                                        size: "18",
                                                        icon: payment.icon
                                                      }, null, 8, ["icon"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Card Number",
                                                  type: "number",
                                                  placeholder: "1234 5678 9012 3456"
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
                                                  label: "Name",
                                                  placeholder: "john doe"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Expiry Date",
                                                  placeholder: "MM/YY"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "6",
                                              md: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "CVV Code",
                                                  type: "number",
                                                  max: "3",
                                                  placeholder: "123"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                          default: withCtx(() => [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }))
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
                        _push4(ssrRenderComponent(VDivider, { class: "my-5" }, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Place Order`);
                            } else {
                              return [
                                createTextVNode("Place Order")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                md: "6",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VForm, { class: "pt-4 pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(paymentMethod),
                                          "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                          inline: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                                return createVNode(VRadio, {
                                                  key: payment.radioValue,
                                                  value: payment.radioValue
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                    createVNode(VIcon, {
                                                      size: "18",
                                                      icon: payment.icon
                                                    }, null, 8, ["icon"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Card Number",
                                                type: "number",
                                                placeholder: "1234 5678 9012 3456"
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
                                                label: "Name",
                                                placeholder: "john doe"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Expiry Date",
                                                placeholder: "MM/YY"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "CVV Code",
                                                type: "number",
                                                max: "3",
                                                placeholder: "123"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-5" }),
                          createVNode("div", { class: "d-flex gap-4" }, [
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode("Place Order")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Payment Method")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              md: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(VForm, { class: "pt-4 pb-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(paymentMethod),
                                        "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                        inline: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                              return createVNode(VRadio, {
                                                key: payment.radioValue,
                                                value: payment.radioValue
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                  createVNode(VIcon, {
                                                    size: "18",
                                                    icon: payment.icon
                                                  }, null, 8, ["icon"])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Card Number",
                                              type: "number",
                                              placeholder: "1234 5678 9012 3456"
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
                                              label: "Name",
                                              placeholder: "john doe"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Expiry Date",
                                              placeholder: "MM/YY"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "CVV Code",
                                              type: "number",
                                              max: "3",
                                              placeholder: "123"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "my-5" }),
                        createVNode("div", { class: "d-flex gap-4" }, [
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode("Place Order")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Delivery Address")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        class: "pt-4 pb-2",
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
                                    label: "Full Name",
                                    placeholder: "John Doe"
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
                                    label: "Phone No",
                                    type: "number",
                                    placeholder: "+1 123 456 7890"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    label: "Address",
                                    placeholder: "1234 Main St, New York, NY 10001, USA",
                                    rows: "3"
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
                                    label: "Pincode",
                                    placeholder: "123456",
                                    type: "number"
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
                                    label: "Landmark",
                                    placeholder: "Near City Mall"
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
                                    label: "City",
                                    placeholder: "New York"
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
                                    items: stateList,
                                    label: "State",
                                    placeholder: "Select State"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VLabel, { class: "mb-3" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Address Type ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRadioGroup, {
                                    modelValue: unref(radios),
                                    "onUpdate:modelValue": ($event) => isRef(radios) ? radios.value = $event : null,
                                    inline: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(VRadio, {
                                          label: "Home (All day delivery)",
                                          value: "home"
                                        }),
                                        createVNode(VRadio, {
                                          label: "Office (Delivery between 10 AM - 5 PM)",
                                          value: "office"
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
              }),
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Delivery Options")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createVNode(VRadioGroup, {
                        modelValue: unref(deliveryOption),
                        "onUpdate:modelValue": ($event) => isRef(deliveryOption) ? deliveryOption.value = $event : null,
                        class: "delivery-options pt-4 pb-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: ["delivery-option d-flex rounded-t", unref(deliveryOption) === "standard" ? "active" : ""],
                            onClick: ($event) => deliveryOption.value = "standard"
                          }, [
                            createVNode(VRadio, {
                              inline: "",
                              value: "standard",
                              class: "mt-n4"
                            }),
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("h6", { class: "text-base font-weight-medium" }, " Standard 3-5 Days "),
                                createVNode("span", { class: "text-sm text-disabled" }, " Free ")
                              ]),
                              createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Monday, 18 Nov ")
                            ])
                          ], 10, ["onClick"]),
                          createVNode("div", {
                            class: ["delivery-option d-flex", unref(deliveryOption) === "express" ? "active" : ""],
                            onClick: ($event) => deliveryOption.value = "express"
                          }, [
                            createVNode(VRadio, {
                              inline: "",
                              class: "mt-n4",
                              value: "express"
                            }),
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("h5", { class: "text-base font-weight-medium" }, " Express "),
                                createVNode("span", { class: "text-sm text-disabled" }, " $5.00 ")
                              ]),
                              createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Sunday, 17 Nov ")
                            ])
                          ], 10, ["onClick"]),
                          createVNode("div", {
                            class: ["delivery-option d-flex rounded-b", unref(deliveryOption) === "overnight" ? "active" : ""],
                            onClick: ($event) => deliveryOption.value = "overnight"
                          }, [
                            createVNode(VRadio, {
                              inline: "",
                              class: "mt-n4",
                              value: "overnight"
                            }),
                            createVNode("div", { class: "w-100" }, [
                              createVNode("div", { class: "d-flex justify-space-between" }, [
                                createVNode("h6", { class: "text-base font-weight-medium" }, " Overnight "),
                                createVNode("span", { class: "text-sm text-disabled" }, " $10.00 ")
                              ]),
                              createVNode("div", { class: "text-sm text-medium-emphasis" }, " Friday, 15 Nov - Saturday, 16 Nov ")
                            ])
                          ], 10, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Payment Method")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            md: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(VForm, { class: "pt-4 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode(VRadioGroup, {
                                      modelValue: unref(paymentMethod),
                                      "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : null,
                                      inline: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          (openBlock(), createBlock(Fragment, null, renderList(paymentMethods, (payment) => {
                                            return createVNode(VRadio, {
                                              key: payment.radioValue,
                                              value: payment.radioValue
                                            }, {
                                              label: withCtx(() => [
                                                createVNode("span", { class: "me-1" }, toDisplayString(payment.radioLabel), 1),
                                                createVNode(VIcon, {
                                                  size: "18",
                                                  icon: payment.icon
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 64))
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(paymentMethod) === "credit-debit-card" ? (openBlock(), createBlock(VRow, { key: 0 }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Number",
                                            type: "number",
                                            placeholder: "1234 5678 9012 3456"
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
                                            label: "Name",
                                            placeholder: "john doe"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Expiry Date",
                                            placeholder: "MM/YY"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "CVV Code",
                                            type: "number",
                                            max: "3",
                                            placeholder: "123"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VRow, { key: 1 }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-high-emphasis" }, " Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "my-5" }),
                      createVNode("div", { class: "d-flex gap-4" }, [
                        createVNode(VBtn, null, {
                          default: withCtx(() => [
                            createTextVNode("Place Order")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        })
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
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutCollapsible.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoFormLayoutFormWithTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref("personal-info");
    const firstName = ref("");
    const lastName = ref("");
    const country = ref();
    const birthDate = ref("");
    const phoneNo = ref();
    const countryList = [
      "USA",
      "Canada",
      "UK",
      "Denmark",
      "Germany",
      "Iceland",
      "Israel",
      "Mexico"
    ];
    const languageList = [
      "English",
      "German",
      "French",
      "Spanish",
      "Portuguese",
      "Russian",
      "Korean"
    ];
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const cPassword = ref("");
    const twitterLink = ref("");
    const facebookLink = ref("");
    const googlePlusLink = ref("");
    const linkedInLink = ref("");
    const instagramLink = ref("");
    const quoraLink = ref("");
    const languages = ref([]);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "personal-info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Personal Info `);
                } else {
                  return [
                    createTextVNode(" Personal Info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "account-details" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Account Details `);
                } else {
                  return [
                    createTextVNode(" Account Details ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "social-links" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Social Links `);
                } else {
                  return [
                    createTextVNode(" Social Links ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "personal-info" }, {
                default: withCtx(() => [
                  createTextVNode(" Personal Info ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "account-details" }, {
                default: withCtx(() => [
                  createTextVNode(" Account Details ")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "social-links" }, {
                default: withCtx(() => [
                  createTextVNode(" Social Links ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, { flat: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, { value: "personal-info" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { class: "mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(firstName),
                                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                  label: "First name",
                                                  placeholder: "John"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(firstName),
                                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                    label: "First name",
                                                    placeholder: "John"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(lastName),
                                                  "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                  label: "Last name",
                                                  placeholder: "Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(lastName),
                                                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                    label: "Last name",
                                                    placeholder: "Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  items: countryList,
                                                  label: "Country",
                                                  placeholder: "Select Country"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(country),
                                                    "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                    items: countryList,
                                                    label: "Country",
                                                    placeholder: "Select Country"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(languages),
                                                  "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                                  items: languageList,
                                                  multiple: "",
                                                  chips: "",
                                                  clearable: "",
                                                  label: "Language",
                                                  placeholder: "Select Language"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(languages),
                                                    "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                                    items: languageList,
                                                    multiple: "",
                                                    chips: "",
                                                    clearable: "",
                                                    label: "Language",
                                                    placeholder: "Select Language"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_AppDateTimePicker, {
                                                  modelValue: unref(birthDate),
                                                  "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                  label: "Birth Date",
                                                  placeholder: "Select Birth Date"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AppDateTimePicker, {
                                                    modelValue: unref(birthDate),
                                                    "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                    label: "Birth Date",
                                                    placeholder: "Select Birth Date"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(phoneNo),
                                                  "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                                  type: "number",
                                                  label: "Phone No.",
                                                  placeholder: "+1 123 456 7890"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(phoneNo),
                                                    "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                                    type: "number",
                                                    label: "Phone No.",
                                                    placeholder: "+1 123 456 7890"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(firstName),
                                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                  label: "First name",
                                                  placeholder: "John"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(lastName),
                                                  "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                  label: "Last name",
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
                                                createVNode(VSelect, {
                                                  modelValue: unref(country),
                                                  "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                  items: countryList,
                                                  label: "Country",
                                                  placeholder: "Select Country"
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
                                                  modelValue: unref(languages),
                                                  "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                                  items: languageList,
                                                  multiple: "",
                                                  chips: "",
                                                  clearable: "",
                                                  label: "Language",
                                                  placeholder: "Select Language"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_AppDateTimePicker, {
                                                  modelValue: unref(birthDate),
                                                  "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                  label: "Birth Date",
                                                  placeholder: "Select Birth Date"
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
                                                  modelValue: unref(phoneNo),
                                                  "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                                  type: "number",
                                                  label: "Phone No.",
                                                  placeholder: "+1 123 456 7890"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createVNode(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(firstName),
                                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                label: "First name",
                                                placeholder: "John"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(lastName),
                                                "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                label: "Last name",
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
                                              createVNode(VSelect, {
                                                modelValue: unref(country),
                                                "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                                items: countryList,
                                                label: "Country",
                                                placeholder: "Select Country"
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
                                                modelValue: unref(languages),
                                                "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                                items: languageList,
                                                multiple: "",
                                                chips: "",
                                                clearable: "",
                                                label: "Language",
                                                placeholder: "Select Language"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_AppDateTimePicker, {
                                                modelValue: unref(birthDate),
                                                "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                label: "Birth Date",
                                                placeholder: "Select Birth Date"
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
                                                modelValue: unref(phoneNo),
                                                "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                                type: "number",
                                                label: "Phone No.",
                                                placeholder: "+1 123 456 7890"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, { class: "mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(firstName),
                                              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                              label: "First name",
                                              placeholder: "John"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(lastName),
                                              "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                              label: "Last name",
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
                                            createVNode(VSelect, {
                                              modelValue: unref(country),
                                              "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                              items: countryList,
                                              label: "Country",
                                              placeholder: "Select Country"
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
                                              modelValue: unref(languages),
                                              "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                              items: languageList,
                                              multiple: "",
                                              chips: "",
                                              clearable: "",
                                              label: "Language",
                                              placeholder: "Select Language"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_AppDateTimePicker, {
                                              modelValue: unref(birthDate),
                                              "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                              label: "Birth Date",
                                              placeholder: "Select Birth Date"
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
                                              modelValue: unref(phoneNo),
                                              "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                              type: "number",
                                              label: "Phone No.",
                                              placeholder: "+1 123 456 7890"
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, { value: "account-details" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { class: "mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(username),
                                                  "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                                  label: "Username",
                                                  placeholder: "Johndoe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(username),
                                                    "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                                    label: "Username",
                                                    placeholder: "Johndoe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  label: "Email",
                                                  suffix: "@example.com",
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    label: "Email",
                                                    suffix: "@example.com",
                                                    placeholder: "johndoe@email.com"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(password),
                                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                    label: "Password",
                                                    placeholder: "············",
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(cPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(cPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                                    label: "Confirm Password",
                                                    placeholder: "············",
                                                    type: unref(isCPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(username),
                                                  "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                                  label: "Username",
                                                  placeholder: "Johndoe"
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
                                                  label: "Email",
                                                  suffix: "@example.com",
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
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  label: "Password",
                                                  placeholder: "············",
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
                                                  modelValue: unref(cPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(username),
                                                "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                                label: "Username",
                                                placeholder: "Johndoe"
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
                                                label: "Email",
                                                suffix: "@example.com",
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
                                                modelValue: unref(password),
                                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                label: "Password",
                                                placeholder: "············",
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
                                                modelValue: unref(cPassword),
                                                "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                                label: "Confirm Password",
                                                placeholder: "············",
                                                type: unref(isCPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                createVNode(VForm, { class: "mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(username),
                                              "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                              label: "Username",
                                              placeholder: "Johndoe"
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
                                              label: "Email",
                                              suffix: "@example.com",
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
                                              modelValue: unref(password),
                                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                              label: "Password",
                                              placeholder: "············",
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
                                              modelValue: unref(cPassword),
                                              "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                              label: "Confirm Password",
                                              placeholder: "············",
                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                        _push4(ssrRenderComponent(VWindowItem, { value: "social-links" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { class: "mt-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(twitterLink),
                                                  "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                                  label: "Twitter",
                                                  placeholder: "https://twitter.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(twitterLink),
                                                    "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                                    label: "Twitter",
                                                    placeholder: "https://twitter.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(facebookLink),
                                                  "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                                  label: "Facebook",
                                                  placeholder: "https://facebook.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(facebookLink),
                                                    "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                                    label: "Facebook",
                                                    placeholder: "https://facebook.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(googlePlusLink),
                                                  "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                                  label: "Google+",
                                                  placeholder: "https://plus.google.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(googlePlusLink),
                                                    "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                                    label: "Google+",
                                                    placeholder: "https://plus.google.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(linkedInLink),
                                                  "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                                  label: "LinkedIn",
                                                  placeholder: "https://linkedin.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(linkedInLink),
                                                    "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                                    label: "LinkedIn",
                                                    placeholder: "https://linkedin.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(instagramLink),
                                                  "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                                  label: "Instagram",
                                                  placeholder: "https://instagram.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(instagramLink),
                                                    "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                                    label: "Instagram",
                                                    placeholder: "https://instagram.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(quoraLink),
                                                  "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                                  label: "Quora",
                                                  placeholder: "https://quora.com/username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(quoraLink),
                                                    "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                                    label: "Quora",
                                                    placeholder: "https://quora.com/username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(twitterLink),
                                                  "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                                  label: "Twitter",
                                                  placeholder: "https://twitter.com/username"
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
                                                  modelValue: unref(facebookLink),
                                                  "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                                  label: "Facebook",
                                                  placeholder: "https://facebook.com/username"
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
                                                  modelValue: unref(googlePlusLink),
                                                  "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                                  label: "Google+",
                                                  placeholder: "https://plus.google.com/username"
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
                                                  modelValue: unref(linkedInLink),
                                                  "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                                  label: "LinkedIn",
                                                  placeholder: "https://linkedin.com/username"
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
                                                  modelValue: unref(instagramLink),
                                                  "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                                  label: "Instagram",
                                                  placeholder: "https://instagram.com/username"
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
                                                  modelValue: unref(quoraLink),
                                                  "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                                  label: "Quora",
                                                  placeholder: "https://quora.com/username"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(twitterLink),
                                                "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                                label: "Twitter",
                                                placeholder: "https://twitter.com/username"
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
                                                modelValue: unref(facebookLink),
                                                "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                                label: "Facebook",
                                                placeholder: "https://facebook.com/username"
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
                                                modelValue: unref(googlePlusLink),
                                                "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                                label: "Google+",
                                                placeholder: "https://plus.google.com/username"
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
                                                modelValue: unref(linkedInLink),
                                                "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                                label: "LinkedIn",
                                                placeholder: "https://linkedin.com/username"
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
                                                modelValue: unref(instagramLink),
                                                "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                                label: "Instagram",
                                                placeholder: "https://instagram.com/username"
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
                                                modelValue: unref(quoraLink),
                                                "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                                label: "Quora",
                                                placeholder: "https://quora.com/username"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, { class: "mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(twitterLink),
                                              "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                              label: "Twitter",
                                              placeholder: "https://twitter.com/username"
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
                                              modelValue: unref(facebookLink),
                                              "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                              label: "Facebook",
                                              placeholder: "https://facebook.com/username"
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
                                              modelValue: unref(googlePlusLink),
                                              "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                              label: "Google+",
                                              placeholder: "https://plus.google.com/username"
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
                                              modelValue: unref(linkedInLink),
                                              "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                              label: "LinkedIn",
                                              placeholder: "https://linkedin.com/username"
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
                                              modelValue: unref(instagramLink),
                                              "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                              label: "Instagram",
                                              placeholder: "https://instagram.com/username"
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
                                              modelValue: unref(quoraLink),
                                              "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                              label: "Quora",
                                              placeholder: "https://quora.com/username"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, { value: "personal-info" }, {
                            default: withCtx(() => [
                              createVNode(VForm, { class: "mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(firstName),
                                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                            label: "First name",
                                            placeholder: "John"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(lastName),
                                            "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                            label: "Last name",
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
                                          createVNode(VSelect, {
                                            modelValue: unref(country),
                                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                            items: countryList,
                                            label: "Country",
                                            placeholder: "Select Country"
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
                                            modelValue: unref(languages),
                                            "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                            items: languageList,
                                            multiple: "",
                                            chips: "",
                                            clearable: "",
                                            label: "Language",
                                            placeholder: "Select Language"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AppDateTimePicker, {
                                            modelValue: unref(birthDate),
                                            "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                            label: "Birth Date",
                                            placeholder: "Select Birth Date"
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
                                            modelValue: unref(phoneNo),
                                            "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                            type: "number",
                                            label: "Phone No.",
                                            placeholder: "+1 123 456 7890"
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
                          }),
                          createVNode(VWindowItem, { value: "account-details" }, {
                            default: withCtx(() => [
                              createVNode(VForm, { class: "mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(username),
                                            "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                            label: "Username",
                                            placeholder: "Johndoe"
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
                                            label: "Email",
                                            suffix: "@example.com",
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
                                            modelValue: unref(password),
                                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                            label: "Password",
                                            placeholder: "············",
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
                                            modelValue: unref(cPassword),
                                            "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            type: unref(isCPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                          }),
                          createVNode(VWindowItem, { value: "social-links" }, {
                            default: withCtx(() => [
                              createVNode(VForm, { class: "mt-2" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(twitterLink),
                                            "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                            label: "Twitter",
                                            placeholder: "https://twitter.com/username"
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
                                            modelValue: unref(facebookLink),
                                            "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                            label: "Facebook",
                                            placeholder: "https://facebook.com/username"
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
                                            modelValue: unref(googlePlusLink),
                                            "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                            label: "Google+",
                                            placeholder: "https://plus.google.com/username"
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
                                            modelValue: unref(linkedInLink),
                                            "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                            label: "LinkedIn",
                                            placeholder: "https://linkedin.com/username"
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
                                            modelValue: unref(instagramLink),
                                            "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                            label: "Instagram",
                                            placeholder: "https://instagram.com/username"
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
                                            modelValue: unref(quoraLink),
                                            "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                            label: "Quora",
                                            placeholder: "https://quora.com/username"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindow, {
                      modelValue: unref(tab),
                      "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                      class: "disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: "personal-info" }, {
                          default: withCtx(() => [
                            createVNode(VForm, { class: "mt-2" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(firstName),
                                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                          label: "First name",
                                          placeholder: "John"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(lastName),
                                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                          label: "Last name",
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
                                        createVNode(VSelect, {
                                          modelValue: unref(country),
                                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                          items: countryList,
                                          label: "Country",
                                          placeholder: "Select Country"
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
                                          modelValue: unref(languages),
                                          "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                          items: languageList,
                                          multiple: "",
                                          chips: "",
                                          clearable: "",
                                          label: "Language",
                                          placeholder: "Select Language"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AppDateTimePicker, {
                                          modelValue: unref(birthDate),
                                          "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                          label: "Birth Date",
                                          placeholder: "Select Birth Date"
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
                                          modelValue: unref(phoneNo),
                                          "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                          type: "number",
                                          label: "Phone No.",
                                          placeholder: "+1 123 456 7890"
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
                        }),
                        createVNode(VWindowItem, { value: "account-details" }, {
                          default: withCtx(() => [
                            createVNode(VForm, { class: "mt-2" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(username),
                                          "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                          label: "Username",
                                          placeholder: "Johndoe"
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
                                          label: "Email",
                                          suffix: "@example.com",
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
                                          modelValue: unref(password),
                                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                          label: "Password",
                                          placeholder: "············",
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
                                          modelValue: unref(cPassword),
                                          "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                          label: "Confirm Password",
                                          placeholder: "············",
                                          type: unref(isCPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                        }),
                        createVNode(VWindowItem, { value: "social-links" }, {
                          default: withCtx(() => [
                            createVNode(VForm, { class: "mt-2" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(twitterLink),
                                          "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                          label: "Twitter",
                                          placeholder: "https://twitter.com/username"
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
                                          modelValue: unref(facebookLink),
                                          "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                          label: "Facebook",
                                          placeholder: "https://facebook.com/username"
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
                                          modelValue: unref(googlePlusLink),
                                          "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                          label: "Google+",
                                          placeholder: "https://plus.google.com/username"
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
                                          modelValue: unref(linkedInLink),
                                          "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                          label: "LinkedIn",
                                          placeholder: "https://linkedin.com/username"
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
                                          modelValue: unref(instagramLink),
                                          "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                          label: "Instagram",
                                          placeholder: "https://instagram.com/username"
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
                                          modelValue: unref(quoraLink),
                                          "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                          label: "Quora",
                                          placeholder: "https://quora.com/username"
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
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Submit`);
                      } else {
                        return [
                          createTextVNode("Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "secondary",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, null, {
                      default: withCtx(() => [
                        createTextVNode("Submit")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "secondary",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
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
                  createVNode(VWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, { value: "personal-info" }, {
                        default: withCtx(() => [
                          createVNode(VForm, { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        label: "First name",
                                        placeholder: "John"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(lastName),
                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                        label: "Last name",
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
                                      createVNode(VSelect, {
                                        modelValue: unref(country),
                                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                        items: countryList,
                                        label: "Country",
                                        placeholder: "Select Country"
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
                                        modelValue: unref(languages),
                                        "onUpdate:modelValue": ($event) => isRef(languages) ? languages.value = $event : null,
                                        items: languageList,
                                        multiple: "",
                                        chips: "",
                                        clearable: "",
                                        label: "Language",
                                        placeholder: "Select Language"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AppDateTimePicker, {
                                        modelValue: unref(birthDate),
                                        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                        label: "Birth Date",
                                        placeholder: "Select Birth Date"
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
                                        modelValue: unref(phoneNo),
                                        "onUpdate:modelValue": ($event) => isRef(phoneNo) ? phoneNo.value = $event : null,
                                        type: "number",
                                        label: "Phone No.",
                                        placeholder: "+1 123 456 7890"
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
                      }),
                      createVNode(VWindowItem, { value: "account-details" }, {
                        default: withCtx(() => [
                          createVNode(VForm, { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(username),
                                        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                                        label: "Username",
                                        placeholder: "Johndoe"
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
                                        label: "Email",
                                        suffix: "@example.com",
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
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        label: "Password",
                                        placeholder: "············",
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
                                        modelValue: unref(cPassword),
                                        "onUpdate:modelValue": ($event) => isRef(cPassword) ? cPassword.value = $event : null,
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        type: unref(isCPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                      }),
                      createVNode(VWindowItem, { value: "social-links" }, {
                        default: withCtx(() => [
                          createVNode(VForm, { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(twitterLink),
                                        "onUpdate:modelValue": ($event) => isRef(twitterLink) ? twitterLink.value = $event : null,
                                        label: "Twitter",
                                        placeholder: "https://twitter.com/username"
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
                                        modelValue: unref(facebookLink),
                                        "onUpdate:modelValue": ($event) => isRef(facebookLink) ? facebookLink.value = $event : null,
                                        label: "Facebook",
                                        placeholder: "https://facebook.com/username"
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
                                        modelValue: unref(googlePlusLink),
                                        "onUpdate:modelValue": ($event) => isRef(googlePlusLink) ? googlePlusLink.value = $event : null,
                                        label: "Google+",
                                        placeholder: "https://plus.google.com/username"
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
                                        modelValue: unref(linkedInLink),
                                        "onUpdate:modelValue": ($event) => isRef(linkedInLink) ? linkedInLink.value = $event : null,
                                        label: "LinkedIn",
                                        placeholder: "https://linkedin.com/username"
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
                                        modelValue: unref(instagramLink),
                                        "onUpdate:modelValue": ($event) => isRef(instagramLink) ? instagramLink.value = $event : null,
                                        label: "Instagram",
                                        placeholder: "https://instagram.com/username"
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
                                        modelValue: unref(quoraLink),
                                        "onUpdate:modelValue": ($event) => isRef(quoraLink) ? quoraLink.value = $event : null,
                                        label: "Quora",
                                        placeholder: "https://quora.com/username"
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
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, { class: "d-flex gap-4" }, {
                default: withCtx(() => [
                  createVNode(VBtn, null, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "secondary",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutFormWithTabs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoFormLayoutFormValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const items = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4"
    ];
    const select = ref();
    const checkbox = ref(false);
    const form = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "form",
        ref: form,
        "lazy-validation": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(name),
                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "Name",
                          placeholder: "John Doe",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(name),
                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                            label: "Name",
                            placeholder: "John Doe",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          rules: ["emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator), "requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "E-mail",
                          placeholder: "johndoe@email.com",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            rules: ["emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator), "requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                            label: "E-mail",
                            placeholder: "johndoe@email.com",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(select),
                          "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                          items,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          placeholder: "Select an Item",
                          label: "Item",
                          name: "select",
                          require: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(select),
                            "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                            items,
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                            placeholder: "Select an Item",
                            label: "Item",
                            name: "select",
                            require: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "Do you agree?",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                            label: "Do you agree?",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex flex-wrap gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "success",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Validate `);
                            } else {
                              return [
                                createTextVNode(" Validate ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.reset();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset Form `);
                            } else {
                              return [
                                createTextVNode(" Reset Form ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "warning",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.resetValidation();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset Validation `);
                            } else {
                              return [
                                createTextVNode(" Reset Validation ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "success",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(form)) == null ? void 0 : _a.validate();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Validate ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(form)) == null ? void 0 : _a.reset();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset Form ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "warning",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(form)) == null ? void 0 : _a.resetValidation();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset Validation ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(name),
                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "Name",
                          placeholder: "John Doe",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          rules: ["emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator), "requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "E-mail",
                          placeholder: "johndoe@email.com",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(select),
                          "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                          items,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          placeholder: "Select an Item",
                          label: "Item",
                          name: "select",
                          require: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                          label: "Do you agree?",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex flex-wrap gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "success",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Validate ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.reset();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset Form ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "warning",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(form)) == null ? void 0 : _a.resetValidation();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset Validation ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(name),
                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                        label: "Name",
                        placeholder: "John Doe",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        rules: ["emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator), "requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                        label: "E-mail",
                        placeholder: "johndoe@email.com",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(select),
                        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                        items,
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                        placeholder: "Select an Item",
                        label: "Item",
                        name: "select",
                        require: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                        label: "Do you agree?",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex flex-wrap gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "success",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(form)) == null ? void 0 : _a.validate();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Validate ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(form)) == null ? void 0 : _a.reset();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Form ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "warning",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(form)) == null ? void 0 : _a.resetValidation();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset Validation ")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutFormValidation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoFormLayoutFormHint",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const email = ref("");
    const password = ref();
    const checkbox = ref(false);
    const items = [
      "foo",
      "bar",
      "fizz",
      "buzz"
    ];
    const values = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(username),
                          "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                          label: "Username",
                          placeholder: "Johndoe"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(username),
                            "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                            label: "Username",
                            placeholder: "Johndoe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@email.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            type: "email",
                            placeholder: "johndoe@email.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          "persistent-hint": "",
                          placeholder: "············",
                          hint: "Your password must be 8-20 characters long."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            label: "Password",
                            autocomplete: "on",
                            type: "password",
                            "persistent-hint": "",
                            placeholder: "············",
                            hint: "Your password must be 8-20 characters long."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAutocomplete, {
                          modelValue: unref(values),
                          "onUpdate:modelValue": ($event) => isRef(values) ? values.value = $event : null,
                          items,
                          chips: "",
                          multiple: "",
                          label: "Autocomplete",
                          placeholder: "Select"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAutocomplete, {
                            modelValue: unref(values),
                            "onUpdate:modelValue": ($event) => isRef(values) ? values.value = $event : null,
                            items,
                            chips: "",
                            multiple: "",
                            label: "Autocomplete",
                            placeholder: "Select"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            type: "reset",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(username),
                          "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                          label: "Username",
                          placeholder: "Johndoe"
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
                          type: "email",
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
                          "persistent-hint": "",
                          placeholder: "············",
                          hint: "Your password must be 8-20 characters long."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VAutocomplete, {
                          modelValue: unref(values),
                          "onUpdate:modelValue": ($event) => isRef(values) ? values.value = $event : null,
                          items,
                          chips: "",
                          multiple: "",
                          label: "Autocomplete",
                          placeholder: "Select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(username),
                        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
                        label: "Username",
                        placeholder: "Johndoe"
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
                        type: "email",
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
                        "persistent-hint": "",
                        placeholder: "············",
                        hint: "Your password must be 8-20 characters long."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VAutocomplete, {
                        modelValue: unref(values),
                        "onUpdate:modelValue": ($event) => isRef(values) ? values.value = $event : null,
                        items,
                        chips: "",
                        multiple: "",
                        label: "Autocomplete",
                        placeholder: "Select"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        type: "reset",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutFormHint.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoFormLayoutMultipleColumn",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const lastName = ref("");
    const city = ref("");
    const country = ref("");
    const company = ref("");
    const email = ref("");
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(lastName),
                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                          label: "Last Name",
                          placeholder: "Doe"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(lastName),
                            "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                            label: "Last Name",
                            placeholder: "Doe"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "johndoe@email.com"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(city),
                          "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                          label: "City",
                          placeholder: "New York"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(city),
                            "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                            label: "City",
                            placeholder: "New York"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(country),
                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                          label: "Country",
                          placeholder: "United States"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(country),
                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                            label: "Country",
                            placeholder: "United States"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(company),
                          "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                          label: "Company",
                          placeholder: "Pixinvent"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(company),
                            "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                            label: "Company",
                            placeholder: "Pixinvent"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "reset",
                            color: "secondary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                      md: "6"
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
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(lastName),
                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
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
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
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
                          modelValue: unref(city),
                          "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
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
                        createVNode(VTextField, {
                          modelValue: unref(country),
                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                          label: "Country",
                          placeholder: "United States"
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
                          modelValue: unref(company),
                          "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                          label: "Company",
                          placeholder: "Pixinvent"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
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
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(lastName),
                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
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
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
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
                        modelValue: unref(city),
                        "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
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
                      createVNode(VTextField, {
                        modelValue: unref(country),
                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                        label: "Country",
                        placeholder: "United States"
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
                        modelValue: unref(company),
                        "onUpdate:modelValue": ($event) => isRef(company) ? company.value = $event : null,
                        label: "Company",
                        placeholder: "Pixinvent"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        type: "reset",
                        color: "secondary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutMultipleColumn.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoFormLayoutVerticalFormWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref("");
    const password = ref();
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          "prepend-inner-icon": "ri-user-line",
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            "prepend-inner-icon": "ri-user-line",
                            label: "First Name",
                            placeholder: "John"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "prepend-inner-icon": "ri-mail-line",
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            "prepend-inner-icon": "ri-mail-line",
                            label: "Email",
                            type: "email",
                            placeholder: "johndoe@example.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          "prepend-inner-icon": "ri-smartphone-line",
                          label: "Mobile",
                          placeholder: "+1 123 456 7890"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(mobile),
                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                            "prepend-inner-icon": "ri-smartphone-line",
                            label: "Mobile",
                            placeholder: "+1 123 456 7890"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "prepend-inner-icon": "ri-lock-line",
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "············"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            "prepend-inner-icon": "ri-lock-line",
                            label: "Password",
                            autocomplete: "on",
                            type: "password",
                            placeholder: "············"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          class: "me-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            type: "submit",
                            class: "me-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            type: "reset",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          "prepend-inner-icon": "ri-user-line",
                          label: "First Name",
                          placeholder: "John"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "prepend-inner-icon": "ri-mail-line",
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          "prepend-inner-icon": "ri-smartphone-line",
                          label: "Mobile",
                          placeholder: "+1 123 456 7890"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "prepend-inner-icon": "ri-lock-line",
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "············"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          type: "submit",
                          class: "me-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        "prepend-inner-icon": "ri-user-line",
                        label: "First Name",
                        placeholder: "John"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        "prepend-inner-icon": "ri-mail-line",
                        label: "Email",
                        type: "email",
                        placeholder: "johndoe@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(mobile),
                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                        "prepend-inner-icon": "ri-smartphone-line",
                        label: "Mobile",
                        placeholder: "+1 123 456 7890"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        "prepend-inner-icon": "ri-lock-line",
                        label: "Password",
                        autocomplete: "on",
                        type: "password",
                        placeholder: "············"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        type: "submit",
                        class: "me-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        type: "reset",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutVerticalFormWithIcons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoFormLayoutVerticalForm",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref("");
    const password = ref();
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            type: "email",
                            placeholder: "johndoe@example.com"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(mobile),
                            "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                            label: "Mobile",
                            placeholder: "+1 123 456 7890",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          autocomplete: "on",
                          type: "password",
                          placeholder: "············"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCheckbox, {
                            modelValue: unref(checkbox),
                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                            label: "Remember me"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "reset",
                            color: "secondary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, { cols: "12" }, {
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          type: "email",
                          placeholder: "johndoe@example.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(mobile),
                          "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                          label: "Mobile",
                          placeholder: "+1 123 456 7890",
                          type: "number"
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VCheckbox, {
                          modelValue: unref(checkbox),
                          "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                          label: "Remember me"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          type: "reset",
                          color: "secondary",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        label: "Email",
                        type: "email",
                        placeholder: "johndoe@example.com"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(mobile),
                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                        label: "Mobile",
                        placeholder: "+1 123 456 7890",
                        type: "number"
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VCheckbox, {
                        modelValue: unref(checkbox),
                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        type: "reset",
                        color: "secondary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutVerticalForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoFormLayoutHorizontalFormWithIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref();
    const password = ref();
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="firstNameHorizontalIcons"${_scopeId5}>First Name</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "firstNameHorizontalIcons",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      "prepend-inner-icon": "ri-user-line",
                                      placeholder: "John",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "firstNameHorizontalIcons",
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        "prepend-inner-icon": "ri-user-line",
                                        placeholder: "John",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "firstNameHorizontalIcons",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      "prepend-inner-icon": "ri-user-line",
                                      placeholder: "John",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "firstNameHorizontalIcons",
                                    modelValue: unref(firstName),
                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                    "prepend-inner-icon": "ri-user-line",
                                    placeholder: "John",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="emailHorizontalIcons"${_scopeId5}>Email</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "emailHorizontalIcons",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      "prepend-inner-icon": "ri-mail-line",
                                      placeholder: "johndoe@email.com",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "emailHorizontalIcons",
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        "prepend-inner-icon": "ri-mail-line",
                                        placeholder: "johndoe@email.com",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "emailHorizontalIcons",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      "prepend-inner-icon": "ri-mail-line",
                                      placeholder: "johndoe@email.com",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "emailHorizontalIcons",
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    "prepend-inner-icon": "ri-mail-line",
                                    placeholder: "johndoe@email.com",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mobileHorizontalIcons"${_scopeId5}>Mobile</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mobileHorizontalIcons",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      "prepend-inner-icon": "ri-smartphone-line",
                                      placeholder: "+1 123 456 7890",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mobileHorizontalIcons",
                                        modelValue: unref(mobile),
                                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                        type: "number",
                                        "prepend-inner-icon": "ri-smartphone-line",
                                        placeholder: "+1 123 456 7890",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mobileHorizontalIcons",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      "prepend-inner-icon": "ri-smartphone-line",
                                      placeholder: "+1 123 456 7890",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mobileHorizontalIcons",
                                    modelValue: unref(mobile),
                                    "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                    type: "number",
                                    "prepend-inner-icon": "ri-smartphone-line",
                                    placeholder: "+1 123 456 7890",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="passwordHorizontalIcons"${_scopeId5}>Password</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "passwordHorizontalIcons",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      "prepend-inner-icon": "ri-lock-line",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "passwordHorizontalIcons",
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        "prepend-inner-icon": "ri-lock-line",
                                        autocomplete: "on",
                                        type: "password",
                                        placeholder: "············",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "passwordHorizontalIcons",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      "prepend-inner-icon": "ri-lock-line",
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "passwordHorizontalIcons",
                                    modelValue: unref(password),
                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                    "prepend-inner-icon": "ri-lock-line",
                                    autocomplete: "on",
                                    type: "password",
                                    placeholder: "············",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(checkbox),
                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                      label: "Remember me"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCheckbox, {
                                        modelValue: unref(checkbox),
                                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                        label: "Remember me"
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
                                  md: "3"
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: unref(checkbox),
                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                      label: "Remember me"
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: unref(checkbox),
                                    "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                    label: "Remember me"
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
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            type: "reset",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "firstNameHorizontalIcons",
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  "prepend-inner-icon": "ri-user-line",
                                  placeholder: "John",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "emailHorizontalIcons",
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  "prepend-inner-icon": "ri-mail-line",
                                  placeholder: "johndoe@email.com",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mobileHorizontalIcons",
                                  modelValue: unref(mobile),
                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                  type: "number",
                                  "prepend-inner-icon": "ri-smartphone-line",
                                  placeholder: "+1 123 456 7890",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "passwordHorizontalIcons",
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  "prepend-inner-icon": "ri-lock-line",
                                  autocomplete: "on",
                                  type: "password",
                                  placeholder: "············",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: unref(checkbox),
                                  "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                  label: "Remember me"
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
                    createVNode(VCol, {
                      "offset-md": "3",
                      cols: "12",
                      md: "9",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          type: "reset",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "firstNameHorizontalIcons" }, "First Name")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "firstNameHorizontalIcons",
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                "prepend-inner-icon": "ri-user-line",
                                placeholder: "John",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "emailHorizontalIcons" }, "Email")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "emailHorizontalIcons",
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                "prepend-inner-icon": "ri-mail-line",
                                placeholder: "johndoe@email.com",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mobileHorizontalIcons" }, "Mobile")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mobileHorizontalIcons",
                                modelValue: unref(mobile),
                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                type: "number",
                                "prepend-inner-icon": "ri-smartphone-line",
                                placeholder: "+1 123 456 7890",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "passwordHorizontalIcons" }, "Password")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "passwordHorizontalIcons",
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                "prepend-inner-icon": "ri-lock-line",
                                autocomplete: "on",
                                type: "password",
                                placeholder: "············",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: unref(checkbox),
                                "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                label: "Remember me"
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
                  createVNode(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        type: "reset",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutHorizontalFormWithIcons.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoFormLayoutHorizontalForm",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const mobile = ref();
    const password = ref();
    const checkbox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({ onSubmit: () => {
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="firstName"${_scopeId5}>First Name</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "firstName" }, "First Name")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "firstName",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      placeholder: "John",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "firstName",
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        placeholder: "John",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "firstName" }, "First Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "firstName",
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      placeholder: "John",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "firstName" }, "First Name")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "firstName",
                                    modelValue: unref(firstName),
                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                    placeholder: "John",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="email"${_scopeId5}>Email</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "email" }, "Email")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "email",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      placeholder: "johndoe@email.com",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "email",
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        placeholder: "johndoe@email.com",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "email" }, "Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "email",
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      placeholder: "johndoe@email.com",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "email" }, "Email")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "email",
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    placeholder: "johndoe@email.com",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="mobile"${_scopeId5}>Mobile</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "mobile" }, "Mobile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "mobile",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      placeholder: "+1 123 456 7890",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "mobile",
                                        modelValue: unref(mobile),
                                        "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                        type: "number",
                                        placeholder: "+1 123 456 7890",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "mobile" }, "Mobile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "mobile",
                                      modelValue: unref(mobile),
                                      "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                      type: "number",
                                      placeholder: "+1 123 456 7890",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "mobile" }, "Mobile")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "mobile",
                                    modelValue: unref(mobile),
                                    "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                    type: "number",
                                    placeholder: "+1 123 456 7890",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label for="password"${_scopeId5}>Password</label>`);
                                  } else {
                                    return [
                                      createVNode("label", { for: "password" }, "Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      id: "password",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············",
                                      "persistent-placeholder": ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        id: "password",
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        autocomplete: "on",
                                        type: "password",
                                        placeholder: "············",
                                        "persistent-placeholder": ""
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
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { for: "password" }, "Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      id: "password",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      autocomplete: "on",
                                      type: "password",
                                      placeholder: "············",
                                      "persistent-placeholder": ""
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { for: "password" }, "Password")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    id: "password",
                                    modelValue: unref(password),
                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                    autocomplete: "on",
                                    type: "password",
                                    placeholder: "············",
                                    "persistent-placeholder": ""
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
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "3"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(checkbox),
                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                      label: "Remember me"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCheckbox, {
                                        modelValue: unref(checkbox),
                                        "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                        label: "Remember me"
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
                                  md: "3"
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCheckbox, {
                                      modelValue: unref(checkbox),
                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                      label: "Remember me"
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
                          createVNode(VRow, { "no-gutters": "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "3"
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCheckbox, {
                                    modelValue: unref(checkbox),
                                    "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                    label: "Remember me"
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
                  _push3(ssrRenderComponent(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "tonal",
                          type: "reset"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "tonal",
                            type: "reset"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "firstName" }, "First Name")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "firstName",
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  placeholder: "John",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "email" }, "Email")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "email",
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  placeholder: "johndoe@email.com",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "mobile" }, "Mobile")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "mobile",
                                  modelValue: unref(mobile),
                                  "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                  type: "number",
                                  placeholder: "+1 123 456 7890",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { for: "password" }, "Password")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  id: "password",
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  autocomplete: "on",
                                  type: "password",
                                  placeholder: "············",
                                  "persistent-placeholder": ""
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
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "3"
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCheckbox, {
                                  modelValue: unref(checkbox),
                                  "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                  label: "Remember me"
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
                    createVNode(VCol, {
                      "offset-md": "3",
                      cols: "12",
                      md: "9",
                      class: "d-flex gap-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "tonal",
                          type: "reset"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "firstName" }, "First Name")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "firstName",
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                placeholder: "John",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "email" }, "Email")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "email",
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                placeholder: "johndoe@email.com",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "mobile" }, "Mobile")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "mobile",
                                modelValue: unref(mobile),
                                "onUpdate:modelValue": ($event) => isRef(mobile) ? mobile.value = $event : null,
                                type: "number",
                                placeholder: "+1 123 456 7890",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { for: "password" }, "Password")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                id: "password",
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                autocomplete: "on",
                                type: "password",
                                placeholder: "············",
                                "persistent-placeholder": ""
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
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { "no-gutters": "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCheckbox, {
                                modelValue: unref(checkbox),
                                "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                label: "Remember me"
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
                  createVNode(VCol, {
                    "offset-md": "3",
                    cols: "12",
                    md: "9",
                    class: "d-flex gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "secondary",
                        variant: "tonal",
                        type: "reset"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reset ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-layout/DemoFormLayoutHorizontalForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const formHint = { ts: `<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const formValidation = { ts: `<script lang="ts" setup>
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const formWithTabs = { ts: `<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`, js: `<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
` };
const horizontalForm = { ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const horizontalFormWithIcons = { ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="ri-user-line"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="ri-mail-line"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="ri-smartphone-line"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="ri-lock-line"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="ri-user-line"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="ri-mail-line"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="ri-smartphone-line"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="ri-lock-line"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const multipleColumn = { ts: `<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const verticalForm = { ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref('')
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
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

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref('')
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
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

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const verticalFormWithIcons = { ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref('')
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent>
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="ri-user-line"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="ri-mail-line"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="ri-smartphone-line"
          label="Mobile"
          placeholder="+1 123 456 7890"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="ri-lock-line"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-4"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref('')
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent>
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="ri-user-line"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="ri-mail-line"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="ri-smartphone-line"
          label="Mobile"
          placeholder="+1 123 456 7890"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="ri-lock-line"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-4"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const _sfc_main = {
  __name: "form-layouts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$c;
      const _component_DemoFormLayoutHorizontalForm = _sfc_main$1;
      const _component_DemoFormLayoutHorizontalFormWithIcons = _sfc_main$2;
      const _component_DemoFormLayoutVerticalForm = _sfc_main$3;
      const _component_DemoFormLayoutVerticalFormWithIcons = _sfc_main$4;
      const _component_DemoFormLayoutMultipleColumn = _sfc_main$5;
      const _component_DemoFormLayoutFormHint = _sfc_main$6;
      const _component_DemoFormLayoutFormValidation = _sfc_main$7;
      const _component_DemoFormLayoutFormWithTabs = _sfc_main$8;
      const _component_DemoFormLayoutCollapsible = _sfc_main$9;
      const _component_DemoFormLayoutFormSticky = __unplugin_components_10;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Horizontal Form",
                    code: horizontalForm
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutHorizontalForm, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutHorizontalForm)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Horizontal Form",
                      code: horizontalForm
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutHorizontalForm)
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
                    title: "Horizontal Form with Icons",
                    code: horizontalFormWithIcons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutHorizontalFormWithIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutHorizontalFormWithIcons)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Horizontal Form with Icons",
                      code: horizontalFormWithIcons
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutHorizontalFormWithIcons)
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
                    title: "Vertical Form",
                    code: verticalForm
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutVerticalForm, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutVerticalForm)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Vertical Form",
                      code: verticalForm
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutVerticalForm)
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
                    title: "Vertical Form with Icons",
                    code: verticalFormWithIcons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutVerticalFormWithIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutVerticalFormWithIcons)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Vertical Form with Icons",
                      code: verticalFormWithIcons
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutVerticalFormWithIcons)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Multiple Column",
                    code: multipleColumn
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutMultipleColumn, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutMultipleColumn)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multiple Column",
                      code: multipleColumn
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutMultipleColumn)
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
                    title: "Horizontal Form",
                    code: horizontalForm
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutHorizontalForm)
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
                    title: "Horizontal Form with Icons",
                    code: horizontalFormWithIcons
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutHorizontalFormWithIcons)
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
                    title: "Vertical Form",
                    code: verticalForm
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutVerticalForm)
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
                    title: "Vertical Form with Icons",
                    code: verticalFormWithIcons
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutVerticalFormWithIcons)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Multiple Column",
                    code: multipleColumn
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutMultipleColumn)
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
      _push(ssrRenderComponent(VRow, { class: "match-height my-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Form Hint",
                    code: formHint
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutFormHint, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutFormHint)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Form Hint",
                      code: formHint
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutFormHint)
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
                    title: "Form Validation",
                    code: formValidation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutFormValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutFormValidation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Form Validation",
                      code: formValidation
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutFormValidation)
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
                    title: "Form Hint",
                    code: formHint
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutFormHint)
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
                    title: "Form Validation",
                    code: formValidation
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutFormValidation)
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
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Form with Tabs",
                    "no-padding": "",
                    code: formWithTabs
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormLayoutFormWithTabs, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormLayoutFormWithTabs)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Form with Tabs",
                      "no-padding": "",
                      code: formWithTabs
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormLayoutFormWithTabs)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h6 font-weight-medium mb-5"${_scopeId2}> Collapsible Section </h4>`);
                  _push3(ssrRenderComponent(_component_DemoFormLayoutCollapsible, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h4", { class: "text-h6 font-weight-medium mb-5" }, " Collapsible Section "),
                    createVNode(_component_DemoFormLayoutCollapsible)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h4 class="text-h6 font-weight-medium mb-5"${_scopeId2}> Sticky Section </h4>`);
                  _push3(ssrRenderComponent(_component_DemoFormLayoutFormSticky, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h4", { class: "text-h6 font-weight-medium mb-5" }, " Sticky Section "),
                    createVNode(_component_DemoFormLayoutFormSticky)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Form with Tabs",
                    "no-padding": "",
                    code: formWithTabs
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormLayoutFormWithTabs)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h6 font-weight-medium mb-5" }, " Collapsible Section "),
                  createVNode(_component_DemoFormLayoutCollapsible)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("h4", { class: "text-h6 font-weight-medium mb-5" }, " Sticky Section "),
                  createVNode(_component_DemoFormLayoutFormSticky)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/form-layouts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
