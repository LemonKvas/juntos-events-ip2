import { Component, OnInit } from '@angular/core';
import {NotificationService} from "src/app/services/notification.service";
import { Notification } from "src/app/models/classes/notification.model"

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.getNotification()
  }

  async getNotification(){
    await this.notificationService.getNotificationInitializer();
    this.notifications = this.notificationService.notifications;
  }

}
