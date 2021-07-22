import { Avatar, Statistic } from 'ant-design-vue';
import IconFont from '@/components/IconFont';

import './index.less';

const VITE_BASE = import.meta.env.VITE_BASE;

export default () => (
  <div class="workspace-header">
    <div class="welcome">
      <div class="avatar">
        <Avatar shape="circle" size={60} src={`${VITE_BASE}/static/img/boy01.jpg`} />
      </div>
      <div class="msg">
        <div class="hello">早上好，毛利小五郎，开始奋斗吧！</div>
        <div class="weather">
          <IconFont type="icon-tianqi" class="icon" />
          <span>外面太阳很大，33℃ - 41℃，建议你不要建议我建议你别去上班！</span>
        </div>
      </div>
    </div>
    <div class="todo">
      <Statistic
        class="todo-item"
        title={
          <span class="item-title">
            <IconFont type="icon-beOnDutyIssue" /> <span>issues</span>
          </span>
        }
        suffix={<span>/ 30</span>}
        value={13}
      />
      <Statistic
        class="todo-item"
        title={
          <span class="item-title">
            <IconFont type="icon-renwu" /> <span>任务</span>
          </span>
        }
        suffix={<span>/ 25</span>}
        value={13}
      />
      <Statistic
        class="todo-item"
        title={
          <span class="item-title">
            <IconFont type="icon-youjian" /> <span>邮件</span>
          </span>
        }
        suffix={<span>/ 23</span>}
        value={13}
      />
    </div>
  </div>
);
