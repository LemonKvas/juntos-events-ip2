import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { FriendlistPage } from 'src/app/pages/friendlist/friendlist.page';
import { AuthService } from 'src/app/services/auth.service';

/**
 * DE:
 * Service der genutzt wird, um alle Methoden bezüglich von Freunden der Nutzer zu gruppieren.
 * Beispielsweise Freundschaftsanfragen schicken, Freunde hinzuzufügen und löschen.
 * EN:
 * Service that is used to group all methods related to users' friends.
 * For example, sending friend requests, adding and deleting friends.
 */
@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendlistModal;
  private readonly userCollection: AngularFirestoreCollection;

  /**
   * DE:
   * Setzt die User Collection Referenz.
   * EN:
   * Sets the user collection reference.
   * @param afs
   * @param userDataService
   * @param modalController
   * @param authService
   */
  constructor(
    private afs: AngularFirestore,
    private userDataService: UserDataService,
    public modalController: ModalController,
    private authService: AuthService
  ) {
    this.userCollection = this.afs.collection(`user`);
  }

  /**
   * DE:
   * Überprüft, ob die im Parameter eingegebene User ID in der Freundesliste des derzeit eingeloggte Nutzers
   * ist
   * EN:
   * Checks whether the user ID entered in the parameter is in the friends list of the currently logged in user
   * @param potentialFriendId
   */
  async isUserFriendWith(potentialFriendId) {
    try {
      return await this.userDataService
        .getCurrentUser()
        .then((userData) => userData.friends.includes(potentialFriendId));
    } catch (e) {
      return false;
    }
  }

  /**
   * DE:
   * Die User ID, die in den Parametern eingegeben wird, wird in der Datenbank zum Array friends
   * in den Nutzerdaten eingefügt.
   * EN:
   * The user ID entered in the parameters will be added in the database to the friends
   * array in the user data.
   * @param organizerIdToFollow
   */
  async followOrganizer(organizerIdToFollow) {
    try {
      const currentUserID = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserID).update({
        friends: arrayUnion(organizerIdToFollow)
      });
      return 'followed successfully';
    } catch (e) {
      return 'something went wrong';
    }
  }

  /**
   * DE:
   * Löscht die mitgegebene Nutzer Id aus dem Array friends der Nutzerdaten in der Datenbank.
   * EN:
   * Deletes the given user id from the friends array of user data in the database.
   * @param organizerIdToUnfollow
   */
  async unfollowOrganizer(organizerIdToUnfollow) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(organizerIdToUnfollow)
      });
      return 'successfully removed';
    } catch (e) {
      return 'something went wrong';
    }
  }

  /**
   * DE:
   * Löscht die in den Parametern eingegeben Nutzer ID aus dem friends Array des zurzeit eingeloggten
   * Nutzers. Danach wird die Nutzer ID des derzeit eingeloggten Nutzers aus dem friends Array des
   * Nutzers mit der in den Parametern eingegebenen Nutzer ID gelöscht.
   * EN:
   * Deletes the user ID entered in the parameters from the friends array of the currently logged in user.
   * user. After that, the user ID of the currently logged in user is deleted from the friends array of the
   * user with the user ID entered in the parameters.
   * @param userIdToUnfriend
   */
  async unfriendUser(userIdToUnfriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(userIdToUnfriend)
      });
      await this.userCollection.doc(userIdToUnfriend).update({
        friends: arrayRemove(currentUserId)
      });
      return 'successfully removed';
    } catch (e) {
      return 'something went wrong';
    }
  }

  /**
   * DE:
   * Fügt die eingegebene Nutzer ID zu dem friends Array des derzeit eingeloggten Nutzers in der Datenbank hinzu.
   * Umgekehrt wird die Nutzer ID des eingeloggten Nutzers zum friends Array des Nutzers mit der eingegeben ID
   * hinzugefügt.
   * EN:
   * Adds the entered user ID to the friends array of the currently logged in user in the database.
   * Conversely, the user ID of the logged in user is added to the friends array of the user with the entered ID.
   * @param userIdToBefriend
   */
  async befriendUser(userIdToBefriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayUnion(userIdToBefriend)
      });
      await this.userCollection.doc(userIdToBefriend).update({
        friends: arrayUnion(currentUserId)
      });
      return 'successfully added';
    } catch (e) {
      return 'something went wrong';
    }
  }

  /**
   * DE:
   * Öffnet die Komponente Friendlistpage als Modal und gibt die Parameter ID des derzeit eingeloggten Nutzers,
   * die Liste der Ids aller Freunde des Nutzers und ein Boolean ob der Nutzer eingeloggt ist mit.
   * Die Modal Referenz wird in der Variable friendlistModal gespeichert.
   * EN:
   * Opens the Friendlistpage component as a modal and returns the parameter ID of the currently logged in user,
   * the list of id's of all friends of the user and a boolean if the user is logged in.
   * The modal reference is stored in the friendlistModal variable.
   * @param friendIds
   */
  async openFriendlistModal(friendIds: any[]) {
    const currentUserId = await this.userDataService.getCurrentUserID();
    const isLoggedIn = this.authService.isLoggedIn();
    const modal = await this.modalController.create({
      component: FriendlistPage,
      cssClass: 'fullscreen',
      componentProps: {
        loggedInUserId: currentUserId,
        friendIds,
        isLoggedIn
      }
    });
    this.friendlistModal = modal;
    await modal.present();
  }

  /**
   * DE:
   * Schließt das Modal, welches in der Variable friendslistModal referenziert ist und setzt daraufhin diese
   * Variable null.
   * EN:
   * Closes the modal referenced in the friendslistModal variable and sets this variable to null.
   */
  dismissModal() {
    if (this.friendlistModal) {
      this.friendlistModal.dismiss().then(() => {
        this.friendlistModal = null;
      });
    }
  }
}
