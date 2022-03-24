import * as echarts from 'echarts';
import theme from '@/config/theme.json';

export const themeLight = 'themeLight';

echarts.registerTheme(themeLight, theme);

export default echarts;
