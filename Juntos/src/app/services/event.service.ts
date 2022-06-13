import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import {Observable} from 'rxjs';
import {documentId} from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import {CreatedEvent} from '../models/interfaces/created-event';
import {arrayUnion} from '@angular/fire/firestore';

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
  getAllEvents(){
    return this.afs.collection('events').snapshotChanges();
  }
  getPublishedEvents(){
    return this.afs.collection('events', ref => ref.where('publishStatus', '==', true)).snapshotChanges();
  }
  getEventDrafts(){
    return this.afs.collection('events', ref => ref.where('publishStatus', '==', false)).snapshotChanges();
  }
  async addEvent(event: Event): Promise<void>{
    event.eventId = this.afs.createId();
    this.eventId = event.eventId;
    const data = JSON.parse(JSON.stringify(event));
    await this.eventsCollections.doc(event.eventId).set(data)
     .catch((err) => console.log(err));
  }
  async removeEvent(id: string){
    await this.eventsCollections.doc(id).delete();
  }

  getMultipleEventsByEventId(eventIds: []){
    const userEventCollection = this.afs.collection('events',
        ref => ref.where(documentId(), 'in', eventIds));
    return userEventCollection.valueChanges();
  }

  async getEventById(id: string){
    const document = await this.eventsCollections.doc(id).get().toPromise();
    return document.data();
  }
  async createdEventData(publishStatus: boolean){
    return this.createdEvent = {
      eventId: this.eventId,
      publishStatus,
    };
  }
  getPrice(event: Event): string{
    if(event.price === '0' || event.price === undefined || event.price === null) {
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }
  freeEvent(event: Event): boolean{
    if(event.price === '0' || event.price === 'Kostenlos'){
      this.getPrice(event);
      return false;
    } else {
      return true;
    }
  }
  async addRegisteredUser(event: Event){
    const db = firebase.firestore().collection('events');
    await db.doc(event.eventId).update({participants: arrayUnion(...event.participants)});
  }
}
