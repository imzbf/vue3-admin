import { defineComponent, onMounted, ref } from 'vue';
import Card from '@/components/Card';

import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);

import option from './data/m2';

const M1 = defineComponent({
  setup() {
    const chartRef = ref();

    onMounted(() => {
      const myChart = echarts.init(chartRef.value);

      myChart.setOption(option);

      setInterval(function () {
        option.series[0].data[0].value = Number((Math.random() * 100).toFixed(2));
        option.series[0].data[1].value = Number((Math.random() * 100).toFixed(2));
        option.series[0].data[2].value = Number((Math.random() * 100).toFixed(2));
        myChart.setOption(option, true);
      }, 5000);
    });

    return () => (
      <Card class="va-mb" title="Echarts Demo">
        <div ref={chartRef} style={{ width: '100%', height: '280px' }} />
      </Card>
    );
  }
});

export default M1;
