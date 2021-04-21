import { PlusOutlined, UpOutlined } from '@ant-design/icons-vue';
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
  Table
} from 'ant-design-vue';
import { defineComponent, onMounted, reactive } from 'vue';
import queryTable from './index.module.scss';
import { key } from '@/store';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const data = reactive({
      selectCount: 0,
      invokeCount: 0,
      expand: false,
      pageNo: 0,
      pageSize: 10,
      loading: false
    });

    const store = useStore(key);

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

    // 生命周期
    onMounted(() => {
      getQueryTableList();
    });

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
                  <Col span={data.expand ? 24 : 8} class={queryTable.btnGroups}>
                    <Form.Item>
                      <Button type={'primary'}>查询</Button>
                      <Button type={'default'} class={queryTable.btnMg}>
                        重置
                      </Button>
                      <Button type={'link'}>
                        收起<UpOutlined></UpOutlined>
                      </Button>
                      {/* <Button type={'link'}>展开<DownOutlined></DownOutlined></Button> */}
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
              <Table dataSource={store.state.queryTable.dataSourceList}></Table>
            </section>
          </Card>
        </section>
      </section>
    );
  }
});
