import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Platform} from '@ionic/angular';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {

  @Input() userType: number | string;
  email: string;
  password: string;
  test;
  deviceIndicator;



  constructor(private authService: AuthService, private platform: Platform){
    if(!this.platform.is('capacitor')){
      GoogleAuth.initialize();
    }
  }

  ngOnInit(){
    if(this.platform.is('mobile') || this.platform.is('ios') || this.platform.is('android')){
      this.deviceIndicator = 1;
    } else {
      this.deviceIndicator = 0;
    }
  }


  EmailLogin(){
    this.authService.EmailLogin(this.email, this.password);
  }

  EmailRegister(){
    this.authService.EmailRegister(this.userType, this.email, this.password);
  }

  async GoogleMobileLogin(){
    await this.authService.GoogleMobileAuth(this.userType);
  }

  GoogleLogin(){
    this.authService.GoogleAuth(this.userType);
  }

  FacebookLogin() {
    this.authService.FacebookAuth(this.userType);
  }
}
