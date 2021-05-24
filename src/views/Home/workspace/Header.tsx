import { Avatar, Statistic } from 'ant-design-vue';
import IconFont from '@/components/IconFont';

import styles from './index.module.scss';

const VITE_BASE = import.meta.env.VITE_BASE;

export default () => (
  <div class={styles.header}>
    <div class={styles.welcome}>
      <div class={styles.avatar}>
        <Avatar shape="circle" size={60} src={`${VITE_BASE}/static/img/boy01.jpg`} />
      </div>
      <div class={styles.msg}>
        <div class={styles.hello}>早上好，毛利小五郎，开始奋斗吧！</div>
        <div class={styles.weather}>
          <IconFont type="icon-tianqi" class={styles.icon} />
          <span>红火大太阳，33℃ - 41℃，建议你不要建议我建议你别去上班！</span>
        </div>
      </div>
    </div>
    <div class={styles.todo}>
      <Statistic
        class={styles['todo-item']}
        title={
          <span class={styles['item-title']}>
            <IconFont type="icon-beOnDutyIssue" /> <span>issues</span>
          </span>
        }
        suffix={<span>/ 30</span>}
        value={13}
      />
      <Statistic
        class={styles['todo-item']}
        title={
          <span class={styles['item-title']}>
            <IconFont type="icon-renwu" /> <span>任务</span>
          </span>
        }
        suffix={<span>/ 25</span>}
        value={13}
      />
      <Statistic
        class={styles['todo-item']}
        title={
          <span class={styles['item-title']}>
            <IconFont type="icon-youjian" /> <span>邮件</span>
          </span>
        }
        suffix={<span>/ 23</span>}
        value={13}
      />
    </div>
  </div>
);
