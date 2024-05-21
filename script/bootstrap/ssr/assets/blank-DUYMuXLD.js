import { _ as _sfc_main$1 } from "./AppLoadingIndicator-Bc3ISVzy.js";
import { ref, watch, resolveComponent, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Suspense, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { bv as useSkins } from "../ssr.js";
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
const _sfc_main = {
  __name: "blank",
  __ssrInlineRender: true,
  setup(__props) {
    const { injectSkinClasses } = useSkins();
    injectSkinClasses();
    const isFallbackStateActive = ref(false);
    const refLoadingIndicator = ref(null);
    watch([
      isFallbackStateActive,
      refLoadingIndicator
    ], () => {
      if (isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.fallbackHandle();
      if (!isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.resolveHandle();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLoadingIndicator = _sfc_main$1;
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppLoadingIndicator, {
        ref_key: "refLoadingIndicator",
        ref: refLoadingIndicator
      }, null, _parent));
      _push(`<div class="layout-wrapper layout-blank">`);
      _push(ssrRenderComponent(_component_RouterView, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSuspense(_push2, {
              default: () => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
              },
              _: 2
            });
          } else {
            return [
              (openBlock(), createBlock(Suspense, {
                timeout: 0,
                onFallback: ($event) => isFallbackStateActive.value = true,
                onResolve: ($event) => isFallbackStateActive.value = false
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1032, ["onFallback", "onResolve"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
