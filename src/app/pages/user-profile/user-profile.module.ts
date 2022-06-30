import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from 'src/app/pages/user-profile/user-profile-routing.module';

import { UserProfilePage } from 'src/app/pages/user-profile/user-profile.page';
import {EventItemComponent} from 'src/app/components/event-item/event-item.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {StarRatingModule } from 'ionic5-star-rating';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    SharedModule,
    StarRatingModule
  ],
    declarations: [UserProfilePage, EventItemComponent]
})
export class UserProfilePageModule {}
