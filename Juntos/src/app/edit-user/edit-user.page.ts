import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../services/user-data.service";
import {AlertService} from "src/app/services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  private userData;

  private firstName;
  private lastName;
  private userName;
  private languages;
  private description;
  private photoUrl;

  constructor(private userDataService : UserDataService, public alertService : AlertService, private router: Router) {

    this.userData = this.userDataService.getCurrentUser();
    this.userData = this.userData.__zone_symbol__value;

    if (this.userData.firstName) {
      this.firstName = this.userData.firstName;
    } else {
      this.firstName = "";
    }
    if (this.userData.lastName) {
      this.lastName = this.userData.lastName;
    } else {
      this.lastName = "";
    }

    if (this.userData.userName) {
      this.userName = this.userData.userName;
    } else {
      this.userName = "";
    }

    if (this.userData.languages) {
      this.languages = this.userData.languages;
    } else {
      this.languages = "";
    }

    if (this.userData.description) {
      this.description = this.userData.description;
    } else {
      this.description = "";
    }

    if (this.userData.photoUrl) {
    this.photoUrl = this.userData.photoUrl;
    } else {
      this.photoUrl = "https://cdn.picpng.com/head/head-the-dummy-avatar-man-tie-72756.png";
    }
  }



  ngOnInit() {
    //TODO: maybe get userdata from firestore and subscribe
    //this.db.doc(`user/${id}`).valueChanges().subscribe(user => this.user = user);
  }

  uploadAvatar() {
  console.log('uploadAvatar')

  //  TODO: imageupload, delete old image when new is uploaded, set photoURL in user
  }

  close() {
    if (this.userName.length == 0) {
      this.alertService.basicAlert('Sie müssen einen Benutzernamen angeben', 'Bitte setzen sie einen Benutzernamen', ['OK']);
      return
    }
    this.router.navigate(['event-list']);
  }

  updateUser() {
    if (this.userName.length == 0) {
      this.alertService.basicAlert('Sie müssen einen Benutzernamen angeben', 'Bitte setzen sie einen Benutzernamen', ['OK']);
      return
    }
    let data = {
      'firstName' : this.firstName,
      'lastName' : this.lastName,
      'userName' : this.userName,
      'languages' : this.languages,
      'description' : this.description,
      'photoUrl' : this.photoUrl,
    };
    this.userDataService.updateCurrentUser(data);
  }
}
