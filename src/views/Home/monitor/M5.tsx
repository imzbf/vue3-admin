import { defineComponent, onMounted, ref } from 'vue';
import Card from '@/components/Card';

import * as echarts from 'echarts/core';
import { ToolboxComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([ToolboxComponent, LegendComponent, PieChart, CanvasRenderer]);

import option from './data/m5';

const M1 = defineComponent({
  setup() {
    const chartRef = ref();

    onMounted(() => {
      const myChart = echarts.init(chartRef.value);

      myChart.setOption(option);
    });

    return () => (
      <Card border class="va-mb" title="Echarts Demo">
        <div ref={chartRef} style={{ width: '100%', height: '300px' }} />
      </Card>
    );
  }
});

export default M1;
