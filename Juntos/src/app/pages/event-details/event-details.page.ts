import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  /**
   * Passed value from previous page
   */
  event: Event;
  /**
   * Value of current user
   */
  participant: User;
  /**
   * Value to add to user information
   */
  registeredEvent: RegisteredEvent;
  /**
   * Value of event creator
   */
  creator: User;
  /**
   * Array of event participants
   */
  participants: User[] = [];
  /**
   * Value of segment, default value set as 'information'
   */
  segment = 'information';

  /**
   * Injected all imported services.
   *
   * @param router
   * @param eventService
   * @param authService
   * @param userService
   * @param alertService
   */
  constructor(private router: Router, public eventService: EventService, private authService: AuthService,
              private userService: UserDataService, public alertService: AlertService) {
    /**
     * Set event value by getting navigation extra state.
     */
    this.event = this.router.getCurrentNavigation().extras.state;
    /**
     * Call function to fetch creator data upon page loading
     */
    this.getCreatorData().catch((err) => console.log('Error: ', err));
    /**
     * Call function to fetch event participants array upon page loading
     */
    this.getUserlist().catch((err) => console.log('Error: ', err));
  }
  async ngOnInit() {
  }

  /**
   * This method will fetch data about the current user by using the getUserById() from the userService.
   */
  async getCreatorData(){
    this.creator = await this.userService.getUserById(this.event.eventId);
  }

  /**
   * This method display information given about the segment change in the console.
   *
   * @param ev
   */
  segmentChanged(ev: any){
    console.log('Segment changed to ', ev);
  }

  /**
   * This method will get all participants' information of an event by iterating through the event participants array
   * and using the getUserById() from the userService. The found data will be pushed into a local array for
   * easy access.
   */
  async getUserlist(){
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < this.event.participants.length; ++i){
      const user = await this.userService.getUserById(this.event.participants[i]);
      this.participants.unshift(user);
    }
  }

  /**
   * This method will let a user partake in the given event. If user is not logged in, an alert
   * with login notice will be shown. Once the user is logged in, his / her information will be
   * fetched through getCurrentUser() from the userService.
   *
   * A registeredEvent ticket will be created. If the given event is free ('kostenlos'), user
   * will have a ticket automatically, which will set the attribute of registeredEvent as true.
   * Otherwise false, which means the user still has to pay for it.
   *
   * The user ID will be added to the event participants array and this will be updated in firebase as well.
   * The event will also be added to the user information by addRegisteredEvent() from the
   * userService.
   *
   * At the end an alert will be shown, letting the user know that he / she was successfully
   * added to the list.
   *
   * @example
   * Call it with an event object
   * attendEvent(event)
   *
   * @param event
   */
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
