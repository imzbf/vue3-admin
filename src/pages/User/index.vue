<template>
  <div class="page-user">
    <div class="view-space">
      <ElRow :gutter="20">
        <ElCol :span="8">
          <VaCard>
            <div class="base-info">
              <div class="base-info-left">
                <ElAvatar :size="90" :src="DEMO_USER_HEAD2" />
              </div>
              <div class="base-info-right">
                <div class="nick-name">{{ state.info.nickname }}</div>
                <div>
                  {{ state.info.description }}
                </div>
              </div>
            </div>
            <ElDivider />
            <VaTitle :level="5">{{ $t('简介') }}</VaTitle>
            <ElDescriptions>
              <ElDescriptionsItem :label="$t('性别')">
                <ElTag size="small" type="warning">{{ state.info.sex }}</ElTag>
              </ElDescriptionsItem>
              <ElDescriptionsItem :label="$t('职业')">
                {{ state.info.profession }}
              </ElDescriptionsItem>
            </ElDescriptions>

            <ElDivider />
            <VaTitle :level="5">{{ $t('标签') }}</VaTitle>
            <div v-for="(row, i) of state.tag" :key="`row-${i}`" class="tag-row">
              <ElTag v-for="(item, j) of row" :key="item" :type="state.tagTypes[(i + j) % 5]">{{
                item
              }}</ElTag>
            </div>
            <ElDivider />
            <VaTitle :level="5">{{ $t('团队') }}</VaTitle>
            <ElDescriptions class="team">
              <ElDescriptionsItem v-for="item of state.team" :key="`team-item-${item}`">
                <template #label>
                  <ElIcon><OfficeBuilding /></ElIcon>
                </template>
                {{ item }}
              </ElDescriptionsItem>
            </ElDescriptions>
          </VaCard>
        </ElCol>
        <ElCol :span="16">
          <VaCard>
            <VaTitle :level="4">{{ $t('设备登录历史') }}</VaTitle>
            <div class="page-data">
              <ElTable :data="state.deviceHistory" stripe>
                <ElTableColumn type="index" :label="$t('编号')" width="80" />
                <ElTableColumn prop="deviceOS" :label="$t('系统类型')" />
                <ElTableColumn prop="ip" label="IP" />
                <ElTableColumn prop="lastLoginTime" :label="$t('上次登录时间')" :minWidth="160" />
                <ElTableColumn prop="location" :label="$t('定位')" />
                <ElTableColumn label="操作" width="120">
                  <template #default="scope">
                    <ElButton size="small" type="danger" @click="() => loginOut(scope.row)">{{
                      $t('删除')
                    }}</ElButton>
                  </template>
                </ElTableColumn>
              </ElTable>
            </div>
            <VaTitle :level="4">{{ $t('操作历史') }}</VaTitle>
            <div class="page-data">
              <ElTable :data="state.logs">
                <ElTableColumn type="index" :label="$t('编号')" width="80" />
                <ElTableColumn prop="deviceOS" :label="$t('系统类型')" />
                <ElTableColumn prop="ip" label="IP" />
                <ElTableColumn prop="createdTime" :label="$t('创建时间')" :minWidth="160" />
                <ElTableColumn prop="content" :label="$t('详情')" :minWidth="230" />
              </ElTable>
            </div>
          </VaCard>
        </ElCol>
      </ElRow>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IzUserInfo'
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { OfficeBuilding } from '@element-plus/icons-vue';
import VaCard from '@/components/Card/index.vue';
import VaTitle from '@/components/Title/index.vue';
import { DEMO_USER_HEAD2 } from '@/config/urls';

interface Device {
  id: number;
  deviceOS: string;
  ip: string;
  lastLoginTime: string;
  location: string;
}

interface Log {
  id: number;
  deviceOS: string;
  ip: string;
  createdTime: string;
  type: 'add' | 'delete' | 'update' | 'query';
  content: string;
}

const state = reactive<{
  info: any;
  tag: any;
  deviceHistory: Array<Device>;
  logs: Array<Log>;
  team: string[];
  tagTypes: Array<'' | 'info' | 'success' | 'warning' | 'danger'>;
}>({
  info: {
    nickname: '之间',
    description:
      '重庆土著人，毕业于重庆理工大学软件工程系，95后，Web前端开发，2006美国《时代周刊》年度风云人物。',
    sex: '外星人',
    profession: '前端开发工程师',
    department: 'XX技术部'
  },
  tag: [
    ['React', 'Vue', 'Sass', 'NodeJS', 'WeApp', 'Java'],
    ['羽毛球', '跑步', 'LOL', '唱歌', '出行'],
    ['柯南', '星际穿越', '超神学院', '哈利波特']
  ],
  team: [
    '技术有限组',
    '挖山小组',
    '掘金小组',
    '阳光青年组',
    '魔鬼加班组',
    '外包团队',
    '濒临猝死队'
  ],
  deviceHistory: [
    {
      id: 1,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      lastLoginTime: '2022-3-23 17:31:41',
      location: '中国 台湾'
    },
    {
      id: 2,
      deviceOS: 'MacOS',
      ip: '10.0.0.2',
      lastLoginTime: '2022-3-23 17:31:48',
      location: '中国 重庆'
    }
  ],
  logs: [
    {
      id: 1,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      createdTime: '2022-3-23 17:31:41',
      type: 'update',
      content: '编辑保存了文章《JS捕获的AZERTY键盘事件分析》'
    },
    {
      id: 2,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      createdTime: '2022-3-23 17:31:41',
      type: 'delete',
      content: '删除了文章标签"Web"'
    },
    {
      id: 3,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      createdTime: '2022-3-23 17:31:41',
      type: 'add',
      content: '新增了文章《Chrome插件开发》'
    },
    {
      id: 4,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      createdTime: '2022-3-23 17:31:41',
      type: 'delete',
      content: '删除了文章标签"Web"'
    },
    {
      id: 5,
      deviceOS: 'Windows 11',
      ip: '10.0.0.1',
      createdTime: '2022-3-23 17:31:41',
      type: 'query',
      content: '查询了毛利小五郎的个人信息'
    }
  ],
  tagTypes: ['success', 'info', 'warning', 'danger', '']
});

const loginOut = (row: Device) => {
  ElMessage({
    message: '已取消该设备登录！',
    type: 'success'
  });
};
</script>

<style lang="scss">
.page-user {
  .base-info {
    display: flex;

    &-left {
      padding-right: 14px;

      .el-avatar {
        border: 2px solid rgb(231, 231, 231);
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .nick-name {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
  }

  .team {
    .el-descriptions__label {
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  .tag-row {
    margin-bottom: 8px;
  }

  .query {
    --el-table-tr-bg-color: var(--el-color-info-light-7);
  }

  .add {
    --el-table-tr-bg-color: var(--el-color-success-light-7);
  }

  .update {
    --el-table-tr-bg-color: var(--el-color-warning-light-7);
  }

  .delete {
    --el-table-tr-bg-color: var(--el-color-danger-light-7);
  }
}
</style>
