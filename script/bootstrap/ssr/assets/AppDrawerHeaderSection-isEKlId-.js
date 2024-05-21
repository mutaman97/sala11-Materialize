import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { a as VIcon } from "../ssr.js";
const _sfc_main = {
  __name: "AppDrawerHeaderSection",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-5 d-flex align-center" }, _attrs))}><h5 class="text-h5">${ssrInterpolate(props.title)}</h5>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "beforeClose", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_IconBtn, {
        class: "text-medium-emphasis ms-1",
        size: "x-small",
        onClick: ($event) => _ctx.$emit("cancel", $event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              size: "24",
              icon: "ri-close-line"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                size: "24",
                icon: "ri-close-line"
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/AppDrawerHeaderSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
