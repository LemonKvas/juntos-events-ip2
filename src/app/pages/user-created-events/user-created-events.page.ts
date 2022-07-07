import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/classes/event.model';

@Component({
  selector: 'app-user-created-events',
  templateUrl: './user-created-events.page.html',
  styleUrls: ['./user-created-events.page.scss'],
})
export class UserCreatedEventsPage implements OnInit {
  events: Event[] = [];
  segment = 'published';
  currentUserId: string;
  publishedEvents: Event[] = [];
  eventDrafts: Event[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventService: EventService) {
    this.currentUserId = this.route.snapshot.params.id;
  }

  async ngOnInit() {
    await this.getAllPublishedEvents();
    await this.getAllEventDrafts();
  }

  segmentChanged(event: any) {
    console.log('Segment changed to ', event);
  }

  async getAllPublishedEvents(){
    this.eventService.getPublishedEventsFromUser(this.currentUserId).subscribe((res) => {
      this.publishedEvents = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...e.payload.doc.data() as Event
      }));
    });
  }

  async getAllEventDrafts(){
    this.eventService.getEventDraftsFromUser(this.currentUserId).subscribe((res) => {
      this.eventDrafts = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...e.payload.doc.data() as Event
      }));
    });
  }

  editEvent(eventId: string){
    this.router.navigate(['event-create', eventId]).catch((err) => console.log('Error: ', err));
  }

  /**
   * DE:
   * Diese Methode navigiert den/die NutzerIn zur Event-Erstellungsseite.
   * EN:
   * This function will navigate user to the event-create page.
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
  backToProfile(){
    this.router.navigate(['profile', this.currentUserId]).catch((err) => console.log('Error: ', err));
  }
}
