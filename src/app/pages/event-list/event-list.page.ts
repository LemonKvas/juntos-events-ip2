import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { EventService } from 'src/app/services/event.service';
import { Share } from '@capacitor/share';
import { NavigationExtras, Router } from '@angular/router';
import {GeoService} from "src/app/services/geo.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss']
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  selectedEvent: Event;
  longLats;

  constructor(public eventService: EventService, private router: Router, private geoService: GeoService) {
    this.longLats = undefined;
  }
  ngOnInit() {
    this.getEvents()
  }
  getEvents() {
    this.eventService.getPublishedEvents().subscribe((res) => {
      this.events = res.map((e) => ({
        eventId: e.payload.doc.id,
        ...(e.payload.doc.data() as Event)
      }));
      this.geoService.setMarkerArray(this.events);
    });
  }
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
  createEvent() {
    this.router.navigate(['event-create']);
  }
  /* Navigate to Event Details */
  async eventDetailsState(id: string) {
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
        creatorId: this.selectedEvent.creatorId
      }
    };
    await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
    //await this.router.navigateByUrl(`event-details/${id}`);
  }
}
