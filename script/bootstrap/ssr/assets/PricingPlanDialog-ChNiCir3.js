import { _ as __unplugin_components_0 } from "./AppPricing-DLCFY0_b.js";
import { _ as _sfc_main$1 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
const _sfc_main = {
  __name: "PricingPlanDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isDialogVisible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogVisibleUpdate = (val) => {
      emit("update:isDialogVisible", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      const _component_AppPricing = __unplugin_components_0;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "1200",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pricing-dialog pa-2 pa-sm-11" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppPricing, {
                          title: "Pricing Plan",
                          md: "4",
                          cols: "12"
                        }, {
                          heading: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4 pb-2"${_scopeId4}> Pricing Plans </h4>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4 pb-2" }, " Pricing Plans ")
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-body-1"${_scopeId4}> All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppPricing, {
                            title: "Pricing Plan",
                            md: "4",
                            cols: "12"
                          }, {
                            heading: withCtx(() => [
                              createVNode("h4", { class: "text-h4 pb-2" }, " Pricing Plans ")
                            ]),
                            subtitle: withCtx(() => [
                              createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      variant: "text",
                      size: "default",
                      onClick: ($event) => emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_AppPricing, {
                          title: "Pricing Plan",
                          md: "4",
                          cols: "12"
                        }, {
                          heading: withCtx(() => [
                            createVNode("h4", { class: "text-h4 pb-2" }, " Pricing Plans ")
                          ]),
                          subtitle: withCtx(() => [
                            createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "pricing-dialog pa-2 pa-sm-11" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_AppPricing, {
                        title: "Pricing Plan",
                        md: "4",
                        cols: "12"
                      }, {
                        heading: withCtx(() => [
                          createVNode("h4", { class: "text-h4 pb-2" }, " Pricing Plans ")
                        ]),
                        subtitle: withCtx(() => [
                          createVNode("div", { class: "text-body-1" }, " All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")
                        ]),
                        _: 1
                      })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/PricingPlanDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
