import { r as requiredValidator, b as betweenValidator, i as integerValidator, a as regexValidator, c as alphaValidator, l as lengthValidator, p as passwordValidator, d as confirmedValidator, f as alphaDashValidator, e as emailValidator, u as urlValidator } from "./validators-CW3JK3pA.js";
import { useSSRContext, ref, unref, mergeProps, withCtx, isRef, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VBtn } from "../ssr.js";
import { _ as _sfc_main$4 } from "./AppCardCode-DkpMhnYF.js";
import "./helpers-DX2i3Kdq.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./index-D5WAZiYx.js";
import "./VImg-D-rbsD1g.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
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
import "prismjs";
import "vue-prism-component";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VCardText-C84ViOu1.js";
import "./VDivider-o5iRKh3w.js";
const _sfc_main$3 = {
  __name: "DemoFormValidationValidationTypes",
  __ssrInlineRender: true,
  setup(__props) {
    const requiredField = ref("");
    const numberBetween10to20 = ref("");
    const onlyConsistNumber = ref("");
    const matchRegularEx = ref("");
    const onlyAlphabeticCharacters = ref("");
    const specifiedLength = ref("");
    const password = ref("");
    const digits = ref("");
    const repeatPassword = ref("");
    const onlyAlphabeticNumbersDashesUnderscores = ref("");
    const email = ref("");
    const validURL = ref("");
    const refForm = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VForm), mergeProps({
        ref_key: "refForm",
        ref: refForm,
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(requiredField),
                          "onUpdate:modelValue": ($event) => isRef(requiredField) ? requiredField.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "This field is required",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(requiredField),
                            "onUpdate:modelValue": ($event) => isRef(requiredField) ? requiredField.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "This field is required",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(numberBetween10to20),
                          "onUpdate:modelValue": ($event) => isRef(numberBetween10to20) ? numberBetween10to20.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Enter Number between 10 & 20",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("betweenValidator" in _ctx ? _ctx.betweenValidator : unref(betweenValidator))(unref(numberBetween10to20), 10, 20)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(numberBetween10to20),
                            "onUpdate:modelValue": ($event) => isRef(numberBetween10to20) ? numberBetween10to20.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Enter Number between 10 & 20",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("betweenValidator" in _ctx ? _ctx.betweenValidator : unref(betweenValidator))(unref(numberBetween10to20), 10, 20)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(onlyConsistNumber),
                          "onUpdate:modelValue": ($event) => isRef(onlyConsistNumber) ? onlyConsistNumber.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must only consist of numbers",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(onlyConsistNumber),
                            "onUpdate:modelValue": ($event) => isRef(onlyConsistNumber) ? onlyConsistNumber.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Must only consist of numbers",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(matchRegularEx),
                          "onUpdate:modelValue": ($event) => isRef(matchRegularEx) ? matchRegularEx.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must match the specified regular expression : ^([0-9]+)$ - numbers only",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("regexValidator" in _ctx ? _ctx.regexValidator : unref(regexValidator))(unref(matchRegularEx), "^([0-9]+)$")]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(matchRegularEx),
                            "onUpdate:modelValue": ($event) => isRef(matchRegularEx) ? matchRegularEx.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Must match the specified regular expression : ^([0-9]+)$ - numbers only",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("regexValidator" in _ctx ? _ctx.regexValidator : unref(regexValidator))(unref(matchRegularEx), "^([0-9]+)$")]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(onlyAlphabeticCharacters),
                          "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticCharacters) ? onlyAlphabeticCharacters.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Only alphabetic characters",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaValidator" in _ctx ? _ctx.alphaValidator : unref(alphaValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(onlyAlphabeticCharacters),
                            "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticCharacters) ? onlyAlphabeticCharacters.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Only alphabetic characters",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaValidator" in _ctx ? _ctx.alphaValidator : unref(alphaValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(specifiedLength),
                          "onUpdate:modelValue": ($event) => isRef(specifiedLength) ? specifiedLength.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Length must be exactly 3 characters",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(specifiedLength), 3)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(specifiedLength),
                            "onUpdate:modelValue": ($event) => isRef(specifiedLength) ? specifiedLength.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Length must be exactly 3 characters",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(specifiedLength), 3)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Password Input Field",
                          type: "password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                          autocomplete: "on"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Password Input Field",
                            type: "password",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                            autocomplete: "on"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(digits),
                          "onUpdate:modelValue": ($event) => isRef(digits) ? digits.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "The digits field must be numeric and exactly contain 3 digits",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(digits), 3), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(digits),
                            "onUpdate:modelValue": ($event) => isRef(digits) ? digits.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "The digits field must be numeric and exactly contain 3 digits",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(digits), 3), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(repeatPassword),
                          "onUpdate:modelValue": ($event) => isRef(repeatPassword) ? repeatPassword.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Repeat password must match",
                          type: "password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(repeatPassword), unref(password))],
                          autocomplete: "on"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(repeatPassword),
                            "onUpdate:modelValue": ($event) => isRef(repeatPassword) ? repeatPassword.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Repeat password must match",
                            type: "password",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(repeatPassword), unref(password))],
                            autocomplete: "on"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(onlyAlphabeticNumbersDashesUnderscores),
                          "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticNumbersDashesUnderscores) ? onlyAlphabeticNumbersDashesUnderscores.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Only alphabetic characters, numbers, dashes or underscores",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaDashValidator" in _ctx ? _ctx.alphaDashValidator : unref(alphaDashValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(onlyAlphabeticNumbersDashesUnderscores),
                            "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticNumbersDashesUnderscores) ? onlyAlphabeticNumbersDashesUnderscores.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Only alphabetic characters, numbers, dashes or underscores",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaDashValidator" in _ctx ? _ctx.alphaDashValidator : unref(alphaDashValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must be a valid email",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Must be a valid email",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(validURL),
                          "onUpdate:modelValue": ($event) => isRef(validURL) ? validURL.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must be a valid url",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(validURL),
                            "onUpdate:modelValue": ($event) => isRef(validURL) ? validURL.value = $event : null,
                            "persistent-placeholder": "",
                            placeholder: "Must be a valid url",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            type: "submit",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(requiredField),
                          "onUpdate:modelValue": ($event) => isRef(requiredField) ? requiredField.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "This field is required",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(numberBetween10to20),
                          "onUpdate:modelValue": ($event) => isRef(numberBetween10to20) ? numberBetween10to20.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Enter Number between 10 & 20",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("betweenValidator" in _ctx ? _ctx.betweenValidator : unref(betweenValidator))(unref(numberBetween10to20), 10, 20)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(onlyConsistNumber),
                          "onUpdate:modelValue": ($event) => isRef(onlyConsistNumber) ? onlyConsistNumber.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must only consist of numbers",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(matchRegularEx),
                          "onUpdate:modelValue": ($event) => isRef(matchRegularEx) ? matchRegularEx.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must match the specified regular expression : ^([0-9]+)$ - numbers only",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("regexValidator" in _ctx ? _ctx.regexValidator : unref(regexValidator))(unref(matchRegularEx), "^([0-9]+)$")]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(onlyAlphabeticCharacters),
                          "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticCharacters) ? onlyAlphabeticCharacters.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Only alphabetic characters",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaValidator" in _ctx ? _ctx.alphaValidator : unref(alphaValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(specifiedLength),
                          "onUpdate:modelValue": ($event) => isRef(specifiedLength) ? specifiedLength.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Length must be exactly 3 characters",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(specifiedLength), 3)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Password Input Field",
                          type: "password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                          autocomplete: "on"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(digits),
                          "onUpdate:modelValue": ($event) => isRef(digits) ? digits.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "The digits field must be numeric and exactly contain 3 digits",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(digits), 3), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(repeatPassword),
                          "onUpdate:modelValue": ($event) => isRef(repeatPassword) ? repeatPassword.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Repeat password must match",
                          type: "password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(repeatPassword), unref(password))],
                          autocomplete: "on"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(onlyAlphabeticNumbersDashesUnderscores),
                          "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticNumbersDashesUnderscores) ? onlyAlphabeticNumbersDashesUnderscores.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Only alphabetic characters, numbers, dashes or underscores",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaDashValidator" in _ctx ? _ctx.alphaDashValidator : unref(alphaDashValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must be a valid email",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(validURL),
                          "onUpdate:modelValue": ($event) => isRef(validURL) ? validURL.value = $event : null,
                          "persistent-placeholder": "",
                          placeholder: "Must be a valid url",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
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
            }, _parent2, _scopeId));
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
                        modelValue: unref(requiredField),
                        "onUpdate:modelValue": ($event) => isRef(requiredField) ? requiredField.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "This field is required",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(numberBetween10to20),
                        "onUpdate:modelValue": ($event) => isRef(numberBetween10to20) ? numberBetween10to20.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Enter Number between 10 & 20",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("betweenValidator" in _ctx ? _ctx.betweenValidator : unref(betweenValidator))(unref(numberBetween10to20), 10, 20)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(onlyConsistNumber),
                        "onUpdate:modelValue": ($event) => isRef(onlyConsistNumber) ? onlyConsistNumber.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Must only consist of numbers",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(matchRegularEx),
                        "onUpdate:modelValue": ($event) => isRef(matchRegularEx) ? matchRegularEx.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Must match the specified regular expression : ^([0-9]+)$ - numbers only",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("regexValidator" in _ctx ? _ctx.regexValidator : unref(regexValidator))(unref(matchRegularEx), "^([0-9]+)$")]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(onlyAlphabeticCharacters),
                        "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticCharacters) ? onlyAlphabeticCharacters.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Only alphabetic characters",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaValidator" in _ctx ? _ctx.alphaValidator : unref(alphaValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(specifiedLength),
                        "onUpdate:modelValue": ($event) => isRef(specifiedLength) ? specifiedLength.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Length must be exactly 3 characters",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(specifiedLength), 3)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Password Input Field",
                        type: "password",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                        autocomplete: "on"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(digits),
                        "onUpdate:modelValue": ($event) => isRef(digits) ? digits.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "The digits field must be numeric and exactly contain 3 digits",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("lengthValidator" in _ctx ? _ctx.lengthValidator : unref(lengthValidator))(unref(digits), 3), "integerValidator" in _ctx ? _ctx.integerValidator : unref(integerValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(repeatPassword),
                        "onUpdate:modelValue": ($event) => isRef(repeatPassword) ? repeatPassword.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Repeat password must match",
                        type: "password",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(repeatPassword), unref(password))],
                        autocomplete: "on"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(onlyAlphabeticNumbersDashesUnderscores),
                        "onUpdate:modelValue": ($event) => isRef(onlyAlphabeticNumbersDashesUnderscores) ? onlyAlphabeticNumbersDashesUnderscores.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Only alphabetic characters, numbers, dashes or underscores",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "alphaDashValidator" in _ctx ? _ctx.alphaDashValidator : unref(alphaDashValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Must be a valid email",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(validURL),
                        "onUpdate:modelValue": ($event) => isRef(validURL) ? validURL.value = $event : null,
                        "persistent-placeholder": "",
                        placeholder: "Must be a valid url",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        type: "submit",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-validation/DemoFormValidationValidationTypes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoFormValidationValidatingMultipleRules",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const refForm = ref();
    const password = ref("");
    const confirmPassword = ref("");
    const isPasswordVisible = ref(false);
    const isConfirmPasswordVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VForm), mergeProps({
        ref_key: "refForm",
        ref: refForm,
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(name),
                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                          label: "Name",
                          placeholder: "Your Name",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(name),
                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                            label: "Name",
                            placeholder: "Your Name",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "Your Email",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            placeholder: "Your Email",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          type: unref(isPasswordVisible) ? "text" : "password",
                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                          placeholder: "Enter Password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                          autocomplete: "on",
                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(password),
                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                            label: "Password",
                            type: unref(isPasswordVisible) ? "text" : "password",
                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                            placeholder: "Enter Password",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                            autocomplete: "on",
                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(confirmPassword),
                          "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                          label: "Confirm Password",
                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                          placeholder: "Confirm Password",
                          "append-inner-icon": unref(confirmPassword) ? "ri-eye-off-line" : "ri-eye-line",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(confirmPassword), unref(password))],
                          autocomplete: "on",
                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(confirmPassword),
                            "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                            label: "Confirm Password",
                            type: unref(isConfirmPasswordVisible) ? "text" : "password",
                            placeholder: "Confirm Password",
                            "append-inner-icon": unref(confirmPassword) ? "ri-eye-off-line" : "ri-eye-line",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(confirmPassword), unref(password))],
                            autocomplete: "on",
                            "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            type: "submit",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(name),
                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                          label: "Name",
                          placeholder: "Your Name",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "Your Email",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(password),
                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                          label: "Password",
                          type: unref(isPasswordVisible) ? "text" : "password",
                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                          placeholder: "Enter Password",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                          autocomplete: "on",
                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
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
                          label: "Confirm Password",
                          type: unref(isConfirmPasswordVisible) ? "text" : "password",
                          placeholder: "Confirm Password",
                          "append-inner-icon": unref(confirmPassword) ? "ri-eye-off-line" : "ri-eye-line",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(confirmPassword), unref(password))],
                          autocomplete: "on",
                          "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
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
            }, _parent2, _scopeId));
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
                        modelValue: unref(name),
                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                        label: "Name",
                        placeholder: "Your Name",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        label: "Email",
                        placeholder: "Your Email",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(password),
                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                        label: "Password",
                        type: unref(isPasswordVisible) ? "text" : "password",
                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                        placeholder: "Enter Password",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                        autocomplete: "on",
                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
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
                        label: "Confirm Password",
                        type: unref(isConfirmPasswordVisible) ? "text" : "password",
                        placeholder: "Confirm Password",
                        "append-inner-icon": unref(confirmPassword) ? "ri-eye-off-line" : "ri-eye-line",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(confirmPassword), unref(password))],
                        autocomplete: "on",
                        "onClick:appendInner": ($event) => isConfirmPasswordVisible.value = !unref(isConfirmPasswordVisible)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "rules", "onClick:appendInner"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        type: "submit",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-validation/DemoFormValidationValidatingMultipleRules.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoFormValidationSimpleFormValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const email = ref("");
    const refForm = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VForm), mergeProps({
        ref_key: "refForm",
        ref: refForm,
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(firstName),
                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                            label: "First Name",
                            placeholder: "John",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "john@email.com",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email",
                            placeholder: "john@email.com",
                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Submit `);
                            } else {
                              return [
                                createTextVNode(" Submit ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            type: "submit",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(firstName),
                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                          label: "First Name",
                          placeholder: "John",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(email),
                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                          label: "Email",
                          placeholder: "john@email.com",
                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          type: "submit",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
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
            }, _parent2, _scopeId));
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
                        modelValue: unref(firstName),
                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                        label: "First Name",
                        placeholder: "John",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(email),
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        label: "Email",
                        placeholder: "john@email.com",
                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        type: "submit",
                        onClick: ($event) => {
                          var _a;
                          return (_a = unref(refForm)) == null ? void 0 : _a.validate();
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit ")
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-validation/DemoFormValidationSimpleFormValidation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const simpleFormValidation = { ts: `<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const validatingMultipleRules = { ts: `<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const validationTypes = { ts: `<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`, js: `<script setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
` };
const _sfc_main = {
  __name: "form-validation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$4;
      const _component_DemoFormValidationSimpleFormValidation = _sfc_main$1;
      const _component_DemoFormValidationValidatingMultipleRules = _sfc_main$2;
      const _component_DemoFormValidationValidationTypes = _sfc_main$3;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Simple Form Validation",
                    code: simpleFormValidation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>Use <code${_scopeId3}>Rules</code> prop to validate the input.</p>`);
                        _push4(ssrRenderComponent(_component_DemoFormValidationSimpleFormValidation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", null, [
                            createTextVNode("Use "),
                            createVNode("code", null, "Rules"),
                            createTextVNode(" prop to validate the input.")
                          ]),
                          createVNode(_component_DemoFormValidationSimpleFormValidation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Simple Form Validation",
                      code: simpleFormValidation
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("Use "),
                          createVNode("code", null, "Rules"),
                          createTextVNode(" prop to validate the input.")
                        ]),
                        createVNode(_component_DemoFormValidationSimpleFormValidation)
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
                    title: "Validating Multiple Rules",
                    code: validatingMultipleRules
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormValidationValidatingMultipleRules, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormValidationValidatingMultipleRules)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Validating Multiple Rules",
                      code: validatingMultipleRules
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormValidationValidatingMultipleRules)
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
                    title: "Validation Types",
                    code: validationTypes
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoFormValidationValidationTypes, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoFormValidationValidationTypes)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Validation Types",
                      code: validationTypes
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoFormValidationValidationTypes)
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
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Simple Form Validation",
                    code: simpleFormValidation
                  }, {
                    default: withCtx(() => [
                      createVNode("p", null, [
                        createTextVNode("Use "),
                        createVNode("code", null, "Rules"),
                        createTextVNode(" prop to validate the input.")
                      ]),
                      createVNode(_component_DemoFormValidationSimpleFormValidation)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Validating Multiple Rules",
                    code: validatingMultipleRules
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormValidationValidatingMultipleRules)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Validation Types",
                    code: validationTypes
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoFormValidationValidationTypes)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/form-validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
