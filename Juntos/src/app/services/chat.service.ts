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

  /**
   * This method will set value of the variable currentUser by calling getCurrentUser()
   * from userService.
   */
  async getCurrentUser(){
    this.currentUser = await this.userService.getCurrentUser();
  };

  /**
   * This method will return chat data from firestore collection 'chats' by given id.
   *
   * @example
   * Call it with an id as string
   * getChatGroupById('j894g5')
   *
   * @param id
   * @returns chatData
   */
  async getChatGroupById(id: string){
    const docRef = await this.chatsCollections.doc(id).ref;
    const docSnap = await getDoc(docRef);
    console.log('Fetch data: ', docSnap.data());
    return docSnap.data() as ChatGroup;
  }
  /**
   * This method returns all document from the firebase collection 'chats'
   *
   * @returns promise
   */
  getAllChats(){
    return this.afs.collection('chats').snapshotChanges();
  }

  /**
   * This method returns chat information between two users by the given user id.
   * Collection 'chats' will be filtered by the users[] containing the given id
   * and the current user id. Both arrays will be compared and a matched chat
   * group will be returned.
   *
   * @example
   * Call it with a user id as string
   * getChatGroupByUsersId('4bh8r2')
   *
   * @param id
   * @returns chatData
   */
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

  /**
   * This method will create a chat group with the given id and the current user id.
   * getChatGroupByUsersId() will be called first to check if there is already an
   * existing chat. If the if-statement is true, a new chat will be created and added
   * to the firebase collection 'chats'.
   *
   * The addUserToChat() will be called to add both user data into chats users[].
   * Afterwards addChat() from userService will be called to add chat data into
   * both user data.
   *
   * This method will return data of the new created chat or of existing chat.
   *
   * @example
   * Call it with a user object
   * createChat(user)
   *
   * @param user
   * @returns chatData
   */
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

  /**
   * This method will update the users[] of chat by given id with the given user id and current user id.
   *
   * @example
   * Call it with an id as string and a user object
   * addUserToChat('9z4h32', user)
   *
   * @param chatId
   * @param user
   */
  async addUserToChat(chatId: string, user: User){
    const db = firebase.firestore().collection('chats');
    const currentUser = JSON.parse(JSON.stringify(this.currentUser));
    const chatUser = JSON.parse(JSON.stringify(user));
    await db.doc(chatId).update({users: arrayUnion(currentUser.userId)});
    await db.doc(chatId).update({users: arrayUnion(chatUser.userId)});
  }

  /**
   * This method will add given data of type 'Message' to the firebase collection 'chats'.
   *
   * @example
   * Call it with an object of type 'Message'
   * addChatMessage(newMessage)
   *
   * @param msg
   */
  async addChatMessage(msg: Message){
    msg.id = this.afs.createId();
    msg.creator = this.currentUser.userId;
    msg.creatorName = this.currentUser.firstName;
    const data = JSON.parse(JSON.stringify(msg));
    await this.chatsCollections.doc(msg.chatId).collection('messages').doc(msg.id).set(data);
  }

  /**
   * This method will return all documents from the subcollection 'messages' by the given id of the parent
   * collection 'chats' and ordered the data ascending by field value 'date'.
   *
   * @example
   * Call it with an id as string
   * getMessages('h89t43')
   *
   * @param id
   */
  getMessages(id: string){
    return this.afs.collection('chats').doc(id).collection('messages', ref => ref.orderBy('date', 'asc')).snapshotChanges();
  }

  /**
   * This method will return all documents from the subcollection 'chats' by the given id of the parent
   * collection 'user' and ordered the data ascending by field value 'date'.
   */
  getCurrentUserAllChats(id: string){
    return this.afs.collection('user').doc(id)
      .collection('chats', ref => ref.orderBy('date', 'asc')).snapshotChanges();
  }

  getChatsOfCurrentUser(){
    return this.afs.collection('chats', ref => ref.where('users', 'array-contains', this.currentUser.userId)).snapshotChanges();
  }
  /**
   * This method will delete a document from the firestore collection 'chats' by the given id.
   *
   * @example
   * Call it with an id as string
   * deleteChat('u89b2q')
   *
   * @param id
   */
  async deleteChat(id: string){
    await this.chatsCollections.doc(id).delete();
  }
}
