import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserDataService } from './user-data.service';
import User from '../models/classes/user';
import { Message } from '../models/interfaces/message';
import { ChatGroup } from '../models/classes/chat-group';
import { Observable } from 'rxjs';
import { getDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { arrayUnion } from '@angular/fire/firestore';

/**
 * DE:
 * Service der genutzt wird, um Chats zu erstellen und Nachrichten zu versenden.
 * EN:
 * Service used to create chats and send messages.
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;
  groupChat: ChatGroup = new ChatGroup();
  private chatsCollections: AngularFirestoreCollection<ChatGroup>;
  private messages: Observable<Message[]>;

  /**
   * DE:
   * Initialisiert den/die eingeloggten NutzerIn und setzt die Collection Referenz für den Service.
   * EN:
   * Initializes the logged in user and sets the collection reference for the service.
   *
   * @param userService
   * @param afs
   */
  constructor(private userService: UserDataService, private afs: AngularFirestore) {
    this.chatsCollections = this.afs.collection('chats');
    this.getCurrentUser().catch((err) => console.log('Error: ', err));
  }

  /**
   * DE:
   * Diese Methode holt die Daten des/der eingeloggten NutzerIn.
   * EN:
   * This function will set value of the variable currentUser by calling getCurrentUser()
   * from userService.
   */
  async getCurrentUser() {
    this.currentUser = await this.userService.getCurrentUser();
  }

  /**
   * DE:
   * Diese Methode holt die Daten von einem Chat anhand der Chat Gruppen ID.
   * EN:
   * This function will return chat data from firestore collection 'chats' by given chat id.
   *
   * @example
   * Call it with a chat id as a string
   * getChatGroupById(chatId: string)
   *
   * @param chatId
   * @returns chatData
   */
  async getChatGroupById(chatId: string) {
    const docRef = await this.chatsCollections.doc(chatId).ref;
    const docSnap = await getDoc(docRef);
    return docSnap.data() as ChatGroup;
  }
  /**
   * DE:
   * Diese Methode sucht den Chat der NutzerInnen anhand der IDs des/der eingeloggten NutzerIn und
   * dem/der mitgegebenen NutzerIn ID.
   * EN:
   * This function returns chat information between two users by the given user id.
   * Collection 'chats' will be filtered by the users[] containing the given id
   * and the current user id. Both arrays will be compared and a matched chat
   * group data will be returned.
   *
   * @example
   * Call it with a user id as string
   * getChatGroupByUsersId('4bh8r2')
   *
   * @param id
   * @returns chatData
   */
  async getChatGroupByUsersId(id: string) {
    const user1: ChatGroup[] = [];
    const user2: ChatGroup[] = [];
    const db = firebase.firestore();
    // Looking for Chats containing chat user
    await db
      .collection('chats')
      .where('users', 'array-contains', id)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          user1.push(doc as ChatGroup);
        });
      });
    // Looking for Chats containing current user
    await db
      .collection('chats')
      .where('users', 'array-contains', this.currentUser.userId)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          user2.push(doc as ChatGroup);
        });
      });
    // Looking for a match
    const result = user1.filter((u1) => user2.some((u2) => u1.id === u2.id));
    if (result.length === 1) {
      return (this.groupChat = result[0]);
    } else {
      return (this.groupChat = null);
    }
  }

  /**
   * DE:
   * Diese Methode erstellt eine Chat Gruppe mit der mitgegebenen ID und der ID von dem/der eingeloggten
   * NutzerIn. Die getChatGroupByUsersId() wird zuerst aufgerufen, um zu prüfen, ob es bereits einen
   * Chat existiert. Wenn kein Chat gefunden wurde, wird ein neuer Chat erstellt und zur Firebase-Sammlung
   * 'chats' hinzugefügt.
   *
   * Die Methode addUserToChat() wird aufgerufen, um beide Benutzerdaten in die Chats users[] einzufügen.
   * Anschließend wird addChat() von userService aufgerufen, um die Chatdaten zu beiden Benutzerdaten
   * hinzuzufügen.
   *
   * Am Ende gibt die Methode die Daten des neu erstellten Chats oder eines bestehenden Chats zurück.
   *
   * EN:
   * This method will create a chat group with the given id and the current user id.
   * getChatGroupByUsersId() will be called first to check if there is already an
   * existing chat. If the if-statement is true, a new chat will be created and added
   * to the firebase collection 'chats'.
   *
   * The addUserToChat() will be called to add both user data into chats users[].
   * Afterwards addChat() from userService will be called to add chat data into
   * both user data.
   *
   * This method will return data of the new created chat or of an existing chat.
   *
   * @example
   * Call it with a user object
   * createChat(user: User)
   *
   * @param user
   * @returns chatData
   */
  async createChat(user: User) {
    // Looking for existing chat
    await this.getChatGroupByUsersId(user.userId);
    // If no existing chat was found, create a new chat
    if (this.groupChat === null) {
      this.groupChat = new ChatGroup(this.afs.createId(), new Date(), user.photoUrl);
      const data = JSON.parse(JSON.stringify(this.groupChat));
      // Add new created chat to collection 'chats'
      await this.chatsCollections
        .doc(this.groupChat.id)
        .set(data)
        .catch((err) => console.log('Error: ', err));
      // Add both users to sub-collection 'users' of new created chat
      await this.addUserToChat(this.groupChat.id, user);
      // Add both users as chat partners into each other sub-collection 'chatPartners'
      await this.userService.addChat(user);
    }
    // For existing chat, but maybe deleted both users will be added as each other chat partners again
    // (chat is still available if one user is still left in sub-collection 'users' of chat)
    await this.userService.addChatPartner(this.groupChat.id, user);
    // return chat information
    return this.groupChat;
  }

  /**
   * DE:
   * Diese Methode aktualisiert die users[] des Chats mit der angegebenen ID und dem/der eingeloggten
   * NutzerIn.
   * EN:
   * This function will update the users[] of chat by given ID with the given user id and current user ID.
   *
   * @example
   * Call it with an chat id as a string and a user object
   * addUserToChat(chatId: string, user: User)
   *
   * @param chatId
   * @param user
   */
  async addUserToChat(chatId: string, user: User) {
    const db = firebase.firestore().collection('chats');
    const currentUser = JSON.parse(JSON.stringify(this.currentUser));
    const chatUser = JSON.parse(JSON.stringify(user));
    // Add both users to sub-collection 'users' of collection 'chats'
    await this.chatsCollections
      .doc(chatId)
      .collection('users')
      .doc(currentUser.userId)
      .set(currentUser);
    await this.chatsCollections.doc(chatId).collection('users').doc(chatUser.userId).set(chatUser);
    // Add users to users array of chat
    await db.doc(chatId).update({ users: arrayUnion(currentUser.userId) });
    await db.doc(chatId).update({ users: arrayUnion(chatUser.userId) });
  }

  /**
   * DE:
   * Diese Funktion fügt der Firebase Sammlung "Chats" die übergebenen Daten vom Typ "Message" hinzu.
   * EN:
   * This function will add given data of type 'Message' to the firebase collection 'chats'.
   *
   * @example
   * Call it with an object of type 'Message'
   * addChatMessage(message: Message)
   *
   * @param msg
   */
  async addChatMessage(msg: Message) {
    msg.id = this.afs.createId();
    msg.creator = this.currentUser.userId;
    const data = JSON.parse(JSON.stringify(msg));
    // Add message as new document to sub-collection 'messages' of chat
    await this.chatsCollections.doc(msg.chatId).collection('messages').doc(msg.id).set(data);
  }

  /**
   * DE:
   * Diese Methode gibt alle Dokumente aus der Untersammlung 'messages' nach der angegebenen ID der
   * übergeordneten Sammlung 'chats' und sortiert die Daten aufsteigend nach dem Feldwert 'date'.
   * EN:
   * This function will return all documents from the sub-collection 'messages' by the given id of the
   * parent collection 'chats' and ordered the data ascending by field value 'date'.
   *
   * @example
   * Call it with a chat id as a string
   * getMessages(chatID: string)
   *
   * @param chatId
   * @return messages[]
   */
  getMessages(chatId: string) {
    return this.afs
      .collection('chats')
      .doc(chatId)
      .collection('messages', (ref) => ref.orderBy('date', 'asc'))
      .snapshotChanges();
  }

  /**
   * DE:
   * Diese Methode löscht den Chat Partner mit der angegebenen ID aus der Untersammlung 'chatPartners'
   * des/der angemeldeten BenutzerIn und löscht den aktuellen/angemeldeten Benutzer aus der
   * Untersammlung 'users'. Wenn die Untersammlung 'users' leer ist, wird der Chat aus der
   * Sammlung 'chats' gelöscht.
   * EN:
   * This function will delete chat partner with given id from the sub-collection 'chatPartners' of
   * the current / logged-in user and delete the current / logged-in user from the sub-collection 'users'.
   * If sub-collection 'users' is empty, chat document will be deleted from collection 'chats'.
   *
   * @example
   * Call it with a user id as a string
   * deleteChat(userId: string)
   *
   * @param userId
   */
  async deleteChat(userId: string) {
    const chatData = await this.getChatGroupByUsersId(userId);
    // Get size / length of sub-collection 'users' from the collection 'chats'
    let usersSize;
    await this.chatsCollections
      .doc(chatData.id)
      .collection('users')
      .get()
      .subscribe((res) => {
        usersSize = res.size;
      });
    // Delete chat partner from current / logged-in user sub-collection 'chatPartners'
    await this.afs
      .collection('user')
      .doc(this.currentUser.userId)
      .collection('chatPartners')
      .doc(userId)
      .delete();
    if (usersSize <= 1) {
      // Delete chat from collection 'chats'
      await this.chatsCollections.doc(chatData.id).delete();
    } else {
      // Delete current / logged-in user from chats sub-collection 'users'
      await this.chatsCollections
        .doc(chatData.id)
        .collection('users')
        .doc(this.currentUser.userId)
        .delete();
    }
  }

  /**
   * DE:
   * Diese Methode löscht eine Nachricht aus der Untersammlung 'messages' der Sammlung 'chats' mit
   * der gegebenen Daten.
   * EN:
   * This function will delete message from sub-collection 'messages' of collection 'chats' with
   * given data.
   *
   * @example
   * Call it with an object of type 'Message'
   * deleteMessage(message: Message)
   *
   * @param msg
   */
  async deleteMessage(msg: Message) {
    await this.chatsCollections.doc(msg.chatId).collection('messages').doc(msg.id).delete();
  }
}
