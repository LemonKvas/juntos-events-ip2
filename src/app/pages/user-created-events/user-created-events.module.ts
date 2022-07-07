import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreatedEventsPageRoutingModule } from './user-created-events-routing.module';

import { UserCreatedEventsPage } from './user-created-events.page';
import {UserProfilePageModule} from "../user-profile/user-profile.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserCreatedEventsPageRoutingModule,
        UserProfilePageModule
    ],
  declarations: [UserCreatedEventsPage]
})
export class UserCreatedEventsPageModule {}
