import { defineComponent, onMounted, ref } from 'vue';
import Card from '@/components/Card';

import * as echarts from 'echarts/core';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent
} from 'echarts/components';
import { CandlestickChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
  CandlestickChart,
  LineChart,
  CanvasRenderer
]);

import option from './data/m1';

const M1 = defineComponent({
  setup() {
    const chartRef = ref();

    onMounted(() => {
      const myChart = echarts.init(chartRef.value);

      myChart.setOption(option);
    });

    return () => (
      <Card class="va-mb" title="Echarts Demo">
        <div ref={chartRef} style={{ width: '100%', height: '600px' }} />
      </Card>
    );
  }
});

export default M1;
