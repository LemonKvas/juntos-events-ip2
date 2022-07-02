import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss']
})
export class LoginChildComponent implements OnInit {
  @Input() userType: number | string;
  email: string;
  password: string;
  test;
  deviceIndicator;

  constructor(private authService: AuthService, private platform: Platform) {
    if (!this.platform.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  ngOnInit() {
    if (this.platform.is('mobile') || this.platform.is('ios') || this.platform.is('android')) {
      this.deviceIndicator = 1;
    } else {
      this.deviceIndicator = 0;
    }
  }

  emailLogin() {
    if (this.authService.checkEmailAndPassword(this.email, this.password)) {
      this.authService.emailLogin(this.email, this.password);
    }
  }

  emailRegister() {
    if (this.authService.checkEmailAndPassword(this.email, this.password)) {
      this.authService.emailRegister(this.userType, this.email, this.password);
    }
  }

  async googleMobileLogin() {
    await this.authService.googleMobileAuth(this.userType);
  }

  googleLogin() {
    this.authService.googleAuth(this.userType);
  }

  facebookLogin() {
    this.authService.facebookAuth(this.userType);
  }
}
