import {Time} from "@angular/common";

export class Event{
  eventId?: string;
  creatorId?: string;
  eventName?: string;
  photoURLs?: string[];
  eventDate?: Date;
  eventTime?: Time;
  price?: number;
  description?: string;
  categories?: string[];
  participants?: string[];
  maxParticipants?: number;
  street?: string;
  streetNumber?: string;
  zip?: number;
  city?: string;

  constructor(eventId?: string, creatorId?: string, eventName?: string, photoURLs?: string[], eventDate?: Date, eventTime?: Time,
              price?: number, description?: string, categories?: string[], participants?: string[], maxParticipants?: number,
              street?: string, streetNumber?: string, zip?: number, city?: string) {
    this.eventId = eventId;
    this.creatorId = creatorId;
    this.eventName = eventName;
    this.photoURLs = photoURLs;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
    this.description = description;
    this.categories = categories;
    this.participants = participants;
    this.maxParticipants = maxParticipants;
    this.street = street;
    this.streetNumber = streetNumber;
    this.zip = zip;
    this.city = city;
  }
}
