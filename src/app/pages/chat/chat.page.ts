import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChatService} from 'src/app/services/chat.service';
import {UserDataService} from 'src/app/services/user-data.service';
import {Message} from 'src/app/models/interfaces/message';
import {ChatGroup} from 'src/app/models/classes/chat-group';
import {ActivatedRoute, Router} from '@angular/router';
import User from 'src/app/models/classes/user';
import {AlertService} from '../../services/alert.service';
import {PhotoService} from '../../services/photo.service';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewInit {
  @ViewChild(IonContent) content: IonContent;
  newMsg = '';
  msg: Message;
  messages: Message[] = [];
  chatGroup: ChatGroup;
  chatGroupId = '';
  chatUserId: string;
  chatUser: User;
  currentUser: User;
  photo: string;
  constructor(private chatService: ChatService, private userService: UserDataService,
              private route: ActivatedRoute, private alertService: AlertService,
              private router: Router, private photoService: PhotoService) {
    this.chatGroupId = this.route.snapshot.params.cId;
    this.chatUserId = this.route.snapshot.params.uId;
  }
  async ngOnInit() {
    await this.getChatInfo(this.chatGroupId);
    await this.getChatUsersData();
    await this.getMessages();
    await this.scrollToBottom();
  }
  /**
   * This function will get chat information with the given id by calling
   * getChatGroupById() from chatService to set value of local variable 'chatGroup'.
   *
   * @example
   * Call it with a chat id as a string
   * getChatInfo('h29zt8h4')
   *
   * @param id
   */
  async getChatInfo(id: string){
    this.chatGroup = await this.chatService.getChatGroupById(id);
  }

  /**
   * This function will get both chat users data and set values of local variable
   * 'currentUser' and 'chatUser'.
   */
  async getChatUsersData(){
    this.currentUser = await this.userService.getCurrentUser();
    this.chatUser = await this.userService.getUserById(this.chatUserId);
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
  async sendMessage(newMsg: string){
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: newMsg,
      creatorName: this.currentUser.firstName,
      photo: '',
    };
    this.newMsg = '';
    // Add chat message to sub-collection 'messages' of collection 'chats'
    await this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    // Add both users as each others chat partner
    await this.userService.addChatPartner(this.chatGroupId, this.chatUser).catch((err) => console.log('Error: ', err));
    await this.scrollToBottom();
  }

  /**
   * This function will send a given string as a message to the firebase sub-collection 'messages' of current chat and
   * add current user as a chat partner to the other
   * chat user in case he / she deleted the chat.
   *
   * @example
   * Call it with a photo as a string
   * sendMessage('https://firebase.photo.com')
   *
   * @param photo
   */
  async sendPhoto(photo: string){
    this.msg = {
      chatId: this.chatGroupId,
      creator: this.currentUser.userId,
      date: new Date(),
      id: '',
      message: '',
      creatorName: this.currentUser.firstName,
      photo: photo
    };
    this.newMsg = '';
    // Add chat message to sub-collection 'messages' of collection 'chats'
    await this.chatService.addChatMessage(this.msg).catch((err) => console.log('Error: ', err));
    // Add both users as each others chat partner
    await this.userService.addChatPartner(this.chatGroupId, this.chatUser).catch((err) => console.log('Error: ', err));
    await this.scrollToBottom();
  }
  /**
   * This function will fetch all messages of current chat by calling getMessages() from
   * chatService and set value of local variable 'messages'.
   */
  async getMessages(){
    this.chatService.getMessages(this.chatGroupId).subscribe((res) => {
      this.messages = res.map((e) => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data() as Message
      }));
    });
    await this.scrollToBottom();
  }

  /**
   * This function will be called by an event and upload selected file to firebase
   * storage. Local function sendPhoto() will be called to send file as a message.
   *
   * @example
   * Call it with a DOM event object
   * uploadPhoto($event)
   *
   * @param event
   */
  uploadPhoto(event){
    this.photo = event.target.files[0];
    this.photoService.storePhoto(this.photo, 'chats/').then((res: any) => {
      if(res){
        this.photo = res;
      }
      this.sendPhoto(this.photo).catch((err) => console.log('Error: ', err));
    },
      (error: any) => {
        console.log('Error: ', error);
      });
  }
  /**
   * This function will open a modal to ask user if he / she wants to proceed and delete selected
   * message with given data. If this is the case, deleteMessage() from chatService will be called.
   *
   * @example
   * Call it with an object of type 'Message'
   * deleteMessage(message: Message)
   *
   * @param msg
   */
  async deleteMessage(msg: Message){
    await this.alertService.basicAlert(
      '',
      'Wollen Sie diese Nachricht löschen?',
      [
        {
          text: 'Ja',
          handler: () => {
            this.chatService.deleteMessage(msg);
            this.scrollToBottom();
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
        }
      ],
    );
  }
  /**
   * This function will delete chat with given chat id by calling deleteChat() from
   * chatService.
   *
   * @example
   * Call it with a user id as a string
   * deleteChat('z48hwg1t')
   *
   * @param userId
   */
  async deleteChat(userId: string){
    await this.alertService.basicAlert(
      '',
      'Sind Sie sicher, dass Sie diesen Chat löschen wollen?',
      [
        {
          text: 'Ja',
          handler: () => {
            this.chatService.deleteChat(userId);
            this.router.navigate(['chat-list', this.currentUser.userId]);
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
        }
      ],
    );
  }

  /**
   * This function will open data with the given url string in a new tab.
   *
   * @param url
   */
  openImageNewTab(url: string){
    window.open(url);
  }

  /**
   * This function will scroll down to the bottom of the screen / content.
   */
  async scrollToBottom(){
    this.content.scrollToBottom(1000).catch((err) => console.log('Error: ', err));
  }
  async ngAfterViewInit(){
    await this.scrollToBottom().catch((err) => console.log('Error: ', err));
  }
}
