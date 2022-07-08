import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSupportPageRoutingModule } from './admin-support-routing.module';

import { AdminSupportPage } from './admin-support.page';
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSupportPageRoutingModule,
    SharedModule
  ],
  declarations: [AdminSupportPage]
})
export class AdminSupportPageModule {}
