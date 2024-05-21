import { useSSRContext, ref, mergeProps, unref, isRef, watch, nextTick, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VCombobox } from "./VCombobox-BVXw893D.js";
import { a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { _ as _sfc_main$7 } from "./AppCardCode-DkpMhnYF.js";
import "./VSelect-5lJOBAar.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "../ssr.js";
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
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./filter-BC4fOy6c.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
import "./VSlideGroup-Bvz86g7R.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
const _sfc_main$6 = {
  __name: "DemoComboboxClearable",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref([
      "Vuetify",
      "Programming"
    ]);
    const items = [
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCombobox, mergeProps({
        modelValue: unref(select),
        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
        items,
        label: "Combobox",
        multiple: "",
        placeholder: "deployment",
        clearable: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxClearable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoComboboxNoDataWithChips",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Gaming",
      "Programming",
      "Vue",
      "Vuetify"
    ];
    const selectedList = ref(["Vuetify"]);
    const search = ref(null);
    watch(selectedList, (value) => {
      if (value.length > 5)
        nextTick(() => selectedList.value.pop());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCombobox, mergeProps({
        modelValue: unref(selectedList),
        "onUpdate:modelValue": ($event) => isRef(selectedList) ? selectedList.value = $event : null,
        "search-input": unref(search),
        "onUpdate:searchInput": ($event) => isRef(search) ? search.value = $event : null,
        items,
        "hide-selected": "",
        "hide-no-data": false,
        placeholder: "deployment",
        hint: "Maximum of 5 tags",
        label: "Add some tags",
        multiple: "",
        "persistent-hint": ""
      }, _attrs), {
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VListItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItemTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` No results matching &quot;<strong${_scopeId3}>${ssrInterpolate(unref(search))}</strong>&quot;. Press <kbd${_scopeId3}>enter</kbd> to create a new one `);
                      } else {
                        return [
                          createTextVNode(' No results matching "'),
                          createVNode("strong", null, toDisplayString(unref(search)), 1),
                          createTextVNode('". Press '),
                          createVNode("kbd", null, "enter"),
                          createTextVNode(" to create a new one ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItemTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(' No results matching "'),
                        createVNode("strong", null, toDisplayString(unref(search)), 1),
                        createTextVNode('". Press '),
                        createVNode("kbd", null, "enter"),
                        createTextVNode(" to create a new one ")
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
              createVNode(VListItem, null, {
                default: withCtx(() => [
                  createVNode(VListItemTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(' No results matching "'),
                      createVNode("strong", null, toDisplayString(unref(search)), 1),
                      createTextVNode('". Press '),
                      createVNode("kbd", null, "enter"),
                      createTextVNode(" to create a new one ")
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
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxNoDataWithChips.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoComboboxMultiple",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedItem = ref([
      "Vuetify",
      "Programming"
    ]);
    const items = [
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "Select a favorite activity or create a new one",
                    multiple: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      items,
                      placeholder: "deployment",
                      label: "Select a favorite activity or create a new one",
                      multiple: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "I use chips",
                    multiple: "",
                    chips: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      items,
                      placeholder: "deployment",
                      label: "I use chips",
                      multiple: "",
                      chips: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    placeholder: "deployment",
                    label: "I'm readonly",
                    chips: "",
                    multiple: "",
                    readonly: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      placeholder: "deployment",
                      label: "I'm readonly",
                      chips: "",
                      multiple: "",
                      readonly: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "I use selection slot",
                    multiple: ""
                  }, {
                    selection: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, { size: "small" }, {
                          prepend: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                start: "",
                                color: "primary"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(String(item.title).charAt(0).toUpperCase())}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(String(item.title).charAt(0).toUpperCase()), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  start: "",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(String(item.title).charAt(0).toUpperCase()), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` ${ssrInterpolate(item.title)}`);
                            } else {
                              return [
                                createTextVNode(" " + toDisplayString(item.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, { size: "small" }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                start: "",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(String(item.title).charAt(0).toUpperCase()), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" " + toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      items,
                      placeholder: "deployment",
                      label: "I use selection slot",
                      multiple: ""
                    }, {
                      selection: withCtx(({ item }) => [
                        createVNode(VChip, { size: "small" }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              start: "",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(String(item.title).charAt(0).toUpperCase()), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" " + toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "Select a favorite activity or create a new one",
                    multiple: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "I use chips",
                    multiple: "",
                    chips: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    placeholder: "deployment",
                    label: "I'm readonly",
                    chips: "",
                    multiple: "",
                    readonly: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    placeholder: "deployment",
                    label: "I use selection slot",
                    multiple: ""
                  }, {
                    selection: withCtx(({ item }) => [
                      createVNode(VChip, { size: "small" }, {
                        prepend: withCtx(() => [
                          createVNode(VAvatar, {
                            start: "",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(String(item.title).charAt(0).toUpperCase()), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" " + toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxMultiple.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoComboboxVariant",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedItem = ref(["Programming"]);
    const items = [
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    multiple: "",
                    placeholder: "deployment",
                    variant: "solo",
                    label: "solo"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      items,
                      multiple: "",
                      placeholder: "deployment",
                      variant: "solo",
                      label: "solo"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "outlined",
                    label: "Outlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      multiple: "",
                      items,
                      placeholder: "deployment",
                      variant: "outlined",
                      label: "Outlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "underlined",
                    label: "Underlined"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      multiple: "",
                      items,
                      placeholder: "deployment",
                      variant: "underlined",
                      label: "Underlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "filled",
                    label: "Filled"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      multiple: "",
                      items,
                      placeholder: "deployment",
                      variant: "filled",
                      label: "Filled"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    variant: "plain",
                    placeholder: "deployment",
                    label: "Plain"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCombobox, {
                      modelValue: unref(selectedItem),
                      "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                      multiple: "",
                      items,
                      variant: "plain",
                      placeholder: "deployment",
                      label: "Plain"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    items,
                    multiple: "",
                    placeholder: "deployment",
                    variant: "solo",
                    label: "solo"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "outlined",
                    label: "Outlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "underlined",
                    label: "Underlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    placeholder: "deployment",
                    variant: "filled",
                    label: "Filled"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCombobox, {
                    modelValue: unref(selectedItem),
                    "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
                    multiple: "",
                    items,
                    variant: "plain",
                    placeholder: "deployment",
                    label: "Plain"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoComboboxDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref([
      "Vuetify",
      "Programming"
    ]);
    const items = [
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCombobox, mergeProps({
        modelValue: unref(select),
        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
        items,
        label: "Combobox",
        density: "compact",
        placeholder: "deployment",
        multiple: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoComboboxBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedItem = ref("Programming");
    const items = [
      "Programming",
      "Design",
      "Vue",
      "Vuetify"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCombobox, mergeProps({
        modelValue: unref(selectedItem),
        "onUpdate:modelValue": ($event) => isRef(selectedItem) ? selectedItem.value = $event : null,
        items,
        placeholder: "deployment"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/combobox/DemoComboboxBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`, js: `<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
` };
const clearable = { ts: `<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`, js: `<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
` };
const density = { ts: `<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`, js: `<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
` };
const multiple = { ts: `<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
` };
const noDataWithChips = { ts: `<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`, js: `<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
` };
const variant = { ts: `<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "combobox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$7;
      const _component_DemoComboboxBasic = _sfc_main$1;
      const _component_DemoComboboxDensity = _sfc_main$2;
      const _component_DemoComboboxVariant = _sfc_main$3;
      const _component_DemoComboboxMultiple = _sfc_main$4;
      const _component_DemoComboboxNoDataWithChips = _sfc_main$5;
      const _component_DemoComboboxClearable = _sfc_main$6;
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
                        _push4(`<p${_scopeId3}>With Combobox, you can allow a user to create new values that may not be present in a provided items list.</p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "With Combobox, you can allow a user to create new values that may not be present in a provided items list."),
                          createVNode(_component_DemoComboboxBasic)
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
                        createVNode("p", null, "With Combobox, you can allow a user to create new values that may not be present in a provided items list."),
                        createVNode(_component_DemoComboboxBasic)
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
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> You can use <code${_scopeId3}>Density</code> prop to reduce combobox height and lower max height of list items. Available options are: <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>. </p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" You can use "),
                            createVNode("code", null, "Density"),
                            createTextVNode(" prop to reduce combobox height and lower max height of list items. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(". ")
                          ]),
                          createVNode(_component_DemoComboboxDensity)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Density",
                      code: density
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" You can use "),
                          createVNode("code", null, "Density"),
                          createTextVNode(" prop to reduce combobox height and lower max height of list items. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(". ")
                        ]),
                        createVNode(_component_DemoComboboxDensity)
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
                    title: "Variant",
                    code: variant
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>solo</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>underlined</code>, <code${_scopeId3}>filled</code> and <code${_scopeId3}>plain</code> options of z<code${_scopeId3}>variant</code> prop to change the look of combobox. </p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxVariant, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "solo"),
                            createTextVNode(", "),
                            createVNode("code", null, "outlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "underlined"),
                            createTextVNode(", "),
                            createVNode("code", null, "filled"),
                            createTextVNode(" and "),
                            createVNode("code", null, "plain"),
                            createTextVNode(" options of z"),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop to change the look of combobox. ")
                          ]),
                          createVNode(_component_DemoComboboxVariant)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Variant",
                      code: variant
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "solo"),
                          createTextVNode(", "),
                          createVNode("code", null, "outlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "underlined"),
                          createTextVNode(", "),
                          createVNode("code", null, "filled"),
                          createTextVNode(" and "),
                          createVNode("code", null, "plain"),
                          createTextVNode(" options of z"),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop to change the look of combobox. ")
                        ]),
                        createVNode(_component_DemoComboboxVariant)
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
                    title: "Multiple",
                    code: multiple
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Previously known as tags - user is allowed to enter more than 1 value</p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxMultiple, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                          createVNode(_component_DemoComboboxMultiple)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multiple",
                      code: multiple
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                        createVNode(_component_DemoComboboxMultiple)
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
                    title: "No data with chips",
                    code: noDataWithChips
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Previously known as tags - user is allowed to enter more than 1 value</p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxNoDataWithChips, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                          createVNode(_component_DemoComboboxNoDataWithChips)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "No data with chips",
                      code: noDataWithChips
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                        createVNode(_component_DemoComboboxNoDataWithChips)
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
                    title: "Clearable",
                    code: clearable
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>clearable</code> prop to clear combobox.</p>`);
                        _push4(ssrRenderComponent(_component_DemoComboboxClearable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "clearable"),
                            createTextVNode(" prop to clear combobox.")
                          ]),
                          createVNode(_component_DemoComboboxClearable)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Clearable",
                      code: clearable
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "clearable"),
                          createTextVNode(" prop to clear combobox.")
                        ]),
                        createVNode(_component_DemoComboboxClearable)
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
                      createVNode("p", null, "With Combobox, you can allow a user to create new values that may not be present in a provided items list."),
                      createVNode(_component_DemoComboboxBasic)
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
                    title: "Density",
                    code: density
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" You can use "),
                        createVNode("code", null, "Density"),
                        createTextVNode(" prop to reduce combobox height and lower max height of list items. Available options are: "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(". ")
                      ]),
                      createVNode(_component_DemoComboboxDensity)
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
                    title: "Variant",
                    code: variant
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "solo"),
                        createTextVNode(", "),
                        createVNode("code", null, "outlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "underlined"),
                        createTextVNode(", "),
                        createVNode("code", null, "filled"),
                        createTextVNode(" and "),
                        createVNode("code", null, "plain"),
                        createTextVNode(" options of z"),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop to change the look of combobox. ")
                      ]),
                      createVNode(_component_DemoComboboxVariant)
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
                    title: "Multiple",
                    code: multiple
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                      createVNode(_component_DemoComboboxMultiple)
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
                    title: "No data with chips",
                    code: noDataWithChips
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Previously known as tags - user is allowed to enter more than 1 value"),
                      createVNode(_component_DemoComboboxNoDataWithChips)
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
                    title: "Clearable",
                    code: clearable
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "clearable"),
                        createTextVNode(" prop to clear combobox.")
                      ]),
                      createVNode(_component_DemoComboboxClearable)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/combobox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
