<template>
  <div class="page-user">
    <div class="view-space">
      <el-row :gutter="20">
        <el-col :span="8">
          <va-card>
            <div class="base-info">
              <div class="base-info-left">
                <el-avatar :size="90" :src="DEMO_USER_HEAD2" />
              </div>
              <div class="base-info-right">
                <div class="nick-name">{{ state.info.nickname }}</div>
                <div>
                  {{ state.info.description }}
                </div>
              </div>
            </div>
            <el-divider />
            <va-title :level="5">简介</va-title>
            <el-descriptions>
              <el-descriptions-item label="性别">
                <el-tag size="small" type="warning">{{ state.info.sex }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="职业">
                {{ state.info.profession }}
              </el-descriptions-item>
              <el-descriptions-item label="部门">{{ state.info.department }}</el-descriptions-item>
            </el-descriptions>

            <el-divider />
            <va-title :level="5">标记</va-title>
            <div v-for="(row, i) of state.tag" :key="`row-${i}`" class="tag-row">
              <el-tag v-for="(item, j) of row" :type="state.tagTypes[(i + j) % 5]" :key="item">{{
                item
              }}</el-tag>
            </div>
            <el-divider />
            <va-title :level="5">团队</va-title>
            <el-descriptions class="team">
              <el-descriptions-item v-for="item of state.team" :key="`team-item-${item}`">
                <template #label>
                  <el-icon><office-building /></el-icon>
                </template>
                {{ item }}
              </el-descriptions-item>
            </el-descriptions>
          </va-card>
        </el-col>
        <el-col :span="16">
          <va-card>
            <va-title :level="4">设备登录历史</va-title>
            <div class="page-data">
              <el-table :data="state.deviceHistory" stripe>
                <el-table-column type="index" label="编号" width="80" />
                <el-table-column prop="deviceOS" label="系统类型" />
                <el-table-column prop="ip" label="IP" />
                <el-table-column prop="lastLoginTime" label="上次登录时间" :min-width="160" />
                <el-table-column prop="location" label="定位" />
                <el-table-column label="操作" width="120">
                  <template #default="scope">
                    <el-button size="small" @click="loginOut(scope.row)" type="danger"
                      >删除设备</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <va-title :level="4">系统操作历史</va-title>
            <div class="page-data">
              <el-table :data="state.logs">
                <el-table-column type="index" label="编号" width="80" />
                <el-table-column prop="deviceOS" label="系统类型" />
                <el-table-column prop="ip" label="IP" />
                <el-table-column prop="createdTime" label="时间" :min-width="160" />
                <el-table-column prop="content" label="操作内容" :min-width="230" />
              </el-table>
            </div>
          </va-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

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
    ['React', 'Vue', 'Sass', 'NodeJS', 'Angular', 'WebGL', 'WeApp', 'Java'],
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
