import { useSSRContext, ref, watch, unref, mergeProps, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { g as VProgressLinear } from "../ssr.js";
const _sfc_main = {
  __name: "AppLoadingIndicator",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const bufferValue = ref(20);
    const progressValue = ref(10);
    const isFallbackState = ref(false);
    const interval = ref();
    const showProgress = ref(false);
    watch([
      progressValue,
      isFallbackState
    ], () => {
      if (progressValue.value > 80 && isFallbackState.value)
        progressValue.value = 82;
      startBuffer();
    });
    function startBuffer() {
      clearInterval(interval.value);
      interval.value = setInterval(() => {
        progressValue.value += Math.random() * (15 - 5) + 5;
        bufferValue.value += Math.random() * (15 - 5) + 6;
      }, 800);
    }
    const fallbackHandle = () => {
      showProgress.value = true;
      progressValue.value = 10;
      isFallbackState.value = true;
      startBuffer();
    };
    const resolveHandle = () => {
      isFallbackState.value = false;
      progressValue.value = 100;
      setTimeout(() => {
        clearInterval(interval.value);
        progressValue.value = 0;
        bufferValue.value = 20;
        showProgress.value = false;
      }, 300);
    };
    __expose({
      fallbackHandle,
      resolveHandle
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(showProgress)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "position-fixed",
          style: { "z-index": "9999", "inset-block-start": "0", "inset-inline": "0 0" }
        }, _attrs))}>`);
        _push(ssrRenderComponent(VProgressLinear, {
          modelValue: unref(progressValue),
          "onUpdate:modelValue": ($event) => isRef(progressValue) ? progressValue.value = $event : null,
          "buffer-value": unref(bufferValue),
          color: "primary",
          height: "2",
          "bg-color": "background"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/AppLoadingIndicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
