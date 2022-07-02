import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss']
})
export class FootermenuComponent implements OnInit {
  currentPage: string;
  currentUser: string;

  constructor(
    public router: Router,
    public userData: UserDataService,
    private alertService: AlertService
  ) {
    this.currentPage = this.router.url;
  }

  ngOnInit() {
    console.log('this.router.url', this.router.url);
    this.getUser();
  }

  async getUser() {
    this.currentUser = await this.userData.getCurrentUserID();
    console.log(this.currentUser);
  }

  /**
   * DE:
   * Wenn currentUser bereits initialisiert ist, dann wird der Nutzer direkt zu seinem Profil weitergeleitet,
   * falls die nicht der Fall ist, wird erneut versucht die Nutzer ID zu aktualisieren und den Nutzer danach
   * auf sein Profil weiterzuleiten. Falls die Nutzer ID immer noch nicht aktualisiert werden konnte, wird
   * ein Alert angezeigt, auf dem der Nutzer hingewiesen wird, dass dieser sich zuerst einloggen muss.
   * EN:
   * If currentUser is already initialized, then the user will be redirected directly to his profile,
   * if it is not, it will try to update the user ID again and redirect the user to his profile.
   * If the user ID still could not be updated, then an alert will be displayed
   * an alert will be displayed informing the user that he/she has to log in first.
   */
  async navigateToUserProfile() {
    if (this.currentUser) {
      await this.router.navigate(['profile', this.currentUser]);
    } else {
      this.currentUser = await this.userData.getCurrentUserID();
      if (this.currentUser) {
        await this.router.navigate(['profile', this.currentUser]);
      } else {
        await this.alertService.plsSignInAlert();
      }
    }
  }
}
