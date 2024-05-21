import { _ as _sfc_main$9 } from "./AppDateTimePicker-B0c_dYDs.js";
import { defineComponent, h, computed, unref, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, RadialLinearScale, Filler } from "chart.js";
import { Bar, Bubble, Line, PolarArea, Radar, Scatter } from "vue-chartjs";
import { O as hexToRgb, l as useTheme, A as VBtnGroup, V as VBtn } from "../ssr.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VCard, a as VCardItem, c as VCardTitle, d as VCardSubtitle } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
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
Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const BarChart = defineComponent({
  name: "BarChart",
  props: {
    chartId: {
      type: String,
      default: "bar-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(Bar), {
      data: props.chartData,
      options: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins
    });
  }
});
const colorVariables = (themeColors) => {
  const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors["on-surface"])},${themeColors.variables["medium-emphasis-opacity"]})`;
  const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors["on-surface"])},${themeColors.variables["disabled-opacity"]})`;
  const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables["border-color"]))},${themeColors.variables["border-opacity"]})`;
  return { labelColor: themeDisabledTextColor, borderColor: themeBorderColor, legendColor: themeSecondaryTextColor };
};
const getLatestBarChartConfig = (themeColors) => {
  const { borderColor, labelColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };
};
const getHorizontalBarChartConfig = (themeColors) => {
  const { borderColor, labelColor, legendColor } = colorVariables(themeColors);
  return {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15
        }
      }
    },
    layout: {
      padding: { top: -4 }
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          drawBorder: false,
          color: borderColor
        },
        ticks: { color: labelColor }
      },
      y: {
        grid: {
          borderColor,
          display: false,
          drawBorder: false
        },
        ticks: { color: labelColor }
      }
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: { color: legendColor }
      }
    }
  };
};
const getLineChartConfig = (themeColors) => {
  const { borderColor, labelColor, legendColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        }
      },
      y: {
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        }
      }
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: {
          padding: 25,
          boxWidth: 10,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  };
};
const getRadarChartConfig = (themeColors) => {
  const { borderColor, labelColor, legendColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: { top: -20 }
    },
    scales: {
      r: {
        ticks: {
          display: false,
          maxTicksLimit: 1,
          color: labelColor
        },
        grid: { color: borderColor },
        pointLabels: { color: labelColor },
        angleLines: { color: borderColor }
      }
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          padding: 25,
          color: legendColor
        }
      }
    }
  };
};
const getPolarChartConfig = (themeColors) => {
  const { legendColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45
      }
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  };
};
const getBubbleChartConfig = (themeColors) => {
  const { borderColor, labelColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 10,
          color: labelColor
        }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };
};
const getScatterChartConfig = (themeColors) => {
  const { borderColor, labelColor, legendColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800 },
    layout: {
      padding: { top: -20 }
    },
    scales: {
      x: {
        min: 0,
        max: 140,
        grid: {
          borderColor,
          drawTicks: false,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 10,
          color: labelColor
        }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          drawTicks: false,
          drawBorder: false,
          color: borderColor
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  };
};
const getLineAreaChartConfig = (themeColors) => {
  const { borderColor, labelColor, legendColor } = colorVariables(themeColors);
  return {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: -20 }
    },
    scales: {
      x: {
        grid: {
          borderColor,
          color: "transparent"
        },
        ticks: { color: labelColor }
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          borderColor,
          color: "transparent"
        },
        ticks: {
          stepSize: 100,
          color: labelColor
        }
      }
    },
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  };
};
const _sfc_main$8 = {
  __name: "ChartJsBarChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const chartOptions = computed(() => getLatestBarChartConfig(vuetifyTheme.current.value));
    const data = {
      labels: [
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
      ],
      datasets: [{
        maxBarThickness: 15,
        backgroundColor: props.colors.barChartYellow,
        borderColor: "transparent",
        borderRadius: {
          topRight: 15,
          topLeft: 15
        },
        data: [
          275,
          90,
          190,
          205,
          125,
          85,
          55,
          87,
          127,
          150,
          230,
          280,
          190
        ]
      }]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(BarChart), mergeProps({
        height: 400,
        "chart-data": data,
        "chart-options": unref(chartOptions)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsBarChart.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
Chart.register(Title, Tooltip, Legend, PointElement, LinearScale);
const BubbleChart = defineComponent({
  name: "BubbleChart",
  props: {
    chartId: {
      type: String,
      default: "bubble-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(Bubble), {
      data: props.chartData,
      options: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins
    });
  }
});
const _sfc_main$7 = {
  __name: "ChartJsBubbleChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getBubbleChartConfig(vuetifyTheme.current.value));
    const data = {
      animation: { duration: 1e4 },
      datasets: [
        {
          label: "Dataset 1",
          borderColor: props.colors.primary,
          backgroundColor: props.colors.primary,
          data: [
            {
              x: 20,
              y: 74,
              r: 10
            },
            {
              x: 10,
              y: 110,
              r: 5
            },
            {
              x: 30,
              y: 165,
              r: 7
            },
            {
              x: 40,
              y: 200,
              r: 20
            },
            {
              x: 90,
              y: 185,
              r: 7
            },
            {
              x: 50,
              y: 240,
              r: 7
            },
            {
              x: 60,
              y: 275,
              r: 10
            },
            {
              x: 70,
              y: 305,
              r: 5
            },
            {
              x: 80,
              y: 325,
              r: 4
            },
            {
              x: 100,
              y: 310,
              r: 5
            },
            {
              x: 110,
              y: 240,
              r: 5
            },
            {
              x: 120,
              y: 270,
              r: 7
            },
            {
              x: 130,
              y: 300,
              r: 6
            }
          ]
        },
        {
          label: "Dataset 2",
          borderColor: props.colors.yellow,
          backgroundColor: props.colors.yellow,
          data: [
            {
              x: 30,
              y: 72,
              r: 5
            },
            {
              x: 40,
              y: 110,
              r: 7
            },
            {
              x: 20,
              y: 135,
              r: 6
            },
            {
              x: 10,
              y: 160,
              r: 12
            },
            {
              x: 50,
              y: 285,
              r: 5
            },
            {
              x: 60,
              y: 235,
              r: 5
            },
            {
              x: 70,
              y: 275,
              r: 7
            },
            {
              x: 80,
              y: 290,
              r: 4
            },
            {
              x: 90,
              y: 250,
              r: 10
            },
            {
              x: 100,
              y: 220,
              r: 7
            },
            {
              x: 120,
              y: 230,
              r: 4
            },
            {
              x: 110,
              y: 320,
              r: 15
            },
            {
              x: 130,
              y: 330,
              r: 7
            }
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(BubbleChart), mergeProps({
        height: 400,
        "chart-data": data,
        "chart-options": unref(chartConfig)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsBubbleChart.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ChartJsHorizontalBarChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const chartOptions = computed(() => getHorizontalBarChartConfig(vuetifyTheme.current.value));
    const data = {
      labels: [
        "MON",
        "TUE",
        "WED ",
        "THU",
        "FRI"
      ],
      datasets: [
        {
          maxBarThickness: 15,
          label: "Market Data",
          backgroundColor: props.colors.warningShade,
          borderColor: "transparent",
          data: [
            710,
            350,
            580,
            460,
            120
          ]
        },
        {
          maxBarThickness: 15,
          backgroundColor: props.colors.horizontalBarInfo,
          label: "Personal Data",
          borderColor: "transparent",
          data: [
            430,
            590,
            510,
            240,
            360
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(BarChart), mergeProps({
        height: 375,
        "chart-data": data,
        "chart-options": unref(chartOptions)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsHorizontalBarChart.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
const LineChart = defineComponent({
  name: "LineChart",
  props: {
    chartId: {
      type: String,
      default: "line-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(Line), {
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins,
      options: props.chartOptions,
      data: props.chartData
    });
  }
});
const _sfc_main$5 = {
  __name: "ChartJsLineAreaChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const data = {
      labels: [
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
        ""
      ],
      datasets: [
        {
          fill: true,
          tension: 0,
          label: "Africa",
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointStyle: "circle",
          backgroundColor: props.colors.areaChartBlue,
          pointHoverBorderWidth: 5,
          borderColor: "transparent",
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.areaChartBlue,
          data: [
            40,
            55,
            45,
            75,
            65,
            55,
            70,
            60,
            100,
            98,
            90,
            120,
            125,
            140,
            155
          ]
        },
        {
          fill: true,
          tension: 0,
          label: "Asia",
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointStyle: "circle",
          pointHoverBorderWidth: 5,
          borderColor: "transparent",
          backgroundColor: props.colors.areaChartBlueLight,
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.areaChartBlueLight,
          data: [
            70,
            85,
            75,
            150,
            100,
            140,
            110,
            105,
            160,
            150,
            125,
            190,
            200,
            240,
            275
          ]
        },
        {
          fill: true,
          tension: 0,
          label: "Europe",
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointStyle: "circle",
          pointHoverBorderWidth: 5,
          borderColor: "transparent",
          backgroundColor: props.colors.areaChartGreyLight,
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.areaChartGreyLight,
          data: [
            240,
            195,
            160,
            215,
            185,
            215,
            185,
            200,
            250,
            210,
            195,
            250,
            235,
            300,
            315
          ]
        }
      ]
    };
    const chartConfig = computed(() => getLineAreaChartConfig(vuetifyTheme.current.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(LineChart), mergeProps({
        "chart-options": unref(chartConfig),
        height: 400,
        "chart-data": data
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsLineAreaChart.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ChartJsLineChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const data = {
      labels: [
        0,
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140
      ],
      datasets: [
        {
          fill: false,
          tension: 0.5,
          pointRadius: 1,
          label: "Europe",
          pointHoverRadius: 5,
          pointStyle: "circle",
          borderColor: props.colors.primary,
          backgroundColor: props.colors.primary,
          pointHoverBorderWidth: 5,
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.primary,
          data: [
            80,
            150,
            180,
            270,
            210,
            160,
            160,
            202,
            265,
            210,
            270,
            255,
            290,
            360,
            375
          ]
        },
        {
          fill: false,
          tension: 0.5,
          label: "Asia",
          pointRadius: 1,
          pointHoverRadius: 5,
          pointStyle: "circle",
          borderColor: props.colors.warningShade,
          backgroundColor: props.colors.warningShade,
          pointHoverBorderWidth: 5,
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.warningShade,
          data: [
            80,
            125,
            105,
            130,
            215,
            195,
            140,
            160,
            230,
            300,
            220,
            170,
            210,
            200,
            280
          ]
        },
        {
          fill: false,
          tension: 0.5,
          pointRadius: 1,
          label: "Africa",
          pointHoverRadius: 5,
          pointStyle: "circle",
          borderColor: props.colors.yellow,
          backgroundColor: props.colors.yellow,
          pointHoverBorderWidth: 5,
          pointHoverBorderColor: props.colors.white,
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: props.colors.yellow,
          data: [
            80,
            99,
            82,
            90,
            115,
            115,
            74,
            75,
            130,
            155,
            125,
            90,
            140,
            130,
            180
          ]
        }
      ]
    };
    const chartConfig = computed(() => getLineChartConfig(vuetifyTheme.current.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(LineChart), mergeProps({
        "chart-options": unref(chartConfig),
        height: 400,
        "chart-data": data
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsLineChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
const PolarAreaChart = defineComponent({
  name: "PolarAreaChart",
  props: {
    chartId: {
      type: String,
      default: "line-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(PolarArea), {
      data: props.chartData,
      options: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins
    });
  }
});
const _sfc_main$3 = {
  __name: "ChartJsPolarAreaChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getPolarChartConfig(vuetifyTheme.current.value));
    const data = {
      labels: [
        "Africa",
        "Asia",
        "Europe",
        "America",
        "Antarctica",
        "Australia"
      ],
      datasets: [{
        borderWidth: 0,
        label: "Population (millions)",
        data: [
          19,
          17.5,
          15,
          13.5,
          11,
          9
        ],
        backgroundColor: [
          props.colors.primary,
          props.colors.yellow,
          props.colors.polarChartWarning,
          props.colors.polarChartInfo,
          props.colors.polarChartGrey,
          props.colors.polarChartGreen
        ]
      }]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PolarAreaChart), mergeProps({
        height: 400,
        "chart-data": data,
        "chart-options": unref(chartConfig)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsPolarAreaChart.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
Chart.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Filler);
const RadarChart = defineComponent({
  name: "RadarChart",
  props: {
    chartId: {
      type: String,
      default: "radar-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(Radar), {
      data: props.chartData,
      options: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins
    });
  }
});
const _sfc_main$2 = {
  __name: "ChartJsRadarChart",
  __ssrInlineRender: true,
  setup(__props) {
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getRadarChartConfig(vuetifyTheme.current.value));
    const chartData = {
      labels: [
        "STA",
        "STR",
        "AGI",
        "VIT",
        "CHA",
        "INT"
      ],
      datasets: [
        {
          fill: true,
          label: "Donté Panlin",
          borderColor: "transparent",
          backgroundColor: "rgba(255,161,161, 0.9)",
          data: [
            25,
            59,
            90,
            81,
            60,
            82
          ],
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent"
        },
        {
          fill: true,
          label: "Mireska Sunbreeze",
          borderColor: "transparent",
          backgroundColor: "rgba(155,136,250, 0.9)",
          data: [
            40,
            100,
            40,
            90,
            40,
            90
          ],
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent"
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadarChart), mergeProps({
        height: 400,
        "chart-data": chartData,
        "chart-options": unref(chartConfig)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsRadarChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
Chart.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);
const ScatterChart = defineComponent({
  name: "ScatterChart",
  props: {
    chartId: {
      type: String,
      default: "scatter-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => h(h(Scatter), {
      data: props.chartData,
      options: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins
    });
  }
});
const _sfc_main$1 = {
  __name: "ChartJsScatterChart",
  __ssrInlineRender: true,
  props: {
    colors: {
      type: null,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const vuetifyTheme = useTheme();
    const chartConfig = computed(() => getScatterChartConfig(vuetifyTheme.current.value));
    const data = {
      datasets: [
        {
          pointRadius: 5,
          label: "iPhone",
          pointBorderWidth: 2,
          backgroundColor: props.colors.primary,
          pointHoverBorderWidth: 2,
          borderColor: "transparent",
          data: [
            {
              x: 72,
              y: 225
            },
            {
              x: 81,
              y: 270
            },
            {
              x: 90,
              y: 230
            },
            {
              x: 103,
              y: 305
            },
            {
              x: 103,
              y: 245
            },
            {
              x: 108,
              y: 275
            },
            {
              x: 110,
              y: 290
            },
            {
              x: 111,
              y: 315
            },
            {
              x: 109,
              y: 350
            },
            {
              x: 116,
              y: 340
            },
            {
              x: 113,
              y: 260
            },
            {
              x: 117,
              y: 275
            },
            {
              x: 117,
              y: 295
            },
            {
              x: 126,
              y: 280
            },
            {
              x: 127,
              y: 340
            },
            {
              x: 133,
              y: 330
            }
          ]
        },
        {
          pointRadius: 5,
          pointBorderWidth: 2,
          label: "Samsung Note",
          backgroundColor: props.colors.scatterChartWarning,
          pointHoverBorderWidth: 2,
          borderColor: "transparent",
          data: [
            {
              x: 13,
              y: 95
            },
            {
              x: 22,
              y: 105
            },
            {
              x: 17,
              y: 115
            },
            {
              x: 19,
              y: 130
            },
            {
              x: 21,
              y: 125
            },
            {
              x: 35,
              y: 125
            },
            {
              x: 13,
              y: 155
            },
            {
              x: 21,
              y: 165
            },
            {
              x: 25,
              y: 155
            },
            {
              x: 18,
              y: 190
            },
            {
              x: 26,
              y: 180
            },
            {
              x: 43,
              y: 180
            },
            {
              x: 53,
              y: 202
            },
            {
              x: 61,
              y: 165
            },
            {
              x: 67,
              y: 225
            }
          ]
        },
        {
          pointRadius: 5,
          label: "OnePlus",
          pointBorderWidth: 2,
          backgroundColor: props.colors.scatterChartGreen,
          pointHoverBorderWidth: 2,
          borderColor: "transparent",
          data: [
            {
              x: 70,
              y: 195
            },
            {
              x: 72,
              y: 270
            },
            {
              x: 98,
              y: 255
            },
            {
              x: 100,
              y: 215
            },
            {
              x: 87,
              y: 240
            },
            {
              x: 94,
              y: 280
            },
            {
              x: 99,
              y: 300
            },
            {
              x: 102,
              y: 290
            },
            {
              x: 110,
              y: 275
            },
            {
              x: 111,
              y: 250
            },
            {
              x: 94,
              y: 280
            },
            {
              x: 92,
              y: 340
            },
            {
              x: 100,
              y: 335
            },
            {
              x: 108,
              y: 330
            }
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScatterChart), mergeProps({
        height: 380,
        "chart-data": data,
        "chart-options": unref(chartConfig)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/charts/chartjs/ChartJsScatterChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "chartjs",
  __ssrInlineRender: true,
  setup(__props) {
    const chartJsCustomColors = {
      white: "#fff",
      yellow: "#ffe802",
      primary: "#836af9",
      areaChartBlue: "#2c9aff",
      barChartYellow: "#ffcf5c",
      polarChartGrey: "#4f5d70",
      polarChartInfo: "#299aff",
      lineChartYellow: "#d4e157",
      polarChartGreen: "#28dac6",
      lineChartPrimary: "#9e69fd",
      lineChartWarning: "#ff9800",
      horizontalBarInfo: "#26c6da",
      polarChartWarning: "#ff8131",
      scatterChartGreen: "#28c76f",
      warningShade: "#ffbd1f",
      areaChartBlueLight: "#84d0ff",
      areaChartGreyLight: "#edf1f4",
      scatterChartWarning: "#ff9f43"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppDateTimePicker = _sfc_main$9;
      _push(ssrRenderComponent(VRow, mergeProps({ id: "chartjs-wrapper" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    title: "Statistics",
                    subtitle: "Commercial networks and enterprises"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$4, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$4, { colors: chartJsCustomColors })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, { colors: chartJsCustomColors })
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
                      title: "Statistics",
                      subtitle: "Commercial networks and enterprises"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, { colors: chartJsCustomColors })
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
                  _push3(ssrRenderComponent(VCard, { title: "Radar Chart" }, {
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
                    createVNode(VCard, { title: "Radar Chart" }, {
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
                  _push3(ssrRenderComponent(VCard, { title: "Average Skills" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3, { colors: chartJsCustomColors })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, { colors: chartJsCustomColors })
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
                    createVNode(VCard, { title: "Average Skills" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, { colors: chartJsCustomColors })
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
                  _push3(ssrRenderComponent(VCard, { title: "Bubble Chart" }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-body-2"${_scopeId3}>$ 100,000</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-body-2" }, "$ 100,000")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7, { colors: chartJsCustomColors })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7, { colors: chartJsCustomColors })
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
                    createVNode(VCard, { title: "Bubble Chart" }, {
                      append: withCtx(() => [
                        createVNode("span", { class: "text-body-2" }, "$ 100,000")
                      ]),
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7, { colors: chartJsCustomColors })
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
                                color: "primary",
                                variant: "outlined",
                                density: "compact",
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
                                  color: "primary",
                                  variant: "outlined",
                                  density: "compact",
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
                                    _push6(`New Product Data`);
                                  } else {
                                    return [
                                      createTextVNode("New Product Data")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("New Product Data")
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
                              _push5(ssrRenderComponent(_sfc_main$1, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1, { colors: chartJsCustomColors })
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
                                color: "primary",
                                variant: "outlined",
                                density: "compact",
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
                                  createTextVNode("New Product Data")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, { colors: chartJsCustomColors })
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
                              color: "primary",
                              variant: "outlined",
                              density: "compact",
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
                                createTextVNode("New Product Data")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1, { colors: chartJsCustomColors })
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
                                    _push6(` Data Science `);
                                  } else {
                                    return [
                                      createTextVNode(" Data Science ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Data Science ")
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
                              _push5(ssrRenderComponent(_sfc_main$5, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5, { colors: chartJsCustomColors })
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
                                  createTextVNode(" Data Science ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, { colors: chartJsCustomColors })
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
                                createTextVNode(" Data Science ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, { colors: chartJsCustomColors })
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
                                    _push6(`Latest Statistics`);
                                  } else {
                                    return [
                                      createTextVNode("Latest Statistics")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Latest Statistics")
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
                              _push5(ssrRenderComponent(_sfc_main$8, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$8, { colors: chartJsCustomColors })
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
                                  createTextVNode("Latest Statistics")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$8, { colors: chartJsCustomColors })
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
                                createTextVNode("Latest Statistics")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$8, { colors: chartJsCustomColors })
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
                                    _push6(`$74,123`);
                                  } else {
                                    return [
                                      createTextVNode("$74,123")
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
                                    createTextVNode("$74,123")
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
                              _push5(ssrRenderComponent(_sfc_main$6, { colors: chartJsCustomColors }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, { colors: chartJsCustomColors })
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
                                  createTextVNode("$74,123")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, { colors: chartJsCustomColors })
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
                                createTextVNode("$74,123")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, { colors: chartJsCustomColors })
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
                  createVNode(VCard, {
                    title: "Statistics",
                    subtitle: "Commercial networks and enterprises"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, { colors: chartJsCustomColors })
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
                  createVNode(VCard, { title: "Radar Chart" }, {
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
                  createVNode(VCard, { title: "Average Skills" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, { colors: chartJsCustomColors })
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
                  createVNode(VCard, { title: "Bubble Chart" }, {
                    append: withCtx(() => [
                      createVNode("span", { class: "text-body-2" }, "$ 100,000")
                    ]),
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, { colors: chartJsCustomColors })
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
                            color: "primary",
                            variant: "outlined",
                            density: "compact",
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
                              createTextVNode("New Product Data")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, { colors: chartJsCustomColors })
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
                              createTextVNode(" Data Science ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, { colors: chartJsCustomColors })
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
                              createTextVNode("Latest Statistics")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$8, { colors: chartJsCustomColors })
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
                              createTextVNode("$74,123")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, { colors: chartJsCustomColors })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/charts/chartjs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
