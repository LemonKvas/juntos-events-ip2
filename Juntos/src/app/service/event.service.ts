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
    event.eventId = this.afs.createId();
    const data = JSON.parse(JSON.stringify(event));
    await this.eventsCollections.doc(event.eventId).set(data)
     .catch((err) => console.log(err));
  }

  removeEvent(id: string){
    return this.eventsCollections.doc(id).delete();
  }
}
