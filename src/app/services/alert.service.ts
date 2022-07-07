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
      message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async eventDraftAlert() {
    this.alert = await this.alertService.create({
      message: 'Geben Sie dem Event Entwurf bitte einen Namen.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async plsSignInAlert() {
    this.alert = await this.alertService.create({
      message: 'Bitte melden Sie sich an, um fortzufahren.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async partakeEvent(event: Event) {
    this.alert = await this.alertService.create({
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
  async photoUpload() {
    this.alert = await this.alertService.create({
      message: 'Bitte warten Sie kurz. Ihr Foto wird noch hochgeladen.',
      buttons: ['OK']
    });
    this.alert.present();
  }
  async supportAlert() {
    this.alert = await this.alertService.create({
      header: 'Probleme?',
      message:
        'Senden Sie unserem Support eine Nachricht und wir werden uns umgehend um ihr Anliegen kümmern.',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Support kontaktieren',
          handler: () => {
            console.log('open support message modal.');
          }
        }
      ]
    });
    this.alert.present();
  }
}
