import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Message } from 'src/app/models/interfaces/message';
import { ChatGroup } from 'src/app/models/classes/chat-group';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/classes/user';
import { AlertService } from '../../services/alert.service';
import { PhotoService } from '../../services/photo.service';
import {IonContent, ModalController} from '@ionic/angular';
import {SupportMessagePage} from "../support-message/support-message.page";

/**
 * DE:
 * Seite zur Anzeige von einem Chat zwischen zwei NutzerInnen.
 * EN:
 * Page to display a chat between two users.
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  newMsg = '';
  msg: Message;
  messages: Message[] = [];
  chatGroup: ChatGroup;
  chatGroupId = '';
  chatUserId: string;
  chatUser: User;
  currentUser: User;
  photo: string = '';

  /**
   * DE:
   * Grundvariablen werden initialisiert. Die ID des/der eingeloggten Nutzers/Nutzerin und die Chat
   * Gruppen ID wird aus der URL ausgelesen.
   * EN:
   * Basic variables are initialized. The ID of the logged in user and the chat group ID are is
   * read from the URL.
   * @param chatService
   * @param userService
   * @param route
   * @param alertService
   * @param router
   * @param photoService
   * @param modalCtrl
   */
  constructor(
    private chatService: ChatService,
    private userService: UserDataService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private photoService: PhotoService,
    private modalCtrl: ModalController
  ) {
    this.chatGroupId = this.route.snapshot.params.cId;
    this.chatUserId = this.route.snapshot.params.uId;
  }

  /**
   * DE:
   * Bei Initialisierung der Komponente werden die Chat Gruppen Daten, die NutzerInnen Daten sowie alle
   * Nachrichten dieser Gruppe geholt. Der / die NutzerIn soll am Anfang direkt zum Ende der Seite
   * geführt werden.
   * EN:
   * When the component is initialized, the chat group data, the user data and all messages of this
   * group are fetched. At the beginning the user should be taken directly to the end of the page.
   */
  async ngOnInit() {
    await this.getChatInfo(this.chatGroupId);
    await this.getChatUsersData();
    await this.getMessages();
    await this.scrollToBottom();
  }
  /**
   * DE:
   * Diese Methode holt die Daten der Chat Gruppe und setzt den Wert der lokalen Variable 'chatGroup'.
   * EN:
   * This method fetches the chat group data and sets the value of the local variable 'chatGroup'.
   *
   * @example
   * Call it with a chat id as a string
   * getChatInfo('h29zt8h4')
   *
   * @param id
   */
  async getChatInfo(id: string) {
    this.chatGroup = await this.chatService.getChatGroupById(id);
  }

  /**
   * DE:
   * Diese Methode holt sich die Daten der Chat NutzerInnen und setzt die Werte der lokalen Variabeln
   * 'currentUser' und 'chatUser'.
   * EN:
   * This method gets the data of the chat users and sets the values of the local variables
   * 'currentUser' and 'chatUser'.
   */
  async getChatUsersData() {
    this.currentUser = await this.userService.getCurrentUser();
    this.chatUser = await this.userService.getUserById(this.chatUserId);
  }

  /**
   * DE:
   * Diese Methode setzt die Werte aus den Eingabefeldern zu der lokalen Variable 'msg' und sendet diese
   * durch die addChatMessage() Methode an Firebase. NutzerInnen werden bei dem jeweils anderen in der
   * Sammlung 'chatPartners' gespeichert.
   * EN:
   * This function will send a given string as a message to the firebase sub-collection
   * 'messages' of current chat and add current user as a chat partner to the other
   * chat user in case he / she deleted the chat.
   *
   * @example
   * Call it with a string
   * sendMessage(message: string)
   *
   * @param newMsg
   */
  async sendMessage(newMsg: string) {
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: newMsg,
      creatorName: this.currentUser.firstName,
      photo: ''
    };
    this.newMsg = '';
    // Add chat message to sub-collection 'messages' of collection 'chats'
    await this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    // Add both users as each others chat partner
    await this.userService
      .addChatPartner(this.chatGroupId, this.chatUser)
      .catch((err) => console.log('Error: ', err));
    await this.scrollToBottom();
  }

  /**
   * DE:
   * Diese Methode sendet ein ausgewähltes Foto als string von dem Typ 'Message' in die Sammlung 'messages'
   * von dem Chat.
   * EN:
   * This function will send a given string as a message to the firebase sub-collection 'messages'
   * of current chat and add current user as a chat partner to the other chat user in case he / she
   * deleted the chat.
   *
   * @example
   * Call it with a photo as a string
   * sendMessage(photo: string)
   *
   * @param photo
   */
  async sendPhoto(photo: string) {
    // Set values into 'msg' of type 'Message'
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: '',
      creatorName: this.currentUser.firstName,
      photo: photo
    };
    this.photo = '';
    // Add chat message to sub-collection 'messages' of collection 'chats'
    await this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    // Add both users as each others chat partner
    await this.userService
      .addChatPartner(this.chatGroupId, this.chatUser)
      .catch((err) => console.log('Error: ', err));
    await this.scrollToBottom();
  }
  /**
   * DE:
   * Diese Methode holt sich alle Nachrichten der Chat Gruppe durch die getMessages() von dem Service
   * Chat.
   * EN:
   * This function will fetch all messages of current chat by calling getMessages() from
   * chatService and set value of local variable 'messages'.
   */
  async getMessages() {
    this.chatService.getMessages(this.chatGroupId).subscribe((res) => {
      this.messages = res.map((e) => ({
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as Message)
      }));
    });
    await this.scrollToBottom();
  }

  /**
   * DE:
   * Diese Methode wird ein ausgewähltes Foto in das Firebase Storage hochladen und durch die sendPhoto()
   * Funktion wird dieses als Nachricht versendet.
   * EN:
   * This function will be called by an event and upload selected file to firebase
   * storage. Local function sendPhoto() will be called to send file as a message.
   *
   * @example
   * Call it with a DOM event object
   * uploadPhoto($event)
   *
   * @param event
   */
  uploadPhoto(event) {
    this.photo = event.target.files[0];
    this.photoService.storePhoto(this.photo, 'chats/').then(
      (res: any) => {
        if (res) {
          this.photo = res;
        }
        this.sendPhoto(this.photo).catch((err) => console.log('Error: ', err));
      },
      (error: any) => {
        console.log('Error: ', error);
      }
    );
  }
  /**
   * DE:
   * Diese Methode wird ein Alert anzeigen, welches den / die NutzerIn um eine Bestätigung fragt, ob
   * mit dem Löschen der Nachricht fortgefahren werden soll. Wenn dies bestätigt wird, wird die Nachricht
   * aus der Firebase Sammlung entfernt.
   * EN:
   * This function will open a modal to ask user if he / she wants to proceed and delete selected
   * message with given data. If this is the case, deleteMessage() from chatService will be called.
   *
   * @example
   * Call it with an object of type 'Message'
   * deleteMessage(message: Message)
   *
   * @param msg
   */
  async deleteMessage(msg: Message) {
    await this.alertService.basicAlert('', 'Wollen Sie diese Nachricht löschen?', [
      {
        text: 'Ja',
        handler: () => {
          this.chatService.deleteMessage(msg);
          this.scrollToBottom();
        }
      },
      {
        text: 'Abbrechen',
        role: 'cancel'
      }
    ]);
  }
  /**
   * DE:
   * Diese Methode wird die Chat Gruppe für den / die eingeloggte(n) NutzerIn löschen und navigiert den /
   * die NutzerIn auf die Chat-List Seite.
   * EN:
   * This function will delete chat with given chat id by calling deleteChat() from
   * chatService.
   *
   * @example
   * Call it with a user id as a string
   * deleteChat(userId: string)
   *
   * @param userId
   */
  async deleteChat(userId: string) {
    await this.alertService.basicAlert(
      '',
      'Sind Sie sicher, dass Sie diesen Chat löschen wollen?',
      [
        {
          text: 'Ja',
          handler: () => {
            this.chatService.deleteChat(userId);
            this.router.navigate(['chat-list', this.currentUser.userId]);
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel'
        }
      ]
    );
  }

  /**
   * DE:
   * Diese Methode wird das ausgewählte Bild in einem neuen Fenster öffnen.
   * EN:
   * This function will open data with the given url string in a new tab.
   *
   * @param url
   */
  openImageNewTab(url: string) {
    window.open(url);
  }

  /**
   * DE:
   * Diese Methode wird den / die NutzerIn automatisch zum Ende der Seite navigieren.
   * EN:
   * This function will scroll down to the bottom of the screen / content.
   */
  async scrollToBottom() {
    this.content.scrollToBottom(1000).catch((err) => console.log('Error: ', err));
  }
  /**
   * DE:
   * Diese Methode öffnet ein Alert, um den / die NutzerIn darauf hinzuweisen, dass bei Problemen der
   * Support angeschrieben werden kann.
   * EN:
   * This method opens an alert to inform the user that in case of problems the support can be contacted.
   */
  async supportAlert() {
    await this.alertService.basicAlert(
      'Probleme',
      'Senden Sie unserem Support eine Nachricht und wir werden uns umgehend um ihr Anliegen kümmern.',
      [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Support kontaktieren',
          handler: () => {
            this.openEventSupportMessageModal(this.currentUser.userId, this.chatUserId);
          }
        }
      ]
    );
  }

  /**
   * DE:
   * Diese Methode ruft ein Alert auf und bietet den / der NutzerIn an, dass er / sie sich bei Problemen
   * beim Support melden kann. Daten die der Funktion mitgegeben werden, werden dem Alert für den weiteren
   * Verlauf übergeben.
   * EN:
   * This function will open an alert for user to contact support if there is a problem. User will be able
   * to send support a message if he / she click on 'Support kontaktieren'. A modal with input fields
   * will be opened for user to enter his / her message and given data will be sent to admin / support.
   *
   * @param currentUserId
   * @param reportUserId
   */
  async openEventSupportMessageModal(currentUserId: string, reportUserId: string) {
    const modal = await this.modalCtrl.create({
      component: SupportMessagePage,
      componentProps: {
        userId: currentUserId,
        reportUserId: reportUserId
      }
    });
    await modal
      .present()
      .then(() => console.log('No error with presenting modal'))
      .catch((err) => console.log('error modal: ', err));
    await modal.onDidDismiss();
  }
}
