import {Message} from './message';
import User from '../classes/user';

export interface ChatGroup {
  id?: string;
  name?: string;
  msg?: Message[];
  users?: User[];
}
