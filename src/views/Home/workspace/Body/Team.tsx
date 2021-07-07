import { defineComponent } from 'vue';
import FeCard from '@/components/Card';
import { Row, Col, Avatar } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import styles from '../index.module.scss';

const VITE_BASE = import.meta.env.VITE_BASE;

const Team = defineComponent({
  setup() {
    return () => (
      <FeCard
        class={`va-mb ${styles.team}`}
        title={
          <>
            <IconFont type="icon-86" class={styles['title-icon']} />
            一个提莫
          </>
        }
      >
        <Row>
          <Col span={12}>
            <a href="#" class={styles.item}>
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class={styles.name}>vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class={styles.item}>
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class={styles.name}>vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class={styles.item}>
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class={styles.name}>vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class={styles.item}>
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class={styles.name}>vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class={styles.item}>
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class={styles.name}>vra-dever</span>
            </a>
          </Col>
        </Row>
      </FeCard>
    );
  }
});

export default Team;
