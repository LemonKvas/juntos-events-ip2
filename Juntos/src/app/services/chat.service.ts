import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {UserDataService} from './user-data.service';
import User from '../models/classes/user';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/classes/chat-group';
import {Observable} from 'rxjs';
import {getDoc} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import {arrayUnion} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;
  groupChat: ChatGroup = new ChatGroup();
  private chatsCollections: AngularFirestoreCollection<ChatGroup>;
  private messages: Observable<Message[]>;
  constructor(private userService: UserDataService, private afs: AngularFirestore) {
    this.chatsCollections = this.afs.collection('chats');
    this.getCurrentUser().catch((err) => console.log('Error: ', err));
  }
  async getCurrentUser(){
    this.currentUser = await this.userService.getCurrentUser();
  };
  async getChatGroupById(id: string){
    const docRef = await this.chatsCollections.doc(id).ref;
    const docSnap = await getDoc(docRef);
    console.log('Fetch data: ', docSnap.data());
    return docSnap.data() as ChatGroup;
  }
  getAllChats(){
    return this.afs.collection('chats').snapshotChanges();
  }
  async getChatGroupByUsersId(id: string){
    const user1: ChatGroup[] = [];
    const user2: ChatGroup[] = [];
    const db = firebase.firestore();
    // Looking for Chats containing chat user
    await db.collection('chats')
      .where('users', 'array-contains', id)
      .get().then(snap => {
        snap.forEach(doc => {
          user1.push(doc as ChatGroup);
        });
      });
    // Looking for Chats containing current user
    await db.collection('chats')
      .where('users', 'array-contains', this.currentUser.userId)
      .get().then(snap => {
        snap.forEach(doc => {
          user2.push(doc as ChatGroup);
        });
      });
    // Looking for a match
    const result = user1.filter(u1 => user2.some(u2 => u1.id === u2.id));
    if(result.length === 1){
      return this.groupChat = result[0];
    } else {
      return this.groupChat = null;
    }
  }
  async createChat(user: User){
    await this.getChatGroupByUsersId(user.userId);
    if(this.groupChat === null){
      this.groupChat = new ChatGroup(
        this.afs.createId(),
        user.firstName,
        new Date(),
        user.photoUrl
      );
      const data = JSON.parse(JSON.stringify(this.groupChat));
      await this.chatsCollections.doc(this.groupChat.id).set(data)
        .catch((err) => console.log('Error: ', err));
      await this.addUserToChat(this.groupChat.id, user);
      await this.userService.addChat(this.groupChat, user);
    }
    return this.groupChat;
  }
  async addUserToChat(chatId: string, user: User){
    const db = firebase.firestore().collection('chats');
    const currentUser = JSON.parse(JSON.stringify(this.currentUser));
    const chatUser = JSON.parse(JSON.stringify(user));
    await db.doc(chatId).update({users: arrayUnion(currentUser.userId)});
    await db.doc(chatId).update({users: arrayUnion(chatUser.userId)});
  }
  async addChatMessage(msg: Message){
    msg.id = this.afs.createId();
    msg.creator = this.currentUser.userId;
    msg.creatorName = this.currentUser.firstName;
    const data = JSON.parse(JSON.stringify(msg));
    await this.chatsCollections.doc(msg.chatId).collection('messages').doc(msg.id).set(data);
  }
  getMessages(id: string){
    return this.afs.collection('chats').doc(id).collection('messages', ref => ref.orderBy('date', 'asc')).snapshotChanges();
  }
  getCurrentUserAllChats(){
    return this.afs.collection('user').doc(this.currentUser.userId)
      .collection('chats', ref => ref.orderBy('date', 'asc')).snapshotChanges();
  }
  async deleteChat(id: string){
    await this.chatsCollections.doc(id).delete();
  }
}
