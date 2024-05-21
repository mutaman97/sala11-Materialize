import { _ as _sfc_main$2 } from "./ConfirmDialog-I9elYGet.js";
import { _ as _sfc_main$1 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VBtn } from "../ssr.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
const _sfc_main = {
  __name: "UserUpgradePlanDialog",
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
    const selectedPlan = ref("basic");
    const plansList = [
      {
        desc: "Standard - $99/month",
        title: "Standard",
        value: "standard"
      },
      {
        desc: "Basic - $0/month",
        title: "Basic",
        value: "basic"
      },
      {
        desc: "Enterprise - $499/month",
        title: "Enterprise",
        value: "enterprice"
      },
      {
        desc: "Company - $999/month",
        title: "Company",
        value: "company"
      }
    ];
    const isConfirmDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$1;
      const _component_ConfirmDialog = _sfc_main$2;
      _push(ssrRenderComponent(VDialog, mergeProps({
        width: _ctx.$vuetify.display.smAndDown ? "auto" : 650,
        "model-value": props.isDialogVisible,
        "onUpdate:modelValue": (val) => _ctx.$emit("update:isDialogVisible", val)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}> Upgrade Plan </h4><div class="text-body-1"${_scopeId3}> Choose the best plan for user. </div></div><div class="d-flex justify-space-between flex-column flex-sm-row gap-4 px-0 mt-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(selectedPlan),
                          "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                          items: plansList,
                          density: "compact",
                          label: "Choose a plan",
                          placeholder: "Basic"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Upgrade `);
                            } else {
                              return [
                                createTextVNode(" Upgrade ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent4, _scopeId3));
                        _push4(`<p class="text-body-1 mb-1"${_scopeId3}> User current plan is standard plan </p><div class="d-flex justify-center justify-sm-space-between align-center flex-wrap gap-2"${_scopeId3}><div class="d-flex align-center me-3"${_scopeId3}><sup class="text-base text-primary"${_scopeId3}>$</sup><h1 class="text-h1 text-primary"${_scopeId3}> 99 </h1><sub class="text-body-2 mt-3"${_scopeId3}>/month</sub></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: ($event) => isConfirmDialogVisible.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel Subscription `);
                            } else {
                              return [
                                createTextVNode(" Cancel Subscription ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_ConfirmDialog, {
                          isDialogVisible: unref(isConfirmDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                          "cancel-title": "Cancelled",
                          "confirm-title": "Unsubscribed!",
                          "confirm-msg": "Your subscription cancelled successfully.",
                          "confirmation-question": "Are you sure to cancel your subscription?",
                          "cancel-msg": "Unsubscription Cancelled!!"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, " Upgrade Plan "),
                            createVNode("div", { class: "text-body-1" }, " Choose the best plan for user. ")
                          ]),
                          createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 px-0 mt-4" }, [
                            createVNode(VSelect, {
                              modelValue: unref(selectedPlan),
                              "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                              items: plansList,
                              density: "compact",
                              label: "Choose a plan",
                              placeholder: "Basic"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VBtn, null, {
                              default: withCtx(() => [
                                createTextVNode(" Upgrade ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VDivider, { class: "my-6" }),
                          createVNode("p", { class: "text-body-1 mb-1" }, " User current plan is standard plan "),
                          createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-2" }, [
                            createVNode("div", { class: "d-flex align-center me-3" }, [
                              createVNode("sup", { class: "text-base text-primary" }, "$"),
                              createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                              createVNode("sub", { class: "text-body-2 mt-3" }, "/month")
                            ]),
                            createVNode(VBtn, {
                              color: "error",
                              variant: "outlined",
                              onClick: ($event) => isConfirmDialogVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel Subscription ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(_component_ConfirmDialog, {
                            isDialogVisible: unref(isConfirmDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                            "cancel-title": "Cancelled",
                            "confirm-title": "Unsubscribed!",
                            "confirm-msg": "Your subscription cancelled successfully.",
                            "confirmation-question": "Are you sure to cancel your subscription?",
                            "cancel-msg": "Unsubscription Cancelled!!"
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
                      onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, " Upgrade Plan "),
                          createVNode("div", { class: "text-body-1" }, " Choose the best plan for user. ")
                        ]),
                        createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 px-0 mt-4" }, [
                          createVNode(VSelect, {
                            modelValue: unref(selectedPlan),
                            "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                            items: plansList,
                            density: "compact",
                            label: "Choose a plan",
                            placeholder: "Basic"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VBtn, null, {
                            default: withCtx(() => [
                              createTextVNode(" Upgrade ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VDivider, { class: "my-6" }),
                        createVNode("p", { class: "text-body-1 mb-1" }, " User current plan is standard plan "),
                        createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-2" }, [
                          createVNode("div", { class: "d-flex align-center me-3" }, [
                            createVNode("sup", { class: "text-base text-primary" }, "$"),
                            createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                            createVNode("sub", { class: "text-body-2 mt-3" }, "/month")
                          ]),
                          createVNode(VBtn, {
                            color: "error",
                            variant: "outlined",
                            onClick: ($event) => isConfirmDialogVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel Subscription ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(_component_ConfirmDialog, {
                          isDialogVisible: unref(isConfirmDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                          "cancel-title": "Cancelled",
                          "confirm-title": "Unsubscribed!",
                          "confirm-msg": "Your subscription cancelled successfully.",
                          "confirmation-question": "Are you sure to cancel your subscription?",
                          "cancel-msg": "Unsubscription Cancelled!!"
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              createVNode(VCard, { class: "pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => _ctx.$emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " Upgrade Plan "),
                        createVNode("div", { class: "text-body-1" }, " Choose the best plan for user. ")
                      ]),
                      createVNode("div", { class: "d-flex justify-space-between flex-column flex-sm-row gap-4 px-0 mt-4" }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedPlan),
                          "onUpdate:modelValue": ($event) => isRef(selectedPlan) ? selectedPlan.value = $event : null,
                          items: plansList,
                          density: "compact",
                          label: "Choose a plan",
                          placeholder: "Basic"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VBtn, null, {
                          default: withCtx(() => [
                            createTextVNode(" Upgrade ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VDivider, { class: "my-6" }),
                      createVNode("p", { class: "text-body-1 mb-1" }, " User current plan is standard plan "),
                      createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-2" }, [
                        createVNode("div", { class: "d-flex align-center me-3" }, [
                          createVNode("sup", { class: "text-base text-primary" }, "$"),
                          createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                          createVNode("sub", { class: "text-body-2 mt-3" }, "/month")
                        ]),
                        createVNode(VBtn, {
                          color: "error",
                          variant: "outlined",
                          onClick: ($event) => isConfirmDialogVisible.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel Subscription ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode(_component_ConfirmDialog, {
                        isDialogVisible: unref(isConfirmDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                        "cancel-title": "Cancelled",
                        "confirm-title": "Unsubscribed!",
                        "confirm-msg": "Your subscription cancelled successfully.",
                        "confirmation-question": "Are you sure to cancel your subscription?",
                        "cancel-msg": "Unsubscription Cancelled!!"
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/UserUpgradePlanDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chrome = "/build/assets/chrome-CW7_YWGV.png";
export {
  _sfc_main as _,
  chrome as c
};
