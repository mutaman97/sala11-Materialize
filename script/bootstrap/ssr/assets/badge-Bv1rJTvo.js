import { useSSRContext, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { c as avatar1, V as VBtn, a as VIcon, _ as _export_sfc } from "../ssr.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { useElementHover } from "@vueuse/core";
import { _ as _sfc_main$b } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "vue3-perfect-scrollbar";
import "@antfu/utils";
import "./forwardRefs-IZGbB77j.js";
import "./easing-BikAOx6-.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./index-D5WAZiYx.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$a = {
  __name: "DemoBadgeTonal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: "5",
        class: "v-badge--tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "1",
        class: "v-badge--tonal",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              variant: "tonal",
              color: "error"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Default `);
                } else {
                  return [
                    createTextVNode(" Default ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                variant: "tonal",
                color: "error"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Default ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        icon: "ri-lock-unlock-line",
        color: "info",
        class: "v-badge--tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, null, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeTonal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoBadgeMaximumValue",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: "99",
        max: "99",
        "offset-x": "5",
        "offset-y": "-1",
        class: "badge-custom-padding"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "100",
        max: "99",
        "offset-x": "5",
        "offset-y": "-1",
        class: "badge-custom-padding"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "1000",
        max: "999",
        "offset-x": "5",
        "offset-y": "-1",
        class: "badge-custom-padding"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeMaximumValue.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoBadgeTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs2 = [
      {
        badge: "3",
        content: "Item One"
      },
      {
        badge: "1",
        content: "Item Two"
      },
      {
        badge: "2",
        content: "Item Three"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTabs, mergeProps({
        grow: "",
        height: "52"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabs2, (tab) => {
              _push2(ssrRenderComponent(VTab, {
                key: tab.content,
                value: tab.content
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBadge, {
                      content: tab.badge,
                      floating: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tab.content)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tab.content), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBadge, {
                        content: tab.badge,
                        floating: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tab.content), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabs2, (tab) => {
                return createVNode(VTab, {
                  key: tab.content,
                  value: tab.content
                }, {
                  default: withCtx(() => [
                    createVNode(VBadge, {
                      content: tab.badge,
                      floating: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tab.content), 1)
                      ]),
                      _: 2
                    }, 1032, ["content"])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeTabs.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoBadgeShowOnHover",
  __ssrInlineRender: true,
  setup(__props) {
    const tRefInstagramBadge = ref();
    const tRefTwitterBadge = ref();
    const tRefWhatsappBadge = ref();
    const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge);
    const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge);
    const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: "3",
        transition: "slide-x-transition",
        "model-value": unref(showTwitterBadgeOnHover)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              ref_key: "tRefTwitterBadge",
              ref: tRefTwitterBadge,
              size: "25",
              icon: "ri-twitter-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                ref_key: "tRefTwitterBadge",
                ref: tRefTwitterBadge,
                size: "25",
                icon: "ri-twitter-line"
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "5",
        transition: "scale-transition",
        "model-value": unref(showInstagramBadgeOnHover)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              ref_key: "tRefInstagramBadge",
              ref: tRefInstagramBadge,
              size: "25",
              icon: "ri-instagram-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                ref_key: "tRefInstagramBadge",
                ref: tRefInstagramBadge,
                size: "25",
                icon: "ri-instagram-line"
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "1",
        transition: "slide-x-transition",
        "model-value": unref(showWhatsappBadgeOnHover)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              ref_key: "tRefWhatsappBadge",
              ref: tRefWhatsappBadge,
              size: "25",
              icon: "ri-whatsapp-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                ref_key: "tRefWhatsappBadge",
                ref: tRefWhatsappBadge,
                size: "25",
                icon: "ri-whatsapp-line"
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeShowOnHover.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoBadgeDynamicNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: unref(notifications),
        "model-value": !!unref(notifications),
        color: "success",
        class: "me-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "40",
              icon: "ri-vuejs-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                size: "40",
                icon: "ri-vuejs-line"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="demo-space-x">`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => notifications.value = (unref(notifications) || 0) + 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Send Message `);
          } else {
            return [
              createTextVNode(" Send Message ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "error",
        onClick: ($event) => notifications.value = 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Clear Notifications `);
          } else {
            return [
              createTextVNode(" Clear Notifications ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeDynamicNotifications.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoBadgeAvatarStatus",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        dot: "",
        bordered: "",
        color: "success",
        location: "bottom end",
        "offset-x": 5,
        "offset-y": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "large" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "large" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        dot: "",
        bordered: "",
        color: "warning",
        location: "bottom end",
        "offset-x": 5,
        "offset-y": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "large" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "large" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        dot: "",
        bordered: "",
        color: "error",
        location: "bottom end",
        "offset-x": 5,
        "offset-y": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "large" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "large" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeAvatarStatus.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoBadgeIcon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, null, {
        badge: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-error-warning-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-error-warning-line" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, null, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, { icon: "ri-lock-unlock-line" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, null, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoBadgePosition",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: "1",
        location: "end top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        location: "bottom start",
        content: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        location: "bottom end",
        content: "3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        location: "top start",
        content: "4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgePosition.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBadge, {
    dot: "",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          size: "25",
          icon: "ri-instagram-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, {
            size: "25",
            icon: "ri-instagram-line"
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeColor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "DemoBadgeStyle",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x d-flex align-center flex-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, { content: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, { variant: "tonal" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Default `);
                } else {
                  return [
                    createTextVNode(" Default ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, { variant: "tonal" }, {
                default: withCtx(() => [
                  createTextVNode(" Default ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        content: "5",
        bordered: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, { variant: "tonal" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Border `);
                } else {
                  return [
                    createTextVNode(" Border ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, { variant: "tonal" }, {
                default: withCtx(() => [
                  createTextVNode(" Border ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        dot: "",
        location: "bottom end",
        "offset-x": "3",
        "offset-y": "3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        inline: "",
        content: "5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBadge, {
        rounded: "sm",
        content: "5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAvatar, { size: "48" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAvatar, { size: "48" }, {
                default: withCtx(() => [
                  createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/badge/DemoBadgeStyle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const avatarStatus = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const color = { ts: `<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>
  </div>
</template>
` };
const dynamicNotifications = { ts: `<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="ri-vuejs-line"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`, js: `<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="ri-vuejs-line"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
` };
const icon = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="ri-error-warning-line" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="ri-lock-unlock-line">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="ri-error-warning-line" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="ri-lock-unlock-line">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const maximumValue = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
      class="badge-custom-padding"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const position = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const showOnHover = { ts: `<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="ri-twitter-line"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="ri-whatsapp-line"
      />
    </VBadge>
  </div>
</template>
`, js: `<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="ri-twitter-line"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="ri-instagram-line"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="ri-whatsapp-line"
      />
    </VBadge>
  </div>
</template>
` };
const style = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const tabs = { ts: `<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    height="52"
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        floating
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`, js: `<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs
    grow
    height="52"
  >
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        floating
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
` };
const tonal = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn
        variant="tonal"
        color="error"
      >
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="ri-lock-unlock-line"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn
        variant="tonal"
        color="error"
      >
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="ri-lock-unlock-line"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
` };
const _sfc_main = {
  __name: "badge",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$b;
      const _component_DemoBadgeStyle = _sfc_main$1;
      const _component_DemoBadgeColor = __unplugin_components_2;
      const _component_DemoBadgePosition = _sfc_main$3;
      const _component_DemoBadgeIcon = _sfc_main$4;
      const _component_DemoBadgeAvatarStatus = _sfc_main$5;
      const _component_DemoBadgeDynamicNotifications = _sfc_main$6;
      const _component_DemoBadgeShowOnHover = _sfc_main$7;
      const _component_DemoBadgeTabs = _sfc_main$8;
      const _component_DemoBadgeMaximumValue = _sfc_main$9;
      const _component_DemoBadgeTonal = _sfc_main$a;
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
                    title: "Style",
                    code: style
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use various props like <code${_scopeId3}>bordered</code>, <code${_scopeId3}>dot</code>, <code${_scopeId3}>inline</code>, <code${_scopeId3}>rounded</code> etc. to style the badge.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeStyle, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use various props like "),
                            createVNode("code", null, "bordered"),
                            createTextVNode(", "),
                            createVNode("code", null, "dot"),
                            createTextVNode(", "),
                            createVNode("code", null, "inline"),
                            createTextVNode(", "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" etc. to style the badge.")
                          ]),
                          createVNode(_component_DemoBadgeStyle)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Style",
                      code: style
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can use various props like "),
                          createVNode("code", null, "bordered"),
                          createTextVNode(", "),
                          createVNode("code", null, "dot"),
                          createTextVNode(", "),
                          createVNode("code", null, "inline"),
                          createTextVNode(", "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" etc. to style the badge.")
                        ]),
                        createVNode(_component_DemoBadgeStyle)
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
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop to create various background badges.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeColor, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop to create various background badges.")
                          ]),
                          createVNode(_component_DemoBadgeColor)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Color",
                      code: color
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop to create various background badges.")
                        ]),
                        createVNode(_component_DemoBadgeColor)
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
                    title: "Position",
                    code: position
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use <code${_scopeId3}>location</code> prop to change the position of the badge. Possible values are <code${_scopeId3}>top-end</code>, <code${_scopeId3}>bottom-end</code>, <code${_scopeId3}>bottom-start</code>, <code${_scopeId3}>top-start</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgePosition, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use "),
                            createVNode("code", null, "location"),
                            createTextVNode(" prop to change the position of the badge. Possible values are "),
                            createVNode("code", null, "top-end"),
                            createTextVNode(", "),
                            createVNode("code", null, "bottom-end"),
                            createTextVNode(", "),
                            createVNode("code", null, "bottom-start"),
                            createTextVNode(", "),
                            createVNode("code", null, "top-start"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoBadgePosition)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Position",
                      code: position
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can use "),
                          createVNode("code", null, "location"),
                          createTextVNode(" prop to change the position of the badge. Possible values are "),
                          createVNode("code", null, "top-end"),
                          createTextVNode(", "),
                          createVNode("code", null, "bottom-end"),
                          createTextVNode(", "),
                          createVNode("code", null, "bottom-start"),
                          createTextVNode(", "),
                          createVNode("code", null, "top-start"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoBadgePosition)
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
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use <code${_scopeId3}>icon</code> prop or use <code${_scopeId3}>slot</code> to render the icon</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" prop or use "),
                            createVNode("code", null, "slot"),
                            createTextVNode(" to render the icon")
                          ]),
                          createVNode(_component_DemoBadgeIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icon",
                      code: icon
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can use "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" prop or use "),
                          createVNode("code", null, "slot"),
                          createTextVNode(" to render the icon")
                        ]),
                        createVNode(_component_DemoBadgeIcon)
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
                    title: "Avatar Status",
                    code: avatarStatus
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use badge with avatar as status.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeAvatarStatus, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "You can use badge with avatar as status."),
                          createVNode(_component_DemoBadgeAvatarStatus)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Avatar Status",
                      code: avatarStatus
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "You can use badge with avatar as status."),
                        createVNode(_component_DemoBadgeAvatarStatus)
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
                    title: "Dynamic notifications",
                    code: dynamicNotifications
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can incorporate badges with dynamic content to make things such as a notification system.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeDynamicNotifications, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "You can incorporate badges with dynamic content to make things such as a notification system."),
                          createVNode(_component_DemoBadgeDynamicNotifications)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Dynamic notifications",
                      code: dynamicNotifications
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "You can incorporate badges with dynamic content to make things such as a notification system."),
                        createVNode(_component_DemoBadgeDynamicNotifications)
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
                    title: "Show on hover",
                    code: showOnHover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can do many things with visibility control, for example, show badge on hover.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeShowOnHover, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "You can do many things with visibility control, for example, show badge on hover."),
                          createVNode(_component_DemoBadgeShowOnHover)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Show on hover",
                      code: showOnHover
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "You can do many things with visibility control, for example, show badge on hover."),
                        createVNode(_component_DemoBadgeShowOnHover)
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
                    title: "Tabs",
                    code: tabs
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Badges help convey information to the user in a variety of ways.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeTabs, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Badges help convey information to the user in a variety of ways."),
                          createVNode(_component_DemoBadgeTabs)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Tabs",
                      code: tabs
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Badges help convey information to the user in a variety of ways."),
                        createVNode(_component_DemoBadgeTabs)
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
                    title: "Maximum Value",
                    code: maximumValue
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>max</code> prop to cap the value of the badge content</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeMaximumValue, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "max"),
                            createTextVNode(" prop to cap the value of the badge content")
                          ]),
                          createVNode(_component_DemoBadgeMaximumValue)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Maximum Value",
                      code: maximumValue
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "max"),
                          createTextVNode(" prop to cap the value of the badge content")
                        ]),
                        createVNode(_component_DemoBadgeMaximumValue)
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
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use class <code${_scopeId3}>v-badge--tonal</code> for using tonal variant badge.</p>`);
                        _push4(ssrRenderComponent(_component_DemoBadgeTonal, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use class "),
                            createVNode("code", null, "v-badge--tonal"),
                            createTextVNode(" for using tonal variant badge.")
                          ]),
                          createVNode(_component_DemoBadgeTonal)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Tonal",
                      code: tonal
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use class "),
                          createVNode("code", null, "v-badge--tonal"),
                          createTextVNode(" for using tonal variant badge.")
                        ]),
                        createVNode(_component_DemoBadgeTonal)
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
                    title: "Style",
                    code: style
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can use various props like "),
                        createVNode("code", null, "bordered"),
                        createTextVNode(", "),
                        createVNode("code", null, "dot"),
                        createTextVNode(", "),
                        createVNode("code", null, "inline"),
                        createTextVNode(", "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(" etc. to style the badge.")
                      ]),
                      createVNode(_component_DemoBadgeStyle)
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
                    title: "Color",
                    code: color
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop to create various background badges.")
                      ]),
                      createVNode(_component_DemoBadgeColor)
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
                    title: "Position",
                    code: position
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can use "),
                        createVNode("code", null, "location"),
                        createTextVNode(" prop to change the position of the badge. Possible values are "),
                        createVNode("code", null, "top-end"),
                        createTextVNode(", "),
                        createVNode("code", null, "bottom-end"),
                        createTextVNode(", "),
                        createVNode("code", null, "bottom-start"),
                        createTextVNode(", "),
                        createVNode("code", null, "top-start"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoBadgePosition)
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
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can use "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" prop or use "),
                        createVNode("code", null, "slot"),
                        createTextVNode(" to render the icon")
                      ]),
                      createVNode(_component_DemoBadgeIcon)
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
                    title: "Avatar Status",
                    code: avatarStatus
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "You can use badge with avatar as status."),
                      createVNode(_component_DemoBadgeAvatarStatus)
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
                    title: "Dynamic notifications",
                    code: dynamicNotifications
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "You can incorporate badges with dynamic content to make things such as a notification system."),
                      createVNode(_component_DemoBadgeDynamicNotifications)
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
                    title: "Show on hover",
                    code: showOnHover
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "You can do many things with visibility control, for example, show badge on hover."),
                      createVNode(_component_DemoBadgeShowOnHover)
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
                    title: "Tabs",
                    code: tabs
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Badges help convey information to the user in a variety of ways."),
                      createVNode(_component_DemoBadgeTabs)
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
                    title: "Maximum Value",
                    code: maximumValue
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "max"),
                        createTextVNode(" prop to cap the value of the badge content")
                      ]),
                      createVNode(_component_DemoBadgeMaximumValue)
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
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use class "),
                        createVNode("code", null, "v-badge--tonal"),
                        createTextVNode(" for using tonal variant badge.")
                      ]),
                      createVNode(_component_DemoBadgeTonal)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
