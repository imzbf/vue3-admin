import { defineComponent } from 'vue';
import { Row, Col, Typography } from 'ant-design-vue';

import VraCard from '@/components/Card';
import CardDemo from './CardDemo.vue';

export default defineComponent({
  name: 'ViewComponentCard',
  setup() {
    return () => (
      <div class="view-space">
        <Row gutter={[14, 14]}>
          <Col span={24}>
            <VraCard>
              <Typography>
                <Typography.Title level={2}>卡片-组件</Typography.Title>
                <Typography.Paragraph>卡片容器</Typography.Paragraph>
                <Typography.Title level={3}>使用场景</Typography.Title>
                <Typography.Paragraph>
                  自定义组件，支持vue模板及jsx引用，友好的类型提示。自定义的内边距。
                </Typography.Paragraph>
                <Typography.Title level={3}>代码演示</Typography.Title>
                <Typography.Paragraph>
                  <Row gutter={[14, 14]}>
                    <Col span={12}>
                      <VraCard
                        border
                        title="这是使用jsx开发的"
                        headerStyle={{ fontWeight: 'bold', fontSize: '16px' }}
                      >
                        <p>标题使用props.title构造</p>
                        <p>内容默认default插入</p>
                        <p>
                          样式限制：
                          <pre>
                            <code>
                              {'[Object, String] as PropType<CSSProperties | string>'}
                            </code>
                          </pre>
                        </p>
                      </VraCard>
                    </Col>
                    <Col span={12}>
                      <CardDemo />
                    </Col>
                  </Row>
                </Typography.Paragraph>
              </Typography>
            </VraCard>
          </Col>
        </Row>
      </div>
    );
  }
});
