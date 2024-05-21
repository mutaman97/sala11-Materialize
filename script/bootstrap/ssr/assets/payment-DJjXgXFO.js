import { _ as _sfc_main$1 } from "./PricingPlanDialog-ChNiCir3.js";
import { _ as __unplugin_components_0 } from "./CustomRadios-DrYzSNcj.js";
import { ref, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./front-page-navbar-Zyu6fQg-.js";
import { v as visaDark, a as visaLight } from "./visa-light-manIB7UD.js";
import { _ as _export_sfc, u as useConfigStore, V as VBtn } from "../ssr.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import "./AppPricing-DLCFY0_b.js";
import "./form-DJQTvsmB.js";
import "./VChip-BFfBWJ68.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VSwitch-nG7fxOCQ.js";
import "./VInput-Bla8Vlgt.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VList-Bay5Fixr.js";
import "./ssrBoot-Co4_dNdy.js";
import "./DialogCloseBtn-h97PlnE6.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VSheet-BoIzvRsi.js";
import "./VForm-J0SV9LXx.js";
import "@vueuse/core";
import "vue3-perfect-scrollbar";
import "./NavbarThemeSwitcher-CmYbn-Kr.js";
import "./VTooltip-CVKEAyhs.js";
import "./VMenu-KUYgjPyD.js";
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
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VCheckboxBtn-CCkh1QvV.js";
const paypalDark = "/build/assets/paypal-dark-CLH2Tqzw.png";
const paypalLight = "/build/assets/paypal-light-Dxr0Bv2Z.png";
const _sfc_main = {
  __name: "payment",
  __ssrInlineRender: true,
  setup(__props) {
    const visa = useGenerateImageVariant(visaLight, visaDark);
    const paypal = useGenerateImageVariant(paypalLight, paypalDark);
    const store = useConfigStore();
    store.skin = "default";
    const radioContent = ref([
      {
        title: "Credit Card",
        value: "credit card",
        images: visa
      },
      {
        title: "PayPal",
        value: "paypal",
        images: paypal
      }
    ]);
    const selectedRadio = ref("credit card");
    const selectedCountry = ref("USA");
    const isPricingPlanDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadios = __unplugin_components_0;
      const _component_PricingPlanDialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-page" }, _attrs))} data-v-71165079>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-center align-center payment-card" data-v-71165079${_scopeId}>`);
            _push2(ssrRenderComponent(VCard, { width: "100%" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "8",
                          class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, {
                                class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "pb-5" : "pe-5"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div data-v-71165079${_scopeId5}><h4 class="text-h4 mb-2" data-v-71165079${_scopeId5}> Checkout </h4><div class="text-body-1" data-v-71165079${_scopeId5}> All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. </div></div>`);
                                    _push6(ssrRenderComponent(_component_CustomRadios, {
                                      "selected-radio": unref(selectedRadio),
                                      "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                      "radio-content": unref(radioContent),
                                      "grid-column": { cols: "12", sm: "6" },
                                      class: "my-8"
                                    }, {
                                      default: withCtx(({ item }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex align-center gap-x-4" data-v-71165079${_scopeId6}><img${ssrRenderAttr("src", item.images)} height="34" width="58" data-v-71165079${_scopeId6}><div class="text-body-1 text-high-emphasis" data-v-71165079${_scopeId6}>${ssrInterpolate(item.title)}</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                              createVNode("img", {
                                                src: item.images,
                                                height: "34",
                                                width: "58"
                                              }, null, 8, ["src"]),
                                              createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div data-v-71165079${_scopeId5}><h4 class="text-h4 mb-6" data-v-71165079${_scopeId5}> Billing Details </h4>`);
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
                                                  label: "Email Address",
                                                  type: "email",
                                                  placeholder: "johndoe@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Email Address",
                                                    type: "email",
                                                    placeholder: "johndoe@email.com"
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
                                                  label: "Password",
                                                  autocomplete: "on",
                                                  type: "password",
                                                  placeholder: "············"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Password",
                                                    autocomplete: "on",
                                                    type: "password",
                                                    placeholder: "············"
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(selectedCountry),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                                  label: "Billing Country",
                                                  items: ["USA", "Canada", "UK", "AUS"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(selectedCountry),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                                    label: "Billing Country",
                                                    items: ["USA", "Canada", "UK", "AUS"]
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
                                                  label: "Biling Zip/Postal Code",
                                                  type: "number",
                                                  placeholder: "129211"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Biling Zip/Postal Code",
                                                    type: "number",
                                                    placeholder: "129211"
                                                  })
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
                                                  label: "Email Address",
                                                  type: "email",
                                                  placeholder: "johndoe@email.com"
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
                                                  label: "Password",
                                                  autocomplete: "on",
                                                  type: "password",
                                                  placeholder: "············"
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
                                                  modelValue: unref(selectedCountry),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                                  label: "Billing Country",
                                                  items: ["USA", "Canada", "UK", "AUS"]
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
                                                  label: "Biling Zip/Postal Code",
                                                  type: "number",
                                                  placeholder: "129211"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="${ssrRenderClass([unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"])}" data-v-71165079${_scopeId5}><h4 class="text-h4 mb-6" data-v-71165079${_scopeId5}> Credit Card Info </h4>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Card Number",
                                                  placeholder: "8787 2345 3458",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Card Number",
                                                    placeholder: "8787 2345 3458",
                                                    type: "number"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Card Holder",
                                                  placeholder: "John Doe"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Card Holder",
                                                    placeholder: "John Doe"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Exp. date",
                                                  placeholder: "05/2020"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Exp. date",
                                                    placeholder: "05/2020"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "CVV",
                                                  type: "number",
                                                  placeholder: "784"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "CVV",
                                                    type: "number",
                                                    placeholder: "784"
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
                                                  placeholder: "8787 2345 3458",
                                                  type: "number"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Card Holder",
                                                  placeholder: "John Doe"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Exp. date",
                                                  placeholder: "05/2020"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "CVV",
                                                  type: "number",
                                                  placeholder: "784"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("h4", { class: "text-h4 mb-2" }, " Checkout "),
                                        createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                                      ]),
                                      createVNode(_component_CustomRadios, {
                                        "selected-radio": unref(selectedRadio),
                                        "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                        "radio-content": unref(radioContent),
                                        "grid-column": { cols: "12", sm: "6" },
                                        class: "my-8"
                                      }, {
                                        default: withCtx(({ item }) => [
                                          createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                            createVNode("img", {
                                              src: item.images,
                                              height: "34",
                                              width: "58"
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                                      createVNode("div", null, [
                                        createVNode("h4", { class: "text-h4 mb-6" }, " Billing Details "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Email Address",
                                                  type: "email",
                                                  placeholder: "johndoe@email.com"
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
                                                  label: "Password",
                                                  autocomplete: "on",
                                                  type: "password",
                                                  placeholder: "············"
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
                                                  modelValue: unref(selectedCountry),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                                  label: "Billing Country",
                                                  items: ["USA", "Canada", "UK", "AUS"]
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
                                                  label: "Biling Zip/Postal Code",
                                                  type: "number",
                                                  placeholder: "129211"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", {
                                        class: [unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"]
                                      }, [
                                        createVNode("h4", { class: "text-h4 mb-6" }, " Credit Card Info "),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Card Number",
                                                  placeholder: "8787 2345 3458",
                                                  type: "number"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Card Holder",
                                                  placeholder: "John Doe"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Exp. date",
                                                  placeholder: "05/2020"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "CVV",
                                                  type: "number",
                                                  placeholder: "784"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ], 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, {
                                  class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "pb-5" : "pe-5"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h4", { class: "text-h4 mb-2" }, " Checkout "),
                                      createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                                    ]),
                                    createVNode(_component_CustomRadios, {
                                      "selected-radio": unref(selectedRadio),
                                      "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                      "radio-content": unref(radioContent),
                                      "grid-column": { cols: "12", sm: "6" },
                                      class: "my-8"
                                    }, {
                                      default: withCtx(({ item }) => [
                                        createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                          createVNode("img", {
                                            src: item.images,
                                            height: "34",
                                            width: "58"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                                    createVNode("div", null, [
                                      createVNode("h4", { class: "text-h4 mb-6" }, " Billing Details "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Email Address",
                                                type: "email",
                                                placeholder: "johndoe@email.com"
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
                                                label: "Password",
                                                autocomplete: "on",
                                                type: "password",
                                                placeholder: "············"
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
                                                modelValue: unref(selectedCountry),
                                                "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                                label: "Billing Country",
                                                items: ["USA", "Canada", "UK", "AUS"]
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
                                                label: "Biling Zip/Postal Code",
                                                type: "number",
                                                placeholder: "129211"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", {
                                      class: [unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"]
                                    }, [
                                      createVNode("h4", { class: "text-h4 mb-6" }, " Credit Card Info "),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Card Number",
                                                placeholder: "8787 2345 3458",
                                                type: "number"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Card Holder",
                                                placeholder: "John Doe"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Exp. date",
                                                placeholder: "05/2020"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "CVV",
                                                type: "number",
                                                placeholder: "784"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ], 2)
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, {
                                class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "" : "ps-5"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-8" data-v-71165079${_scopeId5}><h4 class="text-h4 mb-2" data-v-71165079${_scopeId5}> Order Summary </h4><div class="text-body-1" data-v-71165079${_scopeId5}> It can help you manage and service orders before, during, and after fulfilment. </div></div>`);
                                    _push6(ssrRenderComponent(VCard, {
                                      flat: "",
                                      color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div data-v-71165079${_scopeId7}><div class="text-body-1" data-v-71165079${_scopeId7}> A simple start for everyone </div><div class="my-4" data-v-71165079${_scopeId7}><h1 class="text-h1 d-inline-block" data-v-71165079${_scopeId7}> $59.99 </h1> <div class="text-body-1 font-weight-medium d-inline-block" data-v-71165079${_scopeId7}> / month </div></div>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  variant: "outlined",
                                                  block: "",
                                                  onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Change Plan `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Change Plan ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", null, [
                                                    createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                                    createVNode("div", { class: "my-4" }, [
                                                      createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                                      createTextVNode(),
                                                      createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                                    ]),
                                                    createVNode(VBtn, {
                                                      variant: "outlined",
                                                      block: "",
                                                      onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Change Plan ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardText, { class: "pa-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                                  createVNode("div", { class: "my-4" }, [
                                                    createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                                    createTextVNode(),
                                                    createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                                  ]),
                                                  createVNode(VBtn, {
                                                    variant: "outlined",
                                                    block: "",
                                                    onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Change Plan ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="my-5" data-v-71165079${_scopeId5}><div class="d-flex justify-space-between mb-2" data-v-71165079${_scopeId5}><div class="text-body-1" data-v-71165079${_scopeId5}> Subscription </div><div class="text-body-1 font-weight-medium text-high-emphasis" data-v-71165079${_scopeId5}> $85.99 </div></div><div class="d-flex justify-space-between" data-v-71165079${_scopeId5}><div class="text-body-1" data-v-71165079${_scopeId5}> Tax </div><div class="text-body-1 font-weight-medium text-high-emphasis" data-v-71165079${_scopeId5}> $4.99 </div></div>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between" data-v-71165079${_scopeId5}><div class="text-body-1" data-v-71165079${_scopeId5}> Total </div><div class="text-body-1 font-weight-medium text-high-emphasis" data-v-71165079${_scopeId5}> $90.98 </div></div></div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                      block: "",
                                      color: "success",
                                      class: "mb-8"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Proceed With Payment `);
                                        } else {
                                          return [
                                            createTextVNode(" Proceed With Payment ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="text-body-1" data-v-71165079${_scopeId5}> By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. </div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-8" }, [
                                        createVNode("h4", { class: "text-h4 mb-2" }, " Order Summary "),
                                        createVNode("div", { class: "text-body-1" }, " It can help you manage and service orders before, during, and after fulfilment. ")
                                      ]),
                                      createVNode(VCard, {
                                        flat: "",
                                        color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "pa-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                                createVNode("div", { class: "my-4" }, [
                                                  createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                                  createTextVNode(),
                                                  createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                                ]),
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  block: "",
                                                  onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Change Plan ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "my-5" }, [
                                        createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                          createVNode("div", { class: "text-body-1" }, " Subscription "),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $85.99 ")
                                        ]),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode("div", { class: "text-body-1" }, " Tax "),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $4.99 ")
                                        ]),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode("div", { class: "text-body-1" }, " Total "),
                                          createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $90.98 ")
                                        ])
                                      ]),
                                      createVNode(VBtn, {
                                        "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                        block: "",
                                        color: "success",
                                        class: "mb-8"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Proceed With Payment ")
                                        ]),
                                        _: 1
                                      }, 8, ["append-icon"]),
                                      createVNode("div", { class: "text-body-1" }, " By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, {
                                  class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "" : "ps-5"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-8" }, [
                                      createVNode("h4", { class: "text-h4 mb-2" }, " Order Summary "),
                                      createVNode("div", { class: "text-body-1" }, " It can help you manage and service orders before, during, and after fulfilment. ")
                                    ]),
                                    createVNode(VCard, {
                                      flat: "",
                                      color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "pa-6" }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                              createVNode("div", { class: "my-4" }, [
                                                createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                                createTextVNode(),
                                                createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                              ]),
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                block: "",
                                                onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Change Plan ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "my-5" }, [
                                      createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                        createVNode("div", { class: "text-body-1" }, " Subscription "),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $85.99 ")
                                      ]),
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode("div", { class: "text-body-1" }, " Tax "),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $4.99 ")
                                      ]),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode("div", { class: "text-body-1" }, " Total "),
                                        createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $90.98 ")
                                      ])
                                    ]),
                                    createVNode(VBtn, {
                                      "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                      block: "",
                                      color: "success",
                                      class: "mb-8"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Proceed With Payment ")
                                      ]),
                                      _: 1
                                    }, 8, ["append-icon"]),
                                    createVNode("div", { class: "text-body-1" }, " By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. ")
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "8",
                            class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, {
                                class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "pb-5" : "pe-5"]
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h4", { class: "text-h4 mb-2" }, " Checkout "),
                                    createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                                  ]),
                                  createVNode(_component_CustomRadios, {
                                    "selected-radio": unref(selectedRadio),
                                    "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                    "radio-content": unref(radioContent),
                                    "grid-column": { cols: "12", sm: "6" },
                                    class: "my-8"
                                  }, {
                                    default: withCtx(({ item }) => [
                                      createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                        createVNode("img", {
                                          src: item.images,
                                          height: "34",
                                          width: "58"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                                  createVNode("div", null, [
                                    createVNode("h4", { class: "text-h4 mb-6" }, " Billing Details "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Email Address",
                                              type: "email",
                                              placeholder: "johndoe@email.com"
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
                                              label: "Password",
                                              autocomplete: "on",
                                              type: "password",
                                              placeholder: "············"
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
                                              modelValue: unref(selectedCountry),
                                              "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                              label: "Billing Country",
                                              items: ["USA", "Canada", "UK", "AUS"]
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
                                              label: "Biling Zip/Postal Code",
                                              type: "number",
                                              placeholder: "129211"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", {
                                    class: [unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"]
                                  }, [
                                    createVNode("h4", { class: "text-h4 mb-6" }, " Credit Card Info "),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Card Number",
                                              placeholder: "8787 2345 3458",
                                              type: "number"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Card Holder",
                                              placeholder: "John Doe"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Exp. date",
                                              placeholder: "05/2020"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "CVV",
                                              type: "number",
                                              placeholder: "784"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)
                                ]),
                                _: 1
                              }, 8, ["class"])
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, {
                                class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "" : "ps-5"]
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-8" }, [
                                    createVNode("h4", { class: "text-h4 mb-2" }, " Order Summary "),
                                    createVNode("div", { class: "text-body-1" }, " It can help you manage and service orders before, during, and after fulfilment. ")
                                  ]),
                                  createVNode(VCard, {
                                    flat: "",
                                    color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                            createVNode("div", { class: "my-4" }, [
                                              createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                              createTextVNode(),
                                              createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                            ]),
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              block: "",
                                              onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Change Plan ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "my-5" }, [
                                    createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                      createVNode("div", { class: "text-body-1" }, " Subscription "),
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $85.99 ")
                                    ]),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("div", { class: "text-body-1" }, " Tax "),
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $4.99 ")
                                    ]),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode("div", { class: "text-body-1" }, " Total "),
                                      createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $90.98 ")
                                    ])
                                  ]),
                                  createVNode(VBtn, {
                                    "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                    block: "",
                                    color: "success",
                                    class: "mb-8"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Proceed With Payment ")
                                    ]),
                                    _: 1
                                  }, 8, ["append-icon"]),
                                  createVNode("div", { class: "text-body-1" }, " By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. ")
                                ]),
                                _: 1
                              }, 8, ["class"])
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
                          cols: "12",
                          md: "8",
                          class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "pb-5" : "pe-5"]
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h4", { class: "text-h4 mb-2" }, " Checkout "),
                                  createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                                ]),
                                createVNode(_component_CustomRadios, {
                                  "selected-radio": unref(selectedRadio),
                                  "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                  "radio-content": unref(radioContent),
                                  "grid-column": { cols: "12", sm: "6" },
                                  class: "my-8"
                                }, {
                                  default: withCtx(({ item }) => [
                                    createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                      createVNode("img", {
                                        src: item.images,
                                        height: "34",
                                        width: "58"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                                createVNode("div", null, [
                                  createVNode("h4", { class: "text-h4 mb-6" }, " Billing Details "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Email Address",
                                            type: "email",
                                            placeholder: "johndoe@email.com"
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
                                            label: "Password",
                                            autocomplete: "on",
                                            type: "password",
                                            placeholder: "············"
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
                                            modelValue: unref(selectedCountry),
                                            "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                            label: "Billing Country",
                                            items: ["USA", "Canada", "UK", "AUS"]
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
                                            label: "Biling Zip/Postal Code",
                                            type: "number",
                                            placeholder: "129211"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", {
                                  class: [unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"]
                                }, [
                                  createVNode("h4", { class: "text-h4 mb-6" }, " Credit Card Info "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Number",
                                            placeholder: "8787 2345 3458",
                                            type: "number"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Holder",
                                            placeholder: "John Doe"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Exp. date",
                                            placeholder: "05/2020"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "CVV",
                                            type: "number",
                                            placeholder: "784"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 2)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "" : "ps-5"]
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-8" }, [
                                  createVNode("h4", { class: "text-h4 mb-2" }, " Order Summary "),
                                  createVNode("div", { class: "text-body-1" }, " It can help you manage and service orders before, during, and after fulfilment. ")
                                ]),
                                createVNode(VCard, {
                                  flat: "",
                                  color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                          createVNode("div", { class: "my-4" }, [
                                            createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                            createTextVNode(),
                                            createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                          ]),
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            block: "",
                                            onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Change Plan ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "my-5" }, [
                                  createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                    createVNode("div", { class: "text-body-1" }, " Subscription "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $85.99 ")
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "text-body-1" }, " Tax "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $4.99 ")
                                  ]),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "text-body-1" }, " Total "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $90.98 ")
                                  ])
                                ]),
                                createVNode(VBtn, {
                                  "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                  block: "",
                                  color: "success",
                                  class: "mb-8"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Proceed With Payment ")
                                  ]),
                                  _: 1
                                }, 8, ["append-icon"]),
                                createVNode("div", { class: "text-body-1" }, " By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. ")
                              ]),
                              _: 1
                            }, 8, ["class"])
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-center align-center payment-card" }, [
                createVNode(VCard, { width: "100%" }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "8",
                          class: _ctx.$vuetify.display.mdAndUp ? "border-e" : "border-b"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "pb-5" : "pe-5"]
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h4", { class: "text-h4 mb-2" }, " Checkout "),
                                  createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                                ]),
                                createVNode(_component_CustomRadios, {
                                  "selected-radio": unref(selectedRadio),
                                  "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
                                  "radio-content": unref(radioContent),
                                  "grid-column": { cols: "12", sm: "6" },
                                  class: "my-8"
                                }, {
                                  default: withCtx(({ item }) => [
                                    createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                      createVNode("img", {
                                        src: item.images,
                                        height: "34",
                                        width: "58"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.title), 1)
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]),
                                createVNode("div", null, [
                                  createVNode("h4", { class: "text-h4 mb-6" }, " Billing Details "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Email Address",
                                            type: "email",
                                            placeholder: "johndoe@email.com"
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
                                            label: "Password",
                                            autocomplete: "on",
                                            type: "password",
                                            placeholder: "············"
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
                                            modelValue: unref(selectedCountry),
                                            "onUpdate:modelValue": ($event) => isRef(selectedCountry) ? selectedCountry.value = $event : null,
                                            label: "Billing Country",
                                            items: ["USA", "Canada", "UK", "AUS"]
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
                                            label: "Biling Zip/Postal Code",
                                            type: "number",
                                            placeholder: "129211"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", {
                                  class: [unref(selectedRadio) === "paypal" ? "d-none" : "d-block", "mt-8"]
                                }, [
                                  createVNode("h4", { class: "text-h4 mb-6" }, " Credit Card Info "),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Number",
                                            placeholder: "8787 2345 3458",
                                            type: "number"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Card Holder",
                                            placeholder: "John Doe"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Exp. date",
                                            placeholder: "05/2020"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "CVV",
                                            type: "number",
                                            placeholder: "784"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 2)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, {
                              class: ["pa-8", _ctx.$vuetify.display.smAndDown ? "" : "ps-5"]
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-8" }, [
                                  createVNode("h4", { class: "text-h4 mb-2" }, " Order Summary "),
                                  createVNode("div", { class: "text-body-1" }, " It can help you manage and service orders before, during, and after fulfilment. ")
                                ]),
                                createVNode(VCard, {
                                  flat: "",
                                  color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1" }, " A simple start for everyone "),
                                          createVNode("div", { class: "my-4" }, [
                                            createVNode("h1", { class: "text-h1 d-inline-block" }, " $59.99 "),
                                            createTextVNode(),
                                            createVNode("div", { class: "text-body-1 font-weight-medium d-inline-block" }, " / month ")
                                          ]),
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            block: "",
                                            onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Change Plan ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "my-5" }, [
                                  createVNode("div", { class: "d-flex justify-space-between mb-2" }, [
                                    createVNode("div", { class: "text-body-1" }, " Subscription "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $85.99 ")
                                  ]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "text-body-1" }, " Tax "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $4.99 ")
                                  ]),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode("div", { class: "text-body-1" }, " Total "),
                                    createVNode("div", { class: "text-body-1 font-weight-medium text-high-emphasis" }, " $90.98 ")
                                  ])
                                ]),
                                createVNode(VBtn, {
                                  "append-icon": _ctx.$vuetify.locale.isRtl ? "ri-arrow-left-line" : "ri-arrow-right-line",
                                  block: "",
                                  color: "success",
                                  class: "mb-8"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Proceed With Payment ")
                                  ]),
                                  _: 1
                                }, 8, ["append-icon"]),
                                createVNode("div", { class: "text-body-1" }, " By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable. ")
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_PricingPlanDialog, {
        "is-dialog-visible": unref(isPricingPlanDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/front-pages/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71165079"]]);
export {
  payment as default
};
