import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'TabItem',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const className = computed(() => {
      return `tabs-tabpane ${props.class}`;
    });
    return () => (
      <div class={className}>
        <slot />
      </div>
    );
  }
});
