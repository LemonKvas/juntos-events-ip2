import { Component, OnInit } from '@angular/core';
import {ChatGroup} from '../models/classes/chat-group';
import {ChatService} from '../services/chat.service';
import {UserDataService} from '../services/user-data.service';
import User from '../models/classes/user';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  segment = 'chats';
  chats: ChatGroup[] = [];
  currentUserId: string;
  constructor(private chatService: ChatService, private userService: UserDataService,
              private router: Router) {
    this.getChats();
  }

  ngOnInit() {
  }
  segmentChanged(event: any){
    console.log('Segment changed to ', event);
  }
  async getCurrentUserData(){
    this.currentUserId = await this.userService.getCurrentUserID();
  }
  async getChats(){
    await this.chatService.getCurrentUserAllChats().subscribe((res) => {
      this.chats = res.map((e) => ({
        id: e.payload.doc.id,
        ... e.payload.doc.data() as ChatGroup
      }));
    });
    // this.chatService.getAllChatsFromUser().subscribe((res) => {
    //   this.chats = res.map((e) => ({
    //     id: e.payload.doc.id,
    //     ...e.payload.doc.data() as ChatGroup
    //   }));
    // });
    // await this.chatService.getCurrentUserChats().subscribe((res) => {
    //   this.chats = res.map((e) => ({
    //     id: e.payload.doc.id,
    //     ...e.payload.doc.data() as ChatGroup
    //   }));
    // });
    // this.chats = await this.chatService.getCurrentUserChats();
    // console.log('All Chats: ', JSON.stringify(this.chats));
  }
  async openChat(chatId: string){
    const navigationExtras: NavigationExtras = {
      state: {
        id: chatId
      }
    };
    await this.router.navigateByUrl(`chat/${chatId}`, navigationExtras);
  }
}
