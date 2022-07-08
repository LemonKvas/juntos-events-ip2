import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Message} from "../models/interfaces/message";

/**
 * DE:
 * Service wird genutzt, um dem Support eine Nachricht zu senden.
 * EN:
 * Service is used to send a message to the support.
 */
@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private readonly supportCollections: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.supportCollections = this.afs.collection('support');
  }

  /**
   * DE:
   * Diese Methode speichert ein Objekt von dem Typ 'Message' in die Firebase Collection 'support'.
   * EN:
   * This method stores an object of the type 'Message' into the Firebase collection 'support'.
   * @param message
   */
  async addSupportMessage(message: Message){
    message.id = this.afs.createId();
    const data = JSON.parse(JSON.stringify(message));
    await this.supportCollections.doc(message.id).set(data);
  }
}
