import { _ as _sfc_main$4 } from "./AppSearchHeader-lTUlkO8j.js";
import { withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, mergeProps, resolveComponent, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./front-page-navbar-Zyu6fQg-.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VBtn, _ as _export_sfc, a as VIcon, u as useConfigStore } from "../ssr.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./VSheet-BoIzvRsi.js";
import "./VForm-J0SV9LXx.js";
import "./VChip-BFfBWJ68.js";
import "./VSlideGroup-Bvz86g7R.js";
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
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./VToolbar-BfF0JSVH.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "ofetch";
const _sfc_main$3 = {
  __name: "HelpCenterLandingArticlesOverview",
  __ssrInlineRender: true,
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.articles, (article) => {
              _push2(ssrRenderComponent(VCol, {
                key: article.title,
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, {
                      flat: "",
                      border: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "align-center text-center d-flex flex-column gap-3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: article.img,
                                  alt: "images",
                                  height: "58",
                                  width: "58"
                                }, null, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h5"${_scopeId4}>${ssrInterpolate(article.title)}</h5><p class="clamp-text text-body-1 mb-0 mx-auto"${_scopeId4}>${ssrInterpolate(article.subtitle)}</p>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "outlined",
                                  to: {
                                    name: "front-pages-help-center-article-title",
                                    params: {
                                      title: "how-to-add-product-in-cart"
                                    }
                                  }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Read More `);
                                    } else {
                                      return [
                                        createTextVNode(" Read More ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: article.img,
                                    alt: "images",
                                    height: "58",
                                    width: "58"
                                  }, null, 8, ["src"]),
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(article.title), 1),
                                  createVNode("p", { class: "clamp-text text-body-1 mb-0 mx-auto" }, toDisplayString(article.subtitle), 1),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    to: {
                                      name: "front-pages-help-center-article-title",
                                      params: {
                                        title: "how-to-add-product-in-cart"
                                      }
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Read More ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "align-center text-center d-flex flex-column gap-3" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: article.img,
                                  alt: "images",
                                  height: "58",
                                  width: "58"
                                }, null, 8, ["src"]),
                                createVNode("h5", { class: "text-h5" }, toDisplayString(article.title), 1),
                                createVNode("p", { class: "clamp-text text-body-1 mb-0 mx-auto" }, toDisplayString(article.subtitle), 1),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  to: {
                                    name: "front-pages-help-center-article-title",
                                    params: {
                                      title: "how-to-add-product-in-cart"
                                    }
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Read More ")
                                  ]),
                                  _: 1
                                })
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
                        border: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "align-center text-center d-flex flex-column gap-3" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: article.img,
                                alt: "images",
                                height: "58",
                                width: "58"
                              }, null, 8, ["src"]),
                              createVNode("h5", { class: "text-h5" }, toDisplayString(article.title), 1),
                              createVNode("p", { class: "clamp-text text-body-1 mb-0 mx-auto" }, toDisplayString(article.subtitle), 1),
                              createVNode(VBtn, {
                                variant: "outlined",
                                to: {
                                  name: "front-pages-help-center-article-title",
                                  params: {
                                    title: "how-to-add-product-in-cart"
                                  }
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Read More ")
                                ]),
                                _: 1
                              })
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
              (openBlock(true), createBlock(Fragment, null, renderList(props.articles, (article) => {
                return openBlock(), createBlock(VCol, {
                  key: article.title,
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      flat: "",
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "align-center text-center d-flex flex-column gap-3" }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: article.img,
                              alt: "images",
                              height: "58",
                              width: "58"
                            }, null, 8, ["src"]),
                            createVNode("h5", { class: "text-h5" }, toDisplayString(article.title), 1),
                            createVNode("p", { class: "clamp-text text-body-1 mb-0 mx-auto" }, toDisplayString(article.subtitle), 1),
                            createVNode(VBtn, {
                              variant: "outlined",
                              to: {
                                name: "front-pages-help-center-article-title",
                                params: {
                                  title: "how-to-add-product-in-cart"
                                }
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Read More ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024)
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
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/help-center/HelpCenterLandingArticlesOverview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "text-center",
    style: { "padding-block": "5.25rem" }
  }, _attrs))}>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-h4 text-center mb-4"${_scopeId}> Still need help? </h4><p class="text-body-1 text-wrap"${_scopeId}> Our specialists are always happy to help. <br${_scopeId}> Contact us during standard business hours or email us 24/7 and we&#39;ll get back to you. </p><div class="d-flex justify-center gap-4 flex-wrap"${_scopeId}>`);
        _push2(ssrRenderComponent(VBtn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Visit our community`);
            } else {
              return [
                createTextVNode("Visit our community")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VBtn, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Contact us`);
            } else {
              return [
                createTextVNode("Contact us")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("h4", { class: "text-h4 text-center mb-4" }, " Still need help? "),
          createVNode("p", { class: "text-body-1 text-wrap" }, [
            createTextVNode(" Our specialists are always happy to help. "),
            createVNode("br"),
            createTextVNode(" Contact us during standard business hours or email us 24/7 and we'll get back to you. ")
          ]),
          createVNode("div", { class: "d-flex justify-center gap-4 flex-wrap" }, [
            createVNode(VBtn, null, {
              default: withCtx(() => [
                createTextVNode("Visit our community")
              ]),
              _: 1
            }),
            createVNode(VBtn, null, {
              default: withCtx(() => [
                createTextVNode("Contact us")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/help-center/HelpCenterLandingFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HelpCenterLandingFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "HelpCenterLandingKnowledgeBase",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.categories, (article) => {
              _push2(ssrRenderComponent(VCol, {
                key: article.title,
                cols: "12",
                sm: "6",
                lg: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  class: "me-3",
                                  size: "32"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: article.icon,
                                        size: "20"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: article.icon,
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(article.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(article.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(VAvatar, {
                                      rounded: "",
                                      color: "primary",
                                      variant: "tonal",
                                      class: "me-3",
                                      size: "32"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: article.icon,
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(article.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(article.articles, (item, index2) => {
                                        _push6(ssrRenderComponent(VListItem, { key: index2 }, {
                                          append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VIcon, {
                                                icon: "ri-arrow-right-s-line",
                                                size: "20",
                                                class: "text-disabled"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-right-s-line",
                                                  size: "20",
                                                  class: "text-disabled"
                                                })
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_RouterLink, {
                                                to: {
                                                  name: "front-pages-help-center-article-title",
                                                  params: {
                                                    title: "how-to-add-product-in-cart"
                                                  }
                                                },
                                                class: "text-high-emphasis"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item.title)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_RouterLink, {
                                                  to: {
                                                    name: "front-pages-help-center-article-title",
                                                    params: {
                                                      title: "how-to-add-product-in-cart"
                                                    }
                                                  },
                                                  class: "text-high-emphasis"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.title), 1)
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(article.articles, (item, index2) => {
                                          return openBlock(), createBlock(VListItem, { key: index2 }, {
                                            append: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-s-line",
                                                size: "20",
                                                class: "text-disabled"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_RouterLink, {
                                                to: {
                                                  name: "front-pages-help-center-article-title",
                                                  params: {
                                                    title: "how-to-add-product-in-cart"
                                                  }
                                                },
                                                class: "text-high-emphasis"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
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
                                _push5(`<div class="text-base font-weight-medium mt-6 d-flex align-center gap-x-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_RouterLink, { to: {
                                  name: "front-pages-help-center-article-title",
                                  params: {
                                    title: "how-to-add-product-in-cart"
                                  }
                                } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center gap-x-3"${_scopeId5}><div${_scopeId5}> See all ${ssrInterpolate(article.articles.length)} Articles </div>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        size: "18",
                                        color: "primary"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                          createVNode("div", null, " See all " + toDisplayString(article.articles.length) + " Articles ", 1),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-line",
                                            size: "18",
                                            color: "primary"
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(article.articles, (item, index2) => {
                                        return openBlock(), createBlock(VListItem, { key: index2 }, {
                                          append: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-s-line",
                                              size: "20",
                                              class: "text-disabled"
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_RouterLink, {
                                              to: {
                                                name: "front-pages-help-center-article-title",
                                                params: {
                                                  title: "how-to-add-product-in-cart"
                                                }
                                              },
                                              class: "text-high-emphasis"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
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
                                  createVNode("div", { class: "text-base font-weight-medium mt-6 d-flex align-center gap-x-3" }, [
                                    createVNode(_component_RouterLink, { to: {
                                      name: "front-pages-help-center-article-title",
                                      params: {
                                        title: "how-to-add-product-in-cart"
                                      }
                                    } }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                          createVNode("div", null, " See all " + toDisplayString(article.articles.length) + " Articles ", 1),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-line",
                                            size: "18",
                                            color: "primary"
                                          })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardItem, { class: "pb-6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    class: "me-3",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: article.icon,
                                        size: "20"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(article.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(article.articles, (item, index2) => {
                                      return openBlock(), createBlock(VListItem, { key: index2 }, {
                                        append: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-s-line",
                                            size: "20",
                                            class: "text-disabled"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_RouterLink, {
                                            to: {
                                              name: "front-pages-help-center-article-title",
                                              params: {
                                                title: "how-to-add-product-in-cart"
                                              }
                                            },
                                            class: "text-high-emphasis"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
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
                                createVNode("div", { class: "text-base font-weight-medium mt-6 d-flex align-center gap-x-3" }, [
                                  createVNode(_component_RouterLink, { to: {
                                    name: "front-pages-help-center-article-title",
                                    params: {
                                      title: "how-to-add-product-in-cart"
                                    }
                                  } }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                        createVNode("div", null, " See all " + toDisplayString(article.articles.length) + " Articles ", 1),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          size: "18",
                                          color: "primary"
                                        })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
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
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  class: "me-3",
                                  size: "32"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: article.icon,
                                      size: "20"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(article.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(article.articles, (item, index2) => {
                                    return openBlock(), createBlock(VListItem, { key: index2 }, {
                                      append: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-s-line",
                                          size: "20",
                                          class: "text-disabled"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_RouterLink, {
                                          to: {
                                            name: "front-pages-help-center-article-title",
                                            params: {
                                              title: "how-to-add-product-in-cart"
                                            }
                                          },
                                          class: "text-high-emphasis"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
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
                              createVNode("div", { class: "text-base font-weight-medium mt-6 d-flex align-center gap-x-3" }, [
                                createVNode(_component_RouterLink, { to: {
                                  name: "front-pages-help-center-article-title",
                                  params: {
                                    title: "how-to-add-product-in-cart"
                                  }
                                } }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                      createVNode("div", null, " See all " + toDisplayString(article.articles.length) + " Articles ", 1),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        size: "18",
                                        color: "primary"
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(props.categories, (article) => {
                return openBlock(), createBlock(VCol, {
                  key: article.title,
                  cols: "12",
                  sm: "6",
                  lg: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                color: "primary",
                                variant: "tonal",
                                class: "me-3",
                                size: "32"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: article.icon,
                                    size: "20"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(article.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(article.articles, (item, index2) => {
                                  return openBlock(), createBlock(VListItem, { key: index2 }, {
                                    append: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-s-line",
                                        size: "20",
                                        class: "text-disabled"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_RouterLink, {
                                        to: {
                                          name: "front-pages-help-center-article-title",
                                          params: {
                                            title: "how-to-add-product-in-cart"
                                          }
                                        },
                                        class: "text-high-emphasis"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
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
                            createVNode("div", { class: "text-base font-weight-medium mt-6 d-flex align-center gap-x-3" }, [
                              createVNode(_component_RouterLink, { to: {
                                name: "front-pages-help-center-article-title",
                                params: {
                                  title: "how-to-add-product-in-cart"
                                }
                              } }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                                    createVNode("div", null, " See all " + toDisplayString(article.articles.length) + " Articles ", 1),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-line",
                                      size: "18",
                                      color: "primary"
                                    })
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024)
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
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/help-center/HelpCenterLandingKnowledgeBase.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useConfigStore();
    store.skin = "default";
    const apiData = ref();
    setTimeout(async () => {
      const faqData = await $api("/pages/help-center");
      apiData.value = faqData;
    }, 1e3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSearchHeader = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-center-page" }, _attrs))} data-v-c5641e01>`);
      _push(ssrRenderComponent(Navbar, { "navbar-initial-opacity": 1 }, null, _parent));
      if (unref(apiData)) {
        _push(`<div data-v-c5641e01>`);
        _push(ssrRenderComponent(_component_AppSearchHeader, {
          title: "Hello, how can we help?",
          subtitle: "Common troubleshooting topics: eCommerce, Blogging to payment",
          "custom-class": "rounded-0"
        }, null, _parent));
        _push(`<div class="bg-surface help-center-section" data-v-c5641e01>`);
        _push(ssrRenderComponent(VContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="text-h4 text-center mb-6" data-v-c5641e01${_scopeId}> Popular Articles </h4>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                articles: unref(apiData).popularArticles
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("h4", { class: "text-h4 text-center mb-6" }, " Popular Articles "),
                createVNode(_sfc_main$3, {
                  articles: unref(apiData).popularArticles
                }, null, 8, ["articles"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="help-center-section" data-v-c5641e01>`);
        _push(ssrRenderComponent(VContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="text-h4 text-center mb-6" data-v-c5641e01${_scopeId}> Knowledge Base </h4>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                categories: unref(apiData).allArticles
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("h4", { class: "text-h4 text-center mb-6" }, " Knowledge Base "),
                createVNode(_sfc_main$1, {
                  categories: unref(apiData).allArticles
                }, null, 8, ["categories"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-surface help-center-section" data-v-c5641e01>`);
        _push(ssrRenderComponent(VContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="text-h4 text-center mb-6" data-v-c5641e01${_scopeId}> Keep Learning </h4>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                articles: unref(apiData).keepLearning
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("h4", { class: "text-h4 text-center mb-6" }, " Keep Learning "),
                createVNode(_sfc_main$3, {
                  articles: unref(apiData).keepLearning
                }, null, 8, ["articles"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(HelpCenterLandingFooter, null, null, _parent));
        _push(ssrRenderComponent(Footer, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/front-pages/help-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5641e01"]]);
export {
  index as default
};
