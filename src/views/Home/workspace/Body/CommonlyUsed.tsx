import { Row, Col } from 'ant-design-vue';
import FeCard from '@/components/Card';
import IconFont from '@/components/IconFont';

import '../index.less';

// 常用的
const CommonlyUsed = () => (
  <FeCard
    border
    class="va-mb"
    title={
      <>
        <IconFont type="icon-changyongfenlei" class="title-icon" />
        常用功能
      </>
    }
  >
    <Row class="used-list">
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-liebiao" class="used-item-icon" />
          <span>列表</span>
        </div>
      </Col>
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-dingdan" class="used-item-icon" />
          <span>表单</span>
        </div>
      </Col>
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-icon_A" class="used-item-icon" />
          <span>设置</span>
        </div>
      </Col>
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-sousuo" class="used-item-icon" />
          <span>搜索</span>
        </div>
      </Col>
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-yibiaopan" class="used-item-icon" />
          <span>监控台</span>
        </div>
      </Col>
      <Col span={8}>
        <div class="used-item">
          <IconFont type="icon-gongju" class="used-item-icon" />
          <span>工具</span>
        </div>
      </Col>
    </Row>
  </FeCard>
);

export default CommonlyUsed;
