import { ref, withCtx, unref, openBlock, createBlock, toDisplayString, createTextVNode, createVNode, createCommentVNode, Fragment, renderList, isRef, useSSRContext, mergeProps, withAsyncContext, computed, resolveComponent, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { a as avatarText, k as kFormatter } from "./formatters-DpL1jrjT.js";
import { _ as _sfc_main$9, c as chrome } from "./chrome-CRVx__cr.js";
import { _ as _sfc_main$8 } from "./UserInfoEditDialog-Dqac65qF.js";
import { _ as _export_sfc, a as VIcon, V as VBtn, g as VProgressLinear, d as avatar2, e as avatar3, K as react, L as figma, M as vue, N as html5 } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { _ as _sfc_main$b } from "./AddEditAddressDialog-CR2aSRYs.js";
import { _ as _sfc_main$a, a as _sfc_main$c } from "./TwoFactorAuthDialog-DSsmJXL3.js";
import { m as mastercard, v as visa, g as google, s as slack, a as github, b as mailchimp, c as asana, f as facebook, t as twitter, l as linkedin, d as behance } from "./twitter-DQv2g5Ku.js";
import { V as VAlert, a as VAlertTitle } from "./VAlert-CqjinC0F.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { d as dribbleLogo } from "./dribbble-C_GJZU6f.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { p as pdf } from "./pdf-EDv3jQ13.js";
import { x as xamarin, p as python, s as sketch } from "./xamarin-CDkJpFqb.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { V as VTimeline, a as VTimelineItem } from "./VTimelineItem-BVLMzLFF.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "./helpers-DX2i3Kdq.js";
import "./ConfirmDialog-I9elYGet.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./DialogCloseBtn-h97PlnE6.js";
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
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "./CustomRadios-DrYzSNcj.js";
import "./VRadioGroup-BdG5naH9.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./form-DJQTvsmB.js";
import "./VInput-Bla8Vlgt.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "ufo";
import "ofetch";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VPagination-BH_qhohv.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$7 = {
  __name: "UserBioPanel",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const standardPlan = {
      plan: "Standard",
      price: 99,
      benefits: [
        "10 Users",
        "Up to 10GB storage",
        "Basic Support"
      ]
    };
    const isUserInfoEditDialogVisible = ref(false);
    const isUpgradePlanDialogVisible = ref(false);
    const resolveUserRoleVariant = (role) => {
      if (role === "subscriber")
        return {
          color: "primary",
          icon: "ri-user-line"
        };
      if (role === "author")
        return {
          color: "warning",
          icon: "ri-settings-2-line"
        };
      if (role === "maintainer")
        return {
          color: "success",
          icon: "ri-database-2-line"
        };
      if (role === "editor")
        return {
          color: "info",
          icon: "ri-pencil-line"
        };
      if (role === "admin")
        return {
          color: "error",
          icon: "ri-server-line"
        };
      return {
        color: "primary",
        icon: "ri-user-line"
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserInfoEditDialog = _sfc_main$8;
      const _component_UserUpgradePlanDialog = _sfc_main$9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.userData) {
                    _push3(ssrRenderComponent(VCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardText, { class: "text-center pt-12 pb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  rounded: "lg",
                                  size: 120,
                                  color: !props.userData.avatar ? "primary" : void 0,
                                  variant: !props.userData.avatar ? "tonal" : void 0
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (props.userData.avatar) {
                                        _push6(ssrRenderComponent(VImg, {
                                          src: props.userData.avatar
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<span class="text-5xl font-weight-medium" data-v-268e7d79${_scopeId5}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName))}</span>`);
                                      }
                                    } else {
                                      return [
                                        props.userData.avatar ? (openBlock(), createBlock(VImg, {
                                          key: 0,
                                          src: props.userData.avatar
                                        }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                          key: 1,
                                          class: "text-5xl font-weight-medium"
                                        }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName)), 1))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<h5 class="text-h5 mt-4" data-v-268e7d79${_scopeId4}>${ssrInterpolate(props.userData.fullName)}</h5>`);
                                _push5(ssrRenderComponent(VChip, {
                                  color: resolveUserRoleVariant(props.userData.role).color,
                                  size: "small",
                                  class: "text-capitalize mt-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(props.userData.role)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(props.userData.role), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    rounded: "lg",
                                    size: 120,
                                    color: !props.userData.avatar ? "primary" : void 0,
                                    variant: !props.userData.avatar ? "tonal" : void 0
                                  }, {
                                    default: withCtx(() => [
                                      props.userData.avatar ? (openBlock(), createBlock(VImg, {
                                        key: 0,
                                        src: props.userData.avatar
                                      }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                        key: 1,
                                        class: "text-5xl font-weight-medium"
                                      }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName)), 1))
                                    ]),
                                    _: 1
                                  }, 8, ["color", "variant"]),
                                  createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.userData.fullName), 1),
                                  createVNode(VChip, {
                                    color: resolveUserRoleVariant(props.userData.role).color,
                                    size: "small",
                                    class: "text-capitalize mt-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.userData.role), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "d-flex justify-center flex-wrap gap-6 pb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center me-8" data-v-268e7d79${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: 40,
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  class: "me-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "24",
                                        icon: "ri-check-line"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: "ri-check-line"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div data-v-268e7d79${_scopeId4}><h5 class="text-h5" data-v-268e7d79${_scopeId4}>${ssrInterpolate(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.taskDone))}</h5><span data-v-268e7d79${_scopeId4}>Task Done</span></div></div><div class="d-flex align-center me-4" data-v-268e7d79${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  size: 44,
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  class: "me-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "24",
                                        icon: "ri-briefcase-line"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: "ri-briefcase-line"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div data-v-268e7d79${_scopeId4}><h5 class="text-h5" data-v-268e7d79${_scopeId4}>${ssrInterpolate(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.projectDone))}</h5><span data-v-268e7d79${_scopeId4}>Project Done</span></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center me-8" }, [
                                    createVNode(VAvatar, {
                                      size: 40,
                                      rounded: "",
                                      color: "primary",
                                      variant: "tonal",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: "ri-check-line"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.taskDone)), 1),
                                      createVNode("span", null, "Task Done")
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-center me-4" }, [
                                    createVNode(VAvatar, {
                                      size: 44,
                                      rounded: "",
                                      color: "primary",
                                      variant: "tonal",
                                      class: "me-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "24",
                                          icon: "ri-briefcase-line"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", null, [
                                      createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.projectDone)), 1),
                                      createVNode("span", null, "Project Done")
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, { class: "pb-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h5 class="text-h5" data-v-268e7d79${_scopeId4}> Details </h5>`);
                                _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}>Username:</span><span class="text-body-1" data-v-268e7d79${_scopeId7}> @${ssrInterpolate(props.userData.username)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                                    createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                                  createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Billing Email: </span><span class="text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.email)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Status: </span><span class="text-body-1 text-capitalize" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.status)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                                    createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                                  createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}>Role: </span><span class="text-capitalize text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.role)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                                    createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                                  createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Tax ID: </span><span class="text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.taxId)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Contact: </span><span class="text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.contact)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Language: </span><span class="text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.language)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
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
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-weight-medium" data-v-268e7d79${_scopeId7}> Country: </span><span class="text-body-1" data-v-268e7d79${_scopeId7}>${ssrInterpolate(props.userData.country)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                                    createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-sm" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                                  createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                                createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                                createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                                createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-sm" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                                createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                                  createVNode("h5", { class: "text-h5" }, " Details "),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                              createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                              createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                              createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-sm" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                              createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                          _push4(ssrRenderComponent(VCardText, { class: "d-flex justify-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "elevated",
                                  class: "me-4",
                                  onClick: ($event) => isUserInfoEditDialogVisible.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Edit `);
                                    } else {
                                      return [
                                        createTextVNode(" Edit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "outlined",
                                  color: "error"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Suspend `);
                                    } else {
                                      return [
                                        createTextVNode(" Suspend ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: "elevated",
                                    class: "me-4",
                                    onClick: ($event) => isUserInfoEditDialogVisible.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Edit ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Suspend ")
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
                            createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  rounded: "lg",
                                  size: 120,
                                  color: !props.userData.avatar ? "primary" : void 0,
                                  variant: !props.userData.avatar ? "tonal" : void 0
                                }, {
                                  default: withCtx(() => [
                                    props.userData.avatar ? (openBlock(), createBlock(VImg, {
                                      key: 0,
                                      src: props.userData.avatar
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "text-5xl font-weight-medium"
                                    }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName)), 1))
                                  ]),
                                  _: 1
                                }, 8, ["color", "variant"]),
                                createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.userData.fullName), 1),
                                createVNode(VChip, {
                                  color: resolveUserRoleVariant(props.userData.role).color,
                                  size: "small",
                                  class: "text-capitalize mt-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.userData.role), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "d-flex justify-center flex-wrap gap-6 pb-6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center me-8" }, [
                                  createVNode(VAvatar, {
                                    size: 40,
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    class: "me-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "24",
                                        icon: "ri-check-line"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.taskDone)), 1),
                                    createVNode("span", null, "Task Done")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center me-4" }, [
                                  createVNode(VAvatar, {
                                    size: 44,
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    class: "me-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "24",
                                        icon: "ri-briefcase-line"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.projectDone)), 1),
                                    createVNode("span", null, "Project Done")
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "pb-6" }, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-h5" }, " Details "),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                            createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                            createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                            createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-sm" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                            createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                            createVNode(VCardText, { class: "d-flex justify-center" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "elevated",
                                  class: "me-4",
                                  onClick: ($event) => isUserInfoEditDialogVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "error"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Suspend ")
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
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.userData ? (openBlock(), createBlock(VCard, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              rounded: "lg",
                              size: 120,
                              color: !props.userData.avatar ? "primary" : void 0,
                              variant: !props.userData.avatar ? "tonal" : void 0
                            }, {
                              default: withCtx(() => [
                                props.userData.avatar ? (openBlock(), createBlock(VImg, {
                                  key: 0,
                                  src: props.userData.avatar
                                }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-5xl font-weight-medium"
                                }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName)), 1))
                              ]),
                              _: 1
                            }, 8, ["color", "variant"]),
                            createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.userData.fullName), 1),
                            createVNode(VChip, {
                              color: resolveUserRoleVariant(props.userData.role).color,
                              size: "small",
                              class: "text-capitalize mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(props.userData.role), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "d-flex justify-center flex-wrap gap-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center me-8" }, [
                              createVNode(VAvatar, {
                                size: 40,
                                rounded: "",
                                color: "primary",
                                variant: "tonal",
                                class: "me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "24",
                                    icon: "ri-check-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.taskDone)), 1),
                                createVNode("span", null, "Task Done")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center me-4" }, [
                              createVNode(VAvatar, {
                                size: 44,
                                rounded: "",
                                color: "primary",
                                variant: "tonal",
                                class: "me-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "24",
                                    icon: "ri-briefcase-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.projectDone)), 1),
                                createVNode("span", null, "Project Done")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode("h5", { class: "text-h5" }, " Details "),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                        createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                        createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                        createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-sm" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                        createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                        createVNode(VCardText, { class: "d-flex justify-center" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "elevated",
                              class: "me-4",
                              onClick: ($event) => isUserInfoEditDialogVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              variant: "outlined",
                              color: "error"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Suspend ")
                              ]),
                              _: 1
                            })
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
                    class: "current-plan"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VChip, {
                                color: "primary",
                                size: "small"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Standard `);
                                  } else {
                                    return [
                                      createTextVNode(" Standard ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center" data-v-268e7d79${_scopeId4}><sup class="text-primary text-lg font-weight-medium" data-v-268e7d79${_scopeId4}>$</sup><h1 class="text-h1 text-primary" data-v-268e7d79${_scopeId4}> 99 </h1><sub class="mt-5" data-v-268e7d79${_scopeId4}><h6 class="text-h6 font-weight-regular" data-v-268e7d79${_scopeId4}>month</h6></sub></div>`);
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Standard ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSpacer),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("sup", { class: "text-primary text-lg font-weight-medium" }, "$"),
                                  createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                                  createVNode("sub", { class: "mt-5" }, [
                                    createVNode("h6", { class: "text-h6 font-weight-regular" }, "month")
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
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(standardPlan.benefits, (benefit) => {
                                      _push6(ssrRenderComponent(VListItem, { key: benefit }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center" data-v-268e7d79${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "10",
                                              color: "medium-emphasis",
                                              class: "me-2",
                                              icon: "ri-circle-fill"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="text-medium-emphasis" data-v-268e7d79${_scopeId6}>${ssrInterpolate(benefit)}</div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VIcon, {
                                                  size: "10",
                                                  color: "medium-emphasis",
                                                  class: "me-2",
                                                  icon: "ri-circle-fill"
                                                }),
                                                createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(standardPlan.benefits, (benefit) => {
                                        return openBlock(), createBlock(VListItem, { key: benefit }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VIcon, {
                                                size: "10",
                                                color: "medium-emphasis",
                                                class: "me-2",
                                                icon: "ri-circle-fill"
                                              }),
                                              createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="my-6" data-v-268e7d79${_scopeId4}><div class="d-flex mb-1" data-v-268e7d79${_scopeId4}><h6 class="text-h6" data-v-268e7d79${_scopeId4}> Days </h6>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-h6" data-v-268e7d79${_scopeId4}> 26 of 30 Days </h6></div>`);
                              _push5(ssrRenderComponent(VProgressLinear, {
                                rounded: "",
                                "model-value": 86,
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="text-sm mt-1" data-v-268e7d79${_scopeId4}> 4 days remaining </p></div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                onClick: ($event) => isUpgradePlanDialogVisible.value = true
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Upgrade Plan `);
                                  } else {
                                    return [
                                      createTextVNode(" Upgrade Plan ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(standardPlan.benefits, (benefit) => {
                                      return openBlock(), createBlock(VListItem, { key: benefit }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(VIcon, {
                                              size: "10",
                                              color: "medium-emphasis",
                                              class: "me-2",
                                              icon: "ri-circle-fill"
                                            }),
                                            createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "my-6" }, [
                                  createVNode("div", { class: "d-flex mb-1" }, [
                                    createVNode("h6", { class: "text-h6" }, " Days "),
                                    createVNode(VSpacer),
                                    createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                  ]),
                                  createVNode(VProgressLinear, {
                                    rounded: "",
                                    "model-value": 86,
                                    color: "primary"
                                  }),
                                  createVNode("p", { class: "text-sm mt-1" }, " 4 days remaining ")
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Upgrade Plan ")
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
                          createVNode(VCardText, { class: "d-flex" }, {
                            default: withCtx(() => [
                              createVNode(VChip, {
                                color: "primary",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Standard ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSpacer),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("sup", { class: "text-primary text-lg font-weight-medium" }, "$"),
                                createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                                createVNode("sub", { class: "mt-5" }, [
                                  createVNode("h6", { class: "text-h6 font-weight-regular" }, "month")
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(standardPlan.benefits, (benefit) => {
                                    return openBlock(), createBlock(VListItem, { key: benefit }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(VIcon, {
                                            size: "10",
                                            color: "medium-emphasis",
                                            class: "me-2",
                                            icon: "ri-circle-fill"
                                          }),
                                          createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "my-6" }, [
                                createVNode("div", { class: "d-flex mb-1" }, [
                                  createVNode("h6", { class: "text-h6" }, " Days "),
                                  createVNode(VSpacer),
                                  createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                ]),
                                createVNode(VProgressLinear, {
                                  rounded: "",
                                  "model-value": 86,
                                  color: "primary"
                                }),
                                createVNode("p", { class: "text-sm mt-1" }, " 4 days remaining ")
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                onClick: ($event) => isUpgradePlanDialogVisible.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Upgrade Plan ")
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
                      class: "current-plan"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex" }, {
                          default: withCtx(() => [
                            createVNode(VChip, {
                              color: "primary",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Standard ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSpacer),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("sup", { class: "text-primary text-lg font-weight-medium" }, "$"),
                              createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                              createVNode("sub", { class: "mt-5" }, [
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, "month")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(standardPlan.benefits, (benefit) => {
                                  return openBlock(), createBlock(VListItem, { key: benefit }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode(VIcon, {
                                          size: "10",
                                          color: "medium-emphasis",
                                          class: "me-2",
                                          icon: "ri-circle-fill"
                                        }),
                                        createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "my-6" }, [
                              createVNode("div", { class: "d-flex mb-1" }, [
                                createVNode("h6", { class: "text-h6" }, " Days "),
                                createVNode(VSpacer),
                                createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                              ]),
                              createVNode(VProgressLinear, {
                                rounded: "",
                                "model-value": 86,
                                color: "primary"
                              }),
                              createVNode("p", { class: "text-sm mt-1" }, " 4 days remaining ")
                            ]),
                            createVNode(VBtn, {
                              block: "",
                              onClick: ($event) => isUpgradePlanDialogVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Upgrade Plan ")
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
                  props.userData ? (openBlock(), createBlock(VCard, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "text-center pt-12 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            rounded: "lg",
                            size: 120,
                            color: !props.userData.avatar ? "primary" : void 0,
                            variant: !props.userData.avatar ? "tonal" : void 0
                          }, {
                            default: withCtx(() => [
                              props.userData.avatar ? (openBlock(), createBlock(VImg, {
                                key: 0,
                                src: props.userData.avatar
                              }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-5xl font-weight-medium"
                              }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(props.userData.fullName)), 1))
                            ]),
                            _: 1
                          }, 8, ["color", "variant"]),
                          createVNode("h5", { class: "text-h5 mt-4" }, toDisplayString(props.userData.fullName), 1),
                          createVNode(VChip, {
                            color: resolveUserRoleVariant(props.userData.role).color,
                            size: "small",
                            class: "text-capitalize mt-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.userData.role), 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "d-flex justify-center flex-wrap gap-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center me-8" }, [
                            createVNode(VAvatar, {
                              size: 40,
                              rounded: "",
                              color: "primary",
                              variant: "tonal",
                              class: "me-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "24",
                                  icon: "ri-check-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.taskDone)), 1),
                              createVNode("span", null, "Task Done")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center me-4" }, [
                            createVNode(VAvatar, {
                              size: 44,
                              rounded: "",
                              color: "primary",
                              variant: "tonal",
                              class: "me-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "24",
                                  icon: "ri-briefcase-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("h5", { class: "text-h5" }, toDisplayString(("kFormatter" in _ctx ? _ctx.kFormatter : unref(kFormatter))(props.userData.projectDone)), 1),
                              createVNode("span", null, "Project Done")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode("h5", { class: "text-h5" }, " Details "),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, "Username:"),
                                      createVNode("span", { class: "text-body-1" }, " @" + toDisplayString(props.userData.username), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Billing Email: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.email), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Status: "),
                                      createVNode("span", { class: "text-body-1 text-capitalize" }, toDisplayString(props.userData.status), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, "Role: "),
                                      createVNode("span", { class: "text-capitalize text-body-1" }, toDisplayString(props.userData.role), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Tax ID: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.taxId), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Contact: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.contact), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Language: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.language), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-sm" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-weight-medium" }, " Country: "),
                                      createVNode("span", { class: "text-body-1" }, toDisplayString(props.userData.country), 1)
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
                      createVNode(VCardText, { class: "d-flex justify-center" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: "elevated",
                            class: "me-4",
                            onClick: ($event) => isUserInfoEditDialogVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "error"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Suspend ")
                            ]),
                            _: 1
                          })
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
                    class: "current-plan"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex" }, {
                        default: withCtx(() => [
                          createVNode(VChip, {
                            color: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Standard ")
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("sup", { class: "text-primary text-lg font-weight-medium" }, "$"),
                            createVNode("h1", { class: "text-h1 text-primary" }, " 99 "),
                            createVNode("sub", { class: "mt-5" }, [
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, "month")
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(standardPlan.benefits, (benefit) => {
                                return openBlock(), createBlock(VListItem, { key: benefit }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(VIcon, {
                                        size: "10",
                                        color: "medium-emphasis",
                                        class: "me-2",
                                        icon: "ri-circle-fill"
                                      }),
                                      createVNode("div", { class: "text-medium-emphasis" }, toDisplayString(benefit), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "my-6" }, [
                            createVNode("div", { class: "d-flex mb-1" }, [
                              createVNode("h6", { class: "text-h6" }, " Days "),
                              createVNode(VSpacer),
                              createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                            ]),
                            createVNode(VProgressLinear, {
                              rounded: "",
                              "model-value": 86,
                              color: "primary"
                            }),
                            createVNode("p", { class: "text-sm mt-1" }, " 4 days remaining ")
                          ]),
                          createVNode(VBtn, {
                            block: "",
                            onClick: ($event) => isUpgradePlanDialogVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Upgrade Plan ")
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
        "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null,
        "user-data": props.userData
      }, null, _parent));
      _push(ssrRenderComponent(_component_UserUpgradePlanDialog, {
        isDialogVisible: unref(isUpgradePlanDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isUpgradePlanDialogVisible) ? isUpgradePlanDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserBioPanel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const UserBioPanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-268e7d79"]]);
const americanExpress = "/build/assets/american-express-01wsbv3N.png";
const _sfc_main$6 = {
  __name: "UserTabBillingsPlans",
  __ssrInlineRender: true,
  setup(__props) {
    const isUpgradePlanDialogVisible = ref(false);
    const currentCardDetails = ref();
    const isCardEditDialogVisible = ref(false);
    const isCardAddDialogVisible = ref(false);
    const isEditAddressDialogVisible = ref(false);
    const openEditCardDialog = (cardDetails) => {
      currentCardDetails.value = cardDetails;
      isCardEditDialogVisible.value = true;
    };
    const creditCards = [
      {
        name: "Tom McBride",
        number: "4851234567899865",
        expiry: "12/24",
        isPrimary: true,
        type: "mastercard",
        cvv: "123",
        image: mastercard
      },
      {
        name: "Mildred Wagner",
        number: "5531234567895678",
        expiry: "02/24",
        isPrimary: false,
        type: "visa",
        cvv: "456",
        image: visa
      },
      {
        name: "Lester Jennings",
        number: "5531234567890002",
        expiry: "08/20",
        isPrimary: false,
        type: "visa",
        cvv: "456",
        image: americanExpress
      }
    ];
    const currentBillingAddress = {
      companyName: "Pixinvent",
      billingEmail: "gertrude@gmail.com",
      taxID: "TAX-875623",
      vatNumber: "SDF754K77",
      address: "100 Water Plant Avenue, Building 1303 Wake Island",
      contact: "+1(609) 933-44-22",
      country: "USA",
      state: "Queensland",
      zipCode: 403114
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardAddEditDialog = _sfc_main$a;
      const _component_AddEditAddressDialog = _sfc_main$b;
      const _component_UserUpgradePlanDialog = _sfc_main$9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Current Plan" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h6 class="text-h6 mb-1"${_scopeId6}> Your Current Plan is Basic </h6><p${_scopeId6}>A simple start for everyone</p><h6 class="text-h6 mb-1"${_scopeId6}> Active until Dec 09, 2021 </h6><p${_scopeId6}>We will send you a notification upon Subscription expiration</p><h6 class="text-h6 mb-1"${_scopeId6}><span class="me-2"${_scopeId6}>$199 Per Month</span>`);
                                          _push7(ssrRenderComponent(VChip, {
                                            color: "primary",
                                            size: "small"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Popular `);
                                              } else {
                                                return [
                                                  createTextVNode(" Popular ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</h6><p class="mb-0"${_scopeId6}> Standard plan for small to medium businesses </p>`);
                                        } else {
                                          return [
                                            createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                            createVNode("p", null, "A simple start for everyone"),
                                            createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                            createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                            createVNode("h6", { class: "text-h6 mb-1" }, [
                                              createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                              createVNode(VChip, {
                                                color: "primary",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Popular ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VAlert, {
                                            color: "warning",
                                            variant: "tonal",
                                            icon: "ri-alert-line",
                                            closable: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VAlertTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`We need your attention!`);
                                                    } else {
                                                      return [
                                                        createTextVNode("We need your attention!")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<span${_scopeId7}>Your plan requires update</span>`);
                                              } else {
                                                return [
                                                  createVNode(VAlertTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("We need your attention!")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", null, "Your plan requires update")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex justify-space-between font-weight-bold mt-4 mb-1"${_scopeId6}><h6 class="text-h6"${_scopeId6}> Days </h6><h6 class="text-h6"${_scopeId6}> 26 of 30 Days </h6></div>`);
                                          _push7(ssrRenderComponent(VProgressLinear, {
                                            rounded: "",
                                            color: "primary",
                                            height: 10,
                                            "model-value": 75
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<p class="text-sm mt-1"${_scopeId6}> Your plan requires update </p>`);
                                        } else {
                                          return [
                                            createVNode(VAlert, {
                                              color: "warning",
                                              variant: "tonal",
                                              icon: "ri-alert-line",
                                              closable: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VAlertTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("We need your attention!")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", null, "Your plan requires update")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                              createVNode("h6", { class: "text-h6" }, " Days "),
                                              createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                            ]),
                                            createVNode(VProgressLinear, {
                                              rounded: "",
                                              color: "primary",
                                              height: 10,
                                              "model-value": 75
                                            }),
                                            createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex flex-wrap gap-4"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` upgrade plan `);
                                              } else {
                                                return [
                                                  createTextVNode(" upgrade plan ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "error",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancel Subscription `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancel Subscription ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                              createVNode(VBtn, {
                                                onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" upgrade plan ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(VBtn, {
                                                color: "error",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Cancel Subscription ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                          createVNode("p", null, "A simple start for everyone"),
                                          createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                          createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                          createVNode("h6", { class: "text-h6 mb-1" }, [
                                            createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                            createVNode(VChip, {
                                              color: "primary",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Popular ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAlert, {
                                            color: "warning",
                                            variant: "tonal",
                                            icon: "ri-alert-line",
                                            closable: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VAlertTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("We need your attention!")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", null, "Your plan requires update")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                            createVNode("h6", { class: "text-h6" }, " Days "),
                                            createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                          ]),
                                          createVNode(VProgressLinear, {
                                            rounded: "",
                                            color: "primary",
                                            height: 10,
                                            "model-value": 75
                                          }),
                                          createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                            createVNode(VBtn, {
                                              onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" upgrade plan ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(VBtn, {
                                              color: "error",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel Subscription ")
                                              ]),
                                              _: 1
                                            })
                                          ])
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                        createVNode("p", null, "A simple start for everyone"),
                                        createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                        createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                        createVNode("h6", { class: "text-h6 mb-1" }, [
                                          createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                          createVNode(VChip, {
                                            color: "primary",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Popular ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAlert, {
                                          color: "warning",
                                          variant: "tonal",
                                          icon: "ri-alert-line",
                                          closable: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VAlertTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("We need your attention!")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", null, "Your plan requires update")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                          createVNode("h6", { class: "text-h6" }, " Days "),
                                          createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                        ]),
                                        createVNode(VProgressLinear, {
                                          rounded: "",
                                          color: "primary",
                                          height: 10,
                                          "model-value": 75
                                        }),
                                        createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                          createVNode(VBtn, {
                                            onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" upgrade plan ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "error",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel Subscription ")
                                            ]),
                                            _: 1
                                          })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                      createVNode("p", null, "A simple start for everyone"),
                                      createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                      createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                      createVNode("h6", { class: "text-h6 mb-1" }, [
                                        createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                        createVNode(VChip, {
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Popular ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAlert, {
                                        color: "warning",
                                        variant: "tonal",
                                        icon: "ri-alert-line",
                                        closable: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAlertTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("We need your attention!")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", null, "Your plan requires update")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                        createVNode("h6", { class: "text-h6" }, " Days "),
                                        createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                      ]),
                                      createVNode(VProgressLinear, {
                                        rounded: "",
                                        color: "primary",
                                        height: 10,
                                        "model-value": 75
                                      }),
                                      createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                        createVNode(VBtn, {
                                          onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" upgrade plan ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "error",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel Subscription ")
                                          ]),
                                          _: 1
                                        })
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
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "Current Plan" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                    createVNode("p", null, "A simple start for everyone"),
                                    createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                    createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                    createVNode("h6", { class: "text-h6 mb-1" }, [
                                      createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                      createVNode(VChip, {
                                        color: "primary",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Popular ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAlert, {
                                      color: "warning",
                                      variant: "tonal",
                                      icon: "ri-alert-line",
                                      closable: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAlertTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("We need your attention!")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", null, "Your plan requires update")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                      createVNode("h6", { class: "text-h6" }, " Days "),
                                      createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                    ]),
                                    createVNode(VProgressLinear, {
                                      rounded: "",
                                      color: "primary",
                                      height: 10,
                                      "model-value": 75
                                    }),
                                    createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                      createVNode(VBtn, {
                                        onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" upgrade plan ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "error",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel Subscription ")
                                        ]),
                                        _: 1
                                      })
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
                  _push3(ssrRenderComponent(VCard, { title: "Payment Methods" }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          size: "small",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add Card `);
                            } else {
                              return [
                                createTextVNode(" Add Card ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            size: "small",
                            "prepend-icon": "ri-add-line",
                            onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Card ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(creditCards, (card) => {
                                _push5(ssrRenderComponent(VCard, {
                                  key: card.name,
                                  border: "",
                                  flat: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-no-wrap"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VImg, {
                                              src: card.image,
                                              "max-width": "90",
                                              width: "auto",
                                              height: 25
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<h6 class="text-h6 my-2 d-flex gap-2 align-center"${_scopeId6}><div${_scopeId6}>${ssrInterpolate(card.name)}</div>`);
                                            if (card.isPrimary) {
                                              _push7(ssrRenderComponent(VChip, {
                                                color: "primary",
                                                size: "small"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Primary `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Primary ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`</h6><span class="text-body-1"${_scopeId6}>**** **** **** ${ssrInterpolate(card.number.substring(card.number.length - 4))}</span></div><div class="d-flex flex-column text-sm-end gap-4"${_scopeId6}><div class="order-sm-0 order-1"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              variant: "outlined",
                                              class: "me-4",
                                              size: "small",
                                              onClick: ($event) => openEditCardDialog(card)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Edit `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Edit ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              color: "error",
                                              size: "small",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Delete `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Delete ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div><span class="text-body-2 order-sm-1 order-0"${_scopeId6}>Card expires at ${ssrInterpolate(card.expiry)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-no-wrap" }, [
                                                createVNode(VImg, {
                                                  src: card.image,
                                                  "max-width": "90",
                                                  width: "auto",
                                                  height: 25
                                                }, null, 8, ["src"]),
                                                createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                                  createVNode("div", null, toDisplayString(card.name), 1),
                                                  card.isPrimary ? (openBlock(), createBlock(VChip, {
                                                    key: 0,
                                                    color: "primary",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Primary ")
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ]),
                                                createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                                createVNode("div", { class: "order-sm-0 order-1" }, [
                                                  createVNode(VBtn, {
                                                    variant: "outlined",
                                                    class: "me-4",
                                                    size: "small",
                                                    onClick: ($event) => openEditCardDialog(card)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Edit ")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]),
                                                  createVNode(VBtn, {
                                                    color: "error",
                                                    size: "small",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Delete ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-no-wrap" }, [
                                              createVNode(VImg, {
                                                src: card.image,
                                                "max-width": "90",
                                                width: "auto",
                                                height: 25
                                              }, null, 8, ["src"]),
                                              createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                                createVNode("div", null, toDisplayString(card.name), 1),
                                                card.isPrimary ? (openBlock(), createBlock(VChip, {
                                                  key: 0,
                                                  color: "primary",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Primary ")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                              createVNode("div", { class: "order-sm-0 order-1" }, [
                                                createVNode(VBtn, {
                                                  variant: "outlined",
                                                  class: "me-4",
                                                  size: "small",
                                                  onClick: ($event) => openEditCardDialog(card)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Edit ")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(VBtn, {
                                                  color: "error",
                                                  size: "small",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Delete ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                  return createVNode(VCard, {
                                    key: card.name,
                                    border: "",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-no-wrap" }, [
                                            createVNode(VImg, {
                                              src: card.image,
                                              "max-width": "90",
                                              width: "auto",
                                              height: 25
                                            }, null, 8, ["src"]),
                                            createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                              createVNode("div", null, toDisplayString(card.name), 1),
                                              card.isPrimary ? (openBlock(), createBlock(VChip, {
                                                key: 0,
                                                color: "primary",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Primary ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                            createVNode("div", { class: "order-sm-0 order-1" }, [
                                              createVNode(VBtn, {
                                                variant: "outlined",
                                                class: "me-4",
                                                size: "small",
                                                onClick: ($event) => openEditCardDialog(card)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Edit ")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode(VBtn, {
                                                color: "error",
                                                size: "small",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Delete ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                return createVNode(VCard, {
                                  key: card.name,
                                  border: "",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-no-wrap" }, [
                                          createVNode(VImg, {
                                            src: card.image,
                                            "max-width": "90",
                                            width: "auto",
                                            height: 25
                                          }, null, 8, ["src"]),
                                          createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                            createVNode("div", null, toDisplayString(card.name), 1),
                                            card.isPrimary ? (openBlock(), createBlock(VChip, {
                                              key: 0,
                                              color: "primary",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Primary ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                          createVNode("div", { class: "order-sm-0 order-1" }, [
                                            createVNode(VBtn, {
                                              variant: "outlined",
                                              class: "me-4",
                                              size: "small",
                                              onClick: ($event) => openEditCardDialog(card)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Edit ")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(VBtn, {
                                              color: "error",
                                              size: "small",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Delete ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                    createVNode(VCard, { title: "Payment Methods" }, {
                      append: withCtx(() => [
                        createVNode(VBtn, {
                          size: "small",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add Card ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                              return createVNode(VCard, {
                                key: card.name,
                                border: "",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-no-wrap" }, [
                                        createVNode(VImg, {
                                          src: card.image,
                                          "max-width": "90",
                                          width: "auto",
                                          height: 25
                                        }, null, 8, ["src"]),
                                        createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                          createVNode("div", null, toDisplayString(card.name), 1),
                                          card.isPrimary ? (openBlock(), createBlock(VChip, {
                                            key: 0,
                                            color: "primary",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Primary ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                        createVNode("div", { class: "order-sm-0 order-1" }, [
                                          createVNode(VBtn, {
                                            variant: "outlined",
                                            class: "me-4",
                                            size: "small",
                                            onClick: ($event) => openEditCardDialog(card)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Edit ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "error",
                                            size: "small",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Delete ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
                  _push3(ssrRenderComponent(VCard, { title: "Billing Address" }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          size: "small",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Edit Address `);
                            } else {
                              return [
                                createTextVNode(" Edit Address ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            size: "small",
                            "prepend-icon": "ri-add-line",
                            onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit Address ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTable, { class: "billing-address-table" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> Company Name: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.companyName)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> Billing Email: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2 text-wrap"${_scopeId7}>${ssrInterpolate(currentBillingAddress.billingEmail)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> Tax ID: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.taxID)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> VAT Number: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.vatNumber)}</p></td></tr><tr${_scopeId7}><td class="d-flex align-baseline"${_scopeId7}><h6 class="text-h6 text-no-wrap"${_scopeId7}> Billing Address: </h6></td><td${_scopeId7}><p class="text-body-1 mb-0"${_scopeId7}>${ssrInterpolate(currentBillingAddress.address)}</p></td></tr>`);
                                              } else {
                                                return [
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", { class: "d-flex align-baseline" }, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTable, { class: "billing-address-table" }, {
                                              default: withCtx(() => [
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", { class: "d-flex align-baseline" }, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                                  ])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTable, { class: "billing-address-table" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> Contact: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.contact)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> Country: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.country)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap mb-2"${_scopeId7}> State: </h6></td><td${_scopeId7}><p class="text-body-1 mb-2"${_scopeId7}>${ssrInterpolate(currentBillingAddress.state)}</p></td></tr><tr${_scopeId7}><td${_scopeId7}><h6 class="text-h6 text-no-wrap"${_scopeId7}> Zip Code: </h6></td><td${_scopeId7}><p class="text-body-1 mb-0"${_scopeId7}>${ssrInterpolate(currentBillingAddress.zipCode)}</p></td></tr>`);
                                              } else {
                                                return [
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                                    ])
                                                  ]),
                                                  createVNode("tr", null, [
                                                    createVNode("td", null, [
                                                      createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                                    ]),
                                                    createVNode("td", null, [
                                                      createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTable, { class: "billing-address-table" }, {
                                              default: withCtx(() => [
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                                  ])
                                                ]),
                                                createVNode("tr", null, [
                                                  createVNode("td", null, [
                                                    createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                                  ]),
                                                  createVNode("td", null, [
                                                    createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
                                                  ])
                                                ])
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
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTable, { class: "billing-address-table" }, {
                                            default: withCtx(() => [
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "d-flex align-baseline" }, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTable, { class: "billing-address-table" }, {
                                            default: withCtx(() => [
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                                ])
                                              ]),
                                              createVNode("tr", null, [
                                                createVNode("td", null, [
                                                  createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                                ]),
                                                createVNode("td", null, [
                                                  createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
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
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTable, { class: "billing-address-table" }, {
                                          default: withCtx(() => [
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "d-flex align-baseline" }, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTable, { class: "billing-address-table" }, {
                                          default: withCtx(() => [
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                              ])
                                            ]),
                                            createVNode("tr", null, [
                                              createVNode("td", null, [
                                                createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                              ]),
                                              createVNode("td", null, [
                                                createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
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
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, { class: "billing-address-table" }, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "d-flex align-baseline" }, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTable, { class: "billing-address-table" }, {
                                        default: withCtx(() => [
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                            ])
                                          ]),
                                          createVNode("tr", null, [
                                            createVNode("td", null, [
                                              createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                            ]),
                                            createVNode("td", null, [
                                              createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
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
                    createVNode(VCard, { title: "Billing Address" }, {
                      append: withCtx(() => [
                        createVNode(VBtn, {
                          size: "small",
                          "prepend-icon": "ri-add-line",
                          onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit Address ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, { class: "billing-address-table" }, {
                                      default: withCtx(() => [
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "d-flex align-baseline" }, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTable, { class: "billing-address-table" }, {
                                      default: withCtx(() => [
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                          ])
                                        ]),
                                        createVNode("tr", null, [
                                          createVNode("td", null, [
                                            createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                          ]),
                                          createVNode("td", null, [
                                            createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
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
                  createVNode(VCard, { title: "Current Plan" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 mb-1" }, " Your Current Plan is Basic "),
                                  createVNode("p", null, "A simple start for everyone"),
                                  createVNode("h6", { class: "text-h6 mb-1" }, " Active until Dec 09, 2021 "),
                                  createVNode("p", null, "We will send you a notification upon Subscription expiration"),
                                  createVNode("h6", { class: "text-h6 mb-1" }, [
                                    createVNode("span", { class: "me-2" }, "$199 Per Month"),
                                    createVNode(VChip, {
                                      color: "primary",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Popular ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", { class: "mb-0" }, " Standard plan for small to medium businesses ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VAlert, {
                                    color: "warning",
                                    variant: "tonal",
                                    icon: "ri-alert-line",
                                    closable: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAlertTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("We need your attention!")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, "Your plan requires update")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-flex justify-space-between font-weight-bold mt-4 mb-1" }, [
                                    createVNode("h6", { class: "text-h6" }, " Days "),
                                    createVNode("h6", { class: "text-h6" }, " 26 of 30 Days ")
                                  ]),
                                  createVNode(VProgressLinear, {
                                    rounded: "",
                                    color: "primary",
                                    height: 10,
                                    "model-value": 75
                                  }),
                                  createVNode("p", { class: "text-sm mt-1" }, " Your plan requires update ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode(VBtn, {
                                      onClick: ($event) => isUpgradePlanDialogVisible.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" upgrade plan ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "error",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Cancel Subscription ")
                                      ]),
                                      _: 1
                                    })
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "Payment Methods" }, {
                    append: withCtx(() => [
                      createVNode(VBtn, {
                        size: "small",
                        "prepend-icon": "ri-add-line",
                        onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add Card ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column gap-y-4" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                            return createVNode(VCard, {
                              key: card.name,
                              border: "",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "d-flex flex-sm-row flex-column justify-space-between align-sm-center gap-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-no-wrap" }, [
                                      createVNode(VImg, {
                                        src: card.image,
                                        "max-width": "90",
                                        width: "auto",
                                        height: 25
                                      }, null, 8, ["src"]),
                                      createVNode("h6", { class: "text-h6 my-2 d-flex gap-2 align-center" }, [
                                        createVNode("div", null, toDisplayString(card.name), 1),
                                        card.isPrimary ? (openBlock(), createBlock(VChip, {
                                          key: 0,
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Primary ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      createVNode("span", { class: "text-body-1" }, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex flex-column text-sm-end gap-4" }, [
                                      createVNode("div", { class: "order-sm-0 order-1" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          class: "me-4",
                                          size: "small",
                                          onClick: ($event) => openEditCardDialog(card)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Edit ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "error",
                                          size: "small",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Delete ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("span", { class: "text-body-2 order-sm-1 order-0" }, "Card expires at " + toDisplayString(card.expiry), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
                  createVNode(VCard, { title: "Billing Address" }, {
                    append: withCtx(() => [
                      createVNode(VBtn, {
                        size: "small",
                        "prepend-icon": "ri-add-line",
                        onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Edit Address ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTable, { class: "billing-address-table" }, {
                                    default: withCtx(() => [
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Company Name: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.companyName), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Billing Email: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2 text-wrap" }, toDisplayString(currentBillingAddress.billingEmail), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Tax ID: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.taxID), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " VAT Number: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.vatNumber), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "d-flex align-baseline" }, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap" }, " Billing Address: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.address), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTable, { class: "billing-address-table" }, {
                                    default: withCtx(() => [
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Contact: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.contact), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " Country: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.country), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap mb-2" }, " State: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-2" }, toDisplayString(currentBillingAddress.state), 1)
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", null, [
                                          createVNode("h6", { class: "text-h6 text-no-wrap" }, " Zip Code: ")
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("p", { class: "text-body-1 mb-0" }, toDisplayString(currentBillingAddress.zipCode), 1)
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
      _push(ssrRenderComponent(_component_CardAddEditDialog, {
        isDialogVisible: unref(isCardEditDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
        "card-details": unref(currentCardDetails)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CardAddEditDialog, {
        isDialogVisible: unref(isCardAddDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddEditAddressDialog, {
        isDialogVisible: unref(isEditAddressDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null,
        "billing-address": editBillingData
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserTabBillingsPlans.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "UserTabConnections",
  __ssrInlineRender: true,
  setup(__props) {
    const connectedAccounts = ref([
      {
        img: google,
        title: "Google",
        text: "Calendar and contacts",
        connected: true
      },
      {
        img: slack,
        title: "Slack",
        text: "Communication",
        connected: false
      },
      {
        img: github,
        title: "GitHub",
        text: "Manage your Git repositories",
        connected: true
      },
      {
        img: mailchimp,
        title: "Mailchimp",
        text: "Email marketing service",
        connected: false
      },
      {
        img: asana,
        title: "Asana",
        text: "Communication",
        connected: false
      }
    ]);
    const socialAccounts = ref([
      {
        img: facebook,
        title: "Facebook",
        connected: false
      },
      {
        img: twitter,
        title: "Twitter",
        link: "https://twitter.com/pixinvents",
        username: "@Pixinvent",
        connected: true
      },
      {
        img: linkedin,
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/pixinvent",
        username: "@Pixinvent",
        connected: true
      },
      {
        img: dribbleLogo,
        title: "Dribbble",
        connected: false
      },
      {
        img: behance,
        title: "Behance",
        connected: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "Connected Accounts",
                    subtitle: "Display content from your connected accounts on your site"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(connectedAccounts), (account) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: account.title
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              start: "",
                                              size: 36,
                                              image: account.img,
                                              class: "me-1"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                start: "",
                                                size: 36,
                                                image: account.img,
                                                class: "me-1"
                                              }, null, 8, ["image"])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSwitch, {
                                              modelValue: account.connected,
                                              "onUpdate:modelValue": ($event) => account.connected = $event,
                                              density: "compact",
                                              class: "me-1"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSwitch, {
                                                modelValue: account.connected,
                                                "onUpdate:modelValue": ($event) => account.connected = $event,
                                                density: "compact",
                                                class: "me-1"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(account.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(account.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(account.text)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(account.text), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(account.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(account.text), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (account) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: account.title
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              start: "",
                                              size: 36,
                                              image: account.img,
                                              class: "me-1"
                                            }, null, 8, ["image"])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: account.connected,
                                              "onUpdate:modelValue": ($event) => account.connected = $event,
                                              density: "compact",
                                              class: "me-1"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(account.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(account.text), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (account) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: account.title
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            start: "",
                                            size: 36,
                                            image: account.img,
                                            class: "me-1"
                                          }, null, 8, ["image"])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VSwitch, {
                                            modelValue: account.connected,
                                            "onUpdate:modelValue": ($event) => account.connected = $event,
                                            density: "compact",
                                            class: "me-1"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(account.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(account.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (account) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: account.title
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          start: "",
                                          size: 36,
                                          image: account.img,
                                          class: "me-1"
                                        }, null, 8, ["image"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VSwitch, {
                                          modelValue: account.connected,
                                          "onUpdate:modelValue": ($event) => account.connected = $event,
                                          density: "compact",
                                          class: "me-1"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(VCard, {
                      title: "Connected Accounts",
                      subtitle: "Display content from your connected accounts on your site"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (account) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: account.title
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        start: "",
                                        size: 36,
                                        image: account.img,
                                        class: "me-1"
                                      }, null, 8, ["image"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VSwitch, {
                                        modelValue: account.connected,
                                        "onUpdate:modelValue": ($event) => account.connected = $event,
                                        density: "compact",
                                        class: "me-1"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.text), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
                    title: "Social Accounts",
                    subtitle: "Display content from social accounts on your site"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, { class: "card-list" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(socialAccounts), (account) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: account.title
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VAvatar, {
                                              start: "",
                                              size: "36",
                                              rounded: "0",
                                              image: account.img,
                                              class: "me-1"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VAvatar, {
                                                start: "",
                                                size: "36",
                                                rounded: "0",
                                                image: account.img,
                                                class: "me-1"
                                              }, null, 8, ["image"])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              color: account.connected ? "error" : "secondary",
                                              variant: "outlined",
                                              class: "rounded"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                                    }, null, 8, ["icon"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VBtn, {
                                                icon: "",
                                                color: account.connected ? "error" : "secondary",
                                                variant: "outlined",
                                                class: "rounded"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                                  }, null, 8, ["icon"])
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(account.title)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(account.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            if (account.connected) {
                                              _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<a${ssrRenderAttr("href", account.link)} target="_blank" rel="noopener noreferrer" class="text-base text-primary" data-v-225c2a60${_scopeId7}>${ssrInterpolate(account.username)}</a>`);
                                                  } else {
                                                    return [
                                                      createVNode("a", {
                                                        href: account.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        class: "text-base text-primary"
                                                      }, toDisplayString(account.username), 9, ["href"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(ssrRenderComponent(VListItemSubtitle, { class: "text-body-1" }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Not connected `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Not connected ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            }
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(account.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                                default: withCtx(() => [
                                                  createVNode("a", {
                                                    href: account.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    class: "text-base text-primary"
                                                  }, toDisplayString(account.username), 9, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                                key: 1,
                                                class: "text-body-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Not connected ")
                                                ]),
                                                _: 1
                                              }))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (account) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: account.title
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              start: "",
                                              size: "36",
                                              rounded: "0",
                                              image: account.img,
                                              class: "me-1"
                                            }, null, 8, ["image"])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VBtn, {
                                              icon: "",
                                              color: account.connected ? "error" : "secondary",
                                              variant: "outlined",
                                              class: "rounded"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(account.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode("a", {
                                                  href: account.link,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  class: "text-base text-primary"
                                                }, toDisplayString(account.username), 9, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                              key: 1,
                                              class: "text-body-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Not connected ")
                                              ]),
                                              _: 1
                                            }))
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (account) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: account.title
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            start: "",
                                            size: "36",
                                            rounded: "0",
                                            image: account.img,
                                            class: "me-1"
                                          }, null, 8, ["image"])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VBtn, {
                                            icon: "",
                                            color: account.connected ? "error" : "secondary",
                                            variant: "outlined",
                                            class: "rounded"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(account.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                            default: withCtx(() => [
                                              createVNode("a", {
                                                href: account.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                class: "text-base text-primary"
                                              }, toDisplayString(account.username), 9, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                            key: 1,
                                            class: "text-body-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Not connected ")
                                            ]),
                                            _: 1
                                          }))
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (account) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: account.title
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          start: "",
                                          size: "36",
                                          rounded: "0",
                                          image: account.img,
                                          class: "me-1"
                                        }, null, 8, ["image"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VBtn, {
                                          icon: "",
                                          color: account.connected ? "error" : "secondary",
                                          variant: "outlined",
                                          class: "rounded"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(account.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode("a", {
                                              href: account.link,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              class: "text-base text-primary"
                                            }, toDisplayString(account.username), 9, ["href"])
                                          ]),
                                          _: 2
                                        }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                          key: 1,
                                          class: "text-body-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Not connected ")
                                          ]),
                                          _: 1
                                        }))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                    createVNode(VCard, {
                      title: "Social Accounts",
                      subtitle: "Display content from social accounts on your site"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, { class: "card-list" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (account) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: account.title
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        start: "",
                                        size: "36",
                                        rounded: "0",
                                        image: account.img,
                                        class: "me-1"
                                      }, null, 8, ["image"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        icon: "",
                                        color: account.connected ? "error" : "secondary",
                                        variant: "outlined",
                                        class: "rounded"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(account.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                        default: withCtx(() => [
                                          createVNode("a", {
                                            href: account.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            class: "text-base text-primary"
                                          }, toDisplayString(account.username), 9, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                        key: 1,
                                        class: "text-body-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Not connected ")
                                        ]),
                                        _: 1
                                      }))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    title: "Connected Accounts",
                    subtitle: "Display content from your connected accounts on your site"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (account) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: account.title
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      start: "",
                                      size: 36,
                                      image: account.img,
                                      class: "me-1"
                                    }, null, 8, ["image"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VSwitch, {
                                      modelValue: account.connected,
                                      "onUpdate:modelValue": ($event) => account.connected = $event,
                                      density: "compact",
                                      class: "me-1"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, { class: "text-body-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
                    title: "Social Accounts",
                    subtitle: "Display content from social accounts on your site"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, { class: "card-list" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (account) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: account.title
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      start: "",
                                      size: "36",
                                      rounded: "0",
                                      image: account.img,
                                      class: "me-1"
                                    }, null, 8, ["image"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      icon: "",
                                      color: account.connected ? "error" : "secondary",
                                      variant: "outlined",
                                      class: "rounded"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: account.connected ? "ri-delete-bin-7-line" : "ri-link"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(account.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    account.connected ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                      default: withCtx(() => [
                                        createVNode("a", {
                                          href: account.link,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          class: "text-base text-primary"
                                        }, toDisplayString(account.username), 9, ["href"])
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock(VListItemSubtitle, {
                                      key: 1,
                                      class: "text-body-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Not connected ")
                                      ]),
                                      _: 1
                                    }))
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserTabConnections.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UserTabConnections = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-225c2a60"]]);
const _sfc_main$4 = {
  __name: "UserTabNotifications",
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
            _push2(ssrRenderComponent(VCardText, { class: "py-4" }, {
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
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap rounded-0 text-high-emphasis" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th scope="col"${_scopeId2}> TYPE </th><th scope="col"${_scopeId2}> EMAIL </th><th scope="col"${_scopeId2}> BROWSER </th><th scope="col"${_scopeId2}> APP </th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(notifications), (notification) => {
                    _push3(`<tr${_scopeId2}><td${_scopeId2}>${ssrInterpolate(notification.type)}</td><td${_scopeId2}>`);
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
                          createVNode("td", null, toDisplayString(notification.type), 1),
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
              createVNode(VCardText, { class: "py-4" }, {
                default: withCtx(() => [
                  createVNode("h6", { class: "text-h6" }, " You will receive notification for the below selected items. ")
                ]),
                _: 1
              }),
              createVNode(VTable, { class: "text-no-wrap rounded-0 text-high-emphasis" }, {
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
                        createVNode("td", null, toDisplayString(notification.type), 1),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserTabNotifications.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "UserInvoiceTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedStatus = ref();
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
    const isLoading = ref(false);
    const headers = [
      {
        title: "#",
        key: "id"
      },
      {
        title: "Trending",
        key: "trending",
        sortable: false
      },
      {
        title: "Total",
        key: "total"
      },
      {
        title: "Issued Date",
        key: "date",
        width: "150px"
      },
      {
        title: "Actions",
        key: "actions",
        sortable: false,
        width: "150px"
      }
    ];
    const {
      data: invoiceData,
      execute: fetchInvoices
    } = ([__temp, __restore] = withAsyncContext(() => useApi(createUrl("/apps/invoice", {
      query: {
        q: searchQuery,
        status: selectedStatus,
        itemsPerPage,
        page,
        sortBy,
        orderBy
      }
    }))), __temp = await __temp, __restore(), __temp);
    const invoices = computed(() => {
      var _a;
      return (_a = invoiceData.value) == null ? void 0 : _a.invoices;
    });
    const totalInvoices = computed(() => {
      var _a;
      return (_a = invoiceData.value) == null ? void 0 : _a.totalInvoices;
    });
    const resolveInvoiceBalanceVariant = (balance, total) => {
      if (balance === total)
        return {
          status: "Unpaid",
          chip: { color: "error" }
        };
      if (balance === 0)
        return {
          status: "Paid",
          chip: { color: "success" }
        };
      return {
        status: balance,
        chip: { variant: "text" }
      };
    };
    const resolveInvoiceStatusVariantAndIcon = (status) => {
      if (status === "Partial Payment")
        return {
          variant: "warning",
          icon: "ri-line-chart-line"
        };
      if (status === "Paid")
        return {
          variant: "success",
          icon: "ri-check-line"
        };
      if (status === "Downloaded")
        return {
          variant: "info",
          icon: "ri-arrow-down-line"
        };
      if (status === "Draft")
        return {
          variant: "secondary",
          icon: "ri-save-line"
        };
      if (status === "Sent")
        return {
          variant: "primary",
          icon: "ri-mail-line"
        };
      if (status === "Past Due")
        return {
          variant: "error",
          icon: "ri-error-warning-line"
        };
      return {
        variant: "secondary",
        icon: "ri-close-line"
      };
    };
    const computedMoreList = computed(() => {
      return (paramId) => [
        {
          title: "Download",
          value: "download",
          prependIcon: "ri-download-line"
        },
        {
          title: "Edit",
          value: "edit",
          prependIcon: "ri-pencil-line",
          to: {
            name: "apps-invoice-edit-id",
            params: { id: paramId }
          }
        },
        {
          title: "Duplicate",
          value: "duplicate",
          prependIcon: "ri-stack-line"
        }
      ];
    });
    const deleteInvoice = async (id) => {
      await $api(`/apps/invoice/${id}`, { method: "DELETE" });
      fetchInvoices();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_IconBtn = resolveComponent("IconBtn");
      if (unref(invoices)) {
        _push(`<section${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(VCard, {
          id: "invoice-list",
          title: " Invoice List"
        }, {
          append: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Export `);
                    _push3(ssrRenderComponent(VIcon, {
                      end: "",
                      class: "flip-in-rtl",
                      icon: "ri-arrow-right-line"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" Export "),
                      createVNode(VIcon, {
                        end: "",
                        class: "flip-in-rtl",
                        icon: "ri-arrow-right-line"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, null, {
                  default: withCtx(() => [
                    createTextVNode(" Export "),
                    createVNode(VIcon, {
                      end: "",
                      class: "flip-in-rtl",
                      icon: "ri-arrow-right-line"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VDataTableServer, {
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                loading: unref(isLoading),
                "items-length": unref(totalInvoices),
                headers,
                items: unref(invoices),
                "item-value": "id",
                class: "text-no-wrap text-sm rounded-0",
                "onUpdate:options": updateOptions
              }, {
                "header.trending": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "22",
                      icon: "ri-arrow-up-line"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "22",
                        icon: "ri-arrow-up-line"
                      })
                    ];
                  }
                }),
                "item.id": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_RouterLink, {
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` #${ssrInterpolate(item.id)}`);
                        } else {
                          return [
                            createTextVNode(" #" + toDisplayString(item.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_RouterLink, {
                        to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" #" + toDisplayString(item.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                "item.trending": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VTooltip, null, {
                      activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAvatar, mergeProps({ size: 28 }, props, {
                            color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                            variant: "tonal"
                          }), {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: 16,
                                  icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    size: 16,
                                    icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                              color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                              variant: "tonal"
                            }), {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: 16,
                                  icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1040, ["color"])
                          ];
                        }
                      }),
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="mb-0"${_scopeId3}>${ssrInterpolate(item.invoiceStatus)}</p><p class="mb-0"${_scopeId3}> Balance: ${ssrInterpolate(item.balance)}</p><p class="mb-0"${_scopeId3}> Due date: ${ssrInterpolate(item.dueDate)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                            createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                            createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VTooltip, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                            color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                            variant: "tonal"
                          }), {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: 16,
                                icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1040, ["color"])
                        ]),
                        default: withCtx(() => [
                          createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                          createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                          createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                "item.total": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` $${ssrInterpolate(item.total)}`);
                  } else {
                    return [
                      createTextVNode(" $" + toDisplayString(item.total), 1)
                    ];
                  }
                }),
                "item.date": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.issuedDate)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.issuedDate), 1)
                    ];
                  }
                }),
                "item.balance": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string") {
                      _push3(ssrRenderComponent(VChip, {
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(resolveInvoiceBalanceVariant(item.balance, item.total).status)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<span class="text-sm text-high-emphasis"${_scopeId2}>${ssrInterpolate(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`)}</span>`);
                    }
                  } else {
                    return [
                      typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string" ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-sm text-high-emphasis"
                      }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                    ];
                  }
                }),
                "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => deleteInvoice(item.id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-delete-bin-7-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      size: "small",
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-eye-line" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-eye-line" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_IconBtn, { size: "small" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "ri-more-2-line" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VMenu, { activator: "parent" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, {
                                  items: unref(computedMoreList)(item.id),
                                  "item-props": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, {
                                    items: unref(computedMoreList)(item.id),
                                    "item-props": ""
                                  }, null, 8, ["items"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "ri-more-2-line" }),
                            createVNode(VMenu, { activator: "parent" }, {
                              default: withCtx(() => [
                                createVNode(VList, {
                                  items: unref(computedMoreList)(item.id),
                                  "item-props": ""
                                }, null, 8, ["items"])
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
                      createVNode(_component_IconBtn, {
                        size: "small",
                        onClick: ($event) => deleteInvoice(item.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_IconBtn, {
                        size: "small",
                        to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-eye-line" })
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode(_component_IconBtn, { size: "small" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-more-2-line" }),
                          createVNode(VMenu, { activator: "parent" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                items: unref(computedMoreList)(item.id),
                                "item-props": ""
                              }, null, 8, ["items"])
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
                    _push3(`</div><p class="d-flex align-center text-base text-high-emphasis me-2 mb-0"${_scopeId2}>${ssrInterpolate(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices)))}</p><div class="d-flex gap-x-2 align-center me-2"${_scopeId2}>`);
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
                      disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                      onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
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
                        createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices))), 1),
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
                            disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                            onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
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
                createVNode(VDataTableServer, {
                  "items-per-page": unref(itemsPerPage),
                  "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                  page: unref(page),
                  "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                  loading: unref(isLoading),
                  "items-length": unref(totalInvoices),
                  headers,
                  items: unref(invoices),
                  "item-value": "id",
                  class: "text-no-wrap text-sm rounded-0",
                  "onUpdate:options": updateOptions
                }, {
                  "header.trending": withCtx(() => [
                    createVNode(VIcon, {
                      size: "22",
                      icon: "ri-arrow-up-line"
                    })
                  ]),
                  "item.id": withCtx(({ item }) => [
                    createVNode(_component_RouterLink, {
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" #" + toDisplayString(item.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  "item.trending": withCtx(({ item }) => [
                    createVNode(VTooltip, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(VAvatar, mergeProps({ size: 28 }, props, {
                          color: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant,
                          variant: "tonal"
                        }), {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: 16,
                              icon: resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1040, ["color"])
                      ]),
                      default: withCtx(() => [
                        createVNode("p", { class: "mb-0" }, toDisplayString(item.invoiceStatus), 1),
                        createVNode("p", { class: "mb-0" }, " Balance: " + toDisplayString(item.balance), 1),
                        createVNode("p", { class: "mb-0" }, " Due date: " + toDisplayString(item.dueDate), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  "item.total": withCtx(({ item }) => [
                    createTextVNode(" $" + toDisplayString(item.total), 1)
                  ]),
                  "item.date": withCtx(({ item }) => [
                    createTextVNode(toDisplayString(item.issuedDate), 1)
                  ]),
                  "item.balance": withCtx(({ item }) => [
                    typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string" ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-sm text-high-emphasis"
                    }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                  ]),
                  "item.actions": withCtx(({ item }) => [
                    createVNode(_component_IconBtn, {
                      size: "small",
                      onClick: ($event) => deleteInvoice(item.id)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-delete-bin-7-line" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-eye-line" })
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode(_component_IconBtn, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-more-2-line" }),
                        createVNode(VMenu, { activator: "parent" }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              items: unref(computedMoreList)(item.id),
                              "item-props": ""
                            }, null, 8, ["items"])
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
                      createVNode("p", { class: "d-flex align-center text-base text-high-emphasis me-2 mb-0" }, toDisplayString(("paginationMeta" in _ctx ? _ctx.paginationMeta : unref(paginationMeta))({ page: unref(page), itemsPerPage: unref(itemsPerPage) }, unref(totalInvoices))), 1),
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
                          disabled: unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)),
                          onClick: ($event) => unref(page) >= Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) ? page.value = Math.ceil(unref(totalInvoices) / unref(itemsPerPage)) : page.value++
                        }, null, 8, ["disabled", "onClick"])
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "loading", "items-length", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserInvoiceTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "UserTabOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const projectTableHeaders = [
      {
        title: "PROJECT",
        key: "name"
      },
      {
        title: "TOTAL TASK",
        key: "totalTask"
      },
      {
        title: "PROGRESS",
        key: "progress"
      },
      {
        title: "HOURS",
        key: "hours"
      }
    ];
    const projects = [
      {
        logo: react,
        name: "BGC eCommerce App",
        project: "React Project",
        totalTask: "122/240",
        progress: 78,
        hours: "18:42"
      },
      {
        logo: figma,
        name: "Falcon Logo Design",
        project: "Figma Project",
        totalTask: "09/56",
        progress: 18,
        hours: "20:42"
      },
      {
        logo: vue,
        name: "Dashboard Design",
        project: "Vuejs Project",
        totalTask: "290/320",
        progress: 62,
        hours: "120:87"
      },
      {
        logo: xamarin,
        name: "Foodista mobile app",
        project: "Xamarin Project",
        totalTask: "290/320",
        progress: 8,
        hours: "120:87"
      },
      {
        logo: python,
        name: "Dojo Email App",
        project: "Python Project",
        totalTask: "120/186",
        progress: 49,
        hours: "230:10"
      },
      {
        logo: sketch,
        name: "Blockchain Website",
        project: "Sketch Project",
        totalTask: "99/109",
        progress: 92,
        hours: "342:41"
      },
      {
        logo: html5,
        name: "Hoffman Website",
        project: "HTML Project",
        totalTask: "98/110",
        progress: 88,
        hours: "12:45"
      }
    ];
    const resolveUserProgressVariant = (progress) => {
      if (progress <= 25)
        return "error";
      if (progress > 25 && progress <= 50)
        return "warning";
      if (progress > 50 && progress <= 75)
        return "primary";
      if (progress > 75 && progress <= 100)
        return "success";
      return "secondary";
    };
    const search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-space-between align-center flex-wrap gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Project List`);
                                  } else {
                                    return [
                                      createTextVNode("Project List")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div style="${ssrRenderStyle({ "inline-size": "15.625rem" })}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                placeholder: "Search Project",
                                density: "compact",
                                style: { "inline-size": "15.625rem" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Project List")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                                    createVNode(VTextField, {
                                      modelValue: unref(search),
                                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                      placeholder: "Search Project",
                                      density: "compact",
                                      style: { "inline-size": "15.625rem" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDataTable, {
                          search: unref(search),
                          headers: projectTableHeaders,
                          items: projects,
                          "item-value": "name",
                          class: "text-no-wrap rounded-0"
                        }, {
                          "item.name": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                size: 34,
                                class: "me-3",
                                image: item.logo
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><h6 class="text-h6 mb-0"${_scopeId4}>${ssrInterpolate(item.name)}</h6><p class="text-sm text-medium-emphasis mb-0"${_scopeId4}>${ssrInterpolate(item.project)}</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    size: 34,
                                    class: "me-3",
                                    image: item.logo
                                  }, null, 8, ["image"]),
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-0" }, toDisplayString(item.name), 1),
                                    createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.project), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          "item.totalTask": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-high-emphasis"${_scopeId4}>${ssrInterpolate(item.totalTask)}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.totalTask), 1)
                              ];
                            }
                          }),
                          "item.progress": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-high-emphasis text-body-1"${_scopeId4}>${ssrInterpolate(item.progress)}% </div>`);
                              _push5(ssrRenderComponent(VProgressLinear, {
                                height: 6,
                                "model-value": item.progress,
                                rounded: "",
                                color: resolveUserProgressVariant(item.progress)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-high-emphasis text-body-1" }, toDisplayString(item.progress) + "% ", 1),
                                createVNode(VProgressLinear, {
                                  height: 6,
                                  "model-value": item.progress,
                                  rounded: "",
                                  color: resolveUserProgressVariant(item.progress)
                                }, null, 8, ["model-value", "color"])
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
                          createVNode(VCardItem, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Project List")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(search),
                                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                    placeholder: "Search Project",
                                    density: "compact",
                                    style: { "inline-size": "15.625rem" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VDataTable, {
                            search: unref(search),
                            headers: projectTableHeaders,
                            items: projects,
                            "item-value": "name",
                            class: "text-no-wrap rounded-0"
                          }, {
                            "item.name": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  size: 34,
                                  class: "me-3",
                                  image: item.logo
                                }, null, 8, ["image"]),
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-0" }, toDisplayString(item.name), 1),
                                  createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.project), 1)
                                ])
                              ])
                            ]),
                            "item.totalTask": withCtx(({ item }) => [
                              createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.totalTask), 1)
                            ]),
                            "item.progress": withCtx(({ item }) => [
                              createVNode("div", { class: "text-high-emphasis text-body-1" }, toDisplayString(item.progress) + "% ", 1),
                              createVNode(VProgressLinear, {
                                height: 6,
                                "model-value": item.progress,
                                rounded: "",
                                color: resolveUserProgressVariant(item.progress)
                              }, null, 8, ["model-value", "color"])
                            ]),
                            bottom: withCtx(() => []),
                            _: 1
                          }, 8, ["search"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Project List")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                                createVNode(VTextField, {
                                  modelValue: unref(search),
                                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                  placeholder: "Search Project",
                                  density: "compact",
                                  style: { "inline-size": "15.625rem" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VDataTable, {
                          search: unref(search),
                          headers: projectTableHeaders,
                          items: projects,
                          "item-value": "name",
                          class: "text-no-wrap rounded-0"
                        }, {
                          "item.name": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                size: 34,
                                class: "me-3",
                                image: item.logo
                              }, null, 8, ["image"]),
                              createVNode("div", null, [
                                createVNode("h6", { class: "text-h6 mb-0" }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.project), 1)
                              ])
                            ])
                          ]),
                          "item.totalTask": withCtx(({ item }) => [
                            createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.totalTask), 1)
                          ]),
                          "item.progress": withCtx(({ item }) => [
                            createVNode("div", { class: "text-high-emphasis text-body-1" }, toDisplayString(item.progress) + "% ", 1),
                            createVNode(VProgressLinear, {
                              height: 6,
                              "model-value": item.progress,
                              rounded: "",
                              color: resolveUserProgressVariant(item.progress)
                            }, null, 8, ["model-value", "color"])
                          ]),
                          bottom: withCtx(() => []),
                          _: 1
                        }, 8, ["search"])
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
                  _push3(ssrRenderComponent(VCard, { title: "User Activity Timeline" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTimeline, {
                                side: "end",
                                align: "start",
                                "line-inset": "9",
                                "truncate-line": "start",
                                density: "compact"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"${_scopeId6}><span class="app-timeline-title"${_scopeId6}> 12 Invoices have been paid </span><span class="app-timeline-meta"${_scopeId6}>12 min ago</span></div><div class="app-timeline-text mt-1"${_scopeId6}> Invoices have been paid to the company </div><div class="d-inline-flex align-center timeline-chip my-2"${_scopeId6}><img${ssrRenderAttr("src", unref(pdf))} height="20" class="me-2" alt="img"${_scopeId6}><span class="app-timeline-text font-weight-medium"${_scopeId6}> invoices.pdf </span></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                              createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                              createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                            ]),
                                            createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                            createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                              createVNode("img", {
                                                src: unref(pdf),
                                                height: "20",
                                                class: "me-2",
                                                alt: "img"
                                              }, null, 8, ["src"]),
                                              createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      size: "x-small",
                                      "dot-color": "success"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId6}><div class="app-timeline-title"${_scopeId6}> Client Meeting </div><span class="app-timeline-meta"${_scopeId6}>45 min ago</span></div><div class="app-timeline-text mt-1"${_scopeId6}> Project meeting with john @10:15am </div><div class="d-flex justify-space-between align-center flex-wrap"${_scopeId6}><div class="d-flex align-center my-2"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VAvatar, {
                                            size: "32",
                                            class: "me-2",
                                            image: unref(avatar2)
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex flex-column"${_scopeId6}><p class="text-sm font-weight-medium text-medium-emphasis mb-0"${_scopeId6}> Lester McCarthy (Client) </p><span class="text-sm"${_scopeId6}>CEO of Pixinvent</span></div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                              createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                              createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                            ]),
                                            createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                              createVNode("div", { class: "d-flex align-center my-2" }, [
                                                createVNode(VAvatar, {
                                                  size: "32",
                                                  class: "me-2",
                                                  image: unref(avatar2)
                                                }, null, 8, ["image"]),
                                                createVNode("div", { class: "d-flex flex-column" }, [
                                                  createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                                  createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                                ])
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTimelineItem, {
                                      size: "x-small",
                                      "dot-color": "info"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex justify-space-between align-center flex-wrap mb-2"${_scopeId6}><span class="app-timeline-title"${_scopeId6}> Create a new project for client </span><span class="app-timeline-meta"${_scopeId6}>2 Day Ago</span></div><p class="app-timeline-text mt-1 mb-2"${_scopeId6}> 6 team members in a project </p><div class="v-avatar-group demo-avatar-group"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VAvatar, { size: 40 }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, { src: unref(avatar2) }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` John Doe `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" John Doe ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" John Doe ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VAvatar, { size: 40 }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, { src: unref(avatar2) }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Jennie Obrien `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Jennie Obrien ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Jennie Obrien ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VAvatar, { size: 40 }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, { src: unref(avatar3) }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Peter Harper `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Peter Harper ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Peter Harper ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VAvatar, {
                                            size: 40,
                                            color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` +3 `);
                                              } else {
                                                return [
                                                  createTextVNode(" +3 ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                              createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                              createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                            ]),
                                            createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                            createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                              createVNode(VAvatar, { size: 40 }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" John Doe ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VAvatar, { size: 40 }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Jennie Obrien ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VAvatar, { size: 40 }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                                  createVNode(VTooltip, {
                                                    activator: "parent",
                                                    location: "top"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Peter Harper ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VAvatar, {
                                                size: 40,
                                                color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" +3 ")
                                                ]),
                                                _: 1
                                              }, 8, ["color"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTimelineItem, {
                                        "dot-color": "primary",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                            createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                            createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                          ]),
                                          createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                          createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                            createVNode("img", {
                                              src: unref(pdf),
                                              height: "20",
                                              class: "me-2",
                                              alt: "img"
                                            }, null, 8, ["src"]),
                                            createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        size: "x-small",
                                        "dot-color": "success"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                            createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                            createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                          ]),
                                          createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                            createVNode("div", { class: "d-flex align-center my-2" }, [
                                              createVNode(VAvatar, {
                                                size: "32",
                                                class: "me-2",
                                                image: unref(avatar2)
                                              }, null, 8, ["image"]),
                                              createVNode("div", { class: "d-flex flex-column" }, [
                                                createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                                createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VTimelineItem, {
                                        size: "x-small",
                                        "dot-color": "info"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                            createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                            createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                          ]),
                                          createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                          createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                            createVNode(VAvatar, { size: 40 }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                createVNode(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" John Doe ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VAvatar, { size: 40 }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                                createVNode(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Jennie Obrien ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VAvatar, { size: 40 }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                                createVNode(VTooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Peter Harper ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VAvatar, {
                                              size: 40,
                                              color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" +3 ")
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
                                          ])
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
                                createVNode(VTimeline, {
                                  side: "end",
                                  align: "start",
                                  "line-inset": "9",
                                  "truncate-line": "start",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTimelineItem, {
                                      "dot-color": "primary",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                          createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                          createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                        ]),
                                        createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                        createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                          createVNode("img", {
                                            src: unref(pdf),
                                            height: "20",
                                            class: "me-2",
                                            alt: "img"
                                          }, null, 8, ["src"]),
                                          createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      size: "x-small",
                                      "dot-color": "success"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                          createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                          createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                        ]),
                                        createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                        createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                          createVNode("div", { class: "d-flex align-center my-2" }, [
                                            createVNode(VAvatar, {
                                              size: "32",
                                              class: "me-2",
                                              image: unref(avatar2)
                                            }, null, 8, ["image"]),
                                            createVNode("div", { class: "d-flex flex-column" }, [
                                              createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                              createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VTimelineItem, {
                                      size: "x-small",
                                      "dot-color": "info"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                          createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                          createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                        ]),
                                        createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                        createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                          createVNode(VAvatar, { size: 40 }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" John Doe ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VAvatar, { size: 40 }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Jennie Obrien ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VAvatar, { size: 40 }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                              createVNode(VTooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Peter Harper ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VAvatar, {
                                            size: 40,
                                            color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" +3 ")
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VTimeline, {
                                side: "end",
                                align: "start",
                                "line-inset": "9",
                                "truncate-line": "start",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTimelineItem, {
                                    "dot-color": "primary",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                        createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                        createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                      ]),
                                      createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                      createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                        createVNode("img", {
                                          src: unref(pdf),
                                          height: "20",
                                          class: "me-2",
                                          alt: "img"
                                        }, null, 8, ["src"]),
                                        createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    size: "x-small",
                                    "dot-color": "success"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                        createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                        createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                      ]),
                                      createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                      createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                        createVNode("div", { class: "d-flex align-center my-2" }, [
                                          createVNode(VAvatar, {
                                            size: "32",
                                            class: "me-2",
                                            image: unref(avatar2)
                                          }, null, 8, ["image"]),
                                          createVNode("div", { class: "d-flex flex-column" }, [
                                            createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                            createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VTimelineItem, {
                                    size: "x-small",
                                    "dot-color": "info"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                        createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                        createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                      ]),
                                      createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                      createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                        createVNode(VAvatar, { size: 40 }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" John Doe ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VAvatar, { size: 40 }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Jennie Obrien ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VAvatar, { size: 40 }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                            createVNode(VTooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Peter Harper ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VAvatar, {
                                          size: 40,
                                          color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" +3 ")
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
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
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { title: "User Activity Timeline" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VTimeline, {
                              side: "end",
                              align: "start",
                              "line-inset": "9",
                              "truncate-line": "start",
                              density: "compact"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTimelineItem, {
                                  "dot-color": "primary",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                      createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                      createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                    ]),
                                    createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                    createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                      createVNode("img", {
                                        src: unref(pdf),
                                        height: "20",
                                        class: "me-2",
                                        alt: "img"
                                      }, null, 8, ["src"]),
                                      createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  size: "x-small",
                                  "dot-color": "success"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                      createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                      createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                    ]),
                                    createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                    createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                      createVNode("div", { class: "d-flex align-center my-2" }, [
                                        createVNode(VAvatar, {
                                          size: "32",
                                          class: "me-2",
                                          image: unref(avatar2)
                                        }, null, 8, ["image"]),
                                        createVNode("div", { class: "d-flex flex-column" }, [
                                          createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                          createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTimelineItem, {
                                  size: "x-small",
                                  "dot-color": "info"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                      createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                      createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                    ]),
                                    createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                    createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                      createVNode(VAvatar, { size: 40 }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" John Doe ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VAvatar, { size: 40 }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Jennie Obrien ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VAvatar, { size: 40 }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                          createVNode(VTooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Peter Harper ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VAvatar, {
                                        size: 40,
                                        color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" +3 ")
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap gap-4" }, [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Project List")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { style: { "inline-size": "15.625rem" } }, [
                              createVNode(VTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                                placeholder: "Search Project",
                                density: "compact",
                                style: { "inline-size": "15.625rem" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VDataTable, {
                        search: unref(search),
                        headers: projectTableHeaders,
                        items: projects,
                        "item-value": "name",
                        class: "text-no-wrap rounded-0"
                      }, {
                        "item.name": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              size: 34,
                              class: "me-3",
                              image: item.logo
                            }, null, 8, ["image"]),
                            createVNode("div", null, [
                              createVNode("h6", { class: "text-h6 mb-0" }, toDisplayString(item.name), 1),
                              createVNode("p", { class: "text-sm text-medium-emphasis mb-0" }, toDisplayString(item.project), 1)
                            ])
                          ])
                        ]),
                        "item.totalTask": withCtx(({ item }) => [
                          createVNode("div", { class: "text-high-emphasis" }, toDisplayString(item.totalTask), 1)
                        ]),
                        "item.progress": withCtx(({ item }) => [
                          createVNode("div", { class: "text-high-emphasis text-body-1" }, toDisplayString(item.progress) + "% ", 1),
                          createVNode(VProgressLinear, {
                            height: 6,
                            "model-value": item.progress,
                            rounded: "",
                            color: resolveUserProgressVariant(item.progress)
                          }, null, 8, ["model-value", "color"])
                        ]),
                        bottom: withCtx(() => []),
                        _: 1
                      }, 8, ["search"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, { title: "User Activity Timeline" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VTimeline, {
                            side: "end",
                            align: "start",
                            "line-inset": "9",
                            "truncate-line": "start",
                            density: "compact"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTimelineItem, {
                                "dot-color": "primary",
                                size: "x-small"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center gap-2 flex-wrap mb-2" }, [
                                    createVNode("span", { class: "app-timeline-title" }, " 12 Invoices have been paid "),
                                    createVNode("span", { class: "app-timeline-meta" }, "12 min ago")
                                  ]),
                                  createVNode("div", { class: "app-timeline-text mt-1" }, " Invoices have been paid to the company "),
                                  createVNode("div", { class: "d-inline-flex align-center timeline-chip my-2" }, [
                                    createVNode("img", {
                                      src: unref(pdf),
                                      height: "20",
                                      class: "me-2",
                                      alt: "img"
                                    }, null, 8, ["src"]),
                                    createVNode("span", { class: "app-timeline-text font-weight-medium" }, " invoices.pdf ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                size: "x-small",
                                "dot-color": "success"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                    createVNode("div", { class: "app-timeline-title" }, " Client Meeting "),
                                    createVNode("span", { class: "app-timeline-meta" }, "45 min ago")
                                  ]),
                                  createVNode("div", { class: "app-timeline-text mt-1" }, " Project meeting with john @10:15am "),
                                  createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap" }, [
                                    createVNode("div", { class: "d-flex align-center my-2" }, [
                                      createVNode(VAvatar, {
                                        size: "32",
                                        class: "me-2",
                                        image: unref(avatar2)
                                      }, null, 8, ["image"]),
                                      createVNode("div", { class: "d-flex flex-column" }, [
                                        createVNode("p", { class: "text-sm font-weight-medium text-medium-emphasis mb-0" }, " Lester McCarthy (Client) "),
                                        createVNode("span", { class: "text-sm" }, "CEO of Pixinvent")
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VTimelineItem, {
                                size: "x-small",
                                "dot-color": "info"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-between align-center flex-wrap mb-2" }, [
                                    createVNode("span", { class: "app-timeline-title" }, " Create a new project for client "),
                                    createVNode("span", { class: "app-timeline-meta" }, "2 Day Ago")
                                  ]),
                                  createVNode("p", { class: "app-timeline-text mt-1 mb-2" }, " 6 team members in a project "),
                                  createVNode("div", { class: "v-avatar-group demo-avatar-group" }, [
                                    createVNode(VAvatar, { size: 40 }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" John Doe ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VAvatar, { size: 40 }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, { src: unref(avatar2) }, null, 8, ["src"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Jennie Obrien ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VAvatar, { size: 40 }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, { src: unref(avatar3) }, null, 8, ["src"]),
                                        createVNode(VTooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Peter Harper ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VAvatar, {
                                      size: 40,
                                      color: _ctx.$vuetify.theme.current.dark ? "#383B55" : "#F0EFF0"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" +3 ")
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserTabOverview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UserTabSecurity",
  __ssrInlineRender: true,
  setup(__props) {
    const isNewPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const smsVerificationNumber = ref("");
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
      const _component_IconBtn = resolveComponent("IconBtn");
      const _component_TwoFactorAuthDialog = _sfc_main$c;
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
                                "model-value": unref(smsVerificationNumber),
                                readonly: "",
                                placeholder: "+1(968) 819-2547",
                                density: "compact"
                              }, {
                                append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_IconBtn, {
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary",
                                      class: "me-2 ms-1"
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
                                    _push6(ssrRenderComponent(_component_IconBtn, {
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
                                      createVNode(_component_IconBtn, {
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        class: "me-2 ms-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-edit-box-line",
                                            onClick: ($event) => isTwoFactorDialogOpen.value = true
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_IconBtn, {
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
                                    "model-value": unref(smsVerificationNumber),
                                    readonly: "",
                                    placeholder: "+1(968) 819-2547",
                                    density: "compact"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_IconBtn, {
                                        rounded: "",
                                        variant: "outlined",
                                        color: "secondary",
                                        class: "me-2 ms-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-edit-box-line",
                                            onClick: ($event) => isTwoFactorDialogOpen.value = true
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_IconBtn, {
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
                                  "model-value": unref(smsVerificationNumber),
                                  readonly: "",
                                  placeholder: "+1(968) 819-2547",
                                  density: "compact"
                                }, {
                                  append: withCtx(() => [
                                    createVNode(_component_IconBtn, {
                                      rounded: "",
                                      variant: "outlined",
                                      color: "secondary",
                                      class: "me-2 ms-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-edit-box-line",
                                          onClick: ($event) => isTwoFactorDialogOpen.value = true
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_IconBtn, {
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
                                "model-value": unref(smsVerificationNumber),
                                readonly: "",
                                placeholder: "+1(968) 819-2547",
                                density: "compact"
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_IconBtn, {
                                    rounded: "",
                                    variant: "outlined",
                                    color: "secondary",
                                    class: "me-2 ms-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-edit-box-line",
                                        onClick: ($event) => isTwoFactorDialogOpen.value = true
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_IconBtn, {
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
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                image: item.logo,
                                size: 22,
                                class: "me-4"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-h6 font-weight-regular"${_scopeId4}>${ssrInterpolate(item.browser)}</h6></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    image: item.logo,
                                    size: 22,
                                    class: "me-4"
                                  }, null, 8, ["image"]),
                                  createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.browser), 1)
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
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  image: item.logo,
                                  size: 22,
                                  class: "me-4"
                                }, null, 8, ["image"]),
                                createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.browser), 1)
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
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                image: item.logo,
                                size: 22,
                                class: "me-4"
                              }, null, 8, ["image"]),
                              createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.browser), 1)
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
                              "model-value": unref(smsVerificationNumber),
                              readonly: "",
                              placeholder: "+1(968) 819-2547",
                              density: "compact"
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_IconBtn, {
                                  rounded: "",
                                  variant: "outlined",
                                  color: "secondary",
                                  class: "me-2 ms-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-edit-box-line",
                                      onClick: ($event) => isTwoFactorDialogOpen.value = true
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_IconBtn, {
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
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              image: item.logo,
                              size: 22,
                              class: "me-4"
                            }, null, 8, ["image"]),
                            createVNode("h6", { class: "text-h6 font-weight-regular" }, toDisplayString(item.browser), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/apps/user/view/UserTabSecurity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute("apps-user-view-id");
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
        icon: "ri-bookmark-line",
        title: "Billing & Plan"
      },
      {
        icon: "ri-notification-4-line",
        title: "Notifications"
      },
      {
        icon: "ri-link-m",
        title: "Connections"
      }
    ];
    const { data: userData } = ([__temp, __restore] = withAsyncContext(() => useApi(`/apps/users/${route.params.id}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(userData)) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                lg: "4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(UserBioPanel, { "user-data": unref(userData) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(UserBioPanel, { "user-data": unref(userData) }, null, 8, ["user-data"])
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
                      class: "v-tabs-pill"
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
                      class: "mt-6 disable-tab-transition",
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
                                _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$6)
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
                          _push4(ssrRenderComponent(VWindowItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(UserTabConnections, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(UserTabConnections)
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
                                createVNode(_sfc_main$6)
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(UserTabConnections)
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
                        class: "v-tabs-pill"
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
                        class: "mt-6 disable-tab-transition",
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
                              createVNode(_sfc_main$6)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(UserTabConnections)
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
                    createVNode(UserBioPanel, { "user-data": unref(userData) }, null, 8, ["user-data"])
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
                      class: "v-tabs-pill"
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
                      class: "mt-6 disable-tab-transition",
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
                            createVNode(_sfc_main$6)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(UserTabConnections)
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
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/apps/user/view/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
