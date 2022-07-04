import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { Notification } from 'src/app/models/classes/notification.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion, documentId, getDocs } from '@angular/fire/firestore';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';
import { AlertService } from './alert.service';
import firebase from 'firebase/compat';
import CollectionReference = firebase.firestore.CollectionReference;

/**
 * DE:
 * Service der genutzt wird, um die Benachrichtigungen eines Nutzers zu erhalten und aufzurufen.
 * EN:
 * Service used to receive and access a user's notifications.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //TODO: get names from senderIds and pass to array
  public notificationsSorted: Notification[] = [];
  public hasNotifications: boolean;
  private notifications: Notification[] = [];
  private notificationIds: string[] = [];
  private currentUserId: string;
  private currentUserObservable: Observable<any>;
  private notificationObservable: Observable<any>;
  private notificationCollecton: AngularFirestoreCollection<any>;
  private notificationCollectonRef: CollectionReference<any>;

  /**
   * DE:
   * Initialisiert die Nutzer ID und setzt Grundvariablen für den Service wie beispielsweise die
   * Collection Referenz für die Notifications aus der Datenbank.
   * EN:
   * Initializes the user ID and sets basic variables for the service, such as the
   * collection reference for the notifications from the database.
   *
   * @param userDataService
   * @param afs
   * @param popoverController
   * @param alertService
   */
  constructor(
    private userDataService: UserDataService,
    private afs: AngularFirestore,
    public popoverController: PopoverController,
    private alertService: AlertService
  ) {
    this.currentUserId = undefined;
    this.currentUserObservable = undefined;
    this.hasNotifications = false;
    this.updateUserId();
    this.notificationCollecton = this.afs.collection('notifications');
    this.notificationCollectonRef = this.notificationCollecton.ref;
  }

  /**
   * DE:
   * Aktualisiert die User ID und setzt ein Observable um die Nutzerdaten, bzw. die Benachrichtigungen
   * aktuell zu halten.
   * EN:
   * Updates the user ID and sets an observable to keep the user data and notifications up to date.
   */
  async updateUserId() {
    try {
      this.currentUserId = await this.userDataService.getCurrentUserID();
      this.currentUserObservable = await this.userDataService.getUserByIdAsObservable(
        this.currentUserId
      );
    } catch {
      this.currentUserId = undefined;
      this.currentUserObservable = undefined;
    }
  }

  /**
   * DE:
   * Setzt für alle Benachrichtigung IDs, die in den Nutzerdaten gespeichert sind, ein Observable fest
   * um die Benachrichtigungen aus der Datenbank zu bekommen und ruft daraufhin die Methode getNotifications()
   * auf.
   * EN:
   * Sets an observable for all notification IDs that are stored in the user data
   * to get the notifications from the database and then calls the method getNotifications().
   *
   */
  async getNotificationInitializer() {
    try {
      if (this.currentUserId == null || this.currentUserObservable == null) {
        await this.updateUserId().catch(() => {
          throw new Error('Could not get user data');
        });
      }
      this.currentUserObservable.subscribe(async (userData) => {
        if (userData.notifications) {
          this.notificationIds = await userData.notifications;
          if (this.notificationIds.length > 0) {
            this.notificationObservable = this.afs
              .collection(this.notificationCollectonRef, (ref) =>
                ref.where(documentId(), 'in', this.notificationIds)
              )
              .valueChanges({ idField: 'notificationId' });
            await this.getNotification();
          }
        }
      });
    } catch (e) {}
  }

  /**
   * DE:
   * Holt alle Benachrichtigungen aus der Datenbank und speichert diese in der Variable notifications.
   * Daraufhin wird die Variable hasNotifications true gesetzt.
   * EN:
   * Fetches all notifications from the database and stores them in the variable notifications.
   * Then the variable hasNotifications is set true.
   */
  getNotification() {
    this.notificationObservable.forEach((notificationDocs: any[]) => {
      if (notificationDocs) {
        this.notifications = notificationDocs;
        this.sortNotifications();
        this.hasNotifications = true;
      }
    });
  }

  /**
   * DE:
   * Sortiert das Array notifcations nach Datum und speichert diese in der Variable notificationsSorted.
   * EN:
   * Sorts the array notifcations by date and stores them in the variable notificationsSorted.
   */
  sortNotifications() {
    this.notificationsSorted = this.notifications.sort((notification1, notification2) =>
      notification1.date < notification2.date ? 1 : -1
    );
  }

  /**
   * DE:
   * Erstellt einer Benachrichtigung. Der Parameter notificationType legt die Art der Benachrichtigung fest.
   * 0 für Benachrichtigungen von Juntos, 1 für erstellte Events, 2 für beigetretene Nutzer, 3 für
   * Freundschaftsanfragen.
   * ReceiverId beinhaltet die ID des Empfängers.
   * Der optionale Parameter content dient dazu, um den Benachrichtigungsinhalt festzulegen, falls dies nötig ist.
   * Der optionale Parameter eventOrUserName dient dazu um einen Eventnamen oder Nutzernamen für die Benachrichtigung.
   * Es wird überprüft, ob diese Benachrichtigung bereits verschickt wurde, um Duplikate zu vermeiden, falls nicht
   * wird ein neuer Eintrag in der Datenbank erstellt.
   * EN:
   * Creates a notification. The notificationType parameter specifies the type of notification.
   * 0 for notifications from Juntos, 1 for created events, 2 for joined users, 3 for
   * friend requests.
   * ReceiverId contains the ID of the recipient.
   * The optional content parameter is used to specify the notification content, if needed.
   * The optional parameter eventOrUserName is used to specify an event name or user name for the notification.
   * It will be checked if this notification has already been sent to avoid duplicates, if not
   * a new entry will be created in the database.
   *
   * @param notificationType
   * @param receiverId
   * @param content
   * @param eventOrUserName
   */
  async createNotification(notificationType, receiverId, content?, eventOrUserName?) {
    try {
      const notificationId = this.afs.createId();
      const currentUser = await this.userDataService.getCurrentUser();
      let notificationContent;
      let alertText;
      switch (notificationType) {
        case 0: {
          //JuntosMessage
          notificationContent = content;
          break;
        }
        case 1: {
          //EventCreated
          notificationContent = '';
          break;
        }
        case 2: {
          //EventJoined
          notificationContent = '';
          break;
        }
        case 3: {
          //FriendRequest
          const doublicateCheck = await this.checkNotificationDoublication(
            notificationType,
            currentUser.userId,
            receiverId
          );
          if (doublicateCheck) {
            await this.alertService.basicAlert(
              'ACHTUNG',
              'du hast dieser Person bereits eine Freundschaftsanfrage geschickt.',
              ['OK']
            );
            return;
          }
          alertText = 'du hast deine Freundschaftsanfrage erfolgereich versendet!';
          notificationContent =
            currentUser.userName + ' hat dir eine Freunschaftsanfrage geschickt';
          break;
        }
      }
      const newNotification = new Notification(
        currentUser.userName,
        receiverId,
        this.currentUserId,
        notificationContent,
        notificationType,
        new Date(),
        notificationId
      );
      const data = JSON.parse(JSON.stringify(newNotification));
      await this.notificationCollecton
        .doc(notificationId)
        .set(data)
        .catch((err) => console.log(err));
      await this.afs
        .collection('user')
        .doc(receiverId)
        .update({
          notifications: arrayUnion(notificationId)
        })
        .then((res) => {
          this.alertService.basicAlert('VERSCHICKT', alertText, ['OK']);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * DE:
   * Überprüft ob eine Benachrichtigung bereits existiert. Dafür wird überprüft ob eine Benachrichtigung
   * desselben Typs mit derselben ID des Absenders und derselben IDs des Empfängers bereits in der Datenbank
   * existiert.
   * EN:
   * Checks if a notification already exists. It checks if a notification of the same type
   * of the same type with the same ID of the sender and the same IDs of the recipient already exists in the database.
   *
   * @param type
   * @param senderId
   * @param receiverId
   */
  async checkNotificationDoublication(type, senderId, receiverId) {
    try {
      let result = false;
      const checkNotiQuery = await this.notificationCollectonRef
        .where('type', '==', type)
        .where('senderId', '==', senderId)
        .where('receiverId', '==', receiverId);
      const querySnapshot = await getDocs(checkNotiQuery);
      await querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          result = true;
        }
      });
      return result;
    } catch (e) {
      return true;
    }
  }

  /**
   * DE:
   * Löscht eine Benachrichtigung mithilfe der ID aus der Datenbank.
   * EN:
   * Deletes a notification from the database using the ID.
   * @param notificationId
   */
  async removeNotification(notificationId) {
    await this.notificationCollecton.doc(notificationId).delete();
    await this.afs
      .collection('user')
      .doc(this.currentUserId)
      .update({
        notifications: arrayRemove(notificationId)
      });
  }

  /**
   * DE:
   * Ruft die Komponente NotificationsComponent als Popover auf und gibt das als Parameter eingegebene
   * Event mit.
   * EN:
   * Calls the NotificationsComponent component as a popover and passes the event entered as a parameter.
   *
   * @param ev
   */
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      translucent: true,
      showBackdrop: false,
      alignment: 'start'
    });
    return await popover.present();
    /** Sync event from popover component */
  }
}
