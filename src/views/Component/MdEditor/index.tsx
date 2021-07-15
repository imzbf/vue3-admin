import { defineComponent } from 'vue';
import MdEditorTsx from './MdEditor';
import MdEditorVue from './MdEditorVue.vue';
import 'md-editor-v3/lib/style.css';
export default defineComponent({
  render() {
    return (
      <>
        <MdEditorTsx />
        <br />
        <MdEditorVue />
      </>
    );
  }
});
