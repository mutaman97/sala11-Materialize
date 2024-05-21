import { useSSRContext, computed, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon } from "../ssr.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
const _sfc_main = {
  __name: "CardStatisticsVertical",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    },
    icon: {
      type: String,
      required: true
    },
    stats: {
      type: String,
      required: true
    },
    change: {
      type: Number,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isPositive = computed(() => Math.sign(props.change) === 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.icon) {
                    _push3(ssrRenderComponent(VAvatar, {
                      rounded: "lg",
                      variant: "tonal",
                      color: props.color
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: props.icon,
                            size: "24"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: props.icon,
                              size: "24"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  if (props.change) {
                    _push3(`<div class="${ssrRenderClass([unref(isPositive) ? "text-success" : "text-error", "d-flex align-center text-base mt-n4"])}"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref(isPositive) ? `+${props.change}` : props.change)}%</span>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                      size: "18"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.icon ? (openBlock(), createBlock(VAvatar, {
                      key: 0,
                      rounded: "lg",
                      variant: "tonal",
                      color: props.color
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: props.icon,
                          size: "24"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["color"])) : createCommentVNode("", true),
                    createVNode(VSpacer),
                    props.change ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: [unref(isPositive) ? "text-success" : "text-error", "d-flex align-center text-base mt-n4"]
                    }, [
                      createVNode("span", null, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "%", 1),
                      createVNode(VIcon, {
                        icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                        size: "18"
                      }, null, 8, ["icon"])
                    ], 2)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-1"${_scopeId2}>${ssrInterpolate(props.stats)}</h5><p${_scopeId2}>${ssrInterpolate(props.title)}</p>`);
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    color: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-truncate"${_scopeId3}>${ssrInterpolate(props.subtitle)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-truncate" }, toDisplayString(props.subtitle), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(props.stats), 1),
                    createVNode("p", null, toDisplayString(props.title), 1),
                    createVNode(VChip, {
                      size: "small",
                      color: "secondary"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-truncate" }, toDisplayString(props.subtitle), 1)
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
              createVNode(VCardText, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  props.icon ? (openBlock(), createBlock(VAvatar, {
                    key: 0,
                    rounded: "lg",
                    variant: "tonal",
                    color: props.color
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: props.icon,
                        size: "24"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["color"])) : createCommentVNode("", true),
                  createVNode(VSpacer),
                  props.change ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: [unref(isPositive) ? "text-success" : "text-error", "d-flex align-center text-base mt-n4"]
                  }, [
                    createVNode("span", null, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "%", 1),
                    createVNode(VIcon, {
                      icon: unref(isPositive) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line",
                      size: "18"
                    }, null, 8, ["icon"])
                  ], 2)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-1" }, toDisplayString(props.stats), 1),
                  createVNode("p", null, toDisplayString(props.title), 1),
                  createVNode(VChip, {
                    size: "small",
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-truncate" }, toDisplayString(props.subtitle), 1)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/CardStatisticsVertical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
