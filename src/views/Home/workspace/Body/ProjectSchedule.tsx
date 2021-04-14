import { defineComponent, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import FeCard from '@/components/Card';
import { Table, Progress, Button } from 'ant-design-vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { ICON_FONT } from '@/config/urls';

import styles from '../index.module.scss';

const MyIcon = createFromIconfontCN({
  scriptUrl: ICON_FONT // 在 iconfont.cn 上生成
});

const columns = [
  {
    title: '编号',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '负责人',
    dataIndex: 'ower',
    key: 'ower'
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
    title: 'git',
    dataIndex: 'git',
    key: 'git',
    with: '',
    customRender({ text }: any) {
      return (
        <a href={text} target="_blank" rel="noopener noreferrer">
          前往
        </a>
      );
    }
  },
  {
    title: '操作',
    key: 'action',
    customRender({ record }: any) {
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
    name: 'vue3-admin',
    progress: 30,
    ower: '周周',
    git: 'https://github.com/zhoubangfu/vue3-admin'
  },
  {
    key: '2',
    code: '10002',
    name: 'chrome-toolbox',
    progress: 100,
    ower: '周周',
    git: 'https://github.com/zhoubangfu/chrome-toolbox'
  },
  {
    key: '3',
    code: '10003',
    name: '视频下载器',
    progress: 78,
    ower: '张三',
    git: 'https://www.google.com'
  },
  {
    key: '4',
    code: '10004',
    name: '视频下载器',
    progress: 56,
    ower: '张三',
    git: 'https://www.google.com'
  },
  {
    key: '5',
    code: '10005',
    name: '视频下载器',
    progress: 23,
    ower: '张三',
    git: 'https://www.google.com'
  }
];

// 进行中的
const ProjectSchedule = defineComponent({
  setup() {
    const tableConfig = reactive({
      data,
      columns
    });
    return () => (
      <FeCard
        title={
          <>
            <MyIcon type="icon-shouye" class={styles['title-icon']} />
            项目进展
          </>
        }
        func={<RouterLink to="/project">全部项目</RouterLink>}
      >
        <Table
          columns={tableConfig.columns}
          dataSource={tableConfig.data}
          pagination={false}
        ></Table>
      </FeCard>
    );
  }
});

export default ProjectSchedule;
