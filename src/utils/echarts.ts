import * as echarts from 'echarts';
import themeLight from '@/config/echart-light.json';
import themeDark from '@/config/echart-dark.json';

export const ThemeLight = 'themeLight';
export const ThemeDark = 'themeDark';

echarts.registerTheme(ThemeLight, themeLight);
echarts.registerTheme(ThemeDark, themeDark);

export default echarts;
