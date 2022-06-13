import { Injectable } from '@angular/core';
import {UserDataService} from './user-data.service';
import User from '../models/classes/user';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/classes/chat-group';
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
  groupChat: ChatGroup = new ChatGroup();
  private chatsCollections: AngularFirestoreCollection<ChatGroup>;
  private messages: Observable<Message[]>;
  constructor(private userService: UserDataService, private afs: AngularFirestore) {
    this.chatsCollections = this.afs.collection('chats');
  }
  async getCurrentUser(){
    this.currentUser = await this.userService.getCurrentUser();
  };
  getChatGroup(id: string){
  }
  async createChat(){
    this.groupChat = new ChatGroup(
      this.afs.createId(),
      this.chatUser.firstName,
      [],
      [this.currentUser, this.chatUser],
      new Date(),
      this.chatUser.photoUrl
    );
    return this.afs.collection('chats').add(this.groupChat);
  }
  async addChatMessage(msg: Message){
    msg.id = this.afs.createId();
    const data = JSON.parse(JSON.stringify(msg));
    await this.chatsCollections.doc(msg.chatId).set(data)
      .catch((err) => console.log(err));
  }
}
