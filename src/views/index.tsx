import { defineComponent, reactive } from 'vue';
import { Row, Col, Table } from 'ant-design-vue';
import VueDemo from './vueDemo.vue';
import FeCard from '@/components/Card';
import styles from './index.module.scss';

export default defineComponent({
  setup() {
    const data = reactive({
      versionModule: [
        {
          key: '1',
          name: '当前版本',
          desc: 'v0.0.0'
        },
        {
          key: '2',
          name: '框架基础',
          desc: 'vue@3.x、vue-router@4.x、vuex@4.x'
        },
        {
          key: '3',
          name: '更新时间',
          desc: '2021-04-06 08:00:00'
        },
        {
          key: '4',
          name: '特色介绍',
          desc: '采用tsx语法编写！'
        }
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          align: 'center',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'desc',
          key: 'age'
        }
      ]
    });
    return () => (
      <div>
        <Row gutter={[14, 28]}>
          <Col span={8}>
            <FeCard title="版本信息">
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
          <Col span={8}>
            <FeCard title="版本信息">
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
          <Col span={8}>
            <FeCard title="版本信息">
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
        </Row>
        <Row gutter={[14, 28]}>
          <Col span={16}>
            <FeCard title="版本信息">
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
          <Col span={8}>
            <FeCard title="版本信息">
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
        </Row>
        <Row gutter={[14, 28]}>
          <Col span={16}>
            <FeCard title={<span>123</span>}>
              <Table
                dataSource={data.versionModule}
                columns={data.columns}
                showHeader={false}
                pagination={false}
                bordered
                rowClassName={() => {
                  return styles['version-row'];
                }}
              />
            </FeCard>
          </Col>
          <Col span={8}>
            <VueDemo />
          </Col>
        </Row>
      </div>
    );
  }
});
