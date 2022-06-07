import { Component } from '@angular/core';
import { UrlService } from './services/url.service';
import {NotificationService} from "src/app/services/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {
    this.notificationService.getNotification();
  }


}
