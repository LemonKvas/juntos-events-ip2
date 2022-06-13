import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EventService} from 'src/app/services/event.service';
import {Event} from 'src/app/models/classes/event.model';
import User from 'src/app/models/classes/user';
import {RegisteredEvent} from 'src/app/models/interfaces/registered-event';
import {AuthService} from 'src/app/services/auth.service';
import {UserDataService} from 'src/app/services/user-data.service';
import {AlertService} from 'src/app/services/alert.service';

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
  creator: User;
  participants: User[] = [];
  segment: string;
  constructor(private router: Router, public eventService: EventService, private authService: AuthService,
              private userService: UserDataService, public alertService: AlertService,
              private route: ActivatedRoute) {
    this.event = this.router.getCurrentNavigation().extras.state;
    this.getCreatorData();
    this.getUserlist();
  }
  async ngOnInit() {
    this.segment = 'information';
  }
  async getCreatorData(){
    this.creator = await this.userService.getUserById(this.event.eventId);
  }
  segmentChanged(ev: any){
    console.log('Segment changed to ', ev);
  }
  async getUserlist(){
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < this.event.participants.length; i++){
      const user = await this.userService.getUserById(this.event.participants[i]);
      this.participants.unshift(user);
    }
  }
  async attendEvent(event: Event){
    if(this.authService.isLoggedIn() === false ){
      await this.alertService.plsSignInAlert();
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
      await this.eventService.addRegisteredUser(this.event);
      await this.userService.addRegisteredEvent(this.registeredEvent);
      await this.alertService.partakeEvent(event);
    }
  }
}
