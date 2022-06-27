import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import User from '../models/classes/user';
import {getDoc} from 'firebase/firestore';
import UserCredential = firebase.auth.UserCredential;
import {Router} from '@angular/router';
import {AlertService} from 'src/app/services/alert.service';
import {arrayUnion} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly userCollection!: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private router: Router, public alertService: AlertService) {
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
   * Gibt ein Observable mit allen Nutzerdaten zurück
   */
  getAllUser(){
    return this.userCollection.valueChanges();
  }
}