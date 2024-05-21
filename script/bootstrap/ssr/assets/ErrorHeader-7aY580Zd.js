import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
const _sfc_main = {
  __name: "ErrorHeader",
  __ssrInlineRender: true,
  props: {
    statusCode: {
      type: [
        String,
        Number
      ],
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mb-4" }, _attrs))} data-v-ef5dee50>`);
      if (props.statusCode) {
        _push(`<h1 class="error-title mb-2" data-v-ef5dee50>${ssrInterpolate(props.statusCode)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (props.title) {
        _push(`<h4 class="text-h4 mb-2" data-v-ef5dee50>${ssrInterpolate(props.title)}</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (props.description) {
        _push(`<p class="mb-0 text-body-1" data-v-ef5dee50>${ssrInterpolate(props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ErrorHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef5dee50"]]);
export {
  __unplugin_components_0 as _
};
