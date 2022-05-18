import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginIndicator: string;

  constructor(private authService: AuthService) {
    this.loginIndicator = 'user';
  }

  ngOnInit() {
  }

  switchUserLogin(event: any) {
    this.loginIndicator = event.detail.value;
  }


  AnonymousLogin() {
    this.authService.AnonymousAuth();
  }
}
