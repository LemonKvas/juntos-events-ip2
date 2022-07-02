import { Component, OnInit } from '@angular/core';
import {ChatGroup} from '../models/classes/chat-group';
import {ChatService} from '../services/chat.service';
import {UserDataService} from '../services/user-data.service';
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
    this.getCurrentUserData().catch((err) => console.log('Error: ', err));
    this.getChats(this.currentUserId).catch((err) => console.log('Error: ', err));
  }

  ngOnInit() {
  }
  segmentChanged(event: any){
    console.log('Segment changed to ', event);
  }

  /**
   * This method will call getCurrentUserID() from userService to set value of
   * local variable 'currentUserId'.
   */
  async getCurrentUserData(){
    this.currentUserId = await this.userService.getCurrentUserID();
  }

  /**
   * This method will fetch all document through getCurrentUserAllChats() from
   * chatService with given id and set value of local variable 'chats'.
   *
   * @example
   * Call it with an id as string
   * getChats('9zhr43q')
   *
   * @param id
   */
  async getChats(id: string){
    await this.chatService.getCurrentUserAllChats(id).subscribe((res) => {
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

  /**
   * This method will navigate user to the page 'chat' with given id to open
   * chat between selected user and the current user.
   *
   * @example
   * Call it with an id as string
   * openChat('hj94zr3')
   *
   * @param chatId
   */
  async openChat(chatId: string){
    const navigationExtras: NavigationExtras = {
      state: {
        id: chatId
      }
    };
    await this.router.navigateByUrl(`chat/${chatId}`, navigationExtras);
  }
}
