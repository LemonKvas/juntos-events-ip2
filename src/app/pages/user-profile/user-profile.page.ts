import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {UserDataService} from 'src/app/services/user-data.service';
import {Router} from '@angular/router';
import {EventService} from 'src/app/services/event.service';
import { Event } from 'src/app/models/classes/event.model';
import {Platform, MenuController } from '@ionic/angular';
import User from 'src/app/models/classes/user';
import { Subscription } from 'rxjs';
import {FriendsService} from "src/app/services/friends.service";
import friendButtonIndicator from "src/app/models/enums/friendButtonIndicator";
import {NotificationService} from "src/app/services/notification.service";
import {AlertService} from "src/app/services/alert.service";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {

  public userLoaded: boolean;
  private currentUserId;
  private readonly profileUserId;
  private currentLocation: Location;
  private userSubscription: Subscription;
  private currentUserSubscription: Subscription;
  ownProfile: boolean;
  isDesktop: boolean;
  user;
  eventAndBadgesIndicator;
  events: Event[];
  socialPointsCalculated;
  isFriends: boolean;
  followFriendsIndicator: friendButtonIndicator;
  followFriendsIcon: string;
  friendIds: any[] = [];


  constructor(private location: Location, private userDataService: UserDataService, public router: Router,
              private eventService: EventService, private platform: Platform, private friendService: FriendsService,
              private notificationService: NotificationService, private alertService: AlertService,
              public menu: MenuController, private auth: AuthService) {
    this.followFriendsIndicator = undefined;
    this.isFriends = false;
    this.currentLocation = location;
    this.profileUserId = this.currentLocation.path().split('/').pop();
  }

  ngOnInit() {
    this.eventAndBadgesIndicator = 'events';
    this.isDesktop = !(this.platform.is('mobileweb') || this.platform.is('ios') || this.platform.is('android') ||
        this.platform.is('iphone'));
    this.loadUser()
        .then(() => {
          //TODO: calculate points korrekt kalkulieren wenn Badges implementiert wurden!
        });

  }


  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async loadUser() {
    try {
      this.currentUserId = await this.userDataService.getCurrentUserID();
      this.ownProfile = this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId);
      this.userSubscription = await this.userDataService.getUserById_Observable(this.profileUserId).subscribe(
          async (userData) => {
            if (userData) {
              this.user = await userData as unknown as User;
              this.socialPointsCalculated = `${0 + '.'}${this.user.socialPoints}`;
              this.userLoaded = true;
              this.getFriends();
              this.getAttendedEvents();
              //onStorageChange updates addfriendbutton text and frienship status
              await this.checkFrienshipStatus();
            } else {
              throw new Error('Nutzer konnte nicht geladen werden');
            }
          }
      );
    } catch (e) {
      console.log(e);
      await this.router.navigate(['/login']);
    }
  }

  getFriends() {
    this.friendIds = this.user.friends;
  }

  async checkFrienshipStatus() {
    try {
      if (this.currentUserId) {
        if (!this.ownProfile) {
          this.currentUserSubscription = this.userDataService.getUserById_Observable(this.currentUserId).subscribe(async () => {
            this.isFriends = await this.friendService.isUserFriendWith(this.profileUserId);
            await this.determineFollowFriendsIndicator();
          })
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  getAttendedEvents() {
    if (this.user.registeredEvents) {
      const attendedEventIds = this.user.registeredEvents.reduce((attendedEventIds, event) => {
        if (event.ticket) {
          attendedEventIds.push(event.eventId);
        }
        return attendedEventIds;
      }, []);
      this.eventService.getMultipleEventsByEventId(attendedEventIds).forEach(
          (eventDocs: any[]) => {
            this.events = eventDocs;
          }
      );
    }
  }

  async determineFollowFriendsButtonFunction(indicator) {
    //let outlinedIcon = this.followFriendsIcon;
    try {
      switch (indicator.followFriendsIndicator) {
        case 0:
          //this.followFriendsIcon = 'person-add';
          await this.notificationService.createNotification(3, this.profileUserId).then(
              () => {

              }
          );
          break;
        case 1:
          //this.followFriendsIcon = 'person-remove';
          await this.friendService.unfriendUser(this.profileUserId)
              .then((result) => {
                console.log(result);
              })
          break;
        case 2:
          //this.followFriendsIcon = 'person-add';
          await this.friendService.followOrganizer(this.profileUserId)
              .then((result) => {
                console.log(result)
              })
          break;
        case 3:
          //this.followFriendsIcon = 'person-remove';
          await this.friendService.unfollowOrganizer(this.profileUserId)
              .then((result) => {
                console.log(result);
              });
          break;
      }
    } catch (e) {
    }
  }

  openMenu() {
    console.log('open')
    this.menu.enable(true, 'first');
    this.menu.open('first').then(r => {
      'it is opens'
    }).catch(e => {
      console.log(e)
    });
  }

  openFriendlist() {
    this.friendService.openFriendlistModal(this.friendIds);
  }

  /**
   * followFriendsIndicator: 0=befriend; 1=unfriend; 2=follow; 3=unfollow
   */
  async determineFollowFriendsIndicator() {
    let isNormalUser = await this.userDataService.getCurrentUserRole();
    if (isNormalUser === 0 || isNormalUser === 2) {
      if (this.user.rights === 0 || this.user.rights === 2) {
        if (this.isFriends) {
          this.followFriendsIndicator = 1;
          this.followFriendsIcon = 'person-remove-outline';
        } else {
          this.followFriendsIndicator = 0;
          this.followFriendsIcon = 'person-add-outline';
        }
      } else {
        if (this.isFriends) {
          this.followFriendsIndicator = 3;
          this.followFriendsIcon = 'person-remove-outline';
        } else {
          this.followFriendsIndicator = 2;
          this.followFriendsIcon = 'person-add-outline';
        }
      }
    } else {
      this.followFriendsIndicator = undefined;
    }
  }

  switchProfileEventAndBadges(event: any) {
    console.log('Segment changed', event);
    }




  openNotifications($event) {
    this.notificationService.presentPopover($event);
  }

  logOut() {
    this.auth.signOut()
  }
}


