<template>
  <div class="line-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { debounce } from '@/utils';
import echarts, { themeLight } from '@/utils/echarts';

import { ref, shallowRef, PropType, watch, onMounted, onBeforeMount } from 'vue';

const chart = shallowRef<any>(null);
const chartRef = ref<HTMLDivElement>();
const props = defineProps({
  total: {
    type: Array as PropType<Array<any>>,
    default() {
      return [];
    }
  },
  disTotal: {
    type: Array as PropType<Array<any>>,
    default() {
      return [];
    }
  }
});

watch(
  () => props.disTotal,
  () => {
    initChart();
  }
);

const initChart = () => {
  chart.value = echarts.init(chartRef.value as HTMLDivElement, themeLight);

  chart.value.setOption({
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: props.total.map(function (item) {
        return item[0];
      })
    },
    yAxis: {
      splitLine: {
        show: false
      }
    },
    // toolbox: {
    //   left: 'center',
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: 'none'
    //     },
    //     restore: {},
    //     saveAsImage: {}
    //   }
    // },
    dataZoom: [
      {
        startValue: '2014-06-01'
      },
      {
        type: 'inside'
      }
    ],
    visualMap: {
      top: 10,
      right: 10,
      outOfRange: {
        color: '#999'
      }
    },
    series: [
      {
        name: '当天总流量',
        type: 'line',
        data: props.total.map(function (item) {
          return item[1];
        }),
        markLine: {
          silent: true,
          data: [
            {
              yAxis: 30
            },
            {
              yAxis: 50
            },
            {
              yAxis: 100
            },
            {
              yAxis: 200
            },
            {
              yAxis: 300
            }
          ]
        }
      },
      {
        name: '当天总访客量',
        type: 'line',
        data: props.disTotal.map(function (item) {
          return item[1];
        })
      }
    ],
    grid: {
      x: 50,
      y: 25,
      x2: 100,
      y2: 35
    }
  });
};

const resizeHandler = debounce(() => {
  if (chart.value) {
    chart.value.resize();
  }
});

const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
  resizeHandler();
});

onMounted(() => {
  initChart();

  resizeObserver.observe(chartRef.value as HTMLDivElement);
});

onBeforeMount(() => {
  if (!chart.value) {
    return;
  }
  chart.value.dispose();
  chart.value = null;

  resizeObserver.unobserve(chartRef.value as HTMLDivElement);
});
</script>

<style>
.line-chart {
  width: 100%;
  height: 400px;
  z-index: 1;
}

canvas {
  pointer-events: none;
}
</style>
