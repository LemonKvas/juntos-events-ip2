import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {UserDataService} from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import {Router} from '@angular/router';
import {AlertService} from 'src/app/services/alert.service';
import {Subscription} from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private user: User;
    private token;
    refreshUserDataSub: Subscription;

    /**
     * Constructor des Auth Services "abonniert" den Authentifizierungsstatus von Firebase.
     * Sobald sich ein Nutzer einloggt, wird diese "Subscribtion" aktiviert und der aktuelle Nutzer
     * wird im lokalen Speicher gesichert.
     * Falls der eingeloggte Nutzer sich nicht anonym eingeloggt hat, wird die Methode "refreshUserData"
     * aktiviert, damit die Nutzerdaten bei Änderungen stets aktuell bleiben.
     *
     * @param afAuth
     * @param userDataService
     * @param router
     * @param alertService
     *
     * @returns The processed target number
     */
    constructor(private afAuth: AngularFireAuth, private userDataService: UserDataService, private router: Router, public alertService: AlertService) {
        this.afAuth.authState.subscribe(async firebaseUser => {
                this.user = undefined;
                this.token = undefined;
                if(firebaseUser && !firebaseUser.multiFactor["user"].isAnonymous){
                    this.refreshUserData(firebaseUser.uid);
                    this.token = firebaseUser.getIdTokenResult(false);
                    localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
                } else {
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
                this.refreshUserDataSub.unsubscribe();
                }
            }
        );
    }

    /**
     * Refresh User Data
     * Falls sich die Daten des Nutzers in der Datenbank ändern, werden diese im lokalen Speicher aktualisiert.
     *
     * @example this.refreshUserData(grbIa6fmpL0uJu8WFuEL)
     *
     * @param userId: string
     */
    refreshUserData(userId){
        this.refreshUserDataSub = this.userDataService.getUserById_Observable(userId).subscribe((userData)=>{
            if(userData){
                this.user = userData as unknown as User;
                localStorage.setItem('user', JSON.stringify(this.user));
            }
        });
    }

    /**
     * True falls Nutzer eingeloggt ist, false falls nicht.
     *
     * @example if(this.isLoggedIn) ...
     *
     */
    isLoggedIn() {
        return this.user !== undefined;
    }

    /**
     * Vergleicht den Parameter Wert und die Recht des Nutzers.
     * Gibt true zurück, wenn die Rechte des Nutzers kleiner oder gleich.
     *
     * @example const isUserAllowed = this.hasRole(2);
     *
     * @param role: string | number
     */
    hasRole(role){
        //returns true if user role equivalent or smaller
        return Number(role) >= Number(JSON.parse(localStorage.getItem('user')).rights);
    }

    /**
     * Gibt true zurück falls die angegebenen Parameter weder undefined sind, die e-Mail mindestens 4 Zeichen lang ist,
     * ein @ enthält und das Passwort mindestens 6 Zeichen lang ist. Andernfalls wird false zurück gegeben.
     *
     * @example if(this.checkEmailAndPassword(juntosATjuntos.de, sicheresPasswort)) ...
     *
     * @param email
     * @param password
     */
    checkEmailAndPassword(email, password) {
        return email != undefined && password != undefined
            && email.trim().length > 3 && email.includes('@')
            && password.trim().length > 5;
    }

    /**
     * Nutzt den Firebase Authentifizierungsservice um einen Nutzer anonym einzuloggen,
     * daraufhin wird der Nutzer zur Url ./event-list weitergeleitet.
     *
     */
    AnonymousAuth(){
        this.afAuth.signInAnonymously()
            .then(userCredentials => {
                this.router.navigate(['event-list']);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    /**
     * Nutzt den Firebase Authentifizierungsservice um einen Nutzer mit Email und Passwort einzuloggen.
     * Vorher wird mit hilfe von this.checkEmailAndPasswort(email, password) überprüft, ob die Anforderungen
     * an Email und Passwort erfüllt sind.
     * daraufhin wird der Nutzer zur Url ./event-list weitergeleitet.
     *
     * @example this.EmailLogin(testATtest.de, sicheresPasswort)
     *
     * @param email
     * @param password
     */
    EmailLogin(email, password) {
        if (this.checkEmailAndPassword(email, password)) {
            this.afAuth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    this.router.navigate(['event-list']);
                })
                .catch((error) => {
                    console.log(error.message);
                  this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
                });
            return;
        }
        console.log('Email oder Passwort haben die Anforderungen nicht erfüllt');
        //TODO: alerts einfügen statt console logs
    }

    /**
     * Nutzt den Firebase Authentifizierungsservice um einen Nutzer mit Email und Passwort zu registrieren.
     * Vorher wird mit hilfe von this.checkEmailAndPasswort(email, password) überprüft, ob die Anforderungen
     * an Email und Passwort erfüllt sind.
     * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
     * angelegt.
     *
     * @example this.EmailRegister(testATtest.de, sicheresPasswort)
     *
     * @param userType
     * @param email
     * @param password
     */
    EmailRegister(userType, email, password){
        if (this.checkEmailAndPassword){
            return this.afAuth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    this.CheckForNewUser(userCredential, userType);
                })
                .catch((error) => {
                    if(String(error.code).includes('email-already-in-use')) {this.EmailLogin(email, password);}
                    else {
                      //TODO
                      this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
                    }
                });
        }
    }

    /**
     * Nutzt das Plugin @codetrix-studio/capacitor-google-auth um einen Nutzer mithilfe der Google Authentifizierung auf
     * Android Geräten einzuloggen, oder zu registrieren.
     * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
     * angelegt.
     *
     * @example this.GoogleMobileAuth(2)
     *
     * @param userType
     */
    async GoogleMobileAuth(userType) {
        await GoogleAuth.signIn().then(async (user) => {
            const credential = await firebase.auth.GoogleAuthProvider.credential(user.authentication.idToken);
            await this.afAuth.signInWithCredential(credential)
                .then((userCredential)=>{
                    this.CheckForNewUser(userCredential, userType);
                })
                .catch((error) => {
                    console.log('firebase error', error);
                });
        }).catch((error) =>{
            console.log('google error', error);
        });
    }



    /**
     * Ruft this.AuthLogin auf um das Popup für die Google Anmeldung zu initialisieren.
     *
     * @example this.GoogleAuth(2)
     *
     * @param userType
     */
    GoogleAuth(userType) {
        return this.AuthLogin(new GoogleAuthProvider(), userType);
    }

    /**
     * Ruft this.AuthLogin auf um das Popup für die Facebook Anmeldung zu initialisieren.
     *
     * @example this.FacebookAuth(2)
     *
     * @param userType
     */
    FacebookAuth(userType) {
        //TODO: MOBILE FUNKTIONIERT NUR MIT URLS
        //Dieses Tutorial benutzen:
        //https://enappd.com/blog/facebook-login-in-capacitor-apps-with-ionic-angular/128/
        //clientid 6ea09df3fcf00feb02b55194fc03d8c6
        //TODO: Nutzungsbedingungen URL & URL zur Datenrichtlinie bei Meta Developer hinzufügen
        //https://www.devopsschool.com/blog/error-app-not-set-up-this-app-is-still-in-development-mode-and-you-dont-have-access-to-it/#:~:text=returns%20this%20error-,App%20not%20set%20up%3A%20This%20app%20is%20still%20in%20development,t%20login%20with%20their%20facebook.
        return this.AuthLogin(new FacebookAuthProvider(), userType);
    }


    /**
     * Öffnet mithilfe des Firebase Authetifizierungsservices ein Popup mit dem im Service angegeben Provider auf.
     * Daraufhin wird mithilfe von this.checkForNewUser(userCredential, userType) ein neuer Nutzer in der Datenbank (falls nicht bereits vorhanden)
     * angelegt.
     *
     * @example this.AuthLogin(new FacebookAuthProvider(), 2)
     *
     * @param provider
     * @param userType
     */
    // Auth logic to run auth providers
    AuthLogin(provider, userType) {
        provider.setCustomParameters({
            display: 'popup'
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

    /**
     * Überprüft ob der Nutzer sich zum ersten Mal einloggt, falls ja wird ein neuer Eintrag in der Datenbank
     * erzeugt und der Nutzer wird zur URL ./edit-user weitergeleitet, um das Nutzerprofil zu erstellen.
     * Falls es sich um keinen neuen Nutzer handelt, wird dieser zur URL ./event-list weitergeleitet.
     *
     * @example this.CheckForNewUser(Daten des Typen firebase.auth.UserCredential, 1)
     *
     * @param userCredential
     * @param userType
     */
    async CheckForNewUser(userCredential, userType){
        if(userCredential.additionalUserInfo.isNewUser){
            await this.userDataService.createNewUserInFirestore(userCredential, userType);
            await this.router.navigate(['edit-user']);
        } else {
            await this.router.navigate(['event-list']);
        }
    }

    /**
     * Löst die Subscription für die Nutzerdaten und entfernt das Token, sowie den Nutzer aus dem lokalen Speicher.
     * Daraufhin wird der Nutzer zur ./login Seite weitergeleitet.
     *
     *
     */
    signOut() {
        this.afAuth.signOut().then(() => {
          this.refreshUserDataSub.unsubscribe();
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigate(['login']);
        }).catch((e) => {
          console.log(e);
        });
    }

    /** FOR APP MODULE INIT
     *  - dient dazu um den Authentifizierungsservice beim erstmaligen laden der Seite direkt zu initialisieren.
     * */
    initalizeService(){
        console.log("Authentification Serivce successfully initialized");
    }

}
