import { _ as __unplugin_components_0 } from "./CustomRadios-DrYzSNcj.js";
import { _ as _sfc_main$1 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, toRaw, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { a as VIcon, V as VBtn } from "../ssr.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
const _sfc_main = {
  __name: "AddEditAddressDialog",
  __ssrInlineRender: true,
  props: {
    billingAddress: {
      type: Object,
      required: false,
      default: () => ({
        firstName: "",
        lastName: "",
        selectedCountry: null,
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        contact: "",
        country: null,
        state: "",
        zipCode: null
      })
    },
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDialogVisible",
    "submit"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const billingAddress = ref(structuredClone(toRaw(props.billingAddress)));
    const resetForm = () => {
      emit("update:isDialogVisible", false);
      billingAddress.value = structuredClone(toRaw(props.billingAddress));
    };
    const onFormSubmit = () => {
      emit("update:isDialogVisible", false);
      emit("submit", billingAddress.value);
    };
    const selectedAddress = ref("Home");
    const addressTypes = [
      {
        title: "Home",
        desc: "Delivery Time (7am - 9pm)",
        value: "Home",
        icon: "ri-home-smile-2-line"
      },
      {
        title: "Office",
        desc: "Delivery Time (10am - 6pm)",
        value: "Office",
        icon: "ri-building-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      const _component_CustomRadios = __unplugin_components_0;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 900,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.billingAddress) {
              _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_DialogCloseBtn, {
                            variant: "text",
                            size: "default",
                            onClick: resetForm
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>${ssrInterpolate(props.billingAddress.firstName ? "Edit" : "Add New")} Address </h4><p class="text-body-1"${_scopeId3}> Add Address for future billing </p></div>`);
                          _push4(ssrRenderComponent(_component_CustomRadios, {
                            "selected-radio": unref(selectedAddress),
                            "onUpdate:selectedRadio": ($event) => isRef(selectedAddress) ? selectedAddress.value = $event : null,
                            "radio-content": addressTypes,
                            "grid-column": { sm: "6", cols: "12" },
                            class: "mb-5"
                          }, {
                            default: withCtx((items, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex flex-column"${_scopeId4}><div class="d-flex mb-2 align-center gap-x-1"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: items.item.icon,
                                  size: "20",
                                  class: "text-high-emphasis"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div class="text-body-1 font-weight-medium text-high-emphasis"${_scopeId4}>${ssrInterpolate(items.item.title)}</div></div><p class="text-body-2 mb-0"${_scopeId4}>${ssrInterpolate(items.item.desc)}</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("div", { class: "d-flex mb-2 align-center gap-x-1" }, [
                                      createVNode(VIcon, {
                                        icon: items.item.icon,
                                        size: "20",
                                        class: "text-high-emphasis"
                                      }, null, 8, ["icon"]),
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(items.item.title), 1)
                                    ]),
                                    createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(items.item.desc), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VForm, { onSubmit: onFormSubmit }, {
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
                                              modelValue: unref(billingAddress).firstName,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
                                              label: "First Name",
                                              placeholder: "John"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).firstName,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
                                                label: "First Name",
                                                placeholder: "John"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              modelValue: unref(billingAddress).lastName,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                              label: "Last Name",
                                              placeholder: "Doe"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).lastName,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                                label: "Last Name",
                                                placeholder: "Doe"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSelect, {
                                              modelValue: unref(billingAddress).selectedCountry,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                              label: "Select Country",
                                              placeholder: "Select Country",
                                              items: ["USA", "Canada", "NZ", "Aus"]
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSelect, {
                                                modelValue: unref(billingAddress).selectedCountry,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                                label: "Select Country",
                                                placeholder: "Select Country",
                                                items: ["USA", "Canada", "NZ", "Aus"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextField, {
                                              modelValue: unref(billingAddress).addressLine1,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                              label: "Address Line 1",
                                              placeholder: "1, New Street"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).addressLine1,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                                label: "Address Line 1",
                                                placeholder: "1, New Street"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextField, {
                                              modelValue: unref(billingAddress).addressLine2,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                              label: "Address Line 2",
                                              placeholder: "Near hospital"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).addressLine2,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                                label: "Address Line 2",
                                                placeholder: "Near hospital"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VTextField, {
                                              modelValue: unref(billingAddress).landmark,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                              label: "Landmark & City",
                                              placeholder: "Near hospital, New York"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).landmark,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                                label: "Landmark & City",
                                                placeholder: "Near hospital, New York"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              modelValue: unref(billingAddress).state,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                              label: "State/Province",
                                              placeholder: "New York"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).state,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                                label: "State/Province",
                                                placeholder: "New York"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              modelValue: unref(billingAddress).zipCode,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                              label: "Zip Code",
                                              placeholder: "123123",
                                              type: "number"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VTextField, {
                                                modelValue: unref(billingAddress).zipCode,
                                                "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                                label: "Zip Code",
                                                placeholder: "123123",
                                                type: "number"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSwitch, { label: "Make this default shipping address" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSwitch, { label: "Make this default shipping address" })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` submit `);
                                                } else {
                                                  return [
                                                    createTextVNode(" submit ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              color: "secondary",
                                              onClick: resetForm
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Cancel `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Cancel ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                class: "me-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" submit ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                color: "secondary",
                                                onClick: resetForm
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(billingAddress).firstName,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
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
                                              modelValue: unref(billingAddress).lastName,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                              label: "Last Name",
                                              placeholder: "Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(billingAddress).selectedCountry,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                              label: "Select Country",
                                              placeholder: "Select Country",
                                              items: ["USA", "Canada", "NZ", "Aus"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(billingAddress).addressLine1,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                              label: "Address Line 1",
                                              placeholder: "1, New Street"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(billingAddress).addressLine2,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                              label: "Address Line 2",
                                              placeholder: "Near hospital"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(billingAddress).landmark,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                              label: "Landmark & City",
                                              placeholder: "Near hospital, New York"
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
                                              modelValue: unref(billingAddress).state,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                              label: "State/Province",
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
                                              modelValue: unref(billingAddress).zipCode,
                                              "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                              label: "Zip Code",
                                              placeholder: "123123",
                                              type: "number"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, { label: "Make this default shipping address" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              color: "secondary",
                                              onClick: resetForm
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
                                            modelValue: unref(billingAddress).firstName,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
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
                                            modelValue: unref(billingAddress).lastName,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                            label: "Last Name",
                                            placeholder: "Doe"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(billingAddress).selectedCountry,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                            label: "Select Country",
                                            placeholder: "Select Country",
                                            items: ["USA", "Canada", "NZ", "Aus"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(billingAddress).addressLine1,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                            label: "Address Line 1",
                                            placeholder: "1, New Street"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(billingAddress).addressLine2,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                            label: "Address Line 2",
                                            placeholder: "Near hospital"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(billingAddress).landmark,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                            label: "Landmark & City",
                                            placeholder: "Near hospital, New York"
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
                                            modelValue: unref(billingAddress).state,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                            label: "State/Province",
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
                                            modelValue: unref(billingAddress).zipCode,
                                            "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                            label: "Zip Code",
                                            placeholder: "123123",
                                            type: "number"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, { label: "Make this default shipping address" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            color: "secondary",
                                            onClick: resetForm
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                            createVNode(_component_DialogCloseBtn, {
                              variant: "text",
                              size: "default",
                              onClick: resetForm
                            }),
                            createVNode("div", { class: "text-center mb-6" }, [
                              createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.billingAddress.firstName ? "Edit" : "Add New") + " Address ", 1),
                              createVNode("p", { class: "text-body-1" }, " Add Address for future billing ")
                            ]),
                            createVNode(_component_CustomRadios, {
                              "selected-radio": unref(selectedAddress),
                              "onUpdate:selectedRadio": ($event) => isRef(selectedAddress) ? selectedAddress.value = $event : null,
                              "radio-content": addressTypes,
                              "grid-column": { sm: "6", cols: "12" },
                              class: "mb-5"
                            }, {
                              default: withCtx((items) => [
                                createVNode("div", { class: "d-flex flex-column" }, [
                                  createVNode("div", { class: "d-flex mb-2 align-center gap-x-1" }, [
                                    createVNode(VIcon, {
                                      icon: items.item.icon,
                                      size: "20",
                                      class: "text-high-emphasis"
                                    }, null, 8, ["icon"]),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(items.item.title), 1)
                                  ]),
                                  createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(items.item.desc), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                            createVNode(VForm, {
                              onSubmit: withModifiers(onFormSubmit, ["prevent"])
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
                                          modelValue: unref(billingAddress).firstName,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
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
                                          modelValue: unref(billingAddress).lastName,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                          label: "Last Name",
                                          placeholder: "Doe"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(billingAddress).selectedCountry,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                          label: "Select Country",
                                          placeholder: "Select Country",
                                          items: ["USA", "Canada", "NZ", "Aus"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(billingAddress).addressLine1,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                          label: "Address Line 1",
                                          placeholder: "1, New Street"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(billingAddress).addressLine2,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                          label: "Address Line 2",
                                          placeholder: "Near hospital"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(billingAddress).landmark,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                          label: "Landmark & City",
                                          placeholder: "Near hospital, New York"
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
                                          modelValue: unref(billingAddress).state,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                          label: "State/Province",
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
                                          modelValue: unref(billingAddress).zipCode,
                                          "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                          label: "Zip Code",
                                          placeholder: "123123",
                                          type: "number"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, { label: "Make this default shipping address" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "secondary",
                                          onClick: resetForm
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                      createVNode(VCardText, { class: "pt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_DialogCloseBtn, {
                            variant: "text",
                            size: "default",
                            onClick: resetForm
                          }),
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.billingAddress.firstName ? "Edit" : "Add New") + " Address ", 1),
                            createVNode("p", { class: "text-body-1" }, " Add Address for future billing ")
                          ]),
                          createVNode(_component_CustomRadios, {
                            "selected-radio": unref(selectedAddress),
                            "onUpdate:selectedRadio": ($event) => isRef(selectedAddress) ? selectedAddress.value = $event : null,
                            "radio-content": addressTypes,
                            "grid-column": { sm: "6", cols: "12" },
                            class: "mb-5"
                          }, {
                            default: withCtx((items) => [
                              createVNode("div", { class: "d-flex flex-column" }, [
                                createVNode("div", { class: "d-flex mb-2 align-center gap-x-1" }, [
                                  createVNode(VIcon, {
                                    icon: items.item.icon,
                                    size: "20",
                                    class: "text-high-emphasis"
                                  }, null, 8, ["icon"]),
                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(items.item.title), 1)
                                ]),
                                createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(items.item.desc), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                          createVNode(VForm, {
                            onSubmit: withModifiers(onFormSubmit, ["prevent"])
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
                                        modelValue: unref(billingAddress).firstName,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
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
                                        modelValue: unref(billingAddress).lastName,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                        label: "Last Name",
                                        placeholder: "Doe"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(billingAddress).selectedCountry,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                        label: "Select Country",
                                        placeholder: "Select Country",
                                        items: ["USA", "Canada", "NZ", "Aus"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(billingAddress).addressLine1,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                        label: "Address Line 1",
                                        placeholder: "1, New Street"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(billingAddress).addressLine2,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                        label: "Address Line 2",
                                        placeholder: "Near hospital"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(billingAddress).landmark,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                        label: "Landmark & City",
                                        placeholder: "Near hospital, New York"
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
                                        modelValue: unref(billingAddress).state,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                        label: "State/Province",
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
                                        modelValue: unref(billingAddress).zipCode,
                                        "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                        label: "Zip Code",
                                        placeholder: "123123",
                                        type: "number"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, { label: "Make this default shipping address" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "me-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "secondary",
                                        onClick: resetForm
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
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
              _push2(`<!---->`);
            }
          } else {
            return [
              props.billingAddress ? (openBlock(), createBlock(VCard, {
                key: 0,
                class: "pa-sm-11 pa-3"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogCloseBtn, {
                        variant: "text",
                        size: "default",
                        onClick: resetForm
                      }),
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.billingAddress.firstName ? "Edit" : "Add New") + " Address ", 1),
                        createVNode("p", { class: "text-body-1" }, " Add Address for future billing ")
                      ]),
                      createVNode(_component_CustomRadios, {
                        "selected-radio": unref(selectedAddress),
                        "onUpdate:selectedRadio": ($event) => isRef(selectedAddress) ? selectedAddress.value = $event : null,
                        "radio-content": addressTypes,
                        "grid-column": { sm: "6", cols: "12" },
                        class: "mb-5"
                      }, {
                        default: withCtx((items) => [
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("div", { class: "d-flex mb-2 align-center gap-x-1" }, [
                              createVNode(VIcon, {
                                icon: items.item.icon,
                                size: "20",
                                class: "text-high-emphasis"
                              }, null, 8, ["icon"]),
                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(items.item.title), 1)
                            ]),
                            createVNode("p", { class: "text-body-2 mb-0" }, toDisplayString(items.item.desc), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["selected-radio", "onUpdate:selectedRadio"]),
                      createVNode(VForm, {
                        onSubmit: withModifiers(onFormSubmit, ["prevent"])
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
                                    modelValue: unref(billingAddress).firstName,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).firstName = $event,
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
                                    modelValue: unref(billingAddress).lastName,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).lastName = $event,
                                    label: "Last Name",
                                    placeholder: "Doe"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(billingAddress).selectedCountry,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).selectedCountry = $event,
                                    label: "Select Country",
                                    placeholder: "Select Country",
                                    items: ["USA", "Canada", "NZ", "Aus"]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(billingAddress).addressLine1,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine1 = $event,
                                    label: "Address Line 1",
                                    placeholder: "1, New Street"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(billingAddress).addressLine2,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).addressLine2 = $event,
                                    label: "Address Line 2",
                                    placeholder: "Near hospital"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(billingAddress).landmark,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).landmark = $event,
                                    label: "Landmark & City",
                                    placeholder: "Near hospital, New York"
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
                                    modelValue: unref(billingAddress).state,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).state = $event,
                                    label: "State/Province",
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
                                    modelValue: unref(billingAddress).zipCode,
                                    "onUpdate:modelValue": ($event) => unref(billingAddress).zipCode = $event,
                                    label: "Zip Code",
                                    placeholder: "123123",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSwitch, { label: "Make this default shipping address" })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    type: "submit",
                                    class: "me-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" submit ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "secondary",
                                    onClick: resetForm
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
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
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/AddEditAddressDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
