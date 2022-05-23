import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import User from "../models/classes/user";
import {getDoc} from "firebase/firestore";
import UserCredential = firebase.auth.UserCredential;


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly userCollection!: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
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
    return <any>JSON.parse(userData);
  }

  async createNewUserInFirestore(userCredential: UserCredential, userType: string | number){
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
}
