import { defineComponent } from 'vue';

import Header from './Header';
import Body from './Body';
import './index.less';

const WorkSpace = defineComponent({
  name: 'ViewHomeWorkspace',
  setup() {
    return () => (
      <div class="workspace">
        <Header />
        <Body />
      </div>
    );
  }
});

export default WorkSpace;
