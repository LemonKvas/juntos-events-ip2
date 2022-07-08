import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { EventService } from 'src/app/services/event.service';
import { Share } from '@capacitor/share';
import { NavigationExtras, Router } from '@angular/router';
import { GeoService } from 'src/app/services/geo.service';

/**
 * DE:
 * Seite zur Anzeige von allen veröffentlichen Events.
 * EN:
 * Page to display all published events.
 */
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss']
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  selectedEvent: Event;

  constructor(
    public eventService: EventService,
    private router: Router,
    public geoService: GeoService
  ) {}

  /**
   * DE:
   * Bei Initialisierung der Komponente wird eine Liste von allen veröffentlichen Events geholt.
   * EN:
   * When the component is initialized, a list of all published events is fetched.
   */
  ngOnInit() {
    this.getEvents();
  }

  /**
   * DE:
   * Diese Methode wird alle Daten von veröffentlichen Events holen.
   * EN:
   * This method will fetch all data from published events.
   */
  getEvents() {
    this.eventService.getPublishedEvents().subscribe((res) => {
      this.events = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...(e.payload.doc.data() as Event)
      }));
      this.geoService.getCurrentCoordinate();
      this.geoService.setMarkerArray(this.events);
    });
  }

  /**
   * DE:
   * Mit dieser Methode kann der/die NutzerIn das Event mit anderen teilen.
   * EN:
   * With this method, the user can share the event with others.
   */
  async shareEvent() {
    const msgText = 'Hallo,\n';
    Share.canShare().then((canShare) => {
      if (canShare.value) {
        Share.share({
          title: 'Juntos Event',
          text: msgText,
          dialogTitle: 'Event teilen'
        })
          .then((v) => console.log('ok: ', v))
          .catch((err) => console.log(err));
      } else {
        console.log('Error: Sharing not available!');
      }
    });
  }

  /**
   * DE:
   * Diese Methode leitet den/die NutzerIn zu dem Event Formular.
   * EN:
   * This method directs the user to the event form.
   */
  createEvent() {
    this.router.navigate(['event-create']).catch((err) => console.log('Error: ', err));
  }

  /**
   * DE:
   * Diese Methode leitet den/die NutzerIn zu der Detailansicht des ausgewählten Events.
   * EN:
   * This method directs the user to the detail view of the selected event.
   *
   * @example
   * Call it with an event ID as a string
   * eventDetailsState(eventId: string)
   *
   * @param eventId
   */
  async eventDetailsState(eventId: string) {
    this.selectedEvent = await this.eventService.getEventById(eventId);
    const navigationExtras: NavigationExtras = {
      state: {
        name: this.selectedEvent.name,
        photoURLs: this.selectedEvent.photoURLs,
        creationDate: this.selectedEvent.creationDate,
        eventDate: this.selectedEvent.eventDate,
        price: this.selectedEvent.price,
        bio: this.selectedEvent.bio,
        categories: this.selectedEvent.categories,
        participants: this.selectedEvent.participants,
        maxParticipants: this.selectedEvent.maxParticipants,
        address: this.selectedEvent.address,
        publishStatus: this.selectedEvent.publishStatus,
        eventId: this.selectedEvent.eventId,
        creatorId: this.selectedEvent.creatorId
      }
    };
    if (this.selectedEvent.long && this.selectedEvent.lat) {
      navigationExtras.state.long = this.selectedEvent.long;
      navigationExtras.state.lat = this.selectedEvent.lat;
    }
    console.log(navigationExtras);
    await this.router.navigateByUrl(`event-details/${eventId}`, navigationExtras);
  }
}
