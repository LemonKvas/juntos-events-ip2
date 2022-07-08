/**
 * DE:
 * Interface um eine Nachricht zu repräsentieren.
 * EN:
 * Interface to represent a message.
 */
export interface Message {
  id?: string;
  creator?: string;
  message?: string;
  date?: Date;
  creatorName?: string;
  category?: string;
  subject?: string;
  problem?: string;
  eventId?: string;
  reportUserId?: string;
  chatId?: string;
  photo?: string;
  inProcess?: number;
}
