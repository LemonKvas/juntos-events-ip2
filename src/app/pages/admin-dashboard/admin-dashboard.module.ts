import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule,
    ScrollingModule
  ],
  declarations: [AdminDashboardPage]
})
export class AdminDashboardPageModule {}
