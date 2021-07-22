import { defineComponent } from 'vue';

import { Col, Row } from 'ant-design-vue';

import M1 from './M1';
import M2 from './M2';
import M3 from './M3';
import M4 from './M4';
import M5 from './M5';

const Monitor = defineComponent({
  name: 'ViewHomeMonitor',
  setup() {
    return () => (
      <div class="view-space">
        <Row gutter={[14, 14]}>
          <Col span={16}>
            <M1 />
            <M3 />
          </Col>
          <Col span={8}>
            <M5 />
            <M2 />
            <M4 />
          </Col>
        </Row>
      </div>
    );
  }
});

export default Monitor;
