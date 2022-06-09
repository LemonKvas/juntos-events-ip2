import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {UserDataService} from "src/app/services/user-data.service";
import User from "src/app/models/classes/user";
import {GoogleAuth} from "@codetrix-studio/capacitor-google-auth";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import {Router} from "@angular/router";
import {AlertService} from "src/app/services/alert.service";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    user: User;
    token;

    constructor(private afAuth: AngularFireAuth, private userDataService: UserDataService, private router: Router, public alertService: AlertService) {
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
                this.router.navigate(['event-list']);
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
                    this.router.navigate(['event-list']);
                })
                .catch((error) => {
                    console.log(error.message)
                  this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
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
                    this.CheckForNewUser(userCredential, userType);
                })
                .catch((error) => {
                    if(String(error.code).includes('email-already-in-use')) this.EmailLogin(email, password);
                    else {
                      //TODO
                      this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
                    }
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
        //TODO: MOBILE FUNKTIONIERT NUR MIT URLS
        //Dieses Tutorial benutzen:
        //https://enappd.com/blog/facebook-login-in-capacitor-apps-with-ionic-angular/128/
        //clientid 6ea09df3fcf00feb02b55194fc03d8c6
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
              console.log(userCredential);
                this.CheckForNewUser(userCredential, userType);
                console.log('You have been successfully logged in!');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async CheckForNewUser(userCredential, userType){
        if(userCredential.additionalUserInfo.isNewUser){
            await this.userDataService.createNewUserInFirestore(userCredential, userType);
            await this.router.navigate(['edit-user']);
        } else {
            await this.router.navigate(['event-list']);
        }
    }

    SignOut() {
        this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        })
    }

}
