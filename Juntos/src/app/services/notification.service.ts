import { Injectable } from '@angular/core';
import {UserDataService} from "src/app/services/user-data.service";
import {Notification} from "src/app/models/classes/notification.model";
import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {documentId} from "@angular/fire/firestore";
import {PopoverController} from "@ionic/angular";
import {NotificationsComponent} from "src/app/notifications/notifications.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notifications: Notification[] = [];
  private notificationIds: string[] = [];
  private currentUserId: string;
  private currentUserObservable: Observable<any>;
  private NotificationObservable: Observable<any>;

  constructor(private userDataService: UserDataService, private afs: AngularFirestore, public popoverController: PopoverController) {
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

  async getNotificationInitializer(){
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
        }
    )
  }

   async createNotification(){

  }


   async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      translucent: true,
      showBackdrop: false,
      alignment: 'end'
    });
     popover.onDidDismiss().then((result) => {
       console.log(result.data);
     });

     return await popover.present();
     /** Sync event from popover component */
  }




}
