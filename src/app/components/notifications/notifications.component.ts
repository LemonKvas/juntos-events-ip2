import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { FriendsService } from 'src/app/services/friends.service';

/**
 * DE:
 * Komponente um die Benachrichtigungen eines Nutzers anzuzeigen.
 * EN:
 * Component to display the notifications of a user.
 */
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  /**
   * @param notificationService
   * @param friendsService
   */
  constructor(
    public readonly notificationService: NotificationService,
    protected friendsService: FriendsService
  ) {}

  /**
   * DE:
   * Bei Initialisierung der Komponente wird die Methode getNotification aufgerufen.
   * EN:
   * When the component is initialized, the getNotification method is called.
   */
  ngOnInit() {
    this.getNotification();
  }

  /**
   * DE:
   * Ruft die Methode getNotificationInitializer im notificationService auf.
   * EN:
   * Calls the getNotificationInitializer method in notificationService.
   */
  async getNotification() {
    await this.notificationService.getNotificationInitializer();
  }

  /**
   * DE:
   * Ruft die Methode befriendUser im friendsService auf mit der in den Parametern mitgegebenen
   * User ID auf. Daraufhin wird die Notification aus der Datenbank mit der Methode removeNotification aus dem
   * notificationService gelöscht.
   * EN:
   * Calls the method befriendUser in friendsService with the user ID specified in the parameters.
   * Then the notification is removed from the database with the method removeNotification from the
   * notificationService.
   * @param notification
   */
  acceptFriendRequest(notification) {
    this.friendsService
      .befriendUser(notification.senderId)
      .then(() => this.notificationService.removeNotification(notification.notificationId));
  }
}
