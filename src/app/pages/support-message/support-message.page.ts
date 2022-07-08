import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { ModalController, NavParams } from '@ionic/angular';
import { SupportService } from '../../services/support.service';
import { Message } from '../../models/interfaces/message';

/**
 * DE:
 * Seite als Modal um den Support eine Nachricht zu schreiben.
 * EN:
 * Page as a modal to write a message to the support.
 */
@Component({
  selector: 'app-support-message',
  templateUrl: './support-message.page.html',
  styleUrls: ['./support-message.page.scss']
})
export class SupportMessagePage {
  msg: Message;
  creatorId: string = '';
  eventId: string = '';
  reportUserId: string = '';
  category: string[] = ['Event', 'NutzerIn'];
  eventProblems: string[] = [
    'Event löschen',
    'TeilnehmerIn melden',
    'TeilnehmerIn verwalten',
    'Andere Probleme'
  ];
  userProblems: string[] = ['NutzerIn melden', 'Nutzer Daten aktualisieren', 'Andere Probleme'];
  subject: string = '';
  textMsg: string = '';
  selectedCategory: string = '';
  selectedProblem: string = '';
  inProcess: number = 0;
  errors: Map<string, string> = new Map<string, string>();

  /**
   * DE:
   * Die ID des/der eingeloggten NutzerIn, die mögliche Event ID und die mögliche Nutzer ID des/der
   * gemeldeten NutzerIn, welche als 'componentProps' mitgegen wurden, werden als Werte für die lokalen
   * Variablen gesetzt.
   * EN:
   * The ID of the logged in user, the possible event ID and the possible user ID of the
   * reported user, which were included as 'componentProps', will be set as values for the local variables.
   *
   * @param alertService
   * @param modalCtrl
   * @param navParams
   * @param supportService
   */
  constructor(
    private alertService: AlertService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private supportService: SupportService
  ) {
    this.creatorId = this.navParams.get('userId');
    this.eventId = this.navParams.get('eventId');
    this.reportUserId = this.navParams.get('reportUserId');
  }

  /**
   * DE:
   * Diese Methode überprüft, ob alle benötigten Felder ausgefüllt sind und schickt die Werte als Typ
   * 'Message' mit der Funktion addSupportMessage() von dem Support Service an Firebase.
   * EN:
   * This method checks if all required fields are filled in and sends the values as type
   * 'Message' with the addSupportMessage() function from the support service to Firebase.
   */
  async sendMessageToSupport() {
    if (!this.subject) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('subject', 'Betreff darf nicht leer sein!');
    } else if (!this.selectedCategory) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('selectedCategory', 'Kategorie darf nicht leer sein!');
    } else if (!this.textMsg) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('textMsg', 'Nachrichtenfeld darf nicht leer sein!');
    } else if (this.errors.size === 0) {
      this.msg = {
        subject: this.subject,
        creator: this.creatorId,
        date: new Date(),
        message: this.textMsg,
        eventId: this.eventId,
        reportUserId: this.reportUserId,
        category: this.selectedCategory,
        problem: this.selectedProblem,
        inProcess: this.inProcess
      };
      await this.supportService.addSupportMessage(this.msg);
      this.dismissModal();
      await this.alertService.basicAlert(
        'Nachricht versendet!',
        'Wir werden uns umgehend um Ihr Anliegen kümmern.',
        ['OK']
      );
    }
  }

  /**
   * DE:
   * Diese Methode ruft ein Alert auf, wenn der/die NutzerIn den Vorgang abbricht und erinnert ihn/sie
   * über möglichen Datenverlust.
   * EN:
   * This function will be called when the user cancel the process by leaving the page without saving
   * data. He / she will be reminded that changes might be discarded.
   */
  dismissModal() {
    this.modalCtrl.dismiss().catch((err) => console.log('Error: ', err));
  }
}
