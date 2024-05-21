import { ref, withCtx, unref, createVNode, createTextVNode, withModifiers, isRef, useSSRContext, withAsyncContext, computed, resolveComponent, toDisplayString, mergeProps, openBlock, createBlock, withDirectives, vShow, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./ConfirmDialog-I9elYGet.js";
import { V as VBtn, a as VIcon, c as avatar1, g as VProgressLinear } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VAvatar } from "./VAvatar-D2wIwigQ.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VCheckbox } from "./VCheckbox-DjbFyhx3.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./TwoFactorAuthDialog-DSsmJXL3.js";
import { _ as _sfc_main$9 } from "./PricingPlanDialog-ChNiCir3.js";
import { a as avatarText } from "./formatters-DpL1jrjT.js";
import { p as paginationMeta } from "./paginationMeta-DyhZDumY.js";
import { _ as _sfc_main$8 } from "./MoreBtn-CtW8Gck8.js";
import { u as useApi } from "./useApi-Cd0G3DOd.js";
import { c as createUrl } from "./createUrl-BkmAj-zP.js";
import { $ as $api } from "./api-CZIUXbrm.js";
import { V as VSpacer } from "./VSpacer-DCJACtOB.js";
import { V as VDataTableServer } from "./VDataTableServer-SjlbNBJG.js";
import { V as VTooltip } from "./VTooltip-CVKEAyhs.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { m as mastercard, v as visa, g as google, s as slack, a as github, b as mailchimp, c as asana, f as facebook, t as twitter, l as linkedin, d as behance } from "./twitter-DQv2g5Ku.js";
import { V as VAlert } from "./VAlert-CqjinC0F.js";
import { V as VRadioGroup, a as VRadio } from "./VRadioGroup-BdG5naH9.js";
import { V as VSwitch } from "./VSwitch-nG7fxOCQ.js";
import { d as dribbleLogo } from "./dribbble-C_GJZU6f.js";
import { V as VList, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VList-Bay5Fixr.js";
import { V as VListItemAction } from "./VListItemAction-VqS_ibV2.js";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { V as VDataTable } from "./VDataTable-m6ejIeVU.js";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { V as VTabs, a as VTab } from "./VTabs-CTFJEkKM.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import "./VDialog-JSJ1TRMg.js";
import "./VOverlay-BlPDiq4k.js";
import "./easing-BikAOx6-.js";
import "./lazy-kVEey9ha.js";
import "./scopeId-3C34eX5s.js";
import "./forwardRefs-IZGbB77j.js";
import "./dialog-transition-CtM2qLK8.js";
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
import "./form-DJQTvsmB.js";
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VField-DXNiYeaA.js";
import "./VInput-Bla8Vlgt.js";
import "./VMenu-KUYgjPyD.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./DialogCloseBtn-h97PlnE6.js";
import "./CustomRadios-DrYzSNcj.js";
import "./AppPricing-DLCFY0_b.js";
import "./helpers-DX2i3Kdq.js";
import "ufo";
import "ofetch";
import "./VSlideGroup-Bvz86g7R.js";
import "./ssrBoot-Co4_dNdy.js";
import "./VPagination-BH_qhohv.js";
import "./filter-BC4fOy6c.js";
const _sfc_main$6 = {
  __name: "AccountSettingsAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const accountData = {
      avatarImg: avatar1,
      firstName: "john",
      lastName: "Doe",
      email: "johnDoe@example.com",
      org: "Pixinvent",
      phone: "+1 (917) 543-9876",
      address: "123 Main St, New York, NY 10001",
      state: "New York",
      zip: "10001",
      country: ["USA"],
      language: ["English"],
      timezone: "(GMT-11:00) International Date Line West",
      currency: "USD"
    };
    const refInputEl = ref();
    const isConfirmDialogOpen = ref(false);
    const accountDataLocal = ref(structuredClone(accountData));
    const isAccountDeactivated = ref(false);
    const validateAccountDeactivation = [(v) => !!v || "Please confirm account deactivation"];
    const resetForm = () => {
      accountDataLocal.value = structuredClone(accountData);
    };
    const changeAvatar = (file) => {
      const fileReader = new FileReader();
      const { files } = file.target;
      if (files && files.length) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = () => {
          if (typeof fileReader.result === "string")
            accountDataLocal.value.avatarImg = fileReader.result;
        };
      }
    };
    const resetAvatar = () => {
      accountDataLocal.value.avatarImg = accountData.avatarImg;
    };
    const timezones = [
      "(GMT-11:00) International Date Line West",
      "(GMT-11:00) Midway Island",
      "(GMT-10:00) Hawaii",
      "(GMT-09:00) Alaska",
      "(GMT-08:00) Pacific Time (US & Canada)",
      "(GMT-08:00) Tijuana",
      "(GMT-07:00) Arizona",
      "(GMT-07:00) Chihuahua",
      "(GMT-07:00) La Paz",
      "(GMT-07:00) Mazatlan",
      "(GMT-07:00) Mountain Time (US & Canada)",
      "(GMT-06:00) Central America",
      "(GMT-06:00) Central Time (US & Canada)",
      "(GMT-06:00) Guadalajara",
      "(GMT-06:00) Mexico City",
      "(GMT-06:00) Monterrey",
      "(GMT-06:00) Saskatchewan",
      "(GMT-05:00) Bogota",
      "(GMT-05:00) Eastern Time (US & Canada)",
      "(GMT-05:00) Indiana (East)",
      "(GMT-05:00) Lima",
      "(GMT-05:00) Quito",
      "(GMT-04:00) Atlantic Time (Canada)",
      "(GMT-04:00) Caracas",
      "(GMT-04:00) La Paz",
      "(GMT-04:00) Santiago",
      "(GMT-03:30) Newfoundland",
      "(GMT-03:00) Brasilia",
      "(GMT-03:00) Buenos Aires",
      "(GMT-03:00) Georgetown",
      "(GMT-03:00) Greenland",
      "(GMT-02:00) Mid-Atlantic",
      "(GMT-01:00) Azores",
      "(GMT-01:00) Cape Verde Is.",
      "(GMT+00:00) Casablanca",
      "(GMT+00:00) Dublin",
      "(GMT+00:00) Edinburgh",
      "(GMT+00:00) Lisbon",
      "(GMT+00:00) London"
    ];
    const currencies = [
      "USD",
      "EUR",
      "GBP",
      "AUD",
      "BRL",
      "CAD",
      "CNY",
      "CZK",
      "DKK",
      "HKD",
      "HUF",
      "INR"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConfirmDialog = _sfc_main$7;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex mb-10"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                rounded: "",
                                size: "100",
                                class: "me-6",
                                image: unref(accountDataLocal).avatarImg
                              }, null, _parent5, _scopeId4));
                              _push5(`<form class="d-flex flex-column justify-center gap-4"${_scopeId4}><div class="d-flex flex-wrap gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-upload-cloud-line",
                                      class: "d-sm-none"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="d-none d-sm-block"${_scopeId5}>Upload new photo</span>`);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "ri-upload-cloud-line",
                                        class: "d-sm-none"
                                      }),
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<input type="file" name="file" accept=".jpeg,.png,.jpg,GIF" hidden${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                type: "reset",
                                color: "error",
                                variant: "outlined",
                                onClick: resetAvatar
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="d-none d-sm-block"${_scopeId5}>Reset</span>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-refresh-line",
                                      class: "d-sm-none"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                      createVNode(VIcon, {
                                        icon: "ri-refresh-line",
                                        class: "d-sm-none"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><p class="text-body-1 mb-0"${_scopeId4}> Allowed JPG, GIF or PNG. Max size of 800K </p></form></div>`);
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountDataLocal).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                  placeholder: "John",
                                                  label: "First Name"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                    placeholder: "John",
                                                    label: "First Name"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountDataLocal).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                  placeholder: "Doe",
                                                  label: "Last Name"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                    placeholder: "Doe",
                                                    label: "Last Name"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                  label: "E-mail",
                                                  placeholder: "johndoe@gmail.com",
                                                  type: "email"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).email,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                    label: "E-mail",
                                                    placeholder: "johndoe@gmail.com",
                                                    type: "email"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).org,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                  label: "Organization",
                                                  placeholder: "Pixinvent"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).org,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                    label: "Organization",
                                                    placeholder: "Pixinvent"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).phone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                  label: "Phone Number",
                                                  placeholder: "+1 (917) 543-9876"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).phone,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                    label: "Phone Number",
                                                    placeholder: "+1 (917) 543-9876"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).address,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                  label: "Address",
                                                  placeholder: "123 Main St, New York, NY 10001"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).address,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                    label: "Address",
                                                    placeholder: "123 Main St, New York, NY 10001"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).state,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                  label: "State",
                                                  placeholder: "New York"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).state,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                    label: "State",
                                                    placeholder: "New York"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  modelValue: unref(accountDataLocal).zip,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                  label: "Zip Code",
                                                  placeholder: "10001"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountDataLocal).zip,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                    label: "Zip Code",
                                                    placeholder: "10001"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(accountDataLocal).country,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                  multiple: "",
                                                  chips: "",
                                                  "closable-chips": "",
                                                  label: "Country",
                                                  items: ["USA", "Canada", "UK", "India", "Australia"],
                                                  placeholder: "Select Country"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(accountDataLocal).country,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                    multiple: "",
                                                    chips: "",
                                                    "closable-chips": "",
                                                    label: "Country",
                                                    items: ["USA", "Canada", "UK", "India", "Australia"],
                                                    placeholder: "Select Country"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(accountDataLocal).language,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                  label: "Language",
                                                  multiple: "",
                                                  chips: "",
                                                  "closable-chips": "",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(accountDataLocal).language,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                    label: "Language",
                                                    multiple: "",
                                                    chips: "",
                                                    "closable-chips": "",
                                                    placeholder: "Select Language",
                                                    items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(accountDataLocal).timezone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                  label: "Timezone",
                                                  placeholder: "Select Timezone",
                                                  items: timezones,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(accountDataLocal).timezone,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                    label: "Timezone",
                                                    placeholder: "Select Timezone",
                                                    items: timezones,
                                                    "menu-props": { maxHeight: 200 }
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(accountDataLocal).currency,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                  label: "Currency",
                                                  placeholder: "Select Currency",
                                                  items: currencies,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(accountDataLocal).currency,
                                                    "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                    label: "Currency",
                                                    placeholder: "Select Currency",
                                                    items: currencies,
                                                    "menu-props": { maxHeight: 200 }
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Save changes`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Save changes")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  type: "reset",
                                                  onClick: resetForm
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Reset `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Reset ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
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
                                                    variant: "outlined",
                                                    type: "reset",
                                                    onClick: withModifiers(resetForm, ["prevent"])
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Reset ")
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
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountDataLocal).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                  placeholder: "John",
                                                  label: "First Name"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              md: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountDataLocal).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                  placeholder: "Doe",
                                                  label: "Last Name"
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
                                                  modelValue: unref(accountDataLocal).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                  label: "E-mail",
                                                  placeholder: "johndoe@gmail.com",
                                                  type: "email"
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
                                                  modelValue: unref(accountDataLocal).org,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                  label: "Organization",
                                                  placeholder: "Pixinvent"
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
                                                  modelValue: unref(accountDataLocal).phone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                  label: "Phone Number",
                                                  placeholder: "+1 (917) 543-9876"
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
                                                  modelValue: unref(accountDataLocal).address,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                  label: "Address",
                                                  placeholder: "123 Main St, New York, NY 10001"
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
                                                  modelValue: unref(accountDataLocal).state,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                  label: "State",
                                                  placeholder: "New York"
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
                                                  modelValue: unref(accountDataLocal).zip,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                  label: "Zip Code",
                                                  placeholder: "10001"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(accountDataLocal).country,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                  multiple: "",
                                                  chips: "",
                                                  "closable-chips": "",
                                                  label: "Country",
                                                  items: ["USA", "Canada", "UK", "India", "Australia"],
                                                  placeholder: "Select Country"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(accountDataLocal).language,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                  label: "Language",
                                                  multiple: "",
                                                  chips: "",
                                                  "closable-chips": "",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(accountDataLocal).timezone,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                  label: "Timezone",
                                                  placeholder: "Select Timezone",
                                                  items: timezones,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(accountDataLocal).currency,
                                                  "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                  label: "Currency",
                                                  placeholder: "Select Currency",
                                                  items: currencies,
                                                  "menu-props": { maxHeight: 200 }
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex flex-wrap gap-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Save changes")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  type: "reset",
                                                  onClick: withModifiers(resetForm, ["prevent"])
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Reset ")
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
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountDataLocal).firstName,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                                placeholder: "John",
                                                label: "First Name"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            md: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountDataLocal).lastName,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                                placeholder: "Doe",
                                                label: "Last Name"
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
                                                modelValue: unref(accountDataLocal).email,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                                label: "E-mail",
                                                placeholder: "johndoe@gmail.com",
                                                type: "email"
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
                                                modelValue: unref(accountDataLocal).org,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                                label: "Organization",
                                                placeholder: "Pixinvent"
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
                                                modelValue: unref(accountDataLocal).phone,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                                label: "Phone Number",
                                                placeholder: "+1 (917) 543-9876"
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
                                                modelValue: unref(accountDataLocal).address,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                                label: "Address",
                                                placeholder: "123 Main St, New York, NY 10001"
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
                                                modelValue: unref(accountDataLocal).state,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                                label: "State",
                                                placeholder: "New York"
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
                                                modelValue: unref(accountDataLocal).zip,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                                label: "Zip Code",
                                                placeholder: "10001"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(accountDataLocal).country,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                                multiple: "",
                                                chips: "",
                                                "closable-chips": "",
                                                label: "Country",
                                                items: ["USA", "Canada", "UK", "India", "Australia"],
                                                placeholder: "Select Country"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(accountDataLocal).language,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                                label: "Language",
                                                multiple: "",
                                                chips: "",
                                                "closable-chips": "",
                                                placeholder: "Select Language",
                                                items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(accountDataLocal).timezone,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                                label: "Timezone",
                                                placeholder: "Select Timezone",
                                                items: timezones,
                                                "menu-props": { maxHeight: 200 }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(accountDataLocal).currency,
                                                "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                                label: "Currency",
                                                placeholder: "Select Currency",
                                                items: currencies,
                                                "menu-props": { maxHeight: 200 }
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Save changes")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "outlined",
                                                type: "reset",
                                                onClick: withModifiers(resetForm, ["prevent"])
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Reset ")
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
                                createVNode("div", { class: "d-flex mb-10" }, [
                                  createVNode(VAvatar, {
                                    rounded: "",
                                    size: "100",
                                    class: "me-6",
                                    image: unref(accountDataLocal).avatarImg
                                  }, null, 8, ["image"]),
                                  createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        onClick: ($event) => {
                                          var _a;
                                          return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-upload-cloud-line",
                                            class: "d-sm-none"
                                          }),
                                          createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode("input", {
                                        ref_key: "refInputEl",
                                        ref: refInputEl,
                                        type: "file",
                                        name: "file",
                                        accept: ".jpeg,.png,.jpg,GIF",
                                        hidden: "",
                                        onInput: changeAvatar
                                      }, null, 544),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        color: "error",
                                        variant: "outlined",
                                        onClick: resetAvatar
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                          createVNode(VIcon, {
                                            icon: "ri-refresh-line",
                                            class: "d-sm-none"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                                  ])
                                ]),
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountDataLocal).firstName,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                              placeholder: "John",
                                              label: "First Name"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          md: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountDataLocal).lastName,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                              placeholder: "Doe",
                                              label: "Last Name"
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
                                              modelValue: unref(accountDataLocal).email,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                              label: "E-mail",
                                              placeholder: "johndoe@gmail.com",
                                              type: "email"
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
                                              modelValue: unref(accountDataLocal).org,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                              label: "Organization",
                                              placeholder: "Pixinvent"
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
                                              modelValue: unref(accountDataLocal).phone,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                              label: "Phone Number",
                                              placeholder: "+1 (917) 543-9876"
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
                                              modelValue: unref(accountDataLocal).address,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                              label: "Address",
                                              placeholder: "123 Main St, New York, NY 10001"
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
                                              modelValue: unref(accountDataLocal).state,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                              label: "State",
                                              placeholder: "New York"
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
                                              modelValue: unref(accountDataLocal).zip,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                              label: "Zip Code",
                                              placeholder: "10001"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(accountDataLocal).country,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                              multiple: "",
                                              chips: "",
                                              "closable-chips": "",
                                              label: "Country",
                                              items: ["USA", "Canada", "UK", "India", "Australia"],
                                              placeholder: "Select Country"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(accountDataLocal).language,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                              label: "Language",
                                              multiple: "",
                                              chips: "",
                                              "closable-chips": "",
                                              placeholder: "Select Language",
                                              items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(accountDataLocal).timezone,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                              label: "Timezone",
                                              placeholder: "Select Timezone",
                                              items: timezones,
                                              "menu-props": { maxHeight: 200 }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(accountDataLocal).currency,
                                              "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                              label: "Currency",
                                              placeholder: "Select Currency",
                                              items: currencies,
                                              "menu-props": { maxHeight: 200 }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex flex-wrap gap-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Save changes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
                                              type: "reset",
                                              onClick: withModifiers(resetForm, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset ")
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
                              createVNode("div", { class: "d-flex mb-10" }, [
                                createVNode(VAvatar, {
                                  rounded: "",
                                  size: "100",
                                  class: "me-6",
                                  image: unref(accountDataLocal).avatarImg
                                }, null, 8, ["image"]),
                                createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      onClick: ($event) => {
                                        var _a;
                                        return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-upload-cloud-line",
                                          class: "d-sm-none"
                                        }),
                                        createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode("input", {
                                      ref_key: "refInputEl",
                                      ref: refInputEl,
                                      type: "file",
                                      name: "file",
                                      accept: ".jpeg,.png,.jpg,GIF",
                                      hidden: "",
                                      onInput: changeAvatar
                                    }, null, 544),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      color: "error",
                                      variant: "outlined",
                                      onClick: resetAvatar
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                        createVNode(VIcon, {
                                          icon: "ri-refresh-line",
                                          class: "d-sm-none"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                                ])
                              ]),
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountDataLocal).firstName,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                            placeholder: "John",
                                            label: "First Name"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        md: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountDataLocal).lastName,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                            placeholder: "Doe",
                                            label: "Last Name"
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
                                            modelValue: unref(accountDataLocal).email,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                            label: "E-mail",
                                            placeholder: "johndoe@gmail.com",
                                            type: "email"
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
                                            modelValue: unref(accountDataLocal).org,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                            label: "Organization",
                                            placeholder: "Pixinvent"
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
                                            modelValue: unref(accountDataLocal).phone,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                            label: "Phone Number",
                                            placeholder: "+1 (917) 543-9876"
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
                                            modelValue: unref(accountDataLocal).address,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                            label: "Address",
                                            placeholder: "123 Main St, New York, NY 10001"
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
                                            modelValue: unref(accountDataLocal).state,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                            label: "State",
                                            placeholder: "New York"
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
                                            modelValue: unref(accountDataLocal).zip,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                            label: "Zip Code",
                                            placeholder: "10001"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(accountDataLocal).country,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                            multiple: "",
                                            chips: "",
                                            "closable-chips": "",
                                            label: "Country",
                                            items: ["USA", "Canada", "UK", "India", "Australia"],
                                            placeholder: "Select Country"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(accountDataLocal).language,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                            label: "Language",
                                            multiple: "",
                                            chips: "",
                                            "closable-chips": "",
                                            placeholder: "Select Language",
                                            items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(accountDataLocal).timezone,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                            label: "Timezone",
                                            placeholder: "Select Timezone",
                                            items: timezones,
                                            "menu-props": { maxHeight: 200 }
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(accountDataLocal).currency,
                                            "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                            label: "Currency",
                                            placeholder: "Select Currency",
                                            items: currencies,
                                            "menu-props": { maxHeight: 200 }
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex flex-wrap gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Save changes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            type: "reset",
                                            onClick: withModifiers(resetForm, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex mb-10" }, [
                              createVNode(VAvatar, {
                                rounded: "",
                                size: "100",
                                class: "me-6",
                                image: unref(accountDataLocal).avatarImg
                              }, null, 8, ["image"]),
                              createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                                createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    onClick: ($event) => {
                                      var _a;
                                      return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-upload-cloud-line",
                                        class: "d-sm-none"
                                      }),
                                      createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode("input", {
                                    ref_key: "refInputEl",
                                    ref: refInputEl,
                                    type: "file",
                                    name: "file",
                                    accept: ".jpeg,.png,.jpg,GIF",
                                    hidden: "",
                                    onInput: changeAvatar
                                  }, null, 544),
                                  createVNode(VBtn, {
                                    type: "reset",
                                    color: "error",
                                    variant: "outlined",
                                    onClick: resetAvatar
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                      createVNode(VIcon, {
                                        icon: "ri-refresh-line",
                                        class: "d-sm-none"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                              ])
                            ]),
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountDataLocal).firstName,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                          placeholder: "John",
                                          label: "First Name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      md: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountDataLocal).lastName,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                          placeholder: "Doe",
                                          label: "Last Name"
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
                                          modelValue: unref(accountDataLocal).email,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                          label: "E-mail",
                                          placeholder: "johndoe@gmail.com",
                                          type: "email"
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
                                          modelValue: unref(accountDataLocal).org,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                          label: "Organization",
                                          placeholder: "Pixinvent"
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
                                          modelValue: unref(accountDataLocal).phone,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                          label: "Phone Number",
                                          placeholder: "+1 (917) 543-9876"
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
                                          modelValue: unref(accountDataLocal).address,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                          label: "Address",
                                          placeholder: "123 Main St, New York, NY 10001"
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
                                          modelValue: unref(accountDataLocal).state,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                          label: "State",
                                          placeholder: "New York"
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
                                          modelValue: unref(accountDataLocal).zip,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                          label: "Zip Code",
                                          placeholder: "10001"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(accountDataLocal).country,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                          multiple: "",
                                          chips: "",
                                          "closable-chips": "",
                                          label: "Country",
                                          items: ["USA", "Canada", "UK", "India", "Australia"],
                                          placeholder: "Select Country"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(accountDataLocal).language,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                          label: "Language",
                                          multiple: "",
                                          chips: "",
                                          "closable-chips": "",
                                          placeholder: "Select Language",
                                          items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(accountDataLocal).timezone,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                          label: "Timezone",
                                          placeholder: "Select Timezone",
                                          items: timezones,
                                          "menu-props": { maxHeight: 200 }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(accountDataLocal).currency,
                                          "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                          label: "Currency",
                                          placeholder: "Select Currency",
                                          items: currencies,
                                          "menu-props": { maxHeight: 200 }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex flex-wrap gap-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Save changes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          type: "reset",
                                          onClick: withModifiers(resetForm, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
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
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Delete Account `);
                                  } else {
                                    return [
                                      createTextVNode(" Delete Account ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete Account ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(VCheckbox, {
                                modelValue: unref(isAccountDeactivated),
                                "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                rules: validateAccountDeactivation,
                                label: "I confirm my account deactivation"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                disabled: !unref(isAccountDeactivated),
                                color: "error",
                                class: "mt-6",
                                onClick: ($event) => isConfirmDialogOpen.value = true
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Deactivate Account `);
                                  } else {
                                    return [
                                      createTextVNode(" Deactivate Account ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode(VCheckbox, {
                                    modelValue: unref(isAccountDeactivated),
                                    "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                    rules: validateAccountDeactivation,
                                    label: "I confirm my account deactivation"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VBtn, {
                                  disabled: !unref(isAccountDeactivated),
                                  color: "error",
                                  class: "mt-6",
                                  onClick: ($event) => isConfirmDialogOpen.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Deactivate Account ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Delete Account ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(VCheckbox, {
                                  modelValue: unref(isAccountDeactivated),
                                  "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                  rules: validateAccountDeactivation,
                                  label: "I confirm my account deactivation"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VBtn, {
                                disabled: !unref(isAccountDeactivated),
                                color: "error",
                                class: "mt-6",
                                onClick: ($event) => isConfirmDialogOpen.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Deactivate Account ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"])
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
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Delete Account ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(VCheckbox, {
                                modelValue: unref(isAccountDeactivated),
                                "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                                rules: validateAccountDeactivation,
                                label: "I confirm my account deactivation"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(VBtn, {
                              disabled: !unref(isAccountDeactivated),
                              color: "error",
                              class: "mt-6",
                              onClick: ($event) => isConfirmDialogOpen.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Deactivate Account ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex mb-10" }, [
                            createVNode(VAvatar, {
                              rounded: "",
                              size: "100",
                              class: "me-6",
                              image: unref(accountDataLocal).avatarImg
                            }, null, 8, ["image"]),
                            createVNode("form", { class: "d-flex flex-column justify-center gap-4" }, [
                              createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: ($event) => {
                                    var _a;
                                    return (_a = unref(refInputEl)) == null ? void 0 : _a.click();
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-upload-cloud-line",
                                      class: "d-sm-none"
                                    }),
                                    createVNode("span", { class: "d-none d-sm-block" }, "Upload new photo")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode("input", {
                                  ref_key: "refInputEl",
                                  ref: refInputEl,
                                  type: "file",
                                  name: "file",
                                  accept: ".jpeg,.png,.jpg,GIF",
                                  hidden: "",
                                  onInput: changeAvatar
                                }, null, 544),
                                createVNode(VBtn, {
                                  type: "reset",
                                  color: "error",
                                  variant: "outlined",
                                  onClick: resetAvatar
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "d-none d-sm-block" }, "Reset"),
                                    createVNode(VIcon, {
                                      icon: "ri-refresh-line",
                                      class: "d-sm-none"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("p", { class: "text-body-1 mb-0" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                            ])
                          ]),
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountDataLocal).firstName,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).firstName = $event,
                                        placeholder: "John",
                                        label: "First Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    md: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountDataLocal).lastName,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).lastName = $event,
                                        placeholder: "Doe",
                                        label: "Last Name"
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
                                        modelValue: unref(accountDataLocal).email,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).email = $event,
                                        label: "E-mail",
                                        placeholder: "johndoe@gmail.com",
                                        type: "email"
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
                                        modelValue: unref(accountDataLocal).org,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).org = $event,
                                        label: "Organization",
                                        placeholder: "Pixinvent"
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
                                        modelValue: unref(accountDataLocal).phone,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).phone = $event,
                                        label: "Phone Number",
                                        placeholder: "+1 (917) 543-9876"
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
                                        modelValue: unref(accountDataLocal).address,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).address = $event,
                                        label: "Address",
                                        placeholder: "123 Main St, New York, NY 10001"
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
                                        modelValue: unref(accountDataLocal).state,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).state = $event,
                                        label: "State",
                                        placeholder: "New York"
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
                                        modelValue: unref(accountDataLocal).zip,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).zip = $event,
                                        label: "Zip Code",
                                        placeholder: "10001"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(accountDataLocal).country,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).country = $event,
                                        multiple: "",
                                        chips: "",
                                        "closable-chips": "",
                                        label: "Country",
                                        items: ["USA", "Canada", "UK", "India", "Australia"],
                                        placeholder: "Select Country"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(accountDataLocal).language,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).language = $event,
                                        label: "Language",
                                        multiple: "",
                                        chips: "",
                                        "closable-chips": "",
                                        placeholder: "Select Language",
                                        items: ["English", "Spanish", "Arabic", "Hindi", "Urdu"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(accountDataLocal).timezone,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).timezone = $event,
                                        label: "Timezone",
                                        placeholder: "Select Timezone",
                                        items: timezones,
                                        "menu-props": { maxHeight: 200 }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(accountDataLocal).currency,
                                        "onUpdate:modelValue": ($event) => unref(accountDataLocal).currency = $event,
                                        label: "Currency",
                                        placeholder: "Select Currency",
                                        items: currencies,
                                        "menu-props": { maxHeight: 200 }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex flex-wrap gap-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Save changes")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "outlined",
                                        type: "reset",
                                        onClick: withModifiers(resetForm, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset ")
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Delete Account ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(VCheckbox, {
                              modelValue: unref(isAccountDeactivated),
                              "onUpdate:modelValue": ($event) => isRef(isAccountDeactivated) ? isAccountDeactivated.value = $event : null,
                              rules: validateAccountDeactivation,
                              label: "I confirm my account deactivation"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VBtn, {
                            disabled: !unref(isAccountDeactivated),
                            color: "error",
                            class: "mt-6",
                            onClick: ($event) => isConfirmDialogOpen.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Deactivate Account ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"])
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
      _push(ssrRenderComponent(_component_ConfirmDialog, {
        isDialogVisible: unref(isConfirmDialogOpen),
        "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogOpen) ? isConfirmDialogOpen.value = $event : null,
        "confirmation-question": "Are you sure you want to deactivate your account?",
        "confirm-title": "Deactivated!",
        "confirm-msg": "Your account has been deactivated successfully.",
        "cancel-title": "Cancelled",
        "cancel-msg": "Account Deactivation Cancelled!"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/AccountSettingsAccount.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "BillingHistoryTable",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedStatus = ref();
    const selectedRows = ref([]);
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
        title: "#",
        key: "id"
      },
      {
        title: "Trending",
        key: "trending",
        sortable: false
      },
      {
        title: "Client",
        key: "client"
      },
      {
        title: "Total",
        key: "total"
      },
      {
        title: "Issued Date",
        key: "date"
      },
      {
        title: "Balance",
        key: "balance"
      },
      {
        title: "Action",
        key: "actions",
        sortable: false
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
      const _component_MoreBtn = _sfc_main$8;
      if (unref(invoices)) {
        _push(`<section${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(VCard, { id: "invoice-list" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, { class: "d-flex align-center flex-wrap gap-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="me-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      "prepend-icon": "ri-add-line",
                      to: { name: "apps-invoice-add" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Create invoice `);
                        } else {
                          return [
                            createTextVNode(" Create invoice ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(`<div class="d-flex align-center flex-wrap gap-4"${_scopeId2}><div class="invoice-list-search"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: unref(searchQuery),
                      "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                      placeholder: "Search Invoice"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div style="${ssrRenderStyle({ "inline-size": "10.9375rem" })}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VSelect, {
                      modelValue: unref(selectedStatus),
                      "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                      placeholder: "Select Status",
                      clearable: "",
                      "clear-icon": "ri-close-line",
                      items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "me-3" }, [
                        createVNode(VBtn, {
                          "prepend-icon": "ri-add-line",
                          to: { name: "apps-invoice-add" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create invoice ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                        createVNode("div", { class: "invoice-list-search" }, [
                          createVNode(VTextField, {
                            modelValue: unref(searchQuery),
                            "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                            placeholder: "Search Invoice"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { style: { "inline-size": "10.9375rem" } }, [
                          createVNode(VSelect, {
                            modelValue: unref(selectedStatus),
                            "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                            placeholder: "Select Status",
                            clearable: "",
                            "clear-icon": "ri-close-line",
                            items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VDataTableServer, {
                modelValue: unref(selectedRows),
                "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                "items-per-page": unref(itemsPerPage),
                "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                page: unref(page),
                "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                "show-select": "",
                "items-length": unref(totalInvoices),
                headers,
                items: unref(invoices),
                "item-value": "id",
                class: "text-no-wrap billing-history-table",
                "onUpdate:options": updateOptions
              }, {
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
                "item.client": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "34",
                      color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                      variant: !item.avatar.length ? "tonal" : void 0,
                      class: "me-3"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.avatar.length) {
                            _push4(ssrRenderComponent(VImg, {
                              src: item.avatar
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name))}</span>`);
                          }
                        } else {
                          return [
                            item.avatar.length ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: item.avatar
                            }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="d-flex flex-column"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_RouterLink, {
                      to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                      class: "text-link font-weight-medium mb-0"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.client.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.client.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="text-body-2"${_scopeId2}>${ssrInterpolate(item.client.companyEmail)}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center" }, [
                        createVNode(VAvatar, {
                          size: "34",
                          color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                          variant: !item.avatar.length ? "tonal" : void 0,
                          class: "me-3"
                        }, {
                          default: withCtx(() => [
                            item.avatar.length ? (openBlock(), createBlock(VImg, {
                              key: 0,
                              src: item.avatar
                            }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                          ]),
                          _: 2
                        }, 1032, ["color", "variant"]),
                        createVNode("div", { class: "d-flex flex-column" }, [
                          createVNode(_component_RouterLink, {
                            to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                            class: "text-link font-weight-medium mb-0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.client.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", { class: "text-body-2" }, toDisplayString(item.client.companyEmail), 1)
                        ])
                      ])
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
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                        size: "small"
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
                      _push3(`<div class="text-body-1 text-high-emphasis"${_scopeId2}>${ssrInterpolate(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`)}</div>`);
                    }
                  } else {
                    return [
                      typeof resolveInvoiceBalanceVariant(item.balance, item.total).status === "string" ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-body-1 text-high-emphasis"
                      }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                    ];
                  }
                }),
                "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_IconBtn, {
                      size: "small",
                      icon: "ri-delete-bin-7-line",
                      onClick: ($event) => deleteInvoice(item.id)
                    }, null, _parent3, _scopeId2));
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
                    _push3(ssrRenderComponent(_component_MoreBtn, {
                      "menu-list": unref(computedMoreList)(item.id),
                      "item-props": "",
                      class: "text-medium-emphasis"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_IconBtn, {
                        size: "small",
                        icon: "ri-delete-bin-7-line",
                        onClick: ($event) => deleteInvoice(item.id)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_IconBtn, {
                        size: "small",
                        to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "ri-eye-line" })
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode(_component_MoreBtn, {
                        "menu-list": unref(computedMoreList)(item.id),
                        "item-props": "",
                        class: "text-medium-emphasis"
                      }, null, 8, ["menu-list"])
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
                createVNode(VCardText, { class: "d-flex align-center flex-wrap gap-4" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "me-3" }, [
                      createVNode(VBtn, {
                        "prepend-icon": "ri-add-line",
                        to: { name: "apps-invoice-add" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Create invoice ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VSpacer),
                    createVNode("div", { class: "d-flex align-center flex-wrap gap-4" }, [
                      createVNode("div", { class: "invoice-list-search" }, [
                        createVNode(VTextField, {
                          modelValue: unref(searchQuery),
                          "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                          placeholder: "Search Invoice"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { style: { "inline-size": "10.9375rem" } }, [
                        createVNode(VSelect, {
                          modelValue: unref(selectedStatus),
                          "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null,
                          placeholder: "Select Status",
                          clearable: "",
                          "clear-icon": "ri-close-line",
                          items: ["Downloaded", "Draft", "Sent", "Paid", "Partial Payment", "Past Due"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VDataTableServer, {
                  modelValue: unref(selectedRows),
                  "onUpdate:modelValue": ($event) => isRef(selectedRows) ? selectedRows.value = $event : null,
                  "items-per-page": unref(itemsPerPage),
                  "onUpdate:itemsPerPage": ($event) => isRef(itemsPerPage) ? itemsPerPage.value = $event : null,
                  page: unref(page),
                  "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
                  "show-select": "",
                  "items-length": unref(totalInvoices),
                  headers,
                  items: unref(invoices),
                  "item-value": "id",
                  class: "text-no-wrap billing-history-table",
                  "onUpdate:options": updateOptions
                }, {
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
                  "item.client": withCtx(({ item }) => [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        size: "34",
                        color: !item.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant : void 0,
                        variant: !item.avatar.length ? "tonal" : void 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          item.avatar.length ? (openBlock(), createBlock(VImg, {
                            key: 0,
                            src: item.avatar
                          }, null, 8, ["src"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("avatarText" in _ctx ? _ctx.avatarText : unref(avatarText))(item.client.name)), 1))
                        ]),
                        _: 2
                      }, 1032, ["color", "variant"]),
                      createVNode("div", { class: "d-flex flex-column" }, [
                        createVNode(_component_RouterLink, {
                          to: { name: "pages-user-profile-tab", params: { tab: "profile" } },
                          class: "text-link font-weight-medium mb-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.client.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "text-body-2" }, toDisplayString(item.client.companyEmail), 1)
                      ])
                    ])
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
                      color: resolveInvoiceBalanceVariant(item.balance, item.total).chip.color,
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(resolveInvoiceBalanceVariant(item.balance, item.total).status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-body-1 text-high-emphasis"
                    }, toDisplayString(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status) > 0 ? `$${resolveInvoiceBalanceVariant(item.balance, item.total).status}` : `-$${Math.abs(Number(resolveInvoiceBalanceVariant(item.balance, item.total).status))}`), 1))
                  ]),
                  "item.actions": withCtx(({ item }) => [
                    createVNode(_component_IconBtn, {
                      size: "small",
                      icon: "ri-delete-bin-7-line",
                      onClick: ($event) => deleteInvoice(item.id)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_IconBtn, {
                      size: "small",
                      to: { name: "apps-invoice-preview-id", params: { id: item.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "ri-eye-line" })
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode(_component_MoreBtn, {
                      "menu-list": unref(computedMoreList)(item.id),
                      "item-props": "",
                      class: "text-medium-emphasis"
                    }, null, 8, ["menu-list"])
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
                }, 8, ["modelValue", "onUpdate:modelValue", "items-per-page", "onUpdate:itemsPerPage", "page", "onUpdate:page", "items-length", "items"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/BillingHistoryTable.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AccountSettingsBillingAndPlans",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedPaymentMethod = ref("credit-debit-atm-card");
    const isPricingPlanDialogVisible = ref(false);
    const isConfirmDialogVisible = ref(false);
    const isCardEditDialogVisible = ref(false);
    const isCardDetailSaveBilling = ref(false);
    const creditCards = [
      {
        name: "Tom McBride",
        number: "5531234567899856",
        expiry: "12/23",
        isPrimary: true,
        type: "visa",
        cvv: "456",
        image: mastercard
      },
      {
        name: "Mildred Wagner",
        number: "4851234567895896",
        expiry: "10/27",
        isPrimary: false,
        type: "mastercard",
        cvv: "123",
        image: visa
      }
    ];
    const countryList = [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "New Zealand",
      "India",
      "Russia",
      "China",
      "Japan"
    ];
    const currentCardDetails = ref();
    const openEditCardDialog = (cardDetails) => {
      currentCardDetails.value = cardDetails;
      isCardEditDialogVisible.value = true;
    };
    const cardNumber = ref(135632156548789);
    const cardName = ref("john Doe");
    const cardExpiryDate = ref("05/24");
    const cardCvv = ref(420);
    const resetPaymentForm = () => {
      cardNumber.value = 135632156548789;
      cardName.value = "john Doe";
      cardExpiryDate.value = "05/24";
      cardCvv.value = 420;
      selectedPaymentMethod.value = "credit-debit-atm-card";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConfirmDialog = _sfc_main$7;
      const _component_PricingPlanDialog = _sfc_main$9;
      const _component_CardAddEditDialog = _sfc_main$a;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Current Plan`);
                                  } else {
                                    return [
                                      createTextVNode("Current Plan")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Current Plan")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                                          _push7(`<div class="d-flex flex-column gap-y-6"${_scopeId6}><div class="d-flex flex-column gap-y-1"${_scopeId6}><h6 class="text-h6"${_scopeId6}> Your Current Plan is Basic </h6><div${_scopeId6}> A simple start for everyone </div></div><div class="d-flex flex-column gap-y-1"${_scopeId6}><h6 class="text-h6"${_scopeId6}> Active until Dec 09, 2021 </h6><div${_scopeId6}> We will send you a notification upon Subscription expiration </div></div><div class="d-flex flex-column gap-y-1"${_scopeId6}><div class="d-flex align-center gap-x-2"${_scopeId6}><h6 class="text-h6"${_scopeId6}> $199 Per Month </h6>`);
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
                                          _push7(`</div><p class="text-base mb-0"${_scopeId6}> Standard plan for small to medium businesses </p></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                                createVNode("div", null, " A simple start for everyone ")
                                              ]),
                                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                                createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                              ]),
                                              createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                                createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                                  createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                                createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                              ])
                                            ])
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
                                            type: "warning",
                                            variant: "tonal",
                                            title: "We need your attention!",
                                            text: "Your plan requires updates"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<h6 class="d-flex text-h6 justify-space-between mt-6 mb-1"${_scopeId6}><div${_scopeId6}>Days</div><div${_scopeId6}>12 of 30 Days</div></h6>`);
                                          _push7(ssrRenderComponent(VProgressLinear, {
                                            color: "primary",
                                            rounded: "",
                                            height: "6",
                                            "model-value": "18"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<p class="text-base mt-1"${_scopeId6}> 18 days remaining until your plan requires update </p>`);
                                        } else {
                                          return [
                                            createVNode(VAlert, {
                                              type: "warning",
                                              variant: "tonal",
                                              title: "We need your attention!",
                                              text: "Your plan requires updates"
                                            }),
                                            createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                              createVNode("div", null, "Days"),
                                              createVNode("div", null, "12 of 30 Days")
                                            ]),
                                            createVNode(VProgressLinear, {
                                              color: "primary",
                                              rounded: "",
                                              height: "6",
                                              "model-value": "18"
                                            }),
                                            createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
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
                                            onClick: ($event) => isPricingPlanDialogVisible.value = true
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
                                            variant: "outlined",
                                            onClick: ($event) => isConfirmDialogVisible.value = true
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
                                                onClick: ($event) => isPricingPlanDialogVisible.value = true
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" upgrade plan ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
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
                                          createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                              createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                              createVNode("div", null, " A simple start for everyone ")
                                            ]),
                                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                              createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                              createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                            ]),
                                            createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                              createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                                createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                              createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VAlert, {
                                            type: "warning",
                                            variant: "tonal",
                                            title: "We need your attention!",
                                            text: "Your plan requires updates"
                                          }),
                                          createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                            createVNode("div", null, "Days"),
                                            createVNode("div", null, "12 of 30 Days")
                                          ]),
                                          createVNode(VProgressLinear, {
                                            color: "primary",
                                            rounded: "",
                                            height: "6",
                                            "model-value": "18"
                                          }),
                                          createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                            createVNode(VBtn, {
                                              onClick: ($event) => isPricingPlanDialogVisible.value = true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" upgrade plan ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
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
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_ConfirmDialog, {
                                isDialogVisible: unref(isConfirmDialogVisible),
                                "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                                "confirmation-question": "Are you sure to cancel your subscription?",
                                "cancel-msg": "Unsubscription Cancelled!!",
                                "cancel-title": "Cancelled",
                                "confirm-msg": "Your subscription cancelled successfully.",
                                "confirm-title": "Unsubscribed!"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_PricingPlanDialog, {
                                "is-dialog-visible": unref(isPricingPlanDialogVisible),
                                "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                            createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                            createVNode("div", null, " A simple start for everyone ")
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                            createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                            createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                          ]),
                                          createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                            createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                              createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                            createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VAlert, {
                                          type: "warning",
                                          variant: "tonal",
                                          title: "We need your attention!",
                                          text: "Your plan requires updates"
                                        }),
                                        createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                          createVNode("div", null, "Days"),
                                          createVNode("div", null, "12 of 30 Days")
                                        ]),
                                        createVNode(VProgressLinear, {
                                          color: "primary",
                                          rounded: "",
                                          height: "6",
                                          "model-value": "18"
                                        }),
                                        createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                          createVNode(VBtn, {
                                            onClick: ($event) => isPricingPlanDialogVisible.value = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" upgrade plan ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
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
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ConfirmDialog, {
                                  isDialogVisible: unref(isConfirmDialogVisible),
                                  "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                                  "confirmation-question": "Are you sure to cancel your subscription?",
                                  "cancel-msg": "Unsubscription Cancelled!!",
                                  "cancel-title": "Cancelled",
                                  "confirm-msg": "Your subscription cancelled successfully.",
                                  "confirm-title": "Unsubscribed!"
                                }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"]),
                                createVNode(_component_PricingPlanDialog, {
                                  "is-dialog-visible": unref(isPricingPlanDialogVisible),
                                  "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                                }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Current Plan")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                        createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                          createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                          createVNode("div", null, " A simple start for everyone ")
                                        ]),
                                        createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                          createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                          createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                        ]),
                                        createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                          createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                            createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                          createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VAlert, {
                                        type: "warning",
                                        variant: "tonal",
                                        title: "We need your attention!",
                                        text: "Your plan requires updates"
                                      }),
                                      createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                        createVNode("div", null, "Days"),
                                        createVNode("div", null, "12 of 30 Days")
                                      ]),
                                      createVNode(VProgressLinear, {
                                        color: "primary",
                                        rounded: "",
                                        height: "6",
                                        "model-value": "18"
                                      }),
                                      createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                        createVNode(VBtn, {
                                          onClick: ($event) => isPricingPlanDialogVisible.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" upgrade plan ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
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
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ConfirmDialog, {
                                isDialogVisible: unref(isConfirmDialogVisible),
                                "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                                "confirmation-question": "Are you sure to cancel your subscription?",
                                "cancel-msg": "Unsubscription Cancelled!!",
                                "cancel-title": "Cancelled",
                                "confirm-msg": "Your subscription cancelled successfully.",
                                "confirm-title": "Unsubscribed!"
                              }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"]),
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Current Plan")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                      createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                        createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                        createVNode("div", null, " A simple start for everyone ")
                                      ]),
                                      createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                        createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                        createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                      ]),
                                      createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                        createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                          createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                        createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAlert, {
                                      type: "warning",
                                      variant: "tonal",
                                      title: "We need your attention!",
                                      text: "Your plan requires updates"
                                    }),
                                    createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                      createVNode("div", null, "Days"),
                                      createVNode("div", null, "12 of 30 Days")
                                    ]),
                                    createVNode(VProgressLinear, {
                                      color: "primary",
                                      rounded: "",
                                      height: "6",
                                      "model-value": "18"
                                    }),
                                    createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                      createVNode(VBtn, {
                                        onClick: ($event) => isPricingPlanDialogVisible.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" upgrade plan ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
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
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ConfirmDialog, {
                              isDialogVisible: unref(isConfirmDialogVisible),
                              "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                              "confirmation-question": "Are you sure to cancel your subscription?",
                              "cancel-msg": "Unsubscription Cancelled!!",
                              "cancel-title": "Cancelled",
                              "confirm-msg": "Your subscription cancelled successfully.",
                              "confirm-title": "Unsubscribed!"
                            }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"]),
                            createVNode(_component_PricingPlanDialog, {
                              "is-dialog-visible": unref(isPricingPlanDialogVisible),
                              "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Payment Methods`);
                                  } else {
                                    return [
                                      createTextVNode("Payment Methods")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Payment Methods")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
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
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VRadioGroup, {
                                                              modelValue: unref(selectedPaymentMethod),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                              inline: ""
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VRadio, {
                                                                    value: "credit-debit-atm-card",
                                                                    label: "Credit/Debit/ATM Card",
                                                                    color: "primary"
                                                                  }, null, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VRadio, {
                                                                    value: "cod-cheque",
                                                                    label: "COD/Cheque",
                                                                    color: "primary"
                                                                  }, null, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VRadio, {
                                                                      value: "credit-debit-atm-card",
                                                                      label: "Credit/Debit/ATM Card",
                                                                      color: "primary"
                                                                    }),
                                                                    createVNode(VRadio, {
                                                                      value: "cod-cheque",
                                                                      label: "COD/Cheque",
                                                                      color: "primary"
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VRadioGroup, {
                                                                modelValue: unref(selectedPaymentMethod),
                                                                "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                                inline: ""
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VRadio, {
                                                                    value: "credit-debit-atm-card",
                                                                    label: "Credit/Debit/ATM Card",
                                                                    color: "primary"
                                                                  }),
                                                                  createVNode(VRadio, {
                                                                    value: "cod-cheque",
                                                                    label: "COD/Cheque",
                                                                    color: "primary"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VRow, {
                                                              style: unref(selectedPaymentMethod) === "credit-debit-atm-card" ? null : { display: "none" }
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VCol, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VTextField, {
                                                                          modelValue: unref(cardNumber),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
                                                                          label: "Card Number",
                                                                          placeholder: "1234 1234 1234 1234",
                                                                          type: "number"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VTextField, {
                                                                            modelValue: unref(cardNumber),
                                                                            "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
                                                                            label: "Card Number",
                                                                            placeholder: "1234 1234 1234 1234",
                                                                            type: "number"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VCol, {
                                                                    cols: "12",
                                                                    md: "6"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VTextField, {
                                                                          modelValue: unref(cardName),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                          label: "Name",
                                                                          placeholder: "John Doe"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VTextField, {
                                                                            modelValue: unref(cardName),
                                                                            "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                            label: "Name",
                                                                            placeholder: "John Doe"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VCol, {
                                                                    cols: "6",
                                                                    md: "3"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VTextField, {
                                                                          modelValue: unref(cardExpiryDate),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                          label: "Expiry Date",
                                                                          placeholder: "MM/YY"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VTextField, {
                                                                            modelValue: unref(cardExpiryDate),
                                                                            "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                            label: "Expiry Date",
                                                                            placeholder: "MM/YY"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VCol, {
                                                                    cols: "6",
                                                                    md: "3"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VTextField, {
                                                                          modelValue: unref(cardCvv),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                          type: "number",
                                                                          label: "CVV Code",
                                                                          placeholder: "123"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VTextField, {
                                                                            modelValue: unref(cardCvv),
                                                                            "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                            type: "number",
                                                                            label: "CVV Code",
                                                                            placeholder: "123"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VCol, { cols: "12" }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VSwitch, {
                                                                          modelValue: unref(isCardDetailSaveBilling),
                                                                          "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                          density: "compact",
                                                                          label: "Save card for future billing?"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VSwitch, {
                                                                            modelValue: unref(isCardDetailSaveBilling),
                                                                            "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                            density: "compact",
                                                                            label: "Save card for future billing?"
                                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(VCol, {
                                                                    cols: "12",
                                                                    class: "d-flex flex-wrap gap-4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(` Save changes `);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(" Save changes ")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                        _push12(ssrRenderComponent(VBtn, {
                                                                          color: "secondary",
                                                                          variant: "outlined",
                                                                          onClick: resetPaymentForm
                                                                        }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(` Reset `);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(" Reset ")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VBtn, { type: "submit" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Save changes ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(VBtn, {
                                                                            color: "secondary",
                                                                            variant: "outlined",
                                                                            onClick: resetPaymentForm
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Reset ")
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VCol, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VTextField, {
                                                                          modelValue: unref(cardNumber),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                          modelValue: unref(cardName),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                          label: "Name",
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
                                                                          modelValue: unref(cardExpiryDate),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                          label: "Expiry Date",
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
                                                                          modelValue: unref(cardCvv),
                                                                          "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                          type: "number",
                                                                          label: "CVV Code",
                                                                          placeholder: "123"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VCol, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VSwitch, {
                                                                          modelValue: unref(isCardDetailSaveBilling),
                                                                          "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                          density: "compact",
                                                                          label: "Save card for future billing?"
                                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VCol, {
                                                                      cols: "12",
                                                                      class: "d-flex flex-wrap gap-4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VBtn, { type: "submit" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Save changes ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(VBtn, {
                                                                          color: "secondary",
                                                                          variant: "outlined",
                                                                          onClick: resetPaymentForm
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Reset ")
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
                                                            }, _parent10, _scopeId9));
                                                            _push10(`<p style="${ssrRenderStyle(unref(selectedPaymentMethod) === "cod-cheque" ? null : { display: "none" })}" class="text-base"${_scopeId9}> Cash on delivery is a mode of payment where you make the payment after the goods/services are received. </p><p style="${ssrRenderStyle(unref(selectedPaymentMethod) === "cod-cheque" ? null : { display: "none" })}" class="text-base"${_scopeId9}> You can pay cash or make the payment via debit/credit card directly to the delivery person. </p>`);
                                                          } else {
                                                            return [
                                                              withDirectives(createVNode(VRow, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VCol, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VTextField, {
                                                                        modelValue: unref(cardNumber),
                                                                        "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                        modelValue: unref(cardName),
                                                                        "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                        label: "Name",
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
                                                                        modelValue: unref(cardExpiryDate),
                                                                        "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                        label: "Expiry Date",
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
                                                                        modelValue: unref(cardCvv),
                                                                        "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                        type: "number",
                                                                        label: "CVV Code",
                                                                        placeholder: "123"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VCol, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VSwitch, {
                                                                        modelValue: unref(isCardDetailSaveBilling),
                                                                        "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                        density: "compact",
                                                                        label: "Save card for future billing?"
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VCol, {
                                                                    cols: "12",
                                                                    class: "d-flex flex-wrap gap-4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(VBtn, { type: "submit" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Save changes ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(VBtn, {
                                                                        color: "secondary",
                                                                        variant: "outlined",
                                                                        onClick: resetPaymentForm
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Reset ")
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }, 512), [
                                                                [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                              ]),
                                                              withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                                [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                              ]),
                                                              withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                                [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VRadioGroup, {
                                                              modelValue: unref(selectedPaymentMethod),
                                                              "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                              inline: ""
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VRadio, {
                                                                  value: "credit-debit-atm-card",
                                                                  label: "Credit/Debit/ATM Card",
                                                                  color: "primary"
                                                                }),
                                                                createVNode(VRadio, {
                                                                  value: "cod-cheque",
                                                                  label: "COD/Cheque",
                                                                  color: "primary"
                                                                })
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            withDirectives(createVNode(VRow, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VCol, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VTextField, {
                                                                      modelValue: unref(cardNumber),
                                                                      "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                      modelValue: unref(cardName),
                                                                      "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                      label: "Name",
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
                                                                      modelValue: unref(cardExpiryDate),
                                                                      "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                      label: "Expiry Date",
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
                                                                      modelValue: unref(cardCvv),
                                                                      "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                      type: "number",
                                                                      label: "CVV Code",
                                                                      placeholder: "123"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VCol, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VSwitch, {
                                                                      modelValue: unref(isCardDetailSaveBilling),
                                                                      "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                      density: "compact",
                                                                      label: "Save card for future billing?"
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VCol, {
                                                                  cols: "12",
                                                                  class: "d-flex flex-wrap gap-4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(VBtn, { type: "submit" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Save changes ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(VBtn, {
                                                                      color: "secondary",
                                                                      variant: "outlined",
                                                                      onClick: resetPaymentForm
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Reset ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }, 512), [
                                                              [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                            ]),
                                                            withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                              [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                            ]),
                                                            withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                              [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                            ])
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
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VRadioGroup, {
                                                            modelValue: unref(selectedPaymentMethod),
                                                            "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                            inline: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VRadio, {
                                                                value: "credit-debit-atm-card",
                                                                label: "Credit/Debit/ATM Card",
                                                                color: "primary"
                                                              }),
                                                              createVNode(VRadio, {
                                                                value: "cod-cheque",
                                                                label: "COD/Cheque",
                                                                color: "primary"
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          withDirectives(createVNode(VRow, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VCol, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VTextField, {
                                                                    modelValue: unref(cardNumber),
                                                                    "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                    modelValue: unref(cardName),
                                                                    "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                    label: "Name",
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
                                                                    modelValue: unref(cardExpiryDate),
                                                                    "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                    label: "Expiry Date",
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
                                                                    modelValue: unref(cardCvv),
                                                                    "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                    type: "number",
                                                                    label: "CVV Code",
                                                                    placeholder: "123"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VSwitch, {
                                                                    modelValue: unref(isCardDetailSaveBilling),
                                                                    "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                    density: "compact",
                                                                    label: "Save card for future billing?"
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VCol, {
                                                                cols: "12",
                                                                class: "d-flex flex-wrap gap-4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(VBtn, { type: "submit" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Save changes ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(VBtn, {
                                                                    color: "secondary",
                                                                    variant: "outlined",
                                                                    onClick: resetPaymentForm
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Reset ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 512), [
                                                            [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                          ]),
                                                          withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                            [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                          ]),
                                                          withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                            [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6 mb-6"${_scopeId7}> My Cards </h6><div class="d-flex flex-column gap-y-6"${_scopeId7}><!--[-->`);
                                                ssrRenderList(creditCards, (card) => {
                                                  _push8(ssrRenderComponent(VCard, {
                                                    key: card.name,
                                                    class: "bg-var-theme-background",
                                                    flat: ""
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<div class="text-no-wrap"${_scopeId9}><img${ssrRenderAttr("src", card.image)}${_scopeId9}><div class="d-flex align-center gap-x-4"${_scopeId9}><h6 class="text-h6 my-2"${_scopeId9}>${ssrInterpolate(card.name)}</h6>`);
                                                              if (card.isPrimary) {
                                                                _push10(ssrRenderComponent(VChip, {
                                                                  color: "primary",
                                                                  size: "small"
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(` Primary `);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(" Primary ")
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                _push10(`<!---->`);
                                                              }
                                                              _push10(`</div><div${_scopeId9}>**** **** **** ${ssrInterpolate(card.number.substring(card.number.length - 4))}</div></div>`);
                                                              _push10(ssrRenderComponent(VSpacer, null, null, _parent10, _scopeId9));
                                                              _push10(`<div class="d-flex flex-column text-sm-end"${_scopeId9}><div class="d-flex flex-wrap gap-4 order-sm-0 order-1"${_scopeId9}>`);
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                variant: "outlined",
                                                                size: "small",
                                                                onClick: ($event) => openEditCardDialog(card)
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(` Edit `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(" Edit ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(VBtn, {
                                                                color: "error",
                                                                variant: "outlined",
                                                                size: "small"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(` Delete `);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(" Delete ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(`</div><div class="my-4 text-body-2 order-sm-1 order-0"${_scopeId9}> Card expires at ${ssrInterpolate(card.expiry)}</div></div>`);
                                                            } else {
                                                              return [
                                                                createVNode("div", { class: "text-no-wrap" }, [
                                                                  createVNode("img", {
                                                                    src: card.image
                                                                  }, null, 8, ["src"]),
                                                                  createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                                    createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                                  createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                                ]),
                                                                createVNode(VSpacer),
                                                                createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                                  createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                                    createVNode(VBtn, {
                                                                      variant: "outlined",
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
                                                                      variant: "outlined",
                                                                      size: "small"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Delete ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ]),
                                                                  createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                                ])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "text-no-wrap" }, [
                                                                createVNode("img", {
                                                                  src: card.image
                                                                }, null, 8, ["src"]),
                                                                createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                                  createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                                createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                              ]),
                                                              createVNode(VSpacer),
                                                              createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                                createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                                  createVNode(VBtn, {
                                                                    variant: "outlined",
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
                                                                    variant: "outlined",
                                                                    size: "small"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Delete ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]--></div>`);
                                                _push8(ssrRenderComponent(_component_CardAddEditDialog, {
                                                  isDialogVisible: unref(isCardEditDialogVisible),
                                                  "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                                  "card-details": unref(currentCardDetails)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                                  createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                                    (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                                      return createVNode(VCard, {
                                                        key: card.name,
                                                        class: "bg-var-theme-background",
                                                        flat: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "text-no-wrap" }, [
                                                                createVNode("img", {
                                                                  src: card.image
                                                                }, null, 8, ["src"]),
                                                                createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                                  createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                                createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                              ]),
                                                              createVNode(VSpacer),
                                                              createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                                createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                                  createVNode(VBtn, {
                                                                    variant: "outlined",
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
                                                                    variant: "outlined",
                                                                    size: "small"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Delete ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                              ])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 64))
                                                  ]),
                                                  createVNode(_component_CardAddEditDialog, {
                                                    isDialogVisible: unref(isCardEditDialogVisible),
                                                    "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                                    "card-details": unref(currentCardDetails)
                                                  }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VRadioGroup, {
                                                          modelValue: unref(selectedPaymentMethod),
                                                          "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                          inline: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VRadio, {
                                                              value: "credit-debit-atm-card",
                                                              label: "Credit/Debit/ATM Card",
                                                              color: "primary"
                                                            }),
                                                            createVNode(VRadio, {
                                                              value: "cod-cheque",
                                                              label: "COD/Cheque",
                                                              color: "primary"
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        withDirectives(createVNode(VRow, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VCol, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VTextField, {
                                                                  modelValue: unref(cardNumber),
                                                                  "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                  modelValue: unref(cardName),
                                                                  "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                  label: "Name",
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
                                                                  modelValue: unref(cardExpiryDate),
                                                                  "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                  label: "Expiry Date",
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
                                                                  modelValue: unref(cardCvv),
                                                                  "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                  type: "number",
                                                                  label: "CVV Code",
                                                                  placeholder: "123"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(VSwitch, {
                                                                  modelValue: unref(isCardDetailSaveBilling),
                                                                  "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                  density: "compact",
                                                                  label: "Save card for future billing?"
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VCol, {
                                                              cols: "12",
                                                              class: "d-flex flex-wrap gap-4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(VBtn, { type: "submit" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Save changes ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(VBtn, {
                                                                  color: "secondary",
                                                                  variant: "outlined",
                                                                  onClick: resetPaymentForm
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Reset ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 512), [
                                                          [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                        ]),
                                                        withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                          [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                        ]),
                                                        withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                          [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                                createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                                createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                                  (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                                    return createVNode(VCard, {
                                                      key: card.name,
                                                      class: "bg-var-theme-background",
                                                      flat: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "text-no-wrap" }, [
                                                              createVNode("img", {
                                                                src: card.image
                                                              }, null, 8, ["src"]),
                                                              createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                                createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                              createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                            ]),
                                                            createVNode(VSpacer),
                                                            createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                              createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                                createVNode(VBtn, {
                                                                  variant: "outlined",
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
                                                                  variant: "outlined",
                                                                  size: "small"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Delete ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                            ])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 64))
                                                ]),
                                                createVNode(_component_CardAddEditDialog, {
                                                  isDialogVisible: unref(isCardEditDialogVisible),
                                                  "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                                  "card-details": unref(currentCardDetails)
                                                }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VRadioGroup, {
                                                        modelValue: unref(selectedPaymentMethod),
                                                        "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                        inline: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VRadio, {
                                                            value: "credit-debit-atm-card",
                                                            label: "Credit/Debit/ATM Card",
                                                            color: "primary"
                                                          }),
                                                          createVNode(VRadio, {
                                                            value: "cod-cheque",
                                                            label: "COD/Cheque",
                                                            color: "primary"
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      withDirectives(createVNode(VRow, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VCol, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(cardNumber),
                                                                "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                                modelValue: unref(cardName),
                                                                "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                                label: "Name",
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
                                                                modelValue: unref(cardExpiryDate),
                                                                "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                                label: "Expiry Date",
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
                                                                modelValue: unref(cardCvv),
                                                                "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                                type: "number",
                                                                label: "CVV Code",
                                                                placeholder: "123"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(VSwitch, {
                                                                modelValue: unref(isCardDetailSaveBilling),
                                                                "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                                density: "compact",
                                                                label: "Save card for future billing?"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VCol, {
                                                            cols: "12",
                                                            class: "d-flex flex-wrap gap-4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VBtn, { type: "submit" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Save changes ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VBtn, {
                                                                color: "secondary",
                                                                variant: "outlined",
                                                                onClick: resetPaymentForm
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Reset ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 512), [
                                                        [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                      ]),
                                                      withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                        [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                      ]),
                                                      withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                        [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                              createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                              createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                                  return createVNode(VCard, {
                                                    key: card.name,
                                                    class: "bg-var-theme-background",
                                                    flat: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-no-wrap" }, [
                                                            createVNode("img", {
                                                              src: card.image
                                                            }, null, 8, ["src"]),
                                                            createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                              createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                            createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                          ]),
                                                          createVNode(VSpacer),
                                                          createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                            createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                              createVNode(VBtn, {
                                                                variant: "outlined",
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
                                                                variant: "outlined",
                                                                size: "small"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Delete ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                          ])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 64))
                                              ]),
                                              createVNode(_component_CardAddEditDialog, {
                                                isDialogVisible: unref(isCardEditDialogVisible),
                                                "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                                "card-details": unref(currentCardDetails)
                                              }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VRadioGroup, {
                                                      modelValue: unref(selectedPaymentMethod),
                                                      "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                      inline: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VRadio, {
                                                          value: "credit-debit-atm-card",
                                                          label: "Credit/Debit/ATM Card",
                                                          color: "primary"
                                                        }),
                                                        createVNode(VRadio, {
                                                          value: "cod-cheque",
                                                          label: "COD/Cheque",
                                                          color: "primary"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    withDirectives(createVNode(VRow, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(cardNumber),
                                                              "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                              modelValue: unref(cardName),
                                                              "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                              label: "Name",
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
                                                              modelValue: unref(cardExpiryDate),
                                                              "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                              label: "Expiry Date",
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
                                                              modelValue: unref(cardCvv),
                                                              "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                              type: "number",
                                                              label: "CVV Code",
                                                              placeholder: "123"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSwitch, {
                                                              modelValue: unref(isCardDetailSaveBilling),
                                                              "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                              density: "compact",
                                                              label: "Save card for future billing?"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          class: "d-flex flex-wrap gap-4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VBtn, { type: "submit" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Save changes ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VBtn, {
                                                              color: "secondary",
                                                              variant: "outlined",
                                                              onClick: resetPaymentForm
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Reset ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 512), [
                                                      [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                    ]),
                                                    withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                      [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                    ]),
                                                    withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                      [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                            createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                            createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                              (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                                return createVNode(VCard, {
                                                  key: card.name,
                                                  class: "bg-var-theme-background",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { class: "text-no-wrap" }, [
                                                          createVNode("img", {
                                                            src: card.image
                                                          }, null, 8, ["src"]),
                                                          createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                            createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                          createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                        ]),
                                                        createVNode(VSpacer),
                                                        createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                          createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                            createVNode(VBtn, {
                                                              variant: "outlined",
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
                                                              variant: "outlined",
                                                              size: "small"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Delete ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ]),
                                            createVNode(_component_CardAddEditDialog, {
                                              isDialogVisible: unref(isCardEditDialogVisible),
                                              "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                              "card-details": unref(currentCardDetails)
                                            }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Payment Methods")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
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
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VRadioGroup, {
                                                    modelValue: unref(selectedPaymentMethod),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                    inline: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VRadio, {
                                                        value: "credit-debit-atm-card",
                                                        label: "Credit/Debit/ATM Card",
                                                        color: "primary"
                                                      }),
                                                      createVNode(VRadio, {
                                                        value: "cod-cheque",
                                                        label: "COD/Cheque",
                                                        color: "primary"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  withDirectives(createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(cardNumber),
                                                            "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                            modelValue: unref(cardName),
                                                            "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                            label: "Name",
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
                                                            modelValue: unref(cardExpiryDate),
                                                            "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                            label: "Expiry Date",
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
                                                            modelValue: unref(cardCvv),
                                                            "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                            type: "number",
                                                            label: "CVV Code",
                                                            placeholder: "123"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSwitch, {
                                                            modelValue: unref(isCardDetailSaveBilling),
                                                            "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                            density: "compact",
                                                            label: "Save card for future billing?"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        class: "d-flex flex-wrap gap-4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, { type: "submit" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Save changes ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VBtn, {
                                                            color: "secondary",
                                                            variant: "outlined",
                                                            onClick: resetPaymentForm
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Reset ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 512), [
                                                    [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                  ]),
                                                  withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                    [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                  ]),
                                                  withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                    [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                          createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                          createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                            (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                              return createVNode(VCard, {
                                                key: card.name,
                                                class: "bg-var-theme-background",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-no-wrap" }, [
                                                        createVNode("img", {
                                                          src: card.image
                                                        }, null, 8, ["src"]),
                                                        createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                          createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                        createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                      ]),
                                                      createVNode(VSpacer),
                                                      createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                        createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                          createVNode(VBtn, {
                                                            variant: "outlined",
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
                                                            variant: "outlined",
                                                            size: "small"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Delete ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          createVNode(_component_CardAddEditDialog, {
                                            isDialogVisible: unref(isCardEditDialogVisible),
                                            "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                            "card-details": unref(currentCardDetails)
                                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Payment Methods")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
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
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VRadioGroup, {
                                                  modelValue: unref(selectedPaymentMethod),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                  inline: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VRadio, {
                                                      value: "credit-debit-atm-card",
                                                      label: "Credit/Debit/ATM Card",
                                                      color: "primary"
                                                    }),
                                                    createVNode(VRadio, {
                                                      value: "cod-cheque",
                                                      label: "COD/Cheque",
                                                      color: "primary"
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                withDirectives(createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(cardNumber),
                                                          "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                          modelValue: unref(cardName),
                                                          "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                          label: "Name",
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
                                                          modelValue: unref(cardExpiryDate),
                                                          "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                          label: "Expiry Date",
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
                                                          modelValue: unref(cardCvv),
                                                          "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                          type: "number",
                                                          label: "CVV Code",
                                                          placeholder: "123"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSwitch, {
                                                          modelValue: unref(isCardDetailSaveBilling),
                                                          "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                          density: "compact",
                                                          label: "Save card for future billing?"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      class: "d-flex flex-wrap gap-4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, { type: "submit" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Save changes ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VBtn, {
                                                          color: "secondary",
                                                          variant: "outlined",
                                                          onClick: resetPaymentForm
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Reset ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 512), [
                                                  [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                                ]),
                                                withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                  [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                                ]),
                                                withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                  [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                        createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                        createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                            return createVNode(VCard, {
                                              key: card.name,
                                              class: "bg-var-theme-background",
                                              flat: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-no-wrap" }, [
                                                      createVNode("img", {
                                                        src: card.image
                                                      }, null, 8, ["src"]),
                                                      createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                        createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                      createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                    ]),
                                                    createVNode(VSpacer),
                                                    createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                      createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                        createVNode(VBtn, {
                                                          variant: "outlined",
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
                                                          variant: "outlined",
                                                          size: "small"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Delete ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        createVNode(_component_CardAddEditDialog, {
                                          isDialogVisible: unref(isCardEditDialogVisible),
                                          "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                          "card-details": unref(currentCardDetails)
                                        }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Billing Address`);
                                  } else {
                                    return [
                                      createTextVNode("Billing Address")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Billing Address")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
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
                                                  label: "Company Name",
                                                  placeholder: "Pixinvent"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Company Name",
                                                    placeholder: "Pixinvent"
                                                  })
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
                                                  label: "Billing Email",
                                                  placeholder: "pixinvent@email.com"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Billing Email",
                                                    placeholder: "pixinvent@email.com"
                                                  })
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
                                                  label: "Tax ID",
                                                  placeholder: "123 123 1233"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Tax ID",
                                                    placeholder: "123 123 1233"
                                                  })
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
                                                  label: "VAT Number",
                                                  placeholder: "121212"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "VAT Number",
                                                    placeholder: "121212"
                                                  })
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
                                                  dirty: "",
                                                  label: "Phone Number",
                                                  type: "number",
                                                  prefix: "US (+1)",
                                                  placeholder: "+1 123 456 7890"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    dirty: "",
                                                    label: "Phone Number",
                                                    type: "number",
                                                    prefix: "US (+1)",
                                                    placeholder: "+1 123 456 7890"
                                                  })
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
                                                _push8(ssrRenderComponent(VSelect, {
                                                  label: "Country",
                                                  items: countryList,
                                                  placeholder: "Select Country"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    label: "Country",
                                                    items: countryList,
                                                    placeholder: "Select Country"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Billing Address",
                                                  placeholder: "1234 Main St"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Billing Address",
                                                    placeholder: "1234 Main St"
                                                  })
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
                                                  label: "State",
                                                  placeholder: "New York"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "State",
                                                    placeholder: "New York"
                                                  })
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
                                                  label: "Zip Code",
                                                  type: "number",
                                                  placeholder: "100006"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Zip Code",
                                                    type: "number",
                                                    placeholder: "100006"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Save changes `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Save changes ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "reset",
                                                  color: "secondary",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Reset `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Reset ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Save changes ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    type: "reset",
                                                    color: "secondary",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Reset ")
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
                                                  label: "Company Name",
                                                  placeholder: "Pixinvent"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Billing Email",
                                                  placeholder: "pixinvent@email.com"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Tax ID",
                                                  placeholder: "123 123 1233"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "VAT Number",
                                                  placeholder: "121212"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  dirty: "",
                                                  label: "Phone Number",
                                                  type: "number",
                                                  prefix: "US (+1)",
                                                  placeholder: "+1 123 456 7890"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  label: "Country",
                                                  items: countryList,
                                                  placeholder: "Select Country"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Billing Address",
                                                  placeholder: "1234 Main St"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "State",
                                                  placeholder: "New York"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Zip Code",
                                                  type: "number",
                                                  placeholder: "100006"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              class: "d-flex flex-wrap gap-4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Save changes ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  type: "reset",
                                                  color: "secondary",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Reset ")
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
                                                label: "Company Name",
                                                placeholder: "Pixinvent"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Billing Email",
                                                placeholder: "pixinvent@email.com"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Tax ID",
                                                placeholder: "123 123 1233"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "VAT Number",
                                                placeholder: "121212"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                dirty: "",
                                                label: "Phone Number",
                                                type: "number",
                                                prefix: "US (+1)",
                                                placeholder: "+1 123 456 7890"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                label: "Country",
                                                items: countryList,
                                                placeholder: "Select Country"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Billing Address",
                                                placeholder: "1234 Main St"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "State",
                                                placeholder: "New York"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Zip Code",
                                                type: "number",
                                                placeholder: "100006"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            class: "d-flex flex-wrap gap-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Save changes ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                type: "reset",
                                                color: "secondary",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Reset ")
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
                                              label: "Company Name",
                                              placeholder: "Pixinvent"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Billing Email",
                                              placeholder: "pixinvent@email.com"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Tax ID",
                                              placeholder: "123 123 1233"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "VAT Number",
                                              placeholder: "121212"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              dirty: "",
                                              label: "Phone Number",
                                              type: "number",
                                              prefix: "US (+1)",
                                              placeholder: "+1 123 456 7890"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              label: "Country",
                                              items: countryList,
                                              placeholder: "Select Country"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Billing Address",
                                              placeholder: "1234 Main St"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "State",
                                              placeholder: "New York"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Zip Code",
                                              type: "number",
                                              placeholder: "100006"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          class: "d-flex flex-wrap gap-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Save changes ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              type: "reset",
                                              color: "secondary",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Reset ")
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
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Billing Address")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
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
                                            label: "Company Name",
                                            placeholder: "Pixinvent"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Billing Email",
                                            placeholder: "pixinvent@email.com"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Tax ID",
                                            placeholder: "123 123 1233"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "VAT Number",
                                            placeholder: "121212"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            dirty: "",
                                            label: "Phone Number",
                                            type: "number",
                                            prefix: "US (+1)",
                                            placeholder: "+1 123 456 7890"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            label: "Country",
                                            items: countryList,
                                            placeholder: "Select Country"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Billing Address",
                                            placeholder: "1234 Main St"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "State",
                                            placeholder: "New York"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Zip Code",
                                            type: "number",
                                            placeholder: "100006"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex flex-wrap gap-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Save changes ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            type: "reset",
                                            color: "secondary",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Reset ")
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Billing Address")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
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
                                          label: "Company Name",
                                          placeholder: "Pixinvent"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Billing Email",
                                          placeholder: "pixinvent@email.com"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Tax ID",
                                          placeholder: "123 123 1233"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "VAT Number",
                                          placeholder: "121212"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          dirty: "",
                                          label: "Phone Number",
                                          type: "number",
                                          prefix: "US (+1)",
                                          placeholder: "+1 123 456 7890"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          label: "Country",
                                          items: countryList,
                                          placeholder: "Select Country"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Billing Address",
                                          placeholder: "1234 Main St"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "State",
                                          placeholder: "New York"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Zip Code",
                                          type: "number",
                                          placeholder: "100006"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex flex-wrap gap-4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save changes ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          color: "secondary",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
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
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
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
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Current Plan")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("h6", { class: "text-h6" }, " Your Current Plan is Basic "),
                                      createVNode("div", null, " A simple start for everyone ")
                                    ]),
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("h6", { class: "text-h6" }, " Active until Dec 09, 2021 "),
                                      createVNode("div", null, " We will send you a notification upon Subscription expiration ")
                                    ]),
                                    createVNode("div", { class: "d-flex flex-column gap-y-1" }, [
                                      createVNode("div", { class: "d-flex align-center gap-x-2" }, [
                                        createVNode("h6", { class: "text-h6" }, " $199 Per Month "),
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
                                      createVNode("p", { class: "text-base mb-0" }, " Standard plan for small to medium businesses ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VAlert, {
                                    type: "warning",
                                    variant: "tonal",
                                    title: "We need your attention!",
                                    text: "Your plan requires updates"
                                  }),
                                  createVNode("h6", { class: "d-flex text-h6 justify-space-between mt-6 mb-1" }, [
                                    createVNode("div", null, "Days"),
                                    createVNode("div", null, "12 of 30 Days")
                                  ]),
                                  createVNode(VProgressLinear, {
                                    color: "primary",
                                    rounded: "",
                                    height: "6",
                                    "model-value": "18"
                                  }),
                                  createVNode("p", { class: "text-base mt-1" }, " 18 days remaining until your plan requires update ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                                    createVNode(VBtn, {
                                      onClick: ($event) => isPricingPlanDialogVisible.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" upgrade plan ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
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
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ConfirmDialog, {
                            isDialogVisible: unref(isConfirmDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isConfirmDialogVisible) ? isConfirmDialogVisible.value = $event : null,
                            "confirmation-question": "Are you sure to cancel your subscription?",
                            "cancel-msg": "Unsubscription Cancelled!!",
                            "cancel-title": "Cancelled",
                            "confirm-msg": "Your subscription cancelled successfully.",
                            "confirm-title": "Unsubscribed!"
                          }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible"]),
                          createVNode(_component_PricingPlanDialog, {
                            "is-dialog-visible": unref(isPricingPlanDialogVisible),
                            "onUpdate:isDialogVisible": ($event) => isRef(isPricingPlanDialogVisible) ? isPricingPlanDialogVisible.value = $event : null
                          }, null, 8, ["is-dialog-visible", "onUpdate:isDialogVisible"])
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Payment Methods")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
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
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VRadioGroup, {
                                                modelValue: unref(selectedPaymentMethod),
                                                "onUpdate:modelValue": ($event) => isRef(selectedPaymentMethod) ? selectedPaymentMethod.value = $event : null,
                                                inline: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VRadio, {
                                                    value: "credit-debit-atm-card",
                                                    label: "Credit/Debit/ATM Card",
                                                    color: "primary"
                                                  }),
                                                  createVNode(VRadio, {
                                                    value: "cod-cheque",
                                                    label: "COD/Cheque",
                                                    color: "primary"
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              withDirectives(createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(cardNumber),
                                                        "onUpdate:modelValue": ($event) => isRef(cardNumber) ? cardNumber.value = $event : null,
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
                                                        modelValue: unref(cardName),
                                                        "onUpdate:modelValue": ($event) => isRef(cardName) ? cardName.value = $event : null,
                                                        label: "Name",
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
                                                        modelValue: unref(cardExpiryDate),
                                                        "onUpdate:modelValue": ($event) => isRef(cardExpiryDate) ? cardExpiryDate.value = $event : null,
                                                        label: "Expiry Date",
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
                                                        modelValue: unref(cardCvv),
                                                        "onUpdate:modelValue": ($event) => isRef(cardCvv) ? cardCvv.value = $event : null,
                                                        type: "number",
                                                        label: "CVV Code",
                                                        placeholder: "123"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSwitch, {
                                                        modelValue: unref(isCardDetailSaveBilling),
                                                        "onUpdate:modelValue": ($event) => isRef(isCardDetailSaveBilling) ? isCardDetailSaveBilling.value = $event : null,
                                                        density: "compact",
                                                        label: "Save card for future billing?"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    class: "d-flex flex-wrap gap-4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, { type: "submit" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Save changes ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VBtn, {
                                                        color: "secondary",
                                                        variant: "outlined",
                                                        onClick: resetPaymentForm
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Reset ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 512), [
                                                [vShow, unref(selectedPaymentMethod) === "credit-debit-atm-card"]
                                              ]),
                                              withDirectives(createVNode("p", { class: "text-base" }, " Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ", 512), [
                                                [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
                                              ]),
                                              withDirectives(createVNode("p", { class: "text-base" }, " You can pay cash or make the payment via debit/credit card directly to the delivery person. ", 512), [
                                                [vShow, unref(selectedPaymentMethod) === "cod-cheque"]
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
                                      createVNode("h6", { class: "text-h6 mb-6" }, " My Cards "),
                                      createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(creditCards, (card) => {
                                          return createVNode(VCard, {
                                            key: card.name,
                                            class: "bg-var-theme-background",
                                            flat: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCardText, { class: "d-flex flex-sm-row flex-column" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-no-wrap" }, [
                                                    createVNode("img", {
                                                      src: card.image
                                                    }, null, 8, ["src"]),
                                                    createVNode("div", { class: "d-flex align-center gap-x-4" }, [
                                                      createVNode("h6", { class: "text-h6 my-2" }, toDisplayString(card.name), 1),
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
                                                    createVNode("div", null, "**** **** **** " + toDisplayString(card.number.substring(card.number.length - 4)), 1)
                                                  ]),
                                                  createVNode(VSpacer),
                                                  createVNode("div", { class: "d-flex flex-column text-sm-end" }, [
                                                    createVNode("div", { class: "d-flex flex-wrap gap-4 order-sm-0 order-1" }, [
                                                      createVNode(VBtn, {
                                                        variant: "outlined",
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
                                                        variant: "outlined",
                                                        size: "small"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Delete ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    createVNode("div", { class: "my-4 text-body-2 order-sm-1 order-0" }, " Card expires at " + toDisplayString(card.expiry), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ]),
                                      createVNode(_component_CardAddEditDialog, {
                                        isDialogVisible: unref(isCardEditDialogVisible),
                                        "onUpdate:isDialogVisible": ($event) => isRef(isCardEditDialogVisible) ? isCardEditDialogVisible.value = $event : null,
                                        "card-details": unref(currentCardDetails)
                                      }, null, 8, ["isDialogVisible", "onUpdate:isDialogVisible", "card-details"])
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Billing Address")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
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
                                        label: "Company Name",
                                        placeholder: "Pixinvent"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Billing Email",
                                        placeholder: "pixinvent@email.com"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Tax ID",
                                        placeholder: "123 123 1233"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "VAT Number",
                                        placeholder: "121212"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        dirty: "",
                                        label: "Phone Number",
                                        type: "number",
                                        prefix: "US (+1)",
                                        placeholder: "+1 123 456 7890"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        label: "Country",
                                        items: countryList,
                                        placeholder: "Select Country"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Billing Address",
                                        placeholder: "1234 Main St"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "State",
                                        placeholder: "New York"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Zip Code",
                                        type: "number",
                                        placeholder: "100006"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex flex-wrap gap-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save changes ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        color: "secondary",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset ")
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
                  createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/AccountSettingsBillingAndPlans.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AccountSettingsConnections",
  __ssrInlineRender: true,
  setup(__props) {
    const connectedAccounts = ref([
      {
        logo: google,
        name: "Google",
        subtitle: "Calendar and contacts",
        connected: true
      },
      {
        logo: slack,
        name: "Slack",
        subtitle: "Communication",
        connected: false
      },
      {
        logo: github,
        name: "GitHub",
        subtitle: "Manage your Git repositories",
        connected: true
      },
      {
        logo: mailchimp,
        name: "MailChimp",
        subtitle: "Email marketing service",
        connected: true
      },
      {
        logo: asana,
        name: "Asana",
        subtitle: "Task management",
        connected: false
      }
    ]);
    const socialAccounts = ref([
      {
        logo: facebook,
        name: "Facebook",
        connected: false
      },
      {
        logo: twitter,
        name: "Twitter",
        links: {
          username: "@Pixinvent",
          link: "https://twitter.com/pixinvents"
        },
        connected: true
      },
      {
        logo: linkedin,
        name: "LinkedIn",
        links: {
          username: "@Pixinvent",
          link: "https://www.linkedin.com/company/pixinvent"
        },
        connected: true
      },
      {
        logo: dribbleLogo,
        name: "Dribbble",
        connected: false
      },
      {
        logo: behance,
        name: "Behance",
        connected: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "pe-md-0 pb-0 pb-md-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Connected Accounts `);
                                        } else {
                                          return [
                                            createTextVNode(" Connected Accounts ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardSubtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Display content from your connected accounts on your site`);
                                        } else {
                                          return [
                                            createTextVNode("Display content from your connected accounts on your site")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Connected Accounts ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Display content from your connected accounts on your site")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, { class: "card-list" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(connectedAccounts), (item) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: item.logo
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VAvatar, {
                                                    start: "",
                                                    size: "32",
                                                    rounded: "",
                                                    class: "me-1"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<img${ssrRenderAttr("src", item.logo)} height="32" width="32"${_scopeId8}>`);
                                                      } else {
                                                        return [
                                                          createVNode("img", {
                                                            src: item.logo,
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VAvatar, {
                                                      start: "",
                                                      size: "32",
                                                      rounded: "",
                                                      class: "me-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: item.logo,
                                                          height: "32",
                                                          width: "32"
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemAction, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VSwitch, {
                                                          modelValue: item.connected,
                                                          "onUpdate:modelValue": ($event) => item.connected = $event,
                                                          density: "compact",
                                                          class: "me-1"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VSwitch, {
                                                            modelValue: item.connected,
                                                            "onUpdate:modelValue": ($event) => item.connected = $event,
                                                            density: "compact",
                                                            class: "me-1"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemAction, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VSwitch, {
                                                          modelValue: item.connected,
                                                          "onUpdate:modelValue": ($event) => item.connected = $event,
                                                          density: "compact",
                                                          class: "me-1"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<h6 class="text-h6"${_scopeId8}>${ssrInterpolate(item.name)}</h6>`);
                                                      } else {
                                                        return [
                                                          createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item.subtitle)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item.subtitle), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.subtitle), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: item.logo
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    start: "",
                                                    size: "32",
                                                    rounded: "",
                                                    class: "me-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        src: item.logo,
                                                        height: "32",
                                                        width: "32"
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                append: withCtx(() => [
                                                  createVNode(VListItemAction, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VSwitch, {
                                                        modelValue: item.connected,
                                                        "onUpdate:modelValue": ($event) => item.connected = $event,
                                                        density: "compact",
                                                        class: "me-1"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.subtitle), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, { class: "card-list" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: item.logo
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  start: "",
                                                  size: "32",
                                                  rounded: "",
                                                  class: "me-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: item.logo,
                                                      height: "32",
                                                      width: "32"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              append: withCtx(() => [
                                                createVNode(VListItemAction, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VSwitch, {
                                                      modelValue: item.connected,
                                                      "onUpdate:modelValue": ($event) => item.connected = $event,
                                                      density: "compact",
                                                      class: "me-1"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.subtitle), 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardItem, { class: "pb-6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Connected Accounts ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Display content from your connected accounts on your site")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VList, { class: "card-list" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: item.logo
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, {
                                                start: "",
                                                size: "32",
                                                rounded: "",
                                                class: "me-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: item.logo,
                                                    height: "32",
                                                    width: "32"
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            append: withCtx(() => [
                                              createVNode(VListItemAction, null, {
                                                default: withCtx(() => [
                                                  createVNode(VSwitch, {
                                                    modelValue: item.connected,
                                                    "onUpdate:modelValue": ($event) => item.connected = $event,
                                                    density: "compact",
                                                    class: "me-1"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.subtitle), 1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardItem, { class: "pb-6" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Connected Accounts ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Display content from your connected accounts on your site")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: item.logo
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              start: "",
                                              size: "32",
                                              rounded: "",
                                              class: "me-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: item.logo,
                                                  height: "32",
                                                  width: "32"
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VListItemAction, null, {
                                              default: withCtx(() => [
                                                createVNode(VSwitch, {
                                                  modelValue: item.connected,
                                                  "onUpdate:modelValue": ($event) => item.connected = $event,
                                                  density: "compact",
                                                  class: "me-1"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.subtitle), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "ps-md-0 pt-0 pt-md-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, { flat: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Social Accounts `);
                                        } else {
                                          return [
                                            createTextVNode(" Social Accounts ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardSubtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Display content from social accounts on your site`);
                                        } else {
                                          return [
                                            createTextVNode("Display content from social accounts on your site")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Social Accounts ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Display content from social accounts on your site")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VList, { class: "card-list" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(socialAccounts), (item) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: item.logo
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VAvatar, {
                                                    start: "",
                                                    rounded: "0",
                                                    size: "32",
                                                    class: "me-1"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<img${ssrRenderAttr("src", item.logo)} height="32" width="32"${_scopeId8}>`);
                                                      } else {
                                                        return [
                                                          createVNode("img", {
                                                            src: item.logo,
                                                            height: "32",
                                                            width: "32"
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VAvatar, {
                                                      start: "",
                                                      rounded: "0",
                                                      size: "32",
                                                      class: "me-1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: item.logo,
                                                          height: "32",
                                                          width: "32"
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemAction, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          icon: "",
                                                          variant: "outlined",
                                                          color: item.connected ? "error" : "secondary",
                                                          rounded: ""
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VIcon, {
                                                                icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                              }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(VIcon, {
                                                                  icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                                }, null, 8, ["icon"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VBtn, {
                                                            icon: "",
                                                            variant: "outlined",
                                                            color: item.connected ? "error" : "secondary",
                                                            rounded: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                              }, null, 8, ["icon"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemAction, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          icon: "",
                                                          variant: "outlined",
                                                          color: item.connected ? "error" : "secondary",
                                                          rounded: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                            }, null, 8, ["icon"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                var _a, _b, _c, _d;
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<h6 class="text-h6"${_scopeId8}>${ssrInterpolate(item.name)}</h6>`);
                                                      } else {
                                                        return [
                                                          createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  if ((_a = item.links) == null ? void 0 : _a.link) {
                                                    _push8(ssrRenderComponent(VListItemSubtitle, {
                                                      tag: "a",
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      href: (_b = item.links) == null ? void 0 : _b.link,
                                                      class: "text-primary",
                                                      style: { "opacity": "1" }
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        var _a2, _b2;
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate((_a2 = item.links) == null ? void 0 : _a2.username)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString((_b2 = item.links) == null ? void 0 : _b2.username), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(ssrRenderComponent(VListItemSubtitle, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(` Not Connected `);
                                                        } else {
                                                          return [
                                                            createTextVNode(" Not Connected ")
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  }
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    ((_c = item.links) == null ? void 0 : _c.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                                      key: 0,
                                                      tag: "a",
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      href: (_d = item.links) == null ? void 0 : _d.link,
                                                      class: "text-primary",
                                                      style: { "opacity": "1" }
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Not Connected ")
                                                      ]),
                                                      _: 1
                                                    }))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: item.logo
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VAvatar, {
                                                    start: "",
                                                    rounded: "0",
                                                    size: "32",
                                                    class: "me-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        src: item.logo,
                                                        height: "32",
                                                        width: "32"
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                append: withCtx(() => [
                                                  createVNode(VListItemAction, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        icon: "",
                                                        variant: "outlined",
                                                        color: item.connected ? "error" : "secondary",
                                                        rounded: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                          }, null, 8, ["icon"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => {
                                                  var _a, _b;
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                                      key: 0,
                                                      tag: "a",
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      href: (_b = item.links) == null ? void 0 : _b.link,
                                                      class: "text-primary",
                                                      style: { "opacity": "1" }
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a2;
                                                        return [
                                                          createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Not Connected ")
                                                      ]),
                                                      _: 1
                                                    }))
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VList, { class: "card-list" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: item.logo
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VAvatar, {
                                                  start: "",
                                                  rounded: "0",
                                                  size: "32",
                                                  class: "me-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: item.logo,
                                                      height: "32",
                                                      width: "32"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              append: withCtx(() => [
                                                createVNode(VListItemAction, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      variant: "outlined",
                                                      color: item.connected ? "error" : "secondary",
                                                      rounded: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                        }, null, 8, ["icon"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              default: withCtx(() => {
                                                var _a, _b;
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                                    key: 0,
                                                    tag: "a",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    href: (_b = item.links) == null ? void 0 : _b.link,
                                                    class: "text-primary",
                                                    style: { "opacity": "1" }
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a2;
                                                      return [
                                                        createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Not Connected ")
                                                    ]),
                                                    _: 1
                                                  }))
                                                ];
                                              }),
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardItem, { class: "pb-6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Social Accounts ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Display content from social accounts on your site")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode(VList, { class: "card-list" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: item.logo
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, {
                                                start: "",
                                                rounded: "0",
                                                size: "32",
                                                class: "me-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: item.logo,
                                                    height: "32",
                                                    width: "32"
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            append: withCtx(() => [
                                              createVNode(VListItemAction, null, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    variant: "outlined",
                                                    color: item.connected ? "error" : "secondary",
                                                    rounded: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                      }, null, 8, ["icon"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => {
                                              var _a, _b;
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                                  key: 0,
                                                  tag: "a",
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  href: (_b = item.links) == null ? void 0 : _b.link,
                                                  class: "text-primary",
                                                  style: { "opacity": "1" }
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a2;
                                                    return [
                                                      createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                    ];
                                                  }),
                                                  _: 2
                                                }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Not Connected ")
                                                  ]),
                                                  _: 1
                                                }))
                                              ];
                                            }),
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(VCardItem, { class: "pb-6" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Social Accounts ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Display content from social accounts on your site")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode(VList, { class: "card-list" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: item.logo
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VAvatar, {
                                              start: "",
                                              rounded: "0",
                                              size: "32",
                                              class: "me-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: item.logo,
                                                  height: "32",
                                                  width: "32"
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VListItemAction, null, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  variant: "outlined",
                                                  color: item.connected ? "error" : "secondary",
                                                  rounded: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                    }, null, 8, ["icon"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => {
                                            var _a, _b;
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                                key: 0,
                                                tag: "a",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: (_b = item.links) == null ? void 0 : _b.link,
                                                class: "text-primary",
                                                style: { "opacity": "1" }
                                              }, {
                                                default: withCtx(() => {
                                                  var _a2;
                                                  return [
                                                    createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Not Connected ")
                                                ]),
                                                _: 1
                                              }))
                                            ];
                                          }),
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "pe-md-0 pb-0 pb-md-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pb-6" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Connected Accounts ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Display content from your connected accounts on your site")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: item.logo
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            start: "",
                                            size: "32",
                                            rounded: "",
                                            class: "me-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: item.logo,
                                                height: "32",
                                                width: "32"
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VListItemAction, null, {
                                            default: withCtx(() => [
                                              createVNode(VSwitch, {
                                                modelValue: item.connected,
                                                "onUpdate:modelValue": ($event) => item.connected = $event,
                                                density: "compact",
                                                class: "me-1"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.subtitle), 1)
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "ps-md-0 pt-0 pt-md-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { flat: "" }, {
                          default: withCtx(() => [
                            createVNode(VCardItem, { class: "pb-6" }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Social Accounts ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Display content from social accounts on your site")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, { class: "card-list" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: item.logo
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            start: "",
                                            rounded: "0",
                                            size: "32",
                                            class: "me-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: item.logo,
                                                height: "32",
                                                width: "32"
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        append: withCtx(() => [
                                          createVNode(VListItemAction, null, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, {
                                                icon: "",
                                                variant: "outlined",
                                                color: item.connected ? "error" : "secondary",
                                                rounded: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                  }, null, 8, ["icon"])
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => {
                                          var _a, _b;
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                              key: 0,
                                              tag: "a",
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              href: (_b = item.links) == null ? void 0 : _b.link,
                                              class: "text-primary",
                                              style: { "opacity": "1" }
                                            }, {
                                              default: withCtx(() => {
                                                var _a2;
                                                return [
                                                  createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Not Connected ")
                                              ]),
                                              _: 1
                                            }))
                                          ];
                                        }),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "pe-md-0 pb-0 pb-md-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Connected Accounts ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Display content from your connected accounts on your site")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(connectedAccounts), (item) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: item.logo
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          start: "",
                                          size: "32",
                                          rounded: "",
                                          class: "me-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: item.logo,
                                              height: "32",
                                              width: "32"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VListItemAction, null, {
                                          default: withCtx(() => [
                                            createVNode(VSwitch, {
                                              modelValue: item.connected,
                                              "onUpdate:modelValue": ($event) => item.connected = $event,
                                              density: "compact",
                                              class: "me-1"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.subtitle), 1)
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
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "ps-md-0 pt-0 pt-md-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, { flat: "" }, {
                        default: withCtx(() => [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Social Accounts ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Display content from social accounts on your site")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, { class: "card-list" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(socialAccounts), (item) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: item.logo
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          start: "",
                                          rounded: "0",
                                          size: "32",
                                          class: "me-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: item.logo,
                                              height: "32",
                                              width: "32"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VListItemAction, null, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, {
                                              icon: "",
                                              variant: "outlined",
                                              color: item.connected ? "error" : "secondary",
                                              rounded: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: item.connected ? "ri-delete-bin-line" : "ri-link"
                                                }, null, 8, ["icon"])
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      default: withCtx(() => {
                                        var _a, _b;
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, toDisplayString(item.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          ((_a = item.links) == null ? void 0 : _a.link) ? (openBlock(), createBlock(VListItemSubtitle, {
                                            key: 0,
                                            tag: "a",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: (_b = item.links) == null ? void 0 : _b.link,
                                            class: "text-primary",
                                            style: { "opacity": "1" }
                                          }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString((_a2 = item.links) == null ? void 0 : _a2.username), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1032, ["href"])) : (openBlock(), createBlock(VListItemSubtitle, { key: 1 }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Not Connected ")
                                            ]),
                                            _: 1
                                          }))
                                        ];
                                      }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/AccountSettingsConnections.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccountSettingsNotification",
  __ssrInlineRender: true,
  setup(__props) {
    const recentDevices = ref([
      {
        type: "New for you",
        email: true,
        browser: true,
        app: true
      },
      {
        type: "Account activity",
        email: true,
        browser: true,
        app: true
      },
      {
        type: "A new browser used to sign in",
        email: true,
        browser: true,
        app: false
      },
      {
        type: "A new device is linked",
        email: true,
        browser: false,
        app: false
      }
    ]);
    const selectedNotification = ref("Only when I'm online");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recent Devices`);
                      } else {
                        return [
                          createTextVNode("Recent Devices")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` We need permission from your browser to show notifications. <a href="javascript:void(0)"${_scopeId3}>Request Permission</a>`);
                      } else {
                        return [
                          createTextVNode(" We need permission from your browser to show notifications. "),
                          createVNode("a", { href: "javascript:void(0)" }, "Request Permission")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Recent Devices")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardSubtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" We need permission from your browser to show notifications. "),
                        createVNode("a", { href: "javascript:void(0)" }, "Request Permission")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTable, { class: "text-no-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><th scope="col"${_scopeId2}> Type </th><th scope="col"${_scopeId2}> EMAIL </th><th scope="col"${_scopeId2}> BROWSER </th><th scope="col"${_scopeId2}> App </th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(recentDevices), (device) => {
                    _push3(`<tr${_scopeId2}><td class="text-high-emphasis"${_scopeId2}>${ssrInterpolate(device.type)}</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: device.email,
                      "onUpdate:modelValue": ($event) => device.email = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: device.browser,
                      "onUpdate:modelValue": ($event) => device.browser = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td${_scopeId2}>`);
                    _push3(ssrRenderComponent(VCheckbox, {
                      modelValue: device.app,
                      "onUpdate:modelValue": ($event) => device.app = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, " Type "),
                        createVNode("th", { scope: "col" }, " EMAIL "),
                        createVNode("th", { scope: "col" }, " BROWSER "),
                        createVNode("th", { scope: "col" }, " App ")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(recentDevices), (device) => {
                        return openBlock(), createBlock("tr", {
                          key: device.type
                        }, [
                          createVNode("td", { class: "text-high-emphasis" }, toDisplayString(device.type), 1),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: device.email,
                              "onUpdate:modelValue": ($event) => device.email = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: device.browser,
                              "onUpdate:modelValue": ($event) => device.browser = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("td", null, [
                            createVNode(VCheckbox, {
                              modelValue: device.app,
                              "onUpdate:modelValue": ($event) => device.app = $event
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
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: () => {
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h6 class="text-h6 mb-6"${_scopeId3}> When should we send you notifications? </h6>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(selectedNotification),
                                      "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                      mandatory: "",
                                      items: ["Only when I'm online", "Anytime"],
                                      class: "mb-6"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(selectedNotification),
                                        "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                        mandatory: "",
                                        items: ["Only when I'm online", "Anytime"],
                                        class: "mb-6"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(selectedNotification),
                                      "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                      mandatory: "",
                                      items: ["Only when I'm online", "Anytime"],
                                      class: "mb-6"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex flex-wrap gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Save Changes `);
                            } else {
                              return [
                                createTextVNode(" Save Changes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          type: "reset"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Reset `);
                            } else {
                              return [
                                createTextVNode(" Reset ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h6", { class: "text-h6 mb-6" }, " When should we send you notifications? "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(selectedNotification),
                                    "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                    mandatory: "",
                                    items: ["Only when I'm online", "Anytime"],
                                    class: "mb-6"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                            createVNode(VBtn, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode(" Save Changes ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              type: "reset"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reset ")
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
                    createVNode(VForm, {
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("h6", { class: "text-h6 mb-6" }, " When should we send you notifications? "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(selectedNotification),
                                  "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                  mandatory: "",
                                  items: ["Only when I'm online", "Anytime"],
                                  class: "mb-6"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                          createVNode(VBtn, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            type: "reset"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reset ")
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
              createVNode(VCardItem, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Recent Devices")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" We need permission from your browser to show notifications. "),
                      createVNode("a", { href: "javascript:void(0)" }, "Request Permission")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VTable, { class: "text-no-wrap" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, " Type "),
                      createVNode("th", { scope: "col" }, " EMAIL "),
                      createVNode("th", { scope: "col" }, " BROWSER "),
                      createVNode("th", { scope: "col" }, " App ")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(recentDevices), (device) => {
                      return openBlock(), createBlock("tr", {
                        key: device.type
                      }, [
                        createVNode("td", { class: "text-high-emphasis" }, toDisplayString(device.type), 1),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: device.email,
                            "onUpdate:modelValue": ($event) => device.email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: device.browser,
                            "onUpdate:modelValue": ($event) => device.browser = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", null, [
                          createVNode(VCheckbox, {
                            modelValue: device.app,
                            "onUpdate:modelValue": ($event) => device.app = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("h6", { class: "text-h6 mb-6" }, " When should we send you notifications? "),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(selectedNotification),
                                "onUpdate:modelValue": ($event) => isRef(selectedNotification) ? selectedNotification.value = $event : null,
                                mandatory: "",
                                items: ["Only when I'm online", "Anytime"],
                                class: "mb-6"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "d-flex flex-wrap gap-4" }, [
                        createVNode(VBtn, { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode(" Save Changes ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          type: "reset"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reset ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/AccountSettingsNotification.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const boyWithTab = "/build/assets/account-settings-security-illustration-S-1m9cPd.png";
const _sfc_main$1 = {
  __name: "AccountSettingsSecurity",
  __ssrInlineRender: true,
  setup(__props) {
    const isCurrentPasswordVisible = ref(false);
    const isNewPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    const currentPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const passwordRequirements = [
      "Minimum 8 characters long - the more, the better",
      "At least one lowercase character",
      "At least one number, symbol, or whitespace character"
    ];
    const serverKeys = [
      {
        name: "Server Key 1",
        key: "23eaf7f0-f4f7-495e-8b86-fad3261282ac",
        createdOn: "28 Apr 2021, 18:20 GTM+4:10",
        permission: "Full Access"
      },
      {
        name: "Server Key 2",
        key: "bb98e571-a2e2-4de8-90a9-2e231b5e99",
        createdOn: "12 Feb 2021, 10:30 GTM+2:30",
        permission: "Read Only"
      },
      {
        name: "Server Key 3",
        key: "2e915e59-3105-47f2-8838-6e46bf83b711",
        createdOn: "28 Dec 2020, 12:21 GTM+4:10",
        permission: "Full Access"
      }
    ];
    const recentDevicesHeaders = [
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
        key: "recentActivity"
      }
    ];
    const recentDevices = [
      {
        browser: "Chrome on Windows",
        device: "HP Spectre 360",
        location: "New York, NY",
        recentActivity: "28 Apr 2022, 18:20",
        deviceIcon: {
          icon: "ri-macbook-line",
          color: "primary"
        }
      },
      {
        browser: "Chrome on iPhone",
        device: "iPhone 12x",
        location: "Los Angeles, CA",
        recentActivity: "20 Apr 2022, 10:20",
        deviceIcon: {
          icon: "ri-android-line",
          color: "error"
        }
      },
      {
        browser: "Chrome on Android",
        device: "Oneplus 9 Pro",
        location: "San Francisco, CA",
        recentActivity: "16 Apr 2022, 04:20",
        deviceIcon: {
          icon: "ri-smartphone-line",
          color: "success"
        }
      },
      {
        browser: "Chrome on macOS",
        device: "Apple iMac",
        location: "New York, NY",
        recentActivity: "28 Apr 2022, 18:20",
        deviceIcon: {
          icon: "ri-mac-line",
          color: "secondary"
        }
      },
      {
        browser: "Chrome on Windows",
        device: "HP Spectre 360",
        location: "Los Angeles, CA",
        recentActivity: "20 Apr 2022, 10:20",
        deviceIcon: {
          icon: "ri-macbook-line",
          color: "primary"
        }
      },
      {
        browser: "Chrome on Android",
        device: "Oneplus 9 Pro",
        location: "San Francisco, CA",
        recentActivity: "16 Apr 2022, 04:20",
        deviceIcon: {
          icon: "ri-android-line",
          color: "success"
        }
      }
    ];
    const isOneTimePasswordDialogVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TwoFactorAuthDialog = _sfc_main$b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Change Password`);
                                  } else {
                                    return [
                                      createTextVNode("Change Password")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Change Password")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VForm, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, { class: "pt-0" }, {
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
                                                  modelValue: unref(currentPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                  type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  autocomplete: "on",
                                                  label: "Current Password",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(currentPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                    type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    autocomplete: "on",
                                                    label: "Current Password",
                                                    placeholder: "············",
                                                    "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                  modelValue: unref(currentPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                  type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  autocomplete: "on",
                                                  label: "Current Password",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                                                  modelValue: unref(newPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  label: "New Password",
                                                  autocomplete: "on",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(newPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                    type: unref(isNewPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    label: "New Password",
                                                    autocomplete: "on",
                                                    placeholder: "············",
                                                    "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                  modelValue: unref(confirmPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  autocomplete: "on",
                                                  label: "Confirm New Password",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(confirmPassword),
                                                    "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                    type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    autocomplete: "on",
                                                    label: "Confirm New Password",
                                                    placeholder: "············",
                                                    "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                  modelValue: unref(newPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                  type: unref(isNewPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  label: "New Password",
                                                  autocomplete: "on",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(confirmPassword),
                                                  "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                  type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  autocomplete: "on",
                                                  label: "Confirm New Password",
                                                  placeholder: "············",
                                                  "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                                                modelValue: unref(currentPassword),
                                                "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                                type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                autocomplete: "on",
                                                label: "Current Password",
                                                placeholder: "············",
                                                "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(newPassword),
                                                "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                                type: unref(isNewPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                label: "New Password",
                                                autocomplete: "on",
                                                placeholder: "············",
                                                "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(confirmPassword),
                                                "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                                type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                autocomplete: "on",
                                                label: "Confirm New Password",
                                                placeholder: "············",
                                                "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
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
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h6 class="text-h6 text-medium-emphasis mt-1"${_scopeId5}> Password Requirements: </h6>`);
                                    _push6(ssrRenderComponent(VList, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(passwordRequirements, (item, index) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: index,
                                              class: "px-0"
                                            }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    size: "8",
                                                    icon: "ri-circle-fill",
                                                    color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, {
                                                      size: "8",
                                                      icon: "ri-circle-fill",
                                                      color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                                    })
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                              return createVNode(VListItem, {
                                                key: index,
                                                class: "px-0"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    size: "8",
                                                    icon: "ri-circle-fill",
                                                    color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
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
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex flex-wrap gap-4 mt-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Save changes`);
                                        } else {
                                          return [
                                            createTextVNode("Save changes")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Reset `);
                                        } else {
                                          return [
                                            createTextVNode(" Reset ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                            return createVNode(VListItem, {
                                              key: index,
                                              class: "px-0"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  size: "8",
                                                  icon: "ri-circle-fill",
                                                  color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
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
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 mt-2" }, [
                                        createVNode(VBtn, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Save changes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          type: "reset",
                                          color: "secondary",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Reset ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, { class: "pt-0" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(currentPassword),
                                              "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                              type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              autocomplete: "on",
                                              label: "Current Password",
                                              placeholder: "············",
                                              "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(newPassword),
                                              "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                              type: unref(isNewPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              label: "New Password",
                                              autocomplete: "on",
                                              placeholder: "············",
                                              "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(confirmPassword),
                                              "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                              type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              autocomplete: "on",
                                              label: "Confirm New Password",
                                              placeholder: "············",
                                              "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                          return createVNode(VListItem, {
                                            key: index,
                                            class: "px-0"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                size: "8",
                                                icon: "ri-circle-fill",
                                                color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item), 1)
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
                                    createVNode("div", { class: "d-flex flex-wrap gap-4 mt-2" }, [
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Save changes")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        type: "reset",
                                        color: "secondary",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Reset ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Change Password")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pt-0" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(currentPassword),
                                            "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                            type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            autocomplete: "on",
                                            label: "Current Password",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(newPassword),
                                            "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                            type: unref(isNewPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            label: "New Password",
                                            autocomplete: "on",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(confirmPassword),
                                            "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            autocomplete: "on",
                                            label: "Confirm New Password",
                                            placeholder: "············",
                                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                        return createVNode(VListItem, {
                                          key: index,
                                          class: "px-0"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "8",
                                              icon: "ri-circle-fill",
                                              color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
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
                                  createVNode("div", { class: "d-flex flex-wrap gap-4 mt-2" }, [
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Save changes")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      type: "reset",
                                      color: "secondary",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Reset ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Change Password")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "pt-0" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(currentPassword),
                                          "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                          type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          autocomplete: "on",
                                          label: "Current Password",
                                          placeholder: "············",
                                          "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(newPassword),
                                          "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                          type: unref(isNewPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          label: "New Password",
                                          autocomplete: "on",
                                          placeholder: "············",
                                          "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(confirmPassword),
                                          "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          autocomplete: "on",
                                          label: "Confirm New Password",
                                          placeholder: "············",
                                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                      return createVNode(VListItem, {
                                        key: index,
                                        class: "px-0"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "8",
                                            icon: "ri-circle-fill",
                                            color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
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
                                createVNode("div", { class: "d-flex flex-wrap gap-4 mt-2" }, [
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Save changes")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    type: "reset",
                                    color: "secondary",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Reset ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Two-steps verification`);
                                  } else {
                                    return [
                                      createTextVNode("Two-steps verification")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Two-steps verification")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> Two factor authentication is not enabled yet. </p><p class="mb-6"${_scopeId4}> Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a href="javascript:void(0)" class="text-decoration-none"${_scopeId4}>Learn more.</a></p>`);
                              _push5(ssrRenderComponent(VBtn, {
                                onClick: ($event) => isOneTimePasswordDialogVisible.value = true
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Enable two-factor authentication `);
                                  } else {
                                    return [
                                      createTextVNode(" Enable two-factor authentication ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", null, " Two factor authentication is not enabled yet. "),
                                createVNode("p", { class: "mb-6" }, [
                                  createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                  createVNode("a", {
                                    href: "javascript:void(0)",
                                    class: "text-decoration-none"
                                  }, "Learn more.")
                                ]),
                                createVNode(VBtn, {
                                  onClick: ($event) => isOneTimePasswordDialogVisible.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enable two-factor authentication ")
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
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Two-steps verification")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", null, " Two factor authentication is not enabled yet. "),
                              createVNode("p", { class: "mb-6" }, [
                                createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "text-decoration-none"
                                }, "Learn more.")
                              ]),
                              createVNode(VBtn, {
                                onClick: ($event) => isOneTimePasswordDialogVisible.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Enable two-factor authentication ")
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Two-steps verification")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", null, " Two factor authentication is not enabled yet. "),
                            createVNode("p", { class: "mb-6" }, [
                              createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "text-decoration-none"
                              }, "Learn more.")
                            ]),
                            createVNode(VBtn, {
                              onClick: ($event) => isOneTimePasswordDialogVisible.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Enable two-factor authentication ")
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
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Create an API key`);
                                  } else {
                                    return [
                                      createTextVNode("Create an API key")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Create an API key")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "5",
                                "order-md": "0",
                                order: "0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardText, { class: "pt-10" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VForm, { onSubmit: () => {
                                          } }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  label: "Choose the API key type you want to create",
                                                  placeholder: "Select API key type",
                                                  items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Name the API key",
                                                  placeholder: "Name the API key",
                                                  class: "my-5"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  type: "submit",
                                                  block: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Create Key `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Create Key ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    label: "Choose the API key type you want to create",
                                                    placeholder: "Select API key type",
                                                    items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                  }),
                                                  createVNode(VTextField, {
                                                    label: "Name the API key",
                                                    placeholder: "Name the API key",
                                                    class: "my-5"
                                                  }),
                                                  createVNode(VBtn, {
                                                    type: "submit",
                                                    block: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Create Key ")
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
                                            createVNode(VForm, {
                                              onSubmit: withModifiers(() => {
                                              }, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  label: "Choose the API key type you want to create",
                                                  placeholder: "Select API key type",
                                                  items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                                }),
                                                createVNode(VTextField, {
                                                  label: "Name the API key",
                                                  placeholder: "Name the API key",
                                                  class: "my-5"
                                                }),
                                                createVNode(VBtn, {
                                                  type: "submit",
                                                  block: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Create Key ")
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
                                      createVNode(VCardText, { class: "pt-10" }, {
                                        default: withCtx(() => [
                                          createVNode(VForm, {
                                            onSubmit: withModifiers(() => {
                                            }, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                label: "Choose the API key type you want to create",
                                                placeholder: "Select API key type",
                                                items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                              }),
                                              createVNode(VTextField, {
                                                label: "Name the API key",
                                                placeholder: "Name the API key",
                                                class: "my-5"
                                              }),
                                              createVNode(VBtn, {
                                                type: "submit",
                                                block: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Create Key ")
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
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "7",
                                order: "1",
                                "order-md": "1",
                                class: "d-flex flex-column justify-center align-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: unref(boyWithTab),
                                      width: 143,
                                      style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: unref(boyWithTab),
                                        width: 143,
                                        style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                                      }, null, 8, ["src", "style"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5",
                                  "order-md": "0",
                                  order: "0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "pt-10" }, {
                                      default: withCtx(() => [
                                        createVNode(VForm, {
                                          onSubmit: withModifiers(() => {
                                          }, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              label: "Choose the API key type you want to create",
                                              placeholder: "Select API key type",
                                              items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                            }),
                                            createVNode(VTextField, {
                                              label: "Name the API key",
                                              placeholder: "Name the API key",
                                              class: "my-5"
                                            }),
                                            createVNode(VBtn, {
                                              type: "submit",
                                              block: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Create Key ")
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
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "7",
                                  order: "1",
                                  "order-md": "1",
                                  class: "d-flex flex-column justify-center align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: unref(boyWithTab),
                                      width: 143,
                                      style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                                    }, null, 8, ["src", "style"])
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
                          createVNode(VCardItem, { class: "pb-6" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Create an API key")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5",
                                "order-md": "0",
                                order: "0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "pt-10" }, {
                                    default: withCtx(() => [
                                      createVNode(VForm, {
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            label: "Choose the API key type you want to create",
                                            placeholder: "Select API key type",
                                            items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                          }),
                                          createVNode(VTextField, {
                                            label: "Name the API key",
                                            placeholder: "Name the API key",
                                            class: "my-5"
                                          }),
                                          createVNode(VBtn, {
                                            type: "submit",
                                            block: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Create Key ")
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
                              createVNode(VCol, {
                                cols: "12",
                                md: "7",
                                order: "1",
                                "order-md": "1",
                                class: "d-flex flex-column justify-center align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: unref(boyWithTab),
                                    width: 143,
                                    style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                                  }, null, 8, ["src", "style"])
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
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardItem, { class: "pb-6" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Create an API key")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "5",
                              "order-md": "0",
                              order: "0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "pt-10" }, {
                                  default: withCtx(() => [
                                    createVNode(VForm, {
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          label: "Choose the API key type you want to create",
                                          placeholder: "Select API key type",
                                          items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                        }),
                                        createVNode(VTextField, {
                                          label: "Name the API key",
                                          placeholder: "Name the API key",
                                          class: "my-5"
                                        }),
                                        createVNode(VBtn, {
                                          type: "submit",
                                          block: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Create Key ")
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
                            createVNode(VCol, {
                              cols: "12",
                              md: "7",
                              order: "1",
                              "order-md": "1",
                              class: "d-flex flex-column justify-center align-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: unref(boyWithTab),
                                  width: 143,
                                  style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                                }, null, 8, ["src", "style"])
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
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "pb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`API Key List &amp; Access`);
                                  } else {
                                    return [
                                      createTextVNode("API Key List & Access")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("API Key List & Access")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="mb-6"${_scopeId4}> An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. </p><div class="d-flex flex-column gap-y-6"${_scopeId4}><!--[-->`);
                              ssrRenderList(serverKeys, (serverKey) => {
                                _push5(`<div class="bg-var-theme-background pa-4 rounded-lg"${_scopeId4}><div class="d-flex align-center flex-wrap mb-2 gap-x-3"${_scopeId4}><h6 class="text-h6"${_scopeId4}>${ssrInterpolate(serverKey.name)}</h6>`);
                                _push5(ssrRenderComponent(VChip, {
                                  color: "primary",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(serverKey.permission)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(serverKey.permission), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div><h6 class="text-h6 d-flex gap-x-3 text-medium-emphasis align-center mb-2"${_scopeId4}>${ssrInterpolate(serverKey.key)} `);
                                _push5(ssrRenderComponent(VIcon, {
                                  size: 20,
                                  icon: "ri-file-copy-line",
                                  class: "cursor-pointer"
                                }, null, _parent5, _scopeId4));
                                _push5(`</h6><div class="text-disabled"${_scopeId4}> Created on ${ssrInterpolate(serverKey.createdOn)}</div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("p", { class: "mb-6" }, " An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. "),
                                createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                                    return createVNode("div", {
                                      key: serverKey.key,
                                      class: "bg-var-theme-background pa-4 rounded-lg"
                                    }, [
                                      createVNode("div", { class: "d-flex align-center flex-wrap mb-2 gap-x-3" }, [
                                        createVNode("h6", { class: "text-h6" }, toDisplayString(serverKey.name), 1),
                                        createVNode(VChip, {
                                          color: "primary",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(serverKey.permission), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("h6", { class: "text-h6 d-flex gap-x-3 text-medium-emphasis align-center mb-2" }, [
                                        createTextVNode(toDisplayString(serverKey.key) + " ", 1),
                                        createVNode(VIcon, {
                                          size: 20,
                                          icon: "ri-file-copy-line",
                                          class: "cursor-pointer"
                                        })
                                      ]),
                                      createVNode("div", { class: "text-disabled" }, " Created on " + toDisplayString(serverKey.createdOn), 1)
                                    ]);
                                  }), 64))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "pb-4" }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("API Key List & Access")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("p", { class: "mb-6" }, " An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. "),
                              createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                                  return createVNode("div", {
                                    key: serverKey.key,
                                    class: "bg-var-theme-background pa-4 rounded-lg"
                                  }, [
                                    createVNode("div", { class: "d-flex align-center flex-wrap mb-2 gap-x-3" }, [
                                      createVNode("h6", { class: "text-h6" }, toDisplayString(serverKey.name), 1),
                                      createVNode(VChip, {
                                        color: "primary",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(serverKey.permission), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("h6", { class: "text-h6 d-flex gap-x-3 text-medium-emphasis align-center mb-2" }, [
                                      createTextVNode(toDisplayString(serverKey.key) + " ", 1),
                                      createVNode(VIcon, {
                                        size: 20,
                                        icon: "ri-file-copy-line",
                                        class: "cursor-pointer"
                                      })
                                    ]),
                                    createVNode("div", { class: "text-disabled" }, " Created on " + toDisplayString(serverKey.createdOn), 1)
                                  ]);
                                }), 64))
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
                        createVNode(VCardItem, { class: "pb-4" }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("API Key List & Access")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "mb-6" }, " An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. "),
                            createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                                return createVNode("div", {
                                  key: serverKey.key,
                                  class: "bg-var-theme-background pa-4 rounded-lg"
                                }, [
                                  createVNode("div", { class: "d-flex align-center flex-wrap mb-2 gap-x-3" }, [
                                    createVNode("h6", { class: "text-h6" }, toDisplayString(serverKey.name), 1),
                                    createVNode(VChip, {
                                      color: "primary",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(serverKey.permission), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("h6", { class: "text-h6 d-flex gap-x-3 text-medium-emphasis align-center mb-2" }, [
                                    createTextVNode(toDisplayString(serverKey.key) + " ", 1),
                                    createVNode(VIcon, {
                                      size: 20,
                                      icon: "ri-file-copy-line",
                                      class: "cursor-pointer"
                                    })
                                  ]),
                                  createVNode("div", { class: "text-disabled" }, " Created on " + toDisplayString(serverKey.createdOn), 1)
                                ]);
                              }), 64))
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
                  _push3(ssrRenderComponent(VCard, {
                    title: "Recent Devices",
                    class: "recentDeviceCard"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VDataTable, {
                          headers: recentDevicesHeaders,
                          items: recentDevices,
                          "hide-default-footer": "",
                          class: "text-no-wrap"
                        }, {
                          "item.browser": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex gap-x-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                icon: item.deviceIcon.icon,
                                color: item.deviceIcon.color
                              }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-body-1 text-high-emphasis"${_scopeId4}>${ssrInterpolate(item.browser)}</h6></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex gap-x-3" }, [
                                  createVNode(VIcon, {
                                    size: "20",
                                    icon: item.deviceIcon.icon,
                                    color: item.deviceIcon.color
                                  }, null, 8, ["icon", "color"]),
                                  createVNode("h6", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.browser), 1)
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
                            headers: recentDevicesHeaders,
                            items: recentDevices,
                            "hide-default-footer": "",
                            class: "text-no-wrap"
                          }, {
                            "item.browser": withCtx(({ item }) => [
                              createVNode("div", { class: "d-flex gap-x-3" }, [
                                createVNode(VIcon, {
                                  size: "20",
                                  icon: item.deviceIcon.icon,
                                  color: item.deviceIcon.color
                                }, null, 8, ["icon", "color"]),
                                createVNode("h6", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.browser), 1)
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
                    createVNode(VCard, {
                      title: "Recent Devices",
                      class: "recentDeviceCard"
                    }, {
                      default: withCtx(() => [
                        createVNode(VDataTable, {
                          headers: recentDevicesHeaders,
                          items: recentDevices,
                          "hide-default-footer": "",
                          class: "text-no-wrap"
                        }, {
                          "item.browser": withCtx(({ item }) => [
                            createVNode("div", { class: "d-flex gap-x-3" }, [
                              createVNode(VIcon, {
                                size: "20",
                                icon: item.deviceIcon.icon,
                                color: item.deviceIcon.color
                              }, null, 8, ["icon", "color"]),
                              createVNode("h6", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.browser), 1)
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Change Password")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, { class: "pt-0" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(currentPassword),
                                        "onUpdate:modelValue": ($event) => isRef(currentPassword) ? currentPassword.value = $event : null,
                                        type: unref(isCurrentPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isCurrentPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        autocomplete: "on",
                                        label: "Current Password",
                                        placeholder: "············",
                                        "onClick:appendInner": ($event) => isCurrentPasswordVisible.value = !unref(isCurrentPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(newPassword),
                                        "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                                        type: unref(isNewPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isNewPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        label: "New Password",
                                        autocomplete: "on",
                                        placeholder: "············",
                                        "onClick:appendInner": ($event) => isNewPasswordVisible.value = !unref(isNewPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(confirmPassword),
                                        "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isConfirmPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        autocomplete: "on",
                                        label: "Confirm New Password",
                                        placeholder: "············",
                                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h6", { class: "text-h6 text-medium-emphasis mt-1" }, " Password Requirements: "),
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(passwordRequirements, (item, index) => {
                                    return createVNode(VListItem, {
                                      key: index,
                                      class: "px-0"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "8",
                                          icon: "ri-circle-fill",
                                          color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-medium-emphasis text-wrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
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
                              createVNode("div", { class: "d-flex flex-wrap gap-4 mt-2" }, [
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Save changes")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  type: "reset",
                                  color: "secondary",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Reset ")
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
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Two-steps verification")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", null, " Two factor authentication is not enabled yet. "),
                          createVNode("p", { class: "mb-6" }, [
                            createTextVNode(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "text-decoration-none"
                            }, "Learn more.")
                          ]),
                          createVNode(VBtn, {
                            onClick: ($event) => isOneTimePasswordDialogVisible.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Enable two-factor authentication ")
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
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-6" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Create an API key")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "5",
                            "order-md": "0",
                            order: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "pt-10" }, {
                                default: withCtx(() => [
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        label: "Choose the API key type you want to create",
                                        placeholder: "Select API key type",
                                        items: ["Full Control", "Modify", "Read & Execute", "List Folder Contents", "Read Only", "Read & Write"]
                                      }),
                                      createVNode(VTextField, {
                                        label: "Name the API key",
                                        placeholder: "Name the API key",
                                        class: "my-5"
                                      }),
                                      createVNode(VBtn, {
                                        type: "submit",
                                        block: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create Key ")
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
                          createVNode(VCol, {
                            cols: "12",
                            md: "7",
                            order: "1",
                            "order-md": "1",
                            class: "d-flex flex-column justify-center align-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: unref(boyWithTab),
                                width: 143,
                                style: _ctx.$vuetify.display.smAndDown ? "" : "position: absolute; bottom: 0;"
                              }, null, 8, ["src", "style"])
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "pb-4" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("API Key List & Access")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "mb-6" }, " An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. "),
                          createVNode("div", { class: "d-flex flex-column gap-y-6" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(serverKeys, (serverKey) => {
                              return createVNode("div", {
                                key: serverKey.key,
                                class: "bg-var-theme-background pa-4 rounded-lg"
                              }, [
                                createVNode("div", { class: "d-flex align-center flex-wrap mb-2 gap-x-3" }, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(serverKey.name), 1),
                                  createVNode(VChip, {
                                    color: "primary",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(serverKey.permission), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("h6", { class: "text-h6 d-flex gap-x-3 text-medium-emphasis align-center mb-2" }, [
                                  createTextVNode(toDisplayString(serverKey.key) + " ", 1),
                                  createVNode(VIcon, {
                                    size: 20,
                                    icon: "ri-file-copy-line",
                                    class: "cursor-pointer"
                                  })
                                ]),
                                createVNode("div", { class: "text-disabled" }, " Created on " + toDisplayString(serverKey.createdOn), 1)
                              ]);
                            }), 64))
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
                  createVNode(VCard, {
                    title: "Recent Devices",
                    class: "recentDeviceCard"
                  }, {
                    default: withCtx(() => [
                      createVNode(VDataTable, {
                        headers: recentDevicesHeaders,
                        items: recentDevices,
                        "hide-default-footer": "",
                        class: "text-no-wrap"
                      }, {
                        "item.browser": withCtx(({ item }) => [
                          createVNode("div", { class: "d-flex gap-x-3" }, [
                            createVNode(VIcon, {
                              size: "20",
                              icon: item.deviceIcon.icon,
                              color: item.deviceIcon.color
                            }, null, 8, ["icon", "color"]),
                            createVNode("h6", { class: "text-body-1 text-high-emphasis" }, toDisplayString(item.browser), 1)
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
        isDialogVisible: unref(isOneTimePasswordDialogVisible),
        "onUpdate:isDialogVisible": ($event) => isRef(isOneTimePasswordDialogVisible) ? isOneTimePasswordDialogVisible.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/pages/account-settings/AccountSettingsSecurity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[tab]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute("pages-account-settings-tab");
    const activeTab = computed({
      get: () => route.params.tab,
      set: () => route.params.tab
    });
    const tabs = [
      {
        title: "Account",
        icon: "ri-group-line",
        tab: "account"
      },
      {
        title: "Security",
        icon: "ri-lock-line",
        tab: "security"
      },
      {
        title: "Billing & Plans",
        icon: "ri-bookmark-line",
        tab: "billing-plans"
      },
      {
        title: "Notifications",
        icon: "ri-notification-3-line",
        tab: "notification"
      },
      {
        title: "Connections",
        icon: "ri-link",
        tab: "connection"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VTabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "v-tabs-pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabs, (item) => {
              _push2(ssrRenderComponent(VTab, {
                key: item.icon,
                value: item.tab,
                to: { name: "pages-account-settings-tab", params: { tab: item.tab } }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      start: "",
                      icon: item.icon
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        start: "",
                        icon: item.icon
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabs, (item) => {
                return createVNode(VTab, {
                  key: item.icon,
                  value: item.tab,
                  to: { name: "pages-account-settings-tab", params: { tab: item.tab } }
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      start: "",
                      icon: item.icon
                    }, null, 8, ["icon"]),
                    createTextVNode(" " + toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value", "to"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
        class: "mt-6 disable-tab-transition",
        touch: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: "account" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "security" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "billing-plans" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "notification" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: "connection" }, {
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
              createVNode(VWindowItem, { value: "account" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "security" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "billing-plans" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "notification" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: "connection" }, {
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/pages/account-settings/[tab].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
