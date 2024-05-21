import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, isRef, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VBtn, c as avatar1 } from "../ssr.js";
import { V as VList, a as VListItem } from "./VList-Bay5Fixr.js";
import { V as VCard, b as VCardActions } from "./VCard-BPXR3fWJ.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { _ as _sfc_main$7 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VImg-D-rbsD1g.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
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
import "./index-D5WAZiYx.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VAvatar-D2wIwigQ.js";
import "prismjs";
import "vue-prism-component";
/* empty css               */
const _sfc_main$6 = {
  __name: "DemoMenuActivatorAndTooltip",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Option 1",
        value: "Option 1"
      },
      {
        title: "Option 2",
        value: "Option 2"
      },
      {
        title: "Option 3",
        value: "Option 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMenu, mergeProps({ location: "top" }, _attrs), {
        activator: withCtx(({ props: menuProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTooltip, { location: "top" }, {
              activator: withCtx(({ props: tooltipProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps(menuProps, tooltipProps), {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dropdown w/ Tooltip `);
                      } else {
                        return [
                          createTextVNode(" Dropdown w/ Tooltip ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps(menuProps, tooltipProps), {
                      default: withCtx(() => [
                        createTextVNode(" Dropdown w/ Tooltip ")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>I am a Tooltip</span>`);
                } else {
                  return [
                    createVNode("span", null, "I am a Tooltip")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTooltip, { location: "top" }, {
                activator: withCtx(({ props: tooltipProps }) => [
                  createVNode(VBtn, mergeProps(menuProps, tooltipProps), {
                    default: withCtx(() => [
                      createTextVNode(" Dropdown w/ Tooltip ")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(() => [
                  createVNode("span", null, "I am a Tooltip")
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuActivatorAndTooltip.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoMenuPopover",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMenu, mergeProps({
        modelValue: unref(menu),
        "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null,
        location: "top"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Menu as Popover `);
                } else {
                  return [
                    createTextVNode(" Menu as Popover ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Menu as Popover ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { "max-width": "300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-avatar": unref(avatar1),
                          title: "John Leider",
                          subtitle: "Founder of Vuetify"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            "prepend-avatar": unref(avatar1),
                            title: "John Leider",
                            subtitle: "Founder of Vuetify"
                          }, null, 8, ["prepend-avatar"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. `);
                      } else {
                        return [
                          createTextVNode(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { icon: "ri-heart-line" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { icon: "ri-bookmark-line" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, { icon: "ri-thumb-down-line" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { icon: "ri-heart-line" }),
                          createVNode(VBtn, { icon: "ri-bookmark-line" }),
                          createVNode(VBtn, { icon: "ri-thumb-down-line" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-avatar": unref(avatar1),
                          title: "John Leider",
                          subtitle: "Founder of Vuetify"
                        }, null, 8, ["prepend-avatar"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, { icon: "ri-heart-line" }),
                        createVNode(VBtn, { icon: "ri-bookmark-line" }),
                        createVNode(VBtn, { icon: "ri-thumb-down-line" })
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
              createVNode(VCard, { "max-width": "300" }, {
                default: withCtx(() => [
                  createVNode(VList, null, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-avatar": unref(avatar1),
                        title: "John Leider",
                        subtitle: "Founder of Vuetify"
                      }, null, 8, ["prepend-avatar"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, { icon: "ri-heart-line" }),
                      createVNode(VBtn, { icon: "ri-bookmark-line" }),
                      createVNode(VBtn, { icon: "ri-thumb-down-line" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuPopover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoMenuOpenOnHover",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Option 1",
        value: "Option 1"
      },
      {
        title: "Option 2",
        value: "Option 2"
      },
      {
        title: "Option 3",
        value: "Option 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMenu, mergeProps({ "open-on-hover": "" }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` On hover `);
                } else {
                  return [
                    createTextVNode(" On hover ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" On hover ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuOpenOnHover.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoMenuLocation",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Option 1",
        value: "Option 1"
      },
      {
        title: "Option 2",
        value: "Option 2"
      },
      {
        title: "Option 3",
        value: "Option 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VMenu, { location: "top" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Top `);
                } else {
                  return [
                    createTextVNode(" Top ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Top ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMenu, { location: "bottom" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Bottom `);
                } else {
                  return [
                    createTextVNode(" Bottom ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Bottom ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMenu, { location: "start" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start `);
                } else {
                  return [
                    createTextVNode(" Start ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Start ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMenu, { location: "end" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` End `);
                } else {
                  return [
                    createTextVNode(" End ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" End ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuLocation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoMenuCustomTransitions",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Option 1",
        value: "Option 1"
      },
      {
        title: "Option 2",
        value: "Option 2"
      },
      {
        title: "Option 3",
        value: "Option 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}>`);
      _push(ssrRenderComponent(VMenu, { transition: "scale-transition" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Scale Transition `);
                } else {
                  return [
                    createTextVNode(" Scale Transition ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Scale Transition ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMenu, { transition: "slide-x-transition" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Slide X Transition `);
                } else {
                  return [
                    createTextVNode(" Slide X Transition ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Slide X Transition ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VMenu, { transition: "slide-y-transition" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, props, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Slide Y Transition `);
                } else {
                  return [
                    createTextVNode(" Slide Y Transition ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, props, {
                default: withCtx(() => [
                  createTextVNode(" Slide Y Transition ")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, { items })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuCustomTransitions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoMenuBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const menusVariant = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error"
    ];
    const items = [
      {
        title: "Option 1",
        value: "Option 1"
      },
      {
        title: "Option 2",
        value: "Option 2"
      },
      {
        title: "Option 3",
        value: "Option 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-space-x" }, _attrs))}><!--[-->`);
      ssrRenderList(menusVariant, (menu) => {
        _push(ssrRenderComponent(VMenu, { key: menu }, {
          activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, mergeProps({
                color: menu,
                ref_for: true
              }, props), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(menu)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(menu), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, mergeProps({
                  color: menu,
                  ref_for: true
                }, props), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(menu), 1)
                  ]),
                  _: 2
                }, 1040, ["color"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VList, { items }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VList, { items })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/menu/DemoMenuBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const activatorAndTooltip = { ts: `<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`, js: `<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
` };
const basic = { ts: `<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`, js: `<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
` };
const customTransitions = { ts: `<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`, js: `<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
` };
const location = { ts: `<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`, js: `<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
` };
const openOnHover = { ts: `<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`, js: `<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
` };
const popover = { ts: `<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="ri-heart-line" />
        <VBtn icon="ri-bookmark-line" />
        <VBtn icon="ri-thumb-down-line" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`, js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="ri-heart-line" />
        <VBtn icon="ri-bookmark-line" />
        <VBtn icon="ri-thumb-down-line" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
` };
const _sfc_main = {
  __name: "menu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$7;
      const _component_DemoMenuBasic = _sfc_main$1;
      const _component_DemoMenuCustomTransitions = _sfc_main$2;
      const _component_DemoMenuLocation = _sfc_main$3;
      const _component_DemoMenuOpenOnHover = _sfc_main$4;
      const _component_DemoMenuPopover = _sfc_main$5;
      const _component_DemoMenuActivatorAndTooltip = _sfc_main$6;
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
                        _push4(`<p${_scopeId3}> Remember to put the element that activates the menu in the activator slot. </p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, " Remember to put the element that activates the menu in the activator slot. "),
                          createVNode(_component_DemoMenuBasic)
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
                        createVNode("p", null, " Remember to put the element that activates the menu in the activator slot. "),
                        createVNode(_component_DemoMenuBasic)
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
                    title: "Custom transitions",
                    code: customTransitions
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Vuetify comes with 3 standard transitions, <code${_scopeId3}>scale</code>, <code${_scopeId3}>slide-x</code> and <code${_scopeId3}>slide-y</code>. Use <code${_scopeId3}>transition</code> prop to add transition to a menu.</p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuCustomTransitions, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Vuetify comes with 3 standard transitions, "),
                            createVNode("code", null, "scale"),
                            createTextVNode(", "),
                            createVNode("code", null, "slide-x"),
                            createTextVNode(" and "),
                            createVNode("code", null, "slide-y"),
                            createTextVNode(". Use "),
                            createVNode("code", null, "transition"),
                            createTextVNode(" prop to add transition to a menu.")
                          ]),
                          createVNode(_component_DemoMenuCustomTransitions)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom transitions",
                      code: customTransitions
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Vuetify comes with 3 standard transitions, "),
                          createVNode("code", null, "scale"),
                          createTextVNode(", "),
                          createVNode("code", null, "slide-x"),
                          createTextVNode(" and "),
                          createVNode("code", null, "slide-y"),
                          createTextVNode(". Use "),
                          createVNode("code", null, "transition"),
                          createTextVNode(" prop to add transition to a menu.")
                        ]),
                        createVNode(_component_DemoMenuCustomTransitions)
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
                    title: "Location",
                    code: location
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Menu can be offset relative to the activator by using the <code${_scopeId3}>location</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuLocation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Menu can be offset relative to the activator by using the "),
                            createVNode("code", null, "location"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoMenuLocation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Location",
                      code: location
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Menu can be offset relative to the activator by using the "),
                          createVNode("code", null, "location"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoMenuLocation)
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
                    title: "Open on hover",
                    code: openOnHover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Menus can be accessed using hover instead of clicking with the <code${_scopeId3}>open-on-hover</code> prop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuOpenOnHover, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Menus can be accessed using hover instead of clicking with the "),
                            createVNode("code", null, "open-on-hover"),
                            createTextVNode(" prop.")
                          ]),
                          createVNode(_component_DemoMenuOpenOnHover)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Open on hover",
                      code: openOnHover
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Menus can be accessed using hover instead of clicking with the "),
                          createVNode("code", null, "open-on-hover"),
                          createTextVNode(" prop.")
                        ]),
                        createVNode(_component_DemoMenuOpenOnHover)
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
                    title: "Popover",
                    code: popover
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.</p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuPopover, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents."),
                          createVNode(_component_DemoMenuPopover)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Popover",
                      code: popover
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents."),
                        createVNode(_component_DemoMenuPopover)
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
                    title: "Activator and tooltip",
                    code: activatorAndTooltip
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>With the new <code${_scopeId3}>v-slot</code> syntax, nested activators such as those seen with a <code${_scopeId3}>v-menu</code> and <code${_scopeId3}>v-tooltip</code> attached to the same activator button, need a particular setup in order to function correctly</p>`);
                        _push4(ssrRenderComponent(_component_DemoMenuActivatorAndTooltip, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("With the new "),
                            createVNode("code", null, "v-slot"),
                            createTextVNode(" syntax, nested activators such as those seen with a "),
                            createVNode("code", null, "v-menu"),
                            createTextVNode(" and "),
                            createVNode("code", null, "v-tooltip"),
                            createTextVNode(" attached to the same activator button, need a particular setup in order to function correctly")
                          ]),
                          createVNode(_component_DemoMenuActivatorAndTooltip)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Activator and tooltip",
                      code: activatorAndTooltip
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("With the new "),
                          createVNode("code", null, "v-slot"),
                          createTextVNode(" syntax, nested activators such as those seen with a "),
                          createVNode("code", null, "v-menu"),
                          createTextVNode(" and "),
                          createVNode("code", null, "v-tooltip"),
                          createTextVNode(" attached to the same activator button, need a particular setup in order to function correctly")
                        ]),
                        createVNode(_component_DemoMenuActivatorAndTooltip)
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
                      createVNode("p", null, " Remember to put the element that activates the menu in the activator slot. "),
                      createVNode(_component_DemoMenuBasic)
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
                    title: "Custom transitions",
                    code: customTransitions
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Vuetify comes with 3 standard transitions, "),
                        createVNode("code", null, "scale"),
                        createTextVNode(", "),
                        createVNode("code", null, "slide-x"),
                        createTextVNode(" and "),
                        createVNode("code", null, "slide-y"),
                        createTextVNode(". Use "),
                        createVNode("code", null, "transition"),
                        createTextVNode(" prop to add transition to a menu.")
                      ]),
                      createVNode(_component_DemoMenuCustomTransitions)
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
                    title: "Location",
                    code: location
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Menu can be offset relative to the activator by using the "),
                        createVNode("code", null, "location"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoMenuLocation)
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
                    title: "Open on hover",
                    code: openOnHover
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Menus can be accessed using hover instead of clicking with the "),
                        createVNode("code", null, "open-on-hover"),
                        createTextVNode(" prop.")
                      ]),
                      createVNode(_component_DemoMenuOpenOnHover)
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
                    title: "Popover",
                    code: popover
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents."),
                      createVNode(_component_DemoMenuPopover)
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
                    title: "Activator and tooltip",
                    code: activatorAndTooltip
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("With the new "),
                        createVNode("code", null, "v-slot"),
                        createTextVNode(" syntax, nested activators such as those seen with a "),
                        createVNode("code", null, "v-menu"),
                        createTextVNode(" and "),
                        createVNode("code", null, "v-tooltip"),
                        createTextVNode(" attached to the same activator button, need a particular setup in order to function correctly")
                      ]),
                      createVNode(_component_DemoMenuActivatorAndTooltip)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
