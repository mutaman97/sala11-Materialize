import { _ as _sfc_main$1 } from "./AppDrawerHeaderSection-isEKlId-.js";
import { ref, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VTextarea } from "./VTextarea-Bsz3jSWy.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { a as VIcon, V as VBtn } from "../ssr.js";
const _sfc_main = {
  __name: "InvoiceSendInvoiceDrawer",
  __ssrInlineRender: true,
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDrawerOpen",
    "submit"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const emailFrom = ref("shelbyComapny@email.com");
    const emailTo = ref("qConsolidated@email.com");
    const invoiceSubject = ref("Invoice of purchased Admin Templates");
    const paymentMessage = ref(`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`);
    const onSubmit = () => {
      emit("update:isDrawerOpen", false);
      emit("submit", {
        emailFrom: emailFrom.value,
        emailTo: emailTo.value,
        invoiceSubject: invoiceSubject.value,
        paymentMessage: paymentMessage.value
      });
    };
    const handleDrawerModelValueUpdate = (val) => {
      emit("update:isDrawerOpen", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDrawerHeaderSection = _sfc_main$1;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        location: "end",
        width: 400,
        "model-value": props.isDrawerOpen,
        class: "scrollable-content",
        "onUpdate:modelValue": handleDrawerModelValueUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppDrawerHeaderSection, {
              title: "Send Invoice",
              onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { flat: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(emailFrom),
                                                  "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                                  label: "From",
                                                  placeholder: "sender@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(emailFrom),
                                                    "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                                    label: "From",
                                                    placeholder: "sender@email.com"
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
                                                  modelValue: unref(emailTo),
                                                  "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                                  label: "To",
                                                  placeholder: "receiver@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(emailTo),
                                                    "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                                    label: "To",
                                                    placeholder: "receiver@email.com"
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
                                                  modelValue: unref(invoiceSubject),
                                                  "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                                  label: "Subject",
                                                  placeholder: "Invoice of purchased Admin Templates"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(invoiceSubject),
                                                    "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                                    label: "Subject",
                                                    placeholder: "Invoice of purchased Admin Templates"
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
                                                  modelValue: unref(paymentMessage),
                                                  "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                                  rows: "10",
                                                  label: "Message",
                                                  placeholder: "Thank you for your business, always a pleasure to work with you!"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextarea, {
                                                    modelValue: unref(paymentMessage),
                                                    "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                                    rows: "10",
                                                    label: "Message",
                                                    placeholder: "Thank you for your business, always a pleasure to work with you!"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="mb-6"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VChip, {
                                                  label: "",
                                                  color: "primary",
                                                  size: "small"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        start: "",
                                                        icon: "ri-links-line"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(` Invoice Attached `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          start: "",
                                                          icon: "ri-links-line"
                                                        }),
                                                        createTextVNode(" Invoice Attached ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "submit",
                                                  class: "me-3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Send `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Send ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Cancel `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Cancel ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "mb-6" }, [
                                                    createVNode(VChip, {
                                                      label: "",
                                                      color: "primary",
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          start: "",
                                                          icon: "ri-links-line"
                                                        }),
                                                        createTextVNode(" Invoice Attached ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    class: "me-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Send ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "outlined",
                                                    onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(emailFrom),
                                                  "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                                  label: "From",
                                                  placeholder: "sender@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(emailTo),
                                                  "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                                  label: "To",
                                                  placeholder: "receiver@email.com"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(invoiceSubject),
                                                  "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                                  label: "Subject",
                                                  placeholder: "Invoice of purchased Admin Templates"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextarea, {
                                                  modelValue: unref(paymentMessage),
                                                  "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                                  rows: "10",
                                                  label: "Message",
                                                  placeholder: "Thank you for your business, always a pleasure to work with you!"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "mb-6" }, [
                                                  createVNode(VChip, {
                                                    label: "",
                                                    color: "primary",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        start: "",
                                                        icon: "ri-links-line"
                                                      }),
                                                      createTextVNode(" Invoice Attached ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  class: "me-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Send ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(emailFrom),
                                                "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                                label: "From",
                                                placeholder: "sender@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(emailTo),
                                                "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                                label: "To",
                                                placeholder: "receiver@email.com"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(invoiceSubject),
                                                "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                                label: "Subject",
                                                placeholder: "Invoice of purchased Admin Templates"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextarea, {
                                                modelValue: unref(paymentMessage),
                                                "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                                rows: "10",
                                                label: "Message",
                                                placeholder: "Thank you for your business, always a pleasure to work with you!"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "mb-6" }, [
                                                createVNode(VChip, {
                                                  label: "",
                                                  color: "primary",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      start: "",
                                                      icon: "ri-links-line"
                                                    }),
                                                    createTextVNode(" Invoice Attached ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(VBtn, {
                                                type: "submit",
                                                class: "me-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Send ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "outlined",
                                                onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(onSubmit, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(emailFrom),
                                              "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                              label: "From",
                                              placeholder: "sender@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(emailTo),
                                              "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                              label: "To",
                                              placeholder: "receiver@email.com"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(invoiceSubject),
                                              "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                              label: "Subject",
                                              placeholder: "Invoice of purchased Admin Templates"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextarea, {
                                              modelValue: unref(paymentMessage),
                                              "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                              rows: "10",
                                              label: "Message",
                                              placeholder: "Thank you for your business, always a pleasure to work with you!"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-6" }, [
                                              createVNode(VChip, {
                                                label: "",
                                                color: "primary",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    start: "",
                                                    icon: "ri-links-line"
                                                  }),
                                                  createTextVNode(" Invoice Attached ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(VBtn, {
                                              type: "submit",
                                              class: "me-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Send ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
                                              onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(onSubmit, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(emailFrom),
                                            "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                            label: "From",
                                            placeholder: "sender@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(emailTo),
                                            "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                            label: "To",
                                            placeholder: "receiver@email.com"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(invoiceSubject),
                                            "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                            label: "Subject",
                                            placeholder: "Invoice of purchased Admin Templates"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(paymentMessage),
                                            "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                            rows: "10",
                                            label: "Message",
                                            placeholder: "Thank you for your business, always a pleasure to work with you!"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-6" }, [
                                            createVNode(VChip, {
                                              label: "",
                                              color: "primary",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  start: "",
                                                  icon: "ri-links-line"
                                                }),
                                                createTextVNode(" Invoice Attached ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(VBtn, {
                                            type: "submit",
                                            class: "me-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Send ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { flat: "" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(onSubmit, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(emailFrom),
                                          "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                          label: "From",
                                          placeholder: "sender@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(emailTo),
                                          "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                          label: "To",
                                          placeholder: "receiver@email.com"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(invoiceSubject),
                                          "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                          label: "Subject",
                                          placeholder: "Invoice of purchased Admin Templates"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(paymentMessage),
                                          "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                          rows: "10",
                                          label: "Message",
                                          placeholder: "Thank you for your business, always a pleasure to work with you!"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "mb-6" }, [
                                          createVNode(VChip, {
                                            label: "",
                                            color: "primary",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "ri-links-line"
                                              }),
                                              createTextVNode(" Invoice Attached ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          class: "me-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Send ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppDrawerHeaderSection, {
                title: "Send Invoice",
                onCancel: ($event) => _ctx.$emit("update:isDrawerOpen", false)
              }, null, 8, ["onCancel"]),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                default: withCtx(() => [
                  createVNode(VCard, { flat: "" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(onSubmit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(emailFrom),
                                        "onUpdate:modelValue": ($event) => isRef(emailFrom) ? emailFrom.value = $event : null,
                                        label: "From",
                                        placeholder: "sender@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(emailTo),
                                        "onUpdate:modelValue": ($event) => isRef(emailTo) ? emailTo.value = $event : null,
                                        label: "To",
                                        placeholder: "receiver@email.com"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(invoiceSubject),
                                        "onUpdate:modelValue": ($event) => isRef(invoiceSubject) ? invoiceSubject.value = $event : null,
                                        label: "Subject",
                                        placeholder: "Invoice of purchased Admin Templates"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: unref(paymentMessage),
                                        "onUpdate:modelValue": ($event) => isRef(paymentMessage) ? paymentMessage.value = $event : null,
                                        rows: "10",
                                        label: "Message",
                                        placeholder: "Thank you for your business, always a pleasure to work with you!"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode(VChip, {
                                          label: "",
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "ri-links-line"
                                            }),
                                            createTextVNode(" Invoice Attached ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        class: "me-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Send ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "outlined",
                                        onClick: ($event) => _ctx.$emit("update:isDrawerOpen", false)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/invoice/InvoiceSendInvoiceDrawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
