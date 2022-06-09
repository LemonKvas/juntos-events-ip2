import { Component, OnInit } from '@angular/core';
import {NotificationService} from "src/app/services/notification.service";
import { BaseNotification } from "src/app/models/classes/notification.model"
import {FriendsService} from "src/app/services/friends.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  notifications: BaseNotification[] = [];

  constructor(private notificationService: NotificationService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.getNotification()
  }

  async getNotification(){
    await this.notificationService.getNotificationInitializer();
    this.notifications = this.notificationService.notifications;
  }

  acceptFriendRequest(senderId){
    this.friendsService.befriendUser(senderId)
        .then(response => console.log(response))
  }

  declineFriendRequest() {
    this.notificationService.removeNotification()
  }

}
