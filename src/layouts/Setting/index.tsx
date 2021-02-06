// import { defineComponent, reactive } from 'vue';
import { Drawer } from 'ant-design-vue';

interface SettingPropsType {
  visible: boolean;
  setVisible: () => void;
}

// export default defineComponent({
// setup(props: SettingPropsType) {
export default (props: SettingPropsType) => (
  <Drawer
    placement="right"
    visible={props.visible}
    closable={false}
    onClose={props.setVisible}
    maskClosable={true}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
);
// }
// });
