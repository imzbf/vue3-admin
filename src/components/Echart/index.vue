<template>
  <div class="e-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, shallowRef, PropType, watch, onMounted, onBeforeMount } from 'vue';
import { throttle } from '@/utils';
import echarts, { themeLight } from '@/utils/echarts';

const chart = shallowRef<any>(null);
const chartRef = ref<HTMLDivElement>();
const props = defineProps({
  option: {
    type: Object as PropType<object>,
    default() {
      return {};
    }
  }
});

const initChart = () => {
  chart.value.setOption(props.option);
};

watch(() => props.option, initChart);

const resizeHandler = throttle(() => {
  if (chart.value) {
    chart.value.resize();
  }
}, 16);

const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
  resizeHandler();
});

onMounted(() => {
  chart.value = echarts.init(chartRef.value as HTMLDivElement, themeLight);
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
.e-chart {
  width: 100%;
  height: 100%;
  z-index: 1;
}

canvas {
  pointer-events: none;
}
</style>
