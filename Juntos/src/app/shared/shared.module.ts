import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FireStorageImgPipe} from "src/app/models/pipes/fire-storage-img.pipe";
import {NotificationsComponent} from "src/app/notifications/notifications.component";
import {FootermenuComponent} from "../components/footermenu/footermenu.component";
import {IonicModule} from "@ionic/angular";
import {MapComponent} from "../components/map/map.component";


/**
 * Import of this Module is needed to provide declared and exported Pipes and Components
 */

@NgModule({

  declarations: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, MapComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent, MapComponent]
})
export class SharedModule { }
