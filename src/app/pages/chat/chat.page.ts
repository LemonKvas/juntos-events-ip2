import { Component, OnInit } from '@angular/core';
import {ChatService} from 'src/app/services/chat.service';
import {UserDataService} from 'src/app/services/user-data.service';
import {Message} from 'src/app/models/interfaces/message';
import {ChatGroup} from 'src/app/models/classes/chat-group';
import {ActivatedRoute} from '@angular/router';
import User from 'src/app/models/classes/user';

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
              private route: ActivatedRoute) {
    this.chatGroupId = this.route.snapshot.params.cId;
    this.chatUserId = this.route.snapshot.params.uId;
  }
  async ngOnInit() {
    await this.getChatInfo(this.chatGroupId);
    this.currentUser = await this.userService.getCurrentUser();
    this.chatUser = await this.userService.getUserById(this.chatUserId);
    this.getMessages();
  }

  /**
   * This function will get chat information with the given id by calling
   * getChatGroupById() from chatservice to set value of local variable 'chatGroup'.
   *
   * @param id
   */
  async getChatInfo(id: string){
    this.chatGroup = await this.chatService.getChatGroupById(id);
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
  sendMessage(newMsg: string){
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: newMsg,
    };
    this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    this.userService.addChatPartner(this.chatUserId).catch((err) => console.log('Error: ', err));
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
}
