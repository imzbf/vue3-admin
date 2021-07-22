import { defineComponent } from 'vue';
import FeCard from '@/components/Card';
import { Row, Col, Avatar } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import '../index.less';

const VITE_BASE = import.meta.env.VITE_BASE;

const Team = defineComponent({
  setup() {
    return () => (
      <FeCard
        class={`va-mb team`}
        title={
          <>
            <IconFont type="icon-86" class="title-icon" />
            一个提莫
          </>
        }
      >
        <Row>
          <Col span={12}>
            <a href="#" class="item">
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class="name">vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class="item">
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class="name">vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class="item">
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class="name">vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class="item">
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class="name">vra-dever</span>
            </a>
          </Col>
          <Col span={12}>
            <a href="#" class="item">
              <Avatar src={`${VITE_BASE}/static/img/boy01.jpg`} />
              <span class="name">vra-dever</span>
            </a>
          </Col>
        </Row>
      </FeCard>
    );
  }
});

export default Team;
