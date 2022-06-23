import {Message} from '../interfaces/message';
import User from '../classes/user';

export class ChatGroup {
  id?: string;
  name?: string;
  msg?: Message[];
  users?: User[];
  date?: Date;
  photo?: string;
  constructor(id?: string, name?: string, msg?: Message[], users?: User[], date?: Date, photo?: string) {
    this.id = id;
    this.name = name;
    this.msg = msg;
    this.users = users;
    this.date = date;
    this.photo = photo;
  }
}
