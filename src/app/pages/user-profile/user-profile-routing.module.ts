import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from 'src/app/pages/user-profile/user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilePageRoutingModule {}
