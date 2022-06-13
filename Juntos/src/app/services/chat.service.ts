import { Injectable } from '@angular/core';
import {UserDataService} from './user-data.service';
import User from '../models/classes/user';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/interfaces/chat-group';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Event} from '../models/classes/event.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  pageTitle = 'Chat';
  currentUser: User = null;
  chatUser: User = null;
  chatMessage: Message = null;
  groupChat: ChatGroup = null;
  private chatsCollections: AngularFirestoreCollection<ChatGroup>;
  private messages: Observable<Message[]>;
  constructor(private userService: UserDataService, private afs: AngularFirestore) {
    this.chatsCollections = this.afs.collection('chats');
  }
  getCurrentUser(currentUser: User, chatUser: User){
    this.currentUser = currentUser;
    this.chatUser = chatUser;
  };
  getChatGroup(id: string){
  }
  async addChatMessage(msg: Message){
    msg.id = this.afs.createId();
    const data = JSON.parse(JSON.stringify(msg));
    await this.chatsCollections.doc(msg.chatId).set(data)
      .catch((err) => console.log(err));
  }
}
