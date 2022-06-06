import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat/app';
import {CreatedEvent} from '../models/interfaces/created-event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: Event[] = [];
  eventId: string = '';
  createdEvent: CreatedEvent;
  private eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;
  constructor(private afs: AngularFirestore) {
    this.eventsCollections = this.afs.collection('events');
  }
  getAllEvents(){
    return this.afs.collection('events').snapshotChanges();
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
  async getEventById(id: string){
    const document = await this.eventsCollections.doc(id).get().toPromise();
    return document.data();
  }
  async createdEventData(publishStatus: boolean){
    return this.createdEvent = {
      eventId: this.eventId,
      publishStatus: publishStatus,
    }
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
    let db = firebase.firestore().collection('events');
    await db.doc(event.eventId).update({participants: firebase.firestore.FieldValue.arrayUnion(...event.participants)});
  }
}
