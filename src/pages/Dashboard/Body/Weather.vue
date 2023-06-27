<template>
  <VaCard border class="va-mb">
    <template #title>
      <IconFont type="icon-changyongfenlei" class="title-icon" />
      {{ $t('最近天气') }}
    </template>
    <EChart style="height: 200px" :option="option" />
  </VaCard>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { t } from 'i18next';
import { key } from '@/store';
import IconFont from '@/components/IconFont/index.vue';
import VaCard from '@/components/Card/index.vue';
import EChart from '@/components/Echart/index.vue';

const store = useStore(key);

const translate = () => {
  return {
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
      data: [t('周一'), t('周二'), t('周三'), t('周四'), t('周五'), t('周六'), t('周天')]
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: t('最高'),
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
        name: t('最低'),
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: t('本周最低'), value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          label: {
            color: 'inherit'
          },
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
                name: t('最高') + t('点')
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
};

const option = ref(translate());

watch(
  () => store.state.setting.locale,
  () => {
    option.value = translate();
  }
);
</script>

<script lang="ts">
export default {
  name: 'IzDashboardWeather'
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 210px);
}
</style>
