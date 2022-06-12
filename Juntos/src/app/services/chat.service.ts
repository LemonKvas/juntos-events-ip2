import { Injectable } from '@angular/core';
import {UserDataService} from './user-data.service';
import User from '../models/classes/user';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/interfaces/chat-group';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  pageTitle = 'Chat';
  currentUser: User = null;
  chatUser: User = null;
  chatMessage: Message = null;
  groupChat: ChatGroup = null;
  constructor(private userService: UserDataService, private afs: AngularFirestore) {
  }
  getCurrentUser(currentUser: User, chatUser: User){
    this.currentUser = currentUser;
    this.chatUser = chatUser;
  };
  getChatGroup(id: string){
  }
  addChatMessage(msg){
    return this.afs.collection('messages').add({
      msg,
      from: this.currentUser,
      createdAt: new Date(),
      fromName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
    });
  }
}
