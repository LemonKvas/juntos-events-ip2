import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { Event } from '../model/event.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;

  constructor(private afs: AngularFirestore) {
    this.eventsCollections = this.afs.collection('events');
  }
  async addEvent(event: Event): Promise<void>{
    try {
      event.eventId = this.afs.createId();
    } catch (e) {
      console.log(e);
    }
    console.log(event);
    await this.afs.doc<Event>(`events/${event.eventId}/`).set(event);
  }
  removeEvent(id: string){
    return this.eventsCollections.doc(id).delete();
  }
}
