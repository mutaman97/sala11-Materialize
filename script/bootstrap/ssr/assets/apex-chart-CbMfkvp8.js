import { _ as _sfc_main$b } from "./AppDateTimePicker-B0c_dYDs.js";
import { computed, mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import __unplugin_components_0 from "vue3-apexcharts";
import { O as hexToRgb, l as useTheme, A as VBtnGroup, V as VBtn, a as VIcon } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VChip } from "./VChip-BFfBWJ68.js";
import "vue-flatpickr-component";
import "./VField-DXNiYeaA.js";
import "./form-DJQTvsmB.js";
import "./index-D5WAZiYx.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VImg-D-rbsD1g.js";
import "@vueuse/core";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
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
/* empty css               */
import "./VAvatar-D2wIwigQ.js";
import "./VSlideGroup-Bvz86g7R.js";
const colorVariables = (themeColors) => {
  const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors["on-surface"])},${themeColors.variables["medium-emphasis-opacity"]})`;
  const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors["on-surface"])},${themeColors.variables["disabled-opacity"]})`;
  const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables["border-color"]))},${themeColors.variables["border-opacity"]})`;
  const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors["on-surface"])},${themeColors.variables["high-emphasis-opacity"]})`;
  return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor };
};
const getScatterChartConfig = (themeColors) => {
  const scatterColors = {
    series1: "#ff9f43",
    series2: "#7367f0",
    series3: "#28c76f"
  };
  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        type: "xy",
        enabled: true
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [scatterColors.series1, scatterColors.series2, scatterColors.series3],
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      tickAmount: 10,
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor },
        formatter: (val) => Number.parseFloat(val).toFixed(1)
      }
    }
  };
};
const getLineChartSimpleConfig = (themeColors) => {
  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ["#ff9f43"],
    stroke: { curve: "straight" },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ["#ff9f43"],
      strokeColors: ["#fff"]
    },
    grid: {
      padding: { top: -10 },
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='bar-chart pa-2'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        </div>`;
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      },
      categories: [
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12",
        "12/12",
        "13/12",
        "14/12",
        "15/12",
        "16/12",
        "17/12",
        "18/12",
        "19/12",
        "20/12",
        "21/12"
      ]
    }
  };
};
const getBarChartConfig = (themeColors) => {
  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: ["#00cfe8"],
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        barHeight: "30%",
        horizontal: true
      }
    },
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      categories: ["MON, 11", "THU, 14", "FRI, 15", "MON, 18", "WED, 20", "FRI, 21", "MON, 23"],
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    }
  };
};
const getCandlestickChartConfig = (themeColors) => {
  const candlestickColors = {
    series1: "#28c76f",
    series2: "#ea5455"
  };
  const { themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: { columnWidth: "40%" },
      candlestick: {
        colors: {
          upward: candlestickColors.series1,
          downward: candlestickColors.series2
        }
      }
    },
    grid: {
      padding: { top: -10 },
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      tooltip: { enabled: true },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    }
  };
};
const getRadialBarChartConfig = (themeColors) => {
  const radialBarColors = {
    series1: "#fdd835",
    series2: "#32baff",
    series3: "#00d4bd",
    series4: "#7367f0",
    series5: "#FFA1A1"
  };
  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors);
  return {
    stroke: { lineCap: "round" },
    labels: ["Comments", "Replies", "Shares"],
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        hollow: { size: "30%" },
        track: {
          margin: 15,
          background: themeColors.colors["grey-100"]
        },
        dataLabels: {
          name: {
            fontSize: "2rem"
          },
          value: {
            fontSize: "1rem",
            color: themeSecondaryTextColor
          },
          total: {
            show: true,
            fontWeight: 400,
            label: "Comments",
            fontSize: "1.125rem",
            color: themePrimaryTextColor,
            formatter(w) {
              const totalValue = w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) / w.globals.series.length;
              if (totalValue % 1 === 0)
                return `${totalValue}%`;
              else
                return `${totalValue.toFixed(2)}%`;
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -30,
        bottom: -25
      }
    }
  };
};
const getDonutChartConfig = (themeColors) => {
  const donutColors = {
    series1: "#fdd835",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#32baff",
    series5: "#ffa1a1"
  };
  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors);
  return {
    stroke: { width: 0 },
    labels: ["Operational", "Networking", "Hiring", "R&D"],
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Number.parseInt(val, 10)}%`
    },
    legend: {
      position: "bottom",
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: "1.5rem"
            },
            value: {
              fontSize: "1.5rem",
              color: themeSecondaryTextColor,
              formatter: (val) => `${Number.parseInt(val, 10)}`
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Operational",
              formatter: () => "31%",
              color: themePrimaryTextColor
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: "bottom"
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1rem"
                  },
                  value: {
                    fontSize: "1rem"
                  },
                  total: {
                    fontSize: "1rem"
                  }
                }
              }
            }
          }
        }
      }
    ]
  };
};
const getAreaChartSplineConfig = (themeColors) => {
  const areaColors = {
    series3: "#e0cffe",
    series2: "#b992fe",
    series1: "#ab7efd"
  };
  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { shared: false },
    dataLabels: { enabled: false },
    stroke: {
      show: false,
      curve: "straight"
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: { colors: themeSecondaryTextColor },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    fill: {
      opacity: 1,
      type: "solid"
    },
    grid: {
      show: true,
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      },
      categories: [
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12",
        "12/12",
        "13/12",
        "14/12",
        "15/12",
        "16/12",
        "17/12",
        "18/12",
        "19/12"
      ]
    }
  };
};
const getColumnChartConfig = (themeColors) => {
  const columnColors = {
    series1: "#826af9",
    series2: "#d2b0ff",
    bg: "#f8d3ff"
  };
  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      offsetX: -10,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },
    colors: [columnColors.series1, columnColors.series2],
    legend: {
      position: "top",
      horizontalAlign: "left",
      labels: { colors: themeSecondaryTextColor },
      markers: {
        offsetY: 1,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    stroke: {
      show: true,
      colors: ["transparent"]
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        colors: {
          backgroundBarRadius: 10,
          backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg]
        }
      }
    },
    grid: {
      borderColor: themeBorderColor,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: themeBorderColor },
      categories: ["7/12", "8/12", "9/12", "10/12", "11/12", "12/12", "13/12", "14/12", "15/12"],
      crosshairs: {
        stroke: { color: themeBorderColor }
      },
      labels: {
        style: { colors: themeDisabledTextColor }
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "35%"
            }
          }
        }
      }
    ]
  };
};
const getHeatMapChartConfig = (themeColors) => {
  const { themeSecondaryTextColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      colors: [themeColors.colors.surface]
    },
    legend: {
      position: "bottom",
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetY: 0,
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { to: 10, from: 0, name: "0-10", color: "#b9b3f8" },
            { to: 20, from: 11, name: "10-20", color: "#aba4f6" },
            { to: 30, from: 21, name: "20-30", color: "#9d95f5" },
            { to: 40, from: 31, name: "30-40", color: "#8f85f3" },
            { to: 50, from: 41, name: "40-50", color: "#8176f2" },
            { to: 60, from: 51, name: "50-60", color: "#7367f0" }
          ]
        }
      }
    },
    grid: {
      padding: { top: -20 }
    },
    yaxis: {
      labels: {
        style: {
          colors: themeDisabledTextColor
        }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    }
  };
};
const getRadarChartConfig = (themeColors) => {
  const radarColors = {
    series1: "#9b88fa",
    series2: "#ffa1a1"
  };
  const { themeSecondaryTextColor, themeBorderColor, themeDisabledTextColor } = colorVariables(themeColors);
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 1,
        blur: 8,
        left: 1,
        opacity: 0.2,
        enabled: false
      }
    },
    markers: { size: 0 },
    fill: { opacity: [1, 0.8] },
    colors: [radarColors.series1, radarColors.series2],
    stroke: {
      width: 0,
      show: false
    },
    legend: {
      labels: {
        colors: themeSecondaryTextColor
      },
      markers: {
        offsetX: -3
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: themeBorderColor,
          connectorColors: themeBorderColor
        }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20
      }
    },
    yaxis: { show: false },
    xaxis: {
      categories: ["Battery", "Brand", "Camera", "Memory", "Storage", "Display", "OS", "Price"],
      labels: {
        style: {
          colors: [
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor,
            themeDisabledTextColor
          ]
        }
      }
    }
  };
};
const _sfc_main$a = {
  __name: "ApexChartAreaChart",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getAreaChartSplineConfig(vuetifyTheme.current.value));
    const series = [
      {
        name: "Visits",
        data: [
          100,
          120,
          90,
          170,
          130,
          160,
          140,
          240,
          220,
          180,
          270,
          280,
          375
        ]
      },
      {
        name: "Clicks",
        data: [
          60,
          80,
          70,
          110,
          80,
          100,
          90,
          180,
          160,
          140,
          200,
          220,
          275
        ]
      },
      {
        name: "Sales",
        data: [
          20,
          40,
          30,
          70,
          40,
          60,
          50,
          140,
          120,
          100,
          140,
          180,
          220
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "area",
        height: "400",
        options: unref(chartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartAreaChart.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "ApexChartBalance",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const balanceChartConfig = computed(() => getLineChartSimpleConfig(vuetifyTheme.current.value));
    const series = [{
      data: [
        280,
        200,
        220,
        180,
        270,
        250,
        70,
        90,
        200,
        150,
        160,
        100,
        150,
        100,
        50
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "line",
        height: "400",
        options: unref(balanceChartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartBalance.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ApexChartDailySalesStates",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getHeatMapChartConfig(vuetifyTheme.current.value));
    const generateDataHeat = (count, yrange) => {
      let i = 0;
      const series2 = [];
      while (i < count) {
        const x = `w${(i + 1).toString()}`;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series2.push({
          x,
          y
        });
        i += 1;
      }
      return series2;
    };
    const series = [
      {
        name: "SUN",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "MON",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "TUE",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "WED",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "THU",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "FRI",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      },
      {
        name: "SAT",
        data: generateDataHeat(24, {
          min: 0,
          max: 60
        })
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "heatmap",
        height: "350",
        options: unref(chartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartDailySalesStates.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ApexChartDataScience",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getColumnChartConfig(vuetifyTheme.current.value));
    const series = [
      {
        name: "Apple",
        data: [
          90,
          120,
          55,
          100,
          80,
          125,
          175,
          70,
          88
        ]
      },
      {
        name: "Samsung",
        data: [
          85,
          100,
          30,
          40,
          95,
          90,
          30,
          110,
          62
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "bar",
        height: "400",
        options: unref(chartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartDataScience.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ApexChartExpenseRatio",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const expenseRationChartConfig = computed(() => getDonutChartConfig(vuetifyTheme.current.value));
    const series = [
      85,
      16,
      50,
      50
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "donut",
        height: "410",
        options: unref(expenseRationChartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartExpenseRatio.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ApexChartHorizontalBar",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const horizontalBarChartConfig = computed(() => getBarChartConfig(vuetifyTheme.current.value));
    const series = [{
      data: [
        700,
        350,
        480,
        600,
        210,
        550,
        150
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "bar",
        height: "400",
        options: unref(horizontalBarChartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartHorizontalBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ApexChartMobileComparison",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const series = [
      {
        name: "iPhone 12",
        data: [
          41,
          64,
          81,
          60,
          42,
          42,
          33,
          23
        ]
      },
      {
        name: "Samsung s20",
        data: [
          65,
          46,
          42,
          25,
          58,
          63,
          76,
          43
        ]
      }
    ];
    const chartConfig = computed(() => getRadarChartConfig(vuetifyTheme.current.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "radar",
        height: "400",
        options: unref(chartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartMobileComparison.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ApexChartNewTechnologiesData",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const scatterChartConfig = computed(() => getScatterChartConfig(vuetifyTheme.current.value));
    const series = [
      {
        name: "Angular",
        data: [
          {
            x: 5.4,
            y: 170
          },
          {
            x: 5.4,
            y: 100
          },
          {
            x: 6.3,
            y: 170
          },
          {
            x: 5.7,
            y: 140
          },
          {
            x: 5.9,
            y: 130
          },
          {
            x: 7,
            y: 150
          },
          {
            x: 8,
            y: 120
          },
          {
            x: 9,
            y: 170
          },
          {
            x: 10,
            y: 190
          },
          {
            x: 11,
            y: 220
          },
          {
            x: 12,
            y: 170
          },
          {
            x: 13,
            y: 230
          }
        ]
      },
      {
        name: "Vue",
        data: [
          {
            x: 14,
            y: 220
          },
          {
            x: 15,
            y: 280
          },
          {
            x: 16,
            y: 230
          },
          {
            x: 18,
            y: 320
          },
          {
            x: 17.5,
            y: 280
          },
          {
            x: 19,
            y: 250
          },
          {
            x: 20,
            y: 350
          },
          {
            x: 20.5,
            y: 320
          },
          {
            x: 20,
            y: 320
          },
          {
            x: 19,
            y: 280
          },
          {
            x: 17,
            y: 280
          },
          {
            x: 22,
            y: 300
          },
          {
            x: 18,
            y: 120
          }
        ]
      },
      {
        name: "React",
        data: [
          {
            x: 14,
            y: 290
          },
          {
            x: 13,
            y: 190
          },
          {
            x: 20,
            y: 220
          },
          {
            x: 21,
            y: 350
          },
          {
            x: 21.5,
            y: 290
          },
          {
            x: 22,
            y: 220
          },
          {
            x: 23,
            y: 140
          },
          {
            x: 19,
            y: 400
          },
          {
            x: 20,
            y: 200
          },
          {
            x: 22,
            y: 90
          },
          {
            x: 20,
            y: 120
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "scatter",
        height: "400",
        options: unref(scatterChartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartNewTechnologiesData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ApexChartStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const statisticsChartConfig = computed(() => getRadialBarChartConfig(vuetifyTheme.current.value));
    const series = [
      80,
      50,
      35
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "radialBar",
        height: "400",
        options: unref(statisticsChartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartStatistics.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ApexChartStocksPrices",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getCandlestickChartConfig(vuetifyTheme.current.value));
    const series = [{
      data: [
        {
          x: `7/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            150,
            170,
            50,
            100
          ]
        },
        {
          x: `8/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            200,
            400,
            170,
            330
          ]
        },
        {
          x: `9/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            330,
            340,
            250,
            280
          ]
        },
        {
          x: `10/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            300,
            330,
            200,
            320
          ]
        },
        {
          x: `11/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            320,
            450,
            280,
            350
          ]
        },
        {
          x: `12/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            300,
            350,
            80,
            250
          ]
        },
        {
          x: `13/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            200,
            330,
            170,
            300
          ]
        },
        {
          x: `14/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            200,
            220,
            70,
            130
          ]
        },
        {
          x: `15/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            220,
            270,
            180,
            250
          ]
        },
        {
          x: `16/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            200,
            250,
            80,
            100
          ]
        },
        {
          x: `17/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            150,
            170,
            50,
            120
          ]
        },
        {
          x: `18/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            110,
            450,
            10,
            420
          ]
        },
        {
          x: `19/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            400,
            480,
            300,
            320
          ]
        },
        {
          x: `20/12/${(/* @__PURE__ */ new Date()).getFullYear()}`,
          y: [
            380,
            480,
            350,
            450
          ]
        }
      ]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VueApexCharts = __unplugin_components_0;
      _push(ssrRenderComponent(_component_VueApexCharts, mergeProps({
        type: "candlestick",
        height: "385",
        options: unref(chartConfig),
        series
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/apex-chart/ApexChartStocksPrices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "apex-chart",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$b;
      _push(ssrRenderComponent(VRow, mergeProps({ id: "apex-chart-wrapper" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="date-picker-wrapper"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "date-picker-wrapper" }, [
                                  createVNode(_component_AppDateTimePicker, {
                                    "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                    "prepend-inner-icon": "ri-calendar-line",
                                    placeholder: "Select Date",
                                    config: { position: "auto right" }
                                  }, null, 8, ["model-value"])
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Area Chart`);
                                  } else {
                                    return [
                                      createTextVNode("Area Chart")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Commercial networks`);
                                  } else {
                                    return [
                                      createTextVNode("Commercial networks")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Area Chart")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Commercial networks")
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
                              _push5(ssrRenderComponent(_sfc_main$a, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$a)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode("div", { class: "date-picker-wrapper" }, [
                                createVNode(_component_AppDateTimePicker, {
                                  "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                  "prepend-inner-icon": "ri-calendar-line",
                                  placeholder: "Select Date",
                                  config: { position: "auto right" }
                                }, null, 8, ["model-value"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Area Chart")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Commercial networks")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode("div", { class: "date-picker-wrapper" }, [
                              createVNode(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, 8, ["model-value"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Area Chart")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Commercial networks")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$a)
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
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="date-picker-wrapper"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "date-picker-wrapper" }, [
                                  createVNode(_component_AppDateTimePicker, {
                                    "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                    "prepend-inner-icon": "ri-calendar-line",
                                    placeholder: "Select Date",
                                    config: { position: "auto right" }
                                  }, null, 8, ["model-value"])
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Data Science`);
                                  } else {
                                    return [
                                      createTextVNode("Data Science")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Data Science")
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
                              _push5(ssrRenderComponent(_sfc_main$7, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode("div", { class: "date-picker-wrapper" }, [
                                createVNode(_component_AppDateTimePicker, {
                                  "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                  "prepend-inner-icon": "ri-calendar-line",
                                  placeholder: "Select Date",
                                  config: { position: "auto right" }
                                }, null, 8, ["model-value"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Data Science")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode("div", { class: "date-picker-wrapper" }, [
                              createVNode(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, 8, ["model-value"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Data Science")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7)
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
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtnGroup, {
                                density: "compact",
                                color: "primary",
                                variant: "outlined",
                                divided: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Daily`);
                                        } else {
                                          return [
                                            createTextVNode("Daily")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Monthly`);
                                        } else {
                                          return [
                                            createTextVNode("Monthly")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Yearly`);
                                        } else {
                                          return [
                                            createTextVNode("Yearly")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Daily")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Monthly")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Yearly")
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
                                createVNode(VBtnGroup, {
                                  density: "compact",
                                  color: "primary",
                                  variant: "outlined",
                                  divided: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Daily")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Monthly")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Yearly")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`New Technologies Data`);
                                  } else {
                                    return [
                                      createTextVNode("New Technologies Data")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("New Technologies Data")
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
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode(VBtnGroup, {
                                density: "compact",
                                color: "primary",
                                variant: "outlined",
                                divided: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Daily")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Monthly")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Yearly")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("New Technologies Data")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode(VBtnGroup, {
                              density: "compact",
                              color: "primary",
                              variant: "outlined",
                              divided: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Daily")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Monthly")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Yearly")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("New Technologies Data")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
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
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}><h6 class="text-h6 me-3"${_scopeId4}> $221,267 </h6>`);
                              _push5(ssrRenderComponent(VChip, {
                                label: "",
                                color: "success",
                                class: "font-weight-bold"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      start: "",
                                      icon: "ri-arrow-up-line",
                                      size: "15"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>22%</span>`);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-arrow-up-line",
                                        size: "15"
                                      }),
                                      createVNode("span", null, "22%")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("h6", { class: "text-h6 me-3" }, " $221,267 "),
                                  createVNode(VChip, {
                                    label: "",
                                    color: "success",
                                    class: "font-weight-bold"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "ri-arrow-up-line",
                                        size: "15"
                                      }),
                                      createVNode("span", null, "22%")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Balance`);
                                  } else {
                                    return [
                                      createTextVNode("Balance")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Commercial networks &amp; enterprises`);
                                  } else {
                                    return [
                                      createTextVNode("Commercial networks & enterprises")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Balance")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Commercial networks & enterprises")
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
                              _push5(ssrRenderComponent(_sfc_main$9, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$9)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("h6", { class: "text-h6 me-3" }, " $221,267 "),
                                createVNode(VChip, {
                                  label: "",
                                  color: "success",
                                  class: "font-weight-bold"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "ri-arrow-up-line",
                                      size: "15"
                                    }),
                                    createVNode("span", null, "22%")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Balance")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Commercial networks & enterprises")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("h6", { class: "text-h6 me-3" }, " $221,267 "),
                              createVNode(VChip, {
                                label: "",
                                color: "success",
                                class: "font-weight-bold"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    start: "",
                                    icon: "ri-arrow-up-line",
                                    size: "15"
                                  }),
                                  createVNode("span", null, "22%")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Balance")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Commercial networks & enterprises")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="date-picker-wrapper"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "date-picker-wrapper" }, [
                                  createVNode(_component_AppDateTimePicker, {
                                    "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                    "prepend-inner-icon": "ri-calendar-line",
                                    placeholder: "Select Date",
                                    config: { position: "auto right" }
                                  }, null, 8, ["model-value"])
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Balance`);
                                  } else {
                                    return [
                                      createTextVNode("Balance")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`$74,382.72`);
                                  } else {
                                    return [
                                      createTextVNode("$74,382.72")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Balance")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("$74,382.72")
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
                              _push5(ssrRenderComponent(_sfc_main$5, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode("div", { class: "date-picker-wrapper" }, [
                                createVNode(_component_AppDateTimePicker, {
                                  "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                  "prepend-inner-icon": "ri-calendar-line",
                                  placeholder: "Select Date",
                                  config: { position: "auto right" }
                                }, null, 8, ["model-value"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Balance")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("$74,382.72")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode("div", { class: "date-picker-wrapper" }, [
                              createVNode(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, 8, ["model-value"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Balance")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("$74,382.72")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="date-picker-wrapper"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "date-picker-wrapper" }, [
                                  createVNode(_component_AppDateTimePicker, {
                                    "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                    "prepend-inner-icon": "ri-calendar-line",
                                    placeholder: "Select Date",
                                    config: { position: "auto right" }
                                  }, null, 8, ["model-value"])
                                ])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Stocks Prices`);
                                  } else {
                                    return [
                                      createTextVNode("Stocks Prices")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`$50,863.98`);
                                  } else {
                                    return [
                                      createTextVNode("$50,863.98")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Stocks Prices")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("$50,863.98")
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
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                            append: withCtx(() => [
                              createVNode("div", { class: "date-picker-wrapper" }, [
                                createVNode(_component_AppDateTimePicker, {
                                  "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                  "prepend-inner-icon": "ri-calendar-line",
                                  placeholder: "Select Date",
                                  config: { position: "auto right" }
                                }, null, 8, ["model-value"])
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Stocks Prices")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("$50,863.98")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
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
                        createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                          append: withCtx(() => [
                            createVNode("div", { class: "date-picker-wrapper" }, [
                              createVNode(_component_AppDateTimePicker, {
                                "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                                "prepend-inner-icon": "ri-calendar-line",
                                placeholder: "Select Date",
                                config: { position: "auto right" }
                              }, null, 8, ["model-value"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Stocks Prices")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("$50,863.98")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Daily Sales States" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$8, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$8)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8)
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
                    createVNode(VCard, { title: "Daily Sales States" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$8)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Statistics" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
                    createVNode(VCard, { title: "Statistics" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { title: "Mobile Comparison" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4)
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
                    createVNode(VCard, { title: "Mobile Comparison" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4)
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "Expense Ratio",
                    subtitle: "Spending on various categories"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6)
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
                    createVNode(VCard, {
                      title: "Expense Ratio",
                      subtitle: "Spending on various categories"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6)
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
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode("div", { class: "date-picker-wrapper" }, [
                            createVNode(_component_AppDateTimePicker, {
                              "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                              "prepend-inner-icon": "ri-calendar-line",
                              placeholder: "Select Date",
                              config: { position: "auto right" }
                            }, null, 8, ["model-value"])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Area Chart")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Commercial networks")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$a)
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
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode("div", { class: "date-picker-wrapper" }, [
                            createVNode(_component_AppDateTimePicker, {
                              "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                              "prepend-inner-icon": "ri-calendar-line",
                              placeholder: "Select Date",
                              config: { position: "auto right" }
                            }, null, 8, ["model-value"])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Data Science")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7)
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
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode(VBtnGroup, {
                            density: "compact",
                            color: "primary",
                            variant: "outlined",
                            divided: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Daily")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Monthly")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, null, {
                                default: withCtx(() => [
                                  createTextVNode("Yearly")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("New Technologies Data")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3)
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
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("h6", { class: "text-h6 me-3" }, " $221,267 "),
                            createVNode(VChip, {
                              label: "",
                              color: "success",
                              class: "font-weight-bold"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  icon: "ri-arrow-up-line",
                                  size: "15"
                                }),
                                createVNode("span", null, "22%")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Balance")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Commercial networks & enterprises")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9)
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode("div", { class: "date-picker-wrapper" }, [
                            createVNode(_component_AppDateTimePicker, {
                              "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                              "prepend-inner-icon": "ri-calendar-line",
                              placeholder: "Select Date",
                              config: { position: "auto right" }
                            }, null, 8, ["model-value"])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Balance")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("$74,382.72")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5)
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
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardItem, { class: "d-flex flex-wrap justify-space-between gap-4" }, {
                        append: withCtx(() => [
                          createVNode("div", { class: "date-picker-wrapper" }, [
                            createVNode(_component_AppDateTimePicker, {
                              "model-value": (/* @__PURE__ */ new Date()).toISOString(),
                              "prepend-inner-icon": "ri-calendar-line",
                              placeholder: "Select Date",
                              config: { position: "auto right" }
                            }, null, 8, ["model-value"])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Stocks Prices")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode("$50,863.98")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
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
                  createVNode(VCard, { title: "Daily Sales States" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$8)
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
                  createVNode(VCard, { title: "Statistics" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
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
                  createVNode(VCard, { title: "Mobile Comparison" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4)
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
                  createVNode(VCard, {
                    title: "Expense Ratio",
                    subtitle: "Spending on various categories"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/charts/apex-chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
