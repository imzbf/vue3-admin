<script lang="ts">
import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import * as Icon from '@element-plus/icons-vue';

export default defineComponent({
  props: {
    iconName: {
      type: String as PropType<keyof typeof Icon>,
      default: ''
    }
  },
  render() {
    return h(Icon[this.iconName]);
  }
});
</script>
