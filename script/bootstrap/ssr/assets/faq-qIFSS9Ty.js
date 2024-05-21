import { _ as _sfc_main$1 } from "./AppSearchHeader-lTUlkO8j.js";
import { ref, watch, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { f as faqIllustration } from "./faq-illustration-Ctip7u9F.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VExpansionPanels, a as VExpansionPanel } from "./VExpansionPanel-BASkbcYj.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "ofetch";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
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
import "./VSlideGroup-Bvz86g7R.js";
import "./lazy-kVEey9ha.js";
import "./ssrBoot-Co4_dNdy.js";
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqSearchQuery = ref("");
    const faqs = ref([]);
    const fetchFaqs = async () => {
      const data = await $api("/pages/faq", { query: { q: faqSearchQuery.value } }).catch((err) => console.log(err));
      faqs.value = data;
    };
    const activeTab = ref("Payment");
    const activeQuestion = ref(1);
    watch(activeTab, () => activeQuestion.value = 0);
    watch(faqSearchQuery, fetchFaqs, { immediate: true });
    const contactUs = [
      {
        icon: "ri-phone-line",
        via: "+ (810) 2548 2568",
        tagLine: "We are always happy to help!"
      },
      {
        icon: "ri-mail-line",
        via: "hello@help.com",
        tagLine: "Best way to get answer faster!"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSearchHeader = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppSearchHeader, {
        modelValue: unref(faqSearchQuery),
        "onUpdate:modelValue": ($event) => isRef(faqSearchQuery) ? faqSearchQuery.value = $event : null,
        "custom-class": "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="text-h4 text-primary mb-2"${_scopeId}> Hello, how can we help? </h4><p class="text-body-1 mb-7"${_scopeId}> or choose a category to quickly find the help you need </p>`);
            _push2(ssrRenderComponent(VTextField, {
              placeholder: "search articles...",
              class: "search-header-input mx-auto my-4"
            }, {
              "prepend-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-search-line",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-search-line",
                      size: "18"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h4", { class: "text-h4 text-primary mb-2" }, " Hello, how can we help? "),
              createVNode("p", { class: "text-body-1 mb-7" }, " or choose a category to quickly find the help you need "),
              createVNode(VTextField, {
                placeholder: "search articles...",
                class: "search-header-input mx-auto my-4"
              }, {
                "prepend-inner": withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-search-line",
                    size: "18"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              style: unref(faqs).length ? null : { display: "none" },
              cols: "12",
              md: "3",
              sm: "5",
              class: "position-relative"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabs, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    direction: "vertical",
                    class: "v-tabs-pill"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(faqs), (faq) => {
                          _push4(ssrRenderComponent(VTab, {
                            key: faq.faqTitle,
                            value: faq.faqTitle
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: faq.faqIcon,
                                  start: ""
                                }, null, _parent5, _scopeId4));
                                _push5(` ${ssrInterpolate(faq.faqTitle)}`);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: faq.faqIcon,
                                    start: ""
                                  }, null, 8, ["icon"]),
                                  createTextVNode(" " + toDisplayString(faq.faqTitle), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                            return openBlock(), createBlock(VTab, {
                              key: faq.faqTitle,
                              value: faq.faqTitle
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: faq.faqIcon,
                                  start: ""
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(faq.faqTitle), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VImg, {
                    height: "195",
                    src: unref(faqIllustration),
                    class: "d-none d-sm-block mt-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTabs, {
                      modelValue: unref(activeTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                      direction: "vertical",
                      class: "v-tabs-pill"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                          return openBlock(), createBlock(VTab, {
                            key: faq.faqTitle,
                            value: faq.faqTitle
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: faq.faqIcon,
                                start: ""
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(faq.faqTitle), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VImg, {
                      height: "195",
                      src: unref(faqIllustration),
                      class: "d-none d-sm-block mt-4"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "9",
              sm: "7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    class: "faq-v-window disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(faqs), (faq) => {
                          _push4(ssrRenderComponent(VWindowItem, {
                            key: faq.faqTitle,
                            value: faq.faqTitle
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center mb-4 gap-x-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "lg",
                                  color: "primary",
                                  variant: "tonal",
                                  size: "50"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: 30,
                                        icon: faq.faqIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          size: 30,
                                          icon: faq.faqIcon
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><h5 class="text-h5"${_scopeId4}>${ssrInterpolate(faq.faqTitle)}</h5><div class="text-body-1"${_scopeId4}>${ssrInterpolate(faq.faqSubtitle)}</div></div></div>`);
                                _push5(ssrRenderComponent(VExpansionPanels, {
                                  modelValue: unref(activeQuestion),
                                  "onUpdate:modelValue": ($event) => isRef(activeQuestion) ? activeQuestion.value = $event : null,
                                  multiple: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(faq.faqs, (item) => {
                                        _push6(ssrRenderComponent(VExpansionPanel, {
                                          key: item.question,
                                          title: item.question,
                                          text: item.answer
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(faq.faqs, (item) => {
                                          return openBlock(), createBlock(VExpansionPanel, {
                                            key: item.question,
                                            title: item.question,
                                            text: item.answer
                                          }, null, 8, ["title", "text"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center mb-4 gap-x-4" }, [
                                    createVNode(VAvatar, {
                                      rounded: "lg",
                                      color: "primary",
                                      variant: "tonal",
                                      size: "50"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: 30,
                                          icon: faq.faqIcon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(faq.faqTitle), 1),
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(faq.faqSubtitle), 1)
                                    ])
                                  ]),
                                  createVNode(VExpansionPanels, {
                                    modelValue: unref(activeQuestion),
                                    "onUpdate:modelValue": ($event) => isRef(activeQuestion) ? activeQuestion.value = $event : null,
                                    multiple: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(faq.faqs, (item) => {
                                        return openBlock(), createBlock(VExpansionPanel, {
                                          key: item.question,
                                          title: item.question,
                                          text: item.answer
                                        }, null, 8, ["title", "text"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                            return openBlock(), createBlock(VWindowItem, {
                              key: faq.faqTitle,
                              value: faq.faqTitle
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center mb-4 gap-x-4" }, [
                                  createVNode(VAvatar, {
                                    rounded: "lg",
                                    color: "primary",
                                    variant: "tonal",
                                    size: "50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: 30,
                                        icon: faq.faqIcon
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(faq.faqTitle), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(faq.faqSubtitle), 1)
                                  ])
                                ]),
                                createVNode(VExpansionPanels, {
                                  modelValue: unref(activeQuestion),
                                  "onUpdate:modelValue": ($event) => isRef(activeQuestion) ? activeQuestion.value = $event : null,
                                  multiple: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(faq.faqs, (item) => {
                                      return openBlock(), createBlock(VExpansionPanel, {
                                        key: item.question,
                                        title: item.question,
                                        text: item.answer
                                      }, null, 8, ["title", "text"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindow, {
                      modelValue: unref(activeTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                      class: "faq-v-window disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                          return openBlock(), createBlock(VWindowItem, {
                            key: faq.faqTitle,
                            value: faq.faqTitle
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center mb-4 gap-x-4" }, [
                                createVNode(VAvatar, {
                                  rounded: "lg",
                                  color: "primary",
                                  variant: "tonal",
                                  size: "50"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: 30,
                                      icon: faq.faqIcon
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(faq.faqTitle), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(faq.faqSubtitle), 1)
                                ])
                              ]),
                              createVNode(VExpansionPanels, {
                                modelValue: unref(activeQuestion),
                                "onUpdate:modelValue": ($event) => isRef(activeQuestion) ? activeQuestion.value = $event : null,
                                multiple: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(faq.faqs, (item) => {
                                    return openBlock(), createBlock(VExpansionPanel, {
                                      key: item.question,
                                      title: item.question,
                                      text: item.answer
                                    }, null, 8, ["title", "text"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              style: !unref(faqs).length ? null : { display: "none" },
              cols: "12",
              class: !unref(faqs).length ? "d-flex justify-center align-center" : ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-question-line",
                    start: "",
                    size: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-base font-weight-medium"${_scopeId2}> No Results Found!! </span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-question-line",
                      start: "",
                      size: "20"
                    }),
                    createVNode("span", { class: "text-base font-weight-medium" }, " No Results Found!! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(VCol, {
                cols: "12",
                md: "3",
                sm: "5",
                class: "position-relative"
              }, {
                default: withCtx(() => [
                  createVNode(VTabs, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    direction: "vertical",
                    class: "v-tabs-pill"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                        return openBlock(), createBlock(VTab, {
                          key: faq.faqTitle,
                          value: faq.faqTitle
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: faq.faqIcon,
                              start: ""
                            }, null, 8, ["icon"]),
                            createTextVNode(" " + toDisplayString(faq.faqTitle), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VImg, {
                    height: "195",
                    src: unref(faqIllustration),
                    class: "d-none d-sm-block mt-4"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 512), [
                [vShow, unref(faqs).length]
              ]),
              createVNode(VCol, {
                cols: "12",
                md: "9",
                sm: "7"
              }, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    class: "faq-v-window disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                        return openBlock(), createBlock(VWindowItem, {
                          key: faq.faqTitle,
                          value: faq.faqTitle
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center mb-4 gap-x-4" }, [
                              createVNode(VAvatar, {
                                rounded: "lg",
                                color: "primary",
                                variant: "tonal",
                                size: "50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: 30,
                                    icon: faq.faqIcon
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(faq.faqTitle), 1),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(faq.faqSubtitle), 1)
                              ])
                            ]),
                            createVNode(VExpansionPanels, {
                              modelValue: unref(activeQuestion),
                              "onUpdate:modelValue": ($event) => isRef(activeQuestion) ? activeQuestion.value = $event : null,
                              multiple: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(faq.faqs, (item) => {
                                  return openBlock(), createBlock(VExpansionPanel, {
                                    key: item.question,
                                    title: item.question,
                                    text: item.answer
                                  }, null, 8, ["title", "text"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              withDirectives(createVNode(VCol, {
                cols: "12",
                class: !unref(faqs).length ? "d-flex justify-center align-center" : ""
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-question-line",
                    start: "",
                    size: "20"
                  }),
                  createVNode("span", { class: "text-base font-weight-medium" }, " No Results Found!! ")
                ]),
                _: 1
              }, 8, ["class"]), [
                [vShow, !unref(faqs).length]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center mt-6"><div class="py-6">`);
      _push(ssrRenderComponent(VChip, {
        color: "primary",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Question `);
          } else {
            return [
              createTextVNode(" Question ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="text-h4 my-2"> You still have a question? </h4><p class="text-body-1 mb-0"> If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly! </p></div>`);
      _push(ssrRenderComponent(VRow, { class: "mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(contactUs, (contact) => {
              _push2(ssrRenderComponent(VCol, {
                key: contact.icon,
                sm: "6",
                cols: "12"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      flat: "",
                      color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  size: "50",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: contact.icon,
                                        size: "30"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: contact.icon,
                                          size: "30"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h5 mb-1"${_scopeId4}>${ssrInterpolate(contact.via)}</h5><div class="text-body-1"${_scopeId4}>${ssrInterpolate(contact.tagLine)}</div>`);
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    size: "50",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: contact.icon,
                                        size: "30"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(contact.via), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(contact.tagLine), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "pa-6" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  size: "50",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: contact.icon,
                                      size: "30"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(contact.via), 1),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(contact.tagLine), 1)
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
                        color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pa-6" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                rounded: "",
                                color: "primary",
                                variant: "tonal",
                                size: "50",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: contact.icon,
                                    size: "30"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(contact.via), 1),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(contact.tagLine), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(contactUs, (contact) => {
                return createVNode(VCol, {
                  key: contact.icon,
                  sm: "6",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      flat: "",
                      color: "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "pa-6" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              color: "primary",
                              variant: "tonal",
                              size: "50",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: contact.icon,
                                  size: "30"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(contact.via), 1),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(contact.tagLine), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
