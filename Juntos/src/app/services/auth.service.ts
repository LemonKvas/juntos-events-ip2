import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {UserDataService} from "src/app/services/user-data.service";
import User from "src/app/models/classes/user";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User;
  token;
  public email!: string;
  public password!: string;

  constructor(private afAuth: AngularFireAuth, private userDataService: UserDataService) {
    this.afAuth.authState.subscribe(async firebaseUser => {
      console.log(firebaseUser);
      this.user = undefined;
      this.token = undefined;
      if(firebaseUser){
          this.user = await this.userDataService.getUserById(firebaseUser.uid);
          this.token = firebaseUser.getIdTokenResult(false);
        }
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
      }
    )
  }

  isloggedin() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== undefined;
  }

  hasRole(role){
    //returns true if user role equivalent or smaller
    return Number(role) >= Number(JSON.parse(localStorage.getItem('user')).rights);
  }

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

  FacebookAuth(userType) {
    //TODO: Nutzungsbedingungen URL & URL zur Datenrichtlinie bei Meta Developer hinzufügen
    //https://www.devopsschool.com/blog/error-app-not-set-up-this-app-is-still-in-development-mode-and-you-dont-have-access-to-it/#:~:text=returns%20this%20error-,App%20not%20set%20up%3A%20This%20app%20is%20still%20in%20development,t%20login%20with%20their%20facebook.
    return this.AuthLogin(new FacebookAuthProvider(), userType);
  }


  // Auth logic to run auth providers
  AuthLogin(provider, userType) {
    provider.setCustomParameters({
      'display': 'popup'
    });
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

  SignOut() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    })
  }


}
