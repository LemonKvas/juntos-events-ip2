import { Component, OnInit } from '@angular/core';
import { ChatGroup } from 'src/app/models/classes/chat-group';
import { ChatService } from 'src/app/services/chat.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import User from '../../models/classes/user';
import { AlertService } from '../../services/alert.service';

/**
 * DE:
 * Seite zur Anzeige der Chat Liste eines / einer NutzerIn.
 * EN:
 * Page for displaying the chat list of a user.
 */
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss']
})
export class ChatListPage implements OnInit {
  segment = 'chats';
  chats: ChatGroup[] = [];
  currentUser: User;
  friendsList: string[];
  chatPartners: User[];

  /**
   * @param chatService
   * @param userService
   * @param router
   * @param alertService
   */
  constructor(
    private chatService: ChatService,
    private userService: UserDataService,
    private router: Router,
    private alertService: AlertService
  ) {}

  /**
   * DE:
   * Bei Initialisierung der Komponente werden die Daten von dem / der NutzerIn sowie die Liste der
   * Chat Partner aus Firebase geholt.
   * EN:
   * When the component is initialized, the user's data and his / her list of chat partners are
   * fetched from Firebase.
   */
  async ngOnInit() {
    await this.getCurrentUserData();
    await this.getChatPartners();
  }

  /**
   * DE:
   * Diese Methode wird die Daten des / der eingeloggten NutzerIn aus Firebase holen und die Werte in
   * die lokalen Variablen 'currentUser' & 'friendsList' setzen.
   * EN:
   * This function will get data from current / logged-in user through getCurrentUser()
   * from userService to set values of local variables 'currentUser' & 'friendsList'.
   */
  async getCurrentUserData() {
    this.currentUser = await this.userService.getCurrentUser();
    this.friendsList = this.currentUser.friends;
  }

  /**
   * DE:
   * Diese Methode wird alle Chat Partner des / der eingeloggten NutzerIn holen und die Werte in die
   * lokale Variable 'chatPartners' setzen.
   * EN:
   * This function will get all chat partners from current / logged-in user and
   * set value of local variable 'chatPartners[]'.
   */
  async getChatPartners() {
    this.userService.getChatPartners(this.currentUser.userId).subscribe((res) => {
      this.chatPartners = res.map((e) => ({
        userId: e.payload.doc.id,
        ...(e.payload.doc.data() as User)
      }));
    });
  }

  /**
   * DE:
   * Diese Methode wird den Chat zwischen den zwei NutzerInnen aus Firebase abrufen und den / die NutzerIn
   * zur Chat Seite weiterleiten.
   * EN:
   * This function will navigate user to the page 'chat' with given id to open
   * chat between selected user and the current user.
   *
   * @example
   * Call it with a user id as a string
   * openChat(userId: string)
   *
   * @param userId
   */
  async openChat(userId: string) {
    const chatId = await this.chatService.getChatGroupByUsersId(userId);
    await this.router.navigate(['chat', chatId.id, userId]);
  }

  /**
   * DE:
   * Diese Methode wird die Chat Gruppe für den / die eingeloggte(n) NutzerIn löschen bzw. den / die
   * Chat PartnerIn aus der Sammlung 'chatPartners' des / der NutzerIn löschen.
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
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel'
        }
      ]
    );
  }
}
