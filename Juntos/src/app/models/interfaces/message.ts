import User from '../classes/user';

export interface Message {
  id?: string;
  chatName?: string;
  messages?: Message[];
  users?: User[];
}
