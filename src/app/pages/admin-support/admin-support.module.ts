import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSupportPageRoutingModule } from './admin-support-routing.module';

import { AdminSupportPage } from './admin-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSupportPageRoutingModule
  ],
  declarations: [AdminSupportPage]
})
export class AdminSupportPageModule {}
