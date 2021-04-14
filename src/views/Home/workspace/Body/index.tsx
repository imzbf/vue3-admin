import { Row, Col } from 'ant-design-vue';
import styles from '../index.module.scss';

import ProjectSchedule from './ProjectSchedule';
import CommonlyUsed from './CommonlyUsed';

export default () => (
  <div class={styles.body}>
    <Row gutter={[14, 14]}>
      <Col span={16}>
        <ProjectSchedule />
      </Col>
      <Col span={8}>
        <CommonlyUsed />
      </Col>
    </Row>
  </div>
);
