import { Injectable } from '@angular/core';
import {UserDataService} from './user-data.service';
import User from '../models/classes/user';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/classes/chat-group';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Event} from '../models/classes/event.model';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat/app';

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
    this.getCurrentUser();
  }
  async getCurrentUser(){
    this.currentUser = await this.userService.getCurrentUser();
  };
  getChatGroup(id: string){
    return this.chatsCollections.doc(id).snapshotChanges();
  }
  getAllChatsFromUser(){
    return this.afs.collection('chats', ref => ref.where('users', '==', this.currentUser.userId)).snapshotChanges();
  }
  async createChat(user: User){
    this.chatUser = user;
    this.groupChat = new ChatGroup(
      this.afs.createId(),
      this.chatUser.firstName,
      [],
      [this.currentUser, this.chatUser],
      new Date(),
      this.chatUser.photoUrl
    );
    return this.chatsCollections.doc(this.groupChat.id).set(this.groupChat)
      .catch((err) => console.log('Error: ', err));
  }
  async addChatMessage(msg: Message){
    msg.id = this.afs.createId();
    msg.creator = this.currentUser.userId;
    const data = JSON.parse(JSON.stringify(msg));
    await this.chatsCollections.doc(msg.chatId).set(data)
      .catch((err) => console.log('Error: ', err));
  }
}
