import { defineComponent, reactive } from 'vue';
import FeCard from '@/components/Card';
import { Table, Progress, Button } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import '../index.less';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    width: '120px',
    customRender({ text }: any) {
      return <Progress percent={text} size="small" />;
    }
  },
  {
    title: '操作',
    align: 'center',
    key: 'action',
    customRender() {
      return (
        <Button size="small" type="link">
          详情
        </Button>
      );
    }
  }
];

const data = [
  {
    key: '1',
    code: '10001',
    name: '完成vue3-admin开发',
    progress: 30
  },
  {
    key: '2',
    code: '10002',
    name: '完成开发文档编写',
    progress: 100
  },
  {
    key: '3',
    code: '10003',
    name: '完成公共组件提取',
    progress: 78
  },
  {
    key: '4',
    code: '10004',
    name: '开一个无聊的会',
    progress: 56
  }
];

// 任务
const Task = defineComponent({
  setup() {
    const tableConfig = reactive({
      data,
      columns
    });
    return () => (
      <FeCard
        border
        class="va-mb"
        title={
          <>
            <IconFont type="icon-shouye" class="title-icon" />
            我的代办
          </>
        }
      >
        <Table
          columns={tableConfig.columns}
          dataSource={tableConfig.data}
          pagination={false}
          size="middle"
          showHeader={false}
        ></Table>
      </FeCard>
    );
  }
});

export default Task;
