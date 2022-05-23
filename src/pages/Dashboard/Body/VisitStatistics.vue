<template>
  <va-card border class="va-mb">
    <template #title>
      <icon-font type="icon-changyongfenlei" class="title-icon" />
      访问记录
    </template>
    <e-chart style="height: 400px" :option="option" />
  </va-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import IconFont from '@/components/IconFont/index.vue';
import VaCard from '@/components/Card/index.vue';
import EChart from '@/components/Echart/index.vue';

const state = reactive({
  total: [
    ['2022-02-22', 233],
    ['2022-02-23', 205],
    ['2022-02-24', 152],
    ['2022-02-25', 150],
    ['2022-02-26', 116],
    ['2022-02-27', 116],
    ['2022-02-28', 135],
    ['2022-03-01', 221],
    ['2022-03-02', 100],
    ['2022-03-03', 212],
    ['2022-03-04', 238],
    ['2022-03-05', 103],
    ['2022-03-06', 114],
    ['2022-03-07', 82],
    ['2022-03-08', 134],
    ['2022-03-09', 196],
    ['2022-03-10', 133],
    ['2022-03-11', 118],
    ['2022-03-12', 112],
    ['2022-03-13', 165],
    ['2022-03-14', 131],
    ['2022-03-15', 162],
    ['2022-03-16', 116],
    ['2022-03-17', 171],
    ['2022-03-18', 160],
    ['2022-03-19', 170],
    ['2022-03-20', 165],
    ['2022-03-21', 155],
    ['2022-03-22', 172],
    ['2022-03-23', 111],
    ['2022-03-24', 69]
  ],
  code: 0,
  disTotal: [
    ['2022-02-22', 60],
    ['2022-02-23', 55],
    ['2022-02-24', 74],
    ['2022-02-25', 74],
    ['2022-02-26', 59],
    ['2022-02-27', 53],
    ['2022-02-28', 68],
    ['2022-03-01', 74],
    ['2022-03-02', 65],
    ['2022-03-03', 89],
    ['2022-03-04', 79],
    ['2022-03-05', 50],
    ['2022-03-06', 55],
    ['2022-03-07', 51],
    ['2022-03-08', 63],
    ['2022-03-09', 111],
    ['2022-03-10', 77],
    ['2022-03-11', 68],
    ['2022-03-12', 66],
    ['2022-03-13', 117],
    ['2022-03-14', 73],
    ['2022-03-15', 85],
    ['2022-03-16', 67],
    ['2022-03-17', 81],
    ['2022-03-18', 99],
    ['2022-03-19', 83],
    ['2022-03-20', 62],
    ['2022-03-21', 78],
    ['2022-03-22', 79],
    ['2022-03-23', 57],
    ['2022-03-24', 41]
  ]
});

const option = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: state.total.map(function (item) {
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
      data: state.total.map(function (item) {
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
      data: state.disTotal.map(function (item) {
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
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 210px);
}
</style>
