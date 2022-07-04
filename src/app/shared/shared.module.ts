import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  declarations: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, FriendComponent, MapComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
  exports: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, FriendComponent, MapComponent]
})
export class SharedModule { }
