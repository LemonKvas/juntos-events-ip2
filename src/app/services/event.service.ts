import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Event } from 'src/app/models/classes/event.model';
import { Observable } from 'rxjs';
import { documentId } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { CreatedEvent } from '../models/interfaces/created-event';
import { arrayUnion } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { ref } from '@angular/fire/storage';
import { ModalController } from '@ionic/angular';
import { UserEventsModalComponent } from 'src/app/components/user-events-modal/user-events-modal.component';
import { UserDataService } from 'src/app/services/user-data.service';
import { GeoService } from 'src/app/services/geo.service';
import { NavigationExtras, Router } from '@angular/router';

/**
 * DE:
 * Service wird genutzt, um Events zu verwalten.
 * EN:
 * Service is used to manage events.
 */
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
   * DE:
   * Diese Methode gibt ein Observable der Daten aller Events aus der Firebase Datenbank zurück.
   * EN:
   * This function will return an observable with all events.
   */
  getAllEvents() {
    return this.afs.collection('events').snapshotChanges();
  }
  //TODO: get published, open events
  getOpenEvents() {
    return this.afs.collection('events', (ref) => ref.where('status', '==', 1)).snapshotChanges();
  }
  /**
   * DE:
   * Diese Methode gibt ein Observable mit allen veröffentlichten Ereignissen zurück.
   * EN:
   * This function will return an observable with all published events.
   *
   * @example
   * functionName() {
   *     this.eventService.getPublishedEvents().subscribe((res) => {
   *       this.events = res.map((e) => ({
   *         eventId: e.payload.doc.id,
   *         ...(e.payload.doc.data() as Event)
   *       }));
   *     });
   *   }
   *
   * @returns Event[]
   */
  getPublishedEvents() {
    return this.afs
      .collection('events', (ref) => ref.where('publishStatus', '==', true))
      .snapshotChanges();
  }

  /**
   * DE:
   * Diese Methode gibt ein Observable der Daten aller veröffentlichen Events von einem/einer NutzerIn anhand
   * der mitgegebenen ID.
   * EN:
   * This method returns an observable of the data of all published events from a user based on the given ID.
   *
   * @example
   * Call it with a user ID as a string
   * functionName() {
   *     this.eventService.getPublishedEventsFromUser(userID).subscribe((res) => {
   *       this.publishedEvents = res.map((e) => ({
   *         eventId: e.payload.doc.id,
   *         ...(e.payload.doc.data() as Event)
   *       }));
   *     });
   *   }
   *
   * @param userId
   * @returns Event[]
   */
  getPublishedEventsFromUser(userId: string) {
    return this.afs
      .collection('events', (ref) =>
        ref.where('publishStatus', '==', true).where('creatorId', '==', userId)
      )
      .snapshotChanges();
  }

  /**
   * DE:
   * Diese Methode gibt ein Observable der Daten aller Event Entwürfe eines/einer NutzerIn zurück.
   * EN:
   * This function will return an observable with all event drafts of one user.
   *
   * @example
   * Call it with a user ID as a string
   * functionName() {
   *     this.eventService.getEventDraftsFromUser(userID).subscribe((res) => {
   *       this.eventDrafts = res.map((e) => ({
   *         eventId: e.payload.doc.id,
   *         ...(e.payload.doc.data() as Event)
   *       }));
   *     });
   * }
   *
   * @param userId
   * @returns Event[]
   */
  getEventDraftsFromUser(userId: string) {
    return this.afs
      .collection('events', (ref) =>
        ref.where('publishStatus', '==', false).where('creatorId', '==', userId)
      )
      .snapshotChanges();
  }

  /**
   * DE:
   * Diese Methode erstellt ein Event und fügt diese in die Firebase Sammlung 'events'.
   * EN:
   * This method creates an event and adds it to the Firebase collection 'events'.
   *
   * @param event
   */
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

  /**
   * DE:
   * Diese Methode aktualisiert ein bestehendes Event mit neuen Daten.
   * EN:
   * This method updates an existing event with new data.
   *
   * @example
   * Call it with an object of type 'Event'
   * async functionName(){
   *   await this.eventService.updateEvent(event: Event);
   * }
   *
   * @param event
   */
  async updateEvent(event: Event) {
    const data = JSON.parse(JSON.stringify(event));
    await this.afs.collection('events').doc(event.eventId).update(data);
  }

  /**
   * DE:
   * Diese Methode entfernt ein Event von der Firebase Sammlung 'events'.
   * EN:
   * This method removes an event from the Firebase collection 'events'.
   * @param eventId
   */
  async removeEvent(eventId: string) {
    await firebase.firestore().collection('events').doc(eventId).delete();
  }

  /**
   * DE:
   * Diese Methode holt mehrere Events Daten anhand eines Arrays mit mehreren Event IDs.
   * EN:
   * This method fetches multiple events data using an array of multiple event IDs.
   *
   * @example
   * Call it with an array of IDs as string
   * functionName(){
   *  const attendedEventIds: string[] = [...];
   *   this.eventService.getMultipleEventsByEventId(attendedEventIds).forEach((eventDocs: any[]) => {
   *         this.events = eventDocs;
   *       });
   * }
   *
   * @param eventIds
   * @returns Event[]
   */
  getMultipleEventsByEventId(eventIds: []) {
    const userEventCollection = this.afs.collection('events', (ref) =>
      ref.where(documentId(), 'in', eventIds)
    );
    return userEventCollection.valueChanges();
  }

  /**
   * DE:
   * Diese Methode holt die Daten von einem Event anhand der Event ID.
   * EN:
   * This method fetches the data from an event based on the event ID.
   * @param eventId
   * @returns EventData
   */
  async getEventById(eventId: string) {
    const docRef = this.eventsCollections.doc(eventId).ref;
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Event;
  }

  /**
   * DE:
   * Diese Methode erstellt ein Event Objekt von dem Typ 'CreatedEvent', um die Event ID
   * sowie den Veröffentlichungsstatus des Events bei dem/die NutzerIn zu speichern.
   * EN:
   * This method creates an event object of the type 'CreatedEvent' to store the event ID
   * and the publishing status of the event to the user data.
   * @param publishStatus
   */
  async createdEventData(publishStatus: boolean) {
    return (this.createdEvent = {
      eventId: this.eventId,
      publishStatus
    });
  }

  /**
   * DE:
   * Diese Methode kontrolliert, ob der Preis eines Events 0 beträgt und ersetzt den Wert der
   * Variable in 'Kostenlos'.
   * EN:
   * This method checks if the price of an event is 0 and replaces the value of the
   * variable in 'Kostenlos'.
   *
   * @param event
   */
  getPrice(event: Event): string {
    if (event.price === '0' || event.price === undefined || event.price === null) {
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }

  /**
   * DE:
   * Diese Methode überprüft, ob ein Event kostenlos ist und gibt ein boolean zurück.
   * EN:
   * This method checks if an event is free and returns a boolean.
   * @param event
   */
  freeEvent(event: Event): boolean {
    if (event.price === '0' || event.price === 'Kostenlos') {
      this.getPrice(event);
      return false;
    } else {
      return true;
    }
  }

  /**
   * DE:
   * Diese Methode wird aufgerufen, um die TeilnehmerListe eines Events zu aktualisieren.
   * EN:
   * This method is called to update the participant list of an event.
   * @param event
   */
  async addRegisteredUser(event: Event) {
    const db = firebase.firestore().collection('events');
    await db.doc(event.eventId).update({ participants: arrayUnion(...event.participants) });
  }

  /**
   * DE:
   * Diese Methode navigiert zu der Detailseite eines Events.
   * EN:
   * This method navigates to the details page of an event.
   * @param id
   */
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
   * DE:
   * Gibt ein Observable zurück mit allen Events, deren Wert "promoted" auf true gesetzt ist.
   * EN:
   * Returns an observable with all events whose value "promoted" is set to true.
   */
  getPromotedEvents() {
    return this.afs.collection('events', (ref) => ref.where('promoted', '==', true)).valueChanges();
  }

  /**
   * DE:
   * Gibt ein Observable zurück mit allen Events, deren creatorId mit dem Parameter UserId übereinstimmt.
   * EN:
   * Returns an observable with all events whose creatorId matches the UserId parameter.
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
   * DE:
   * Die Event ID in den Parametern wird aus dem Nutzer, der das Event erstellt hat gelöscht.
   * Dabei wird das Array "createdEvents" gespeichert, nach der EventId durchsucht und ohne das
   * Object, welche die ID beinhaltet gespeichert. Das ursprüngliche Array wird daraufhin mit dem
   * gefilterten Array in der Datenbank ersetzt.
   *
   * EN:
   * The event ID in the parameters is deleted from the user who created the event.
   * This is done by storing the array "createdEvents", searching it for the event-id and storing it without the
   * object which contains the ID. The original array is then merged with the
   * with the filtered array in the database.
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

    // filter the creator events array
    const newCreatorEvents = creatorEvents.filter((event) => event.eventId !== eventId);

    // update the doc with the filtered events
    await firebase.firestore().collection('user').doc(creatorId).update({
      createdEvents: newCreatorEvents
    });
  }
}
