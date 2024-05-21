import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as VIcon } from "../ssr.js";
const _sfc_main = {
  __name: "DialogCloseBtn",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: false,
      default: "ri-close-line"
    },
    iconSize: {
      type: String,
      required: false,
      default: "22"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, mergeProps({ class: "v-dialog-close-btn" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: props.icon,
              size: props.iconSize
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                icon: props.icon,
                size: props.iconSize
              }, null, 8, ["icon", "size"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/DialogCloseBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
