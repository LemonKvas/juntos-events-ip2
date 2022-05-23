import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {UserDataService} from "src/app/services/user-data.service";
import User from "src/app/models/classes/user";
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User;
  token;


  constructor(private afAuth: AngularFireAuth, private userDataService: UserDataService) {
    this.afAuth.authState.subscribe(async firebaseUser => {
      this.user = undefined;
      this.token = undefined;
      if(firebaseUser && !firebaseUser.multiFactor["user"].isAnonymous){
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

  checkEmailAndPasswort(email, password) {
    return email != undefined && password != undefined
      && email.trim().length > 3 && email.includes('@')
      && password.trim().length > 5;
  }

  //anonymous login
  AnonymousAuth(){
    this.afAuth.signInAnonymously()
      .then(userCredentials => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  //Login with E-Mail and password
  EmailLogin(email, password) {
    if (this.checkEmailAndPasswort) {
      this.afAuth.signInWithEmailAndPassword(email, password)
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

  EmailRegister(userType, email, password){
    if (this.checkEmailAndPasswort){
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log(userCredential);
          this.userDataService.createNewUserInFirestore(userCredential, userType);
        })
        .catch((error) => {
          if(String(error.code).includes('email-already-in-use')) this.EmailLogin(email, password);
        });
    }
  }

  async GoogleMobileAuth(userType) {
    await GoogleAuth.signIn().then(async (user) => {
      const credential = await firebase.auth.GoogleAuthProvider.credential(user.authentication.idToken);
      await this.afAuth.signInWithCredential(credential)
          .then((userCredential)=>{
            this.CheckForNewUser(userCredential, userType);
          })
          .catch((error) => {
            console.log("firebase error", error);
          })
    }).catch((error) =>{
      console.log("google error", error);
    });
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
        this.CheckForNewUser(userCredential, userType);
        console.log(userCredential);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  CheckForNewUser(userCredential, userType){
    if(userCredential.additionalUserInfo.isNewUser){
      this.userDataService.createNewUserInFirestore(userCredential, userType);
    }
  }

  SignOut() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    })
  }


}
