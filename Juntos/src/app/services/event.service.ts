import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import {Observable} from 'rxjs';
import {documentId} from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import {CreatedEvent} from '../models/interfaces/created-event';
import {arrayUnion} from '@angular/fire/firestore';
import {getDoc} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: Event[] = [];
  eventId = '';
  createdEvent: CreatedEvent;
  private eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;
  constructor(private afs: AngularFirestore) {
    this.eventsCollections = this.afs.collection('events');
  }

  /**
   * Return all events from firebase collection 'events'.
   */
  getAllEvents(){
    return this.afs.collection('events').snapshotChanges();
  }

  /**
   * Return all events that has been published from firebase collection 'events'.
   * Collection is filtered by the field 'publishStatus' and if its value is true.
   */
  getPublishedEvents(){
    return this.afs.collection('events', ref => ref.where('publishStatus', '==', true)).snapshotChanges();
  }

  /**
   * Return all created events that has been saved as drafts from firebase collection 'events'.
   * Collection is filtered by the field 'publishStatus' and if its value is false.
   */
  getEventDrafts(){
    return this.afs.collection('events', ref => ref.where('publishStatus', '==', false)).snapshotChanges();
  }

  /**
   * Add given event as a new document to the firebase collection 'events'.
   *
   * @param event
   */
  async addEvent(event: Event): Promise<void>{
    event.eventId = this.afs.createId();
    this.eventId = event.eventId;
    const data = JSON.parse(JSON.stringify(event));
    await this.eventsCollections.doc(event.eventId).set(data)
     .catch((err) => console.log(err));
  }

  /**
   * Remove event by the given ID.
   * Document is found by given ID and removed from the firebase collection 'events'.
   *
   * @param id
   */
  async removeEvent(id: string){
    await this.eventsCollections.doc(id).delete();
  }

  /**
   * Looking for matching events with the given array of event IDs in the firebase collection 'events'.
   * This function helps to get all events information that an user is partaking in.
   *
   * @param eventIds
   * @returns Event[]
   */
  getMultipleEventsByEventId(eventIds: []){
    const userEventCollection = this.afs.collection('events',
        ref => ref.where(documentId(), 'in', eventIds));
    return userEventCollection.valueChanges();
  }

  /**
   * Return an event by the given ID from the firebase collection 'events'.
   *
   * @param id
   * @returns EventData
   */
  async getEventById(id: string){
    const docRef = this.eventsCollections.doc(id).ref;
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Event;
  }

  /**
   *
   * @param publishStatus
   */
  async createdEventData(publishStatus: boolean){
    return this.createdEvent = {
      eventId: this.eventId,
      publishStatus,
    };
  }

  /**
   * Changed event price by given ID.
   * If the field value is 0, null or undefined, this event is free, and it's value will be changed to 'kostenlos'.
   *
   * @param event
   * @returns eventPrice
   */
  getPrice(event: Event): string{
    if(event.price === '0' || event.price === undefined || event.price === null) {
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }

  /**
   * Check if event price is 0 or 'kostenlos' and if it's the case, it will return true or else false.
   * This function helps to display the event price on different pages or components.
   *
   * @param event
   * @returns boolean
   */
  freeEvent(event: Event): boolean{
    if(event.price === '0' || event.price === 'Kostenlos'){
      this.getPrice(event);
      return false;
    } else {
      return true;
    }
  }

  /**
   * Add new participants array to an event in the firebase collection 'events'.
   * Only new participants from the array will be added so there will not be any duplicates.
   *
   * @param event
   */
  async addRegisteredUser(event: Event){
    const db = firebase.firestore().collection('events');
    await db.doc(event.eventId).update({participants: arrayUnion(...event.participants)});
  }
}
