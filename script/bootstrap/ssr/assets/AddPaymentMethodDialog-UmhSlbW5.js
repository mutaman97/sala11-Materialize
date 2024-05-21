import { _ as _sfc_main$2 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vShow } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { m as mastercardDark, a as mastercardLight, b as americanExpressDark, c as americanExpressLight } from "./mastercard-D11GxT9q.js";
import { v as visaDark, a as visaLight } from "./visa-light-manIB7UD.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
const dcDark = "/build/assets/dc-dark-Bux0t9KG.png";
const dcLight = "/build/assets/dc-light-BWhlpTsa.png";
const jcbDark = "/build/assets/jcb-dark-C5AqofoN.png";
const jcbLight = "/build/assets/jcb-light-Dz46SksU.png";
const _sfc_main$1 = {
  __name: "PaymentProvidersDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isDialogVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visa = useGenerateImageVariant(visaLight, visaDark);
    const masterCard = useGenerateImageVariant(mastercardLight, mastercardDark);
    const americanEx = useGenerateImageVariant(americanExpressLight, americanExpressDark);
    const jcb = useGenerateImageVariant(jcbLight, jcbDark);
    const dc = useGenerateImageVariant(dcLight, dcDark);
    const dialogVisibleUpdate = (val) => {
      emit("update:isDialogVisible", val);
    };
    const paymentProvidersData = [
      {
        title: "Adyen",
        providers: [
          visa,
          masterCard,
          americanEx,
          jcb,
          dc
        ]
      },
      {
        title: "2Checkout",
        providers: [
          visa,
          americanEx,
          jcb,
          dc
        ]
      },
      {
        title: "Airpay",
        providers: [
          visa,
          americanEx,
          masterCard,
          jcb
        ]
      },
      {
        title: "Authorize.net",
        providers: [
          americanEx,
          jcb,
          dc
        ]
      },
      {
        title: "Bambora",
        providers: [
          masterCard,
          americanEx,
          jcb
        ]
      },
      {
        title: "Bambora",
        providers: [
          visa,
          masterCard,
          americanEx,
          jcb,
          dc
        ]
      },
      {
        title: "Chase Paymentech (Orbital)",
        providers: [
          visa,
          americanEx,
          jcb,
          dc
        ]
      },
      {
        title: "Checkout.com",
        providers: [
          visa,
          masterCard
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "900",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "refer-and-earn-dialog pa-3 pa-sm-11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6"${_scopeId3}><h4 class="text-h4 text-center mb-2"${_scopeId3}> Select Payment Providers </h4><p class="text-sm-body-1 text-center"${_scopeId3}> Third-party payment providers </p></div><!--[-->`);
                        ssrRenderList(paymentProvidersData, (item, index) => {
                          _push4(`<div${_scopeId3}><div class="d-flex flex-column flex-sm-row justify-space-between align-sm-center align-start gap-4 flex-wrap py-4"${_scopeId3}><div class="text-high-emphasis font-weight-medium"${_scopeId3}>${ssrInterpolate(item.title)}</div><div class="d-flex gap-x-4 gap-y-2 flex-wrap"${_scopeId3}><!--[-->`);
                          ssrRenderList(item.providers, (img, iterator) => {
                            _push4(`<img${ssrRenderAttr("src", img.value)} height="30" width="50"${_scopeId3}>`);
                          });
                          _push4(`<!--]--></div></div>`);
                          _push4(ssrRenderComponent(VDivider, {
                            style: index !== paymentProvidersData.length - 1 ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("h4", { class: "text-h4 text-center mb-2" }, " Select Payment Providers "),
                            createVNode("p", { class: "text-sm-body-1 text-center" }, " Third-party payment providers ")
                          ]),
                          (openBlock(), createBlock(Fragment, null, renderList(paymentProvidersData, (item, index) => {
                            return createVNode("div", { key: index }, [
                              createVNode("div", { class: "d-flex flex-column flex-sm-row justify-space-between align-sm-center align-start gap-4 flex-wrap py-4" }, [
                                createVNode("div", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(item.title), 1),
                                createVNode("div", { class: "d-flex gap-x-4 gap-y-2 flex-wrap" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.providers, (img, iterator) => {
                                    return openBlock(), createBlock("img", {
                                      key: iterator,
                                      src: img.value,
                                      height: "30",
                                      width: "50"
                                    }, null, 8, ["src"]);
                                  }), 128))
                                ])
                              ]),
                              withDirectives(createVNode(VDivider, null, null, 512), [
                                [vShow, index !== paymentProvidersData.length - 1]
                              ])
                            ]);
                          }), 64))
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
                      onClick: ($event) => emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h4", { class: "text-h4 text-center mb-2" }, " Select Payment Providers "),
                          createVNode("p", { class: "text-sm-body-1 text-center" }, " Third-party payment providers ")
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(paymentProvidersData, (item, index) => {
                          return createVNode("div", { key: index }, [
                            createVNode("div", { class: "d-flex flex-column flex-sm-row justify-space-between align-sm-center align-start gap-4 flex-wrap py-4" }, [
                              createVNode("div", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(item.title), 1),
                              createVNode("div", { class: "d-flex gap-x-4 gap-y-2 flex-wrap" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.providers, (img, iterator) => {
                                  return openBlock(), createBlock("img", {
                                    key: iterator,
                                    src: img.value,
                                    height: "30",
                                    width: "50"
                                  }, null, 8, ["src"]);
                                }), 128))
                              ])
                            ]),
                            withDirectives(createVNode(VDivider, null, null, 512), [
                              [vShow, index !== paymentProvidersData.length - 1]
                            ])
                          ]);
                        }), 64))
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
              createVNode(VCard, { class: "refer-and-earn-dialog pa-3 pa-sm-11" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h4", { class: "text-h4 text-center mb-2" }, " Select Payment Providers "),
                        createVNode("p", { class: "text-sm-body-1 text-center" }, " Third-party payment providers ")
                      ]),
                      (openBlock(), createBlock(Fragment, null, renderList(paymentProvidersData, (item, index) => {
                        return createVNode("div", { key: index }, [
                          createVNode("div", { class: "d-flex flex-column flex-sm-row justify-space-between align-sm-center align-start gap-4 flex-wrap py-4" }, [
                            createVNode("div", { class: "text-high-emphasis font-weight-medium" }, toDisplayString(item.title), 1),
                            createVNode("div", { class: "d-flex gap-x-4 gap-y-2 flex-wrap" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.providers, (img, iterator) => {
                                return openBlock(), createBlock("img", {
                                  key: iterator,
                                  src: img.value,
                                  height: "30",
                                  width: "50"
                                }, null, 8, ["src"]);
                              }), 128))
                            ])
                          ]),
                          withDirectives(createVNode(VDivider, null, null, 512), [
                            [vShow, index !== paymentProvidersData.length - 1]
                          ])
                        ]);
                      }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/PaymentProvidersDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AddPaymentMethodDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isDialogVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visa = useGenerateImageVariant(visaLight, visaDark);
    const masterCard = useGenerateImageVariant(mastercardLight, mastercardDark);
    const americanEx = useGenerateImageVariant(americanExpressLight, americanExpressDark);
    const jcb = useGenerateImageVariant(jcbLight, jcbDark);
    const dc = useGenerateImageVariant(dcLight, dcDark);
    const dialogVisibleUpdate = (val) => {
      emit("update:isDialogVisible", val);
    };
    const paymentMethodsData = [
      {
        title: "Visa",
        type: "Credit Card",
        img: visa
      },
      {
        title: "American Express",
        type: "Credit Card",
        img: americanEx
      },
      {
        title: "Mastercard",
        type: "Credit Card",
        img: masterCard
      },
      {
        title: "JCB",
        type: "Credit Card",
        img: jcb
      },
      {
        title: "Diners Club",
        type: "Credit Card",
        img: dc
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$2;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "750",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "refer-and-earn-dialog pa-3 pa-sm-11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6"${_scopeId3}><h4 class="text-h4 text-center mb-2"${_scopeId3}> Add payment methods </h4><p class="text-sm-body-1 text-center"${_scopeId3}> Supported payment methods </p></div><!--[-->`);
                        ssrRenderList(paymentMethodsData, (item, index) => {
                          _push4(`<div${_scopeId3}><div class="d-flex justify-space-between align-center py-4 gap-x-4"${_scopeId3}><div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VImg, {
                            src: item.img.value,
                            height: "30",
                            width: "50",
                            class: "me-4"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="text-body-1 font-weight-medium text-high-emphasis"${_scopeId3}>${ssrInterpolate(item.title)}</div></div><div class="d-none d-sm-block text-body-1"${_scopeId3}>${ssrInterpolate(item.type)}</div></div>`);
                          _push4(ssrRenderComponent(VDivider, {
                            style: index !== paymentMethodsData.length - 1 ? null : { display: "none" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("h4", { class: "text-h4 text-center mb-2" }, " Add payment methods "),
                            createVNode("p", { class: "text-sm-body-1 text-center" }, " Supported payment methods ")
                          ]),
                          (openBlock(), createBlock(Fragment, null, renderList(paymentMethodsData, (item, index) => {
                            return createVNode("div", { key: index }, [
                              createVNode("div", { class: "d-flex justify-space-between align-center py-4 gap-x-4" }, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VImg, {
                                    src: item.img.value,
                                    height: "30",
                                    width: "50",
                                    class: "me-4"
                                  }, null, 8, ["src"]),
                                  createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.title), 1)
                                ]),
                                createVNode("div", { class: "d-none d-sm-block text-body-1" }, toDisplayString(item.type), 1)
                              ]),
                              withDirectives(createVNode(VDivider, null, null, 512), [
                                [vShow, index !== paymentMethodsData.length - 1]
                              ])
                            ]);
                          }), 64))
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
                      onClick: ($event) => emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pa-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h4", { class: "text-h4 text-center mb-2" }, " Add payment methods "),
                          createVNode("p", { class: "text-sm-body-1 text-center" }, " Supported payment methods ")
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(paymentMethodsData, (item, index) => {
                          return createVNode("div", { key: index }, [
                            createVNode("div", { class: "d-flex justify-space-between align-center py-4 gap-x-4" }, [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VImg, {
                                  src: item.img.value,
                                  height: "30",
                                  width: "50",
                                  class: "me-4"
                                }, null, 8, ["src"]),
                                createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.title), 1)
                              ]),
                              createVNode("div", { class: "d-none d-sm-block text-body-1" }, toDisplayString(item.type), 1)
                            ]),
                            withDirectives(createVNode(VDivider, null, null, 512), [
                              [vShow, index !== paymentMethodsData.length - 1]
                            ])
                          ]);
                        }), 64))
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
              createVNode(VCard, { class: "refer-and-earn-dialog pa-3 pa-sm-11" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pa-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h4", { class: "text-h4 text-center mb-2" }, " Add payment methods "),
                        createVNode("p", { class: "text-sm-body-1 text-center" }, " Supported payment methods ")
                      ]),
                      (openBlock(), createBlock(Fragment, null, renderList(paymentMethodsData, (item, index) => {
                        return createVNode("div", { key: index }, [
                          createVNode("div", { class: "d-flex justify-space-between align-center py-4 gap-x-4" }, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VImg, {
                                src: item.img.value,
                                height: "30",
                                width: "50",
                                class: "me-4"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, toDisplayString(item.title), 1)
                            ]),
                            createVNode("div", { class: "d-none d-sm-block text-body-1" }, toDisplayString(item.type), 1)
                          ]),
                          withDirectives(createVNode(VDivider, null, null, 512), [
                            [vShow, index !== paymentMethodsData.length - 1]
                          ])
                        ]);
                      }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/AddPaymentMethodDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
