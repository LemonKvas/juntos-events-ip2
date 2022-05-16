import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginIndicator: string;

  constructor() {
    this.loginIndicator = 'user';
  }

  ngOnInit() {
  }

  switchUserLogin(event: any) {
    this.loginIndicator = event.detail.value;
  }

}
