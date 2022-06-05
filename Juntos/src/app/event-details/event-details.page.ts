import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {Event} from '../models/classes/event.model';
import User from '../models/classes/user';
import {RegisteredEvent} from '../models/interfaces/registered-event';
import {AuthService} from '../services/auth.service';
import {UserDataService} from '../services/user-data.service';
import {AlertService} from '../services/alert.service';

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
  constructor(private router: Router, public eventService: EventService, private authService: AuthService,
              private userService: UserDataService, public alertServie: AlertService) {
    this.event = this.router.getCurrentNavigation().extras.state;
  }
  async ngOnInit() {
  }
  async attendEvent(event: Event){
    if(this.authService.isloggedin() === false ){
      this.alertServie.plsSignInAlert();
    } else {
      this.participant = await this.userService.getCurrentUser();
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
      this.event.participants.unshift(this.participant.userId);
      this.eventService.addRegisteredUser(this.event);
      await this.userService.addRegisteredEvent(this.registeredEvent);
      await this.alertServie.partakeEvent(event);
    }
  }
}
