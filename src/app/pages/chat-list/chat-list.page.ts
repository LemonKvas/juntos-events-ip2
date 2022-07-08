import { Component, OnInit } from '@angular/core';
import { ChatGroup } from 'src/app/models/classes/chat-group';
import { ChatService } from 'src/app/services/chat.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import User from '../../models/classes/user';
import { AlertService } from '../../services/alert.service';

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
  constructor(
    private chatService: ChatService,
    private userService: UserDataService,
    private router: Router,
    private alertService: AlertService
  ) {}

  async ngOnInit() {
    await this.getCurrentUserData();
    await this.getChatPartners();
  }
  segmentChanged(event: any) {
    console.log('Segment changed to ', event);
  }

  /**
   * This function will get data from current / logged-in user through getCurrentUser()
   * from userService to set values of local variables 'currentUser' & 'friendsList'.
   */
  async getCurrentUserData() {
    this.currentUser = await this.userService.getCurrentUser();
    this.friendsList = this.currentUser.friends;
  }

  /**
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
   * This function will navigate user to the page 'chat' with given id to open
   * chat between selected user and the current user.
   *
   * @example
   * Call it with a user id as a string
   * openChat('hj94zr3')
   *
   * @param userId
   */
  async openChat(userId: string) {
    const chatId = await this.chatService.getChatGroupByUsersId(userId);
    await this.router.navigate(['chat', chatId.id, userId]);
  }

  /**
   * This function will delete chat with given chat id by calling deleteChat() from
   * chatService.
   *
   * @example
   * Call it with a user id as a string
   * deleteChat('z48hwg1t')
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
