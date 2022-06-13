import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCreatePageRoutingModule } from 'src/app/pages/event-create/event-create-routing.module';

import { EventCreatePage } from 'src/app/pages/event-create/event-create.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EventCreatePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [EventCreatePage]
})
export class EventCreatePageModule {}