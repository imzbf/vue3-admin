import {
  defineComponent,
  SetupContext,
  EmitsOptions,
  PropType,
  CSSProperties
} from 'vue';
import { getSlot } from '@/utils/vue-tsx';
import './index.scss';

import classnames from 'classnames';

const Card = defineComponent({
  props: {
    title: {
      type: [Object, String] as PropType<JSX.Element | string>,
      default: undefined
    },
    func: {
      type: [Object, String] as PropType<JSX.Element | string>,
      default: undefined
    },
    headerClass: {
      type: String,
      default: ''
    },
    headerStyle: {
      type: [Object, String] as PropType<CSSProperties | string>,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: [Object, String] as PropType<CSSProperties | string>,
      default: ''
    }
  },
  setup(props, ctx: SetupContext<EmitsOptions>) {
    return () => {
      // 插槽一定当然函数组件（render）方法内部，否则提示：this will not track dependencies used in the slot
      const slotDefault = getSlot({ ctx });
      const slotTitle = getSlot({ props, ctx }, 'title');
      const slotFunc = getSlot({ props, ctx }, 'func');

      const headerClass = classnames('fe-card-header', props.headerClass);
      const bodyClass = classnames('fe-card-body', props.bodyClass);

      return (
        <div class="fe-card">
          <div class={headerClass} style={props.headerStyle}>
            <div class="fe-card-title">{slotTitle}</div>
            <div class="fe-card-func">{slotFunc}</div>
          </div>
          <div class={bodyClass} style={props.bodyStyle}>
            {slotDefault}
          </div>
        </div>
      );
    };
  }
});

export default Card;
