import { ref, watch, onMounted, createVNode, mergeProps, Fragment } from "vue";
import { m as makeVWindowProps, V as VWindow, b as makeVWindowItemProps, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { C as propsFactory, $ as IconValue, E as genericComponent, av as useProxiedModel, au as useLocale, F as useRender, X as convertToUnit, a1 as VDefaultsProvider, V as VBtn, g as VProgressLinear } from "../ssr.js";
import { a as makeVImgProps, V as VImg } from "./VImg-D-rbsD1g.js";
const accountLogo = "/build/assets/accounting-logo-BDUk4cEk.png";
const marketingExpense = "/build/assets/marketing-expense-logo-DO7lJ6_H.png";
const salesOverview = "/build/assets/sales-overview-logo-C49C0wHv.png";
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        window.clearTimeout(slideTimeout);
    });
    onMounted(startTimeout);
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = window.setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      window.clearTimeout(slideTimeout);
      window.requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": "v-carousel-item"
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
const mobile2 = "/build/assets/apple-iPhone-13-pro-D0YZ5lep.png";
const desktop1 = "/build/assets/apple-mac-mini-K43EWzYR.png";
const desktop3 = "/build/assets/dell-inspiron-3000-Cf5YfMAM.png";
const mobile4 = "/build/assets/google-pixel-6-BlOEfo80.png";
const desktop2 = "/build/assets/hp-envy-x360-CdA5Wuqz.png";
const console3 = "/build/assets/nintendo-switch-CxUoRjXK.png";
const mobile3 = "/build/assets/oneplus-9-pro-qr1kjpVP.png";
const mobile1 = "/build/assets/samsung-s22-BNye9W7w.png";
const console1 = "/build/assets/sony-play-station-5-CLbZxicW.png";
const catImg3 = "/build/assets/tabs-console-98r34LBJ.png";
const catImg2 = "/build/assets/tabs-desktop-DzAOJHbH.png";
const catImg1 = "/build/assets/tabs-mobile-BNthY4qh.png";
const console2 = "/build/assets/xbox-series-x-DkmFcai6.png";
const appleIphone = "/build/assets/apple-iphone-x-lg-Tt64BXVA.png";
const appleWatch = "/build/assets/apple-watch-green-lg-DfsIUJ56.png";
const ps4Joystick = "/build/assets/ps4-joystick-lg-CxlB6Ak7.png";
export {
  VCarousel as V,
  VCarouselItem as a,
  accountLogo as b,
  catImg1 as c,
  catImg2 as d,
  catImg3 as e,
  mobile1 as f,
  mobile2 as g,
  mobile3 as h,
  mobile4 as i,
  desktop1 as j,
  desktop2 as k,
  desktop3 as l,
  marketingExpense as m,
  console1 as n,
  console2 as o,
  console3 as p,
  appleIphone as q,
  ps4Joystick as r,
  salesOverview as s,
  appleWatch as t
};
