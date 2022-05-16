import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Event } from '../model/event.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[];
  private event: Event;

  constructor(private firestore: Firestore) {
  }
  addEvent(event: Event) {
    const eventRef = collection(this.firestore, 'events');
    return addDoc(eventRef, event);
  }
  deleteEvent(event: Event){
    const eventDocRef = doc(this.firestore, `events/${event.eventId}`);
    return deleteDoc(eventDocRef);
  }
  updateEvent(event: Event){
    const eventDocRef = doc(this.firestore, `events/${event.eventId}`);
    Object.assign(this.event, event);
    return updateDoc(eventDocRef, {event: this.event});
  }
  getAllEvents(): Observable<Event> {
    const eventRef = collection(this.firestore, 'events');
    return collectionData(eventRef) as Observable<Event>;
  }
  getEventById(id: string): Observable<Event>{
    const eventDocRef = doc(this.firestore, `events/${id}`);
    return docData(eventDocRef, {idField: id}) as Observable<Event>;
  }
}
