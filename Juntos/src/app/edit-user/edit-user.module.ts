import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditUserPageRoutingModule } from './edit-user-routing.module';
import { EditUserPage } from './edit-user.page';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserPageRoutingModule,
    SharedModule
  ],
  declarations: [EditUserPage]
})
export class EditUserPageModule {}
