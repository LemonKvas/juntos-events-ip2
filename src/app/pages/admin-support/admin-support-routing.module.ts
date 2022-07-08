import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSupportPage } from './admin-support.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSupportPageRoutingModule {}
