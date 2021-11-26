import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import FeCard from '@/components/Card';
import { Card, Avatar } from 'ant-design-vue';
import IconFont from '@/components/IconFont';
import '../index.less';

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
          border
          class={`va-mb project`}
          title={
            <>
              <IconFont type="icon-shouye" class="title-icon" />
              进行中的项目
            </>
          }
          bodyClass="clear"
          bodyStyle={{ paddingTop: 10 }}
          func={
            <RouterLink to="/project" class="normal-link">
              全部项目
            </RouterLink>
          }
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
                <div class="footer">
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
