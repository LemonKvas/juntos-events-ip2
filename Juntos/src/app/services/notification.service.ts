import { Injectable } from '@angular/core';
import {UserDataService} from "src/app/services/user-data.service";
import {BaseNotification, Notification} from "src/app/models/classes/notification.model";
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {documentId} from "@angular/fire/firestore";
import {PopoverController} from "@ionic/angular";
import {NotificationsComponent} from "src/app/notifications/notifications.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //TODO: get names from senderIds and pass to array
  public notificationWithExtraInformation: Notification[] = [];
  public notifications: BaseNotification[] = [];
  private notificationIds: string[] = [];
  private currentUserId: string;
  private currentUserObservable: Observable<any>;
  private NotificationObservable: Observable<any>;
  private notificationCollecton: AngularFirestoreCollection<any>;

  constructor(private userDataService: UserDataService, private afs: AngularFirestore, public popoverController: PopoverController) {
    this.currentUserId = undefined;
    this.currentUserObservable = undefined;
    this.updateUserId();
    this.notificationCollecton = this.afs.collection('notifications');
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
            //TODO: ADD ORDER BY DATE IN QUERY
            this.NotificationObservable = this.afs.collection('notifications',
                ref => ref.where(documentId(), 'in', this.notificationIds)).valueChanges({idField: 'notificationId'});
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
          console.log(notificationDocs["id"], notificationDocs);
          this.notifications = notificationDocs;
        }
    )
  }

  async createNotification(notificationType, receiverId, content?, eventOrUserName?){
    const notificationId = this.afs.createId();
    const currentUser = await this.userDataService.getCurrentUser();
    let notificationContent;
    let newNotification;
    switch(notificationType) {
      case 0: {
        //JuntosMessage
        notificationContent = content;
        break;
      }
      case 1: {
        //EventCreated
        notificationContent = ""
        break;
      }
      case 2: {
        //EventJoined
        notificationContent = ""
        break;
      }
      case 3: {
        //FriendRequest
        notificationContent = currentUser.userName + " hat dir eine Freunschaftsanfrage geschickt";
        break;
      }
    }

    newNotification = new BaseNotification(receiverId, this.currentUserId, notificationContent, notificationType, new Date());
    const data = JSON.parse(JSON.stringify(newNotification));
    await this.notificationCollecton.doc(notificationId).set(data)
        .catch((err) => console.log(err));
  }

  async removeNotification() {

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
