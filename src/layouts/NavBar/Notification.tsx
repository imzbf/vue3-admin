import { defineComponent, reactive } from 'vue';
import { Avatar, List } from 'ant-design-vue';

import './index.less';

interface DataItem {
  avatar: string;
  title: string;
  desc: string;
}

export default defineComponent({
  name: 'notification',
  setup() {
    const data = reactive({
      list: [
        {
          avatar: '/static/img/i004.png',
          title: '你有两个邮件未回复！',
          desc: '两天前'
        },
        {
          avatar: '/static/img/i003.png',
          title: '你有3个合并请求待审核！',
          desc: '昨天'
        },
        {
          avatar: '/static/img/i002.png',
          title: '你下午有两场前端面试！',
          desc: '刚刚'
        },
        {
          avatar: '/static/img/i001.png',
          title: '我没有什么可以写的了！',
          desc: '两天前'
        }
      ]
    });

    return () => (
      <List
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
