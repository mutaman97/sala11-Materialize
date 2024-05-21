import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { l as useTheme, V as VBtn, a as VIcon } from "../ssr.js";
const _sfc_main = {
  __name: "AuthProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const { global } = useTheme();
    const authProviders = [
      {
        icon: "bxl-facebook",
        color: "#497CE2",
        colorInDark: "#497CE2"
      },
      {
        icon: "bxl-twitter",
        color: "#1da1f2",
        colorInDark: "#1da1f2"
      },
      {
        icon: "bxl-github",
        color: "#272727",
        colorInDark: "#fff"
      },
      {
        icon: "bxl-google",
        color: "#db4437",
        colorInDark: "#db4437"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center flex-wrap gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(authProviders, (link) => {
        _push(ssrRenderComponent(VBtn, {
          key: link.icon,
          icon: "",
          variant: "text",
          size: "small",
          color: unref(global).name.value === "dark" ? link.colorInDark : link.color
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                icon: link.icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  icon: link.icon
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/authentication/AuthProvider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
