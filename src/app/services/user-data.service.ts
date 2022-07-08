import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import User from '../models/classes/user';
import { getDoc } from 'firebase/firestore';
import UserCredential = firebase.auth.UserCredential;
import { AlertService } from 'src/app/services/alert.service';
import { arrayUnion } from '@angular/fire/firestore';
import { RegisteredEvent } from '../models/interfaces/registered-event';
import { CreatedEvent } from '../models/interfaces/created-event';

/**
 * EN:
 * Service to manage user data in local storage and firestore
 * DE:
 */

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly userCollection!: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, public alertService: AlertService) {
    this.userCollection = this.afs.collection(`user`);
  }

  /**
   * DE:
   * Gibt alle Daten eines Nutzers, entsprechend seiner ID aus der Firestore Datenbank zurück.
   * EN:
   * Returns all data of a user, according to his ID from the Firestore database
   *
   * @param userId: string
   *
   * @example
   * async function(){
   *              try{
   *                const user = await this.getUserById(grbIa6fmpL0uJu8WFuEL);
   *                ...do something
   *              }
   *              catch{
   *                ...do something
   *              }
   * }
   */
  async getUserById(userId: string) {
    const docRef = this.userCollection.doc(userId).ref;
    const docSnap = await getDoc(docRef);
    return docSnap.data() as User;
  }

  /**
   * DE:
   * Gibt ein Observable der Daten eines Nutzers, entsprechend seiner ID aus der Firestore Datenbank zurück.
   * Dieses kann mithilfe der subscribe Methode abonniert und weiterverarbeitet werden.
   * EN:
   * Returns an observable of the data of a user, according to its ID from the Firestore database.
   * This can be subscribed to and processed using the subscribe method.
   *
   * @example
   * functionName(){
   *             this.getUserById_Observable(grbIa6fmpL0uJu8WFuEL).subscribe((user)=>{
   *              this.user = user;
   *         })
   * }
   *
   * @param userId {string}
   * @returns UserData
   *
   */
  getUserByIdAsObservable(userId: string) {
    return this.userCollection.doc(userId).valueChanges();
  }

  /**
   * DE:
   * Gibt die Nutzerdaten, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
   * EN:
   * Returns the user data which is saved in the local storage in the form of a Promise.
   */
  async getCurrentUser(): Promise<any> {
    try {
      const userData = localStorage.getItem('user');
      const jsonParsedUserData = JSON.parse(userData);
      return Promise.resolve(jsonParsedUserData);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * DE:
   * Gibt die Nutzer ID, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
   * EN:
   * Returns the user ID stored in the local storage in the form of a Promise.
   */
  async getCurrentUserID() {
    try {
      const userData = await this.getCurrentUser();
      return userData.userId;
    } catch (e) {
      console.log(e.message);
      return undefined;
    }
  }

  /**
   * DE:
   * Gibt die Nutzerrechte, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
   * EN:
   * Returns the user rights that are saved in the local storage in the form of a Promise.
   */
  async getCurrentUserRole() {
    try {
      const userData = await this.getCurrentUser();
      return userData.rights;
    } catch (e) {
      console.log(e.message);
      return undefined;
    }
  }

  /**
   * DE:
   * Erstellt für einen neuen Nutzer, einen Eintrag in der Datenbank.
   * Mithilfe der userCredentials wird überprüft mit welchem Provider der Nutzer sich registriert hat.
   * Bei einer Google Authentifizierung werden so viele Daten wie möglich aus dem Konto des Nutzers gelesen und
   * in der Datenbank gespeichert, um die Personalisierung des Profils weitgehend zu automatisieren.
   * EN:
   * Creates an entry in the database for a new user.
   * The userCredentials are used to check which provider the user has registered with.
   * With Google Authentication, as much data as possible is read from the user's account and stored in the database to
   * stored in the database in order to automate the personalization of the profile to a large extent.
   *
   * @param userCredential
   * @param userType
   */
  async createNewUserInFirestore(userCredential: UserCredential | any, userType: string | number) {
    let user: User;
    if (userCredential.additionalUserInfo.providerId === 'google.com') {
      user = new User(
        String(userCredential.user.uid),
        userCredential.additionalUserInfo.profile.email || 'Please contact Juntos',
        Number(userType),
        userCredential.additionalUserInfo.profile.verified_email || false,
        undefined,
        userCredential.additionalUserInfo.profile.given_name || undefined,
        userCredential.additionalUserInfo.profile.family_name || undefined,
        undefined,
        undefined,
        undefined,
        userCredential.additionalUserInfo.profile.name || undefined,
        undefined,
        userCredential.additionalUserInfo.profile.picture || undefined
      );
    } else {
      user = new User(
        String(userCredential.user.uid),
        userCredential.user._delegate.email || 'Please contact Juntos',
        Number(userType)
      );
    }
    const data = JSON.parse(JSON.stringify(user));
    await this.userCollection
      .doc(userCredential.user.uid)
      .set(data)
      .catch((err) => console.log(err));
  }

  /**
   * DE:
   * Die eingegebenen Daten werden in den Datenbankeintrag des zurzeit eingeloggten Nutzers gespeichert/aktualisiert.
   * EN:
   * The entered data will be saved/updated in the database entry of the currently logged in user.
   *
   * @param data
   */
  async updateCurrentUser(data: any) {
    const db = firebase.firestore();

    const user = await this.getCurrentUser();
    const userId = user.userId;

    db.collection('user')
      .doc(userId)
      .update(data)
      .catch((e) => {
        this.alertService.basicAlert(
          'Bearbeiten des Profils fehlgeschlagen',
          'Bitte versuchen Sie es später noch mal',
          ['OK']
        );
        console.log('error');
        console.log(e);
      });
  }

  /**
   * DE:
   * Das eingegebene Event wird in den Datenbankeintrag für registrierte Events des zurzeit eingeloggten Nutzers gespeichert, falls dieses nicht
   * bereits vorhanden ist.
   * EN:
   * The entered event will be stored in the database entry for registered events of the currently logged in user, if this does not
   * already exists.
   *
   * @param event
   */
  async addRegisteredEvent(event: any) {
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await this.userCollection.doc(userId).update({ registeredEvents: arrayUnion(event) });
  }

  /**
   * DE:
   * Das eingegebene Event wird in den Datenbankeintrag für erstellte Events des zurzeit eingeloggten Nutzers gespeichert, falls dieses nicht
   * bereits vorhanden ist.
   * EN:
   * The entered event will be stored in the database entry for created events of the currently logged in user, if it does not already exist.
   *
   * @param event
   */
  async addCreatedEvent(event: any) {
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await this.userCollection.doc(userId).update({ createdEvents: arrayUnion(event) });
  }

  /**
   * DE:
   * Gibt ein Observable mit allen Nutzerdaten zurück
   *
   * EN:
   * Returns an observable with all user data
   */
  getAllUser() {
    return this.userCollection.valueChanges();
  }

  /**
   * This function will add each chat user to each other sub-collection 'chatPartners' with
   * the given user object.
   *
   * @example
   * Call it with a user object.
   * addChat(user: User)
   *
   * @param user
   */
  async addChat(user: User) {
    const db = firebase.firestore().collection('user');
    const currentUser = await this.getCurrentUser();
    // Add both users to each other sub-collection 'chatPartners'
    await db.doc(currentUser.userId).collection('chatPartners').doc(user.userId).set(user);
    await db.doc(user.userId).collection('chatPartners').doc(currentUser.userId).set(currentUser);
  }

  /**
   * This function add current / logged-in user data to chat user by given user id and add chat user to
   * current / logged-in user data.
   *
   * @example
   * Call it with a user id as a string
   * addChatPartner('8rkf29')
   *
   * @param chatId
   * @param user
   */
  async addChatPartner(chatId: string, user: User) {
    const currentUser = await this.getCurrentUser();
    // Add user(s) back into each other sub-collection 'chatPartners'
    await this.userCollection
      .doc(currentUser.userId)
      .collection('chatPartners')
      .doc(user.userId)
      .set(user);
    await this.userCollection
      .doc(user.userId)
      .collection('chatPartners')
      .doc(currentUser.userId)
      .set(currentUser);
    // Add user(s) back into sub-collection 'users' of collection 'chats'
    await this.afs.collection('chats').doc(chatId).collection('users').doc(user.userId).set(user);
    await this.afs
      .collection('chats')
      .doc(chatId)
      .collection('users')
      .doc(currentUser.userId)
      .set(currentUser);
  }

  /**
   * This function will return an observable with all chat partners data of the user with
   * the given id.
   *
   * @example
   * Call it with a user id as a string
   * getChatPartners('n84th3')
   *
   * @param userId
   */
  getChatPartners(userId: string) {
    return this.userCollection.doc(userId).collection('chatPartners').snapshotChanges();
  }
}
