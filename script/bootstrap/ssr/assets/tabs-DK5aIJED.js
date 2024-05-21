import { useSSRContext, ref, watch, unref, isRef, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VBtn, _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { _ as _sfc_main$d } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import "./forwardRefs-IZGbB77j.js";
import "./easing-BikAOx6-.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./index-D5WAZiYx.js";
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
import "./lazy-kVEey9ha.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VImg-D-rbsD1g.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$c = {
  __name: "DemoTabsDynamic",
  __ssrInlineRender: true,
  setup(__props) {
    const totalTabs = ref(3);
    const currentTab = ref(0);
    watch(totalTabs, (newValue) => {
      currentTab.value = newValue - 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(totalTabs), (n) => {
              _push2(ssrRenderComponent(VTab, {
                key: n,
                value: n
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Tab ${ssrInterpolate(n)}`);
                  } else {
                    return [
                      createTextVNode(" Tab " + toDisplayString(n), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(totalTabs), (n) => {
                return openBlock(), createBlock(VTab, {
                  key: n,
                  value: n
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tab " + toDisplayString(n), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center mt-9">`);
      _push(ssrRenderComponent(VBtn, {
        disabled: !unref(totalTabs),
        variant: "text",
        onClick: ($event) => totalTabs.value--
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Remove Tab `);
          } else {
            return [
              createTextVNode(" Remove Tab ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        onClick: ($event) => totalTabs.value++
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add Tab `);
          } else {
            return [
              createTextVNode(" Add Tab ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsDynamic.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const tabItemText$2 = "Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.";
const _sfc_main$b = {
  __name: "DemoTabsProgrammaticNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(1);
    const items = [
      "Appetizers",
      "Entrees",
      "Deserts",
      "Cocktails"
    ];
    const totalTabs = items.length;
    const preTab = () => {
      if (currentTab.value !== 1)
        currentTab.value -= 1;
    };
    const nextTab = () => {
      if (currentTab.value !== totalTabs)
        currentTab.value += 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        grow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items.length, (item) => {
              _push2(ssrRenderComponent(VTab, {
                key: item,
                value: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(items[item - 1])}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(items[item - 1]), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items.length, (item) => {
                return openBlock(), createBlock(VTab, {
                  key: item,
                  value: item
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(items[item - 1]), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items.length, (item) => {
              _push2(ssrRenderComponent(VWindowItem, {
                key: item,
                value: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tabItemText$2)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tabItemText$2))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items.length, (item) => {
                return openBlock(), createBlock(VWindowItem, {
                  key: item,
                  value: item
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tabItemText$2))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center">`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        disabled: unref(currentTab) === 1,
        onClick: preTab
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Previous `);
          } else {
            return [
              createTextVNode(" Previous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        disabled: unref(currentTab) === unref(totalTabs),
        onClick: nextTab
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
          } else {
            return [
              createTextVNode(" Next ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsProgrammaticNavigation.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const tabItemText$1 = "hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";
const _sfc_main$a = {
  __name: "DemoTabsGrow",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("Appetizers");
    const items = [
      "Appetizers",
      "Entrees",
      "Deserts",
      "Cocktails"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        grow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(VTab, {
                key: item,
                value: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                return createVNode(VTab, {
                  key: item,
                  value: item
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(VWindowItem, {
                key: item,
                value: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tabItemText$1)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tabItemText$1))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                return createVNode(VWindowItem, {
                  key: item,
                  value: item
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tabItemText$1))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsGrow.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTabs, mergeProps({ "fixed-tabs": "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Fixed Tab 1 `);
            } else {
              return [
                createTextVNode(" Fixed Tab 1 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Fixed Tab 2 `);
            } else {
              return [
                createTextVNode(" Fixed Tab 2 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Fixed Tab 3 `);
            } else {
              return [
                createTextVNode(" Fixed Tab 3 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Fixed Tab 4 `);
            } else {
              return [
                createTextVNode(" Fixed Tab 4 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode(" Fixed Tab 1 ")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode(" Fixed Tab 2 ")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode(" Fixed Tab 3 ")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode(" Fixed Tab 4 ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsFixed.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTabs, mergeProps({
    "next-icon": "ri-arrow-right-line",
    "prev-icon": "ri-arrow-left-line",
    "show-arrows": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(10, (i) => {
          _push2(ssrRenderComponent(VTab, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Item ${ssrInterpolate(i)}`);
              } else {
                return [
                  createTextVNode(" Item " + toDisplayString(i), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(10, (i) => {
            return createVNode(VTab, { key: i }, {
              default: withCtx(() => [
                createTextVNode(" Item " + toDisplayString(i), 1)
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsCustomIcons.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VTabs, mergeProps({ "show-arrows": "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(10, (i) => {
          _push2(ssrRenderComponent(VTab, {
            key: i,
            value: i
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Item ${ssrInterpolate(i)}`);
              } else {
                return [
                  createTextVNode(" Item " + toDisplayString(i), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(10, (i) => {
            return createVNode(VTab, {
              key: i,
              value: i
            }, {
              default: withCtx(() => [
                createTextVNode(" Item " + toDisplayString(i), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsPagination.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VTabs, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Service`);
            } else {
              return [
                createTextVNode("Service")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Account`);
            } else {
              return [
                createTextVNode("Account")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Home")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Service")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Account")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VTabs, { "align-tabs": "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Service`);
            } else {
              return [
                createTextVNode("Service")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Account`);
            } else {
              return [
                createTextVNode("Account")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Home")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Service")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Account")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VTabs, { "align-tabs": "end" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Service`);
            } else {
              return [
                createTextVNode("Service")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VTab, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Account`);
            } else {
              return [
                createTextVNode("Account")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Home")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Service")
            ]),
            _: 1
          }),
          createVNode(VTab, null, {
            default: withCtx(() => [
              createTextVNode("Account")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsAlignment.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "DemoTabsVerticalPill",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("window-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex gap-6" }, _attrs))}><div>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        direction: "vertical",
        class: "v-tabs-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-user-line"
                  }, null, _parent3, _scopeId2));
                  _push3(` Option 1 `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-user-line"
                    }),
                    createTextVNode(" Option 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-lock-line"
                  }, null, _parent3, _scopeId2));
                  _push3(` Option 2 `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-lock-line"
                    }),
                    createTextVNode(" Option 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    start: "",
                    icon: "ri-rfid-line"
                  }, null, _parent3, _scopeId2));
                  _push3(` Option 3 `);
                } else {
                  return [
                    createVNode(VIcon, {
                      start: "",
                      icon: "ri-rfid-line"
                    }),
                    createTextVNode(" Option 3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-user-line"
                  }),
                  createTextVNode(" Option 1 ")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-lock-line"
                  }),
                  createTextVNode(" Option 2 ")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    start: "",
                    icon: "ri-rfid-line"
                  }),
                  createTextVNode(" Option 3 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: "window-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. </p><p class="mb-0"${_scopeId2}> Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. </p>`);
                } else {
                  return [
                    createVNode("p", null, " Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. "),
                    createVNode("p", { class: "mb-0" }, " Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "window-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-0"${_scopeId2}> Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-0" }, " Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "window-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-0"${_scopeId2}> Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-0" }, " Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, { value: "window-1" }, {
                default: withCtx(() => [
                  createVNode("p", null, " Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. "),
                  createVNode("p", { class: "mb-0" }, " Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ")
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "window-2" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-0" }, " Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ")
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "window-3" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-0" }, " Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsVerticalPill.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoTabsVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))}>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        direction: "vertical"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { "prepend-icon": "ri-user-line" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Option 1 `);
                } else {
                  return [
                    createTextVNode(" Option 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { "prepend-icon": "ri-lock-line" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Option 2 `);
                } else {
                  return [
                    createTextVNode(" Option 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { "prepend-icon": "ri-rfid-line" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Option 3 `);
                } else {
                  return [
                    createTextVNode(" Option 3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { "prepend-icon": "ri-user-line" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 1 ")
                ]),
                _: 1
              }),
              createVNode(VTab, { "prepend-icon": "ri-lock-line" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 2 ")
                ]),
                _: 1
              }),
              createVNode(VTab, { "prepend-icon": "ri-rfid-line" }, {
                default: withCtx(() => [
                  createTextVNode(" Option 3 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "ms-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. </p><p class="mb-0"${_scopeId2}> Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. </p>`);
                } else {
                  return [
                    createVNode("p", null, " Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. "),
                    createVNode("p", { class: "mb-0" }, " Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. </p><p class="mb-0"${_scopeId2}> Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>`);
                } else {
                  return [
                    createVNode("p", null, " Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. "),
                    createVNode("p", { class: "mb-0" }, " Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. </p><p class="mb-0"${_scopeId2}> Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. </p>`);
                } else {
                  return [
                    createVNode("p", null, " Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. "),
                    createVNode("p", { class: "mb-0" }, " Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, null, {
                default: withCtx(() => [
                  createVNode("p", null, " Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. "),
                  createVNode("p", { class: "mb-0" }, " Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ")
                ]),
                _: 1
              }),
              createVNode(VWindowItem, null, {
                default: withCtx(() => [
                  createVNode("p", null, " Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. "),
                  createVNode("p", { class: "mb-0" }, " Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ")
                ]),
                _: 1
              }),
              createVNode(VWindowItem, null, {
                default: withCtx(() => [
                  createVNode("p", null, " Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. "),
                  createVNode("p", { class: "mb-0" }, " Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsVertical.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const tabItemText = "Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.";
const _sfc_main$3 = {
  __name: "DemoTabsStacked",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        grow: "",
        stacked: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, { value: "tab-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-phone-line",
                    class: "mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Recent</span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-phone-line",
                      class: "mb-2"
                    }),
                    createVNode("span", null, "Recent")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "tab-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-heart-line",
                    class: "mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Favorites</span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-heart-line",
                      class: "mb-2"
                    }),
                    createVNode("span", null, "Favorites")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, { value: "tab-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "ri-account-box-line",
                    class: "mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Nearby</span>`);
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "ri-account-box-line",
                      class: "mb-2"
                    }),
                    createVNode("span", null, "Nearby")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, { value: "tab-1" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-phone-line",
                    class: "mb-2"
                  }),
                  createVNode("span", null, "Recent")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "tab-2" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-heart-line",
                    class: "mb-2"
                  }),
                  createVNode("span", null, "Favorites")
                ]),
                _: 1
              }),
              createVNode(VTab, { value: "tab-3" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "ri-account-box-line",
                    class: "mb-2"
                  }),
                  createVNode("span", null, "Nearby")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (i) => {
              _push2(ssrRenderComponent(VWindowItem, {
                key: i,
                value: `tab-${i}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tabItemText)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tabItemText))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                return createVNode(VWindowItem, {
                  key: i,
                  value: `tab-${i}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tabItemText))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsStacked.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const tabItemContent$1 = "Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";
const _sfc_main$2 = {
  __name: "DemoTabsBasicPill",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "v-tabs-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab One`);
                } else {
                  return [
                    createTextVNode("Tab One")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab Two`);
                } else {
                  return [
                    createTextVNode("Tab Two")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab Three`);
                } else {
                  return [
                    createTextVNode("Tab Three")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab One")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab Two")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab Three")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (item) => {
              _push2(ssrRenderComponent(VWindowItem, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tabItemContent$1)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tabItemContent$1))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                return createVNode(VWindowItem, { key: item }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tabItemContent$1))
                  ]),
                  _: 2
                }, 1024);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsBasicPill.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const tabItemContent = "Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.";
const _sfc_main$1 = {
  __name: "DemoTabsBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab One`);
                } else {
                  return [
                    createTextVNode("Tab One")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab Two`);
                } else {
                  return [
                    createTextVNode("Tab Two")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTab, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tab Three`);
                } else {
                  return [
                    createTextVNode("Tab Three")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab One")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab Two")
                ]),
                _: 1
              }),
              createVNode(VTab, null, {
                default: withCtx(() => [
                  createTextVNode("Tab Three")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(currentTab),
        "onUpdate:modelValue": ($event) => isRef(currentTab) ? currentTab.value = $event : null,
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (item) => {
              _push2(ssrRenderComponent(VWindowItem, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tabItemContent)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tabItemContent))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (item) => {
                return createVNode(VWindowItem, { key: item }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tabItemContent))
                  ]),
                  _: 2
                }, 1024);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/tabs/DemoTabsBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const alignment = { ts: `<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`, js: `<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
` };
const basic = { ts: `<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`, js: `<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
` };
const basicPill = { ts: `<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`, js: `<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
` };
const customIcons = { ts: `<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`, js: `<template>
  <VTabs
    next-icon="ri-arrow-right-line"
    prev-icon="ri-arrow-left-line"
    show-arrows
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
` };
const dynamic = { ts: `<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`, js: `<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
` };
const fixed = { ts: `<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`, js: `<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
` };
const grow = { ts: `<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`, js: `<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
` };
const pagination = { ts: `<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`, js: `<template>
  <VTabs show-arrows>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
` };
const programmaticNavigation = { ts: `<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`, js: `<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
` };
const stacked = { ts: `<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`, js: `<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="ri-phone-line"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="ri-heart-line"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="ri-account-box-line"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
` };
const vertical = { ts: `<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab prepend-icon="ri-user-line">
        Option 1
      </VTab>
      <VTab prepend-icon="ri-lock-line">
        Option 2
      </VTab>
      <VTab prepend-icon="ri-rfid-line">
        Option 3
      </VTab>
    </VTabs>
    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>
        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`, js: `<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex">
    <VTabs
      v-model="currentTab"
      direction="vertical"
    >
      <VTab prepend-icon="ri-user-line">
        Option 1
      </VTab>
      <VTab prepend-icon="ri-lock-line">
        Option 2
      </VTab>
      <VTab prepend-icon="ri-rfid-line">
        Option 3
      </VTab>
    </VTabs>
    <VWindow
      v-model="currentTab"
      class="ms-3"
    >
      <VWindowItem>
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>
        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
        <p class="mb-0">
          Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        </p>
      </VWindowItem>
      <VWindowItem>
        <p>
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
        <p class="mb-0">
          Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
` };
const verticalPill = { ts: `<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="ri-user-line"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-lock-line"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-rfid-line"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VWindow v-model="currentTab">
      <VWindowItem value="window-1">
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
        </p>
      </VWindowItem>

      <VWindowItem value="window-2">
        <p class="mb-0">
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
      </VWindowItem>

      <VWindowItem value="window-3">
        <p class="mb-0">
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
`, js: `<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="ri-user-line"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-lock-line"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="ri-rfid-line"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VWindow v-model="currentTab">
      <VWindowItem value="window-1">
        <p>
          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
        </p>

        <p class="mb-0">
          Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
        </p>
      </VWindowItem>

      <VWindowItem value="window-2">
        <p class="mb-0">
          Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
        </p>
      </VWindowItem>

      <VWindowItem value="window-3">
        <p class="mb-0">
          Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        </p>
      </VWindowItem>
    </VWindow>
  </div>
</template>
` };
const _sfc_main = {
  __name: "tabs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$d;
      const _component_DemoTabsBasic = _sfc_main$1;
      const _component_DemoTabsBasicPill = _sfc_main$2;
      const _component_DemoTabsStacked = _sfc_main$3;
      const _component_DemoTabsVertical = _sfc_main$4;
      const _component_DemoTabsVerticalPill = _sfc_main$5;
      const _component_DemoTabsAlignment = __unplugin_components_6;
      const _component_DemoTabsPagination = __unplugin_components_7;
      const _component_DemoTabsCustomIcons = __unplugin_components_8;
      const _component_DemoTabsFixed = __unplugin_components_9;
      const _component_DemoTabsGrow = _sfc_main$a;
      const _component_DemoTabsProgrammaticNavigation = _sfc_main$b;
      const _component_DemoTabsDynamic = _sfc_main$c;
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>v-tabs</code> component is used for hiding content behind a selectable item.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "v-tabs"),
                            createTextVNode(" component is used for hiding content behind a selectable item.")
                          ]),
                          createVNode(_component_DemoTabsBasic)
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
                          createVNode("code", null, "v-tabs"),
                          createTextVNode(" component is used for hiding content behind a selectable item.")
                        ]),
                        createVNode(_component_DemoTabsBasic)
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
                    title: "Basic Pill",
                    code: basicPill
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use our custom class <code${_scopeId3}>.v-tabs-pill</code> along with <code${_scopeId3}>v-tabs</code> component to style pill tabs.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsBasicPill, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use our custom class "),
                            createVNode("code", null, ".v-tabs-pill"),
                            createTextVNode(" along with "),
                            createVNode("code", null, "v-tabs"),
                            createTextVNode(" component to style pill tabs.")
                          ]),
                          createVNode(_component_DemoTabsBasicPill)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic Pill",
                      code: basicPill
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use our custom class "),
                          createVNode("code", null, ".v-tabs-pill"),
                          createTextVNode(" along with "),
                          createVNode("code", null, "v-tabs"),
                          createTextVNode(" component to style pill tabs.")
                        ]),
                        createVNode(_component_DemoTabsBasicPill)
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
                    title: "Stacked",
                    code: stacked
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Using <code${_scopeId3}>stacked</code> prop you can have buttons that use both icons and text.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsStacked, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Using "),
                            createVNode("code", null, "stacked"),
                            createTextVNode(" prop you can have buttons that use both icons and text.")
                          ]),
                          createVNode(_component_DemoTabsStacked)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Stacked",
                      code: stacked
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Using "),
                          createVNode("code", null, "stacked"),
                          createTextVNode(" prop you can have buttons that use both icons and text.")
                        ]),
                        createVNode(_component_DemoTabsStacked)
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
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>vertical</code> prop allows for <code${_scopeId3}>v-tab</code> components to stack vertically.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsVertical, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "vertical"),
                            createTextVNode(" prop allows for "),
                            createVNode("code", null, "v-tab"),
                            createTextVNode(" components to stack vertically.")
                          ]),
                          createVNode(_component_DemoTabsVertical)
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
                          createTextVNode(" prop allows for "),
                          createVNode("code", null, "v-tab"),
                          createTextVNode(" components to stack vertically.")
                        ]),
                        createVNode(_component_DemoTabsVertical)
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
                    title: "Vertical Pill",
                    code: verticalPill
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsVerticalPill, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs."),
                          createVNode(_component_DemoTabsVerticalPill)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Vertical Pill",
                      code: verticalPill
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs."),
                        createVNode(_component_DemoTabsVerticalPill)
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
                    title: "Alignment",
                    code: alignment
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>align-tabs</code> prop to change the tabs alignment.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsAlignment, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "align-tabs"),
                            createTextVNode(" prop to change the tabs alignment.")
                          ]),
                          createVNode(_component_DemoTabsAlignment)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Alignment",
                      code: alignment
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "align-tabs"),
                          createTextVNode(" prop to change the tabs alignment.")
                        ]),
                        createVNode(_component_DemoTabsAlignment)
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
                    title: "Pagination",
                    code: pagination
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>If the tab items overflow their container, pagination controls will appear on desktop.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsPagination, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, "If the tab items overflow their container, pagination controls will appear on desktop."),
                          createVNode(_component_DemoTabsPagination)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Pagination",
                      code: pagination
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, "If the tab items overflow their container, pagination controls will appear on desktop."),
                        createVNode(_component_DemoTabsPagination)
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
                    title: "Custom Icons",
                    code: customIcons
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}><code${_scopeId3}>prev-icon</code> and <code${_scopeId3}>next-icon</code> props can be used for applying custom pagination icons.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsCustomIcons, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createVNode("code", null, "prev-icon"),
                            createTextVNode(" and "),
                            createVNode("code", null, "next-icon"),
                            createTextVNode(" props can be used for applying custom pagination icons.")
                          ]),
                          createVNode(_component_DemoTabsCustomIcons)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Icons",
                      code: customIcons
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createVNode("code", null, "prev-icon"),
                          createTextVNode(" and "),
                          createVNode("code", null, "next-icon"),
                          createTextVNode(" props can be used for applying custom pagination icons.")
                        ]),
                        createVNode(_component_DemoTabsCustomIcons)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Fixed",
                    code: fixed
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>fixed-tabs</code> prop forces <code${_scopeId3}>v-tab</code> to take up all available space up to the maximum width (300px).</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsFixed, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "fixed-tabs"),
                            createTextVNode(" prop forces "),
                            createVNode("code", null, "v-tab"),
                            createTextVNode(" to take up all available space up to the maximum width (300px).")
                          ]),
                          createVNode(_component_DemoTabsFixed)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Fixed",
                      code: fixed
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "fixed-tabs"),
                          createTextVNode(" prop forces "),
                          createVNode("code", null, "v-tab"),
                          createTextVNode(" to take up all available space up to the maximum width (300px).")
                        ]),
                        createVNode(_component_DemoTabsFixed)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Grow",
                    code: grow
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>The <code${_scopeId3}>grow</code> prop will make the tab items take up all available space with no limit.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsGrow, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("The "),
                            createVNode("code", null, "grow"),
                            createTextVNode(" prop will make the tab items take up all available space with no limit.")
                          ]),
                          createVNode(_component_DemoTabsGrow)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Grow",
                      code: grow
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("The "),
                          createVNode("code", null, "grow"),
                          createTextVNode(" prop will make the tab items take up all available space with no limit.")
                        ]),
                        createVNode(_component_DemoTabsGrow)
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
                    title: "Programmatic Navigation",
                    code: programmaticNavigation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoTabsProgrammaticNavigation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoTabsProgrammaticNavigation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Programmatic Navigation",
                      code: programmaticNavigation
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoTabsProgrammaticNavigation)
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
                    title: "Dynamic",
                    code: dynamic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Tabs can be dynamically added and removed. This allows you to update to any number and the <code${_scopeId3}>v-tabs</code> component will react.</p>`);
                        _push4(ssrRenderComponent(_component_DemoTabsDynamic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Tabs can be dynamically added and removed. This allows you to update to any number and the "),
                            createVNode("code", null, "v-tabs"),
                            createTextVNode(" component will react.")
                          ]),
                          createVNode(_component_DemoTabsDynamic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Dynamic",
                      code: dynamic
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Tabs can be dynamically added and removed. This allows you to update to any number and the "),
                          createVNode("code", null, "v-tabs"),
                          createTextVNode(" component will react.")
                        ]),
                        createVNode(_component_DemoTabsDynamic)
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
                        createVNode("code", null, "v-tabs"),
                        createTextVNode(" component is used for hiding content behind a selectable item.")
                      ]),
                      createVNode(_component_DemoTabsBasic)
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
                    title: "Basic Pill",
                    code: basicPill
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use our custom class "),
                        createVNode("code", null, ".v-tabs-pill"),
                        createTextVNode(" along with "),
                        createVNode("code", null, "v-tabs"),
                        createTextVNode(" component to style pill tabs.")
                      ]),
                      createVNode(_component_DemoTabsBasicPill)
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
                    title: "Stacked",
                    code: stacked
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Using "),
                        createVNode("code", null, "stacked"),
                        createTextVNode(" prop you can have buttons that use both icons and text.")
                      ]),
                      createVNode(_component_DemoTabsStacked)
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
                        createTextVNode(" prop allows for "),
                        createVNode("code", null, "v-tab"),
                        createTextVNode(" components to stack vertically.")
                      ]),
                      createVNode(_component_DemoTabsVertical)
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
                    title: "Vertical Pill",
                    code: verticalPill
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs."),
                      createVNode(_component_DemoTabsVerticalPill)
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
                    title: "Alignment",
                    code: alignment
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "align-tabs"),
                        createTextVNode(" prop to change the tabs alignment.")
                      ]),
                      createVNode(_component_DemoTabsAlignment)
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
                    title: "Pagination",
                    code: pagination
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, "If the tab items overflow their container, pagination controls will appear on desktop."),
                      createVNode(_component_DemoTabsPagination)
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
                    title: "Custom Icons",
                    code: customIcons
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createVNode("code", null, "prev-icon"),
                        createTextVNode(" and "),
                        createVNode("code", null, "next-icon"),
                        createTextVNode(" props can be used for applying custom pagination icons.")
                      ]),
                      createVNode(_component_DemoTabsCustomIcons)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Fixed",
                    code: fixed
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "fixed-tabs"),
                        createTextVNode(" prop forces "),
                        createVNode("code", null, "v-tab"),
                        createTextVNode(" to take up all available space up to the maximum width (300px).")
                      ]),
                      createVNode(_component_DemoTabsFixed)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Grow",
                    code: grow
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("The "),
                        createVNode("code", null, "grow"),
                        createTextVNode(" prop will make the tab items take up all available space with no limit.")
                      ]),
                      createVNode(_component_DemoTabsGrow)
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
                    title: "Programmatic Navigation",
                    code: programmaticNavigation
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoTabsProgrammaticNavigation)
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
                    title: "Dynamic",
                    code: dynamic
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Tabs can be dynamically added and removed. This allows you to update to any number and the "),
                        createVNode("code", null, "v-tabs"),
                        createTextVNode(" component will react.")
                      ]),
                      createVNode(_component_DemoTabsDynamic)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
