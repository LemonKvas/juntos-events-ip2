import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreatedEventsPage } from './user-created-events.page';

const routes: Routes = [
  {
    path: '',
    component: UserCreatedEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreatedEventsPageRoutingModule {}
