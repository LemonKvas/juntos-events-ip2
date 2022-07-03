import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCreatePage } from 'src/app/pages/event-create/event-create.page';

const routes: Routes = [
  {
    path: '',
    component: EventCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCreatePageRoutingModule {}
