import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserDataService} from "src/app/services/user-data.service";
import {concat} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements AfterViewInit {
  recievedUsers;
  users?;

  constructor(private userDataService: UserDataService) {
    this.userDataService.getAllUser().subscribe((userDocs) => {
      this.recievedUsers = userDocs;
      this.users = userDocs;
    })
  }

  initalUser() {
    this.users = this.recievedUsers;
  }


  getUser(ev) {
    this.initalUser();

    const searchInput = ev.target.value;

    if (searchInput && searchInput.trim() != "") {
      console.log(this.users);
      this.users = this.users.filter(user => {
        return user.userId.concat(user.userName).toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
      });
    }
  }

  ngAfterViewInit() {
    this.initalUser();
  }
}


