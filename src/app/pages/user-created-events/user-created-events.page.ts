import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/classes/event.model';

/**
 * DE:
 * Seite zum Anzeigen der veröffentlichen Events sowie der Entwürfe von dem/ der eingeloggten NutzerIn.
 * EN:
 * Page to display the published events as well as the drafts from the logged in user.
 */
@Component({
  selector: 'app-user-created-events',
  templateUrl: './user-created-events.page.html',
  styleUrls: ['./user-created-events.page.scss']
})
export class UserCreatedEventsPage implements OnInit {
  events: Event[] = [];
  segment = 'published';
  currentUserId: string;
  publishedEvents: Event[] = [];
  eventDrafts: Event[] = [];

  /**
   * DE:
   * Die ID von dem/der eingeloggten NutzerIn wird aus der URL ausgelesen.
   * EN:
   * The ID of the logged in user is read from the URL.
   * @param router
   * @param route
   * @param eventService
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.currentUserId = this.route.snapshot.params.id;
    this.getAllPublishedEvents();
    this.getAllEventDrafts();
  }

  /**
   * DE:
   * Bei der Initialiserung der Komponente werden alle veröffentlichen Events sowie
   * die Entwürfe des/der eingeloggten NutzerIn geholt.
   * EN:
   * During the initialization of the component, all published events and the drafts
   * of the logged in user are fetched.
   */
  ngOnInit() {
  }

  /**
   * DE:
   * Diese Methode holt alle veröffentlichen Events des/der NutzerIn.
   * EN:
   * This method fetches all published events of the user.
   */
  getAllPublishedEvents() {
    this.eventService.getPublishedEventsFromUser(this.currentUserId).subscribe((res) => {
      this.publishedEvents = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...(e.payload.doc.data() as Event)
      }));
    });
  }

  /**
   * DE:
   * Diese Methode holt alle Events des/der NutzerIn, die als Entwurf gespeichert wurden.
   * EN:
   * This method fetches all events of the user that have been saved as a draft.
   */
  getAllEventDrafts() {
    this.eventService.getEventDraftsFromUser(this.currentUserId).subscribe((res) => {
      this.eventDrafts = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...(e.payload.doc.data() as Event)
      }));
    });
  }

  /**
   * DE:
   * Diese Methode leitet den/die NutzerIn zum Event Formular weiter, wenn er/sie diese bearbeiten möchte.
   * EN:
   * This method redirects the user to the event form if he/she wants to edit it.
   *
   * @example
   * Call it with an event ID as a string
   * editEvent(eventId: string)
   *
   * @param eventId
   */
  editEvent(eventId: string) {
    this.router.navigate(['event-create', eventId]).catch((err) => console.log('Error: ', err));
  }

  /**
   * DE:
   * Diese Methode navigiert den/die NutzerIn zum Event Formular, um ein Event zu erstellen.
   * EN:
   * This function will navigate user to the event form page to add a new event.
   */
  createEvent() {
    this.router.navigate(['event-create']).catch((err) => console.log('Error: ', err));
  }

  /**
   * DE:
   * Diese Methode navigiert den/die NutzerIn zurück zur Profilseite.
   * EN:
   * This function will navigate the user back to his/her profile page.
   */
  backToProfile() {
    this.router
      .navigate(['profile', this.currentUserId])
      .catch((err) => console.log('Error: ', err));
  }
}
