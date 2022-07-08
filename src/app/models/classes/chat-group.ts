import { Message } from '../interfaces/message';
import User from './user';

export class ChatGroup {
  id?: string;
  date?: Date;
  photo?: string;
  users?: User[];
  msg?: Message[];
  constructor(id?: string, date?: Date, photo?: string, users?: User[], msg?: Message[]) {
    this.id = id;
    this.date = date;
    this.photo = photo;
    this.users = users;
    this.msg = msg;
  }
}
