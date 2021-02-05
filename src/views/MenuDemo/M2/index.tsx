import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => <router-view />;
  }
});
