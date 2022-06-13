import { Component, OnInit } from '@angular/core';
import {ChatGroup} from '../models/classes/chat-group';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  segment = 'chats';
  chats: ChatGroup[] = [];
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: any){
    console.log('Segment changed to ', event);
  }
}
