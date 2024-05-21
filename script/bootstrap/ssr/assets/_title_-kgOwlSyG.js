import { createVNode, computed, toRef, Fragment, mergeProps, ref, unref, withCtx, toDisplayString, createTextVNode, openBlock, createBlock, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { N as Navbar, F as Footer } from "./front-page-navbar-Zyu6fQg-.js";
import { C as propsFactory, D as makeComponentProps, E as genericComponent, F as useRender, a7 as makeRouterProps, G as makeTagProps, aj as useLink, ax as useTextColor, $ as IconValue, a0 as makeDensityProps, R as makeRoundedProps, T as useBackgroundColor, ae as useDensity, U as useRounded, Z as provideDefaults, a as VIcon, a1 as VDefaultsProvider, _ as _export_sfc, u as useConfigStore } from "../ssr.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { V as VContainer } from "./VContainer-BftUnCnW.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import "./VSheet-BoIzvRsi.js";
import "./VRow-DasIRXDq.js";
/* empty css               */
import "./VForm-J0SV9LXx.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./VChip-BFfBWJ68.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAvatar-D2wIwigQ.js";
import "@vueuse/core";
import "vue3-perfect-scrollbar";
import "./NavbarThemeSwitcher-CmYbn-Kr.js";
import "./VTooltip-CVKEAyhs.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
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
import "./VNavigationDrawer-CX2Ouxxa.js";
import "./VToolbar-BfF0JSVH.js";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VSpacer-DCJACtOB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
const makeVBreadcrumbsDividerProps = propsFactory({
  divider: [Number, String],
  ...makeComponentProps()
}, "VBreadcrumbsDivider");
const VBreadcrumbsDivider = genericComponent()({
  name: "VBreadcrumbsDivider",
  props: makeVBreadcrumbsDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("li", {
        "class": ["v-breadcrumbs-divider", props.class],
        "style": props.style
      }, [((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) ?? props.divider]);
    });
    return {};
  }
});
const makeVBreadcrumbsItemProps = propsFactory({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeRouterProps(),
  ...makeTagProps({
    tag: "li"
  })
}, "VBreadcrumbsItem");
const VBreadcrumbsItem = genericComponent()({
  name: "VBreadcrumbsItem",
  props: makeVBreadcrumbsItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      return props.active || ((_a = link.isActive) == null ? void 0 : _a.value);
    });
    const color = computed(() => isActive.value ? props.activeColor : props.color);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs-item", {
          "v-breadcrumbs-item--active": isActive.value,
          "v-breadcrumbs-item--disabled": props.disabled,
          [`${props.activeClass}`]: isActive.value && props.activeClass
        }, textColorClasses.value, props.class],
        "style": [textColorStyles.value, props.style],
        "aria-current": isActive.value ? "page" : void 0
      }, {
        default: () => {
          var _a, _b;
          return [!link.isLink.value ? ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title : createVNode("a", {
            "class": "v-breadcrumbs-item--link",
            "href": link.href.value,
            "aria-current": isActive.value ? "page" : void 0,
            "onClick": link.navigate
          }, [((_b = slots.default) == null ? void 0 : _b.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});
const makeVBreadcrumbsProps = propsFactory({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: IconValue,
  items: {
    type: Array,
    default: () => []
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "ul"
  })
}, "VBreadcrumbs");
const VBreadcrumbs = genericComponent()({
  name: "VBreadcrumbs",
  props: makeVBreadcrumbsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBreadcrumbsDivider: {
        divider: toRef(props, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor: toRef(props, "activeColor"),
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled")
      }
    });
    const items = computed(() => props.items.map((item) => {
      return typeof item === "string" ? {
        item: {
          title: item
        },
        raw: item
      } : {
        item,
        raw: item
      };
    }));
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.icon);
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs", backgroundColorClasses.value, densityClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [hasPrepend && createVNode("li", {
            "key": "prepend",
            "class": "v-breadcrumbs__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "start": true,
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.icon,
            "defaults": {
              VIcon: {
                icon: props.icon,
                start: true
              }
            }
          }, slots.prepend)]), items.value.map((_ref2, index, array) => {
            var _a2;
            let {
              item,
              raw
            } = _ref2;
            return createVNode(Fragment, null, [((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item,
              index
            })) ?? createVNode(VBreadcrumbsItem, mergeProps({
              "key": index,
              "disabled": index >= array.length - 1
            }, typeof item === "string" ? {
              title: item
            } : item), {
              default: slots.title ? () => {
                var _a3;
                return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
                  item,
                  index
                });
              } : void 0
            }), index < array.length - 1 && createVNode(VBreadcrumbsDivider, null, {
              default: slots.divider ? () => {
                var _a3;
                return (_a3 = slots.divider) == null ? void 0 : _a3.call(slots, {
                  item: raw,
                  index
                });
              } : void 0
            })]);
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "[title]",
  __ssrInlineRender: true,
  setup(__props) {
    const breadCrumbItems = [
      {
        title: "Help Center",
        to: { name: "front-pages-help-center" }
      },
      { title: "Buying and item support" },
      { title: "Template kits" }
    ];
    const store = useConfigStore();
    store.skin = "default";
    const articleData = ref();
    setTimeout(async () => {
      const { data, error } = await useApi("/pages/help-center/article");
      if (error.value)
        console.log(error.value);
      else
        articleData.value = data.value;
    }, 1e3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-surface help-center-article" }, _attrs))} data-v-51fd92ed>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      if (unref(articleData)) {
        _push(ssrRenderComponent(VContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            if (_push2) {
              _push2(`<div class="d-flex gap-6 flex-lg-row flex-column" style="${ssrRenderStyle({ "margin-block": "9.25rem 5.25rem" })}" data-v-51fd92ed${_scopeId}><div data-v-51fd92ed${_scopeId}><div data-v-51fd92ed${_scopeId}>`);
              _push2(ssrRenderComponent(VBreadcrumbs, {
                class: "px-0 pb-2 pt-0 flex-wrap",
                items: breadCrumbItems
              }, {
                item: withCtx(({ item, index }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([index === breadCrumbItems.length - 1 ? "text-high-emphasis" : "text-medium-emphasis", "text-body-1"])}" data-v-51fd92ed${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["text-body-1", index === breadCrumbItems.length - 1 ? "text-high-emphasis" : "text-medium-emphasis"]
                      }, toDisplayString(item.title), 3)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<h4 class="text-h4 mb-2" data-v-51fd92ed${_scopeId}>${ssrInterpolate((_a = unref(articleData)) == null ? void 0 : _a.title)}</h4><div class="text-body-1" data-v-51fd92ed${_scopeId}>${ssrInterpolate((_b = unref(articleData)) == null ? void 0 : _b.lastUpdated)}</div></div>`);
              _push2(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent2, _scopeId));
              _push2(`<div class="mb-6" data-v-51fd92ed${_scopeId}>${((_c = unref(articleData)) == null ? void 0 : _c.productContent) ?? ""}</div>`);
              _push2(ssrRenderComponent(VImg, {
                src: (_d = unref(articleData)) == null ? void 0 : _d.productImg
              }, null, _parent2, _scopeId));
              _push2(`<p class="my-6 text-body-1" data-v-51fd92ed${_scopeId}>${ssrInterpolate((_e = unref(articleData)) == null ? void 0 : _e.checkoutContent)}</p>`);
              _push2(ssrRenderComponent(VImg, {
                src: (_f = unref(articleData)) == null ? void 0 : _f.checkoutImg
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({ "min-inline-size": "300px" })}" data-v-51fd92ed${_scopeId}>`);
              _push2(ssrRenderComponent(VTextField, {
                "prepend-inner-icon": "ri-search-line",
                placeholder: "Search...",
                class: "mb-6"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-51fd92ed${_scopeId}><h5 class="text-h5 px-5 py-2 mb-4 rounded-lg" style="${ssrRenderStyle({ "background": "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))" })}" data-v-51fd92ed${_scopeId}> Articles in this section </h5>`);
              _push2(ssrRenderComponent(VList, { class: "card-list" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList((_a2 = unref(articleData)) == null ? void 0 : _a2.articleList, (item, index) => {
                      _push3(ssrRenderComponent(VListItem, {
                        key: index,
                        link: ""
                      }, {
                        append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, {
                              size: "20",
                              icon: "ri-arrow-right-s-line",
                              color: "disabled"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, {
                                size: "20",
                                icon: "ri-arrow-right-s-line",
                                color: "disabled"
                              })
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItemTitle, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(articleData)) == null ? void 0 : _b2.articleList, (item, index) => {
                        return openBlock(), createBlock(VListItem, {
                          key: index,
                          link: ""
                        }, {
                          append: withCtx(() => [
                            createVNode(VIcon, {
                              size: "20",
                              icon: "ri-arrow-right-s-line",
                              color: "disabled"
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
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
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "d-flex gap-6 flex-lg-row flex-column",
                  style: { "margin-block": "9.25rem 5.25rem" }
                }, [
                  createVNode("div", null, [
                    createVNode("div", null, [
                      createVNode(VBreadcrumbs, {
                        class: "px-0 pb-2 pt-0 flex-wrap",
                        items: breadCrumbItems
                      }, {
                        item: withCtx(({ item, index }) => [
                          createVNode("div", {
                            class: ["text-body-1", index === breadCrumbItems.length - 1 ? "text-high-emphasis" : "text-medium-emphasis"]
                          }, toDisplayString(item.title), 3)
                        ]),
                        _: 1
                      }),
                      createVNode("h4", { class: "text-h4 mb-2" }, toDisplayString((_g = unref(articleData)) == null ? void 0 : _g.title), 1),
                      createVNode("div", { class: "text-body-1" }, toDisplayString((_h = unref(articleData)) == null ? void 0 : _h.lastUpdated), 1)
                    ]),
                    createVNode(VDivider, { class: "my-6" }),
                    createVNode("div", {
                      class: "mb-6",
                      innerHTML: (_i = unref(articleData)) == null ? void 0 : _i.productContent
                    }, null, 8, ["innerHTML"]),
                    createVNode(VImg, {
                      src: (_j = unref(articleData)) == null ? void 0 : _j.productImg
                    }, null, 8, ["src"]),
                    createVNode("p", { class: "my-6 text-body-1" }, toDisplayString((_k = unref(articleData)) == null ? void 0 : _k.checkoutContent), 1),
                    createVNode(VImg, {
                      src: (_l = unref(articleData)) == null ? void 0 : _l.checkoutImg
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { style: { "min-inline-size": "300px" } }, [
                    createVNode(VTextField, {
                      "prepend-inner-icon": "ri-search-line",
                      placeholder: "Search...",
                      class: "mb-6"
                    }),
                    createVNode("div", null, [
                      createVNode("h5", {
                        class: "text-h5 px-5 py-2 mb-4 rounded-lg",
                        style: { "background": "rgba(var(--v-theme-on-surface), var(--v-hover-opacity))" }
                      }, " Articles in this section "),
                      createVNode(VList, { class: "card-list" }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(articleData)) == null ? void 0 : _a2.articleList, (item, index) => {
                              return openBlock(), createBlock(VListItem, {
                                key: index,
                                link: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-arrow-right-s-line",
                                    color: "disabled"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/front-pages/help-center/article/[title].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _title_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51fd92ed"]]);
export {
  _title_ as default
};
