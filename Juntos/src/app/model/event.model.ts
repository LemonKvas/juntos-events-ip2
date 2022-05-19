export class Event{
  name?: string;
  photoURLs?: string[];
  eventDate?: Date;
  price?: string;
  bio?: string;
  categories?: string[];
  participants?: string[];
  maxParticipants?: number;
  //address?: Map<string, string>;
  street?: string;
  house?: string;
  zipCode?: number;
  city?: string;
  eventId?: string;
  creatorId?: string;


  constructor(name?: string, photoURLs?: string[], eventDate?: Date,
              price?: string, bio?: string, categories?: string[], participants?: string[], maxParticipants?: number,
              street?: string, house?: string, zipCode?: number, city?: string, eventId?: string, creatorId?: string) {
    this.name = name;
    this.photoURLs = photoURLs;
    this.eventDate = eventDate;
    this.price = price;
    this.bio = bio;
    this.categories = categories;
    this.participants = participants;
    this.maxParticipants = maxParticipants;
    this.street = street;
    this.house = house;
    this.zipCode = zipCode;
    this.city = city;
    this.eventId = eventId;
    this.creatorId = creatorId;
  }
}
