import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FireStorageImgPipe} from "src/app/models/pipes/fire-storage-img.pipe";
import {FootermenuComponent} from "../components/footermenu/footermenu.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [FireStorageImgPipe, FootermenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FireStorageImgPipe, FootermenuComponent]
})
export class SharedModule { }
