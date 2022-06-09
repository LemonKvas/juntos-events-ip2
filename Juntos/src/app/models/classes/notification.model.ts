import notificationType from "src/app/models/enums/notificationType";

export class BaseNotification {
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

export class Notification extends BaseNotification {
    senderName: string;

    constructor(senderName: string, ...baseNotification: ConstructorParameters<typeof BaseNotification>){
        super(...baseNotification);
        this.senderName = senderName;
    }
}

