import { defineComponent } from 'vue';

import Header from './Header';
import Body from './Body';
import styles from './index.module.scss';

const WorkSpace = defineComponent({
  name: 'ViewHomeWorkspace',
  setup() {
    return () => (
      <div class={styles.workspace}>
        <Header />
        <Body />
      </div>
    );
  }
});

export default WorkSpace;
