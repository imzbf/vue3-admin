import { defineComponent, reactive } from 'vue';
import { Avatar, List } from 'ant-design-vue';

import styles from './index.module.scss';

interface DataItem {
  avatar: string;
  title: string;
  desc: string;
  date: string;
}

const VITE_BASE = import.meta.env.VITE_BASE;

export default defineComponent({
  name: 'message',
  setup() {
    const data = reactive<{ list: DataItem[] }>({
      list: [
        {
          avatar: `${VITE_BASE}/static/img/boy01.jpg`,
          title: '小五郎 评论了你',
          desc: '柯南要请饭，收到请回话！',
          date: '两天前'
        },
        {
          avatar: `${VITE_BASE}/static/img/head02.gif`,
          title: '小五郎 评论了你',
          desc: '柯南要请饭，收到请回话！',
          date: '两天前'
        },
        {
          avatar: `${VITE_BASE}/static/img/boy01.jpg`,
          title: '小五郎 评论了你',
          desc: '柯南要请饭，收到请回话！',
          date: '两天前'
        },
        {
          avatar: `${VITE_BASE}/static/img/boy01.jpg`,
          title: '小五郎 评论了你',
          desc: '柯南要请饭，收到请回话！',
          date: '两天前'
        }
      ]
    });

    return () => (
      <List
        class={styles.message}
        dataSource={data.list}
        renderItem={({ item }: { item: DataItem; index: number }) => {
          return (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                avatar={<Avatar src={item.avatar} />}
                description={item.desc}
              />
            </List.Item>
          );
        }}
      />
    );
  }
});
