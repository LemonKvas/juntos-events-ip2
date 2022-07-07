import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import User from '../models/classes/user';
import {getDoc} from 'firebase/firestore';
import UserCredential = firebase.auth.UserCredential;
import {Router} from '@angular/router';
import {AlertService} from 'src/app/services/alert.service';
import {arrayUnion} from '@angular/fire/firestore';
import {Feedback} from "../models/interfaces/feedback";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private readonly userCollection!: AngularFirestoreCollection;

    constructor(
        private afs: AngularFirestore,
        private router: Router,
        public alertService: AlertService
    ) {
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
        } catch (e) {
            console.log(e.message);
            return undefined;
        }
    }

    /**
     * DE:
     * Gibt das durchschnittliche Rating des Users zurück
     * EN:
     * Returns the average rating of the user
     * @param {string} userId
     *
     * @returns the average rating of the user or false if the user does not have a single rating
     */
    async getRating(userId: string): Promise<number | boolean> {
        const docRef = this.userCollection.doc(userId).ref;
        const docSnap = await getDoc(docRef);
        const feedbacks = <Feedback[]>docSnap.data().feedback

        if (!feedbacks) {
            return <boolean>false
        }

        let sum: number = 0;
        for (let idx in feedbacks) {
            sum += feedbacks[idx].rating;
        }

        let average: any = sum / feedbacks.length;
        average = parseFloat(average).toFixed(2);

        return <number>average

    }

    /**
     * DE:
     * Schaut nach, ob der User das Event bereits bewertet hat
     * EN:
     * Sees if the user has already given feedback for this event
     * @param {string} creatorId
     * @param {string} eventId
     *
     * @returns Promise<boolean | Feedback>
     */
    async hasUserAlreadyRated(creatorId: string, eventId: string): Promise<boolean | Feedback> {
        const currentUserId: string = await this.getCurrentUserID();

        const docRef = this.userCollection.doc(creatorId).ref;
        const docSnap = await getDoc(docRef);
        const feedbacks = <Feedback[]>docSnap.data().feedback

        // the creator does not have rating -> user has not rated him
        if (!feedbacks) {
            return <boolean>false
        }

        for (let idx in feedbacks) {
            // User already rated this event
            if (feedbacks[idx].userId == currentUserId && feedbacks[idx].eventId == eventId)
                    return <Feedback>feedbacks[idx]
                }
        // user has not rated the event
        return <boolean>false
    }

    /*** CRUD Firestore User ***/

    async createNewUserInFirestore(userCredential: UserCredential | any, userType: string | number) {
        let user: User;
        if (userCredential.additionalUserInfo.providerId == 'google.com') {
            user = new User(
                String(userCredential.user.uid),
                userCredential.additionalUserInfo.profile.email || 'Please contact Juntos',
                Number(userType),
                userCredential.additionalUserInfo.profile.verified_email || false,
                undefined,
                userCredential.additionalUserInfo.profile.given_name || undefined,
                userCredential.additionalUserInfo.profile.family_name || undefined,
                undefined,
                undefined,
                undefined,
                userCredential.additionalUserInfo.profile.name || undefined,
                undefined,
                userCredential.additionalUserInfo.profile.picture || undefined
            );
        } else {
            user = new User(
                String(userCredential.user.uid),
                userCredential.user._delegate.email || 'Please contact Juntos',
                Number(userType)
            );
        }
        const data = JSON.parse(JSON.stringify(user));
        await this.userCollection
            .doc(userCredential.user.uid)
            .set(data)
            .catch((err) => console.log(err));
    }

    async updateCurrentUser(data: any) {
        const db = firebase.firestore();

        const user = await this.getCurrentUser();
        const userId = user.userId;

        db.collection('user')
            .doc(userId)
            .update(data)
            .then((res) => {
            })
            .catch((e) => {
                this.alertService.basicAlert(
                    'Bearbeiten des Profils fehlgeschlagen',
                    'Bitte versuchen Sie es später noch mal',
                    ['OK']
                );
                console.log('error');
                console.log(e);
            });
    }

    async addRegisteredEvent(event: any) {
        const db = firebase.firestore().collection('user');
        const user = await this.getCurrentUser();
        const userId = user.userId;
        await db.doc(userId).update({registeredEvents: arrayUnion(event)});
    }

    async addCreatedEvent(event: any) {
        const db = firebase.firestore().collection('user');
        const user = await this.getCurrentUser();
        const userId = user.userId;
        await db.doc(userId).update({createdEvents: arrayUnion(event)});
    }

    /**
     * DE:
     * Speichert das gegebene Feedback in den gegebenen User
     * EN:
     * Saves the given event in the given user
     * @param {feedback} feedback
     * @param {string} userId
     *
     * @example
     * await this.userService.addFeedback(newFeedback, this.feedBackEvent.creatorId)
     */

    async addFeedback(feedback: Feedback, userId: string) {
        const db = firebase.firestore().collection('user');
        await db.doc(userId).update({feedback: arrayUnion(feedback)});
    }
}
