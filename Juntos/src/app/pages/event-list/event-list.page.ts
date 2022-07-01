import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { EventService } from 'src/app/services/event.service';
import { Share } from '@capacitor/share';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  /**
   * Value of all published events
   */
  events: Event[] = [];
  /**
   * Value of event selected by user
   */
  selectedEvent: Event;

  /**
   * Injected all imported services
   *
   * @param eventService
   * @param router
   */
  constructor(public eventService: EventService, private router: Router) {
    /**
     * Call function upon page loading
     */
    this.getEvents();
  }
  ngOnInit() {
  }

  /**
   * All published Events will be fetched through getPublishedEvents() from
   * eventService.
   *
   * Each document will be subscribed and pushed as Event into local array events[].
   */
  getEvents(){
    this.eventService.getPublishedEvents().subscribe((res) => {
      this.events = res.map((e) => ({
          eventId: e.payload.doc.id,
          ... e.payload.doc.data() as Event
        }));
    });
  }

  /**
   * This method will allow user to share selected event with other people.
   */
  async shareEvent(){
    const msgText = 'Hallo,\n';
    Share.canShare().then(canShare => {
      if(canShare.value){
        Share.share({
          title: 'Juntos Event',
          text: msgText,
          dialogTitle: 'Event teilen'
        }).then((v) => console.log('ok: ', v))
          .catch(err => console.log(err));
      } else {
        console.log('Error: Sharing not available!');
      }
    });
  }

  /**
   * This method will navigate user to event-create page to create a new event.
   */
  createEvent(){
    this.router.navigate(['event-create']).catch((err) => console.log('Error: ', err));
  }

  /**
   * This method will navigate user to the event details page by given id.
   *
   * @example
   * Call it with an id as string
   * eventDetailsState('87u490')
   *
   * @param id
   */
  async eventDetailsState(id: string){
     this.selectedEvent = await this.eventService.getEventById(id);
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
         creatorId: this.selectedEvent.creatorId,
       }
     };
     await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
  }
}
