import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from 'src/app/pages/login/login-routing.module';

import {LoginPage} from 'src/app/pages/login/login.page';
import {LoginChildComponent} from 'src/app/components/login-child/login-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, LoginChildComponent]
})
export class LoginPageModule {}
