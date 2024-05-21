import { useSSRContext, ref, withCtx, createTextVNode, unref, isRef, createVNode, mergeProps, withDirectives, vShow, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, a as VIcon, V as VBtn } from "../ssr.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
const pricingIllustration1 = "/build/assets/pricing-illustration-1-C5Y58fga.png";
const pricingIllustration2 = "/build/assets/pricing-illustration-2-BFWKxetI.png";
const pricingIllustration3 = "/build/assets/pricing-illustration-3-C8E3ljeb.png";
const _sfc_main = {
  __name: "AppPricing",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    },
    cols: {
      type: [
        Number,
        String
      ],
      required: false
    },
    sm: {
      type: [
        Number,
        String
      ],
      required: false
    },
    md: {
      type: [
        String,
        Number
      ],
      required: false
    },
    lg: {
      type: [
        String,
        Number
      ],
      required: false
    },
    xl: {
      type: [
        String,
        Number
      ],
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const annualMonthlyPlanPriceToggler = ref(true);
    const pricingPlans = [
      {
        name: "Basic",
        tagLine: "A simple start for everyone",
        logo: pricingIllustration1,
        monthlyPrice: 0,
        yearlyPrice: 0,
        isPopular: false,
        current: true,
        features: [
          "100 responses a month",
          "Unlimited forms and surveys",
          "Unlimited fields",
          "Basic form creation tools",
          "Up to 2 subdomains"
        ]
      },
      {
        name: "Standard",
        tagLine: "For small to medium businesses",
        logo: pricingIllustration2,
        monthlyPrice: 42,
        yearlyPrice: 460,
        isPopular: true,
        current: false,
        features: [
          "Unlimited responses",
          "Unlimited forms and surveys",
          "Instagram profile page",
          "Google Docs integration",
          "Custom “Thank you” page"
        ]
      },
      {
        name: "Enterprise",
        tagLine: "Solution for big organizations",
        logo: pricingIllustration3,
        monthlyPrice: 84,
        yearlyPrice: 690,
        isPopular: false,
        current: false,
        features: [
          "PayPal payments",
          "Logic Jumps",
          "File upload with 5GB storage",
          "Custom domain support",
          "Stripe integration"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center mb-6" data-v-bb58a1e7>`);
      ssrRenderSlot(_ctx.$slots, "heading", {}, () => {
        _push(`<h4 class="text-h4 mb-2" data-v-bb58a1e7>${ssrInterpolate(props.title ? props.title : "Pricing Plans")}</h4>`);
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
        _push(`<p class="mb-0" data-v-bb58a1e7> All plans include 40+ advanced tools and features to boost your product. <br data-v-bb58a1e7> Choose the best plan to fit your needs. </p>`);
      }, _push, _parent);
      _push(`</div><div class="d-flex align-center justify-center mx-auto pt-sm-7 pb-sm-6 py-4" data-v-bb58a1e7>`);
      _push(ssrRenderComponent(VLabel, {
        for: "pricing-plan-toggle",
        class: "me-2 font-weight-medium cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Monthly `);
          } else {
            return [
              createTextVNode(" Monthly ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="position-relative" data-v-bb58a1e7><div class="pricing-save-chip position-absolute d-sm-block d-none" data-v-bb58a1e7>`);
      _push(ssrRenderComponent(VIcon, {
        start: "",
        icon: "ri-corner-left-down-fill",
        size: "24",
        class: "text-disabled flip-in-rtl mt-1 me-1"
      }, null, _parent));
      _push(ssrRenderComponent(VChip, {
        size: "small",
        color: "primary",
        class: "mt-n2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Save up to 10% `);
          } else {
            return [
              createTextVNode(" Save up to 10% ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VSwitch, {
        id: "pricing-plan-toggle",
        modelValue: unref(annualMonthlyPlanPriceToggler),
        "onUpdate:modelValue": ($event) => isRef(annualMonthlyPlanPriceToggler) ? annualMonthlyPlanPriceToggler.value = $event : null
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-body-1 font-weight-medium" data-v-bb58a1e7${_scopeId}> Annually </div>`);
          } else {
            return [
              createVNode("div", { class: "text-body-1 font-weight-medium" }, " Annually ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(pricingPlans, (plan) => {
              _push2(ssrRenderComponent(VCol, mergeProps({
                key: plan.logo,
                ref_for: true
              }, props), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      flat: "",
                      border: "",
                      class: plan.isPopular ? "border-primary border-opacity-100" : ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, {
                            class: "text-end pt-4",
                            style: { "block-size": "3.75rem" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VChip, {
                                  style: plan.isPopular ? null : { display: "none" },
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Popular `);
                                    } else {
                                      return [
                                        createTextVNode(" Popular ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  withDirectives(createVNode(VChip, {
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Popular ")
                                    ]),
                                    _: 2
                                  }, 1536), [
                                    [vShow, plan.isPopular]
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  height: 120,
                                  src: plan.logo,
                                  class: "mx-auto mb-5"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h4 class="text-h4 mb-2" data-v-bb58a1e7${_scopeId4}>${ssrInterpolate(plan.name)}</h4><p class="mb-0 text-body-1" data-v-bb58a1e7${_scopeId4}>${ssrInterpolate(plan.tagLine)}</p>`);
                              } else {
                                return [
                                  createVNode(VImg, {
                                    height: 120,
                                    src: plan.logo,
                                    class: "mx-auto mb-5"
                                  }, null, 8, ["src"]),
                                  createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(plan.name), 1),
                                  createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(plan.tagLine), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "position-relative text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-bb58a1e7${_scopeId4}><div class="d-flex justify-center align-center" data-v-bb58a1e7${_scopeId4}><span class="text-body-1 font-weight-medium align-self-start" data-v-bb58a1e7${_scopeId4}>$</span><h1 class="text-h1 font-weight-medium text-primary" data-v-bb58a1e7${_scopeId4}>${ssrInterpolate(unref(annualMonthlyPlanPriceToggler) ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice)}</h1><span class="text-body-1 font-weight-medium align-self-end" data-v-bb58a1e7${_scopeId4}>/month</span></div><div style="${ssrRenderStyle(unref(annualMonthlyPlanPriceToggler) ? null : { display: "none" })}" class="text-caption" data-v-bb58a1e7${_scopeId4}>${ssrInterpolate(plan.yearlyPrice === 0 ? "free" : `USD ${plan.yearlyPrice}/Year`)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "d-flex justify-center align-center" }, [
                                      createVNode("span", { class: "text-body-1 font-weight-medium align-self-start" }, "$"),
                                      createVNode("h1", { class: "text-h1 font-weight-medium text-primary" }, toDisplayString(unref(annualMonthlyPlanPriceToggler) ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice), 1),
                                      createVNode("span", { class: "text-body-1 font-weight-medium align-self-end" }, "/month")
                                    ]),
                                    withDirectives(createVNode("div", { class: "text-caption" }, toDisplayString(plan.yearlyPrice === 0 ? "free" : `USD ${plan.yearlyPrice}/Year`), 513), [
                                      [vShow, unref(annualMonthlyPlanPriceToggler)]
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "pt-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, { class: "card-list pb-5" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(plan.features, (feature) => {
                                        _push6(ssrRenderComponent(VListItem, { key: feature }, {
                                          prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7)
                                              ;
                                            else {
                                              return [];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VIcon, {
                                                      size: 14,
                                                      icon: "ri-circle-line",
                                                      class: "me-2"
                                                    }, null, _parent8, _scopeId7));
                                                    _push8(`<div class="text-truncate" data-v-bb58a1e7${_scopeId7}>${ssrInterpolate(feature)}</div>`);
                                                  } else {
                                                    return [
                                                      createVNode(VIcon, {
                                                        size: 14,
                                                        icon: "ri-circle-line",
                                                        class: "me-2"
                                                      }),
                                                      createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      size: 14,
                                                      icon: "ri-circle-line",
                                                      class: "me-2"
                                                    }),
                                                    createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                                          return openBlock(), createBlock(VListItem, { key: feature }, {
                                            prepend: withCtx(() => []),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: 14,
                                                    icon: "ri-circle-line",
                                                    class: "me-2"
                                                  }),
                                                  createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  active: false,
                                  block: "",
                                  color: plan.current ? "success" : "primary",
                                  variant: plan.isPopular ? "elevated" : "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade"), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, { class: "card-list pb-5" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                                        return openBlock(), createBlock(VListItem, { key: feature }, {
                                          prepend: withCtx(() => []),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: 14,
                                                  icon: "ri-circle-line",
                                                  class: "me-2"
                                                }),
                                                createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VBtn, {
                                    active: false,
                                    block: "",
                                    color: plan.current ? "success" : "primary",
                                    variant: plan.isPopular ? "elevated" : "outlined",
                                    to: { name: "front-pages-payment" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "variant"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, {
                              class: "text-end pt-4",
                              style: { "block-size": "3.75rem" }
                            }, {
                              default: withCtx(() => [
                                withDirectives(createVNode(VChip, {
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Popular ")
                                  ]),
                                  _: 2
                                }, 1536), [
                                  [vShow, plan.isPopular]
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  height: 120,
                                  src: plan.logo,
                                  class: "mx-auto mb-5"
                                }, null, 8, ["src"]),
                                createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(plan.name), 1),
                                createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(plan.tagLine), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "position-relative text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex justify-center align-center" }, [
                                    createVNode("span", { class: "text-body-1 font-weight-medium align-self-start" }, "$"),
                                    createVNode("h1", { class: "text-h1 font-weight-medium text-primary" }, toDisplayString(unref(annualMonthlyPlanPriceToggler) ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice), 1),
                                    createVNode("span", { class: "text-body-1 font-weight-medium align-self-end" }, "/month")
                                  ]),
                                  withDirectives(createVNode("div", { class: "text-caption" }, toDisplayString(plan.yearlyPrice === 0 ? "free" : `USD ${plan.yearlyPrice}/Year`), 513), [
                                    [vShow, unref(annualMonthlyPlanPriceToggler)]
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "pt-2" }, {
                              default: withCtx(() => [
                                createVNode(VList, { class: "card-list pb-5" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                                      return openBlock(), createBlock(VListItem, { key: feature }, {
                                        prepend: withCtx(() => []),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: 14,
                                                icon: "ri-circle-line",
                                                class: "me-2"
                                              }),
                                              createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VBtn, {
                                  active: false,
                                  block: "",
                                  color: plan.current ? "success" : "primary",
                                  variant: plan.isPopular ? "elevated" : "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "variant"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        flat: "",
                        border: "",
                        class: plan.isPopular ? "border-primary border-opacity-100" : ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, {
                            class: "text-end pt-4",
                            style: { "block-size": "3.75rem" }
                          }, {
                            default: withCtx(() => [
                              withDirectives(createVNode(VChip, {
                                color: "primary",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Popular ")
                                ]),
                                _: 2
                              }, 1536), [
                                [vShow, plan.isPopular]
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                height: 120,
                                src: plan.logo,
                                class: "mx-auto mb-5"
                              }, null, 8, ["src"]),
                              createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(plan.name), 1),
                              createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(plan.tagLine), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, { class: "position-relative text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex justify-center align-center" }, [
                                  createVNode("span", { class: "text-body-1 font-weight-medium align-self-start" }, "$"),
                                  createVNode("h1", { class: "text-h1 font-weight-medium text-primary" }, toDisplayString(unref(annualMonthlyPlanPriceToggler) ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice), 1),
                                  createVNode("span", { class: "text-body-1 font-weight-medium align-self-end" }, "/month")
                                ]),
                                withDirectives(createVNode("div", { class: "text-caption" }, toDisplayString(plan.yearlyPrice === 0 ? "free" : `USD ${plan.yearlyPrice}/Year`), 513), [
                                  [vShow, unref(annualMonthlyPlanPriceToggler)]
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, { class: "pt-2" }, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list pb-5" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                                    return openBlock(), createBlock(VListItem, { key: feature }, {
                                      prepend: withCtx(() => []),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: 14,
                                              icon: "ri-circle-line",
                                              class: "me-2"
                                            }),
                                            createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VBtn, {
                                active: false,
                                block: "",
                                color: plan.current ? "success" : "primary",
                                variant: plan.isPopular ? "elevated" : "outlined",
                                to: { name: "front-pages-payment" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade"), 1)
                                ]),
                                _: 2
                              }, 1032, ["color", "variant"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(pricingPlans, (plan) => {
                return createVNode(VCol, mergeProps({
                  key: plan.logo,
                  ref_for: true
                }, props), {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      flat: "",
                      border: "",
                      class: plan.isPopular ? "border-primary border-opacity-100" : ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, {
                          class: "text-end pt-4",
                          style: { "block-size": "3.75rem" }
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Popular ")
                              ]),
                              _: 2
                            }, 1536), [
                              [vShow, plan.isPopular]
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, { class: "text-center" }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              height: 120,
                              src: plan.logo,
                              class: "mx-auto mb-5"
                            }, null, 8, ["src"]),
                            createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString(plan.name), 1),
                            createVNode("p", { class: "mb-0 text-body-1" }, toDisplayString(plan.tagLine), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, { class: "position-relative text-center" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex justify-center align-center" }, [
                                createVNode("span", { class: "text-body-1 font-weight-medium align-self-start" }, "$"),
                                createVNode("h1", { class: "text-h1 font-weight-medium text-primary" }, toDisplayString(unref(annualMonthlyPlanPriceToggler) ? Math.floor(Number(plan.yearlyPrice) / 12) : plan.monthlyPrice), 1),
                                createVNode("span", { class: "text-body-1 font-weight-medium align-self-end" }, "/month")
                              ]),
                              withDirectives(createVNode("div", { class: "text-caption" }, toDisplayString(plan.yearlyPrice === 0 ? "free" : `USD ${plan.yearlyPrice}/Year`), 513), [
                                [vShow, unref(annualMonthlyPlanPriceToggler)]
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, { class: "pt-2" }, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list pb-5" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                                  return openBlock(), createBlock(VListItem, { key: feature }, {
                                    prepend: withCtx(() => []),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-body-1 d-flex align-center" }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: 14,
                                            icon: "ri-circle-line",
                                            class: "me-2"
                                          }),
                                          createVNode("div", { class: "text-truncate" }, toDisplayString(feature), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VBtn, {
                              active: false,
                              block: "",
                              color: plan.current ? "success" : "primary",
                              variant: plan.isPopular ? "elevated" : "outlined",
                              to: { name: "front-pages-payment" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(plan.yearlyPrice === 0 ? "Your Current Plan" : "Upgrade"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color", "variant"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 2
                }, 1040);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppPricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb58a1e7"]]);
export {
  __unplugin_components_0 as _
};
