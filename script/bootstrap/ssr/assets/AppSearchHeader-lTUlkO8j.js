import { useSSRContext, mergeProps, unref, withCtx, createVNode, renderSlot, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { a as VIcon } from "../ssr.js";
const AppSearchHeaderBg = "/build/assets/app-search-header-bg-RqmbHf2W.png";
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AppSearchHeader",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    customClass: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: "Ask a question.."
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        flat: "",
        class: ["text-center search-header", __props.customClass],
        style: `background: url(${unref(AppSearchHeaderBg)});`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<h4 class="text-h4 text-primary"${_scopeId2}>${ssrInterpolate(__props.title)}</h4>`);
                    _push3(ssrRenderComponent(VTextField, mergeProps(_ctx.$attrs, {
                      placeholder: __props.placeholder,
                      class: "search-header-input mx-auto my-4"
                    }), {
                      "prepend-inner": withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-search-line",
                            size: "18"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-search-line",
                              size: "18"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<p class="text-body-1"${_scopeId2}>${ssrInterpolate(__props.subtitle)}</p>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode("h4", { class: "text-h4 text-primary" }, toDisplayString(__props.title), 1),
                      createVNode(VTextField, mergeProps(_ctx.$attrs, {
                        placeholder: __props.placeholder,
                        class: "search-header-input mx-auto my-4"
                      }), {
                        "prepend-inner": withCtx(() => [
                          createVNode(VIcon, {
                            icon: "ri-search-line",
                            size: "18"
                          })
                        ]),
                        _: 1
                      }, 16, ["placeholder"]),
                      createVNode("p", { class: "text-body-1" }, toDisplayString(__props.subtitle), 1)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode("h4", { class: "text-h4 text-primary" }, toDisplayString(__props.title), 1),
                    createVNode(VTextField, mergeProps(_ctx.$attrs, {
                      placeholder: __props.placeholder,
                      class: "search-header-input mx-auto my-4"
                    }), {
                      "prepend-inner": withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-search-line",
                          size: "18"
                        })
                      ]),
                      _: 1
                    }, 16, ["placeholder"]),
                    createVNode("p", { class: "text-body-1" }, toDisplayString(__props.subtitle), 1)
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppSearchHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
