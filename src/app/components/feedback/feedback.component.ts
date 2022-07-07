import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Event} from '../../models/classes/event.model';
import {EventService} from '../../services/event.service';
import {AlertService} from '../../services/alert.service';
import {ModalController} from '@ionic/angular';
import {UserDataService} from "../../services/user-data.service";
import {Feedback} from "../../models/interfaces/feedback";

/**
 * DE:
 * Komponente, um das Feedback Modal zu öffnen
 * EN:
 * Compononent to open feedback modal
 */
@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
    @Input() feedBackEvent: Event;
    isModalOpen = false;
    starRating: number = 4;
    feedback: string;
    alreadyRated: boolean = false;

    constructor(
        public userService: UserDataService,
        public alertService: AlertService,
        public modal: ModalController
    ) {
    }

    ngOnInit() {
        this.hasAlreadyRated().then();
    }

    /**
     * DE:
     * Schaut nach, ob der User das Event schon bewertet hat
     * EN:
     * Sees if the user already rated the event
     */
    async hasAlreadyRated() {
        const res = await this.userService.hasUserAlreadyRated(this.feedBackEvent.creatorId, this.feedBackEvent.eventId)

        if (!res) {
            this.alreadyRated = false;
            return
        }

        if (typeof res !== "boolean") {
            this.feedback = res.text;
            this.starRating = res.rating;
        }

    }

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
     * Speichert das Feedback in der Datenbank
     * EN:
     * Saves the feedback in the database
     */

    async saveFeedback() {
        const currentUserId = await this.userService.getCurrentUserID();
        const newFeedback: Feedback = {
            userId: currentUserId,
            text: this.feedback,
            rating: this.starRating,
            eventId: this.feedBackEvent.eventId,
        }

        await this.userService.addFeedback(newFeedback, this.feedBackEvent.creatorId).then(() => {
            this.alertService.basicAlert(
                '',
                'Dein Feedback wurde erfolgreich versendet. \n Vielen Dank für deine Hilfe! 😄',
                ['OK']
            );
        }).catch((e) => {
            console.log(e);
            this.alertService.basicAlert(
                '',
                'Beim Versenden des Feedbacks ist ein Fehler aufgetreten',
                ['OK']
            );
        })
        this.isModalOpen = false;
        await this.modal.dismiss();
    }
}
