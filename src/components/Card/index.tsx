import { defineComponent, SetupContext, EmitsOptions } from 'vue';
import { getSlot } from '@/utils/vue-tsx';
import './index.scss';

const Card = defineComponent({
  props: {
    title: null,
    func: null
  },
  setup(props, ctx: SetupContext<EmitsOptions>) {
    const slotDefault = getSlot({ ctx });
    const slotTitle = getSlot({ props, ctx }, 'title');
    const slotFunc = getSlot({ props, ctx }, 'func');

    return () => (
      <div class="fe-card">
        <div class="fe-card-header">
          <div class="fe-card-title">{slotTitle}</div>
          <div class="fe-card-func">{slotFunc}</div>
        </div>
        <div class="fe-card-body">{slotDefault}</div>
      </div>
    );
  }
});

export default Card;
