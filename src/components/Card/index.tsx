import {
  defineComponent,
  SetupContext,
  EmitsOptions,
  PropType,
  CSSProperties
} from 'vue';
import { getSlot } from '@/utils/vue-tsx';
import './index.less';

import classnames from 'classnames';

const Card = defineComponent({
  name: 'VRACard',
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
    },
    bodyPadding: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    border: {
      type: Boolean as PropType<boolean>,
      defalut: false
    }
  },
  setup(props, ctx: SetupContext<EmitsOptions>) {
    return () => {
      // 插槽一定当然函数组件（render）方法内部，否则提示：this will not track dependencies used in the slot
      const slotDefault = getSlot({ ctx });
      const slotTitle = getSlot({ props, ctx }, 'title');
      const slotFunc = getSlot({ props, ctx }, 'func');

      const cardClass = classnames('vra-card', props.border && 'vra-card-border');
      const headerClass = classnames('vra-card-header', props.headerClass);
      const bodyClass = classnames(
        'vra-card-body',
        props.bodyClass,
        !props.bodyPadding && 'vra-card-body-nopadding'
      );

      return (
        <div class={cardClass}>
          {slotTitle && (
            <div class={headerClass} style={props.headerStyle}>
              <div class="vra-card-title">{slotTitle}</div>
              {slotFunc && <div class="vra-card-func">{slotFunc}</div>}
            </div>
          )}
          <div class={bodyClass} style={props.bodyStyle}>
            {slotDefault}
          </div>
        </div>
      );
    };
  }
});

export default Card;
