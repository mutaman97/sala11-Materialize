import { useSSRContext, ref, mergeProps, unref, isRef, withCtx, openBlock, createBlock, createVNode, watch, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VAutocomplete } from "./VAutocomplete-DPac00nm.js";
import { e as VSlideXReverseTransition } from "./index-D5WAZiYx.js";
import { a as VIcon, c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5, j as avatar6, i as avatar7, H as avatar8 } from "../ssr.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { _ as _sfc_main$c } from "./AppCardCode-DkpMhnYF.js";
import "./VSelect-5lJOBAar.js";
import "./VTextField-C5xFQjHM.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
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
import "./VAvatar-D2wIwigQ.js";
import "./filter-BC4fOy6c.js";
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
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VCardText-C84ViOu1.js";
const _sfc_main$b = {
  __name: "DemoAutocompleteValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "foo",
      "bar",
      "fizz",
      "buzz"
    ];
    const values = ref(["foo"]);
    const nameRules = [(v) => !!v.length || "Select at least one option."];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        modelValue: unref(values),
        "onUpdate:modelValue": ($event) => isRef(values) ? values.value = $event : null,
        items,
        rules: nameRules,
        placeholder: "Select Option",
        multiple: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteValidation.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DemoAutocompleteStateSelector",
  __ssrInlineRender: true,
  setup(__props) {
    const isEditing = ref(false);
    const selectedState = ref(null);
    const states = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        modelValue: unref(selectedState),
        "onUpdate:modelValue": ($event) => isRef(selectedState) ? selectedState.value = $event : null,
        hint: !unref(isEditing) ? "Click the icon to edit" : "Click the icon to save",
        placeholder: "Select Your State",
        items: states,
        readonly: !unref(isEditing),
        label: `State — ${unref(isEditing) ? "Editable" : "Readonly"}`,
        "persistent-hint": "",
        "prepend-icon": "ri-building-line",
        "menu-props": { maxHeight: "200px" }
      }, _attrs), {
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSlideXReverseTransition, { mode: "out-in" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    key: `icon-${unref(isEditing)}`,
                    color: unref(isEditing) ? "success" : "info",
                    icon: unref(isEditing) ? "ri-check-line" : "ri-edit-circle-line",
                    onClick: ($event) => isEditing.value = !unref(isEditing)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(VIcon, {
                      key: `icon-${unref(isEditing)}`,
                      color: unref(isEditing) ? "success" : "info",
                      icon: unref(isEditing) ? "ri-check-line" : "ri-edit-circle-line",
                      onClick: ($event) => isEditing.value = !unref(isEditing)
                    }, null, 8, ["color", "icon", "onClick"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSlideXReverseTransition, { mode: "out-in" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(VIcon, {
                    key: `icon-${unref(isEditing)}`,
                    color: unref(isEditing) ? "success" : "info",
                    icon: unref(isEditing) ? "ri-check-line" : "ri-edit-circle-line",
                    onClick: ($event) => isEditing.value = !unref(isEditing)
                  }, null, 8, ["color", "icon", "onClick"]))
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteStateSelector.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DemoAutocompleteAsyncItems",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const search = ref();
    const select = ref(null);
    const states = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    const items = ref(states);
    const querySelections = (query) => {
      loading.value = true;
      setTimeout(() => {
        items.value = states.filter((state) => (state || "").toLowerCase().includes((query || "").toLowerCase()));
        loading.value = false;
      }, 500);
    };
    watch(search, (query) => {
      query && query !== select.value && querySelections(query);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        modelValue: unref(select),
        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
        search: unref(search),
        "onUpdate:search": ($event) => isRef(search) ? search.value = $event : null,
        loading: unref(loading),
        items: unref(items),
        placeholder: "Search for a state",
        label: "What state are you from?",
        variant: "underlined",
        "menu-props": { maxHeight: "200px" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteAsyncItems.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoAutocompleteSlots",
  __ssrInlineRender: true,
  setup(__props) {
    const friends = ref([
      "Sandra Adams",
      "Britta Holt"
    ]);
    const people = [
      {
        name: "Sandra Adams",
        group: "Group 1",
        avatar: avatar1
      },
      {
        name: "Ali Connors",
        group: "Group 1",
        avatar: avatar2
      },
      {
        name: "Trevor Hansen",
        group: "Group 1",
        avatar: avatar3
      },
      {
        name: "Tucker Smith",
        group: "Group 1",
        avatar: avatar4
      },
      {
        name: "Britta Holt",
        group: "Group 2",
        avatar: avatar5
      },
      {
        name: "Jane Smith ",
        group: "Group 2",
        avatar: avatar6
      },
      {
        name: "John Smith",
        group: "Group 2",
        avatar: avatar7
      },
      {
        name: "Sandra Williams",
        group: "Group 2",
        avatar: avatar8
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        modelValue: unref(friends),
        "onUpdate:modelValue": ($event) => isRef(friends) ? friends.value = $event : null,
        chips: "",
        "closable-chips": "",
        multiple: "",
        items: people,
        "item-title": "name",
        "item-value": "name",
        placeholder: "Select User",
        label: "Select"
      }, _attrs), {
        chip: withCtx(({ props, item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, mergeProps(props, {
              "prepend-avatar": item.raw.avatar,
              text: item.raw.name
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, mergeProps(props, {
                "prepend-avatar": item.raw.avatar,
                text: item.raw.name
              }), null, 16, ["prepend-avatar", "text"])
            ];
          }
        }),
        item: withCtx(({ props, item }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(VListItem, mergeProps(props, {
              "prepend-avatar": (_a = item == null ? void 0 : item.raw) == null ? void 0 : _a.avatar,
              title: (_b = item == null ? void 0 : item.raw) == null ? void 0 : _b.name,
              subtitle: (_c = item == null ? void 0 : item.raw) == null ? void 0 : _c.group
            }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VListItem, mergeProps(props, {
                "prepend-avatar": (_d = item == null ? void 0 : item.raw) == null ? void 0 : _d.avatar,
                title: (_e = item == null ? void 0 : item.raw) == null ? void 0 : _e.name,
                subtitle: (_f = item == null ? void 0 : item.raw) == null ? void 0 : _f.group
              }), null, 16, ["prepend-avatar", "title", "subtitle"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteSlots.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DemoAutocompleteCustomFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const states = [
      {
        name: "Florida",
        abbr: "FL",
        id: 1
      },
      {
        name: "Georgia",
        abbr: "GA",
        id: 2
      },
      {
        name: "Nebraska",
        abbr: "NE",
        id: 3
      },
      {
        name: "California",
        abbr: "CA",
        id: 4
      },
      {
        name: "New York",
        abbr: "NY",
        id: 5
      }
    ];
    function customFilter2(itemTitle, queryText, item) {
      const textOne = item.raw.name.toLowerCase();
      const textTwo = item.raw.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();
      return textOne.includes(searchText) || textTwo.includes(searchText);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        label: "States",
        items: states,
        "custom-filter": customFilter2,
        "item-title": "name",
        "item-value": "abbr",
        placeholder: "Select State"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteCustomFilter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DemoAutocompleteChips",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        label: "States",
        items,
        placeholder: "Select State",
        chips: "",
        multiple: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteChips.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoAutocompleteClearable",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        label: "States",
        items,
        multiple: "",
        placeholder: "Select State",
        clearable: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteClearable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoAutocompleteMultiple",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        label: "States",
        items,
        placeholder: "Select State",
        multiple: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteMultiple.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoAutocompleteVariant",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAutocomplete, {
                    variant: "solo",
                    label: "Solo",
                    items,
                    placeholder: "Select State"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAutocomplete, {
                      variant: "solo",
                      label: "Solo",
                      items,
                      placeholder: "Select State"
                    })
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
                  _push3(ssrRenderComponent(VAutocomplete, {
                    variant: "outlined",
                    label: "Outlined",
                    placeholder: "Select State",
                    items
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAutocomplete, {
                      variant: "outlined",
                      label: "Outlined",
                      placeholder: "Select State",
                      items
                    })
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
                  _push3(ssrRenderComponent(VAutocomplete, {
                    variant: "underlined",
                    label: "Underlined",
                    placeholder: "Select State",
                    items
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAutocomplete, {
                      variant: "underlined",
                      label: "Underlined",
                      placeholder: "Select State",
                      items
                    })
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
                  _push3(ssrRenderComponent(VAutocomplete, {
                    variant: "filled",
                    label: "Filled",
                    placeholder: "Select State",
                    items
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAutocomplete, {
                      variant: "filled",
                      label: "Filled",
                      placeholder: "Select State",
                      items
                    })
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
                  _push3(ssrRenderComponent(VAutocomplete, {
                    variant: "plain",
                    label: "Plain",
                    placeholder: "Select State",
                    items
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAutocomplete, {
                      variant: "plain",
                      label: "Plain",
                      placeholder: "Select State",
                      items
                    })
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
                  createVNode(VAutocomplete, {
                    variant: "solo",
                    label: "Solo",
                    items,
                    placeholder: "Select State"
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VAutocomplete, {
                    variant: "outlined",
                    label: "Outlined",
                    placeholder: "Select State",
                    items
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VAutocomplete, {
                    variant: "underlined",
                    label: "Underlined",
                    placeholder: "Select State",
                    items
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VAutocomplete, {
                    variant: "filled",
                    label: "Filled",
                    placeholder: "Select State",
                    items
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VAutocomplete, {
                    variant: "plain",
                    label: "Plain",
                    placeholder: "Select State",
                    items
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteVariant.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoAutocompleteDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("Florida");
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        modelValue: unref(select),
        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
        label: "States",
        density: "compact",
        placeholder: "Select State",
        items
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteDensity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoAutocompleteBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "California",
      "Colorado",
      "Florida",
      "Georgia",
      "Texas",
      "Wyoming"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAutocomplete, mergeProps({
        label: "States",
        items,
        placeholder: "Select State"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-elements/autocomplete/DemoAutocompleteBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const asyncItems = { ts: `<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`, js: `<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
` };
const basic = { ts: `<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`, js: `<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
` };
const chips = { ts: `<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
`, js: `<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
  />
</template>
` };
const clearable = { ts: `<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`, js: `<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
` };
const customFilter = { ts: `<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`, js: `<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
` };
const density = { ts: `<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`, js: `<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
` };
const multiple = { ts: `<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
`, js: `<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
  />
</template>
` };
const slots = { ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
` };
const stateSelector = { ts: `<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`, js: `<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="ri-building-line"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'ri-check-line' : 'ri-edit-circle-line'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
` };
const validation = { ts: `<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`, js: `<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
` };
const variant = { ts: `<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`, js: `<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
` };
const _sfc_main = {
  __name: "autocomplete",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$c;
      const _component_DemoAutocompleteBasic = _sfc_main$1;
      const _component_DemoAutocompleteDensity = _sfc_main$2;
      const _component_DemoAutocompleteVariant = _sfc_main$3;
      const _component_DemoAutocompleteMultiple = _sfc_main$4;
      const _component_DemoAutocompleteClearable = _sfc_main$5;
      const _component_DemoAutocompleteChips = _sfc_main$6;
      const _component_DemoAutocompleteCustomFilter = _sfc_main$7;
      const _component_DemoAutocompleteSlots = _sfc_main$8;
      const _component_DemoAutocompleteAsyncItems = _sfc_main$9;
      const _component_DemoAutocompleteStateSelector = _sfc_main$a;
      const _component_DemoAutocompleteValidation = _sfc_main$b;
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
                        _push4(`<p${_scopeId3}> The <code${_scopeId3}> v-autocomplete </code> component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" The "),
                            createVNode("code", null, " v-autocomplete "),
                            createTextVNode(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")
                          ]),
                          createVNode(_component_DemoAutocompleteBasic)
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
                          createTextVNode(" The "),
                          createVNode("code", null, " v-autocomplete "),
                          createTextVNode(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")
                        ]),
                        createVNode(_component_DemoAutocompleteBasic)
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
                        _push4(`<p${_scopeId3}> You can use <code${_scopeId3}> density </code> prop to adjusts vertical spacing within the component. Available options are: <code${_scopeId3}>default</code>, <code${_scopeId3}>comfortable</code>, and <code${_scopeId3}>compact</code>. </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" You can use "),
                            createVNode("code", null, " density "),
                            createTextVNode(" prop to adjusts vertical spacing within the component. Available options are: "),
                            createVNode("code", null, "default"),
                            createTextVNode(", "),
                            createVNode("code", null, "comfortable"),
                            createTextVNode(", and "),
                            createVNode("code", null, "compact"),
                            createTextVNode(". ")
                          ]),
                          createVNode(_component_DemoAutocompleteDensity)
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
                          createVNode("code", null, " density "),
                          createTextVNode(" prop to adjusts vertical spacing within the component. Available options are: "),
                          createVNode("code", null, "default"),
                          createTextVNode(", "),
                          createVNode("code", null, "comfortable"),
                          createTextVNode(", and "),
                          createVNode("code", null, "compact"),
                          createTextVNode(". ")
                        ]),
                        createVNode(_component_DemoAutocompleteDensity)
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
              md: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Variant",
                    code: variant
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>solo</code>, <code${_scopeId3}>outlined</code>, <code${_scopeId3}>underlined</code>, <code${_scopeId3}>filled</code> and <code${_scopeId3}>plain</code> options of <code${_scopeId3}>variant</code> prop to change the look of Autocomplete. </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteVariant, null, null, _parent4, _scopeId3));
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
                            createTextVNode(" options of "),
                            createVNode("code", null, "variant"),
                            createTextVNode(" prop to change the look of Autocomplete. ")
                          ]),
                          createVNode(_component_DemoAutocompleteVariant)
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
                          createTextVNode(" options of "),
                          createVNode("code", null, "variant"),
                          createTextVNode(" prop to change the look of Autocomplete. ")
                        ]),
                        createVNode(_component_DemoAutocompleteVariant)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>multiple</code> prop to select multiple. Accepts array for value</p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteMultiple, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "multiple"),
                            createTextVNode(" prop to select multiple. Accepts array for value")
                          ]),
                          createVNode(_component_DemoAutocompleteMultiple)
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
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "multiple"),
                          createTextVNode(" prop to select multiple. Accepts array for value")
                        ]),
                        createVNode(_component_DemoAutocompleteMultiple)
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
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>clearable</code> prop to add input clear functionality.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteClearable, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "clearable"),
                            createTextVNode(" prop to add input clear functionality.")
                          ]),
                          createVNode(_component_DemoAutocompleteClearable)
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
                          createTextVNode(" prop to add input clear functionality.")
                        ]),
                        createVNode(_component_DemoAutocompleteClearable)
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
                    title: "Chips",
                    code: chips
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}> chips </code> prop to use chips in select.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteChips, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, " chips "),
                            createTextVNode(" prop to use chips in select.")
                          ]),
                          createVNode(_component_DemoAutocompleteChips)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Chips",
                      code: chips
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, " chips "),
                          createTextVNode(" prop to use chips in select.")
                        ]),
                        createVNode(_component_DemoAutocompleteChips)
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
                    title: "Custom-Filter",
                    code: customFilter
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}> custom-filter </code> prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteCustomFilter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, " custom-filter "),
                            createTextVNode(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")
                          ]),
                          createVNode(_component_DemoAutocompleteCustomFilter)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom-Filter",
                      code: customFilter
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, " custom-filter "),
                          createTextVNode(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")
                        ]),
                        createVNode(_component_DemoAutocompleteCustomFilter)
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
                    title: "Slots",
                    code: slots
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteSlots, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. "),
                          createVNode(_component_DemoAutocompleteSlots)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Slots",
                      code: slots
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. "),
                        createVNode(_component_DemoAutocompleteSlots)
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
                    title: "Async items",
                    code: asyncItems
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Sometimes you need to load data externally based upon a search query. </p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteAsyncItems, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Sometimes you need to load data externally based upon a search query. "),
                          createVNode(_component_DemoAutocompleteAsyncItems)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Async items",
                      code: asyncItems
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Sometimes you need to load data externally based upon a search query. "),
                        createVNode(_component_DemoAutocompleteAsyncItems)
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
                    title: "State Selector",
                    code: stateSelector
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteStateSelector, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector."),
                          createVNode(_component_DemoAutocompleteStateSelector)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "State Selector",
                      code: stateSelector
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector."),
                        createVNode(_component_DemoAutocompleteStateSelector)
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
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>rules</code> prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.</p>`);
                        _push4(ssrRenderComponent(_component_DemoAutocompleteValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "rules"),
                            createTextVNode(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")
                          ]),
                          createVNode(_component_DemoAutocompleteValidation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Validation",
                      code: validation
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "rules"),
                          createTextVNode(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")
                        ]),
                        createVNode(_component_DemoAutocompleteValidation)
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
                        createTextVNode(" The "),
                        createVNode("code", null, " v-autocomplete "),
                        createTextVNode(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")
                      ]),
                      createVNode(_component_DemoAutocompleteBasic)
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
                        createVNode("code", null, " density "),
                        createTextVNode(" prop to adjusts vertical spacing within the component. Available options are: "),
                        createVNode("code", null, "default"),
                        createTextVNode(", "),
                        createVNode("code", null, "comfortable"),
                        createTextVNode(", and "),
                        createVNode("code", null, "compact"),
                        createTextVNode(". ")
                      ]),
                      createVNode(_component_DemoAutocompleteDensity)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "12"
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
                        createTextVNode(" options of "),
                        createVNode("code", null, "variant"),
                        createTextVNode(" prop to change the look of Autocomplete. ")
                      ]),
                      createVNode(_component_DemoAutocompleteVariant)
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
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "multiple"),
                        createTextVNode(" prop to select multiple. Accepts array for value")
                      ]),
                      createVNode(_component_DemoAutocompleteMultiple)
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
                        createTextVNode(" prop to add input clear functionality.")
                      ]),
                      createVNode(_component_DemoAutocompleteClearable)
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
                    title: "Chips",
                    code: chips
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, " chips "),
                        createTextVNode(" prop to use chips in select.")
                      ]),
                      createVNode(_component_DemoAutocompleteChips)
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
                    title: "Custom-Filter",
                    code: customFilter
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, " custom-filter "),
                        createTextVNode(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")
                      ]),
                      createVNode(_component_DemoAutocompleteCustomFilter)
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
                    title: "Slots",
                    code: slots
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. "),
                      createVNode(_component_DemoAutocompleteSlots)
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
                    title: "Async items",
                    code: asyncItems
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Sometimes you need to load data externally based upon a search query. "),
                      createVNode(_component_DemoAutocompleteAsyncItems)
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
                    title: "State Selector",
                    code: stateSelector
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector."),
                      createVNode(_component_DemoAutocompleteStateSelector)
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
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "rules"),
                        createTextVNode(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")
                      ]),
                      createVNode(_component_DemoAutocompleteValidation)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/autocomplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
