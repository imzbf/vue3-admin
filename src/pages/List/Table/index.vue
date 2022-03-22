<template>
  <div class="page-list-table">
    <div class="view-space">
      <va-card>
        <div class="page-search">
          <el-form inline :model="params">
            <el-form-item label="标题">
              <el-input v-model="params.title" placeholder="文章标题" :clearable="true" />
            </el-form-item>
            <el-form-item label="类型">
              <el-input v-model="params.type" placeholder="文章类型" :clearable="true" />
            </el-form-item>
            <el-form-item label="编码">
              <el-input v-model="params.code" placeholder="文章编码" :clearable="true" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="handleReq">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="page-data">
          <el-table :data="table.list" border stripe>
            <el-table-column prop="id" align="center" label="ID" min-width="70" />
            <el-table-column prop="code" align="center" label="编码" width="100" />
            <el-table-column label="标题" min-width="330">
              <template #default="scope">
                <a class="ex-link" :href="'/a/' + scope.row.code" target="_blank">{{
                  scope.row.title
                }}</a>
              </template>
            </el-table-column>
            <el-table-column prop="createdTime" align="center" label="创建时间" min-width="170" />
            <el-table-column prop="hits" align="center" label="点击数" min-width="100" />
            <el-table-column prop="status" align="center" label="状态" width="90">
              <template #default="scope">
                <el-switch
                  v-model="scope.row.status"
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeStatus(scope.row)"
                />
              </template>
            </el-table-column>
            <el-table-column prop="updatedTime" align="center" label="更新时间" min-width="170" />
            <el-table-column prop="updatedTime" align="center" label="操作" width="160">
              <template #default="scope">
                <el-button size="small" plain type="primary">编辑</el-button>
                <el-button size="small" type="danger" plain>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-pagination">
          <el-pagination
            v-model:currentPage="table.params.page"
            :page-size="table.params.pageSize"
            layout="jumper, prev, pager, next, total"
            :total="table.total"
            background
          >
          </el-pagination>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Table';
export default { name };
</script>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { queryTable } from '@/apis/list/table';
import VaCard from '@/components/Card/index.vue';

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
