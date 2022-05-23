import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "src/app/services/auth.service";

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent implements OnInit {

  @Input() userType: number | string;

  constructor(public authService: AuthService) { }

  ngOnInit() {}

}
