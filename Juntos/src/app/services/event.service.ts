import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import {Observable} from 'rxjs';
import {documentId} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;
  eventList: Event[] = [];

  constructor(private afs: AngularFirestore) {
    this.eventsCollections = this.afs.collection('events');
  }

  getAllEvents(){
    return this.afs.collection('events').snapshotChanges();
  }

  async addEvent(event: Event): Promise<void>{
    event.eventId = this.afs.createId();
    const data = JSON.parse(JSON.stringify(event));
    await this.eventsCollections.doc(event.eventId).set(data)
     .catch((err) => console.log(err));
  }
  async saveEventAsDraft(event: Event): Promise<void>{
    event.eventId = this.afs.createId();
    const data = JSON.parse(JSON.stringify(event));
    await this.afs.collection('event-drafts').doc(event.eventId).set(data)
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

  /*DEPRECATED*/
  getAttendedEventsForOneUser(userId: string){
      const userEventCollection = this.afs.collection('events',
              ref => ref.where('participants', 'array-contains', userId));
      return userEventCollection.valueChanges();
  }


}
