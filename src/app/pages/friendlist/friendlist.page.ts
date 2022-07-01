import {Component, Input, OnInit} from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

/**
 * DE:
 * Eine Komponente die als Modal fungiert um alle Freunde eines Nutzers anzuzeigen
 * EN:
 * A component that acts as a modal to display all friends of an user
 * */

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.page.html',
  styleUrls: ['./friendlist.page.scss'],
})
export class FriendlistPage implements OnInit {

  @Input() friendIds: any;
  @Input() isLoggedIn: boolean;
  @Input() loggedInUserId: string;
  limiter;
  title;

  constructor(public friendsService: FriendsService) {
    this.limiter = 7;
    this.title = 'Freunde';
  }

  ngOnInit() {
    if(this.friendIds && this.friendIds.length > 0){
      this.title = this.friendIds.length === 1 ? this.friendIds.length.toString() + ' Freund'
          : this.friendIds.length.toString() + ' Freunde';
    }

  }

  addLimit(){
    this.limiter += 5;
  }



}
