import { useSSRContext, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeProps, createTextVNode, createCommentVNode, ref, unref, isRef } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle, d as VListSubheader, e as VListGroup } from "./VList-Bay5Fixr.js";
import { a as VIcon, g as VProgressLinear, V as VBtn, c as avatar1, d as avatar2, e as avatar3, f as avatar4, _ as _export_sfc } from "../ssr.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { _ as _sfc_main$c } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VImg-D-rbsD1g.js";
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
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
/* empty css               */
const _sfc_main$b = {
  __name: "DemoListShaped",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        text: "Cupcake sesame snaps dessert marzipan.",
        icon: "ri-instagram-line"
      },
      {
        text: "Jelly beans jelly-o gummi bears chupa chups marshmallow.",
        icon: "ri-facebook-circle-line"
      },
      {
        text: "Bonbon macaroon gummies pie jelly",
        icon: "ri-twitter-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item, i) => {
              _push2(ssrRenderComponent(VListItem, {
                key: i,
                value: item.text,
                rounded: "shaped"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.icon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: item.icon
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItemTitle, {
                        textContent: toDisplayString(item.text)
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                return createVNode(VListItem, {
                  key: i,
                  value: item.text,
                  rounded: "shaped"
                }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, {
                      icon: item.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: withCtx(() => [
                    createVNode(VListItemTitle, {
                      textContent: toDisplayString(item.text)
                    }, null, 8, ["textContent"])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListShaped.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DemoListProgressList",
  __ssrInlineRender: true,
  setup(__props) {
    const languageProgress = [
      {
        avatar: "ri-reactjs-line",
        title: "React is a JavaScript library for building user interfaces",
        language: "react",
        amount: 90
      },
      {
        avatar: "ri-bootstrap-line",
        title: "Bootstrap is an open source toolkit",
        language: "bootstrap",
        amount: 80
      },
      {
        avatar: "ri-vuejs-line",
        title: "Vue.js is the Progressive JavaScript Framework",
        language: "vue",
        amount: 65
      },
      {
        avatar: "ri-angularjs-line",
        title: "Angular implements Functional Programming concepts",
        language: "angular",
        amount: 75
      },
      {
        avatar: "ri-javascript-line",
        title: "JavaScript is the programming language of the Web",
        language: "javascript",
        amount: 70
      }
    ];
    const resolveStatusColor = {
      react: "info",
      bootstrap: "primary",
      vue: "success",
      angular: "error",
      javascript: "warning"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        lines: "two",
        border: "",
        rounded: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(languageProgress, (progress, index) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(VListItem, null, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "36",
                      rounded: "",
                      variant: "tonal",
                      icon: progress.avatar,
                      color: resolveStatusColor[progress.language]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAvatar, {
                        size: "36",
                        rounded: "",
                        variant: "tonal",
                        icon: progress.avatar,
                        color: resolveStatusColor[progress.language]
                      }, null, 8, ["icon", "color"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(progress.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(progress.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VListItemSubtitle, { class: "mt-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VProgressLinear, {
                            height: "6",
                            rounded: "",
                            "model-value": progress.amount,
                            color: resolveStatusColor[progress.language]
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VProgressLinear, {
                              height: "6",
                              rounded: "",
                              "model-value": progress.amount,
                              color: resolveStatusColor[progress.language]
                            }, null, 8, ["model-value", "color"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(progress.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VListItemSubtitle, { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(VProgressLinear, {
                            height: "6",
                            rounded: "",
                            "model-value": progress.amount,
                            color: resolveStatusColor[progress.language]
                          }, null, 8, ["model-value", "color"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index !== languageProgress.length - 1) {
                _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(languageProgress, (progress, index) => {
                return openBlock(), createBlock(Fragment, {
                  key: progress.language
                }, [
                  createVNode(VListItem, null, {
                    prepend: withCtx(() => [
                      createVNode(VAvatar, {
                        size: "36",
                        rounded: "",
                        variant: "tonal",
                        icon: progress.avatar,
                        color: resolveStatusColor[progress.language]
                      }, null, 8, ["icon", "color"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(progress.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VListItemSubtitle, { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(VProgressLinear, {
                            height: "6",
                            rounded: "",
                            "model-value": progress.amount,
                            color: resolveStatusColor[progress.language]
                          }, null, 8, ["model-value", "color"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  index !== languageProgress.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                ], 64);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListProgressList.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoListUserList",
  __ssrInlineRender: true,
  setup(__props) {
    const users = [
      {
        avatar: avatar1,
        name: "Caroline Black",
        status: "Online",
        lastVisited: "13 minutes ago"
      },
      {
        avatar: avatar2,
        name: "Alfred Copeland",
        status: "Away",
        lastVisited: "11 minutes ago"
      },
      {
        avatar: avatar3,
        name: "Celia Schneider",
        status: "Offline",
        lastVisited: "9 minutes ago"
      },
      {
        avatar: avatar4,
        name: "Max Rogan",
        status: "In Meeting",
        lastVisited: "28 minutes ago"
      }
    ];
    const resolveStatusColor = {
      "Online": "success",
      "Away": "warning",
      "Offline": "secondary",
      "In Meeting": "error"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        lines: "two",
        border: "",
        rounded: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(users, (user, index) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(VListItem, null, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAvatar, {
                      image: user.avatar
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAvatar, {
                        image: user.avatar
                      }, null, 8, ["image"])
                    ];
                  }
                }),
                append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, { size: "small" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Add `);
                        } else {
                          return [
                            createTextVNode(" Add ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBtn, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode(" Add ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(user.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(user.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VListItemSubtitle, { class: "mt-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBadge, {
                            dot: "",
                            location: "start center",
                            "offset-x": "2",
                            color: resolveStatusColor[user.status],
                            class: "me-3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="ms-4"${_scopeId4}>${ssrInterpolate(user.status)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "ms-4" }, toDisplayString(user.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span class="text-xs text-disabled"${_scopeId3}>${ssrInterpolate(user.lastVisited)}</span>`);
                        } else {
                          return [
                            createVNode(VBadge, {
                              dot: "",
                              location: "start center",
                              "offset-x": "2",
                              color: resolveStatusColor[user.status],
                              class: "me-3"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "ms-4" }, toDisplayString(user.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            createVNode("span", { class: "text-xs text-disabled" }, toDisplayString(user.lastVisited), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(user.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VListItemSubtitle, { class: "mt-1" }, {
                        default: withCtx(() => [
                          createVNode(VBadge, {
                            dot: "",
                            location: "start center",
                            "offset-x": "2",
                            color: resolveStatusColor[user.status],
                            class: "me-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ms-4" }, toDisplayString(user.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("span", { class: "text-xs text-disabled" }, toDisplayString(user.lastVisited), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index !== users.length - 1) {
                _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(users, (user, index) => {
                return openBlock(), createBlock(Fragment, {
                  key: user.name
                }, [
                  createVNode(VListItem, null, {
                    prepend: withCtx(() => [
                      createVNode(VAvatar, {
                        image: user.avatar
                      }, null, 8, ["image"])
                    ]),
                    append: withCtx(() => [
                      createVNode(VBtn, { size: "small" }, {
                        default: withCtx(() => [
                          createTextVNode(" Add ")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(user.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VListItemSubtitle, { class: "mt-1" }, {
                        default: withCtx(() => [
                          createVNode(VBadge, {
                            dot: "",
                            location: "start center",
                            "offset-x": "2",
                            color: resolveStatusColor[user.status],
                            class: "me-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ms-4" }, toDisplayString(user.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("span", { class: "text-xs text-disabled" }, toDisplayString(user.lastVisited), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  index !== users.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                ], 64);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListUserList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoListThreeLine",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        type: "subheader",
        title: "Today"
      },
      {
        prependAvatar: avatar1,
        title: "Brunch this weekend?",
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      {
        type: "divider",
        inset: true
      },
      {
        prependAvatar: avatar2,
        title: "Summer BBQ",
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        type: "divider",
        inset: true
      },
      {
        prependAvatar: avatar3,
        title: "Oui oui",
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
      },
      {
        type: "divider",
        inset: true
      },
      {
        prependAvatar: avatar4,
        title: "Birthday gift",
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        lines: "three",
        items,
        "item-props": ""
      }, _attrs), {
        subtitle: withCtx(({ subtitle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${subtitle ?? ""}</div>`);
          } else {
            return [
              createVNode("div", { innerHTML: subtitle }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListThreeLine.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoListTwoLinesAndSubheader",
  __ssrInlineRender: true,
  setup(__props) {
    const files = [
      {
        color: "blue",
        icon: "ri-clipboard-line",
        subtitle: "Jan 20, 2014",
        title: "Vacation itinerary"
      },
      {
        color: "amber",
        icon: "ri-hard-drive-2-line",
        subtitle: "Jan 10, 2014",
        title: "Kitchen remodel"
      }
    ];
    const folders = [
      {
        subtitle: "Jan 9, 2014",
        title: "Photos"
      },
      {
        subtitle: "Jan 17, 2014",
        title: "Recipes"
      },
      {
        subtitle: "Jan 28, 2014",
        title: "Work"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({ lines: "two" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListSubheader, { inset: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Folders `);
                } else {
                  return [
                    createTextVNode(" Folders ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(folders, (folder) => {
              _push2(ssrRenderComponent(VListItem, {
                key: folder.title,
                title: folder.title,
                subtitle: folder.subtitle
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAvatar, {
                      color: "secondary",
                      variant: "tonal"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            size: 26,
                            icon: "ri-folder-line"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              size: 26,
                              icon: "ri-folder-line"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAvatar, {
                        color: "secondary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: 26,
                            icon: "ri-folder-line"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, {
                      variant: "text",
                      color: "default",
                      icon: "ri-information-line"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBtn, {
                        variant: "text",
                        color: "default",
                        icon: "ri-information-line"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VDivider, { inset: "" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VListSubheader, { inset: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Files `);
                } else {
                  return [
                    createTextVNode(" Files ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(files, (file) => {
              _push2(ssrRenderComponent(VListItem, {
                key: file.title,
                title: file.title,
                subtitle: file.subtitle
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAvatar, {
                      color: "secondary",
                      variant: "tonal"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            size: 26,
                            icon: file.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              size: 26,
                              icon: file.icon
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VAvatar, {
                        color: "secondary",
                        variant: "tonal"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: 26,
                            icon: file.icon
                          }, null, 8, ["icon"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, {
                      variant: "text",
                      color: "default",
                      icon: "ri-information-line"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBtn, {
                        variant: "text",
                        color: "default",
                        icon: "ri-information-line"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(VListSubheader, { inset: "" }, {
                default: withCtx(() => [
                  createTextVNode(" Folders ")
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(folders, (folder) => {
                return createVNode(VListItem, {
                  key: folder.title,
                  title: folder.title,
                  subtitle: folder.subtitle
                }, {
                  prepend: withCtx(() => [
                    createVNode(VAvatar, {
                      color: "secondary",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: 26,
                          icon: "ri-folder-line"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  append: withCtx(() => [
                    createVNode(VBtn, {
                      variant: "text",
                      color: "default",
                      icon: "ri-information-line"
                    })
                  ]),
                  _: 2
                }, 1032, ["title", "subtitle"]);
              }), 64)),
              createVNode(VDivider, { inset: "" }),
              createVNode(VListSubheader, { inset: "" }, {
                default: withCtx(() => [
                  createTextVNode(" Files ")
                ]),
                _: 1
              }),
              (openBlock(), createBlock(Fragment, null, renderList(files, (file) => {
                return createVNode(VListItem, {
                  key: file.title,
                  title: file.title,
                  subtitle: file.subtitle
                }, {
                  prepend: withCtx(() => [
                    createVNode(VAvatar, {
                      color: "secondary",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: 26,
                          icon: file.icon
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  append: withCtx(() => [
                    createVNode(VBtn, {
                      variant: "text",
                      color: "default",
                      icon: "ri-information-line"
                    })
                  ]),
                  _: 2
                }, 1032, ["title", "subtitle"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListTwoLinesAndSubheader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoListSubGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref([
      "Users",
      "Admin"
    ]);
    const admins = [
      [
        "Management",
        "ri-group-line"
      ],
      [
        "Settings",
        "ri-settings-5-line"
      ]
    ];
    const cruds = [
      [
        "Create",
        "ri-add-line"
      ],
      [
        "Read",
        "ri-file-line"
      ],
      [
        "Update",
        "ri-refresh-line"
      ],
      [
        "Delete",
        "ri-delete-bin-line"
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        opened: unref(open),
        "onUpdate:opened": ($event) => isRef(open) ? open.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListItem, {
              "prepend-icon": "ri-home-line",
              title: "Home",
              value: "Home"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VListGroup, { value: "Users" }, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, mergeProps(props, {
                    "prepend-icon": "ri-user-line",
                    title: "Users"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItem, mergeProps(props, {
                      "prepend-icon": "ri-user-line",
                      title: "Users"
                    }), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListGroup, { value: "Admin" }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, mergeProps(props, { title: "Admin" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, mergeProps(props, { title: "Admin" }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(admins, ([title, icon], i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: i,
                            value: title,
                            title,
                            "prepend-icon": icon
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(admins, ([title, icon], i) => {
                            return createVNode(VListItem, {
                              key: i,
                              value: title,
                              title,
                              "prepend-icon": icon
                            }, null, 8, ["value", "title", "prepend-icon"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListGroup, { value: "Actions" }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, mergeProps(props, { title: "Actions" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, mergeProps(props, { title: "Actions" }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(cruds, ([title, icon], i) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: i,
                            value: title,
                            title,
                            "prepend-icon": icon
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(cruds, ([title, icon], i) => {
                            return createVNode(VListItem, {
                              key: i,
                              value: title,
                              title,
                              "prepend-icon": icon
                            }, null, 8, ["value", "title", "prepend-icon"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListGroup, { value: "Admin" }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VListItem, mergeProps(props, { title: "Admin" }), null, 16)
                      ]),
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(admins, ([title, icon], i) => {
                          return createVNode(VListItem, {
                            key: i,
                            value: title,
                            title,
                            "prepend-icon": icon
                          }, null, 8, ["value", "title", "prepend-icon"]);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(VListGroup, { value: "Actions" }, {
                      activator: withCtx(({ props }) => [
                        createVNode(VListItem, mergeProps(props, { title: "Actions" }), null, 16)
                      ]),
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(cruds, ([title, icon], i) => {
                          return createVNode(VListItem, {
                            key: i,
                            value: title,
                            title,
                            "prepend-icon": icon
                          }, null, 8, ["value", "title", "prepend-icon"]);
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
              createVNode(VListItem, {
                "prepend-icon": "ri-home-line",
                title: "Home",
                value: "Home"
              }),
              createVNode(VListGroup, { value: "Users" }, {
                activator: withCtx(({ props }) => [
                  createVNode(VListItem, mergeProps(props, {
                    "prepend-icon": "ri-user-line",
                    title: "Users"
                  }), null, 16)
                ]),
                default: withCtx(() => [
                  createVNode(VListGroup, { value: "Admin" }, {
                    activator: withCtx(({ props }) => [
                      createVNode(VListItem, mergeProps(props, { title: "Admin" }), null, 16)
                    ]),
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(admins, ([title, icon], i) => {
                        return createVNode(VListItem, {
                          key: i,
                          value: title,
                          title,
                          "prepend-icon": icon
                        }, null, 8, ["value", "title", "prepend-icon"]);
                      }), 64))
                    ]),
                    _: 1
                  }),
                  createVNode(VListGroup, { value: "Actions" }, {
                    activator: withCtx(({ props }) => [
                      createVNode(VListItem, mergeProps(props, { title: "Actions" }), null, 16)
                    ]),
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(cruds, ([title, icon], i) => {
                        return createVNode(VListItem, {
                          key: i,
                          value: title,
                          title,
                          "prepend-icon": icon
                        }, null, 8, ["value", "title", "prepend-icon"]);
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListSubGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VList, mergeProps({
    lines: "three",
    "select-strategy": "classic"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VListSubheader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`General`);
            } else {
              return [
                createTextVNode("General")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VListItem, { value: "notifications" }, {
          prepend: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemAction, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCheckbox, {
                        "model-value": isActive,
                        color: "primary"
                      }, null, 8, ["model-value"])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemAction, null, {
                  default: withCtx(() => [
                    createVNode(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, 8, ["model-value"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Notifications`);
                  } else {
                    return [
                      createTextVNode("Notifications")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VListItemSubtitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Notify me about updates to apps or games that I downloaded`);
                  } else {
                    return [
                      createTextVNode("Notify me about updates to apps or games that I downloaded")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Notifications")
                  ]),
                  _: 1
                }),
                createVNode(VListItemSubtitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Notify me about updates to apps or games that I downloaded")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VListItem, { value: "sound" }, {
          prepend: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemAction, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCheckbox, {
                        "model-value": isActive,
                        color: "primary"
                      }, null, 8, ["model-value"])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemAction, null, {
                  default: withCtx(() => [
                    createVNode(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, 8, ["model-value"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Sound`);
                  } else {
                    return [
                      createTextVNode("Sound")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VListItemSubtitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Auto-update apps at any time. Data charges may apply`);
                  } else {
                    return [
                      createTextVNode("Auto-update apps at any time. Data charges may apply")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Sound")
                  ]),
                  _: 1
                }),
                createVNode(VListItemSubtitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Auto-update apps at any time. Data charges may apply")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VListItem, { value: "widgets" }, {
          prepend: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemAction, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCheckbox, {
                        "model-value": isActive,
                        color: "primary"
                      }, null, 8, ["model-value"])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemAction, null, {
                  default: withCtx(() => [
                    createVNode(VCheckbox, {
                      "model-value": isActive,
                      color: "primary"
                    }, null, 8, ["model-value"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VListItemTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Auto-add widgets`);
                  } else {
                    return [
                      createTextVNode("Auto-add widgets")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VListItemSubtitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Automatically add home screen widgets when downloads complete`);
                  } else {
                    return [
                      createTextVNode("Automatically add home screen widgets when downloads complete")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VListItemTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Auto-add widgets")
                  ]),
                  _: 1
                }),
                createVNode(VListItemSubtitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Automatically add home screen widgets when downloads complete")
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
          createVNode(VListSubheader, null, {
            default: withCtx(() => [
              createTextVNode("General")
            ]),
            _: 1
          }),
          createVNode(VListItem, { value: "notifications" }, {
            prepend: withCtx(({ isActive }) => [
              createVNode(VListItemAction, null, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    "model-value": isActive,
                    color: "primary"
                  }, null, 8, ["model-value"])
                ]),
                _: 2
              }, 1024)
            ]),
            default: withCtx(() => [
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Notifications")
                ]),
                _: 1
              }),
              createVNode(VListItemSubtitle, null, {
                default: withCtx(() => [
                  createTextVNode("Notify me about updates to apps or games that I downloaded")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VListItem, { value: "sound" }, {
            prepend: withCtx(({ isActive }) => [
              createVNode(VListItemAction, null, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    "model-value": isActive,
                    color: "primary"
                  }, null, 8, ["model-value"])
                ]),
                _: 2
              }, 1024)
            ]),
            default: withCtx(() => [
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Sound")
                ]),
                _: 1
              }),
              createVNode(VListItemSubtitle, null, {
                default: withCtx(() => [
                  createTextVNode("Auto-update apps at any time. Data charges may apply")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VListItem, { value: "widgets" }, {
            prepend: withCtx(({ isActive }) => [
              createVNode(VListItemAction, null, {
                default: withCtx(() => [
                  createVNode(VCheckbox, {
                    "model-value": isActive,
                    color: "primary"
                  }, null, 8, ["model-value"])
                ]),
                _: 2
              }, 1024)
            ]),
            default: withCtx(() => [
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Auto-add widgets")
                ]),
                _: 1
              }),
              createVNode(VListItemSubtitle, null, {
                default: withCtx(() => [
                  createTextVNode("Automatically add home screen widgets when downloads complete")
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
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListActionAndItemGroup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "DemoListNav",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "My Files",
        value: 1,
        prependIcon: "ri-folder-line"
      },
      {
        title: "Shared with me",
        value: 2,
        prependIcon: "ri-group-line"
      },
      {
        title: "Starred",
        value: 3,
        prependIcon: "ri-star-line"
      },
      {
        title: "Recent",
        value: 4,
        prependIcon: "ri-history-line"
      },
      {
        title: "Offline",
        value: 5,
        prependIcon: "ri-checkbox-circle-line"
      },
      {
        title: "Uploads",
        value: 6,
        prependIcon: "ri-upload-line"
      },
      {
        title: "Backups",
        value: 7,
        prependIcon: "ri-upload-cloud-line"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        nav: "",
        lines: false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(VListItem, {
                key: item.value,
                value: item.value
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: item.prependIcon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: item.prependIcon
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                return createVNode(VListItem, {
                  key: item.value,
                  value: item.value
                }, {
                  prepend: withCtx(() => [
                    createVNode(VIcon, {
                      icon: item.prependIcon
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
                }, 1032, ["value"]);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoListDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "halvah icing marshmallow",
        value: 1
      },
      {
        title: "Cake caramels donut danish muffin biscuit",
        value: 2
      },
      {
        title: "Chocolate cake pie lollipop",
        value: 3
      },
      {
        title: "Apple pie toffee pudding gummi bears",
        value: 4
      },
      {
        title: "Jujubes chupa chups cheesecake tart",
        value: 5
      },
      {
        title: "Candy fruitcake bonbon sesame snaps dessert",
        value: 6
      },
      {
        title: "Candy wafer tiramisu sugar plum sweet.",
        value: 7
      },
      {
        title: "Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",
        value: 8
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({
        density: "compact",
        items
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListDensity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoListRounded",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Cupcake sesame snaps dessert marzipan.",
        value: 1,
        props: {
          prependIcon: "ri-dribbble-line",
          rounded: "pill"
        }
      },
      {
        title: "Jelly beans jelly-o gummi bears chupa chups marshmallow.",
        value: 2,
        props: {
          prependIcon: "ri-facebook-circle-line",
          rounded: "pill"
        }
      },
      {
        title: "Bonbon macaroon gummies pie jelly",
        value: 3,
        props: {
          prependIcon: "ri-twitter-line",
          rounded: "pill"
        }
      },
      {
        title: "halvah icing marshmallow",
        value: 4,
        props: {
          prependIcon: "ri-instagram-line",
          rounded: "pill"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({ items }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListRounded.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoListBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "Morbi leo risus",
      "Porta ac consectetur ac"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({ items }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/list/DemoListBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const actionAndItemGroup = { ts: `<template>
  <VList
    lines="three"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`, js: `<template>
  <VList
    lines="three"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
` };
const basic = { ts: `<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`, js: `<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
` };
const density = { ts: `<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`, js: `<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
` };
const nav = { ts: `<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'ri-folder-line' },
  { title: 'Shared with me', value: 2, prependIcon: 'ri-group-line' },
  { title: 'Starred', value: 3, prependIcon: 'ri-star-line' },
  { title: 'Recent', value: 4, prependIcon: 'ri-history-line' },
  { title: 'Offline', value: 5, prependIcon: 'ri-checkbox-circle-line' },
  { title: 'Uploads', value: 6, prependIcon: 'ri-upload-line' },
  { title: 'Backups', value: 7, prependIcon: 'ri-upload-cloud-line' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`, js: `<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'ri-folder-line',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'ri-group-line',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'ri-star-line',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'ri-history-line',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'ri-checkbox-circle-line',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'ri-upload-line',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'ri-upload-cloud-line',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
` };
const progressList = { ts: `<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`, js: `<script setup>
const languageProgress = [
  {
    avatar: 'ri-reactjs-line',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'ri-bootstrap-line',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'ri-vuejs-line',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'ri-angularjs-line',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'ri-javascript-line',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
` };
const rounded = { ts: `<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'pill',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'pill',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'pill',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'pill',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`, js: `<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'ri-dribbble-line',
      rounded: 'pill',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'ri-facebook-circle-line',
      rounded: 'pill',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'ri-twitter-line',
      rounded: 'pill',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'ri-instagram-line',
      rounded: 'pill',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
` };
const shaped = { ts: `<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'ri-instagram-line' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'ri-facebook-circle-line' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'ri-twitter-line' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`, js: `<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'ri-instagram-line',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'ri-facebook-circle-line',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'ri-twitter-line',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
` };
const subGroup = { ts: `<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'ri-group-line'],
  ['Settings', 'ri-settings-5-line'],
]

const cruds = [
  ['Create', 'ri-add-line'],
  ['Read', 'ri-file-line'],
  ['Update', 'ri-refresh-line'],
  ['Delete', 'ri-delete-bin-line'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`, js: `<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'ri-group-line',
  ],
  [
    'Settings',
    'ri-settings-5-line',
  ],
]

const cruds = [
  [
    'Create',
    'ri-add-line',
  ],
  [
    'Read',
    'ri-file-line',
  ],
  [
    'Update',
    'ri-refresh-line',
  ],
  [
    'Delete',
    'ri-delete-bin-line',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="ri-home-line"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="ri-user-line"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
` };
const threeLine = { ts: `<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
` };
const twoLinesAndSubheader = { ts: `<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
`, js: `<script setup>
const files = [
  {
    color: 'blue',
    icon: 'ri-clipboard-line',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'ri-hard-drive-2-line',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="ri-folder-line"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="ri-information-line"
        />
      </template>
    </VListItem>
  </VList>
</template>
` };
const userList = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
` };
const _sfc_main = {
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$c;
      const _component_DemoListBasic = _sfc_main$1;
      const _component_DemoListRounded = _sfc_main$2;
      const _component_DemoListDensity = _sfc_main$3;
      const _component_DemoListNav = _sfc_main$4;
      const _component_DemoListActionAndItemGroup = __unplugin_components_5;
      const _component_DemoListSubGroup = _sfc_main$6;
      const _component_DemoListTwoLinesAndSubheader = _sfc_main$7;
      const _component_DemoListThreeLine = _sfc_main$8;
      const _component_DemoListUserList = _sfc_main$9;
      const _component_DemoListProgressList = _sfc_main$a;
      const _component_DemoListShaped = _sfc_main$b;
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    "no-padding": "",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<code${_scopeId4}>v-list</code> component can contain an avatar, content, actions and much more.`);
                            } else {
                              return [
                                createVNode("code", null, "v-list"),
                                createTextVNode(" component can contain an avatar, content, actions and much more.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListBasic, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListBasic)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("code", null, "v-list"),
                              createTextVNode(" component can contain an avatar, content, actions and much more.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListBasic)
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
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      "no-padding": "",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("code", null, "v-list"),
                            createTextVNode(" component can contain an avatar, content, actions and much more.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListBasic)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Rounded",
                    "no-padding": "",
                    code: rounded
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`You can make <code${_scopeId4}>v-list-item</code> rounded using <code${_scopeId4}>rounded</code> prop.`);
                            } else {
                              return [
                                createTextVNode("You can make "),
                                createVNode("code", null, "v-list-item"),
                                createTextVNode(" rounded using "),
                                createVNode("code", null, "rounded"),
                                createTextVNode(" prop.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListRounded, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListRounded)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("You can make "),
                              createVNode("code", null, "v-list-item"),
                              createTextVNode(" rounded using "),
                              createVNode("code", null, "rounded"),
                              createTextVNode(" prop.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListRounded)
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
                    createVNode(_component_AppCardCode, {
                      title: "Rounded",
                      "no-padding": "",
                      code: rounded
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("You can make "),
                            createVNode("code", null, "v-list-item"),
                            createTextVNode(" rounded using "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" prop.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListRounded)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Density",
                    code: density,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Use <code${_scopeId4}>density</code> prop to adjusts the spacing within the component. Available options are: <code${_scopeId4}>default</code>, <code${_scopeId4}>comfortable</code>, and <code${_scopeId4}>compact</code>.`);
                            } else {
                              return [
                                createTextVNode("Use "),
                                createVNode("code", null, "density"),
                                createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                                createVNode("code", null, "default"),
                                createTextVNode(", "),
                                createVNode("code", null, "comfortable"),
                                createTextVNode(", and "),
                                createVNode("code", null, "compact"),
                                createTextVNode(".")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListDensity, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListDensity)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("Use "),
                              createVNode("code", null, "density"),
                              createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                              createVNode("code", null, "default"),
                              createTextVNode(", "),
                              createVNode("code", null, "comfortable"),
                              createTextVNode(", and "),
                              createVNode("code", null, "compact"),
                              createTextVNode(".")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListDensity)
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
                    createVNode(_component_AppCardCode, {
                      title: "Density",
                      code: density,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("Use "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(".")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListDensity)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Nav",
                    "no-padding": "",
                    code: nav
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lists can receive an alternative <code${_scopeId4}>nav</code> styling that reduces the width <code${_scopeId4}>v-list-item</code> takes up as well as adding a border radius.`);
                            } else {
                              return [
                                createTextVNode("Lists can receive an alternative "),
                                createVNode("code", null, "nav"),
                                createTextVNode(" styling that reduces the width "),
                                createVNode("code", null, "v-list-item"),
                                createTextVNode(" takes up as well as adding a border radius.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListNav, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListNav)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("Lists can receive an alternative "),
                              createVNode("code", null, "nav"),
                              createTextVNode(" styling that reduces the width "),
                              createVNode("code", null, "v-list-item"),
                              createTextVNode(" takes up as well as adding a border radius.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListNav)
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
                    createVNode(_component_AppCardCode, {
                      title: "Nav",
                      "no-padding": "",
                      code: nav
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("Lists can receive an alternative "),
                            createVNode("code", null, "nav"),
                            createTextVNode(" styling that reduces the width "),
                            createVNode("code", null, "v-list-item"),
                            createTextVNode(" takes up as well as adding a border radius.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListNav)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Action and item group",
                    "no-padding": "",
                    code: actionAndItemGroup
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`A <code${_scopeId4}>three-line</code> list with actions. Utilizing <code${_scopeId4}>v-list-group</code>, easily connect actions to your tiles.`);
                            } else {
                              return [
                                createTextVNode("A "),
                                createVNode("code", null, "three-line"),
                                createTextVNode(" list with actions. Utilizing "),
                                createVNode("code", null, "v-list-group"),
                                createTextVNode(", easily connect actions to your tiles.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListActionAndItemGroup, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListActionAndItemGroup)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("A "),
                              createVNode("code", null, "three-line"),
                              createTextVNode(" list with actions. Utilizing "),
                              createVNode("code", null, "v-list-group"),
                              createTextVNode(", easily connect actions to your tiles.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListActionAndItemGroup)
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
                    createVNode(_component_AppCardCode, {
                      title: "Action and item group",
                      "no-padding": "",
                      code: actionAndItemGroup
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("A "),
                            createVNode("code", null, "three-line"),
                            createTextVNode(" list with actions. Utilizing "),
                            createVNode("code", null, "v-list-group"),
                            createTextVNode(", easily connect actions to your tiles.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListActionAndItemGroup)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Sub Group",
                    "no-padding": "",
                    code: subGroup
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Using the <code${_scopeId4}>v-list-group</code> component you can create up to 2 levels in depth using the sub-group prop. `);
                            } else {
                              return [
                                createTextVNode(" Using the "),
                                createVNode("code", null, "v-list-group"),
                                createTextVNode(" component you can create up to 2 levels in depth using the sub-group prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListSubGroup, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListSubGroup)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" Using the "),
                              createVNode("code", null, "v-list-group"),
                              createTextVNode(" component you can create up to 2 levels in depth using the sub-group prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListSubGroup)
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
                    createVNode(_component_AppCardCode, {
                      title: "Sub Group",
                      "no-padding": "",
                      code: subGroup
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" Using the "),
                            createVNode("code", null, "v-list-group"),
                            createTextVNode(" component you can create up to 2 levels in depth using the sub-group prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListSubGroup)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Two lines and subheader",
                    "no-padding": "",
                    code: twoLinesAndSubheader
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.`);
                            } else {
                              return [
                                createTextVNode("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListTwoLinesAndSubheader, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListTwoLinesAndSubheader)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListTwoLinesAndSubheader)
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
                    createVNode(_component_AppCardCode, {
                      title: "Two lines and subheader",
                      "no-padding": "",
                      code: twoLinesAndSubheader
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListTwoLinesAndSubheader)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Three Line",
                    "no-padding": "",
                    code: threeLine
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.`);
                            } else {
                              return [
                                createTextVNode("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListThreeLine, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListThreeLine)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListThreeLine)
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
                    createVNode(_component_AppCardCode, {
                      title: "Three Line",
                      "no-padding": "",
                      code: threeLine
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListThreeLine)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "User List",
                    "no-padding": "",
                    code: userList
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListUserList, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListUserList)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListUserList)
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
                    createVNode(_component_AppCardCode, {
                      title: "User List",
                      "no-padding": "",
                      code: userList
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListUserList)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Progress List",
                    "no-padding": "",
                    code: progressList
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListProgressList, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListProgressList)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListProgressList)
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
                    createVNode(_component_AppCardCode, {
                      title: "Progress List",
                      "no-padding": "",
                      code: progressList
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListProgressList)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Shaped",
                    "no-padding": "",
                    code: shaped
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Shaped lists have rounded borders on one side of the <code${_scopeId4}>v-list-item</code>. `);
                            } else {
                              return [
                                createTextVNode(" Shaped lists have rounded borders on one side of the "),
                                createVNode("code", null, "v-list-item"),
                                createTextVNode(". ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DemoListShaped, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DemoListShaped)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" Shaped lists have rounded borders on one side of the "),
                              createVNode("code", null, "v-list-item"),
                              createTextVNode(". ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_DemoListShaped)
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
                    createVNode(_component_AppCardCode, {
                      title: "Shaped",
                      "no-padding": "",
                      code: shaped
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" Shaped lists have rounded borders on one side of the "),
                            createVNode("code", null, "v-list-item"),
                            createTextVNode(". ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_DemoListShaped)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    "no-padding": "",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("code", null, "v-list"),
                          createTextVNode(" component can contain an avatar, content, actions and much more.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListBasic)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Rounded",
                    "no-padding": "",
                    code: rounded
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("You can make "),
                          createVNode("code", null, "v-list-item"),
                          createTextVNode(" rounded using "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" prop.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListRounded)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Density",
                    code: density,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("Use "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop to adjusts the spacing within the component. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(".")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListDensity)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Nav",
                    "no-padding": "",
                    code: nav
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("Lists can receive an alternative "),
                          createVNode("code", null, "nav"),
                          createTextVNode(" styling that reduces the width "),
                          createVNode("code", null, "v-list-item"),
                          createTextVNode(" takes up as well as adding a border radius.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListNav)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Action and item group",
                    "no-padding": "",
                    code: actionAndItemGroup
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("A "),
                          createVNode("code", null, "three-line"),
                          createTextVNode(" list with actions. Utilizing "),
                          createVNode("code", null, "v-list-group"),
                          createTextVNode(", easily connect actions to your tiles.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListActionAndItemGroup)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Sub Group",
                    "no-padding": "",
                    code: subGroup
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" Using the "),
                          createVNode("code", null, "v-list-group"),
                          createTextVNode(" component you can create up to 2 levels in depth using the sub-group prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListSubGroup)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Two lines and subheader",
                    "no-padding": "",
                    code: twoLinesAndSubheader
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListTwoLinesAndSubheader)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Three Line",
                    "no-padding": "",
                    code: threeLine
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListThreeLine)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "User List",
                    "no-padding": "",
                    code: userList
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListUserList)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Progress List",
                    "no-padding": "",
                    code: progressList
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListProgressList)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Shaped",
                    "no-padding": "",
                    code: shaped
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" Shaped lists have rounded borders on one side of the "),
                          createVNode("code", null, "v-list-item"),
                          createTextVNode(". ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_DemoListShaped)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["code"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
