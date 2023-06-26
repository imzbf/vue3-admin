import { MockApi } from '../type';
import component from './component';
import home from './home';
import login from './login';
import table from './table';
import user from './user';

export default [...component, ...home, ...login, ...table, ...user] as MockApi[];
