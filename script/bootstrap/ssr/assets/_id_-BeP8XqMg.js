import { ref, withAsyncContext, unref, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, createVNode, isRef, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./InvoiceAddPaymentDrawer-B1RPBrm1.js";
import { I as InvoiceEditable } from "./InvoiceEditable-BoO1t9K4.js";
import { _ as _sfc_main$1 } from "./InvoiceSendInvoiceDrawer-DOI4IWPX.js";
import { V as VBtn } from "../ssr.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
import "./AppDateTimePicker-B0c_dYDs.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "@vueuse/core";
import "./AppDrawerHeaderSection-isEKlId-.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "vue3-perfect-scrollbar";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./scopeId-3C34eX5s.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./VForm-J0SV9LXx.js";
import "./forwardRefs-IZGbB77j.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VTextarea-Bsz3jSWy.js";
import "./VTooltip-CVKEAyhs.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "cookie-es";
import "destr";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const invoiceData = ref();
    const route = useRoute("apps-invoice-edit-id");
    const { data: invoiceDetails } = ([__temp, __restore] = withAsyncContext(() => useApi(`/apps/invoice/${route.params.id}`)), __temp = await __temp, __restore(), __temp);
    if (invoiceDetails.value) {
      invoiceData.value = {
        invoice: invoiceDetails.value.invoice,
        paymentDetails: invoiceDetails.value.paymentDetails,
        purchasedProducts: [{
          title: "App Design",
          cost: 24,
          hours: 2,
          description: "Designed UI kit & app pages."
        }],
        note: "It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",
        paymentMethod: "Bank Account",
        salesperson: "Tom Cook",
        thanksNote: "Thanks for your business"
      };
    }
    const addProduct = (value) => {
      var _a;
      (_a = invoiceData.value) == null ? void 0 : _a.purchasedProducts.push(value);
    };
    const removeProduct = (id) => {
      var _a;
      (_a = invoiceData.value) == null ? void 0 : _a.purchasedProducts.splice(id, 1);
    };
    const isSendSidebarActive = ref(false);
    const isAddPaymentSidebarActive = ref(false);
    const paymentTerms = ref(true);
    const clientNotes = ref(false);
    const paymentStub = ref(false);
    const selectedPaymentMethod = ref("Bank Account");
    const paymentMethods = [
      "Bank Account",
      "PayPal",
      "UPI Transfer"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (unref(invoiceData) && ((_a = unref(invoiceData)) == null ? void 0 : _a.invoice)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    if ((_a2 = unref(invoiceData)) == null ? void 0 : _a2.invoice) {
                      _push3(ssrRenderComponent(InvoiceEditable, {
                        data: unref(invoiceData),
                        onPush: addProduct,
                        onRemove: removeProduct
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      ((_b = unref(invoiceData)) == null ? void 0 : _b.invoice) ? (openBlock(), createBlock(InvoiceEditable, {
                        key: 0,
                        data: unref(invoiceData),
                        onPush: addProduct,
                        onRemove: removeProduct
                      }, null, 8, ["data"])) : createCommentVNode("", true)
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
                                  onClick: ($event) => isSendSidebarActive.value = true
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
                                _push5(`<div class="d-flex flex-wrap gap-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "flex-grow-1",
                                  to: { name: "apps-invoice-preview-id", params: { id: unref(route).params.id } }
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
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4 flex-grow-1"
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
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  color: "success",
                                  "prepend-icon": "ri-money-dollar-circle-line",
                                  onClick: ($event) => isAddPaymentSidebarActive.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Add Payment `);
                                    } else {
                                      return [
                                        createTextVNode(" Add Payment ")
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
                                    onClick: ($event) => isSendSidebarActive.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send Invoice ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      class: "flex-grow-1",
                                      to: { name: "apps-invoice-preview-id", params: { id: unref(route).params.id } }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Preview ")
                                      ]),
                                      _: 1
                                    }, 8, ["to"]),
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      class: "mb-4 flex-grow-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VBtn, {
                                    block: "",
                                    color: "success",
                                    "prepend-icon": "ri-money-dollar-circle-line",
                                    onClick: ($event) => isAddPaymentSidebarActive.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add Payment ")
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
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  "prepend-icon": "ri-send-plane-line",
                                  class: "mb-4",
                                  onClick: ($event) => isSendSidebarActive.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Send Invoice ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    class: "flex-grow-1",
                                    to: { name: "apps-invoice-preview-id", params: { id: unref(route).params.id } }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Preview ")
                                    ]),
                                    _: 1
                                  }, 8, ["to"]),
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    class: "mb-4 flex-grow-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "success",
                                  "prepend-icon": "ri-money-dollar-circle-line",
                                  onClick: ($event) => isAddPaymentSidebarActive.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add Payment ")
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
                                onClick: ($event) => isSendSidebarActive.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Send Invoice ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "flex-grow-1",
                                  to: { name: "apps-invoice-preview-id", params: { id: unref(route).params.id } }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Preview ")
                                  ]),
                                  _: 1
                                }, 8, ["to"]),
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  class: "mb-4 flex-grow-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                color: "success",
                                "prepend-icon": "ri-money-dollar-circle-line",
                                onClick: ($event) => isAddPaymentSidebarActive.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Payment ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
              _push2(ssrRenderComponent(_sfc_main$1, {
                isDrawerOpen: unref(isSendSidebarActive),
                "onUpdate:isDrawerOpen": ($event) => isRef(isSendSidebarActive) ? isSendSidebarActive.value = $event : null
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                isDrawerOpen: unref(isAddPaymentSidebarActive),
                "onUpdate:isDrawerOpen": ($event) => isRef(isAddPaymentSidebarActive) ? isAddPaymentSidebarActive.value = $event : null
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "9"
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      ((_a2 = unref(invoiceData)) == null ? void 0 : _a2.invoice) ? (openBlock(), createBlock(InvoiceEditable, {
                        key: 0,
                        data: unref(invoiceData),
                        onPush: addProduct,
                        onRemove: removeProduct
                      }, null, 8, ["data"])) : createCommentVNode("", true)
                    ];
                  }),
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
                              onClick: ($event) => isSendSidebarActive.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Send Invoice ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                class: "flex-grow-1",
                                to: { name: "apps-invoice-preview-id", params: { id: unref(route).params.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Preview ")
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                class: "mb-4 flex-grow-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(VBtn, {
                              block: "",
                              color: "success",
                              "prepend-icon": "ri-money-dollar-circle-line",
                              onClick: ($event) => isAddPaymentSidebarActive.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add Payment ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                }),
                createVNode(_sfc_main$1, {
                  isDrawerOpen: unref(isSendSidebarActive),
                  "onUpdate:isDrawerOpen": ($event) => isRef(isSendSidebarActive) ? isSendSidebarActive.value = $event : null
                }, null, 8, ["isDrawerOpen", "onUpdate:isDrawerOpen"]),
                createVNode(_sfc_main$2, {
                  isDrawerOpen: unref(isAddPaymentSidebarActive),
                  "onUpdate:isDrawerOpen": ($event) => isRef(isAddPaymentSidebarActive) ? isAddPaymentSidebarActive.value = $event : null
                }, null, 8, ["isDrawerOpen", "onUpdate:isDrawerOpen"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<section${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Invoice with ID ${ssrInterpolate(unref(route).params.id)} not found! `);
            } else {
              return [
                createTextVNode(" Invoice with ID " + toDisplayString(unref(route).params.id) + " not found! ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/invoice/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
