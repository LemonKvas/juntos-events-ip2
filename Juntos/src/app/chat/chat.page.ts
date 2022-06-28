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
  pageTitle = 'Chat';
  newMsg = '';
  msg: Message;
  messages: Message[] = [];
  chatGroup: ChatGroup;
  chatGroupId = '';
  chatUser: User;
  currentUser: User;
  currentUserId = '';
  allChats: ChatGroup[] = [];
  constructor(private chatService: ChatService, private userService: UserDataService,
              private route: ActivatedRoute, private router: Router) {
    this.chatGroupId = this.router.getCurrentNavigation().extras.state.id;
    this.getChatInfo(this.chatGroupId);
    this.getCurrentUserData();
    this.getAllChats();
    this.getMessages();
  }
  ngOnInit() {
  }
  async getCurrentUserData(){
    this.currentUser = await this.userService.getCurrentUser();
    this.currentUserId = await this.userService.getCurrentUserID();
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
    this.pageTitle = this.chatGroup.name;
  }
  async getChatUsers(){
    await this.getChatInfo(this.chatGroupId);
    this.currentUserId = await this.userService.getCurrentUserID();
  }
  sendMessage(newMsg: string){
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUserId,
      date: new Date(),
      id: '',
      message: newMsg,
    };
    this.chatService.addChatMessage(this.msg);
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
