import { Component, OnInit } from '@angular/core';
import {ChatGroup} from 'src/app/models/classes/chat-group';
import {ChatService} from 'src/app/services/chat.service';
import {UserDataService} from 'src/app/services/user-data.service';
import {NavigationExtras, Router} from '@angular/router';
import User from '../../models/classes/user';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  segment = 'chats';
  chats: ChatGroup[] = [];
  currentUser: User;
  friendsList: string[];
  chatUsers: Map<string, string> = new Map<string, string>();
  constructor(private chatService: ChatService, private userService: UserDataService,
              private router: Router) {
  }

  async ngOnInit() {
    await this.getCurrentUserData();
    await this.getChats(this.currentUser.userId);
    //await this.getChatUserList();
  }
  segmentChanged(event: any){
    console.log('Segment changed to ', event);
  }

  /**
   * This method will get data from current / logged-in user through getCurrentUser()
   * from userService to set values of local variables 'currentUser' & 'friendsList'.
   */
  async getCurrentUserData(){
    this.currentUser = await this.userService.getCurrentUser();
    this.friendsList = this.currentUser.friends;
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
    this.chatService.getCurrentUserAllChats(id).subscribe((res) => {
      this.chats = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as ChatGroup
      }));
    });
    for(let entry of this.chats){
      let userList: User[];
      this.chatService.getUsersOfCurrentChat(entry.id).subscribe((res) => {
        userList = res.map((e) => ({
          id: e.payload.doc.id,
          ...e.payload.doc.data() as User
        }));
      });
      for(let user of userList){
        if(user.userId !== this.currentUser.userId){
          const userFullName = user.firstName + ' ' + user.lastName;
          this.chatUsers.set(entry.id, userFullName);
        }
      }
    }
  }
  // async getChatUserList(){
  //   for(let entry of this.chats){
  //     let userList: User[];
  //     this.chatService.getUsersOfCurrentChat(entry.id).subscribe((res) => {
  //       userList = res.map((e) => ({
  //         id: e.payload.doc.id,
  //         ...e.payload.doc.data() as User
  //       }));
  //     });
  //     for(let user of userList){
  //       if(user.userId !== this.currentUser.userId){
  //         const userFullName = user.firstName + ' ' + user.lastName;
  //         this.chatUsers.set(entry.id, userFullName);
  //       }
  //     }
  //   }
  //   console.log('Chat users: ', this.chatUsers);
  // }

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
    await this.router.navigate(['chat', chatId]);
  }
}
