import { useSSRContext, mergeProps, withCtx, unref, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5, j as avatar6, _ as _export_sfc } from "../ssr.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { _ as _sfc_main$8 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "prismjs";
import "vue-prism-component";
import "./index-D5WAZiYx.js";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$7 = {
  __name: "DemoAvatarGroup",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "v-avatar-group demo-avatar-group" }, _attrs))}>`);
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar1) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` John Doe `);
                } else {
                  return [
                    createTextVNode(" John Doe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar1) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" John Doe ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar2) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Jennie Obrien `);
                } else {
                  return [
                    createTextVNode(" Jennie Obrien ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Jennie Obrien ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar3) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Peter Harper `);
                } else {
                  return [
                    createTextVNode(" Peter Harper ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Peter Harper ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar4) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Vivian Padilla `);
                } else {
                  return [
                    createTextVNode(" Vivian Padilla ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar4) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Vivian Padilla ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar5) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Scott Wells `);
                } else {
                  return [
                    createTextVNode(" Scott Wells ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar5) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Scott Wells ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar6) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              activator: "parent",
              location: "top"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Angel Bishop `);
                } else {
                  return [
                    createTextVNode(" Angel Bishop ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar6) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                activator: "parent",
                location: "top"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Angel Bishop ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, {
        color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` +3 `);
          } else {
            return [
              createTextVNode(" +3 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoAvatarImages",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar1) }, null, _parent));
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar2) }, null, _parent));
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar3) }, null, _parent));
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar4) }, null, _parent));
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar5) }, null, _parent));
      _push(ssrRenderComponent(VAvatar, { image: unref(avatar6) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarImages.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VAvatar, {
    rounded: "0",
    color: "primary",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    rounded: "sm",
    color: "secondary",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    rounded: "",
    color: "success",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    rounded: "lg",
    color: "info",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    rounded: "xl",
    color: "warning",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "error",
    icon: "ri-user-line"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarRounded.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VAvatar, {
    color: "primary",
    icon: "ri-home-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "secondary",
    icon: "ri-cloud-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "success",
    icon: "ri-bell-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "info",
    icon: "ri-user-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "warning",
    icon: "ri-alert-line"
  }, null, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "error",
    icon: "ri-message-line"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarIcons.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VAvatar, {
    color: "primary",
    size: "x-small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<small${_scopeId}>PI</small>`);
      } else {
        return [
          createVNode("small", null, "PI")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "secondary",
    size: "small"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` PI `);
      } else {
        return [
          createTextVNode(" PI ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` PI `);
      } else {
        return [
          createTextVNode(" PI ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "info",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-lg"${_scopeId}>PI</span>`);
      } else {
        return [
          createVNode("span", { class: "text-lg" }, "PI")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "error",
    size: "x-large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-lg"${_scopeId}>PI</span>`);
      } else {
        return [
          createVNode("span", { class: "text-lg" }, "PI")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarSizes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VAvatar, {
    color: "primary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` PI `);
      } else {
        return [
          createTextVNode(" PI ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "secondary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SE `);
      } else {
        return [
          createTextVNode(" SE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "success",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SU `);
      } else {
        return [
          createTextVNode(" SU ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "info",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` IN `);
      } else {
        return [
          createTextVNode(" IN ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "warning",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` WA `);
      } else {
        return [
          createTextVNode(" WA ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, {
    color: "error",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` ER `);
      } else {
        return [
          createTextVNode(" ER ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarTonal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VAvatar, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` PI `);
      } else {
        return [
          createTextVNode(" PI ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SE `);
      } else {
        return [
          createTextVNode(" SE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SU `);
      } else {
        return [
          createTextVNode(" SU ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` IN `);
      } else {
        return [
          createTextVNode(" IN ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` WA `);
      } else {
        return [
          createTextVNode(" WA ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VAvatar, { color: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` ER `);
      } else {
        return [
          createTextVNode(" ER ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/avatar/DemoAvatarColors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const colors = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      PI
    </VAvatar>

    <VAvatar color="secondary">
      SE
    </VAvatar>

    <VAvatar color="success">
      SU
    </VAvatar>

    <VAvatar color="info">
      IN
    </VAvatar>

    <VAvatar color="warning">
      WA
    </VAvatar>

    <VAvatar color="error">
      ER
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      PI
    </VAvatar>

    <VAvatar color="secondary">
      SE
    </VAvatar>

    <VAvatar color="success">
      SU
    </VAvatar>

    <VAvatar color="info">
      IN
    </VAvatar>

    <VAvatar color="warning">
      WA
    </VAvatar>

    <VAvatar color="error">
      ER
    </VAvatar>
  </div>
</template>
` };
const group = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
<\/script>

<template>
  <div class="v-avatar-group demo-avatar-group">
    <VAvatar>
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>

    <VAvatar :color="$vuetify.theme.current.dark ? '#383B55' : '#F0EFF0'">
      +3
    </VAvatar>
  </div>
</template>

<style lang="scss">
.demo-avatar-group{
  &.v-avatar-group {
    .v-avatar{
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
<\/script>

<template>
  <div class="v-avatar-group demo-avatar-group">
    <VAvatar>
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>

    <VAvatar :color="$vuetify.theme.current.dark ? '#383B55' : '#F0EFF0'">
      +3
    </VAvatar>
  </div>
</template>

<style lang="scss">
.demo-avatar-group{
  &.v-avatar-group {
    .v-avatar{
      &:last-child{
        border: none;
      }
    }
  }
}
</style>
` };
const icons = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      icon="ri-home-line"
    />

    <VAvatar
      color="secondary"
      icon="ri-cloud-line"
    />

    <VAvatar
      color="success"
      icon="ri-bell-line"
    />

    <VAvatar
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      color="warning"
      icon="ri-alert-line"
    />

    <VAvatar
      color="error"
      icon="ri-message-line"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      icon="ri-home-line"
    />

    <VAvatar
      color="secondary"
      icon="ri-cloud-line"
    />

    <VAvatar
      color="success"
      icon="ri-bell-line"
    />

    <VAvatar
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      color="warning"
      icon="ri-alert-line"
    />

    <VAvatar
      color="error"
      icon="ri-message-line"
    />
  </div>
</template>
` };
const images = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VAvatar :image="avatar1" />

    <VAvatar :image="avatar2" />

    <VAvatar :image="avatar3" />

    <VAvatar :image="avatar4" />

    <VAvatar :image="avatar5" />

    <VAvatar :image="avatar6" />
  </div>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VAvatar :image="avatar1" />

    <VAvatar :image="avatar2" />

    <VAvatar :image="avatar3" />

    <VAvatar :image="avatar4" />

    <VAvatar :image="avatar5" />

    <VAvatar :image="avatar6" />
  </div>
</template>
` };
const rounded = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="sm"
      color="secondary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded
      color="success"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="lg"
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="xl"
      color="warning"
      icon="ri-user-line"
    />

    <VAvatar
      color="error"
      icon="ri-user-line"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="sm"
      color="secondary"
      icon="ri-user-line"
    />

    <VAvatar
      rounded
      color="success"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="lg"
      color="info"
      icon="ri-user-line"
    />

    <VAvatar
      rounded="xl"
      color="warning"
      icon="ri-user-line"
    />

    <VAvatar
      color="error"
      icon="ri-user-line"
    />
  </div>
</template>
` };
const sizes = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      PI
    </VAvatar>

    <VAvatar color="success">
      PI
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      PI
    </VAvatar>

    <VAvatar color="success">
      PI
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-lg">PI</span>
    </VAvatar>
  </div>
</template>
` };
const tonal = { ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      PI
    </VAvatar>

    <VAvatar
      color="secondary"
      variant="tonal"
    >
      SE
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      SU
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      IN
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      WA
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      ER
    </VAvatar>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      PI
    </VAvatar>

    <VAvatar
      color="secondary"
      variant="tonal"
    >
      SE
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      SU
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      IN
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      WA
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      ER
    </VAvatar>
  </div>
</template>
` };
const _sfc_main = {
  __name: "avatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$8;
      const _component_DemoAvatarColors = __unplugin_components_1;
      const _component_DemoAvatarTonal = __unplugin_components_2;
      const _component_DemoAvatarSizes = __unplugin_components_3;
      const _component_DemoAvatarIcons = __unplugin_components_4;
      const _component_DemoAvatarRounded = __unplugin_components_5;
      const _component_DemoAvatarImages = _sfc_main$6;
      const _component_DemoAvatarGroup = _sfc_main$7;
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>color</code> prop to change the background color of avatar.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop to change the background color of avatar.")
                          ]),
                          createVNode(_component_DemoAvatarColors)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Colors",
                      code: colors
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop to change the background color of avatar.")
                        ]),
                        createVNode(_component_DemoAvatarColors)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>variant=&quot;tonal&quot;</code> to create light background avatars.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarTonal, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, 'variant="tonal"'),
                            createTextVNode(" to create light background avatars.")
                          ]),
                          createVNode(_component_DemoAvatarTonal)
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
                          createTextVNode("Use "),
                          createVNode("code", null, 'variant="tonal"'),
                          createTextVNode(" to create light background avatars.")
                        ]),
                        createVNode(_component_DemoAvatarTonal)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              md: "6",
              cols: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Sizes",
                    code: sizes
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>size</code> prop allows you to change the height and width of the avatar.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarSizes, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "size"),
                            createTextVNode(" prop allows you to change the height and width of the avatar.")
                          ]),
                          createVNode(_component_DemoAvatarSizes)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Sizes",
                      code: sizes
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "size"),
                          createTextVNode(" prop allows you to change the height and width of the avatar.")
                        ]),
                        createVNode(_component_DemoAvatarSizes)
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
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use <code${_scopeId3}>icon</code> prop of <code${_scopeId3}>v-avatar</code> component for rendering icons.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" prop of "),
                            createVNode("code", null, "v-avatar"),
                            createTextVNode(" component for rendering icons.")
                          ]),
                          createVNode(_component_DemoAvatarIcons)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icons",
                      code: icons
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can use "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" prop of "),
                          createVNode("code", null, "v-avatar"),
                          createTextVNode(" component for rendering icons.")
                        ]),
                        createVNode(_component_DemoAvatarIcons)
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
                    code: rounded
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>rounded</code> prop can be used to change the border radius of <code${_scopeId3}>v-avatar</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarRounded, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" prop can be used to change the border radius of "),
                            createVNode("code", null, "v-avatar"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoAvatarRounded)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Rounded",
                      code: rounded
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" prop can be used to change the border radius of "),
                          createVNode("code", null, "v-avatar"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoAvatarRounded)
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
                    title: "Images",
                    code: images
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>You can use <code${_scopeId3}>image</code> prop of <code${_scopeId3}>v-avatar</code> component for rendering image.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarImages, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("You can use "),
                            createVNode("code", null, "image"),
                            createTextVNode(" prop of "),
                            createVNode("code", null, "v-avatar"),
                            createTextVNode(" component for rendering image.")
                          ]),
                          createVNode(_component_DemoAvatarImages)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Images",
                      code: images
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("You can use "),
                          createVNode("code", null, "image"),
                          createTextVNode(" prop of "),
                          createVNode("code", null, "v-avatar"),
                          createTextVNode(" component for rendering image.")
                        ]),
                        createVNode(_component_DemoAvatarImages)
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
                    title: "Group",
                    code: group
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>v-avatar-group</code> class as a wrapper of avatars.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAvatarGroup, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "v-avatar-group"),
                            createTextVNode(" class as a wrapper of avatars.")
                          ]),
                          createVNode(_component_DemoAvatarGroup)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Group",
                      code: group
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "v-avatar-group"),
                          createTextVNode(" class as a wrapper of avatars.")
                        ]),
                        createVNode(_component_DemoAvatarGroup)
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop to change the background color of avatar.")
                      ]),
                      createVNode(_component_DemoAvatarColors)
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
                        createTextVNode("Use "),
                        createVNode("code", null, 'variant="tonal"'),
                        createTextVNode(" to create light background avatars.")
                      ]),
                      createVNode(_component_DemoAvatarTonal)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                md: "6",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Sizes",
                    code: sizes
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "size"),
                        createTextVNode(" prop allows you to change the height and width of the avatar.")
                      ]),
                      createVNode(_component_DemoAvatarSizes)
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
                    title: "Icons",
                    code: icons
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can use "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" prop of "),
                        createVNode("code", null, "v-avatar"),
                        createTextVNode(" component for rendering icons.")
                      ]),
                      createVNode(_component_DemoAvatarIcons)
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
                    code: rounded
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(" prop can be used to change the border radius of "),
                        createVNode("code", null, "v-avatar"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoAvatarRounded)
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
                    title: "Images",
                    code: images
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("You can use "),
                        createVNode("code", null, "image"),
                        createTextVNode(" prop of "),
                        createVNode("code", null, "v-avatar"),
                        createTextVNode(" component for rendering image.")
                      ]),
                      createVNode(_component_DemoAvatarImages)
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
                    title: "Group",
                    code: group
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "v-avatar-group"),
                        createTextVNode(" class as a wrapper of avatars.")
                      ]),
                      createVNode(_component_DemoAvatarGroup)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
