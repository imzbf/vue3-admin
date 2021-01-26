declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.gif' {
  const value: any;
  export default value;
}
