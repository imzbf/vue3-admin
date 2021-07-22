import { defineComponent, onMounted, reactive, ref } from 'vue';
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
  Progress
} from 'ant-design-vue';
import './index.less';
import { PlusOutlined } from '@ant-design/icons-vue';

import { getBaseTableList, getRadioStatus } from '@/apis/table';

interface RadioOptions {
  name: string;
  value: string | number;
}
export default defineComponent({
  name: 'ViewTableBasic',
  setup() {
    // 查询参数
    const data = reactive({
      statusValue: 'all',
      pageNo: 1,
      pageSize: 10,
      loading: false
    });

    // 表格内容
    const tableData = reactive<{ dataSourceList: any; total: number }>({
      dataSourceList: [],
      total: 0
    });

    // 状态
    const statusList = ref([
      { name: '全部', value: 'all' },
      { name: '进行中', value: 'doing' },
      { name: '等待中', value: 'wating' }
    ]);

    // 状态改变
    const statusChangeEvent = ({ target }: { target: any }) => {
      data.statusValue = target.value;
    };

    // 请求数据
    const getDataList = () => {
      data.loading = true;

      getBaseTableList(data.pageNo, data.pageSize)
        .then(({ records, total }) => {
          tableData.dataSourceList = records;
          tableData.total = total;
        })
        .finally(() => {
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
    const getMoreActions = function (): any[] {
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

    onMounted(() => {
      getDataList();
    });

    return () => (
      <section class="base-table">
        <Card>
          <Row>
            <Col xs={24} sm={8} class="header-info">
              <span class="text-grey-dark">我的代办</span>
              <span class={['d-block', 'display-2']}>8个任务</span>
              <em></em>
            </Col>
            <Col xs={24} sm={8} class="header-info">
              <span class="text-grey-dark">本周任务平均处理时间</span>
              <span class={['d-block', 'display-2']}>24分钟</span>
              <em></em>
            </Col>
            <Col xs={24} sm={8} class="header-info">
              <span class="text-grey-dark">本周完成任务数</span>
              <span class={['d-block', 'display-2']}>24个任务</span>
            </Col>
            <em></em>
          </Row>
        </Card>

        <Card>
          <Row class="header-title" gutter={1}>
            <Col span={2}>
              <h3>标准列表</h3>
            </Col>
            {statusList.value.length > 0 ? (
              <Col span={4} offset={14}>
                <Radio.Group value={data.statusValue} onChange={statusChangeEvent}>
                  {(statusList.value as Array<RadioOptions>).map((item: RadioOptions) => {
                    return (
                      <Radio.Button name={item.name} value={item.value}>
                        {item.name}
                      </Radio.Button>
                    );
                  })}
                </Radio.Group>
              </Col>
            ) : (
              []
            )}
            <Col span={4}>
              <Input.Search placeholder="请输入"></Input.Search>
            </Col>
          </Row>
          <Button block type="dashed" class="btn-plus">
            <PlusOutlined />
            添加
          </Button>
          <List
            itemLayout={'horizontal'}
            loading={data.loading}
            pagination={{
              current: data.pageNo,
              total: tableData.total,
              showQuickJumper: true,
              showSizeChanger: true,
              onChange: pageNoChange,
              showSizeChange: pageNoChange,
              onShowSizeChange: pageNoChange
            }}
            dataSource={tableData.dataSourceList}
          >
            {tableData.dataSourceList.map((dataItem: any) => {
              return (
                <List.Item actions={getMoreActions()}>
                  <List.Item.Meta
                    description={dataItem.content}
                    title={<a>{dataItem.name}</a>}
                    avatar={<Avatar shape={'square'} src={dataItem.url}></Avatar>}
                  ></List.Item.Meta>
                  <div class="width-md">
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
