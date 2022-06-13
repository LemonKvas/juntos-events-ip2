import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListPage } from 'src/app/pages/event-list/event-list.page';

const routes: Routes = [
  {
    path: '',
    component: EventListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventListPageRoutingModule {}
