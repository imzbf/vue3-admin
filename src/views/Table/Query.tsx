import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons-vue';
import {
  Alert,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  Divider,
  message
} from 'ant-design-vue';
import { defineComponent, onMounted, reactive } from 'vue';
import queryTable from './index.module.scss';
import { key } from '@/store';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore(key);
    // ----------------------（1）属性定义-------------------------------
    // 属性
    const data = reactive({
      selectCount: 0,
      invokeCount: 0,
      expand: false,
      pageNo: 0,
      pageSize: 10,
      loading: false,
      selectedRowKeys: new Array<any>()
    });

    // 表格列
    const columns: any[] = [
      { title: '规则编号', id: 0, dataIndex: 'code', width: 200 },
      { title: '描述', id: 2, dataIndex: 'desc', width: 800 },
      {
        title: '服务调用次数',
        id: 3,
        dataIndex: 'invokeCount',
        width: 160,
        orderable: true,
        sort: (a: any, b: any) => {
          return a.invokeCount - b.invokeCount;
        }
      },
      {
        title: '状态',
        id: 4,
        dataIndex: 'status',
        width: 160,
        orderable: true,
        sort: (a: any, b: any) => {
          return a.status - b.status;
        }
      },
      {
        title: '更新时间',
        id: 5,
        dataIndex: 'updateTime',
        width: 200,
        orderable: true,
        sort: (a: any, b: any) => {
          const dataA =
            new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime();
          return dataA;
        }
      },
      {
        title: '操作',
        id: 6,
        custom: true
      }
    ];

    // ----------------------（2）API方法----------------------------------
    // 获取查询列表的数据
    const getQueryTableList = () => {
      data.loading = true;
      store
        .dispatch('queryTable/getQueryTableList', {
          pageNo: data.pageNo,
          pageSize: data.pageSize
        })
        .then(() => {
          data.loading = false;
        });
    };

    // -----------------------（3）生命周期--------------------------
    onMounted(() => {
      getQueryTableList();
    });

    // ------------------------（4）事件监听--------------------------
    // (4.1)选中事件
    const rowSelectionFn = () => {
      return {
        type: 'checkbox',
        selectedRowKeys: data.selectedRowKeys,
        selections: false,
        onChange: (key: any, selectedRows: any[]) => {
          data.selectedRowKeys = key;
          data.selectCount = data.selectedRowKeys.length;
          let count = 0;
          selectedRows.forEach((row) => {
            count += row.invokeCount;
          });
          data.invokeCount = count / 10000;
        }
      };
    };

    // (4.2)点击事件---查询列表
    const search = () => {
      data.pageNo = 1;
      getQueryTableList();
    };

    // (4.3)页码改变事件
    const pageChange = (...[pageNo, pageSize]: number[]) => {
      data.pageNo = pageNo;
      data.pageSize = pageSize;
      getQueryTableList();
    };
    // --------------------------------（5）组件-------------------------
    // 表格action组件
    const getActions = ({ record }: { index: number; record: any; text: string }) => {
      const config = () => {
        message.info('配置' + record.id);
      };

      const subscribe = () => {
        message.info('订阅警报' + record.id);
      };
      return (
        <span>
          <a onClick={config}>配置</a>
          <Divider type={'vertical'}></Divider>
          <a onClick={subscribe}>订阅警报</a>
        </span>
      );
    };

    // alert消息组件
    const getAlertMessage = () => {
      return (
        <span>
          已选择
          <Button type={'link'}>
            <b>{data.selectCount}</b>
          </Button>
          项 &nbsp;&nbsp;&nbsp; 服务调用总计 <b>{data.invokeCount}</b> 万
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {data.selectCount > 0 ? <Button type={'link'}>清空</Button> : ''}
        </span>
      );
    };

    return () => (
      <section>
        <section class={queryTable.queryTitle}>
          <div class={queryTable.titleWrap}>
            <h1 class={queryTable.h1}>查询表单</h1>
          </div>
        </section>
        <section class={queryTable.queryContent}>
          <Card>
            <section>
              <Form class={queryTable.antAdvancedSearchForm}>
                <Row gutter={24}>
                  <Col md={8} sm={24}>
                    <Form.Item label={'规则编号'}>
                      <Input placeholder="请输入"></Input>
                    </Form.Item>
                  </Col>
                  <Col md={8} sm={24}>
                    <Form.Item label={'使用状态'}>
                      <Select>
                        <Select.Option value={0}>停止</Select.Option>
                        <Select.Option value={1}>运行中</Select.Option>
                        <Select.Option value={2}>已上线</Select.Option>
                        <Select.Option value={3}>异常</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  {data.expand ? (
                    <template>
                      <Col md={8} sm={24}>
                        <Form.Item label={'调用次数'}>
                          <Input placeholder="请输入"></Input>
                        </Form.Item>
                      </Col>
                      <Col md={8} sm={24}>
                        <Form.Item label={'更新日期'}>
                          <DatePicker></DatePicker>
                        </Form.Item>
                      </Col>
                      <Col md={8} sm={24}>
                        <Form.Item label={'使用状态'}>
                          <Select>
                            <Select.Option value={0}>停止</Select.Option>
                            <Select.Option value={1}>运行中</Select.Option>
                            <Select.Option value={2}>已上线</Select.Option>
                            <Select.Option value={3}>异常</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col md={8} sm={24}>
                        <Form.Item label={'使用状态'}>
                          <Select>
                            <Select.Option value={0}>停止</Select.Option>
                            <Select.Option value={1}>运行中</Select.Option>
                            <Select.Option value={2}>已上线</Select.Option>
                            <Select.Option value={3}>异常</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </template>
                  ) : (
                    ''
                  )}
                  <Col span={data.expand ? 24 : 8} class={queryTable.btnGroups}>
                    <Form.Item>
                      <Button type={'primary'} onClick={search}>
                        查询
                      </Button>
                      <Button type={'default'} class={queryTable.btnMg}>
                        重置
                      </Button>

                      {data.expand ? (
                        <Button type={'link'}>
                          收起<UpOutlined></UpOutlined>
                        </Button>
                      ) : (
                        <Button type={'link'}>
                          展开<DownOutlined></DownOutlined>
                        </Button>
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </section>
            <section>
              <Button type={'primary'} icon={<PlusOutlined></PlusOutlined>}>
                新建
              </Button>
              <div class={queryTable.myMd}>
                <Alert message={getAlertMessage()} type={'info'} key="id"></Alert>
              </div>
              <Table
                loading={data.loading}
                key={'id'}
                rowKey={'id'}
                rowSelection={rowSelectionFn()}
                onChange={(...args) => {
                  console.log(args);
                }}
                pagination={{
                  current: data.pageNo,
                  pageSize: data.pageSize,
                  total: store.state.queryTable.total,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  onChange: pageChange,
                  onShowSizeChange: pageChange
                }}
                dataSource={store.state.queryTable.dataSourceList}
              >
                {columns.map((item) => {
                  if (item.orderable) {
                    return (
                      <Table.Column
                        title={item.title}
                        dataIndex={item.dataIndex}
                        sorter={item.sort}
                      ></Table.Column>
                    );
                  } else if (item.custom) {
                    return (
                      <Table.Column
                        title={'操作'}
                        customRender={getActions}
                      ></Table.Column>
                    );
                  } else {
                    return (
                      <Table.Column
                        title={item.title}
                        dataIndex={item.dataIndex}
                      ></Table.Column>
                    );
                  }
                  return;
                })}
              </Table>
            </section>
          </Card>
        </section>
      </section>
    );
  }
});
