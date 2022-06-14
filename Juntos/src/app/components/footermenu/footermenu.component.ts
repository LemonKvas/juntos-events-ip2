import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss'],
})
export class FootermenuComponent implements OnInit {
  private currentPage : string;
  private currentUser : string;

  constructor(private router : Router, private userData : UserDataService) {
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
