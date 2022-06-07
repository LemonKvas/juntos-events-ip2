import { Injectable } from '@angular/core';
import {UserDataService} from "src/app/services/user-data.service";
import {Notification} from "src/app/models/classes/notification.model";
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {documentId} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Notification[] = [];
  notificationIds: string[] = [];
  currentUserId: string;
  currentUserObservable: Observable<any>;
  NotificationObservable: Observable<any>;

  constructor(private userDataService: UserDataService, private afs: AngularFirestore) {
    this.currentUserId = undefined;
    this.currentUserObservable = undefined;
    this.updateUserId();
  }

  async updateUserId(){
    try {
      this.currentUserId = await this.userDataService.getCurrentUserID();
      this.currentUserObservable = await this.userDataService.getUserById_Observable(this.currentUserId);
    }
    catch {
      this.currentUserId = undefined;
      this.currentUserObservable = undefined;
    }
  }

  async getNotificationInformation(){
    try{
      if(this.currentUserId == null || this.currentUserObservable == null){
        await this.updateUserId().catch(()=>{throw new Error("Could not get user data");})
      }
      this.currentUserObservable.subscribe(async (userData) => {
        if (userData.notifications) {
          this.notificationIds = await userData.notifications;
          if(this.notificationIds.length > 0) {
            this.NotificationObservable = this.afs.collection('notifications',
                ref => ref.where(documentId(), 'in', this.notificationIds)).valueChanges();
            await this.getNotification();
          }
        } else {
          throw new Error("No notifications found");
        }
      })
    }
    catch(e){
      console.log(e);
    }
  }

  getNotification() {
    this.NotificationObservable.forEach(
        (notificationDocs: any[]) => {
          this.notifications = notificationDocs;
          console.log(this.notifications);
        }
    )
  }

   async createNotification(){

  }




}
