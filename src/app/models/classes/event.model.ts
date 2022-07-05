export class Event {
  name?: string;
  photoURLs?: string[];
  creationDate?: Date;
  eventDate?: Date;
  price?: string;
  bio?: string;
  categories?: string[];
  participants?: string[];
  maxParticipants?: number;
  address?: object;
  publishStatus?: boolean;
  eventId?: string;
  creatorId?: string;
  long?: string;
  lat?: string;

  constructor(
    name?: string,
    photoURLs?: string[],
    creationDate?: Date,
    eventDate?: Date,
    price?: string,
    bio?: string,
    categories?: string[],
    participants?: string[],
    maxParticipants?: number,
    address?: object,
    publishStatus?: boolean,
    eventId?: string,
    creatorId?: string,
    long?: string,
    lat?: string
  ) {
    this.name = name;
    this.photoURLs = photoURLs;
    this.creationDate = creationDate;
    this.eventDate = eventDate;
    this.price = price;
    this.bio = bio;
    this.categories = categories;
    this.participants = participants;
    this.maxParticipants = maxParticipants;
    this.address = address;
    this.publishStatus = publishStatus;
    this.eventId = eventId;
    this.creatorId = creatorId;
    if (long != undefined) this.long = long;
    if (lat != undefined) this.lat = lat;
  }
}
