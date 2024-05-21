import { useSSRContext, mergeProps, withCtx, createVNode, resolveDynamicComponent, renderSlot, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
const _sfc_main = {
  __name: "CustomRadiosWithImage",
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
                        key: item.bgImage,
                        ref_for: true
                      }, __props.gridColumn), {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "gap": "2px" })}" data-v-5953fe81${_scopeId3}>`);
                            _push4(ssrRenderComponent(VLabel, {
                              class: ["custom-input custom-radio rounded-xl cursor-pointer w-100", props.selectedRadio === item.value ? "active" : ""]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "content", { item }, () => {
                                    if (typeof item.bgImage === "object") {
                                      ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(item.bgImage), { class: "custom-radio-image" }, null), _parent5, _scopeId4);
                                    } else {
                                      _push5(`<img${ssrRenderAttr("src", item.bgImage)} alt="bg-img" class="custom-radio-image" data-v-5953fe81${_scopeId4}>`);
                                    }
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(ssrRenderComponent(VRadio, {
                                    id: `custom-radio-with-img-${item.value}`,
                                    value: item.value
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "content", { item }, () => [
                                      typeof item.bgImage === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.bgImage), {
                                        key: 0,
                                        class: "custom-radio-image"
                                      })) : (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: item.bgImage,
                                        alt: "bg-img",
                                        class: "custom-radio-image"
                                      }, null, 8, ["src"]))
                                    ], true),
                                    createVNode(VRadio, {
                                      id: `custom-radio-with-img-${item.value}`,
                                      value: item.value
                                    }, null, 8, ["id", "value"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (item.label || _ctx.$slots.label) {
                              _push4(ssrRenderComponent(VLabel, {
                                for: `custom-radio-with-img-${item.value}`,
                                class: "cursor-pointer"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    ssrRenderSlot(_ctx.$slots, "label", {
                                      label: item.label
                                    }, () => {
                                      _push5(`${ssrInterpolate(item.label)}`);
                                    }, _push5, _parent5, _scopeId4);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "label", {
                                        label: item.label
                                      }, () => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ], true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "d-flex flex-column",
                                style: { "gap": "2px" }
                              }, [
                                createVNode(VLabel, {
                                  class: ["custom-input custom-radio rounded-xl cursor-pointer w-100", props.selectedRadio === item.value ? "active" : ""]
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "content", { item }, () => [
                                      typeof item.bgImage === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.bgImage), {
                                        key: 0,
                                        class: "custom-radio-image"
                                      })) : (openBlock(), createBlock("img", {
                                        key: 1,
                                        src: item.bgImage,
                                        alt: "bg-img",
                                        class: "custom-radio-image"
                                      }, null, 8, ["src"]))
                                    ], true),
                                    createVNode(VRadio, {
                                      id: `custom-radio-with-img-${item.value}`,
                                      value: item.value
                                    }, null, 8, ["id", "value"])
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                item.label || _ctx.$slots.label ? (openBlock(), createBlock(VLabel, {
                                  key: 0,
                                  for: `custom-radio-with-img-${item.value}`,
                                  class: "cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "label", {
                                      label: item.label
                                    }, () => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ], true)
                                  ]),
                                  _: 2
                                }, 1032, ["for"])) : createCommentVNode("", true)
                              ])
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
                          key: item.bgImage,
                          ref_for: true
                        }, __props.gridColumn), {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "d-flex flex-column",
                              style: { "gap": "2px" }
                            }, [
                              createVNode(VLabel, {
                                class: ["custom-input custom-radio rounded-xl cursor-pointer w-100", props.selectedRadio === item.value ? "active" : ""]
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "content", { item }, () => [
                                    typeof item.bgImage === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.bgImage), {
                                      key: 0,
                                      class: "custom-radio-image"
                                    })) : (openBlock(), createBlock("img", {
                                      key: 1,
                                      src: item.bgImage,
                                      alt: "bg-img",
                                      class: "custom-radio-image"
                                    }, null, 8, ["src"]))
                                  ], true),
                                  createVNode(VRadio, {
                                    id: `custom-radio-with-img-${item.value}`,
                                    value: item.value
                                  }, null, 8, ["id", "value"])
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              item.label || _ctx.$slots.label ? (openBlock(), createBlock(VLabel, {
                                key: 0,
                                for: `custom-radio-with-img-${item.value}`,
                                class: "cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "label", {
                                    label: item.label
                                  }, () => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ], true)
                                ]),
                                _: 2
                              }, 1032, ["for"])) : createCommentVNode("", true)
                            ])
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
                        key: item.bgImage,
                        ref_for: true
                      }, __props.gridColumn), {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "d-flex flex-column",
                            style: { "gap": "2px" }
                          }, [
                            createVNode(VLabel, {
                              class: ["custom-input custom-radio rounded-xl cursor-pointer w-100", props.selectedRadio === item.value ? "active" : ""]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "content", { item }, () => [
                                  typeof item.bgImage === "object" ? (openBlock(), createBlock(resolveDynamicComponent(item.bgImage), {
                                    key: 0,
                                    class: "custom-radio-image"
                                  })) : (openBlock(), createBlock("img", {
                                    key: 1,
                                    src: item.bgImage,
                                    alt: "bg-img",
                                    class: "custom-radio-image"
                                  }, null, 8, ["src"]))
                                ], true),
                                createVNode(VRadio, {
                                  id: `custom-radio-with-img-${item.value}`,
                                  value: item.value
                                }, null, 8, ["id", "value"])
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            item.label || _ctx.$slots.label ? (openBlock(), createBlock(VLabel, {
                              key: 0,
                              for: `custom-radio-with-img-${item.value}`,
                              class: "cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", {
                                  label: item.label
                                }, () => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ], true)
                              ]),
                              _: 2
                            }, 1032, ["for"])) : createCommentVNode("", true)
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/app-form-elements/CustomRadiosWithImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5953fe81"]]);
export {
  __unplugin_components_1 as _
};
