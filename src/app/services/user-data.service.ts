import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import User from '../models/classes/user';
import {getDoc} from 'firebase/firestore';
import UserCredential = firebase.auth.UserCredential;
import {AlertService} from 'src/app/services/alert.service';
import {arrayUnion} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly userCollection!: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, public alertService: AlertService) {
    this.userCollection = this.afs.collection(`user`);
  }

  /*** GET USER FUNCTIONS ***/

  async getUserById(userId: string) {
    const docRef = this.userCollection.doc(userId).ref;
    const docSnap = await getDoc(docRef);
    return <User>docSnap.data();
  }

  getUserById_Observable(userId: string) {
    return this.userCollection.doc(userId).valueChanges();
  }

  async getCurrentUser(): Promise<any> {
    try {
      const userData = localStorage.getItem('user');
      const jsonParsedUserData = JSON.parse(userData);
      return Promise.resolve(jsonParsedUserData);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getCurrentUserID() {
    try {
      const userData = await this.getCurrentUser();
      return userData.userId;
    } catch (e) {
      console.log(e.message);
      return undefined;
    }
  }



  async getCurrentUserRole() {
    try {
      const userData = await this.getCurrentUser();
      return userData.rights;
    } catch(e) {
      console.log(e.message);
      return undefined;
    }
  }

  /*** CRUD Firestore User ***/


  async createNewUserInFirestore(userCredential: UserCredential | any, userType: string | number) {
    let user: User;
    if (userCredential.additionalUserInfo.providerId == 'google.com') {
      user = new User(String(userCredential.user.uid), userCredential.additionalUserInfo.profile.email || 'Please contact Juntos', Number(userType),
          userCredential.additionalUserInfo.profile.verified_email || false, undefined,
          userCredential.additionalUserInfo.profile.given_name || undefined,
          userCredential.additionalUserInfo.profile.family_name || undefined,
          undefined, undefined, undefined,
          userCredential.additionalUserInfo.profile.name || undefined,
          undefined,
          userCredential.additionalUserInfo.profile.picture || undefined
      );
    } else {
      user = new User(String(userCredential.user.uid), userCredential.user._delegate.email || 'Please contact Juntos', Number(userType));
    }
    const data = JSON.parse(JSON.stringify(user));
    await this.userCollection.doc(userCredential.user.uid).set(data)
        .catch((err) => console.log(err));

  }

  async updateCurrentUser(data: any) {
    const db = firebase.firestore();

    const user = await this.getCurrentUser();
    const userId = user.userId;

    db.collection('user').doc(userId).update(data).then((res) => {

    }).catch((e) => {
      this.alertService.basicAlert('Bearbeiten des Profils fehlgeschlagen', 'Bitte versuchen Sie es später noch mal', ['OK']);
      console.log('error');
      console.log(e);
    });

  }

  /**
   *
   * @param event
   */
  async addRegisteredEvent(event: any){
    const db = firebase.firestore().collection('user');
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await db.doc(userId).update({registeredEvents: arrayUnion(event)});
  }
  async addCreatedEvent(event: any){
    const db = firebase.firestore().collection('user');
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await db.doc(userId).update({createdEvents: arrayUnion(event)});
  }


  /**
   * EN:
   * Returns an observable with all user data
   *
   * DE:
   * Gibt ein Observable mit allen Nutzerdaten zurück
   */
  getAllUser(){
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
  async addChat(user: User){
    const db = firebase.firestore().collection('user');
    const currentUser = await this.getCurrentUser();
    await db.doc(currentUser.userId).collection('chatPartners').doc(user.userId).set(user);
    await db.doc(user.userId).collection('chatPartners').doc(currentUser.userId).set(currentUser);
  }

  /**
   * This function add current / logged-in user data to chat user by given user id.
   *
   * @example
   * Call it with a user id as a string
   * addChatPartner('8rkf29')
   *
   * @param userId
   */
  async addChatPartner(userId: string){
    const currentUser = await this.getCurrentUser();
    await this.userCollection.doc(userId).collection('chatPartners').doc(currentUser.userId).set(currentUser);
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
  getChatPartners(userId: string){
    return this.userCollection.doc(userId).collection('chatPartners').snapshotChanges();
  }
}
