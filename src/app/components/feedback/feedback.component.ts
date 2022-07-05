import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Event} from "../../models/classes/event.model";
import {EventService} from "../../services/event.service";
import {AlertService} from "../../services/alert.service";
import {ModalController} from "@ionic/angular";

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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

    console.log(isOpen)
    console.log(this.feedBackEvent)
  }

  logRatingChange(rating) {
    console.log("changed rating: ",rating);
    this.starRating = rating;
  }

  async saveFeedback() {
    console.log('save')
    console.log(this.starRating)
    console.log(this.feedback)

    if (!this.feedBackEvent.stars) {
      this.feedBackEvent.stars = [];
    }
    if (!this.feedBackEvent.feedback) {
      this.feedBackEvent.feedback = [];
    }
    this.feedBackEvent.stars.unshift(this.starRating);
    this.feedBackEvent.feedback.unshift(this.feedback);

    await this.eventService.saveFeedback(this.feedBackEvent).then(() => {
      this.alertService.basicAlert('', 'Dein Feedback wurde erfolgreich versendet. Vielen Dank! 😄', ['OK']);
    }).catch((e) => {
      console.log(e);
      this.alertService.basicAlert('', 'Beim Versenden des Feedbacks ist ein Fehler aufgetreten', ['OK']);
    })
    this.isModalOpen = false;
    await this.modal.dismiss();


  }

}
