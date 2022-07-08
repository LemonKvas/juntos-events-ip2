import { Message } from '../interfaces/message';
import User from './user';

/**
 * DE:
 * Klasse um eine Chat Gruppe zu repräsentieren.
 * EN:
 * Class to represent a chat group.
 */
export class ChatGroup {
  id?: string;
  date?: Date;
  photo?: string;
  users?: User[];
  msg?: Message[];

  /**
   * DE:
   * Setzt alle benötigten Parameter fest.
   * EN:
   * Sets all required parameters.
   * @param id
   * @param date
   * @param photo
   * @param users
   * @param msg
   */
  constructor(
    id?: string,
    date?: Date,
    photo?: string,
    users?: User[],
    msg?: Message[]) {
    this.id = id;
    this.date = date;
    this.photo = photo;
    this.users = users;
    this.msg = msg;
  }
}
