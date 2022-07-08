import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Event } from '../models/classes/event.model';

/**
 * DE:
 * Service zur Verwaltung von Meldungen (alerts).
 * EN:
 * Service to manage alerts.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert;
  constructor(private alertCtrl: AlertController, private location: Location) {}

  /**
   * DE:
   * Diese Methode stellt eine Standard Meldung da, damit diese auf verschiedenen Seiten einsetzbar ist.
   * EN:
   * This method provides a standard alert so that it can be called on different pages.
   *
   * @example
   * Call it with a header as string, a message as a string and buttons
   * await this.alertService.basicAlert(
   *         'Nachricht versendet!',
   *         'Wir werden uns umgehend um Ihr Anliegen kümmern.',
   *         ['OK'],
   * );
   *
   * @param header
   * @param message
   * @param buttons
   */
  async basicAlert(header, message, buttons) {
    this.alert = await this.alertCtrl.create({
      header,
      message,
      buttons
    });
    this.alert.present();
  }

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn zu warnen, dass ein möglicher Datenverlust
   * erfolgen kann.
   * EN:
   * This method is called to warn the user that a possible data loss may occur.
   */
  async unsaveAlert() {
    this.alert = await this.alertCtrl.create({
      message: 'Ihre Änderungen gehen wohlmöglich verloren. Möchten Sie trotzdem fortfahren?',
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

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn zu warnen, dass erfoderliche Daten
   * noch fehlen.
   * EN:
   * This method is called to warn the user that some required data is still missing.
   */
  async emptyInputsAlert() {
    this.alert = await this.alertCtrl.create({
      header: 'Achtung',
      message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn zu warnen, dass das Event einen
   * Namen benötigt, damit es als Entwurf gespeichert werden kann.
   * EN:
   * This method is called to warn the user that the event needs a name to be saved
   * as a draft.
   */
  async eventDraftAlert() {
    this.alert = await this.alertCtrl.create({
      message: 'Geben Sie dem Event bitte einen Namen.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn zu warnen, dass ein
   * Login erforderlich ist um fortzufahren.
   * EN:
   * This method is called to warn the user that a login is required
   * to continue.
   */
  async plsSignInAlert() {
    this.alert = await this.alertCtrl.create({
      message: 'Bitte melden Sie sich an, um fortzufahren.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn mitzuteilen, dass er/sie
   * erfolgreich zu einem Event angemeldet sind.
   * EN:
   * This method is called to inform the user that he/she is
   * have successfully registered for an event.
   *
   * @example
   * Call it with an object of type 'Event'
   * partakeEvent(event: Event)
   *
   * @param event
   */
  async partakeEvent(event: Event) {
    this.alert = await this.alertCtrl.create({
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

  /**
   * DE:
   * Diese Methode wird aufgerufen, um den/die NutzerIn mitzuteilen, dass ein Foto
   * noch nicht hochgeladen wurde.
   * EN:
   * This method is called to inform the user that a photo has not yet been uploaded.
   */
  async photoUpload() {
    this.alert = await this.alertCtrl.create({
      message: 'Bitte warten Sie kurz. Ihr Foto wird noch hochgeladen.',
      buttons: ['OK']
    });
    this.alert.present();
  }
}
