var _a;
import { _ as __unplugin_components_1 } from "./CustomRadiosWithImage-RAmFAl8j.js";
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createElementBlock, createStaticVNode, shallowRef, ref, computed, watch, onMounted, createVNode, onUnmounted, unref, isRef, withDirectives, vShow, createBlock, Fragment, renderList, nextTick, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { useDebounceFn, useStorage } from "@vueuse/core";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { C as propsFactory, D as makeComponentProps, az as defineComponent, aO as clamp, X as convertToUnit, aL as useResizeObserver, F as useRender, bx as getEventCoordinates, by as HSVtoHex, bz as has, bA as HSVtoRGB, bB as HSVtoHSL, bC as RGBtoHSV, bD as HSLtoHSV, bE as HexToHSV, V as VBtn, bF as SUPPORTS_EYE_DROPPER, bG as HSVtoCSS, bH as parseColor, bI as RGBtoCSS, ap as deepEqual, a as VIcon, bJ as getContrast, aC as omit, av as useProxiedModel, aJ as consoleWarn, aI as useRtl, Z as provideDefaults, u as useConfigStore, l as useTheme, bK as cookieRef, bL as namespaceConfig, bM as Theme, bN as Skins, bO as Layout, bP as AppContentLayoutNav, bQ as ContentWidth, bR as Direction, B as themeConfig, bS as staticPrimaryColor, bT as staticPrimaryDarkenColor } from "../ssr.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { V as VNavigationDrawer } from "./VNavigationDrawer-CX2Ouxxa.js";
import { V as VBadge } from "./VBadge-DPwmmvxp.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VSlider } from "./VSlider-DJW38cpe.js";
import { m as makeVSheetProps, V as VSheet } from "./VSheet-BoIzvRsi.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
const _sfc_main$2 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "CustomizerSection",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    divider: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (props.divider) {
        _push(ssrRenderComponent(VDivider, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "customizer-section" }, _ctx.$attrs))}><div>`);
      _push(ssrRenderComponent(VChip, {
        label: "",
        size: "small",
        color: "primary",
        rounded: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/CustomizerSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$f = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="#E7E3FC" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="63.755" height="7.8" x="34.615" y="5.172" stroke="#E7E3FC" stroke-opacity=".12" rx="1.5"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.002" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="39.226" height="16.6" x="58.984" y="20.113" stroke="#E7E3FC" stroke-opacity=".12" rx="1.5"></rect><rect width="18.046" height="16.6" x="34.615" y="20.113" stroke="#E7E3FC" stroke-opacity=".12" rx="1.5"></rect><rect width="63.755" height="16.6" x="34.615" y="42.955" stroke="#E7E3FC" stroke-opacity=".12" rx="1.5"></rect>', 14);
const _hoisted_16$1 = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, [..._hoisted_16$1]);
}
const borderSkinDark = { render: render$f };
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$e = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="#2E263D" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="63.755" height="7.8" x="34.615" y="5.172" stroke="#2E263D" stroke-opacity=".12" rx="1.5"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.002" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="39.226" height="16.6" x="58.984" y="20.113" stroke="#2E263D" stroke-opacity=".12" rx="1.5"></rect><rect width="18.046" height="16.6" x="34.615" y="20.113" stroke="#2E263D" stroke-opacity=".12" rx="1.5"></rect><rect width="63.755" height="16.6" x="34.615" y="42.955" stroke="#2E263D" stroke-opacity=".12" rx="1.5"></rect>', 14);
const _hoisted_16 = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, [..._hoisted_16]);
}
const borderSkinLight = { render: render$e };
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><path fill="#E7E3FC" fill-opacity=".04" d="M0 4a4 4 0 0 1 4-4h9.736v66H4a4 4 0 0 1-4-4z"></path><rect width="7.849" height="2.789" x="2.943" y="23.884" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="6.868" height="6.794" x="3.434" y="5.881" fill="#E7E3FC" fill-opacity=".3" rx="2"></rect><rect width="7.849" height="2.789" x="2.943" y="34.438" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="44.992" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="55.546" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="75.437" height="8.8" x="21.472" y="4.672" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="25.617" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="78.248" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="84.135" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="90.022" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="46.821" height="17.6" x="50.491" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="22.168" height="17.6" x="21.472" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="75.841" height="17.6" x="21.472" y="42.455" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect>', 15);
const _hoisted_17$3 = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, [..._hoisted_17$3]);
}
const collapsedDark = { render: render$d };
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><path fill="#2E263D" fill-opacity=".04" d="M0 4a4 4 0 0 1 4-4h9.736v66H4a4 4 0 0 1-4-4z"></path><rect width="7.849" height="2.789" x="2.943" y="23.884" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="6.868" height="6.794" x="3.434" y="5.881" fill="#2E263D" fill-opacity=".3" rx="2"></rect><rect width="7.849" height="2.789" x="2.943" y="34.438" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="44.992" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="55.546" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="75.437" height="8.8" x="21.472" y="4.672" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="25.617" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="78.248" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="84.135" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="90.022" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="46.821" height="17.6" x="50.491" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="22.168" height="17.6" x="21.472" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="75.841" height="17.6" x="21.472" y="42.455" fill="#2E263D" fill-opacity=".08" rx="2"></rect>', 15);
const _hoisted_17$2 = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, [..._hoisted_17$2]);
}
const collapsedLight = { render: render$c };
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="64.755" height="8.8" x="19.421" y="4.672" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="22.345" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="65.515" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="71.401" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="77.288" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="44.352" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="19.421" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="65.159" height="17.6" x="19.421" y="42.455" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect>', 9);
const _hoisted_11$3 = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, [..._hoisted_11$3]);
}
const compactDark = { render: render$b };
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="64.755" height="8.8" x="19.421" y="4.672" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="22.345" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="65.515" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="71.401" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="77.288" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="44.352" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="19.421" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="65.159" height="17.6" x="19.421" y="42.455" fill="#2E263D" fill-opacity=".08" rx="2"></rect>', 9);
const _hoisted_11$2 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [..._hoisted_11$2]);
}
const compactLight = { render: render$a };
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><path fill="#E7E3FC" fill-opacity=".08" d="M0 4a4 4 0 0 1 4-4h23.472v66H4a4 4 0 0 1-4-4z"></path><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="#E7E3FC" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="#E7E3FC" fill-opacity=".3" rx="1.395"></rect><rect width="64.755" height="8.8" x="34.115" y="4.672" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.982" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="58.484" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="34.115" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="64.755" height="17.6" x="34.115" y="42.455" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect>', 15);
const _hoisted_17$1 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._hoisted_17$1]);
}
const defaultSkinDark = { render: render$9 };
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><path fill="#2E263D" fill-opacity=".08" d="M0 4a4 4 0 0 1 4-4h23.472v66H4a4 4 0 0 1-4-4z"></path><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="#2E263D" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="#2E263D" fill-opacity=".3" rx="1.395"></rect><rect width="64.755" height="8.8" x="34.115" y="4.672" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.982" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="58.484" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="34.115" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="64.755" height="17.6" x="34.115" y="42.455" fill="#2E263D" fill-opacity=".08" rx="2"></rect>', 15);
const _hoisted_17 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._hoisted_17]);
}
const defaultSkinLight = { render: render$8 };
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="46.821" height="17.6" x="44.007" y="19.614" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="22.168" height="17.6" x="14.985" y="19.614" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="75.841" height="17.6" x="14.985" y="42.455" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="74.151" height="9.01" x="14.925" y="4.689" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="6.003" height="5.38" x="20.026" y="6.504" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="6.637" height="2.461" x="33.877" y="7.964" fill="#E7E3FC" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="48.365" y="7.964" fill="#E7E3FC" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="62.851" y="7.964" fill="#E7E3FC" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="77.338" y="7.964" fill="#E7E3FC" fill-opacity=".3" rx="1.231"></rect>', 10);
const _hoisted_12$1 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._hoisted_12$1]);
}
const horizontalDark = { render: render$7 };
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="46.821" height="17.6" x="44.007" y="19.614" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="22.168" height="17.6" x="14.985" y="19.614" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="75.841" height="17.6" x="14.985" y="42.455" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="74.151" height="9.01" x="14.925" y="4.689" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="6.003" height="5.38" x="20.026" y="6.504" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="6.637" height="2.461" x="33.877" y="7.964" fill="#2E263D" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="48.365" y="7.964" fill="#2E263D" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="62.851" y="7.964" fill="#2E263D" fill-opacity=".3" rx="1.231"></rect><rect width="6.637" height="2.461" x="77.338" y="7.964" fill="#2E263D" fill-opacity=".3" rx="1.231"></rect>', 10);
const _hoisted_12 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._hoisted_12]);
}
const horizontalLight = { render: render$6 };
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="24.098" height="57.589" x="5.202" y="4.121" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="10.323" y="16.87" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="9.879" height="2.092" x="10.323" y="25.562" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="12.383" height="2.092" x="10.323" y="34.254" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="6.088" height="2.092" x="10.323" y="42.946" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="8.091" height="2.092" x="10.323" y="51.638" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="62.389" height="57.589" x="35.514" y="4.121" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="43.758" y="14.183" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="43.758" y="22.875" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="41.208" height="2.092" x="43.758" y="31.567" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="43.758" y="40.259" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="5.775" height="2.092" x="43.758" y="48.952" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect>', 13);
const _hoisted_15$3 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._hoisted_15$3]);
}
const ltrDark = { render: render$5 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="24.098" height="57.589" x="5.202" y="4.121" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="10.323" y="16.87" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="9.879" height="2.092" x="10.323" y="25.562" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="12.383" height="2.092" x="10.323" y="34.254" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="6.088" height="2.092" x="10.323" y="42.946" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="8.091" height="2.092" x="10.323" y="51.638" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="62.389" height="57.589" x="35.514" y="4.121" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="43.758" y="14.183" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="43.758" y="22.875" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="41.208" height="2.092" x="43.758" y="31.567" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="43.758" y="40.259" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="5.775" height="2.092" x="43.758" y="48.952" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect>', 13);
const _hoisted_15$2 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._hoisted_15$2]);
}
const ltrLight = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="24.098" height="57.589" x="73.476" y="4.121" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="78.599" y="16.87" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="9.879" height="2.092" x="82.571" y="25.562" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="12.383" height="2.092" x="80.069" y="34.254" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="6.088" height="2.092" x="86.363" y="42.946" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="8.091" height="2.092" x="84.361" y="51.638" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="62.389" height="57.589" x="5.202" y="4.121" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="45.709" y="14.183" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="26.762" y="22.875" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="41.208" height="2.092" x="18.355" y="31.567" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="26.762" y="40.259" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect><rect width="5.775" height="2.092" x="53.788" y="48.952" fill="#E7E3FC" fill-opacity=".3" rx="1.046"></rect>', 13);
const _hoisted_15$1 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_15$1]);
}
const rtlDark = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="24.098" height="57.589" x="73.476" y="4.121" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="78.599" y="16.87" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="9.879" height="2.092" x="82.571" y="25.562" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="12.383" height="2.092" x="80.069" y="34.254" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="6.088" height="2.092" x="86.363" y="42.946" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="8.091" height="2.092" x="84.361" y="51.638" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="62.389" height="57.589" x="5.202" y="4.121" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="13.854" height="2.092" x="45.709" y="14.183" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="26.762" y="22.875" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="41.208" height="2.092" x="18.355" y="31.567" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="32.801" height="2.092" x="26.762" y="40.259" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect><rect width="5.775" height="2.092" x="53.788" y="48.952" fill="#2E263D" fill-opacity=".3" rx="1.046"></rect>', 13);
const _hoisted_15 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_15]);
}
const rtlLight = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#E7E3FC" fill-opacity=".02" rx="4"></rect><rect width="90.624" height="8.8" x="6.688" y="4.672" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="4.906" height="4.4" x="10.165" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="75.2" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="82.067" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="88.935" y="6.872" fill="#E7E3FC" fill-opacity=".3" rx="1"></rect><rect width="55.948" height="17.6" x="41.365" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="26.489" height="17.6" x="6.688" y="19.613" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect><rect width="90.624" height="17.6" x="6.688" y="42.455" fill="#E7E3FC" fill-opacity=".08" rx="2"></rect>', 9);
const _hoisted_11$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_11$1]);
}
const wideDark = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "104",
  height: "66",
  fill: "none"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<rect width="104" height="66" fill="#2E263D" fill-opacity=".02" rx="4"></rect><rect width="90.624" height="8.8" x="6.688" y="4.672" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="4.906" height="4.4" x="10.165" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="75.2" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="82.067" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="88.935" y="6.872" fill="#2E263D" fill-opacity=".3" rx="1"></rect><rect width="55.948" height="17.6" x="41.365" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="26.489" height="17.6" x="6.688" y="19.613" fill="#2E263D" fill-opacity=".08" rx="2"></rect><rect width="90.624" height="17.6" x="6.688" y="42.455" fill="#2E263D" fill-opacity=".08" rx="2"></rect>', 9);
const _hoisted_11 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_11]);
}
const wideLight = { render };
const makeVColorPickerCanvasProps = propsFactory({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...makeComponentProps()
}, "VColorPickerCanvas");
const VColorPickerCanvas = defineComponent({
  name: "VColorPickerCanvas",
  props: makeVColorPickerCanvasProps(),
  emits: {
    "update:color": (color) => true,
    "update:position": (hue) => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const isInteracting = shallowRef(false);
    const canvasRef = ref();
    const canvasWidth = shallowRef(parseFloat(props.width));
    const canvasHeight = shallowRef(parseFloat(props.height));
    const _dotPosition = ref({
      x: 0,
      y: 0
    });
    const dotPosition = computed({
      get: () => _dotPosition.value,
      set(val) {
        var _a2, _b;
        if (!canvasRef.value)
          return;
        const {
          x,
          y
        } = val;
        _dotPosition.value = val;
        emit("update:color", {
          h: ((_a2 = props.color) == null ? void 0 : _a2.h) ?? 0,
          s: clamp(x, 0, canvasWidth.value) / canvasWidth.value,
          v: 1 - clamp(y, 0, canvasHeight.value) / canvasHeight.value,
          a: ((_b = props.color) == null ? void 0 : _b.a) ?? 1
        });
      }
    });
    const dotStyles = computed(() => {
      const {
        x,
        y
      } = dotPosition.value;
      const radius = parseInt(props.dotSize, 10) / 2;
      return {
        width: convertToUnit(props.dotSize),
        height: convertToUnit(props.dotSize),
        transform: `translate(${convertToUnit(x - radius)}, ${convertToUnit(y - radius)})`
      };
    });
    const {
      resizeRef
    } = useResizeObserver((entries) => {
      var _a2;
      if (!((_a2 = resizeRef.value) == null ? void 0 : _a2.offsetParent))
        return;
      const {
        width,
        height
      } = entries[0].contentRect;
      canvasWidth.value = width;
      canvasHeight.value = height;
    });
    function updateDotPosition(x, y, rect) {
      const {
        left,
        top,
        width,
        height
      } = rect;
      dotPosition.value = {
        x: clamp(x - left, 0, width),
        y: clamp(y - top, 0, height)
      };
    }
    function handleMouseDown(e) {
      if (e.type === "mousedown") {
        e.preventDefault();
      }
      if (props.disabled)
        return;
      handleMouseMove(e);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    function handleMouseMove(e) {
      if (props.disabled || !canvasRef.value)
        return;
      isInteracting.value = true;
      const coords = getEventCoordinates(e);
      updateDotPosition(coords.clientX, coords.clientY, canvasRef.value.getBoundingClientRect());
    }
    function handleMouseUp() {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    function updateCanvas() {
      var _a2;
      if (!canvasRef.value)
        return;
      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return;
      const saturationGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      saturationGradient.addColorStop(0, "hsla(0, 0%, 100%, 1)");
      saturationGradient.addColorStop(1, `hsla(${((_a2 = props.color) == null ? void 0 : _a2.h) ?? 0}, 100%, 50%, 1)`);
      ctx.fillStyle = saturationGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const valueGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      valueGradient.addColorStop(0, "hsla(0, 0%, 0%, 0)");
      valueGradient.addColorStop(1, "hsla(0, 0%, 0%, 1)");
      ctx.fillStyle = valueGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    watch(() => {
      var _a2;
      return (_a2 = props.color) == null ? void 0 : _a2.h;
    }, updateCanvas, {
      immediate: true
    });
    watch(() => [canvasWidth.value, canvasHeight.value], (newVal, oldVal) => {
      updateCanvas();
      _dotPosition.value = {
        x: dotPosition.value.x * newVal[0] / oldVal[0],
        y: dotPosition.value.y * newVal[1] / oldVal[1]
      };
    }, {
      flush: "post"
    });
    watch(() => props.color, () => {
      if (isInteracting.value) {
        isInteracting.value = false;
        return;
      }
      _dotPosition.value = props.color ? {
        x: props.color.s * canvasWidth.value,
        y: (1 - props.color.v) * canvasHeight.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: true,
      immediate: true
    });
    onMounted(() => updateCanvas());
    useRender(() => createVNode("div", {
      "ref": resizeRef,
      "class": ["v-color-picker-canvas", props.class],
      "style": props.style,
      "onMousedown": handleMouseDown,
      "onTouchstartPassive": handleMouseDown
    }, [createVNode("canvas", {
      "ref": canvasRef,
      "width": canvasWidth.value,
      "height": canvasHeight.value
    }, null), props.color && createVNode("div", {
      "class": ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": props.disabled
      }],
      "style": dotStyles.value
    }, null)]));
    return {};
  }
});
function stripAlpha(color, stripAlpha2) {
  if (stripAlpha2) {
    const {
      a,
      ...rest
    } = color;
    return rest;
  }
  return color;
}
function extractColor(color, input) {
  if (input == null || typeof input === "string") {
    const hex2 = HSVtoHex(color);
    if (color.a === 1)
      return hex2.slice(0, 7);
    else
      return hex2;
  }
  if (typeof input === "object") {
    let converted;
    if (has(input, ["r", "g", "b"]))
      converted = HSVtoRGB(color);
    else if (has(input, ["h", "s", "l"]))
      converted = HSVtoHSL(color);
    else if (has(input, ["h", "s", "v"]))
      converted = color;
    return stripAlpha(converted, !has(input, ["a"]) && color.a === 1);
  }
  return color;
}
const nullColor = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
};
const rgba = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (c) => Math.round(c.r),
    getColor: (c, v) => ({
      ...c,
      r: Number(v)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (c) => Math.round(c.g),
    getColor: (c, v) => ({
      ...c,
      g: Number(v)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (c) => Math.round(c.b),
    getColor: (c, v) => ({
      ...c,
      b: Number(v)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (_ref) => {
      let {
        a
      } = _ref;
      return a != null ? Math.round(a * 100) / 100 : 1;
    },
    getColor: (c, v) => ({
      ...c,
      a: Number(v)
    })
  }],
  to: HSVtoRGB,
  from: RGBtoHSV
};
const rgb = {
  ...rgba,
  inputs: (_a = rgba.inputs) == null ? void 0 : _a.slice(0, 3)
};
const hsla = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (c) => Math.round(c.h),
    getColor: (c, v) => ({
      ...c,
      h: Number(v)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (c) => Math.round(c.s * 100) / 100,
    getColor: (c, v) => ({
      ...c,
      s: Number(v)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (c) => Math.round(c.l * 100) / 100,
    getColor: (c, v) => ({
      ...c,
      l: Number(v)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (_ref2) => {
      let {
        a
      } = _ref2;
      return a != null ? Math.round(a * 100) / 100 : 1;
    },
    getColor: (c, v) => ({
      ...c,
      a: Number(v)
    })
  }],
  to: HSVtoHSL,
  from: HSLtoHSV
};
const hsl = {
  ...hsla,
  inputs: hsla.inputs.slice(0, 3)
};
const hexa = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (c) => c,
    getColor: (c, v) => v
  }],
  to: HSVtoHex,
  from: HexToHSV
};
const hex = {
  ...hexa,
  inputs: [{
    label: "HEX",
    getValue: (c) => c.slice(0, 7),
    getColor: (c, v) => v
  }]
};
const modes = {
  rgb,
  rgba,
  hsl,
  hsla,
  hex,
  hexa
};
const VColorPickerInput = (_ref) => {
  let {
    label,
    ...rest
  } = _ref;
  return createVNode("div", {
    "class": "v-color-picker-edit__input"
  }, [createVNode("input", rest, null), createVNode("span", null, [label])]);
};
const makeVColorPickerEditProps = propsFactory({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (v) => Object.keys(modes).includes(v)
  },
  modes: {
    type: Array,
    default: () => Object.keys(modes),
    validator: (v) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m))
  },
  ...makeComponentProps()
}, "VColorPickerEdit");
const VColorPickerEdit = defineComponent({
  name: "VColorPickerEdit",
  props: makeVColorPickerEditProps(),
  emits: {
    "update:color": (color) => true,
    "update:mode": (mode) => true
  },
  setup(props, _ref2) {
    let {
      emit
    } = _ref2;
    const enabledModes = computed(() => {
      return props.modes.map((key) => ({
        ...modes[key],
        name: key
      }));
    });
    const inputs = computed(() => {
      var _a2;
      const mode = enabledModes.value.find((m) => m.name === props.mode);
      if (!mode)
        return [];
      const color = props.color ? mode.to(props.color) : null;
      return (_a2 = mode.inputs) == null ? void 0 : _a2.map((_ref3) => {
        let {
          getValue,
          getColor,
          ...inputProps
        } = _ref3;
        return {
          ...mode.inputProps,
          ...inputProps,
          disabled: props.disabled,
          value: color && getValue(color),
          onChange: (e) => {
            const target = e.target;
            if (!target)
              return;
            emit("update:color", mode.from(getColor(color ?? mode.to(nullColor), target.value)));
          }
        };
      });
    });
    useRender(() => {
      var _a2;
      return createVNode("div", {
        "class": ["v-color-picker-edit", props.class],
        "style": props.style
      }, [(_a2 = inputs.value) == null ? void 0 : _a2.map((props2) => createVNode(VColorPickerInput, props2, null)), enabledModes.value.length > 1 && createVNode(VBtn, {
        "icon": "$unfold",
        "size": "x-small",
        "variant": "plain",
        "onClick": () => {
          const mi = enabledModes.value.findIndex((m) => m.name === props.mode);
          emit("update:mode", enabledModes.value[(mi + 1) % enabledModes.value.length].name);
        }
      }, null)]);
    });
    return {};
  }
});
const makeVColorPickerPreviewProps = propsFactory({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...makeComponentProps()
}, "VColorPickerPreview");
const VColorPickerPreview = defineComponent({
  name: "VColorPickerPreview",
  props: makeVColorPickerPreviewProps(),
  emits: {
    "update:color": (color) => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const abortController = new AbortController();
    onUnmounted(() => abortController.abort());
    async function openEyeDropper() {
      if (!SUPPORTS_EYE_DROPPER)
        return;
      const eyeDropper = new window.EyeDropper();
      try {
        const result = await eyeDropper.open({
          signal: abortController.signal
        });
        const colorHexValue = HexToHSV(result.sRGBHex);
        emit("update:color", {
          ...props.color ?? nullColor,
          ...colorHexValue
        });
      } catch (e) {
      }
    }
    useRender(() => {
      var _a2, _b;
      return createVNode("div", {
        "class": ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": props.hideAlpha
        }, props.class],
        "style": props.style
      }, [SUPPORTS_EYE_DROPPER && createVNode("div", {
        "class": "v-color-picker-preview__eye-dropper",
        "key": "eyeDropper"
      }, [createVNode(VBtn, {
        "onClick": openEyeDropper,
        "icon": "$eyeDropper",
        "variant": "plain",
        "density": "comfortable"
      }, null)]), createVNode("div", {
        "class": "v-color-picker-preview__dot"
      }, [createVNode("div", {
        "style": {
          background: HSVtoCSS(props.color ?? nullColor)
        }
      }, null)]), createVNode("div", {
        "class": "v-color-picker-preview__sliders"
      }, [createVNode(VSlider, {
        "class": "v-color-picker-preview__track v-color-picker-preview__hue",
        "modelValue": (_a2 = props.color) == null ? void 0 : _a2.h,
        "onUpdate:modelValue": (h) => emit("update:color", {
          ...props.color ?? nullColor,
          h
        }),
        "step": 0,
        "min": 0,
        "max": 360,
        "disabled": props.disabled,
        "thumbSize": 14,
        "trackSize": 8,
        "trackFillColor": "white",
        "hideDetails": true
      }, null), !props.hideAlpha && createVNode(VSlider, {
        "class": "v-color-picker-preview__track v-color-picker-preview__alpha",
        "modelValue": ((_b = props.color) == null ? void 0 : _b.a) ?? 1,
        "onUpdate:modelValue": (a) => emit("update:color", {
          ...props.color ?? nullColor,
          a
        }),
        "step": 1 / 256,
        "min": 0,
        "max": 1,
        "disabled": props.disabled,
        "thumbSize": 14,
        "trackSize": 8,
        "trackFillColor": "white",
        "hideDetails": true
      }, null)])]);
    });
    return {};
  }
});
const red = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
};
const pink = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
};
const purple = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
};
const deepPurple = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
};
const indigo = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
};
const blue = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
};
const lightBlue = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
};
const cyan = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
};
const teal = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
};
const green = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
};
const lightGreen = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
};
const lime = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
};
const yellow = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
};
const amber = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
};
const orange = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
};
const deepOrange = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
};
const brown = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
};
const blueGrey = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
};
const grey = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
};
const shades = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
};
const colors = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
  grey,
  shades
};
const makeVColorPickerSwatchesProps = propsFactory({
  swatches: {
    type: Array,
    default: () => parseDefaultColors(colors)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...makeComponentProps()
}, "VColorPickerSwatches");
function parseDefaultColors(colors2) {
  return Object.keys(colors2).map((key) => {
    const color = colors2[key];
    return color.base ? [color.base, color.darken4, color.darken3, color.darken2, color.darken1, color.lighten1, color.lighten2, color.lighten3, color.lighten4, color.lighten5] : [color.black, color.white, color.transparent];
  });
}
const VColorPickerSwatches = defineComponent({
  name: "VColorPickerSwatches",
  props: makeVColorPickerSwatchesProps(),
  emits: {
    "update:color": (color) => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    useRender(() => createVNode("div", {
      "class": ["v-color-picker-swatches", props.class],
      "style": [{
        maxHeight: convertToUnit(props.maxHeight)
      }, props.style]
    }, [createVNode("div", null, [props.swatches.map((swatch) => createVNode("div", {
      "class": "v-color-picker-swatches__swatch"
    }, [swatch.map((color) => {
      const rgba2 = parseColor(color);
      const hsva = RGBtoHSV(rgba2);
      const background = RGBtoCSS(rgba2);
      return createVNode("div", {
        "class": "v-color-picker-swatches__color",
        "onClick": () => hsva && emit("update:color", hsva)
      }, [createVNode("div", {
        "style": {
          background
        }
      }, [props.color && deepEqual(props.color, hsva) ? createVNode(VIcon, {
        "size": "x-small",
        "icon": "$success",
        "color": getContrast(color, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])]));
    return {};
  }
});
const makeVColorPickerProps = propsFactory({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (v) => Object.keys(modes).includes(v)
  },
  modes: {
    type: Array,
    default: () => Object.keys(modes),
    validator: (v) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...omit(makeVSheetProps({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker");
const VColorPicker = defineComponent({
  name: "VColorPicker",
  props: makeVColorPickerProps(),
  emits: {
    "update:modelValue": (color) => true,
    "update:mode": (mode) => true
  },
  setup(props) {
    const mode = useProxiedModel(props, "mode");
    const hue = ref(null);
    const model = useProxiedModel(props, "modelValue", void 0, (v) => {
      if (v == null || v === "")
        return null;
      let c;
      try {
        c = RGBtoHSV(parseColor(v));
      } catch (err) {
        consoleWarn(err);
        return null;
      }
      return c;
    }, (v) => {
      if (!v)
        return null;
      return extractColor(v, props.modelValue);
    });
    const currentColor = computed(() => {
      return model.value ? {
        ...model.value,
        h: hue.value ?? model.value.h
      } : null;
    });
    const {
      rtlClasses
    } = useRtl();
    let externalChange = true;
    watch(model, (v) => {
      if (!externalChange) {
        externalChange = true;
        return;
      }
      if (!v)
        return;
      hue.value = v.h;
    }, {
      immediate: true
    });
    const updateColor = (hsva) => {
      externalChange = false;
      hue.value = hsva.h;
      model.value = hsva;
    };
    onMounted(() => {
      if (!props.modes.includes(mode.value))
        mode.value = props.modes[0];
    });
    provideDefaults({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    });
    useRender(() => {
      const sheetProps = VSheet.filterProps(props);
      return createVNode(VSheet, mergeProps({
        "rounded": props.rounded,
        "elevation": props.elevation,
        "theme": props.theme,
        "class": ["v-color-picker", rtlClasses.value, props.class],
        "style": [{
          "--v-color-picker-color-hsv": HSVtoCSS({
            ...currentColor.value ?? nullColor,
            a: 1
          })
        }, props.style]
      }, sheetProps, {
        "maxWidth": props.width
      }), {
        default: () => [!props.hideCanvas && createVNode(VColorPickerCanvas, {
          "key": "canvas",
          "color": currentColor.value,
          "onUpdate:color": updateColor,
          "disabled": props.disabled,
          "dotSize": props.dotSize,
          "width": props.width,
          "height": props.canvasHeight
        }, null), (!props.hideSliders || !props.hideInputs) && createVNode("div", {
          "key": "controls",
          "class": "v-color-picker__controls"
        }, [!props.hideSliders && createVNode(VColorPickerPreview, {
          "key": "preview",
          "color": currentColor.value,
          "onUpdate:color": updateColor,
          "hideAlpha": !mode.value.endsWith("a"),
          "disabled": props.disabled
        }, null), !props.hideInputs && createVNode(VColorPickerEdit, {
          "key": "edit",
          "modes": props.modes,
          "mode": mode.value,
          "onUpdate:mode": (m) => mode.value = m,
          "color": currentColor.value,
          "onUpdate:color": updateColor,
          "disabled": props.disabled
        }, null)]), props.showSwatches && createVNode(VColorPickerSwatches, {
          "key": "swatches",
          "color": currentColor.value,
          "onUpdate:color": updateColor,
          "maxHeight": props.swatchesMaxHeight,
          "swatches": props.swatches,
          "disabled": props.disabled
        }, null)]
      });
    });
    return {};
  }
});
const _sfc_main$1 = {
  __name: "TheCustomizer",
  __ssrInlineRender: true,
  setup(__props) {
    const isNavDrawerOpen = ref(false);
    const configStore = useConfigStore();
    const vuetifyTheme = useTheme();
    const colors2 = [
      {
        main: staticPrimaryColor,
        darken: staticPrimaryDarkenColor
      },
      {
        main: "#0D9394",
        darken: "#0C8485"
      },
      {
        main: "#FFB400",
        darken: "#E6A200"
      },
      {
        main: "#FF4C51",
        darken: "#E64449"
      },
      {
        main: "#16B1FF",
        darken: "#149FE6"
      }
    ];
    const customPrimaryColor = ref("#ffffff");
    watch(() => configStore.theme, () => {
      const cookiePrimaryColor = cookieRef(`${vuetifyTheme.name.value}ThemePrimaryColor`, null).value;
      if (cookiePrimaryColor && !colors2.some((color) => color.main === cookiePrimaryColor))
        customPrimaryColor.value = cookiePrimaryColor;
    }, { immediate: true });
    const setPrimaryColor = useDebounceFn((color) => {
      vuetifyTheme.themes.value[vuetifyTheme.name.value].colors.primary = color.main;
      vuetifyTheme.themes.value[vuetifyTheme.name.value].colors["primary-darken-1"] = color.darken;
      cookieRef(`${vuetifyTheme.name.value}ThemePrimaryColor`, null).value = color.main;
      cookieRef(`${vuetifyTheme.name.value}ThemePrimaryDarkenColor`, null).value = color.darken;
      useStorage(namespaceConfig("initial-loader-color"), null).value = color.main;
    }, 100);
    const defaultSkin = useGenerateImageVariant(defaultSkinLight, defaultSkinDark);
    const borderSkin = useGenerateImageVariant(borderSkinLight, borderSkinDark);
    const collapsed = useGenerateImageVariant(collapsedLight, collapsedDark);
    const compactContent = useGenerateImageVariant(compactLight, compactDark);
    const wideContent = useGenerateImageVariant(wideLight, wideDark);
    const ltrImg = useGenerateImageVariant(ltrLight, ltrDark);
    const rtlImg = useGenerateImageVariant(rtlLight, rtlDark);
    const horizontalImg = useGenerateImageVariant(horizontalLight, horizontalDark);
    const themeMode = computed(() => {
      return [
        {
          bgImage: "ri-sun-line",
          value: Theme.Light,
          label: "Light"
        },
        {
          bgImage: "ri-moon-clear-line",
          value: Theme.Dark,
          label: "Dark"
        },
        {
          bgImage: "ri-computer-line",
          value: Theme.System,
          label: "System"
        }
      ];
    });
    const themeSkin = computed(() => {
      return [
        {
          bgImage: defaultSkin.value,
          value: Skins.Default,
          label: "Default"
        },
        {
          bgImage: borderSkin.value,
          value: Skins.Bordered,
          label: "Bordered"
        }
      ];
    });
    const currentLayout = ref(configStore.isVerticalNavCollapsed ? "collapsed" : configStore.appContentLayoutNav);
    const layouts = computed(() => {
      return [
        {
          bgImage: defaultSkin.value,
          value: Layout.Vertical,
          label: "Vertical"
        },
        {
          bgImage: collapsed.value,
          value: Layout.Collapsed,
          label: "Collapsed"
        },
        {
          bgImage: horizontalImg.value,
          value: Layout.Horizontal,
          label: "Horizontal"
        }
      ];
    });
    watch(currentLayout, () => {
      if (currentLayout.value === "collapsed") {
        configStore.isVerticalNavCollapsed = true;
        configStore.appContentLayoutNav = AppContentLayoutNav.Vertical;
      } else {
        configStore.isVerticalNavCollapsed = false;
        configStore.appContentLayoutNav = currentLayout.value;
      }
    });
    watch(() => configStore.isVerticalNavCollapsed, () => {
      currentLayout.value = configStore.isVerticalNavCollapsed ? "collapsed" : configStore.appContentLayoutNav;
    });
    const contentWidth = computed(() => {
      return [
        {
          bgImage: compactContent.value,
          value: ContentWidth.Boxed,
          label: "Compact"
        },
        {
          bgImage: wideContent.value,
          value: ContentWidth.Fluid,
          label: "Wide"
        }
      ];
    });
    const currentDir = ref(configStore.isAppRTL ? "rtl" : "ltr");
    const direction = computed(() => {
      return [
        {
          bgImage: ltrImg.value,
          value: Direction.Ltr,
          label: "Left to right"
        },
        {
          bgImage: rtlImg.value,
          value: Direction.Rtl,
          label: "Right to left"
        }
      ];
    });
    watch(currentDir, () => {
      if (currentDir.value === "rtl")
        configStore.isAppRTL = true;
      else
        configStore.isAppRTL = false;
    });
    const isCookieHasAnyValue = ref(false);
    const { locale } = useI18n({ useScope: "global" });
    const isActiveLangRTL = computed(() => {
      const lang = themeConfig.app.i18n.langConfig.find((l) => l.i18nLang === locale.value);
      return (lang == null ? void 0 : lang.isRTL) ?? false;
    });
    watch([
      () => vuetifyTheme.current.value.colors.primary,
      configStore.$state,
      locale
    ], () => {
      const initialConfigValue = [
        staticPrimaryColor,
        staticPrimaryColor,
        themeConfig.app.theme,
        themeConfig.app.skin,
        themeConfig.verticalNav.isVerticalNavSemiDark,
        themeConfig.verticalNav.isVerticalNavCollapsed,
        themeConfig.app.contentWidth,
        isActiveLangRTL.value,
        themeConfig.app.contentLayoutNav
      ];
      const themeConfigValue = [
        vuetifyTheme.themes.value.light.colors.primary,
        vuetifyTheme.themes.value.dark.colors.primary,
        configStore.theme,
        configStore.skin,
        configStore.isVerticalNavSemiDark,
        configStore.isVerticalNavCollapsed,
        configStore.appContentWidth,
        configStore.isAppRTL,
        configStore.appContentLayoutNav
      ];
      currentDir.value = configStore.isAppRTL ? "rtl" : "ltr";
      isCookieHasAnyValue.value = JSON.stringify(themeConfigValue) !== JSON.stringify(initialConfigValue);
    }, {
      deep: true,
      immediate: true
    });
    const resetCustomizer = async () => {
      if (isCookieHasAnyValue.value) {
        vuetifyTheme.themes.value.light.colors.primary = staticPrimaryColor;
        vuetifyTheme.themes.value.dark.colors.primary = staticPrimaryColor;
        vuetifyTheme.themes.value.light.colors["primary-darken-1"] = staticPrimaryDarkenColor;
        vuetifyTheme.themes.value.dark.colors["primary-darken-1"] = staticPrimaryDarkenColor;
        configStore.theme = themeConfig.app.theme;
        configStore.skin = themeConfig.app.skin;
        configStore.isVerticalNavSemiDark = themeConfig.verticalNav.isVerticalNavSemiDark;
        configStore.appContentLayoutNav = themeConfig.app.contentLayoutNav;
        configStore.appContentWidth = themeConfig.app.contentWidth;
        configStore.isAppRTL = isActiveLangRTL.value;
        configStore.isVerticalNavCollapsed = themeConfig.verticalNav.isVerticalNavCollapsed;
        useStorage(namespaceConfig("initial-loader-color"), null).value = staticPrimaryColor;
        currentLayout.value = themeConfig.app.contentLayoutNav;
        configStore.theme = themeConfig.app.theme;
        configStore.skin = themeConfig.app.skin;
        configStore.isVerticalNavSemiDark = themeConfig.verticalNav.isVerticalNavSemiDark;
        configStore.appContentLayoutNav = themeConfig.app.contentLayoutNav;
        configStore.appContentWidth = themeConfig.app.contentWidth;
        configStore.isAppRTL = isActiveLangRTL.value;
        configStore.isVerticalNavCollapsed = themeConfig.verticalNav.isVerticalNavCollapsed;
        useStorage(namespaceConfig("initial-loader-color"), null).value = staticPrimaryColor;
        currentLayout.value = themeConfig.app.contentLayoutNav;
        cookieRef("lightThemePrimaryColor", null).value = null;
        cookieRef("darkThemePrimaryColor", null).value = null;
        cookieRef("lightThemePrimaryDarkenColor", null).value = null;
        cookieRef("darkThemePrimaryDarkenColor", null).value = null;
        await nextTick();
        isCookieHasAnyValue.value = false;
        customPrimaryColor.value = "#ffffff";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomizerSection = _sfc_main$2;
      const _component_CustomRadiosWithImage = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-lg-block d-none" }, _attrs))}>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        class: "app-customizer-toggler rounded-s-pill rounded-0",
        style: { "z-index": "1001" },
        onClick: ($event) => isNavDrawerOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-settings-3-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-settings-3-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VNavigationDrawer, {
        modelValue: unref(isNavDrawerOpen),
        "onUpdate:modelValue": ($event) => isRef(isNavDrawerOpen) ? isNavDrawerOpen.value = $event : null,
        temporary: "",
        touchless: "",
        border: "none",
        location: "end",
        width: "400",
        scrim: false,
        class: "app-customizer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="customizer-heading d-flex align-center justify-space-between"${_scopeId}><div${_scopeId}><h6 class="text-h6"${_scopeId}> Theme Customizer </h6><p class="text-body-2 mb-0"${_scopeId}> Customize &amp; Preview in Real Time </p></div><div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              variant: "text",
              color: "medium-emphasis",
              onClick: resetCustomizer
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBadge, {
                    style: unref(isCookieHasAnyValue) ? null : { display: "none" },
                    dot: "",
                    color: "error",
                    "offset-x": "-30",
                    "offset-y": "-15"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VIcon, {
                    size: "24",
                    icon: "ri-refresh-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(VBadge, {
                      dot: "",
                      color: "error",
                      "offset-x": "-30",
                      "offset-y": "-15"
                    }, null, 512), [
                      [vShow, unref(isCookieHasAnyValue)]
                    ]),
                    createVNode(VIcon, {
                      size: "24",
                      icon: "ri-refresh-line"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              variant: "text",
              color: "medium-emphasis",
              onClick: ($event) => isNavDrawerOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-close-line",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-close-line",
                      size: "24"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(PerfectScrollbar), {
              tag: "ul",
              options: { wheelPropagation: false }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomizerSection, {
                    title: "Theming",
                    divider: false,
                    class: "pb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-h6"${_scopeId3}> Primary Color </h6><div class="d-flex app-customizer-primary-colors" style="${ssrRenderStyle({ "column-gap": "0.75rem", "margin-block-start": "2px" })}"${_scopeId3}><!--[-->`);
                        ssrRenderList(colors2, (color) => {
                          _push4(`<div style="${ssrRenderStyle([{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === color.main ? `outline-color: ${color.main}; outline-width:2px;` : `--v-color:${color.main}`])}" class="${ssrRenderClass([unref(vuetifyTheme).current.value.colors.primary === color.main ? "active" : "", "primary-color-wrapper cursor-pointer"])}"${_scopeId3}><div style="${ssrRenderStyle([{ "border-radius": "0.5rem", "block-size": "2.125rem", "inline-size": "1.9375rem" }, { backgroundColor: color.main }])}"${_scopeId3}></div></div>`);
                        });
                        _push4(`<!--]--><div style="${ssrRenderStyle([{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? `outline-color: ${unref(customPrimaryColor)}; outline-width:2px;` : ""])}" class="${ssrRenderClass([unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? "active" : "", "primary-color-wrapper cursor-pointer"])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          size: "small",
                          color: unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? unref(customPrimaryColor) : _ctx.$vuetify.theme.current.dark ? "#8692d029" : "#4b465c29",
                          variant: "flat",
                          style: { "border-radius": "0.5rem" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                icon: "ri-palette-line"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-palette-line"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VMenu, {
                          activator: "parent",
                          "close-on-content-click": false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VColorPicker, {
                                            modelValue: unref(customPrimaryColor),
                                            "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                            mode: "hex",
                                            modes: ["hex"]
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VColorPicker, {
                                              modelValue: unref(customPrimaryColor),
                                              "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                              mode: "hex",
                                              modes: ["hex"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VColorPicker, {
                                            modelValue: unref(customPrimaryColor),
                                            "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                            mode: "hex",
                                            modes: ["hex"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VColorPicker, {
                                          modelValue: unref(customPrimaryColor),
                                          "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                          mode: "hex",
                                          modes: ["hex"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                        _push4(`</div></div></div><div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-h6"${_scopeId3}> Mode </h6>`);
                        _push4(ssrRenderComponent(_component_CustomRadiosWithImage, {
                          key: unref(configStore).theme,
                          "selected-radio": unref(configStore).theme,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).theme = $event,
                          "radio-content": unref(themeMode),
                          "grid-column": { cols: "4" },
                          class: "customizer-skins"
                        }, {
                          label: withCtx((item, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-medium-emphasis"${_scopeId4}>${ssrInterpolate(item == null ? void 0 : item.label)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ];
                            }
                          }),
                          content: withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100" style="${ssrRenderStyle({ "min-inline-size": "100%" })}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "30",
                                icon: item.bgImage,
                                color: "high-emphasis"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100",
                                  style: { "min-inline-size": "100%" }
                                }, [
                                  createVNode(VIcon, {
                                    size: "30",
                                    icon: item.bgImage,
                                    color: "high-emphasis"
                                  }, null, 8, ["icon"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-h6"${_scopeId3}> Skin </h6>`);
                        _push4(ssrRenderComponent(_component_CustomRadiosWithImage, {
                          key: unref(configStore).skin,
                          "selected-radio": unref(configStore).skin,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).skin = $event,
                          "radio-content": unref(themeSkin),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-medium-emphasis"${_scopeId4}>${ssrInterpolate(item == null ? void 0 : item.label)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="${ssrRenderClass([unref(vuetifyTheme).global.name.value === "light" && unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? "d-flex" : "d-none", "align-center justify-space-between"])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VLabel, {
                          for: "customizer-semi-dark",
                          class: "text-h6 text-high-emphasis"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Semi Dark Menu `);
                            } else {
                              return [
                                createTextVNode(" Semi Dark Menu ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(VSwitch, {
                          id: "customizer-semi-dark",
                          modelValue: unref(configStore).isVerticalNavSemiDark,
                          "onUpdate:modelValue": ($event) => unref(configStore).isVerticalNavSemiDark = $event,
                          class: "ms-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-h6" }, " Primary Color "),
                            createVNode("div", {
                              class: "d-flex app-customizer-primary-colors",
                              style: { "column-gap": "0.75rem", "margin-block-start": "2px" }
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(colors2, (color) => {
                                return createVNode("div", {
                                  key: color.main,
                                  style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === color.main ? `outline-color: ${color.main}; outline-width:2px;` : `--v-color:${color.main}`],
                                  class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === color.main ? "active" : ""],
                                  onClick: ($event) => unref(setPrimaryColor)(color)
                                }, [
                                  createVNode("div", {
                                    style: [{ "border-radius": "0.5rem", "block-size": "2.125rem", "inline-size": "1.9375rem" }, { backgroundColor: color.main }]
                                  }, null, 4)
                                ], 14, ["onClick"]);
                              }), 64)),
                              createVNode("div", {
                                class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? "active" : ""],
                                style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? `outline-color: ${unref(customPrimaryColor)}; outline-width:2px;` : ""]
                              }, [
                                createVNode(VBtn, {
                                  icon: "",
                                  size: "small",
                                  color: unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? unref(customPrimaryColor) : _ctx.$vuetify.theme.current.dark ? "#8692d029" : "#4b465c29",
                                  variant: "flat",
                                  style: { "border-radius": "0.5rem" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "20",
                                      icon: "ri-palette-line"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["color"]),
                                createVNode(VMenu, {
                                  activator: "parent",
                                  "close-on-content-click": false
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VColorPicker, {
                                              modelValue: unref(customPrimaryColor),
                                              "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                              mode: "hex",
                                              modes: ["hex"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 6)
                            ])
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-h6" }, " Mode "),
                            (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                              key: unref(configStore).theme,
                              "selected-radio": unref(configStore).theme,
                              "onUpdate:selectedRadio": ($event) => unref(configStore).theme = $event,
                              "radio-content": unref(themeMode),
                              "grid-column": { cols: "4" },
                              class: "customizer-skins"
                            }, {
                              label: withCtx((item) => [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ]),
                              content: withCtx(({ item }) => [
                                createVNode("div", {
                                  class: "customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100",
                                  style: { "min-inline-size": "100%" }
                                }, [
                                  createVNode(VIcon, {
                                    size: "30",
                                    icon: item.bgImage,
                                    color: "high-emphasis"
                                  }, null, 8, ["icon"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-h6" }, " Skin "),
                            (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                              key: unref(configStore).skin,
                              "selected-radio": unref(configStore).skin,
                              "onUpdate:selectedRadio": ($event) => unref(configStore).skin = $event,
                              "radio-content": unref(themeSkin),
                              "grid-column": { cols: "4" }
                            }, {
                              label: withCtx((item) => [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                          ]),
                          createVNode("div", {
                            class: ["align-center justify-space-between", unref(vuetifyTheme).global.name.value === "light" && unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? "d-flex" : "d-none"]
                          }, [
                            createVNode(VLabel, {
                              for: "customizer-semi-dark",
                              class: "text-h6 text-high-emphasis"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Semi Dark Menu ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode(VSwitch, {
                                id: "customizer-semi-dark",
                                modelValue: unref(configStore).isVerticalNavSemiDark,
                                "onUpdate:modelValue": ($event) => unref(configStore).isVerticalNavSemiDark = $event,
                                class: "ms-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CustomizerSection, {
                    title: "Layout",
                    class: "pt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-base font-weight-medium"${_scopeId3}> Layout </h6>`);
                        _push4(ssrRenderComponent(_component_CustomRadiosWithImage, {
                          key: unref(currentLayout),
                          "selected-radio": unref(currentLayout),
                          "onUpdate:selectedRadio": ($event) => isRef(currentLayout) ? currentLayout.value = $event : null,
                          "radio-content": unref(layouts),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-medium-emphasis"${_scopeId4}>${ssrInterpolate(item.label)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-base font-weight-medium"${_scopeId3}> Content </h6>`);
                        _push4(ssrRenderComponent(_component_CustomRadiosWithImage, {
                          key: unref(configStore).appContentWidth,
                          "selected-radio": unref(configStore).appContentWidth,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).appContentWidth = $event,
                          "radio-content": unref(contentWidth),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-medium-emphasis"${_scopeId4}>${ssrInterpolate(item.label)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex flex-column gap-2"${_scopeId3}><h6 class="text-base font-weight-medium"${_scopeId3}> Direction </h6>`);
                        _push4(ssrRenderComponent(_component_CustomRadiosWithImage, {
                          key: unref(currentDir),
                          "selected-radio": unref(currentDir),
                          "onUpdate:selectedRadio": ($event) => isRef(currentDir) ? currentDir.value = $event : null,
                          "radio-content": unref(direction),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-sm text-medium-emphasis"${_scopeId4}>${ssrInterpolate(item == null ? void 0 : item.label)}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-base font-weight-medium" }, " Layout "),
                            (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                              key: unref(currentLayout),
                              "selected-radio": unref(currentLayout),
                              "onUpdate:selectedRadio": ($event) => isRef(currentLayout) ? currentLayout.value = $event : null,
                              "radio-content": unref(layouts),
                              "grid-column": { cols: "4" }
                            }, {
                              label: withCtx((item) => [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-base font-weight-medium" }, " Content "),
                            (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                              key: unref(configStore).appContentWidth,
                              "selected-radio": unref(configStore).appContentWidth,
                              "onUpdate:selectedRadio": ($event) => unref(configStore).appContentWidth = $event,
                              "radio-content": unref(contentWidth),
                              "grid-column": { cols: "4" }
                            }, {
                              label: withCtx((item) => [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                          ]),
                          createVNode("div", { class: "d-flex flex-column gap-2" }, [
                            createVNode("h6", { class: "text-base font-weight-medium" }, " Direction "),
                            (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                              key: unref(currentDir),
                              "selected-radio": unref(currentDir),
                              "onUpdate:selectedRadio": ($event) => isRef(currentDir) ? currentDir.value = $event : null,
                              "radio-content": unref(direction),
                              "grid-column": { cols: "4" }
                            }, {
                              label: withCtx((item) => [
                                createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                              ]),
                              _: 1
                            }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomizerSection, {
                      title: "Theming",
                      divider: false,
                      class: "pb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-h6" }, " Primary Color "),
                          createVNode("div", {
                            class: "d-flex app-customizer-primary-colors",
                            style: { "column-gap": "0.75rem", "margin-block-start": "2px" }
                          }, [
                            (openBlock(), createBlock(Fragment, null, renderList(colors2, (color) => {
                              return createVNode("div", {
                                key: color.main,
                                style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === color.main ? `outline-color: ${color.main}; outline-width:2px;` : `--v-color:${color.main}`],
                                class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === color.main ? "active" : ""],
                                onClick: ($event) => unref(setPrimaryColor)(color)
                              }, [
                                createVNode("div", {
                                  style: [{ "border-radius": "0.5rem", "block-size": "2.125rem", "inline-size": "1.9375rem" }, { backgroundColor: color.main }]
                                }, null, 4)
                              ], 14, ["onClick"]);
                            }), 64)),
                            createVNode("div", {
                              class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? "active" : ""],
                              style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? `outline-color: ${unref(customPrimaryColor)}; outline-width:2px;` : ""]
                            }, [
                              createVNode(VBtn, {
                                icon: "",
                                size: "small",
                                color: unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? unref(customPrimaryColor) : _ctx.$vuetify.theme.current.dark ? "#8692d029" : "#4b465c29",
                                variant: "flat",
                                style: { "border-radius": "0.5rem" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: "ri-palette-line"
                                  })
                                ]),
                                _: 1
                              }, 8, ["color"]),
                              createVNode(VMenu, {
                                activator: "parent",
                                "close-on-content-click": false
                              }, {
                                default: withCtx(() => [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VColorPicker, {
                                            modelValue: unref(customPrimaryColor),
                                            "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                            mode: "hex",
                                            modes: ["hex"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 6)
                          ])
                        ]),
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-h6" }, " Mode "),
                          (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                            key: unref(configStore).theme,
                            "selected-radio": unref(configStore).theme,
                            "onUpdate:selectedRadio": ($event) => unref(configStore).theme = $event,
                            "radio-content": unref(themeMode),
                            "grid-column": { cols: "4" },
                            class: "customizer-skins"
                          }, {
                            label: withCtx((item) => [
                              createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                            ]),
                            content: withCtx(({ item }) => [
                              createVNode("div", {
                                class: "customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100",
                                style: { "min-inline-size": "100%" }
                              }, [
                                createVNode(VIcon, {
                                  size: "30",
                                  icon: item.bgImage,
                                  color: "high-emphasis"
                                }, null, 8, ["icon"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                        ]),
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-h6" }, " Skin "),
                          (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                            key: unref(configStore).skin,
                            "selected-radio": unref(configStore).skin,
                            "onUpdate:selectedRadio": ($event) => unref(configStore).skin = $event,
                            "radio-content": unref(themeSkin),
                            "grid-column": { cols: "4" }
                          }, {
                            label: withCtx((item) => [
                              createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                        ]),
                        createVNode("div", {
                          class: ["align-center justify-space-between", unref(vuetifyTheme).global.name.value === "light" && unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? "d-flex" : "d-none"]
                        }, [
                          createVNode(VLabel, {
                            for: "customizer-semi-dark",
                            class: "text-h6 text-high-emphasis"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Semi Dark Menu ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(VSwitch, {
                              id: "customizer-semi-dark",
                              modelValue: unref(configStore).isVerticalNavSemiDark,
                              "onUpdate:modelValue": ($event) => unref(configStore).isVerticalNavSemiDark = $event,
                              class: "ms-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ], 2)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CustomizerSection, {
                      title: "Layout",
                      class: "pt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-base font-weight-medium" }, " Layout "),
                          (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                            key: unref(currentLayout),
                            "selected-radio": unref(currentLayout),
                            "onUpdate:selectedRadio": ($event) => isRef(currentLayout) ? currentLayout.value = $event : null,
                            "radio-content": unref(layouts),
                            "grid-column": { cols: "4" }
                          }, {
                            label: withCtx((item) => [
                              createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                        ]),
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-base font-weight-medium" }, " Content "),
                          (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                            key: unref(configStore).appContentWidth,
                            "selected-radio": unref(configStore).appContentWidth,
                            "onUpdate:selectedRadio": ($event) => unref(configStore).appContentWidth = $event,
                            "radio-content": unref(contentWidth),
                            "grid-column": { cols: "4" }
                          }, {
                            label: withCtx((item) => [
                              createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                        ]),
                        createVNode("div", { class: "d-flex flex-column gap-2" }, [
                          createVNode("h6", { class: "text-base font-weight-medium" }, " Direction "),
                          (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                            key: unref(currentDir),
                            "selected-radio": unref(currentDir),
                            "onUpdate:selectedRadio": ($event) => isRef(currentDir) ? currentDir.value = $event : null,
                            "radio-content": unref(direction),
                            "grid-column": { cols: "4" }
                          }, {
                            label: withCtx((item) => [
                              createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                            ]),
                            _: 1
                          }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                        ])
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
              createVNode("div", { class: "customizer-heading d-flex align-center justify-space-between" }, [
                createVNode("div", null, [
                  createVNode("h6", { class: "text-h6" }, " Theme Customizer "),
                  createVNode("p", { class: "text-body-2 mb-0" }, " Customize & Preview in Real Time ")
                ]),
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    color: "medium-emphasis",
                    onClick: resetCustomizer
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(VBadge, {
                        dot: "",
                        color: "error",
                        "offset-x": "-30",
                        "offset-y": "-15"
                      }, null, 512), [
                        [vShow, unref(isCookieHasAnyValue)]
                      ]),
                      createVNode(VIcon, {
                        size: "24",
                        icon: "ri-refresh-line"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    color: "medium-emphasis",
                    onClick: ($event) => isNavDrawerOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "ri-close-line",
                        size: "24"
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              createVNode(VDivider),
              createVNode(unref(PerfectScrollbar), {
                tag: "ul",
                options: { wheelPropagation: false }
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomizerSection, {
                    title: "Theming",
                    divider: false,
                    class: "pb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-h6" }, " Primary Color "),
                        createVNode("div", {
                          class: "d-flex app-customizer-primary-colors",
                          style: { "column-gap": "0.75rem", "margin-block-start": "2px" }
                        }, [
                          (openBlock(), createBlock(Fragment, null, renderList(colors2, (color) => {
                            return createVNode("div", {
                              key: color.main,
                              style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === color.main ? `outline-color: ${color.main}; outline-width:2px;` : `--v-color:${color.main}`],
                              class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === color.main ? "active" : ""],
                              onClick: ($event) => unref(setPrimaryColor)(color)
                            }, [
                              createVNode("div", {
                                style: [{ "border-radius": "0.5rem", "block-size": "2.125rem", "inline-size": "1.9375rem" }, { backgroundColor: color.main }]
                              }, null, 4)
                            ], 14, ["onClick"]);
                          }), 64)),
                          createVNode("div", {
                            class: ["primary-color-wrapper cursor-pointer", unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? "active" : ""],
                            style: [{ "border-radius": "0.5rem", "outline": "1px solid rgba(var(--v-border-color), var(--v-border-opacity))", "padding-block": "0.5rem", "padding-inline": "0.625rem" }, unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? `outline-color: ${unref(customPrimaryColor)}; outline-width:2px;` : ""]
                          }, [
                            createVNode(VBtn, {
                              icon: "",
                              size: "small",
                              color: unref(vuetifyTheme).current.value.colors.primary === unref(customPrimaryColor) ? unref(customPrimaryColor) : _ctx.$vuetify.theme.current.dark ? "#8692d029" : "#4b465c29",
                              variant: "flat",
                              style: { "border-radius": "0.5rem" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: "ri-palette-line"
                                })
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createVNode(VMenu, {
                              activator: "parent",
                              "close-on-content-click": false
                            }, {
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VColorPicker, {
                                          modelValue: unref(customPrimaryColor),
                                          "onUpdate:modelValue": [($event) => isRef(customPrimaryColor) ? customPrimaryColor.value = $event : null, ($event) => unref(setPrimaryColor)({ main: unref(customPrimaryColor), darken: unref(customPrimaryColor) })],
                                          mode: "hex",
                                          modes: ["hex"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 6)
                        ])
                      ]),
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-h6" }, " Mode "),
                        (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                          key: unref(configStore).theme,
                          "selected-radio": unref(configStore).theme,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).theme = $event,
                          "radio-content": unref(themeMode),
                          "grid-column": { cols: "4" },
                          class: "customizer-skins"
                        }, {
                          label: withCtx((item) => [
                            createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                          ]),
                          content: withCtx(({ item }) => [
                            createVNode("div", {
                              class: "customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100",
                              style: { "min-inline-size": "100%" }
                            }, [
                              createVNode(VIcon, {
                                size: "30",
                                icon: item.bgImage,
                                color: "high-emphasis"
                              }, null, 8, ["icon"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                      ]),
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-h6" }, " Skin "),
                        (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                          key: unref(configStore).skin,
                          "selected-radio": unref(configStore).skin,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).skin = $event,
                          "radio-content": unref(themeSkin),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item) => [
                            createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                          ]),
                          _: 1
                        }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                      ]),
                      createVNode("div", {
                        class: ["align-center justify-space-between", unref(vuetifyTheme).global.name.value === "light" && unref(configStore).appContentLayoutNav === unref(AppContentLayoutNav).Vertical ? "d-flex" : "d-none"]
                      }, [
                        createVNode(VLabel, {
                          for: "customizer-semi-dark",
                          class: "text-h6 text-high-emphasis"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Semi Dark Menu ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode(VSwitch, {
                            id: "customizer-semi-dark",
                            modelValue: unref(configStore).isVerticalNavSemiDark,
                            "onUpdate:modelValue": ($event) => unref(configStore).isVerticalNavSemiDark = $event,
                            class: "ms-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ], 2)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CustomizerSection, {
                    title: "Layout",
                    class: "pt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-base font-weight-medium" }, " Layout "),
                        (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                          key: unref(currentLayout),
                          "selected-radio": unref(currentLayout),
                          "onUpdate:selectedRadio": ($event) => isRef(currentLayout) ? currentLayout.value = $event : null,
                          "radio-content": unref(layouts),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item) => [
                            createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                          ]),
                          _: 1
                        }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                      ]),
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-base font-weight-medium" }, " Content "),
                        (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                          key: unref(configStore).appContentWidth,
                          "selected-radio": unref(configStore).appContentWidth,
                          "onUpdate:selectedRadio": ($event) => unref(configStore).appContentWidth = $event,
                          "radio-content": unref(contentWidth),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item) => [
                            createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item.label), 1)
                          ]),
                          _: 1
                        }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                      ]),
                      createVNode("div", { class: "d-flex flex-column gap-2" }, [
                        createVNode("h6", { class: "text-base font-weight-medium" }, " Direction "),
                        (openBlock(), createBlock(_component_CustomRadiosWithImage, {
                          key: unref(currentDir),
                          "selected-radio": unref(currentDir),
                          "onUpdate:selectedRadio": ($event) => isRef(currentDir) ? currentDir.value = $event : null,
                          "radio-content": unref(direction),
                          "grid-column": { cols: "4" }
                        }, {
                          label: withCtx((item) => [
                            createVNode("span", { class: "text-sm text-medium-emphasis" }, toDisplayString(item == null ? void 0 : item.label), 1)
                          ]),
                          _: 1
                        }, 8, ["selected-radio", "onUpdate:selectedRadio", "radio-content"]))
                      ])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/TheCustomizer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "I18n",
  __ssrInlineRender: true,
  props: {
    languages: {
      type: Array,
      required: true
    },
    location: {
      type: null,
      required: false,
      default: "bottom end"
    }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useI18n({ useScope: "global" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(_component_IconBtn, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { icon: "ri-translate-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMenu, {
              activator: "parent",
              location: props.location,
              offset: "15px",
              width: "160"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    selected: [unref(locale)],
                    color: "primary",
                    mandatory: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.languages, (lang) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: lang.i18nLang,
                            class: "px-4",
                            value: lang.i18nLang,
                            onClick: ($event) => locale.value = lang.i18nLang
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(lang.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(lang.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(lang.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                            return openBlock(), createBlock(VListItem, {
                              key: lang.i18nLang,
                              class: "px-4",
                              value: lang.i18nLang,
                              onClick: ($event) => locale.value = lang.i18nLang
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(lang.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      selected: [unref(locale)],
                      color: "primary",
                      mandatory: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                          return openBlock(), createBlock(VListItem, {
                            key: lang.i18nLang,
                            class: "px-4",
                            value: lang.i18nLang,
                            onClick: ($event) => locale.value = lang.i18nLang
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(lang.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["value", "onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["selected"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { icon: "ri-translate-2" }),
              createVNode(VMenu, {
                activator: "parent",
                location: props.location,
                offset: "15px",
                width: "160"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    selected: [unref(locale)],
                    color: "primary",
                    mandatory: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.languages, (lang) => {
                        return openBlock(), createBlock(VListItem, {
                          key: lang.i18nLang,
                          class: "px-4",
                          value: lang.i18nLang,
                          onClick: ($event) => locale.value = lang.i18nLang
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(lang.label), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["selected"])
                ]),
                _: 1
              }, 8, ["location"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/I18n.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
