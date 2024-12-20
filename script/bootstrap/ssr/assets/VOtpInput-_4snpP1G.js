import { computed, ref, watch, nextTick, createVNode, mergeProps, Fragment } from "vue";
import { m as makeVFieldProps, V as VField } from "./VField-DXNiYeaA.js";
import { a as VOverlay } from "./VOverlay-BlPDiq4k.js";
import { C as propsFactory, P as makeDimensionProps, bp as only, E as genericComponent, Q as useDimension, av as useProxiedModel, au as useLocale, Z as provideDefaults, F as useRender, aE as filterInputAttrs, b as VProgressCircular, aD as focusChild } from "../ssr.js";
import { m as makeFocusProps, u as useFocus } from "./form-DJQTvsmB.js";
const makeVOtpInputProps = propsFactory({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...makeDimensionProps(),
  ...makeFocusProps(),
  ...only(makeVFieldProps({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput");
const VOtpInput = genericComponent()({
  name: "VOtpInput",
  props: makeVOtpInputProps(),
  emits: {
    finish: (val) => true,
    "update:focused": (val) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, "modelValue", "", (val) => val == null ? [] : String(val).split(""), (val) => val.join(""));
    const {
      t
    } = useLocale();
    const length = computed(() => Number(props.length));
    const fields = computed(() => Array(length.value).fill(0));
    const focusIndex = ref(-1);
    const contentRef = ref();
    const inputRef = ref([]);
    const current = computed(() => inputRef.value[focusIndex.value]);
    function onInput() {
      if (isValidNumber(current.value.value)) {
        current.value.value = "";
        return;
      }
      const array = model.value.slice();
      const value = current.value.value;
      array[focusIndex.value] = value;
      let target = null;
      if (focusIndex.value > model.value.length) {
        target = model.value.length + 1;
      } else if (focusIndex.value + 1 !== length.value) {
        target = "next";
      }
      model.value = array;
      if (target)
        focusChild(contentRef.value, target);
    }
    function onKeydown(e) {
      const array = model.value.slice();
      const index = focusIndex.value;
      let target = null;
      if (!["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(e.key))
        return;
      e.preventDefault();
      if (e.key === "ArrowLeft") {
        target = "prev";
      } else if (e.key === "ArrowRight") {
        target = "next";
      } else if (["Backspace", "Delete"].includes(e.key)) {
        array[focusIndex.value] = "";
        model.value = array;
        if (focusIndex.value > 0 && e.key === "Backspace") {
          target = "prev";
        } else {
          requestAnimationFrame(() => {
            var _a;
            (_a = inputRef.value[index]) == null ? void 0 : _a.select();
          });
        }
      }
      requestAnimationFrame(() => {
        if (target != null) {
          focusChild(contentRef.value, target);
        }
      });
    }
    function onPaste(index, e) {
      var _a, _b;
      e.preventDefault();
      e.stopPropagation();
      const clipboardText = ((_a = e == null ? void 0 : e.clipboardData) == null ? void 0 : _a.getData("Text")) ?? "";
      if (isValidNumber(clipboardText))
        return;
      model.value = clipboardText.split("");
      (_b = inputRef.value) == null ? void 0 : _b[index].blur();
    }
    function reset() {
      model.value = [];
    }
    function onFocus(e, index) {
      focus();
      focusIndex.value = index;
    }
    function onBlur() {
      blur();
      focusIndex.value = -1;
    }
    function isValidNumber(value) {
      return props.type === "number" && /[^0-9]/g.test(value);
    }
    provideDefaults({
      VField: {
        color: computed(() => props.color),
        bgColor: computed(() => props.color),
        baseColor: computed(() => props.baseColor),
        disabled: computed(() => props.disabled),
        error: computed(() => props.error),
        variant: computed(() => props.variant)
      }
    }, {
      scoped: true
    });
    watch(model, (val) => {
      if (val.length === length.value)
        emit("finish", val.join(""));
    }, {
      deep: true
    });
    watch(focusIndex, (val) => {
      if (val < 0)
        return;
      nextTick(() => {
        var _a;
        (_a = inputRef.value[val]) == null ? void 0 : _a.select();
      });
    });
    useRender(() => {
      var _a;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      return createVNode("div", mergeProps({
        "class": ["v-otp-input", {
          "v-otp-input--divided": !!props.divider
        }, props.class],
        "style": [props.style]
      }, rootAttrs), [createVNode("div", {
        "ref": contentRef,
        "class": "v-otp-input__content",
        "style": [dimensionStyles.value]
      }, [fields.value.map((_, i) => createVNode(Fragment, null, [props.divider && i !== 0 && createVNode("span", {
        "class": "v-otp-input__divider"
      }, [props.divider]), createVNode(VField, {
        "focused": isFocused.value && props.focusAll || focusIndex.value === i,
        "key": i
      }, {
        ...slots,
        loader: void 0,
        default: () => {
          return createVNode("input", {
            "ref": (val) => inputRef.value[i] = val,
            "aria-label": t(props.label, i + 1),
            "autofocus": i === 0 && props.autofocus,
            "autocomplete": "one-time-code",
            "class": ["v-otp-input__field"],
            "disabled": props.disabled,
            "inputmode": props.type === "number" ? "numeric" : "text",
            "min": props.type === "number" ? 0 : void 0,
            "maxlength": "1",
            "placeholder": props.placeholder,
            "type": props.type === "number" ? "text" : props.type,
            "value": model.value[i],
            "onInput": onInput,
            "onFocus": (e) => onFocus(e, i),
            "onBlur": onBlur,
            "onKeydown": onKeydown,
            "onPaste": (event) => onPaste(i, event)
          }, null);
        }
      })])), createVNode("input", mergeProps({
        "class": "v-otp-input-input",
        "type": "hidden"
      }, inputAttrs, {
        "value": model.value.join("")
      }), null), createVNode(VOverlay, {
        "contained": true,
        "content-class": "v-otp-input__loader",
        "model-value": !!props.loading,
        "persistent": true
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.loader) == null ? void 0 : _a2.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "size": "24",
            "width": "2"
          }, null)];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      blur: () => {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.some((input) => input.blur());
      },
      focus: () => {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a[0].focus();
      },
      reset,
      isFocused
    };
  }
});
export {
  VOtpInput as V
};
