import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserDataService} from "src/app/services/user-data.service";
import {Router} from "@angular/router";
import {EventService} from "src/app/services/event.service";
import { Event } from '../models/classes/event.model';
import {Platform} from "@ionic/angular";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public userLoaded: boolean;
  private readonly currentUserId;
  private readonly profileUserId;
  private ownProfile: boolean;
  private currentLocation: Location;
  isDesktop: boolean;
  user;
  eventAndBadgesIndicator;
  events: Event[] = [];


  constructor(private location: Location, private userDataService: UserDataService, private router: Router,
              private eventService: EventService, private platform: Platform ) {
    this.currentLocation = location;
    this.profileUserId = this.currentLocation.path().split('/').pop();
    this.currentUserId = this.userDataService.getCurrentUserID()
  }

  ngOnInit() {
    this.isDesktop = !(this.platform.is('mobileweb') || this.platform.is('ios') || this.platform.is('android') ||
        this.platform.is('iphone'));
    this.checkUser()
        .then(() => {
          this.userLoaded = true;
        });
    this.getAttendedEvents();
  }

  async checkUser(){
    try {
      if (this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId)) {
        this.ownProfile = true;
        this.user = await this.userDataService.getCurrentUser();
      } else {
        this.ownProfile = false;
        this.user = await JSON.parse(JSON.stringify(await this.userDataService.getUserById(this.profileUserId)));
      }
    }
    catch (e) {
      console.log(e);
      await this.router.navigate(['/login']);
    }
  }

  switchProfileEventAndBadges(event: any) {
    this.eventAndBadgesIndicator = event.detail.value;
  }

  getAttendedEvents(){
    this.eventService.getAttendedEventsForOneUser(this.profileUserId).forEach(
        (eventDocs: any[]) => {
          this.events = eventDocs;
        }
    )
  }

}
