import { ref, watch, createVNode } from "vue";
import { k as useDisplay, C as propsFactory, D as makeComponentProps, E as genericComponent, F as useRender, G as makeTagProps } from "../ssr.js";
import { m as makeLayoutProps, c as createLayout, u as useLayout } from "./VNavigationDrawer-CX2Ouxxa.js";
import { u as useSsrBoot } from "./ssrBoot-Co4_dNdy.js";
const useResponsiveLeftSidebar = (mobileBreakpoint = void 0) => {
  const { mdAndDown, name: currentBreakpoint } = useDisplay();
  const _mobileBreakpoint = mobileBreakpoint || mdAndDown;
  const isLeftSidebarOpen = ref(true);
  const setInitialValue = () => {
    isLeftSidebarOpen.value = !_mobileBreakpoint.value;
  };
  setInitialValue();
  watch(currentBreakpoint, () => {
    isLeftSidebarOpen.value = !_mobileBreakpoint.value;
  });
  return {
    isLeftSidebarOpen
  };
};
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": [layoutClasses.value, props.class],
        "style": [layoutStyles.value, props.style]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
export {
  VLayout as V,
  VMain as a,
  useResponsiveLeftSidebar as u
};
