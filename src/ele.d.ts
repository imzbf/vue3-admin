import { ElMessageBox } from 'element-plus';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $alert: typeof ElMessageBox.alert;
  }
}
