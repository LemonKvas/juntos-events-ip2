import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private alertService: AlertService) {}

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
