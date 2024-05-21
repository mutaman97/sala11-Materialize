import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as VIcon } from "../ssr.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList } from "./VList-Bay5Fixr.js";
const _sfc_main = {
  __name: "MoreBtn",
  __ssrInlineRender: true,
  props: {
    menuList: {
      type: Array,
      required: false
    },
    itemProps: {
      type: Boolean,
      required: false
    },
    iconSize: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false,
      default: "text-disabled"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, mergeProps({
        size: "small",
        class: props.class
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: __props.iconSize,
              icon: "ri-more-2-line"
            }, null, _parent2, _scopeId));
            if (props.menuList) {
              _push2(ssrRenderComponent(VMenu, { activator: "parent" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VList, {
                      items: props.menuList,
                      "item-props": props.itemProps
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VList, {
                        items: props.menuList,
                        "item-props": props.itemProps
                      }, null, 8, ["items", "item-props"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VIcon, {
                size: __props.iconSize,
                icon: "ri-more-2-line"
              }, null, 8, ["size"]),
              props.menuList ? (openBlock(), createBlock(VMenu, {
                key: 0,
                activator: "parent"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    items: props.menuList,
                    "item-props": props.itemProps
                  }, null, 8, ["items", "item-props"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/MoreBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
