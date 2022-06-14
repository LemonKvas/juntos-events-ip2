import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendlistPageRoutingModule } from 'src/app/pages/friendlist/friendlist-routing.module';

import { FriendlistPage } from 'src/app/pages/friendlist/friendlist.page';
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendlistPageRoutingModule,
    SharedModule
  ],
  declarations: [FriendlistPage]
})
export class FriendlistPageModule {}
