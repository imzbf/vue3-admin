import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tab',
  props: {
    activeKey: {
      type: String || Number,
      default: '1'
    }
  },
  setup() {
    return () => (
      <>
        <div class="c-tab">
          <div class="c-tab-nav">
            <slot name="nav" />
          </div>
          <div class="c-tab-content">
            <slot />
          </div>
        </div>
      </>
    );
  }
});
