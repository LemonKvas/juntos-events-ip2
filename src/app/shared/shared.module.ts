import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FireStorageImgPipe} from "src/app/models/pipes/fire-storage-img.pipe";
import {NotificationsComponent} from "src/app/components/notifications/notifications.component";
import {FootermenuComponent} from "../components/footermenu/footermenu.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {FriendComponent} from "src/app/components/friend/friend.component";
import {MapComponent} from "src/app/components/map/map.component";


/**
 * Import of this Module is needed to provide declared Pipes and Components
 */

@NgModule({

  declarations: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, MapComponent, FriendComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, MapComponent, FriendComponent],
})
export class SharedModule {
}
