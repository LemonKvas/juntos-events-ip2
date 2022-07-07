import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

/**
 * DE:
 * Komponente des Footermenüs
 * EN:
 * Component for the footer
 */
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
    this.getUser();
  }

  /**
   * DE:
   * Holt die userId des aktuellen Users
   * EN:
   * Gets the userId of the current User
   */
  async getUser() {
    this.currentUser = await this.userData.getCurrentUserID();
  }

}
