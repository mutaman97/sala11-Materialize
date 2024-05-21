import { ref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, unref, createCommentVNode, isRef, useSSRContext, resolveComponent, withDirectives, vShow, Fragment, renderList, mergeProps, withAsyncContext, computed, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$8, c as chrome } from "./chrome-CRVx__cr.js";
import { _ as _sfc_main$7 } from "./UserInfoEditDialog-Dqac65qF.js";
import { _ as _export_sfc, a as VIcon, V as VBtn, m as flagUsa } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem, b as VListItemTitle } from "./VList-Bay5Fixr.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./TwoFactorAuthDialog-DSsmJXL3.js";
import { _ as _sfc_main$9 } from "./AddEditAddressDialog-CR2aSRYs.js";
import { m as mastercardDark, a as mastercardLight, b as americanExpressDark, c as americanExpressLight } from "./mastercard-D11GxT9q.js";
import { v as visaDark, a as visaLight } from "./visa-light-manIB7UD.js";
import { u as useGenerateImageVariant } from "./useGenerateImageVariant-CZ9PNjKS.js";
import { V as VExpandTransition } from "./index-D5WAZiYx.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VAlert, a as VAlertTitle } from "./VAlert-CqjinC0F.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "./ConfirmDialog-I9elYGet.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./DialogCloseBtn-h97PlnE6.js";
import "./VSwitch-nG7fxOCQ.js";
import "./VInput-Bla8Vlgt.js";
import "./form-DJQTvsmB.js";
import "./VSelectionControl-DW0YMxqK.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
import "@vueuse/core";
import "cookie-es";
import "destr";
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
import "./ssrBoot-Co4_dNdy.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./CustomRadios-DrYzSNcj.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSpacer-DCJACtOB.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "ufo";
import "ofetch";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VPagination-BH_qhohv.js";
import "./filter-BC4fOy6c.js";
const rocketImg = "/build/assets/rocket-DlZYkmyt.png";
const _sfc_main$6 = {
  __name: "CustomerBioPanel",
  __ssrInlineRender: true,
  props: {
    customerData: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isUserInfoEditDialogVisible = ref(false);
    const isUpgradePlanDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserInfoEditDialog = _sfc_main$7;
      const _component_UserUpgradePlanDialog = _sfc_main$8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.customerData) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "text-center pt-12 pb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "",
                                  size: 120,
                                  color: !props.customerData.customer ? "primary" : void 0,
                                  variant: !props.customerData.avatar ? "tonal" : void 0
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (props.customerData.avatar) {
                                        _push6(ssrRenderComponent(VImg, {
                                          src: props.customerData.avatar
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<span class="text-5xl font-weight-medium" data-v-d68076fd${_scopeId5}> User Not Availaable </span>`);
                                      }
                                    } else {
                                      return [
                                        props.customerData.avatar ? (openBlock(), createBlock(VImg, {
                                          key: 0,
                                          src: props.customerData.avatar
                                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-5xl font-weight-medium"
                                        }, " User Not Availaable "))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h5 mt-4" data-v-d68076fd${_scopeId4}>${ssrInterpolate(props.customerData.customer)}</h5><p class="text-body-1 mb-0" data-v-d68076fd${_scopeId4}> Customer ID #${ssrInterpolate(props.customerData.customerId)}</p><div class="d-flex justify-space-evenly gap-x-12 mt-6" data-v-d68076fd${_scopeId4}><div class="d-flex align-center" data-v-d68076fd${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  class: "me-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-shopping-cart-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-column align-start" data-v-d68076fd${_scopeId4}><h5 class="text-h5" data-v-d68076fd${_scopeId4}>${ssrInterpolate(props.customerData.order)}</h5><span class="text-body-1" data-v-d68076fd${_scopeId4}>Orders</span></div></div><div class="d-flex align-center" data-v-d68076fd${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  class: "me-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "ri-money-dollar-circle-line" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "ri-money-dollar-circle-line" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-flex flex-column align-start" data-v-d68076fd${_scopeId4}><h5 class="text-h5" data-v-d68076fd${_scopeId4}>${ssrInterpolate(Math.round(props.customerData.totalSpent))}</h5><span class="text-body-1" data-v-d68076fd${_scopeId4}>Spent</span></div></div></div>`);
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: 120,
                                    color: !props.customerData.customer ? "primary" : void 0,
                                    variant: !props.customerData.avatar ? "tonal" : void 0
                                  }, {
                                    default: withCtx(() => [
                                      props.customerData.avatar ? (openBlock(), createBlock(VImg, {
                                        key: 0,
                                        src: props.customerData.avatar
                                      }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-5xl font-weight-medium"
                                      }, " User Not Availaable "))
                                    ]),
                                    _: 1
                                  }, 8, ["color", "variant"]),
                                  createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.customerData.customer), 1),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " Customer ID #" + toDisplayString(props.customerData.customerId), 1),
                                  createVNode("div", { class: "d-flex justify-space-evenly gap-x-12 mt-6" }, [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        color: "primary",
                                        rounded: "",
                                        class: "me-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "d-flex flex-column align-start" }, [
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(props.customerData.order), 1),
                                        createVNode("span", { class: "text-body-1" }, "Orders")
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        color: "primary",
                                        rounded: "",
                                        class: "me-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-money-dollar-circle-line" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "d-flex flex-column align-start" }, [
                                        createVNode("h5", { class: "text-h5" }, toDisplayString(Math.round(props.customerData.totalSpent)), 1),
                                        createVNode("span", { class: "text-body-1" }, "Spent")
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h5 class="text-h5" data-v-d68076fd${_scopeId4}> Details </h5>`);
                                _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VList, { class: "card-list mt-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium me-1" data-v-d68076fd${_scopeId7}>Username:</span><span class="text-body-1" data-v-d68076fd${_scopeId7}>${ssrInterpolate(props.customerData.customer)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium me-1" data-v-d68076fd${_scopeId7}>Billing Email:</span><span class="text-body-1" data-v-d68076fd${_scopeId7}>${ssrInterpolate(props.customerData.email)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium me-2" data-v-d68076fd${_scopeId7}>Status:</span>`);
                                                  _push8(ssrRenderComponent(VChip, {
                                                    color: "success",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(props.customerData.status)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(props.customerData.status), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                                    createVNode(VChip, {
                                                      color: "success",
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(props.customerData.status), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                                  createVNode(VChip, {
                                                    color: "success",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(props.customerData.status), 1)
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium me-1" data-v-d68076fd${_scopeId7}>Contact:</span><span class="text-body-1" data-v-d68076fd${_scopeId7}>${ssrInterpolate(props.customerData.contact)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium me-1" data-v-d68076fd${_scopeId7}>Country:</span><span class="text-body-1" data-v-d68076fd${_scopeId7}>${ssrInterpolate(props.customerData.country)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                                createVNode(VChip, {
                                                  color: "success",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(props.customerData.status), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
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
                                }, _parent5, _scopeId4));
                                _push5(`<div class="mt-6 text-center" data-v-d68076fd${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Edit Details `);
                                    } else {
                                      return [
                                        createTextVNode(" Edit Details ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("h5", { class: "text-h5" }, " Details "),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VList, { class: "card-list mt-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                              createVNode(VChip, {
                                                color: "success",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(props.customerData.status), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "mt-6 text-center" }, [
                                    createVNode(VBtn, {
                                      block: "",
                                      onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Edit Details ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: 120,
                                  color: !props.customerData.customer ? "primary" : void 0,
                                  variant: !props.customerData.avatar ? "tonal" : void 0
                                }, {
                                  default: withCtx(() => [
                                    props.customerData.avatar ? (openBlock(), createBlock(VImg, {
                                      key: 0,
                                      src: props.customerData.avatar
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "text-5xl font-weight-medium"
                                    }, " User Not Availaable "))
                                  ]),
                                  _: 1
                                }, 8, ["color", "variant"]),
                                createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.customerData.customer), 1),
                                createVNode("p", { class: "text-body-1 mb-0" }, " Customer ID #" + toDisplayString(props.customerData.customerId), 1),
                                createVNode("div", { class: "d-flex justify-space-evenly gap-x-12 mt-6" }, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      color: "primary",
                                      rounded: "",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex flex-column align-start" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(props.customerData.order), 1),
                                      createVNode("span", { class: "text-body-1" }, "Orders")
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      color: "primary",
                                      rounded: "",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-money-dollar-circle-line" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex flex-column align-start" }, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(Math.round(props.customerData.totalSpent)), 1),
                                      createVNode("span", { class: "text-body-1" }, "Spent")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-h5" }, " Details "),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VList, { class: "card-list mt-2" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                            createVNode(VChip, {
                                              color: "success",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(props.customerData.status), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-6 text-center" }, [
                                  createVNode(VBtn, {
                                    block: "",
                                    onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Edit Details ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.customerData ? (openBlock(), createBlock(VCard, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "",
                              size: 120,
                              color: !props.customerData.customer ? "primary" : void 0,
                              variant: !props.customerData.avatar ? "tonal" : void 0
                            }, {
                              default: withCtx(() => [
                                props.customerData.avatar ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: props.customerData.avatar
                                }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-5xl font-weight-medium"
                                }, " User Not Availaable "))
                              ]),
                              _: 1
                            }, 8, ["color", "variant"]),
                            createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.customerData.customer), 1),
                            createVNode("p", { class: "text-body-1 mb-0" }, " Customer ID #" + toDisplayString(props.customerData.customerId), 1),
                            createVNode("div", { class: "d-flex justify-space-evenly gap-x-12 mt-6" }, [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  class: "me-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-column align-start" }, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(props.customerData.order), 1),
                                  createVNode("span", { class: "text-body-1" }, "Orders")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  rounded: "",
                                  class: "me-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-money-dollar-circle-line" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-column align-start" }, [
                                  createVNode("h5", { class: "text-h5" }, toDisplayString(Math.round(props.customerData.totalSpent)), 1),
                                  createVNode("span", { class: "text-body-1" }, "Spent")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-h5" }, " Details "),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode(VList, { class: "card-list mt-2" }, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                        createVNode(VChip, {
                                          color: "success",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(props.customerData.status), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-6 text-center" }, [
                              createVNode(VBtn, {
                                block: "",
                                onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Details ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    flat: "",
                    class: "current-plan",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center" data-v-d68076fd${_scopeId4}><div data-v-d68076fd${_scopeId4}><h5 class="text-h5 text-white mb-4" data-v-d68076fd${_scopeId4}> Upgrade to premium </h5><p class="mb-6 text-wrap" data-v-d68076fd${_scopeId4}> Upgrade customer to premium membership to access pro features. </p></div><div data-v-d68076fd${_scopeId4}>`);
                              _push5(ssrRenderComponent(VImg, {
                                src: unref(rocketImg),
                                height: "108",
                                width: "108"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "#fff",
                                class: "text-primary",
                                block: "",
                                onClick: ($event) => isUpgradePlanDialogVisible.value = !unref(isUpgradePlanDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Upgrade to Premium `);
                                  } else {
                                    return [
                                      createTextVNode(" Upgrade to Premium ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5 text-white mb-4" }, " Upgrade to premium "),
                                    createVNode("p", { class: "mb-6 text-wrap" }, " Upgrade customer to premium membership to access pro features. ")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(VImg, {
                                      src: unref(rocketImg),
                                      height: "108",
                                      width: "108"
                                    }, null, 8, ["src"])
                                  ])
                                ]),
                                createVNode(VBtn, {
                                  color: "#fff",
                                  class: "text-primary",
                                  block: "",
                                  onClick: ($event) => isUpgradePlanDialogVisible.value = !unref(isUpgradePlanDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Upgrade to Premium ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("div", null, [
                                  createVNode("h5", { class: "text-h5 text-white mb-4" }, " Upgrade to premium "),
                                  createVNode("p", { class: "mb-6 text-wrap" }, " Upgrade customer to premium membership to access pro features. ")
                                ]),
                                createVNode("div", null, [
                                  createVNode(VImg, {
                                    src: unref(rocketImg),
                                    height: "108",
                                    width: "108"
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode(VBtn, {
                                color: "#fff",
                                class: "text-primary",
                                block: "",
                                onClick: ($event) => isUpgradePlanDialogVisible.value = !unref(isUpgradePlanDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Upgrade to Premium ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
                    createVNode(VCard, {
                      flat: "",
                      class: "current-plan",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5 text-white mb-4" }, " Upgrade to premium "),
                                createVNode("p", { class: "mb-6 text-wrap" }, " Upgrade customer to premium membership to access pro features. ")
                              ]),
                              createVNode("div", null, [
                                createVNode(VImg, {
                                  src: unref(rocketImg),
                                  height: "108",
                                  width: "108"
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode(VBtn, {
                              color: "#fff",
                              class: "text-primary",
                              block: "",
                              onClick: ($event) => isUpgradePlanDialogVisible.value = !unref(isUpgradePlanDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Upgrade to Premium ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  props.customerData ? (openBlock(), createBlock(VCard, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            rounded: "",
                            size: 120,
                            color: !props.customerData.customer ? "primary" : void 0,
                            variant: !props.customerData.avatar ? "tonal" : void 0
                          }, {
                            default: withCtx(() => [
                              props.customerData.avatar ? (openBlock(), createBlock(VImg, {
                                key: 0,
                                src: props.customerData.avatar
                              }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-5xl font-weight-medium"
                              }, " User Not Availaable "))
                            ]),
                            _: 1
                          }, 8, ["color", "variant"]),
                          createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.customerData.customer), 1),
                          createVNode("p", { class: "text-body-1 mb-0" }, " Customer ID #" + toDisplayString(props.customerData.customerId), 1),
                          createVNode("div", { class: "d-flex justify-space-evenly gap-x-12 mt-6" }, [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "primary",
                                rounded: "",
                                class: "me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-shopping-cart-line" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex flex-column align-start" }, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(props.customerData.order), 1),
                                createVNode("span", { class: "text-body-1" }, "Orders")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "primary",
                                rounded: "",
                                class: "me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "ri-money-dollar-circle-line" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex flex-column align-start" }, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(Math.round(props.customerData.totalSpent)), 1),
                                createVNode("span", { class: "text-body-1" }, "Spent")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5" }, " Details "),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VList, { class: "card-list mt-2" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium me-1" }, "Username:"),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.customer), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium me-1" }, "Billing Email:"),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.email), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium me-2" }, "Status:"),
                                      createVNode(VChip, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(props.customerData.status), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium me-1" }, "Contact:"),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.contact), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium me-1" }, "Country:"),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.customerData.country), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-6 text-center" }, [
                            createVNode(VBtn, {
                              block: "",
                              onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit Details ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    flat: "",
                    class: "current-plan",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5 text-white mb-4" }, " Upgrade to premium "),
                              createVNode("p", { class: "mb-6 text-wrap" }, " Upgrade customer to premium membership to access pro features. ")
                            ]),
                            createVNode("div", null, [
                              createVNode(VImg, {
                                src: unref(rocketImg),
                                height: "108",
                                width: "108"
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode(VBtn, {
                            color: "#fff",
                            class: "text-primary",
                            block: "",
                            onClick: ($event) => isUpgradePlanDialogVisible.value = !unref(isUpgradePlanDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Upgrade to Premium ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
      _push(ssrRenderComponent(_component_UserInfoEditDialog, {
        isDialogVisible: unref(isUserInfoEditDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UserUpgradePlanDialog, {
        isDialogVisible: unref(isUpgradePlanDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isUpgradePlanDialogVisible) ? isUpgradePlanDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerBioPanel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CustomerBioPanel = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d68076fd"]]);
const _sfc_main$5 = {
  __name: "CustomerTabAddressAndBilling",
  __ssrInlineRender: true,
  setup(__props) {
    const visa = useGenerateImageVariant(visaLight, visaDark);
    const masterCard = useGenerateImageVariant(mastercardLight, mastercardDark);
    const americanExpress = useGenerateImageVariant(americanExpressLight, americanExpressDark);
    const show = ref([
      true,
      false,
      false
    ]);
    const paymentShow = ref([
      true,
      false,
      false
    ]);
    const isEditAddressDialogVisible = ref(false);
    const isCardAddDialogVisible = ref(false);
    const isNewEditAddressDialogVisible = ref(false);
    const isNewCardAddDialogVisible = ref(false);
    const currentCardDetails = {
      number: "1234 5678 9012 3456",
      name: "John Doe",
      expiry: "12/2028",
      cvv: "123",
      isPrimary: false,
      type: ""
    };
    const editBillingData = {
      firstName: "Gertrude",
      lastName: "Jennings",
      selectedCountry: "USA",
      addressLine1: "100 Water Plant Avenue",
      addressLine2: "Building 1303 Wake Island",
      landmark: "Near Wake Island",
      contact: "+1(609) 933-44-22",
      country: "USA",
      state: "Queensland",
      zipCode: 403114
    };
    const addressData = [
      {
        title: "Home",
        subtitle: "23 Shatinon Mekalan",
        owner: "Violet Mendoza",
        defaultAddress: true,
        address: ` 23 Shatinon Mekalan,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`
      },
      {
        title: "Office",
        subtitle: "45 Rocker Terrace",
        owner: "Violet Mendoza",
        defaultAddress: false,
        address: ` 45 Rocker Terrace,
    <br>
    Latheronwheel,
    <br>
    KW5 8NW, London,
    <br>
    UK`
      },
      {
        title: "Family",
        subtitle: "512 Water Plant",
        owner: "Violet Mendoza",
        defaultAddress: false,
        address: ` 512 Water Plant,
    <br>
    Melbourne, VIC 3000,
    <br>
    LondonUK`
      }
    ];
    const paymentData = [
      {
        title: "Mastercard",
        subtitle: "Expries Apr 2028",
        isDefaultMethod: false,
        image: masterCard
      },
      {
        title: "American Express",
        subtitle: "Expries Apr 2028",
        isDefaultMethod: false,
        image: americanExpress
      },
      {
        title: "Visa",
        subtitle: "45 Roker Terrace",
        isDefaultMethod: true,
        image: visa
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_AddEditAddressDialog = _sfc_main$9;
      const _component_CardAddEditDialog = _sfc_main$a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCard, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6"${_scopeId2}><h5 class="text-h5"${_scopeId2}> Address Book </h5>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    size: "small",
                    onClick: ($event) => isNewEditAddressDialogVisible.value = !unref(isNewEditAddressDialogVisible)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add new Address `);
                      } else {
                        return [
                          createTextVNode(" Add new Address ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(addressData, (address, index) => {
                    _push3(`<div${_scopeId2}><div class="d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center"${_scopeId2}><div class="d-flex align-center gap-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      density: "comfortable",
                      onClick: ($event) => unref(show)[index] = !unref(show)[index]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: unref(show)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                            class: "flip-in-rtl text-high-emphasis"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: unref(show)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                              class: "flip-in-rtl text-high-emphasis"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><div class="d-flex gap-2 mb-1"${_scopeId2}><h6 class="text-h6"${_scopeId2}>${ssrInterpolate(address.title)}</h6>`);
                    if (address.defaultAddress) {
                      _push3(ssrRenderComponent(VChip, {
                        color: "success",
                        density: "comfortable"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Default Address `);
                          } else {
                            return [
                              createTextVNode(" Default Address ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><p class="text-body-1 mb-0"${_scopeId2}>${ssrInterpolate(address.subtitle)}</p></div></div><div class="ms-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-edit-box-line",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-edit-box-line",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-delete-bin-7-line",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-delete-bin-7-line",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-more-2-line",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-more-2-line",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(VExpandTransition, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle(unref(show)[index] ? null : { display: "none" })}"${_scopeId3}><div class="px-12 pb-3"${_scopeId3}><div class="mb-1 font-weight-medium text-high-emphasis"${_scopeId3}>${ssrInterpolate(address.owner)}</div><div${_scopeId3}>${address.address ?? ""}</div></div></div>`);
                        } else {
                          return [
                            withDirectives(createVNode("div", null, [
                              createVNode("div", { class: "px-12 pb-3" }, [
                                createVNode("div", { class: "mb-1 font-weight-medium text-high-emphasis" }, toDisplayString(address.owner), 1),
                                createVNode("div", {
                                  innerHTML: address.address
                                }, null, 8, ["innerHTML"])
                              ])
                            ], 512), [
                              [vShow, unref(show)[index]]
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (index !== addressData.length - 1) {
                      _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6" }, [
                      createVNode("h5", { class: "text-h5" }, " Address Book "),
                      createVNode(VBtn, {
                        variant: "outlined",
                        size: "small",
                        onClick: ($event) => isNewEditAddressDialogVisible.value = !unref(isNewEditAddressDialogVisible)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add new Address ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    (openBlock(), createBlock(Fragment, null, renderList(addressData, (address, index) => {
                      return createVNode("div", { key: index }, [
                        createVNode("div", { class: "d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center" }, [
                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                            createVNode(_component_IconBtn, {
                              density: "comfortable",
                              onClick: ($event) => unref(show)[index] = !unref(show)[index]
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(show)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                                  class: "flip-in-rtl text-high-emphasis"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex gap-2 mb-1" }, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(address.title), 1),
                                address.defaultAddress ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  color: "success",
                                  density: "comfortable"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Default Address ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(address.subtitle), 1)
                            ])
                          ]),
                          createVNode("div", { class: "ms-5" }, [
                            createVNode(_component_IconBtn, {
                              onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-edit-box-line",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-delete-bin-7-line",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-more-2-line",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("div", null, [
                              createVNode("div", { class: "px-12 pb-3" }, [
                                createVNode("div", { class: "mb-1 font-weight-medium text-high-emphasis" }, toDisplayString(address.owner), 1),
                                createVNode("div", {
                                  innerHTML: address.address
                                }, null, 8, ["innerHTML"])
                              ])
                            ], 512), [
                              [vShow, unref(show)[index]]
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        index !== addressData.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                      ]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6" }, [
                    createVNode("h5", { class: "text-h5" }, " Address Book "),
                    createVNode(VBtn, {
                      variant: "outlined",
                      size: "small",
                      onClick: ($event) => isNewEditAddressDialogVisible.value = !unref(isNewEditAddressDialogVisible)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add new Address ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(addressData, (address, index) => {
                    return createVNode("div", { key: index }, [
                      createVNode("div", { class: "d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center" }, [
                        createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                          createVNode(_component_IconBtn, {
                            density: "comfortable",
                            onClick: ($event) => unref(show)[index] = !unref(show)[index]
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: unref(show)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                                class: "flip-in-rtl text-high-emphasis"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "d-flex gap-2 mb-1" }, [
                              createVNode("h6", { class: "text-h6" }, toDisplayString(address.title), 1),
                              address.defaultAddress ? (openBlock(), createBlock(VChip, {
                                key: 0,
                                color: "success",
                                density: "comfortable"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Default Address ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(address.subtitle), 1)
                          ])
                        ]),
                        createVNode("div", { class: "ms-5" }, [
                          createVNode(_component_IconBtn, {
                            onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-edit-box-line",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-delete-bin-7-line",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-more-2-line",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", null, [
                            createVNode("div", { class: "px-12 pb-3" }, [
                              createVNode("div", { class: "mb-1 font-weight-medium text-high-emphasis" }, toDisplayString(address.owner), 1),
                              createVNode("div", {
                                innerHTML: address.address
                              }, null, 8, ["innerHTML"])
                            ])
                          ], 512), [
                            [vShow, unref(show)[index]]
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      index !== addressData.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                    ]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6"${_scopeId2}><h5 class="text-h5"${_scopeId2}> Payment Methods </h5>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "outlined",
                    size: "small",
                    onClick: ($event) => isNewCardAddDialogVisible.value = !unref(isNewCardAddDialogVisible)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` New Payment Methods `);
                      } else {
                        return [
                          createTextVNode(" New Payment Methods ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(paymentData, (payment, index) => {
                    _push3(`<div${_scopeId2}><div class="d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center"${_scopeId2}><div class="d-flex align-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      density: "comfortable",
                      onClick: ($event) => unref(paymentShow)[index] = !unref(paymentShow)[index]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: unref(paymentShow)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                            class: "flip-in-rtl text-high-emphasis"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: unref(paymentShow)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                              class: "flip-in-rtl text-high-emphasis"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VImg, {
                      src: payment.image.value,
                      height: "30",
                      width: "50",
                      class: "me-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><div class="d-flex flex-wrap mb-1 gap-4"${_scopeId2}><h6 class="text-h6"${_scopeId2}>${ssrInterpolate(payment.title)}</h6>`);
                    if (payment.isDefaultMethod) {
                      _push3(ssrRenderComponent(VChip, {
                        color: "success",
                        density: "comfortable"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Default Method `);
                          } else {
                            return [
                              createTextVNode(" Default Method ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><p class="text-body-1 mb-0"${_scopeId2}>${ssrInterpolate(payment.subtitle)}</p></div></div></div><div class="ms-11"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      onClick: ($event) => isCardAddDialogVisible.value = true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-edit-box-line",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-edit-box-line",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-delete-bin-7-line",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-delete-bin-7-line",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "ri-more-2-fill",
                            class: "flip-in-rtl"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "ri-more-2-fill",
                              class: "flip-in-rtl"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(VExpandTransition, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${ssrRenderStyle(unref(paymentShow)[index] ? null : { display: "none" })}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VRow, { class: "px-12 pb-3" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<tr${_scopeId6}><td class="text-sm pb-1" style="${ssrRenderStyle({ "inline-size": "100px" })}"${_scopeId6}> Name </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> Violet Mendoza </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Number </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> **** 4487 </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Expires </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> 08/2028 </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Type </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> Master Card </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Issuer </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> VICBANK </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> ID </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> DH73DJ8 </td></tr>`);
                                          } else {
                                            return [
                                              createVNode("tr", null, [
                                                createVNode("td", {
                                                  class: "text-sm pb-1",
                                                  style: { "inline-size": "100px" }
                                                }, " Name "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTable, null, {
                                          default: withCtx(() => [
                                            createVNode("tr", null, [
                                              createVNode("td", {
                                                class: "text-sm pb-1",
                                                style: { "inline-size": "100px" }
                                              }, " Name "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTable, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<tr${_scopeId6}><td class="text-sm pb-1" style="${ssrRenderStyle({ "inline-size": "100px" })}"${_scopeId6}> Billing </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> United Kingdom </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Number </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> +7634 983 637 </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Email </td><td class="text-sm text-high-emphasis font-weight-medium"${_scopeId6}> vafgot@vultukir.org </td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> Origin </td><td class="d-flex"${_scopeId6}><div class="text-body-2 font-weight-medium text-high-emphasis me-2"${_scopeId6}> United States </div><img${ssrRenderAttr("src", unref(flagUsa))} height="20" width="20"${_scopeId6}></td></tr><tr${_scopeId6}><td class="text-sm pb-1"${_scopeId6}> CVC </td><td class="d-flex"${_scopeId6}><div class="text-body-2 font-weight-medium text-high-emphasis me-2"${_scopeId6}> Passed </div>`);
                                            _push7(ssrRenderComponent(VAvatar, {
                                              variant: "tonal",
                                              color: "success",
                                              size: "20",
                                              inline: ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "success",
                                                    size: "12"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: "ri-check-line",
                                                      color: "success",
                                                      size: "12"
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</td></tr>`);
                                          } else {
                                            return [
                                              createVNode("tr", null, [
                                                createVNode("td", {
                                                  class: "text-sm pb-1",
                                                  style: { "inline-size": "100px" }
                                                }, " Billing "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                                createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                                createVNode("td", { class: "d-flex" }, [
                                                  createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                                  createVNode("img", {
                                                    src: unref(flagUsa),
                                                    height: "20",
                                                    width: "20"
                                                  }, null, 8, ["src"])
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                                createVNode("td", { class: "d-flex" }, [
                                                  createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                                  createVNode(VAvatar, {
                                                    variant: "tonal",
                                                    color: "success",
                                                    size: "20",
                                                    inline: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-check-line",
                                                        color: "success",
                                                        size: "12"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTable, null, {
                                          default: withCtx(() => [
                                            createVNode("tr", null, [
                                              createVNode("td", {
                                                class: "text-sm pb-1",
                                                style: { "inline-size": "100px" }
                                              }, " Billing "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                              createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                              createVNode("td", { class: "d-flex" }, [
                                                createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                                createVNode("img", {
                                                  src: unref(flagUsa),
                                                  height: "20",
                                                  width: "20"
                                                }, null, 8, ["src"])
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                              createVNode("td", { class: "d-flex" }, [
                                                createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                                createVNode(VAvatar, {
                                                  variant: "tonal",
                                                  color: "success",
                                                  size: "20",
                                                  inline: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-check-line",
                                                      color: "success",
                                                      size: "12"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Name "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Billing "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                              createVNode("img", {
                                                src: unref(flagUsa),
                                                height: "20",
                                                width: "20"
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                              createVNode(VAvatar, {
                                                variant: "tonal",
                                                color: "success",
                                                size: "20",
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "success",
                                                    size: "12"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            withDirectives(createVNode("div", null, [
                              createVNode(VRow, { class: "px-12 pb-3" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Name "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Billing "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                              createVNode("img", {
                                                src: unref(flagUsa),
                                                height: "20",
                                                width: "20"
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                              createVNode(VAvatar, {
                                                variant: "tonal",
                                                color: "success",
                                                size: "20",
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "success",
                                                    size: "12"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 512), [
                              [vShow, unref(paymentShow)[index]]
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (index !== addressData.length - 1) {
                      _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6" }, [
                      createVNode("h5", { class: "text-h5" }, " Payment Methods "),
                      createVNode(VBtn, {
                        variant: "outlined",
                        size: "small",
                        onClick: ($event) => isNewCardAddDialogVisible.value = !unref(isNewCardAddDialogVisible)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" New Payment Methods ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    (openBlock(), createBlock(Fragment, null, renderList(paymentData, (payment, index) => {
                      return createVNode("div", { key: index }, [
                        createVNode("div", { class: "d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center" }, [
                          createVNode("div", { class: "d-flex align-center gap-2" }, [
                            createVNode(_component_IconBtn, {
                              density: "comfortable",
                              onClick: ($event) => unref(paymentShow)[index] = !unref(paymentShow)[index]
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: unref(paymentShow)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                                  class: "flip-in-rtl text-high-emphasis"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VImg, {
                                src: payment.image.value,
                                height: "30",
                                width: "50",
                                class: "me-4"
                              }, null, 8, ["src"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex flex-wrap mb-1 gap-4" }, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(payment.title), 1),
                                  payment.isDefaultMethod ? (openBlock(), createBlock(VChip, {
                                    key: 0,
                                    color: "success",
                                    density: "comfortable"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Default Method ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(payment.subtitle), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "ms-11" }, [
                            createVNode(_component_IconBtn, {
                              onClick: ($event) => isCardAddDialogVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-edit-box-line",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-delete-bin-7-line",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_IconBtn, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-more-2-fill",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode(VExpandTransition, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("div", null, [
                              createVNode(VRow, { class: "px-12 pb-3" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Name "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, null, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", {
                                              class: "text-sm pb-1",
                                              style: { "inline-size": "100px" }
                                            }, " Billing "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                            createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                              createVNode("img", {
                                                src: unref(flagUsa),
                                                height: "20",
                                                width: "20"
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                            createVNode("td", { class: "d-flex" }, [
                                              createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                              createVNode(VAvatar, {
                                                variant: "tonal",
                                                color: "success",
                                                size: "20",
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-check-line",
                                                    color: "success",
                                                    size: "12"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 512), [
                              [vShow, unref(paymentShow)[index]]
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        index !== addressData.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                      ]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between pb-5 flex-wrap align-center gap-y-4 gap-x-6" }, [
                    createVNode("h5", { class: "text-h5" }, " Payment Methods "),
                    createVNode(VBtn, {
                      variant: "outlined",
                      size: "small",
                      onClick: ($event) => isNewCardAddDialogVisible.value = !unref(isNewCardAddDialogVisible)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" New Payment Methods ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(paymentData, (payment, index) => {
                    return createVNode("div", { key: index }, [
                      createVNode("div", { class: "d-flex justify-space-between my-3 gap-y-2 flex-wrap align-center" }, [
                        createVNode("div", { class: "d-flex align-center gap-2" }, [
                          createVNode(_component_IconBtn, {
                            density: "comfortable",
                            onClick: ($event) => unref(paymentShow)[index] = !unref(paymentShow)[index]
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: unref(paymentShow)[index] ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line",
                                class: "flip-in-rtl text-high-emphasis"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VImg, {
                              src: payment.image.value,
                              height: "30",
                              width: "50",
                              class: "me-4"
                            }, null, 8, ["src"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex flex-wrap mb-1 gap-4" }, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(payment.title), 1),
                                payment.isDefaultMethod ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  color: "success",
                                  density: "comfortable"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Default Method ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(payment.subtitle), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "ms-11" }, [
                          createVNode(_component_IconBtn, {
                            onClick: ($event) => isCardAddDialogVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-edit-box-line",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-delete-bin-7-line",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_IconBtn, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-more-2-fill",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(VExpandTransition, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("div", null, [
                            createVNode(VRow, { class: "px-12 pb-3" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, null, {
                                      default: withCtx(() => [
                                        createVNode("tr", null, [
                                          createVNode("td", {
                                            class: "text-sm pb-1",
                                            style: { "inline-size": "100px" }
                                          }, " Name "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Violet Mendoza ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " **** 4487 ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Expires "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " 08/2028 ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Type "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " Master Card ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Issuer "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " VICBANK ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " ID "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " DH73DJ8 ")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, null, {
                                      default: withCtx(() => [
                                        createVNode("tr", null, [
                                          createVNode("td", {
                                            class: "text-sm pb-1",
                                            style: { "inline-size": "100px" }
                                          }, " Billing "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " United Kingdom ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Number "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " +7634 983 637 ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Email "),
                                          createVNode("td", { class: "text-sm text-high-emphasis font-weight-medium" }, " vafgot@vultukir.org ")
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " Origin "),
                                          createVNode("td", { class: "d-flex" }, [
                                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " United States "),
                                            createVNode("img", {
                                              src: unref(flagUsa),
                                              height: "20",
                                              width: "20"
                                            }, null, 8, ["src"])
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-sm pb-1" }, " CVC "),
                                          createVNode("td", { class: "d-flex" }, [
                                            createVNode("div", { class: "text-body-2 font-weight-medium text-high-emphasis me-2" }, " Passed "),
                                            createVNode(VAvatar, {
                                              variant: "tonal",
                                              color: "success",
                                              size: "20",
                                              inline: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-check-line",
                                                  color: "success",
                                                  size: "12"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 512), [
                            [vShow, unref(paymentShow)[index]]
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      index !== addressData.length - 1 ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                    ]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AddEditAddressDialog, {
        isDialogVisible: unref(isEditAddressDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null,
        "billing-address": editBillingData
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddEditAddressDialog, {
        isDialogVisible: unref(isNewEditAddressDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isNewEditAddressDialogVisible) ? isNewEditAddressDialogVisible.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardAddEditDialog, {
        isDialogVisible: unref(isCardAddDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null,
        "card-details": currentCardDetails
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardAddEditDialog, {
        isDialogVisible: unref(isNewCardAddDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isNewCardAddDialogVisible) ? isNewCardAddDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerTabAddressAndBilling.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "CustomerTabNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = ref([
      {
        type: "New for you",
        email: true,
        browser: false,
        app: false
      },
      {
        type: "Account activity",
        email: false,
        browser: true,
        app: true
      },
      {
        type: "A new browser used to sign in",
        email: true,
        browser: true,
        app: true
      },
      {
        type: "A new device is linked",
        email: false,
        browser: true,
        app: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ title: "Notifications" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="text-h6"${_scopeId2}> You will receive notification for the below selected items. </h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "text-h6" }, " You will receive notification for the below selected items. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap rounded-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th scope="col"${_scopeId2}> TYPE </th><th scope="col"${_scopeId2}> EMAIL </th><th scope="col"${_scopeId2}> BROWSER </th><th scope="col"${_scopeId2}> APP </th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(notifications), (notification) => {
                    _push3(`<tr${_scopeId2}><td class="text-high-emphasis"${_scopeId2}>${ssrInterpolate(notification.type)}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: notification.email,
                      "onUpdate:modelValue": ($event) => notification.email = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: notification.browser,
                      "onUpdate:modelValue": ($event) => notification.browser = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: notification.app,
                      "onUpdate:modelValue": ($event) => notification.app = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, " TYPE "),
                        createVNode("th", { scope: "col" }, " EMAIL "),
                        createVNode("th", { scope: "col" }, " BROWSER "),
                        createVNode("th", { scope: "col" }, " APP ")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                        return openBlock(), createBlock("tr", {
                          key: notification.type
                        }, [
                          createVNode("td", { class: "text-high-emphasis" }, toDisplayString(notification.type), 1),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: notification.email,
                              "onUpdate:modelValue": ($event) => notification.email = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: notification.browser,
                              "onUpdate:modelValue": ($event) => notification.browser = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: notification.app,
                              "onUpdate:modelValue": ($event) => notification.app = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "d-flex flex-wrap gap-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Save changes`);
                      } else {
                        return [
                          createTextVNode("Save changes")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "secondary",
                    variant: "outlined"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Discard `);
                      } else {
                        return [
                          createTextVNode(" Discard ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, null, {
                      default: withCtx(() => [
                        createTextVNode("Save changes")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "secondary",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Discard ")
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
              createVNode(VDivider),
              createVNode(VCardText, { class: "pa-4" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, " You will receive notification for the below selected items. ")
                ]),
                _: 1
              }),
              createVNode(VTable, { class: "text-no-wrap rounded-0" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, " TYPE "),
                      createVNode("th", { scope: "col" }, " EMAIL "),
                      createVNode("th", { scope: "col" }, " BROWSER "),
                      createVNode("th", { scope: "col" }, " APP ")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                      return openBlock(), createBlock("tr", {
                        key: notification.type
                      }, [
                        createVNode("td", { class: "text-high-emphasis" }, toDisplayString(notification.type), 1),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: notification.email,
                            "onUpdate:modelValue": ($event) => notification.email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: notification.browser,
                            "onUpdate:modelValue": ($event) => notification.browser = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: notification.app,
                            "onUpdate:modelValue": ($event) => notification.app = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, { class: "d-flex flex-wrap gap-4" }, {
                default: withCtx(() => [
                  createVNode(VBtn, null, {
                    default: withCtx(() => [
                      createTextVNode("Save changes")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "secondary",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Discard ")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerTabNotification.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CustomerOrderTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const itemsPerPage = ref(10);
    const page = ref(1);
    const sortBy = ref();
    const orderBy = ref();
    const updateOptions = (options) => {
      var _a, _b;
      page.value = options.page;
      sortBy.value = (_a = options.sortBy[0]) == null ? void 0 : _a.key;
      orderBy.value = (_b = options.sortBy[0]) == null ? void 0 : _b.order;
    };
    const headers = [
      {
        title: "Order",
        key: "order"
      },
      {
        title: "Date",
        key: "date"
      },
      {
        title: "Status",
        key: "status"
      },
      {
        title: "Spent",
        key: "spent"
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false
      }
    ];
    const resolveStatus = (status) => {
      if (status === "Delivered")
        return { color: "success" };
      if (status === "Out for Delivery")
        return { color: "primary" };
      if (status === "Ready to Pickup")
        return { color: "info" };
      if (status === "Dispatched")
        return { color: "warning" };
    };
    const {
      data: ordersData,
      execute: fetchOrders
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/ecommerce/orders", {
      query: {
        q: searchQuery,
        page,
        itemsPerPage,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const orders = computed(() => {
      var _a;
      return ((_a = ordersData.value) == null ? void 0 : _a.orders) || [];
    });
    const totalOrder = computed(() => {
      var _a;
      return ((_a = ordersData.value) == null ? void 0 : _a.total) || 0;
    });
    const deleteOrder = async (id) => {
      await $api(`/apps/ecommerce/orders/${id}`, { method: "DELETE" });
      fetchOrders();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4"${_scopeId2}><div class="text-h5"${_scopeId2}> Orders placed </div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(searchQuery),
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    placeholder: "Search Order",
                    style: { "max-inline-size": "250px", "min-inline-size": "200px" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4" }, [
                      createVNode("div", { class: "text-h5" }, " Orders placed "),
                      createVNode(VTextField, {
                        modelValue: unref(searchQuery),
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        placeholder: "Search Order",
                        style: { "max-inline-size": "250px", "min-inline-size": "200px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTableServer, {
              "items-per-page": unref(itemsPerPage),
              "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
              page: unref(page),
              "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
              headers,
              items: unref(orders),
              "item-value": "id",
              "items-length": unref(totalOrder),
              class: "text-no-wrap rounded-0",
              "onUpdate:options": updateOptions
            }, {
              "item.order": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouterLink, {
                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` #${ssrInterpolate(item.order)}`);
                      } else {
                        return [
                          createTextVNode(" #" + toDisplayString(item.order), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouterLink, {
                      to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" #" + toDisplayString(item.order), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ];
                }
              }),
              "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(new Date(item.date).toDateString())}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(new Date(item.date).toDateString()), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    size: "small",
                    color: (_a = resolveStatus(item.status)) == null ? void 0 : _a.color
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      size: "small",
                      color: (_b = resolveStatus(item.status)) == null ? void 0 : _b.color
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.spent": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` $${ssrInterpolate(item.spent)}`);
                } else {
                  return [
                    createTextVNode(" $" + toDisplayString(item.spent), 1)
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-fill" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, { value: "view" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RouterLink, {
                                            to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                            class: "text-high-emphasis"
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` View `);
                                              } else {
                                                return [
                                                  createTextVNode(" View ")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RouterLink, {
                                              to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                              class: "text-high-emphasis"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" View ")
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItem, {
                                      value: "delete",
                                      onClick: ($event) => deleteOrder(item.id)
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Delete `);
                                        } else {
                                          return [
                                            createTextVNode(" Delete ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, { value: "view" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_RouterLink, {
                                            to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                            class: "text-high-emphasis"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" View ")
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItem, {
                                        value: "delete",
                                        onClick: ($event) => deleteOrder(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Delete ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, { value: "view" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_RouterLink, {
                                          to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                          class: "text-high-emphasis"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" View ")
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItem, {
                                      value: "delete",
                                      onClick: ($event) => deleteOrder(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Delete ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "ri-more-2-fill" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, { value: "view" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_RouterLink, {
                                        to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                        class: "text-high-emphasis"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" View ")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItem, {
                                    value: "delete",
                                    onClick: ($event) => deleteOrder(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Delete ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-more-2-fill" }),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, { value: "view" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_RouterLink, {
                                      to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                      class: "text-high-emphasis"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" View ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItem, {
                                  value: "delete",
                                  onClick: ($event) => deleteOrder(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              bottom: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1"${_scopeId2}><div class="d-flex align-center gap-x-2 text-medium-emphasis text-base"${_scopeId2}> Rows Per Page: `);
                  _push3(ssrRenderComponent(VSelect, {
                    modelValue: unref(itemsPerPage),
                    "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                    class: "per-page-select",
                    variant: "plain",
                    items: [10, 20, 25, 50, 100]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl",
                    icon: "ri-arrow-left-s-line",
                    variant: "text",
                    density: "comfortable",
                    color: "high-emphasis",
                    disabled: unref(page) <= 1,
                    onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "flip-in-rtl",
                    icon: "ri-arrow-right-s-line",
                    density: "comfortable",
                    variant: "text",
                    color: "high-emphasis",
                    disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                    onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(VDivider),
                    createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                      createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                        createTextVNode(" Rows Per Page: "),
                        createVNode(VSelect, {
                          modelValue: unref(itemsPerPage),
                          "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                          class: "per-page-select",
                          variant: "plain",
                          items: [10, 20, 25, 50, 100]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder))), 1),
                      createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                        createVNode(VBtn, {
                          class: "flip-in-rtl",
                          icon: "ri-arrow-left-s-line",
                          variant: "text",
                          density: "comfortable",
                          color: "high-emphasis",
                          disabled: unref(page) <= 1,
                          onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                        }, null, 8, ["disabled", "onClick"]),
                        createVNode(VBtn, {
                          class: "flip-in-rtl",
                          icon: "ri-arrow-right-s-line",
                          density: "comfortable",
                          variant: "text",
                          color: "high-emphasis",
                          disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
                        }, null, 8, ["disabled", "onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4" }, [
                    createVNode("div", { class: "text-h5" }, " Orders placed "),
                    createVNode(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Order",
                      style: { "max-inline-size": "250px", "min-inline-size": "200px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                headers,
                items: unref(orders),
                "item-value": "id",
                "items-length": unref(totalOrder),
                class: "text-no-wrap rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "item.order": withCtx(({ item }) => [
                  createVNode(_component_RouterLink, {
                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" #" + toDisplayString(item.order), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                "item.date": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(new Date(item.date).toDateString()), 1)
                ]),
                "item.status": withCtx(({ item }) => {
                  var _a;
                  return [
                    createVNode(VChip, {
                      size: "small",
                      color: (_a = resolveStatus(item.status)) == null ? void 0 : _a.color
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }),
                "item.spent": withCtx(({ item }) => [
                  createTextVNode(" $" + toDisplayString(item.spent), 1)
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_IconBtn, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "ri-more-2-fill" }),
                      createVNode(VMenu, { activator: "parent" }, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, { value: "view" }, {
                                default: withCtx(() => [
                                  createVNode(_component_RouterLink, {
                                    to: { name: "apps-ecommerce-order-details-id", params: { id: item.order } },
                                    class: "text-high-emphasis"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItem, {
                                value: "delete",
                                onClick: ($event) => deleteOrder(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                bottom: withCtx(() => [
                  createVNode(VDivider),
                  createVNode("div", { class: "d-flex justify-end flex-wrap gap-x-6 px-2 py-1" }, [
                    createVNode("div", { class: "d-flex align-center gap-x-2 text-medium-emphasis text-base" }, [
                      createTextVNode(" Rows Per Page: "),
                      createVNode(VSelect, {
                        modelValue: unref(itemsPerPage),
                        "onUpdate:modelValue": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                        class: "per-page-select",
                        variant: "plain",
                        items: [10, 20, 25, 50, 100]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalOrder))), 1),
                    createVNode("div", { class: "d-flex gap-x-2 align-center me-2" }, [
                      createVNode(VBtn, {
                        class: "flip-in-rtl",
                        icon: "ri-arrow-left-s-line",
                        variant: "text",
                        density: "comfortable",
                        color: "high-emphasis",
                        disabled: unref(page) <= 1,
                        onClick: ($event) => unref(page) <= 1 ? page.value = 1 : page.value--
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(VBtn, {
                        class: "flip-in-rtl",
                        icon: "ri-arrow-right-s-line",
                        density: "comfortable",
                        variant: "text",
                        color: "high-emphasis",
                        disabled: unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)),
                        onClick: ($event) => unref(page) >= Math.ceil(unref(totalOrder) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalOrder) / unref(itemsPerPage)) : page.value++
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items", "items-length"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerOrderTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CustomerTabOverview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ class: "match-height" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                color: "primary",
                                icon: "ri-money-dollar-circle-line",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Account Balance </h5><div class="text-base"${_scopeId4}><p class="mb-0"${_scopeId4}><span class="text-primary text-h5 me-1 d-inline-block"${_scopeId4}>$7480</span> Credit Left </p><p class="mb-0 text-base"${_scopeId4}> Account balance for next purchase </p></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "primary",
                                  icon: "ri-money-dollar-circle-line",
                                  rounded: ""
                                }),
                                createVNode("h5", { class: "text-h5" }, " Account Balance "),
                                createVNode("div", { class: "text-base" }, [
                                  createVNode("p", { class: "mb-0" }, [
                                    createVNode("span", { class: "text-primary text-h5 me-1 d-inline-block" }, "$7480"),
                                    createTextVNode(" Credit Left ")
                                  ]),
                                  createVNode("p", { class: "mb-0 text-base" }, " Account balance for next purchase ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "primary",
                                icon: "ri-money-dollar-circle-line",
                                rounded: ""
                              }),
                              createVNode("h5", { class: "text-h5" }, " Account Balance "),
                              createVNode("div", { class: "text-base" }, [
                                createVNode("p", { class: "mb-0" }, [
                                  createVNode("span", { class: "text-primary text-h5 me-1 d-inline-block" }, "$7480"),
                                  createTextVNode(" Credit Left ")
                                ]),
                                createVNode("p", { class: "mb-0 text-base" }, " Account balance for next purchase ")
                              ])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color: "primary",
                              icon: "ri-money-dollar-circle-line",
                              rounded: ""
                            }),
                            createVNode("h5", { class: "text-h5" }, " Account Balance "),
                            createVNode("div", { class: "text-base" }, [
                              createVNode("p", { class: "mb-0" }, [
                                createVNode("span", { class: "text-primary text-h5 me-1 d-inline-block" }, "$7480"),
                                createTextVNode(" Credit Left ")
                              ]),
                              createVNode("p", { class: "mb-0 text-base" }, " Account balance for next purchase ")
                            ])
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                color: "success",
                                icon: "ri-gift-line",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Loyalty Program </h5><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VChip, {
                                color: "success",
                                size: "small",
                                class: "mb-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Platinum Member `);
                                  } else {
                                    return [
                                      createTextVNode(" Platinum Member ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<p class="mb-0 text-base"${_scopeId4}> 3000 points to next tier </p></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "success",
                                  icon: "ri-gift-line",
                                  rounded: ""
                                }),
                                createVNode("h5", { class: "text-h5" }, " Loyalty Program "),
                                createVNode("div", null, [
                                  createVNode(VChip, {
                                    color: "success",
                                    size: "small",
                                    class: "mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Platinum Member ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("p", { class: "mb-0 text-base" }, " 3000 points to next tier ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "success",
                                icon: "ri-gift-line",
                                rounded: ""
                              }),
                              createVNode("h5", { class: "text-h5" }, " Loyalty Program "),
                              createVNode("div", null, [
                                createVNode(VChip, {
                                  color: "success",
                                  size: "small",
                                  class: "mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Platinum Member ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "mb-0 text-base" }, " 3000 points to next tier ")
                              ])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color: "success",
                              icon: "ri-gift-line",
                              rounded: ""
                            }),
                            createVNode("h5", { class: "text-h5" }, " Loyalty Program "),
                            createVNode("div", null, [
                              createVNode(VChip, {
                                color: "success",
                                size: "small",
                                class: "mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Platinum Member ")
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "mb-0 text-base" }, " 3000 points to next tier ")
                            ])
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                color: "warning",
                                icon: "ri-star-smile-line",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Wishlist </h5><div${_scopeId4}><p class="mb-0"${_scopeId4}><span class="text-warning text-h5 d-inline-block me-1"${_scopeId4}>15</span> items in wishlist </p><p class="mb-0 text-base"${_scopeId4}> Receive notification when items go on sale </p></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "warning",
                                  icon: "ri-star-smile-line",
                                  rounded: ""
                                }),
                                createVNode("h5", { class: "text-h5" }, " Wishlist "),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-0" }, [
                                    createVNode("span", { class: "text-warning text-h5 d-inline-block me-1" }, "15"),
                                    createTextVNode(" items in wishlist ")
                                  ]),
                                  createVNode("p", { class: "mb-0 text-base" }, " Receive notification when items go on sale ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "warning",
                                icon: "ri-star-smile-line",
                                rounded: ""
                              }),
                              createVNode("h5", { class: "text-h5" }, " Wishlist "),
                              createVNode("div", null, [
                                createVNode("p", { class: "mb-0" }, [
                                  createVNode("span", { class: "text-warning text-h5 d-inline-block me-1" }, "15"),
                                  createTextVNode(" items in wishlist ")
                                ]),
                                createVNode("p", { class: "mb-0 text-base" }, " Receive notification when items go on sale ")
                              ])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color: "warning",
                              icon: "ri-star-smile-line",
                              rounded: ""
                            }),
                            createVNode("h5", { class: "text-h5" }, " Wishlist "),
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0" }, [
                                createVNode("span", { class: "text-warning text-h5 d-inline-block me-1" }, "15"),
                                createTextVNode(" items in wishlist ")
                              ]),
                              createVNode("p", { class: "mb-0 text-base" }, " Receive notification when items go on sale ")
                            ])
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                variant: "tonal",
                                color: "info",
                                icon: "ri-vip-crown-line",
                                rounded: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Coupons </h5><div${_scopeId4}><p class="mb-0"${_scopeId4}><span class="text-info text-h5 d-inline-block me-2"${_scopeId4}>21</span> Coupons you win </p><p class="mb-0 text-base"${_scopeId4}> Use coupon on next purchase </p></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  variant: "tonal",
                                  color: "info",
                                  icon: "ri-vip-crown-line",
                                  rounded: ""
                                }),
                                createVNode("h5", { class: "text-h5" }, " Coupons "),
                                createVNode("div", null, [
                                  createVNode("p", { class: "mb-0" }, [
                                    createVNode("span", { class: "text-info text-h5 d-inline-block me-2" }, "21"),
                                    createTextVNode(" Coupons you win ")
                                  ]),
                                  createVNode("p", { class: "mb-0 text-base" }, " Use coupon on next purchase ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                variant: "tonal",
                                color: "info",
                                icon: "ri-vip-crown-line",
                                rounded: ""
                              }),
                              createVNode("h5", { class: "text-h5" }, " Coupons "),
                              createVNode("div", null, [
                                createVNode("p", { class: "mb-0" }, [
                                  createVNode("span", { class: "text-info text-h5 d-inline-block me-2" }, "21"),
                                  createTextVNode(" Coupons you win ")
                                ]),
                                createVNode("p", { class: "mb-0 text-base" }, " Use coupon on next purchase ")
                              ])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              variant: "tonal",
                              color: "info",
                              icon: "ri-vip-crown-line",
                              rounded: ""
                            }),
                            createVNode("h5", { class: "text-h5" }, " Coupons "),
                            createVNode("div", null, [
                              createVNode("p", { class: "mb-0" }, [
                                createVNode("span", { class: "text-info text-h5 d-inline-block me-2" }, "21"),
                                createTextVNode(" Coupons you win ")
                              ]),
                              createVNode("p", { class: "mb-0 text-base" }, " Use coupon on next purchase ")
                            ])
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
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            variant: "tonal",
                            color: "primary",
                            icon: "ri-money-dollar-circle-line",
                            rounded: ""
                          }),
                          createVNode("h5", { class: "text-h5" }, " Account Balance "),
                          createVNode("div", { class: "text-base" }, [
                            createVNode("p", { class: "mb-0" }, [
                              createVNode("span", { class: "text-primary text-h5 me-1 d-inline-block" }, "$7480"),
                              createTextVNode(" Credit Left ")
                            ]),
                            createVNode("p", { class: "mb-0 text-base" }, " Account balance for next purchase ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            variant: "tonal",
                            color: "success",
                            icon: "ri-gift-line",
                            rounded: ""
                          }),
                          createVNode("h5", { class: "text-h5" }, " Loyalty Program "),
                          createVNode("div", null, [
                            createVNode(VChip, {
                              color: "success",
                              size: "small",
                              class: "mb-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Platinum Member ")
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "mb-0 text-base" }, " 3000 points to next tier ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            variant: "tonal",
                            color: "warning",
                            icon: "ri-star-smile-line",
                            rounded: ""
                          }),
                          createVNode("h5", { class: "text-h5" }, " Wishlist "),
                          createVNode("div", null, [
                            createVNode("p", { class: "mb-0" }, [
                              createVNode("span", { class: "text-warning text-h5 d-inline-block me-1" }, "15"),
                              createTextVNode(" items in wishlist ")
                            ]),
                            createVNode("p", { class: "mb-0 text-base" }, " Receive notification when items go on sale ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex gap-y-2 flex-column" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            variant: "tonal",
                            color: "info",
                            icon: "ri-vip-crown-line",
                            rounded: ""
                          }),
                          createVNode("h5", { class: "text-h5" }, " Coupons "),
                          createVNode("div", null, [
                            createVNode("p", { class: "mb-0" }, [
                              createVNode("span", { class: "text-info text-h5 d-inline-block me-2" }, "21"),
                              createTextVNode(" Coupons you win ")
                            ]),
                            createVNode("p", { class: "mb-0 text-base" }, " Use coupon on next purchase ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerTabOverview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CustomerTabSecurity",
  __ssrInlineRender: true,
  setup(__props) {
    const isNewPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const smsVerificationNumber = ref("+1(968) 819-2547");
    const isTwoFactorDialogOpen = ref(false);
    const recentDeviceHeader = [
      {
        title: "BROWSER",
        key: "browser"
      },
      {
        title: "DEVICE",
        key: "device"
      },
      {
        title: "LOCATION",
        key: "location"
      },
      {
        title: "RECENT ACTIVITY",
        key: "activity"
      }
    ];
    const recentDevices = [
      {
        browser: "Chrome on Windows",
        logo: chrome,
        device: "Dell XPS 15",
        location: "United States",
        activity: "10, Jan 2020 20:07"
      },
      {
        browser: "Chrome on Android",
        logo: chrome,
        device: "Google Pixel 3a",
        location: "Ghana",
        activity: "11, Jan 2020 10:16"
      },
      {
        browser: "Chrome on macOS",
        logo: chrome,
        device: "Apple iMac",
        location: "Mayotte",
        activity: "11, Jan 2020 12:10"
      },
      {
        browser: "Chrome on iPhone",
        logo: chrome,
        device: "Apple iPhone XR",
        location: "Mauritania",
        activity: "12, Jan 2020 8:29"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TwoFactorAuthDialog = _sfc_main$b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Change Password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAlert, {
                                variant: "tonal",
                                color: "warning",
                                closable: "",
                                class: "mb-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAlertTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Ensure that these requirements are met`);
                                        } else {
                                          return [
                                            createTextVNode("Ensure that these requirements are met")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>Minimum 8 characters long, uppercase &amp; symbol</span>`);
                                  } else {
                                    return [
                                      createVNode(VAlertTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Ensure that these requirements are met")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "Minimum 8 characters long, uppercase & symbol")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VForm, { onSubmit: () => {
                              } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "New Password",
                                                  placeholder: "············",
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "New Password",
                                                    placeholder: "············",
                                                    type: unref(isNewPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                  }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Confirm Password",
                                                    placeholder: "············",
                                                    type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                  }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Change Password `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Change Password ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Change Password ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "New Password",
                                                  placeholder: "············",
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Change Password ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "New Password",
                                                placeholder: "············",
                                                type: unref(isNewPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Confirm Password",
                                                placeholder: "············",
                                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                              }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Change Password ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAlert, {
                                  variant: "tonal",
                                  color: "warning",
                                  closable: "",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAlertTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Ensure that these requirements are met")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, "Minimum 8 characters long, uppercase & symbol")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VForm, {
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "New Password",
                                              placeholder: "············",
                                              type: unref(isNewPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Confirm Password",
                                              placeholder: "············",
                                              type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                            }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Change Password ")
                                              ]),
                                              _: 1
                                            })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VAlert, {
                                variant: "tonal",
                                color: "warning",
                                closable: "",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VAlertTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Ensure that these requirements are met")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, "Minimum 8 characters long, uppercase & symbol")
                                ]),
                                _: 1
                              }),
                              createVNode(VForm, {
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "New Password",
                                            placeholder: "············",
                                            type: unref(isNewPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                          }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                          }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Change Password ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Change Password" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VAlert, {
                              variant: "tonal",
                              color: "warning",
                              closable: "",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAlertTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Ensure that these requirements are met")
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, "Minimum 8 characters long, uppercase & symbol")
                              ]),
                              _: 1
                            }),
                            createVNode(VForm, {
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "New Password",
                                          placeholder: "············",
                                          type: unref(isNewPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                        }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Confirm Password",
                                          placeholder: "············",
                                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                        }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Change Password ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "Two-step verification",
                    subtitle: "Keep your account secure with authentication step."
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}><h6 class="text-h6 mb-1"${_scopeId4}> SMS </h6>`);
                              _push5(ssrRenderComponent(VTextField, {
                                density: "compact",
                                variant: "outlined",
                                "model-value": unref(smsVerificationNumber),
                                readonly: ""
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      icon: "",
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary",
                                      class: "me-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-edit-box-line",
                                            onClick: ($event) => isTwoFactorDialogOpen.value = true
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: "ri-edit-box-line",
                                              onClick: ($event) => isTwoFactorDialogOpen.value = true
                                            }, null, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      icon: "",
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { icon: "ri-user-add-line" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "ri-user-add-line" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        icon: "",
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        class: "me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-edit-box-line",
                                            onClick: ($event) => isTwoFactorDialogOpen.value = true
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        icon: "",
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-user-add-line" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><p class="mb-0 mt-4"${_scopeId4}> Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a href="javascript:void(0)" class="text-decoration-none"${_scopeId4}>Learn more</a>. </p>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-1" }, " SMS "),
                                  createVNode(VTextField, {
                                    density: "compact",
                                    variant: "outlined",
                                    "model-value": unref(smsVerificationNumber),
                                    readonly: ""
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "",
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        class: "me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-edit-box-line",
                                            onClick: ($event) => isTwoFactorDialogOpen.value = true
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        icon: "",
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "ri-user-add-line" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["model-value"])
                                ]),
                                createVNode("p", { class: "mb-0 mt-4" }, [
                                  createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-decoration-none"
                                  }, "Learn more"),
                                  createTextVNode(". ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-1" }, " SMS "),
                                createVNode(VTextField, {
                                  density: "compact",
                                  variant: "outlined",
                                  "model-value": unref(smsVerificationNumber),
                                  readonly: ""
                                }, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      icon: "",
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary",
                                      class: "me-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-edit-box-line",
                                          onClick: ($event) => isTwoFactorDialogOpen.value = true
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      icon: "",
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "ri-user-add-line" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["model-value"])
                              ]),
                              createVNode("p", { class: "mb-0 mt-4" }, [
                                createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-decoration-none"
                                }, "Learn more"),
                                createTextVNode(". ")
                              ])
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
                    createVNode(VCard, {
                      title: "Two-step verification",
                      subtitle: "Keep your account secure with authentication step."
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-1" }, " SMS "),
                              createVNode(VTextField, {
                                density: "compact",
                                variant: "outlined",
                                "model-value": unref(smsVerificationNumber),
                                readonly: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    icon: "",
                                    rounded: "",
                                    variant: "outlined",
                                    color: "secondary",
                                    class: "me-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-edit-box-line",
                                        onClick: ($event) => isTwoFactorDialogOpen.value = true
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    icon: "",
                                    rounded: "",
                                    variant: "outlined",
                                    color: "secondary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "ri-user-add-line" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["model-value"])
                            ]),
                            createVNode("p", { class: "mb-0 mt-4" }, [
                              createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-decoration-none"
                              }, "Learn more"),
                              createTextVNode(". ")
                            ])
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Recent devices" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDataTable, {
                          items: recentDevices,
                          headers: recentDeviceHeader,
                          "hide-default-footer": "",
                          class: "text-no-wrap rounded-0"
                        }, {
                          "item.browser": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex text-high-emphasis"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: item.logo,
                                size: 22,
                                class: "me-4"
                              }, null, _parent5, _scopeId4));
                              _push5(` ${ssrInterpolate(item.browser)}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex text-high-emphasis" }, [
                                  createVNode(VAvatar, {
                                    image: item.logo,
                                    size: 22,
                                    class: "me-4"
                                  }, null, 8, ["image"]),
                                  createTextVNode(" " + toDisplayString(item.browser), 1)
                                ])
                              ];
                            }
                          }),
                          bottom: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5)
                              ;
                            else {
                              return [];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VDataTable, {
                            items: recentDevices,
                            headers: recentDeviceHeader,
                            "hide-default-footer": "",
                            class: "text-no-wrap rounded-0"
                          }, {
                            "item.browser": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex text-high-emphasis" }, [
                                createVNode(VAvatar, {
                                  image: item.logo,
                                  size: 22,
                                  class: "me-4"
                                }, null, 8, ["image"]),
                                createTextVNode(" " + toDisplayString(item.browser), 1)
                              ])
                            ]),
                            bottom: withCtx(() => []),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Recent devices" }, {
                      default: withCtx(() => [
                        createVNode(VDataTable, {
                          items: recentDevices,
                          headers: recentDeviceHeader,
                          "hide-default-footer": "",
                          class: "text-no-wrap rounded-0"
                        }, {
                          "item.browser": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex text-high-emphasis" }, [
                              createVNode(VAvatar, {
                                image: item.logo,
                                size: 22,
                                class: "me-4"
                              }, null, 8, ["image"]),
                              createTextVNode(" " + toDisplayString(item.browser), 1)
                            ])
                          ]),
                          bottom: withCtx(() => []),
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Change Password" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VAlert, {
                            variant: "tonal",
                            color: "warning",
                            closable: "",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAlertTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Ensure that these requirements are met")
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, "Minimum 8 characters long, uppercase & symbol")
                            ]),
                            _: 1
                          }),
                          createVNode(VForm, {
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "New Password",
                                        placeholder: "············",
                                        type: unref(isNewPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                      }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                      }, null, 8, ["type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Change Password ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    title: "Two-step verification",
                    subtitle: "Keep your account secure with authentication step."
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("h6", { class: "text-h6 mb-1" }, " SMS "),
                            createVNode(VTextField, {
                              density: "compact",
                              variant: "outlined",
                              "model-value": unref(smsVerificationNumber),
                              readonly: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(VBtn, {
                                  icon: "",
                                  rounded: "",
                                  variant: "outlined",
                                  color: "secondary",
                                  class: "me-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-edit-box-line",
                                      onClick: ($event) => isTwoFactorDialogOpen.value = true
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  rounded: "",
                                  variant: "outlined",
                                  color: "secondary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "ri-user-add-line" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["model-value"])
                          ]),
                          createVNode("p", { class: "mb-0 mt-4" }, [
                            createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-decoration-none"
                            }, "Learn more"),
                            createTextVNode(". ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Recent devices" }, {
                    default: withCtx(() => [
                      createVNode(VDataTable, {
                        items: recentDevices,
                        headers: recentDeviceHeader,
                        "hide-default-footer": "",
                        class: "text-no-wrap rounded-0"
                      }, {
                        "item.browser": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex text-high-emphasis" }, [
                            createVNode(VAvatar, {
                              image: item.logo,
                              size: 22,
                              class: "me-4"
                            }, null, 8, ["image"]),
                            createTextVNode(" " + toDisplayString(item.browser), 1)
                          ])
                        ]),
                        bottom: withCtx(() => []),
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
      _push(ssrRenderComponent(_component_TwoFactorAuthDialog, {
        isDialogVisible: unref(isTwoFactorDialogOpen),
        "onUpdate:isDialogVisible": ($event) => isRef(isTwoFactorDialogOpen) ? isTwoFactorDialogOpen.value = $event : null,
        "sms-code": unref(smsVerificationNumber)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/ecommerce/customer/view/CustomerTabSecurity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute("apps-ecommerce-customer-details-id");
    const customerData = ref();
    const userTab = ref(null);
    const tabs = [
      {
        icon: "ri-group-line",
        title: "Overview"
      },
      {
        icon: "ri-lock-2-line",
        title: "Security"
      },
      {
        icon: "ri-map-pin-2-line",
        title: "Address & Billing"
      },
      {
        icon: "ri-notification-4-line",
        title: "Notifications"
      }
    ];
    const { data } = ([__temp, __restore] = withAsyncContext(() => useApi(`/apps/ecommerce/customers/${route.params.id}`)), __temp = await __temp, __restore(), __temp);
    if (data.value)
      customerData.value = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"><div><h4 class="text-h4 mb-1"> Customer ID #${ssrInterpolate(unref(route).params.id)}</h4><p class="text-body-1 mb-0"> Aug 17, 2020, 5:48 (ET) </p></div>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Customer `);
          } else {
            return [
              createTextVNode(" Delete Customer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(customerData)) {
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                lg: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CustomerBioPanel, { "customer-data": unref(customerData) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(CustomerBioPanel, { "customer-data": unref(customerData) }, null, 8, ["customer-data"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "7",
                lg: "8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VTabs, {
                      modelValue: unref(userTab),
                      "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                      class: "v-tabs-pill mb-2 disable-tab-transition"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(tabs, (tab) => {
                            _push4(ssrRenderComponent(VTab, {
                              key: tab.icon
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    start: "",
                                    icon: tab.icon
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(tab.title)}</span>`);
                                } else {
                                  return [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: tab.icon
                                    }, null, 8, ["icon"]),
                                    createVNode("span", null, toDisplayString(tab.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                              return createVNode(VTab, {
                                key: tab.icon
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: tab.icon
                                  }, null, 8, ["icon"]),
                                  createVNode("span", null, toDisplayString(tab.title), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VWindow, {
                      modelValue: unref(userTab),
                      "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                      class: "mb-6 disable-tab-transition",
                      touch: false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VWindowItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$2)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VWindowItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VWindowItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VWindowItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2)
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5)
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
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
                      createVNode(VTabs, {
                        modelValue: unref(userTab),
                        "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                        class: "v-tabs-pill mb-2 disable-tab-transition"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                            return createVNode(VTab, {
                              key: tab.icon
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: tab.icon
                                }, null, 8, ["icon"]),
                                createVNode("span", null, toDisplayString(tab.title), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VWindow, {
                        modelValue: unref(userTab),
                        "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                        class: "mb-6 disable-tab-transition",
                        touch: false
                      }, {
                        default: withCtx(() => [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          })
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
                createVNode(VCol, {
                  cols: "12",
                  md: "5",
                  lg: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(CustomerBioPanel, { "customer-data": unref(customerData) }, null, 8, ["customer-data"])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "7",
                  lg: "8"
                }, {
                  default: withCtx(() => [
                    createVNode(VTabs, {
                      modelValue: unref(userTab),
                      "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                      class: "v-tabs-pill mb-2 disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                          return createVNode(VTab, {
                            key: tab.icon
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                icon: tab.icon
                              }, null, 8, ["icon"]),
                              createVNode("span", null, toDisplayString(tab.title), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VWindow, {
                      modelValue: unref(userTab),
                      "onUpdate:modelValue": ($event) => isRef(userTab) ? userTab.value = $event : null,
                      class: "mb-6 disable-tab-transition",
                      touch: false
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        })
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
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Invoice with ID ${ssrInterpolate(unref(route).params.id)} not found! `);
            } else {
              return [
                createTextVNode(" Invoice with ID " + toDisplayString(unref(route).params.id) + " not found! ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/ecommerce/customer/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
