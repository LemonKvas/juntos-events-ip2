import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { Location } from '@angular/common';
import {UserDataService} from "src/app/services/user-data.service";
import {Router} from "@angular/router";
import {EventService} from "src/app/services/event.service";
import { Event } from '../models/classes/event.model';
import {Platform} from "@ionic/angular";
import { AuthService } from '../services/auth.service';
import User from "src/app/models/classes/user";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {

  public userLoaded: boolean;
  private currentUserId;
  private readonly profileUserId;
  ownProfile: boolean;
  private currentLocation: Location;
  private userSubscription: Subscription;
  isDesktop: boolean;
  user;
  eventAndBadgesIndicator;
  events: Event[] = [];
  socialPointsCalculated;
  isFriends: boolean;
  followFriendsButtonText: string;



  constructor(private location: Location, private userDataService: UserDataService, private router: Router,
              private eventService: EventService, private platform: Platform, private authService: AuthService) {
    this.currentLocation = location;
    this.profileUserId = this.currentLocation.path().split('/').pop();
  }

  ngOnInit() {
    this.isDesktop = !(this.platform.is('mobileweb') || this.platform.is('ios') || this.platform.is('android') ||
        this.platform.is('iphone'));
    this.loadUser()
        .then(() => {
          //TODO: calculate points korrekt kalkulieren wenn Badges implementiert wurden
            console.log(this.userSubscription);
        });
    this.getAttendedEvents();
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async loadUser(){
    try {
      this.currentUserId = await this.userDataService.getCurrentUserID();
      this.ownProfile = this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId);
      console.log(this.ownProfile, this.currentUserId, this.profileUserId);
      this.userSubscription = this.userDataService.getUserById_Observable(this.profileUserId).subscribe(
           async (userData) => {
             if (userData) {
               this.user = userData as unknown as User;
               this.socialPointsCalculated = `${0 + "."}${this.user.socialPoints}`;
               this.userLoaded = true;
               if (!this.ownProfile) this.isFriends = await this.userDataService.isUserFriendWith(this.profileUserId);
               console.log(this.isFriends);
             } else {
               throw new Error("Nutzer konnte nicht geladen werden");
             }
             console.log(userData);
           }
      )
    }
    catch (e) {
      console.log(e);
      await this.router.navigate(['/login']);
    }
  }

  getAttendedEvents(){
    this.eventService.getAttendedEventsForOneUser(this.profileUserId).forEach(
        (eventDocs: any[]) => {
          this.events = eventDocs;
        }
    )
  }

  determineFollowFriendsButtonText(){
    const isNormalUser = this.authService.hasRole(1);
    if(this.isFriends && this.user.role < 2 && this.authService.hasRole(2)) {
      this.followFriendsButtonText = ""
    }
  }


  switchProfileEventAndBadges(event: any) {
    this.eventAndBadgesIndicator = event.detail.value;
  }



}
