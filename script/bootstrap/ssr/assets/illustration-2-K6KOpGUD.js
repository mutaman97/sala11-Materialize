import { useSSRContext, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
const _sfc_main = {
  __name: "CardStatisticsWithImages",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
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
    image: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    const isPositive = computed(() => Math.sign(props.change) === 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "position-relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6 mb-2"${_scopeId2}>${ssrInterpolate(props.title)}</h6>`);
                  if (props.subtitle) {
                    _push3(ssrRenderComponent(VChip, {
                      size: "small",
                      color: props.color,
                      class: "mb-5"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.subtitle)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.subtitle), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="d-flex align-center flex-wrap"${_scopeId2}><h4 class="text-h4 me-2"${_scopeId2}>${ssrInterpolate(props.stats)}</h4><div class="${ssrRenderClass([unref(isPositive) ? "text-success" : "text-error", "text-body-1"])}"${_scopeId2}>${ssrInterpolate(unref(isPositive) ? `+${props.change}` : props.change)}% </div></div>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(props.title), 1),
                    props.subtitle ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      size: "small",
                      color: props.color,
                      class: "mb-5"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.subtitle), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])) : createCommentVNode("", true),
                    createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                      createVNode("h4", { class: "text-h4 me-2" }, toDisplayString(props.stats), 1),
                      createVNode("div", {
                        class: ["text-body-1", unref(isPositive) ? "text-success" : "text-error"]
                      }, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "% ", 3)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`<div class="illustrator-img"${_scopeId}>`);
            if (props.image) {
              _push2(`<img${ssrRenderAttr("src", props.image)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(props.title), 1),
                  props.subtitle ? (openBlock(), createBlock(VChip, {
                    key: 0,
                    size: "small",
                    color: props.color,
                    class: "mb-5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.subtitle), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])) : createCommentVNode("", true),
                  createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                    createVNode("h4", { class: "text-h4 me-2" }, toDisplayString(props.stats), 1),
                    createVNode("div", {
                      class: ["text-body-1", unref(isPositive) ? "text-success" : "text-error"]
                    }, toDisplayString(unref(isPositive) ? `+${props.change}` : props.change) + "% ", 3)
                  ])
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              createVNode("div", { class: "illustrator-img" }, [
                props.image ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: props.image
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/cards/CardStatisticsWithImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const illustration1 = "/build/assets/illustration-1-DfOzYJCq.png";
const illustration2 = "/build/assets/illustration-2-JNfKn5t1.png";
export {
  _sfc_main as _,
  illustration2 as a,
  illustration1 as i
};
