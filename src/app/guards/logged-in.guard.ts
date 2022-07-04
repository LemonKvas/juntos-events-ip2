import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from '../services/alert.service';

/**
 * DE:
 * Ein Guard um zu überprüfen, ob ein Nutzer eingeloggt ist.
 * EN:
 * A guard to check if a user is logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  /**
   * @param authService
   * @param alertService
   */
  constructor(public authService: AuthService, private alertService: AlertService) {}

  /**
   * DE:
   * Gibt ein Boolean Promise mithilfe der Methode isLoggedIn aus dem AuthService, ob ein Nutzer eingeloggt ist zurück.
   * EN:
   * Returns a Boolean Promise using the isLoggedIn method from the AuthService whether a user is logged in.
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async (resolve, reject) => {
      const isLoggedIn = await this.authService.isLoggedIn();
      if (!isLoggedIn) {
        this.alertService.plsSignInAlert();
        reject(false);
      }
      resolve(true);
    });
  }
}
