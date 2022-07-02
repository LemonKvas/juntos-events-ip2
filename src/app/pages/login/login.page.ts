import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginIndicator: string;

  constructor(private authService: AuthService) {
    this.loginIndicator = 'user';
  }

  switchUserLogin(event: any) {
    this.loginIndicator = event.detail.value;
  }

  anonymousLogin() {
    this.authService.anonymousAuth();
  }
}
