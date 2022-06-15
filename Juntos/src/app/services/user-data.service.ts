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

  /**
   * Gibt alle Daten eines Nutzers, entsprechend seiner ID aus der Firestore Datenbank zurück
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
    return <User>docSnap.data();
  }

  /**
   * Gibt ein Observable der Daten eines Nutzers, entsprechend seiner ID aus der Firestore Datenbank zurück.
   * Dieses kann mithilfe der subscribe Methode abonniert und weiterverarbeitet werden.
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
  getUserById_Observable(userId: string) {
    return this.userCollection.doc(userId).valueChanges();
  }

  /**
   * Gibt die Nutzerdaten, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
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
   * Gibt die Nutzer ID, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
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
   * Gibt die Nutzerrechte, welche im lokalen Speicher gesichert sind in Form eines Promise zurück.
   */
  async getCurrentUserRole() {
    try {
      const userData = await this.getCurrentUser();
      return userData.rights;
    } catch(e) {
      console.log(e.message);
      return undefined;
    }
  }


  /**
   * Erstellt für einen neuen Nutzer, einen Eintrag in der Datenbank.
   * Mithilfe der userCredentials wird überprüft mit welchem Provider der Nutzer sich registriert hat.
   * Bei einer Google Authentifzierung werden so viele Daten wie möglich aus dem Konto des Nutzers gelesen und
   * in der Datenbank gespeichert um die Personalisierung des Profils weitgehend zu automatisieren.
   *
   * @param userCredential
   * @param userType
   */
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

  /**
   * Die eingegebenen Daten werden in den Datenbankeintrag des zurzeit eingeloggten Nutzers gespeichert/aktualisiert.
   *
   * @param data
   */
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
   * Das eingegebene Event wird in den Datenbankeintrag für registrierte Events des zurzeit eingeloggten Nutzers gespeichert, falls dieses nicht
   * bereits vorhanden ist.
   *
   * @param event
   */
  async addRegisteredEvent(event: any){
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await this.userCollection.doc(userId).update({registeredEvents: arrayUnion(event)});
  }

  /**
   * Das eingegebene Event wird in den Datenbankeintrag für erstellte Events des zurzeit eingeloggten Nutzers gespeichert, falls dieses nicht
   * bereits vorhanden ist.
   *
   * @param event
   */
  async addCreatedEvent(event: any){
    const user = await this.getCurrentUser();
    const userId = user.userId;
    await this.userCollection.doc(userId).update({createdEvents: arrayUnion(event)});
  }
}
