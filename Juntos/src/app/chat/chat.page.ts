import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {UserDataService} from '../services/user-data.service';
import {Message} from '../models/interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  pageTitle = 'Chat';
  newMsg = '';
  messages: Message[] = [];
  constructor(private chatService: ChatService, private userService: UserDataService) { }

  ngOnInit() {
  }
}
