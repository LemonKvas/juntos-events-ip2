import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {Event} from '../models/classes/event.model';
import User from '../models/classes/user';
import {RegisteredEvent} from '../models/interfaces/registered-event';

@Component({
  selector: 'app-event-details/',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: Event = new Event();
  eventId: string;
  participant: User;
  registeredEvent: RegisteredEvent;
  constructor(private router: Router, public eventService: EventService) {
    this.event = this.router.getCurrentNavigation().extras.state;
  }
  async ngOnInit() {
  }
  attendEvent(){
    if(this.event.price === 'Kostenlos'){
      this.registeredEvent = {
        eventId: this.event.eventId,
        ticket: true,
      };
    } else {
      this.registeredEvent = {
        eventId: this.event.eventId,
        ticket: false,
      };
    }
    console.log('registeredEvent: ' + JSON.stringify(this.registeredEvent));
    this.event.participants.unshift(this.participant.userId);
    this.participant.registeredEvents.unshift(this.registeredEvent);
  }
}
