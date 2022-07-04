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
  @Input() userId: string;
  @Input() isLoggedIn: boolean;
  @Input() loggedInUserId: string;
  isLoaded: boolean;
  isFriends: boolean;
  user: User;
  addRemoveIcon;

  constructor(
    private friendsService: FriendsService,
    private userDataService: UserDataService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    this.isFriendsWith();
    //User is still logged in, but this.isLoggedIn toggles friend add and remove icon
    console.log(this.userId, this.loggedInUserId);
    if (this.userId === this.loggedInUserId) {
      this.isLoggedIn = false;
    }
  }

  async sendFriendRequest() {
    try {
      if (this.user['rights'] === 0 || this.user['rights'] === 2) {
        await this.notificationService.createNotification(3, this.userId);
      } else if (this.user['rights'] === 1) {
        await this.friendsService.followOrganizer(this.userId);
      }
      this.isFriendsWith();
    } catch {}
  }

  async removeFriend() {
    try {
      if (this.user['rights'] === 0 || this.user['rights'] === 2) {
        await this.friendsService.unfriendUser(this.userId);
      } else if (this.user['rights'] === 1) {
        await this.friendsService.unfollowOrganizer(this.userId);
      }
      this.isFriendsWith();
    } catch {}
  }

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
      console.log(this.user);
      this.isLoaded = true;
    } catch {}
  }

  async isFriendsWith() {
    try {
      if (this.isLoggedIn) {
        let friendshipStatus = await this.friendsService.isUserFriendWith(this.userId);
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
