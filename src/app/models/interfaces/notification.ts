import notificationType from 'src/app/models/enums/notificationType';

/**
 * DE:
 * Interface um eine Benachrichtigung zu repräsentieren.
 * EN:
 * Interface to represent a notification.
 */
export interface Notification {
  receiverId: string;
  senderId: string;
  content: string;
  type: notificationType;
  date: Date;
}
