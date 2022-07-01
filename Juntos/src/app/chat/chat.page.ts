import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {UserDataService} from '../services/user-data.service';
import {Message} from '../models/interfaces/message';
import {ChatGroup} from '../models/classes/chat-group';
import {Router, ActivatedRoute} from '@angular/router';
import User from '../models/classes/user';

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
  allChats: ChatGroup[] = [];
  constructor(private chatService: ChatService, private userService: UserDataService,
              private route: ActivatedRoute, private router: Router) {
    this.chatGroupId = this.router.getCurrentNavigation().extras.state.id;
    this.getChatInfo(this.chatGroupId);
    this.getChatUsers();
    this.getAllChats();
    this.getMessages();
  }
  ngOnInit() {
  }
  async getAllChats(){
    await this.chatService.getAllChats().subscribe((res) => {
      this.allChats = res.map((e) => ({
        id: e.payload.doc.id,
        ... e.payload.doc.data() as ChatGroup
      }));
    });
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
