import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventListPageRoutingModule } from 'src/app/pages/event-list/event-list-routing.module';
import { EventListPage } from 'src/app/pages/event-list/event-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventListPageRoutingModule,
    SharedModule
  ],
  declarations: [EventListPage]
})

export class EventListPageModule {}
