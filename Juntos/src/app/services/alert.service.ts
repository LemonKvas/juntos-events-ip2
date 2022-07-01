import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Event } from '../models/classes/event.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert;
  constructor(private alertService: AlertController, private location: Location) { }

  /**
   * This basic alert is for onetime purposes and will be displayed with
   * the given data 'header', 'message' and 'buttons'.
   *
   * @param header
   * @param message
   * @param buttons
   */
  async basicAlert(header, message, buttons){
    this.alert = await this.alertService.create({
      header,
      message,
      buttons,
    });
    this.alert.present();
  }

  /**
   * This alert will be displayed if user is in an edit mode or filling out a form but
   * decided to cancel the process. User will be asked if he/she wants to continue to
   * cancel process and will be reminded that unsaved changes will be discarded.
   */
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

  /**
   * This alert will be shown if user wants to proceed to save or add form data but there
   * are still empty inputs, which are required.
   */
  async emptyInputsAlert(){
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * If user wants to save an event as a draft, he / she will be reminded that a name
   * is required to proceed.
   */
  async eventDraftAlert(){
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Geben Sie dem Event Entwurf bitte einen Namen.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * This alert will be shown if actions need an authentication and user is not logged in.
   * User will be reminded that the current action needs him / her to be logged in to continue.
   */
  async plsSignInAlert(){
    this.alert = await this.alertService.create({
      header: 'ACHTUNG',
      message: 'Bitte melden Sie sich an, um fortzufahren.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  /**
   * This alert will be shown if user successfully registered for an event. With the given data 'event'
   * the name of it, which the user has just been added to, will be shown in the message.
   *
   * @param event
   */
  async partakeEvent(event: Event){
    this.alert = await this.alertService.create({
      header: 'Zu Event angemeldet',
      message: 'Sie haben sich soeben erfolgreich zu '+ '<strong>' + event.name + '</strong>' + ' angemeldet!',
      buttons: ['OK']
    });
    this.alert.present();
  }
}
