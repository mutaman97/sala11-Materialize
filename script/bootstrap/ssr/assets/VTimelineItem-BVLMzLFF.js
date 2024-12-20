import { toRef, computed, createVNode, shallowRef, ref, watch } from "vue";
import { C as propsFactory, D as makeComponentProps, a0 as makeDensityProps, G as makeTagProps, a8 as makeThemeProps, E as genericComponent, ab as provideTheme, ae as useDensity, aI as useRtl, Z as provideDefaults, F as useRender, X as convertToUnit, $ as IconValue, R as makeRoundedProps, am as makeSizeProps, a3 as makeElevationProps, an as useSize, T as useBackgroundColor, U as useRounded, af as useElevation, a as VIcon, a1 as VDefaultsProvider, P as makeDimensionProps, Q as useDimension } from "../ssr.js";
const makeVTimelineProps = propsFactory({
  align: {
    type: String,
    default: "center",
    validator: (v) => ["center", "start"].includes(v)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (v) => ["vertical", "horizontal"].includes(v)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (v) => ["auto", "center"].includes(v)
  },
  side: {
    type: String,
    validator: (v) => v == null || ["start", "end"].includes(v)
  },
  lineInset: {
    type: [String, Number],
    default: 0
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (v) => ["start", "end", "both"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTimeline");
const VTimeline = genericComponent()({
  name: "VTimeline",
  props: makeVTimelineProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(props, "lineColor")
      },
      VTimelineItem: {
        density: toRef(props, "density"),
        lineInset: toRef(props, "lineInset")
      }
    });
    const sideClasses = computed(() => {
      const side = props.side ? props.side : props.density !== "default" ? "end" : null;
      return side && `v-timeline--side-${side}`;
    });
    const truncateClasses = computed(() => {
      const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (props.truncateLine) {
        case "both":
          return classes;
        case "start":
          return classes[0];
        case "end":
          return classes[1];
        default:
          return null;
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-timeline", `v-timeline--${props.direction}`, `v-timeline--align-${props.align}`, `v-timeline--justify-${props.justify}`, truncateClasses.value, {
        "v-timeline--inset-line": !!props.lineInset
      }, themeClasses.value, densityClasses.value, sideClasses.value, rtlClasses.value, props.class],
      "style": [{
        "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
      }, props.style]
    }, slots));
    return {};
  }
});
const makeVTimelineDividerProps = propsFactory({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: IconValue,
  iconColor: String,
  lineColor: String,
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeElevationProps()
}, "VTimelineDivider");
const VTimelineDivider = genericComponent()({
  name: "VTimelineDivider",
  props: makeVTimelineDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, "v-timeline-divider__dot");
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(toRef(props, "dotColor"));
    const {
      roundedClasses
    } = useRounded(props, "v-timeline-divider__dot");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(toRef(props, "lineColor"));
    useRender(() => createVNode("div", {
      "class": ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": props.fillDot
      }, props.class],
      "style": props.style
    }, [createVNode("div", {
      "class": ["v-timeline-divider__before", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null), !props.hideDot && createVNode("div", {
      "key": "dot",
      "class": ["v-timeline-divider__dot", elevationClasses.value, roundedClasses.value, sizeClasses.value],
      "style": sizeStyles.value
    }, [createVNode("div", {
      "class": ["v-timeline-divider__inner-dot", backgroundColorClasses.value, roundedClasses.value],
      "style": backgroundColorStyles.value
    }, [!slots.default ? createVNode(VIcon, {
      "key": "icon",
      "color": props.iconColor,
      "icon": props.icon,
      "size": props.size
    }, null) : createVNode(VDefaultsProvider, {
      "key": "icon-defaults",
      "disabled": !props.icon,
      "defaults": {
        VIcon: {
          color: props.iconColor,
          icon: props.icon,
          size: props.size
        }
      }
    }, slots.default)])]), createVNode("div", {
      "class": ["v-timeline-divider__after", lineColorClasses.value],
      "style": lineColorStyles.value
    }, null)]));
    return {};
  }
});
const makeVTimelineItemProps = propsFactory({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps()
}, "VTimelineItem");
const VTimelineItem = genericComponent()({
  name: "VTimelineItem",
  props: makeVTimelineItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = shallowRef(0);
    const dotRef = ref();
    watch(dotRef, (newValue) => {
      var _a;
      if (!newValue)
        return;
      dotSize.value = ((_a = newValue.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a.getBoundingClientRect().width) ?? 0;
    }, {
      flush: "post"
    });
    useRender(() => {
      var _a, _b;
      return createVNode("div", {
        "class": ["v-timeline-item", {
          "v-timeline-item--fill-dot": props.fillDot
        }, props.class],
        "style": [{
          "--v-timeline-dot-size": convertToUnit(dotSize.value),
          "--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
        }, props.style]
      }, [createVNode("div", {
        "class": "v-timeline-item__body",
        "style": dimensionStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(VTimelineDivider, {
        "ref": dotRef,
        "hideDot": props.hideDot,
        "icon": props.icon,
        "iconColor": props.iconColor,
        "size": props.size,
        "elevation": props.elevation,
        "dotColor": props.dotColor,
        "fillDot": props.fillDot,
        "rounded": props.rounded
      }, {
        default: slots.icon
      }), props.density !== "compact" && createVNode("div", {
        "class": "v-timeline-item__opposite"
      }, [!props.hideOpposite && ((_b = slots.opposite) == null ? void 0 : _b.call(slots))])]);
    });
    return {};
  }
});
export {
  VTimeline as V,
  VTimelineItem as a
};
