import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import User from "../models/classes/user";
import {getDoc} from "firebase/firestore";
import UserCredential = firebase.auth.UserCredential;
import {Router} from "@angular/router";
import {AlertService} from "src/app/services/alert.service";


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly userCollection!: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private router: Router, public alertService: AlertService) {
    this.userCollection = this.afs.collection(`user`);
    console.log(this.userCollection);
  }

  async getUserById(userId: string){
    let docRef = this.userCollection.doc(userId).ref;
    let docSnap = await getDoc(docRef);
    return <User>docSnap.data();
  }



  async getCurrentUser() {
    const userData = localStorage.getItem('user');
    console.log(userData)
    return JSON.parse(userData);
  }

  async createNewUserInFirestore(userCredential: UserCredential | any, userType: string | number){
    let user: User;
    if(userCredential.additionalUserInfo.providerId == "google.com"){
      user = new User(String(userCredential.user.uid), userCredential.additionalUserInfo.profile["email"] || "Please contact Juntos", Number(userType),
        userCredential.additionalUserInfo.profile["verified_email"] || false, undefined,
        userCredential.additionalUserInfo.profile["given_name"] || undefined,
        userCredential.additionalUserInfo.profile["family_name"] || undefined,
        undefined, undefined, undefined,
        userCredential.additionalUserInfo.profile["name"] || undefined,
        undefined,
        userCredential.additionalUserInfo.profile["picture"] || undefined
      );
    } else {
      user = new User(String(userCredential.user.uid), userCredential.user["_delegate"].email || "Please contact Juntos", Number(userType))
    }
    const data = JSON.parse(JSON.stringify(user));
    await this.userCollection.doc(userCredential.user.uid).set(data)
      .catch((err) => console.log(err));

  }

  async updateCurrentUser(data: any) {
    let db = firebase.firestore();

    let user = await this.getCurrentUser();
    let userId = user.userId;
    console.log(user);
    console.log(typeof user)
    console.log(userId)
    console.log(data)

    db.collection('user').doc(userId).update(data).then((res) => {
      this.router.navigate(['event-list'])
    }).catch((e) => {
      this.alertService.basicAlert('Bearbeiten des Profils fehlgeschlagen', 'Bitte versuchen Sie es später noch mal', ['OK']);
      console.log('error');
      console.log(e);
    });

  }
}
