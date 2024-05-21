import { useSSRContext, withCtx, mergeProps, createVNode, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, unref, isRef } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VLabel } from "./form-DJQTvsmB.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { _ as __unplugin_components_1 } from "./CustomRadiosWithImage-RAmFAl8j.js";
import { _ as __unplugin_components_0$3 } from "./CustomRadiosWithIcon-CXRflZSC.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { _ as __unplugin_components_0$4 } from "./CustomRadios-DrYzSNcj.js";
import { _ as _sfc_main$a } from "./AppCardCode-DkpMhnYF.js";
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
/* empty css               */
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VInput-Bla8Vlgt.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VAvatar-D2wIwigQ.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$9 = {
  __name: "CustomCheckboxesWithImage",
  __ssrInlineRender: true,
  props: {
    selectedCheckbox: {
      type: Array,
      required: true
    },
    checkboxContent: {
      type: Array,
      required: true
    },
    gridColumn: {
      type: null,
      required: false
    }
  },
  emits: ["update:selectedCheckbox"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateSelectedOption = (value) => {
      if (typeof value !== "boolean" && value !== null)
        emit("update:selectedCheckbox", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.checkboxContent && props.selectedCheckbox) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.checkboxContent, (item) => {
                _push2(ssrRenderComponent(VCol, mergeProps({
                  key: item.value,
                  ref_for: true
                }, __props.gridColumn), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VLabel, {
                        class: ["custom-input custom-checkbox rounded-xl cursor-pointer w-100", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-a2f1ed80${_scopeId3}>`);
                            _push4(ssrRenderComponent(VCheckbox, {
                              id: `custom-checkbox-with-img-${item.value}`,
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><img${ssrRenderAttr("src", item.bgImage)} alt="bg-img" class="custom-checkbox-image" data-v-a2f1ed80${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("div", null, [
                                createVNode(VCheckbox, {
                                  id: `custom-checkbox-with-img-${item.value}`,
                                  "model-value": props.selectedCheckbox,
                                  value: item.value,
                                  "onUpdate:modelValue": updateSelectedOption
                                }, null, 8, ["id", "model-value", "value"])
                              ]),
                              createVNode("img", {
                                src: item.bgImage,
                                alt: "bg-img",
                                class: "custom-checkbox-image"
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (item.label || _ctx.$slots.label) {
                        _push3(ssrRenderComponent(VLabel, {
                          for: `custom-checkbox-with-img-${item.value}`,
                          class: "cursor-pointer"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, "label", {
                                label: item.label
                              }, () => {
                                _push4(`${ssrInterpolate(item.label)}`);
                              }, _push4, _parent4, _scopeId3);
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
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode(VLabel, {
                          class: ["custom-input custom-checkbox rounded-xl cursor-pointer w-100", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VCheckbox, {
                                id: `custom-checkbox-with-img-${item.value}`,
                                "model-value": props.selectedCheckbox,
                                value: item.value,
                                "onUpdate:modelValue": updateSelectedOption
                              }, null, 8, ["id", "model-value", "value"])
                            ]),
                            createVNode("img", {
                              src: item.bgImage,
                              alt: "bg-img",
                              class: "custom-checkbox-image"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        item.label || _ctx.$slots.label ? (openBlock(), createBlock(VLabel, {
                          key: 0,
                          for: `custom-checkbox-with-img-${item.value}`,
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
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(props.checkboxContent, (item) => {
                  return openBlock(), createBlock(VCol, mergeProps({
                    key: item.value,
                    ref_for: true
                  }, __props.gridColumn), {
                    default: withCtx(() => [
                      createVNode(VLabel, {
                        class: ["custom-input custom-checkbox rounded-xl cursor-pointer w-100", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VCheckbox, {
                              id: `custom-checkbox-with-img-${item.value}`,
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, 8, ["id", "model-value", "value"])
                          ]),
                          createVNode("img", {
                            src: item.bgImage,
                            alt: "bg-img",
                            class: "custom-checkbox-image"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      item.label || _ctx.$slots.label ? (openBlock(), createBlock(VLabel, {
                        key: 0,
                        for: `custom-checkbox-with-img-${item.value}`,
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
                    ]),
                    _: 2
                  }, 1040);
                }), 128))
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/app-form-elements/CustomCheckboxesWithImage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a2f1ed80"]]);
const bg1 = "/build/assets/background-1-BsufcZNu.jpg";
const bg2 = "/build/assets/background-2-Iej3vnSa.jpg";
const bg3 = "/build/assets/background-3-ChOOOPlx.jpg";
const _sfc_main$8 = {
  __name: "DemoCustomInputCustomCheckboxesWithImage",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxContent = [
      {
        bgImage: bg1,
        value: "basic"
      },
      {
        bgImage: bg2,
        value: "premium"
      },
      {
        bgImage: bg3,
        value: "enterprise"
      }
    ];
    const selectedCheckbox = ref(["basic"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomCheckboxesWithImage = __unplugin_components_0$2;
      _push(ssrRenderComponent(_component_CustomCheckboxesWithImage, mergeProps({
        "selected-checkbox": unref(selectedCheckbox),
        "onUpdate:selectedCheckbox": ($event) => isRef(selectedCheckbox) ? selectedCheckbox.value = $event : null,
        "checkbox-content": checkboxContent,
        "grid-column": { sm: "4", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxesWithImage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoCustomInputCustomRadiosWithImage",
  __ssrInlineRender: true,
  setup(__props) {
    const radioContent = [
      {
        bgImage: bg1,
        value: "basic"
      },
      {
        bgImage: bg2,
        value: "premium"
      },
      {
        bgImage: bg3,
        value: "enterprise"
      }
    ];
    const selectedRadio = ref("basic");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadiosWithImage = __unplugin_components_1;
      _push(ssrRenderComponent(_component_CustomRadiosWithImage, mergeProps({
        "selected-radio": unref(selectedRadio),
        "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
        "radio-content": radioContent,
        "grid-column": { sm: "4", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadiosWithImage.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "CustomCheckboxesWithIcon",
  __ssrInlineRender: true,
  props: {
    selectedCheckbox: {
      type: Array,
      required: true
    },
    checkboxContent: {
      type: Array,
      required: true
    },
    gridColumn: {
      type: null,
      required: false
    }
  },
  emits: ["update:selectedCheckbox"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateSelectedOption = (value) => {
      if (typeof value !== "boolean" && value !== null)
        emit("update:selectedCheckbox", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.checkboxContent && props.selectedCheckbox) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.checkboxContent, (item) => {
                _push2(ssrRenderComponent(VCol, mergeProps({
                  key: item.title,
                  ref_for: true
                }, __props.gridColumn), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VLabel, {
                        class: ["custom-input custom-checkbox-icon rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "default", { item }, () => {
                              _push4(`<div class="d-flex flex-column align-center text-center gap-2" data-v-bebdb181${_scopeId3}>`);
                              _push4(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: item.icon,
                                class: "text-high-emphasis"
                              }, null, _parent4, _scopeId3));
                              _push4(`<h6 class="cr-title text-base" data-v-bebdb181${_scopeId3}>${ssrInterpolate(item.title)}</h6><p class="text-sm text-medium-emphasis clamp-text mb-0" data-v-bebdb181${_scopeId3}>${ssrInterpolate(item.desc)}</p></div>`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`<div data-v-bebdb181${_scopeId3}>`);
                            _push4(ssrRenderComponent(VCheckbox, {
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
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
                                  createVNode("p", { class: "text-sm text-medium-emphasis clamp-text mb-0" }, toDisplayString(item.desc), 1)
                                ])
                              ], true),
                              createVNode("div", null, [
                                createVNode(VCheckbox, {
                                  "model-value": props.selectedCheckbox,
                                  value: item.value,
                                  "onUpdate:modelValue": updateSelectedOption
                                }, null, 8, ["model-value", "value"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VLabel, {
                          class: ["custom-input custom-checkbox-icon rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
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
                                createVNode("p", { class: "text-sm text-medium-emphasis clamp-text mb-0" }, toDisplayString(item.desc), 1)
                              ])
                            ], true),
                            createVNode("div", null, [
                              createVNode(VCheckbox, {
                                "model-value": props.selectedCheckbox,
                                value: item.value,
                                "onUpdate:modelValue": updateSelectedOption
                              }, null, 8, ["model-value", "value"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(props.checkboxContent, (item) => {
                  return openBlock(), createBlock(VCol, mergeProps({
                    key: item.title,
                    ref_for: true
                  }, __props.gridColumn), {
                    default: withCtx(() => [
                      createVNode(VLabel, {
                        class: ["custom-input custom-checkbox-icon rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
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
                              createVNode("p", { class: "text-sm text-medium-emphasis clamp-text mb-0" }, toDisplayString(item.desc), 1)
                            ])
                          ], true),
                          createVNode("div", null, [
                            createVNode(VCheckbox, {
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, 8, ["model-value", "value"])
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/app-form-elements/CustomCheckboxesWithIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bebdb181"]]);
const _sfc_main$5 = {
  __name: "DemoCustomInputCustomCheckboxesWithIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxContent = [
      {
        title: "Backup",
        desc: "Backup every file from your project.",
        value: "backup",
        icon: "ri-server-line"
      },
      {
        title: "Encrypt",
        desc: "Translate your data to encrypted text.",
        value: "encrypt",
        icon: "ri-shield-line"
      },
      {
        title: "Site Lock",
        desc: "Security tool to protect your website.",
        value: "site-lock",
        icon: "ri-lock-line"
      }
    ];
    const selectedCheckbox = ref(["backup"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomCheckboxesWithIcon = __unplugin_components_0$1;
      _push(ssrRenderComponent(_component_CustomCheckboxesWithIcon, mergeProps({
        "selected-checkbox": unref(selectedCheckbox),
        "onUpdate:selectedCheckbox": ($event) => isRef(selectedCheckbox) ? selectedCheckbox.value = $event : null,
        "checkbox-content": checkboxContent,
        "grid-column": { sm: "4", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxesWithIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoCustomInputCustomRadiosWithIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const radioContent = [
      {
        title: "Starter",
        desc: "A simple start for everyone.",
        value: "starter",
        icon: "ri-rocket-line"
      },
      {
        title: "Standard",
        desc: "For small to medium businesses.",
        value: "standard",
        icon: "ri-user-line"
      },
      {
        title: "Enterprise",
        desc: "Solution for big organizations.",
        value: "enterprise",
        icon: "ri-vip-crown-line"
      }
    ];
    const selectedRadio = ref("starter");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadiosWithIcon = __unplugin_components_0$3;
      _push(ssrRenderComponent(_component_CustomRadiosWithIcon, mergeProps({
        "selected-radio": unref(selectedRadio),
        "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
        "radio-content": radioContent,
        "grid-column": { sm: "4", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadiosWithIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CustomCheckboxes",
  __ssrInlineRender: true,
  props: {
    selectedCheckbox: {
      type: Array,
      required: true
    },
    checkboxContent: {
      type: Array,
      required: true
    },
    gridColumn: {
      type: null,
      required: false
    }
  },
  emits: ["update:selectedCheckbox"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateSelectedOption = (value) => {
      if (typeof value !== "boolean" && value !== null)
        emit("update:selectedCheckbox", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.checkboxContent && props.selectedCheckbox) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.checkboxContent, (item) => {
                _push2(ssrRenderComponent(VCol, mergeProps({
                  key: item.title,
                  ref_for: true
                }, __props.gridColumn), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VLabel, {
                        class: ["custom-input custom-checkbox rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-2dc197d3${_scopeId3}>`);
                            _push4(ssrRenderComponent(VCheckbox, {
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                            ssrRenderSlot(_ctx.$slots, "default", { item }, () => {
                              _push4(`<div class="flex-grow-1" data-v-2dc197d3${_scopeId3}><div class="d-flex align-center mb-2" data-v-2dc197d3${_scopeId3}><h6 class="cr-title text-base" data-v-2dc197d3${_scopeId3}>${ssrInterpolate(item.title)}</h6>`);
                              _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                              if (item.subtitle) {
                                _push4(`<span class="text-sm text-disabled" data-v-2dc197d3${_scopeId3}>${ssrInterpolate(item.subtitle)}</span>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div><p class="text-sm text-medium-emphasis mb-0" data-v-2dc197d3${_scopeId3}>${ssrInterpolate(item.desc)}</p></div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              createVNode("div", null, [
                                createVNode(VCheckbox, {
                                  "model-value": props.selectedCheckbox,
                                  value: item.value,
                                  "onUpdate:modelValue": updateSelectedOption
                                }, null, 8, ["model-value", "value"])
                              ]),
                              renderSlot(_ctx.$slots, "default", { item }, () => [
                                createVNode("div", { class: "flex-grow-1" }, [
                                  createVNode("div", { class: "d-flex align-center mb-2" }, [
                                    createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                    createVNode(VSpacer),
                                    item.subtitle ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-sm text-disabled"
                                    }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.desc), 1)
                                ])
                              ], true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VLabel, {
                          class: ["custom-input custom-checkbox rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VCheckbox, {
                                "model-value": props.selectedCheckbox,
                                value: item.value,
                                "onUpdate:modelValue": updateSelectedOption
                              }, null, 8, ["model-value", "value"])
                            ]),
                            renderSlot(_ctx.$slots, "default", { item }, () => [
                              createVNode("div", { class: "flex-grow-1" }, [
                                createVNode("div", { class: "d-flex align-center mb-2" }, [
                                  createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                  createVNode(VSpacer),
                                  item.subtitle ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-sm text-disabled"
                                  }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                                ]),
                                createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.desc), 1)
                              ])
                            ], true)
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(props.checkboxContent, (item) => {
                  return openBlock(), createBlock(VCol, mergeProps({
                    key: item.title,
                    ref_for: true
                  }, __props.gridColumn), {
                    default: withCtx(() => [
                      createVNode(VLabel, {
                        class: ["custom-input custom-checkbox rounded-xl cursor-pointer", props.selectedCheckbox.includes(item.value) ? "active" : ""]
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VCheckbox, {
                              "model-value": props.selectedCheckbox,
                              value: item.value,
                              "onUpdate:modelValue": updateSelectedOption
                            }, null, 8, ["model-value", "value"])
                          ]),
                          renderSlot(_ctx.$slots, "default", { item }, () => [
                            createVNode("div", { class: "flex-grow-1" }, [
                              createVNode("div", { class: "d-flex align-center mb-2" }, [
                                createVNode("h6", { class: "cr-title text-base" }, toDisplayString(item.title), 1),
                                createVNode(VSpacer),
                                item.subtitle ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-sm text-disabled"
                                }, toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.desc), 1)
                            ])
                          ], true)
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/@core/components/app-form-elements/CustomCheckboxes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2dc197d3"]]);
const _sfc_main$2 = {
  __name: "DemoCustomInputCustomCheckboxes",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxContent = [
      {
        title: "Discount",
        subtitle: "20%",
        desc: "Wow! Get 20% off on your next purchase!",
        value: "discount"
      },
      {
        title: "Updates",
        subtitle: "Free",
        desc: "Get Updates regarding related products.",
        value: "updates"
      }
    ];
    const selectedCheckbox = ref(["discount"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomCheckboxes = __unplugin_components_0;
      _push(ssrRenderComponent(_component_CustomCheckboxes, mergeProps({
        "selected-checkbox": unref(selectedCheckbox),
        "onUpdate:selectedCheckbox": ($event) => isRef(selectedCheckbox) ? selectedCheckbox.value = $event : null,
        "checkbox-content": checkboxContent,
        "grid-column": { sm: "6", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomCheckboxes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoCustomInputCustomRadios",
  __ssrInlineRender: true,
  setup(__props) {
    const radioContent = [
      {
        title: "Basic",
        desc: "Get 2 projects with 2 team members.",
        value: "basic",
        subtitle: "$1.00"
      },
      {
        title: "Premium",
        subtitle: "$5.00",
        desc: "Get 8 projects with 8 team members.",
        value: "premium"
      }
    ];
    const selectedRadio = ref("basic");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomRadios = __unplugin_components_0$4;
      _push(ssrRenderComponent(_component_CustomRadios, mergeProps({
        "selected-radio": unref(selectedRadio),
        "onUpdate:selectedRadio": ($event) => isRef(selectedRadio) ? selectedRadio.value = $event : null,
        "radio-content": radioContent,
        "grid-column": { sm: "6", cols: "12" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/custom-input/DemoCustomInputCustomRadios.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const customCheckboxes = { ts: `<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`, js: `<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
` };
const customCheckboxesWithIcon = { ts: `<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'ri-server-line',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'ri-shield-line',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'ri-lock-line',
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`, js: `<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'ri-server-line',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'ri-shield-line',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'ri-lock-line',
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
` };
const customCheckboxesWithImage = { ts: `<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`, js: `<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
` };
const customRadios = { ts: `<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
    subtitle: '$1.00',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`, js: `<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
    subtitle: '$1.00',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
` };
const customRadiosWithIcon = { ts: `<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'ri-rocket-line',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'ri-user-line',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'ri-vip-crown-line',
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`, js: `<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'ri-rocket-line',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'ri-user-line',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'ri-vip-crown-line',
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
` };
const customRadiosWithImage = { ts: `<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`, js: `<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
` };
const _sfc_main = {
  __name: "custom-input",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$a;
      const _component_DemoCustomInputCustomRadios = _sfc_main$1;
      const _component_DemoCustomInputCustomCheckboxes = _sfc_main$2;
      const _component_DemoCustomInputCustomRadiosWithIcon = _sfc_main$4;
      const _component_DemoCustomInputCustomCheckboxesWithIcon = _sfc_main$5;
      const _component_DemoCustomInputCustomRadiosWithImage = _sfc_main$7;
      const _component_DemoCustomInputCustomCheckboxesWithImage = _sfc_main$8;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Custom Radios",
                    code: customRadios
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomRadios, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomRadios)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Radios",
                      code: customRadios
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomRadios)
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
                    title: "Custom Checkboxes",
                    code: customCheckboxes
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomCheckboxes, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomCheckboxes)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Checkboxes",
                      code: customCheckboxes
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomCheckboxes)
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
                    title: "Custom Radios With Icon",
                    code: customRadiosWithIcon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomRadiosWithIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomRadiosWithIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Radios With Icon",
                      code: customRadiosWithIcon
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomRadiosWithIcon)
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
                    title: "Custom Checkboxes With Icon",
                    code: customCheckboxesWithIcon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomCheckboxesWithIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomCheckboxesWithIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Checkboxes With Icon",
                      code: customCheckboxesWithIcon
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomCheckboxesWithIcon)
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
                    title: "Custom Radios With Image",
                    code: customRadiosWithImage
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomRadiosWithImage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomRadiosWithImage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Radios With Image",
                      code: customRadiosWithImage
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomRadiosWithImage)
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
                    title: "Custom Checkboxes With Image",
                    code: customCheckboxesWithImage
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoCustomInputCustomCheckboxesWithImage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoCustomInputCustomCheckboxesWithImage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Checkboxes With Image",
                      code: customCheckboxesWithImage
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCustomInputCustomCheckboxesWithImage)
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
                    title: "Custom Radios",
                    code: customRadios
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomRadios)
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
                    title: "Custom Checkboxes",
                    code: customCheckboxes
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomCheckboxes)
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
                    title: "Custom Radios With Icon",
                    code: customRadiosWithIcon
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomRadiosWithIcon)
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
                    title: "Custom Checkboxes With Icon",
                    code: customCheckboxesWithIcon
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomCheckboxesWithIcon)
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
                    title: "Custom Radios With Image",
                    code: customRadiosWithImage
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomRadiosWithImage)
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
                    title: "Custom Checkboxes With Image",
                    code: customCheckboxesWithImage
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoCustomInputCustomCheckboxesWithImage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/custom-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
