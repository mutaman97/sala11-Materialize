import { useSSRContext, mergeProps, withCtx, renderSlot, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
const _sfc_main = {
  __name: "CustomRadiosWithIcon",
  __ssrInlineRender: true,
  props: {
    selectedRadio: {
      type: String,
      required: true
    },
    radioContent: {
      type: Array,
      required: true
    },
    gridColumn: {
      type: null,
      required: false
    }
  },
  emits: ["update:selectedRadio"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateSelectedOption = (value) => {
      if (value !== null)
        emit("update:selectedRadio", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.radioContent) {
        _push(ssrRenderComponent(VRadioGroup, mergeProps({
          "model-value": props.selectedRadio,
          "onUpdate:modelValue": updateSelectedOption
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(props.radioContent, (item) => {
                      _push3(ssrRenderComponent(VCol, mergeProps({
                        key: item.title,
                        ref_for: true
                      }, __props.gridColumn), {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VLabel, {
                              class: ["custom-input custom-radio-icon rounded-xl cursor-pointer", props.selectedRadio === item.value ? "active" : ""]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "default", { item }, () => {
                                    _push5(`<div class="d-flex flex-column align-center text-center gap-2" data-v-8b96259c${_scopeId4}>`);
                                    _push5(ssrRenderComponent(VIcon, {
                                      size: "28",
                                      icon: item.icon,
                                      class: "text-high-emphasis"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<h6 class="cr-title text-base" data-v-8b96259c${_scopeId4}>${ssrInterpolate(item.title)}</h6><p class="text-sm text-medium-emphasis mb-0 clamp-text" data-v-8b96259c${_scopeId4}>${ssrInterpolate(item.desc)}</p></div>`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`<div data-v-8b96259c${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VRadio, {
                                    value: item.value
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "default", { item }, () => [
                                      createVNode("div", { class: "d-flex flex-column align-center text-center gap-2" }, [
                                        createVNode(VIcon, {
                                          size: "28",
                                          icon: item.icon,
                                          class: "text-high-emphasis"
                                        }, null, 8, ["icon"]),
                                        createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                        createVNode("p", { class: "text-sm text-medium-emphasis mb-0 clamp-text" }, toDisplayString(item.desc), 1)
                                      ])
                                    ], true),
                                    createVNode("div", null, [
                                      createVNode(VRadio, {
                                        value: item.value
                                      }, null, 8, ["value"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VLabel, {
                                class: ["custom-input custom-radio-icon rounded-xl cursor-pointer", props.selectedRadio === item.value ? "active" : ""]
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "default", { item }, () => [
                                    createVNode("div", { class: "d-flex flex-column align-center text-center gap-2" }, [
                                      createVNode(VIcon, {
                                        size: "28",
                                        icon: item.icon,
                                        class: "text-high-emphasis"
                                      }, null, 8, ["icon"]),
                                      createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                      createVNode("p", { class: "text-sm text-medium-emphasis mb-0 clamp-text" }, toDisplayString(item.desc), 1)
                                    ])
                                  ], true),
                                  createVNode("div", null, [
                                    createVNode(VRadio, {
                                      value: item.value
                                    }, null, 8, ["value"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.radioContent, (item) => {
                        return openBlock(), createBlock(VCol, mergeProps({
                          key: item.title,
                          ref_for: true
                        }, __props.gridColumn), {
                          default: withCtx(() => [
                            createVNode(VLabel, {
                              class: ["custom-input custom-radio-icon rounded-xl cursor-pointer", props.selectedRadio === item.value ? "active" : ""]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "default", { item }, () => [
                                  createVNode("div", { class: "d-flex flex-column align-center text-center gap-2" }, [
                                    createVNode(VIcon, {
                                      size: "28",
                                      icon: item.icon,
                                      class: "text-high-emphasis"
                                    }, null, 8, ["icon"]),
                                    createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                    createVNode("p", { class: "text-sm text-medium-emphasis mb-0 clamp-text" }, toDisplayString(item.desc), 1)
                                  ])
                                ], true),
                                createVNode("div", null, [
                                  createVNode(VRadio, {
                                    value: item.value
                                  }, null, 8, ["value"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1040);
                      }), 128))
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VRow, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.radioContent, (item) => {
                      return openBlock(), createBlock(VCol, mergeProps({
                        key: item.title,
                        ref_for: true
                      }, __props.gridColumn), {
                        default: withCtx(() => [
                          createVNode(VLabel, {
                            class: ["custom-input custom-radio-icon rounded-xl cursor-pointer", props.selectedRadio === item.value ? "active" : ""]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "default", { item }, () => [
                                createVNode("div", { class: "d-flex flex-column align-center text-center gap-2" }, [
                                  createVNode(VIcon, {
                                    size: "28",
                                    icon: item.icon,
                                    class: "text-high-emphasis"
                                  }, null, 8, ["icon"]),
                                  createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                  createVNode("p", { class: "text-sm text-medium-emphasis mb-0 clamp-text" }, toDisplayString(item.desc), 1)
                                ])
                              ], true),
                              createVNode("div", null, [
                                createVNode(VRadio, {
                                  value: item.value
                                }, null, 8, ["value"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1040);
                    }), 128))
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/app-form-elements/CustomRadiosWithIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b96259c"]]);
export {
  __unplugin_components_0 as _
};
