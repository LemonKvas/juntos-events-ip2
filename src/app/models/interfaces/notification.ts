import notificationType from 'src/app/models/enums/notificationType';

export interface Notification {
  receiverId: string;
  senderId: string;
  content: string;
  type: notificationType;
  date: Date;
}
