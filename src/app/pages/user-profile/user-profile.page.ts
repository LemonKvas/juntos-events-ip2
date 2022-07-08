import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/classes/event.model';
import { Platform, MenuController, ActionSheetController } from '@ionic/angular';
import User from 'src/app/models/classes/user';
import { Subscription } from 'rxjs';
import { FriendsService } from 'src/app/services/friends.service';
import FriendButtonIndicator from 'src/app/models/enums/friendButtonIndicator';
import { NotificationService } from 'src/app/services/notification.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../../services/auth.service';

/**
 * DE:
 * Page zur Anzeige des Profil eines Nutzers.
 * EN:
 * Page to display the profile of a user.
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit, OnDestroy {
  ownProfile: boolean;
  isDesktop: boolean;
  user;
  eventAndBadgesIndicator;
  events: Event[];
  socialPointsCalculated;
  isFriends: boolean;
  followFriendsIndicator: FriendButtonIndicator;
  followFriendsIcon: string;
  friendIds: any[] = [];
  public userLoaded: boolean;
  private currentUserId;
  private readonly profileUserId;
  private currentLocation: Location;
  private userSubscription: Subscription;
  private currentUserSubscription: Subscription;
  isModalOpen = false;
  feedBackEvent: Event;
  starRating: number;
  feedback: string;

  /**
   * DE:
   * Grundvariablen werden initialisiert und die Nutzer ID des Profils wird aus der URL ausgelesen.
   * EN:
   * Basic variables are initialized and the user ID of the profile is read from the URL.
   * @param location
   * @param userDataService
   * @param router
   * @param eventService
   * @param platform
   * @param friendService
   * @param notificationService
   * @param alertService
   * @param menu
   * @param auth
   * @param actionSheetCtrl
   */
  constructor(
    private location: Location,
    private userDataService: UserDataService,
    public router: Router,
    private eventService: EventService,
    private platform: Platform,
    private friendService: FriendsService,
    private notificationService: NotificationService,
    private alertService: AlertService,
    public menu: MenuController,
    private auth: AuthService,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.followFriendsIndicator = undefined;
    this.isFriends = false;
    this.currentLocation = location;
    this.profileUserId = this.currentLocation.path().split('/').pop();
  }

  /**
   * DE:
   * Bei Initialisierung der Komponente wird überprüft ob der Nutzer sich auf einem mobilen Gerät befindet
   * und dieser Wert als boolean in der Variable isDesktop gespeichert.
   * EN:
   * When the component is initialized, it checks whether the user is on a mobile device.
   * This value is stored as a boolean in the variable isDesktop.
   */
  ngOnInit() {
    this.eventAndBadgesIndicator = 'events';
    this.isDesktop = !(
      this.platform.is('mobileweb') ||
      this.platform.is('ios') ||
      this.platform.is('android') ||
      this.platform.is('iphone')
    );
    this.loadUser().then(() => {
      //TODO: calculate points korrekt kalkulieren wenn Badges implementiert wurden!
    });
  }

  /**
   * DE:
   * Bei Zerstörung der Komponente werden die Subscriptions, gespeichert in der Variablen userSubscription und
   * currentUserSubscription aufgelöst.
   * EN:
   * If the component is destroyed, the subscriptions stored in the variables userSubscription and currentUserSubscription
   * are resolved.
   */
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

  /**
   * DE:
   * Es wird die ID des derzeit eingeloggten Nutzers gespeichert. Falls die ID aus der URL mit der ID
   * des eingeloggten Nutzers übereinstimmt, wird die Variable ownProfile auf true gesetzt.
   * Eine Subscription wird erstellt welche die Nutzerdaten in der Variable user speichert und userLoaded
   * auf true setzt. Die Methoden getFriends(), getAttendedEvents() und checkFriendshipStatus() werden danach innerhalb
   * der Subscription getriggert. Diese Subscription wird in der Variable userSubscription gespeichert.
   * EN:
   * The ID of the currently logged in user is stored. If the ID from the URL matches the ID
   * of the logged in user, the variable ownProfile is set to true.
   * A subscription is created which stores the user data in the variable user and sets userLoaded
   * is set to true. The methods getFriends(), getAttendedEvents() and checkFriendshipStatus() are then triggered within the subscription.
   * of the subscription. This subscription is stored in the userSubscription variable.
   */
  async loadUser() {
    try {
      this.currentUserId = await this.userDataService.getCurrentUserID();
      this.ownProfile = this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId);
      this.userSubscription = await this.userDataService
        .getUserByIdAsObservable(this.profileUserId)
        .subscribe(async (userData) => {
          if (userData) {
            this.user = (await userData) as unknown as User;
            this.socialPointsCalculated = `${0 + '.'}${this.user.socialPoints}`;
            this.userLoaded = true;
            this.getFriends();
            this.getAttendedEvents();
            //onStorageChange updates addfriendbutton text and frienship status
            await this.checkFrienshipStatus();
          } else {
            throw new Error('Nutzer konnte nicht geladen werden');
          }
        });
    } catch (e) {
      await this.router.navigate(['/login']);
    }
  }

  /**
   * DE:
   * Speichert die Liste der IDs der Freunde eines Nutzers in der Variable friendIds.
   * EN:
   * Stores the list of IDs of a user's friends in the friendIds variable.
   */
  getFriends() {
    this.friendIds = this.user.friends;
  }

  /**
   * DE:
   * Überprüft ob der Nutzer eingeloggt ist und ob es sich um das Profil des eingeloggten Nutzers handelt.
   * Falls eingeloggt und es nicht das eigene Profil ist, wird überprüft, ob es sich bei den Nutzern um Freunde
   * handelt und die Methode determineFollowFriendsIndicator wird aufgerufen.
   * EN:
   * Checks if the user is logged in and if it is the profile of the logged in user.
   * If logged in and it is not the own profile, it is checked if the users are friends
   * and the method determineFollowFriendsIndicator is called.
   */
  async checkFrienshipStatus() {
    try {
      if (this.currentUserId) {
        if (!this.ownProfile) {
          this.currentUserSubscription = this.userDataService
            .getUserByIdAsObservable(this.currentUserId)
            .subscribe(async () => {
              this.isFriends = await this.friendService.isUserFriendWith(this.profileUserId);
              await this.determineFollowFriendsIndicator();
            });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * DE:
   * Speichert alle Events, für die der User des Profils ein Ticket hat die Event-ID im Array attendedEventIds.
   * Mithilfe der Methode getMultipleEventsByEventId des eventServices werden alle Events in der Variable events
   * gespeichert.
   * EN:
   * Stores all events for which the user of the profile has a ticket the event ID in the array attendedEventIds.
   * Using the getMultipleEventsByEventId method of the eventService, all events are stored in the variable events.
   */
  getAttendedEvents() {
    if (this.user.registeredEvents) {
      const attendedEventIds = this.user.registeredEvents.reduce((attendedEventIds, event) => {
        if (event.ticket) {
          attendedEventIds.push(event.eventId);
        }
        return attendedEventIds;
      }, []);
      this.eventService.getMultipleEventsByEventId(attendedEventIds).forEach((eventDocs: any[]) => {
        this.events = eventDocs;
      });
    }
  }

  /**
   * DE:
   * Wird genutzt um je nach geklicktem Icon die Methode zum folgen/entfolgen von Veranstaltern oder
   * zum entfreunden oder verschicken von Freundschaftsanfragen aus dem friendsService/notificationService
   * aufzurufen.
   * EN:
   * Used to select the method for following/unfollowing organizers or for
   * to unfriend or send friend requests from the friendsService/notificationService
   * service.
   * @param indicator
   */
  async determineFollowFriendsButtonFunction(indicator) {
    //let outlinedIcon = this.followFriendsIcon;
    try {
      switch (indicator.followFriendsIndicator) {
        case 0:
          //this.followFriendsIcon = 'person-add';
          await this.notificationService.createNotification(3, this.profileUserId);
          break;
        case 1:
          //this.followFriendsIcon = 'person-remove';
          await this.friendService.unfriendUser(this.profileUserId);
          break;
        case 2:
          //this.followFriendsIcon = 'person-add';
          await this.friendService.followOrganizer(this.profileUserId);
          break;
        case 3:
          //this.followFriendsIcon = 'person-remove';
          await this.friendService.unfollowOrganizer(this.profileUserId).then((result) => {
            console.log(result);
          });
          break;
      }
    } catch (e) {}
  }

  /**
   * DE:
   * Ruft die Methode openFriendlistModal mit den dem Array friendIds auf.
   * EN:
   * Calls the openFriendlistModal method with the array friendIds.
   */
  openFriendlist() {
    this.friendService.openFriendlistModal(this.friendIds);
  }

  /**
   * DE:
   * Je nach Role des Nutzers und Role des Profilbesitzers wird das Icon zum hinzufügen/entfernen von Freunden
   * bzw. zum folgen/entfolgen von Veranstaltern festgelegt.
   * EN:
   * Depending on the role of the user and the role of the profile owner, the icon for adding/removing friends
   * or to follow/unfollow organizers.
   *
   * followFriendsIndicator: 0=befriend; 1=unfriend; 2=follow; 3=unfollow
   */
  async determineFollowFriendsIndicator() {
    const isNormalUser = await this.userDataService.getCurrentUserRole();
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

  /**
   * @ignore
   */
  switchProfileEventAndBadges(event: any) {
    console.log('Segment changed', event);
  }

  setOpen(isOpen: boolean, event: Event) {
    this.isModalOpen = isOpen;
    this.feedBackEvent = event;

    console.log('open');
    console.log(this.feedBackEvent);
  }

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    this.starRating = rating;
  }

  /**
   * DE:
   * Öffnet die Methode presentPopover im notificationsService, bzw. zeigt die Benachrichtigungen des Nutzers an.
   * EN:
   * Opens the presentPopover method in the notificationsService, or displays the user's notifications.
   * @param $event
   */
  openNotifications($event) {
    this.notificationService.presentPopover($event);
  }

  /**
   * DE:
   * Ruft die Methode signOut() im AuthService auf.
   * EN:
   * Calls the signOut() method in the AuthService.
   */
  logOut() {
    this.auth.signOut();
  }

  /**
   * DE:
   * Öffnet das ActionSheet auf der Profilseite, um weitere Funktionalitäten anzuzeigen.
   * EN:
   * This function will open an actionsheet on the profile page, which contains multiple settings.
   */
  async openActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Profil bearbeiten',
          handler: () => {
            this.router.navigate(['/edit-user']);
          }
        },
        {
          text: 'Meine Events',
          handler: () => {
            this.router.navigate(['user-events', this.currentUserId]);
          }
        },
        {
          text: 'Abmelden',
          role: 'destructive',
          handler: () => {
            this.logOut();
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
