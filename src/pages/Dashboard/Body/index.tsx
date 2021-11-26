import { Row, Col } from 'ant-design-vue';
import '../index.less';

import ProjectSchedule from './ProjectSchedule';
import CommonlyUsed from './CommonlyUsed';
import Task from './Task';
import Record from './Record';
import Team from './Team';

export default () => (
  <div class={`view-space workspace-body`}>
    <Row gutter={[14, 14]}>
      <Col span={16}>
        <ProjectSchedule />
        <Record />
      </Col>
      <Col span={8}>
        <CommonlyUsed />
        <Task />
        <Team />
      </Col>
    </Row>
  </div>
);
