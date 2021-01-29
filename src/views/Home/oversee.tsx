import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({
      time: 123123
    });
    return () => <div>{data.time}</div>;
  }
});
