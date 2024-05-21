import { ref, withCtx, unref, createVNode, createTextVNode, isRef, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { I as InvoiceEditable } from "./InvoiceEditable-BoO1t9K4.js";
import { _ as _sfc_main$1 } from "./InvoiceSendInvoiceDrawer-DOI4IWPX.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VBtn } from "../ssr.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import "./AppDateTimePicker-B0c_dYDs.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "@vueuse/core";
import "./VTextarea-Bsz3jSWy.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./forwardRefs-IZGbB77j.js";
import "./VTextField-C5xFQjHM.js";
import "./VTooltip-CVKEAyhs.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./useApi-Cd0G3DOd.js";
import "destr";
import "./VDivider-o5iRKh3w.js";
import "./AppDrawerHeaderSection-isEKlId-.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "vue3-perfect-scrollbar";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VForm-J0SV9LXx.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "cookie-es";
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
import "@antfu/utils";
import "./VList-Bay5Fixr.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invoiceData = ref({
      invoice: {
        id: 5037,
        issuedDate: "",
        service: "",
        total: 0,
        avatar: "",
        invoiceStatus: "",
        dueDate: "",
        balance: 0,
        client: {
          address: "112, Lorem Ipsum, Florida",
          company: "Greeva Inc",
          companyEmail: "johndoe@greeva.com",
          contact: "+1 123 3452 12",
          country: "USA",
          name: "John Doe"
        }
      },
      paymentDetails: {
        totalDue: "$12,110.55",
        bankName: "American Bank",
        country: "United States",
        iban: "ETD95476213",
        swiftCode: "BR91905"
      },
      purchasedProducts: [{
        title: "",
        cost: 0,
        hours: 0,
        description: ""
      }],
      note: "",
      paymentMethod: "",
      salesperson: "",
      thanksNote: ""
    });
    const paymentTerms = ref(true);
    const clientNotes = ref(false);
    const paymentStub = ref(false);
    const selectedPaymentMethod = ref("Bank Account");
    const paymentMethods = [
      "Bank Account",
      "PayPal",
      "UPI Transfer"
    ];
    const isSendPaymentSidebarVisible = ref(false);
    const addProduct = (value) => {
      var _a;
      (_a = invoiceData.value) == null ? void 0 : _a.purchasedProducts.push(value);
    };
    const removeProduct = (id) => {
      var _a;
      (_a = invoiceData.value) == null ? void 0 : _a.purchasedProducts.splice(id, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(InvoiceEditable, {
                    data: unref(invoiceData),
                    onPush: addProduct,
                    onRemove: removeProduct
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(InvoiceEditable, {
                      data: unref(invoiceData),
                      onPush: addProduct,
                      onRemove: removeProduct
                    }, null, 8, ["data"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "mb-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                "prepend-icon": "ri-send-plane-line",
                                class: "mb-4",
                                onClick: ($event) => isSendPaymentSidebarVisible.value = true
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Send Invoice `);
                                  } else {
                                    return [
                                      createTextVNode(" Send Invoice ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "secondary",
                                variant: "outlined",
                                class: "mb-4",
                                to: { name: "apps-invoice-preview-id", params: { id: "5036" } }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Preview `);
                                  } else {
                                    return [
                                      createTextVNode(" Preview ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "secondary",
                                variant: "outlined"
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
                                  block: "",
                                  "prepend-icon": "ri-send-plane-line",
                                  class: "mb-4",
                                  onClick: ($event) => isSendPaymentSidebarVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Send Invoice ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4",
                                  to: { name: "apps-invoice-preview-id", params: { id: "5036" } }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Preview ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "secondary",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save ")
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
                              createVNode(VBtn, {
                                block: "",
                                "prepend-icon": "ri-send-plane-line",
                                class: "mb-4",
                                onClick: ($event) => isSendPaymentSidebarVisible.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Send Invoice ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                variant: "outlined",
                                class: "mb-4",
                                to: { name: "apps-invoice-preview-id", params: { id: "5036" } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Preview ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                block: "",
                                color: "secondary",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
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
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    items: paymentMethods,
                    label: "Accept Payment Via",
                    class: "mb-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VLabel, { for: "payment-terms" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Payment Terms `);
                      } else {
                        return [
                          createTextVNode(" Payment Terms ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    id: "payment-terms",
                    modelValue: unref(paymentTerms),
                    "onUpdate:modelValue": ($event) => isRef(paymentTerms) ? paymentTerms.value = $event : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="d-flex align-center justify-space-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VLabel, { for: "client-notes" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Client Notes `);
                      } else {
                        return [
                          createTextVNode(" Client Notes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    id: "client-notes",
                    modelValue: unref(clientNotes),
                    "onUpdate:modelValue": ($event) => isRef(clientNotes) ? clientNotes.value = $event : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="d-flex align-center justify-space-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VLabel, { for: "payment-stub" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Payment Stub `);
                      } else {
                        return [
                          createTextVNode(" Payment Stub ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(VSwitch, {
                    id: "payment-stub",
                    modelValue: unref(paymentStub),
                    "onUpdate:modelValue": ($event) => isRef(paymentStub) ? paymentStub.value = $event : null
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VCard, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              "prepend-icon": "ri-send-plane-line",
                              class: "mb-4",
                              onClick: ($event) => isSendPaymentSidebarVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Send Invoice ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              variant: "outlined",
                              class: "mb-4",
                              to: { name: "apps-invoice-preview-id", params: { id: "5036" } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Preview ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              block: "",
                              color: "secondary",
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VSelect, {
                      modelValue: unref(selectedPaymentMethod),
                      "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                      items: paymentMethods,
                      label: "Accept Payment Via",
                      class: "mb-4"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode(VLabel, { for: "payment-terms" }, {
                        default: withCtx(() => [
                          createTextVNode(" Payment Terms ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode(VSwitch, {
                          id: "payment-terms",
                          modelValue: unref(paymentTerms),
                          "onUpdate:modelValue": ($event) => isRef(paymentTerms) ? paymentTerms.value = $event : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode(VLabel, { for: "client-notes" }, {
                        default: withCtx(() => [
                          createTextVNode(" Client Notes ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode(VSwitch, {
                          id: "client-notes",
                          modelValue: unref(clientNotes),
                          "onUpdate:modelValue": ($event) => isRef(clientNotes) ? clientNotes.value = $event : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode(VLabel, { for: "payment-stub" }, {
                        default: withCtx(() => [
                          createTextVNode(" Payment Stub ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode(VSwitch, {
                          id: "payment-stub",
                          modelValue: unref(paymentStub),
                          "onUpdate:modelValue": ($event) => isRef(paymentStub) ? paymentStub.value = $event : null
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(InvoiceEditable, {
                    data: unref(invoiceData),
                    onPush: addProduct,
                    onRemove: removeProduct
                  }, null, 8, ["data"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            "prepend-icon": "ri-send-plane-line",
                            class: "mb-4",
                            onClick: ($event) => isSendPaymentSidebarVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Send Invoice ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            block: "",
                            color: "secondary",
                            variant: "outlined",
                            class: "mb-4",
                            to: { name: "apps-invoice-preview-id", params: { id: "5036" } }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Preview ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            block: "",
                            color: "secondary",
                            variant: "outlined"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VSelect, {
                    modelValue: unref(selectedPaymentMethod),
                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                    items: paymentMethods,
                    label: "Accept Payment Via",
                    class: "mb-4"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode(VLabel, { for: "payment-terms" }, {
                      default: withCtx(() => [
                        createTextVNode(" Payment Terms ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(VSwitch, {
                        id: "payment-terms",
                        modelValue: unref(paymentTerms),
                        "onUpdate:modelValue": ($event) => isRef(paymentTerms) ? paymentTerms.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode(VLabel, { for: "client-notes" }, {
                      default: withCtx(() => [
                        createTextVNode(" Client Notes ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(VSwitch, {
                        id: "client-notes",
                        modelValue: unref(clientNotes),
                        "onUpdate:modelValue": ($event) => isRef(clientNotes) ? clientNotes.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode(VLabel, { for: "payment-stub" }, {
                      default: withCtx(() => [
                        createTextVNode(" Payment Stub ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(VSwitch, {
                        id: "payment-stub",
                        modelValue: unref(paymentStub),
                        "onUpdate:modelValue": ($event) => isRef(paymentStub) ? paymentStub.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        isDrawerOpen: unref(isSendPaymentSidebarVisible),
        "onUpdate:isDrawerOpen": ($event) => isRef(isSendPaymentSidebarVisible) ? isSendPaymentSidebarVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/invoice/add/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
