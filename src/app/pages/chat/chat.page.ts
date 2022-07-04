import { Component, OnInit } from '@angular/core';
import {ChatService} from 'src/app/services/chat.service';
import {UserDataService} from 'src/app/services/user-data.service';
import {Message} from 'src/app/models/interfaces/message';
import {ChatGroup} from 'src/app/models/classes/chat-group';
import {ActivatedRoute} from '@angular/router';
import User from 'src/app/models/classes/user';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  newMsg = '';
  msg: Message;
  messages: Message[] = [];
  chatGroup: ChatGroup;
  chatGroupId = '';
  chatUserId: string;
  chatUser: User;
  currentUser: User;
  constructor(private chatService: ChatService, private userService: UserDataService,
              private route: ActivatedRoute, private alertService: AlertService) {
    this.chatGroupId = this.route.snapshot.params.cId;
    this.chatUserId = this.route.snapshot.params.uId;
  }
  async ngOnInit() {
    await this.getChatInfo(this.chatGroupId);
    await this.getChatUsersData();
    this.getMessages();
  }

  /**
   * This function will get chat information with the given id by calling
   * getChatGroupById() from chatService to set value of local variable 'chatGroup'.
   *
   * @example
   * Call it with a chat id as a string
   * getChatInfo('h29zt8h4')
   *
   * @param id
   */
  async getChatInfo(id: string){
    this.chatGroup = await this.chatService.getChatGroupById(id);
  }

  /**
   * This function will get both chat users data and set values of local variable
   * 'currentUser' and 'chatUser'.
   */
  async getChatUsersData(){
    this.currentUser = await this.userService.getCurrentUser();
    this.chatUser = await this.userService.getUserById(this.chatUserId);
  }

  /**
   * This function will send a given string as a message to the firebase sub-collection
   * 'messages' of current chat and add current user as a chat partner to the other
   * chat user in case he / she deleted the chat.
   *
   * @example
   * Call it with a string
   * sendMessage('Hello World!')
   *
   * @param newMsg
   */
  async sendMessage(newMsg: string){
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: newMsg,
    };
    await this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    await this.userService.addChatPartner(this.chatGroupId, this.chatUser).catch((err) => console.log('Error: ', err));
    this.newMsg = '';
  }

  /**
   * This function will fetch all messages of current chat by calling getMessages() from
   * chatService and set value of local variable 'messages'.
   */
  getMessages(){
    this.chatService.getMessages(this.chatGroupId).subscribe((res) => {
      this.messages = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Message
      }));
    });
  }

  /**
   * This function will open a modal to ask user if he / she wants to proceed and delete selected
   * message with given data. If this is the case, deleteMessage() from chatService will be called.
   *
   * @example
   * Call it with an object of type 'Message'
   * deleteMessage(message: Message)
   *
   * @param msg
   */
  async deleteMessage(msg: Message){
    await this.alertService.basicAlert(
      '',
      'Wollen Sie diese Nachricht löschen?',
      [
        {
          text: 'Ja',
          handler: () => {
            this.chatService.deleteMessage(msg);
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
        }
      ],
    );
  }
}
