// import { defineComponent } from 'vue';
// import { Menu, Icon } from 'ant-design-vue';
// import { MenuType } from '@/store/modules/menu';
// import Nest from './Nest';

// export interface PropsType {
//   list: Array<MenuType>;
// }

// export default defineComponent({
//   // 组件名称需与标签名对应
//   name: 'Nest',
//   props: {
//     list: {
//       type: Array,
//       default: () => []
//     }
//   },
//   setup(props: any) {
//     return () =>
//       props.list.map((menu: MenuType, index: number) => {
//         return (
//           menu.children.length > 0 && (
//             <Menu.SubMenu
//               key={menu.path}
//               title={
//                 <>
//                   <span>{menu.path}</span>
//                 </>
//               }
//             >
//               {menu.children.map((menuChild, childIndex) => (
//                 <>
//                   {menuChild.children.length === 0 ? (
//                     <Menu.Item key={menuChild.path}>{menuChild.path}</Menu.Item>
//                   ) : (
//                     <Nest list={menuChild.children} />
//                   )}
//                 </>
//               ))}
//             </Menu.SubMenu>
//           )
//         );
//       });
//   }
// });
