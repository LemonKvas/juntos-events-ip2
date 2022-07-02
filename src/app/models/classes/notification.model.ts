import notificationType from 'src/app/models/enums/notificationType';
import firebase from 'firebase/compat/app';

export class BaseNotification {
  receiverId: string;
  senderId: string;
  content: string;
  type: notificationType;
  date: firebase.firestore.Timestamp | Date;
  notificationId?: string;

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

export class Notification extends BaseNotification {
  senderName: string;

  constructor(
    senderName: string,
    ...baseNotification: ConstructorParameters<typeof BaseNotification>
  ) {
    super(...baseNotification);
    this.senderName = senderName;
  }
}
