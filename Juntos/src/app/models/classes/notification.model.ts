import notificationType from "src/app/models/enums/notificationType";

export class Notification {
    receiverId: string;
    senderId: string;
    content: string;
    type: notificationType;
    date: Date;

    constructor(receiverId: string, senderId: string, content: string, type: any, date: any){
        this.receiverId = receiverId;
        this.senderId = senderId;
        this.content = content;
        this.type = type;
        this.date = date.toDate();
    }
}
