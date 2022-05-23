import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "src/app/services/auth.service";
import {isPlatform} from "@ionic/angular";
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import {device} from "src/app/models/enums/device";

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {

  @Input() userType: number | string;
  email: string;
  password: string;
  deviceIndicator: device;

  test;



  constructor(private authService: AuthService) {
    if(!isPlatform('capacitor')){
      GoogleAuth.initialize();
    }
  }

  ngOnInit(){
    if(isPlatform('android')){
      this.deviceIndicator = 1;
    } else if (isPlatform('ios')){
      this.deviceIndicator = 2;
    } else {
      this.deviceIndicator = 0;
    }
  }


  EmailLogin(){
    if(this.authService.checkEmailAndPasswort(this.email, this.password)){
      this.authService.EmailLogin(this.email, this.password);
    }
  }

  EmailRegister(){
    if(this.authService.checkEmailAndPasswort(this.email, this.password)){
      this.authService.EmailRegister(this.userType, this.email, this.password);
    }
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
