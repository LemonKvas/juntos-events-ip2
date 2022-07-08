/**
 * DE:
 * Klasse um ein Event zu repräsentieren.
 * EN:
 * Class to represent an event.
 */
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
  status?: number;
  long?: string;
  lat?: string;

  /**
   * DE:
   * Setzt alle benötigten Parameter fest. Falls die optionalen Parameter nicht undefined sind,
   * werden diese ebenfalls gespeichert.
   * EN:
   * Sets all required parameters. If the optional parameters are not undefined,
   * they will be saved as well.
   * @param name
   * @param photoURLs
   * @param creationDate
   * @param eventDate
   * @param price
   * @param bio
   * @param categories
   * @param participants
   * @param maxParticipants
   * @param address
   * @param publishStatus
   * @param eventId
   * @param creatorId
   * @param long
   * @param lat
   * @param status
   */
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
    lat?: string,
    status?: number
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
    this.status = status;
    if (long != undefined) this.long = long;
    if (lat != undefined) this.lat = lat;
  }
}
