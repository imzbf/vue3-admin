<template>
  <va-card border class="va-mb">
    <template #title>
      <icon-font type="icon-changyongfenlei" class="title-icon" />
      最近天气
    </template>
    <e-chart style="height: 200px" :option="option" />
  </va-card>
</template>

<script setup lang="ts">
import IconFont from '@/components/IconFont/index.vue';
import VaCard from '@/components/Card/index.vue';
import EChart from '@/components/Echart/index.vue';

const option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: '最高',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: '最低',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ],
  grid: {
    x: 50,
    y: 25,
    x2: 50,
    y2: 25
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 210px);
}
</style>
