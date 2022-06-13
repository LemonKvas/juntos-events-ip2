import { Injectable } from '@angular/core';
import {UserDataService} from "src/app/services/user-data.service";
import {BaseNotification, Notification} from "src/app/models/classes/notification.model";
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {arrayRemove, arrayUnion, documentId, getDocs, query, where} from "@angular/fire/firestore";
import {PopoverController} from "@ionic/angular";
import {NotificationsComponent} from "src/app/components/notifications/notifications.component";
import { AlertService } from './alert.service';
import firebase from "firebase/compat";
import CollectionReference = firebase.firestore.CollectionReference;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //TODO: get names from senderIds and pass to array
  public notificationsSorted: Notification[] = [];
  private notifications: Notification[] = [];
  private notificationIds: string[] = [];
  private currentUserId: string;
  private currentUserObservable: Observable<any>;
  private NotificationObservable: Observable<any>;
  private notificationCollecton: AngularFirestoreCollection<any>;
  private notificationCollectonRef: CollectionReference<any>;

  constructor(private userDataService: UserDataService, private afs: AngularFirestore,
              public popoverController: PopoverController, private alertService: AlertService) {
    this.currentUserId = undefined;
    this.currentUserObservable = undefined;
    this.updateUserId();
    this.notificationCollecton = this.afs.collection('notifications');
    this.notificationCollectonRef = this.notificationCollecton.ref;
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
            this.NotificationObservable = this.afs.collection(this.notificationCollectonRef, ref => ref.where(documentId(), 'in', this.notificationIds))
                .valueChanges({idField: 'notificationId'});
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
          this.sortNotifications();
        }
    )
  }

  sortNotifications() {
    this.notificationsSorted = this.notifications.sort((notification1, notification2) => {
      return notification1.date < notification2.date ? 1 : -1;
    })
  }

  async createNotification(notificationType, receiverId, content?, eventOrUserName?){
    try {
      const notificationId = this.afs.createId();
      const currentUser = await this.userDataService.getCurrentUser();
      let notificationContent;
      let newNotification;
      switch (notificationType) {
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
          let doublicateCheck = await
              this.checkNotificationDoublication(notificationType, currentUser['userId'], receiverId);
          if(doublicateCheck){
            await this.alertService.basicAlert('ACHTUNG', 'du hast dieser Person bereits eine Freundschaftsanfrage geschickt.', ['OK']);
            return;
          }
          notificationContent = currentUser.userName + " hat dir eine Freunschaftsanfrage geschickt";
          break;
        }
      }
      newNotification = new Notification(receiverId, this.currentUserId,
          notificationContent, notificationType, new Date(), notificationId, currentUser.userName);
      const data = JSON.parse(JSON.stringify(newNotification));
      await this.notificationCollecton.doc(notificationId).set(data)
          .catch((err) => console.log(err));
      await this.afs.collection('user').doc(receiverId).update({
        notifications: arrayUnion(notificationId)
      }).catch((err) => console.log(err));
    }
    catch (e) {
      console.log(e);
    }
  }

  async checkNotificationDoublication(type, senderId, receiverId){
    try {
      let result = true;
      const query = this.notificationCollectonRef.where('type', '==', type)
          .where('senderId', '==', senderId)
          .where('receiverId', '==', receiverId);
      const querySnapshot = await getDocs(query);
      querySnapshot.forEach((doc) => {
        if(doc.exists()){
          result = false;
        }
      })
      return result;
    }
    catch (e) {
      return false;
    }
  }


  async removeNotification(notificationId) {
      await this.notificationCollecton.doc(notificationId).delete();
      await this.afs.collection('user').doc(this.currentUserId).update({
            notifications: arrayRemove(notificationId)
          }
      )
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
     return await popover.present();
     /** Sync event from popover component */
  }




}
