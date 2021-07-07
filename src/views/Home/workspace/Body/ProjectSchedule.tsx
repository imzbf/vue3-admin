import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import FeCard from '@/components/Card';
import { Card, Avatar } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import styles from '../index.module.scss';

const VITE_BASE = import.meta.env.VITE_BASE;

const proj = {
  title: 'vue3-admin',
  description: '项目基于vue@3.x系列开发，开发环境使用vite@2.x搭配纯jsx',
  avatar: `${VITE_BASE}/static/img/boy01.jpg`,
  team: 'vra-dever',
  date: '4个月前'
};

// 进行中的
const ProjectSchedule = defineComponent({
  setup() {
    return () => {
      return (
        <FeCard
          class={`va-mb ${styles.project}`}
          title={
            <>
              <IconFont type="icon-shouye" class={styles['title-icon']} />
              进行中的项目
            </>
          }
          bodyClass="clear"
          bodyStyle={{ paddingTop: 10 }}
          func={<RouterLink to="/project">全部项目</RouterLink>}
        >
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Card.Grid>
                <Card.Meta
                  title={proj.title}
                  description={proj.description}
                  avatar={<Avatar src={proj.avatar} />}
                  key={`project-item-${item}`}
                />
                <div class={styles.footer}>
                  <a href="#">{proj.team}</a> <span>{proj.date}</span>
                </div>
              </Card.Grid>
            );
          })}
        </FeCard>
      );
    };
  }
});

export default ProjectSchedule;
