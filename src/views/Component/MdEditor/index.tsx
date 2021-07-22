import { defineComponent } from 'vue';
import MdEditorTsx from './MdEditor';
import Docs from './Docs';
import './index.less';

export default defineComponent({
  data() {
    return {
      type: 'jsx'
    };
  },
  render() {
    return (
      <div class="editor-demo-wrapper">
        <Docs />
        <MdEditorTsx />
      </div>
    );
  }
});
