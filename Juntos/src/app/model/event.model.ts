export class Event{
  eventId?: string;
  creatorId?: string;
  eventName?: string;
  photoURLs?: string[];
  eventDate?: Date;
  price?: number;
  categories?: string[];
  participants?: string[];
  maxParticipants?: number;
  street?: string;
  streetNumber?: number;
  zip?: number;
  city?: string;

  constructor(eventId?: string, creatorId?: string, eventName?: string, photoURLs?: string[], eventDate?: Date, price?: number,
              categories?: string[], participants?: string[], maxParticipants?: number, street?: string, streetNumber?: number,
              zip?: number, city?: string) {
    this.eventId = eventId;
    this.creatorId = creatorId;
    this.eventName = eventName;
    this.photoURLs = photoURLs;
    this.eventDate = eventDate;
    this.price = price;
    this.categories = categories;
    this.participants = participants;
    this.maxParticipants = maxParticipants;
    this.street = street;
    this.streetNumber = streetNumber;
    this.zip = zip;
    this.city = city;
  }
}
