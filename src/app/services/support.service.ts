import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Message } from '../models/interfaces/message';

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
  protected readonly supportCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.supportCollection = this.afs.collection('support');
  }

  /**
   * DE:
   * Diese Methode speichert ein Objekt von dem Typ 'Message' in die Firebase Collection 'support'.
   * EN:
   * This method stores an object of the type 'Message' into the Firebase collection 'support'.
   * @param message
   */
  async addSupportMessage(message: Message) {
    message.id = this.afs.createId();
    const data = JSON.parse(JSON.stringify(message));
    await this.supportCollection.doc(message.id).set(data);
  }


  /**
   * DE:
   * Ruft die Methode getTicketsByStatus(status) auf mit dem Parameter
   * 0 und gibt daraufhin ein Observable zurück
   * EN:
   * Calls the getTicketsByStatus(status) method with the parameter
   * 0 and then returns an observable
   * @return Observable
   */
  async getAllOpenTickets(){
    return await this.getTicketsByStatus(0);
  }

  /**
   * DE:
   * Ruft die Methode getTicketsByStatus(status) auf mit dem Parameter
   * 1 und gibt daraufhin ein Observable zurück
   * EN:
   * Calls the getTicketsByStatus(status) method with the parameter
   * 1 and then returns an observable
   *
   * @return Promise<Observable>
   */
  async getAllInProcessTickets(){
    return await this.getTicketsByStatus(1);
  }

  /**
   * DE:
   * Ruft die Methode getTicketsByStatus(status) auf mit dem Parameter
   * 2 und gibt daraufhin ein Observable zurück
   * EN:
   * Calls the getTicketsByStatus(status) method with the parameter
   * 2 and then returns an observable
   * @return Promise<Observable>
   */
  async getAllDoneTickets(){
    return await this.getTicketsByStatus(2);
  }

  /**
   * DE:
   * Ruft im Firestore die Collection support auf, in deren Dokumente das Feld
   * inProcess dem eingegebenen Parameter status entspricht. Daraufhin wird ein Observable
   * dieser Collection zurückgegeben, wobei die einzelnen darin enthaltenen Dokumente um ihr
   * Dokumenten ID ergänzt werden.
   * EN:
   * Calls the collection support in the Firestore, in whose documents the field
   * inProcess corresponds to the entered parameter status. Thereupon an observable
   * of this collection is returned, whereby the individual documents contained and then are supplemented by their
   * document ID is added to the individual documents contained therein.
   *
   * @param status
   *
   * @return Promise<Observable>
   */
  async getTicketsByStatus(status: number){
    const supportCollection = await this.afs.collection('support', (ref) =>
        ref.where("inProcess", '==', status));
    return supportCollection.valueChanges({idField: 'ticketId'});
  }

  /**
   * DE:
   * Ändert den Wert inProcess des Documents in der Collection support des Firestores, welches
   * die ID des Parameters ticketId besitzt, zu dem im Parameter status mitgegebenen Wert.
   * EN:
   * Changes the value inProcess of the document in the collection support of the firestore which
   * has the ID of the parameter ticketId, to the value given in the parameter status.
   *
   * @param ticketId
   * @param status
   */
  async changeWorkingStatusOfTicket(ticketId, status){
    await this.supportCollection.doc(ticketId).update({
      inProcess: status
        }
    )
  }

}
