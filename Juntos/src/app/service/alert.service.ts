import { Injectable } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert;
  constructor(private alertService: AlertController, private location: Location) { }
  async basicAlert(header, message, buttons){
    this.alert = await this.alertService.create({
      header,
      message,
      buttons,
    });
    this.alert.present();
  }
  async unsaveAlert(){
    this.alert = await this.alertService.create({
      header: 'Sind Sie sicher?',
      message: 'Ihre Änderungen werden nicht gespeichert. Möchten Sie trotzdem fortfahren?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.location.back();
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
        }
      ],
    });
    this.alert.present();
  }
  async emptyInputsAlert(){
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
      buttons: ['Ok']
    });
    this.alert.present();
  }
}
