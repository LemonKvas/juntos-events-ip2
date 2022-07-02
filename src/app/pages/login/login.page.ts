import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Login Seite
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginIndicator: string;

  /**
   * DE:
   * Initialisiert die Variable loginIndicator mit dem Wert user.
   * EN:
   * Initializes the loginIndicator variable with the value user.
   * @param authService
   */
  constructor(private authService: AuthService) {
    this.loginIndicator = 'user';
  }

  /**
   * DE:
   * Ändert den Wert der Variable loginIndicator zu dem im Parameter event mitgegebenen String.
   * EN:
   * Changes the value of the loginIndicator variable to the string passed in the event parameter.
   * @param event
   */
  switchUserLogin(event: any) {
    this.loginIndicator = event.detail.value;
  }

  /**
   * DE:
   * Ruft die Methode anonymousAuth im AuthService auf.
   * EN:
   * Calls the anonymousAuth method in the AuthService.
   */
  anonymousLogin() {
    this.authService.anonymousAuth();
  }
}
