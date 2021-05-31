import { defineComponent, onMounted, ref } from 'vue';
import Card from '@/components/Card';

import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer
]);

import option from './data/m4';

const M1 = defineComponent({
  setup() {
    const chartRef = ref();

    onMounted(() => {
      const myChart = echarts.init(chartRef.value);

      myChart.setOption(option);
    });

    return () => (
      <Card class="va-mb" title="Echarts Demo">
        <div ref={chartRef} style={{ width: '100%', height: '200px' }} />
      </Card>
    );
  }
});

export default M1;
