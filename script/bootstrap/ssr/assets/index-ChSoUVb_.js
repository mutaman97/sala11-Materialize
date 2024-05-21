import { a as _sfc_main$b, _ as _sfc_main$c } from "./AddPaymentMethodDialog-UmhSlbW5.js";
import { _ as _sfc_main$a } from "./UserInfoEditDialog-Dqac65qF.js";
import { _ as _sfc_main$6, a as _sfc_main$9 } from "./TwoFactorAuthDialog-DSsmJXL3.js";
import { _ as _sfc_main$5 } from "./AppStepper-DSePPp52.js";
import { _ as _sfc_main$4 } from "./DialogCloseBtn-h97PlnE6.js";
import { useSSRContext, ref, watch, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withModifiers, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { V as VDialog } from "./VDialog-JSJ1TRMg.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { a as VIcon, V as VBtn, c as avatar1, d as avatar2, e as avatar3, f as avatar4, h as avatar5, j as avatar6, i as avatar7, H as avatar8 } from "../ssr.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { _ as _sfc_main$8 } from "./AddEditAddressDialog-CR2aSRYs.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { _ as _sfc_main$7 } from "./PricingPlanDialog-ChNiCir3.js";
import { V as VAutocomplete } from "./VAutocomplete-DPac00nm.js";
import { V as VMenu } from "./VMenu-KUYgjPyD.js";
import "./mastercard-D11GxT9q.js";
import "./visa-light-manIB7UD.js";
import "./useGenerateImageVariant-CZ9PNjKS.js";
import "./VSelect-5lJOBAar.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
import "./easing-BikAOx6-.js";
import "./VOverlay-BlPDiq4k.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VAlert-CqjinC0F.js";
import "./CustomRadios-DrYzSNcj.js";
import "./VSpacer-DCJACtOB.js";
/* empty css               */
import "./VSlideGroupItem-CIJ0uuo8.js";
import "./ssrBoot-Co4_dNdy.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
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
import "./AppPricing-DLCFY0_b.js";
import "./filter-BC4fOy6c.js";
const illustrationJohn = "/build/assets/illustration-john-C_mCv1dZ.png";
const angularIcon = "/build/assets/angular-CpdHor9V.png";
const laravelIcon = "/build/assets/laravel-BalyAEP2.png";
const reactIcon = "/build/assets/react-CkEEREew.png";
const vueIcon = "/build/assets/vue-CcYLk0Mf.png";
const awsIcon = "/build/assets/aws-bhZBqfsn.png";
const firebaseIcon = "/build/assets/firebase-B27Rnyjo.png";
const mysqlIcon = "/build/assets/mysql-CPf6XSB7.png";
const _sfc_main$3 = {
  __name: "CreateAppDialog",
  __ssrInlineRender: true,
  props: {
    isDialogVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isDialogVisible",
    "updatedData"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentStep = ref(0);
    const createApp = [
      {
        icon: "ri-file-text-line",
        title: "DETAILS",
        subtitle: "Enter Details"
      },
      {
        icon: "ri-star-smile-line",
        title: "FRAMEWORKS",
        subtitle: "Select Framework"
      },
      {
        icon: "ri-pie-chart-2-line",
        title: "DATABASE",
        subtitle: "Select Database"
      },
      {
        icon: "ri-bank-card-line",
        title: "BILLING",
        subtitle: "Payment Details"
      },
      {
        icon: "ri-check-double-line",
        title: "SUBMIT",
        subtitle: "submit"
      }
    ];
    const categories = [
      {
        icon: "ri-bar-chart-box-line",
        color: "info",
        title: "CRM Application",
        subtitle: "Scales with any business",
        slug: "crm-application"
      },
      {
        icon: "ri-shopping-cart-line",
        color: "success",
        title: "Ecommerce Platforms",
        subtitle: "Grow Your Business With App",
        slug: "ecommerce-application"
      },
      {
        icon: "ri-video-upload-line",
        color: "error",
        title: "Online Learning platform",
        subtitle: "Start learning today",
        slug: "online-learning-application"
      }
    ];
    const frameworks = [
      {
        icon: reactIcon,
        color: "info",
        title: "React Native",
        subtitle: "Create truly native apps",
        slug: "react-framework"
      },
      {
        icon: angularIcon,
        color: "error",
        title: "Angular",
        subtitle: "Most suited for your application",
        slug: "angular-framework"
      },
      {
        icon: vueIcon,
        color: "success",
        title: "Vue",
        subtitle: "Progressive Framework",
        slug: "vue-framework"
      },
      {
        icon: laravelIcon,
        color: "warning",
        title: "Laravel",
        subtitle: "PHP web frameworks",
        slug: "laravel-framework"
      }
    ];
    const databases = [
      {
        icon: firebaseIcon,
        color: "warning",
        title: "Firebase",
        subtitle: "Cloud Firestore",
        slug: "firebase-database"
      },
      {
        icon: awsIcon,
        color: "secondary",
        title: "AWS",
        subtitle: "Amazon Fast NoSQL Database",
        slug: "aws-database"
      },
      {
        icon: mysqlIcon,
        color: "info",
        title: "MySQL",
        subtitle: "Basic MySQL database",
        slug: "mysql-database"
      }
    ];
    const createAppData = ref({
      category: "crm-application",
      framework: "vue-framework",
      database: "firebase-database",
      cardNumber: null,
      cardName: "",
      cardExpiry: "",
      cardCvv: "",
      isSave: false
    });
    const dialogVisibleUpdate = (val) => {
      emit("update:isDialogVisible", val);
      currentStep.value = 0;
    };
    watch(() => props, () => {
      if (!props.isDialogVisible)
        currentStep.value = 0;
    });
    const onSubmit = () => {
      alert("submitted...!!");
      emit("updatedData", createAppData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      const _component_AppStepper = _sfc_main$5;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "900",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "create-app-dialog pa-sm-11 pa-3" }, {
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
                        _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 text-center mb-2"${_scopeId3}> Create App </h4><div class="text-body-1"${_scopeId3}> Provide data with this form to create your app. </div></div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AppStepper, {
                                      "current-step": unref(currentStep),
                                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      direction: "vertical",
                                      items: createApp,
                                      "icon-size": "24",
                                      class: "stepper-icon-step-bg"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AppStepper, {
                                        "current-step": unref(currentStep),
                                        "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                        direction: "vertical",
                                        items: createApp,
                                        "icon-size": "24",
                                        class: "stepper-icon-step-bg"
                                      }, null, 8, ["current-step", "onUpdate:currentStep"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindow, {
                                      modelValue: unref(currentStep),
                                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      class: "disable-tab-transition stepper-content"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Application Name",
                                                  placeholder: "myRider"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<h5 class="text-h5 mb-4 mt-6"${_scopeId7}> Category </h5>`);
                                                _push8(ssrRenderComponent(VRadioGroup, {
                                                  modelValue: unref(createAppData).category,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { class: "card-list" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(categories, (category) => {
                                                              _push10(ssrRenderComponent(VListItem, {
                                                                key: category.title,
                                                                onClick: ($event) => unref(createAppData).category = category.slug
                                                              }, {
                                                                prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: category.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(VIcon, {
                                                                            icon: category.icon,
                                                                            size: "30"
                                                                          }, null, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(VIcon, {
                                                                              icon: category.icon,
                                                                              size: "30"
                                                                            }, null, 8, ["icon"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VAvatar, {
                                                                        size: "46",
                                                                        rounded: "",
                                                                        variant: "tonal",
                                                                        color: category.color,
                                                                        class: "me-1"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(VIcon, {
                                                                            icon: category.icon,
                                                                            size: "30"
                                                                          }, null, 8, ["icon"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color"])
                                                                    ];
                                                                  }
                                                                }),
                                                                append: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VRadio, {
                                                                      value: category.slug
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VRadio, {
                                                                        value: category.slug
                                                                      }, null, 8, ["value"])
                                                                    ];
                                                                  }
                                                                }),
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(category.title)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(category.title), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(category.subtitle)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(category.subtitle), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(category.title), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(category.subtitle), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                                return createVNode(VListItem, {
                                                                  key: category.title,
                                                                  onClick: ($event) => unref(createAppData).category = category.slug
                                                                }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: category.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VIcon, {
                                                                          icon: category.icon,
                                                                          size: "30"
                                                                        }, null, 8, ["icon"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color"])
                                                                  ]),
                                                                  append: withCtx(() => [
                                                                    createVNode(VRadio, {
                                                                      value: category.slug
                                                                    }, null, 8, ["value"])
                                                                  ]),
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(category.title), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(category.subtitle), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { class: "card-list" }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                              return createVNode(VListItem, {
                                                                key: category.title,
                                                                onClick: ($event) => unref(createAppData).category = category.slug
                                                              }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VAvatar, {
                                                                    size: "46",
                                                                    rounded: "",
                                                                    variant: "tonal",
                                                                    color: category.color,
                                                                    class: "me-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VIcon, {
                                                                        icon: category.icon,
                                                                        size: "30"
                                                                      }, null, 8, ["icon"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
                                                                ]),
                                                                append: withCtx(() => [
                                                                  createVNode(VRadio, {
                                                                    value: category.slug
                                                                  }, null, 8, ["value"])
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(category.title), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(category.subtitle), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"]);
                                                            }), 64))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Application Name",
                                                    placeholder: "myRider"
                                                  }),
                                                  createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                                  createVNode(VRadioGroup, {
                                                    modelValue: unref(createAppData).category,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { class: "card-list" }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                            return createVNode(VListItem, {
                                                              key: category.title,
                                                              onClick: ($event) => unref(createAppData).category = category.slug
                                                            }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VAvatar, {
                                                                  size: "46",
                                                                  rounded: "",
                                                                  variant: "tonal",
                                                                  color: category.color,
                                                                  class: "me-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VIcon, {
                                                                      icon: category.icon,
                                                                      size: "30"
                                                                    }, null, 8, ["icon"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              append: withCtx(() => [
                                                                createVNode(VRadio, {
                                                                  value: category.slug
                                                                }, null, 8, ["value"])
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(category.title), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(category.subtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"]);
                                                          }), 64))
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h5 class="text-h5 mb-4"${_scopeId7}> Select Framework </h5>`);
                                                _push8(ssrRenderComponent(VRadioGroup, {
                                                  modelValue: unref(createAppData).framework,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { class: "card-list" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(frameworks, (framework) => {
                                                              _push10(ssrRenderComponent(VListItem, {
                                                                key: framework.title,
                                                                onClick: ($event) => unref(createAppData).framework = framework.slug
                                                              }, {
                                                                prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: framework.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<img${ssrRenderAttr("src", framework.icon)}${_scopeId11}>`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("img", {
                                                                              src: framework.icon
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VAvatar, {
                                                                        size: "46",
                                                                        rounded: "",
                                                                        variant: "tonal",
                                                                        color: framework.color,
                                                                        class: "me-1"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("img", {
                                                                            src: framework.icon
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color"])
                                                                    ];
                                                                  }
                                                                }),
                                                                append: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VRadio, {
                                                                      value: framework.slug
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VRadio, {
                                                                        value: framework.slug
                                                                      }, null, 8, ["value"])
                                                                    ];
                                                                  }
                                                                }),
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(framework.title)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(framework.title), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(VListItemSubtitle, { class: "me-2" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(framework.subtitle)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(framework.title), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                                return createVNode(VListItem, {
                                                                  key: framework.title,
                                                                  onClick: ($event) => unref(createAppData).framework = framework.slug
                                                                }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: framework.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("img", {
                                                                          src: framework.icon
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color"])
                                                                  ]),
                                                                  append: withCtx(() => [
                                                                    createVNode(VRadio, {
                                                                      value: framework.slug
                                                                    }, null, 8, ["value"])
                                                                  ]),
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(framework.title), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { class: "card-list" }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                              return createVNode(VListItem, {
                                                                key: framework.title,
                                                                onClick: ($event) => unref(createAppData).framework = framework.slug
                                                              }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VAvatar, {
                                                                    size: "46",
                                                                    rounded: "",
                                                                    variant: "tonal",
                                                                    color: framework.color,
                                                                    class: "me-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: framework.icon
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
                                                                ]),
                                                                append: withCtx(() => [
                                                                  createVNode(VRadio, {
                                                                    value: framework.slug
                                                                  }, null, 8, ["value"])
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(framework.title), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"]);
                                                            }), 64))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                                  createVNode(VRadioGroup, {
                                                    modelValue: unref(createAppData).framework,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { class: "card-list" }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                            return createVNode(VListItem, {
                                                              key: framework.title,
                                                              onClick: ($event) => unref(createAppData).framework = framework.slug
                                                            }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VAvatar, {
                                                                  size: "46",
                                                                  rounded: "",
                                                                  variant: "tonal",
                                                                  color: framework.color,
                                                                  class: "me-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: framework.icon
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              append: withCtx(() => [
                                                                createVNode(VRadio, {
                                                                  value: framework.slug
                                                                }, null, 8, ["value"])
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(framework.title), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"]);
                                                          }), 64))
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Database Name",
                                                  placeholder: "userDB"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<h5 class="text-h5 mt-6 mb-4"${_scopeId7}> Select Database Engine </h5>`);
                                                _push8(ssrRenderComponent(VRadioGroup, {
                                                  modelValue: unref(createAppData).database,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { class: "card-list" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(databases, (database) => {
                                                              _push10(ssrRenderComponent(VListItem, {
                                                                key: database.title,
                                                                onClick: ($event) => unref(createAppData).database = database.slug
                                                              }, {
                                                                prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: database.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<img${ssrRenderAttr("src", database.icon)}${_scopeId11}>`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("img", {
                                                                              src: database.icon
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VAvatar, {
                                                                        size: "46",
                                                                        rounded: "",
                                                                        variant: "tonal",
                                                                        color: database.color,
                                                                        class: "me-1"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("img", {
                                                                            src: database.icon
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color"])
                                                                    ];
                                                                  }
                                                                }),
                                                                append: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VRadio, {
                                                                      value: database.slug
                                                                    }, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VRadio, {
                                                                        value: database.slug
                                                                      }, null, 8, ["value"])
                                                                    ];
                                                                  }
                                                                }),
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(database.title)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(database.title), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(VListItemSubtitle, { class: "me-2" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`${ssrInterpolate(database.subtitle)}`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode(toDisplayString(database.subtitle), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(database.title), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(database.subtitle), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                                return createVNode(VListItem, {
                                                                  key: database.title,
                                                                  onClick: ($event) => unref(createAppData).database = database.slug
                                                                }, {
                                                                  prepend: withCtx(() => [
                                                                    createVNode(VAvatar, {
                                                                      size: "46",
                                                                      rounded: "",
                                                                      variant: "tonal",
                                                                      color: database.color,
                                                                      class: "me-1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("img", {
                                                                          src: database.icon
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["color"])
                                                                  ]),
                                                                  append: withCtx(() => [
                                                                    createVNode(VRadio, {
                                                                      value: database.slug
                                                                    }, null, 8, ["value"])
                                                                  ]),
                                                                  default: withCtx(() => [
                                                                    createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(database.title), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(database.subtitle), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["onClick"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { class: "card-list" }, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                              return createVNode(VListItem, {
                                                                key: database.title,
                                                                onClick: ($event) => unref(createAppData).database = database.slug
                                                              }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VAvatar, {
                                                                    size: "46",
                                                                    rounded: "",
                                                                    variant: "tonal",
                                                                    color: database.color,
                                                                    class: "me-1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("img", {
                                                                        src: database.icon
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
                                                                ]),
                                                                append: withCtx(() => [
                                                                  createVNode(VRadio, {
                                                                    value: database.slug
                                                                  }, null, 8, ["value"])
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(database.title), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(database.subtitle), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["onClick"]);
                                                            }), 64))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Database Name",
                                                    placeholder: "userDB"
                                                  }),
                                                  createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                                  createVNode(VRadioGroup, {
                                                    modelValue: unref(createAppData).database,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { class: "card-list" }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                            return createVNode(VListItem, {
                                                              key: database.title,
                                                              onClick: ($event) => unref(createAppData).database = database.slug
                                                            }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VAvatar, {
                                                                  size: "46",
                                                                  rounded: "",
                                                                  variant: "tonal",
                                                                  color: database.color,
                                                                  class: "me-1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("img", {
                                                                      src: database.icon
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              append: withCtx(() => [
                                                                createVNode(VRadio, {
                                                                  value: database.slug
                                                                }, null, 8, ["value"])
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(database.title), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(database.subtitle), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["onClick"]);
                                                          }), 64))
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VForm, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VRow, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VCol, { cols: "12" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(createAppData).cardNumber,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                                    label: "Card Number",
                                                                    placeholder: "1234 1234 1234 1234",
                                                                    type: "number"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(createAppData).cardNumber,
                                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                                      label: "Card Number",
                                                                      placeholder: "1234 1234 1234 1234",
                                                                      type: "number"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, {
                                                              cols: "12",
                                                              md: "6"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(createAppData).cardName,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                                    label: "Name on Card",
                                                                    placeholder: "John Doe"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(createAppData).cardName,
                                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                                      label: "Name on Card",
                                                                      placeholder: "John Doe"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, {
                                                              cols: "6",
                                                              md: "3"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(createAppData).cardExpiry,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                                    label: "Expiry",
                                                                    placeholder: "MM/YY"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(createAppData).cardExpiry,
                                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                                      label: "Expiry",
                                                                      placeholder: "MM/YY"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, {
                                                              cols: "6",
                                                              md: "3"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VTextField, {
                                                                    modelValue: unref(createAppData).cardCvv,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                                    label: "CVV",
                                                                    placeholder: "123"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(createAppData).cardCvv,
                                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                                      label: "CVV",
                                                                      placeholder: "123"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VCol, { cols: "12" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VSwitch, {
                                                                    modelValue: unref(createAppData).isSave,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                                    label: "Save Card for future billing?"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VSwitch, {
                                                                      modelValue: unref(createAppData).isSave,
                                                                      "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                                      label: "Save Card for future billing?"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VCol, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(createAppData).cardNumber,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                                    label: "Card Number",
                                                                    placeholder: "1234 1234 1234 1234",
                                                                    type: "number"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                md: "6"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(createAppData).cardName,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                                    label: "Name on Card",
                                                                    placeholder: "John Doe"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "6",
                                                                md: "3"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(createAppData).cardExpiry,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                                    label: "Expiry",
                                                                    placeholder: "MM/YY"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "6",
                                                                md: "3"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(createAppData).cardCvv,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                                    label: "CVV",
                                                                    placeholder: "123"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSwitch, {
                                                                    modelValue: unref(createAppData).isSave,
                                                                    "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                                    label: "Save Card for future billing?"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(createAppData).cardNumber,
                                                                  "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                                  label: "Card Number",
                                                                  placeholder: "1234 1234 1234 1234",
                                                                  type: "number"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, {
                                                              cols: "12",
                                                              md: "6"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(createAppData).cardName,
                                                                  "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                                  label: "Name on Card",
                                                                  placeholder: "John Doe"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, {
                                                              cols: "6",
                                                              md: "3"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(createAppData).cardExpiry,
                                                                  "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                                  label: "Expiry",
                                                                  placeholder: "MM/YY"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, {
                                                              cols: "6",
                                                              md: "3"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(createAppData).cardCvv,
                                                                  "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                                  label: "CVV",
                                                                  placeholder: "123"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VSwitch, {
                                                                  modelValue: unref(createAppData).isSave,
                                                                  "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                                  label: "Save Card for future billing?"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VForm, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(createAppData).cardNumber,
                                                                "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                                label: "Card Number",
                                                                placeholder: "1234 1234 1234 1234",
                                                                type: "number"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, {
                                                            cols: "12",
                                                            md: "6"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(createAppData).cardName,
                                                                "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                                label: "Name on Card",
                                                                placeholder: "John Doe"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, {
                                                            cols: "6",
                                                            md: "3"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(createAppData).cardExpiry,
                                                                "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                                label: "Expiry",
                                                                placeholder: "MM/YY"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, {
                                                            cols: "6",
                                                            md: "3"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(createAppData).cardCvv,
                                                                "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                                label: "CVV",
                                                                placeholder: "123"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VSwitch, {
                                                                modelValue: unref(createAppData).isSave,
                                                                "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                                label: "Save Card for future billing?"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, { class: "text-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h5 class="text-h5 mb-2 mt-3"${_scopeId7}> Submit 🥳 </h5><p class="text-body-2 mb-4"${_scopeId7}> Submit to kickstart your project. </p>`);
                                                _push8(ssrRenderComponent(VImg, {
                                                  src: unref(illustrationJohn),
                                                  width: "261",
                                                  class: "mx-auto"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                                  createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                                  createVNode(VImg, {
                                                    src: unref(illustrationJohn),
                                                    width: "261",
                                                    class: "mx-auto"
                                                  }, null, 8, ["src"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Application Name",
                                                  placeholder: "myRider"
                                                }),
                                                createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                                createVNode(VRadioGroup, {
                                                  modelValue: unref(createAppData).category,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { class: "card-list" }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                          return createVNode(VListItem, {
                                                            key: category.title,
                                                            onClick: ($event) => unref(createAppData).category = category.slug
                                                          }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VAvatar, {
                                                                size: "46",
                                                                rounded: "",
                                                                variant: "tonal",
                                                                color: category.color,
                                                                class: "me-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    icon: category.icon,
                                                                    size: "30"
                                                                  }, null, 8, ["icon"])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            append: withCtx(() => [
                                                              createVNode(VRadio, {
                                                                value: category.slug
                                                              }, null, 8, ["value"])
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(category.title), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(category.subtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"]);
                                                        }), 64))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                                createVNode(VRadioGroup, {
                                                  modelValue: unref(createAppData).framework,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { class: "card-list" }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                          return createVNode(VListItem, {
                                                            key: framework.title,
                                                            onClick: ($event) => unref(createAppData).framework = framework.slug
                                                          }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VAvatar, {
                                                                size: "46",
                                                                rounded: "",
                                                                variant: "tonal",
                                                                color: framework.color,
                                                                class: "me-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: framework.icon
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            append: withCtx(() => [
                                                              createVNode(VRadio, {
                                                                value: framework.slug
                                                              }, null, 8, ["value"])
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(framework.title), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(framework.subtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"]);
                                                        }), 64))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Database Name",
                                                  placeholder: "userDB"
                                                }),
                                                createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                                createVNode(VRadioGroup, {
                                                  modelValue: unref(createAppData).database,
                                                  "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { class: "card-list" }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                          return createVNode(VListItem, {
                                                            key: database.title,
                                                            onClick: ($event) => unref(createAppData).database = database.slug
                                                          }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VAvatar, {
                                                                size: "46",
                                                                rounded: "",
                                                                variant: "tonal",
                                                                color: database.color,
                                                                class: "me-1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("img", {
                                                                    src: database.icon
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            append: withCtx(() => [
                                                              createVNode(VRadio, {
                                                                value: database.slug
                                                              }, null, 8, ["value"])
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(database.title), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(database.subtitle), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["onClick"]);
                                                        }), 64))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VForm, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(createAppData).cardNumber,
                                                              "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                              label: "Card Number",
                                                              placeholder: "1234 1234 1234 1234",
                                                              type: "number"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(createAppData).cardName,
                                                              "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                              label: "Name on Card",
                                                              placeholder: "John Doe"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "6",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(createAppData).cardExpiry,
                                                              "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                              label: "Expiry",
                                                              placeholder: "MM/YY"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "6",
                                                          md: "3"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(createAppData).cardCvv,
                                                              "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                              label: "CVV",
                                                              placeholder: "123"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSwitch, {
                                                              modelValue: unref(createAppData).isSave,
                                                              "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                              label: "Save Card for future billing?"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode(VWindowItem, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                                createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                                createVNode(VImg, {
                                                  src: unref(illustrationJohn),
                                                  width: "261",
                                                  class: "mx-auto"
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between mt-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "outlined",
                                      color: "secondary",
                                      disabled: unref(currentStep) === 0,
                                      onClick: ($event) => currentStep.value--
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-arrow-left-line",
                                            start: "",
                                            class: "flip-in-rtl"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` Previous `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (createApp.length - 1 === unref(currentStep)) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "success",
                                        "append-icon": "ri-check-line",
                                        onClick: onSubmit
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` submit `);
                                          } else {
                                            return [
                                              createTextVNode(" submit ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(VBtn, {
                                        onClick: ($event) => currentStep.value++
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Next `);
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(" Next "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                end: "",
                                                class: "flip-in-rtl"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(VWindow, {
                                        modelValue: unref(currentStep),
                                        "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                        class: "disable-tab-transition stepper-content"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Application Name",
                                                placeholder: "myRider"
                                              }),
                                              createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(createAppData).category,
                                                "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { class: "card-list" }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                        return createVNode(VListItem, {
                                                          key: category.title,
                                                          onClick: ($event) => unref(createAppData).category = category.slug
                                                        }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VAvatar, {
                                                              size: "46",
                                                              rounded: "",
                                                              variant: "tonal",
                                                              color: category.color,
                                                              class: "me-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  icon: category.icon,
                                                                  size: "30"
                                                                }, null, 8, ["icon"])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          append: withCtx(() => [
                                                            createVNode(VRadio, {
                                                              value: category.slug
                                                            }, null, 8, ["value"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(category.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(category.subtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]);
                                                      }), 64))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(createAppData).framework,
                                                "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { class: "card-list" }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                        return createVNode(VListItem, {
                                                          key: framework.title,
                                                          onClick: ($event) => unref(createAppData).framework = framework.slug
                                                        }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VAvatar, {
                                                              size: "46",
                                                              rounded: "",
                                                              variant: "tonal",
                                                              color: framework.color,
                                                              class: "me-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: framework.icon
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          append: withCtx(() => [
                                                            createVNode(VRadio, {
                                                              value: framework.slug
                                                            }, null, 8, ["value"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(framework.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(framework.subtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]);
                                                      }), 64))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Database Name",
                                                placeholder: "userDB"
                                              }),
                                              createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(createAppData).database,
                                                "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { class: "card-list" }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                        return createVNode(VListItem, {
                                                          key: database.title,
                                                          onClick: ($event) => unref(createAppData).database = database.slug
                                                        }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VAvatar, {
                                                              size: "46",
                                                              rounded: "",
                                                              variant: "tonal",
                                                              color: database.color,
                                                              class: "me-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("img", {
                                                                  src: database.icon
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          append: withCtx(() => [
                                                            createVNode(VRadio, {
                                                              value: database.slug
                                                            }, null, 8, ["value"])
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(database.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(database.subtitle), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["onClick"]);
                                                      }), 64))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VForm, null, {
                                                default: withCtx(() => [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(createAppData).cardNumber,
                                                            "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                            label: "Card Number",
                                                            placeholder: "1234 1234 1234 1234",
                                                            type: "number"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(createAppData).cardName,
                                                            "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                            label: "Name on Card",
                                                            placeholder: "John Doe"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "6",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(createAppData).cardExpiry,
                                                            "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                            label: "Expiry",
                                                            placeholder: "MM/YY"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "6",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(createAppData).cardCvv,
                                                            "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                            label: "CVV",
                                                            placeholder: "123"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSwitch, {
                                                            modelValue: unref(createAppData).isSave,
                                                            "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                            label: "Save Card for future billing?"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createVNode(VWindowItem, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                              createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                              createVNode(VImg, {
                                                src: unref(illustrationJohn),
                                                width: "261",
                                                class: "mx-auto"
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex justify-space-between mt-6" }, [
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          color: "secondary",
                                          disabled: unref(currentStep) === 0,
                                          onClick: ($event) => currentStep.value--
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled", "onClick"]),
                                        createApp.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          color: "success",
                                          "append-icon": "ri-check-line",
                                          onClick: onSubmit
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" submit ")
                                          ]),
                                          _: 1
                                        })) : (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          onClick: ($event) => currentStep.value++
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AppStepper, {
                                      "current-step": unref(currentStep),
                                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      direction: "vertical",
                                      items: createApp,
                                      "icon-size": "24",
                                      class: "stepper-icon-step-bg"
                                    }, null, 8, ["current-step", "onUpdate:currentStep"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindow, {
                                      modelValue: unref(currentStep),
                                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      class: "disable-tab-transition stepper-content"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Application Name",
                                              placeholder: "myRider"
                                            }),
                                            createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(createAppData).category,
                                              "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { class: "card-list" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                      return createVNode(VListItem, {
                                                        key: category.title,
                                                        onClick: ($event) => unref(createAppData).category = category.slug
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VAvatar, {
                                                            size: "46",
                                                            rounded: "",
                                                            variant: "tonal",
                                                            color: category.color,
                                                            class: "me-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                icon: category.icon,
                                                                size: "30"
                                                              }, null, 8, ["icon"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        append: withCtx(() => [
                                                          createVNode(VRadio, {
                                                            value: category.slug
                                                          }, null, 8, ["value"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(category.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(category.subtitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 64))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(createAppData).framework,
                                              "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { class: "card-list" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                      return createVNode(VListItem, {
                                                        key: framework.title,
                                                        onClick: ($event) => unref(createAppData).framework = framework.slug
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VAvatar, {
                                                            size: "46",
                                                            rounded: "",
                                                            variant: "tonal",
                                                            color: framework.color,
                                                            class: "me-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: framework.icon
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        append: withCtx(() => [
                                                          createVNode(VRadio, {
                                                            value: framework.slug
                                                          }, null, 8, ["value"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(framework.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(framework.subtitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 64))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Database Name",
                                              placeholder: "userDB"
                                            }),
                                            createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                            createVNode(VRadioGroup, {
                                              modelValue: unref(createAppData).database,
                                              "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { class: "card-list" }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                      return createVNode(VListItem, {
                                                        key: database.title,
                                                        onClick: ($event) => unref(createAppData).database = database.slug
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VAvatar, {
                                                            size: "46",
                                                            rounded: "",
                                                            variant: "tonal",
                                                            color: database.color,
                                                            class: "me-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("img", {
                                                                src: database.icon
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        append: withCtx(() => [
                                                          createVNode(VRadio, {
                                                            value: database.slug
                                                          }, null, 8, ["value"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(database.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(database.subtitle), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["onClick"]);
                                                    }), 64))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VForm, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(createAppData).cardNumber,
                                                          "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                          label: "Card Number",
                                                          placeholder: "1234 1234 1234 1234",
                                                          type: "number"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(createAppData).cardName,
                                                          "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                          label: "Name on Card",
                                                          placeholder: "John Doe"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(createAppData).cardExpiry,
                                                          "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                          label: "Expiry",
                                                          placeholder: "MM/YY"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(createAppData).cardCvv,
                                                          "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                          label: "CVV",
                                                          placeholder: "123"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSwitch, {
                                                          modelValue: unref(createAppData).isSave,
                                                          "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                          label: "Save Card for future billing?"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createVNode(VWindowItem, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                            createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                            createVNode(VImg, {
                                              src: unref(illustrationJohn),
                                              width: "261",
                                              class: "mx-auto"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex justify-space-between mt-6" }, [
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        color: "secondary",
                                        disabled: unref(currentStep) === 0,
                                        onClick: ($event) => currentStep.value--
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-left-line",
                                            start: "",
                                            class: "flip-in-rtl"
                                          }),
                                          createTextVNode(" Previous ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "onClick"]),
                                      createApp.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "success",
                                        "append-icon": "ri-check-line",
                                        onClick: onSubmit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" submit ")
                                        ]),
                                        _: 1
                                      })) : (openBlock(), createBlock(VBtn, {
                                        key: 1,
                                        onClick: ($event) => currentStep.value++
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Next "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-line",
                                            end: "",
                                            class: "flip-in-rtl"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]))
                                    ])
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
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 text-center mb-2" }, " Create App "),
                            createVNode("div", { class: "text-body-1" }, " Provide data with this form to create your app. ")
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AppStepper, {
                                    "current-step": unref(currentStep),
                                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                    direction: "vertical",
                                    items: createApp,
                                    "icon-size": "24",
                                    class: "stepper-icon-step-bg"
                                  }, null, 8, ["current-step", "onUpdate:currentStep"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindow, {
                                    modelValue: unref(currentStep),
                                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                    class: "disable-tab-transition stepper-content"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Application Name",
                                            placeholder: "myRider"
                                          }),
                                          createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(createAppData).category,
                                            "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { class: "card-list" }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                    return createVNode(VListItem, {
                                                      key: category.title,
                                                      onClick: ($event) => unref(createAppData).category = category.slug
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VAvatar, {
                                                          size: "46",
                                                          rounded: "",
                                                          variant: "tonal",
                                                          color: category.color,
                                                          class: "me-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              icon: category.icon,
                                                              size: "30"
                                                            }, null, 8, ["icon"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      append: withCtx(() => [
                                                        createVNode(VRadio, {
                                                          value: category.slug
                                                        }, null, 8, ["value"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(category.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(category.subtitle), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(createAppData).framework,
                                            "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { class: "card-list" }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                    return createVNode(VListItem, {
                                                      key: framework.title,
                                                      onClick: ($event) => unref(createAppData).framework = framework.slug
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VAvatar, {
                                                          size: "46",
                                                          rounded: "",
                                                          variant: "tonal",
                                                          color: framework.color,
                                                          class: "me-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: framework.icon
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      append: withCtx(() => [
                                                        createVNode(VRadio, {
                                                          value: framework.slug
                                                        }, null, 8, ["value"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(framework.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(framework.subtitle), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Database Name",
                                            placeholder: "userDB"
                                          }),
                                          createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                          createVNode(VRadioGroup, {
                                            modelValue: unref(createAppData).database,
                                            "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { class: "card-list" }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                    return createVNode(VListItem, {
                                                      key: database.title,
                                                      onClick: ($event) => unref(createAppData).database = database.slug
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VAvatar, {
                                                          size: "46",
                                                          rounded: "",
                                                          variant: "tonal",
                                                          color: database.color,
                                                          class: "me-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("img", {
                                                              src: database.icon
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      append: withCtx(() => [
                                                        createVNode(VRadio, {
                                                          value: database.slug
                                                        }, null, 8, ["value"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(database.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(database.subtitle), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VForm, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(createAppData).cardNumber,
                                                        "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                        label: "Card Number",
                                                        placeholder: "1234 1234 1234 1234",
                                                        type: "number"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(createAppData).cardName,
                                                        "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                        label: "Name on Card",
                                                        placeholder: "John Doe"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(createAppData).cardExpiry,
                                                        "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                        label: "Expiry",
                                                        placeholder: "MM/YY"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "6",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(createAppData).cardCvv,
                                                        "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                        label: "CVV",
                                                        placeholder: "123"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSwitch, {
                                                        modelValue: unref(createAppData).isSave,
                                                        "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                        label: "Save Card for future billing?"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                      createVNode(VWindowItem, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                          createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                          createVNode(VImg, {
                                            src: unref(illustrationJohn),
                                            width: "261",
                                            class: "mx-auto"
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex justify-space-between mt-6" }, [
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      color: "secondary",
                                      disabled: unref(currentStep) === 0,
                                      onClick: ($event) => currentStep.value--
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-left-line",
                                          start: "",
                                          class: "flip-in-rtl"
                                        }),
                                        createTextVNode(" Previous ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    createApp.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "success",
                                      "append-icon": "ri-check-line",
                                      onClick: onSubmit
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" submit ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      onClick: ($event) => currentStep.value++
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Next "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]))
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
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 text-center mb-2" }, " Create App "),
                          createVNode("div", { class: "text-body-1" }, " Provide data with this form to create your app. ")
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AppStepper, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  direction: "vertical",
                                  items: createApp,
                                  "icon-size": "24",
                                  class: "stepper-icon-step-bg"
                                }, null, 8, ["current-step", "onUpdate:currentStep"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindow, {
                                  modelValue: unref(currentStep),
                                  "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  class: "disable-tab-transition stepper-content"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Application Name",
                                          placeholder: "myRider"
                                        }),
                                        createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(createAppData).category,
                                          "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { class: "card-list" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                  return createVNode(VListItem, {
                                                    key: category.title,
                                                    onClick: ($event) => unref(createAppData).category = category.slug
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VAvatar, {
                                                        size: "46",
                                                        rounded: "",
                                                        variant: "tonal",
                                                        color: category.color,
                                                        class: "me-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            icon: category.icon,
                                                            size: "30"
                                                          }, null, 8, ["icon"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    append: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        value: category.slug
                                                      }, null, 8, ["value"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(category.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(category.subtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(createAppData).framework,
                                          "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { class: "card-list" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                  return createVNode(VListItem, {
                                                    key: framework.title,
                                                    onClick: ($event) => unref(createAppData).framework = framework.slug
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VAvatar, {
                                                        size: "46",
                                                        rounded: "",
                                                        variant: "tonal",
                                                        color: framework.color,
                                                        class: "me-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: framework.icon
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    append: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        value: framework.slug
                                                      }, null, 8, ["value"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(framework.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(framework.subtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Database Name",
                                          placeholder: "userDB"
                                        }),
                                        createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(createAppData).database,
                                          "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { class: "card-list" }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                  return createVNode(VListItem, {
                                                    key: database.title,
                                                    onClick: ($event) => unref(createAppData).database = database.slug
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VAvatar, {
                                                        size: "46",
                                                        rounded: "",
                                                        variant: "tonal",
                                                        color: database.color,
                                                        class: "me-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("img", {
                                                            src: database.icon
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    append: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        value: database.slug
                                                      }, null, 8, ["value"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(database.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(database.subtitle), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VForm, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(createAppData).cardNumber,
                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                      label: "Card Number",
                                                      placeholder: "1234 1234 1234 1234",
                                                      type: "number"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(createAppData).cardName,
                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                      label: "Name on Card",
                                                      placeholder: "John Doe"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(createAppData).cardExpiry,
                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                      label: "Expiry",
                                                      placeholder: "MM/YY"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(createAppData).cardCvv,
                                                      "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                      label: "CVV",
                                                      placeholder: "123"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSwitch, {
                                                      modelValue: unref(createAppData).isSave,
                                                      "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                      label: "Save Card for future billing?"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    createVNode(VWindowItem, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                        createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                        createVNode(VImg, {
                                          src: unref(illustrationJohn),
                                          width: "261",
                                          class: "mx-auto"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-space-between mt-6" }, [
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    color: "secondary",
                                    disabled: unref(currentStep) === 0,
                                    onClick: ($event) => currentStep.value--
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }),
                                      createTextVNode(" Previous ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  createApp.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "success",
                                    "append-icon": "ri-check-line",
                                    onClick: onSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" submit ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VBtn, {
                                    key: 1,
                                    onClick: ($event) => currentStep.value++
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Next "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]))
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "create-app-dialog pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 text-center mb-2" }, " Create App "),
                        createVNode("div", { class: "text-body-1" }, " Provide data with this form to create your app. ")
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                direction: "vertical",
                                items: createApp,
                                "icon-size": "24",
                                class: "stepper-icon-step-bg"
                              }, null, 8, ["current-step", "onUpdate:currentStep"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindow, {
                                modelValue: unref(currentStep),
                                "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                class: "disable-tab-transition stepper-content"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Application Name",
                                        placeholder: "myRider"
                                      }),
                                      createVNode("h5", { class: "text-h5 mb-4 mt-6" }, " Category "),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(createAppData).category,
                                        "onUpdate:modelValue": ($event) => unref(createAppData).category = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { class: "card-list" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                return createVNode(VListItem, {
                                                  key: category.title,
                                                  onClick: ($event) => unref(createAppData).category = category.slug
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VAvatar, {
                                                      size: "46",
                                                      rounded: "",
                                                      variant: "tonal",
                                                      color: category.color,
                                                      class: "me-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: category.icon,
                                                          size: "30"
                                                        }, null, 8, ["icon"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      value: category.slug
                                                    }, null, 8, ["value"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, { class: "font-weight-medium mb-1" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(category.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, { class: "text-body-2 me-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(category.subtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode("h5", { class: "text-h5 mb-4" }, " Select Framework "),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(createAppData).framework,
                                        "onUpdate:modelValue": ($event) => unref(createAppData).framework = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { class: "card-list" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(frameworks, (framework) => {
                                                return createVNode(VListItem, {
                                                  key: framework.title,
                                                  onClick: ($event) => unref(createAppData).framework = framework.slug
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VAvatar, {
                                                      size: "46",
                                                      rounded: "",
                                                      variant: "tonal",
                                                      color: framework.color,
                                                      class: "me-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: framework.icon
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      value: framework.slug
                                                    }, null, 8, ["value"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(framework.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(framework.subtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Database Name",
                                        placeholder: "userDB"
                                      }),
                                      createVNode("h5", { class: "text-h5 mt-6 mb-4" }, " Select Database Engine "),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(createAppData).database,
                                        "onUpdate:modelValue": ($event) => unref(createAppData).database = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { class: "card-list" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(databases, (database) => {
                                                return createVNode(VListItem, {
                                                  key: database.title,
                                                  onClick: ($event) => unref(createAppData).database = database.slug
                                                }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VAvatar, {
                                                      size: "46",
                                                      rounded: "",
                                                      variant: "tonal",
                                                      color: database.color,
                                                      class: "me-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: database.icon
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      value: database.slug
                                                    }, null, 8, ["value"])
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, { class: "mb-1 font-weight-medium" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(database.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, { class: "me-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(database.subtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(createAppData).cardNumber,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardNumber = $event,
                                                    label: "Card Number",
                                                    placeholder: "1234 1234 1234 1234",
                                                    type: "number"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(createAppData).cardName,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardName = $event,
                                                    label: "Name on Card",
                                                    placeholder: "John Doe"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(createAppData).cardExpiry,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardExpiry = $event,
                                                    label: "Expiry",
                                                    placeholder: "MM/YY"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(createAppData).cardCvv,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).cardCvv = $event,
                                                    label: "CVV",
                                                    placeholder: "123"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VSwitch, {
                                                    modelValue: unref(createAppData).isSave,
                                                    "onUpdate:modelValue": ($event) => unref(createAppData).isSave = $event,
                                                    label: "Save Card for future billing?"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createVNode(VWindowItem, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("h5", { class: "text-h5 mb-2 mt-3" }, " Submit 🥳 "),
                                      createVNode("p", { class: "text-body-2 mb-4" }, " Submit to kickstart your project. "),
                                      createVNode(VImg, {
                                        src: unref(illustrationJohn),
                                        width: "261",
                                        class: "mx-auto"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex justify-space-between mt-6" }, [
                                createVNode(VBtn, {
                                  variant: "outlined",
                                  color: "secondary",
                                  disabled: unref(currentStep) === 0,
                                  onClick: ($event) => currentStep.value--
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }),
                                    createTextVNode(" Previous ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                createApp.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "success",
                                  "append-icon": "ri-check-line",
                                  onClick: onSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" submit ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VBtn, {
                                  key: 1,
                                  onClick: ($event) => currentStep.value++
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Next "),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]))
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
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/CreateAppDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ReferAndEarnDialog",
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
    const referAndEarnSteps = [
      {
        icon: "ri-send-plane-2-line",
        title: "Send Invitation 👍🏻",
        subtitle: "Send your referral link to your friend"
      },
      {
        icon: "ri-pages-line",
        title: "Registration 😎",
        subtitle: "Let them register to our services"
      },
      {
        icon: "ri-gift-line",
        title: "Free Trial  🎉",
        subtitle: "Your friend will get 30 days free trial"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "800",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "refer-and-earn-dialog pa-sm-11 pa-3" }, {
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
                        _push4(`<div class="text-center pb-3"${_scopeId3}><h4 class="text-h4 pb-2"${_scopeId3}> Refer &amp; Earn </h4><div class="text-body-1"${_scopeId3}> Invite your friend to Materialize, if they sign up, you and your friend will get 30 days free trial </div></div>`);
                        _push4(ssrRenderComponent(VRow, { class: "text-center my-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(referAndEarnSteps, (step) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: step.title,
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VAvatar, {
                                        variant: "tonal",
                                        size: "88",
                                        color: "primary",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "40",
                                              icon: step.icon
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                size: "40",
                                                icon: step.icon
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<h6 class="text-h6 mb-2"${_scopeId5}>${ssrInterpolate(step.title)}</h6><div class="text-body-1"${_scopeId5}>${ssrInterpolate(step.subtitle)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, [
                                          createVNode(VAvatar, {
                                            variant: "tonal",
                                            size: "88",
                                            color: "primary",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "40",
                                                icon: step.icon
                                              }, null, 8, ["icon"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(step.title), 1),
                                          createVNode("div", { class: "text-body-1" }, toDisplayString(step.subtitle), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(referAndEarnSteps, (step) => {
                                  return createVNode(VCol, {
                                    key: step.title,
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(VAvatar, {
                                          variant: "tonal",
                                          size: "88",
                                          color: "primary",
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "40",
                                              icon: step.icon
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(step.title), 1),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(step.subtitle), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "mt-9 mb-6" }, null, _parent4, _scopeId3));
                        _push4(`<h5 class="text-h5 mb-5"${_scopeId3}> Invite your friends </h5><p class="mb-2"${_scopeId3}> Enter your friend&#39;s email address and invite them to join Materialize 😍 </p>`);
                        _push4(ssrRenderComponent(VForm, {
                          class: "d-flex align-center gap-4 mb-6",
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                placeholder: "johnDoe@gmail.com",
                                density: "compact"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, { type: "submit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                  } else {
                                    return [
                                      createTextVNode(" Submit ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  placeholder: "johnDoe@gmail.com",
                                  density: "compact"
                                }),
                                createVNode(VBtn, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<h5 class="text-h5 mb-5"${_scopeId3}> Share the referral link </h5><p class="mb-2"${_scopeId3}> You can also copy and send it or share it on your social media. 🚀 </p>`);
                        _push4(ssrRenderComponent(VForm, {
                          class: "d-flex align-center flex-wrap gap-4",
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                placeholder: "http://referral.link",
                                class: "refer-link-input",
                                density: "compact"
                              }, {
                                "append-inner": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      size: "small",
                                      variant: "text"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` COPY LINK `);
                                        } else {
                                          return [
                                            createTextVNode(" COPY LINK ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        size: "small",
                                        variant: "text"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" COPY LINK ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex gap-1"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#3B5998"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "white",
                                      icon: "ri-facebook-circle-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-facebook-circle-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#55ACEE"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "white",
                                      icon: "ri-twitter-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-twitter-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#007BB6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      color: "white",
                                      icon: "ri-linkedin-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-linkedin-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  placeholder: "http://referral.link",
                                  class: "refer-link-input",
                                  density: "compact"
                                }, {
                                  "append-inner": withCtx(() => [
                                    createVNode(VBtn, {
                                      size: "small",
                                      variant: "text"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" COPY LINK ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex gap-1" }, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    class: "rounded",
                                    color: "#3B5998"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-facebook-circle-line"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    icon: "",
                                    class: "rounded",
                                    color: "#55ACEE"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-twitter-line"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    icon: "",
                                    class: "rounded",
                                    color: "#007BB6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        icon: "ri-linkedin-line"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-center pb-3" }, [
                            createVNode("h4", { class: "text-h4 pb-2" }, " Refer & Earn "),
                            createVNode("div", { class: "text-body-1" }, " Invite your friend to Materialize, if they sign up, you and your friend will get 30 days free trial ")
                          ]),
                          createVNode(VRow, { class: "text-center my-6" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(referAndEarnSteps, (step) => {
                                return createVNode(VCol, {
                                  key: step.title,
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(VAvatar, {
                                        variant: "tonal",
                                        size: "88",
                                        color: "primary",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "40",
                                            icon: step.icon
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(step.title), 1),
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(step.subtitle), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mt-9 mb-6" }),
                          createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                          createVNode("p", { class: "mb-2" }, " Enter your friend's email address and invite them to join Materialize 😍 "),
                          createVNode(VForm, {
                            class: "d-flex align-center gap-4 mb-6",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "johnDoe@gmail.com",
                                density: "compact"
                              }),
                              createVNode(VBtn, { type: "submit" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                          createVNode("p", { class: "mb-2" }, " You can also copy and send it or share it on your social media. 🚀 "),
                          createVNode(VForm, {
                            class: "d-flex align-center flex-wrap gap-4",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                placeholder: "http://referral.link",
                                class: "refer-link-input",
                                density: "compact"
                              }, {
                                "append-inner": withCtx(() => [
                                  createVNode(VBtn, {
                                    size: "small",
                                    variant: "text"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" COPY LINK ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex gap-1" }, [
                                createVNode(VBtn, {
                                  icon: "",
                                  class: "rounded",
                                  color: "#3B5998"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      icon: "ri-facebook-circle-line"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  class: "rounded",
                                  color: "#55ACEE"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      icon: "ri-twitter-line"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  icon: "",
                                  class: "rounded",
                                  color: "#007BB6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      icon: "ri-linkedin-line"
                                    })
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
                        createVNode("div", { class: "text-center pb-3" }, [
                          createVNode("h4", { class: "text-h4 pb-2" }, " Refer & Earn "),
                          createVNode("div", { class: "text-body-1" }, " Invite your friend to Materialize, if they sign up, you and your friend will get 30 days free trial ")
                        ]),
                        createVNode(VRow, { class: "text-center my-6" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(referAndEarnSteps, (step) => {
                              return createVNode(VCol, {
                                key: step.title,
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode(VAvatar, {
                                      variant: "tonal",
                                      size: "88",
                                      color: "primary",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "40",
                                          icon: step.icon
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(step.title), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(step.subtitle), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "mt-9 mb-6" }),
                        createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                        createVNode("p", { class: "mb-2" }, " Enter your friend's email address and invite them to join Materialize 😍 "),
                        createVNode(VForm, {
                          class: "d-flex align-center gap-4 mb-6",
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              placeholder: "johnDoe@gmail.com",
                              density: "compact"
                            }),
                            createVNode(VBtn, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                        createVNode("p", { class: "mb-2" }, " You can also copy and send it or share it on your social media. 🚀 "),
                        createVNode(VForm, {
                          class: "d-flex align-center flex-wrap gap-4",
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              placeholder: "http://referral.link",
                              class: "refer-link-input",
                              density: "compact"
                            }, {
                              "append-inner": withCtx(() => [
                                createVNode(VBtn, {
                                  size: "small",
                                  variant: "text"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" COPY LINK ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex gap-1" }, [
                              createVNode(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#3B5998"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "white",
                                    icon: "ri-facebook-circle-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#55ACEE"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "white",
                                    icon: "ri-twitter-line"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                icon: "",
                                class: "rounded",
                                color: "#007BB6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    color: "white",
                                    icon: "ri-linkedin-line"
                                  })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "refer-and-earn-dialog pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    variant: "text",
                    size: "default",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center pb-3" }, [
                        createVNode("h4", { class: "text-h4 pb-2" }, " Refer & Earn "),
                        createVNode("div", { class: "text-body-1" }, " Invite your friend to Materialize, if they sign up, you and your friend will get 30 days free trial ")
                      ]),
                      createVNode(VRow, { class: "text-center my-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(referAndEarnSteps, (step) => {
                            return createVNode(VCol, {
                              key: step.title,
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode(VAvatar, {
                                    variant: "tonal",
                                    size: "88",
                                    color: "primary",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "40",
                                        icon: step.icon
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h6", { class: "text-h6 mb-2" }, toDisplayString(step.title), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(step.subtitle), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, { class: "mt-9 mb-6" }),
                      createVNode("h5", { class: "text-h5 mb-5" }, " Invite your friends "),
                      createVNode("p", { class: "mb-2" }, " Enter your friend's email address and invite them to join Materialize 😍 "),
                      createVNode(VForm, {
                        class: "d-flex align-center gap-4 mb-6",
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            placeholder: "johnDoe@gmail.com",
                            density: "compact"
                          }),
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("h5", { class: "text-h5 mb-5" }, " Share the referral link "),
                      createVNode("p", { class: "mb-2" }, " You can also copy and send it or share it on your social media. 🚀 "),
                      createVNode(VForm, {
                        class: "d-flex align-center flex-wrap gap-4",
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            placeholder: "http://referral.link",
                            class: "refer-link-input",
                            density: "compact"
                          }, {
                            "append-inner": withCtx(() => [
                              createVNode(VBtn, {
                                size: "small",
                                variant: "text"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" COPY LINK ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex gap-1" }, [
                            createVNode(VBtn, {
                              icon: "",
                              class: "rounded",
                              color: "#3B5998"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  color: "white",
                                  icon: "ri-facebook-circle-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "",
                              class: "rounded",
                              color: "#55ACEE"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  color: "white",
                                  icon: "ri-twitter-line"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "",
                              class: "rounded",
                              color: "#007BB6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  color: "white",
                                  icon: "ri-linkedin-line"
                                })
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/ReferAndEarnDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ShareProjectDialog",
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
    const membersList = [
      {
        avatar: avatar1,
        name: "Lester Palmer",
        email: "jerrod98@gmail.com",
        permission: "Can Edit"
      },
      {
        avatar: avatar2,
        name: "Mattie Blair",
        email: "prudence.boehm@yahoo.com",
        permission: "Owner"
      },
      {
        avatar: avatar3,
        name: "Marvin Wheeler",
        email: "rumet@jujpejah.net",
        permission: "Can Comment"
      },
      {
        avatar: avatar4,
        name: "Nannie Ford",
        email: "negza@nuv.io",
        permission: "Can View"
      },
      {
        avatar: avatar5,
        name: "Julian Murphy",
        email: "lunebame@umdomgu.net",
        permission: "Can Edit"
      },
      {
        avatar: avatar6,
        name: "Sophie Gilbert",
        email: "ha@sugit.gov",
        permission: "Can View"
      },
      {
        avatar: avatar7,
        name: "Chris Watkins",
        email: "zokap@mak.org",
        permission: "Can Comment"
      },
      {
        avatar: avatar8,
        name: "Adelaide Nichols",
        email: "ujinomu@jigo.com",
        permission: "Can Edit"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogCloseBtn = _sfc_main$4;
      _push(ssrRenderComponent(VDialog, mergeProps({
        "model-value": props.isDialogVisible,
        "max-width": "900",
        "onUpdate:modelValue": dialogVisibleUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "share-project-dialog pa-sm-11 pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogCloseBtn, {
                    size: "default",
                    variant: "text",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-6"${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}> Share Project </h4><p class="text-body-1"${_scopeId3}> Share project with the team members </p></div><div class="mb-6"${_scopeId3}><h5 class="text-h5 text-medium-emphasis mb-2"${_scopeId3}> Add Members </h5>`);
                        _push4(ssrRenderComponent(VAutocomplete, {
                          items: membersList,
                          "item-title": "name",
                          "item-value": "name",
                          density: "compact",
                          placeholder: "Add project members..."
                        }, {
                          item: withCtx(({ props: listItemProp, item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, listItemProp, {
                                prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAvatar, {
                                      image: item.raw.avatar,
                                      size: "30"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VAvatar, {
                                        image: item.raw.avatar,
                                        size: "30"
                                      }, null, 8, ["image"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, listItemProp, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      image: item.raw.avatar,
                                      size: "30"
                                    }, null, 8, ["image"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><h5 class="text-h5 mb-4"${_scopeId3}> 8 Members </h5>`);
                        _push4(ssrRenderComponent(VList, { class: "card-list mb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(membersList, (member) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: member.name
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        image: member.avatar,
                                        class: "me-1"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          image: member.avatar,
                                          class: "me-1"
                                        }, null, 8, ["image"])
                                      ];
                                    }
                                  }),
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "text",
                                        color: "secondary",
                                        icon: _ctx.$vuetify.display.xs
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (!_ctx.$vuetify.display.xs) {
                                              _push7(`<!--[-->${ssrInterpolate(member.permission)}<!--]-->`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(ssrRenderComponent(VIcon, {
                                              end: "",
                                              icon: "ri-arrow-down-s-line",
                                              size: "16",
                                              class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VMenu, { activator: "parent" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VList, {
                                                    selected: [member.permission]
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<!--[-->`);
                                                        ssrRenderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                          _push9(ssrRenderComponent(VListItem, {
                                                            key: index,
                                                            value: item
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(ssrRenderComponent(VListItemTitle, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(item)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(item), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(item), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        });
                                                        _push9(`<!--]-->`);
                                                      } else {
                                                        return [
                                                          (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                            return createVNode(VListItem, {
                                                              key: index,
                                                              value: item
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value"]);
                                                          }), 64))
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VList, {
                                                      selected: [member.permission]
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                          return createVNode(VListItem, {
                                                            key: index,
                                                            value: item
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(item), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value"]);
                                                        }), 64))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["selected"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                                createTextVNode(toDisplayString(member.permission), 1)
                                              ], 64)) : createCommentVNode("", true),
                                              createVNode(VIcon, {
                                                end: "",
                                                icon: "ri-arrow-down-s-line",
                                                size: "16",
                                                class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                              }, null, 8, ["class"]),
                                              createVNode(VMenu, { activator: "parent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, {
                                                    selected: [member.permission]
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                        return createVNode(VListItem, {
                                                          key: index,
                                                          value: item
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 64))
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["selected"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          color: "secondary",
                                          icon: _ctx.$vuetify.display.xs
                                        }, {
                                          default: withCtx(() => [
                                            !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                              createTextVNode(toDisplayString(member.permission), 1)
                                            ], 64)) : createCommentVNode("", true),
                                            createVNode(VIcon, {
                                              end: "",
                                              icon: "ri-arrow-down-s-line",
                                              size: "16",
                                              class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                            }, null, 8, ["class"]),
                                            createVNode(VMenu, { activator: "parent" }, {
                                              default: withCtx(() => [
                                                createVNode(VList, {
                                                  selected: [member.permission]
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                      return createVNode(VListItem, {
                                                        key: index,
                                                        value: item
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 64))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["selected"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["icon"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-high-emphasis" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(member.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(member.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(member.email)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(member.email), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-high-emphasis" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(member.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(member.email), 1)
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
                                (openBlock(), createBlock(Fragment, null, renderList(membersList, (member) => {
                                  return createVNode(VListItem, {
                                    key: member.name
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        image: member.avatar,
                                        class: "me-1"
                                      }, null, 8, ["image"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        color: "secondary",
                                        icon: _ctx.$vuetify.display.xs
                                      }, {
                                        default: withCtx(() => [
                                          !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createTextVNode(toDisplayString(member.permission), 1)
                                          ], 64)) : createCommentVNode("", true),
                                          createVNode(VIcon, {
                                            end: "",
                                            icon: "ri-arrow-down-s-line",
                                            size: "16",
                                            class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                          }, null, 8, ["class"]),
                                          createVNode(VMenu, { activator: "parent" }, {
                                            default: withCtx(() => [
                                              createVNode(VList, {
                                                selected: [member.permission]
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                    return createVNode(VListItem, {
                                                      key: index,
                                                      value: item
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ]),
                                                _: 2
                                              }, 1032, ["selected"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-high-emphasis" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(member.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(member.email), 1)
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
                        _push4(`<div class="d-flex justify-center justify-sm-space-between align-center flex-wrap gap-3"${_scopeId3}><div class="text-body-1 text-high-emphasis font-weight-medium d-flex align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "ri-group-line",
                          size: "20",
                          class: "me-2"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Public to Master - Pixinvent</span></div>`);
                        _push4(ssrRenderComponent(VBtn, { "prepend-icon": "ri-link" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Copy Project Link `);
                            } else {
                              return [
                                createTextVNode(" Copy Project Link ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode("h4", { class: "text-h4 mb-2" }, " Share Project "),
                            createVNode("p", { class: "text-body-1" }, " Share project with the team members ")
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("h5", { class: "text-h5 text-medium-emphasis mb-2" }, " Add Members "),
                            createVNode(VAutocomplete, {
                              items: membersList,
                              "item-title": "name",
                              "item-value": "name",
                              density: "compact",
                              placeholder: "Add project members..."
                            }, {
                              item: withCtx(({ props: listItemProp, item }) => [
                                createVNode(VListItem, listItemProp, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      image: item.raw.avatar,
                                      size: "30"
                                    }, null, 8, ["image"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("h5", { class: "text-h5 mb-4" }, " 8 Members "),
                          createVNode(VList, { class: "card-list mb-6" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(membersList, (member) => {
                                return createVNode(VListItem, {
                                  key: member.name
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      image: member.avatar,
                                      class: "me-1"
                                    }, null, 8, ["image"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "secondary",
                                      icon: _ctx.$vuetify.display.xs
                                    }, {
                                      default: withCtx(() => [
                                        !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(member.permission), 1)
                                        ], 64)) : createCommentVNode("", true),
                                        createVNode(VIcon, {
                                          end: "",
                                          icon: "ri-arrow-down-s-line",
                                          size: "16",
                                          class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                        }, null, 8, ["class"]),
                                        createVNode(VMenu, { activator: "parent" }, {
                                          default: withCtx(() => [
                                            createVNode(VList, {
                                              selected: [member.permission]
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                  return createVNode(VListItem, {
                                                    key: index,
                                                    value: item
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ]),
                                              _: 2
                                            }, 1032, ["selected"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-high-emphasis" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(member.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(member.email), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-3" }, [
                            createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium d-flex align-center" }, [
                              createVNode(VIcon, {
                                icon: "ri-group-line",
                                size: "20",
                                class: "me-2"
                              }),
                              createVNode("span", null, "Public to Master - Pixinvent")
                            ]),
                            createVNode(VBtn, { "prepend-icon": "ri-link" }, {
                              default: withCtx(() => [
                                createTextVNode(" Copy Project Link ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogCloseBtn, {
                      size: "default",
                      variant: "text",
                      onClick: ($event) => emit("update:isDialogVisible", false)
                    }, null, 8, ["onClick"]),
                    createVNode(VCardText, { class: "pt-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-6" }, [
                          createVNode("h4", { class: "text-h4 mb-2" }, " Share Project "),
                          createVNode("p", { class: "text-body-1" }, " Share project with the team members ")
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h5", { class: "text-h5 text-medium-emphasis mb-2" }, " Add Members "),
                          createVNode(VAutocomplete, {
                            items: membersList,
                            "item-title": "name",
                            "item-value": "name",
                            density: "compact",
                            placeholder: "Add project members..."
                          }, {
                            item: withCtx(({ props: listItemProp, item }) => [
                              createVNode(VListItem, listItemProp, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    image: item.raw.avatar,
                                    size: "30"
                                  }, null, 8, ["image"])
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("h5", { class: "text-h5 mb-4" }, " 8 Members "),
                        createVNode(VList, { class: "card-list mb-6" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(membersList, (member) => {
                              return createVNode(VListItem, {
                                key: member.name
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    image: member.avatar,
                                    class: "me-1"
                                  }, null, 8, ["image"])
                                ]),
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    color: "secondary",
                                    icon: _ctx.$vuetify.display.xs
                                  }, {
                                    default: withCtx(() => [
                                      !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode(toDisplayString(member.permission), 1)
                                      ], 64)) : createCommentVNode("", true),
                                      createVNode(VIcon, {
                                        end: "",
                                        icon: "ri-arrow-down-s-line",
                                        size: "16",
                                        class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                      }, null, 8, ["class"]),
                                      createVNode(VMenu, { activator: "parent" }, {
                                        default: withCtx(() => [
                                          createVNode(VList, {
                                            selected: [member.permission]
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                                return createVNode(VListItem, {
                                                  key: index,
                                                  value: item
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ]),
                                            _: 2
                                          }, 1032, ["selected"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["icon"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "text-high-emphasis" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(member.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(member.email), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-3" }, [
                          createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium d-flex align-center" }, [
                            createVNode(VIcon, {
                              icon: "ri-group-line",
                              size: "20",
                              class: "me-2"
                            }),
                            createVNode("span", null, "Public to Master - Pixinvent")
                          ]),
                          createVNode(VBtn, { "prepend-icon": "ri-link" }, {
                            default: withCtx(() => [
                              createTextVNode(" Copy Project Link ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "share-project-dialog pa-sm-11 pa-3" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogCloseBtn, {
                    size: "default",
                    variant: "text",
                    onClick: ($event) => emit("update:isDialogVisible", false)
                  }, null, 8, ["onClick"]),
                  createVNode(VCardText, { class: "pt-5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-6" }, [
                        createVNode("h4", { class: "text-h4 mb-2" }, " Share Project "),
                        createVNode("p", { class: "text-body-1" }, " Share project with the team members ")
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h5", { class: "text-h5 text-medium-emphasis mb-2" }, " Add Members "),
                        createVNode(VAutocomplete, {
                          items: membersList,
                          "item-title": "name",
                          "item-value": "name",
                          density: "compact",
                          placeholder: "Add project members..."
                        }, {
                          item: withCtx(({ props: listItemProp, item }) => [
                            createVNode(VListItem, listItemProp, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  image: item.raw.avatar,
                                  size: "30"
                                }, null, 8, ["image"])
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("h5", { class: "text-h5 mb-4" }, " 8 Members "),
                      createVNode(VList, { class: "card-list mb-6" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(membersList, (member) => {
                            return createVNode(VListItem, {
                              key: member.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  image: member.avatar,
                                  class: "me-1"
                                }, null, 8, ["image"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "secondary",
                                  icon: _ctx.$vuetify.display.xs
                                }, {
                                  default: withCtx(() => [
                                    !_ctx.$vuetify.display.xs ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(toDisplayString(member.permission), 1)
                                    ], 64)) : createCommentVNode("", true),
                                    createVNode(VIcon, {
                                      end: "",
                                      icon: "ri-arrow-down-s-line",
                                      size: "16",
                                      class: _ctx.$vuetify.display.xs ? "ms-0" : ""
                                    }, null, 8, ["class"]),
                                    createVNode(VMenu, { activator: "parent" }, {
                                      default: withCtx(() => [
                                        createVNode(VList, {
                                          selected: [member.permission]
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(["Owner", "Can Edit", "Can Comment", "Can View"], (item, index) => {
                                              return createVNode(VListItem, {
                                                key: index,
                                                value: item
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ]),
                                          _: 2
                                        }, 1032, ["selected"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["icon"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "text-high-emphasis" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(member.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(member.email), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex justify-center justify-sm-space-between align-center flex-wrap gap-3" }, [
                        createVNode("div", { class: "text-body-1 text-high-emphasis font-weight-medium d-flex align-center" }, [
                          createVNode(VIcon, {
                            icon: "ri-group-line",
                            size: "20",
                            class: "me-2"
                          }),
                          createVNode("span", null, "Public to Master - Pixinvent")
                        ]),
                        createVNode(VBtn, { "prepend-icon": "ri-link" }, {
                          default: withCtx(() => [
                            createTextVNode(" Copy Project Link ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/dialogs/ShareProjectDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isCardAddDialogVisible = ref(false);
    const isPricingPlanDialogVisible = ref(false);
    const isEditAddressDialogVisible = ref(false);
    const isTwoFactorDialogOpen = ref(false);
    const isUserInfoEditDialogVisible = ref(false);
    const isShareProjectDialogVisible = ref(false);
    const isReferAndEarnDialogVisible = ref(false);
    const isPaymentProvidersDialogVisible = ref(false);
    const isAddPaymentMethodsDialogVisible = ref(false);
    const isCreateAppVisible = ref(false);
    const userData = {
      id: 110,
      fullName: "Salena Kyle",
      company: "Wayne Enterprises",
      firstName: "Selena",
      lastName: "Kyle",
      username: "charwomen1940",
      role: "Admin",
      currentPlan: "Pro",
      country: "USA",
      contact: "(829) 537-0057",
      email: "salenakyle@gmail.com",
      isBillingAddress: true,
      status: "active",
      taxId: "Tax-8894",
      language: ["English"]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShareProjectDialog = _sfc_main$1;
      const _component_CardAddEditDialog = _sfc_main$6;
      const _component_PricingPlanDialog = _sfc_main$7;
      const _component_ReferAndEarnDialog = _sfc_main$2;
      const _component_AddEditAddressDialog = _sfc_main$8;
      const _component_CreateAppDialog = _sfc_main$3;
      const _component_TwoFactorAuthDialog = _sfc_main$9;
      const _component_UserInfoEditDialog = _sfc_main$a;
      const _component_PaymentProvidersDialog = _sfc_main$b;
      const _component_AddPaymentMethodDialog = _sfc_main$c;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-file-pdf-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Share Project </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-file-pdf-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Share Project ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Quickly collect the credit card details, built in input mask and form validation support. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isShareProjectDialogVisible.value = !unref(isShareProjectDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isShareProjectDialogVisible.value = !unref(isShareProjectDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ShareProjectDialog, {
                          isDialogVisible: unref(isShareProjectDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isShareProjectDialogVisible) ? isShareProjectDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-file-pdf-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Share Project ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isShareProjectDialogVisible.value = !unref(isShareProjectDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ShareProjectDialog, {
                            isDialogVisible: unref(isShareProjectDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isShareProjectDialogVisible) ? isShareProjectDialogVisible.value = $event : null
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-file-pdf-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Share Project ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isShareProjectDialogVisible.value = !unref(isShareProjectDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ShareProjectDialog, {
                          isDialogVisible: unref(isShareProjectDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isShareProjectDialogVisible) ? isShareProjectDialogVisible.value = $event : null
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Add New Card </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-bank-card-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Add New Card ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Quickly collect the credit card details, built in input mask and form validation support. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CardAddEditDialog, {
                          isDialogVisible: unref(isCardAddDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Add New Card ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardAddEditDialog, {
                            isDialogVisible: unref(isCardAddDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-bank-card-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Add New Card ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CardAddEditDialog, {
                          isDialogVisible: unref(isCardAddDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-money-dollar-circle-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Pricing </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-money-dollar-circle-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Pricing ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Elegant pricing options dialog popup example, easy to use in any page. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Elegant pricing options dialog popup example, easy to use in any page. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PricingPlanDialog, {
                          "is-dialog-visible": unref(isPricingPlanDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-money-dollar-circle-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Pricing ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Elegant pricing options dialog popup example, easy to use in any page. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_PricingPlanDialog, {
                            "is-dialog-visible": unref(isPricingPlanDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                          }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-money-dollar-circle-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Pricing ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Elegant pricing options dialog popup example, easy to use in any page. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_PricingPlanDialog, {
                          "is-dialog-visible": unref(isPricingPlanDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                        }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-gift-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Refer &amp; Earn </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-gift-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Refer & Earn ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Use Refer &amp; Earn modal to encourage your exiting customers refer their friends &amp; colleague. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isReferAndEarnDialogVisible.value = !unref(isReferAndEarnDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isReferAndEarnDialogVisible.value = !unref(isReferAndEarnDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ReferAndEarnDialog, {
                          "is-dialog-visible": unref(isReferAndEarnDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isReferAndEarnDialogVisible) ? isReferAndEarnDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-gift-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Refer & Earn ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isReferAndEarnDialogVisible.value = !unref(isReferAndEarnDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ReferAndEarnDialog, {
                            "is-dialog-visible": unref(isReferAndEarnDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isReferAndEarnDialogVisible) ? isReferAndEarnDialogVisible.value = $event : null
                          }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-gift-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Refer & Earn ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isReferAndEarnDialogVisible.value = !unref(isReferAndEarnDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ReferAndEarnDialog, {
                          "is-dialog-visible": unref(isReferAndEarnDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isReferAndEarnDialogVisible) ? isReferAndEarnDialogVisible.value = $event : null
                        }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-home-3-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Add New Address </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-home-3-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Add New Address ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Ready to use form to collect user address data with validation and custom input support. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Ready to use form to collect user address data with validation and custom input support. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AddEditAddressDialog, {
                          isDialogVisible: unref(isEditAddressDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-home-3-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Add New Address ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Ready to use form to collect user address data with validation and custom input support. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AddEditAddressDialog, {
                            isDialogVisible: unref(isEditAddressDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-home-3-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Add New Address ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Ready to use form to collect user address data with validation and custom input support. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AddEditAddressDialog, {
                          isDialogVisible: unref(isEditAddressDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-box-3-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Create App </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-box-3-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Create App ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Provide application data with this form to create the app dialog popup example, easy to use in any page. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isCreateAppVisible.value = !unref(isCreateAppVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Provide application data with this form to create the app dialog popup example, easy to use in any page. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isCreateAppVisible.value = !unref(isCreateAppVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
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
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-box-3-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Create App ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Provide application data with this form to create the app dialog popup example, easy to use in any page. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isCreateAppVisible.value = !unref(isCreateAppVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
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
                  _push3(ssrRenderComponent(_component_CreateAppDialog, {
                    "is-dialog-visible": unref(isCreateAppVisible),
                    "onUpdate:isDialogVisible": ($event) => isRef(isCreateAppVisible) ? isCreateAppVisible.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-box-3-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Create App ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Provide application data with this form to create the app dialog popup example, easy to use in any page. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isCreateAppVisible.value = !unref(isCreateAppVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CreateAppDialog, {
                      "is-dialog-visible": unref(isCreateAppVisible),
                      "onUpdate:isDialogVisible": ($event) => isRef(isCreateAppVisible) ? isCreateAppVisible.value = $event : null
                    }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-lock-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Two Factor Auth </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-lock-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Two Factor Auth ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Enhance your application security by enabling two factor authentication. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isTwoFactorDialogOpen.value = !unref(isTwoFactorDialogOpen)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isTwoFactorDialogOpen.value = !unref(isTwoFactorDialogOpen)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TwoFactorAuthDialog, {
                          isDialogVisible: unref(isTwoFactorDialogOpen),
                          "onUpdate:isDialogVisible": ($event) => isRef(isTwoFactorDialogOpen) ? isTwoFactorDialogOpen.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-lock-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Two Factor Auth ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isTwoFactorDialogOpen.value = !unref(isTwoFactorDialogOpen)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TwoFactorAuthDialog, {
                            isDialogVisible: unref(isTwoFactorDialogOpen),
                            "onUpdate:isDialogVisible": ($event) => isRef(isTwoFactorDialogOpen) ? isTwoFactorDialogOpen.value = $event : null
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-lock-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Two Factor Auth ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isTwoFactorDialogOpen.value = !unref(isTwoFactorDialogOpen)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TwoFactorAuthDialog, {
                          isDialogVisible: unref(isTwoFactorDialogOpen),
                          "onUpdate:isDialogVisible": ($event) => isRef(isTwoFactorDialogOpen) ? isTwoFactorDialogOpen.value = $event : null
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-user-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Edit User Info </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-user-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Edit User Info ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Enhance your application security by enabling two factor authentication. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UserInfoEditDialog, {
                          isDialogVisible: unref(isUserInfoEditDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null,
                          "user-data": userData
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-user-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Edit User Info ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UserInfoEditDialog, {
                            isDialogVisible: unref(isUserInfoEditDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null,
                            "user-data": userData
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-user-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Edit User Info ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UserInfoEditDialog, {
                          isDialogVisible: unref(isUserInfoEditDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null,
                          "user-data": userData
                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Payment Providers </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-bank-card-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Payment Providers ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Elegant payment options modal popup example, easy to use in any page. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isPaymentProvidersDialogVisible.value = !unref(isPaymentProvidersDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Elegant payment options modal popup example, easy to use in any page. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isPaymentProvidersDialogVisible.value = !unref(isPaymentProvidersDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PaymentProvidersDialog, {
                          "is-dialog-visible": unref(isPaymentProvidersDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isPaymentProvidersDialogVisible) ? isPaymentProvidersDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Payment Providers ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Elegant payment options modal popup example, easy to use in any page. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isPaymentProvidersDialogVisible.value = !unref(isPaymentProvidersDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_PaymentProvidersDialog, {
                            "is-dialog-visible": unref(isPaymentProvidersDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isPaymentProvidersDialogVisible) ? isPaymentProvidersDialogVisible.value = $event : null
                          }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-bank-card-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Payment Providers ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Elegant payment options modal popup example, easy to use in any page. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isPaymentProvidersDialogVisible.value = !unref(isPaymentProvidersDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_PaymentProvidersDialog, {
                          "is-dialog-visible": unref(isPaymentProvidersDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isPaymentProvidersDialogVisible) ? isPaymentProvidersDialogVisible.value = $event : null
                        }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-2-line"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h5 class="text-h5"${_scopeId4}> Add Payment Methods </h5>`);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "28",
                                  icon: "ri-bank-card-2-line"
                                }),
                                createVNode("h5", { class: "text-h5" }, " Add Payment Methods ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-base clamp-text"${_scopeId4}> Elegant payment methods modal popup example, easy to use in any page. </p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !unref(isAddPaymentMethodsDialogVisible)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Show `);
                                  } else {
                                    return [
                                      createTextVNode(" Show ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", { class: "text-base clamp-text" }, " Elegant payment methods modal popup example, easy to use in any page. "),
                                createVNode(VBtn, {
                                  onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !unref(isAddPaymentMethodsDialogVisible)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Show ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AddPaymentMethodDialog, {
                          "is-dialog-visible": unref(isAddPaymentMethodsDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isAddPaymentMethodsDialogVisible) ? isAddPaymentMethodsDialogVisible.value = $event : null
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "28",
                                icon: "ri-bank-card-2-line"
                              }),
                              createVNode("h5", { class: "text-h5" }, " Add Payment Methods ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-base clamp-text" }, " Elegant payment methods modal popup example, easy to use in any page. "),
                              createVNode(VBtn, {
                                onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !unref(isAddPaymentMethodsDialogVisible)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Show ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AddPaymentMethodDialog, {
                            "is-dialog-visible": unref(isAddPaymentMethodsDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isAddPaymentMethodsDialogVisible) ? isAddPaymentMethodsDialogVisible.value = $event : null
                          }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "28",
                              icon: "ri-bank-card-2-line"
                            }),
                            createVNode("h5", { class: "text-h5" }, " Add Payment Methods ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-base clamp-text" }, " Elegant payment methods modal popup example, easy to use in any page. "),
                            createVNode(VBtn, {
                              onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !unref(isAddPaymentMethodsDialogVisible)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Show ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AddPaymentMethodDialog, {
                          "is-dialog-visible": unref(isAddPaymentMethodsDialogVisible),
                          "onUpdate:isDialogVisible": ($event) => isRef(isAddPaymentMethodsDialogVisible) ? isAddPaymentMethodsDialogVisible.value = $event : null
                        }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-file-pdf-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Share Project ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isShareProjectDialogVisible.value = !unref(isShareProjectDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ShareProjectDialog, {
                        isDialogVisible: unref(isShareProjectDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isShareProjectDialogVisible) ? isShareProjectDialogVisible.value = $event : null
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-bank-card-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Add New Card ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Quickly collect the credit card details, built in input mask and form validation support. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isCardAddDialogVisible.value = !unref(isCardAddDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardAddEditDialog, {
                        isDialogVisible: unref(isCardAddDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isCardAddDialogVisible) ? isCardAddDialogVisible.value = $event : null
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-money-dollar-circle-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Pricing ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Elegant pricing options dialog popup example, easy to use in any page. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isPricingPlanDialogVisible.value = !unref(isPricingPlanDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_PricingPlanDialog, {
                        "is-dialog-visible": unref(isPricingPlanDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                      }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-gift-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Refer & Earn ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isReferAndEarnDialogVisible.value = !unref(isReferAndEarnDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ReferAndEarnDialog, {
                        "is-dialog-visible": unref(isReferAndEarnDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isReferAndEarnDialogVisible) ? isReferAndEarnDialogVisible.value = $event : null
                      }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-home-3-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Add New Address ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Ready to use form to collect user address data with validation and custom input support. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isEditAddressDialogVisible.value = !unref(isEditAddressDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AddEditAddressDialog, {
                        isDialogVisible: unref(isEditAddressDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isEditAddressDialogVisible) ? isEditAddressDialogVisible.value = $event : null
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-box-3-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Create App ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Provide application data with this form to create the app dialog popup example, easy to use in any page. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isCreateAppVisible.value = !unref(isCreateAppVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CreateAppDialog, {
                    "is-dialog-visible": unref(isCreateAppVisible),
                    "onUpdate:isDialogVisible": ($event) => isRef(isCreateAppVisible) ? isCreateAppVisible.value = $event : null
                  }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-lock-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Two Factor Auth ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isTwoFactorDialogOpen.value = !unref(isTwoFactorDialogOpen)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TwoFactorAuthDialog, {
                        isDialogVisible: unref(isTwoFactorDialogOpen),
                        "onUpdate:isDialogVisible": ($event) => isRef(isTwoFactorDialogOpen) ? isTwoFactorDialogOpen.value = $event : null
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-user-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Edit User Info ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Enhance your application security by enabling two factor authentication. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isUserInfoEditDialogVisible.value = !unref(isUserInfoEditDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UserInfoEditDialog, {
                        isDialogVisible: unref(isUserInfoEditDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isUserInfoEditDialogVisible) ? isUserInfoEditDialogVisible.value = $event : null,
                        "user-data": userData
                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-bank-card-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Payment Providers ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Elegant payment options modal popup example, easy to use in any page. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isPaymentProvidersDialogVisible.value = !unref(isPaymentProvidersDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_PaymentProvidersDialog, {
                        "is-dialog-visible": unref(isPaymentProvidersDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isPaymentProvidersDialogVisible) ? isPaymentProvidersDialogVisible.value = $event : null
                      }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "text-high-emphasis text-center" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex flex-column align-center gap-2" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            size: "28",
                            icon: "ri-bank-card-2-line"
                          }),
                          createVNode("h5", { class: "text-h5" }, " Add Payment Methods ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base clamp-text" }, " Elegant payment methods modal popup example, easy to use in any page. "),
                          createVNode(VBtn, {
                            onClick: ($event) => isAddPaymentMethodsDialogVisible.value = !unref(isAddPaymentMethodsDialogVisible)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Show ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AddPaymentMethodDialog, {
                        "is-dialog-visible": unref(isAddPaymentMethodsDialogVisible),
                        "onUpdate:isDialogVisible": ($event) => isRef(isAddPaymentMethodsDialogVisible) ? isAddPaymentMethodsDialogVisible.value = $event : null
                      }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/dialog-examples/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
