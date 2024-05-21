import { ref, watch, defineAsyncComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import Shepherd from "shepherd.js";
import { withQuery } from "ufo";
import { u as useConfigStore, a as VIcon } from "../ssr.js";
import { useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VList, a as VListItem, b as VListItemTitle, d as VListSubheader } from "./VList-Bay5Fixr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
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
import "vue3-perfect-scrollbar";
import "@antfu/utils";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
/* empty css               */
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  // 👉 Is App Search Bar Visible
  inheritAttrs: false
}, {
  __name: "NavSearchBar",
  __ssrInlineRender: true,
  setup(__props) {
    const configStore = useConfigStore();
    const isAppSearchBarVisible = ref(false);
    const suggestionGroups = [
      {
        title: "Popular Searches",
        content: [
          {
            icon: "ri-bar-chart-line",
            title: "Analytics",
            url: { name: "dashboards-analytics" }
          },
          {
            icon: "ri-pie-chart-2-line",
            title: "CRM",
            url: { name: "dashboards-crm" }
          },
          {
            icon: "ri-shopping-bag-3-line",
            title: "eCommerce",
            url: { name: "dashboards-ecommerce" }
          },
          {
            icon: "ri-car-line",
            title: "Logistics",
            url: { name: "apps-logistics-dashboard" }
          }
        ]
      },
      {
        title: "Apps & Pages",
        content: [
          {
            icon: "ri-calendar-line",
            title: "Calendar",
            url: { name: "apps-calendar" }
          },
          {
            icon: "ri-lock-unlock-line",
            title: "Roles & Permissions",
            url: { name: "apps-roles" }
          },
          {
            icon: "ri-settings-4-line",
            title: "Account Settings",
            url: {
              name: "pages-account-settings-tab",
              params: { tab: "account" }
            }
          },
          {
            icon: "ri-file-copy-line",
            title: "Dialog Examples",
            url: { name: "pages-dialog-examples" }
          }
        ]
      },
      {
        title: "User Interface",
        content: [
          {
            icon: "ri-text",
            title: "Typography",
            url: { name: "pages-typography" }
          },
          {
            icon: "ri-menu-line",
            title: "Accordion",
            url: { name: "components-expansion-panel" }
          },
          {
            icon: "ri-alert-line",
            title: "Alerts",
            url: { name: "components-alert" }
          },
          {
            icon: "ri-checkbox-blank-line",
            title: "Cards",
            url: { name: "pages-cards-card-basic" }
          }
        ]
      },
      {
        title: "Forms & Tables",
        content: [
          {
            icon: "ri-radio-button-line",
            title: "Radio",
            url: { name: "forms-radio" }
          },
          {
            icon: "ri-file-text-line",
            title: "Form Layouts",
            url: { name: "forms-form-layouts" }
          },
          {
            icon: "ri-table-line",
            title: "Table",
            url: { name: "tables-simple-table" }
          },
          {
            icon: "ri-edit-box-line",
            title: "Editor",
            url: { name: "forms-editors" }
          }
        ]
      }
    ];
    const noDataSuggestions = [
      {
        title: "Analytics",
        icon: "ri-bar-chart-line",
        url: { name: "dashboards-analytics" }
      },
      {
        title: "CRM",
        icon: "ri-pie-chart-2-line",
        url: { name: "dashboards-crm" }
      },
      {
        title: "eCommerce",
        icon: "ri-shopping-bag-3-line",
        url: { name: "dashboards-ecommerce" }
      }
    ];
    const searchQuery = ref("");
    const router = useRouter();
    const searchResult = ref([]);
    const isLoading = ref(false);
    const fetchResults = async () => {
      isLoading.value = true;
      const { data } = await useApi(withQuery("/app-bar/search", { q: searchQuery.value }));
      searchResult.value = data.value;
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    };
    watch(searchQuery, fetchResults);
    const redirectToSuggestedOrSearchedPage = (selected) => {
      router.push(selected.url);
      isAppSearchBarVisible.value = false;
      searchQuery.value = "";
    };
    const LazyAppBarSearch = defineAsyncComponent(() => import("./AppBarSearch-Bw5ikOaO.js"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center cursor-pointer gap-x-2" }, _ctx.$attrs, { style: { "user-select": "none" } }))}>`);
      _push(ssrRenderComponent(_component_IconBtn, {
        onClick: ($event) => {
          var _a;
          return (_a = unref(Shepherd).activeTour) == null ? void 0 : _a.cancel();
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-search-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-search-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(configStore).appContentLayoutNav === "vertical") {
        _push(`<div class="d-none d-md-flex text-disabled text-body-1 gap-x-2"><div> Search </div><div class="meta-key"> ⌘K </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(LazyAppBarSearch), {
        isDialogVisible: unref(isAppSearchBarVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isAppSearchBarVisible) ? isAppSearchBarVisible.value = $event : null,
        "search-results": unref(searchResult),
        "is-loading": unref(isLoading),
        onSearch: ($event) => searchQuery.value = $event
      }, {
        suggestions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "app-bar-search-suggestions pa-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (suggestionGroups) {
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(suggestionGroups, (suggestion) => {
                            _push4(ssrRenderComponent(VCol, {
                              key: suggestion.title,
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<p class="custom-letter-spacing text-xs text-disabled text-uppercase py-2 px-4 mb-0"${_scopeId4}>${ssrInterpolate(suggestion.title)}</p>`);
                                  _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(suggestion.content, (item) => {
                                          _push6(ssrRenderComponent(VListItem, {
                                            key: item.title,
                                            link: "",
                                            class: "app-bar-search-suggestion mx-4 mt-2",
                                            onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                          }, {
                                            prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VIcon, {
                                                  icon: item.icon,
                                                  size: "20",
                                                  class: "me-n1"
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    icon: item.icon,
                                                    size: "20",
                                                    class: "me-n1"
                                                  }, null, 8, ["icon"])
                                                ];
                                              }
                                            }),
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VListItemTitle, null, {
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
                                                  createVNode(VListItemTitle, null, {
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
                                          (openBlock(true), createBlock(Fragment, null, renderList(suggestion.content, (item) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: item.title,
                                              link: "",
                                              class: "app-bar-search-suggestion mx-4 mt-2",
                                              onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: item.icon,
                                                  size: "20",
                                                  class: "me-n1"
                                                }, null, 8, ["icon"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode("p", { class: "custom-letter-spacing text-xs text-disabled text-uppercase py-2 px-4 mb-0" }, toDisplayString(suggestion.title), 1),
                                    createVNode(VList, { class: "card-list" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(suggestion.content, (item) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: item.title,
                                            link: "",
                                            class: "app-bar-search-suggestion mx-4 mt-2",
                                            onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: item.icon,
                                                size: "20",
                                                class: "me-n1"
                                              }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(suggestionGroups, (suggestion) => {
                              return createVNode(VCol, {
                                key: suggestion.title,
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "custom-letter-spacing text-xs text-disabled text-uppercase py-2 px-4 mb-0" }, toDisplayString(suggestion.title), 1),
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(suggestion.content, (item) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: item.title,
                                          link: "",
                                          class: "app-bar-search-suggestion mx-4 mt-2",
                                          onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: item.icon,
                                              size: "20",
                                              class: "me-n1"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]);
                                      }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    suggestionGroups ? (openBlock(), createBlock(VRow, { key: 0 }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(suggestionGroups, (suggestion) => {
                          return createVNode(VCol, {
                            key: suggestion.title,
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "custom-letter-spacing text-xs text-disabled text-uppercase py-2 px-4 mb-0" }, toDisplayString(suggestion.title), 1),
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(suggestion.content, (item) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: item.title,
                                      link: "",
                                      class: "app-bar-search-suggestion mx-4 mt-2",
                                      onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "20",
                                          class: "me-n1"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, { class: "app-bar-search-suggestions pa-12" }, {
                default: withCtx(() => [
                  suggestionGroups ? (openBlock(), createBlock(VRow, { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(suggestionGroups, (suggestion) => {
                        return createVNode(VCol, {
                          key: suggestion.title,
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "custom-letter-spacing text-xs text-disabled text-uppercase py-2 px-4 mb-0" }, toDisplayString(suggestion.title), 1),
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(suggestion.content, (item) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    link: "",
                                    class: "app-bar-search-suggestion mx-4 mt-2",
                                    onClick: ($event) => redirectToSuggestedOrSearchedPage(item)
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "20",
                                        class: "me-n1"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        noDataSuggestion: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-6"${_scopeId}><div class="text-center text-disabled py-2"${_scopeId}> Try searching for </div><!--[-->`);
            ssrRenderList(noDataSuggestions, (suggestion) => {
              _push2(`<h6 class="app-bar-search-suggestion text-h6 font-weight-regular cursor-pointer py-2 px-4"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                size: "20",
                icon: suggestion.icon,
                class: "me-2"
              }, null, _parent2, _scopeId));
              _push2(`<span class="d-inline-block"${_scopeId}>${ssrInterpolate(suggestion.title)}</span></h6>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-6" }, [
                createVNode("div", { class: "text-center text-disabled py-2" }, " Try searching for "),
                (openBlock(), createBlock(Fragment, null, renderList(noDataSuggestions, (suggestion) => {
                  return createVNode("h6", {
                    key: suggestion.title,
                    class: "app-bar-search-suggestion text-h6 font-weight-regular cursor-pointer py-2 px-4",
                    onClick: ($event) => redirectToSuggestedOrSearchedPage(suggestion)
                  }, [
                    createVNode(VIcon, {
                      size: "20",
                      icon: suggestion.icon,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    createVNode("span", { class: "d-inline-block" }, toDisplayString(suggestion.title), 1)
                  ], 8, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        searchResult: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListSubheader, { class: "text-disabled custom-letter-spacing font-weight-regular ps-4" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(item.children, (list) => {
              _push2(ssrRenderComponent(VListItem, {
                key: list.title,
                onClick: ($event) => redirectToSuggestedOrSearchedPage(list)
              }, {
                prepend: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "20",
                      icon: list.icon,
                      class: "me-n1"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "20",
                        icon: list.icon,
                        class: "me-n1"
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                append: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "20",
                      icon: "ri-corner-down-left-line",
                      class: "enter-icon text-medium-emphasis"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "20",
                        icon: "ri-corner-down-left-line",
                        class: "enter-icon text-medium-emphasis"
                      })
                    ];
                  }
                }),
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(list.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(list.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(list.title), 1)
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
              createVNode(VListSubheader, { class: "text-disabled custom-letter-spacing font-weight-regular ps-4" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.title), 1)
                ]),
                _: 2
              }, 1024),
              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (list) => {
                return openBlock(), createBlock(VListItem, {
                  key: list.title,
                  onClick: ($event) => redirectToSuggestedOrSearchedPage(list)
                }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, {
                      size: "20",
                      icon: list.icon,
                      class: "me-n1"
                    }, null, 8, ["icon"])
                  ]),
                  append: withCtx(() => [
                    createVNode(VIcon, {
                      size: "20",
                      icon: "ri-corner-down-left-line",
                      class: "enter-icon text-medium-emphasis"
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(VListItemTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(list.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/components/NavSearchBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
