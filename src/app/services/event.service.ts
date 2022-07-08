import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import { Observable } from 'rxjs';
import { arrayRemove, documentId } from '@angular/fire/firestore';

import firebase from 'firebase/compat/app';
import { CreatedEvent } from '../models/interfaces/created-event';
import { arrayUnion } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { ModalController } from '@ionic/angular';
import { UserEventsModalComponent } from 'src/app/components/user-events-modal/user-events-modal.component';
import { UserDataService } from 'src/app/services/user-data.service';
import { GeoService } from 'src/app/services/geo.service';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventList: Event[] = [];
  eventId = '';
  createdEvent: CreatedEvent;
  modalUserEvents?;
  private readonly eventsCollections: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;
  constructor(
    private afs: AngularFirestore,
    public modalController: ModalController,
    private userDataService: UserDataService,
    private router: Router,
    private geoService: GeoService
  ) {
    this.eventsCollections = this.afs.collection('events');
  }

  /**
   * This function will return an observable with all events.
   */
  getAllEvents() {
    return this.afs.collection('events').snapshotChanges();
  }

  /**
   * This function will return an observable with all published events.
   */
  getPublishedEvents() {
    return this.afs
      .collection('events', (ref) => ref.where('publishStatus', '==', true))
      .snapshotChanges();
  }

  /**
   * This function will return an observable with all event drafts
   */
  getEventDrafts() {
    return this.afs
      .collection('events', (ref) => ref.where('publishStatus', '==', false))
      .snapshotChanges();
  }

  async addEvent(event: Event): Promise<void> {
    event.eventId = this.afs.createId();
    this.eventId = event.eventId;
    const data = JSON.parse(JSON.stringify(event));
    await this.geoService.getLongLat(event.address);
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
    await firebase.firestore().collection('events').doc(id).delete();
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

  /**
   * Gibt ein Observable zurück mit allen Events, deren creatorId mit dem Parameter UserId übereinstimmt.
   *
   * @param userId
   */
  getUserEvents(userId) {
    return this.afs
      .collection('events', (ref) => ref.where('creatorId', '==', userId))
      .valueChanges();
  }

  /**
   * DE:
   * Öffnet die Komponente UserEventsModalComponent als Modal und übergibt die in den Parametern übergebene
   * userId an die Komponente.
   *
   * EN:
   * Opens the UserEventsModalComponent component as a modal and passes the userId passed in the parameters
   * userId passed in parameters to the component.
   *
   * @param userId
   */
  async userEventsModal(userId) {
    const userEvModal = await this.modalController.create({
      component: UserEventsModalComponent,
      componentProps: {
        userId
      }
    });
    await userEvModal.present();
    this.modalUserEvents = userEvModal;
  }

  /**
   * DE:
   * Die eingegebene Event-ID wird auf vorhandene Teilnehmer und eine Ersteller-ID geprüft.
   * Mit Hilfe der Methoden "cancelEventsForParticipants(particpants, eventID)" und
   * "removeEventFromCreator(creatorId, eventId)" wird die Event Id aus den Nutzer Daten gelöscht.
   * Daraufhin wird das Event selber aus der Datenbank gelöscht.
   *
   * EN:
   * The entered event ID is checked for existing participants and a creator ID.
   * With the help of the methods "cancelEventsForParticipants(particpants, eventID)" and
   * "removeEventFromCreator(creatorId, eventId)" the event id is deleted from the user data.
   * Then the event itself is deleted from the database.
   *
   * @param event
   */
  async deleteEvent(event) {
    try {
      const creatorId = event.creatorId;
      if (event.participants) {
        const participants = event.participants;
        if (participants !== undefined && participants.length > 0) {
          await this.cancelEventForParticipants(participants, event.eventId);
        }
      }
      if (creatorId) {
        await this.removeEventFromCreator(creatorId, event.eventId);
      }
      await this.removeEvent(event.eventId);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * DE:
   * Die Parameter bestehen aus einem Array mit Teilnehmer IDs und der zu löschenden Event-ID.
   * Für jede ID wird aus der Datenbank das Array "registeredEvents" ausgelesen und nach der Event-ID
   * gefiltert. Der Array wird, ohne das Objekt in der die ID gespeichert wurde, zwischengespeichert.
   * Dieser zwischengespeicherte Array ersetzt daraufhin das "registeredEvents" Array in der Datenbank.
   *
   * EN:
   * The parameters consist of an array with participant IDs and the event ID to be deleted.
   * For each ID the array "registeredEvents" is read from the database and filtered by the event ID. The array is cached without the object in which the ID was stored.
   * This cached array then replaces the "registeredEvents" array in the database.
   *
   * @example
   * this.cancelEventForParticipants([eineUserId, nochEineUserID], eineEventID);
   *
   * @param participants<Array>
   * @param eventId<String>
   */
  cancelEventForParticipants(participants, eventId) {
    participants.forEach(async (participantId: string) => {
      let participant;
      await this.userDataService.getUserById(participantId).then((user) => {
        participant = user;
      });
      const participantEvents = participant.registeredEvents;

      // filter the participant events array
      const newParticipantEvents = participantEvents.filter((event) => event.eventId !== eventId);

      console.log(newParticipantEvents);

      // update the doc with the filtered events
      await firebase.firestore().collection('user').doc(participant).update({
        registeredEvents: newParticipantEvents
      });
    });
  }

  /**
   * EN:
   * The event ID in the parameters is deleted from the user who created the event.
   * This is done by storing the array "createdEvents", searching it for the event-id and storing it without the
   * object which contains the ID. The original array is then merged with the
   * with the filtered array in the database.
   *
   * DE:
   * Die Event ID in den Parametern wird aus dem Nutzer, der das Event erstellt hat gelöscht.
   * Dabei wird das Array "createdEvents" gespeichert, nach der EventId durchsucht und ohne das
   * Object, welche die ID beinhaltet gespeichert. Das ursprüngliche Array wird daraufhin mit dem
   * gefilterten Array in der Datenbank ersetzt.
   *
   * @param creatorId
   * @param eventId
   */

  async removeEventFromCreator(creatorId, eventId) {
    let creator;
    await this.userDataService.getUserById(creatorId).then((user) => {
      creator = user;
    });
    const creatorEvents = creator.createdEvents;

    // filter the creatoe events array
    const newCreatorEvents = creatorEvents.filter((event) => event.eventId !== eventId);

    // update the doc with the filtered events
    await firebase.firestore().collection('user').doc(creatorId).update({
      createdEvents: newCreatorEvents
    });
  }
}
