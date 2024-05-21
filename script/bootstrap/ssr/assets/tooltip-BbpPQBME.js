import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, unref, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { V as VBtn, f as avatar4, a as VIcon, _ as _export_sfc } from "../ssr.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { _ as _sfc_main$7 } from "./AppCardCode-DkpMhnYF.js";
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
const _sfc_main$6 = {
  __name: "DemoTooltipTooltipOnVariousElements",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Button `);
            _push2(ssrRenderComponent(VTooltip, {
              location: "top",
              activator: "parent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tooltip `);
                } else {
                  return [
                    createTextVNode(" Tooltip ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Button "),
              createVNode(VTooltip, {
                location: "top",
                activator: "parent"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tooltip ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VAvatar, { color: "info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VImg, { src: unref(avatar4) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTooltip, {
              location: "top",
              activator: "parent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tooltip on Avatar `);
                } else {
                  return [
                    createTextVNode(" Tooltip on Avatar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VImg, { src: unref(avatar4) }, null, 8, ["src"]),
              createVNode(VTooltip, {
                location: "top",
                activator: "parent"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tooltip on Avatar ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VTooltip, { location: "top" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, mergeProps(props, {
              size: "30",
              icon: "ri-user-line"
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, mergeProps(props, {
                size: "30",
                icon: "ri-user-line"
              }), null, 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Tooltip on Icon</span>`);
          } else {
            return [
              createVNode("span", null, "Tooltip on Icon")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipTooltipOnVariousElements.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` scale transition `);
        _push2(ssrRenderComponent(VTooltip, {
          location: "top",
          transition: "scale-transition",
          activator: "parent"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Scale Transition</span>`);
            } else {
              return [
                createVNode("span", null, "Scale Transition")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" scale transition "),
          createVNode(VTooltip, {
            location: "top",
            transition: "scale-transition",
            activator: "parent"
          }, {
            default: withCtx(() => [
              createVNode("span", null, "Scale Transition")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` scroll X transition `);
        _push2(ssrRenderComponent(VTooltip, {
          location: "top",
          activator: "parent",
          transition: "scroll-x-transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Scroll X Transition</span>`);
            } else {
              return [
                createVNode("span", null, "Scroll X Transition")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" scroll X transition "),
          createVNode(VTooltip, {
            location: "top",
            activator: "parent",
            transition: "scroll-x-transition"
          }, {
            default: withCtx(() => [
              createVNode("span", null, "Scroll X Transition")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` scroll y transition `);
        _push2(ssrRenderComponent(VTooltip, {
          location: "top",
          activator: "parent",
          transition: "scroll-y-transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Scroll Y Transition</span>`);
            } else {
              return [
                createVNode("span", null, "Scroll Y Transition")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" scroll y transition "),
          createVNode(VTooltip, {
            location: "top",
            activator: "parent",
            transition: "scroll-y-transition"
          }, {
            default: withCtx(() => [
              createVNode("span", null, "Scroll Y Transition")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipTransition.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  __name: "DemoTooltipVModelSupport",
  __ssrInlineRender: true,
  setup(__props) {
    const isTooltipVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isTooltipVisible.value = !unref(isTooltipVisible)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` toggle tooltip `);
          } else {
            return [
              createTextVNode(" toggle tooltip ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VTooltip, {
        "model-value": unref(isTooltipVisible),
        location: "top"
      }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, mergeProps(props, { icon: "ri-instagram-line" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, mergeProps(props, { icon: "ri-instagram-line" }), null, 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Programmatic tooltip</span>`);
          } else {
            return [
              createVNode("span", null, "Programmatic tooltip")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipVModelSupport.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VBtn, mergeProps({ variant: "outlined" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Open Delay On Hover</span> `);
        _push2(ssrRenderComponent(VTooltip, {
          "open-delay": "500",
          location: "top",
          activator: "parent"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Open Delay On Hover</span>`);
            } else {
              return [
                createVNode("span", null, "Open Delay On Hover")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "Open Delay On Hover"),
          createTextVNode(),
          createVNode(VTooltip, {
            "open-delay": "500",
            location: "top",
            activator: "parent"
          }, {
            default: withCtx(() => [
              createVNode("span", null, "Open Delay On Hover")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipDelayOnHover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "outlined" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Open On Hover</span>`);
        _push2(ssrRenderComponent(VTooltip, {
          activator: "parent",
          location: "top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Open On Hover `);
            } else {
              return [
                createTextVNode(" Open On Hover ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "Open On Hover"),
          createVNode(VTooltip, {
            activator: "parent",
            location: "top"
          }, {
            default: withCtx(() => [
              createTextVNode(" Open On Hover ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Open On click</span>`);
        _push2(ssrRenderComponent(VTooltip, {
          "open-on-click": "",
          "open-on-hover": false,
          location: "top",
          activator: "parent"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Open On click `);
            } else {
              return [
                createTextVNode(" Open On click ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "Open On click"),
          createVNode(VTooltip, {
            "open-on-click": "",
            "open-on-hover": false,
            location: "top",
            activator: "parent"
          }, {
            default: withCtx(() => [
              createTextVNode(" Open On click ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { variant: "outlined" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Open On Hover + Focus</span>`);
        _push2(ssrRenderComponent(VTooltip, {
          "open-on-focus": "",
          location: "top",
          activator: "parent"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Open On Hover + Focus `);
            } else {
              return [
                createTextVNode(" Open On Hover + Focus ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "Open On Hover + Focus"),
          createVNode(VTooltip, {
            "open-on-focus": "",
            location: "top",
            activator: "parent"
          }, {
            default: withCtx(() => [
              createTextVNode(" Open On Hover + Focus ")
            ]),
            _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipEvents.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "tonal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tooltip on End `);
        _push2(ssrRenderComponent(VTooltip, {
          activator: "parent",
          location: "end"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` End Tooltip `);
            } else {
              return [
                createTextVNode(" End Tooltip ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Tooltip on End "),
          createVNode(VTooltip, {
            activator: "parent",
            location: "end"
          }, {
            default: withCtx(() => [
              createTextVNode(" End Tooltip ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { variant: "tonal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tooltip on Start `);
        _push2(ssrRenderComponent(VTooltip, {
          activator: "parent",
          location: "start"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Start Tooltip `);
            } else {
              return [
                createTextVNode(" Start Tooltip ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Tooltip on Start "),
          createVNode(VTooltip, {
            activator: "parent",
            location: "start"
          }, {
            default: withCtx(() => [
              createTextVNode(" Start Tooltip ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { variant: "tonal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tooltip on Top `);
        _push2(ssrRenderComponent(VTooltip, {
          activator: "parent",
          location: "top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Top Tooltip `);
            } else {
              return [
                createTextVNode(" Top Tooltip ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Tooltip on Top "),
          createVNode(VTooltip, {
            activator: "parent",
            location: "top"
          }, {
            default: withCtx(() => [
              createTextVNode(" Top Tooltip ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { variant: "tonal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tooltip on Bottom `);
        _push2(ssrRenderComponent(VTooltip, {
          activator: "parent",
          location: "bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Bottom Tooltip `);
            } else {
              return [
                createTextVNode(" Bottom Tooltip ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Tooltip on Bottom "),
          createVNode(VTooltip, {
            activator: "parent",
            location: "bottom"
          }, {
            default: withCtx(() => [
              createTextVNode(" Bottom Tooltip ")
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tooltip/DemoTooltipLocation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const delayOnHover = { ts: `<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`, js: `<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
` };
const events = { ts: `<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
` };
const location = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
` };
const tooltipOnVariousElements = { ts: `<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="ri-user-line"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`, js: `<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="ri-user-line"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
` };
const transition = { ts: `<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
` };
const vModelSupport = { ts: `<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="ri-instagram-line"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`, js: `<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="ri-instagram-line"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
` };
const _sfc_main = {
  __name: "tooltip",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$7;
      const _component_DemoTooltipLocation = __unplugin_components_1;
      const _component_DemoTooltipEvents = __unplugin_components_2;
      const _component_DemoTooltipDelayOnHover = __unplugin_components_3;
      const _component_DemoTooltipVModelSupport = _sfc_main$4;
      const _component_DemoTooltipTransition = __unplugin_components_5;
      const _component_DemoTooltipTooltipOnVariousElements = _sfc_main$6;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Location",
                    code: location
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use the <code${_scopeId3}>location</code> prop to specify on which side of the element the tooltip should show</p>`);
                        _push4(ssrRenderComponent(_component_DemoTooltipLocation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use the "),
                            createVNode("code", null, "location"),
                            createTextVNode(" prop to specify on which side of the element the tooltip should show")
                          ]),
                          createVNode(_component_DemoTooltipLocation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Location",
                      code: location
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use the "),
                          createVNode("code", null, "location"),
                          createTextVNode(" prop to specify on which side of the element the tooltip should show")
                        ]),
                        createVNode(_component_DemoTooltipLocation)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Events",
                    code: events
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoTooltipEvents, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoTooltipEvents)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Events",
                      code: events
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoTooltipEvents)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Delay On Hover",
                    code: delayOnHover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Delay (in ms) after which tooltip opens (when <code${_scopeId3}>open-on-hover</code> prop is set to true)</p>`);
                        _push4(ssrRenderComponent(_component_DemoTooltipDelayOnHover, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Delay (in ms) after which tooltip opens (when "),
                            createVNode("code", null, "open-on-hover"),
                            createTextVNode(" prop is set to true)")
                          ]),
                          createVNode(_component_DemoTooltipDelayOnHover)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Delay On Hover",
                      code: delayOnHover
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Delay (in ms) after which tooltip opens (when "),
                          createVNode("code", null, "open-on-hover"),
                          createTextVNode(" prop is set to true)")
                        ]),
                        createVNode(_component_DemoTooltipDelayOnHover)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "V-Model Support",
                    code: vModelSupport
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Tooltip visibility can be programmatically changed using <code${_scopeId3}>v-model</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTooltipVModelSupport, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Tooltip visibility can be programmatically changed using "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoTooltipVModelSupport)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "V-Model Support",
                      code: vModelSupport
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Tooltip visibility can be programmatically changed using "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoTooltipVModelSupport)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Transition",
                    code: transition
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>transition</code> prop to sets the component transition.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTooltipTransition, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "transition"),
                            createTextVNode(" prop to sets the component transition.")
                          ]),
                          createVNode(_component_DemoTooltipTransition)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Transition",
                      code: transition
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "transition"),
                          createTextVNode(" prop to sets the component transition.")
                        ]),
                        createVNode(_component_DemoTooltipTransition)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Tooltip on Various Elements",
                    code: tooltipOnVariousElements
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Tooltips can wrap any element.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTooltipTooltipOnVariousElements, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Tooltips can wrap any element."),
                          createVNode(_component_DemoTooltipTooltipOnVariousElements)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Tooltip on Various Elements",
                      code: tooltipOnVariousElements
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Tooltips can wrap any element."),
                        createVNode(_component_DemoTooltipTooltipOnVariousElements)
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Location",
                    code: location
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use the "),
                        createVNode("code", null, "location"),
                        createTextVNode(" prop to specify on which side of the element the tooltip should show")
                      ]),
                      createVNode(_component_DemoTooltipLocation)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Events",
                    code: events
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoTooltipEvents)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Delay On Hover",
                    code: delayOnHover
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Delay (in ms) after which tooltip opens (when "),
                        createVNode("code", null, "open-on-hover"),
                        createTextVNode(" prop is set to true)")
                      ]),
                      createVNode(_component_DemoTooltipDelayOnHover)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "V-Model Support",
                    code: vModelSupport
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Tooltip visibility can be programmatically changed using "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoTooltipVModelSupport)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Transition",
                    code: transition
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "transition"),
                        createTextVNode(" prop to sets the component transition.")
                      ]),
                      createVNode(_component_DemoTooltipTransition)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Tooltip on Various Elements",
                    code: tooltipOnVariousElements
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Tooltips can wrap any element."),
                      createVNode(_component_DemoTooltipTooltipOnVariousElements)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
