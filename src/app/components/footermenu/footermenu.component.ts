import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss'],
})
export class FootermenuComponent implements OnInit {
  currentPage : string;
  currentUser : string;

  constructor(public router : Router, public userData : UserDataService) {
    this.currentPage = this.router.url;
  }

  ngOnInit() {
    console.log('this.router.url', this.router.url);
    this.getUser();
  }

  async getUser() {
    this.currentUser = await this.userData.getCurrentUserID();
  }

}
