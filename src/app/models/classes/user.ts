import { Feedback } from 'src/app/models/interfaces/feedback';
import { RegisteredEvent } from 'src/app/models/interfaces/registered-event';
import { Badge } from 'src/app/models/interfaces/badge';
import userRoles from 'src/app/models/enums/userRoles';
import { CreatedEvent } from '../interfaces/created-event';

/**
 * DE:
 * Klasse um einen Nutzer zu repräsentieren.
 * EN:
 * Class to represent a user.
 */
export class User {
  userId: string;
  rights: userRoles;
  firstName?: string;
  lastName?: string;
  userName?: string;
  birthDate?: string;
  languages?: string[];
  email: string;
  emailVerified: boolean;
  paymentUrl?: string;
  premium: boolean;
  photoUrl?: string;
  bio?: string;
  socialMedia?: string[];
  friends?: string[];
  favoriteCreators?: string[];
  feedback?: Feedback[];
  registeredEvents?: RegisteredEvent[];
  createdEvents?: CreatedEvent[];
  socialPoints: number;
  badges?: Badge[];

  /**
   * DE:
   * Setzt alle benötigten Parameter fest. Falls die optionalen Parameter nicht undefined sind,
   * werden diese ebenfalls gespeichert.
   * EN:
   * Sets all required parameters. If the optional parameters are not undefined,
   * they will be saved as well.
   * @param userId
   * @param email
   * @param rights
   * @param emailVerified
   * @param socialPoints
   * @param firstName
   * @param lastName
   * @param birthDate
   * @param languages
   * @param paymentUrl
   * @param userName
   * @param premium
   * @param photoUrl
   * @param bio
   * @param friends
   * @param socialMedia
   * @param favoriteCreators
   * @param feedback
   * @param registeredEvents
   * @param createdEvents
   * @param badges
   */
  constructor(
    userId: string,
    email: string,
    rights?: number,
    emailVerified?: boolean,
    socialPoints?: number,
    firstName?: string,
    lastName?: string,
    birthDate?: string,
    languages?: string[],
    paymentUrl?: string,
    userName?: string,
    premium?: boolean,
    photoUrl?: string,
    bio?: string,
    friends?: string[],
    socialMedia?: string[],
    favoriteCreators?: string[],
    feedback?: Feedback[],
    registeredEvents?: RegisteredEvent[],
    createdEvents?: CreatedEvent[],
    badges?: Badge[]
  ) {
    this.userId = userId;
    this.email = email;
    if (rights !== undefined) this.rights = rights;
    else this.rights = 0;
    if (emailVerified !== undefined) this.emailVerified = emailVerified;
    else this.emailVerified = false;
    if (socialPoints !== undefined) this.socialPoints = socialPoints;
    else this.socialPoints = 0;
    if (firstName !== undefined) this.firstName = firstName;
    if (lastName !== undefined) this.lastName = lastName;
    if (birthDate !== undefined) this.birthDate = birthDate;
    if (languages !== undefined) this.languages = languages;
    if (paymentUrl !== undefined) this.paymentUrl = paymentUrl;
    if (userName !== undefined) this.userName = userName;
    if (premium !== undefined) this.premium = premium;
    else this.premium = false;
    if (photoUrl !== undefined) this.photoUrl = photoUrl;
    if (bio !== undefined) this.bio = bio;
    if (friends !== undefined) this.friends = friends;
    if (socialMedia !== undefined) this.socialMedia = socialMedia;
    if (favoriteCreators !== undefined) this.favoriteCreators = favoriteCreators;
    if (feedback !== undefined) this.feedback = feedback;
    if (registeredEvents !== undefined) this.registeredEvents = registeredEvents;
    if (createdEvents !== undefined) this.createdEvents = createdEvents;
    if (badges !== undefined) this.badges = badges;
  }
}

export default User;
