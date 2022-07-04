import { Component, Input, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { UserDataService } from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  /**
   * DE:
   * userID, isLoggedIn und loggedinUserId werden beim Aufruf der Komponente als Input mitgegeben.
   * EN:
   * userID, isLoggedIn and loggedinUserId are given as input when calling the component.
   */
  @Input() userId: string;
  @Input() isLoggedIn: boolean;
  @Input() loggedInUserId: string;
  isLoaded: boolean;
  isFriends: boolean;
  user: User;
  addRemoveIcon;

  /**
   * @param friendsService
   * @param userDataService
   * @param notificationService
   */
  constructor(
    private friendsService: FriendsService,
    private userDataService: UserDataService,
    private notificationService: NotificationService
  ) {}

  /**
   * DE:
   * Bei Initialisierung der Komponente werden die Methoden getCurrentUser und isFriendsWith aufgerufen.
   * Falls die userId mit der ID des eingeloggten Nutzers übereinstimmt, wird die Variable isLoggedIn false
   * gesetzt. Dies bedeutet in diesem Fall nicht, dass der Nutzer nicht eingeloggt wird, jedoch wird diese
   * Variable genutzt, um die Anzeige von Buttons im DOM zu steuern.
   * EN:
   * When the component is initialized, the getCurrentUser and isFriendsWith methods are called.
   * If the userId matches the ID of the logged in user, the variable isLoggedIn is set to false. This does not mean that the user will not be logged in, but this
   * variable is used to control the display of buttons in the DOM.
   */
  ngOnInit() {
    this.getCurrentUser();
    this.isFriendsWith();
    //User is still logged in, but this.isLoggedIn toggles friend add and remove icon
    if (this.userId === this.loggedInUserId) {
      this.isLoggedIn = false;
    }
  }

  /**
   * DE:
   * Falls die Rechte des Nutzers 0 oder 2 entsprechen wird eine Freundschaftsanfrage geschickt. Falls die
   * Rechte 1 sind, wird die Methode followOrganizer im friendsService aufgerufen. Daraufhin wird die
   * Method isFriendsWith() aufgerufen.
   * EN:
   * If the user's permissions are 0 or 2, a friend request will be sent. If the
   * rights are 1, the method followOrganizer in friendsService is called. Then the
   * method isFriendsWith() is called.
   */
  async sendFriendRequest() {
    try {
      if (this.user.rights === 0 || this.user.rights === 2) {
        await this.notificationService.createNotification(3, this.userId);
      } else if (this.user.rights === 1) {
        await this.friendsService.followOrganizer(this.userId);
      }
      this.isFriendsWith();
    } catch {}
  }

  /**
   * DE:
   * Falls die Rechte des Nutzers 0 oder 2 entsprechen wird die Methode unfriendUser im friendsService aufgerufen.
   * Falls die Rechte 1 sind, wird die Methode unfollowOrganizer im friendsService aufgerufen. Daraufhin wird die
   * Method isFriendsWith() aufgerufen.
   * EN:
   * If the user's permissions are 0 or 2, the unfriendUser method is called in the friendsService.
   * If the rights are 1, the unfollowOrganizer method is called in the friendsService. Then the
   * method isFriendsWith() is called.
   */
  async removeFriend() {
    try {
      if (this.user.rights === 0 || this.user.rights === 2) {
        await this.friendsService.unfriendUser(this.userId);
      } else if (this.user.rights === 1) {
        await this.friendsService.unfollowOrganizer(this.userId);
      }
      this.isFriendsWith();
    } catch {}
  }

  /**
   * DE:
   * Speichert den Nutzer in der Variable user. Daraufhin wird isLoaded true gesetzt.
   * EN:
   * Stores the user in the variable user. Then isLoaded is set true.
   */
  async getCurrentUser() {
    try {
      this.user = await this.userDataService.getUserById(this.userId).then((user) => {
        if (user.firstName === null) {
          user.firstName = '';
        }
        if (user.lastName === null) {
          user.lastName = '';
        }
        console.log(user);
        if (user.photoUrl === null) {
          user.photoUrl = '';
        }
        return user;
      });
      this.isLoaded = true;
    } catch {}
  }

  /**
   * DE:
   * Überprüft ob der Nutzer eingeloggt ist. Falls ja wird der festgestellt ob die Nutzer befreundet sind
   * und die Icons im DOM dementsprechend festgelegt. Falls der Nutzer nicht eingeloggt ist, wird die
   * Variable isFriends undefined gesetzt.
   * DE:
   * Checks if the user is logged in. If yes, it is determined whether the users are friends
   * and the icons in the DOM are set accordingly. If the user is not logged in, the variable
   * variable isFriends is set undefined.
   */
  async isFriendsWith() {
    try {
      if (this.isLoggedIn) {
        const friendshipStatus = await this.friendsService.isUserFriendWith(this.userId);
        this.isFriends = friendshipStatus;
        this.addRemoveIcon = friendshipStatus ? 'person-remove-outline' : 'person-add-outline';
        return;
      }
      this.isFriends = undefined;
    } catch {
      this.isFriends = undefined;
    }
  }
}
