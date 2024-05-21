import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { register } from "swiper/element/bundle";
import { V as VBtn, _ as _export_sfc, a as VIcon } from "../ssr.js";
import { V as VImg } from "./VImg-D-rbsD1g.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { _ as _sfc_main$h } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
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
import "./VAvatar-D2wIwigQ.js";
import "prismjs";
import "vue-prism-component";
import "./index-D5WAZiYx.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$g = {
  __name: "DemoSwiperVirtualSlides",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    const slides = Array.from({ length: 500 }, (_, index) => `Slides ${index + 1}`);
    const swiperEl = ref(null);
    const prependNumber = ref(1);
    const appendNumber = ref(500);
    const toSlide = (index) => {
      var _a;
      (_a = swiperEl.value) == null ? void 0 : _a.swiper.slideTo(index - 1);
    };
    const prependSlide = () => {
      var _a;
      (_a = swiperEl.value) == null ? void 0 : _a.swiper.prependSlide([
        `<swiper-slide>Slide ${--prependNumber.value} </swiper-slide>`,
        `<swiper-slide>Slide ${--prependNumber.value} </swiper-slide>`
      ]);
    };
    const appendSlide = () => {
      var _a;
      (_a = swiperEl.value) == null ? void 0 : _a.swiper.appendSlide([`<swiper-slide>Slide ${++appendNumber.value} </swiper-slide>`]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "swiper-virtual" }, _attrs))}><swiper-container virtual="true"${ssrRenderAttr("slides", unref(slides))} navigation="true" slides-per-view="5" space-between="50" free-mode="true" events-prefix="swiper-"${ssrRenderAttr("breakpoints", {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      })}><!--[-->`);
      ssrRenderList(unref(slides), (item, index) => {
        _push(`<swiper-slide><div class="text-secondary">${ssrInterpolate(item)}</div></swiper-slide>`);
      });
      _push(`<!--]--></swiper-container><div class="d-flex justify-center gap-4 flex-wrap">`);
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary",
        onClick: prependSlide
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Prepend 2 Slides `);
          } else {
            return [
              createTextVNode(" Prepend 2 Slides ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary",
        onClick: ($event) => toSlide(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Slide 1 `);
          } else {
            return [
              createTextVNode(" Slide 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary",
        onClick: ($event) => toSlide(250)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Slide 250 `);
          } else {
            return [
              createTextVNode(" Slide 250 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary",
        onClick: ($event) => toSlide(500)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Slide 500 `);
          } else {
            return [
              createTextVNode(" Slide 500 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        variant: "outlined",
        color: "primary",
        onClick: appendSlide
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Append Slide `);
          } else {
            return [
              createTextVNode(" Append Slide ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperVirtualSlides.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const swiper31 = "/build/assets/banner-31-D6mS0gQn.jpg";
const swiper32 = "/build/assets/banner-32-B8kg_gZc.jpg";
const swiper33 = "/build/assets/banner-33-DfQ0Urdo.jpg";
const swiper34 = "/build/assets/banner-34-CMWn1p69.jpg";
const swiper35 = "/build/assets/banner-35-avrf_yoA.jpg";
const swiper36 = "/build/assets/banner-36-BiLQv0qP.jpg";
const swiper37 = "/build/assets/banner-37-CxyHDUrj.jpg";
const swiper38 = "/build/assets/5-CFPERer_.jpg";
const swiper39 = "/build/assets/banner-39-D9mpewKd.jpg";
const _sfc_main$f = {
  __name: "DemoSwiperResponsiveBreakpoints",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        "pagination-clickable": "true",
        "slides-per-view": "5",
        "space-between": "50",
        "events-prefix": "swiper-",
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper31),
        unref(swiper32),
        unref(swiper33),
        unref(swiper34),
        unref(swiper35),
        unref(swiper36),
        unref(swiper37),
        unref(swiper38),
        unref(swiper39)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperResponsiveBreakpoints.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const swiper20 = "/build/assets/banner-20-D60huBoA.jpg";
const swiper4 = "/build/assets/banner-4-EPycabrm.jpg";
const swiper5 = "/build/assets/banner-5-DVgdLDIC.jpg";
const swiper7 = "/build/assets/banner-7-C3Ec249A.jpg";
const swiper8 = "/build/assets/banner-8-CS7lrdd8.jpg";
const swiper9 = "/build/assets/banner-9-CN54Uf8b.jpg";
const _sfc_main$e = {
  __name: "DemoSwiperLazyLoading",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        "pagination-clickable": "true",
        autoplay: "true",
        navigation: "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper4),
        unref(swiper5),
        unref(swiper9),
        unref(swiper7),
        unref(swiper8),
        unref(swiper20)
      ], (swiperImg) => {
        _push(`<swiper-slide lazy="true">`);
        _push(ssrRenderComponent(VImg, {
          src: swiperImg,
          cover: "",
          loading: "lazy"
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperLazyLoading.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const swiper11 = "/build/assets/banner-11-ClWmypCi.jpg";
const swiper12 = "/build/assets/6-C2cDgitj.jpg";
const swiper13 = "/build/assets/banner-13-Cforbb5S.jpg";
const swiper15 = "/build/assets/banner-15-DVoX7is_.jpg";
const swiper16 = "/build/assets/banner-16-BBt3y7wv.jpg";
const _sfc_main$d = {
  __name: "DemoSwiperGallery",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><swiper-container class="mySwiper" thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true" centered-slides="true" events-prefix="swiper-" data-v-6f9e604e><!--[-->`);
      ssrRenderList([
        unref(swiper11),
        unref(swiper12),
        unref(swiper13),
        unref(swiper15),
        unref(swiper16),
        unref(swiper11),
        unref(swiper12),
        unref(swiper13)
      ], (swiperImg) => {
        _push(`<swiper-slide data-v-6f9e604e>`);
        _push(ssrRenderComponent(VImg, {
          src: swiperImg,
          cover: ""
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container><swiper-container class="mySwiper2" loop="true" free-mode="true" events-prefix="swiper-" slides-per-view="4" data-v-6f9e604e><!--[-->`);
      ssrRenderList([
        unref(swiper11),
        unref(swiper12),
        unref(swiper13),
        unref(swiper15),
        unref(swiper16),
        unref(swiper11),
        unref(swiper12),
        unref(swiper13)
      ], (swiperImg) => {
        _push(`<swiper-slide data-v-6f9e604e>`);
        _push(ssrRenderComponent(VImg, {
          src: swiperImg,
          cover: ""
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperGallery.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-6f9e604e"]]);
const swiper10 = "/build/assets/banner-10-C2w4rcW8.jpg";
const _sfc_main$c = {
  __name: "DemoSwiperAutoplay",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        pagination: "true",
        navigation: "true",
        autoplay: "true",
        "centered-slides": "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper7),
        unref(swiper8),
        unref(swiper9),
        unref(swiper10),
        unref(swiper11),
        unref(swiper20)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, {
          src: swiperImg,
          cover: ""
        }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperAutoplay.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DemoSwiperCoverflowEffect",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        pagination: "true",
        effect: "coverflow",
        "grab-cursor": "true",
        "centered-slides": "true",
        "slides-per-view": "auto",
        "coverflow-effect-rotate": "50",
        "coverflow-effect-stretch": "0",
        "coverflow-effect-depth": "100",
        "coverflow-effect-modifier": "1",
        "coverflow-effect-slide-shadows": "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")} data-v-ee43cbca><!--[-->`);
      ssrRenderList([
        unref(swiper31),
        unref(swiper32),
        unref(swiper33),
        unref(swiper34),
        unref(swiper35),
        unref(swiper36),
        unref(swiper37),
        unref(swiper38),
        unref(swiper39)
      ], (swiperImg) => {
        _push(`<swiper-slide data-v-ee43cbca>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperCoverflowEffect.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-ee43cbca"]]);
const swiper21 = "/build/assets/banner-21-BbDBzY5j.jpg";
const swiper23 = "/build/assets/banner-23-eu_41WqH.jpg";
const swiper24 = "/build/assets/banner-24-BNOF4zrU.jpg";
const _sfc_main$a = {
  __name: "DemoSwiperCubeEffect",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        pagination: "true",
        "centered-slides": "true",
        effect: "cube",
        "grab-cursor": "true",
        "cube-effect-shadow": "true",
        "cube-effect-slide-shadows": "true",
        "cube-effect-shadow-scale": "0.94",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")} data-v-43e4acc8><!--[-->`);
      ssrRenderList([
        unref(swiper21),
        unref(swiper32),
        unref(swiper23),
        unref(swiper24)
      ], (swiperImg) => {
        _push(`<swiper-slide data-v-43e4acc8>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperCubeEffect.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-43e4acc8"]]);
const swiper17 = "/build/assets/banner-17-vuA5wUeU.jpg";
const swiper18 = "/build/assets/banner-18-rnuWLp8J.jpg";
const swiper19 = "/build/assets/banner-19-DKrHObKZ.jpg";
const _sfc_main$9 = {
  __name: "DemoSwiperFade",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        "space-between": "30",
        pagination: "true",
        navigation: "true",
        effect: "fade",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper20),
        unref(swiper19),
        unref(swiper18),
        unref(swiper17),
        unref(swiper16)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperFade.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DemoSwiperCenteredSlidesOption2",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        "centered-slides": "true",
        "space-between": "30",
        "slides-per-view": "1",
        "events-prefix": "swiper-",
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          460: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      }, _attrs), "swiper-container")} data-v-9bd1e7c8><!--[-->`);
      ssrRenderList([
        { icon: "ri-github-fill", text: "Getting Started" },
        { icon: "ri-facebook-circle-line", text: "Pricing & Plans" },
        { icon: "ri-twitter-line", text: "Sales Question" },
        { icon: "ri-instagram-line", text: "Usage Guidelines" },
        { icon: "ri-gitlab-line", text: "General Guide" }
      ], ({ icon, text }) => {
        _push(`<swiper-slide data-v-9bd1e7c8>`);
        _push(ssrRenderComponent(VCard, { class: "bg-default" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex align-center gap-x-3" data-v-9bd1e7c8${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon,
                      size: "28"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-weight-medium" data-v-9bd1e7c8${_scopeId2}>${ssrInterpolate(text)}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                        createVNode(VIcon, {
                          icon,
                          size: "28"
                        }, null, 8, ["icon"]),
                        createVNode("span", { class: "font-weight-medium" }, toDisplayString(text), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex align-center gap-x-3" }, [
                      createVNode(VIcon, {
                        icon,
                        size: "28"
                      }, null, 8, ["icon"]),
                      createVNode("span", { class: "font-weight-medium" }, toDisplayString(text), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperCenteredSlidesOption2.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9bd1e7c8"]]);
const _sfc_main$7 = {
  __name: "DemoSwiperCenteredSlidesOption1",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-centered-slide" }, _attrs))} data-v-dac4b9f6><swiper-container navigation="true" centered-slides="true" space-between="30" slides-per-view="1" events-prefix="swiper-"${ssrRenderAttr("injectStyles", [
        `
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `
      ])}${ssrRenderAttr("breakpoints", {
        992: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      })} data-v-dac4b9f6><!--[-->`);
      ssrRenderList([
        { icon: "ri-github-fill", text: "Getting Started" },
        { icon: "ri-facebook-circle-line", text: "Pricing & Plans" },
        { icon: "ri-twitter-line", text: "Sales Question" },
        { icon: "ri-instagram-line", text: "Usage Guidelines" },
        { icon: "ri-gitlab-line", text: "General Guide" }
      ], ({ icon, text }) => {
        _push(`<swiper-slide data-v-dac4b9f6>`);
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex flex-column align-center gap-y-3" data-v-dac4b9f6${_scopeId2}>`);
                    _push3(ssrRenderComponent(VIcon, {
                      icon,
                      size: "28"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-high-emphasis" data-v-dac4b9f6${_scopeId2}>${ssrInterpolate(text)}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex flex-column align-center gap-y-3" }, [
                        createVNode(VIcon, {
                          icon,
                          size: "28"
                        }, null, 8, ["icon"]),
                        createVNode("span", { class: "text-high-emphasis" }, toDisplayString(text), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "d-flex flex-column align-center gap-y-3" }, [
                      createVNode(VIcon, {
                        icon,
                        size: "28"
                      }, null, 8, ["icon"]),
                      createVNode("span", { class: "text-high-emphasis" }, toDisplayString(text), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperCenteredSlidesOption1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-dac4b9f6"]]);
const swiper26 = "/build/assets/banner-26-Co29d348.jpg";
const swiper28 = "/build/assets/banner-28-BavDZX16.jpg";
const swiper29 = "/build/assets/banner-29-Bw5q4Gpe.jpg";
const swiper30 = "/build/assets/banner-30-BcnSNmsG.jpg";
const _sfc_main$6 = {
  __name: "DemoSwiperGrid",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        "slides-per-view": "4",
        "grid-fill": "rows",
        "space-between": "30",
        "grid-rows": "2",
        "pagination-clickable": "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper26),
        unref(swiper39),
        unref(swiper28),
        unref(swiper29),
        unref(swiper30),
        unref(swiper31),
        unref(swiper32),
        unref(swiper33),
        unref(swiper34),
        unref(swiper35),
        unref(swiper26),
        unref(swiper39)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperGrid.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DemoSwiperMultipleSlidesPerView",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        pagination: "true",
        "slides-per-view": "3",
        "space-between": "25",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper31),
        unref(swiper32),
        unref(swiper33),
        unref(swiper34),
        unref(swiper35)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperMultipleSlidesPerView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSwiperProgress",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        navigation: "true",
        "pagination-type": "progressbar",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper8),
        unref(swiper7),
        unref(swiper20),
        unref(swiper4),
        unref(swiper5)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperProgress.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSwiperPagination",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        pagination: "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper12),
        unref(swiper9),
        unref(swiper8),
        unref(swiper7),
        unref(swiper20)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperPagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const swiper14 = "/build/assets/banner-14-bNfFS-GU.jpg";
const swiper2 = "/build/assets/banner-2-SWMk04gr.jpg";
const swiper3 = "/build/assets/banner-3-S5UpPGOJ.jpg";
const _sfc_main$2 = {
  __name: "DemoSwiperNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({
        navigation: "true",
        "events-prefix": "swiper-"
      }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper7),
        unref(swiper4),
        unref(swiper14),
        unref(swiper3),
        unref(swiper2)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const swiper1 = "/build/assets/banner-1-rgqr7rAW.jpg";
const _sfc_main$1 = {
  __name: "DemoSwiperBasic",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<swiper-container${ssrRenderAttrs(mergeProps({ "events-prefix": "swiper-" }, _attrs), "swiper-container")}><!--[-->`);
      ssrRenderList([
        unref(swiper1),
        unref(swiper2),
        unref(swiper4),
        unref(swiper7),
        unref(swiper13)
      ], (swiperImg) => {
        _push(`<swiper-slide>`);
        _push(ssrRenderComponent(VImg, { src: swiperImg }, null, _parent));
        _push(`</swiper-slide>`);
      });
      _push(`<!--]--></swiper-container>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/components/swiper/DemoSwiperBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const autoplay = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
` };
const basic = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const centeredSlidesOption1 = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'ri-github-fill', text: 'Getting Started' },
          { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
          { icon: 'ri-twitter-line', text: 'Sales Question' },
          { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
          { icon: 'ri-gitlab-line', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'ri-github-fill', text: 'Getting Started' },
          { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
          { icon: 'ri-twitter-line', text: 'Sales Question' },
          { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
          { icon: 'ri-gitlab-line', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
` };
const centeredSlidesOption2 = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'ri-github-fill', text: 'Getting Started' },
        { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
        { icon: 'ri-twitter-line', text: 'Sales Question' },
        { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
        { icon: 'ri-gitlab-line', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'ri-github-fill', text: 'Getting Started' },
        { icon: 'ri-facebook-circle-line', text: 'Pricing & Plans' },
        { icon: 'ri-twitter-line', text: 'Sales Question' },
        { icon: 'ri-instagram-line', text: 'Usage Guidelines' },
        { icon: 'ri-gitlab-line', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
` };
const coverflowEffect = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
` };
const cubeEffect = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
` };
const fade = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const gallery = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
` };
const grid = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const lazyLoading = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
` };
const multipleSlidesPerView = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const navigation = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const pagination = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const progress = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'

import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const responsiveBreakpoints = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
` };
const virtualSlides = { ts: `<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${index + 1}\`)
const swiperEl = ref<any>(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = (index: number) => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([
    \`<swiper-slide>Slide \${(++appendNumber.value)} </swiper-slide>\`,
  ])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`, js: `<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${ index + 1 }\`)
const swiperEl = ref(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = index => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([\`<swiper-slide>Slide \${ ++appendNumber.value } </swiper-slide>\`])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
` };
const _sfc_main = {
  __name: "swiper",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$h;
      const _component_DemoSwiperBasic = _sfc_main$1;
      const _component_DemoSwiperNavigation = _sfc_main$2;
      const _component_DemoSwiperPagination = _sfc_main$3;
      const _component_DemoSwiperProgress = _sfc_main$4;
      const _component_DemoSwiperMultipleSlidesPerView = _sfc_main$5;
      const _component_DemoSwiperGrid = _sfc_main$6;
      const _component_DemoSwiperCenteredSlidesOption1 = __unplugin_components_7;
      const _component_DemoSwiperCenteredSlidesOption2 = __unplugin_components_8;
      const _component_DemoSwiperFade = _sfc_main$9;
      const _component_DemoSwiperCubeEffect = __unplugin_components_10;
      const _component_DemoSwiperCoverflowEffect = __unplugin_components_11;
      const _component_DemoSwiperAutoplay = _sfc_main$c;
      const _component_DemoSwiperGallery = __unplugin_components_13;
      const _component_DemoSwiperLazyLoading = _sfc_main$e;
      const _component_DemoSwiperResponsiveBreakpoints = _sfc_main$f;
      const _component_DemoSwiperVirtualSlides = _sfc_main$g;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperBasic)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Navigation",
                    code: navigation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperNavigation, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperNavigation)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Navigation",
                      code: navigation
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperNavigation)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Pagination",
                    code: pagination
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperPagination, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperPagination)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Pagination",
                      code: pagination
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperPagination)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Progress",
                    code: progress
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperProgress, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperProgress)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Progress",
                      code: progress
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperProgress)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Multiple Slides Per View",
                    code: multipleSlidesPerView
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperMultipleSlidesPerView, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperMultipleSlidesPerView)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Multiple Slides Per View",
                      code: multipleSlidesPerView
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperMultipleSlidesPerView)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Grid",
                    code: grid
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperGrid, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperGrid)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Grid",
                      code: grid
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperGrid)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    variant: "text",
                    title: "Centered Slides Option 1",
                    code: centeredSlidesOption1
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperCenteredSlidesOption1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperCenteredSlidesOption1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      variant: "text",
                      title: "Centered Slides Option 1",
                      code: centeredSlidesOption1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperCenteredSlidesOption1)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Centered Slides Option 2",
                    code: centeredSlidesOption2
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperCenteredSlidesOption2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperCenteredSlidesOption2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Centered Slides Option 2",
                      code: centeredSlidesOption2
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperCenteredSlidesOption2)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Fade",
                    code: fade
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperFade, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperFade)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Fade",
                      code: fade
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperFade)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Cube Effect",
                    code: cubeEffect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperCubeEffect, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperCubeEffect)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Cube Effect",
                      code: cubeEffect
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperCubeEffect)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Coverflow Effect",
                    code: coverflowEffect
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperCoverflowEffect, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperCoverflowEffect)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Coverflow Effect",
                      code: coverflowEffect
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperCoverflowEffect)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Autoplay",
                    code: autoplay
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperAutoplay, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperAutoplay)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Autoplay",
                      code: autoplay
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperAutoplay)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Gallery",
                    code: gallery
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperGallery, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperGallery)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Gallery",
                      code: gallery
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperGallery)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Lazy Loading",
                    code: lazyLoading
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperLazyLoading, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperLazyLoading)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Lazy Loading",
                      code: lazyLoading
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperLazyLoading)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Responsive Breakpoints",
                    code: responsiveBreakpoints
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperResponsiveBreakpoints, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperResponsiveBreakpoints)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Responsive Breakpoints",
                      code: responsiveBreakpoints
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperResponsiveBreakpoints)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Virtual Slides",
                    code: virtualSlides
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSwiperVirtualSlides, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSwiperVirtualSlides)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Virtual Slides",
                      code: virtualSlides
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSwiperVirtualSlides)
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
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Navigation",
                    code: navigation
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperNavigation)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Pagination",
                    code: pagination
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperPagination)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Progress",
                    code: progress
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperProgress)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Multiple Slides Per View",
                    code: multipleSlidesPerView
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperMultipleSlidesPerView)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Grid",
                    code: grid
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperGrid)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    variant: "text",
                    title: "Centered Slides Option 1",
                    code: centeredSlidesOption1
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperCenteredSlidesOption1)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Centered Slides Option 2",
                    code: centeredSlidesOption2
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperCenteredSlidesOption2)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Fade",
                    code: fade
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperFade)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Cube Effect",
                    code: cubeEffect
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperCubeEffect)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Coverflow Effect",
                    code: coverflowEffect
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperCoverflowEffect)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Autoplay",
                    code: autoplay
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperAutoplay)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Gallery",
                    code: gallery
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperGallery)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Lazy Loading",
                    code: lazyLoading
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperLazyLoading)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Responsive Breakpoints",
                    code: responsiveBreakpoints
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperResponsiveBreakpoints)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, null, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Virtual Slides",
                    code: virtualSlides
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSwiperVirtualSlides)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/extensions/swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
