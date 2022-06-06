import { Component, OnInit } from '@angular/core';
import { Event } from '../models/classes/event.model';
import { EventService } from '../services/event.service';
import { Share } from '@capacitor/share';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  selectedEvent: Event;
  constructor(public eventService: EventService, private router: Router) {
  }
  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.eventService.getPublishedEvents().subscribe((res) => {
      this.events = res.map((e) => ({
          eventId: e.payload.doc.id,
          ... e.payload.doc.data() as Event
        }));
    });
  }
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
  createEvent(){
    this.router.navigate(['event-create']);
  }
  /* Navigate to Event Details */
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
         maxParticipants: this.selectedEvent,
         address: this.selectedEvent.address,
         publishStatus: this.selectedEvent.publishStatus,
         eventId: this.selectedEvent.eventId,
         creatorId: this.selectedEvent.creatorId,
       }
     };
     await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
  }
}
