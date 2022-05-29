import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {Event} from '../models/classes/event.model';

@Component({
  selector: 'app-event-details/',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: Event = new Event();
  eventId: string;
  constructor(private router: Router, public eventService: EventService) {
    this.event = this.router.getCurrentNavigation().extras.state;
  }
  async ngOnInit() {
  }
  attendEvent(){}
}
