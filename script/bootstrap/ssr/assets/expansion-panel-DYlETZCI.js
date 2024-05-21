import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, ref, unref, isRef } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from "./VExpansionPanel-BASkbcYj.js";
import { _ as _sfc_main$8 } from "./AppCardCode-DkpMhnYF.js";
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
import "./index-D5WAZiYx.js";
import "./lazy-kVEey9ha.js";
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VExpansionPanels, mergeProps({
    variant: "accordion",
    class: "customized-panels"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push2(ssrRenderComponent(VExpansionPanel, {
            key: item,
            elevation: "0"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VExpansionPanelTitle, {
                  "collapse-icon": "ri-subtract-line",
                  "expand-icon": "ri-add-line"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Accordion ${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode(" Accordion " + toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VExpansionPanelText, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. `);
                    } else {
                      return [
                        createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VExpansionPanelTitle, {
                    "collapse-icon": "ri-subtract-line",
                    "expand-icon": "ri-add-line"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Accordion " + toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
            return createVNode(VExpansionPanel, {
              key: item,
              elevation: "0"
            }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, {
                  "collapse-icon": "ri-subtract-line",
                  "expand-icon": "ri-add-line"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Accordion " + toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelCustomizedAccordion.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  __name: "DemoExpansionPanelModel",
  __ssrInlineRender: true,
  setup(__props) {
    const openedPanels = ref([]);
    const items = ref(5);
    const all = () => {
      openedPanels.value = [...Array(items.value).keys()];
    };
    const none = () => {
      openedPanels.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
      _push(ssrRenderComponent(VBtn, {
        class: "me-4",
        onClick: all
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` all `);
          } else {
            return [
              createTextVNode(" all ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "error",
        onClick: none
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` none `);
          } else {
            return [
              createTextVNode(" none ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-3"><span class="font-weight-medium">Selected: </span>${ssrInterpolate(unref(openedPanels))}</div></div>`);
      _push(ssrRenderComponent(VExpansionPanels, {
        modelValue: unref(openedPanels),
        "onUpdate:modelValue": ($event) => isRef(openedPanels) ? openedPanels.value = $event : null,
        multiple: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items), (item) => {
              _push2(ssrRenderComponent(VExpansionPanel, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Header ${ssrInterpolate(item)}`);
                        } else {
                          return [
                            createTextVNode("Header " + toDisplayString(item), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll. `);
                        } else {
                          return [
                            createTextVNode(" I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll. ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VExpansionPanelTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Header " + toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VExpansionPanelText, null, {
                        default: withCtx(() => [
                          createTextVNode(" I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                return openBlock(), createBlock(VExpansionPanel, { key: item }, {
                  default: withCtx(() => [
                    createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Header " + toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createTextVNode(" I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelModel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoExpansionPanelCustomIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const panel = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VExpansionPanels, mergeProps({
        modelValue: unref(panel),
        "onUpdate:modelValue": ($event) => isRef(panel) ? panel.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-error-warning-line",
                          color: "error"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-error-warning-line",
                            color: "error"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Server Down `);
                      } else {
                        return [
                          createTextVNode(" Server Down ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan. `);
                      } else {
                        return [
                          createTextVNode(" Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                      actions: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-error-warning-line",
                          color: "error"
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Server Down ")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-check-line",
                          color: "success"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-check-line",
                            color: "success"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sales report generated `);
                      } else {
                        return [
                          createTextVNode(" Sales report generated ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde `);
                      } else {
                        return [
                          createTextVNode(" Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                      actions: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-check-line",
                          color: "success"
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Sales report generated ")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VExpansionPanel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-alert-line",
                          color: "warning"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "ri-alert-line",
                            color: "warning"
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` High Memory usage `);
                      } else {
                        return [
                          createTextVNode(" High Memory usage ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanelText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread. `);
                      } else {
                        return [
                          createTextVNode(" Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                      actions: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "ri-alert-line",
                          color: "warning"
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" High Memory usage ")
                      ]),
                      _: 1
                    }),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createTextVNode(" Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread. ")
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
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "ri-error-warning-line",
                        color: "error"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Server Down ")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "ri-check-line",
                        color: "success"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Sales report generated ")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VExpansionPanel, null, {
                default: withCtx(() => [
                  createVNode(VExpansionPanelTitle, { "disable-icon-rotate": "" }, {
                    actions: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "ri-alert-line",
                        color: "warning"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" High Memory usage ")
                    ]),
                    _: 1
                  }),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelCustomIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VExpansionPanels, mergeProps({ variant: "popout" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push2(ssrRenderComponent(VExpansionPanel, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Popout ${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode("Popout " + toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VExpansionPanelText, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy. `);
                    } else {
                      return [
                        createTextVNode(" Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Popout " + toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy. ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
            return createVNode(VExpansionPanel, { key: item }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Popout " + toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createTextVNode(" Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy. ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelPopout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VExpansionPanels, mergeProps({ variant: "inset" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push2(ssrRenderComponent(VExpansionPanel, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Inset ${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode("Inset " + toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VExpansionPanelText, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears. `);
                    } else {
                      return [
                        createTextVNode(" Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Inset " + toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears. ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
            return createVNode(VExpansionPanel, { key: item }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Inset " + toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createTextVNode(" Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears. ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelInset.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VExpansionPanels, mergeProps({ variant: "accordion" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push2(ssrRenderComponent(VExpansionPanel, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Accordion ${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode(" Accordion " + toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VExpansionPanelText, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. `);
                    } else {
                      return [
                        createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Accordion " + toDisplayString(item), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
            return createVNode(VExpansionPanel, { key: item }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(" Accordion " + toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createTextVNode(" Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie. ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelAccordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VExpansionPanels, mergeProps({ multiple: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push2(ssrRenderComponent(VExpansionPanel, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Item ${ssrInterpolate(i)}`);
                    } else {
                      return [
                        createTextVNode(" Item " + toDisplayString(i), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(VExpansionPanelText, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `);
                    } else {
                      return [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(VExpansionPanelTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Item " + toDisplayString(i), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VExpansionPanelText, null, {
                    default: withCtx(() => [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
            return createVNode(VExpansionPanel, { key: i }, {
              default: withCtx(() => [
                createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(" Item " + toDisplayString(i), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/expansion-panel/DemoExpansionPanelBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const accordion = { ts: `<template>
  <VExpansionPanels variant="accordion">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>
        Accordion {{ item }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<template>
  <VExpansionPanels variant="accordion">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>
        Accordion {{ item }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const basic = { ts: `<template>
  <VExpansionPanels multiple>
    <VExpansionPanel
      v-for="i in 4"
      :key="i"
    >
      <VExpansionPanelTitle>
        Item {{ i }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<template>
  <VExpansionPanels multiple>
    <VExpansionPanel
      v-for="i in 4"
      :key="i"
    >
      <VExpansionPanelTitle>
        Item {{ i }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const customIcon = { ts: `<script setup lang="ts">
const panel = ref(0)
<\/script>

<template>
  <VExpansionPanels v-model="panel">
    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Server Down
        <template #actions>
          <VIcon
            icon="ri-error-warning-line"
            color="error"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan.
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Sales report generated
        <template #actions>
          <VIcon
            icon="ri-check-line"
            color="success"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        High Memory usage
        <template #actions>
          <VIcon
            icon="ri-alert-line"
            color="warning"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<script setup>
const panel = ref(0)
<\/script>

<template>
  <VExpansionPanels v-model="panel">
    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Server Down
        <template #actions>
          <VIcon
            icon="ri-error-warning-line"
            color="error"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan.
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Sales report generated
        <template #actions>
          <VIcon
            icon="ri-check-line"
            color="success"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        High Memory usage
        <template #actions>
          <VIcon
            icon="ri-alert-line"
            color="warning"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const customizedAccordion = { ts: `<template>
  <VExpansionPanels
    variant="accordion"
    class="customized-panels"
  >
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
      elevation="0"
    >
      <VExpansionPanelTitle
        collapse-icon="ri-subtract-line"
        expand-icon="ri-add-line"
      >
        Accordion {{ item }}
      </VExpansionPanelTitle>

      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<template>
  <VExpansionPanels
    variant="accordion"
    class="customized-panels"
  >
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
      elevation="0"
    >
      <VExpansionPanelTitle
        collapse-icon="ri-subtract-line"
        expand-icon="ri-add-line"
      >
        Accordion {{ item }}
      </VExpansionPanelTitle>

      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const inset = { ts: `<template>
  <VExpansionPanels variant="inset">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Inset {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<template>
  <VExpansionPanels variant="inset">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Inset {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const model = { ts: `<script lang="ts" setup>
const openedPanels = ref<number[]>([])

const items = ref(5)

const all = () => {
  // [...Array(5).keys()] => [0, 1, 2, 3, 4]
  openedPanels.value = [...Array(items.value).keys()]
}

const none = () => {
  openedPanels.value = []
}
<\/script>

<template>
  <div>
    <div class="mb-4">
      <VBtn
        class="me-4"
        @click="all"
      >
        all
      </VBtn>

      <VBtn
        color="error"
        @click="none"
      >
        none
      </VBtn>

      <div class="mt-3">
        <span class="font-weight-medium">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <VExpansionPanels
      v-model="openedPanels"
      multiple
    >
      <VExpansionPanel
        v-for="item in items"
        :key="item"
      >
        <VExpansionPanelTitle>Header {{ item }}</VExpansionPanelTitle>
        <VExpansionPanelText>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
`, js: `<script setup>
const openedPanels = ref([])
const items = ref(5)

const all = () => {

  // [...Array(5).keys()] => [0, 1, 2, 3, 4]
  openedPanels.value = [...Array(items.value).keys()]
}

const none = () => {
  openedPanels.value = []
}
<\/script>

<template>
  <div>
    <div class="mb-4">
      <VBtn
        class="me-4"
        @click="all"
      >
        all
      </VBtn>

      <VBtn
        color="error"
        @click="none"
      >
        none
      </VBtn>

      <div class="mt-3">
        <span class="font-weight-medium">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <VExpansionPanels
      v-model="openedPanels"
      multiple
    >
      <VExpansionPanel
        v-for="item in items"
        :key="item"
      >
        <VExpansionPanelTitle>Header {{ item }}</VExpansionPanelTitle>
        <VExpansionPanelText>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
` };
const popout = { ts: `<template>
  <VExpansionPanels variant="popout">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Popout {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`, js: `<template>
  <VExpansionPanels variant="popout">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Popout {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
` };
const _sfc_main = {
  __name: "expansion-panel",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$8;
      const _component_DemoExpansionPanelBasic = __unplugin_components_1;
      const _component_DemoExpansionPanelAccordion = __unplugin_components_2;
      const _component_DemoExpansionPanelInset = __unplugin_components_3;
      const _component_DemoExpansionPanelPopout = __unplugin_components_4;
      const _component_DemoExpansionPanelCustomIcon = _sfc_main$5;
      const _component_DemoExpansionPanelModel = _sfc_main$6;
      const _component_DemoExpansionPanelCustomizedAccordion = __unplugin_components_7;
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
                    variant: "outlined",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Expansion panels in their simplest form display a list of expandable items. However, with the <code${_scopeId3}>multiple</code> prop, the expansion-panel can remain open until explicitly closed.</p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Expansion panels in their simplest form display a list of expandable items. However, with the "),
                            createVNode("code", null, "multiple"),
                            createTextVNode(" prop, the expansion-panel can remain open until explicitly closed.")
                          ]),
                          createVNode(_component_DemoExpansionPanelBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      variant: "outlined",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Expansion panels in their simplest form display a list of expandable items. However, with the "),
                          createVNode("code", null, "multiple"),
                          createTextVNode(" prop, the expansion-panel can remain open until explicitly closed.")
                        ]),
                        createVNode(_component_DemoExpansionPanelBasic)
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
                    title: "Accordion",
                    variant: "outlined",
                    code: accordion
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>accordion</code> variant option to create <strong${_scopeId3}>Accordion</strong> Panels. Accordion expansion-panel hasn&#39;t got margins around active panel.</p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelAccordion, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "accordion"),
                            createTextVNode(" variant option to create "),
                            createVNode("strong", null, "Accordion"),
                            createTextVNode(" Panels. Accordion expansion-panel hasn't got margins around active panel.")
                          ]),
                          createVNode(_component_DemoExpansionPanelAccordion)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Accordion",
                      variant: "outlined",
                      code: accordion
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "accordion"),
                          createTextVNode(" variant option to create "),
                          createVNode("strong", null, "Accordion"),
                          createTextVNode(" Panels. Accordion expansion-panel hasn't got margins around active panel.")
                        ]),
                        createVNode(_component_DemoExpansionPanelAccordion)
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
                    title: "Inset",
                    variant: "outlined",
                    code: inset
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>inset</code> variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.</p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelInset, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "inset"),
                            createTextVNode(" variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.")
                          ]),
                          createVNode(_component_DemoExpansionPanelInset)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Inset",
                      variant: "outlined",
                      code: inset
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "inset"),
                          createTextVNode(" variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.")
                        ]),
                        createVNode(_component_DemoExpansionPanelInset)
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
                    title: "Popout",
                    variant: "outlined",
                    code: popout
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}> Use <code${_scopeId3}>popout</code> variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated. </p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelPopout, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode(" Use "),
                            createVNode("code", null, "popout"),
                            createTextVNode(" variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated. ")
                          ]),
                          createVNode(_component_DemoExpansionPanelPopout)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Popout",
                      variant: "outlined",
                      code: popout
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode(" Use "),
                          createVNode("code", null, "popout"),
                          createTextVNode(" variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated. ")
                        ]),
                        createVNode(_component_DemoExpansionPanelPopout)
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
                    title: "Custom Icon",
                    variant: "outlined",
                    code: customIcon
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Expand action icon can be customized with <code${_scopeId3}>expand-icon</code> prop or the <code${_scopeId3}>actions</code> slot.</p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelCustomIcon, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Expand action icon can be customized with "),
                            createVNode("code", null, "expand-icon"),
                            createTextVNode(" prop or the "),
                            createVNode("code", null, "actions"),
                            createTextVNode(" slot.")
                          ]),
                          createVNode(_component_DemoExpansionPanelCustomIcon)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Custom Icon",
                      variant: "outlined",
                      code: customIcon
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Expand action icon can be customized with "),
                          createVNode("code", null, "expand-icon"),
                          createTextVNode(" prop or the "),
                          createVNode("code", null, "actions"),
                          createTextVNode(" slot.")
                        ]),
                        createVNode(_component_DemoExpansionPanelCustomIcon)
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
                    title: "Model",
                    variant: "outlined",
                    code: model
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Expansion panels can be controlled externally by modifying the <code${_scopeId3}>v-model</code>. If <code${_scopeId3}>multiple</code> prop is used then it is an array containing the indices of the open items.</p>`);
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelModel, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Expansion panels can be controlled externally by modifying the "),
                            createVNode("code", null, "v-model"),
                            createTextVNode(". If "),
                            createVNode("code", null, "multiple"),
                            createTextVNode(" prop is used then it is an array containing the indices of the open items.")
                          ]),
                          createVNode(_component_DemoExpansionPanelModel)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Model",
                      variant: "outlined",
                      code: model
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Expansion panels can be controlled externally by modifying the "),
                          createVNode("code", null, "v-model"),
                          createTextVNode(". If "),
                          createVNode("code", null, "multiple"),
                          createTextVNode(" prop is used then it is an array containing the indices of the open items.")
                        ]),
                        createVNode(_component_DemoExpansionPanelModel)
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
                    title: "Customized Accordion",
                    variant: "outlined",
                    code: customizedAccordion
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoExpansionPanelCustomizedAccordion, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoExpansionPanelCustomizedAccordion)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Customized Accordion",
                      variant: "outlined",
                      code: customizedAccordion
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoExpansionPanelCustomizedAccordion)
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
                    variant: "outlined",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Expansion panels in their simplest form display a list of expandable items. However, with the "),
                        createVNode("code", null, "multiple"),
                        createTextVNode(" prop, the expansion-panel can remain open until explicitly closed.")
                      ]),
                      createVNode(_component_DemoExpansionPanelBasic)
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
                    title: "Accordion",
                    variant: "outlined",
                    code: accordion
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "accordion"),
                        createTextVNode(" variant option to create "),
                        createVNode("strong", null, "Accordion"),
                        createTextVNode(" Panels. Accordion expansion-panel hasn't got margins around active panel.")
                      ]),
                      createVNode(_component_DemoExpansionPanelAccordion)
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
                    title: "Inset",
                    variant: "outlined",
                    code: inset
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "inset"),
                        createTextVNode(" variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.")
                      ]),
                      createVNode(_component_DemoExpansionPanelInset)
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
                    title: "Popout",
                    variant: "outlined",
                    code: popout
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode(" Use "),
                        createVNode("code", null, "popout"),
                        createTextVNode(" variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated. ")
                      ]),
                      createVNode(_component_DemoExpansionPanelPopout)
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
                    title: "Custom Icon",
                    variant: "outlined",
                    code: customIcon
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Expand action icon can be customized with "),
                        createVNode("code", null, "expand-icon"),
                        createTextVNode(" prop or the "),
                        createVNode("code", null, "actions"),
                        createTextVNode(" slot.")
                      ]),
                      createVNode(_component_DemoExpansionPanelCustomIcon)
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
                    title: "Model",
                    variant: "outlined",
                    code: model
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Expansion panels can be controlled externally by modifying the "),
                        createVNode("code", null, "v-model"),
                        createTextVNode(". If "),
                        createVNode("code", null, "multiple"),
                        createTextVNode(" prop is used then it is an array containing the indices of the open items.")
                      ]),
                      createVNode(_component_DemoExpansionPanelModel)
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
                    title: "Customized Accordion",
                    variant: "outlined",
                    code: customizedAccordion
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoExpansionPanelCustomizedAccordion)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/components/expansion-panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
