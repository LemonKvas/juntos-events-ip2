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


  constructor(public readonly notificationService: NotificationService, protected friendsService: FriendsService) { }

  ngOnInit() {
    this.getNotification()
  }

  async getNotification(){
    await this.notificationService.getNotificationInitializer();
  }

  acceptFriendRequest(notification){
    this.friendsService.befriendUser(notification.senderId)
        .then(() => this.notificationService.removeNotification(notification.notificationId))
  }

}
