import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VTable } from "./VTable-GFy-hQjD.js";
import { _ as _sfc_main$6 } from "./AppCardCode-DkpMhnYF.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import "../ssr.js";
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
import "./index-D5WAZiYx.js";
import "./VCard-BPXR3fWJ.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./VDivider-o5iRKh3w.js";
/* empty css               */
const _sfc_main$5 = {
  __name: "DemoSimpleTableFixedHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({
        height: "250",
        "fixed-header": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase"${_scopeId}> calories </th><th class="text-uppercase"${_scopeId}> Fat(g) </th><th class="text-uppercase"${_scopeId}> Carbs(g) </th><th class="text-uppercase"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td${_scopeId}>${ssrInterpolate(item.calories)}</td><td${_scopeId}>${ssrInterpolate(item.fat)}</td><td${_scopeId}>${ssrInterpolate(item.carbs)}</td><td${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase" }, " calories "),
                  createVNode("th", { class: "text-uppercase" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", null, toDisplayString(item.calories), 1),
                    createVNode("td", null, toDisplayString(item.fat), 1),
                    createVNode("td", null, toDisplayString(item.carbs), 1),
                    createVNode("td", null, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/simple-table/DemoSimpleTableFixedHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DemoSimpleTableHeight",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ height: "250" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase"${_scopeId}> calories </th><th class="text-uppercase"${_scopeId}> Fat(g) </th><th class="text-uppercase"${_scopeId}> Carbs(g) </th><th class="text-uppercase"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td${_scopeId}>${ssrInterpolate(item.calories)}</td><td${_scopeId}>${ssrInterpolate(item.fat)}</td><td${_scopeId}>${ssrInterpolate(item.carbs)}</td><td${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase" }, " calories "),
                  createVNode("th", { class: "text-uppercase" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", null, toDisplayString(item.calories), 1),
                    createVNode("td", null, toDisplayString(item.fat), 1),
                    createVNode("td", null, toDisplayString(item.carbs), 1),
                    createVNode("td", null, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/simple-table/DemoSimpleTableHeight.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DemoSimpleTableDensity",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ density: "compact" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase"${_scopeId}> calories </th><th class="text-uppercase"${_scopeId}> Fat(g) </th><th class="text-uppercase"${_scopeId}> Carbs(g) </th><th class="text-uppercase"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td${_scopeId}>${ssrInterpolate(item.calories)}</td><td${_scopeId}>${ssrInterpolate(item.fat)}</td><td${_scopeId}>${ssrInterpolate(item.carbs)}</td><td${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase" }, " calories "),
                  createVNode("th", { class: "text-uppercase" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", null, toDisplayString(item.calories), 1),
                    createVNode("td", null, toDisplayString(item.fat), 1),
                    createVNode("td", null, toDisplayString(item.carbs), 1),
                    createVNode("td", null, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/simple-table/DemoSimpleTableDensity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoSimpleTableTheme",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, mergeProps({ theme: "dark" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase"${_scopeId}> calories </th><th class="text-uppercase"${_scopeId}> Fat(g) </th><th class="text-uppercase"${_scopeId}> Carbs(g) </th><th class="text-uppercase"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td${_scopeId}>${ssrInterpolate(item.calories)}</td><td${_scopeId}>${ssrInterpolate(item.fat)}</td><td${_scopeId}>${ssrInterpolate(item.carbs)}</td><td${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase" }, " calories "),
                  createVNode("th", { class: "text-uppercase" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", null, toDisplayString(item.calories), 1),
                    createVNode("td", null, toDisplayString(item.fat), 1),
                    createVNode("td", null, toDisplayString(item.carbs), 1),
                    createVNode("td", null, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/simple-table/DemoSimpleTableTheme.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoSimpleTableBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const desserts = [
      {
        dessert: "Frozen Yogurt",
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Ice cream sandwich",
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Eclair",
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Cupcake",
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4
      },
      {
        dessert: "Gingerbread",
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTable, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-uppercase"${_scopeId}> Desserts(100g Servings) </th><th class="text-uppercase"${_scopeId}> calories </th><th class="text-uppercase"${_scopeId}> Fat(g) </th><th class="text-uppercase"${_scopeId}> Carbs(g) </th><th class="text-uppercase"${_scopeId}> protein(g) </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.dessert)}</td><td${_scopeId}>${ssrInterpolate(item.calories)}</td><td${_scopeId}>${ssrInterpolate(item.fat)}</td><td${_scopeId}>${ssrInterpolate(item.carbs)}</td><td${_scopeId}>${ssrInterpolate(item.protein)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-uppercase" }, " Desserts(100g Servings) "),
                  createVNode("th", { class: "text-uppercase" }, " calories "),
                  createVNode("th", { class: "text-uppercase" }, " Fat(g) "),
                  createVNode("th", { class: "text-uppercase" }, " Carbs(g) "),
                  createVNode("th", { class: "text-uppercase" }, " protein(g) ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(desserts, (item) => {
                  return createVNode("tr", {
                    key: item.dessert
                  }, [
                    createVNode("td", null, toDisplayString(item.dessert), 1),
                    createVNode("td", null, toDisplayString(item.calories), 1),
                    createVNode("td", null, toDisplayString(item.fat), 1),
                    createVNode("td", null, toDisplayString(item.carbs), 1),
                    createVNode("td", null, toDisplayString(item.protein), 1)
                  ]);
                }), 64))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/tables/simple-table/DemoSimpleTableBasic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const basic = { ts: `<script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
`, js: `<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
` };
const density = { ts: `<script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
`, js: `<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
` };
const fixedHeader = { ts: `<script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
`, js: `<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
` };
const height = { ts: `<script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable height="250">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
`, js: `<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable height="250">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
` };
const theme = { ts: `<script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable theme="dark">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
`, js: `<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
<\/script>

<template>
  <VTable theme="dark">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase">
          calories
        </th>
        <th class="text-uppercase">
          Fat(g)
        </th>
        <th class="text-uppercase">
          Carbs(g)
        </th>
        <th class="text-uppercase">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
` };
const _sfc_main = {
  __name: "simple-table",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$6;
      const _component_DemoSimpleTableBasic = _sfc_main$1;
      const _component_DemoSimpleTableTheme = _sfc_main$2;
      const _component_DemoSimpleTableDensity = _sfc_main$3;
      const _component_DemoSimpleTableHeight = _sfc_main$4;
      const _component_DemoSimpleTableFixedHeader = _sfc_main$5;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    title: "Basic",
                    code: basic,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DemoSimpleTableBasic, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DemoSimpleTableBasic)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Basic",
                      code: basic,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoSimpleTableBasic)
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
                    title: "Theme",
                    code: theme,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` use <code${_scopeId4}>theme</code> prop to switch table to the dark theme. `);
                            } else {
                              return [
                                createTextVNode(" use "),
                                createVNode("code", null, "theme"),
                                createTextVNode(" prop to switch table to the dark theme. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoSimpleTableTheme, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" use "),
                              createVNode("code", null, "theme"),
                              createTextVNode(" prop to switch table to the dark theme. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoSimpleTableTheme)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Theme",
                      code: theme,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" use "),
                            createVNode("code", null, "theme"),
                            createTextVNode(" prop to switch table to the dark theme. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoSimpleTableTheme)
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
                    title: "Density",
                    code: density,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can show a dense version of the table by using the <code${_scopeId4}>density</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can show a dense version of the table by using the "),
                                createVNode("code", null, "density"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoSimpleTableDensity, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can show a dense version of the table by using the "),
                              createVNode("code", null, "density"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoSimpleTableDensity)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Density",
                      code: density,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can show a dense version of the table by using the "),
                            createVNode("code", null, "density"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoSimpleTableDensity)
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
                    title: "Height",
                    code: height,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can set the height of the table by using the <code${_scopeId4}>height</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can set the height of the table by using the "),
                                createVNode("code", null, "height"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoSimpleTableHeight, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can set the height of the table by using the "),
                              createVNode("code", null, "height"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoSimpleTableHeight)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Height",
                      code: height,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can set the height of the table by using the "),
                            createVNode("code", null, "height"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoSimpleTableHeight)
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
                    title: "Fixed Header",
                    code: fixedHeader,
                    "no-padding": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You can fix the header of table by using the <code${_scopeId4}>fixed-header</code> prop. `);
                            } else {
                              return [
                                createTextVNode(" You can fix the header of table by using the "),
                                createVNode("code", null, "fixed-header"),
                                createTextVNode(" prop. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DemoSimpleTableFixedHeader, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode(" You can fix the header of table by using the "),
                              createVNode("code", null, "fixed-header"),
                              createTextVNode(" prop. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DemoSimpleTableFixedHeader)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      title: "Fixed Header",
                      code: fixedHeader,
                      "no-padding": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(" You can fix the header of table by using the "),
                            createVNode("code", null, "fixed-header"),
                            createTextVNode(" prop. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DemoSimpleTableFixedHeader)
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
                    title: "Basic",
                    code: basic,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DemoSimpleTableBasic)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Theme",
                    code: theme,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" use "),
                          createVNode("code", null, "theme"),
                          createTextVNode(" prop to switch table to the dark theme. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoSimpleTableTheme)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Density",
                    code: density,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can show a dense version of the table by using the "),
                          createVNode("code", null, "density"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoSimpleTableDensity)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Height",
                    code: height,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can set the height of the table by using the "),
                          createVNode("code", null, "height"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoSimpleTableHeight)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    title: "Fixed Header",
                    code: fixedHeader,
                    "no-padding": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can fix the header of table by using the "),
                          createVNode("code", null, "fixed-header"),
                          createTextVNode(" prop. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DemoSimpleTableFixedHeader)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/tables/simple-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
