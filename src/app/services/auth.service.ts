import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UserDataService } from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  refreshUserDataSub: Subscription;
  private user: User;
  private token;

  /**
   * DE:
   * Constructor des Auth Services "abonniert" den Authentifizierungsstatus von Firebase.
   * Sobald sich ein Nutzer einloggt, wird diese "Subscribtion" aktiviert und der aktuelle Nutzer
   * wird im lokalen Speicher gesichert.
   * Falls der eingeloggte Nutzer sich nicht anonym eingeloggt hat, wird die Methode "refreshUserData"
   * aktiviert, damit die Nutzerdaten bei Änderungen stets aktuell bleiben.
   * EN:
   * Constructor of the Auth Service "subscribes" to the authentication state of Firebase.
   * As soon as a user logs in, this "Subscription" is activated and the current user is
   * is saved in the local storage.
   * If the logged in user has not logged in anonymously, the "refreshUserData" method is
   * method is activated so that the user data is always up to date when changes are made.
   *
   * @param afAuth
   * @param userDataService
   * @param router
   * @param alertService
   *
   * @returns The processed target number
   */
  constructor(
    private afAuth: AngularFireAuth,
    private userDataService: UserDataService,
    private router: Router,
    public alertService: AlertService
  ) {
    this.afAuth.authState.subscribe(async (firebaseUser) => {
      this.user = undefined;
      this.token = undefined;
      if (firebaseUser && !firebaseUser.isAnonymous) {
        this.refreshUserData(firebaseUser.uid);
        this.token = firebaseUser.getIdTokenResult(false);
        localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
      } else {
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
        this.refreshUserDataSub.unsubscribe();
      }
    });
  }

  /**
   * Refresh User Data
   * DE:
   * Falls sich die Daten des Nutzers in der Datenbank ändern, werden diese im lokalen Speicher aktualisiert.
   * EN:
   * If the user's data changes in the database, it will be updated in the local storage.
   *
   * @example this.refreshUserData(grbIa6fmpL0uJu8WFuEL)
   *
   * @param userId: string
   */
  refreshUserData(userId) {
    this.refreshUserDataSub = this.userDataService
      .getUserByIdAsObservable(userId)
      .subscribe((userData) => {
        if (userData) {
          this.user = userData as unknown as User;
          localStorage.setItem('user', JSON.stringify(this.user));
        }
      });
  }

  /**
   * DE:
   * True falls Nutzer eingeloggt ist, false falls nicht.
   * EN:
   * True if user is logged in, false if not.
   *
   * @example if(this.isLoggedIn) ...
   *
   */
  isLoggedIn() {
    return this.user !== undefined;
  }

  /**
   * DE:
   * Vergleicht den Parameter Wert und die Rechte des Nutzers.
   * Gibt true zurück, wenn die Rechte des Nutzers kleiner oder gleich.
   * EN:
   * Compares the parameter value and the user's permissions.
   * Returns true if the user's rights are less than or equal to.
   *
   * @example const isUserAllowed = this.hasRole(2);
   *
   * @param role: string | number
   */
  hasRole(role) {
    //returns true if user role equivalent or smaller
    return Number(role) >= Number(JSON.parse(localStorage.getItem('user')).rights);
  }

  /**
   * DE:
   * Gibt true zurück, falls die angegebenen Parameter weder undefined sind, die E-Mail mindestens 4 Zeichen lang ist,
   * ein @ enthält und das Passwort mindestens 6 Zeichen lang ist. Andernfalls wird false zurückgegeben.
   * EN:
   * Returns true if the given parameters are neither undefined, the email is at least 4 characters long,
   * contains an @, and the password is at least 6 characters long. Otherwise false is returned.
   *
   * @example if(this.checkEmailAndPassword(juntosATjuntos.de, sicheresPasswort)) ...
   *
   * @param email
   * @param password
   */
  checkEmailAndPassword(email, password) {
    return (
      email !== undefined &&
      password !== undefined &&
      email.trim().length > 3 &&
      email.includes('@') &&
      password.trim().length > 5
    );
  }

  /**
   * DE:
   * Nutzt den Firebase Authentifizierungsservice um einen Nutzer anonym einzuloggen,
   * daraufhin wird der Nutzer zur Url ./event-list weitergeleitet.
   * EN:
   * Uses the Firebase authentication service to log in a user anonymously,
   * then the user is redirected to the url ./event-list.
   */
  anonymousAuth() {
    this.afAuth
      .signInAnonymously()
      .then(() => {
        this.router.navigate(['event-list']);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /**
   * DE:
   * Nutzt den Firebase Authentifizierungsservice um einen Nutzer mit Email und Passwort einzuloggen.
   * Vorher wird mit hilfe von this.checkEmailAndPasswort(email, password) überprüft, ob die Anforderungen
   * an Email und Passwort erfüllt sind.
   * daraufhin wird der Nutzer zur Url ./event-list weitergeleitet.
   * EN:
   * Uses the Firebase authentication service to log in a user with email and password.
   * Before that, this.checkEmailAndPassword(email, password) is used to check if the requirements for email and password are met.
   * Then the user is redirected to the url ./event-list.
   *
   * @example this.EmailLogin(testATtest.de, sicheresPasswort)
   *
   * @param email
   * @param password
   */
  emailLogin(email, password) {
    if (this.checkEmailAndPassword(email, password)) {
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((x) => {
          this.router.navigate(['event-list']);
        })
        .catch(() => {
          this.alertService.basicAlert(
            'Email oder Passwort haben die Anforderungen nicht erfüllt',
            'Bitte versuchen Sie es mit anderen Werten',
            ['OK']
          );
        });
      return;
    } else {
      this.alertService.basicAlert(
        'Überprüfen Sie Ihre Eingaben',
        'Email oder Passwort haben die Anforderungen nicht erfüllt',
        ['OK']
      );
    }
  }

  /**
   * DE:
   * Nutzt den Firebase Authentifizierungsservice um einen Nutzer mit E-Mail und Passwort zu registrieren.
   * Vorher wird mithilfe von this.checkEmailAndPasswort(email, password) überprüft, ob die Anforderungen
   * an E-Mail und Passwort erfüllt sind.
   * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
   * angelegt.
   * EN:
   * Uses the Firebase authentication service to register a user with email and password.
   * Before that, this.checkEmailAndPassword(email, password) is used to check if the email and password requirements are met.
   * email and password requirements are met.
   * Then, using this.checkForNewUser(userCredential, userType), a new user is created in the database (if it does not already exist).
   * is created.
   *
   * @example this.EmailRegister(testATtest.de, sicheresPasswort)
   *
   * @param userType
   * @param email
   * @param password
   */
  emailRegister(userType, email, password) {
    if (this.checkEmailAndPassword) {
      return this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.checkForNewUser(userCredential, userType);
        })
        .catch((error) => {
          if (String(error.code).includes('email-already-in-use')) {
            this.emailLogin(email, password);
          } else {
            this.alertService.basicAlert(
              'Email oder Passwort haben die Anforderungen nicht erfüllt',
              'Bitte versuchen Sie es mit anderen Werten',
              ['OK']
            );
          }
        });
    }
  }

  /**
   * DE:
   * Nutzt das Plugin @codetrix-studio/capacitor-google-auth um einen Nutzer mithilfe der Google Authentifizierung auf
   * Android Geräten einzuloggen, oder zu registrieren.
   * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
   * angelegt.
   * EN:
   * Uses the @codetrix-studio/capacitor-google-auth plugin to log in or register a user on Android devices using Google authentication.
   * Android devices using Google authentication.
   * Then, using this.checkForNewUser(userCredential, userType), a new user is created in the database (if it does not already exist).
   * is created.
   *
   * @example this.GoogleMobileAuth(2)
   *
   * @param userType
   */
  async googleMobileAuth(userType) {
    await GoogleAuth.signIn()
      .then(async (user) => {
        const credential = await firebase.auth.GoogleAuthProvider.credential(
          user.authentication.idToken
        );
        await this.afAuth
          .signInWithCredential(credential)
          .then((userCredential) => {
            this.checkForNewUser(userCredential, userType);
          })
          .catch((error) => {
            console.log('firebase error', error);
          });
      })
      .catch((error) => {
        console.log('google error', error);
      });
  }

  /**
   * DE:
   * Ruft this.AuthLogin auf um das Popup für die Google Anmeldung zu initialisieren.
   * EN:
   * Calls this.AuthLogin to initialize the Google login popup.
   *
   * @example this.GoogleAuth(2)
   *
   * @param userType
   */
  googleAuth(userType) {
    return this.authLogin(new GoogleAuthProvider(), userType);
  }

  /**
   * DE:
   * Ruft this.AuthLogin auf um das Popup für die Facebook Anmeldung zu initialisieren.
   * EN:
   * Calls this.AuthLogin to initialize the Facebook login popup.
   *
   * @example this.FacebookAuth(2)
   *
   * @param userType
   */
  facebookAuth(userType) {
    //TODO: MOBILE FUNKTIONIERT NUR MIT URLS
    //Dieses Tutorial benutzen:
    //https://enappd.com/blog/facebook-login-in-capacitor-apps-with-ionic-angular/128/
    //clientid 6ea09df3fcf00feb02b55194fc03d8c6
    //TODO: Nutzungsbedingungen URL & URL zur Datenrichtlinie bei Meta Developer hinzufügen
    //https://www.devopsschool.com/blog/error-app-not-set-up-this-app-is-still-in-development-mode-and-you-dont-have-access-to-it/#:~:text=returns%20this%20error-,App%20not%20set%20up%3A%20This%20app%20is%20still%20in%20development,t%20login%20with%20their%20facebook.
    return this.authLogin(new FacebookAuthProvider(), userType);
  }

  /**
   * DE:
   * Öffnet mithilfe des Firebase Authetifizierungsservices ein Popup mit dem im Service angegeben Provider auf.
   * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
   * angelegt.
   * EN:
   * Opens a popup with the provider specified in the service using the Firebase authentication service.
   * Then, using this.checkForNewUser(userCredential, userType), a new user is created in the database (if it does not already exist).
   *
   * @example this.AuthLogin(new FacebookAuthProvider(), 2)
   *
   * @param provider
   * @param userType
   */
  // Auth logic to run auth providers
  authLogin(provider, userType) {
    provider.setCustomParameters({
      display: 'popup'
    });
    return this.afAuth
      .signInWithPopup(provider)
      .then((userCredential) => {
        this.checkForNewUser(userCredential, userType);
        this.alertService.basicAlert('Glückwunsch!', 'SIe haben sich erfolgreich eingeloggt', [
          'OK'
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * DE:
   * Überprüft ob der Nutzer sich zum ersten Mal einloggt, falls ja wird ein neuer Eintrag in der Datenbank
   * erzeugt und der Nutzer wird zur URL ./edit-user weitergeleitet, um das Nutzerprofil zu erstellen.
   * Falls es sich um keinen neuen Nutzer handelt, wird dieser zur URL ./event-list weitergeleitet.
   * EN:
   * Checks if the user is logging in for the first time, if so, a new entry is created in the database
   * and the user will be redirected to the URL ./edit-user to create the user profile.
   * If it is not a new user, the user will be redirected to the URL ./event-list.
   *
   * @example this.CheckForNewUser(Daten des Typen firebase.auth.UserCredential, 1)
   *
   * @param userCredential
   * @param userType
   */
  async checkForNewUser(userCredential, userType) {
    if (userCredential.additionalUserInfo.isNewUser) {
      await this.userDataService.createNewUserInFirestore(userCredential, userType);
      await this.router.navigate(['edit-user']);
    } else {
      await this.router.navigate(['event-list']);
    }
  }

  /**
   * DE:
   * Löst die Subscription für die Nutzerdaten und entfernt das Token, sowie den Nutzer aus dem lokalen Speicher.
   * Daraufhin wird der Nutzer zur ./login Seite weitergeleitet.
   * EN:
   * Releases the subscription for the user data and removes the token and the user from the local storage.
   * The user is then redirected to the ./login page.
   */
  signOut() {
    this.afAuth
      .signOut()
      .then(() => {
        this.refreshUserDataSub.unsubscribe();
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  /** FOR APP MODULE INIT
   *  DE: dient dazu um den Authentifizierungsservice beim erstmaligen laden der Seite direkt zu initialisieren.
   *  EN: is used to initialize the authentication service directly when the page is loaded for the first time.
   * */
  initalizeService() {
    console.log('Authentification Serivce successfully initialized');
  }
}
