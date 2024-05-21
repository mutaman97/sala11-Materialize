import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { bk as VBtnToggle, V as VBtn, _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { _ as _sfc_main$g } from "./AppCardCode-DkpMhnYF.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
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
import "prismjs";
import "vue-prism-component";
import "./index-D5WAZiYx.js";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$f = {
  __name: "DemoButtonGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleExclusive = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtnToggle, mergeProps({
        modelValue: unref(toggleExclusive),
        "onUpdate:modelValue": ($event) => isRef(toggleExclusive) ? toggleExclusive.value = $event : null,
        density: "compact"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, { icon: "ri-align-left" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, { icon: "ri-align-center" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, { icon: "ri-align-right" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, { icon: "ri-align-justify" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, { icon: "ri-align-left" }),
              createVNode(VBtn, { icon: "ri-align-center" }),
              createVNode(VBtn, { icon: "ri-align-right" }),
              createVNode(VBtn, { icon: "ri-align-justify" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonGroup.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { href: "https://pixinvent.com/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` String Literal `);
      } else {
        return [
          createTextVNode(" String Literal ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    href: "https://pixinvent.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Open New Tab `);
      } else {
        return [
          createTextVNode(" Open New Tab ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonLink.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __unplugin_components_14 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$d = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { to: "/components/alert" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` String Literal `);
      } else {
        return [
          createTextVNode(" String Literal ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "warning",
    to: { path: "/components/alert" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Object Path `);
      } else {
        return [
          createTextVNode(" Object Path ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "success",
    to: { name: "components-alert" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Named Router `);
      } else {
        return [
          createTextVNode(" Named Router ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "secondary",
    to: { path: "/components/alert", query: { plan: "private" } }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` With Query `);
      } else {
        return [
          createTextVNode(" With Query ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonRouter.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$c = {
  __name: "DemoButtonLoaders",
  __ssrInlineRender: true,
  setup(__props) {
    const loadings = ref([]);
    const load = (i) => {
      loadings.value[i] = true;
      setTimeout(() => {
        loadings.value[i] = false;
      }, 3e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))} data-v-ac3efd74>`);
      _push(ssrRenderComponent(VBtn, {
        loading: unref(loadings)[0],
        disabled: unref(loadings)[0],
        color: "primary",
        onClick: ($event) => load(0)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Accept Terms `);
          } else {
            return [
              createTextVNode(" Accept Terms ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        loading: unref(loadings)[1],
        disabled: unref(loadings)[1],
        color: "secondary",
        onClick: ($event) => load(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Upload `);
            _push2(ssrRenderComponent(VIcon, {
              end: "",
              icon: "ri-upload-cloud-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Upload "),
              createVNode(VIcon, {
                end: "",
                icon: "ri-upload-cloud-line"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        loading: unref(loadings)[2],
        disabled: unref(loadings)[2],
        color: "success",
        onClick: ($event) => load(2)
      }, {
        loader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-ac3efd74${_scopeId}>Loading...</span>`);
          } else {
            return [
              createVNode("span", null, "Loading...")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Loader slot `);
          } else {
            return [
              createTextVNode(" Loader slot ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        loading: unref(loadings)[3],
        disabled: unref(loadings)[3],
        color: "info",
        onClick: ($event) => load(3)
      }, {
        loader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="custom-loader" data-v-ac3efd74${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, { icon: "ri-refresh-line" }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "custom-loader" }, [
                createVNode(VIcon, { icon: "ri-refresh-line" })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Icon Loader `);
          } else {
            return [
              createTextVNode(" Icon Loader ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        loading: unref(loadings)[4],
        disabled: unref(loadings)[4],
        color: "warning",
        icon: "ri-upload-cloud-line",
        onClick: ($event) => load(4)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonLoaders.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __unplugin_components_12 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-ac3efd74"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, { block: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Block Button `);
                  } else {
                    return [
                      createTextVNode(" Block Button ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, { block: "" }, {
                  default: withCtx(() => [
                    createTextVNode(" Block Button ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                variant: "outlined",
                block: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Block Button `);
                  } else {
                    return [
                      createTextVNode(" Block Button ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  variant: "outlined",
                  block: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Block Button ")
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
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VBtn, { block: "" }, {
                default: withCtx(() => [
                  createTextVNode(" Block Button ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [
              createVNode(VBtn, {
                variant: "outlined",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Block Button ")
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonBlock.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$a = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { size: "x-large" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra large Button `);
      } else {
        return [
          createTextVNode(" Extra large Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "success",
    size: "large"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Large Button `);
      } else {
        return [
          createTextVNode(" Large Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Normal Button `);
      } else {
        return [
          createTextVNode(" Normal Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    size: "small",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Small Button `);
      } else {
        return [
          createTextVNode(" Small Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    size: "x-small",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Extra small Button `);
      } else {
        return [
          createTextVNode(" Extra small Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonSizing.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, {
    icon: "ri-suitcase-line",
    variant: "text"
  }, null, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    icon: "ri-user-add-line",
    color: "secondary"
  }, null, _parent));
  _push(ssrRenderComponent(VBtn, {
    icon: "ri-search-line",
    variant: "text",
    color: "success"
  }, null, _parent));
  _push(ssrRenderComponent(VBtn, {
    icon: "ri-thumb-up-line",
    variant: "text",
    color: "info"
  }, null, _parent));
  _push(ssrRenderComponent(VBtn, {
    icon: "ri-star-line",
    variant: "text",
    color: "warning"
  }, null, _parent));
  _push(ssrRenderComponent(VBtn, {
    icon: "ri-heart-line",
    variant: "text",
    color: "error"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonIconOnly.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Accept `);
        _push2(ssrRenderComponent(VIcon, {
          end: "",
          icon: "ri-checkbox-circle-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Accept "),
          createVNode(VIcon, {
            end: "",
            icon: "ri-checkbox-circle-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          start: "",
          icon: "ri-subtract-line"
        }, null, _parent2, _scopeId));
        _push2(`Cancel `);
      } else {
        return [
          createVNode(VIcon, {
            start: "",
            icon: "ri-subtract-line"
          }),
          createTextVNode("Cancel ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Upload `);
        _push2(ssrRenderComponent(VIcon, {
          end: "",
          icon: "ri-upload-cloud-line"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(" Upload "),
          createVNode(VIcon, {
            end: "",
            icon: "ri-upload-cloud-line"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, {
          start: "",
          icon: "ri-arrow-left-line"
        }, null, _parent2, _scopeId));
        _push2(` Back `);
      } else {
        return [
          createVNode(VIcon, {
            start: "",
            icon: "ri-arrow-left-line"
          }),
          createTextVNode(" Back ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, { icon: "ri-hammer-line" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, { icon: "ri-hammer-line" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VIcon, { icon: "ri-prohibited-line" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(VIcon, { icon: "ri-prohibited-line" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "tonal" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "secondary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "success",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "info",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "warning",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "error",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonTonal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "plain" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "secondary",
    variant: "plain"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "success",
    variant: "plain"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "info",
    variant: "plain"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "warning",
    variant: "plain"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    color: "error",
    variant: "plain"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonPlain.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "text" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "text",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonText.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Normal Button `);
      } else {
        return [
          createTextVNode(" Normal Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    rounded: "",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Rounded Button `);
      } else {
        return [
          createTextVNode(" Rounded Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    rounded: 0,
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tile Button `);
      } else {
        return [
          createTextVNode(" Tile Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    rounded: "pill",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Pill Button `);
      } else {
        return [
          createTextVNode(" Pill Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonRounded.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "flat" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "flat",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "flat",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "flat",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "flat",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "flat",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonFlat.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { variant: "outlined" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "info"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "warning"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, {
    variant: "outlined",
    color: "error"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonOutlined.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
  _push(ssrRenderComponent(VBtn, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Primary `);
      } else {
        return [
          createTextVNode(" Primary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Secondary `);
      } else {
        return [
          createTextVNode(" Secondary ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Success `);
      } else {
        return [
          createTextVNode(" Success ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VBtn, { color: "error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Error `);
      } else {
        return [
          createTextVNode(" Error ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/button/DemoButtonColors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const block = { ts: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`, js: `<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
` };
const colors = { ts: `<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
` };
const flat = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
` };
const group = { ts: `<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="compact"
  >
    <VBtn icon="ri-align-left" />
    <VBtn icon="ri-align-center" />
    <VBtn icon="ri-align-right" />
    <VBtn icon="ri-align-justify" />
  </VBtnToggle>
</template>
`, js: `<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="compact"
  >
    <VBtn icon="ri-align-left" />
    <VBtn icon="ri-align-center" />
    <VBtn icon="ri-align-right" />
    <VBtn icon="ri-align-justify" />
  </VBtnToggle>
</template>
` };
const icon = { ts: `<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="ri-checkbox-circle-line"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="ri-subtract-line"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="ri-arrow-left-line"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="ri-hammer-line" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="ri-prohibited-line" />
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="ri-checkbox-circle-line"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="ri-subtract-line"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="ri-arrow-left-line"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="ri-hammer-line" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="ri-prohibited-line" />
    </VBtn>
  </div>
</template>
` };
const iconOnly = { ts: `<template>
  <div class="demo-space-x">
    <VBtn
      icon="ri-suitcase-line"
      variant="text"
    />

    <VBtn
      variant="text"
      icon="ri-user-add-line"
      color="secondary"
    />

    <VBtn
      icon="ri-search-line"
      variant="text"
      color="success"
    />

    <VBtn
      icon="ri-thumb-up-line"
      variant="text"
      color="info"
    />

    <VBtn
      icon="ri-star-line"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="ri-heart-line"
      variant="text"
      color="error"
    />
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn
      icon="ri-suitcase-line"
      variant="text"
    />

    <VBtn
      variant="text"
      icon="ri-user-add-line"
      color="secondary"
    />

    <VBtn
      icon="ri-search-line"
      variant="text"
      color="success"
    />

    <VBtn
      icon="ri-thumb-up-line"
      variant="text"
      color="info"
    />

    <VBtn
      icon="ri-star-line"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="ri-heart-line"
      variant="text"
      color="error"
    />
  </div>
</template>
` };
const link = { ts: `<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
` };
const loaders = { ts: `<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="ri-refresh-line" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="ri-upload-cloud-line"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`, js: `<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="ri-upload-cloud-line"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="ri-refresh-line" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="ri-upload-cloud-line"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
` };
const outlined = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
` };
const plain = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
` };
const rounded = { ts: `<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
` };
const router = { ts: `<template>
  <div class="demo-space-x">
    <VBtn to="/components/alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/components/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/components/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn to="/components/alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/components/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/components/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
` };
const sizing = { ts: `<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
` };
const text = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
` };
const tonal = { ts: `<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`, js: `<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
` };
const _sfc_main = {
  __name: "button",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$g;
      const _component_DemoButtonColors = __unplugin_components_1;
      const _component_DemoButtonOutlined = __unplugin_components_2;
      const _component_DemoButtonFlat = __unplugin_components_3;
      const _component_DemoButtonRounded = __unplugin_components_4;
      const _component_DemoButtonText = __unplugin_components_5;
      const _component_DemoButtonPlain = __unplugin_components_6;
      const _component_DemoButtonTonal = __unplugin_components_7;
      const _component_DemoButtonIcon = __unplugin_components_8;
      const _component_DemoButtonIconOnly = __unplugin_components_9;
      const _component_DemoButtonSizing = __unplugin_components_10;
      const _component_DemoButtonBlock = __unplugin_components_11;
      const _component_DemoButtonLoaders = __unplugin_components_12;
      const _component_DemoButtonRouter = __unplugin_components_13;
      const _component_DemoButtonLink = __unplugin_components_14;
      const _component_DemoButtonGroup = _sfc_main$f;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>color</code> prop is used to change the background color of the alert.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonColors, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "color"),
                            createTextVNode(" prop is used to change the background color of the alert.")
                          ]),
                          createVNode(_component_DemoButtonColors)
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
                          createTextVNode("The "),
                          createVNode("code", null, "color"),
                          createTextVNode(" prop is used to change the background color of the alert.")
                        ]),
                        createVNode(_component_DemoButtonColors)
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
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>outlined</code> variant option is used to create outlined buttons.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonOutlined, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(" variant option is used to create outlined buttons.")
                          ]),
                          createVNode(_component_DemoButtonOutlined)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Outlined",
                      code: outlined
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(" variant option is used to create outlined buttons.")
                        ]),
                        createVNode(_component_DemoButtonOutlined)
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
                    title: "Flat",
                    code: flat
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>flat</code> buttons still maintain their background color, but have no box shadow.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonFlat, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "flat"),
                            createTextVNode(" buttons still maintain their background color, but have no box shadow.")
                          ]),
                          createVNode(_component_DemoButtonFlat)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Flat",
                      code: flat
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "flat"),
                          createTextVNode(" buttons still maintain their background color, but have no box shadow.")
                        ]),
                        createVNode(_component_DemoButtonFlat)
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
                    title: "Rounded",
                    code: rounded
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use the <code${_scopeId3}>rounded</code> prop to control the border radius of buttons.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonRounded, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use the "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(" prop to control the border radius of buttons.")
                          ]),
                          createVNode(_component_DemoButtonRounded)
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
                          createTextVNode("Use the "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(" prop to control the border radius of buttons.")
                        ]),
                        createVNode(_component_DemoButtonRounded)
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
                    title: "Text",
                    code: text
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>text</code> variant option to create text button. Text buttons have no box shadow and no background.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonText, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "text"),
                            createTextVNode(" variant option to create text button. Text buttons have no box shadow and no background.")
                          ]),
                          createVNode(_component_DemoButtonText)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Text",
                      code: text
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "text"),
                          createTextVNode(" variant option to create text button. Text buttons have no box shadow and no background.")
                        ]),
                        createVNode(_component_DemoButtonText)
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
                    title: "Plain",
                    code: plain
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>plain</code> variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonPlain, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "plain"),
                            createTextVNode(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")
                          ]),
                          createVNode(_component_DemoButtonPlain)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Plain",
                      code: plain
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "plain"),
                          createTextVNode(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")
                        ]),
                        createVNode(_component_DemoButtonPlain)
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
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>tonal</code> variant option to a create a light background button.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonTonal, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "tonal"),
                            createTextVNode(" variant option to a create a light background button.")
                          ]),
                          createVNode(_component_DemoButtonTonal)
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
                          createVNode("code", null, "tonal"),
                          createTextVNode(" variant option to a create a light background button.")
                        ]),
                        createVNode(_component_DemoButtonTonal)
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
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Icons can be used inside of buttons to add emphasis to the action.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Icons can be used inside of buttons to add emphasis to the action."),
                          createVNode(_component_DemoButtonIcon)
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
                        createVNode("p", null, "Icons can be used inside of buttons to add emphasis to the action."),
                        createVNode(_component_DemoButtonIcon)
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
                    title: "Icon Only",
                    code: iconOnly
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>icon</code> prop to create button with icon only. This property makes the button rounded and applies the text prop styles.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonIconOnly, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "icon"),
                            createTextVNode(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")
                          ]),
                          createVNode(_component_DemoButtonIconOnly)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Icon Only",
                      code: iconOnly
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "icon"),
                          createTextVNode(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")
                        ]),
                        createVNode(_component_DemoButtonIconOnly)
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
                    title: "Sizing",
                    code: sizing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Buttons can be given different sizing options to fit a multitude of scenarios.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonSizing, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Buttons can be given different sizing options to fit a multitude of scenarios."),
                          createVNode(_component_DemoButtonSizing)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Sizing",
                      code: sizing
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Buttons can be given different sizing options to fit a multitude of scenarios."),
                        createVNode(_component_DemoButtonSizing)
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
                    title: "Block",
                    code: block
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>block</code> prop allows buttons to extend the full available width.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonBlock, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "block"),
                            createTextVNode(" prop allows buttons to extend the full available width.")
                          ]),
                          createVNode(_component_DemoButtonBlock)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Block",
                      code: block
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "block"),
                          createTextVNode(" prop allows buttons to extend the full available width.")
                        ]),
                        createVNode(_component_DemoButtonBlock)
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
                    title: "Loaders",
                    code: loaders
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using the <code${_scopeId3}>loading</code> prop, you can notify a user that there is processing taking place. The default behavior is to use a <code${_scopeId3}>v-progress-circular</code> component but this can be customized.</p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonLoaders, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using the "),
                            createVNode("code", null, "loading"),
                            createTextVNode(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),
                            createVNode("code", null, "v-progress-circular"),
                            createTextVNode(" component but this can be customized.")
                          ]),
                          createVNode(_component_DemoButtonLoaders)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Loaders",
                      code: loaders
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using the "),
                          createVNode("code", null, "loading"),
                          createTextVNode(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),
                          createVNode("code", null, "v-progress-circular"),
                          createTextVNode(" component but this can be customized.")
                        ]),
                        createVNode(_component_DemoButtonLoaders)
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
                    title: "Router",
                    code: router
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>to</code> prop to create button with router support.</p>`);
                        _push4(ssrRenderComponent(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Note: On click of the link button, You will get redirected to another page. `);
                            } else {
                              return [
                                createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoButtonRouter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "to"),
                            createTextVNode(" prop to create button with router support.")
                          ]),
                          createVNode(VAlert, {
                            color: "warning",
                            variant: "tonal",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoButtonRouter)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Router",
                      code: router
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "to"),
                          createTextVNode(" prop to create button with router support.")
                        ]),
                        createVNode(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoButtonRouter)
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
                    title: "Link",
                    code: link
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Designates that the component is a link. This is automatic when using the <code${_scopeId3}>href</code> or <code${_scopeId3}>to</code> prop.</p>`);
                        _push4(ssrRenderComponent(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Note: On click of the link button, You will get redirected to another page. `);
                            } else {
                              return [
                                createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoButtonLink, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Designates that the component is a link. This is automatic when using the "),
                            createVNode("code", null, "href"),
                            createTextVNode(" or "),
                            createVNode("code", null, "to"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(VAlert, {
                            color: "warning",
                            variant: "tonal",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoButtonLink)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Link",
                      code: link
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Designates that the component is a link. This is automatic when using the "),
                          createVNode("code", null, "href"),
                          createTextVNode(" or "),
                          createVNode("code", null, "to"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(VAlert, {
                          color: "warning",
                          variant: "tonal",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoButtonLink)
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
                    title: "Group",
                    code: group
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Wrap buttons with the <code${_scopeId3}>v-btn-toggle</code> component to create a group button. You can add a visual divider between buttons with the <code${_scopeId3}>divided</code> prop. </p>`);
                        _push4(ssrRenderComponent(_component_DemoButtonGroup, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" Wrap buttons with the "),
                            createVNode("code", null, "v-btn-toggle"),
                            createTextVNode(" component to create a group button. You can add a visual divider between buttons with the "),
                            createVNode("code", null, "divided"),
                            createTextVNode(" prop. ")
                          ]),
                          createVNode(_component_DemoButtonGroup)
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
                          createTextVNode(" Wrap buttons with the "),
                          createVNode("code", null, "v-btn-toggle"),
                          createTextVNode(" component to create a group button. You can add a visual divider between buttons with the "),
                          createVNode("code", null, "divided"),
                          createTextVNode(" prop. ")
                        ]),
                        createVNode(_component_DemoButtonGroup)
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
                    title: "Colors",
                    code: colors
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "color"),
                        createTextVNode(" prop is used to change the background color of the alert.")
                      ]),
                      createVNode(_component_DemoButtonColors)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Outlined",
                    code: outlined
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(" variant option is used to create outlined buttons.")
                      ]),
                      createVNode(_component_DemoButtonOutlined)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Flat",
                    code: flat
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "flat"),
                        createTextVNode(" buttons still maintain their background color, but have no box shadow.")
                      ]),
                      createVNode(_component_DemoButtonFlat)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Rounded",
                    code: rounded
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use the "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(" prop to control the border radius of buttons.")
                      ]),
                      createVNode(_component_DemoButtonRounded)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Text",
                    code: text
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "text"),
                        createTextVNode(" variant option to create text button. Text buttons have no box shadow and no background.")
                      ]),
                      createVNode(_component_DemoButtonText)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Plain",
                    code: plain
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "plain"),
                        createTextVNode(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")
                      ]),
                      createVNode(_component_DemoButtonPlain)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Tonal",
                    code: tonal
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "tonal"),
                        createTextVNode(" variant option to a create a light background button.")
                      ]),
                      createVNode(_component_DemoButtonTonal)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Icon",
                    code: icon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Icons can be used inside of buttons to add emphasis to the action."),
                      createVNode(_component_DemoButtonIcon)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Icon Only",
                    code: iconOnly
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "icon"),
                        createTextVNode(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")
                      ]),
                      createVNode(_component_DemoButtonIconOnly)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Sizing",
                    code: sizing
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Buttons can be given different sizing options to fit a multitude of scenarios."),
                      createVNode(_component_DemoButtonSizing)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Block",
                    code: block
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "block"),
                        createTextVNode(" prop allows buttons to extend the full available width.")
                      ]),
                      createVNode(_component_DemoButtonBlock)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Loaders",
                    code: loaders
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using the "),
                        createVNode("code", null, "loading"),
                        createTextVNode(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),
                        createVNode("code", null, "v-progress-circular"),
                        createTextVNode(" component but this can be customized.")
                      ]),
                      createVNode(_component_DemoButtonLoaders)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Router",
                    code: router
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "to"),
                        createTextVNode(" prop to create button with router support.")
                      ]),
                      createVNode(VAlert, {
                        color: "warning",
                        variant: "tonal",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoButtonRouter)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Link",
                    code: link
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Designates that the component is a link. This is automatic when using the "),
                        createVNode("code", null, "href"),
                        createTextVNode(" or "),
                        createVNode("code", null, "to"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(VAlert, {
                        color: "warning",
                        variant: "tonal",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Note: On click of the link button, You will get redirected to another page. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoButtonLink)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Group",
                    code: group
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" Wrap buttons with the "),
                        createVNode("code", null, "v-btn-toggle"),
                        createTextVNode(" component to create a group button. You can add a visual divider between buttons with the "),
                        createVNode("code", null, "divided"),
                        createTextVNode(" prop. ")
                      ]),
                      createVNode(_component_DemoButtonGroup)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
