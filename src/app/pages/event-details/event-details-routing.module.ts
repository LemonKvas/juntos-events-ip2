import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailsPage } from 'src/app/pages/event-details/event-details.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsPageRoutingModule {}
