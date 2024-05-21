import { _ as _sfc_main$4 } from "./AppStepper-DSePPp52.js";
import { ref, withCtx, unref, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { g as googleHome, i as iphone11, _ as _sfc_main$1, A as AddressContent, a as _sfc_main$2, b as _sfc_main$3, c as customCart, d as customAddress, e as customPayment, f as customTrending } from "./trending-BIFj1ZxE.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./index-D5WAZiYx.js";
import "../ssr.js";
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
import "./VSlideGroupItem-CIJ0uuo8.js";
import "./AddEditAddressDialog-CR2aSRYs.js";
import "./CustomRadios-DrYzSNcj.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "./VRow-DasIRXDq.js";
/* empty css               */
import "./VSpacer-DCJACtOB.js";
import "./VAvatar-D2wIwigQ.js";
import "./DialogCloseBtn-h97PlnE6.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VForm-J0SV9LXx.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VSelect-5lJOBAar.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VMenu-KUYgjPyD.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VChip-BFfBWJ68.js";
import "./VSwitch-nG7fxOCQ.js";
import "./CustomRadiosWithIcon-CXRflZSC.js";
import "./VAlert-CqjinC0F.js";
import "./VRating-BxS5q7bh.js";
import "./VTabs-CTFJEkKM.js";
import "./VTooltip-CVKEAyhs.js";
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const checkoutSteps = [
      {
        title: "Cart",
        icon: customCart
      },
      {
        title: "Address",
        icon: customAddress
      },
      {
        title: "Payment",
        icon: customPayment
      },
      {
        title: "Confirmation",
        icon: customTrending
      }
    ];
    const checkoutData = ref({
      cartItems: [
        {
          id: 1,
          name: "Google - Google Home - White",
          seller: "Google",
          inStock: true,
          rating: 4,
          price: 299,
          discountPrice: 359,
          image: googleHome,
          quantity: 1,
          estimatedDelivery: "18th Nov 2021"
        },
        {
          id: 2,
          name: "Apple iPhone 11 (64GB, Black)",
          seller: "Apple",
          inStock: true,
          rating: 4,
          price: 899,
          discountPrice: 999,
          image: iphone11,
          quantity: 1,
          estimatedDelivery: "20th Nov 2021"
        }
      ],
      promoCode: "",
      orderAmount: 1198,
      deliveryAddress: "home",
      deliverySpeed: "free",
      deliveryCharges: 0,
      addresses: [
        {
          title: "John Doe (Default)",
          desc: "4135 Parkway Street, Los Angeles, CA, 90017",
          subtitle: "1234567890",
          value: "home"
        },
        {
          title: "ACME Inc.",
          desc: "87 Hoffman Avenue, New York, NY, 10016",
          subtitle: "1234567890",
          value: "office"
        }
      ]
    });
    const currentStep = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$4;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "checkout-stepper",
                    items: checkoutSteps,
                    direction: _ctx.$vuetify.display.mdAndUp ? "horizontal" : "vertical",
                    align: "center"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppStepper, {
                      "current-step": unref(currentStep),
                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      class: "checkout-stepper",
                      items: checkoutSteps,
                      direction: _ctx.$vuetify.display.mdAndUp ? "horizontal" : "vertical",
                      align: "center"
                    }, null, 8, ["current-step", "onUpdate:currentStep", "direction"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(currentStep),
                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "disable-tab-transition",
                    touch: false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  "checkout-data": unref(checkoutData),
                                  "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                                }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(AddressContent, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(AddressContent, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  "checkout-data": unref(checkoutData),
                                  "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                                }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  "checkout-data": unref(checkoutData),
                                  "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                                }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, {
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3, {
                                  "checkout-data": unref(checkoutData),
                                  "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                                }, null, 8, ["checkout-data", "onUpdate:checkoutData"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(AddressContent, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, {
                                "checkout-data": unref(checkoutData),
                                "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                              }, null, 8, ["checkout-data", "onUpdate:checkoutData"])
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
                      modelValue: unref(currentStep),
                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      class: "disable-tab-transition",
                      touch: false
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              "checkout-data": unref(checkoutData),
                              "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                            }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(AddressContent, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              "checkout-data": unref(checkoutData),
                              "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                            }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              "checkout-data": unref(checkoutData),
                              "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                            }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, {
                              "checkout-data": unref(checkoutData),
                              "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                            }, null, 8, ["checkout-data", "onUpdate:checkoutData"])
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "checkout-stepper",
                    items: checkoutSteps,
                    direction: _ctx.$vuetify.display.mdAndUp ? "horizontal" : "vertical",
                    align: "center"
                  }, null, 8, ["current-step", "onUpdate:currentStep", "direction"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(currentStep),
                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "disable-tab-transition",
                    touch: false
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            "checkout-data": unref(checkoutData),
                            "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                          }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(AddressContent, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            "checkout-data": unref(checkoutData),
                            "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                          }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            "checkout-data": unref(checkoutData),
                            "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                          }, null, 8, ["current-step", "onUpdate:currentStep", "checkout-data", "onUpdate:checkoutData"])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, {
                            "checkout-data": unref(checkoutData),
                            "onUpdate:checkoutData": ($event) => isRef(checkoutData) ? checkoutData.value = $event : null
                          }, null, 8, ["checkout-data", "onUpdate:checkoutData"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/wizard-examples/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
