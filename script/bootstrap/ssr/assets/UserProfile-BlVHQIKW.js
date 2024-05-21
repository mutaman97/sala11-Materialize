import { unref, mergeProps, withCtx, openBlock, createBlock, createVNode, toDisplayString, createSlots, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ao as useCookie, a as VIcon, V as VBtn } from "../ssr.js";
import { useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { u as useAbility } from "./useAbility-DSKxrArL.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
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
import "@antfu/utils";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VSlideGroup-Bvz86g7R.js";
const _sfc_main = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const ability = useAbility();
    const userData = useCookie("userData");
    const logout = async () => {
      useCookie("accessToken").value = null;
      userData.value = null;
      await router.push("/login");
      useCookie("userAbilityRules").value = null;
      ability.update([]);
    };
    const userProfileList = [
      { type: "divider" },
      {
        type: "navItem",
        icon: "ri-user-line",
        title: "Profile",
        to: {
          name: "apps-user-view-id",
          params: { id: 21 }
        }
      },
      {
        type: "navItem",
        icon: "ri-settings-4-line",
        title: "Settings",
        to: {
          name: "pages-account-settings-tab",
          params: { tab: "account" }
        }
      },
      {
        type: "navItem",
        icon: "ri-file-text-line",
        title: "Billing Plan",
        to: {
          name: "pages-account-settings-tab",
          params: { tab: "billing-plans" }
        },
        chipsProps: {
          color: "error",
          text: "4",
          size: "small"
        }
      },
      { type: "divider" },
      {
        type: "navItem",
        icon: "ri-money-dollar-circle-line",
        title: "Pricing",
        to: { name: "pages-pricing" }
      },
      {
        type: "navItem",
        icon: "ri-question-line",
        title: "FAQ",
        to: { name: "pages-faq" }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(userData)) {
        _push(ssrRenderComponent(VBadge, mergeProps({
          dot: "",
          bordered: "",
          location: "bottom right",
          "offset-x": "2",
          "offset-y": "2",
          color: "success",
          class: "user-profile-badge"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                class: "cursor-pointer",
                size: "38",
                color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(userData) && unref(userData).avatar) {
                      _push3(ssrRenderComponent(VImg, {
                        src: unref(userData).avatar
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(VIcon, { icon: "ri-user-line" }, null, _parent3, _scopeId2));
                    }
                    _push3(ssrRenderComponent(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "15px"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItem, { class: "px-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex gap-x-2 align-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VAvatar, {
                                        color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                        variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (unref(userData) && unref(userData).avatar) {
                                              _push7(ssrRenderComponent(VImg, {
                                                src: unref(userData).avatar
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(ssrRenderComponent(VIcon, { icon: "ri-user-line" }, null, _parent7, _scopeId6));
                                            }
                                          } else {
                                            return [
                                              unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                                key: 0,
                                                src: unref(userData).avatar
                                              }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                                key: 1,
                                                icon: "ri-user-line"
                                              }))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<div${_scopeId5}><div class="text-body-2 font-weight-medium text-high-emphasis"${_scopeId5}>${ssrInterpolate(unref(userData).fullName || unref(userData).username)}</div><div class="text-capitalize text-caption text-disabled"${_scopeId5}>${ssrInterpolate(unref(userData).role)}</div></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                                          createVNode(VAvatar, {
                                            color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                            variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                          }, {
                                            default: withCtx(() => [
                                              unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                                key: 0,
                                                src: unref(userData).avatar
                                              }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                                key: 1,
                                                icon: "ri-user-line"
                                              }))
                                            ]),
                                            _: 1
                                          }, 8, ["color", "variant"]),
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(unref(userData).fullName || unref(userData).username), 1),
                                            createVNode("div", { class: "text-capitalize text-caption text-disabled" }, toDisplayString(unref(userData).role), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(userProfileList, (item) => {
                                        _push6(`<!--[-->`);
                                        if (item.type === "navItem") {
                                          _push6(ssrRenderComponent(VListItem, {
                                            to: item.to,
                                            class: "px-4"
                                          }, createSlots({
                                            prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VIcon, {
                                                  icon: item.icon,
                                                  size: "22"
                                                }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VIcon, {
                                                    icon: item.icon,
                                                    size: "22"
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
                                          }, [
                                            item.chipsProps ? {
                                              name: "append",
                                              fn: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                                  ];
                                                }
                                              }),
                                              key: "0"
                                            } : void 0
                                          ]), _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(VDivider, { class: "my-1" }, null, _parent6, _scopeId5));
                                        }
                                        _push6(`<!--]-->`);
                                      });
                                      _push6(`<!--]-->`);
                                      _push6(ssrRenderComponent(VListItem, { class: "px-4" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              block: "",
                                              color: "error",
                                              size: "small",
                                              "append-icon": "ri-logout-box-r-line",
                                              onClick: logout
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Logout `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Logout ")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                block: "",
                                                color: "error",
                                                size: "small",
                                                "append-icon": "ri-logout-box-r-line",
                                                onClick: logout
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Logout ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                          return openBlock(), createBlock(Fragment, {
                                            key: item.title
                                          }, [
                                            item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                              key: 0,
                                              to: item.to,
                                              class: "px-4"
                                            }, createSlots({
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: item.icon,
                                                  size: "22"
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
                                            }, [
                                              item.chipsProps ? {
                                                name: "append",
                                                fn: withCtx(() => [
                                                  createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                                ]),
                                                key: "0"
                                              } : void 0
                                            ]), 1032, ["to"])) : (openBlock(), createBlock(VDivider, {
                                              key: 1,
                                              class: "my-1"
                                            }))
                                          ], 64);
                                        }), 64)),
                                        createVNode(VListItem, { class: "px-4" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              block: "",
                                              color: "error",
                                              size: "small",
                                              "append-icon": "ri-logout-box-r-line",
                                              onClick: logout
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Logout ")
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItem, { class: "px-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                                        createVNode(VAvatar, {
                                          color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                          variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                        }, {
                                          default: withCtx(() => [
                                            unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                              key: 0,
                                              src: unref(userData).avatar
                                            }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                              key: 1,
                                              icon: "ri-user-line"
                                            }))
                                          ]),
                                          _: 1
                                        }, 8, ["color", "variant"]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(unref(userData).fullName || unref(userData).username), 1),
                                          createVNode("div", { class: "text-capitalize text-caption text-disabled" }, toDisplayString(unref(userData).role), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                        return openBlock(), createBlock(Fragment, {
                                          key: item.title
                                        }, [
                                          item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                            key: 0,
                                            to: item.to,
                                            class: "px-4"
                                          }, createSlots({
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: item.icon,
                                                size: "22"
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
                                          }, [
                                            item.chipsProps ? {
                                              name: "append",
                                              fn: withCtx(() => [
                                                createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                              ]),
                                              key: "0"
                                            } : void 0
                                          ]), 1032, ["to"])) : (openBlock(), createBlock(VDivider, {
                                            key: 1,
                                            class: "my-1"
                                          }))
                                        ], 64);
                                      }), 64)),
                                      createVNode(VListItem, { class: "px-4" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            color: "error",
                                            size: "small",
                                            "append-icon": "ri-logout-box-r-line",
                                            onClick: logout
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Logout ")
                                            ]),
                                            _: 1
                                          })
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, { class: "px-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                                      createVNode(VAvatar, {
                                        color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                        variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                      }, {
                                        default: withCtx(() => [
                                          unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                            key: 0,
                                            src: unref(userData).avatar
                                          }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                            key: 1,
                                            icon: "ri-user-line"
                                          }))
                                        ]),
                                        _: 1
                                      }, 8, ["color", "variant"]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(unref(userData).fullName || unref(userData).username), 1),
                                        createVNode("div", { class: "text-capitalize text-caption text-disabled" }, toDisplayString(unref(userData).role), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                      return openBlock(), createBlock(Fragment, {
                                        key: item.title
                                      }, [
                                        item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                          key: 0,
                                          to: item.to,
                                          class: "px-4"
                                        }, createSlots({
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: item.icon,
                                              size: "22"
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
                                        }, [
                                          item.chipsProps ? {
                                            name: "append",
                                            fn: withCtx(() => [
                                              createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                            ]),
                                            key: "0"
                                          } : void 0
                                        ]), 1032, ["to"])) : (openBlock(), createBlock(VDivider, {
                                          key: 1,
                                          class: "my-1"
                                        }))
                                      ], 64);
                                    }), 64)),
                                    createVNode(VListItem, { class: "px-4" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          color: "error",
                                          size: "small",
                                          "append-icon": "ri-logout-box-r-line",
                                          onClick: logout
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Logout ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
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
                  } else {
                    return [
                      unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                        key: 0,
                        src: unref(userData).avatar
                      }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                        key: 1,
                        icon: "ri-user-line"
                      })),
                      createVNode(VMenu, {
                        activator: "parent",
                        width: "230",
                        location: "bottom end",
                        offset: "15px"
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, { class: "px-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                                    createVNode(VAvatar, {
                                      color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                      variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                    }, {
                                      default: withCtx(() => [
                                        unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                          key: 0,
                                          src: unref(userData).avatar
                                        }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                          key: 1,
                                          icon: "ri-user-line"
                                        }))
                                      ]),
                                      _: 1
                                    }, 8, ["color", "variant"]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(unref(userData).fullName || unref(userData).username), 1),
                                      createVNode("div", { class: "text-capitalize text-caption text-disabled" }, toDisplayString(unref(userData).role), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: item.title
                                    }, [
                                      item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                        key: 0,
                                        to: item.to,
                                        class: "px-4"
                                      }, createSlots({
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: item.icon,
                                            size: "22"
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
                                      }, [
                                        item.chipsProps ? {
                                          name: "append",
                                          fn: withCtx(() => [
                                            createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                          ]),
                                          key: "0"
                                        } : void 0
                                      ]), 1032, ["to"])) : (openBlock(), createBlock(VDivider, {
                                        key: 1,
                                        class: "my-1"
                                      }))
                                    ], 64);
                                  }), 64)),
                                  createVNode(VListItem, { class: "px-4" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        color: "error",
                                        size: "small",
                                        "append-icon": "ri-logout-box-r-line",
                                        onClick: logout
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Logout ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
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
            } else {
              return [
                createVNode(VAvatar, {
                  class: "cursor-pointer",
                  size: "38",
                  color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                  variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                }, {
                  default: withCtx(() => [
                    unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                      key: 0,
                      src: unref(userData).avatar
                    }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                      key: 1,
                      icon: "ri-user-line"
                    })),
                    createVNode(VMenu, {
                      activator: "parent",
                      width: "230",
                      location: "bottom end",
                      offset: "15px"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListItem, { class: "px-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex gap-x-2 align-center" }, [
                                  createVNode(VAvatar, {
                                    color: !(unref(userData) && unref(userData).avatar) ? "primary" : void 0,
                                    variant: !(unref(userData) && unref(userData).avatar) ? "tonal" : void 0
                                  }, {
                                    default: withCtx(() => [
                                      unref(userData) && unref(userData).avatar ? (openBlock(), createBlock(VImg, {
                                        key: 0,
                                        src: unref(userData).avatar
                                      }, null, 8, ["src"])) : (openBlock(), createBlock(VIcon, {
                                        key: 1,
                                        icon: "ri-user-line"
                                      }))
                                    ]),
                                    _: 1
                                  }, 8, ["color", "variant"]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis" }, toDisplayString(unref(userData).fullName || unref(userData).username), 1),
                                    createVNode("div", { class: "text-capitalize text-caption text-disabled" }, toDisplayString(unref(userData).role), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(PerfectScrollbar), { options: { wheelPropagation: false } }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(userProfileList, (item) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: item.title
                                  }, [
                                    item.type === "navItem" ? (openBlock(), createBlock(VListItem, {
                                      key: 0,
                                      to: item.to,
                                      class: "px-4"
                                    }, createSlots({
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "22"
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
                                    }, [
                                      item.chipsProps ? {
                                        name: "append",
                                        fn: withCtx(() => [
                                          createVNode(VChip, mergeProps({ ref_for: true }, item.chipsProps, { variant: "elevated" }), null, 16)
                                        ]),
                                        key: "0"
                                      } : void 0
                                    ]), 1032, ["to"])) : (openBlock(), createBlock(VDivider, {
                                      key: 1,
                                      class: "my-1"
                                    }))
                                  ], 64);
                                }), 64)),
                                createVNode(VListItem, { class: "px-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      color: "error",
                                      size: "small",
                                      "append-icon": "ri-logout-box-r-line",
                                      onClick: logout
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Logout ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["color", "variant"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/components/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
