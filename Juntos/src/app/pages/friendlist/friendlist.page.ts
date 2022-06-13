import {Component, Input, OnInit} from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';


@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.page.html',
  styleUrls: ['./friendlist.page.scss'],
})
export class FriendlistPage implements OnInit {

  @Input() friendIds: any;
  @Input() isLoggedIn: boolean;
  limiter;

  constructor(public friendsService: FriendsService) {
    this.limiter = 7;
  }

  ngOnInit() {}

  addLimit(){
    this.limiter += 5;
  }



}
