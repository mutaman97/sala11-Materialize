import { mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { t as trophy } from "./trophy-Dys4Wrt5.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VBtn, _ as _export_sfc } from "../ssr.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { i as illustrationJohnDark, a as illustrationJohnLight } from "./illustration-john-light-Bh1K1qhp.js";
import "./VAvatar-D2wIwigQ.js";
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
/* empty css               */
const _sfc_main$4 = {
  __name: "CardAward",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "position-relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}><h5 class="text-h5 text-wrap"${_scopeId2}> Congratulations <strong${_scopeId2}>Norris!</strong> <span class="text-high-emphasis"${_scopeId2}>🎉</span></h5><div class="text-subtitle-1"${_scopeId2}> Best seller of the month </div></div><h4 class="text-h4 text-primary"${_scopeId2}> $42.8k </h4><div class="text-body-1 mb-3"${_scopeId2}> 78% of target <span class="text-high-emphasis"${_scopeId2}>🚀</span></div>`);
                  _push3(ssrRenderComponent(VBtn, { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` View Sales `);
                      } else {
                        return [
                          createTextVNode(" View Sales ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("h5", { class: "text-h5 text-wrap" }, [
                        createTextVNode(" Congratulations "),
                        createVNode("strong", null, "Norris!"),
                        createTextVNode(),
                        createVNode("span", { class: "text-high-emphasis" }, "🎉")
                      ]),
                      createVNode("div", { class: "text-subtitle-1" }, " Best seller of the month ")
                    ]),
                    createVNode("h4", { class: "text-h4 text-primary" }, " $42.8k "),
                    createVNode("div", { class: "text-body-1 mb-3" }, [
                      createTextVNode(" 78% of target "),
                      createVNode("span", { class: "text-high-emphasis" }, "🚀")
                    ]),
                    createVNode(VBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createTextVNode(" View Sales ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VImg, {
              src: unref(trophy),
              class: "trophy flip-in-rtl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("h5", { class: "text-h5 text-wrap" }, [
                      createTextVNode(" Congratulations "),
                      createVNode("strong", null, "Norris!"),
                      createTextVNode(),
                      createVNode("span", { class: "text-high-emphasis" }, "🎉")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Best seller of the month ")
                  ]),
                  createVNode("h4", { class: "text-h4 text-primary" }, " $42.8k "),
                  createVNode("div", { class: "text-body-1 mb-3" }, [
                    createTextVNode(" 78% of target "),
                    createVNode("span", { class: "text-high-emphasis" }, "🚀")
                  ]),
                  createVNode(VBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" View Sales ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VImg, {
                src: unref(trophy),
                class: "trophy flip-in-rtl"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/gamification/CardAward.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const illustrationDaisyDark = "/build/assets/illustration-daisy-dark-DWoEG4HE.png";
const illustrationDaisyLight = "/build/assets/illustration-daisy-light-ihokpdBF.png";
const _sfc_main$3 = {
  __name: "CardCongratulationsDaisy",
  __ssrInlineRender: true,
  setup(__props) {
    const daisyImage = useGenerateImageVariant(illustrationDaisyLight, illustrationDaisyDark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "overflow-visible" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-h4 text-wrap" data-v-ce478598${_scopeId5}> Congratulations <strong data-v-ce478598${_scopeId5}>Daisy!</strong> <span class="text-high-emphasis" data-v-ce478598${_scopeId5}>🎉</span></h4>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-h4 text-wrap" }, [
                                        createTextVNode(" Congratulations "),
                                        createVNode("strong", null, "Daisy!"),
                                        createTextVNode(),
                                        createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 text-wrap" }, [
                                      createTextVNode(" Congratulations "),
                                      createVNode("strong", null, "Daisy!"),
                                      createTextVNode(),
                                      createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p data-v-ce478598${_scopeId4}>You already completed 68% <span class="text-high-emphasis" data-v-ce478598${_scopeId4}>😍</span> tasks. Good job! <br data-v-ce478598${_scopeId4}> Check your new raising badge in your profile.</p>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View Profile`);
                                  } else {
                                    return [
                                      createTextVNode("View Profile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode("You already completed 68% "),
                                  createVNode("span", { class: "text-high-emphasis" }, "😍"),
                                  createTextVNode(" tasks. Good job! "),
                                  createVNode("br"),
                                  createTextVNode(" Check your new raising badge in your profile.")
                                ]),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("View Profile")
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
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 text-wrap" }, [
                                    createTextVNode(" Congratulations "),
                                    createVNode("strong", null, "Daisy!"),
                                    createTextVNode(),
                                    createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("You already completed 68% "),
                                createVNode("span", { class: "text-high-emphasis" }, "😍"),
                                createTextVNode(" tasks. Good job! "),
                                createVNode("br"),
                                createTextVNode(" Check your new raising badge in your profile.")
                              ]),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("View Profile")
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(daisyImage))}${ssrRenderAttr("height", _ctx.$vuetify.display.xs ? "165" : "170")} class="${ssrRenderClass([_ctx.$vuetify.display.xs ? "position-relative" : "position-absolute", "john-illustration"])}" alt="john-illustration" data-v-ce478598${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(daisyImage),
                            class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                            height: _ctx.$vuetify.display.xs ? "165" : "170",
                            alt: "john-illustration"
                          }, null, 10, ["src", "height"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-h4 text-wrap" }, [
                                  createTextVNode(" Congratulations "),
                                  createVNode("strong", null, "Daisy!"),
                                  createTextVNode(),
                                  createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode("You already completed 68% "),
                              createVNode("span", { class: "text-high-emphasis" }, "😍"),
                              createTextVNode(" tasks. Good job! "),
                              createVNode("br"),
                              createTextVNode(" Check your new raising badge in your profile.")
                            ]),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode("View Profile")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "4",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(daisyImage),
                          class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                          height: _ctx.$vuetify.display.xs ? "165" : "170",
                          alt: "john-illustration"
                        }, null, 10, ["src", "height"])
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
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 text-wrap" }, [
                                createTextVNode(" Congratulations "),
                                createVNode("strong", null, "Daisy!"),
                                createTextVNode(),
                                createVNode("span", { class: "text-high-emphasis" }, "🎉")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("You already completed 68% "),
                            createVNode("span", { class: "text-high-emphasis" }, "😍"),
                            createTextVNode(" tasks. Good job! "),
                            createVNode("br"),
                            createTextVNode(" Check your new raising badge in your profile.")
                          ]),
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode("View Profile")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(daisyImage),
                        class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                        height: _ctx.$vuetify.display.xs ? "165" : "170",
                        alt: "john-illustration"
                      }, null, 10, ["src", "height"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/gamification/CardCongratulationsDaisy.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardCongratulationsDaisy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ce478598"]]);
const _sfc_main$2 = {
  __name: "CardCongratulationsJohn",
  __ssrInlineRender: true,
  setup(__props) {
    const johnImage = useGenerateImageVariant(illustrationJohnLight, illustrationJohnDark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "overflow-visible" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8",
                    order: "2",
                    "order-sm": "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-h4 text-wrap" data-v-5c6785c9${_scopeId5}> Congratulations <strong data-v-5c6785c9${_scopeId5}>John!</strong> <span class="text-high-emphasis" data-v-5c6785c9${_scopeId5}>🎉</span></h4>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-h4 text-wrap" }, [
                                        createTextVNode(" Congratulations "),
                                        createVNode("strong", null, "John!"),
                                        createTextVNode(),
                                        createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4 text-wrap" }, [
                                      createTextVNode(" Congratulations "),
                                      createVNode("strong", null, "John!"),
                                      createTextVNode(),
                                      createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p data-v-5c6785c9${_scopeId4}> You have done 68% <span class="text-high-emphasis" data-v-5c6785c9${_scopeId4}>😎</span> more sales today. <br data-v-5c6785c9${_scopeId4}> Check your new raising badge in your profile. </p>`);
                              _push5(ssrRenderComponent(VBtn, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View Profile`);
                                  } else {
                                    return [
                                      createTextVNode("View Profile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" You have done 68% "),
                                  createVNode("span", { class: "text-high-emphasis" }, "😎"),
                                  createTextVNode(" more sales today. "),
                                  createVNode("br"),
                                  createTextVNode(" Check your new raising badge in your profile. ")
                                ]),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("View Profile")
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
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4 text-wrap" }, [
                                    createTextVNode(" Congratulations "),
                                    createVNode("strong", null, "John!"),
                                    createTextVNode(),
                                    createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" You have done 68% "),
                                createVNode("span", { class: "text-high-emphasis" }, "😎"),
                                createTextVNode(" more sales today. "),
                                createVNode("br"),
                                createTextVNode(" Check your new raising badge in your profile. ")
                              ]),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("View Profile")
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4",
                    order: "1",
                    "order-sm": "2",
                    class: "text-center mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", unref(johnImage))}${ssrRenderAttr("height", _ctx.$vuetify.display.xs ? "165" : "170")} class="${ssrRenderClass([_ctx.$vuetify.display.xs ? "position-relative" : "position-absolute", "john-illustration"])}" alt="john-illustration" data-v-5c6785c9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: unref(johnImage),
                            class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                            height: _ctx.$vuetify.display.xs ? "165" : "170",
                            alt: "john-illustration"
                          }, null, 10, ["src", "height"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8",
                      order: "2",
                      "order-sm": "1"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-h4 text-wrap" }, [
                                  createTextVNode(" Congratulations "),
                                  createVNode("strong", null, "John!"),
                                  createTextVNode(),
                                  createVNode("span", { class: "text-high-emphasis" }, "🎉")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" You have done 68% "),
                              createVNode("span", { class: "text-high-emphasis" }, "😎"),
                              createTextVNode(" more sales today. "),
                              createVNode("br"),
                              createTextVNode(" Check your new raising badge in your profile. ")
                            ]),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode("View Profile")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "4",
                      order: "1",
                      "order-sm": "2",
                      class: "text-center mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(johnImage),
                          class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                          height: _ctx.$vuetify.display.xs ? "165" : "170",
                          alt: "john-illustration"
                        }, null, 10, ["src", "height"])
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
              createVNode(VRow, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8",
                    order: "2",
                    "order-sm": "1"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 text-wrap" }, [
                                createTextVNode(" Congratulations "),
                                createVNode("strong", null, "John!"),
                                createTextVNode(),
                                createVNode("span", { class: "text-high-emphasis" }, "🎉")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" You have done 68% "),
                            createVNode("span", { class: "text-high-emphasis" }, "😎"),
                            createTextVNode(" more sales today. "),
                            createVNode("br"),
                            createTextVNode(" Check your new raising badge in your profile. ")
                          ]),
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode("View Profile")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    order: "1",
                    "order-sm": "2",
                    class: "text-center mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: unref(johnImage),
                        class: ["john-illustration", _ctx.$vuetify.display.xs ? "position-relative" : "position-absolute"],
                        height: _ctx.$vuetify.display.xs ? "165" : "170",
                        alt: "john-illustration"
                      }, null, 10, ["src", "height"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/gamification/CardCongratulationsJohn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardCongratulationsJohn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5c6785c9"]]);
const poseM9 = "/build/assets/pose-m-9-1ExTsKPS.png";
const _sfc_main$1 = {
  __name: "CardUpgrade",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "position-relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}><h5 class="text-h5"${_scopeId2}> Upgrade Account <span class="text-high-emphasis"${_scopeId2}>😀</span></h5><div class="text-subtitle-1"${_scopeId2}> Add 15 team members </div></div><h4 class="text-h4 text-primary"${_scopeId2}> $199 </h4><div class="text-body-1 mb-3"${_scopeId2}> 40% OFF <span class="text-high-emphasis"${_scopeId2}>😍</span></div>`);
                  _push3(ssrRenderComponent(VBtn, { size: "small" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Upgrade Plan `);
                      } else {
                        return [
                          createTextVNode(" Upgrade Plan ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("h5", { class: "text-h5" }, [
                        createTextVNode(" Upgrade Account "),
                        createVNode("span", { class: "text-high-emphasis" }, "😀")
                      ]),
                      createVNode("div", { class: "text-subtitle-1" }, " Add 15 team members ")
                    ]),
                    createVNode("h4", { class: "text-h4 text-primary" }, " $199 "),
                    createVNode("div", { class: "text-body-1 mb-3" }, [
                      createTextVNode(" 40% OFF "),
                      createVNode("span", { class: "text-high-emphasis" }, "😍")
                    ]),
                    createVNode(VBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createTextVNode(" Upgrade Plan ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VImg, {
              src: unref(poseM9),
              class: "illustration flip-in-rtl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("h5", { class: "text-h5" }, [
                      createTextVNode(" Upgrade Account "),
                      createVNode("span", { class: "text-high-emphasis" }, "😀")
                    ]),
                    createVNode("div", { class: "text-subtitle-1" }, " Add 15 team members ")
                  ]),
                  createVNode("h4", { class: "text-h4 text-primary" }, " $199 "),
                  createVNode("div", { class: "text-body-1 mb-3" }, [
                    createTextVNode(" 40% OFF "),
                    createVNode("span", { class: "text-high-emphasis" }, "😍")
                  ]),
                  createVNode(VBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createTextVNode(" Upgrade Plan ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VImg, {
                src: unref(poseM9),
                class: "illustration flip-in-rtl"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/cards/gamification/CardUpgrade.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "card-gamification",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              class: "align-self-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardCongratulationsJohn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardCongratulationsJohn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              class: "align-self-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardCongratulationsDaisy, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardCongratulationsDaisy)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8",
                class: "align-self-end"
              }, {
                default: withCtx(() => [
                  createVNode(CardCongratulationsJohn)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "8",
                class: "align-self-end"
              }, {
                default: withCtx(() => [
                  createVNode(CardCongratulationsDaisy)
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/cards/card-gamification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
