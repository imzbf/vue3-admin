<template>
  <div ref="chartRef" class="e-chart"></div>
</template>

<script lang="ts">
export default { name: 'IzEchart' };
</script>

<script setup lang="ts">
import { ref, shallowRef, PropType, watch, onMounted, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { throttle } from '@/utils';
import echarts, { ThemeLight, ThemeDark } from '@/utils/echarts';

const store = useStore(key);

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

watch(
  () => store.state.setting.theme,
  (val) => {
    // 销毁
    chart.value.dispose();
    resizeObserver.unobserve(chartRef.value as HTMLDivElement);

    if (val === 'dark') {
      chart.value = echarts.init(chartRef.value as HTMLDivElement, ThemeDark);
    } else {
      chart.value = echarts.init(chartRef.value as HTMLDivElement, ThemeLight);
    }

    initChart();
    resizeObserver.observe(chartRef.value as HTMLDivElement);
  }
);

const resizeHandler = throttle(() => {
  if (chart.value) {
    chart.value.resize();
  }
}, 16);

const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
  resizeHandler();
});

onMounted(() => {
  chart.value = echarts.init(
    chartRef.value as HTMLDivElement,
    store.state.setting.theme === 'dark' ? ThemeDark : ThemeLight
  );
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
