import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

/**
 * DE:
 * Ist das Kernstück der Login Page und beinhaltet Methoden, Buttons und Inputfelder für verschiedene
 * Loginmöglichkeiten.
 * EN:
 * Is the core of the login page and contains methods, buttons and input fields for various
 * login options.
 * @example
 * <ion-col size="12" [ngSwitch]="loginIndicator">
 *           <app-login-child *ngSwitchCase="'user'"></app-login-child>
 *           <app-login-child *ngSwitchCase="'organizer'"></app-login-child>
 * </ion-col>
 */
@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss']
})
export class LoginChildComponent implements OnInit {
  @Input() userType: number | string;
  email: string;
  password: string;
  deviceIndicator;

  /**
   * DE:
   * Initialisiert GoolgeAuth, falls es sich um ein mobiles Gerät handelt.
   * EN:
   * Initializes GoolgeAuth if it is a mobile device.
   * @param authService
   * @param platform
   */
  constructor(private authService: AuthService, private platform: Platform) {
    if (!this.platform.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  /**
   * DE:
   * Legt in der Variable deviceIndicator fest ob, es sich um ein mobiles Gerät handelt oder nicht.
   * EN:
   * Defines in the variable deviceIndicator whether it is a mobile device or not.
   */
  ngOnInit() {
    if (this.platform.is('mobile') || this.platform.is('ios') || this.platform.is('android')) {
      this.deviceIndicator = 1;
    } else {
      this.deviceIndicator = 0;
    }
  }

  /**
   * DE:
   * Ruft die Methode checkEmailAndPasswort im AuthService auf. Falls diese true ergibt wird die Methode
   * emailLogin im AuthService aufgerufen.
   * EN:
   * Calls the checkEmailAndPassword method in the AuthService. If it returns true the method
   * emailLogin method in the AuthService is called.
   */
  emailLogin() {
    if (this.authService.checkEmailAndPassword(this.email, this.password)) {
      this.authService.emailLogin(this.email, this.password);
    }
  }

  /**
   * DE:
   * Ruft die Methode checkEmailAndPasswort im AuthService auf. Falls diese true ergibt wird die Methode
   * emailRegister im AuthService aufgerufen.
   * EN:
   * Calls the checkEmailAndPassword method in the AuthService. If it returns true the method
   * emailRegister method in the AuthService is called.
   *
   */
  emailRegister() {
    if (this.authService.checkEmailAndPassword(this.email, this.password)) {
      this.authService.emailRegister(this.userType, this.email, this.password);
    }
  }

  /**
   * DE:
   * Ruf die Methode googleMobileAuth im Auth Service auf.
   * EN:
   * Call the googleMobileAuth method in the Auth service.
   */
  async googleMobileLogin() {
    await this.authService.googleMobileAuth(this.userType);
  }

  /**
   * DE:
   * Ruft die Methode googleAuth im Auth Service auf.
   * EN:
   * Calls the googleAuth method in the Auth service.
   */
  googleLogin() {
    this.authService.googleAuth(this.userType);
  }
  /**
   * DE:
   * Ruft die Methode facebookLogin im Auth Service auf.
   * EN:
   * Calls the facebookLogin method in the Auth service.
   */
  facebookLogin() {
    this.authService.facebookAuth(this.userType);
  }
}
