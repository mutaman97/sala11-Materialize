import { ref, computed, createVNode, mergeProps, Fragment } from "vue";
import { d as VScaleTransition } from "./index-D5WAZiYx.js";
import { C as propsFactory, E as genericComponent, av as useProxiedModel, ag as useLoader, ay as getUid, F as useRender, aE as filterInputAttrs, a1 as VDefaultsProvider, a as VIcon, ak as LoaderSlot, b as VProgressCircular } from "../ssr.js";
import { m as makeVInputProps, V as VInput } from "./VInput-Bla8Vlgt.js";
import { m as makeVSelectionControlProps, V as VSelectionControl } from "./VSelectionControl-DW0YMxqK.js";
import { u as useFocus } from "./form-DJQTvsmB.js";
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const loaderColor = computed(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      var _a, _b;
      e.stopPropagation();
      e.preventDefault();
      (_b = (_a = control.value) == null ? void 0 : _a.input) == null ? void 0 : _b.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createVNode("div", {
                "class": ["v-switch__track", ...backgroundColorClasses.value],
                "style": backgroundColorStyles.value,
                "onClick": onTrackClick
              }, [slots["track-true"] && createVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createVNode(Fragment, null, [inputNode, createVNode("div", {
                "class": ["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset ? void 0 : backgroundColorClasses.value],
                "style": props.inset ? void 0 : backgroundColorStyles.value
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return {};
  }
});
export {
  VSwitch as V
};
