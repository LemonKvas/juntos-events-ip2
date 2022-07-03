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
  chatUser: User;
  currentUser: User;
  constructor(private chatService: ChatService, private userService: UserDataService,
              private route: ActivatedRoute) {
    this.chatGroupId = this.route.snapshot.params.id;
  }
  async ngOnInit() {
    await this.getChatInfo(this.chatGroupId);
    await this.getChatUsers();
    this.getMessages();
  }
  async getChatInfo(id: string){
    this.chatGroup = await this.chatService.getChatGroupById(id);
  }
  async getChatUsers(){
    this.currentUser = await this.userService.getCurrentUser();

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < this.chatGroup.users.length; ++i){
      if(this.currentUser.userId !== this.chatGroup.users[i].userId){
        return this.chatUser = this.chatGroup.users[i];
      }
    }
  }
  sendMessage(newMsg: string){
    console.log('Chat ID: ', this.chatGroupId);
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: newMsg,
    };
    this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    this.newMsg = '';
  }
  getMessages(){
    this.chatService.getMessages(this.chatGroupId).subscribe((res) => {
      this.messages = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Message
      }));
    });
  }
}
