import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Event} from "../../models/classes/event.model";
import {EventService} from "../../services/event.service";
import {AlertService} from "../../services/alert.service";
import {ModalController} from "@ionic/angular";

/**
 * DE:
 * Komponente, um das Feedback Modal zu öffnen
 * EN:
 * Compononent to open feedback modal
 */
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  @Input() feedBackEvent : Event;
  isModalOpen = false;
  starRating: number = 4;
  feedback : string;

  constructor(public eventService: EventService, public alertService: AlertService, public modal: ModalController,) { }

  ngOnInit() {}

  /**
   * DE:
   * Setzt isModalOpen zum gegebenen boolean -> modal wird geöffnet oder geschlossen
   * EN:
   * Sets isModalOpen to given boolean -> openening or closing the modal
   * @param {boolean} isOpen
   *
   * @example
   * <ion-button (click)="setOpen(false)"><ion-icon size="large" style="zoom:0.8" name="close-outline"></ion-icon></ion-button>
   */
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  /**
   * DE:
   * Setzt starRating zur gegebenen number
   * EN:
   * Sets starRating to given number
   * @param {number} rating
   *
   * @example
   * <ionic5-star-rating #rating (ratingChanged)="logRatingChange($event)"></ionic5-star-rating>
   */
  logRatingChange(rating) {
    this.starRating = rating;
  }

  /**
   * DE:
   * Speichert das Feedback in der Datenbank, das vorher gespeichert wurde
   * EN:
   * Saves the feedback in the database
   */
  async saveFeedback() {
    if (!this.feedBackEvent.stars) {
      this.feedBackEvent.stars = [];
    }
    if (!this.feedBackEvent.feedback) {
      this.feedBackEvent.feedback = [];
    }
    this.feedBackEvent.stars.unshift(this.starRating);
    this.feedBackEvent.feedback.unshift(this.feedback);

    await this.eventService.saveFeedback(this.feedBackEvent).then(() => {
      this.alertService.basicAlert('', 'Dein Feedback wurde erfolgreich versendet. \n Vielen Dank für deine Hilfe! 😄', ['OK']);
    }).catch((e) => {
      console.log(e);
      this.alertService.basicAlert('', 'Beim Versenden des Feedbacks ist ein Fehler aufgetreten', ['OK']);
    })
    this.isModalOpen = false;
    await this.modal.dismiss();
  }

}
