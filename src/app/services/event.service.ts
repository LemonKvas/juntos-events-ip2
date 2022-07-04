import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import { Observable } from 'rxjs';
import { documentId } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { CreatedEvent } from '../models/interfaces/created-event';
import { arrayUnion } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { GeoService } from 'src/app/services/geo.service';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: Event[] = [];
  eventId = '';
  createdEvent: CreatedEvent;
  private eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;
  constructor(
    private afs: AngularFirestore,
    private geoService: GeoService,
    private router: Router
  ) {
    this.eventsCollections = this.afs.collection('events');
  }
  getAllEvents() {
    return this.afs.collection('events').snapshotChanges();
  }
  getPublishedEvents() {
    return this.afs
      .collection('events', (ref) => ref.where('publishStatus', '==', true))
      .snapshotChanges();
  }
  getEventDrafts() {
    return this.afs
      .collection('events', (ref) => ref.where('publishStatus', '==', false))
      .snapshotChanges();
  }
  async addEvent(event: Event): Promise<void> {
    event.eventId = this.afs.createId();
    this.eventId = event.eventId;
    const data = JSON.parse(JSON.stringify(event));
    await this.geoService.getLongLat(event.address).then(async (longlatOb) => {
      await longlatOb.subscribe((longlat) => {
        data.lat = longlat['latt'];
        data.long = longlat['longt'];
        this.eventsCollections
          .doc(event.eventId)
          .set(data)
          .catch((err) => console.log(err));
      });
    });
  }
  async removeEvent(id: string) {
    await this.eventsCollections.doc(id).delete();
  }

  getMultipleEventsByEventId(eventIds: []) {
    const userEventCollection = this.afs.collection('events', (ref) =>
      ref.where(documentId(), 'in', eventIds)
    );
    return userEventCollection.valueChanges();
  }

  async getEventById(id: string) {
    const docRef = this.eventsCollections.doc(id).ref;
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Event;
  }
  async createdEventData(publishStatus: boolean) {
    return (this.createdEvent = {
      eventId: this.eventId,
      publishStatus
    });
  }
  getPrice(event: Event): string {
    if (event.price === '0' || event.price === undefined || event.price === null) {
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }
  freeEvent(event: Event): boolean {
    if (event.price === '0' || event.price === 'Kostenlos') {
      this.getPrice(event);
      return false;
    } else {
      return true;
    }
  }
  async addRegisteredUser(event: Event) {
    const db = firebase.firestore().collection('events');
    await db.doc(event.eventId).update({ participants: arrayUnion(...event.participants) });
  }

  async navigateToEvent(id) {
    const event = await this.getEventById(id);
    const navigationExtras: NavigationExtras = {
      state: {
        name: event.name,
        photoURLs: event.photoURLs,
        creationDate: event.creationDate,
        eventDate: event.eventDate,
        price: event.price,
        bio: event.bio,
        categories: event.categories,
        participants: event.participants,
        maxParticipants: event.maxParticipants,
        address: event.address,
        publishStatus: event.publishStatus,
        eventId: event.eventId,
        creatorId: event.creatorId
      }
    };
    if (event.long && event.lat) {
      navigationExtras.state.long = event.long;
      navigationExtras.state.lat = event.lat;
    }
    await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
  }

  /**
   * Gibt ein Observable zurück mit allen Events, deren Wert "promoted" auf true gesetzt ist
   */
  getPromotedEvents() {
    return this.afs.collection('events', (ref) => ref.where('promoted', '==', true)).valueChanges();
  }
}
