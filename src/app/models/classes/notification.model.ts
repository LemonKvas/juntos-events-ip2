import notificationType from 'src/app/models/enums/notificationType';
import firebase from 'firebase/compat/app';

/**
 * DE:
 * Klasse die alle Basiswerte einer Benachrichtigung enthält.
 * EN:
 * Class that contains all the base values of a notification.
 */
export class BaseNotification {
  receiverId: string;
  senderId: string;
  content: string;
  type: notificationType;
  date: firebase.firestore.Timestamp | Date;
  notificationId?: string;

  /**
   * DE:
   * Speichert alle Parameter.
   * EN:
   * Saves all parameters.
   * @param receiverId
   * @param senderId
   * @param content
   * @param type
   * @param date
   * @param notificationId
   */
  constructor(
    receiverId: string,
    senderId: string,
    content: string,
    type: any,
    date: any,
    notificationId?: string
  ) {
    this.receiverId = receiverId;
    this.senderId = senderId;
    this.content = content;
    this.type = type;
    this.date = date;
    if (notificationId) this.notificationId = notificationId;
  }
}

/**
 * DE:
 * Erweiter die basis Benachrichtigung um eine senderID.
 * EN:
 * Extends the base notification by a senderID.
 */
export class Notification extends BaseNotification {
  senderName: string;

  /**
   * DE:
   * Speichert alle Parameter.
   * EN:
   * Saves all parameters.
   * @param senderName
   * @param baseNotification
   */
  constructor(
    senderName: string,
    ...baseNotification: ConstructorParameters<typeof BaseNotification>
  ) {
    super(...baseNotification);
    this.senderName = senderName;
  }
}
