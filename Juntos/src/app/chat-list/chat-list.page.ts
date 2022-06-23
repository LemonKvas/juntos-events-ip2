import { Component, OnInit } from '@angular/core';
import {ChatGroup} from '../models/classes/chat-group';
import {ChatService} from '../services/chat.service';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  segment = 'chats';
  chats: ChatGroup[] = [];
  constructor(private chatService: ChatService, private userService: UserDataService) {
    // this.getChats();
  }

  ngOnInit() {
  }
  segmentChanged(event: any){
    console.log('Segment changed to ', event);
  }
  getChats(){
    this.chatService.getAllChatsFromUser().subscribe((res) => {
      this.chats = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as ChatGroup,
      }));
    });
  }
  openChat(){}
}
