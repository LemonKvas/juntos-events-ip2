import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {UserDataService} from "src/app/services/user-data.service";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public email!: string;
  public password!: string;

  constructor(private afAuth: AngularFireAuth, private userDataService: UserDataService) {}

  checkEmailAndPasswort() {
    return this.email != undefined && this.password != undefined
      && this.email.trim().length > 3 && this.email.includes('@')
      && this.password.trim().length > 5;

  }
  //Login with E-Mail and password
  EmailLogin() {
    if (this.checkEmailAndPasswort) {
      this.afAuth.signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          console.log(error.message)
        });
      return;
    }
    console.log("Email oder Passwort haben die Anforderungen nicht erfüllt")
    //TODO: alerts einfügen statt console logs
  }

  EmailRegister(userType){
    if (this.checkEmailAndPasswort){
      this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.userDataService.createNewUserInFirestore(userCredential, userType);
        })
        .catch((error) => {
          if(String(error.code).includes('email-already-in-use')) this.EmailLogin();
        });
    }
  }

  // Sign in with Google
  GoogleAuth(userType) {
    return this.AuthLogin(new GoogleAuthProvider(), userType);
  }


  // Auth logic to run auth providers
  AuthLogin(provider, userType) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((userCredential) => {
        if(userCredential.additionalUserInfo.isNewUser){
          this.userDataService.createNewUserInFirestore(userCredential, userType);
        }
        console.log(userCredential);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }


}
