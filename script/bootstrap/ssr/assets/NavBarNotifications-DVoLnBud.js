import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { useSSRContext, computed, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, withDirectives, vShow, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, renderList, ref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { a as VIcon, V as VBtn, f as avatar4, h as avatar5 } from "../ssr.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VCard, a as VCardItem } from "./VCard-BPXR3fWJ.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "./helpers-DX2i3Kdq.js";
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
import "@antfu/utils";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
/* empty css               */
const _sfc_main$1 = {
  __name: "Notifications",
  __ssrInlineRender: true,
  props: {
    notifications: {
      type: Array,
      required: true
    },
    badgeProps: {
      type: Object,
      required: false,
      default: void 0
    },
    location: {
      type: null,
      required: false,
      default: "bottom end"
    }
  },
  emits: [
    "read",
    "unread",
    "remove",
    "click:notification"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isAllMarkRead = computed(() => props.notifications.some((item) => item.isSeen === false));
    const markAllReadOrUnread = () => {
      const allNotificationsIds = props.notifications.map((item) => item.id);
      if (!isAllMarkRead.value)
        emit("unread", allNotificationsIds);
      else
        emit("read", allNotificationsIds);
    };
    const totalUnreadNotifications = computed(() => props.notifications.filter((item) => !item.isSeen).length);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, mergeProps({ id: "notification-btn" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBadge, mergeProps({ dot: "" }, props.badgeProps, {
              "model-value": props.notifications.some((n) => !n.isSeen),
              color: "error",
              bordered: "",
              "offset-x": "1",
              "offset-y": "1",
              class: "notification-badge"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: "ri-notification-2-line" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: "ri-notification-2-line" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              width: "380",
              location: props.location,
              offset: "15px",
              "close-on-content-click": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "d-flex flex-column" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "notification-section" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VChip, {
                                style: !!unref(isAllMarkRead) ? null : { display: "none" },
                                size: "small",
                                class: "me-2",
                                variant: "tonal",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(totalUnreadNotifications))} new `);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(totalUnreadNotifications)) + " new ", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_IconBtn, {
                                style: props.notifications.length ? null : { display: "none" },
                                size: "small",
                                onClick: markAllReadOrUnread
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "high-emphasis",
                                      icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTooltip, {
                                      activator: "parent",
                                      location: "start"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "high-emphasis",
                                        icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                      }, null, 8, ["icon"]),
                                      createVNode(VTooltip, {
                                        activator: "parent",
                                        location: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
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
                                withDirectives(createVNode(VChip, {
                                  size: "small",
                                  class: "me-2",
                                  variant: "tonal",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(totalUnreadNotifications)) + " new ", 1)
                                  ]),
                                  _: 1
                                }, 512), [
                                  [vShow, !!unref(isAllMarkRead)]
                                ]),
                                withDirectives(createVNode(_component_IconBtn, {
                                  size: "small",
                                  onClick: markAllReadOrUnread
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "high-emphasis",
                                      icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                    }, null, 8, ["icon"]),
                                    createVNode(VTooltip, {
                                      activator: "parent",
                                      location: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512), [
                                  [vShow, props.notifications.length]
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h6 class="text-h6 text-truncate"${_scopeId4}> Notifications </h6>`);
                            } else {
                              return [
                                createVNode("h6", { class: "text-h6 text-truncate" }, " Notifications ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(PerfectScrollbar), {
                          options: { wheelPropagation: false },
                          style: { "max-block-size": "27rem" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, { class: "py-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(props.notifications, (notification, index) => {
                                      _push6(`<!--[-->`);
                                      if (index > 0) {
                                        _push6(ssrRenderComponent(VDivider, null, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(ssrRenderComponent(VListItem, {
                                        link: "",
                                        lines: "one",
                                        "min-height": "66px",
                                        class: "list-item-hover-class py-3 px-4",
                                        onClick: ($event) => _ctx.$emit("click:notification", notification)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-start gap-3"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VAvatar, {
                                              size: "40",
                                              color: notification.color && !notification.img ? notification.color : void 0,
                                              variant: notification.img ? void 0 : "tonal"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  if (notification.text) {
                                                    _push8(`<span${_scopeId7}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text))}</span>`);
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  if (notification.img) {
                                                    _push8(ssrRenderComponent(VImg, {
                                                      src: notification.img
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  if (notification.icon) {
                                                    _push8(ssrRenderComponent(VIcon, {
                                                      icon: notification.icon
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                } else {
                                                  return [
                                                    notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                                    notification.img ? (openBlock(), createBlock(VImg, {
                                                      key: 1,
                                                      src: notification.img
                                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                                    notification.icon ? (openBlock(), createBlock(VIcon, {
                                                      key: 2,
                                                      icon: notification.icon
                                                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div${_scopeId6}><div class="text-body-2 text-high-emphasis font-weight-medium mb-1"${_scopeId6}>${ssrInterpolate(notification.title)}</div><p class="text-caption mb-2 text-medium-emphasis" style="${ssrRenderStyle({ "letter-spacing": "0.4px !important", "line-height": "18px" })}"${_scopeId6}>${ssrInterpolate(notification.subtitle)}</p><p class="text-caption mb-0" style="${ssrRenderStyle({ "letter-spacing": "0.4px !important", "line-height": "18px" })}"${_scopeId6}>${ssrInterpolate(notification.time)}</p></div>`);
                                            _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex flex-column align-end gap-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: !notification.isSeen ? "primary" : "secondary",
                                              class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                              size: "10",
                                              icon: "ri-circle-fill",
                                              onClick: ($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id])
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div style="${ssrRenderStyle({ "block-size": "20px", "inline-size": "20px" })}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "20",
                                              icon: "ri-close-line",
                                              color: "medium-emphasis",
                                              class: "visible-in-hover",
                                              onClick: ($event) => _ctx.$emit("remove", notification.id)
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div></div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-start gap-3" }, [
                                                createVNode(VAvatar, {
                                                  size: "40",
                                                  color: notification.color && !notification.img ? notification.color : void 0,
                                                  variant: notification.img ? void 0 : "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                                    notification.img ? (openBlock(), createBlock(VImg, {
                                                      key: 1,
                                                      src: notification.img
                                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                                    notification.icon ? (openBlock(), createBlock(VIcon, {
                                                      key: 2,
                                                      icon: notification.icon
                                                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "variant"]),
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                                  createVNode("p", {
                                                    class: "text-caption mb-2 text-medium-emphasis",
                                                    style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                  }, toDisplayString(notification.subtitle), 1),
                                                  createVNode("p", {
                                                    class: "text-caption mb-0",
                                                    style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                  }, toDisplayString(notification.time), 1)
                                                ]),
                                                createVNode(VSpacer),
                                                createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                                  createVNode(VIcon, {
                                                    color: !notification.isSeen ? "primary" : "secondary",
                                                    class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                                    size: "10",
                                                    icon: "ri-circle-fill",
                                                    onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                                  }, null, 8, ["color", "class", "onClick"]),
                                                  createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                                    createVNode(VIcon, {
                                                      size: "20",
                                                      icon: "ri-close-line",
                                                      color: "medium-emphasis",
                                                      class: "visible-in-hover",
                                                      onClick: ($event) => _ctx.$emit("remove", notification.id)
                                                    }, null, 8, ["onClick"])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<!--]-->`);
                                    });
                                    _push6(`<!--]-->`);
                                    _push6(ssrRenderComponent(VListItem, {
                                      style: [
                                        !props.notifications.length ? null : { display: "none" },
                                        { "block-size": "56px" }
                                      ],
                                      class: "text-center text-medium-emphasis"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`No Notification Found!`);
                                              } else {
                                                return [
                                                  createTextVNode("No Notification Found!")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Notification Found!")
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(props.notifications, (notification, index) => {
                                        return openBlock(), createBlock(Fragment, {
                                          key: notification.title
                                        }, [
                                          index > 0 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                                          createVNode(VListItem, {
                                            link: "",
                                            lines: "one",
                                            "min-height": "66px",
                                            class: "list-item-hover-class py-3 px-4",
                                            onClick: ($event) => _ctx.$emit("click:notification", notification)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-start gap-3" }, [
                                                createVNode(VAvatar, {
                                                  size: "40",
                                                  color: notification.color && !notification.img ? notification.color : void 0,
                                                  variant: notification.img ? void 0 : "tonal"
                                                }, {
                                                  default: withCtx(() => [
                                                    notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                                    notification.img ? (openBlock(), createBlock(VImg, {
                                                      key: 1,
                                                      src: notification.img
                                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                                    notification.icon ? (openBlock(), createBlock(VIcon, {
                                                      key: 2,
                                                      icon: notification.icon
                                                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "variant"]),
                                                createVNode("div", null, [
                                                  createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                                  createVNode("p", {
                                                    class: "text-caption mb-2 text-medium-emphasis",
                                                    style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                  }, toDisplayString(notification.subtitle), 1),
                                                  createVNode("p", {
                                                    class: "text-caption mb-0",
                                                    style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                  }, toDisplayString(notification.time), 1)
                                                ]),
                                                createVNode(VSpacer),
                                                createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                                  createVNode(VIcon, {
                                                    color: !notification.isSeen ? "primary" : "secondary",
                                                    class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                                    size: "10",
                                                    icon: "ri-circle-fill",
                                                    onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                                  }, null, 8, ["color", "class", "onClick"]),
                                                  createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                                    createVNode(VIcon, {
                                                      size: "20",
                                                      icon: "ri-close-line",
                                                      color: "medium-emphasis",
                                                      class: "visible-in-hover",
                                                      onClick: ($event) => _ctx.$emit("remove", notification.id)
                                                    }, null, 8, ["onClick"])
                                                  ])
                                                ])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ], 64);
                                      }), 128)),
                                      withDirectives(createVNode(VListItem, {
                                        class: "text-center text-medium-emphasis",
                                        style: { "block-size": "56px" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Notification Found!")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 512), [
                                        [vShow, !props.notifications.length]
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "py-0" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(props.notifications, (notification, index) => {
                                      return openBlock(), createBlock(Fragment, {
                                        key: notification.title
                                      }, [
                                        index > 0 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                                        createVNode(VListItem, {
                                          link: "",
                                          lines: "one",
                                          "min-height": "66px",
                                          class: "list-item-hover-class py-3 px-4",
                                          onClick: ($event) => _ctx.$emit("click:notification", notification)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-start gap-3" }, [
                                              createVNode(VAvatar, {
                                                size: "40",
                                                color: notification.color && !notification.img ? notification.color : void 0,
                                                variant: notification.img ? void 0 : "tonal"
                                              }, {
                                                default: withCtx(() => [
                                                  notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                                  notification.img ? (openBlock(), createBlock(VImg, {
                                                    key: 1,
                                                    src: notification.img
                                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                                  notification.icon ? (openBlock(), createBlock(VIcon, {
                                                    key: 2,
                                                    icon: notification.icon
                                                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "variant"]),
                                              createVNode("div", null, [
                                                createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                                createVNode("p", {
                                                  class: "text-caption mb-2 text-medium-emphasis",
                                                  style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                }, toDisplayString(notification.subtitle), 1),
                                                createVNode("p", {
                                                  class: "text-caption mb-0",
                                                  style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                                }, toDisplayString(notification.time), 1)
                                              ]),
                                              createVNode(VSpacer),
                                              createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                                createVNode(VIcon, {
                                                  color: !notification.isSeen ? "primary" : "secondary",
                                                  class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                                  size: "10",
                                                  icon: "ri-circle-fill",
                                                  onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                                }, null, 8, ["color", "class", "onClick"]),
                                                createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                                  createVNode(VIcon, {
                                                    size: "20",
                                                    icon: "ri-close-line",
                                                    color: "medium-emphasis",
                                                    class: "visible-in-hover",
                                                    onClick: ($event) => _ctx.$emit("remove", notification.id)
                                                  }, null, 8, ["onClick"])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ], 64);
                                    }), 128)),
                                    withDirectives(createVNode(VListItem, {
                                      class: "text-center text-medium-emphasis",
                                      style: { "block-size": "56px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("No Notification Found!")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 512), [
                                      [vShow, !props.notifications.length]
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, {
                          style: props.notifications.length ? null : { display: "none" },
                          class: "pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` View All Notifications `);
                                  } else {
                                    return [
                                      createTextVNode(" View All Notifications ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  block: "",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View All Notifications ")
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
                          createVNode(VCardItem, { class: "notification-section" }, {
                            append: withCtx(() => [
                              withDirectives(createVNode(VChip, {
                                size: "small",
                                class: "me-2",
                                variant: "tonal",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(totalUnreadNotifications)) + " new ", 1)
                                ]),
                                _: 1
                              }, 512), [
                                [vShow, !!unref(isAllMarkRead)]
                              ]),
                              withDirectives(createVNode(_component_IconBtn, {
                                size: "small",
                                onClick: markAllReadOrUnread
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "high-emphasis",
                                    icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                  }, null, 8, ["icon"]),
                                  createVNode(VTooltip, {
                                    activator: "parent",
                                    location: "start"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512), [
                                [vShow, props.notifications.length]
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 text-truncate" }, " Notifications ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(unref(PerfectScrollbar), {
                            options: { wheelPropagation: false },
                            style: { "max-block-size": "27rem" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "py-0" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(props.notifications, (notification, index) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: notification.title
                                    }, [
                                      index > 0 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                                      createVNode(VListItem, {
                                        link: "",
                                        lines: "one",
                                        "min-height": "66px",
                                        class: "list-item-hover-class py-3 px-4",
                                        onClick: ($event) => _ctx.$emit("click:notification", notification)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-start gap-3" }, [
                                            createVNode(VAvatar, {
                                              size: "40",
                                              color: notification.color && !notification.img ? notification.color : void 0,
                                              variant: notification.img ? void 0 : "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                                notification.img ? (openBlock(), createBlock(VImg, {
                                                  key: 1,
                                                  src: notification.img
                                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                                notification.icon ? (openBlock(), createBlock(VIcon, {
                                                  key: 2,
                                                  icon: notification.icon
                                                }, null, 8, ["icon"])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "variant"]),
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                              createVNode("p", {
                                                class: "text-caption mb-2 text-medium-emphasis",
                                                style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                              }, toDisplayString(notification.subtitle), 1),
                                              createVNode("p", {
                                                class: "text-caption mb-0",
                                                style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                              }, toDisplayString(notification.time), 1)
                                            ]),
                                            createVNode(VSpacer),
                                            createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                              createVNode(VIcon, {
                                                color: !notification.isSeen ? "primary" : "secondary",
                                                class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                                size: "10",
                                                icon: "ri-circle-fill",
                                                onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                              }, null, 8, ["color", "class", "onClick"]),
                                              createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                                createVNode(VIcon, {
                                                  size: "20",
                                                  icon: "ri-close-line",
                                                  color: "medium-emphasis",
                                                  class: "visible-in-hover",
                                                  onClick: ($event) => _ctx.$emit("remove", notification.id)
                                                }, null, 8, ["onClick"])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ], 64);
                                  }), 128)),
                                  withDirectives(createVNode(VListItem, {
                                    class: "text-center text-medium-emphasis",
                                    style: { "block-size": "56px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No Notification Found!")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 512), [
                                    [vShow, !props.notifications.length]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          withDirectives(createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View All Notifications ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, props.notifications.length]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "d-flex flex-column" }, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "notification-section" }, {
                          append: withCtx(() => [
                            withDirectives(createVNode(VChip, {
                              size: "small",
                              class: "me-2",
                              variant: "tonal",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(totalUnreadNotifications)) + " new ", 1)
                              ]),
                              _: 1
                            }, 512), [
                              [vShow, !!unref(isAllMarkRead)]
                            ]),
                            withDirectives(createVNode(_component_IconBtn, {
                              size: "small",
                              onClick: markAllReadOrUnread
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  color: "high-emphasis",
                                  icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                                }, null, 8, ["icon"]),
                                createVNode(VTooltip, {
                                  activator: "parent",
                                  location: "start"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512), [
                              [vShow, props.notifications.length]
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode("h6", { class: "text-h6 text-truncate" }, " Notifications ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(unref(PerfectScrollbar), {
                          options: { wheelPropagation: false },
                          style: { "max-block-size": "27rem" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "py-0" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.notifications, (notification, index) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: notification.title
                                  }, [
                                    index > 0 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                                    createVNode(VListItem, {
                                      link: "",
                                      lines: "one",
                                      "min-height": "66px",
                                      class: "list-item-hover-class py-3 px-4",
                                      onClick: ($event) => _ctx.$emit("click:notification", notification)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-start gap-3" }, [
                                          createVNode(VAvatar, {
                                            size: "40",
                                            color: notification.color && !notification.img ? notification.color : void 0,
                                            variant: notification.img ? void 0 : "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                              notification.img ? (openBlock(), createBlock(VImg, {
                                                key: 1,
                                                src: notification.img
                                              }, null, 8, ["src"])) : createCommentVNode("", true),
                                              notification.icon ? (openBlock(), createBlock(VIcon, {
                                                key: 2,
                                                icon: notification.icon
                                              }, null, 8, ["icon"])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "variant"]),
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                            createVNode("p", {
                                              class: "text-caption mb-2 text-medium-emphasis",
                                              style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                            }, toDisplayString(notification.subtitle), 1),
                                            createVNode("p", {
                                              class: "text-caption mb-0",
                                              style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                            }, toDisplayString(notification.time), 1)
                                          ]),
                                          createVNode(VSpacer),
                                          createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                            createVNode(VIcon, {
                                              color: !notification.isSeen ? "primary" : "secondary",
                                              class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                              size: "10",
                                              icon: "ri-circle-fill",
                                              onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                            }, null, 8, ["color", "class", "onClick"]),
                                            createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                              createVNode(VIcon, {
                                                size: "20",
                                                icon: "ri-close-line",
                                                color: "medium-emphasis",
                                                class: "visible-in-hover",
                                                onClick: ($event) => _ctx.$emit("remove", notification.id)
                                              }, null, 8, ["onClick"])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ], 64);
                                }), 128)),
                                withDirectives(createVNode(VListItem, {
                                  class: "text-center text-medium-emphasis",
                                  style: { "block-size": "56px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("No Notification Found!")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512), [
                                  [vShow, !props.notifications.length]
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        withDirectives(createVNode(VCardText, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View All Notifications ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512), [
                          [vShow, props.notifications.length]
                        ])
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
              createVNode(VBadge, mergeProps({ dot: "" }, props.badgeProps, {
                "model-value": props.notifications.some((n) => !n.isSeen),
                color: "error",
                bordered: "",
                "offset-x": "1",
                "offset-y": "1",
                class: "notification-badge"
              }), {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: "ri-notification-2-line" })
                ]),
                _: 1
              }, 16, ["model-value"]),
              createVNode(VMenu, {
                activator: "parent",
                width: "380",
                location: props.location,
                offset: "15px",
                "close-on-content-click": false
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "d-flex flex-column" }, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "notification-section" }, {
                        append: withCtx(() => [
                          withDirectives(createVNode(VChip, {
                            size: "small",
                            class: "me-2",
                            variant: "tonal",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(totalUnreadNotifications)) + " new ", 1)
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, !!unref(isAllMarkRead)]
                          ]),
                          withDirectives(createVNode(_component_IconBtn, {
                            size: "small",
                            onClick: markAllReadOrUnread
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                color: "high-emphasis",
                                icon: !unref(isAllMarkRead) ? "ri-mail-line" : "ri-mail-open-line"
                              }, null, 8, ["icon"]),
                              createVNode(VTooltip, {
                                activator: "parent",
                                location: "start"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(!unref(isAllMarkRead) ? "Mark all as unread" : "Mark all as read"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512), [
                            [vShow, props.notifications.length]
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode("h6", { class: "text-h6 text-truncate" }, " Notifications ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(unref(PerfectScrollbar), {
                        options: { wheelPropagation: false },
                        style: { "max-block-size": "27rem" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "py-0" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.notifications, (notification, index) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: notification.title
                                }, [
                                  index > 0 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true),
                                  createVNode(VListItem, {
                                    link: "",
                                    lines: "one",
                                    "min-height": "66px",
                                    class: "list-item-hover-class py-3 px-4",
                                    onClick: ($event) => _ctx.$emit("click:notification", notification)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-start gap-3" }, [
                                        createVNode(VAvatar, {
                                          size: "40",
                                          color: notification.color && !notification.img ? notification.color : void 0,
                                          variant: notification.img ? void 0 : "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            notification.text ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(notification.text)), 1)) : createCommentVNode("", true),
                                            notification.img ? (openBlock(), createBlock(VImg, {
                                              key: 1,
                                              src: notification.img
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            notification.icon ? (openBlock(), createBlock(VIcon, {
                                              key: 2,
                                              icon: notification.icon
                                            }, null, 8, ["icon"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "variant"]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-2 text-high-emphasis font-weight-medium mb-1" }, toDisplayString(notification.title), 1),
                                          createVNode("p", {
                                            class: "text-caption mb-2 text-medium-emphasis",
                                            style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                          }, toDisplayString(notification.subtitle), 1),
                                          createVNode("p", {
                                            class: "text-caption mb-0",
                                            style: { "letter-spacing": "0.4px !important", "line-height": "18px" }
                                          }, toDisplayString(notification.time), 1)
                                        ]),
                                        createVNode(VSpacer),
                                        createVNode("div", { class: "d-flex flex-column align-end gap-2" }, [
                                          createVNode(VIcon, {
                                            color: !notification.isSeen ? "primary" : "secondary",
                                            class: `${notification.isSeen ? "visible-in-hover" : ""} ms-1`,
                                            size: "10",
                                            icon: "ri-circle-fill",
                                            onClick: withModifiers(($event) => _ctx.$emit(notification.isSeen ? "unread" : "read", [notification.id]), ["stop"])
                                          }, null, 8, ["color", "class", "onClick"]),
                                          createVNode("div", { style: { "block-size": "20px", "inline-size": "20px" } }, [
                                            createVNode(VIcon, {
                                              size: "20",
                                              icon: "ri-close-line",
                                              color: "medium-emphasis",
                                              class: "visible-in-hover",
                                              onClick: ($event) => _ctx.$emit("remove", notification.id)
                                            }, null, 8, ["onClick"])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ], 64);
                              }), 128)),
                              withDirectives(createVNode(VListItem, {
                                class: "text-center text-medium-emphasis",
                                style: { "block-size": "56px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No Notification Found!")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512), [
                                [vShow, !props.notifications.length]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      withDirectives(createVNode(VCardText, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View All Notifications ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512), [
                        [vShow, props.notifications.length]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["location"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/Notifications.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NavBarNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = ref([
      {
        id: 1,
        img: avatar4,
        title: "Congratulation Flora! 🎉",
        subtitle: "Won the monthly best seller badge",
        time: "Today",
        isSeen: true
      },
      {
        id: 2,
        text: "Cecilia Becker",
        title: "Cecilia Becker",
        subtitle: "Accepted your connection",
        time: "12h ago",
        isSeen: false,
        color: "primary"
      },
      {
        id: 3,
        img: avatar5,
        title: "New message received 👋🏻",
        subtitle: "You have 10 unread messages",
        time: "11 Aug",
        isSeen: true
      },
      {
        id: 4,
        icon: "ri-bar-chart-line",
        title: "Monthly report generated",
        subtitle: "July month financial report is generated",
        time: "Apr 24, 10:30 AM",
        isSeen: false,
        color: "info"
      },
      {
        id: 5,
        text: "Meta Gadgets",
        title: "Application has been approved 🚀",
        subtitle: "Your Meta Gadgets project application has been approved.",
        time: "Feb 17, 12:17 PM",
        isSeen: false,
        color: "success"
      },
      {
        id: 6,
        icon: "ri-mail-line",
        title: "New message from Harry",
        subtitle: "You have new message from Harry",
        time: "Jan 6, 1:48 PM",
        isSeen: true,
        color: "error"
      }
    ]);
    const removeNotification = (notificationId) => {
      notifications.value.forEach((item, index) => {
        if (notificationId === item.id)
          notifications.value.splice(index, 1);
      });
    };
    const markRead = (notificationId) => {
      notifications.value.forEach((item) => {
        notificationId.forEach((id) => {
          if (id === item.id)
            item.isSeen = true;
        });
      });
    };
    const markUnRead = (notificationId) => {
      notifications.value.forEach((item) => {
        notificationId.forEach((id) => {
          if (id === item.id)
            item.isSeen = false;
        });
      });
    };
    const handleNotificationClick = (notification) => {
      if (!notification.isSeen)
        markRead([notification.id]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Notifications = _sfc_main$1;
      _push(ssrRenderComponent(_component_Notifications, mergeProps({
        notifications: unref(notifications),
        onRemove: removeNotification,
        onRead: markRead,
        onUnread: markUnRead,
        "onClick:notification": handleNotificationClick
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/components/NavBarNotifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
