import { _ as __unplugin_components_0 } from "./AppPricing-DLCFY0_b.js";
import { mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./front-page-navbar-Zyu6fQg-.js";
import { _ as _export_sfc, u as useConfigStore, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VExpansionPanels, a as VExpansionPanel } from "./VExpansionPanel-BASkbcYj.js";
import "./form-DJQTvsmB.js";
import "./VSwitch-nG7fxOCQ.js";
import "./index-D5WAZiYx.js";
import "./VInput-Bla8Vlgt.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VRow-DasIRXDq.js";
/* empty css               */
import "./VCardText-C84ViOu1.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./VSheet-BoIzvRsi.js";
import "./VForm-J0SV9LXx.js";
import "./forwardRefs-IZGbB77j.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "@vueuse/core";
import "vue3-perfect-scrollbar";
import "./NavbarThemeSwitcher-CmYbn-Kr.js";
import "./VTooltip-CVKEAyhs.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VMenu-KUYgjPyD.js";
import "./dialog-transition-CtM2qLK8.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
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
import "@antfu/utils";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./VToolbar-BfF0JSVH.js";
import "./VSpacer-DCJACtOB.js";
import "./VSlideGroup-Bvz86g7R.js";
const poseFs9 = "/build/assets/pose-fs-9-hkMN4zb3.png";
const _sfc_main = {
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useConfigStore();
    store.skin = "default";
    const features = [
      {
        feature: "14-days free trial",
        starter: true,
        pro: true,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      },
      {
        feature: "No user limit",
        starter: false,
        pro: false,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      },
      {
        feature: "Product Support",
        starter: false,
        pro: true,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      },
      {
        feature: "Email Support",
        starter: false,
        pro: false,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: true,
          enterprise: false
        }
      },
      {
        feature: "Integrations",
        starter: false,
        pro: true,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      },
      {
        feature: "Removal of Front branding",
        starter: false,
        pro: false,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: true,
          enterprise: false
        }
      },
      {
        feature: "Active maintenance & support",
        starter: false,
        pro: false,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      },
      {
        feature: "Data storage for 365 days",
        starter: false,
        pro: false,
        enterprise: true,
        addOnAvailable: {
          starter: false,
          pro: false,
          enterprise: false
        }
      }
    ];
    const faqs = [
      {
        question: "What counts towards the 100 responses limit?",
        answer: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
      },
      {
        question: "How do you process payments?",
        answer: "We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure."
      },
      {
        question: "Do you have a money-back guarantee?",
        answer: "2Checkout accepts all types of credit and debit cards."
      },
      {
        question: "I have more questions. Where can I get help?",
        answer: "Yes. You may request a refund within 30 days of your purchase without any additional explanations."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppPricing = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing-page" }, _attrs))} data-v-abda80cd>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(VCard, { class: "pricing-card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pricing-section" data-v-abda80cd${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AppPricing, {
                    md: "4",
                    cols: "12"
                  }, {
                    heading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h2 pb-2" data-v-abda80cd${_scopeId3}> Pricing Plans </h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-h2 pb-2" }, " Pricing Plans ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pricing-section" }, [
                      createVNode(_component_AppPricing, {
                        md: "4",
                        cols: "12"
                      }, {
                        heading: withCtx(() => [
                          createVNode("h2", { class: "text-h2 pb-2" }, " Pricing Plans ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="page-pricing-free-trial-banner-bg mt-15" data-v-abda80cd${_scopeId}>`);
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center flex-md-row flex-column position-relative" data-v-abda80cd${_scopeId2}><div class="text-center text-md-start pt-9 pb-5 px-10 px-sm-0" data-v-abda80cd${_scopeId2}><h4 class="text-h4 text-primary mb-2" data-v-abda80cd${_scopeId2}> Still not convinced? Start with a 14-day FREE trial! </h4><p class="text-body-1 mb-11" data-v-abda80cd${_scopeId2}> You will get full access to all the features for 14 days. </p>`);
                  _push3(ssrRenderComponent(VBtn, { to: { name: "front-pages-payment" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Start-14-day FREE trial `);
                      } else {
                        return [
                          createTextVNode(" Start-14-day FREE trial ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="free-trial-illustrator" data-v-abda80cd${_scopeId2}>`);
                  _push3(ssrRenderComponent(VImg, {
                    src: unref(poseFs9),
                    width: 220,
                    class: "flip-in-rtl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center flex-md-row flex-column position-relative" }, [
                      createVNode("div", { class: "text-center text-md-start pt-9 pb-5 px-10 px-sm-0" }, [
                        createVNode("h4", { class: "text-h4 text-primary mb-2" }, " Still not convinced? Start with a 14-day FREE trial! "),
                        createVNode("p", { class: "text-body-1 mb-11" }, " You will get full access to all the features for 14 days. "),
                        createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Start-14-day FREE trial ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "free-trial-illustrator" }, [
                        createVNode(VImg, {
                          src: unref(poseFs9),
                          width: 220,
                          class: "flip-in-rtl"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pricing-section" data-v-abda80cd${_scopeId2}><div class="text-center pb-6" data-v-abda80cd${_scopeId2}><h4 class="text-h4 mb-2" data-v-abda80cd${_scopeId2}> Pick a plan that works best for you </h4><p class="text-body-1 mb-0" data-v-abda80cd${_scopeId2}> Stay cool, we have a 48-hour money back guarantee! </p></div>`);
                  _push3(ssrRenderComponent(VTable, { class: "text-no-wrap border rounded pricing-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead data-v-abda80cd${_scopeId3}><tr data-v-abda80cd${_scopeId3}><th scope="col" class="py-4" data-v-abda80cd${_scopeId3}> TIME </th><!--[-->`);
                        ssrRenderList([
                          { plan: "STARTER", price: "Free" },
                          { plan: "PRO", price: "$7.5/Month" },
                          { plan: "ENTERPRISE", price: "$16/Month" }
                        ], ({ plan, price }) => {
                          _push4(`<th scope="col" class="text-center py-4" data-v-abda80cd${_scopeId3}><div class="position-relative" data-v-abda80cd${_scopeId3}>${ssrInterpolate(plan)} `);
                          if (plan === "PRO") {
                            _push4(ssrRenderComponent(VAvatar, {
                              rounded: "lg",
                              color: "primary",
                              size: "18",
                              class: "position-absolute ms-2",
                              style: { "inset-block-start": "-0.25rem" }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "ri-star-s-fill",
                                    size: "14"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      icon: "ri-star-s-fill",
                                      size: "14"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="text-body-2" data-v-abda80cd${_scopeId3}>${ssrInterpolate(price)}</div></th>`);
                        });
                        _push4(`<!--]--></tr></thead><tbody data-v-abda80cd${_scopeId3}><!--[-->`);
                        ssrRenderList(features, (feature) => {
                          _push4(`<tr data-v-abda80cd${_scopeId3}><td class="text-high-emphasis" data-v-abda80cd${_scopeId3}>${ssrInterpolate(feature.feature)}</td><td class="text-center" data-v-abda80cd${_scopeId3}>`);
                          if (!feature.addOnAvailable.starter) {
                            _push4(ssrRenderComponent(VIcon, {
                              color: feature.starter ? "primary" : "",
                              size: "24  ",
                              icon: feature.starter ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (feature.addOnAvailable.starter) {
                            _push4(ssrRenderComponent(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Add-On-Available `);
                                } else {
                                  return [
                                    createTextVNode(" Add-On-Available ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</td><td class="text-center" data-v-abda80cd${_scopeId3}>`);
                          if (!feature.addOnAvailable.pro) {
                            _push4(ssrRenderComponent(VIcon, {
                              color: feature.pro ? "primary" : "",
                              size: "24",
                              icon: feature.pro ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (feature.addOnAvailable.pro) {
                            _push4(ssrRenderComponent(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Add-On-Available `);
                                } else {
                                  return [
                                    createTextVNode(" Add-On-Available ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</td><td class="text-center" data-v-abda80cd${_scopeId3}>`);
                          if (!feature.addOnAvailable.enterprise) {
                            _push4(ssrRenderComponent(VIcon, {
                              color: feature.enterprise ? "primary" : "",
                              size: "24",
                              icon: feature.enterprise ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (feature.addOnAvailable.enterprise) {
                            _push4(ssrRenderComponent(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Add-On-Available `);
                                } else {
                                  return [
                                    createTextVNode(" Add-On-Available ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]--></tbody><tfoot data-v-abda80cd${_scopeId3}><tr data-v-abda80cd${_scopeId3}><td class="py-2" data-v-abda80cd${_scopeId3}></td><td class="text-center py-2" data-v-abda80cd${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          to: { name: "front-pages-payment" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Choose Plan `);
                            } else {
                              return [
                                createTextVNode(" Choose Plan ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</td><td class="text-center py-2" data-v-abda80cd${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { to: { name: "front-pages-payment" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Choose Plan `);
                            } else {
                              return [
                                createTextVNode(" Choose Plan ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</td><td class="text-center py-2" data-v-abda80cd${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          to: { name: "front-pages-payment" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Choose Plan `);
                            } else {
                              return [
                                createTextVNode(" Choose Plan ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</td></tr></tfoot>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                scope: "col",
                                class: "py-4"
                              }, " TIME "),
                              (openBlock(), createBlock(Fragment, null, renderList([
                                { plan: "STARTER", price: "Free" },
                                { plan: "PRO", price: "$7.5/Month" },
                                { plan: "ENTERPRISE", price: "$16/Month" }
                              ], ({ plan, price }) => {
                                return createVNode("th", {
                                  key: plan,
                                  scope: "col",
                                  class: "text-center py-4"
                                }, [
                                  createVNode("div", { class: "position-relative" }, [
                                    createTextVNode(toDisplayString(plan) + " ", 1),
                                    plan === "PRO" ? (openBlock(), createBlock(VAvatar, {
                                      key: 0,
                                      rounded: "lg",
                                      color: "primary",
                                      size: "18",
                                      class: "position-absolute ms-2",
                                      style: { "inset-block-start": "-0.25rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-star-s-fill",
                                          size: "14"
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "text-body-2" }, toDisplayString(price), 1)
                                ]);
                              }), 64))
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                              return createVNode("tr", {
                                key: feature.feature
                              }, [
                                createVNode("td", { class: "text-high-emphasis" }, toDisplayString(feature.feature), 1),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.starter ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.starter ? "primary" : "",
                                    size: "24  ",
                                    icon: feature.starter ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.starter ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.pro ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.pro ? "primary" : "",
                                    size: "24",
                                    icon: feature.pro ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.pro ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.enterprise ? "primary" : "",
                                    size: "24",
                                    icon: feature.enterprise ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode("tfoot", null, [
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2" }),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pricing-section" }, [
                      createVNode("div", { class: "text-center pb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " Pick a plan that works best for you "),
                        createVNode("p", { class: "text-body-1 mb-0" }, " Stay cool, we have a 48-hour money back guarantee! ")
                      ]),
                      createVNode(VTable, { class: "text-no-wrap border rounded pricing-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", {
                                scope: "col",
                                class: "py-4"
                              }, " TIME "),
                              (openBlock(), createBlock(Fragment, null, renderList([
                                { plan: "STARTER", price: "Free" },
                                { plan: "PRO", price: "$7.5/Month" },
                                { plan: "ENTERPRISE", price: "$16/Month" }
                              ], ({ plan, price }) => {
                                return createVNode("th", {
                                  key: plan,
                                  scope: "col",
                                  class: "text-center py-4"
                                }, [
                                  createVNode("div", { class: "position-relative" }, [
                                    createTextVNode(toDisplayString(plan) + " ", 1),
                                    plan === "PRO" ? (openBlock(), createBlock(VAvatar, {
                                      key: 0,
                                      rounded: "lg",
                                      color: "primary",
                                      size: "18",
                                      class: "position-absolute ms-2",
                                      style: { "inset-block-start": "-0.25rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-star-s-fill",
                                          size: "14"
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "text-body-2" }, toDisplayString(price), 1)
                                ]);
                              }), 64))
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                              return createVNode("tr", {
                                key: feature.feature
                              }, [
                                createVNode("td", { class: "text-high-emphasis" }, toDisplayString(feature.feature), 1),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.starter ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.starter ? "primary" : "",
                                    size: "24  ",
                                    icon: feature.starter ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.starter ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.pro ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.pro ? "primary" : "",
                                    size: "24",
                                    icon: feature.pro ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.pro ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  !feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    color: feature.enterprise ? "primary" : "",
                                    size: "24",
                                    icon: feature.enterprise ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                  }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                  feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VChip, {
                                    key: 1,
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Add-On-Available ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]);
                            }), 64))
                          ]),
                          createVNode("tfoot", null, [
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2" }),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("td", { class: "text-center py-2" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  to: { name: "front-pages-payment" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Choose Plan ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="bg-background" data-v-abda80cd${_scopeId}>`);
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pricing-section" data-v-abda80cd${_scopeId2}><div class="text-center" data-v-abda80cd${_scopeId2}><h4 class="text-h4 mb-2" data-v-abda80cd${_scopeId2}> FAQ&#39;s </h4><p class="text-body-1 mb-0" data-v-abda80cd${_scopeId2}> Let us help answer the most common questions. </p></div><div class="pt-6" data-v-abda80cd${_scopeId2}>`);
                  _push3(ssrRenderComponent(VExpansionPanels, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(faqs, (faq) => {
                          _push4(ssrRenderComponent(VExpansionPanel, {
                            key: faq.question,
                            title: faq.question,
                            text: faq.answer
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                            return createVNode(VExpansionPanel, {
                              key: faq.question,
                              title: faq.question,
                              text: faq.answer
                            }, null, 8, ["title", "text"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "pricing-section" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " FAQ's "),
                        createVNode("p", { class: "text-body-1 mb-0" }, " Let us help answer the most common questions. ")
                      ]),
                      createVNode("div", { class: "pt-6" }, [
                        createVNode(VExpansionPanels, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                              return createVNode(VExpansionPanel, {
                                key: faq.question,
                                title: faq.question,
                                text: faq.answer
                              }, null, 8, ["title", "text"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "pricing-section" }, [
                    createVNode(_component_AppPricing, {
                      md: "4",
                      cols: "12"
                    }, {
                      heading: withCtx(() => [
                        createVNode("h2", { class: "text-h2 pb-2" }, " Pricing Plans ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "page-pricing-free-trial-banner-bg mt-15" }, [
                createVNode(VContainer, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex align-center flex-md-row flex-column position-relative" }, [
                      createVNode("div", { class: "text-center text-md-start pt-9 pb-5 px-10 px-sm-0" }, [
                        createVNode("h4", { class: "text-h4 text-primary mb-2" }, " Still not convinced? Start with a 14-day FREE trial! "),
                        createVNode("p", { class: "text-body-1 mb-11" }, " You will get full access to all the features for 14 days. "),
                        createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Start-14-day FREE trial ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "free-trial-illustrator" }, [
                        createVNode(VImg, {
                          src: unref(poseFs9),
                          width: 220,
                          class: "flip-in-rtl"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "pricing-section" }, [
                    createVNode("div", { class: "text-center pb-6" }, [
                      createVNode("h4", { class: "text-h4 mb-2" }, " Pick a plan that works best for you "),
                      createVNode("p", { class: "text-body-1 mb-0" }, " Stay cool, we have a 48-hour money back guarantee! ")
                    ]),
                    createVNode(VTable, { class: "text-no-wrap border rounded pricing-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "py-4"
                            }, " TIME "),
                            (openBlock(), createBlock(Fragment, null, renderList([
                              { plan: "STARTER", price: "Free" },
                              { plan: "PRO", price: "$7.5/Month" },
                              { plan: "ENTERPRISE", price: "$16/Month" }
                            ], ({ plan, price }) => {
                              return createVNode("th", {
                                key: plan,
                                scope: "col",
                                class: "text-center py-4"
                              }, [
                                createVNode("div", { class: "position-relative" }, [
                                  createTextVNode(toDisplayString(plan) + " ", 1),
                                  plan === "PRO" ? (openBlock(), createBlock(VAvatar, {
                                    key: 0,
                                    rounded: "lg",
                                    color: "primary",
                                    size: "18",
                                    class: "position-absolute ms-2",
                                    style: { "inset-block-start": "-0.25rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-star-s-fill",
                                        size: "14"
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "text-body-2" }, toDisplayString(price), 1)
                              ]);
                            }), 64))
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                            return createVNode("tr", {
                              key: feature.feature
                            }, [
                              createVNode("td", { class: "text-high-emphasis" }, toDisplayString(feature.feature), 1),
                              createVNode("td", { class: "text-center" }, [
                                !feature.addOnAvailable.starter ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  color: feature.starter ? "primary" : "",
                                  size: "24  ",
                                  icon: feature.starter ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                feature.addOnAvailable.starter ? (openBlock(), createBlock(VChip, {
                                  key: 1,
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add-On-Available ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                !feature.addOnAvailable.pro ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  color: feature.pro ? "primary" : "",
                                  size: "24",
                                  icon: feature.pro ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                feature.addOnAvailable.pro ? (openBlock(), createBlock(VChip, {
                                  key: 1,
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add-On-Available ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                !feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  color: feature.enterprise ? "primary" : "",
                                  size: "24",
                                  icon: feature.enterprise ? "ri-checkbox-circle-line" : "ri-close-circle-line"
                                }, null, 8, ["color", "icon"])) : createCommentVNode("", true),
                                feature.addOnAvailable.enterprise ? (openBlock(), createBlock(VChip, {
                                  key: 1,
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add-On-Available ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 64))
                        ]),
                        createVNode("tfoot", null, [
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2" }),
                            createVNode("td", { class: "text-center py-2" }, [
                              createVNode(VBtn, {
                                variant: "outlined",
                                to: { name: "front-pages-payment" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Choose Plan ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("td", { class: "text-center py-2" }, [
                              createVNode(VBtn, { to: { name: "front-pages-payment" } }, {
                                default: withCtx(() => [
                                  createTextVNode(" Choose Plan ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("td", { class: "text-center py-2" }, [
                              createVNode(VBtn, {
                                variant: "outlined",
                                to: { name: "front-pages-payment" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Choose Plan ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "bg-background" }, [
                createVNode(VContainer, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pricing-section" }, [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " FAQ's "),
                        createVNode("p", { class: "text-body-1 mb-0" }, " Let us help answer the most common questions. ")
                      ]),
                      createVNode("div", { class: "pt-6" }, [
                        createVNode(VExpansionPanels, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                              return createVNode(VExpansionPanel, {
                                key: faq.question,
                                title: faq.question,
                                text: faq.answer
                              }, null, 8, ["title", "text"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(Footer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/front-pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abda80cd"]]);
export {
  pricing as default
};
