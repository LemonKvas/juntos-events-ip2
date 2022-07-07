import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditUserPageRoutingModule } from 'src/app/pages/edit-user/edit-user-routing.module';
import { EditUserPage } from 'src/app/pages/edit-user/edit-user.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EditUserPageRoutingModule, SharedModule],
  declarations: [EditUserPage]
})
export class EditUserPageModule {}
