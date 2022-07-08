import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPageRoutingModule } from 'src/app/pages/event-details/event-details-routing.module';

import { EventDetailsPage } from 'src/app/pages/event-details/event-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import {StarRatingModule} from "ionic5-star-rating";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, EventDetailsPageRoutingModule, SharedModule, StarRatingModule],
  declarations: [EventDetailsPage]
})
export class EventDetailsPageModule {}
