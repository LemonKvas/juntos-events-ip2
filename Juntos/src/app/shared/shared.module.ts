import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FireStorageImgPipe} from "src/app/models/pipes/fire-storage-img.pipe";
import {NotificationsComponent} from "src/app/notifications/notifications.component";
import {FootermenuComponent} from "../components/footermenu/footermenu.component";
import {IonicModule} from "@ionic/angular";


/**
 * Import of this Module is needed to provide declared and exported Pipes and Components
 */

@NgModule({

  declarations: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FireStorageImgPipe, FootermenuComponent, NotificationsComponent]
})
export class SharedModule { }
