import { _ as _sfc_main$4 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, toRaw, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, isRef } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
import { _ as __unplugin_components_0 } from "./CustomRadios-DrYzSNcj.js";
const _sfc_main$3 = {
  __name: "CardAddEditDialog",
  __ssrInlineRender: true,
  props: {
    cardDetails: {
      type: Object,
      required: false,
      default: () => ({
        number: "",
        name: "",
        expiry: "",
        cvv: "",
        isPrimary: false,
        type: ""
      })
    },
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "submit",
    "update:isDialogVisible"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const cardDetails = ref(structuredClone(toRaw(props.cardDetails)));
    watch(() => props, () => {
      cardDetails.value = structuredClone(toRaw(props.cardDetails));
    });
    const formSubmit = () => {
      emit("submit", cardDetails.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 600,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>${ssrInterpolate(props.cardDetails.name ? "Edit Card" : "Add New Card")}</h4><div class="text-body-1"${_scopeId3}>${ssrInterpolate(props.cardDetails.name ? "Edit your saved card details" : "Add your saved card details")}</div></div>`);
                        _push4(ssrRenderComponent(VForm, { onSubmit: () => {
                        } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(cardDetails).number,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
                                            label: "Card Number",
                                            placeholder: "1234 1234 1234 1234"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardDetails).number,
                                              "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
                                              label: "Card Number",
                                              placeholder: "1234 1234 1234 1234"
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
                                            modelValue: unref(cardDetails).name,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                            label: "Name",
                                            placeholder: "John Doe"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardDetails).name,
                                              "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                              label: "Name",
                                              placeholder: "John Doe"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(cardDetails).expiry,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
                                            label: "Expiry",
                                            placeholder: "MM/YY"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardDetails).expiry,
                                              "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
                                              label: "Expiry",
                                              placeholder: "MM/YY"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(cardDetails).cvv,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                            type: "number",
                                            label: "CVV",
                                            placeholder: "123"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(cardDetails).cvv,
                                              "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                              type: "number",
                                              label: "CVV",
                                              placeholder: "123"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSwitch, {
                                            modelValue: unref(cardDetails).isPrimary,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                            label: "Save Card for future billing?"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSwitch, {
                                              modelValue: unref(cardDetails).isPrimary,
                                              "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                              label: "Save Card for future billing?"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            class: "me-4",
                                            type: "submit",
                                            onClick: formSubmit
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Submit `);
                                              } else {
                                                return [
                                                  createTextVNode(" Submit ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
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
                                              class: "me-4",
                                              type: "submit",
                                              onClick: formSubmit
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Submit ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
                                              onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(cardDetails).number,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
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
                                            modelValue: unref(cardDetails).name,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                            label: "Name",
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
                                            modelValue: unref(cardDetails).expiry,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
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
                                            modelValue: unref(cardDetails).cvv,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                            type: "number",
                                            label: "CVV",
                                            placeholder: "123"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VSwitch, {
                                            modelValue: unref(cardDetails).isPrimary,
                                            "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                            label: "Save Card for future billing?"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            class: "me-4",
                                            type: "submit",
                                            onClick: formSubmit
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Submit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(cardDetails).number,
                                          "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
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
                                          modelValue: unref(cardDetails).name,
                                          "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                          label: "Name",
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
                                          modelValue: unref(cardDetails).expiry,
                                          "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
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
                                          modelValue: unref(cardDetails).cvv,
                                          "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                          type: "number",
                                          label: "CVV",
                                          placeholder: "123"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VSwitch, {
                                          modelValue: unref(cardDetails).isPrimary,
                                          "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                          label: "Save Card for future billing?"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          class: "me-4",
                                          type: "submit",
                                          onClick: formSubmit
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Submit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.cardDetails.name ? "Edit Card" : "Add New Card"), 1),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(props.cardDetails.name ? "Edit your saved card details" : "Add your saved card details"), 1)
                          ]),
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
                                        modelValue: unref(cardDetails).number,
                                        "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
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
                                        modelValue: unref(cardDetails).name,
                                        "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                        label: "Name",
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
                                        modelValue: unref(cardDetails).expiry,
                                        "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
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
                                        modelValue: unref(cardDetails).cvv,
                                        "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                        type: "number",
                                        label: "CVV",
                                        placeholder: "123"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VSwitch, {
                                        modelValue: unref(cardDetails).isPrimary,
                                        "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                        label: "Save Card for future billing?"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        class: "me-4",
                                        type: "submit",
                                        onClick: formSubmit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Submit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "outlined",
                                        onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
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
                            _: 1
                          })
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
                      onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.cardDetails.name ? "Edit Card" : "Add New Card"), 1),
                          createVNode("div", { class: "text-body-1" }, toDisplayString(props.cardDetails.name ? "Edit your saved card details" : "Add your saved card details"), 1)
                        ]),
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
                                      modelValue: unref(cardDetails).number,
                                      "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
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
                                      modelValue: unref(cardDetails).name,
                                      "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                      label: "Name",
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
                                      modelValue: unref(cardDetails).expiry,
                                      "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
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
                                      modelValue: unref(cardDetails).cvv,
                                      "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                      type: "number",
                                      label: "CVV",
                                      placeholder: "123"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VSwitch, {
                                      modelValue: unref(cardDetails).isPrimary,
                                      "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                      label: "Save Card for future billing?"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "me-4",
                                      type: "submit",
                                      onClick: formSubmit
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Submit ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancel ")
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
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(props.cardDetails.name ? "Edit Card" : "Add New Card"), 1),
                        createVNode("div", { class: "text-body-1" }, toDisplayString(props.cardDetails.name ? "Edit your saved card details" : "Add your saved card details"), 1)
                      ]),
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
                                    modelValue: unref(cardDetails).number,
                                    "onUpdate:modelValue": ($event) => unref(cardDetails).number = $event,
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
                                    modelValue: unref(cardDetails).name,
                                    "onUpdate:modelValue": ($event) => unref(cardDetails).name = $event,
                                    label: "Name",
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
                                    modelValue: unref(cardDetails).expiry,
                                    "onUpdate:modelValue": ($event) => unref(cardDetails).expiry = $event,
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
                                    modelValue: unref(cardDetails).cvv,
                                    "onUpdate:modelValue": ($event) => unref(cardDetails).cvv = $event,
                                    type: "number",
                                    label: "CVV",
                                    placeholder: "123"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VSwitch, {
                                    modelValue: unref(cardDetails).isPrimary,
                                    "onUpdate:modelValue": ($event) => unref(cardDetails).isPrimary = $event,
                                    label: "Save Card for future billing?"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    class: "me-4",
                                    type: "submit",
                                    onClick: formSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/CardAddEditDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EnableOneTimePasswordDialog",
  __ssrInlineRender: true,
  props: {
    mobileNumber: {
      type: String,
      required: false
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
    const phoneNumber = ref(structuredClone(toRaw(props.mobileNumber)));
    const formSubmit = () => {
      if (phoneNumber.value) {
        emit("submit", phoneNumber.value);
        emit("update:isDialogVisible", false);
      }
    };
    const resetPhoneNumber = () => {
      phoneNumber.value = structuredClone(toRaw(props.mobileNumber));
      emit("update:isDialogVisible", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "max-width": "900",
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-5 pa-sm-11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: resetPhoneNumber
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6"${_scopeId3}><h5 class="text-h5 mb-2"${_scopeId3}> Verify Your Mobile Number for SMS </h5><div${_scopeId3}> Enter your mobile phone number with country code and we will send you a verification code. </div></div>`);
                        _push4(ssrRenderComponent(VForm, { onSubmit: () => {
                        } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(phoneNumber),
                                "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                name: "mobile",
                                label: "Mobile Number",
                                placeholder: "+1 123 456 7890",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-wrap justify-end gap-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: resetPhoneNumber
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cancel `);
                                  } else {
                                    return [
                                      createTextVNode(" Cancel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "success",
                                type: "submit",
                                onClick: formSubmit
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                    _push6(ssrRenderComponent(VIcon, {
                                      end: "",
                                      icon: "ri-check-line",
                                      class: "flip-in-rtl"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-check-line",
                                        class: "flip-in-rtl"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(phoneNumber),
                                  "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                  name: "mobile",
                                  label: "Mobile Number",
                                  placeholder: "+1 123 456 7890",
                                  class: "mb-6"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex flex-wrap justify-end gap-3" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: resetPhoneNumber
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "success",
                                    type: "submit",
                                    onClick: formSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-check-line",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("h5", { class: "text-h5 mb-2" }, " Verify Your Mobile Number for SMS "),
                            createVNode("div", null, " Enter your mobile phone number with country code and we will send you a verification code. ")
                          ]),
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(phoneNumber),
                                "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                name: "mobile",
                                label: "Mobile Number",
                                placeholder: "+1 123 456 7890",
                                class: "mb-6"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex flex-wrap justify-end gap-3" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  onClick: resetPhoneNumber
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "success",
                                  type: "submit",
                                  onClick: formSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit "),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-check-line",
                                      class: "flip-in-rtl"
                                    })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: resetPhoneNumber
                    }),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h5", { class: "text-h5 mb-2" }, " Verify Your Mobile Number for SMS "),
                          createVNode("div", null, " Enter your mobile phone number with country code and we will send you a verification code. ")
                        ]),
                        createVNode(VForm, {
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(phoneNumber),
                              "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                              name: "mobile",
                              label: "Mobile Number",
                              placeholder: "+1 123 456 7890",
                              class: "mb-6"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "d-flex flex-wrap justify-end gap-3" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: resetPhoneNumber
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "success",
                                type: "submit",
                                onClick: formSubmit
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit "),
                                  createVNode(VIcon, {
                                    end: "",
                                    icon: "ri-check-line",
                                    class: "flip-in-rtl"
                                  })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "pa-5 pa-sm-11" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: resetPhoneNumber
                  }),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h5", { class: "text-h5 mb-2" }, " Verify Your Mobile Number for SMS "),
                        createVNode("div", null, " Enter your mobile phone number with country code and we will send you a verification code. ")
                      ]),
                      createVNode(VForm, {
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(phoneNumber),
                            "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                            name: "mobile",
                            label: "Mobile Number",
                            placeholder: "+1 123 456 7890",
                            class: "mb-6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex flex-wrap justify-end gap-3" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              onClick: resetPhoneNumber
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "success",
                              type: "submit",
                              onClick: formSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-check-line",
                                  class: "flip-in-rtl"
                                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/EnableOneTimePasswordDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const themeselectionQr = "/build/assets/themeselection-qr-Bv5F3_M6.png";
const _sfc_main$1 = {
  __name: "AddAuthenticatorAppDialog",
  __ssrInlineRender: true,
  props: {
    authCode: {
      type: String,
      required: false
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
    const authCode = ref(structuredClone(toRaw(props.authCode)));
    const formSubmit = () => {
      if (authCode.value) {
        emit("submit", authCode.value);
        emit("update:isDialogVisible", false);
      }
    };
    const resetAuthCode = () => {
      authCode.value = structuredClone(toRaw(props.authCode));
      emit("update:isDialogVisible", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "max-width": "900",
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: resetAuthCode
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="text-h4 text-center mb-6"${_scopeId3}> Add Authenticator App </h4><h5 class="text-h5 font-weight-medium mb-2"${_scopeId3}> Authenticator Apps </h5><p class="mb-6"${_scopeId3}> Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. </p><div class="my-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VImg, {
                          width: "150",
                          src: unref(themeselectionQr),
                          class: "mx-auto"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "my-4"
                        }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ASDLKNASDA9AHS678dGhASD78AB `);
                            } else {
                              return [
                                createTextVNode(" ASDLKNASDA9AHS678dGhASD78AB ")
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` If you&#39;re having trouble using the QR code, select manual entry on your app `);
                            } else {
                              return [
                                createTextVNode(" If you're having trouble using the QR code, select manual entry on your app ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VForm, { onSubmit: () => {
                        } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(authCode),
                                "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null,
                                name: "auth-code",
                                label: "Enter Authentication Code",
                                placeholder: "123 456",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-end flex-wrap gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: resetAuthCode
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cancel `);
                                  } else {
                                    return [
                                      createTextVNode(" Cancel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "success",
                                type: "submit",
                                onClick: formSubmit
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                    _push6(ssrRenderComponent(VIcon, {
                                      end: "",
                                      icon: "ri-check-line",
                                      class: "flip-in-rtl"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-check-line",
                                        class: "flip-in-rtl"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(authCode),
                                  "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null,
                                  name: "auth-code",
                                  label: "Enter Authentication Code",
                                  placeholder: "123 456",
                                  class: "mb-6"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-end flex-wrap gap-4" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    onClick: resetAuthCode
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "success",
                                    type: "submit",
                                    onClick: formSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-check-line",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h4", { class: "text-h4 text-center mb-6" }, " Add Authenticator App "),
                          createVNode("h5", { class: "text-h5 font-weight-medium mb-2" }, " Authenticator Apps "),
                          createVNode("p", { class: "mb-6" }, " Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. "),
                          createVNode("div", { class: "my-6" }, [
                            createVNode(VImg, {
                              width: "150",
                              src: unref(themeselectionQr),
                              class: "mx-auto"
                            }, null, 8, ["src"])
                          ]),
                          createVNode(VAlert, {
                            color: "warning",
                            variant: "tonal",
                            class: "my-4"
                          }, {
                            title: withCtx(() => [
                              createTextVNode(" ASDLKNASDA9AHS678dGhASD78AB ")
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" If you're having trouble using the QR code, select manual entry on your app ")
                            ]),
                            _: 1
                          }),
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(authCode),
                                "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null,
                                name: "auth-code",
                                label: "Enter Authentication Code",
                                placeholder: "123 456",
                                class: "mb-6"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex justify-end flex-wrap gap-4" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  onClick: resetAuthCode
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "success",
                                  type: "submit",
                                  onClick: formSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit "),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-check-line",
                                      class: "flip-in-rtl"
                                    })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: resetAuthCode
                    }),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "text-h4 text-center mb-6" }, " Add Authenticator App "),
                        createVNode("h5", { class: "text-h5 font-weight-medium mb-2" }, " Authenticator Apps "),
                        createVNode("p", { class: "mb-6" }, " Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. "),
                        createVNode("div", { class: "my-6" }, [
                          createVNode(VImg, {
                            width: "150",
                            src: unref(themeselectionQr),
                            class: "mx-auto"
                          }, null, 8, ["src"])
                        ]),
                        createVNode(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "my-4"
                        }, {
                          title: withCtx(() => [
                            createTextVNode(" ASDLKNASDA9AHS678dGhASD78AB ")
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" If you're having trouble using the QR code, select manual entry on your app ")
                          ]),
                          _: 1
                        }),
                        createVNode(VForm, {
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(authCode),
                              "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null,
                              name: "auth-code",
                              label: "Enter Authentication Code",
                              placeholder: "123 456",
                              class: "mb-6"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "d-flex justify-end flex-wrap gap-4" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: resetAuthCode
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "success",
                                type: "submit",
                                onClick: formSubmit
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit "),
                                  createVNode(VIcon, {
                                    end: "",
                                    icon: "ri-check-line",
                                    class: "flip-in-rtl"
                                  })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: resetAuthCode
                  }),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "text-h4 text-center mb-6" }, " Add Authenticator App "),
                      createVNode("h5", { class: "text-h5 font-weight-medium mb-2" }, " Authenticator Apps "),
                      createVNode("p", { class: "mb-6" }, " Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. "),
                      createVNode("div", { class: "my-6" }, [
                        createVNode(VImg, {
                          width: "150",
                          src: unref(themeselectionQr),
                          class: "mx-auto"
                        }, null, 8, ["src"])
                      ]),
                      createVNode(VAlert, {
                        color: "warning",
                        variant: "tonal",
                        class: "my-4"
                      }, {
                        title: withCtx(() => [
                          createTextVNode(" ASDLKNASDA9AHS678dGhASD78AB ")
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" If you're having trouble using the QR code, select manual entry on your app ")
                        ]),
                        _: 1
                      }),
                      createVNode(VForm, {
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(authCode),
                            "onUpdate:modelValue": ($event) => isRef(authCode) ? authCode.value = $event : null,
                            name: "auth-code",
                            label: "Enter Authentication Code",
                            placeholder: "123 456",
                            class: "mb-6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex justify-end flex-wrap gap-4" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              onClick: resetAuthCode
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "success",
                              type: "submit",
                              onClick: formSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-check-line",
                                  class: "flip-in-rtl"
                                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/AddAuthenticatorAppDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "TwoFactorAuthDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true,
      default: false
    },
    smsCode: {
      type: String,
      required: false,
      default: ""
    },
    authAppCode: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["update:isDialogVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const authMethods = [
      {
        icon: "ri-settings-4-line",
        title: "Authenticator Apps",
        desc: "Get code from an app like Google Authenticator or Microsoft Authenticator.",
        value: "authApp"
      },
      {
        icon: "ri-wechat-line",
        title: "SMS",
        desc: "We will send a code via SMS if you need to use your backup login method.",
        value: "sms"
      }
    ];
    const selectedMethod = ref("authApp");
    const isAuthAppDialogVisible = ref(false);
    const isSmsDialogVisible = ref(false);
    const openSelectedMethodDialog = () => {
      if (selectedMethod.value === "authApp") {
        isAuthAppDialogVisible.value = true;
        isSmsDialogVisible.value = false;
        emit("update:isDialogVisible", false);
      }
      if (selectedMethod.value === "sms") {
        isAuthAppDialogVisible.value = false;
        isSmsDialogVisible.value = true;
        emit("update:isDialogVisible", false);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      const _component_CustomRadios = __unplugin_components_0;
      const _component_AddAuthenticatorAppDialog = _sfc_main$1;
      const _component_EnableOneTimePasswordDialog = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VDialog, {
        "max-width": "800",
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6"${_scopeId3}><div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}> Select Authentication Method </h4><div class="text-body-1"${_scopeId3}> You also need to select a method by which the proxy authenticates to the directory serve. </div></div>`);
                        _push4(ssrRenderComponent(_component_CustomRadios, {
                          "selected-radio": unref(selectedMethod),
                          "onUpdate:selectedRadio": ($event) => isRef(selectedMethod) ? selectedMethod.value = $event : null,
                          "radio-content": authMethods,
                          "grid-column": { cols: "12" }
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
                        _push4(`</div><div class="text-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { onClick: openSelectedMethodDialog }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` continue `);
                              _push5(ssrRenderComponent(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                class: "flip-in-rtl"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" continue "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  class: "flip-in-rtl"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("div", { class: "text-center mb-6" }, [
                              createVNode("h4", { class: "text-h4 mb-2" }, " Select Authentication Method "),
                              createVNode("div", { class: "text-body-1" }, " You also need to select a method by which the proxy authenticates to the directory serve. ")
                            ]),
                            createVNode(_component_CustomRadios, {
                              "selected-radio": unref(selectedMethod),
                              "onUpdate:selectedRadio": ($event) => isRef(selectedMethod) ? selectedMethod.value = $event : null,
                              "radio-content": authMethods,
                              "grid-column": { cols: "12" }
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
                            }, 8, ["selected-radio", "onUpdate:selectedRadio"])
                          ]),
                          createVNode("div", { class: "text-end" }, [
                            createVNode(VBtn, { onClick: openSelectedMethodDialog }, {
                              default: withCtx(() => [
                                createTextVNode(" continue "),
                                createVNode(VIcon, {
                                  end: "",
                                  icon: "ri-arrow-right-line",
                                  class: "flip-in-rtl"
                                })
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
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, " Select Authentication Method "),
                            createVNode("div", { class: "text-body-1" }, " You also need to select a method by which the proxy authenticates to the directory serve. ")
                          ]),
                          createVNode(_component_CustomRadios, {
                            "selected-radio": unref(selectedMethod),
                            "onUpdate:selectedRadio": ($event) => isRef(selectedMethod) ? selectedMethod.value = $event : null,
                            "radio-content": authMethods,
                            "grid-column": { cols: "12" }
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
                          }, 8, ["selected-radio", "onUpdate:selectedRadio"])
                        ]),
                        createVNode("div", { class: "text-end" }, [
                          createVNode(VBtn, { onClick: openSelectedMethodDialog }, {
                            default: withCtx(() => [
                              createTextVNode(" continue "),
                              createVNode(VIcon, {
                                end: "",
                                icon: "ri-arrow-right-line",
                                class: "flip-in-rtl"
                              })
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
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, " Select Authentication Method "),
                          createVNode("div", { class: "text-body-1" }, " You also need to select a method by which the proxy authenticates to the directory serve. ")
                        ]),
                        createVNode(_component_CustomRadios, {
                          "selected-radio": unref(selectedMethod),
                          "onUpdate:selectedRadio": ($event) => isRef(selectedMethod) ? selectedMethod.value = $event : null,
                          "radio-content": authMethods,
                          "grid-column": { cols: "12" }
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
                        }, 8, ["selected-radio", "onUpdate:selectedRadio"])
                      ]),
                      createVNode("div", { class: "text-end" }, [
                        createVNode(VBtn, { onClick: openSelectedMethodDialog }, {
                          default: withCtx(() => [
                            createTextVNode(" continue "),
                            createVNode(VIcon, {
                              end: "",
                              icon: "ri-arrow-right-line",
                              class: "flip-in-rtl"
                            })
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
      _push(ssrRenderComponent(_component_AddAuthenticatorAppDialog, {
        isDialogVisible: unref(isAuthAppDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isAuthAppDialogVisible) ? isAuthAppDialogVisible.value = $event : null,
        "auth-code": props.authAppCode
      }, null, _parent));
      _push(ssrRenderComponent(_component_EnableOneTimePasswordDialog, {
        isDialogVisible: unref(isSmsDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isSmsDialogVisible) ? isSmsDialogVisible.value = $event : null,
        "mobile-number": props.smsCode
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/TwoFactorAuthDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$3 as _,
  _sfc_main as a
};
