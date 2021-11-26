import { defineComponent, reactive } from 'vue';
import FeCard from '@/components/Card';
import { List, Avatar } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import '../index.less';

interface DataItem {
  title: JSX.Element;
  time: string;
  avatar: string;
}

const VITE_BASE = import.meta.env.VITE_BASE;

const data: DataItem[] = [
  {
    title: (
      <>
        <b>
          <a href="#">毛利小五郎</a>
        </b>
        &nbsp;创建了文章&nbsp;
        <b>
          <a href="#">前端学习笔记</a>
        </b>
      </>
    ),
    time: '8小时前',
    avatar: `${VITE_BASE}/static/img/boy01.jpg`
  },
  {
    title: (
      <>
        <b>
          <a href="#">江户川柯南</a>
        </b>
        &nbsp;创建了文章&nbsp;
        <b>
          <a href="#">React与Vue的状态更新对比</a>
        </b>
      </>
    ),
    time: '23小时前',
    avatar: `${VITE_BASE}/static/img/boy01.jpg`
  },
  {
    title: (
      <>
        <b>
          <a href="#">工藤优作</a>
        </b>
        &nbsp;创建了文章&nbsp;
        <b>
          <a href="#">简单版本的echarts</a>
        </b>
      </>
    ),
    time: '2021年04月16日18:24:51',
    avatar: `${VITE_BASE}/static/img/boy01.jpg`
  },
  {
    title: (
      <>
        <b>
          <a href="#">毛利兰</a>
        </b>
        &nbsp;创建了文章&nbsp;
        <b>
          <a href="#">魔幻的css（一）</a>
        </b>
      </>
    ),
    time: '2021年03月16日18:24:59',
    avatar: `${VITE_BASE}/static/img/boy01.jpg`
  },
  {
    title: (
      <>
        <b>
          <a href="#">赤井秀一</a>
        </b>
        &nbsp;创建了文章&nbsp;
        <b>
          <a href="#">Java从入门到猝死</a>
        </b>
      </>
    ),
    time: '2021年02月16日18:25:08',
    avatar: `${VITE_BASE}/static/img/boy01.jpg`
  }
];

// 进行中的
const ProjectSchedule = defineComponent({
  setup() {
    const listData = reactive({
      list: data
    });

    return () => (
      <FeCard
        border
        class="va-mb"
        title={
          <>
            <IconFont type="icon-dongtai" class="title-icon" />
            动态
          </>
        }
      >
        <List
          dataSource={listData.list}
          renderItem={({ item }: { item: DataItem }) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                avatar={<Avatar src={item.avatar} />}
                description={item.time}
              ></List.Item.Meta>
            </List.Item>
          )}
        ></List>
      </FeCard>
    );
  }
});

export default ProjectSchedule;
