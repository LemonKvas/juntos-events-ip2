import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportMessagePage } from './support-message.page';

const routes: Routes = [
  {
    path: '',
    component: SupportMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportMessagePageRoutingModule {}
