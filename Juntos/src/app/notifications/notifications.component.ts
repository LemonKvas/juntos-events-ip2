import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/interfaces/notification'
import { NotificationService } from '../services/notification.service';

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
    await this.notificationService.getNotificationInformation();

  }

}
