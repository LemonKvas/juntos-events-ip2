import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportMessagePageRoutingModule } from './support-message-routing.module';

import { SupportMessagePage } from './support-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportMessagePageRoutingModule
  ],
  declarations: [SupportMessagePage]
})
export class SupportMessagePageModule {}
