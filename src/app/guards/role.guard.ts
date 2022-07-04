import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

/**
 * DE:
 * Ein Guard um zu überprüfen, ob ein Nutzer die nötigen Rechte für den Zugriff auf eine Route hat.
 * EN:
 * A guard to check if a user has the necessary rights to access a route.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  /**
   * @param authService
   * @param alertService
   */
  constructor(private authService: AuthService, private alertService: AlertService) {}

  /**
   * DE:
   * Falls der Nutzer die selben, oder niedrigere Rechte als benötigt hat gibt die Methode true zurück,
   * ansonsten false.
   * EN:
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const neededRole = route.data.role as string;
    return new Promise((resolve, reject) => {
      if (!this.authService.hasRole(neededRole)) {
        this.alertService.basicAlert(
          'Achtung!',
          'Sie haben keine Rechte für diesen Zugriff,' + 'wenden Sie sich an Juntos!',
          ['OK']
        );
        reject(false);
      }
      resolve(true);
    });
  }
}
