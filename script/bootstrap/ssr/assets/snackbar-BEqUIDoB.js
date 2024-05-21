import { ref, shallowRef, watch, onMounted, createVNode, mergeProps, onScopeDispose, nextTick, useSSRContext, withCtx, createTextVNode, unref, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { C as propsFactory, a5 as makeLocationProps, a6 as makePositionProps, R as makeRoundedProps, a9 as makeVariantProps, a8 as makeThemeProps, aC as omit, E as genericComponent, av as useProxiedModel, ah as useLocation, ai as usePosition, ab as provideTheme, ad as useVariant, U as useRounded, b7 as refElement, F as useRender, al as genOverlays, g as VProgressLinear, a1 as VDefaultsProvider, V as VBtn, a as VIcon } from "../ssr.js";
import { m as makeVOverlayProps, a as VOverlay } from "./VOverlay-BlPDiq4k.js";
import { f as forwardRefs } from "./forwardRefs-IZGbB77j.js";
import { u as useScopeId } from "./scopeId-3C34eX5s.js";
import { _ as _sfc_main$9 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./index-D5WAZiYx.js";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
function useCountdown(milliseconds) {
  const time = shallowRef(milliseconds);
  let timer = -1;
  function clear() {
    clearInterval(timer);
  }
  function reset() {
    clear();
    nextTick(() => time.value = milliseconds);
  }
  function start(el) {
    const style = el ? getComputedStyle(el) : {
      transitionDuration: 0.2
    };
    const interval = parseFloat(style.transitionDuration) * 1e3 || 200;
    clear();
    if (time.value <= 0)
      return;
    const startTime = performance.now();
    timer = window.setInterval(() => {
      const elapsed = performance.now() - startTime + interval;
      time.value = Math.max(milliseconds - elapsed, 0);
      if (time.value <= 0)
        clear();
    }, interval);
  }
  onScopeDispose(clear);
  return {
    clear,
    time,
    start,
    reset
  };
}
const makeVSnackbarProps = propsFactory({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...makeLocationProps({
    location: "bottom"
  }),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeVariantProps(),
  ...makeThemeProps(),
  ...omit(makeVOverlayProps({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar");
const VSnackbar = genericComponent()({
  name: "VSnackbar",
  props: makeVSnackbarProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      scopeId
    } = useScopeId();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      roundedClasses
    } = useRounded(props);
    const countdown = useCountdown(Number(props.timeout));
    const overlay = ref();
    const timerRef = ref();
    const isHovering = shallowRef(false);
    watch(isActive, startTimeout);
    watch(() => props.timeout, startTimeout);
    onMounted(() => {
      if (isActive.value)
        startTimeout();
    });
    let activeTimeout = -1;
    function startTimeout() {
      countdown.reset();
      window.clearTimeout(activeTimeout);
      const timeout2 = Number(props.timeout);
      if (!isActive.value || timeout2 === -1)
        return;
      const element = refElement(timerRef.value);
      countdown.start(element);
      activeTimeout = window.setTimeout(() => {
        isActive.value = false;
      }, timeout2);
    }
    function clearTimeout() {
      countdown.reset();
      window.clearTimeout(activeTimeout);
    }
    function onPointerenter() {
      isHovering.value = true;
      clearTimeout();
    }
    function onPointerleave() {
      isHovering.value = false;
      startTimeout();
    }
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const hasContent = !!(slots.default || slots.text || props.text);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-snackbar", {
          "v-snackbar--active": isActive.value,
          "v-snackbar--multi-line": props.multiLine && !props.vertical,
          "v-snackbar--timer": !!props.timer,
          "v-snackbar--vertical": props.vertical
        }, positionClasses.value, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "contentProps": mergeProps({
          class: ["v-snackbar__wrapper", themeClasses.value, colorClasses.value, roundedClasses.value, variantClasses.value],
          style: [locationStyles.value, colorStyles.value],
          onPointerenter,
          onPointerleave
        }, overlayProps.contentProps),
        "persistent": true,
        "noClickAnimation": true,
        "scrim": false,
        "scrollStrategy": "none",
        "_disableGlobalStack": true
      }, scopeId), {
        default: () => {
          var _a, _b;
          return [genOverlays(false, "v-snackbar"), props.timer && !isHovering.value && createVNode("div", {
            "key": "timer",
            "class": "v-snackbar__timer"
          }, [createVNode(VProgressLinear, {
            "ref": timerRef,
            "color": typeof props.timer === "string" ? props.timer : "info",
            "max": props.timeout,
            "model-value": countdown.time.value
          }, null)]), hasContent && createVNode("div", {
            "key": "content",
            "class": "v-snackbar__content",
            "role": "status",
            "aria-live": "polite"
          }, [((_a = slots.text) == null ? void 0 : _a.call(slots)) ?? props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.actions && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                variant: "text",
                ripple: false,
                slim: true
              }
            }
          }, {
            default: () => [createVNode("div", {
              "class": "v-snackbar__actions"
            }, [slots.actions()])]
          })];
        },
        activator: slots.activator
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main$8 = {
  __name: "DemoSnackbarTransition",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarFadeVisible = ref(false);
    const isSnackbarScaleVisible = ref(false);
    const isSnackbarScrollReverseVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarFadeVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` fade snackbar `);
          } else {
            return [
              createTextVNode(" fade snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarFadeVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarFadeVisible) ? isSnackbarFadeVisible.value = $event : null,
        transition: "fade-transition",
        location: "top start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a fade transition snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a fade transition snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarScaleVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Scale snackbar `);
          } else {
            return [
              createTextVNode(" Scale snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarScaleVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarScaleVisible) ? isSnackbarScaleVisible.value = $event : null,
        transition: "scale-transition",
        location: "bottom end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a scale transition snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a scale transition snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarScrollReverseVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` scroll y reverse `);
          } else {
            return [
              createTextVNode(" scroll y reverse ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarScrollReverseVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarScrollReverseVisible) ? isSnackbarScrollReverseVisible.value = $event : null,
        transition: "scroll-y-reverse-transition",
        location: "top end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a scroll y reverse transition snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a scroll y reverse transition snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarTransition.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoSnackbarVariants",
  __ssrInlineRender: true,
  setup(__props) {
    const isDefaultSnackbarVisible = ref(false);
    const isTonalSnackbarVisible = ref(false);
    const isTextSnackbarVisible = ref(false);
    const isOutlinedSnackbarVisible = ref(false);
    const isFlatSnackbarVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isDefaultSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Default `);
          } else {
            return [
              createTextVNode(" Default ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isDefaultSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isDefaultSnackbarVisible) ? isDefaultSnackbarVisible.value = $event : null,
        location: "top start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Jelly chocolate bar candy canes apple pie. `);
          } else {
            return [
              createTextVNode(" Jelly chocolate bar candy canes apple pie. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isTonalSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` tonal `);
          } else {
            return [
              createTextVNode(" tonal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isTonalSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isTonalSnackbarVisible) ? isTonalSnackbarVisible.value = $event : null,
        location: "top end",
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ice cream cake candy canes. `);
          } else {
            return [
              createTextVNode(" Ice cream cake candy canes. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isTextSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Text `);
          } else {
            return [
              createTextVNode(" Text ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isTextSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isTextSnackbarVisible) ? isTextSnackbarVisible.value = $event : null,
        location: "end center",
        variant: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pie icing biscuit soufflé liquorice topping. `);
          } else {
            return [
              createTextVNode(" Pie icing biscuit soufflé liquorice topping. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isOutlinedSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Outlined `);
          } else {
            return [
              createTextVNode(" Outlined ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isOutlinedSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isOutlinedSnackbarVisible) ? isOutlinedSnackbarVisible.value = $event : null,
        location: "bottom end",
        variant: "outlined",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Oat cake caramels sesame snaps candy. `);
          } else {
            return [
              createTextVNode(" Oat cake caramels sesame snaps candy. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isFlatSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Flat `);
          } else {
            return [
              createTextVNode(" Flat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isFlatSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isFlatSnackbarVisible) ? isFlatSnackbarVisible.value = $event : null,
        location: "bottom start",
        variant: "flat",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Oat cake caramels sesame snaps candy. `);
          } else {
            return [
              createTextVNode(" Oat cake caramels sesame snaps candy. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarVariants.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoSnackbarPosition",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarTopStartVisible = ref(false);
    const isSnackbarTopVisible = ref(false);
    const isSnackbarTopEndVisible = ref(false);
    const isSnackbarBottomEndVisible = ref(false);
    const isSnackbarBottomVisible = ref(false);
    const isSnackbarBottomStartVisible = ref(false);
    const isSnackbarEndVisible = ref(false);
    const isSnackbarStartVisible = ref(false);
    const isSnackbarCenteredVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarTopVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-up-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-up-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarTopVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarTopVisible) ? isSnackbarTopVisible.value = $event : null,
        location: "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a top snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a top snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarTopEndVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-up-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-right-up-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarTopEndVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarTopEndVisible) ? isSnackbarTopEndVisible.value = $event : null,
        location: "top end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a top right snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a top right snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarEndVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-right-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarEndVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarEndVisible) ? isSnackbarEndVisible.value = $event : null,
        location: "end center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a center end snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a center end snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarBottomEndVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-right-down-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-right-down-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarBottomEndVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarBottomEndVisible) ? isSnackbarBottomEndVisible.value = $event : null,
        location: "bottom end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a bottom end snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a bottom end snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarBottomVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-down-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-down-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarBottomVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarBottomVisible) ? isSnackbarBottomVisible.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a bottom snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a bottom snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarBottomStartVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-down-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-left-down-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarBottomStartVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarBottomStartVisible) ? isSnackbarBottomStartVisible.value = $event : null,
        location: "bottom start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a bottom start snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a bottom start snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarStartVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-left-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarStartVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarStartVisible) ? isSnackbarStartVisible.value = $event : null,
        location: "start center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a center start snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a center start snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarTopStartVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-arrow-left-up-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-arrow-left-up-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarTopStartVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarTopStartVisible) ? isSnackbarTopStartVisible.value = $event : null,
        location: "top start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a top start snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a top start snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        onClick: ($event) => isSnackbarCenteredVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-drag-move-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-drag-move-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarCenteredVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarCenteredVisible) ? isSnackbarCenteredVisible.value = $event : null,
        location: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I&#39;m a center snackbar. `);
          } else {
            return [
              createTextVNode(" I'm a center snackbar. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarPosition.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoSnackbarVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Snackbar `);
          } else {
            return [
              createTextVNode(" Open Snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarVisible) ? isSnackbarVisible.value = $event : null,
        vertical: ""
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              onClick: ($event) => isSnackbarVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Undo `);
                } else {
                  return [
                    createTextVNode(" Undo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              color: "error",
              onClick: ($event) => isSnackbarVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                color: "success",
                onClick: ($event) => isSnackbarVisible.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Undo ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                color: "error",
                onClick: ($event) => isSnackbarVisible.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. `);
          } else {
            return [
              createTextVNode(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarVertical.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSnackbarTimeout",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Snackbar `);
          } else {
            return [
              createTextVNode(" Open Snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarVisible) ? isSnackbarVisible.value = $event : null,
        timeout: 2e3
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` My timeout is set to 2000. `);
          } else {
            return [
              createTextVNode(" My timeout is set to 2000. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarTimeout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSnackbarMultiLine",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Snackbar `);
          } else {
            return [
              createTextVNode(" Open Snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarVisible) ? isSnackbarVisible.value = $event : null,
        "multi-line": ""
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              color: "error",
              onClick: ($event) => isSnackbarVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                color: "error",
                onClick: ($event) => isSnackbarVisible.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. `);
          } else {
            return [
              createTextVNode(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarMultiLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoSnackbarWithAction",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarVisibility = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarVisibility.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Snackbar `);
          } else {
            return [
              createTextVNode(" Open Snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarVisibility),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarVisibility) ? isSnackbarVisibility.value = $event : null
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              color: "error",
              onClick: ($event) => isSnackbarVisibility.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                color: "error",
                onClick: ($event) => isSnackbarVisibility.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hello, I&#39;m a snackbar with actions. `);
          } else {
            return [
              createTextVNode(" Hello, I'm a snackbar with actions. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarWithAction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoSnackbarBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const isSnackbarVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VBtn, {
        onClick: ($event) => isSnackbarVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Snackbar `);
          } else {
            return [
              createTextVNode(" Open Snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: unref(isSnackbarVisible),
        "onUpdate:modelValue": ($event) => isRef(isSnackbarVisible) ? isSnackbarVisible.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hello, I&#39;m a snackbar `);
          } else {
            return [
              createTextVNode(" Hello, I'm a snackbar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/snackbar/DemoSnackbarBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`, js: `<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
` };
const multiLine = { ts: `<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`, js: `<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
` };
const position = { ts: `<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="ri-arrow-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-down-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="ri-arrow-down-line" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-down-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="ri-drag-move-fill" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`, js: `<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="ri-arrow-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="ri-arrow-right-down-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="ri-arrow-down-line" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-down-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="ri-arrow-left-up-line" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="ri-drag-move-fill" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
` };
const timeout = { ts: `<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`, js: `<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
` };
const transition = { ts: `<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`, js: `<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
` };
const variants = { ts: `<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`, js: `<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
` };
const vertical = { ts: `<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`, js: `<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
` };
const withAction = { ts: `<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`, js: `<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
` };
const _sfc_main = {
  __name: "snackbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$9;
      const _component_DemoSnackbarBasic = _sfc_main$1;
      const _component_DemoSnackbarWithAction = _sfc_main$2;
      const _component_DemoSnackbarMultiLine = _sfc_main$3;
      const _component_DemoSnackbarTimeout = _sfc_main$4;
      const _component_DemoSnackbarVertical = _sfc_main$5;
      const _component_DemoSnackbarPosition = _sfc_main$6;
      const _component_DemoSnackbarVariants = _sfc_main$7;
      const _component_DemoSnackbarTransition = _sfc_main$8;
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-snackbar</code> component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-snackbar"),
                            createTextVNode(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")
                          ]),
                          createVNode(_component_DemoSnackbarBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "v-snackbar"),
                          createTextVNode(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")
                        ]),
                        createVNode(_component_DemoSnackbarBasic)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "With Action",
                    code: withAction
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>actions</code> slot to add action button. A <code${_scopeId3}>v-snackbar</code> in its simplest form displays a temporary and closable notification to the user.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarWithAction, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "actions"),
                            createTextVNode(" slot to add action button. A "),
                            createVNode("code", null, "v-snackbar"),
                            createTextVNode(" in its simplest form displays a temporary and closable notification to the user.")
                          ]),
                          createVNode(_component_DemoSnackbarWithAction)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "With Action",
                      code: withAction
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "actions"),
                          createTextVNode(" slot to add action button. A "),
                          createVNode("code", null, "v-snackbar"),
                          createTextVNode(" in its simplest form displays a temporary and closable notification to the user.")
                        ]),
                        createVNode(_component_DemoSnackbarWithAction)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Multi Line",
                    code: multiLine
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>multi-line</code> property extends the height of the <code${_scopeId3}>v-snackbar</code> to give you a little more room for content.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarMultiLine, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "multi-line"),
                            createTextVNode(" property extends the height of the "),
                            createVNode("code", null, "v-snackbar"),
                            createTextVNode(" to give you a little more room for content.")
                          ]),
                          createVNode(_component_DemoSnackbarMultiLine)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multi Line",
                      code: multiLine
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "multi-line"),
                          createTextVNode(" property extends the height of the "),
                          createVNode("code", null, "v-snackbar"),
                          createTextVNode(" to give you a little more room for content.")
                        ]),
                        createVNode(_component_DemoSnackbarMultiLine)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Timeout",
                    code: timeout
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>timeout</code> property lets you customize the delay before the <code${_scopeId3}>v-snackbar</code> is hidden.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarTimeout, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "timeout"),
                            createTextVNode(" property lets you customize the delay before the "),
                            createVNode("code", null, "v-snackbar"),
                            createTextVNode(" is hidden.")
                          ]),
                          createVNode(_component_DemoSnackbarTimeout)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Timeout",
                      code: timeout
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "timeout"),
                          createTextVNode(" property lets you customize the delay before the "),
                          createVNode("code", null, "v-snackbar"),
                          createTextVNode(" is hidden.")
                        ]),
                        createVNode(_component_DemoSnackbarTimeout)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>vertical</code> property allows you to stack the content of your <code${_scopeId3}>v-snackbar</code>.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarVertical, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "vertical"),
                            createTextVNode(" property allows you to stack the content of your "),
                            createVNode("code", null, "v-snackbar"),
                            createTextVNode(".")
                          ]),
                          createVNode(_component_DemoSnackbarVertical)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Vertical",
                      code: vertical
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "vertical"),
                          createTextVNode(" property allows you to stack the content of your "),
                          createVNode("code", null, "v-snackbar"),
                          createTextVNode(".")
                        ]),
                        createVNode(_component_DemoSnackbarVertical)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Position",
                    code: position
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>location</code> prop to change the position of snackbar.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarPosition, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "location"),
                            createTextVNode(" prop to change the position of snackbar.")
                          ]),
                          createVNode(_component_DemoSnackbarPosition)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Position",
                      code: position
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "location"),
                          createTextVNode(" prop to change the position of snackbar.")
                        ]),
                        createVNode(_component_DemoSnackbarPosition)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Variants",
                    code: variants
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Apply different styles to the snackbar using props such as <code${_scopeId3}>shaped</code>, <code${_scopeId3}>rounded</code>, <code${_scopeId3}>color</code>, <code${_scopeId3}>text</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>tile</code> and more.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarVariants, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Apply different styles to the snackbar using props such as "),
                            createVNode("code", null, "shaped"),
                            createTextVNode(", "),
                            createVNode("code", null, "rounded"),
                            createTextVNode(", "),
                            createVNode("code", null, "color"),
                            createTextVNode(", "),
                            createVNode("code", null, "text"),
                            createTextVNode(", "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "tile"),
                            createTextVNode(" and more.")
                          ]),
                          createVNode(_component_DemoSnackbarVariants)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Variants",
                      code: variants
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Apply different styles to the snackbar using props such as "),
                          createVNode("code", null, "shaped"),
                          createTextVNode(", "),
                          createVNode("code", null, "rounded"),
                          createTextVNode(", "),
                          createVNode("code", null, "color"),
                          createTextVNode(", "),
                          createVNode("code", null, "text"),
                          createTextVNode(", "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "tile"),
                          createTextVNode(" and more.")
                        ]),
                        createVNode(_component_DemoSnackbarVariants)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Transition",
                    code: transition
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use transition prop to sets the component transition.</p>`);
                        _push4(ssrRenderComponent(_component_DemoSnackbarTransition, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Use transition prop to sets the component transition."),
                          createVNode(_component_DemoSnackbarTransition)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Transition",
                      code: transition
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Use transition prop to sets the component transition."),
                        createVNode(_component_DemoSnackbarTransition)
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
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "v-snackbar"),
                        createTextVNode(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")
                      ]),
                      createVNode(_component_DemoSnackbarBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "With Action",
                    code: withAction
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "actions"),
                        createTextVNode(" slot to add action button. A "),
                        createVNode("code", null, "v-snackbar"),
                        createTextVNode(" in its simplest form displays a temporary and closable notification to the user.")
                      ]),
                      createVNode(_component_DemoSnackbarWithAction)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Multi Line",
                    code: multiLine
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "multi-line"),
                        createTextVNode(" property extends the height of the "),
                        createVNode("code", null, "v-snackbar"),
                        createTextVNode(" to give you a little more room for content.")
                      ]),
                      createVNode(_component_DemoSnackbarMultiLine)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Timeout",
                    code: timeout
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "timeout"),
                        createTextVNode(" property lets you customize the delay before the "),
                        createVNode("code", null, "v-snackbar"),
                        createTextVNode(" is hidden.")
                      ]),
                      createVNode(_component_DemoSnackbarTimeout)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "vertical"),
                        createTextVNode(" property allows you to stack the content of your "),
                        createVNode("code", null, "v-snackbar"),
                        createTextVNode(".")
                      ]),
                      createVNode(_component_DemoSnackbarVertical)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Position",
                    code: position
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "location"),
                        createTextVNode(" prop to change the position of snackbar.")
                      ]),
                      createVNode(_component_DemoSnackbarPosition)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Variants",
                    code: variants
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Apply different styles to the snackbar using props such as "),
                        createVNode("code", null, "shaped"),
                        createTextVNode(", "),
                        createVNode("code", null, "rounded"),
                        createTextVNode(", "),
                        createVNode("code", null, "color"),
                        createTextVNode(", "),
                        createVNode("code", null, "text"),
                        createTextVNode(", "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "tile"),
                        createTextVNode(" and more.")
                      ]),
                      createVNode(_component_DemoSnackbarVariants)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Transition",
                    code: transition
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Use transition prop to sets the component transition."),
                      createVNode(_component_DemoSnackbarTransition)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/snackbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
