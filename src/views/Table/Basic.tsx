import { defineComponent, reactive } from 'vue';
import {
  Card,
  Row,
  Col,
  List,
  Button,
  Radio,
  Input,
  Avatar,
  Dropdown,
  Menu,
  Progress,
  ConfigProvider
} from 'ant-design-vue';
import tablStyles from './index.module.scss';
import { PlusOutlined } from '@ant-design/icons-vue';
import { key } from '@/store';
import { useStore } from 'vuex';

interface RadioOptions {
  name: string;
  value: string | number;
}
export default defineComponent({
  mounted() {
    // 设置列表初始化数据
    this.getRadioStatus();
    this.getBaseTableList();
  },
  methods: {
    getRadioStatus() {
      const store = useStore(key);
      store.dispatch('baseTable/getRadioStatus');
    },
    getBaseTableList() {
      const store = useStore(key);
      store.dispatch('baseTable/getBaseTableList', {
        pageNo: 1,
        pageSize: 10
      });
    },
    statusChange(e: Event) {
      console.log(e);
    }
  },
  components: {
    PlusOutlined,
    Radio
  },
  props: {},
  setup() {
    const store = useStore(key);
    const data = reactive({
      statusValue: 'all',
      pageNo: 1,
      pageSize: 10,
      loading: false
    });
    // 状态改变
    const statusChangeEvent = ({ target }: { target: any }) => {
      data.statusValue = target.value;
    };

    // 请求数据
    const getDataList = () => {
      data.loading = true;
      store
        .dispatch('baseTable/getBaseTableList', {
          pageNo: data.pageNo,
          pageSize: data.pageSize
        })
        .then((res) => {
          data.loading = false;
        });
    };

    // 页码改变
    const pageNoChange = (...[pageNo, pageSize]: number[]) => {
      data.pageNo = pageNo;
      data.pageSize = pageSize;
      getDataList();
    };

    // 克点击的链接
    const getMoreActions = function (item: any): any[] {
      return [
        <a>修改</a>,
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item>
                <a>编辑</a>
              </Menu.Item>
              <Menu.Item>
                <a>删除</a>
              </Menu.Item>
            </Menu>
          }
        >
          <a>更多</a>
        </Dropdown>
      ];
    };

    return () => (
      <section class={tablStyles.baseTable}>
        <Card>
          <Row>
            <Col xs={24} sm={8} class={tablStyles.headerInfo}>
              <span class={tablStyles.textGreyDark}>我的代办</span>
              <span class={[tablStyles.dBlock, tablStyles.display2]}>8个任务</span>
              <em></em>
            </Col>
            <Col xs={24} sm={8} class={tablStyles.headerInfo}>
              <span class={tablStyles.textGreyDark}>本周任务平均处理时间</span>
              <span class={[tablStyles.dBlock, tablStyles.display2]}>24分钟</span>
              <em></em>
            </Col>
            <Col xs={24} sm={8} class={tablStyles.headerInfo}>
              <span class={tablStyles.textGreyDark}>本周完成任务数</span>
              <span class={[tablStyles.dBlock, tablStyles.display2]}>24个任务</span>
            </Col>
            <em></em>
          </Row>
        </Card>

        <Card>
          <Row class={tablStyles.headerTitle} gutter={1}>
            <Col span={2}>
              <h3>标准列表</h3>
            </Col>
            {store.state.baseTable.statusList.length > 0 ? (
              <Col span={4} offset={14}>
                <Radio.Group value={data.statusValue} onChange={statusChangeEvent}>
                  {(store.state.baseTable.statusList as Array<RadioOptions>).map(
                    (item: RadioOptions) => {
                      return (
                        <Radio.Button name={item.name} value={item.value}>
                          {item.name}
                        </Radio.Button>
                      );
                    }
                  )}
                </Radio.Group>
              </Col>
            ) : (
              []
            )}
            <Col span={4}>
              <Input.Search placeholder="请输入"></Input.Search>
            </Col>
          </Row>
          <Button block type="dashed" class={tablStyles.btnPlus}>
            <PlusOutlined />
            添加
          </Button>
          <List
            itemLayout={'horizontal'}
            loading={data.loading}
            pagination={{
              current: data.pageNo,
              total: store.state.baseTable.total,
              onChange: pageNoChange,
              showQuickJumper: true,
              showSizeChanger: true,
              showSizeChange: pageNoChange,
              onShowSizeChange: pageNoChange
            }}
            dataSource={store.state.baseTable.dataSourceList}
          >
            {store.state.baseTable.dataSourceList.map((dataItem) => {
              return (
                <List.Item actions={getMoreActions(dataItem)}>
                  <List.Item.Meta
                    description={dataItem.content}
                    title={<a>{dataItem.name}</a>}
                    avatar={<Avatar shape={'square'} src={dataItem.url}></Avatar>}
                  ></List.Item.Meta>
                  <div class={tablStyles.widthMd}>
                    <Row>
                      <Col span={12}>
                        Owner{dataItem.statu}
                        <p>{dataItem.owner}</p>
                      </Col>
                      <Col span={12}>
                        开始时间
                        <p>{dataItem.publishTime}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Progress
                          status={dataItem.statu ? 'active' : 'exception'}
                          percent={dataItem.rate}
                        ></Progress>
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              );
            })}
          </List>
        </Card>
      </section>
    );
  }
});
