import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FireStorageImgPipe} from "src/app/models/pipes/fire-storage-img.pipe";
import {NotificationsComponent} from "src/app/components/notifications/notifications.component";
import {FootermenuComponent} from "../components/footermenu/footermenu.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {FriendComponent} from "src/app/components/friend/friend.component";
import {FeedbackComponent} from "../components/feedback/feedback.component";
import {StarRatingModule} from "ionic5-star-rating";
import {FormsModule} from "@angular/forms";


/**
 * Import of this Module is needed to provide declared Pipes and Components
 */

@NgModule({

  declarations: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, FriendComponent, FeedbackComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        StarRatingModule,
        FormsModule
    ],
  exports: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, FriendComponent, FeedbackComponent]
})
export class SharedModule { }
