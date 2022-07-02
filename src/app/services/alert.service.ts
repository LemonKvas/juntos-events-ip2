import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Event } from '../models/classes/event.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert;
  constructor(private alertService: AlertController, private location: Location) {}
  async basicAlert(header, message, buttons) {
    this.alert = await this.alertService.create({
      header,
      message,
      buttons
    });
    this.alert.present();
  }
  async unsaveAlert() {
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
          role: 'cancel'
        }
      ]
    });
    this.alert.present();
  }
  async emptyInputsAlert() {
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async eventDraftAlert() {
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Geben Sie dem Event Entwurf bitte einen Namen.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async plsSignInAlert() {
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Bitte melden Sie sich an, um fortzufahren.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async partakeEvent(event: Event) {
    this.alert = await this.alertService.create({
      header: 'Zu Event angemeldet',
      message:
        'Sie haben sich soeben erfolgreich zu ' +
        '<strong>' +
        event.name +
        '</strong>' +
        ' angemeldet!',
      buttons: ['OK']
    });
    this.alert.present();
  }
}
