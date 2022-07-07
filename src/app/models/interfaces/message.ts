export interface Message {
  id?: string;
  creator?: string;
  message?: string;
  date?: Date;
  creatorName?: string;
  categories?: string[];
  subject?: string;
  eventId?: string;
  reportUserId?: string;
  chatId?: string;
  photo?: string;
}
