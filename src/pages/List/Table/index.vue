<template>
  <div class="page-list-table">
    <div class="view-space">
      <Card>
        <div class="page-search">
          <ElForm inline :model="params" size="small">
            <ElFormItem label="标题">
              <el-input v-model="params.title" placeholder="文章标题" :clearable="true" />
            </ElFormItem>
            <ElFormItem label="类型">
              <el-input v-model="params.type" placeholder="文章类型" :clearable="true" />
            </ElFormItem>
            <ElFormItem label="编码">
              <el-input v-model="params.code" placeholder="文章编码" :clearable="true" />
            </ElFormItem>

            <ElFormItem>
              <el-button type="primary" @click="handleReq">查询</el-button>
            </ElFormItem>
          </ElForm>
        </div>
        <div class="page-data">
          <ElTable :data="table.list" border stripe>
            <ElTableColumn prop="id" align="center" label="ID" min-width="70" />
            <ElTableColumn prop="code" align="center" label="编码" width="100" />
            <ElTableColumn label="标题" min-width="330">
              <template #default="scope">
                <a class="ex-link" :href="'/a/' + scope.row.code" target="_blank">{{
                  scope.row.title
                }}</a>
              </template>
            </ElTableColumn>
            <ElTableColumn prop="createdTime" align="center" label="创建时间" min-width="170" />
            <ElTableColumn prop="hits" align="center" label="点击数" min-width="100" />
            <ElTableColumn prop="status" align="center" label="状态" width="90">
              <template #default="scope">
                <ElSwitch
                  v-model="scope.row.status"
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeStatus(scope.row)"
                />
              </template>
            </ElTableColumn>
            <ElTableColumn prop="updatedTime" align="center" label="更新时间" min-width="170" />
            <ElTableColumn prop="updatedTime" align="center" label="操作" width="160">
              <template #default="scope">
                <ElButton size="mini" plain type="primary">编辑</ElButton>
                <ElButton size="mini" type="danger" plain>删除</ElButton>
              </template>
            </ElTableColumn>
          </ElTable>
        </div>
        <div class="page-pagination">
          <ElPagination
            v-model:currentPage="table.params.page"
            :page-size="table.params.pageSize"
            layout="jumper, prev, pager, next, total"
            :total="table.total"
            background
          >
          </ElPagination>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Table';
export default { name };
</script>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { queryTable } from '@/apis/list/table';
import Card from '@/components/Card/index.vue';

const params = reactive({
  title: '',
  type: '',
  code: '',
  tags: ''
});

const table = reactive({
  list: [],
  params: {
    page: 1,
    pageSize: 10
  },
  total: 0
});

onMounted(() => {
  queryTable({
    ...params,
    ...table.params
  })
    .then((res) => {
      if (res.code === 0) {
        table.list = res.data.list;
        table.total = res.data.total;
      } else throw res;
    })
    .catch((error) => {
      console.error(error);
    });
});

const handleReq = () => {};
const changeStatus = (row: any) => {
  console.log(row);
};
</script>

<style lang="scss"></style>
