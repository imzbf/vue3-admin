declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

// 以此方法像this添加type
import { ElMessageBox } from 'element-plus';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $alert: typeof ElMessageBox.alert;
  }
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.gif' {
  const value: any;
  export default value;
}
