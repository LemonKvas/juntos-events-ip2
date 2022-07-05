import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendlistPage } from 'src/app/pages/friendlist/friendlist.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FriendlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class FriendlistPageRoutingModule {}
