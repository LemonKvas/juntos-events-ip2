import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserPage } from 'src/app/pages/edit-user/edit-user.page';

const routes: Routes = [
  {
    path: '',
    component: EditUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUserPageRoutingModule {}
