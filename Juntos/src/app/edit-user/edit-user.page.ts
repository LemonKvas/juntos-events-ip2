import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadAvatar() {
  console.log('uploadAvatar')
  //  TODO: imageupload, delete old image when new is uploaded, set photoURL in user
  }
}
