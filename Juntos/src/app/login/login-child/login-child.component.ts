import {Component, Input} from '@angular/core';
import {AuthService} from "src/app/services/auth.service";

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss'],
})
export class LoginChildComponent {

  @Input() userType: number | string;
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

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

  GoogleLogin(){
    this.authService.GoogleAuth(this.userType);
  }

  FacebookLogin() {
    this.authService.FacebookAuth(this.userType);
  }
}
